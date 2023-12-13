import React,{useState} from "react";

const Todo = (props) => {

    const [text, setText] = useState("")
    const [status, setStatus] = useState(false)
    const [error, setError] = useState("")
    const {todo, setTodo} = props

    const handleSubmit = (e) => {

        e.preventDefault();

        if(text.length < 2) {
            setError("Todo text must be longer than 2 characters.")
        }
        else {
            setTodo([...todo, {text: text, status : status} ])
            setError("")
            setText("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} placeholder="What do you want to do?" onChange={(e) => setText(e.target.value)} />
            
            {error ? <p>{error}</p> : null}
            <button>Add</button>
        </form>
    )
}

export default Todo;