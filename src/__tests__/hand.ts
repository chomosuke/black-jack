import { Card } from '../card';
import { Hand } from '../hand';

describe('hand test',
    () => {
        test('Ace can be 11',
            () => {
                const hand = new Hand();
                hand.draw(new Card(1,
                    'HEART'));
                expect(hand.value).toStrictEqual(11);
                expect(hand.getDrawn()).toStrictEqual("[['ACE', 'HEART']]");
            });

        test('Ace can be 1',
            () => {
                const hand = new Hand();
                hand.draw(new Card(1,
                    'HEART'));
                hand.draw(new Card(10,
                    'HEART'));
                hand.draw(new Card(10,
                    'HEART'));
                expect(hand.value).toStrictEqual(21);
                expect(hand.getDrawn()).toStrictEqual("[['ACE', 'HEART'], [10, 'HEART'], [10, 'HEART']]");
            });

        test('King Jack Queen are all 10',
            () => {
                const hand = new Hand;
                hand.draw(new Card(11,
                    'HEART'));
                hand.draw(new Card(12,
                    'HEART'));
                hand.draw(new Card(13,
                    'HEART'));
                expect(hand.value).toStrictEqual(30);
                expect(hand.getDrawn()).toStrictEqual("[['JACK', 'HEART'], ['QUEEN', 'HEART'], ['KING', 'HEART']]");
            });
    });