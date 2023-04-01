const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputFolder = './public/images'
const outputFolder = './public/images/blurs'

// 入力フォルダ内の画像を変換する
fs.readdirSync(inputFolder).forEach((file) => {
	const inputPath = path.join(inputFolder, file)
	const outputPath = path.join(outputFolder, file)

	// sharpを使って画像変換
	sharp(inputPath)
		.resize(16) // 画像を縮小する
		.blur(2) // ぼかし効果を適用する
		.toFile(outputPath) // 変換後の画像を保存する
		.catch((error) => console.error(`Error converting image: ${error}`))
})
