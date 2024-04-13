import React, { useState, useEffect } from "react"
import { RollableDie, ScoreCategory, ScoreType, ScorecardSectionData } from "@/app/types";

export default function ScorecardSection(data: ScorecardSectionData) {
    const initializeScoreCategory = (scoreType: ScoreType): ScoreCategory => {
        return {
            marked: false,
            score: 0,
            scoreType: scoreType,
            submitted: false
        }
    }

    const initializeAllScoreCategories = (): ScoreCategory[] => {
        const scoreCategories: ScoreCategory[] = [];

        Object.keys(ScoreType).forEach((key: string, index: number) => {
            const scoreType: ScoreType = index as ScoreType;
            scoreCategories.push(initializeScoreCategory(scoreType));
        })

        return scoreCategories;
    }

    const [scoreCategories, setScoreCategories] = useState<ScoreCategory[]>(initializeAllScoreCategories());

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

    const isScoreTypeNumerical = (scoreType: ScoreType): boolean => {
        return (scoreType === ScoreType.Ones ||
               scoreType === ScoreType.Twoes ||
               scoreType === ScoreType.Threes ||
               scoreType === ScoreType.Fours ||
               scoreType === ScoreType.Fives ||
               scoreType === ScoreType.Sixes)
    }

    const calculateScoreForSection = (dice: RollableDie[], scoreType: ScoreType) => {
        if (isScoreTypeNumerical(scoreType))
        {
            return calculateScoreForNumericalCategory(dice, scoreType);
        }
        else {
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
    }
    
    useEffect(() => {
        // for each section that hasn't been claimed, update the value
        for (let i = 0; i < scoreCategories.length; i++)
        {
            if (!scoreCategories[i].submitted)
            {
                
                // calculateScoreForSection(data.dice, scoreCategories[i].scoreType)
            }
        }
    }, [data.dice])

    const onScoreSubmitted = () => {
        for (let i = 0; i < scoreCategories.length; i++)
        {
            if (scoreCategories[i].marked)
            {
                data.markScore(scoreCategories[i].score);
                return;
            }
        }
    };

    const getElementFromCategory = (scoreCategory: ScoreCategory) => {
        return (
            <div>{scoreCategory.score}</div>
        )
    }

    const numericalScoreCategories = scoreCategories.filter((category) => {
        return isScoreTypeNumerical(category.scoreType);
    });

    const numericalScoreElements = numericalScoreCategories.map((scoreCategory) => {
        return getElementFromCategory(scoreCategory);
    });

    const nonNumericalScoreCategories = scoreCategories.filter((category) => {
        return !isScoreTypeNumerical(category.scoreType);
    });

    const nonNumericalScoreElements = nonNumericalScoreCategories.map((scoreCategory) => {
        return getElementFromCategory(scoreCategory);
    });

    return (
        <div className="scorecard-section">
            <div className="scorecard">
                <div className="left-scorecard">
                    {numericalScoreElements}
                </div>
                <div className="right-scorecard">
                    {nonNumericalScoreElements}
                </div>
            </div>
            <div className="score-report-section">
                <span>Total Score: {data.score}</span>
                <span>High Score: ###</span>
            </div>
            <button className="action-button" onClick={onScoreSubmitted}>Confirm</button>
        </div>
    )
}