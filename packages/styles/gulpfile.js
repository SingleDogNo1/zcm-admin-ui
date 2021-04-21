'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

const noPrefixFile = /(index|base|display)/

function compile() {
  return src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(
      rename(path => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `dt-${path.basename}`
        }
      })
    )
    .pipe(dest('../../lib/theme'))
}

function copyFont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('../../lib/theme/fonts'))
}

exports.build = series(compile, copyFont)
