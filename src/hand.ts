import { Card } from './card';

export class Hand {
    get value(): number {
        const v = this.drawnCards.map((card) => {
            const cardV = card.value;
            if (cardV == 1) {
                return 11;
            }
            return cardV;
        }).reduce((pre, cur) => pre + cur);

        if (v > 21) {
            return this.drawnCards.map((card) => card.value).reduce((pre, cur) => pre + cur);
        }
        return v;
    }

    private drawnCards: Card[] = [];

    draw(card: Card) {
        this.drawnCards.push(card);
    }

    getDrawn(): string {
        let result = '[';
        result += this.drawnCards.map((card) => card.toString()).join(', ');
        result += ']';
        return result;
    }
}
