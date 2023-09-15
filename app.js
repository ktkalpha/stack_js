let list = document.querySelector("ul#list");
let tmp;
let max = 100;
let stack_top = -1;
let output = document.querySelector("h3");

let push = (el) => {
    if(is_full()){
        return "ERROR: Stack is Full.";
    }
    tmp = document.createElement("li");
    tmp.innerText = el;
    list.appendChild(tmp);
    stack_top++;
}

let pop = () => {
    if(is_empty()){
        return "ERROR: Stack is Empty.";
    }
    let ret = peek();
    list.removeChild(tmp);
    stack_top--;
    tmp = list.childNodes[stack_top];
    return ret;
}

let peek = () => {
    if(is_empty()){
        return "ERROR: Stack is Empty.";
    }
    return list.childNodes[stack_top].innerText;
}

let is_full = () => {
    return stack_top === max-1;
}

let is_empty = () => {
    return stack_top === -1;
}

document.querySelector("button#push").addEventListener("click", ()=>{
    push(list.childNodes.length+1);
    output.innerText = `Output : Pushed ${list.childNodes.length}.`
})
document.querySelector("button#pop").addEventListener("click", ()=>{
    
    output.innerText = `Output : Pop ${pop()}`
})
document.querySelector("button#peek").addEventListener("click", ()=>{
    output.innerText = `Output : Peek => ${peek()}`
})