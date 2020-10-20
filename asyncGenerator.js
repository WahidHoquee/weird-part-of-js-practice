function* createFlow(){
    const data = yield fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data)
}

const returnElement = createFlow();
const futureData = returnElement.next();

function doe(value){
    returnElement.next(value)
}

futureData.then(doe)
// futureData.catch((value) => {
    // returnElement.next(value)
// })

// fetch('https://jsonplaceholder.typicode.com/posts').then(value => console.log(value.json()))