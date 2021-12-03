import React, {
  Fragment, useState
} from 'react'

import './CardCreationForm.css'

export const CardCreationForm = ({onCreate}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [expanded, setExpanded] = useState("button")

  const expandHandler = (currentState) => {
    if (currentState === "button") {
      setExpanded("form")
    } else {
      setExpanded("button")
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    onCreate(name, description)
    setName("")
    setDescription("")
    setExpanded("button")
  }

  return (
    <Fragment>
      <div className="form-wrapper" data-visibility={expanded.toString()}>
        <span className="button form-caller" onClick={()=> expandHandler(expanded.toString())}>Append new user-card</span>
        <form id="form" method="PUT" onSubmit={(event)=> submitHandler(event)}>
          <h3>Create new card</h3>
          <p>If you are sure to make changes - please click to <b>Submit</b> button</p>
          <hr />
          <label data-width="full">
            <input type="text" required name="name" placeholder="Person name" value={name} onChange={(event)=>
            setName(event.target.value)} />
          </label><label data-width="full">
            <textarea required name="description" placeholder="Person description" value={description} rows="5"
              onChange={(event)=> setDescription(event.target.value)}></textarea>
          </label><label data-width="full">
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </Fragment>
  )

}