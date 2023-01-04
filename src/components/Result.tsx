import './Result.css'

interface ResultProps {
	vowels: Number
}

const Result = ({ vowels }: ResultProps) => {
	return (
		<div className='result text-center'>
			<h2>{vowels.toString()}</h2>
			<h3>{vowels.toString()} vowels</h3>
		</div>
	)
}

export default Result
