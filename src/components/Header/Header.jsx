import React, {Fragment} from 'react'

import './Header.css'

export const Header = ({content}) => {
  return (
    <Fragment>
      <header>
        <h1 className="page-header">{content}</h1>
      </header>
    </Fragment>
  );
}
