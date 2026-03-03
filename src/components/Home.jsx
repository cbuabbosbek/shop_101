import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [joke, setJoke] = useState(null);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    console.log("users fetched..");
  };

  useEffect(fetchUsers, []);
  console.log(users);

  const getRandomJoke = () => {
    console.log("CLICKED");
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((json) => setJoke(json));
  };

  return (
    <>
      <h1>Home</h1>
      {users.map((user) => (
        <div className="card">
          <h1> {user.name} </h1>
          <p> {user.email} </p>
          <p> {user.phone} </p>
        </div>
      ))}

      <hr />
      <h1> {joke && joke.id} </h1>
      <h1> {joke && joke.setup} </h1>
      <h1> {joke && joke.punchline} </h1>
      <button onClick={getRandomJoke}>Random JOKE</button>
      <hr />
    </>
  );
}

export default Home;
