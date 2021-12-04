import React, {
  Fragment, 
  useState, 
  useEffect
} from 'react'
import {
  NavLink
} from 'react-router-dom'

import './Tabs.css'

import { Api } from '../../api/Api'

export const Tabs = ({
  removeMain,
  tabs}) => {
  const [tabItems, setTabItems] = useState([])
  
  useEffect(() => {
    let isMounted = true
    if (!tabs) {
    Api.getUsers().then(newTabItems => {
        if (isMounted) {
        let nUC = newTabItems.map(newTabItem => {
          return {
            id: newTabItem.id,
            name: newTabItem.name
          }
        })
        setTabItems(nUC)
        }
      })
    } else {
      setTabItems(tabs)
    }

      return () => {
        isMounted = false
      }
  }, [tabs])

  return (
    <Fragment>
      <nav data-role="navigation-tabs">
        {!removeMain? <NavLink 
                  key="main" 
                  to="/cards/" 
                  className="nav-link">
                  All Cards
                  </NavLink> : void -1
        }
        {tabItems.length ? tabItems.map((tabItem) => { 
          return <NavLink 
                      key={tabItem.id} 
                      to={"/cards/" + tabItem.id} 
                      className="nav-link" >
                        Card {tabItem.id}
                  </NavLink> })
        : void -1 }
      </nav>
    </Fragment>
  )
}