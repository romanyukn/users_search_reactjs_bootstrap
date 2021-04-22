import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import getUsers from '../servises/getUsers';
import SearchField from './SearchField';
import UserRow from './UserRow';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(async() => {
    const { data } = await getUsers();
    setUsers(data.data);
  }, []);

  return (
    <React.Fragment>
      <SearchField/>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
          <UserRow 
            key={user.id} 
            id={user.id} 
            firstName={user.first_name} 
            lastName={user.last_name} 
            email={user.email}/>)}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default UsersList;
