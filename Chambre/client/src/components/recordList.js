import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//viewing compo for Records via Get method to fetch all data from db.

const Record = (props) => (
	<tr>
		<td>{props.record.name}</td>
		<td>{props.record.position}</td>
		<td>{props.record.level}</td>
		<td>
			<Link>
			</Link>
			<button>
				
			</button>
		</td>
	</tr>
)
