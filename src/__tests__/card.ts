import { Card } from '../card';

test('card test',
    () => {
        for (let value = 1; value < 14; value++) {
            for (const suit of [
                'QUEEN',
                'SPADE',
                'HEART',
                'DIAMOND',
            ]) {
                const card = new Card(value,
                    suit);
                expect(card.value).toStrictEqual(Math.min(10,
                    value));
                if (value == 1) {
                    expect(card.toString()).toStrictEqual(`['ACE', '${suit}']`);
                } else if (value == 11) {
                    expect(card.toString()).toStrictEqual(`['JACK', '${suit}']`);
                } else if (value == 12) {
                    expect(card.toString()).toStrictEqual(`['QUEEN', '${suit}']`);
                } else if (value == 13) {
                    expect(card.toString()).toStrictEqual(`['KING', '${suit}']`);
                } else {
                    expect(card.toString()).toStrictEqual(`[${value}, '${suit}']`);
                }
            }
        }
    });