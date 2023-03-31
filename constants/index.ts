const projects = [
	{
		name: 'yacht',
		title: 'ヨット',
		category: 'Androidアプリ',
		description: '5つのサイコロを振って、その組み合わせから役を作り、高得点を競うボードゲーム',
		image: 'yacht.png',
		hero: 'yacht-hero.jpg',
		url: 'https://play.google.com/store/apps/details?id=com.n2dev.YachtDice',
		tags: ['Unity', 'C#', 'Blender', 'Photoshop'],
		project_desc:
			'Wordleからから着想を得て、文字のビンゴゲームをReactとTypeScriptを使用して実装しました。プレイヤーは8回の試行で多くの列を揃えることを目指します。',
		roles: ['ゲームロジックの実装', '3Dモデル制作'],
	},
	{
		name: 'mojibi',
		title: 'Mojibi',
		category: 'Webアプリ',
		description: '5つのサイコロを振って、その組み合わせから役を作り、高得点を競うボードゲーム',
		image: 'mojibi.png',
		hero: 'mojibi-hero.png',
		github: 'https://github.com/n2dev/mojibi',
		url: 'https://n2dev.github.io/mojibi/',
		tags: ['TypeScript', 'React', 'MUI', 'Recharts', 'Framer Motion'],
		project_desc:
			'Wordleからから着想を得て、文字のビンゴゲームをReactとTypeScriptを使用して実装しました。プレイヤーは8回の試行で多くの列を揃えることを目指します。',
		roles: ['フロントエンド開発', 'ゲームロジックの実装', 'UI/UXデザイン'],
	},
	{
		name: 'discordcafe',
		title: 'Discord Cafe',
		category: 'Webアプリ',
		description: '音声通話アプリDiscordのサーバー宣伝やフレンド募集ができるユーザー投稿型サイト',
		image: 'dcafe.png',
		hero: 'dcafe-hero.jpg',
		url: 'https://discordcafe.app/',
		tags: ['TypeScript', 'React', 'redux', 'webpack', 'Node.js', 'Express', 'MySQL'],
		project_desc:
			'私が初めて制作したWebサイトになります。ユーザーはDiscordと連携することによってコンテンツを投稿できるようになります。',
		roles: [
			'フロントエンド開発',
			'バックエンド開発',
			'UI/UXデザイン',
			'外部APIとの連携',
			'Discord Botの開発',
		],
	},
	{
		name: 'quick-dictionary',
		title: '一括英単語検索',
		category: 'Chrome拡張',
		description:
			'ブラウザ上の英単語をダブルクリックすることで指定した辞書サイトを一括で開くことができるChrome拡張',
		image: 'qdict.png',
		youtube: 'https://www.youtube-nocookie.com/embed/wJES-F5Lk14',
		url: 'https://chrome.google.com/webstore/detail/%E4%B8%80%E6%8B%AC%E8%8B%B1%E5%8D%98%E8%AA%9E%E6%A4%9C%E7%B4%A2/hppoficilhdedjgledncaoknmgfejaoi',
		github: 'https://github.com/n2dev/chrome-quick-dictionary',
		tags: ['JavaScript'],
	},
	{
		name: 'dynamic-bar-chart',
		title: '新型コロナウイルス感染者マップ',
		category: '動的グラフ',
		description: '2020年初旬の新型コロナウイルスの感染者数を可視化したマップ',
		image: 'crmap.jpg',
		youtube: 'https://www.youtube-nocookie.com/embed/FeLgkuqB8UI',
		tags: ['p5.js'],
	},
]

interface TagColorMap {
	[key: string]: string
}

const tagColorMap: TagColorMap = {
	TypeScript: 'cyan',
	JavaScript: 'yellow',
	React: 'blue',
	MUI: 'teal',
	Recharts: 'green',
	'Framer Motion': 'pink',
	Unity: 'gray',
	'C#': 'messenger',
	Blender: 'orange',
	Photoshop: 'telegram',
	redux: 'telegram',
	webpack: 'linkedin',
	'Node.js': 'green',
	Express: 'whatsapp',
	MySQL: 'red',
	'p5.js': 'pink',
}

export { projects, tagColorMap }
