import { CalculatorEvents } from "../calculator/events";

export const Operators = {
    add: "+",
    substract: "-",
    multiply: "*",
    devide: "/",
    equal: "=",
    clear: "C",
}

export const keysConfig = [
    { value: 7, event: CalculatorEvents.setExpression },
    { value: 8, event: CalculatorEvents.setExpression },
    { value: 9, event: CalculatorEvents.setExpression },
    { value: Operators.devide, event: CalculatorEvents.setOperator, style: "bg-orange-500 text-black" },
    { value: 4, event: CalculatorEvents.setExpression },
    { value: 5, event: CalculatorEvents.setExpression },
    { value: 6, event: CalculatorEvents.setExpression },
    { value: Operators.multiply, event: CalculatorEvents.setOperator, style: "bg-orange-500 text-black" },
    { value: 1, event: CalculatorEvents.setExpression },
    { value: 2, event: CalculatorEvents.setExpression },
    { value: 3, event: CalculatorEvents.setExpression },
    { value: Operators.substract, event: CalculatorEvents.setOperator, style: "bg-orange-500 text-black" },
    { value: Operators.clear, event: CalculatorEvents.clear, style: "bg-gray-200 text-black" },
    { value: 0, event: CalculatorEvents.setExpression },
    { value: Operators.equal, event: CalculatorEvents.evaluateExpression },
    { value: Operators.add, event: CalculatorEvents.setOperator, style: "bg-orange-500 text-black" }
]

