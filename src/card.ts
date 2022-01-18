
export class Card {
    private suit: string;
    private value: number;
    constructor(value: number, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    getValue(): number {
        return Math.min(10, this.value);
    }

    private readonly valueToString: string[] = [
        '\'ACE\'','2', '3','4','5','6','7','8','9','10','\'JACK\'', '\'QUEEN\'', '\'KING\'',
    ];
    toString(): string {
        return `[${this.valueToString[this.value]}, '${this.suit}']`;
    }
}
