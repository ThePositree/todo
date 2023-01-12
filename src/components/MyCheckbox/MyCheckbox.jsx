import styles from "./MyCheckbox.module.scss";
import cn from "classnames";
import { ReactComponent as CheckSvg } from "../../assets/check.svg";

const MyCheckbox = ({ check, click }) => {
  return (
    <label className={cn(styles.label, { [styles.check]: check })}>
      <input className={styles.input} type='checkbox' onChange={click} />
      <div className={styles.div}>{check && <CheckSvg />}</div>
    </label>
  );
};

export default MyCheckbox;
