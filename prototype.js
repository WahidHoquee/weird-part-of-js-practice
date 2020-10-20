const person = {
    name: 'Wahid',
    greet: function(){
        console.log('Hello' + this.name);
    }
}

const inherit = {
    age: 19
}

console.log(inherit)
let i = 0 
// while(i<1000000000000){
//     i++
// }
inherit.__proto__ = person ;

console.log(inherit)

var c = function(){
    console.log('a')
}