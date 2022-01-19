import { Router } from "react-router";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import {createBrowserHistory} from 'history'
import Header from "./components/Header";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App" >
        <Router history={history} >
        <Header></Header>
        <ToastContainer 
          autoClose={5000}
        ></ToastContainer>
        {renderRoutes(routes)}
      </Router>
      
    </div>
  );
}

export default App;
