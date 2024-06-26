import React from "react";
import { DieData } from "@/app/types";

export default function Die(data: DieData) {

    const dieClassName = data.disabled? "die disabled" :
     data.isHeld? "die locked" : "die";

    const handleClick = () => {
        if (!data.isRolling && !data.disabled)
        {
            data.toggleIsHeld(data.id);
        }
    }

    const dotsElement = (
        <div className={data.value < 4 ? "die-face diagonal" : "die-face"}>
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
    );

    const rollingElement = (
        <div className="rolling-face">
            <div className="dot-container">
                <div className="dot" />
            </div>
            <div className="dot-container delay">
                <div className="dot" />
            </div>
            <div className="dot-container delay2">
                <div className="dot" />
            </div>
            <div className="dot-container delay3">
                <div className="dot" />
            </div>
            <div className="dot-container delay4">
                <div className="dot" />
            </div>
            <div className="dot-container delay5">
                <div className="dot" />
            </div>
        </div>
    )

    const generateDescription = () => {
        const lockedText = data.isHeld ? "locked" : "unlocked";
        
        return data.disabled ? "Disabled die" :  `${data.value}-value ${lockedText} die`;
    }

    return (
        <button className={dieClassName} onClick={handleClick} data-message={generateDescription()}>
            {data.isRolling ? rollingElement : dotsElement}
        </button>
    )
}