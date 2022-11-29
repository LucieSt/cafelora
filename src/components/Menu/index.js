import './style.css';

import { Drink } from './components/Drink/index.js';

export const Menu = () => {

    const element = document.createElement('div');

    element.innerHTML = `
    <section class="menu">
        <div class="container">
            <h2 id="menu">Naše nabídka</h2>
            <p class="menu-intro">
                Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>

            <div class="drinks-list"></div>
            
            <div class="order-detail">
                <a href="/objednavka">Detail objednávky</a>
            </div>
        </div>
    </section>
    `

    const drinkProps = {
        id: 'romano',
        name: 'Romano',
        ordered: false,
        image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
        layers: [
          {
            color: '#fbdf5b',
            label: 'citrón',
          },
          {
            color: '#613916',
            label: 'espresso',
          },
        ]
    };

    const drinkList = element.querySelector('.drinks-list');
    drinkList.append(Drink(drinkProps));


    
   

    return element
};