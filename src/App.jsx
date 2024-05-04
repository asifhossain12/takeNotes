import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App(){

    const [inputList, setInputList] = useState();

    const [items, setItems] = useState([]);

    const itemEvents = (event) =>{
        setInputList(event.target.value);
    };

    function submit(){
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        })
        setInputList("");
    }

    const delItem = (id) =>{
        
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) =>{
                return index !== id;
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDO List</h1>
                    <input type="text" placeholder="Add a Item"
                    onChange={itemEvents}
                    value={inputList} />
                    <button onClick={submit}> + </button>
                    <ol>
                        {items.map((itemval, index) => {
                            return(
                             <ToDoList
                            key={index}
                            id={index}
                            text = {itemval}
                            onSelect = {delItem} />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};
export default App;