import { json, redirect } from 'react-router-dom';

export async function action({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const mode = searchParams.get('mode') || 'signin';

  if (mode !== 'signin' && mode !== 'signup') {
    throw json({ message: 'Invalid mode', status: 400 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
    ...(mode === 'signup' && {
      name: data.get('name'),
      passwordConfirm: data.get('passwordConfirm'),
    }),
  };

  console.log('AuthData:', authData);
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/users/' + mode, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authData),
    });
    console.log('Responsee:', response);

    if (response.status === 422 || response.status === 401) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: 'Invalid credentials', status: 500 });
    }
    const resData = await response.json();

    if (mode === 'signin') {
      const token = resData.token;
      localStorage.setItem('token', token);
      return redirect('/');
    } else if (mode === 'signup') {
      return redirect('/auth?mode=signin');
    }
  } catch (error) {
    console.error('Request failed', error);
    throw json({ message: 'Something went wrong', status: 500 });
  }
}
