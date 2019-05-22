import { Data } from '@baidu/molecule'

interface Node {
  promptContent?: string
  [propName: string]: any
}

interface QueryInfo {
  promptNode?: Node[]
  [propName: string]: any
}

interface Hint {
  MostTop?: MostTop
  [propName: string]: any
}

interface MostTop {}

export interface PromptContent {
  hints?: Hint,
  [propName: string]: any
}

export interface OriginData extends Data {
  a: string
  b: string
}

export interface ParsedData extends Data {
  a: string
  b: string
}
