import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import UserForm from "./components/UserForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
      <CounterOne />
      <CounterTwo />
      <UserForm />
    </div>
  );
}
