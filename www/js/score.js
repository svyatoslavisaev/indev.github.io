/*Calculator.firs
* Action
* second*/
function PMDU() {
    var action = Calculator.Action.value;
    var a= parseInt(Calculator.first.value);
    var b= parseInt(Calculator.second.value);
    var equal;
    if(action == "plus") {
        equal=a+b;
        alert("Результат:"+equal);
    }else if(action=="minus"){
        equal=a-b;
        alert("Результат:"+equal);
    }else if(action=="multiplication"){
        equal=a*b;
        alert("Результат:"+equal);
    }else if(action=="division"){
        if (a == 0||b==0)
            alert("На 0 никакие числа неделются!");
        else {
            equal = a / b;
            alert("Результат:" + equal);
        }
    }
}