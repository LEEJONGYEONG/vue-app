const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'C:/spring/sprSrc17/dutchOrderTest/src/main/resources/static', // Build Directory
	devServer: {
		proxy: 'http://localhost:8388' // Spring Boot Server
	}
})