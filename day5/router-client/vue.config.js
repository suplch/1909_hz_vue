module.exports = {
    publicPath: './',


    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
