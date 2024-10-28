
function App() {
  return (
    <>
      <h2>Form:</h2>
      <form method="post" action="/">
        <input type="text" name="name" placeholder="Enter name:" />
        <br />
        <input type="text" name="username" placeholder="Enter username:" />
        <br />
        <input type="email" name="email" placeholder="Enter email:" />
        <br />
        <input type="password" name="password" placeholder="Enter password:" />
        <br />

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
