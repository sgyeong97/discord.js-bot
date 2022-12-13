const { SlashCommandBuilder } = require("discord.js");

let Menu = [
	"마라탕",
	"쌀국수",
	"갈비찜",
	"코다리",
	"계란찜",
	"간장계란밥",
	"꽁치조림",
	"달걀말이",
	"닭가슴살",
	"닭가슴살 볶음",
	"참치",
	"낙지볶음",
	"닭강정",
	"양념치킨",
	"간장치킨",
	"닭도리탕",
	"돼지불고기",
	"수육",
	"보쌈",
	"족발",
	"메밀국수",
	"오징어볶음",
	"장조림",
	"두루치기",
	"찜닭",
	"떡갈비",
	"편육",
	"계란국",
	"복어국",
	"김치찌개",
	"떡국",
	"떡만둣국",
	"타코야키",
	"무국",
	"미역국",
	"부대찌개",
	"컵라면",
	"불닭볶음면",
	"사골",
	"쇠고깃국",
	"시래기국",
	"아욱국",
	"홍합탕",
	"짜글이",
	"전골",
	"비빔국수",
	"냉면",
	"막국수",
	"잔치국수",
	"군만두",
	"물만두",
	"찐만두",
	"튀김만두",
	"비빔밥",
	"초밥",
	"김밥",
	"볶음밥",
	"오므라이스",
	"주먹밥",
	"카레",
	"카레볶음밥",
	"카레우동",
	"팥죽",
	"덮죽",
	"호박죽",
	"국밥",
	"컵밥",
	"삼각김밥",
	"밥버거",
	"맥도날드",
	"맘스터치",
	"롯데리아",
	"KFC",
	"떡볶이",
	"라면",
	"튀김",
	"돈가스",
	"동그랑땡",
	"짜장면",
	"빙수",
	"참쌀떡",
	"치즈볼",
	"달고나",
	"토스트",
	"피자",
	"샌드위치",
	"닭발",
	"오돌뼈",
	"크림수프",
	"스파게티",
	"로소토",
	"라자냐",
	"마카로니 앤 치즈",
	"알리오 올리오",
	"명랑젓 파스타",
	"카르보나라 스파게티",
	"파푸네스카",
	"마늘빵",
	"피치&칩스",
	"핫케이크",
	"스테이크",
	"크로켓",
	"스크램블 에그",
	"핫도그",
	"계란빵",
	"호빵",
	"붕어빵",
	"파운드 케이크",
	"마들렌",
	"슈크림빵",
	"푸딩",
	"마라탕",
	"고추잡채",
	"잡채",
	"깐풍기",
	"동파육",
	"마파두부",
	"탕수육",
	"회과육",
	"돈가스덮밥",
	"새우튀김 덮밥",
	"우동",
	"샤브샤브",
	"오야코동",
	"오코노미야키",
	"야키소바",
	"연어 데리야키",
	"하이라이스",
	"오니기리",
	"타코",
	"부리토",
	"칠리 콘 카르네",
	"월남쌈",
	"월남국수",
	"간장국수",
	"오뚜기 3분요리",
	"감자볶음",
	"김치볶음밥",
	"달걀밥",
	"두부김치",
	"라면밥",
	"마가린 비빔밥",
	"바비큐",
	"스팸마요",
	"참치마요",
	"콘샐러드",
	"토마토 밥",
	"토마토달걀볶음",
	"투움바 라면",
	"솔의눈 밥",
	"민트초코라면",
	"돈까스 냉면",
	"귤밥",
	"초콜릿 우동",
	"빵밥",
	"수박 샌드위치",
	"딸기 라면",
	"생크림 짜장면",
	"파인애플 피자",
	"김치 케이크",
	"치킨냉면",
	"초밥피자",
	"유자 아메리카노",
	"삼겹살 빙수",
	"김치 붕어빵",
	"민트초코 붕어빵",
	"냉면 국밥",
	"오이&파인애플&민트초밥",
	"김치 초콜릿",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("음식추천")
		.setDescription("랜덤으로 음식을 추천해드립니다!"),
	async execute(interaction) {
		const random = Math.floor(Math.random() * Menu.length);
		return interaction.reply("추천 음식 : "+Menu[random]);
	},
};