import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search form-group">
            {/* El valor tiene que ser el de nuestro state {search}, el onChange nos muestra en cada cambio del cuadro de textos */}
            <input type="text" className="form-control" value={search} ref={searchInput} onChange={handleSearch} />
        </div>
    )
}

export default Search
