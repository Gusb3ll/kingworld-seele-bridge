import { type GraphQLBody } from '../models/app.model'

export async function getHentaiById(id: number) {
    return fetch('https://api.hifumin.app/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: 'query Query($byId: Int!) {\n  nhql {\n    by(id: $byId) {\n      success\n      error\n      data {\n        id\n        title {\n          display\n          english\n          japanese\n        }\n      }\n    }\n  }\n}',
            variables: { byId: id }
        })
    })
}

export async function mirror({ operationName, ...rest }: GraphQLBody) {
    return fetch('https://api.hifumin.app/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operationName,
            ...rest
        })
    })
}

// TODO!: REMOVE BOILERPLATE REQUEST BRUH
