// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork(string= "go to the office") {
return `This Monday, I will ${string}.`
}

function wrapAdjective(string = "*") {
    return function (param = "special"){
        return `You are ${string}${param}${string}!`
    }
}

