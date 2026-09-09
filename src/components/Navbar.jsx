import {NavLink, Link, useLocation} from 'react-router-dom';
import {useEffect,useState} from 'react';

export default function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const {pathname}=useLocation();
 useEffect(()=>setOpen(false),[pathname]);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>22);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
 return <header className={`nav ${scrolled?'scrolled':''}`}>
   <Link to="/" className="brand" aria-label="D.M. Maçonnerie accueil"><img src="/media/logo-nav.svg" width="58" height="53" alt=""/><span>D.M.<br/>MAÇONNERIE</span></Link>
   <nav className={open?'open':''}>
    <NavLink end to="/">Accueil</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/realisations">Réalisations</NavLink><NavLink to="/a-propos">À propos</NavLink><NavLink to="/contact">Contact</NavLink>
    <a className="phone-pill" href="tel:+33677422064">☎ <span>06 77 42 20 64</span></a><NavLink className="quote-pill" to="/contact">Demander un devis</NavLink>
   </nav>
   <button className={`burger ${open?'active':''}`} aria-label="Ouvrir le menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
 </header>
}
