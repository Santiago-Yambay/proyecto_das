import { MouseEvent, useEffect, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { FormattedMessage } from "react-intl";
import Swal from "sweetalert2";

import "./customer-info.page.css";
import { CustomerInfo } from "./components/customer-info.component";
import { Products } from "./components/products.component";
import { Main } from "@components/layout/main.component";
import allActions from "@state/redux/actions";
import { AccountService } from "@adapters/rest";
import { productsSelector } from "@state/redux/products/products.selector";
import { LineService } from "@adapters/rest/line.service";
import { Product } from "@models/product.model";
import { Category, CategoryType } from "@models/category.model";
import {
  currentLineSelector,
  currentAccountSelector,
} from "@state/redux/lines/lines.selector";
import { categoriesSelector } from "@state/redux/products/products.selector";
import { InvoiceService } from "@adapters/rest/invoice.service";
import { EventService } from "@adapters/rest/event.service";
import { LineUtil } from "@utils/line.util";
import { CategoriesComponent } from "./components/categories.component";
import { Invoice } from "@models/invoice.model";
import { PaymentInfo } from "./components/payment-info.component";
import { InvoiceList } from "./components/invoice-list.component";
import { Event } from "@models/event.model";
import { CustomerJourney } from "./components/customer-journey.component";
import { CaseEvents } from "./components/case-events.component";
import { NotificationsUtil } from "@utils/notification.util";
import { Line } from "@models/line.model";

export const CustomerInfoPage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const { search } = useLocation();

  const { id } = useParams<any>();
  const query = new URLSearchParams(search);
  const reload = query.get("reload");

  const line: Line = useSelector(currentLineSelector);
  const account = useSelector(currentAccountSelector);
  const products = useSelector(productsSelector);
  const categories = useSelector(categoriesSelector);

  const [lineProducts, setLineProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    if (line) {
      fetchAccount();
      fetchInvoices();
      fetchEvents();
      setLoading(false);
    }
  }, [line]);

  const initPage = async () => {
    if (!line || reload === "true") {
      const lineData = await LineService.getById(id);
      dispatch(allActions.linesActions.setCurrentLine(lineData));
    }
  };

  const fetchAccount = async () => {
    if (!account || reload === "true") {
      const accountData = await AccountService.getById(line.accountId);
      dispatch(allActions.linesActions.setCurrentAccount(accountData));
    }
    setLineProducts(LineUtil.filterProductsBySubscriptions(line, products));
  };

  const fetchInvoices = async () => {
    const invoicesData = await InvoiceService.findByFilters({
      lineId: line.id,
    });
    setInvoices(invoicesData);
  };

  const fetchEvents = async () => {
    const eventsData = await EventService.findByFilters({
      lineId: line.id,
    });
    setEvents(eventsData);
  };

  const onBuyCategory = (category: Category) => {
    dispatch(allActions.productsActions.setCurrentCategory(category));
    if (category.id === CategoryType.Recarga) {
      router.push("online-recharge");
      return;
    }
    router.push(`product-selection`);
  };

  const onOpenCase = async (
    event?: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const description = event?.currentTarget.textContent || "";
    await EventService.create({
      date: new Date().toISOString(),
      description,
      lineId: line.id,
    });
    fetchEvents();
    NotificationsUtil.showInfo(`Genero un nuevo caso: ${description}`);
  };

  const onUnderConstruction = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    Swal.fire({
      icon: "info",
      title: "Option not available at the moment",
      confirmButtonColor: "#0085CA",
    });
  };

  return (
    <Main
      className="amd__customer-info-page__main"
      navigation={<CustomerInfoNav />}
    >
      {loading ? (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-2">
            <div>
              <CustomerInfo account={account} line={line} />
            </div>
            <div>
              <Products
                products={lineProducts}
                subscriptions={line.subscriptions}
              />
            </div>
          </div>

          

         
        </>
      )}
    </Main>
  );
};

const CustomerInfoNav = () => {
  const dispatch = useDispatch();
  const router = useHistory();

  const goBack = () => {
    dispatch(allActions.linesActions.removeCurrentLine());
    dispatch(allActions.linesActions.removeCurrentAccount());
    router.push("/customer");
  };

  return (
    <div className="flex items-center">
      <button onClick={goBack} className="mr-4">
        <div className="flex items-center">
          <span className="icon-arrow-left"></span>
          <p className="ml-2">
            <FormattedMessage id="label.action.back" />
          </p>
        </div>
      </button>
    </div>
  );
};
