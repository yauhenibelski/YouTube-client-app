export interface Card {
    date: string;
    title: string;
    imageSrc: string;
    videoSrc: string;
    description: string;
    tags: string[];
    id: string;
    __typename: 'Card';
}
