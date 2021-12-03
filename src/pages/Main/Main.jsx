import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Main.css'

export const Main = () => {
  return (
    <Fragment>
      <Link to="/cards" className="link-to-cards" replace>Go to Cards</Link>
    </Fragment>
  )
}