
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row wrapper">
          <SearchBox />
          <SearchResults />
          <CountryDetails />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
