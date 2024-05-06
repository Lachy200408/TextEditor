import express from 'express'

const app = express()
app.disable('x-powered-by')

app.use((req, res, next) => {
  //* Previendo que nadie más utilice la API
  if (req.header('origin') === 'textEditorAPI') {
    res.setHeader('Access-Control-Allow-Origins', '*')
  }

  next()
})

app.use((req, res) => {
  //* Manejo de errores de la API
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.status(404).json({ message: '404 - Recurso no encontrado.' })
})

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
