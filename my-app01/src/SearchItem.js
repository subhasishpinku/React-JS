const SearchItem = ({search, setSearch}) => {
     return (
        <from className="searchForm" onSubmit={(e) => e.preventDefault()}>
           <label htmlFor="search">Search</label>
           <input 
             id="search"
             type="text"
             role="searchbox"
             placeholder="Search Items"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
           />
        </from>
     )
}

    export default SearchItem;