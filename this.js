console.log({global: this})

function greet(){
    console.log({function: this})
    function greet(){
        console.log({innerFunction: this})
    }
    greet()
}
greet()

const a = {
    name: 'Wahid',
    data: function (){
        console.log({method: this});
        var data = 5;
        return function(){
            console.log(data)
            console.log({innnerMethod: this})
        }
    }
}

const data = a.data();
data()