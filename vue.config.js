module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      externals: ["ffmpeg-static-electron", "ffprobe-static-electron"],
      builderOptions: {
        files: [
          "**/*",
          "node_modules/**/*",
          "node_modules/ffmpeg-static-electron/bin/${os}/${arch}/ffmpeg",
          "node_modules/ffmpeg-static-electron/index.js",
          "node_modules/ffmpeg-static-electron/package.json",
          "node_modules/ffprobe-static-electron/bin/${os}/${arch}/ffprobe",
          "node_modules/ffprobe-static-electron/index.js",
          "node_modules/ffprobe-static-electron/package.json",
        ],
        asar: false,
        win: {
          target: [
            {
              target: 'zip', // 'zip', 'nsis', 'portable'
              arch: ['x64'], // 'x64', 'ia32'
            },
          ],
          icon: "src/assets/icon.png",
          files: [
            "node_modules/ffmpeg-static-electron/bin/win/${arch}/ffmpeg",
            "!node_modules/ffmpeg-static-electron/bin/win/ia32${/*}",
            "!node_modules/ffmpeg-static-electron/bin/linux${/*}",
            "!node_modules/ffmpeg-static-electron/bin/mac${/*}",
            "node_modules/ffprobe-static-electron/bin/win/${arch}/ffprobe",
            "!node_modules/ffprobe-static-electron/bin/win/ia32${/*}",
            "!node_modules/ffprobe-static-electron/bin/linux${/*}",
            "!node_modules/ffprobe-static-electron/bin/mac${/*}",
          ]
        },
      }
    }
  }
}
