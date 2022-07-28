import { S } from '@kingworldjs/schema'

export interface GraphQLBody {
    operationName: string
    query: string
    variables: Record<string, unknown>
}

export const graphQLBodySchema = S.object()
    .prop('operationName', S.string())
    .prop('query', S.string().required())
    .prop('variables', S.object())
