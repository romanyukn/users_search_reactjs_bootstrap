import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchField() {
  return(
    <InputGroup className="mb-3">
      <FormControl
        placeholder="User name or email"
        aria-label="User name or email"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Search</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default SearchField;
