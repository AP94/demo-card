"use client"; // This is a client component

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { RollableDie } from "../types";
import DiceSection from "@/components/dice-section";
import ScorecardSection from "@/components/scorecard-section";

export default function Page() {
  const [rollsLeft, setRollsLeft] = useState(2);
  const [pointsSubmitted, setPointsSubmitted] = useState(false);
  const [dice, setDice] = useState<RollableDie[]>([]);
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

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
    setIsRolling(true);

    let dice: RollableDie[] = [];
    for (let i = 0; i < 5; i++) {
      dice.push(generateDie());
    }
    setDice(dice);

    // after "rollDuration" seconds, finish "rolling"
    setTimeout(() => {
      setIsRolling(false);
    }, rollDuration);
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
      setIsRolling(true);

      // roll dice
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          {...die,
            value: Math.ceil(Math.random() * 6)
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
  
    // after "rollDuration" seconds, finish "rolling"
    setTimeout(() => {
      setIsRolling(false);
    }, rollDuration);
  }

  const markScore = (score: number) =>
  {
    // doublecheck that a points section box is checked
    setScore(prevScore => prevScore + score);
    // disable the selected points section box
    // (maybe) add styling to the submitted points in the scorecard

    setPointsSubmitted(true);
    setRollsLeft(2);
    setDice(prevDice => prevDice.map(die => {
      return {...die,
          isHeld: false
        }
    }));
  }

  const setHeld = (id: string) => {
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  return (
    <div className="yacht-page">
      <div className="help-button"></div>
      {/* <div>TODO: initial state - instructions & play button</div> */}
      <DiceSection dice={dice} rollsLeft={rollsLeft} arePointsSubmitted={pointsSubmitted} toggleIsHeld={setHeld} rollDice={rollDice} isRolling={isRolling} />
      <ScorecardSection dice={dice} score={score} markScore={markScore}  arePointsSubmitted={pointsSubmitted} />
    </div>
  )
}