const argv= require('./config/yargs').argv;


const{crearArchivo, listarTabla} = require('./multiplicar/logica_multiplicar');

let comando = argv._[0];

switch( comando){
        case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

        case 'crear':
            crearArchivo(argv.base, argv.limite)
              .then(archivo => console.log(`archivo creado: ${archivo}`))
              .catch(e=> console.log(e));

        break;

        default:
            console.log('comando no reconocido');

}

// base = '8';
///console.log(process.argv);
//let base = '5';

//let argv2 =process.argv;

//console.log('limite',argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);

