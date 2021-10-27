import { Request, Response } from 'express'

export type ReqType = Request<
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  any,
  any,
  QueryString.ParsedQs,
  Record<string, any>
>

export type ResType = Response<any, Record<string, any>, number>
