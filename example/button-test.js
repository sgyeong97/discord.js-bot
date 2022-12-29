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
			.setCustomId("primary_btn")
			.setLabel("일반 버튼")
			.setStyle(ButtonStyle.Primary)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("success_btn")
			.setLabel("성공 버튼")
			.setStyle(ButtonStyle.Success)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("danger_btn")
			.setLabel("실패 버튼")
			.setStyle(ButtonStyle.Danger)
	)
	.addComponents(
		new ButtonBuilder()
			.setCustomId("emoji_btn")
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
		.setDescription("Button-Test"),
		// .setDefaultMemberPermissions(0), 관리자만 가능
	async execute(interaction) {
		await interaction.reply({
			content: "Show the buttons",
			ephemeral: true,
			components: [row],
		});
	},
};