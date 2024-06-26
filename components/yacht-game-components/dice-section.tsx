import React from "react";
import Die from "./die";
import { DiceSectionData } from "@/app/types";
import { strings as s, interpolate as i } from "../../app/strings";

export default function DiceSection(data: DiceSectionData) {

    const diceElements = data.dice.map(die => (
        <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} isRolling={!die.isHeld && data.isRolling} toggleIsHeld={data.toggleIsHeld} disabled={data.arePointsSubmitted}></Die>
      ));

    const generateRollsLeftDescription = () => {
        return data.rollsLeft === 1 ? s['yacht.oneRollLeft'] : i('yacht.rollsLeftInterpolated', data.rollsLeft.toString());
    }

    return (
        <div className="dice-section">
            <div className="dice-tray-section">
                <button className="info-button" onClick={data.toggleShowInfo}>i</button>
                <button className="help-button" onClick={data.toggleShowHelp}>?</button>
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
            </div>
            <button className="action-button" onClick={data.rollDice} disabled={(data.rollsLeft < 1 && !data.arePointsSubmitted) || data.isRolling} data-message={s['yacht.roll.screenReaderMessage']}>{data.rollText}</button>
            <div className="roll-tracking" data-message={generateRollsLeftDescription()}>
            <div className={data.rollsLeft < 3 ? 'roll-box active' : 'roll-box inactive'}></div>
            <div className={data.rollsLeft < 2 ? 'roll-box active' : 'roll-box inactive'}></div>
            <div className={data.rollsLeft < 1 ? 'roll-box active' : 'roll-box inactive'}></div>
            </div>
      </div>
    )
}