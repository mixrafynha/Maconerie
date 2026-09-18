import {NavLink, Link, useLocation} from 'react-router-dom';
import {useEffect,useState} from 'react';

export default function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const [tone,setTone]=useState('dark'); const {pathname}=useLocation();
 useEffect(()=>setOpen(false),[pathname]);
 useEffect(()=>{const f=()=>{setScrolled(window.scrollY>22);const el=document.elementFromPoint(window.innerWidth/2,86)?.closest('section,footer');if(!el)return;const bg=getComputedStyle(el).backgroundColor.match(/\d+/g)?.map(Number)||[];const light=bg.length>=3&&((bg[0]*299+bg[1]*587+bg[2]*114)/1000)>170;setTone(light?'light':'dark')};f();window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);return()=>{window.removeEventListener('scroll',f);window.removeEventListener('resize',f)}},[]);
 return <header className={`nav ${scrolled?'scrolled':''} tone-${tone}`}>
   <Link to="/" className="navbar-logo" aria-label="NEODIM accueil"><img src="/media/logo-nd.png" width="54" height="54" alt=""/><span className="navbar-logo-text">NEO<span>DIM</span></span></Link>
   <nav className={open?'open':''}>
    <NavLink end to="/">Accueil</NavLink><NavLink to="/services">Nos savoir-faire</NavLink><NavLink to="/realisations">Galerie de projets</NavLink><NavLink to="/a-propos">À propos de nous</NavLink><NavLink to="/contact">Contact</NavLink>
    <NavLink className="quote-pill" to="/contact">Parler de votre projet</NavLink>
   </nav>
   <button className={`burger ${open?'active':''}`} aria-label="Ouvrir le menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
 </header>
}
