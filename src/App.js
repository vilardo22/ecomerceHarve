
import Carrossel from './Components/Carrossel';
import Header from './Components/Header';
import { ListaProdutos } from './Components/ListaProdutos';
import Welcome from './Components/Welcome';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div >
      <Header/>
      <Carrossel/>
      <Welcome />
     <ListaProdutos/>
      <ToastContainer />
    </div>
  );
}

export default App;
