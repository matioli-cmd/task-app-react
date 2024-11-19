

function Search({searchValue, setSearchValue}){

    return(

        <div className="Search-container">
            <input className="Search" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        </div>

    )
}

export default Search