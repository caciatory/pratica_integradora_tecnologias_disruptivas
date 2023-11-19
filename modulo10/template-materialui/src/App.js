import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Login />
    </div>
  );
}

export default App;
