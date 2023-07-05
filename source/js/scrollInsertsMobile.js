const heightRow = 40
let currentHeightRow = 0

function downToNewRow(){
    currentHeightRow += heightRow
    scrollTo(0,currentHeightRow)
}