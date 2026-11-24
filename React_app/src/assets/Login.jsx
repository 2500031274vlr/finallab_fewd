function Login() {
  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Log in</button>
      </form>
    </main>
  );
}

export default Login;