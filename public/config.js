System.config({
  transpiler: 'plugin-babel',
  meta: {
},
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  defaultExtension: 'js',
  map: {
    'react': 'npm:react@16/umd/react.development.js',
    'react-dom': 'npm:react-dom@16/umd/react-dom.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',
    'devextreme': 'npm:devextreme@19.2',
    'devextreme-react': 'npm:devextreme-react@19.2',
    'jszip': 'npm:jszip@3.1.3/dist/jszip.min.js',
    'quill': 'npm:quill@1.3.7/dist/quill.js',
    'devexpress-diagram': 'npm:devexpress-diagram@0.1.53',
    'devexpress-gantt': 'npm:devexpress-gantt@0.0.27',
    // SystemJS plugins
    'plugin-babel': 'npm:systemjs-plugin-babel@0/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel@0/systemjs-babel-browser.js'
  },
  packages: {
    'devextreme': {
      defaultExtension: 'js'
    },
    'devextreme-react': {
      main: 'index.js'
    },
  },
  babelOptions: {
    sourceMaps: false,
    stage0: true,
    react: true
  }
});
