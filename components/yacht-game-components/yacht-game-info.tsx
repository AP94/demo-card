import React from "react";
import { nanoid } from "nanoid";
import Die from "./die";

export default function YachtGameInfo(data: {closeInfoBox: () => void;}) {

    const generateExampleDiceSetElement = (dice: number[]) => {
        return (
            <div className="example-dice-tray">
                {dice.map(dieValue => {
                    return (
                    <Die id={nanoid()}
                        key={nanoid()}
                        value={dieValue}
                        disabled={true}
                        isHeld={false}
                        isRolling={false}
                        toggleIsHeld={() => {}} />
                    )
                })}
            </div>
        )
    }

    return (
        <div className="yacht-game-info">
            <button className="close-button" onClick={data.closeInfoBox} data-message="Close game info dialog">X</button>
            <div className="game-info-container">
                <h2>Score Guide</h2>
                <h3>Ones, Twoes, Threes, Fours, Fives, and Sixes</h3>
                <p>For these categories, the score is the sum of dice with the corresponding face.</p>
                <p>For example, the following dice set would score 12 points under the Fours category:</p>
                {generateExampleDiceSetElement([4, 5, 4, 4, 2])}
                <h3>Full House</h3>
                <p>A Full House can be scored with two dice of one kind and three of another. The score marked is the sum of all dice.</p>
                <p>For example, the following dice set would score 18 points:</p>
                {generateExampleDiceSetElement([6, 6, 3, 3, 3])}
                <h3>Four of a Kind</h3>
                <p>A Four of a Kind can be scored with at least four dice with the same value. The score marked is the sum of those four dice.</p>
                <p>For example, the following dice set would score 8 points:</p>
                {generateExampleDiceSetElement([2, 2, 6, 2, 2])}
                <h3>Little Straight</h3>
                <p>A Little Straight can be scored with the values of 1 to 5, and is worth 30 points.</p>
                {generateExampleDiceSetElement([1, 2, 3, 4, 5])}
                <h3>Big Straight</h3>
                <p>A Big Straigt can be scored with the values 2 to 6, and is worth 30 points.</p>
                {generateExampleDiceSetElement([2, 3, 4, 5, 6])}
                <h3>Choice</h3>
                <p>Choice is equivalent to Chance in Yahtzee; it can be scored any time, and the score marked is the sum of all dice.</p>
                <p>For example, the following dice set would score 22 points:</p>
                {generateExampleDiceSetElement([4, 5, 6, 2, 5])}
                <h3>Yacht</h3>
                <p>Yacht is equivalent to Yahtzee, though it can only be scored once per game. Yacht can be scored when all five dice have the same value, and is worth 50 points.</p>
                {generateExampleDiceSetElement([1, 1, 1, 1, 1])}
            </div>
        </div>
    )
}