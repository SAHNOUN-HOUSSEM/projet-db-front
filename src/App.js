import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Homapage";
import Details from "./pages/Details";
import Defaut from "./pages/Pagedéfault";
import Recettee from "./pages/Recettee";
import Paramétres from "./pages/Settings";
import Ajout from "./pages/Ajout";
import Evalue from "./pages/Evalue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plat from "./pages/Plat";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/Missing";
import Favoris from "./pages/Favoris";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/" exact Component={Home} />
              <Route path="/Plat" Component={Plat} />
              <Route path="/Recette/:id" Component={Details} />
              <Route path="/Recette" Component={Recettee} />
              <Route path="/favoris" Component={Favoris} />
              <Route path="/Paramétres" Component={Paramétres} />
              <Route path="/Ajout" Component={Ajout} />
              <Route path="/Evalue" Component={Evalue} />
              <Route Component={Defaut} />
            </Route>
          </Route>

          {/* not found */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
