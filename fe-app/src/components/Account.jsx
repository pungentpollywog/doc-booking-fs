import LoginForm from '../routes/LoginForm';
import Register from '../routes/register';
import { Link } from 'react-router-dom';
import Dialog from './Dialog';
import { useEffect, useState } from 'react';

import './Account.scss';

export default function Account() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [creds, setCreds] = useState({}); 

  useEffect(() => {
    // TODO: when creds change submit login request to backend
  }, [creds]);

  return (
    <div className='account'>
      <a href="#" onClick={() => setShowRegister(true)}>
        Sign Up
      </a>
      <a href="#" onClick={() => setShowLogin(true)}>
        <button className="cta">Log In</button>
      </a>
      <Dialog open={showRegister} setOpen={setShowRegister}>
        <Register />
      </Dialog>
      <Dialog open={showLogin} setOpen={setShowLogin} setFormValues={setCreds}>
        <LoginForm />
      </Dialog>
    </div>
  );
}
