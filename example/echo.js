const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("echo")
		.setDescription("Replies with your input!")
		.addStringOption((option) =>
			option.setName("input").setDescription("The input to echo back")
		),
	async execute(interaction) {
		const value = interaction.options.getString("input");
        console.log(interaction.options);
		if (value) return interaction.reply(value);
		return interaction.reply("공기팡~");
	},
};
