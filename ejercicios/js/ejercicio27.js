export class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);   
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", 
            "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News",
             "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor!=="string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);
        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !=="number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);
        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!valor instanceof Array) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
        if(valor.length===0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor) {
            if(typeof cadena!=="string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);            
        }    
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id",id))
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo))
        this.validarLongitudCadena("Titulo", titulo,100);
    }

    validarDirector(director){
        if(this.validarCadena("Director",director))
        this.validarLongitudCadena("Director", director,50);
    }
    validarEstreno(estreno){
        if(this.validarNumero("Anio de estreno",estreno))
        if(!(/^([0-9]){4}$/.test(estreno)))
        return console.error(`Anio de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
    }
    validarPais(pais){
        this.validarArreglo("Pais",pais);
    }
    validarGeneros(generos){
        if(this.validarArreglo("Generos",generos)){
            for (let genero of generos) {
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!(Pelicula.listaGeneros.includes(genero))){
                    console.error(`Genero(s) incorrectos "${generos.join(", ")}"`)
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion",calificacion))
        return (calificacion<0||calificacion>10)
        ?console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
        :this.calificacion=calificacion.toFixed(1);
    }
    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAnio: "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB-Id: "${this.id}"`)
    }
}

