import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

export const Card = ({userCard, onRemove, onEdit}) => {
    return html`
            <section class="user-card">
                <span class="modifier" data-modify="remove" title="Remove" onChange="${() => onRemove(userCard.id)}"></span>
                <span class="modifier" data-modify="edit" title="Edit" onChange="${() => onEdit(userCard.id)}"></span>
                <div class="user-name-wrapper"><h3>${userCard.name}</h3></div>
                <div class="user-description-wrapper"><p>${userCard.description}</p></div>
            </section>
        `
}