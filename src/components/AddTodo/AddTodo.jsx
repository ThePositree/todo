import styles from "./AddTodo.module.scss";

import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "react";

const AddTodo = ({ setTodoList, todoList }) => {
  const input = useRef();

  const addTodo = () => {
    const todo = {
      id: Date.now(),
      title: input.current.value,
      check: false,
    };
    return todo;
  };

  const changeClick = (e) => {
    e.preventDefault();
    const todo = addTodo();

    setTodoList([todo, ...todoList]);

    input.current.value = "";
  };

  const changeSubmit = (e) => {
    e.preventDefault();
    const todo = addTodo();

    setTodoList([todo, ...todoList]);

    input.current.value = "";
  };

  return (
    <form className={styles.wrapper} onSubmit={changeSubmit}>
      <input ref={input} className={styles.input} type='text' />
      <button className={styles.button} onClick={changeClick}>
        <AiOutlinePlus color='rgb(15,22,42)' />
      </button>
    </form>
  );
};

export default AddTodo;
