const {
	SlashCommandBuilder,
	EmbedBuilder,
	AttachmentBuilder,
} = require("discord.js");

const fs = require("fs");
const logPath = "/home/sgyeong97/project/discord.js-bot/log/";

function writeLog(log) {
	fs.writeFile(logPath, log, { flag: "a+" }, (err) => {
		if (err) {
			return;
		}
	});
}

function randomAnswer() {
	const answerList = [
		"언젠가는",
		"안 돼",
		"가만히 있어",
		"그것도 안 돼",
		"좋아",
		"그럼",
		"다시 한번 물어봐",
	];
	const random = Math.floor(Math.random() * answerList.length);
	let fileName = "magic-conch-";
	console.log(random);
	switch (random) {
		case 0:
			fileName = fileName + "1.jpg";
			break;
		case 1:
			fileName = fileName + "2.jpg";
			break;
		case 2:
			fileName = fileName + "3.jpg";
			break;
		case 3:
			fileName = fileName + "4.jpg";
			break;
		case 4:
			fileName = fileName + "5.jpg";
			break;
		case 5:
			fileName = fileName + "6.jpg";
			break;
		case 6:
			fileName = fileName + "7.jpg";
			break;
	}
	return fileName;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("마법의-소라고동")
		.setDescription("마법의 소라고동님께 질문해보십시오, 답해주실겁니다.")
		.addStringOption((option) =>
			option
				.setName("질문")
				.setDescription("오 마법의 소라고동이시여, (질문)")
		),
	async execute(interaction) {
		console.log(interaction.member.nickname);
		const value = interaction.options.getString("질문");
		if (value) {
			const fileName = randomAnswer();
			const filePath = `../discord.js-bot/asset/img/${fileName}`;
			const file = new AttachmentBuilder(filePath);
			try {
				const embed = new EmbedBuilder()
					.setColor("#CFA3D8")
					.setTitle("오 마법의 소라고동이시여,")
					.setAuthor({
						name: interaction.member.nickname,
					})
					.setThumbnail(interaction.member.displayAvatarURL())
					.setDescription("```yaml\n" + value + "```")
					.setImage(`attachment://${fileName}`);
				return interaction.reply({
					embeds: [embed],
					files: [file],
				});
			} catch (err) {
				writeLog(err);
				return interaction.reply(
					"문제가 발생했습니다.\n개발자에게 문의하세요."
				);
			}
		} else {
			return interaction.reply(
				"아무런 __질문을 하지 않아__ 소라고동님은 아무말 하지 않으셨다.\n질문을 제대로 해보자."
			);
		}
	},
};
