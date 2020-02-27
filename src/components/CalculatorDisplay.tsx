import * as React from "react";

interface CalculatorDisplayProps {
    displayValue: string;
}

export function CalculatorDisplay(props: CalculatorDisplayProps) {
    return (
        <section className="border py-10 px-4 text-right">
            {props.displayValue}
        </section>
    )
}