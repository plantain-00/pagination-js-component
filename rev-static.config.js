module.exports = {
  inputFiles: [
    'packages/@(vue|react|angular)/demo/**/*.bundle.js',
    'packages/@(vue|react|angular)/demo/**/*.ejs.html',
    'packages/core/demo/*.bundle.css'
  ],
  json: false,
  outputFiles: file => file.replace('.ejs', ''),
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName,
  base: 'packages',
  fileSize: 'file-size.json'
}
