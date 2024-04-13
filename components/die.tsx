import React from "react"

export interface DieData {
    id: string;
    value: number;
    isHeld: boolean;
    toggleSelect: (id: string) => void;
}

export default function Die(data: DieData) {
    let dieClassName = "die-face";
    if (data.value < 4)
    {
        dieClassName = dieClassName + " diagonal";
    }
    if (data.isHeld)
    {
        dieClassName = dieClassName + " locked";
    }
    else
    {
        dieClassName = dieClassName + " unlocked";
    }

    const handleClick = () => {
        data.toggleSelect(data.id);
    }

    return (
        <div className={dieClassName} onClick={handleClick}>
            <div className="top-row">
                {data.value > 1 && <div className="dot" />}
                {data.value > 3 && <div className="dot" />}
            </div>
            <div className={data.value%2 === 0 ? "middle-row even" : "middle-row odd"}>
                {data.value === 6 && <div className="dot" />}
                {data.value%2 === 1 && <div className="dot" />}
                {data.value === 6 && <div className="dot" />}
            </div>
            <div className="bottom-row">
                {data.value > 3 && <div className="dot" />}
                {data.value > 1 && <div className="dot" />}
            </div>
        </div>
    )
}