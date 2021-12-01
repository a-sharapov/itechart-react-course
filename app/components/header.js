import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

export const Header = ({content}) => {
    return html`
            <h1 class="page-header">${content}</h1>
            `
}