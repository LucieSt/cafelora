import './style.css';

export const Header = () => {

    const element = document.createElement('div');

    element.innerHTML = `
    <header>
        <div class="header__content container">
        <div class="site-logo"></div>

        <div class="navigation">
            <button class="nav-btn"></button>
            <nav class="rollout-nav nav-closed">
                <a href="#home">domů</a>
                <a href="#menu">menu</a>
                <a href="#gallery">galerie</a>
                <a href="#contact">kontakt</a>
            </nav>
        </div>

        </div>
    </header>
    `

    const btn = element.querySelector('.nav-btn');
    btn.addEventListener('click', () => {
        const rollout = element.querySelector('.rollout-nav');
        if (rollout.classList.contains('nav-closed')) {
            rollout.classList.remove('nav-closed');
        } else {
            rollout.classList.add('nav-closed');
        };

        rollout.addEventListener('click', () => {
            rollout.classList.add('nav-closed');
        });

    });

    return element
};