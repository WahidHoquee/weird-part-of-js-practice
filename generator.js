function *createFlow(array){
    let data = 8;
    // yield data;
    data = 6
    yield data;
  }
  
  const data = createFlow()
  console.log(data)

const el1 = data.next();
const el2 = data.next();
const el3 = data.next();
const el4 = data.next();

console.log(data)
console.log(el1);

console.log(data)
console.log(el2);

console.log(data)
console.log(el3);

console.log(data)
console.log(el4);
