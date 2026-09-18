import {Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Realisations from './pages/Realisations.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';

function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'auto'});},[pathname]);return null}
export default function App(){return <><ScrollTop/><Navbar/><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/services/:slug" element={<ServiceDetail/>}/>
  <Route path="/realisations" element={<Realisations/>}/>
  <Route path="/a-propos" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes><Footer/><ScrollReveal/></>}
