// JavaScript Document

function handleError(err){
	console.log(`Request failed: ${err}`);
}

const fetchProductos = (url, This) => {
	//llamada de datos con Fetch
	fetch(url)
	.then( res => res.json() )
	.then( (res) => {
		This.setState({ productos: res });
	})
	.catch(err => {handleError(err)});

	//termina fetch
}

export default fetchProductos;