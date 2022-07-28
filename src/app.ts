import KingWorld from 'kingworld'
import cors from '@kingworldjs/cors'
import schema from '@kingworldjs/schema'

import { graphQLBodySchema, type GraphQLBody } from './models/app.model'
import { getHentaiById, mirror } from './services/app.service'

const app = new KingWorld()

app.use(cors)
    .get('/', () => ({ status: 'Ok', date: new Date() }))
    .get<{
        params: { id: string }
    }>('/h/:id', ({ params: { id } }) => getHentaiById(+id))
    .post<{
        body: GraphQLBody
    }>('/graphql', async ({ body }) => mirror(await body), {
        preHandler: schema({
            body: graphQLBodySchema
        })
    })

export default app
