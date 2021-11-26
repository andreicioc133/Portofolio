import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span
        style={{
          textDecoration: todo.isDone ? "line-through" : "",
          fontFamily: "Open Sans, cursive",
        }}
      >
        {todo.text}
      </span>
      <div>
        <Button
          variant="outline-success"
          size="sm"
          onClick={() => markTodo(index)}
        >
          ✓
        </Button>{" "}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeTodo(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b
            style={{
              color: "white",
              fontFamily: "Open Sans, cursive",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Add Todo
          </b>
        </Form.Label>
        <Form.Control
          type="text"
          className="inputTodo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button
        variant="outline-secondary"
        className="buttonHeader"
        type="submit"
        style={{
          border: "2px solid white",
          marginTop: "0.5rem",
          backgroundColor: "white",
          color: "#8312A5",
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

function TodoAPP() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="containerCards">
      <h1
        className="text-center mb-4"
        style={{ color: "white", fontFamily: "Open Sans, cursive" }}
      >
        Todo List
      </h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Card className="todoCard">
            <Card.Body>
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodoAPP;
