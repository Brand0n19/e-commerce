const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css(done) {
    src('src/**/*.scss')
      .pipe(plumber() )
      .pipe(sass() )
      .pipe(dest('src/css'));

    done();
}

function dev(done) {
  watch('src/**/*.scss', css);

  done();
}


exports.css = css;
exports.dev = dev;