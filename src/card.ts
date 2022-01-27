
export class Card {
    private suit: string;

    private _value: number;

    constructor(value: number, suit: string) {
        this._value = value;
        this.suit = suit;
    }

    get value(): number {
        return Math.min(
            10, this._value,
        );
    }

    private readonly valueToString: string[] = [
        '\'ACE\'',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '\'JACK\'',
        '\'QUEEN\'',
        '\'KING\'',
    ];

    toString(): string {
        return `[${this.valueToString[this._value - 1]}, '${this.suit}']`;
    }
}
