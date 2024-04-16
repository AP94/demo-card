export interface RollableDie {
    value: number;
    isHeld: boolean;
    id: string;
}

export interface DiceSectionData {
    rollsLeft: number;
    arePointsSubmitted: boolean;
    rollDice: () => void;
    toggleIsHeld: (id: string) => void;
    dice: RollableDie[];
    isRolling: boolean;
}

export interface DieData {
    id: string;
    value: number;
    isHeld: boolean;
    isRolling: boolean;
    toggleIsHeld: (id: string) => void;
    disabled: boolean;
}

export interface ScorecardSectionData {
    dice: RollableDie[];
    score: number;
    markScore: (score: number) => void;
    arePointsSubmitted: boolean;
    isRolling: boolean;
}

export enum ScoreType {
    Ones   = 1,
    Twos  = 2,
    Threes = 3,
    Fours  = 4,
    Fives  = 5,
    Sixes  = 6,
    FullHouse,
    FourOfAKind,
    LittleStraight,
    BigStraight,
    Chance,
    Yacht
}

export const getScoreTypeDisplayName = (scoreType: ScoreType) => {
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

export interface ScoreCategory {
    score: number;
    scoreType: ScoreType;
    submitted: boolean;
}