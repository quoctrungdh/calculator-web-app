import { calculate } from "./calculate";

describe("calculate", () => {
    let expression;
    it("evaluates the expression correctly", () => {
        expression = "0.5+2.3";
        expect(calculate(expression)).toBe(2.8);

        expression = "-36";
        expect(calculate(expression)).toBe(-36);
    })

    it("should return 0 for invalid expression", () => {
        expression = "5x";
        expect(calculate(expression)).toBe(0);
    })
})