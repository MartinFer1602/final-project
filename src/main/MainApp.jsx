import { Routes, Route, Navigate , Link } from "react-router-dom";
import  HomePage  from './HomePage'
import  AboutPage  from './AboutPage'
import  ProductPage from './ProductPage'
import  ContactPage  from './ContactPage'



function MainApp() {

    return (
        <>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='product' element={<ProductPage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='/*' element={<Navigate to='/home' />}/>
            </Routes>

        </>
    )
}
export default MainApp