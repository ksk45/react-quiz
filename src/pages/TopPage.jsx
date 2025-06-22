import { Link } from "react-router-dom";
import { ROUTES } from "../const";

export default function TopPage() {
  return (
    <>
      <h1>Quiz App</h1>
      <Link to={ROUTES.QUIZ}>Start!</Link>
    </>
  );
}
