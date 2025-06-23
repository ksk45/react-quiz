import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

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
      <p>あなたの正解数は...</p>
      <p>{`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}</p>
      <br />
      <Link to={ROUTES.QUIZ}>クイズに再挑戦</Link>
      <br /><br />
      <Link to={ROUTES.TOP}>TOPへ</Link>
    </>
  );
}
