let numTextosEstáticos = 1 //* Variable que guarda la cantidad de textos hechos sin guardar

function descargarTexto () {
  const text = document.querySelector('textarea').value

  //* Crear el buffer
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)

  //* Crear el enlace de descarga
  const a = document.createElement('a')
  a.href = url
  a.download = `Sin-título${numTextosEstáticos++}.txt`
  a.style.display = 'none'

  //* Descargar
  document.body.appendChild(a)
  a.click()

  //* Remover las sobras
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function colocarListenersBtn () {
  const downloadBtn = document.querySelector('body>header>button:first-child')
  downloadBtn.addEventListener('click', descargarTexto, false)
}

window.onload = () => {
  colocarListenersBtn()
}
