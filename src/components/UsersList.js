import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import getUsers from '../servises/getUsers';
import SearchField from './SearchField';
import UserRow from './UserRow';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(async() => {
    const { data } = await getUsers();
    setUsers(data.data);
    setFilteredUsers(data.data);
  }, []);

  function filterUser(searchText) {
    if (searchText === '') {
      setFilteredUsers(users);
      return;
    }
    const filter = users.filter(u => 
      u.first_name.toUpperCase().includes(searchText.toUpperCase()) || 
      u.last_name.toUpperCase().includes(searchText.toUpperCase()) || 
      u.email.toUpperCase().includes(searchText.toUpperCase()));
    setFilteredUsers(filter);
  };

  function onEnterPress(event, searchText) {
    if (event.charCode === 13) {
      filterUser(searchText);
    }
  }

  return (
    <React.Fragment>
      <SearchField onSearch={filterUser} onKeyPress={onEnterPress}/>
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
          {filteredUsers.map(user => 
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
