// JavaScript Document

function handleError(err){
	console.log(`Request failed: ${err}`);
}

const FetchPago = (url, serializeinfo, This) => {
	
	const options = {
		method: 'post',
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		body: serializeinfo
	}
	
	//Enviando datos con Fetch
	fetch(url, options)
	
	.catch(err => handleError(err));

	//termina fetch
}

export default FetchPago;