const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();
const API_KEY = process.env.GIPHY_KEY;

const giphy = require("giphy-api")(API_KEY);

const quest = ["홀", "짝"];
module.exports = {
	data: new SlashCommandBuilder()
		.setName("홀짝")
		.setDescription("홀이냐 짝이냐?!🎲")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("홀 | 짝 둘중 하나만 입력하세요")
		),
	async execute(interaction) {
		const value = interaction.options.getString("input");
		const random = Math.floor(Math.random() * quest.length);
		const answer = quest[random];
		let url, tag, message, id;
		if (value == answer) {
			tag = "winner";
			message = "🎉 당신의 **승리!**";
		} else {
			tag = "fail";
			message = "😭 당신의 패배...";
		}
		let result = await giphy.random({
			tag: tag,
		});
		id = result.data.id;
		url = `https://media1.giphy.com/media/${id}/200.gif`;
		console.log(url);
		const embed = new EmbedBuilder()
			.setColor("Gold")
			.setTitle(interaction.member.nickname)
			.setAuthor({
				name: "홀 짝",
				iconURL:
					"https://cdn-icons-png.flaticon.com/512/5528/5528995.png",
			})
			.setImage(url)
			.setDescription(message);
		return interaction.reply({
			embeds: [embed],
		});
	},
};
