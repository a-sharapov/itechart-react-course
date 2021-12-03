import React, {
  Fragment, 
  useState,
  useEffect
} from 'react'

import './CardsOutWrapper.css'

import { CardTpl } from '../../components/CardTpl'
import { CardCreationForm } from '../CardCreationForm'

import { Api } from '../../Api/Api'

export const CardsOutWrapper = (props) => {
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
    Api.deleteUser({append: id}).then(setUserCards(userCards.filter(card => card.id !== id)))
  }

  const editUserCard = (id, newName, newDescription) => {
    Api.editUser({append: id}).then(
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

  return(
      <Fragment>
            <article className="user-card-wrapper">
            {userCards.length ? userCards.map((userCard) => {
              return <CardTpl key={userCard.id} userCard={userCard} onRemove={removeUserCard} onEdit={editUserCard} />
            }) : <p className="light">Has no items to display here...</p>}
            </article> 
            <CardCreationForm onCreate={addUserCard} />
      </Fragment>
  )

}