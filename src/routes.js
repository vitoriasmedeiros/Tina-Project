import Login from './components/Login'
import CadastroUsu from './components/CadastroUsu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App(){
    return(
        <Router>
            <Switch>
                <Route path="/CadastroUsu">
                    <CadastroUsu />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}
