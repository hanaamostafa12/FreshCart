import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Products from './Componets/Products/Products'
import Brands from './Componets/Brands/Brands'
import Home from './Componets/Home/Home'
import Categories from './Componets/Categories/Categories';
import Wishlist from './Componets/Wishlist/Wishlist'
import Cart from './Componets/Cart/Cart'
// import Signout from './Componets/Signout/Signout'
import AuthLayout from './Layout/AuthLayout/AuthLayout'
import Signin from './Componets/Signin/Signin'
import Signup from './Componets/Signup/Signup';
import NotFound from './Componets/NotFound/NotFound';
import ProtectRoutes from './ProtectRoutes/ProtectRoutes'
import ProductDetails from './Componets/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify';
import { Offline } from "react-detect-offline";
import Address from './Componets/Address/Address'
import Allorders from './Componets/Allorders/Allorders'
import ForgotPassword from './Componets/ForgotPassword/ForgotPassword'
import WishContextProvider from './Componets/Context/WishContext'
import CartContextProvider from './Componets/Context/CartContext'
import CategoriesContextProvider from './Componets/Context/CategoriesContext'
import Search from './Componets/Search/Search'
import ResetPassword from './Componets/ResetPassword/ResetPassword'


  




export default function() {

  let routes = createHashRouter([
    {   path: '/', element: <MainLayout/>,children: [
        {index:true , element: <ProtectRoutes> <Home/> </ProtectRoutes>  },
         { path:'home', element:  <ProtectRoutes> <Home/> </ProtectRoutes>},
          {path:'products', element:  <ProtectRoutes> <Products/> </ProtectRoutes>},
         { path:'Categories', element: <ProtectRoutes> <Categories/> </ProtectRoutes>},
          {path: 'brands', element:  <ProtectRoutes> <Brands/> </ProtectRoutes>},
         { path:'wishlist',element: <ProtectRoutes> <Wishlist/> </ProtectRoutes>},
         { path:'cart',element: <ProtectRoutes> <Cart/> </ProtectRoutes>},
         { path:'productdetils/:id',element: <ProtectRoutes> <ProductDetails/> </ProtectRoutes>},
         { path:'address/:id',element: <ProtectRoutes> <Address/> </ProtectRoutes>},
         {path:'forgotpassword', element:<ProtectRoutes><ForgotPassword/></ProtectRoutes>},
         {path:'Search', element:<ProtectRoutes><Search/></ProtectRoutes>},
         {path:'resetPassword', element:<ProtectRoutes><ResetPassword/></ProtectRoutes>},
         { path:'allorders',element: <ProtectRoutes> <Allorders/> </ProtectRoutes>},
    
    
         
        //  { path:'Signout',element:<Signout/> },
         {
          path:'*', element:<NotFound/>
         }
      ]
    }, 
     {   path: '/', element: <AuthLayout/>,children: [
  
       { path:'signin',element:<Signin/> },
       { path:'signup',element:<Signup/> }
    ]
  }
  ])
  
  return (
    <>
   
     {/* <Online>  <RouterProvider router={routes} /></Online> */}
    <Offline>
      <div className='offline' >You Are Offline Now</div>
      </Offline> 
  
 
      <ToastContainer theme='colored' autoClose='1000'/>
    <CartContextProvider>
      <CategoriesContextProvider>
        <WishContextProvider>
        <RouterProvider router={routes}/>

        </WishContextProvider>


       

      </CategoriesContextProvider>

    </CartContextProvider>
   
    </>
  )
}
