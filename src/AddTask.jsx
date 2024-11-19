import { useRef, useState } from "react"
import { FaPlus } from "react-icons/fa"

function AddTask({handleNewTask}){

    const Inputref = useRef(null)
 
    const [inputValue, setinputValue] = useState('')

    function handleInputChange(e){
        setinputValue(e.target.value)
    }

    return( 

        <div className="Add">

            <input value={inputValue} onChange={(e) => {handleInputChange(e)}} placeholder='Add Task' ref={Inputref} maxLength='19'></input>
            <button onClick={() => handleNewTask(inputValue, Inputref, setinputValue)}> <FaPlus></FaPlus>
            </button>

        </div>

    )
}

export default AddTask