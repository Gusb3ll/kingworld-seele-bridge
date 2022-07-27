import KingWorld from 'kingworld'
import { getHentaiById } from './services/app.service'

const app = new KingWorld()

app.get('/', () => ({ status: 'Ok', date: new Date() }))

app.get<{ params: { id: string } }>('/h/:id', async ({ params: { id } }) => await getHentaiById(parseInt(id)))

export default app