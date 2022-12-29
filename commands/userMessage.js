const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("send")
		.setDescription("개인메세지 보내기 테스트")
		.addStringOption((option) =>
			option
				.setName("대상")
				.setDescription("비밀편지를 보낼 대상을 태그하세요")
		),
	async execute(interaction) {
		const target = interaction.options.getString("대상");
		console.log(target);
		// await client.users.send(target.id, "TEST!");
		/* let target = interaction.member.nickname;
		if (target) {
			name = target;
		} else {
			name = interaction.user.username;
		} */
		await interaction.user.send("HELLO!");
		// const message = "```fix\n" + target + "에게 메세지 전송 완료```";
		return interaction.reply("message");
	},
};
