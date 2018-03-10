#!/usr/bin/env node

let axios = require('axios')
// console.log(process.argv)
// [ '/usr/local/bin/node',
// '/Users/bluesbonew/WebstormProjects/demo1/Private_Project/Npm_project/Weather/index.js' ]
// 得到一个数组，第一个值是说明用了哪个工具执行，第二个值是当前文件的目录
// 在cml里，在node index.js hello，hello会自动push进数组

let data = {}

if (process.argv[2]) {
	// 如果用户输入了城市名
	data.params = {
		city: process.argv[2]
	}
}

axios.get('http://api.jirengu.com/weather.php', data).then(function (response) {
	// console.log(response.data.results[0].weather_data[0])
	let weather = response.data.results[0].weather_data[0]
	console.log('当前城市是：' + response.data.results[0].currentCity)
	console.log('时间为：' + weather.date)
	console.log('PM2.5为：' + response.data.results[0].pm25)
	console.log('温度为：' + weather.temperature + ' ' + weather.wind)
	console.log('天气情况：' + weather.weather)

}).catch(function (error) {
	console.log(error)
})

