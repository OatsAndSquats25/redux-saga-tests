import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DonaldView from "../views/DonaldView";
import HilaryView from "../views/HilaryView";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/donald">Donald tweets</Link>
                        </li>
                        <li>
                            <Link to="/hilary">Hilary tweets</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/donald">
                        <DonaldView/>
                    </Route>
                    <Route path="/hilary">
                        <HilaryView/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter
