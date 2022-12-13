const { SlashCommandBuilder } = require("discord.js");
const quest = ["홀", "짝"];
module.exports = {
	data: new SlashCommandBuilder()
		.setName("홀짝")
		.setDescription("홀이냐 짝이냐?!")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("홀 | 짝 둘중 하나만 입력하세요")
		),
	async execute(interaction) {
		const value = interaction.options.getString("input");
		const random = Math.floor(Math.random() * quest.length);
		const answer = quest[random];
		if (value == answer) {
			interaction.reply(`당신: ${value} VS 정답: ${answer}\n맞췄습니다!`);
		} else {
			interaction.reply(`당신: ${value} VS 정답: ${answer}\n틀렸습니다!!`);
		}
	},
};
