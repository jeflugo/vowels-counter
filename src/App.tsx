//* Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//* Components
import VowelsForm from './components/VowelsForm'
import Result from './components/Result'
import Footer from './components/Footer'

//* Modules
import { useState } from 'react'

function App() {
	const [vowels, setVowels] = useState(0)

	return (
		<main className='main-container mx-auto'>
			<h1>Vowels Counter PRO</h1>
			<VowelsForm setVowels={setVowels} />
			<Result vowels={vowels} />
			<Footer />
		</main>
	)
}

export default App
