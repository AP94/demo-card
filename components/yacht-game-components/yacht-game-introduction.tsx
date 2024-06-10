import { IntroDialogData } from "@/app/types";
import React from "react";

export default function YachtGameIntroduction(data: IntroDialogData) {
    
    return (
        <div className="yacht-game-intro">
            {!data.isInitialState && <button className="close-button" onClick={data.closeInfoBox} data-message="Close game info dialog">X</button>}
            <div className="intro-container">
                <h2>Welcome to Yacht!</h2>
                <p>Yacht is a public domain dice game that is <i>not</i> Yahtzee(TM). It&apos;s actually the game Yahtzee was based on! There are many versions of Yacht, and many dice games with similar rule sets across different countries, but the one presented here is the 1938 version of the game <a href="https://en.wikipedia.org/wiki/Yacht_(dice_game)" target="_blank">as detailed on the Wikipedia page</a>.</p>
                <p>The rules are simple:</p>
                    <li>You have five dice that you can roll up to three times each round by clicking the Roll button</li>
                    <li>Click on a die to &quot;lock&quot; it, preventing it from being rolled with the other dice. Click it again to &quot;unlock&quot; it.</li>
                    <li>By the end of each round, you must choose a category to mark your score. Check the box next to the category and click `&quot;Submit`&quot; to do so. Each category can only be used once.</li>
                    <li>The game ends when all score categories have been marked. Try to get the highest score possible!</li>
                    <li>To reset your high score, click the High Score text at the bottom of the page.</li>
                <span>For more details on how each scoring section works, click the <div className="help-button">?</div> icon on the game screen.</span>
                <span>To view this dialog again, click the <div className="info-button">i</div> icon on the game screen.</span>
            </div>
            {data.isInitialState && <button className="action-button" onClick={() => data.onStartButtonClick()}>Play</button>}
        </div>
    )
}