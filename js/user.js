const ID_FORM = document.querySelector('.idForm')

function handleSubmit(e){
  if(e.key === 'Enter'){
    let LOCAL_ID = document.querySelector('.idInput')
    saveName(LOCAL_ID.value)
    paintName(LOCAL_ID.value)
  }
}

function saveName(userName){
  sessionStorage.setItem('userName', userName)
}

function paintName(userName){
  let LOCAL_ID = document.querySelector('.userBox')
  LOCAL_ID.innerText = `Good day, ${userName} `
  LOCAL_ID.style.display = "block"
  ID_FORM.style.display = "none"
}

ID_FORM.addEventListener("keypress", handleSubmit)

function init(){
  let USER_NAME = sessionStorage.getItem('userName')
  if(USER_NAME){
    paintName(USER_NAME)
  }
}

init()
