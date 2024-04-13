"use client"; // This is a client component

import { useEffect, useState } from "react";
import Die from "../../components/die";
import {nanoid} from "nanoid";

interface RollableDie {
  value: number;
  isHeld: boolean;
  isRolling: boolean;
  id: string;
}

export default function Page() {
  const [rollsLeft, setRollsLeft] = useState(2);
  const [pointsSubmitted, setPointsSubmitted] = useState(false);
  const [dice, setDice] = useState<RollableDie[]>([]);

  const rollDuration = 1000;

  const generateDie = () => {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      isRolling: true,
      id: nanoid()
    }
  }

  const rollAllDice = () => {
    let dice: RollableDie[] = [];
    for (let i = 0; i < 5; i++) {
      dice.push(generateDie());
    }
    setDice(dice);

    setTimeout(() => {
      setDice(prevDice => prevDice.map(die => {
        return {...die, isRolling: false}
      }))
    })
  }

  useEffect(() => {
    rollAllDice();
  }, []);

  const rollDice = () => {
    if (pointsSubmitted) {
      setPointsSubmitted(false);
      rollAllDice();
    }

    else {
      // roll dice
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          {...die,
            value: Math.ceil(Math.random() * 6),
            isRolling: true
          }
      }));
  
      // update rolls left
      setRollsLeft((prevRollsLeft) => {
        if (prevRollsLeft > 0)
        {
          return prevRollsLeft - 1;
        }
        else
        {
          return 2;
        }
      })
    }
  
    // after 0.5 seconds, finish "rolling"
    setTimeout(() => {
      setDice(prevDice => prevDice.map(die => {
        return die.isRolling ?
          {...die,
            isRolling: false
          } :
          die
      }));
    }, rollDuration);
  
  }

  const markScore = () =>
  {
    // doublecheck that a points section box is checked
    // add points to total score
    // disable the selected points section box
    // (maybe) add styling to the submitted points in the scorecard

    setPointsSubmitted(true);
    setRollsLeft(2);
    setDice(prevDice => prevDice.map(die => {
      return die.isRolling ?
        {...die,
          isHeld: false
        } :
        die
    }));
  }

  const setHeld = (id: string) => {
    console.log(id);
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} isRolling={die.isRolling} toggleSelect={setHeld}></Die>
  ));

  return (
    <div className="yacht-page">
      <div className="help-button"></div>
      <div className="dice-section">
        <div className="dice-tray">
            <div className="dice-row">
              {diceElements[0]}
              {diceElements[1]}
            </div>
            <div className="dice-row">
              {diceElements[2]}
            </div>
            <div className="dice-row">
              {diceElements[3]}
              {diceElements[4]}
            </div>
          {/* <div>TODO: initial state - play button</div> */}
        </div>
        <button className="action-button" onClick={rollDice} disabled={rollsLeft < 1 && !pointsSubmitted}>Roll</button>
        <div className="roll-tracking">
          <div className={rollsLeft < 3 ? 'roll-box active' : 'roll-box inactive'}></div>
          <div className={rollsLeft < 2 ? 'roll-box active' : 'roll-box inactive'}></div>
          <div className={rollsLeft < 1 ? 'roll-box active' : 'roll-box inactive'}></div>
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