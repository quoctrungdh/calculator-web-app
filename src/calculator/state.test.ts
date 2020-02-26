import { reducer } from "./state";
import { CalculatorEvents } from "./events";

import { IReducerEvent } from "../utils/IReducerEvent";

describe("calculateReducer", () => {
    const initialState = {
        displayValue: '0',
        holderValue: null,
        operator: null,
        waitingFor2ndOperand: false,
    }

    let event: IReducerEvent

    it("should return the initial state", () => {
        event = {
            type: "init",
            payload: ""
        }
        expect(reducer(undefined, event)).toEqual(initialState);
    })

    it("user can enter the first input value", () => {
        event = {
            type: CalculatorEvents.setExpression,
            payload: 1
        }

        const nextState = {
            displayValue: '1',
            holderValue: null,
            operator: null,
            waitingFor2ndOperand: false,
        }

        expect(reducer(initialState, event)).toEqual(nextState);
    })

    it("user can enter the second input value", () => {
        const currentState = {
            displayValue: '1',
            holderValue: null,
            operator: null,
            waitingFor2ndOperand: false,
        }

        event = {
            type: CalculatorEvents.setExpression,
            payload: 3
        }

        const nextState = {
            displayValue: '13',
            holderValue: null,
            operator: null,
            waitingFor2ndOperand: false,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("user can enter an operator", () => {
        const currentState = {
            displayValue: '12',
            holderValue: null,
            operator: null,
            waitingFor2ndOperand: false,
        }


        event = {
            type: CalculatorEvents.setOperator,
            payload: "+"
        }

        const nextState = {
            displayValue: "12",
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: true,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("user can enter next expression after input an operator", () => {
        const currentState = {
            displayValue: "12",
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: true,
        }


        event = {
            type: CalculatorEvents.setExpression,
            payload: "5"
        }

        const nextState = {
            displayValue: '5',
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: false,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("user can enter next operator after input an expression", () => {
        const currentState = {
            displayValue: '52',
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: false,
        }


        event = {
            type: CalculatorEvents.setOperator,
            payload: "-"
        }

        const nextState = {
            displayValue: '64',
            holderValue: "64",
            operator: "-",
            waitingFor2ndOperand: true,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("should evaluate the expression when user click on '=' button", () => {
        const currentState = {
            displayValue: '52',
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: false,
        }

        event = {
            type: CalculatorEvents.evaluateExpression,
            payload: ""
        }

        const nextState = {
            displayValue: '64',
            holderValue: "64",
            operator: null,
            waitingFor2ndOperand: true,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("should evaluate the expression when user click on '=' button 2 times", () => {
        const currentState = {
            displayValue: '52',
            holderValue: "52",
            operator: null,
            waitingFor2ndOperand: false,
        }

        event = {
            type: CalculatorEvents.evaluateExpression,
            payload: ""
        }

        const nextState = {
            displayValue: '52',
            holderValue: "52",
            operator: null,
            waitingFor2ndOperand: true,
        }

        expect(reducer(currentState, event)).toEqual(nextState);
    })

    it("should reset to the initial state when user click on 'c' button", () => {
        const currentState = {
            displayValue: '52',
            holderValue: "12",
            operator: "+",
            waitingFor2ndOperand: false,
        }

        event = {
            type: CalculatorEvents.clear,
            payload: ""
        }

        expect(reducer(currentState, event)).toEqual(initialState);
    })
})