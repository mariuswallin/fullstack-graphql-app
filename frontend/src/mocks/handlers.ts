import { graphql } from 'msw'

import { GetTodosDocument } from '~/generated/graphql.ts/graphql'

import { todoFactory } from './factories/todo'

export const handlers = [
  graphql.query(GetTodosDocument, (req, res, ctx) =>
    res(
      ctx.data({
        todos: [todoFactory(), todoFactory()],
      })
    )
  ),
]
