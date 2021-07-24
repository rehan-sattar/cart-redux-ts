import { Cart } from 'Cart';
import { Header } from 'components/Header';
import Products from 'Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
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
