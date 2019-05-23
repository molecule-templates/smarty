module.exports = {
  getNamespace: () => 'molecules\\{{projectName}}',
  compilerOptions: require('./tsconfig.json').compilerOptions,
  modules: {
    '@baidu/molecule': {
      required: true
    }
  }
}
