import Footer from "./components/Footer"
import Home from "./components/Home"
import Shop from "./components/Shop"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Comparison from "./components/Comparison"
import Contact from "./components/Contact"
// import About from "./components/About"
import BlogPost from "./components/BlogPost"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
 



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
                {/* <Route path="/about" element={<About/> }/> */}
                <Route path="/blog" element={<Blog/> }/>
                <Route path="/blog/:slug" element={<BlogPost/> }/>
            </Routes> 
            <Footer/>      
        </>
    )
}

export default App
