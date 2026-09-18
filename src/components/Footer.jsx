import {Link} from 'react-router-dom';
export default function Footer(){return <footer className="site-footer"><div className="footer-inner">
 <div className="footer-brand"><div className="footer-logo"><img src="/media/logo-nd.png" width="88" height="88" alt="NEODIM" loading="lazy" decoding="async"/><span className="brand-wordmark"><b>NEO</b><strong>DIM</strong></span></div><p>Rénovation intérieure · construction · aménagement.<br/>Des espaces pensés pour durer.</p></div>
 <div><b>Navigation</b><Link to="/services">Services</Link><Link to="/realisations">Réalisations</Link><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link></div>
 <div><b>Contact</b><span>133 Rue de Paris</span><span>95320 Saint-Leu-la-Forêt</span><span>Fiche Google NEODIM</span></div>
 <div className="footer-cta"><span>Un nouvel espace ?</span><strong>Imaginons-le.</strong><Link to="/contact">Parler de votre projet →</Link></div>
 </div><div className="footer-bottom">© 2026 NEODIM — Tous droits réservés.</div></footer>}
