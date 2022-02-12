jest.mock('../readlinePromise');
import { read } from '../readlinePromise';
import { main } from '../main';
import { Card } from '../card';
import { Deck } from '../deck';

describe('end to end tests', () => {
    test('Sample Gameplay 1', async () => {
        const userInputs = [
            '0',
            '1',
            '1',
            '1',
        ];

        const mockRead = read as unknown as jest.Mock<string, [string]>;

        mockRead.mockReset();
        mockRead.mockImplementation((s: string) => userInputs.pop()!); // eslint-disable-line  @typescript-eslint/no-non-null-assertion

        global.console = {
            log: jest.fn<undefined, [string]>(),
        } as unknown as Console;

        const cards = [
            new Card(9, 'SPADE'),
            new Card(3, 'SPADE'),
            new Card(10, 'CLUB'),
            new Card(3, 'HEART'),
            new Card(2, 'HEART'),
            new Card(12, 'SPADE'),
            new Card(4, 'HEART'),
            new Card(1, 'HEART'),
        ];
        const deck = {
            dealCard: jest.fn<Card | undefined, []>(() => {
                return cards.pop();
            }),
        };

        await main(deck as unknown as Deck);

        expect(deck.dealCard).toBeCalledTimes(8);

        expect(mockRead).toBeCalledTimes(4);
        expect(mockRead.mock.calls.map((e) => e[0]).every((e) => e === 'Hit or stay? (Hit = 1, Stay = 0)')).toBeTruthy();
        
        const mockLog = global.console.log as jest.Mock<undefined, [string]>;
        expect(mockLog.mock.calls.map(e => e[0]).join('\n')).toEqual(
            String.raw`You are currently at 15
with the hand [['ACE', 'HEART'], [4, 'HEART']]

You draw ['QUEEN', 'SPADE']

You are currently at 15
with the hand [['ACE', 'HEART'], [4, 'HEART'], ['QUEEN', 'SPADE']]

You draw [2, 'HEART']

You are currently at 17
with the hand [['ACE', 'HEART'], [4, 'HEART'], ['QUEEN', 'SPADE'], [2, 'HEART']]

You draw [3, 'HEART']

You are currently at 20
with the hand [['ACE', 'HEART'], [4, 'HEART'], ['QUEEN', 'SPADE'], [2, 'HEART'], [3, 'HEART']]

Dealer is at 13
with the hand [[10, 'CLUB'], [3, 'SPADE']]

Dealer draws [9, 'SPADE']

You beat the dealer!`);
    });

    test('Sample Gameplay 2', async () => {
        const userInputs = ['1'];

        const mockRead = read as unknown as jest.Mock<string, [string]>;

        mockRead.mockReset();
        mockRead.mockImplementation((s: string) => userInputs.pop()!); // eslint-disable-line  @typescript-eslint/no-non-null-assertion

        global.console = {
            log: jest.fn<undefined, [string]>(),
        } as unknown as Console;

        const cards = [
            new Card(12, 'DIAMOND'),
            new Card(4, 'DIAMOND'),
            new Card(8, 'SPADE'),
        ];
        const deck = {
            dealCard: jest.fn<Card | undefined, []>(() => {
                return cards.pop();
            }),
        };

        await main(deck as unknown as Deck);

        expect(deck.dealCard).toBeCalledTimes(3);

        expect(mockRead).toBeCalledTimes(1);
        expect(mockRead.mock.calls.map((e) => e[0]).every((e) => e === 'Hit or stay? (Hit = 1, Stay = 0)')).toBeTruthy();
        
        const mockLog = global.console.log as jest.Mock<undefined, [string]>;
        expect(mockLog.mock.calls.map(e => e[0]).join('\n')).toEqual(
            String.raw`You are currently at 12
with the hand [[8, 'SPADE'], [4, 'DIAMOND']]

You draw ['QUEEN', 'DIAMOND']

You are currently at Bust!
with the hand [[8, 'SPADE'], [4, 'DIAMOND'], ['QUEEN', 'DIAMOND']]

Dealer wins!`);
    });
});