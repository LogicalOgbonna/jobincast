import './theme/index.less';

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { setDefaultBearer } from './axios';
import AppRouter from './Router/AppRouter';
import { store } from './store';

setDefaultBearer(localStorage["jobincast::user:token"]);
function App() {
  
  return (
    <Provider store={store}>
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
