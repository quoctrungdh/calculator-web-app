export function StringAppend(currentStr: string, str: string): string {
    return currentStr === "0" ? str.toString() : currentStr + str;
}