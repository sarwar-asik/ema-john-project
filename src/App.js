// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./component/about/About";
import Inventory from "./component/inventory/Inventory";
import Order from "./component/order/Order";
import Shop from "./component/shopes/Shop";
import Main from "./layout/Main";
import { productsCartLoader } from "./loaders/productsCartLoader";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path:'/',
        loader:()=>fetch('products.json'),
        element:<Shop></Shop>
      },
      {
        path:'/order',
        loader:productsCartLoader,
        element:<Order></Order>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/about',
        element:<About></About>
      }
      
      ]
    }
   




  ]);



  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
