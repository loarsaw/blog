import React from "react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "./app/EventDashboard/EventDashboard.jsx";
import Navbar from "./app/Navbar/Navbar.jsx";
import EventDetailed from "./app/EventDetailed/EventDetailed.jsx";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={EventDashboard} />
      </Switch>

      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Navbar />
            <div className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/event/:id" component={EventDetailed} />
              </Switch>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
