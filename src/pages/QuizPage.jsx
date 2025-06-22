import Display from '../components/Display/Display'
import quizData from '../data/quiz.js'

export default function QuizPage() {

  const quizIndex = 0;

  return (
    <>
      <Display>
          {`Q1. ${quizData[quizIndex].question}`}
      </Display>
    </>
  )
}
