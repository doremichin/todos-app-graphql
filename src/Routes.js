import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Routes = () => {
    return(
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/detail/:id'} component={Detail}/>
        </Switch>
    )
};


export default Routes;
