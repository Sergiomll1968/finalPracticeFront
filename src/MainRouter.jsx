import { useRoutes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ProductList from './pages/ProductList/ProductList.jsx';
import Product from "./pages/Product/Product.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Cart from "./pages/Cart/Cart.jsx";

const MainRouter = () => {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <ProductList />,
        path: '/productlist',
      },
      {
        element: <Product />,
        path: '/product',
      },
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <Register />,
        path: '/register',
      },
      {
        element: <Cart />,
        path: '/cart',
      }
    ]
  )
}

export default MainRouter;
