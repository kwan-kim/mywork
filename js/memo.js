const MEMO_INPUT = document.querySelector('.memoInput'),
      MEMO_LIST_BOX = document.querySelector('.memoListBox'),
      MEMO_BUTTON = document.querySelector('.memoButton')

let memoList = []

MEMO_INPUT.addEventListener("keypress" , handleMemoForm)
MEMO_BUTTON.addEventListener("click" , showMemoForm)

function showMemoForm(e){
  MEMO_BUTTON.style.display = "none"
  MEMO_INPUT.style.display = "block"
}

function handleMemoForm(e){
  if(e.key === 'Enter'){
    let LOCAL_MEMO_ITEM = document.querySelector('.memoInput')
    saveMemoList(LOCAL_MEMO_ITEM.value)
    saveMemo()
    paintMemo(LOCAL_MEMO_ITEM.value)
    LOCAL_MEMO_ITEM.value = ""
  }
}

function saveMemoList(memoItem){
  let LOCAL_MEMO_ITEM = document.querySelector('.memoInput')
  let MEMO_LIST = {
    id : memoList.length + 1  ,
    memoItem : memoItem
  }
  memoList.push(MEMO_LIST)
}

function saveMemo(){
  sessionStorage.setItem('memoList' , JSON.stringify(memoList))
}

function paintMemo(memoItem){
  let LI = document.createElement('li')
  let removeBtn = document.createElement('i')
  removeBtn.classList.add('far');
  removeBtn.classList.add('fa-window-close');
  removeBtn.addEventListener('click', removeMemo)
  LI.innerHTML = `${memoItem} `
  LI.id = memoList.length
  LI.append(removeBtn)

  MEMO_LIST_BOX.appendChild(LI)

}

function removeMemo(e){
  let deleteItem = e.target.parentNode
  MEMO_LIST_BOX.removeChild(deleteItem)
  memoList = memoList.filter(function(memoList){
      return memoList.id !== Number(deleteItem.id)
  })
  console.log(memoList)
  saveMemo()
}
function init(){
  let MEMO_ITEM = JSON.parse(sessionStorage.getItem('memoList'))
  if(MEMO_ITEM){
    showMemoForm()
    MEMO_ITEM.forEach((data) => {
      saveMemoList(data.memoItem)
      paintMemo(data.memoItem)
    })
  }
}

init()
