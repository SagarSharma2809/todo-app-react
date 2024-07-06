import { useState, useEffect } from 'react';
import List from '@mui/material/List';


import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialData = JSON.parse(localStorage.getItem("todos")) || [];



export default function TodoList() {

    const [todos, setTodos] = useState(initialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodo => (
            prevTodo.filter(t => t.id != id)
        ))
    }

    const toggleTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos((prevTodo) => {
            return [...prevTodo, { id: crypto.randomUUID(), text: text, completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem todo={todo} remove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
            ))}
        </List>
    );
}