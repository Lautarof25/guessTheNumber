const title = document.querySelector("#title")
const vowels = "aeiou"
const titleInner = "Adivina el número"
const empty = "ㅤ"
const titleEmpty = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

function writeTitle(callback){
    let index = 0
    setInterval(() => {
        if(titleInner[index] != undefined){
            if(titleInner[index] === " "){
                title.innerText +=  empty
                index++
            }else {
            title.innerText += titleInner[index]
            index++
            }
        }
    }, 200);
    setTimeout(() => {
        callback();    
    }, 5000);
    
}

function deleteTitle(){
    setInterval(() => {
        title.innerText = empty
    }, 500);
}

writeTitle(deleteTitle)