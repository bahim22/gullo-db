import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

const Edit = () => {
	const [ form, setForm ] = useState({
		name: '',
		position: '',
		level: '',
		records: [],
	})
	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		async function fetchData() {
			const id = params.id.toString()
			const response = await fetch(`http://localhost:7222/record/${params.id.toString()}`)

			if (!response.ok) {
				const message = `Error has occurred: ${response.statusText}`
				window.alert(message)
				return
			}

			const record = await response.json()
			if (!record) {
				window.alert(`Record with id ${id} unable to be located`)
				navigate('/')
				return
			}

			setForm(record)
		}

		fetchData()

		return
	}, [params.id, navigate])







	return (
		<div>

		</div>
	)
}

export default Edit;
