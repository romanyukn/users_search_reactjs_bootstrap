import axios from 'axios';

async function getUsers() {
  try {
    const res = await axios.get('https://reqres.in/api/users');
  return res;
  } catch(e) {
    console.log(e);
  }
}

export default getUsers;
