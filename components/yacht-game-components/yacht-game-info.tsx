import React from "react";
import { nanoid } from "nanoid";
import Die from "./die";
import { strings as s } from "../../app/strings";

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
            <button className="close-button" onClick={data.closeInfoBox} data-message={s['yacht.scoreGuide.close.screenReaderMessage']}>X</button>
            <div className="game-info-container">
                <h2>{s['yacht.scoreGuide.header']}</h2>
                <h3>{s['yacht.scoreGuide.numbers.header']}</h3>
                <p>{s['yacht.scoreGuide.numbers.info']}</p>
                <p>{s['yacht.scoreGuide.numbers.example']}</p>
                {generateExampleDiceSetElement([4, 5, 4, 4, 2])}
                <h3>{s['yacht.scoreGuide.fullHouse.header']}</h3>
                <p>{s['yacht.scoreGuide.fullHouse.info']}</p>
                <p>{s['yacht.scoreGuide.fullHouse.example']}</p>
                {generateExampleDiceSetElement([6, 6, 3, 3, 3])}
                <h3>{s['yacht.scoreGuide.fourOfAKind.header']}</h3>
                <p>{s['yacht.scoreGuide.fourOfAKind.info']}</p>
                <p>{s['yacht.scoreGuide.fourOfAKind.example']}</p>
                {generateExampleDiceSetElement([2, 2, 6, 2, 2])}
                <h3>{s['yacht.scoreGuide.littleStraight.header']}</h3>
                <p>{s['yacht.scoreGuide.littleStraight.info']}</p>
                {generateExampleDiceSetElement([1, 2, 3, 4, 5])}
                <h3>{s['yacht.scoreGuide.bigStraight.header']}</h3>
                <p>{s['yacht.scoreGuide.bigStraight.info']}</p>
                {generateExampleDiceSetElement([2, 3, 4, 5, 6])}
                <h3>{s['yacht.scoreGuide.choice.header']}</h3>
                <p>{s['yacht.scoreGuide.choice.info']}</p>
                <p>{s['yacht.scoreGuide.choice.example']}</p>
                {generateExampleDiceSetElement([4, 5, 6, 2, 5])}
                <h3>{s['yacht.scoreGuide.yacht.header']}</h3>
                <p>{s['yacht.scoreGuide.yacht.info']}</p>
                {generateExampleDiceSetElement([1, 1, 1, 1, 1])}
            </div>
        </div>
    )
}