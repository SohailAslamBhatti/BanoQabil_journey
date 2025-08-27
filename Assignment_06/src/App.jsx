import React, { useState } from "react";
import "./App.css";

const quizData = [
  {
    question: "Which continent has the highest number of countries?",
    options: ["Asia", "Europe", "North America", "Africa"],
    correctAnswer: "Africa",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "CSS",
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    correctAnswer: "Django",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    correctAnswer: "Facebook",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Makeup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
];

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    if (selected !== null) return;
    setSelected(option);

    if (option === quizData[currentQ].correctAnswer) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setStartQuiz(false);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {/* ✅ Added Heading */}
      <h1 className="quiz-title">Quiz App</h1>

      {!startQuiz ? (
        <button className="start-btn" onClick={() => setStartQuiz(true)}>
          Start Quiz
        </button>
      ) : showScore ? (
        <div className="score-section">
          <h2>Your scored {score} out of {quizData.length * 10}!</h2>
          <button className="restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-section">
          <h2>{currentQ + 1}. {quizData[currentQ].question}</h2>
          <div className="options">
            {quizData[currentQ].options.map((option, index) => {
              let className = "option-btn";
              if (selected) {
                if (option === quizData[currentQ].correctAnswer) {
                  className += " correct";
                } else if (option === selected) {
                  className += " wrong";
                }
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleOptionClick(option)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {selected && (
            <>
              <button className="next-btn" onClick={handleNext}>
                {currentQ + 1 === quizData.length ? "Finish" : "Next"}
              </button>
              <p className="progress">
                {currentQ + 1} of {quizData.length} questions
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
