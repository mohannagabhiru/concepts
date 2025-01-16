
// function declaration are hoisted unlike function expressions
check()
function check(){
    console.log("hello")
}

// function expressions are not hoisted as they are assigned to a variable
test()
var test = function (){
    console.log("Hiiiii")
}
