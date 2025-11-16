import "./App.css";
import Counter from "./examples/basics/counter";
import Greeting from "./examples/basics/greetings";
import UserCard from "./examples/basics/userCard";
import ClickEventsHandling from "./examples/basics/eventHandling";

function App() {
  return (
    <div>
      <h1>React Basics</h1>
      <Greeting name="ayesh" />
      <UserCard name="Ayesh" age={27} role=" frontend developer" />
      <Counter/>
      <ClickEventsHandling/>
    </div>
  );
}

export default App;
