import './VowelsForm.css'

import { FormEventHandler, useState } from 'react'

interface VowelsFormProps {
	setVowels: React.Dispatch<React.SetStateAction<number>>
}

const VowelsForm = ({ setVowels }: VowelsFormProps) => {
	const [text, setText] = useState('')
	// const [vowels, setVowels] = useState(0)

	const submit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		const textArray = Array.from(text)

		//* Reset the counter
		setVowels(prev => 0)

		textArray.forEach(letter => {
			switch (letter) {
				case 'a':
				case 'A':
				case 'e':
				case 'E':
				case 'i':
				case 'I':
				case 'o':
				case 'O':
				case 'u':
				case 'U':
					setVowels(prev => {
						prev++
						console.log(prev)
						return prev
					})
					break
				default:
					break
			}
		})
	}
	return (
		<form className='pt-3 vowels-form' onSubmit={submit}>
			<div className='mb-3'>
				<label htmlFor='text' className='form-label'>
					<h5>Text to analize</h5>
				</label>
				<input
					type='text'
					className='form-control'
					id='text'
					value={text}
					onChange={e => {
						setText(prev => e.target.value)
					}}
				/>
			</div>
			<button type='submit' className='btn btn-success'>
				Analize
			</button>
		</form>
	)
}

export default VowelsForm
