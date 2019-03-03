import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
      <div className="p-2">
        <input onChange={searchChange}
               className="mt-4 focus:outline-none p-3 bg-blue-lightest border-green border"
               type="search"
               placeholder="Search robots" />
      </div>
    );
}

export default SearchBox;
