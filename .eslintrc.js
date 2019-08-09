module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数名左括号旁边不加空格
    'space-before-function-paren':0,
    // 忽略缩进
    'indent':0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
