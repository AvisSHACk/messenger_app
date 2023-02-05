import { BrowserRouter, Route, Routes } from "react-router-dom";
import RutasProtegidas from "./components/RutasProtegidas";
import { AuthProvider } from "./context/authContext";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            
            <Route element={<RutasProtegidas/>}>
              <Route path={"/"} element={<Layout/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
