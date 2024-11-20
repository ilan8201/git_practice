const createSentense = () => {
	console.log(pronouns[Math.floor(Math.random() * pronouns.length)] + " " + actions[Math.floor(Math.random() * actions.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)]);
}

const pronouns = ["I am", "you are", "he is", "she is", "it is", "we are", "they are"];
const actions = ["eating a banana",
	"running a marathon",
	"reading a book",
	"jumping over puddles",
	"writing code",
	"playing soccer",
	"dancing to music",
	"singing a song",
	"cooking dinner",
	"drawing a picture",
	"watching a movie",
	"playing the guitar",
	"climbing a mountain",
	"drinking coffee",
	"shopping for groceries"
];
const verbs = ["very nice",
	"absolutely amazing",
	"incredibly awesome",
	"quite beautiful",
	"extremely exciting",
	"remarkably talented",
	"surprisingly effective",
	"exceptionally fast",
	"incredibly smart",
	"terribly wrong",
	"superb",
	"remarkably good",
	"outstanding",
	"immensely helpful",
	"so creative"
];
createSentense();

Test B