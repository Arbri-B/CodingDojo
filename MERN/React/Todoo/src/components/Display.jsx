import React from "react";

const Display = (props) => {
    const { todo, setTodo } = props;

    const changeStatus = (task) => {
        const updatedTodo = todo.map((tasku) =>
            tasku !== task ? tasku : { ...tasku, status: !tasku.status }
        );

        setTodo(updatedTodo);
    };

    const deleteTask = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
    };

    return (
        <div>
            {todo.map((task, index) => (
                <div key={index}>
                    {task.status === true ? (
                        <p style={{ textDecoration: "line-through" }}>{task.text}</p>
                    ) : (
                        <p style={{ color: "red" }}>{task.text}</p>
                    )}
                    <input
                        type="checkbox"
                        checked={task.status}
                        onChange={() => changeStatus(task)}
                    />
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Display;