// JavaScript Document

function handleError(err){
	console.log(`Request failed: ${err}`);
}

const logIn = (url, serializeinfo, This) => {
	
	const options = {
		method: 'post',
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		body: serializeinfo
	}
	
	//llamada de datos con Fetch
	fetch(url, options)
	.then(res => res.json())
	.then( (res) => {

		//console.log(res);

		//Almacenar los datos
		//sessionStorage.setItem("connection", true);
		//sessionStorage.setItem("tipoUsuario", res.tipo);

		/*Obtener datos almacenados*/
		//let connection = sessionStorage.getItem("connection");
		//let tipoUsuario = sessionStorage.getItem("tipoUsuario");

		//This.setState({ connection: new Boolean(connection) , tipoUsuario: tipoUsuario });
		//This.setState({ conexion: res.conexion })
		
		
		//JSON to String Res
		let ResString = JSON.stringify(res);
		
		//Almacenar los datos Res
		sessionStorage.setItem("ResConexion", ResString);
		
		//Obtener datos almacenados Res
		let conexionSession = sessionStorage.getItem("ResConexion");
		
		//String to JSON la conexion a la sessión
		let conexionSessionJson = JSON.parse(conexionSession);
		
		This.setState({ conexion: conexionSessionJson.conexion })
		
	})
	.catch(err => handleError(err));

	//termina fetch
}

export default logIn;