const withCss = require('@zeit/next-css')
module.exports = withCss({
    head: {
        script: [
            {src: './static/live2d/live2d.js'}
        ]
    }
})