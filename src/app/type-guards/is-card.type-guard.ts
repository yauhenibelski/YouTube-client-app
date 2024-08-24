import { Card } from '@interface/card.interface';

export const isCard = (card: unknown): card is Card => {
    const cardType = card as Card;

    return cardType['__typename'] === 'Card';
};
