import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Write from "./pages/Write";

const Routes = () => {
    return(
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/detail/:id'} component={Detail}/>
            <Route exact path={'/write'} component={Write}/>
        </Switch>
    )
};


export default Routes;
