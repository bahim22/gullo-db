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

export default function RecordList() {
	const [records, setRecords] = useState([]);

	//method that fetches records from db
	useEffect(() => {
		async function getRecords() {
			const response = await fetch(`http://localhost:7222/record/`);

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
	}, [records.length]);

	// method for deleting a record
	async function deleteRecord(id) {
		await fetch (`http://localhost:7222/${id}`, {
			method: 'DELETE'
		});

		const newRecords = records.filter((el) => el._id !== id);
		setRecords(newRecords);
	}

	// method to map out records on table
	const recordList = () => {
		return records.map((record) => {
			return (
				<Record
					record={record}
					deleteRecord={() => deleteRecord(record._id)}
					key={record._id}
				/>
			);
		});
	}

	// section for displaying table w/ records of individuals

	return (
		<div>
			<h3>Record List</h3>
			<table className='table table-striped' style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Level</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{recordList()}</tbody>
			</table>
		</div>
	);
}
