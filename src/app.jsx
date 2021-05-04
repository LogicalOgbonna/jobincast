import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './Router/AppRouter';
import { Provider } from 'react-redux'
import './theme/index.less';

import { store } from './store'
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
