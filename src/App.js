import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import Layout from './pages/Layout';
import ProductDetailPage from './pages/ProductDetails';
import Cart from './pages/Cart';
import Reach from './pages/Reach';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      { 
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/product',
        element: <Product></Product>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Reach',
        element: <Reach></Reach>
      },
      {
        path: '/product/:id',
        element: <ProductDetailPage></ProductDetailPage>
      },
      {
        path: '/Add-product',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
