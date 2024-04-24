"use client"; // This is a client component

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { RollableDie, ScoreCategory, ScoreType } from "../types";
import DiceSection from "@/components/yacht-game-components/dice-section";
import ScorecardSection from "@/components/yacht-game-components/scorecard-section";
import YachtGameInfo from "@/components/yacht-game-components/yacht-game-info";
import { calculateScore } from "../utils/score-calc";
import YachtGameIntroduction from "@/components/yacht-game-components/yacht-game-introduction";

export default function Page() {
  const [initialState, setInitialState] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [rollsLeft, setRollsLeft] = useState(2);
  const [pointsSubmitted, setPointsSubmitted] = useState(false);
  const [dice, setDice] = useState<RollableDie[]>([]);
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [endState, setEndState] = useState(false);

  const initializeScoreCategory = (scoreType: ScoreType): ScoreCategory => {
    return {
        score: 0,
        scoreType: scoreType,
        submitted: false
    }
  }

  const initializeScoreCategories = () => {
    setScoreCategories([
      initializeScoreCategory(ScoreType.Ones),
      initializeScoreCategory(ScoreType.Twos),
      initializeScoreCategory(ScoreType.Threes),
      initializeScoreCategory(ScoreType.Fours),
      initializeScoreCategory(ScoreType.Fives),
      initializeScoreCategory(ScoreType.Sixes),
      initializeScoreCategory(ScoreType.FullHouse),
      initializeScoreCategory(ScoreType.FourOfAKind),
      initializeScoreCategory(ScoreType.LittleStraight),
      initializeScoreCategory(ScoreType.BigStraight),
      initializeScoreCategory(ScoreType.Choice),
      initializeScoreCategory(ScoreType.Yacht)
    ]);
  }

  const [scoreCategories, setScoreCategories] = useState<ScoreCategory[]>([]);

  const rollDuration = 1000;
  const highScoreKey = "yachtGameHighScore";

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

    // after $rollDuration seconds, finish "rolling"
    setTimeout(() => {
      setIsRolling(false);
    }, rollDuration);
  }

  useEffect(() => {
    const storedHighScore: number = JSON.parse(localStorage.getItem(highScoreKey) || '0')
    setHighScore(storedHighScore);
    
    initializeScoreCategories();
    rollAllDice();
  }, []);

  useEffect(() => {
    if (!isRolling) {
      // for each section that hasn't been submitted, update the value
      setScoreCategories((prevScoreCategories) => {
        return prevScoreCategories.map((scoreCategory) => {
          return scoreCategory.submitted ? scoreCategory :
            {
              ...scoreCategory,
              score: calculateScore(dice, scoreCategory.scoreType)
            }
          })
        });
    }
  }, [isRolling]);

  useEffect(() => {
    if(!initialState && scoreCategories.every((category) => !!category.submitted)) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem(highScoreKey, JSON.stringify(score));
      }
      setEndState(true);
    }
  }, [scoreCategories])

  const rollDice = () => {
    if (endState) {
      initializeScoreCategories();
      setScore(0);
      rollAllDice();
      setEndState(false);
    }

    else if (pointsSubmitted) {
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

  const onStartGame = () => {
    setInitialState(false);
  }

  const toggleShowHelp = () => {
    setShowHelp(prevShowHelp => !prevShowHelp);
  }

  const markScore = (score: number, scoreType: ScoreType) =>
  {
    setScore(prevScore => prevScore + score);

    setPointsSubmitted(true);
    setRollsLeft(3);
    setDice(prevDice => prevDice.map(die => {
      return {...die,
          isHeld: false
        }
    }));
    
    setScoreCategories((prevScoreCategories) => {
      return prevScoreCategories.map((scoreCategory) => {
          return scoreCategory.scoreType === scoreType ?
          {...scoreCategory,
          submitted: true} :
          scoreCategory
      })
    });
  }

  return (
    <div className={showHelp || initialState ? "yacht-page dialog-open" : "yacht-page"}>
      {initialState && <YachtGameIntroduction onStartButtonClick={onStartGame} />}
      {showHelp && <YachtGameInfo closeInfoBox={toggleShowHelp} />}
      <DiceSection dice={dice}
        rollsLeft={rollsLeft}
        arePointsSubmitted={pointsSubmitted}
        toggleIsHeld={setHeld}
        rollDice={rollDice}
        isRolling={isRolling}
        rollText={endState ? "Play again" : "Roll"}
        toggleShowHelp={toggleShowHelp} />
      <ScorecardSection scoreCategories={scoreCategories}
        dice={dice}
        score={score}
        highScore={highScore}
        markScore={markScore}
        arePointsSubmitted={pointsSubmitted}
        isRolling={isRolling} />
    </div>
  )
}