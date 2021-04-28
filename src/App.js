import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import pkg from 'semantic-ui-react/package.json'
import Home from './components/home/index'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;
