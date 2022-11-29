import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
    let { id, name, ordered, image, layers,  } = props;

    const element = document.createElement('div');
    element.classList.add('drink');

    element.innerHTML = `
    <div class="drink__product">
        <div class="drink__cup">
        <img src="${image}">
        </div>
        <div class="drink__info">
            <h3>${name}</h3>
        </div>
    </div>
    <div class="drink__controls">
        <button class="order-btn">
        Objednat
        </button>
    </div>
    `;

    const layerContainer = element.querySelector('.drink__info');
    layers.map((layer) => {
        layerContainer.append(Layer(layer));
    });

    return element;
};