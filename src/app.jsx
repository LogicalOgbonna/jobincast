import './theme/index.scss';
import "antd/dist/antd.less";

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { setDefaultBearer } from './axios';
import AppRouter from './Router/AppRouter';
import { store } from './store';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


setDefaultBearer(localStorage["jobincast::user:token"]);
const stripePromise = loadStripe("pk_test_51JC4LCHLHgBjILKRz73CPtdRP01reOw4639kq0fxoYs063E0l3sfZ3CXvYzVDJL6fybeqCAPA8vKtYu6Aum333Xo00aZFTk9zi");
function App() {

  return (
    <Provider store={store}>
      <HelmetProvider>
        <Elements stripe={stripePromise}>
          <AppRouter />

        </Elements>

      </HelmetProvider>
    </Provider>
  );
}

export default App;
