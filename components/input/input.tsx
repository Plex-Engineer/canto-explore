import styles from "./input.module.scss";

const Input = () => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="search for app"
      />
    </div>
  );
};

export default Input;
