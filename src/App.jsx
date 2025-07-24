import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NasaProvider } from "./contexts/NasaContext";
import Home from "./components/Home";
import AssetDetails from "./components/AssetDetails";

function App() {
  return (
    <NasaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
        </Routes>
      </BrowserRouter>
    </NasaProvider>
  );
}

export default App;
