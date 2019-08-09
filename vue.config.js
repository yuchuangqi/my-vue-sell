const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 模拟数据
  devServer:{
    before(app){
      app.get('/api/seller',function(req,res){
        res.json({
          error:0,
          data:seller
        })
      })
      app.get('/api/goods',function(req,res){
        res.json({
          error:0,
          data:goods
        })
      })
      app.get('/api/ratings',function(req,res){
        res.json({
          error:0,
          data:ratings
        })
      })
    }
  }
}
