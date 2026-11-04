import { lenis } from './lenis';
import { initHeroMouse } from './hero-mouse';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis
    lenis;

    // Initialize Hero Mouse Parallax
    const hero = document.getElementById('hero');
    if (hero) {
        initHeroMouse(hero);
    }
});
