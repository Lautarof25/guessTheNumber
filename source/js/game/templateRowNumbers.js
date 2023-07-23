function addTemplateRow(attemps, num, ok, check) {
  const rowDiv = document.createElement(`div`)
  const colNum = document.createElement(`div`)
  const colOk = document.createElement(`div`)
  const colPos = document.createElement(`div`)
  const number = document.createTextNode(num);
  const numbersOK = document.createTextNode(ok);
  const numbersPos = document.createTextNode(check);
  rowDiv.setAttribute('id', `div${attemps}`)
  rowDiv.setAttribute('class', 'row position-relative bg-white opacity rowAnimation text-center')
  colNum.setAttribute('id', `colNum${attemps}`)
  colOk.setAttribute('id', `colOk${attemps}`)
  colPos.setAttribute('id', `colPos${attemps}`)

  colNum.setAttribute('class', `col-6 border`)
  colOk.setAttribute('class', `col-3 border`)
  colPos.setAttribute('class', `col-3 border`)

  colNum.appendChild(number)
  colOk.appendChild(numbersOK)
  colPos.appendChild(numbersPos)
  setTimeout(() => {
    rowDiv.classList.remove("opacity")
    rowDiv.classList.add("appear")
    setTimeout(() => {
      rowDiv.classList.remove("appear")
    }, 200);
  }, 200);
  rowDiv.appendChild(colNum)
  rowDiv.appendChild(colOk)
  rowDiv.appendChild(colPos)
  rows.appendChild(rowDiv)
}