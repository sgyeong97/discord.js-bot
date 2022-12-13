const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");
const cheerio = require("cheerio");

const NEWS_URL = {
	'스포츠': "https://sports.news.naver.com/ranking/index",
	'연애': "https://entertain.naver.com/ranking",
	'MBC': "https://media.naver.com/press/214/ranking?type=popular",
	'SBS': "https://media.naver.com/press/055/ranking?type=popular",
	'JTBC': "https://media.naver.com/press/437/ranking?type=popular",
};
// const bodyList = {
//     '스포츠': '.news_wrap .news_list', //ul_id:_newsList
//     '연애': 'class="news_lst news_lst3 rank_news"', //ul_id:ranking_list
//     '방송사': 'press_ranking_list', //ul_class
// }

module.exports = {
	data: new SlashCommandBuilder()
		.setName("뉴스")
		.setDescription("네이버 뉴스 랭킹 TOP 5")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("스포츠, 연애, MBC, SBS, JTBC")
		),
	async execute(interaction) {
		let input_value = interaction.options.getString("input");
		if (!input_value) {
			input_value = "연애";
		}
		await axios.get(NEWS_URL[input_value]).then((html) => {
			const $ = cheerio.load(html);
            $.html();
            let body = '';
            switch(input_value){
                case '스포츠':
                    body = $('#_newsList')
                    break;
                case '연애':
                    body = $('#ranking_list')
                    break;
                default:
                    body = $('ul[class=press_ranking_list]')
            }
            console.log($(body).find('li').text());
			return interaction.reply("아직 개발중인 기능입니다.");
		});
	},
};
