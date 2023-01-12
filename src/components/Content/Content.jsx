import { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./Content.module.scss";

const data = [
  {
    id: "retewrtwert",
    title: "lorem",
    check: false,
  },
  {
    id: "asdffesafd",
    title: "title",
    check: false,
  },
  {
    id: "213123dsafaf",
    title: "title",
    check: false,
  },
  {
    id: "asdfefsdfefec",
    title: "title test",
    check: false,
  },
  {
    id: "asfdewwfsdafae",
    title: "title",
    check: false,
  },
  {
    id: "asdfsadf",
    title: "title",
    check: false,
  },
];

const Content = () => {
  const [todoList, setTodoList] = useState(data);
  useEffect(() => {
    const copy = [...todoList].sort((todo1, todo2) => {
      let check1 = todo1.check ? 1 : 0;
      let check2 = todo2.check ? 1 : 0;
      let result = check1 - check2;
      return result;
    });
    setTodoList(copy);
  }, []);

  return (
    <>
      <AddTodo setTodoList={setTodoList} todoList={todoList} />
      <div className={styles.wrapper}>
        {todoList.map((item) => (
          <TodoItem id={item.id} title={item.title} check={item.check} setTodoList={setTodoList} todoList={todoList} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Content;
