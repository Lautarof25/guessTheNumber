function addTemplateRow(att, num, ok, check) {
  const rowDiv = document.createElement(`div`)
  const colSpanAttempt = document.createElement(`small`)
  const colNum = document.createElement(`div`)
  const colOk = document.createElement(`div`)
  const colPos = document.createElement(`div`)

  const number = document.createTextNode(num);
  const numbersOK = document.createTextNode(ok);
  const numbersPos = document.createTextNode(check);
  const colSpanNumber = document.createTextNode(attemptsLeft - att + 1)
  rowDiv.setAttribute('id', `div${att}`)
  rowDiv.setAttribute('class', 'row position-relative bg-white opacity rowAnimation text-center')
  colNum.setAttribute('id', `colNum${att}`)
  colOk.setAttribute('id', `colOk${att}`)
  colPos.setAttribute('id', `colPos${att}`)

  colSpanAttempt.setAttribute('class', `position-absolute top-50 start-0 translate-middle ps-4`)
  colNum.setAttribute('class', `col-6 border`)
  colOk.setAttribute('class', `col-3 border`)
  colPos.setAttribute('class', `col-3 border`)

  colSpanAttempt.appendChild(colSpanNumber)
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

  rowDiv.appendChild(colSpanAttempt)
  rowDiv.appendChild(colNum)
  rowDiv.appendChild(colOk)
  rowDiv.appendChild(colPos)
  rows.appendChild(rowDiv)
}