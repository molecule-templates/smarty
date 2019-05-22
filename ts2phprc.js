module.exports = {
  getNamespace: () => 'molecules\\{{name}}',
  compilerOptions: require('./tsconfig.json').compilerOptions,
  modules: {
    '@baidu/molecule': {
      required: true
    }
  }
}
