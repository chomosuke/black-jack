import { Card } from "./card";

export class Hand {
    get value(): number {
        return this.drawnCards.map((card) => card.getValue()).reduce((pre, cur) => pre + cur);
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
