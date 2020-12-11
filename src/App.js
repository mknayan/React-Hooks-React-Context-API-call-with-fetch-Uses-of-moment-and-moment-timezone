
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import moment from "moment";

function GetTimeNow() {
  let la_time_moment = moment().tz('America/Los_Angeles').format("YYYY-MM-DD HH:mm:ss");
  setInterval(() => {
    var elementExists = document.getElementById("timenow");
    if (elementExists) {
      la_time_moment = moment().tz('America/Los_Angeles').format("YYYY-MM-DD HH:mm:ss");
      return (<div><strong>Country Time: </strong>{la_time_moment} (Los Angeles)</div>)
    }
  }, 1000);
}

function App() {
  return (
    <div className="container">
      <div className="row wrapper">
        <div className="col-md-4">
          <p className="text-center"><b>Search with capital</b></p>
          <input type="text" name="search" className="form-control" />
        </div>
        <div className="col-md-4 left-border">
          <p className="text-center"><b>Results</b></p>
          <div className="results">
            <ul>
              <li>Bangladesh</li>
              <li>USA</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 left-border">
          <p className="text-center"><b>Country Details</b></p>
          <div className="text-center">
            Country Name: Bangladesh<br />
            Capital: Dhaka<br />
            Languages: Bengali<br />
            Flag: <img src="https://restcountries.eu/data/bgd.svg" />
          </div>
          <div>Country Time : 2020-12-11 00:37:19 (Los Angeles)</div>
          {/* <GetTimeNow /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
