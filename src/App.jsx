import Header from './Header'
import MainContent from './MainContent/MainContent.jsx'
import Footer from './Footer.jsx'
import { createContext, useEffect, useState } from 'react'
import AddTask from './AddTask.jsx'
import Search from './Search.jsx'

function App() {

const [groceryItems, setGroceryItems] = useState(() => {
    const storedItems = localStorage.getItem('listitems')
    return(storedItems ? JSON.parse(storedItems) : [])

} )
const [checkedItems, setCheckeditems] = useState(() => { 
    const checked = localStorage.getItem('checked')
    return (checked ? JSON.parse(checked) : [])
})

const [searchValue, setSearchValue] = useState('');


useEffect(() => {
  document.title = groceryItems.length == 1 ? `${groceryItems.length} task` : `${groceryItems.length} tasks`
})

useEffect(() => {
  
  localStorage.setItem('listitems', JSON.stringify(groceryItems))

}, [groceryItems])

useEffect(() => {
    
  localStorage.setItem('checked', JSON.stringify(checkedItems))

}, [checkedItems])


function deleteTask(item){
       
    const itemslist = groceryItems.filter(t => t != item)
    setGroceryItems(itemslist)
    
    const UpdatedCheckList = checkedItems.filter(t => t != item)
    
    setCheckeditems(UpdatedCheckList)
}

function handleChecked(item){

    const PreviousCheckList = [...checkedItems]
    
    const UpdatedCheckList = PreviousCheckList.includes(item) ? PreviousCheckList.filter(t => t != item)
    : [...PreviousCheckList, item]
    
    setCheckeditems(UpdatedCheckList)
    

}

function handleNewTask(inputValue, Inputref, setinputValue){

  if(inputValue.trim() != '' && !groceryItems.includes(inputValue)){
    const newList = [...groceryItems, inputValue]
    setGroceryItems(newList)
  }
  Inputref.current.focus()
  setinputValue('')
  

}

function upTask(index){
  
  if(index != 0){

    const tempArray = [...groceryItems];

    [tempArray[index], tempArray[index-1]] = [tempArray[index-1], tempArray[index]];

    setGroceryItems(tempArray)
  }
}
function downTask(index){
  
    if(index != groceryItems.length-1){
  
      const tempArray = [...groceryItems];
  
      [tempArray[index], tempArray[index+1]] = [tempArray[index+1], tempArray[index]];
  
      setGroceryItems(tempArray)
    }

  }

  // TESTING JSON SERVER

  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState('Loading your tasks...')

  useEffect(() => {
    
    async function getdata(){

      try{

        let response = await fetch('http://localhost:3500/items')
        if(!response.ok) throw new Error('Did not get expected data')
        let data = await response.json()
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message)

      }

      
    }

    setTimeout(() => {
      setLoading(null)
    }, 2000);
  }, [])


  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>


        <Header></Header>
        <AddTask handleNewTask={handleNewTask}></AddTask>
        <Search setSearchValue={setSearchValue} searchValue={searchValue}></Search>
        <br></br>
        {loading && <p style={{textAlign: "center", color: "#333"}}>{loading}</p>}
        {/*fetchError && <p style={{color: "red", textAlign: "center"}}>{`Error: ${fetchError}`}</p>*/}
        {!loading && <MainContent
          
          handleChecked={handleChecked}
          deleteTask={deleteTask}
          groceryItems={groceryItems.filter(item => item.toLowerCase().includes(searchValue.trim().toLowerCase()))}
          setCheckeditems={setCheckeditems}
          setGroceryItems={setGroceryItems}
          checkedItems={checkedItems}
          upTask={upTask}
          downTask={downTask}
        ></MainContent>}

 
        <Footer length={groceryItems.length}></Footer>


    </div>

  )
}

export default App
