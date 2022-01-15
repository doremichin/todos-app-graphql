import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Edit from "./pages/Edit";

const Routes = () => {
    return(
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/detail/:id'} component={Detail}/>
            <Route exact path={'/write'} component={Write}/>
            <Route exact path={'/edit/:id'} component={Edit}/>
        </Switch>
    )
};


export default Routes;
