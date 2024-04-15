import React, { useState, useEffect } from "react"
import { RollableDie, ScoreCategory, ScoreType, ScorecardSectionData } from "@/app/types";
import { nanoid } from "nanoid";

export default function ScorecardSection(data: ScorecardSectionData) {
    const initializeScoreCategory = (scoreType: ScoreType): ScoreCategory => {
        return {
            marked: false,
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

    const calculateScoreForNumericalCategory = (dice: RollableDie[], diceValue: number) => {
        let total = 0;

        for (let i = 0; i < dice.length; i++)
        {
            if (dice[i].value === diceValue)
            {
                total = total + diceValue;
            }
        }

        return total;
    }

    const calculateScoreForSpecialCategory = (dice: RollableDie[], scoreType: ScoreType) => {
        switch (scoreType) {
            // case (ScoreType.FullHouse):
            //     {}
            // case (ScoreType.FourOfAKind):
            //     {}
            // case (ScoreType.LittleStraight):
            //     {}
            // case (ScoreType.BigStraight):
            //     {}
            // case (ScoreType.Chance):
            //     {}
            // case (ScoreType.Yacht):
            //     {}
            default:
                return 0;
        }
    }
    
    useEffect(() => {
        // for each section that hasn't been submitted, update the value
        setNumericalScoreCategories((prevScoreCategories) => {
            return prevScoreCategories.map((scoreCategory) => {
                return scoreCategory.submitted ? scoreCategory :
                    {
                        ...scoreCategory,
                        score: calculateScoreForNumericalCategory(data.dice, scoreCategory.scoreType)
                    }
            })
        });
        setSpecialScoreCategories((prevScoreCategories) => {
            return prevScoreCategories.map((scoreCategory) => {
                return scoreCategory.submitted ? scoreCategory :
                    {
                        ...scoreCategory,
                        score: calculateScoreForSpecialCategory(data.dice, scoreCategory.scoreType)
                    }
            })
        });
    }, [data.dice]);

    useEffect(() => {
        // Whenever the selected score type is reset, uncheck the checked option
        if (selectedScoreType === null) {
            document.querySelectorAll('input[type=radio]').forEach((el: any) => el.checked = false );
        }
    }, [selectedScoreType]);

    const onScoreSubmitted = () => {
        for (let i = 0; i < numericalScoreCategories.length; i++) {
            if (numericalScoreCategories[i].scoreType === selectedScoreType) {
                data.markScore(numericalScoreCategories[i].score);
                setSelectedScoreType(null);
                return;
            }
        }

        for (let i = 0; i < specialScoreCategories.length; i++) {
            if (specialScoreCategories[i].scoreType === selectedScoreType) {
                data.markScore(specialScoreCategories[i].score);
                setSelectedScoreType(null);
                return;
            }
        }
    };

    const getScoreTypeDisplayName = (scoreType: ScoreType) => {
        switch (scoreType) {
            case ScoreType.Ones:
                return "Ones";
            case ScoreType.Twos:
                return "Twos";
            case ScoreType.Threes:
                return "Threes";
            case ScoreType.Fours:
                return "Fours";
            case ScoreType.Fives:
                return "Fives";
            case ScoreType.Sixes:
                return "Sixes";
            case ScoreType.FullHouse:
                return "Full House";
            case ScoreType.FourOfAKind:
                return "Four of a Kind";
            case ScoreType.LittleStraight:
                return "Little Straight";
            case ScoreType.BigStraight:
                return "Big Straight";
            case ScoreType.Chance:
                return "Chance";
            case ScoreType.Yacht:
                return "Yacht";
        }
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
                        checked={scoreCategory.scoreType == selectedScoreType}
                        onChange={() => setSelectedScoreType(scoreCategory.scoreType)}
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
                    <span>High Score: ###</span>
                </div>
                <button className="action-button" onClick={onScoreSubmitted}>Confirm</button>
            </div>
        </div>
    )
}