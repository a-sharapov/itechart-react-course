import {
  html,
  useState
} from 'https://unpkg.com/htm/preact/standalone.module.js'

export const Card = ({
  userCard,
  onRemove,
  onEdit
}) => {
  const [edited, setEdited] = useState("displayed")
  const [name, setName] = useState(userCard.name)
  const [description, setDescription] = useState(userCard.description)

  const editorHandler = (currentState) => {
    if (currentState === "edited") {
      setEdited("displayed")
    } else {
      setEdited("edited")
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    onEdit(userCard.id, name, description)
    setEdited("displayed")
  }

  const tryToRemove = (id) => {
    onRemove(id)
  }

  return html `
            <section class="user-card" data-edited=${edited.toString()}>
                <div class="content-wrapper">
                    <span class="modifier" data-modify="remove" title="Remove" onClick=${() => tryToRemove(userCard.id)}></span>
                    <span class="modifier" data-modify="edit" title="Edit" onClick=${() => editorHandler(edited.toString())}></span> 
                    <div class="user-name-wrapper"><h3>${userCard.name}</h3></div>
                    <div class="user-description-wrapper"><p>${userCard.description}</p></div>
                </div>
                <form class="user-card-editor" method="PATCH" onSubmit=${submitHandler}>
                    <h3>Edit this card</h3>
                    <input type="hidden" name="id" value=${userCard.id} />
                    <label data-width="full">
                        <input type="text" required name="name" placeholder="Person name" value=${userCard.name} onChange=${(event) => setName(event.target.value)} />
                    </label><label data-width="full">
                        <textarea required name="description" placeholder="Person description" value=${userCard.description} rows="5" onChange=${(event) => setDescription(event.target.value)}></textarea>
                    </label><label data-width="half">
                        <button type="submit" class="dedicated">Update</button>
                    </label><label data-width="half" data-align="right">
                        <button onClick=${() => editorHandler(edited.toString())}>Back</button>
                    </label>
                </form>
            </section>
        `
}