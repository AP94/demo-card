import React from "react"
import Die from "./die";
import { DiceSectionData } from "@/app/types";

export default function DiceSection(data: DiceSectionData) {

    const diceElements = data.dice.map(die => (
        <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} isRolling={die.isRolling} toggleIsHeld={data.toggleIsHeld}></Die>
      ));

    return (
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
            </div>
            <button className="action-button" onClick={data.rollDice} disabled={data.rollsLeft < 1 && !data.arePointsSubmitted}>Roll</button>
            <div className="roll-tracking">
            <div className={data.rollsLeft < 3 ? 'roll-box active' : 'roll-box inactive'}></div>
            <div className={data.rollsLeft < 2 ? 'roll-box active' : 'roll-box inactive'}></div>
            <div className={data.rollsLeft < 1 ? 'roll-box active' : 'roll-box inactive'}></div>
            </div>
      </div>
    )
}