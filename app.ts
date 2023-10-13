import express, { type Request, type Response } from 'express'
// import * as myModule from 'express'

// Crea una instancia de la aplicación Express.
const app = express()
const port = 3000

// Definir una ruta
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!')
})

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
