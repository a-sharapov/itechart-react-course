import { html, useState } from 'https://unpkg.com/htm/preact/standalone.module.js';
import { Card } from '/app/components/card.js'
import { Form } from '/app/states/form.js'

export const Cards = () => {
    const [userCards, setUserCards] = useState([
        {id: 1, name: "John Dow", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."},
        {id: 2, name: "Boris Johnson", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "},
        {id: 3, name: "Grzegorz Brzeczyszczykiewicz", description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "}
    ])

    function addUserCard(name, description) {
        setUserCards(userCards.concat([{
            id: Date.now(),
            name,
            description
        }]))
    }

    function removeUserCard(id) {
        setUserCards(userCards.filter(card => card.id !== id))
    }

    function editUserCard(id, newName, newDescription) {
        setUserCards(
            userCards.map(card => {
                if (card.id === id) {
                    card.name = newName
                    card.description = newDescription
                }
                return card
            })
        )
    }

    return html`
            <article class="user-card-wrapper">
            ${userCards.length ? userCards.map((userCard) => {
                return (html`
                <${Card} userCard=${userCard} onRemove=${removeUserCard} onEdit=${editUserCard} />
                `)
            }) : html`<p class="light">Has no items to display here...</p>`}
            </article>
            <${Form} onCreate=${addUserCard}/>
        `
}