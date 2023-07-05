import { createSignal, batch, For } from "solid-js";
import styles from "./App.module.css";

function App() {
  const [list, setList] = createSignal([]);
  const [textInput, setTextInput] = createSignal("");

  const handleSubmit = e => {
    e.preventDefault();
    batch(() => {
      setList(prev => [...prev, textInput()]);
      setTextInput("");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={textInput()}
          onChange={e => setTextInput(e.target.value)}
        />
        <button>Add</button>
      </form>
      <h1>To Do:</h1>
      <ul>
        <For each={list()}>{item => <li>{item}</li>}</For>
      </ul>
    </>
  );
}

export default App;
