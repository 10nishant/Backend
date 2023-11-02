function doSomething(){
    console.log("DO SOMETHING PLEASE!!!");
}

function againDoSomething(){
    console.log("Karr naah");
}

let arr = [];
function createFun(elements){
    arr.push(elements);
    return arr;
}
function ReadFun(){
    return arr;
}
function updateFun(index, elements){
    arr[index] = elements;
    return arr;
}


module.exports = {
    doSomething,
againDoSomething,
createFun,
ReadFun
};