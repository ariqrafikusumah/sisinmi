import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import FooterBot from "./components/FooterBot";
import NavbarTop from "./components/NavbarTop";
import Home from "./pages/Home";
import _HomeAdmin from "./pages/admin/_HomeAdmin";
import _TableAdmin from "./pages/admin/_TableAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/_HomeAdmin" element={<_HomeAdmin />} />
          <Route path="/_TabelAdmin" element={<_TableAdmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
