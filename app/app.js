import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function App (props) {
    return html`<h1>itechart-react-course</h1>`;
}

render(html`<${App}/>`, document.querySelector("main#app"));