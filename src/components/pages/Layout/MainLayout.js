const MainLayout = (props) => {
  return (
      <div style={{ background: '#eff0f3', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', paddingTop: '15px' }}>
        <div style={{ background: '#eff0f3', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '71px' }}>
          {props.children}
        </div>
      </div>
  );
}

export default MainLayout;
