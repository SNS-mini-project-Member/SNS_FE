import classes from "../../styles/atoms/button.module.css";
const Button = (props) => {
  return (
    <div style={{width : props.width}} className={classes.btnWrap}>
      <button onClick={props.onClick} style={{backgroundColor : props.backColor}} className={classes.btn}>{props.value}</button>
    </div>
  );
}

export default Button;