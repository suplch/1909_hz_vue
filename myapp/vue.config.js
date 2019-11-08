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
    },

    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk‐vendors', 'chunk‐common', 'index']
        },
        about: {
            entry: 'src/about.js',
            template: 'public/about.html',
            filename: 'about.html',
            chunks: ['about‐vendors', 'about‐common', 'about']
        }
    }
};
