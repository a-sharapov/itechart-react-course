import { h, html, Component, render, useState } from 'https://unpkg.com/htm/preact/standalone.module.js'
import { Header } from '/app/components/header.js'
import { Footer } from '/app/components/footer.js'
import { Cards } from '/app/states/cards.js'

const App = ({page}) => {
    return html`
        <${Header} content="iTechArt-React-Course" />
        <${Cards} />
        <${Footer} content="iTechArt" />
    `
}

render(html`<${App}/>`, document.querySelector("main#app"))