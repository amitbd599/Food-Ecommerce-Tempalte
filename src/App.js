import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/registration' element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
