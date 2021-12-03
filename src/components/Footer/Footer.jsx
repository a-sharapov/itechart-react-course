import React, {
  Fragment
} from 'react'

import './Footer.css'

export const Footer = ({content}) => {
  const cYear = new Date().getFullYear()
  return (
    <Fragment>
      <footer>{cYear}&nbsp;&copy;&nbsp;{content}</footer>
    </Fragment>
  );
}
