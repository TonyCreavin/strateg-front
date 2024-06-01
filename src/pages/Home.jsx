import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import '../App.css';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/users');
        console.log(response.data.data.users);
        setUsers(response.data.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  return (
    <>
      <h1 className="text-black font-semibold text-center text-3xl m-2 font-marker">
        List of users
      </h1>
      <div>
        {users.map((user) => (
          <Card key={user._id} name={user.name} email={user.email} />
        ))}
      </div>
    </>
  );
}

export default Home;
