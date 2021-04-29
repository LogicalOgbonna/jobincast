import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './Router/AppRouter';

import './theme/index.less';


function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
