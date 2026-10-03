import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Comparison from "./components/Comparison"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Shop from "./components/shop"



function App (){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/shop" element={<Shop/> }/>
                <Route path="/shop/:slug" element={<ProductDetail/> }/>
                <Route path="/cart" element={<Cart/> }/>
                <Route path="/checkout" element={<Checkout/> }/>
                <Route path="/comparison" element={<Comparison/> }/>
                <Route path="/contact" element={<Contact/> }/>
            </Routes> 
            <Footer/>      
        </>
    )
}

export default App
