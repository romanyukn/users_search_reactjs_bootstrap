import React from 'react';

function UserRow(props) {
  const { id, firstName, lastName, email } = props; 
  return(
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
    </tr>
  )
}

export default UserRow;
