module.exports={
    dev:{
    proxyTable:{
        proxyTable: {
            "/api": {
                target: "http://localhost:8080/api", //设置调用的接口域名和端口
                changeOrigin: true,	//是否跨域
                pathRewrite: {
                    "^/api": "" //用'/api' 代替 'http://www.liulongbin.top:3005/api'
                }
            }
        },
    }
}
}