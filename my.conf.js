// Karma configuration
// Generated on Fri Sep 14 2018 22:53:30 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/main.test.tsx'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/main.test.tsx': ['webpack', 'sourcemap']
    },

    webpack: {
      resolve: {
        extensions: ['.js', '.ts', '.tsx']
      }, 
      module: {
        rules: [
          {
            test: /\.tsx?$/, 
            loader: 'ts-loader'
          }
        ] 
      },  
      devtool: 'inline-source-map'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
