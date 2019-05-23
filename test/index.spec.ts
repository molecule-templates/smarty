import { RenderEngine, Data } from '@baidu/molecule'
import { OriginData, ParsedData } from '../src/data'
import { {{Uppername}}Controller } from '../src/index'

/* global expect */
describe('index Test', () => {
  const engine: RenderEngine = {
    render: (path: string, data: Data) => {
      return JSON.stringify(data)
    }
  }
  const controller = new {{Uppername}}Controller(engine);
 
  it('engine render tpl', () => {
    const data: OriginData = {
      a: 'this is a molecule module',
      b: 'hello Molecule'
    }
    const tplData: ParsedData = {
      a: 'this is a molecule module',
      b: 'hello Molecule'
    }
    expect(controller.render(data)).toEqual(JSON.stringify(tplData))
  })
})
