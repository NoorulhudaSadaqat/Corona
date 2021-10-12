import "./App.css";
import GlobalStatisticsView from "./views/GlobalStatisticsView";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/HelperComponents/Navbar";
import CountryStatisticsView from "./views/CountryStatisticsView";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/Global" component={GlobalStatisticsView} />
          <Route exact path="/Country" component={CountryStatisticsView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
