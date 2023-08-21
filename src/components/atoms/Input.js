import classes from "../../styles/atoms/input.module.css";
import {useEffect, useRef} from "react";
const Input = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.focus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={classes.inputWrap}>
      <input ref={inputRef} className={classes.inputStyle} placeholder={props.placeholder} type={props.type} />
    </div>
  );
}

export default Input;