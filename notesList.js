import Note from "./Note";

const NotesList = ({ notes}) => {
    return(
            notes.map((note) => <Note text={note.text} date={note.date}/>)
    );
};
export default NotesList;
