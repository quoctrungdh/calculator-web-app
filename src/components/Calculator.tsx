import * as React from "react";

import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeypad } from "./CalculatorKeypad";

import { reducer, initialState } from "../calculator/state";

export function Calculator() {
    const [calculatorState, dispatch] = React.useReducer(reducer, initialState);

    return <div className="mx-auto text-white text-4xl" style={{ width: "480px" }} >
        <CalculatorDisplay displayValue={calculatorState.displayValue} />
        <CalculatorKeypad dispatch={dispatch} />
    </div>
}