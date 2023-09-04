import { BrowserRouter, Route, Routes } from "react-router-dom";
import Screeners from './routes/Screeners';
import Home from "./routes/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Screeners" element={<Screeners />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
