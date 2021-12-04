import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Main.css'

export const Main = () => {
  return (
    <Fragment>
      <Link to="/cards" className="link-to-cards slabbed" replace>Go to Cards</Link>
      <div id="cover">
        <span className="cover-filter"></span>
        <video src="/video/_cover.mp4" className="cover-video" preload="auto" autoPlay loop muted playsInline></video>
      </div>
    </Fragment>
  )
}