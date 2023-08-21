const MainLayout = (props) => {
  return (
    <div style={{background : '#eff0f3', width : '100%', height : '100vh', display : 'flex', justifyContent : 'space-between', paddingTop : '15px'}}>{props.children}</div>
  )
}

export default MainLayout;