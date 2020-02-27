import { calculate } from "../calculator/calculate";

import { CalculatorEvents } from "./events";

import { StringAppend } from "../utils/StringAppend";

import { IReducerEvent } from "../utils/IReducerEvent";

interface ICalculatorState {
    displayValue: string;
    holderValue: string | null;
    operator: string | null;
    waitingFor2ndOperand: boolean;
}

export const initialState: ICalculatorState = {
    displayValue: '0',
    holderValue: null,
    operator: null,
    waitingFor2ndOperand: false,
}

export function reducer(state: ICalculatorState = initialState, event: IReducerEvent): ICalculatorState {
    switch (event.type) {
        case CalculatorEvents.setExpression:
            const newValue = StringAppend(state.displayValue, event.payload as string);

            if (state.waitingFor2ndOperand) {
                return {
                    ...state,
                    displayValue: String(event.payload),
                    waitingFor2ndOperand: false
                }
            }

            return {
                ...state,
                displayValue: newValue,
            };

        case CalculatorEvents.setOperator:
            if (state.operator) {
                const newValue = calculate(`${state.holderValue}${state.operator}${state.displayValue}`)
                return {
                    ...state,
                    operator: String(event.payload),
                    waitingFor2ndOperand: true,
                    displayValue: String(newValue),
                    holderValue: String(newValue)
                }
            }

            return {
                ...state,
                operator:  String(event.payload),
                waitingFor2ndOperand: true,
                holderValue: state.displayValue
            };

        case CalculatorEvents.evaluateExpression:
            if (state.operator) {
                const newValue = calculate(`${state.holderValue}${state.operator}${state.displayValue}`);
                return {
                    ...state,
                    displayValue: String(newValue),
                    holderValue: String(newValue),
                    operator: null,
                    waitingFor2ndOperand: true
                }
            }

            return {
                ...state,
                waitingFor2ndOperand: true
            }

        case CalculatorEvents.clear:
            return initialState;

        default:
            return state;
    }
}