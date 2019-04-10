const LOADING = document.querySelector('.loading')

fetch(`https://source.unsplash.com/random`)
.then((res)=>{
  LOADING.style.display = 'none'
  document.body.style.backgroundImage = `url(${res.url})`
})
.catch((err)=>{
  console.log(err)
})