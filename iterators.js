function createFlow(array) {
    let i = 0;
    const inner = {
        next: function () {
            const element = array[i];
            i++;
            return element;
        },
    };
    return inner;
}

const data = createFlow([3, 4, 5]);

const el1 = data.next();
const el2 = data.next();
const el3 = data.next();
const el4 = data.next();

console.log({ el1, el2, el3, el4 });
