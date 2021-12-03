import React, {
  Fragment,
  useState
} from 'react'
import {
  useParams,
  Link
} from 'react-router-dom'

import './Card.css'

import {
  Header
} from '../../components/Header'
import {
  Footer
} from '../../components/Footer'
import {
  CardTpl
} from '../../components/CardTpl'

export const Card = () => {
  let { cardID } = useParams()

  const pageHeader = "Card [+cardID+] details".replace("[+cardID+]", cardID),
        [userCards, setUserCards] = useState([])

  return (
    <Fragment>
      <aside>
        <Link to="/cards/" className="link-to-main" replace>&#11180;&nbsp;All Cards</Link>
      </aside>
      <Header content={pageHeader} />

      <Footer content={"iTechArt"} />
    </Fragment>
  )
}