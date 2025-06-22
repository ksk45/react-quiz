import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopPage from "./pages/TopPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { ROUTES } from "./const";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.TOP} element={<TopPage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
