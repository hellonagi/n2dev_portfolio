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
			'サイコロでやるポーカー風のゲームです。サイコロの目の判定には線形代数の知識を活用しました。3DモデルはBlenderを使用し、全て自作しました。バラバラであるモバイル端末の解像度に対応するUI設計やカメラ設定に苦難しました。',
		funcs: ['シングルプレイ', '統計情報の表示'],
		plans: [
			'BOT対戦の追加',
			'ローカル対戦の追加',
			'オンライン対戦の追加',
			'アニメーションやエフェクトの追加',
		],
	},
	{
		name: 'mojibi',
		title: 'Mojibi',
		category: 'Webアプリ',
		description: '8つの単語でなるべく多くの列(縦・横・斜め)をそろえるブラウザゲーム',
		image: 'mojibi.png',
		hero: 'mojibi-hero.png',
		github: 'https://github.com/n2dev/mojibi',
		url: 'https://n2dev.github.io/mojibi/',
		tags: ['TypeScript', 'React', 'MUI', 'Recharts', 'Framer Motion'],
		project_desc:
			'Wordleから着想を得て作った、文字のビンゴゲームです。前回のプロジェクトでは、スパゲティコードになってしまったので、保守性の高いコードになるように意識して作成しました。',
		funcs: ['オンスクリーンキーボード', 'localStorageを使ったゲーム進行状況の保存'],
	},
	{
		name: 'discordcafe',
		title: 'Discord Cafe',
		category: 'Webアプリ',
		description: '音声通話アプリDiscordのサーバー宣伝やフレンド募集ができるユーザー投稿型サイト',
		image: 'dcafe.png',
		hero: 'dcafe-hero.jpg',
		url: 'https://discordcafe.app/',
		tags: ['TypeScript', 'React', 'redux', 'MUI', 'webpack', 'Node.js', 'Express', 'MySQL'],
		project_desc:
			'私が初めて公開したWebサイトです。既存の類似サイトは連携ログイン時に不必要な情報を要求していたため、自分で作成することに決めました。ユーザーの情報を扱うため、セキュリティ対策に注意を払いました。',
		funcs: [
			'レスポンシブデザイン',
			'Discord連携ログイン',
			'フロント・バックエンド両方からのバリデーションチェック',
			'XSS, CSRF対策',
			'ログイン時のみ可能なコンテンツの投稿・編集・削除',
			'Discord Botを使ったサーバーの登録・更新',
		],
		plans: ['Redis導入', 'SEO対策', 'リファクタリング'],
	},
	{
		name: 'quick-dictionary',
		title: '一括英単語検索',
		category: 'Chrome拡張',
		description:
			'ブラウザ上の英単語をダブルクリックすることで指定した辞書サイトを一括で開くことができるChrome拡張機能',
		image: 'qdict.png',
		youtube: 'https://www.youtube-nocookie.com/embed/wJES-F5Lk14',
		url: 'https://chrome.google.com/webstore/detail/%E4%B8%80%E6%8B%AC%E8%8B%B1%E5%8D%98%E8%AA%9E%E6%A4%9C%E7%B4%A2/hppoficilhdedjgledncaoknmgfejaoi',
		github: 'https://github.com/n2dev/chrome-quick-dictionary',
		tags: ['JavaScript'],
		project_desc:
			'私は英単語を調べる際に、英和辞典、英英辞典、類義語、画像検索を利用します。効率化のため、それらを一括で実行できるChrome拡張機能を作成しました。',
		funcs: ['辞書の一括検索', '履歴の保存'],
	},
	{
		name: 'dynamic-bar-chart',
		title: '新型コロナウイルス感染者マップ',
		category: '動的グラフ',
		description: '2020年初旬の新型コロナウイルスの感染者数を可視化したマップ',
		image: 'crmap.jpg',
		youtube: 'https://www.youtube-nocookie.com/embed/FeLgkuqB8UI',
		tags: ['p5.js'],
		project_desc:
			'コロナウイルスの拡散具合を動くグラフとして表現しました。感染状況の変化やトレンドを視覚的に把握しやすくしました。',
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
