const MainLayout = (props) => {
  return (
    <div style={{background : '#eff0f3', width : '100%', height : '100vh', display : 'flex', justifyContent : 'center', paddingTop : '15px'}}>{props.children}</div>
  )
}

export default MainLayout;