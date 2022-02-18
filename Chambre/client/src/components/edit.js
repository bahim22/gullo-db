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

	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value }
		})
	}

	async function onSubmit(e) {
		e.preventDefault()
		const editedPerson = {
			name: form.name,
			position: form.position,
			level: form.level,
		}

		//func below sends a post req to update info in db
		await fetch(`http://localhost:7222/update/${params.id}`, {
			method: 'POST',
			body: JSON.stringify(editedPerson),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		navigate('/')
	}

	//display form that will update the data w/ user input
	return (
		<div>
			<h3>Update Record</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>
						Name:
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						value={form.name}
						onChange={(e) => updateForm({ name: e.target.value })}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='position'>
						Position:
					</label>
					<input
						type='text'
						className='form-control'
						id='position'
						value={form.position}
						onChange={(e) => updateForm({ position: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='positionOptions'
							id='positionIntern'
							value='Intern'
							checked={form.level === 'Intern'}
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor='positionIntern' className='form-check-label'>
							Intern
						</label>
					</div>

					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='positionOptions'
							id='positionJunior'
							value='Junior'
							checked={form.level === 'Junior'}
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor='positionJunior' className='form-check-label'>
							Junior
						</label>
					</div>

					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='positionOptions'
							id='positionSenior'
							value='Senior'
							checked={form.level === 'Senior'}
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor='positionSenior' className='form-check-label'>
							Senior
						</label>
					</div>
				</div>
				<br  />
				<div className='form-group'>
					<input
						type='submit'
						value='Update Record'
						className='btn btn-primary'
					/>
				</div>
			</form>
		</div>
	)
}

export default Edit;
