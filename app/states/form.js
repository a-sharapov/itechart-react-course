import { html, useState } from 'https://unpkg.com/htm/preact/standalone.module.js';


export const Form = ({formHeader, onCreate}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [expanded, setExpanded] = useState("button")

    function expandHandler(currentState) {
        if (currentState === "button") {
            setExpanded("form")
        } else {
            setExpanded("button")
        }
    }

    function submitHandler(event) {
        event.preventDefault()
        onCreate(name, description)
        setName("")
        setDescription("")
        setExpanded("button")
    }

    return html`
        <div class="form-wrapper" data-visibility=${expanded.toString()}>
            <span class="button form-caller" onClick=${() => expandHandler(expanded.toString())}>Append new user-card</span>
            <form id="form" onSubmit=${submitHandler}>
                <h3>${formHeader}</h3>
                <p>If you are sure to make changes - please click to <b>Submit</b> button</p>
                <hr />
                <label data-width="full">
                    <input type="text" required name="name" placeholder="Person name" value=${name} onChange=${(event) => setName(event.target.value)} />
                </label><label data-width="full">
                    <textarea required name="description" placeholder="Person description" value=${description} rows="5" onChange=${(event) => setDescription(event.target.value)}></textarea>
                </label><label data-width="full">
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    `
}