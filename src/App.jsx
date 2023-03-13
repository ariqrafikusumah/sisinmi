import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import HomeAdmin from "./pages/admin/_HomeAdmin";
import TableAdmin from "./pages/admin/_TableAdmin";
import InputUser from "./pages/admin/_InputUser";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/tableadmin" element={<TableAdmin />} />
          <Route path="/inputuser" element={<InputUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
