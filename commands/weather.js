const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();
// weather API setting
const axios = require("axios");
const API_KEY = process.env.WEATHER_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const citiesId = {
	대전: 1835235,
	서울: 1835848,
	부산: 1838524,
	대구: 1835327,
	광주: 1841811,
	인천: 1843561,
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName("날씨")
		.setDescription("기본값은 서울입니다.")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("가능 지역: 대전, 부산, 대구 ,광주, 인천")
		),
	async execute(interaction) {
		const date = new Date();

		const input_value = interaction.options.getString("input");
		let cities = "";

		if (!input_value) {
			input_value = "서울";
		}
		cities = citiesId[input_value];

		const url = `${API_URL}?id=${cities}&units=metric&lang=kr&appid=${API_KEY}`;

		await axios
			.get(url)
			.then((response) => {
				const weather_result = response.data;

				const now_weather = weather_result["weather"][0]["description"];
				const icon = weather_result["weather"][0]["icon"];
				const temp = String(weather_result["main"]["temp"]);
				const feels_like = String(weather_result["main"]["feels_like"]);
				const wind = String(weather_result["wind"]["speed"]);

				const embed = new EmbedBuilder()
					.setColor(0x0099ff)
					.setTitle(`[${input_value}] 날씨 정보`)
					.setDescription(`${date.toLocaleString("ko-kr")}`)
					.setThumbnail(
						`https://openweathermap.org/img/wn/${icon}@2x.png`
					)
					.addFields(
						{ name: "현재 날씨", value: now_weather },
						{ name: "온도", value: temp + " °C", inline: true },
						{
							name: "체감 온도",
							value: feels_like + " °C",
							inline: true,
						},
						{ name: "풍속", value: wind + " m/s" }
					);
				return interaction.reply({ embeds: [embed] });
			})
			.catch((error) => console.log(input_value));
		return interaction.reply(
			"입력값이 잘못되었습니다.\n입력값에 **공백**이 있는지, 이름을 잘못 적지 않았는지 확인해주세요!"
		);
	},
};
