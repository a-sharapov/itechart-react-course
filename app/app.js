import { html, Component, render, useState } from 'https://unpkg.com/htm/preact/standalone.module.js'

const App = ({page}) => {
    //const [userCards, setUserCards] = useState([])
    const userCards = [
        {name: "John Dow", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."},
        {name: "Boris Johnson", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "},
        {name: "Grzegorz Brzeczyszczykiewicz", description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "}
    ]

    const Header = ({content}) => {
        return html`
            <h1 class="page-header">${content}</h1>
        `
    }

    const Cards = ({cards}) => {
        return html`
            <article class="user-card-wrapper">
            ${cards.map((userCard) => {
                return (html`
                <${Card} userCard=${userCard} />
                `)
            })}
            </article>
        `
    }

    const Card = ({userCard}) => {
        return html`
            <section class="user-card">
                <div class="user-name-wrapper"><h3>${userCard.name}</h3></div>
                <div class="user-description-wrapper"><p>${userCard.description}</p></div>
            </section>
        `
    }

    return html`
        <${Header} content="itechart-react-course" />
        <${Cards} cards=${userCards} />
    `
}

render(html`<${App}/>`, document.querySelector("main#app"))