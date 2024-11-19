import Header from './Header'
import MainContent from './MainContent/MainContent.jsx'
import Footer from './Footer.jsx'
import { createContext, useEffect, useState } from 'react'
import AddTask from './AddTask.jsx'
import Search from './Search.jsx'

function App() {

const [groceryItems, setGroceryItems] = useState(() => {
    const storedItems = localStorage.getItem('listitems')
    console.log(storedItems)
    return(storedItems ? JSON.parse(storedItems) : [])

} )
const [checkedItems, setCheckeditems] = useState(() => { 
    const checked = localStorage.getItem('checked')
    console.log(checked)
    return (checked ? JSON.parse(checked) : [])
})

const [searchValue, setSearchValue] = useState('');


useEffect(() => {
  document.title = groceryItems.length == 1 ? `${groceryItems.length} item` : `${groceryItems.length} items`
})

function deleteTask(item){
    
    const itemslist = groceryItems.filter(t => t != item)
    setGroceryItems(itemslist)
  
    localStorage.setItem('listitems', JSON.stringify(itemslist))
    
    const UpdatedCheckList = checkedItems.filter(t => t != item)
    
    setCheckeditems(UpdatedCheckList)

    localStorage.setItem('checked', JSON.stringify(UpdatedCheckList))
}

function handleChecked(item){

    const PreviousCheckList = [...checkedItems]
    
    const UpdatedCheckList = PreviousCheckList.includes(item) ? PreviousCheckList.filter(t => t != item)
    : [...PreviousCheckList, item]
    
    setCheckeditems(UpdatedCheckList)

    localStorage.setItem('checked', JSON.stringify(UpdatedCheckList))
    

}

function handleNewTask(inputValue, Inputref, setinputValue){

  if(inputValue.trim() != '' && !groceryItems.includes(inputValue)){
    const newList = [...groceryItems, inputValue]
    setGroceryItems(newList)
    localStorage.setItem('listitems', JSON.stringify(newList))
  }
  Inputref.current.focus()
  setinputValue('')
  

}

function upTask(index){
  
  if(index != 0){

    const tempArray = [...groceryItems];

    [tempArray[index], tempArray[index-1]] = [tempArray[index-1], tempArray[index]];

    setGroceryItems(tempArray)

    localStorage.setItem('listitems', JSON.stringify(tempArray))
  }
}
function downTask(index){
  
    if(index != groceryItems.length-1){
  
      const tempArray = [...groceryItems];
  
      [tempArray[index], tempArray[index+1]] = [tempArray[index+1], tempArray[index]];
  
      setGroceryItems(tempArray)
  
      localStorage.setItem('listitems', JSON.stringify(tempArray))
    }

  }


  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>


        <Header></Header>
        <AddTask handleNewTask={handleNewTask}></AddTask>
        <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>
        <MainContent
        handleChecked={handleChecked}
        deleteTask={deleteTask}
        groceryItems={groceryItems.filter(item => item.toLowerCase().includes(searchValue.trim().toLowerCase()))}
        setCheckeditems={setCheckeditems}
        setGroceryItems={setGroceryItems}
        checkedItems={checkedItems}
        upTask={upTask}
        downTask={downTask}
        ></MainContent>
        <Footer length={groceryItems.length}></Footer>


    </div>

  )
}

export default App
