import React from "react";

export default function YachtGameIntroduction(data: {onStartButtonClick: () => void;}) {
    return (
        <div className="yacht-game-intro">
            <div className="intro-container">
                <h2>Welcome to Yacht!</h2>
                <p>Yacht is a public domain dice game that is <i>not</i> Yahtzee(TM). It's actually the game Yahtzee was based on! There are many versions of Yacht, and many dice games with similar rule sets across different countries, but the one presented here is the 1938 version of the game <a href="https://en.wikipedia.org/wiki/Yacht_(dice_game)" target="_blank">as detailed on the Wikipedia page</a>.</p>
                <p>The rules are simple:</p>
                    <li>You have five dice that you can roll up to three times each round by clicking the Roll button</li>
                    <li>Click on a die to "lock" it, preventing it from being rolled with the other dice. Click it again to "unlock" it.</li>
                    <li>By the end of each round, you must choose a category to mark your score. Each category can only be used once.</li>
                    <li>The game ends when all score categories have been marked. Try to get the highest score possible!</li>
                <span>For more details on how each scoring section works, click the <div className="help-button">?</div> icon on the game screen.</span>
            </div>
            <button className="action-button" onClick={() => data.onStartButtonClick()}>Play</button>
        </div>
    )
}