const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

// 路径配置：__dirname：项目根目录地址 
function resolve(dir){
  return path.join(__dirname,dir)
}

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
          errno:0,
          data:seller
        })
      })
      app.get('/api/goods',function(req,res){
        res.json({
          errno:0,
          data:goods
        })
      })
      app.get('/api/ratings',function(req,res){
        res.json({
          errno:0,
          data:ratings
        })
      })
    }
  },
  // 路径配置
  chainWebpack(config){
    config.resolve.alias
      .set('components',resolve('src/components'))
      .set('common',resolve('src/common'))
      .set('api',resolve('src/api'))
  }
}
