import { StackedDivData } from "@/app/types";
import React from "react";

export default function StackedDiv(data: StackedDivData) {
    return (
        <div className="stacked-div">
          <span className="content">{data.content}</span>
          <div className="background" style={{background: data.topColor}} />
          <div className="shadow-1" style={{background: data.middleColor}} />
          <div className="shadow-2" style={{background: data.bottomColor}} />
        </div>
    )
}