import { Deck } from './deck';
import { Hand } from './hand';
import { read } from './readlinePromise';

export async function main(deck: Deck) {
    const playerHand = new Hand();
    playerHand.draw(deck.pop());
    playerHand.draw(deck.pop());
    while (true) {
        if (playerHand.value > 21) {
            console.log('You are currently at Bust!');
            console.log(`with the hand ${playerHand.getDrawn()}\n`);
            console.log('Dealer wins!');
            return;
        } else {
            console.log(`You are currently at ${playerHand.value}`);
            console.log(`with the hand ${playerHand.getDrawn()}\n`);
        }
        const input = await read('Hit or stay? (Hit = 1, Stay = 0)');
        if (input == '0') {
            break;
        }
        const drawn = deck.pop();
        console.log(`You draw ${drawn.toString()}\n`);
        playerHand.draw(drawn);
    }

    const dealerHand = new Hand();
    dealerHand.draw(deck.pop());
    dealerHand.draw(deck.pop());
    while (true) {
        if (dealerHand.value > 21) {
            console.log('You beat the dealer!');
            return;
        } else {
            console.log(`Dealer is at ${dealerHand.value}`);
            console.log(`with the hand ${dealerHand.getDrawn()}\n`);
        }
        if (dealerHand.value > 17) {
            break;
        }
        const drawn = deck.pop();
        console.log(`Dealer draws ${drawn.toString()}\n`);
        dealerHand.draw(drawn);
    }

    if (dealerHand.value > playerHand.value) {
        console.log('Dealer wins!');
    } else if (playerHand.value > dealerHand.value) {
        console.log('You beat the dealer!');
    } else {
        console.log('Draw!');
    }
}
