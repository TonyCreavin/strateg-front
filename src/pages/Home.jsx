import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import '../App.css';
import { CiLogin } from 'react-icons/ci';
import getAuthToken from '../../util/auth';
import { Form } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = getAuthToken();
        const response = await axios.get('http://127.0.0.1:3000/api/v1/users', {
          headers: {
            ' Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
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
      <nav className="h-[60px] w-full bg-blue-500 flex justify-end items-end p-5">
        <Form action="/logout" method="post">
          <button className="my-auto">
            <CiLogin size={30} />
          </button>
        </Form>
      </nav>
      <h1 className="text-black font-semibold text-center text-3xl m-2 font-marker">
        List of users
      </h1>
      <div>
        {users.map((user) => (
          <Card key={user._id} name={user.name} email={user.email} />
        ))}
      </div>
      <footer className="h-[60px] w-full bg-blue-500 fixed z-1 "></footer>
    </>
  );
}

export default Home;
