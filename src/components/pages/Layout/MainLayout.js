const MainLayout = (props) => {
  return (
    <div style={{background : '#eff0f3', width : '100%', display : 'flex', justifyContent : 'center', paddingTop : '71px'}}>{props.children}</div>
  )
}

export default MainLayout;