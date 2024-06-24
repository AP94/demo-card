import React, { useState } from "react";
import { ScoreCategory, ScoreType, ScorecardSectionData, getScoreTypeDisplayName } from "@/app/types";
import { nanoid } from "nanoid";
import { strings as s, interpolate as i } from "../../app/strings";

export default function ScorecardSection(data: ScorecardSectionData) {
    
    const [selectedScoreType, setSelectedScoreType] = useState<ScoreType | null>(null);

    const onScoreSubmitted = () => {
        for (let i = 0; i < data.scoreCategories.length; i++) {
            if (data.scoreCategories[i].scoreType === selectedScoreType) {
                data.markScore(data.scoreCategories[i].score, selectedScoreType);
                setSelectedScoreType(null);
                return;
            }
        }
    };

    const onClicked = (scoreType: ScoreType) => {
        setSelectedScoreType((prevScoreType) => {
            if (prevScoreType === scoreType) {
                return null;
            }
            return scoreType;
        })
    }

    const getElementFromCategory = (scoreCategory: ScoreCategory) => {
        const typeLabel = scoreCategory.scoreType.toString();

        const generateCheckboxDesciption = () => {
            let toggleSelectText = scoreCategory.scoreType == selectedScoreType ? s['yacht.deselect'] : s['yacht.select'];
            return `${toggleSelectText} ${getScoreTypeDisplayName(scoreCategory.scoreType)} for ${scoreCategory.score} points`
        }

        return (
            <div key={nanoid()} className="row">
                <div className="label col">{getScoreTypeDisplayName(scoreCategory.scoreType)}</div>
                <div className="score col">{scoreCategory.score}</div>
                <div className="col">
                    <div className="checkbox-container">
                        <input key={nanoid()}
                        id={typeLabel}
                        name={`radio-${typeLabel}`}
                        type="checkbox"
                        checked={scoreCategory.scoreType == selectedScoreType || scoreCategory.submitted}
                        onChange={() => onClicked(scoreCategory.scoreType)}
                        disabled={scoreCategory.submitted || data.isRolling || data.arePointsSubmitted}
                        data-message={generateCheckboxDesciption()}
                        />
                        <span className="fake-checkbox"></span>
                    </div>
                </div>
            </div>
        )
    };

    const numericalScoreElements = data.scoreCategories.filter(
        (scoreCategory => {
            return scoreCategory.scoreType === ScoreType.Ones ||
                   scoreCategory.scoreType === ScoreType.Twos ||
                   scoreCategory.scoreType === ScoreType.Threes ||
                   scoreCategory.scoreType === ScoreType.Fours ||
                   scoreCategory.scoreType === ScoreType.Fives ||
                   scoreCategory.scoreType === ScoreType.Sixes
        }))
        .map((scoreCategory) => {
            return getElementFromCategory(scoreCategory);
    });

    const specialScoreElements = data.scoreCategories.filter(
        (scoreCategory => {
            return scoreCategory.scoreType === ScoreType.FullHouse ||
                   scoreCategory.scoreType === ScoreType.FourOfAKind ||
                   scoreCategory.scoreType === ScoreType.LittleStraight ||
                   scoreCategory.scoreType === ScoreType.BigStraight ||
                   scoreCategory.scoreType === ScoreType.Choice ||
                   scoreCategory.scoreType === ScoreType.Yacht
        })).map((scoreCategory) => {
        return getElementFromCategory(scoreCategory);
    });

    const openHighScoreResetPrompt = () =>
    {
        if (confirm(s['yacht.resetConfirmationPrompt'])) {
            data.resetHighScore();
          }
    }

    return (
        <div className="scorecard-section">
            <div className="scorecard">
                <div className="left-scorecard">
                    {numericalScoreElements}
                </div>
                <div className="right-scorecard">
                    {specialScoreElements}
                </div>
            </div>
            <div className="score-report-section">
                <div className="scores">
                    <span>Score: {data.score}</span>
                    <span className="clickable" onClick={() => openHighScoreResetPrompt()} title={s['yacht.reset.screenReaderMessage']}>{i('yacht.highScoreInterpolated', data.highScore.toString())}</span>
                </div>
                <button className="action-button" onClick={onScoreSubmitted} disabled={selectedScoreType === null || data.arePointsSubmitted} data-message={s['yacht.submitScore.screenReaderMessage']}>{s['yacht.submitScore']}</button>
            </div>
        </div>
    )
}