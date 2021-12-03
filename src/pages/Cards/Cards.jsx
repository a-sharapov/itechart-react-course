import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Cards.css'

import {
  Header
} from '../../components/Header'
import {
  Footer
} from '../../components/Footer'
import {
  CardsOutWrapper
} from '../../states/CardsOutWrapper'

export const Cards = () => {
  return (
    <Fragment>
      <aside>
        <Link to="/" className="link-to-main" replace>&#11180;&nbsp;Back to Main</Link>
      </aside>
      <Header content={"iTechArt-React-Course"} />
      <CardsOutWrapper />
      <Footer content={"iTechArt"} />
    </Fragment>
  )
}