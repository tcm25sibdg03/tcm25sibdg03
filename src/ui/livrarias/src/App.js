import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";

const dataProvider = lb4Provider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="livros" list={ListGuesser} />
      <Resource name="lojas" list={ListGuesser} />
      <Resource name="compras" list={ListGuesser} />
      <Resource name="clientes" list={ListGuesser} />
    </Admin>
  );
}

export default App;