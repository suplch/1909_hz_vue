module.exports = {
    publicPath: './',


    devServer: {
        proxy: {
            '/user': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            }
        }
    },

};
