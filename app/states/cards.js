import { html, useState } from 'https://unpkg.com/htm/preact/standalone.module.js';
import { Card } from '/app/components/card.js'

export const Cards = () => {
    const [userCards, setUserCards] = useState([
        {name: "John Dow", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."},
        {name: "Boris Johnson", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "},
        {name: "Grzegorz Brzeczyszczykiewicz", description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "}
    ])

    return html`
            <article class="user-card-wrapper">
            ${userCards.map((userCard) => {
                return (html`
                <${Card} userCard=${userCard} />
                `)
            })}
            </article>
        `
}