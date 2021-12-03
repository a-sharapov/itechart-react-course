import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'

import {
  Main
} from '../../pages/Main'
import {
  Cards
} from '../../pages/Cards'
 import {
   Card
} from '../../pages/Card'
import {
  NotFound
} from '../../pages/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/main"} />} />
        <Route path={"/main"} exact element={<Main />} />
        <Route path={"/cards"} element={<Cards />} />
        <Route path={"/cards/:cardID"} element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
