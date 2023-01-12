import MyCheckbox from "../MyCheckbox/MyCheckbox";
import styles from "./TodoItem.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

const TodoItem = ({ id, title, check, setTodoList, todoList }) => {
  const clickCheck = () => {
    let copy = [...todoList];
    const currentListItem = copy.find((item) => item.id === id);
    currentListItem.check = !currentListItem.check;
    copy = copy.sort((todo1, todo2) => {
      let check1 = todo1.check ? 1 : 0;
      let check2 = todo2.check ? 1 : 0;
      let result = check1 - check2;
      return result;
    });
    setTodoList(copy);
  };

  const clickDeleteTodo = () => {
    const copy = [...todoList].filter((item) => item.id !== id);
    setTodoList(copy);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <MyCheckbox check={check} click={clickCheck} />
        <p className={styles.title}>{title}</p>
      </div>
      <button className={styles.button} onClick={clickDeleteTodo}>
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default TodoItem;
