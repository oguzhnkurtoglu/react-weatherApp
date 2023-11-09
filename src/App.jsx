import axios from "axios"

const App = () => {
	const location = "Ankara"
	const url = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${location}`
	const headers = {
		Authorization: "apikey 6x4Y2RR863L78oZhHm6G8c:7F7qeeju2ZqLyxuL6MrgSX",
		"Content-Type": "application/json",
	}
	axios
		.get(url, { headers: headers })
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.error(error)
		})

	return (
		<div className="w-full h-full relative">
			<div className="text-center p-4 ">
				<input
					placeholder="Enter Location"
					className="bg-white-600/100 shadow-md py-3 px-6 w-[700px] text-lg rounded-3xl border-gray-300 placeholder:text-gray-400 focus:outline-none"
				/>
			</div>
		</div>
	)
}

export default App
