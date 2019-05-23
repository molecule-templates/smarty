import { Data } from '@baidu/molecule'
interface MostTop {}

export interface OriginData extends Data {
  a: string
  b: string
}

export interface ParsedData extends Data {
  a: string
  b: string
}
