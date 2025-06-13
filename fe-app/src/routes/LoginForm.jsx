import './LoginForm.scss';

export default function LoginForm() {
  return (
    <form className="login-form" action="#" method="dialog">
      <h4>Login</h4>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="pass" />
      </p>
      <p>
        <input type="checkbox" id="rem" name="rem" />
        <label htmlFor="rem">Remember me?</label>
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
      <div className="forgot">
        <a href="#">Forgot Password</a>
      </div>
    </form>
  );
}
