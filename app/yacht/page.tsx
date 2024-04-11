"use client"; // This is a client component

import { useState } from "react";

export default function Page() {
  const [rollsLeft, setRollsLeft] = useState(3);
  const [pointsSubmitted, setPointsSubmitted] = useState(false);

  const rollDice = () => {
    // roll dice

    setRollsLeft((prevRollsLeft) => {
      if (prevRollsLeft > 0)
      {
        return prevRollsLeft - 1;
      }
      else
      {
        return 3;
      }
    })
  }

  const markScore = () =>
  {
    // doublecheck that a points section box is checked
    // add points to total score
    // disable the selected points section box
    // (maybe) add styling to the submitted points in the scorecard

    setPointsSubmitted((prevSubmitted) => !prevSubmitted);
    setRollsLeft(3);
  }

  return (
    <div className="yacht-page">
      <div className="help-button"></div>
      <div className="dice-section">
        <div className="dice-tray">
          [todo]
        </div>
        <div className="roll-button-container">
          <button className="action-button" onClick={rollDice}>Roll</button>
          <div className="roll-tracking">
            [][][]
          </div>
        </div>
      </div>
      <div className="scorecard-section">
        <div className="scorecard">
          <div className="left-scorecard">
            [todo]
          </div>
          <div className="right-scorecard">
            [todo]
          </div>
        </div>
        <div className="score-report-section">
          <span>Total Score: ###</span>
          <span>High Score: ###</span>
        </div>
        <button className="action-button" onClick={markScore}>Confirm</button>
      </div>
    </div>
  )
}