
import Routes from './routes/index';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
