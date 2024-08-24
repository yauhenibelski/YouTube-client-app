export const toChunk = <T extends Array<T[number]>>(arr: T, chunkSize: number) =>
    arr.reduce((acc: T[number][][], _, i) => {
        const chunk = arr.slice(i * chunkSize, chunkSize + i * chunkSize);

        if (chunk.length) {
            acc.push(chunk);
        }

        return acc;
    }, []);
