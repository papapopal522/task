function decode(str) {

    const parts = str.split('.');

    const bString = parts
        .map(x => {
            const isNegative = x.charAt(0) === '-';
            const length = parseInt(x.slice(isNegative ? 1 : 0), 10);
            return isNegative ? '0'.repeat(length) : '1'.repeat(length)
        }).join('');

    const chunks = [];
    for (let i = 0; i < bString.length; i += 2) {
        const bit = bString.charAt(i);
        const count = parseInt(bString.slice(i + 1, i + 2), 10);
        chunks.push(bit.repeat(count));
    }

    const charCodes = [];
    let currentIndex = 0;
    chunks.forEach((chunk, index) => {
        if (index % 2 === 0) {
            charCodes.push(parseInt(chunk, 2));
        } else {
            currentIndex += chunk.length;
        }
    });

    return String.fromCharCode(...charCodes);
};

const encodedString = ".10-12.1-4.2-1.10-12.1-4.2-2.1-10.12-1.4-2.10-1.10-12.1-4.2-18.1-10.12-1.4-4.6-1.10-12.1-4.4-16.1-10.12-1.4-6.6-1.10-12.1-4.6-14.1-10.12-1.4-8.4-1.10-12.1-4.8-14.1-10.12-1.4-10.1-10.12-1.4-10.2-1.10-12.1-4.10-10.1-10.12-1.4-10.18-1.10-12.1-4.12-6.1-10.12-1.4-12.14-1.10-12.1-4.14-4.1-10.12-1.4-14.12-1.10-12.1-4.14-20.1-10.12-1.4-16.8-1.10-12.1-4.16-16.1-10.12-1.4-18.1-10.12-1.6-1.10-12.1-6.6-1.10-12.1-6.16-1.10-12.1-8.4-1.10-12.1-8.14-1.10-12.1-10.2-1.10-12.1-10.10-1.10-12.1-10.20-1.10-12.1-12.8-1.10-12.1-12.16-1.10-12.1-14.1-10.12-1.14-6.1-10.12-1.14-14.1-10.12-1.16-2.1-10.12-1.16-10.1-10.12-1.16-18.1-10.12-1.18-6.1-10.12-1.18-14.1-10.12-1.20-4.1-10.12-1.20-12.1-10.14-1.2-1.10-14.1-4.2-6.1-10.14-1.4-2.14-1.10-14.1-4.4-2.1-10.14-1.4-4.12-1.10-14.1-4.6-1.10-14.1-4.6-2.1-10.14-1.4-6.10-1.10-14.1-4.6-20";

console.log(decode(encodedString));
