import classes from "../../styles/atoms/input.module.css";
const Input = (props) => {
  return (
    <div className={classes.inputWrap}>
      <input className={classes.inputStyle} placeholder={props.placeholder} type={props.type} />
    </div>
  );
}

export default Input;