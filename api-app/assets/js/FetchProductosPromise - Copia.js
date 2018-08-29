// JavaScript Document

function handleError(err){
	console.log(`Request failed: ${err}`);
}

const fetchProductos = (url, This) => { //(url, serializeinfo, This)
	
	/*const options = {
		method: 'post',
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		//body: serializeinfo
	}*/
	
	//llamada de datos con Fetch
	fetch(url) //fetch(url, options)
	.then( res => res.json() )
	.then( (res) => {
		
		//console.log(res);
		//Almacenar los datos
		//sessionStorage.setItem("connection", true);
		//sessionStorage.setItem("tipoUsuario", res.tipo);

		/*Obtener datos almacenados*/
		//let connection = sessionStorage.getItem("connection");
		//let tipoUsuario = sessionStorage.getItem("tipoUsuario");

		//This.setState({ connection: new Boolean(connection) , tipoUsuario: tipoUsuario });
		This.setState({ productos: res });

	})
	.catch(err => {handleError(err)});

	//termina fetch
}

export default fetchProductos;