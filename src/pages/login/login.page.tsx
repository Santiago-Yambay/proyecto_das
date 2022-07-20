import { FC, useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LoginCard } from './components/loginCard.component';
import { OperatorService } from '@adapters/rest/operator.service';
import { TelephonyService } from '@adapters/rest/telephony.service';
import allActions from '@state/redux/actions';
import { ThemeContext } from '@state/context/theme.context';

export const LoginPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useHistory();
  const { setTheme } = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTheme('default');
  }, []);

  const onLoginHandler = async (credentials: any) => {
    try {
      const operator = await OperatorService.login(credentials.user, credentials.password);
      const telephony = await TelephonyService.getById(operator.telephonyId);
      dispatch(allActions.operatorActions.setCurrentOperator(operator));
      dispatch(allActions.telefonyActions.setCurrentTelefony(telephony));
      router.push('/customer');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  }

  return (
    <main>
      <video autoPlay muted loop className="fixed right-0 bottom-0 min-w-full min-h-full object-cover">
        <source src="assets/video/background.mp4" type="video/mp4"/>
      </video>
      <div className="absolute top-0 bottom-0 left-0 right-0 box-border shadow-md rounded backdrop-blur-sm ads-blur-video"></div>
      <div className='w-full h-screen flex justify-center items-center'>
        <LoginCard onLogin={onLoginHandler} errorMessage={errorMessage} />
      </div>
    </main>
  );
}
