import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import HomeAdmin from "./pages/admin/_HomeAdmin";
import TableAdmin from "./pages/admin/_TableAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="/TableAdmin" element={<TableAdmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
