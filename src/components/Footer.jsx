import {Link} from 'react-router-dom';
export default function Footer(){return <footer className="site-footer"><div className="footer-inner">
 <div className="footer-brand"><div className="footer-logo"><img src="/media/logo-white.png" alt=""/><span>D.M. MAÇONNERIE</span></div><p>Maçonnerie générale · rénovation · aménagement.<br/>Un travail soigné pour des ouvrages durables.</p></div>
 <div><b>Navigation</b><Link to="/services">Services</Link><Link to="/realisations">Réalisations</Link><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link></div>
 <div><b>Contact</b><a href="tel:+33677422064">06 77 42 20 64</a><a href="https://www.google.com/maps/search/?api=1&query=8%20impasse%20la%20Capelle%2017700%20Saint-Pierre-d%27Amilly" target="_blank" rel="noreferrer">Saint-Pierre-d'Amilly (17)</a><span>Charente-Maritime & alentours</span></div>
 <div className="footer-cta"><span>Un projet ?</span><strong>Parlons-en.</strong><Link to="/contact">Demander un devis →</Link></div>
 </div><div className="footer-bottom">© 2026 D.M. Maçonnerie — Tous droits réservés.</div></footer>}
