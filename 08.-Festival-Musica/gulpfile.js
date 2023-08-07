const { src, dest, watch, parallel} = require("gulp"); // Importa las funciones src, watch, parallel y dest de gulp

// DEPENDENCIAS CSS
const sass = require("gulp-sass")(require("sass"));  // Importa la funcion de SASS
const plumber = require("gulp-plumber"); //Importa la funcion Plumber

// DEPENDENCIAS DE IMAGENES
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin"); // Aligera imagenes
const webp = require("gulp-webp"); // Importa la funcion de comprimir img a webp
const avif = require('gulp-avif');


function css(done) {
    src("src/scss/**/*.scss")        // Identificar el archivo SASS
        .pipe(plumber())
        .pipe(sass())               // Compilarlo
        .pipe(dest("build/css"));   // Almacenarlo en el disco duro
done(); // Callback que avisa que se termino una tarea
};

function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}") // Identifica las imagenes
        .pipe(webp(opciones)) // Crea la imagenes en webp y las almacena temporalmente
        .pipe(dest("build/img")) // Almacena en disco duro las imagenes webp
    done();
}

function versionAvif(done) {
    const opciones = {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}") // Identifica las imagenes
        .pipe(avif(opciones)) // Crea la imagenes en webp y las almacena temporalmente
        .pipe(dest("build/img")) // Almacena en disco duro las imagenes webp
    done();
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    
    done();
}


function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);
    done();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);