import MainLayout from "../Layouts/MainLayoute";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoutes from "../Private/PrivateRoutes";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
import Error from "../Components/Error/Error";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Brands from "../Components/Brands/Brands";
import Details from "../Components/Details/Details";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cardData.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("http://localhost:5000/addProduct"),
      },
      {
        path: "/addProducts/:name",
        element: <Brands></Brands>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/addProducts/${params.name.toLocaleLowerCase()}`
          ),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("http://localhost:5000/cartProduct"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/addProduct/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
    ],
  },
]);

export default Router;
