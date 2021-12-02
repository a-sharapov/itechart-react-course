import {
  html,
  useState,
  useEffect
} from 'https://unpkg.com/htm/preact/standalone.module.js'
import { Card } from '/app/components/card.js'
import { Form } from '/app/states/form.js'
import { Api } from '/app/api/api.js'

export const Cards = () => {
    const [userCards, setUserCards] = useState([])

    useEffect(() => {
      Api.getUsers().then(newUserCards => {
          let nUC = newUserCards.map(newCard => {
            let nCa = []
            for (const [k, v] of Object.entries(newCard.address)) {
              (k !== "geo") ? nCa.push(k.toString().toUpperCase() + ": " + v): void - 1
            }
            return {
              id: newCard.id,
              name: newCard.name,
              description: nCa.join(", ")
            }
          })
          setUserCards(nUC)
        })
    }, [])

    const addUserCard = (name, description) => {
      Api.putUser().then(
        setUserCards(userCards.concat([{
          id: Date.now(),
          name,
          description
        }]))
      )
    }

    const removeUserCard = (id) => {
      Api.deleteUser().then(setUserCards(userCards.filter(card => card.id !== id)))
    }

    const editUserCard = (id, newName, newDescription) => {
      Api.editUser().then(
        setUserCards(
          userCards.map(card => {
            if (card.id === id) {
              card.name = newName
              card.description = newDescription
            }
            return card
          })
        )
      )
    }

    return html `
            <article class="user-card-wrapper">
            ${userCards.length ? userCards.map((userCard) => {
                return (html`
                        <${Card} userCard=${userCard} onRemove=${removeUserCard} onEdit=${editUserCard} />
                        `)}) : html`<p class="light">Has no items to display here...</p>`}
            </article> 
            <${Form} onCreate=${addUserCard} />`
}