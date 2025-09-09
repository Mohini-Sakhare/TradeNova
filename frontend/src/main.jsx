import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css'
import HomePage from './landing-page/home/HomePage';
import Signup from './landing-page/signup/Signup';
import About from "./landing-page/about/Aboutpage";
import Products from './landing-page/products/ProductsPage';
import Pricing from './landing-page/pricing/PricingPage';
import Support from './landing-page/support/SupportPage';
import TopNav from './landing-page/TopNav';
import Footer from './landing-page/Footer';
import Notfound from './landing-page/Notfound';
import { UserContext } from './context/UserContext';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <UserContext>
      <TopNav/>
      <Routes>
       <Route path='/' element={<HomePage/>}></Route>
{/*        <Route path='/signup' element={<Signup/>}></Route> */}
       <Route path='/about' element={<About/>}></Route>
       <Route path='/products' element={<Products/>}></Route>
       <Route path='/pricing' element={<Pricing/>}></Route>
       <Route path='/support' element={<Support/>}></Route>
       {/* <Route path='/tradewing' element={<TradeWing/>}></Route> */}
       <Route path='*' element={<Notfound/>}></Route>
     </Routes>
     <Footer/>
   </UserContext>
  </BrowserRouter>
)
