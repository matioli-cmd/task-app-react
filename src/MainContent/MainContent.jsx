import { useRef, useState, useContext } from "react";
import ListItems from "../Listitems";

function MainContent({ handleChecked, deleteTask, groceryItems, checkedItems, downTask, upTask }) {
    return (
        <main className="main-content">
            <ListItems 
                groceryItems={groceryItems} 
                checkedItems={checkedItems} 
                deleteTask={deleteTask} 
                handleChecked={handleChecked}
                downTask={downTask}
                upTask={upTask}
            />
        </main>
    );
}

export default MainContent;
