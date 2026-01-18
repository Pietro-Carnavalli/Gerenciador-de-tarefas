
import { React, useState } from "react";

function CreateNote({ childToParent }) {
    const [text, setText] = useState({
        title: '',
        description: ''
    });

    function HandleText(event) {
        const { name, value } = event.target;

        setText(prev => ({
            ...prev,
            [name]: value,
            id: Date.now()
        }))
    }


    function doNote(event) {
        event.preventDefault();
        childToParent(text);
        setText({
            title: '',
            description: ''
        })
    }



    return (
        <div>
            <form >
                <input
                    name='title'
                    onChange={HandleText}
                    type="text"
                    value={text.title}
                    placeholder="Titulo" />
                <textarea
                    onChange={HandleText}
                    name='description'
                    placeholder="Descriçao"
                    value={text.description}
                ></textarea>
                <button onClick={doNote} >+</button>
            </form>
        </div>
    )
}






export default CreateNote;
