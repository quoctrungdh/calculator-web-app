import * as React from "react";

import { CalculatorEvents }  from "../calculator/events";

import { keysConfig } from "../utils/configs";
import { IReducerEvent } from "../utils/IReducerEvent";

interface CalculatorKeypadProps {
    dispatch: (event: IReducerEvent) => void;
}


export function CalculatorKeypad(props: CalculatorKeypadProps) {
    function handleKeyUp(event: KeyboardEvent) {
        const { keyCode } = event;
        const { dispatch } = props;

        if ((keyCode >= 48 && keyCode <= 57) && !event.shiftKey) {
            // numbers
            dispatch({
                type: CalculatorEvents.setExpression,
                payload: event.key
            })

            return;
        }

        if (keyCode === 106 || (keyCode === 56 && event.shiftKey)) {
            dispatch({
                type: CalculatorEvents.setOperator,
                payload: "*"
            })

            return;
        }

        if (keyCode === 107 || (keyCode === 187 && event.shiftKey)) {
            dispatch({
                type: CalculatorEvents.setOperator,
                payload: "+"
            })

            return;
        }

        if (keyCode === 109 || (keyCode === 189 && !event.shiftKey)) {
            dispatch({
                type: CalculatorEvents.setOperator,
                payload: "-"
            })

            return;
        }

        if (keyCode === 111 || (keyCode === 191 && !event.shiftKey)) {
            dispatch({
                type: CalculatorEvents.setOperator,
                payload: "/"
            })

            return;
        }

        if (keyCode === 8) {
            // backspace
            dispatch({
                type: CalculatorEvents.clear,
                payload: event.key
            })

            return;
        }

        if (keyCode === 13) {
            // enter
            dispatch({
                type: CalculatorEvents.evaluateExpression,
                payload: event.key
            })

            return;
        }

    }

    React.useEffect(() => {
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        }
    })

    return (
        <section className="flex flex-wrap" >
            {keysConfig.map((key) => (
                <div
                    className={`w-1/4 border py-10 text-center ${key.style}`}
                    key={key.value}
                    onClick={() => props.dispatch({ type: key.event, payload: key.value })}
                >
                    {key.value}
                </div>
            ))}
        </section>
    )
}