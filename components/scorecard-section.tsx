import React, { useState, useEffect } from "react"
import { RollableDie, ScoreCategory, ScoreType, ScorecardSectionData, getScoreTypeDisplayName } from "@/app/types";
import { nanoid } from "nanoid";
import { calculateScore } from "@/app/utils/score-calc";

export default function ScorecardSection(data: ScorecardSectionData) {
    const initializeScoreCategory = (scoreType: ScoreType): ScoreCategory => {
        return {
            score: 0,
            scoreType: scoreType,
            submitted: false
        }
    }

    const [numericalScoreCategories, setNumericalScoreCategories] = useState<ScoreCategory[]>([
        initializeScoreCategory(ScoreType.Ones),
        initializeScoreCategory(ScoreType.Twos),
        initializeScoreCategory(ScoreType.Threes),
        initializeScoreCategory(ScoreType.Fours),
        initializeScoreCategory(ScoreType.Fives),
        initializeScoreCategory(ScoreType.Sixes)
    ]);

    const [specialScoreCategories, setSpecialScoreCategories] = useState<ScoreCategory[]>([
        initializeScoreCategory(ScoreType.FullHouse),
        initializeScoreCategory(ScoreType.FourOfAKind),
        initializeScoreCategory(ScoreType.LittleStraight),
        initializeScoreCategory(ScoreType.BigStraight),
        initializeScoreCategory(ScoreType.Chance),
        initializeScoreCategory(ScoreType.Yacht)
    ]);

    const [selectedScoreType, setSelectedScoreType] = useState<ScoreType | null>(null);

    
    useEffect(() => {
        if (!data.isRolling) {
            // for each section that hasn't been submitted, update the value
            setNumericalScoreCategories((prevScoreCategories) => {
                return prevScoreCategories.map((scoreCategory) => {
                    return scoreCategory.submitted ? scoreCategory :
                        {
                            ...scoreCategory,
                            score: calculateScore(data.dice, scoreCategory.scoreType)
                        }
                })
            });
            setSpecialScoreCategories((prevScoreCategories) => {
                return prevScoreCategories.map((scoreCategory) => {
                    return scoreCategory.submitted ? scoreCategory :
                        {
                            ...scoreCategory,
                            score: calculateScore(data.dice, scoreCategory.scoreType)
                        }
                })
            });
        }
    }, [data.isRolling]);

    const onScoreSubmitted = () => {
        for (let i = 0; i < numericalScoreCategories.length; i++) {
            if (numericalScoreCategories[i].scoreType === selectedScoreType) {
                data.markScore(numericalScoreCategories[i].score);
                setSelectedScoreType(null);
                setNumericalScoreCategories((prevScoreCategories) => {
                    return prevScoreCategories.map((category) => {
                        return category.scoreType === selectedScoreType ?
                        {...category,
                        submitted: true} :
                        category
                    })
                })
                return;
            }
        }

        for (let i = 0; i < specialScoreCategories.length; i++) {
            if (specialScoreCategories[i].scoreType === selectedScoreType) {
                data.markScore(specialScoreCategories[i].score);
                setSelectedScoreType(null);
                setSpecialScoreCategories((prevScoreCategories) => {
                    return prevScoreCategories.map((category) => {
                        return category.scoreType === selectedScoreType ?
                        {...category,
                        submitted: true} :
                        category
                    })
                })
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

        return (
            <div key={nanoid()} className="row">
                <div className="label col">{getScoreTypeDisplayName(scoreCategory.scoreType)}</div>
                <div className="col">{scoreCategory.score}</div>
                <div className="col">
                    <div className="checkbox-container">
                        <input key={nanoid()}
                        id={typeLabel}
                        name={`radio-${typeLabel}`}
                        type="checkbox"
                        checked={scoreCategory.scoreType == selectedScoreType || scoreCategory.submitted}
                        onChange={() => onClicked(scoreCategory.scoreType)}
                        disabled={scoreCategory.submitted || data.isRolling || data.arePointsSubmitted}
                        />
                        <span className="fake-checkbox"></span>
                    </div>
                </div>
            </div>
        )
    };

    const numericalScoreElements = numericalScoreCategories.map((scoreCategory) => {
        return getElementFromCategory(scoreCategory);
    });

    const specialScoreElements = specialScoreCategories.map((scoreCategory) => {
        return getElementFromCategory(scoreCategory);
    });

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
                    <span>Total Score: {data.score}</span>
                    <span>High Score: 0</span>
                </div>
                <button className="action-button" onClick={onScoreSubmitted} disabled={selectedScoreType === null || data.arePointsSubmitted}>Submit</button>
            </div>
        </div>
    )
}