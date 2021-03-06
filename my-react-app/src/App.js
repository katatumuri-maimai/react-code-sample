import './styles/App.css';
import { BrowserRouter} from 'react-router-dom'
import Main from './_components/Main';
import GlobalNav from './_components/GlobalNav';

console.log(window.location.href);
console.log(window.history.state);

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <GlobalNav/>
      <Main/>
    </div>
  </BrowserRouter>
  );
}

export default App;
