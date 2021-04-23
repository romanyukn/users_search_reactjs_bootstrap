import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchField({ onSearch, onKeyPress }) {
  const [searchText, setSearchText] = useState('');

  return(
    <InputGroup className="mb-3">
      <FormControl
        placeholder="User name or email"
        aria-label="User name or email"
        aria-describedby="basic-addon2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => onKeyPress(e, searchText)}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => onSearch(searchText)} >Search</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default SearchField;
