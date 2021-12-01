import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

export const Card = ({userCard}) => {
    return html`
            <section class="user-card">
                <div class="user-name-wrapper"><h3>${userCard.name}</h3></div>
                <div class="user-description-wrapper"><p>${userCard.description}</p></div>
            </section>
        `
}