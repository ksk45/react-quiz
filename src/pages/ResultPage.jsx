import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../components/Result/Result";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
    return null;
  }
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  return (
    <>
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>クイズに再挑戦</Link>
      <br /><br />
      <Link to={ROUTES.TOP}>TOPへ</Link>
    </>
  );
}
