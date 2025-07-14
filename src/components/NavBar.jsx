import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function NavBar(){
    
    return(
        <BrowserRouter>
        <routes>
            <route path='/' element={<Home/>}></route>
            <route path='/Home' element={<Home/>}></route>
            <route path='/About' element={<About/>}></route>
            <route path='/Skills' element={<Skills/>}></route>
            <route path='/Projects' element={<Projects/>}></route>
            <route path='/Contact' element={<Contact/>}></route>
        </routes>
        </BrowserRouter>
    )
}