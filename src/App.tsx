import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { TestPage } from "./pages/TestPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/results/:testId" element={<TestPage />} />
        <Route path="/finalize/:testId" element={<TestPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
