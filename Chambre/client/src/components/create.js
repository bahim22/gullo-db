import { useNavigate } from 'react-router'

import React from 'react'

const Create = () => {
	const [form, setForm] = useState({
		name: '',
		position: '',
		team: '' || null,
		Rings: '' || null
	});
	const navigate = useNavigate()

	//methods for updating state prop
	const updateForm = (value) => {
		return setForm((prev) => {
			return { ...prev, ...value }
		});
	}

	//func for submitting
	async function onSubmit(e) {
		e.preventDefault();
	}
	return (
		<div>

		</div>
	)
}

export default Create;
