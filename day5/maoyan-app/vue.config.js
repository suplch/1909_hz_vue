module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
