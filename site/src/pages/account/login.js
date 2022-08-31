import * as React from 'react';
import { navigate } from 'gatsby';

async function checklogin(setLoginStatus) {
  const { loggedIn = false } = await fetch('api/check-auth').then((res) =>
    res.json(),
  );

  setLoginStatus(loggedIn);
}

async function login() {
  const { status } = await fetch('api/login').then((res) => res.json());

  if (status !== 'ok') {
    throw new Error(status);
  }

  navigate('account/dashboard');
}

export default function LoginPage() {
  const [loginStatus, setLoginStatus] = React.useState();

  React.useEffect(() => {
    checklogin(setLoginStatus);
  }, []);

  if (loginStatus === true) {
    navigate('/accout/dashboard', { replace: true });
    return null;
  }
  return <button onClick={login}>Login</button>;
}
