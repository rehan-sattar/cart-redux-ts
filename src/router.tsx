import { Cart } from 'Cart';
import Products from 'Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                exact
                className={'nav__item'}
                activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={'nav__item'}
                activeClassName="active">
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
