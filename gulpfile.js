
const { src, dest } = require('gulp');

exports.default = function() {
    return src(['build/**/*']).pipe(dest('./backends/python/dist'));
}