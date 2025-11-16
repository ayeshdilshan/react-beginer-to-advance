import "./App.css";
import Greeting from "./examples/basics/greetings";
import UserCard from "./examples/basics/userCard";

function App() {
  return (
    <div>
      <h1>React Basics</h1>
      <Greeting name="ayesh" />
      <UserCard name="Ayesh" age={27} role=" frontend developer" />
    </div>
  );
}

export default App;
