import React from 'react';
import App from './App'; 
import { Link ,BrowserRouter as Router,Route} from 'react-router-dom'

class Navcomponent extends React.Component{
    render(){
        return(
            <p><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Router>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/App">Home <span class="sr-only">(current)</span></Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product List</Link>
            </li>            
            <li className="nav-item">
              <Link className="nav-link" to="/sales">Survey</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </Router>
        </div>
      </nav></p>
        )
    }
}
export {Navcomponent}