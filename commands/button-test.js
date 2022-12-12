const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
	SlashCommandBuilder,
} = require("discord.js");

const row = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId("primary")
			.setLabel("일반 버튼")
			.setStyle(ButtonStyle.Primary)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("success")
			.setLabel("성공 버튼")
			.setStyle(ButtonStyle.Success)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("danger")
			.setLabel("실패 버튼")
			.setStyle(ButtonStyle.Danger)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("emoji")
			.setLabel("이모지버튼")
			.setStyle(ButtonStyle.Primary)
			.setEmoji("😎")
	);
const embed = new EmbedBuilder()
	.setColor(0x0099ff)
	.setTitle("Some title")
	.setURL("https://discord.js.org")
	.setDescription("Some description here");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("button-test")
		.setDescription("Button-Test")
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		await interaction.reply({
			content: "Show the buttons",
			// ephemeral: true, 버튼 요구한 사람만 보는가? 여부
			components: [row],
		});
	},
};
