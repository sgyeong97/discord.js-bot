const { Events } = require("discord.js");
const { ComponentType } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(
			interaction.commandName
		);

		if (!command) {
			console.error(
				`No command matching ${interaction.commandName} was found.`
			);
			return;
		} else {
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
		const collector = interaction.channel.createMessageComponentCollector({
			time: 15000,
		});
        // Button Event collector
		collector.on("collect", (i) => {
			if (i.user.id === interaction.user.id) {
                console.log(i.customId);
				i.reply(
					`${i.user.username} clicked on the ${i.customId} button.`
				);
			}
		}); 

		collector.on("end", (collected) => {
			console.log(`Collected ${collected.size} interactions.`);
		});
	},
};
