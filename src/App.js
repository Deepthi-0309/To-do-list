
import { useEffect, useState } from 'react';
import './App.css';
import { FormControl, Input, InputLabel, Button } from '@mui/material';
import Todo from './Todo';
import { addTodoDB, getTodos } from './utils/function';


function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  // console.log("😂😂", input);



  const fetchData = async () => {
    try {

      await getTodos().then((querySnapshot) => {
        setTodos(querySnapshot.docs.map((doc) => doc.data().todo))
      })

    } catch (error) {
      console.log(error)
    }
  }

  const addTodo = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {

      console.log(";)", "working");
      // setTodos([...todos,input]);
      await addTodoDB(input)
      setRefresh(!refresh)
      console.log(";)", "done working");
      setInput("");

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀");
    fetchData();
  }, [refresh])

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form>
        <FormControl>
          <InputLabel > Write a Todo </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} disabled={loading} />
        </FormControl>
        <Button variant="contained" type="submit" onClick={addTodo} disabled={loading} > {loading ? 'Adding...' : 'Add Todo'} </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
