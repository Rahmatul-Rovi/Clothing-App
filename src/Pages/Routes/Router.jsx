import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Main from '../../Components/Main/Main'
import Products from '../../Components/Products/Products'
import About from '../../Components/About/About'
import Mens from '../../Components/Mens/Mens'
import Womens from '../../Components/Womens/Womens'
//import { Contact } from 'lucide-react'
import Pages from '../../Components/Pages/Pages'
import AllCollection from '../../Components/AllCollection/AllCollection'
import Checkout from '../../Components/CheckOut/CheckOut'
import Contact from '../../Components/Contact/Contact'


// Home page (Main + Products)
const Home = () => (
  <>
    <Main />
    <Products />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // default route
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'men',
        element: <Mens />
      },
      {
        path: 'women',
        element: <Womens />
      },
      {
        path: '/contactUs',
        element: <Contact></Contact>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      },
      {
        path: '/allCollection',
        element: <AllCollection></AllCollection>
      },
      {
      path: '/checkout',
      element: <Checkout></Checkout>
      },
     
      {
        path: 'pages',
        element: <div className="p-20 text-center">
          
        </div>
      }
    ]
  }
])

export default router
