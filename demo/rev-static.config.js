module.exports = {
    inputFiles: [
        "demo/*.js",
        "demo/*.css",
        "demo/*.png",
        "demo/**/*.ejs.html",
    ],
    excludeFiles: [
        "demo/*-*.*",
        "demo/*.config.js",
    ],
    json: false,
    outputFiles: file => file.replace(".ejs", ""),
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
};
