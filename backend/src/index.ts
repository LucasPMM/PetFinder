import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { environment } from './environment'
import path from 'path'
import indexRoutes from './routes/index'
import sequelizeConnection from './models/index'
const app = express()

sequelizeConnection.sync()
app.use(cors({ origin: environment.origin }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/', express.static(path.join(__dirname, 'angular')))

app.get('/', (_, res) => {
  res.json({ message: 'PetFinder' })
})

app.use('/api', indexRoutes)

app.listen(environment.port, () => console.log(`Running`))
