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
  const headerContent = "iTechArt-React-Course",
        footerContent = "iTechArt"

  return (
    <Fragment>
      <aside>
        <Link to="/" className="link-to-main slabbed" replace>&#11180;&nbsp;Back to Main</Link>
      </aside>
      <Header content={headerContent} />
      <CardsOutWrapper/>
      <Footer content={footerContent} />
    </Fragment>
  )
}