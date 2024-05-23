const button = document.getElementById('search-button')
let prodId = ''
let array = []

document.addEventListener('DOMContentLoaded', async function () {
  button.addEventListener('click', async function () {
    let search = document.getElementById('search').value.toLowerCase()
    const searched = await fetch('../../datos.json').then((response) =>
      response.json()
    )

    for (let i = 0; i < searched.length; i++) {
      if (searched[i].alt.toLowerCase().includes(search)) {
        array.push(searched[i])
      }
    }

    if (array.length > 0) {
      document.getElementById('titulo').style.display = 'none'
      if(document.getElementById('flex') !== null ){
      document.getElementById('flex').style.display = 'none'
      }
      let div_busqueda = document.getElementById('busqueda')
      div_busqueda.innerHTML= ""
      let h2_busqueda = document.createElement('h2')
      h2_busqueda.innerHTML = 'Resultados de la búsqueda: '
      div_busqueda.appendChild(h2_busqueda)
      for (let i = 0; i < array.length; i++) {
        if (location.pathname === '/src/pages/product.html'|| location.pathname === '/src/pages/product') {
          let a = document.createElement('a')
          a.href = `./product-detail.html?prodId=${array[i].id}`
          let div = document.createElement('div')
          let img = document.createElement('img')
          img.style.width = '150px'
          img.style.height = '150px'
          console.log(array[i].src)
          img.src = '.' + array[i].src.slice(1)
          div.style.float = 'inline-start'
          img.style.marginRight = '15px'
          a.appendChild(img)
          div.appendChild(a)
          div_busqueda.appendChild(div)
        } else {
          let a = document.createElement('a')
          a.href = `./src/pages/product-detail.html?prodId=${array[i].id}`
          let div = document.createElement('div')
          let img = document.createElement('img')
          img.style.height = '150px'
          img.src = 'src/' + array[i].src.slice(1)
          div.style.float = 'inline-start'
          img.style.marginLeft = '15px'
          a.appendChild(img)
          div.appendChild(a)
          div_busqueda.appendChild(div)
        }
      }
    }
    document.getElementById('search').value = ''
    array = []
  })
})
