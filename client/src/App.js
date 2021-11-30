import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Container } from "reactstrap";
import AutorAdmin from "./components/autores/admin";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index path="/*" element={<AutorAdmin />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App;
