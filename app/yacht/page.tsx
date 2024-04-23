"use client"; // This is a client component

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { RollableDie } from "../types";
import DiceSection from "@/components/dice-section";
import ScorecardSection from "@/components/scorecard-section";
import YachtGameInfo from "@/components/yacht-game-info";

export default function Page() {
  const [showHelp, setShowHelp] = useState(false);
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

  // todo: change this for initialization
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
    }
    
    // update rolls left
    setRollsLeft((prevRollsLeft) => {
      return prevRollsLeft - 1;
    })
  
    // after $rollDuration seconds, finish "rolling"
    setTimeout(() => {
      setIsRolling(false);
    }, rollDuration);
  }

  const setHeld = (id: string) => {
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  const toggleShowHelp = () => {
    setShowHelp(prevShowHelp => !prevShowHelp);
  }

  const markScore = (score: number) =>
  {
    setScore(prevScore => prevScore + score);

    setPointsSubmitted(true);
    setRollsLeft(3);
    setDice(prevDice => prevDice.map(die => {
      return {...die,
          isHeld: false
        }
    }));
  }

  return (
    <div className={showHelp ? "yacht-page show-help" : "yacht-page"}>
      {showHelp && <YachtGameInfo closeInfoBox={toggleShowHelp}></YachtGameInfo>}
      <DiceSection dice={dice} rollsLeft={rollsLeft} arePointsSubmitted={pointsSubmitted} toggleIsHeld={setHeld} rollDice={rollDice} isRolling={isRolling} toggleShowHelp={toggleShowHelp} />
      <ScorecardSection dice={dice} score={score} markScore={markScore}  arePointsSubmitted={pointsSubmitted} isRolling={isRolling} />
    </div>
  )
}