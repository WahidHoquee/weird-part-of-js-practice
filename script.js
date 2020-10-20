//* Object Function and this
// If we create function this is by default set to global object 
// function greeting(){
//     console.log(arguments)
//     return function() {
//         console.log(this)
//     }
// }
// greeting()()

// const a = {
//     name: 'Wahid',
//     log: function(){
//         // console.log(this)
//         function b(){
//             console.log(this)
//         }
//         b()
//     }
// }
// a.log()

// //* IIFE
// function name() {
//     console.log('object')
// }()

//*Object

const a = {
    name: 'W'
}

console.log(a)

a.name = "Wa"
console.log(a)

a.name = "Wak"
console.log(a)




