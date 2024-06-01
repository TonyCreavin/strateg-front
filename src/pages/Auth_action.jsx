import { json, redirect } from 'react-router-dom';
import axios from 'axios';

export async function action({ request }) {
  const searchParams = new URLSearchParams(request.url).searchParams;
  const mode = searchParams.get('mode') || 'signin';

  if (mode !== 'signin' && mode !== 'signup') {
    throw json({ message: 'Invalid mode', status: 400 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  const response = await axios.post(
    `http://127.0.0.1:3000/api/v1/users/${mode}`,
    authData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    }
  );
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Invalid credentials', status: 500 });
  }
  return redirect('/');
}
