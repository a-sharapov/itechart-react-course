import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import './NotFound.css'

export const NotFound = () => {
  return (
    <Fragment>
      <h1 className="not-found-header">404</h1>
      <hr />
      <p>The page you are trying to reach does not exist, or has been moved.</p>
      <p><Link to="/" replace>You can try to start again</Link></p>
    </Fragment>
  )
}