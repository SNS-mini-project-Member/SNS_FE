import './styles/common/reset.css'
import {Mobile, PC} from "./components/config/Responsive";


function App() {
  return (
      <div id='wrap'>
        <Mobile>
          <main>
            <p>test</p>
          </main>
        </Mobile>
        <PC>
          <main>
            <p>화면을 550px 이하로 줄여 주세요.</p>
          </main>
        </PC>
      </div>
  );
}

export default App;
