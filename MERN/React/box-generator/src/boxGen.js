import React, { useState } from 'react'

const BoxGen = (props) => {

    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    const createBox = (e) => {
        e.preventDefault();
        if (color) {
            setBoxes((prevBoxes) => [...prevBoxes, { color, id: Date.now() }]);
            setColor(""); 
        }
    }

    return (
        <div>
            <form onSubmit={createBox}>
                <label>Color:
                    <input type='text' value={color} onChange={(e) => setColor(e.target.value)}></input>
                </label>
                <button type='submit'>Add</button>
            </form>

            <div style={{ display: "flex", marginTop: "10px" }}>
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: box.color,
                            margin: "5px",
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )

}

export default BoxGen;