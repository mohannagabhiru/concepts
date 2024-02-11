function test(){
    let num = 0;
    return function (){
        if(num > 0){
            console.log("Already called");
        }else{
            console.log("Calling first time");
            num++;
        }
    }; 
}

let result = test();

result();
result();
result();