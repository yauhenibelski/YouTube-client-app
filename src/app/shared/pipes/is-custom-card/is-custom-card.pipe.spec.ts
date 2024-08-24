import { IsCustomCardPipe } from './is-custom-card.pipe';

describe('IsCustomCardPipe', () => {
    it('create an instance', () => {
        const pipe = new IsCustomCardPipe();
        expect(pipe).toBeTruthy();
    });
});
