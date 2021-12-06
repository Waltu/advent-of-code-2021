import fs from 'fs'
import t from 'io-ts'

import A from 'fp-ts/lib/Array'
import E from 'fp-ts/lib/Either'
import O from 'fp-ts/lib/Option'
import { constant, flow, pipe } from 'fp-ts/lib/function'

const getInput = (location: string) =>
  pipe(
    E.tryCatch(
      () => fs.readFileSync(location, 'utf8'),
      err => err as Error
    ),
    E.map(data => data.split(/\n/))
  )

export const handler = () =>
  pipe(
    './input.txt',
    getInput,
    E.map(A.map(t.number.decode)),
    E.map(flow(A.separate, s => s.right)),
    E.map(
      A.reduce({ up: 0, down: 0, currentLevel: null }, (prev, next) =>
        pipe(O.fromNullable(prev.currentLevel), O.getOrElse(constant(next)))
      )
    )
  ) // read file input here
// run map reduce and save value to out of scope
// calculate of many time value was increasing
