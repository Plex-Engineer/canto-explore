import styles from "./input.module.scss";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="search for app"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
