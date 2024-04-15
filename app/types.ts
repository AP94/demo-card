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
}

export interface ScorecardSectionData {
    dice: RollableDie[];
    score: number;
    markScore: (score: number) => void;
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

export interface ScoreCategory {
    marked: boolean;
    score: number;
    scoreType: ScoreType;
    submitted: boolean;
}