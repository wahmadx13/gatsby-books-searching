import * as React from 'react';
import { navigate } from 'gatsby';

async function checklogin(setLoginStatus) {
  const { loggedIn = false } = await fetch('api/check-auth').then((res) =>
    res.json(),
  );

  setLoginStatus(loggedIn);
}

async function logout() {
  const { status } = await fetch('api/logout').then((res) => res.json());

  if (status !== 'ok') {
    throw new Error(status);
  }

  navigate('account/logout');
}

export default function DashboardPage() {
  const [loginStatus, setLoginStatus] = React.useState();

  React.useEffect(() => {
    checklogin(setLoginStatus);
  }, []);

  if (loginStatus === false) {
    navigate('/accout/login', { replace: true });
    return null;
  }
  return (
    <div>
      <h1>Wow, look at all this ecret stuff</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
