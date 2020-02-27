import * as React from "react";

import { keysConfig } from "../utils/configs";
import { IReducerEvent } from "../utils/IReducerEvent";

interface CalculatorKeypadProps {
    dispatch: (event: IReducerEvent) => void;
}

export function CalculatorKeypad(props: CalculatorKeypadProps) {
    return (
        <section className="flex flex-wrap" >
            {keysConfig.map((key) => (
                <button
                    className={`w-1/4 border py-10 ${key.style}`}
                    key={key.value}
                    onClick={() => props.dispatch({ type: key.event, payload: key.value })}
                >
                    {key.value}
                </button>
            ))}
        </section>
    )
}