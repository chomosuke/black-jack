import { Card } from '../card';
import { Deck } from '../deck';

test('deck test',
    () => {
        const deck = new Deck();
        let cards: Card[] = [];
        for (let value = 1; value < 14; value++) {
            for (const suit of [
                'QUEEN',
                'SPADE',
                'HEART',
                'DIAMOND',
            ]) {
                cards.push(new Card(value,
                    suit));
            }
        }
        for (let i = 0; i < 52; i++) {
            const popped = deck.pop().toString();
            cards = cards.filter(card => popped != card.toString());
        }
        expect(cards).toStrictEqual([]);
    });