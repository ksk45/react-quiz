import Button from "../components/Button/Button.jsx";
import Display from "../components/Display/Display";
import quizData from "../data/quiz.js";

export default function QuizPage() {
  const quizIndex = 0;

  const handleClick = (clickedIndex) => {
    console.log("clickIndex:", clickedIndex);
  };

  return (
    <>
      <Display>{`Q1. ${quizData[quizIndex].question}`}</Display>
      {quizData[quizIndex].options.map((option, index) => {
        return (
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>
            {option}
          </Button>
        );
      })}
    </>
  );
}
