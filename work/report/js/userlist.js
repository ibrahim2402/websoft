window.onload = () => {
 const SERVER_URL = 'https://api.scb.se/UF0109/v2/skolenhetsregister/sv/skolenhet';
 // get table element
 const table = document.querySelector('#skol-list');
 // call API using `fetch`
 fetch(SERVER_URL)
     .then(res => res.json())
     .then(res => {
        // loop over all users
        res.data.map(Skolenhet => {
 		// create a `tr` element
		const tr = document.createElement('tr');
		// create ID `td`
		const idTd = document.createElement('td');
 		idTd.textContent = `${Skolenhetskod}`;
 		// create Name `td`
 		const nameTd = document.createElement('td');
 		nameTd.textContent = `${Kommunkod}`;
 		// add tds to tr
 		tr.appendChild(idTd);
 		tr.appendChild(nameTd);
 		// app tr to table
 		table.querySelector('tbody').appendChild(tr);
       });
     })
     .catch(err => console.log('Error:', err));
};