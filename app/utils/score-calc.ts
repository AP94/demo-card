import { RollableDie, ScoreType } from "../types";

const generateDiceValueMap = (dice: RollableDie[]): { [id: number]: number } => {
    const valueMap: { [id: number]: number } = {};

    dice.forEach(die => {
        if (!valueMap[die.value])
        {
            valueMap[die.value] = 1;
        }
        else {
            valueMap[die.value] = valueMap[die.value] + 1;
        }
    });

    return valueMap;
}

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

const calculateFullHouseScore = (dice: RollableDie[]) => {
    const valueMap: { [id: number]: number } = generateDiceValueMap(dice);

    let hasTwoOfaKind = false;
    let hasThreeOfaKind = false;
    let total = 0;

    for (let key in valueMap) {
        let count = valueMap[key];
        
        total = total + (count * Number(key));

        if (count === 2)
        {
            hasTwoOfaKind = true;
        }
        if (count === 3)
        {
            hasThreeOfaKind = true;
        }
    }

    return (hasTwoOfaKind && hasThreeOfaKind) ? total : 0;
}

const calculateFourOfAKindScore = (dice: RollableDie[]) => {
    const valueMap: { [id: number]: number } = generateDiceValueMap(dice);

    for (let key in valueMap) {
        let count = valueMap[key];
        
        if (count === 4)
        {
            return 4 * Number(key);
        }
    }

    return 0;
}

const calculateLittleStraightScore = (dice: RollableDie[]) => {
    const valueMap: { [id: number]: number } = generateDiceValueMap(dice);

    if (valueMap[1] === 1 &&
        valueMap[2] === 1 &&
        valueMap[3] === 1 &&
        valueMap[4] === 1 &&
        valueMap[5] === 1)
    {
        return 30;
    }

    return 0;
}

const calculateBigStraightScore = (dice: RollableDie[]) => {
    const valueMap: { [id: number]: number } = generateDiceValueMap(dice);
    
    if (valueMap[2] === 1 &&
        valueMap[3] === 1 &&
        valueMap[4] === 1 &&
        valueMap[5] === 1 &&
        valueMap[6] === 1 )
    {
        return 30;
    }

    return 0;
}

const calculateChanceScore = (dice: RollableDie[]) => {
    let total = 0;

    dice.forEach((die) => total = total + die.value);

    return total;
}

const calculateYachtScore = (dice: RollableDie[]) => {
    const valueMap: { [id: number]: number } = generateDiceValueMap(dice);

    for (let key in valueMap) {
        let count = valueMap[key];
        
        if (count === 5)
        {
            return 50;
        }
    }

    return 0;
}

const calculateScore = (dice: RollableDie[], scoreType: ScoreType) => {
    const scoreTypeAsNumber = scoreType as number;
    if (scoreTypeAsNumber > 0 && scoreTypeAsNumber < 7) {
        return calculateScoreForNumericalCategory(dice, scoreTypeAsNumber);
    }
    else
    {
        switch (scoreType) {
            case (ScoreType.FullHouse):
                {
                    return calculateFullHouseScore(dice);
                }
            case (ScoreType.FourOfAKind):
                {
                    return calculateFourOfAKindScore(dice);
                }
            case (ScoreType.LittleStraight):
                {
                    return calculateLittleStraightScore(dice);
                }
            case (ScoreType.BigStraight):
                {
                    return calculateBigStraightScore(dice);
                }
            case (ScoreType.Chance):
                {
                    return calculateChanceScore(dice);
                }
            case (ScoreType.Yacht):
                {
                    return calculateYachtScore(dice);
                }
            default:
                return 0;
        }
    }
}

export {
    calculateScore
}