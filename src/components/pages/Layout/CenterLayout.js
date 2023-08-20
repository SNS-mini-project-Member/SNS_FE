import classes from "../../../styles/pages/layout/CenterLayout.module.css";
const CenterLayout = (props) => {
  return (
    <div className={classes.center}>{props.children}</div>
  )
}

export default CenterLayout;