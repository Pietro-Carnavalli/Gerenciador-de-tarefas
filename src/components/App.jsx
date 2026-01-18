import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(text) {
        setNotes(prevNotes =>
            [...prevNotes, text]
        )
        console.log(text)
    }


    return (
        <div>
            <Header />
            <CreateNote childToParent={addNote} />
            {notes.map((note) => {
                return (
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.description}
                    />
                )
            })}
            <Footer />
        </div>
    )

}



export default App;
