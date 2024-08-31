import "./App.css";
import StateTutorial from "./components/StateTutorial";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import Users from "./components/Users";
import UserStatus from "./components/UserStatus";

function App() {
  return (
    <div className="mainDiv">
      <div className="divStyle">
        <h2 className="divStyle">useState</h2>
        <StateTutorial></StateTutorial>

        <h2 className="divStyle">useReducer</h2>
        <UseReducer></UseReducer>

        <h2 className="divStyle">useReducer</h2>
        <UseRef></UseRef>
      </div>
      <div className="userDiv">
        <h2>Users - CUSTOM HOOK(Data Fetching)</h2>
        <Users></Users>
        <h2>Users - CUSTOM HOOK(User is Online/Offline)</h2>
        <UserStatus></UserStatus>
      </div>
    </div>
  );
}

export default App;
