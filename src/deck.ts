import { Card } from "./card";

export class Deck {
    private remaining: Card[] = (() => {
        let remaining: Card[] = [];
        for (let i = 1; i < 14; i++) {
            for (const str of ['QUEEN', 'SPADE', 'HEART', 'DIAMOND']) {
                remaining.push(new Card(i, str));
            }
        }
        // shuffle
        remaining.sort(() => Math.random() - 0.5)
        return remaining;
    })();

    pop(): Card {
        const card = this.remaining.pop();
        if (card == undefined) {
            throw Error('no card remaining in deck');
        }
        return card;
    }
}
