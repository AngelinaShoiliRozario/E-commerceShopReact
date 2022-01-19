import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  let param = useParams();
  return (
    <div>
      <h1>HatsPage {param.id}</h1>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hats" element={<HatsPage />} />
        <Route path="hats/:id" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
