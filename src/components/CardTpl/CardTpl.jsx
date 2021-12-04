import React, {
  Fragment,
  useState
} from 'react'
import { Link } from 'react-router-dom'

import './CardTpl.css'

function useFormInput(defaultName) {
  const [userName, setUserName] = useState(defaultName)

  return {
    value: userName,
    onChange: event => setUserName(event.target.value)
  }
}

function useFormTextarea(defaultDescription) {
  const [userDescription, setUserDescription] = useState(defaultDescription)

  return {
    value: userDescription,
    onChange: event => setUserDescription(event.target.value)
  }
}

function useEditorForm(defaultState = "displayed") {
  const [editorFormState, setEditorFormState] = useState(defaultState)

  return {
    changeCardView: () => {
      (editorFormState === "displayed") ? setEditorFormState("edited") : setEditorFormState("displayed")
    },
    value: () => {
      return editorFormState
    }
  }
}
 
export const CardTpl = ({
  userCard,
  onRemove,
  onEdit,
  hideMore
}) => {
  const textAreaAttrs = useFormTextarea(userCard.description)
  const inputAttrs = useFormInput(userCard.name)
  const cardState = useEditorForm()

  const submitHandler = (event) => {
    event.preventDefault()
    onEdit(userCard.id, inputAttrs.value, textAreaAttrs.value)
    cardState.changeCardView()
  }

  const tryToRemove = (id) => {
    onRemove(id)
  }

  return (
            <Fragment>
              <section className="user-card" data-edited={cardState.value().toString()}>
                <div className="content-wrapper">
                  <span className="modifier" data-modify="remove" title="Remove" onClick={()=> tryToRemove(userCard.id)} />
                  <span className="modifier" data-modify="edit" title="Edit" onClick={cardState.changeCardView} />
                  <div className="user-name-wrapper">
                    <h3>{userCard.name}</h3>
                  </div>
                  <div className="user-description-wrapper">
                    <p>{userCard.description}</p>
                  </div>
                  {!hideMore? <Link to={"/cards/" + userCard.id} className="link-to-card" replace>&#129094;&nbsp;Go to card</Link> : void -1}
                </div>
                <form className="user-card-editor" method="PATCH" onSubmit={submitHandler}>
                  <h3>Edit this card</h3>
                  <input type="hidden" name="id" value={userCard.id} />
                  <label data-width="full">
                    <input type="text" required name="name" placeholder="Person name" {...inputAttrs} />
                  </label><label data-width="full">
                    <textarea required name="description" placeholder="Person description" rows="5" {...textAreaAttrs}></textarea>
                  </label><label data-width="half" data-align="left">
                    <button type="submit" className="dedicated">Update</button>
                  </label><label data-width="half" data-align="right">
                    <span className="button" onClick={cardState.changeCardView}>Back</span>
                  </label>
                </form>
              </section>
            </Fragment>
  )
}
