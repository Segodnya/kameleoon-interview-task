import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { TestPage } from "./pages/TestPage/TestPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/results/:testId" element={<TestPage />} />
            <Route path="/finalize/:testId" element={<TestPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
