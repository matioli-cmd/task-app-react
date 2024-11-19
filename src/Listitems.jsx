import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

function ListItems({ groceryItems, checkedItems, deleteTask, handleChecked, upTask, downTask}) {
    return (
        <ul>
            {groceryItems.length > 0 ? (
                groceryItems.map((item, index) => (
                    <li key={index} className={checkedItems.includes(item) ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            className="checkbox"
                            onChange={() => handleChecked(item)}
                            checked={checkedItems.includes(item)}
                        />
                        <h1>{item}</h1>

                        <div className="icons-container">
                            <FaArrowUp
                                role="button"
                                className="up-btn"
                                onClick={() => upTask(index)}
                            />
                            <FaArrowDown
                                role="button"
                                className="down-btn"
                                onClick={() => downTask(index)}
                            />
                            <FaTrashAlt
                                role="button"
                                className="delete-btn"
                                onClick={() => deleteTask(item)}
                            />
                        </div>
                    </li>
                ))
            ) : (
                <h1>No task items</h1>
            )}
        </ul>
    );
}

export default ListItems;
