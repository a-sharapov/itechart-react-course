import React, {
  Fragment,
  useState,
  useEffect
} from 'react'
import {
  useParams,
  Navigate,
  useNavigate
} from 'react-router-dom'

import './Card.css'

import { Api } from '../../api/Api'

import {
  Header
} from '../../components/Header'
import {
  Footer
} from '../../components/Footer'
import {
  CardTpl
} from '../../components/CardTpl'
import {
  Tabs
} from '../../components/Tabs'

export const Card = () => {
  const { cardID } = useParams(),
        pageHeader = "Card [+cardID+] details".replace("[+cardID+]", cardID),
        [userCard, setUserCard] = useState([]),
        navigate = useNavigate()

  useEffect(() => {
    let isMounted = true
    Api.getUserByID({append: cardID}).then(UserCard => {
      if (Object.keys(UserCard).length === 0) {
        return navigate("/404")
      }
      if (isMounted) {
        let nCa = []
        for (const [k, v] of Object.entries(UserCard.address)) {
          (k !== "geo") ? nCa.push(k.toString().toUpperCase() + ": " + v): void -1
        }
        nCa = {
          id: UserCard.id,
          name: UserCard.name,
          description: nCa.join(", ")
        }
        setUserCard(nCa)
      } else void -1
    })

    return () => {
      isMounted = false
    }
  }, [navigate, cardID])

  const removeUserCard = (id, history) => {
    Api.deleteUser({append: id}).then(
      navigate("/cards")
    )
  }

  const editUserCard = (id, newName, newDescription) => {
    Api.editUser({append: id}).then(
      setUserCard({
        id: id,
        name: newName,
        description: newDescription
      })
    )
  }

  return (
    <Fragment>
      <Tabs removeMain={false} />
      <Header content={pageHeader} />
      {userCard? <CardTpl key={userCard.id} userCard={userCard} onRemove={removeUserCard} onEdit={editUserCard} hideMore={true} /> : <Navigate to={"/404"} />}
      <Footer content={"iTechArt"} />
    </Fragment>
  )
}