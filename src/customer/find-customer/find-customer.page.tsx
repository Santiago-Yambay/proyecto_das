import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { FormattedMessage } from "react-intl";

import "./find-customer.page.css";
import allActions from "@state/redux/actions";
import { linesSelector } from "@state/redux/lines/lines.selector";
import {
  doSearchSelector,
  searchTypeSelector,
  filtersSelector,
} from "@state/redux/customer/customer.selector";
import { Main } from "@components/layout/main.component";
import { CustomerList } from "./components/customer/customer-list.component";
import { FindCustomerNav } from "./components/customer/find-customer-nav.component";
import { DiscountSection } from "./components/discount/discount-section.component";
import { NotFoundData } from "@components/layout/no-found-data.component";
import { ProductService, AccountService, LineService } from "@adapters/rest";
import { Line, LineFilterDto } from "@models/line.model";
import { NotificationsUtil } from "@utils/notification.util";
import { currentTelefonySelector } from '@state/redux/telefony/telefony.selectors';
import { ThemeContext } from '@state/context/theme.context';
import { Promotion } from "@models/telephony.model";
import { CategoryService } from "@adapters/rest/category.service";
import { categoriesSelector } from "@state/redux/products/products.selector";

export const FindCustomerPage = () => {
  const dispatch = useDispatch();
  const { setTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  const { url } = useRouteMatch();

  const router = useHistory();
  const doSearch = useSelector(doSearchSelector);
  const searchType = useSelector(searchTypeSelector);
  const filters = useSelector(filtersSelector);
  const lines = useSelector(linesSelector);
  const telefony = useSelector(currentTelefonySelector);
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    if (telefony) {
      setTheme(telefony.name.toLowerCase());
    }
  }, [telefony]);

  const initPage = async () => {
    if (!categories) {
      const categoriesData = await CategoryService.getByTelephony(telefony.id);
      dispatch(allActions.productsActions.setCategories(categoriesData));
    }

    const productsData = await ProductService.getAll();
    dispatch(allActions.productsActions.setProducts(productsData));
    setSearchFor(getSearchFor(filters));
  };

  const searchCustomers = async (formData: LineFilterDto) => {
    dispatch(allActions.customerActions.setFilters(formData));

    if (formData.user || formData.phone) {
      setLoading(true);
      const linesData = await LineService.queryByFilters({
        ...formData,
        telephonyId: telefony.id,
      });
      const accountIds = [
        ...new Set<number>(linesData.map((line: Line) => line.accountId)),
      ];
      const accountData = await AccountService.findByIds(accountIds);
      dispatch(allActions.linesActions.setLines(linesData));
      dispatch(allActions.linesActions.setAccounts(accountData));

      dispatch(allActions.customerActions.setDoSearch(true));
      setSearchFor(getSearchFor(formData));
      setLoading(false);
      if (Array.isArray(linesData) && linesData.length === 0) {
        NotificationsUtil.showInfo(`No se encontro resultados para: ${getSearchFor(formData)}`);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Ingrese la cuenta a buscar",
        confirmButtonColor: "#0085CA",
      });
    }
  };

  const changeSearchType = (event: any) => {
    dispatch(allActions.customerActions.setSearchType(event.target.value));
  };

  const selectLine = (line: any, account: any) => {
    dispatch(allActions.linesActions.setCurrentLine(line));
    dispatch(allActions.linesActions.setCurrentAccount(account));
    router.push(`${url}/${line.id}`);
  };

  const getSearchFor = (formData: any): string => {
    return Object.values(formData).join("");
  };

  return (
    <Main
      className="amd__customer-page__main"
      navigation={
        <FindCustomerNav
          onSubmit={searchCustomers}
          searchType={searchType}
          onChangeTypeSearch={changeSearchType}
          filters={filters}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && !doSearch && <DiscountSection promotion={telefony.promotion as Promotion} />}

      {!loading && doSearch && lines && (
        <CustomerList
          data={lines}
          onSelectLine={selectLine}
          filterBy={searchFor}
          categories={categories}
        />
      )}

      {doSearch && !lines && (
        <NotFoundData><FormattedMessage id="label.query.noResults" /></NotFoundData>
      )}
    </Main>
  );
};
