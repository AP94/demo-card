export interface RollableDie {
    value: number;
    isHeld: boolean;
    isRolling: boolean;
    id: string;
}

export interface DiceSectionData {
    rollsLeft: number;
    arePointsSubmitted: boolean;
    rollDice: () => void;
    toggleIsHeld: (id: string) => void;
    dice: RollableDie[];
}

export interface DieData {
    id: string;
    value: number;
    isHeld: boolean;
    isRolling: boolean;
    toggleIsHeld: (id: string) => void;
}