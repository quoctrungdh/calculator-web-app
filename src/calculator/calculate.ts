export function calculate(expression: string) {
    try {
        return eval(expression)
    } catch (error) {
        return 0;
    }
}