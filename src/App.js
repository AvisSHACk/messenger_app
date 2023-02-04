import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>
          <Route path={"/"} element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
