import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//viewing compo for Records via Get method to fetch all data from db.

const Record = (props) => (
	<tr>
		<td>{props.record.name}</td>
		<td>{props.record.position}</td>
		<td>{props.record.level}</td>
		<td>
			<Link className='btn btn-link' to={`/edit/${props.record._id}`}>
			</Link> |
			<button
				className='btn btn-link'
				onClick={() => {
					props.deleteRecord(props.record._id);
				}}
			>
				Delete
			</button>
		</td>
	</tr>
);

const RecordList = () => {
	const [records, setRecords] = useState([]);
	const localhost = `http://localhost:7222/record/`

	//method that fetches records from db
	useEffect(() => {
		async function getRecords() {
			const response = await fetch({localhost});

			if (!response.ok) {
				const message = `Error has occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}

			const records = await response.json();
			setRecords(records);
		}

		getRecords();

		return;
	}, [records.legth]);

	// method for deleting a record

	
}
