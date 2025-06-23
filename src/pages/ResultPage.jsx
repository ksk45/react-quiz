import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const maxQuizLen = location.state ? location.state.maxQuizLen : 0;
  const correctNumLen = location.state ? location.state.correctNumLen : 0;

  useEffect(() => {
    if (!location.state) {
      navigate(ROUTES.TOP);
    }
    setTimeout(() => setActive(true), 3000);
  }, [location.state, navigate]);

  return (
    <>
      <Loading active={active} />
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>クイズに再挑戦</Link>
      <br />
      <br />
      <Link to={ROUTES.TOP}>TOPへ</Link>
    </>
  );
}
