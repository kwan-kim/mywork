let clockTitle = document.querySelector('.clock')

function get_clock(){
  let date = new Date()
  let hours = date.getHours();
  let minutes = date.getMinutes();

  clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes }`
}
function init() {
  get_clock()
  setInterval(get_clock,1000)
}

init()
