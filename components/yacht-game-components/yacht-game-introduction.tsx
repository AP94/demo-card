import { IntroDialogData } from "@/app/types";
import React from "react";
import { strings as s, externalLinkString as l } from "../../app/strings";

export default function YachtGameIntroduction(data: IntroDialogData) {
    
    return (
        <div className="yacht-game-intro">
            {!data.isInitialState && <button className="close-button" onClick={data.closeInfoBox} data-message={s['yacht.closeIntroDialog.screenReaderMessage']}>X</button>}
            <div className="intro-container">
                <h2>{s['yacht.introHeader']}</h2>
                <p>{l('yacht.introText', 'https://en.wikipedia.org/wiki/Yacht_(dice_game)')}</p>
                <p>{s['yacht.rulesIntro']}</p>
                    <li>{s['yacht.rule1']}</li>
                    <li>{s['yacht.rule2']}</li>
                    <li>{s['yacht.rule3']}</li>
                    <li>{s['yacht.rule4']}</li>
                    <li>{s['yacht.rule5']}</li>
                <span>{s['yacht.moreDetails1']}<div className="help-button">?</div>{s['yacht.moreDetails2']}</span>
                <span>{s['yacht.reopenIntroDialog1']}<div className="info-button">i</div>{s['yacht.reopenIntroDialog2']}</span>
            </div>
            {data.isInitialState && <button className="action-button" onClick={() => data.onStartButtonClick()}>{s['yacht.play']}</button>}
        </div>
    )
}