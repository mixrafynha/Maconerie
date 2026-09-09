import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// Animate once per route, without scroll listeners or an animation dependency.
export default function ScrollReveal(){
  const {pathname}=useLocation();
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(preference.matches || !('IntersectionObserver' in window)) return;
    const targets=[...document.querySelectorAll(
      '.offer-card, .method-grid article, .local-grid > div, .faq-list details, .hero-inner, .page-hero > div, .detail-copy, .section-head, .service-card, .value-strip article, .about-band > div, .stats-strip > div, .gallery-item, .cta-band > div, .cta-band > a, .intro-grid > *, .service-row, .process > div, .detail-body > div, .triple-grid > img, .filter-line, .masonry-gallery figure, .story-grid > div, .principles article, .contact-grid > *, .footer-inner > div'
    )];
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(({target,isIntersecting})=>{
        if(!isIntersecting) return;
        target.classList.add('is-revealed');
        observer.unobserve(target);
      });
    },{threshold:0.06});
    targets.forEach((target,index)=>{
      target.classList.add('scroll-reveal');
      target.style.setProperty('--reveal-direction',index%2 ? '1' : '-1');
      observer.observe(target);
    });
    const showAll=()=>{
      if(preference.matches){observer.disconnect();targets.forEach(target=>target.classList.add('is-revealed'));}
    };
    preference.addEventListener('change',showAll);
    return ()=>{
      observer.disconnect();
      preference.removeEventListener('change',showAll);
      targets.forEach(target=>{
        target.classList.remove('scroll-reveal','is-revealed');
        target.style.removeProperty('--reveal-direction');
      });
    };
  },[pathname]);
  return null;
}

