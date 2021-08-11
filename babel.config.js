module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
  ],
  env: {
    utils: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['bin-cli-next'],
            alias: { 'bin-cli-next/src': 'bin-cli-next/lib' },
          },
        ],
      ],
    },
  },
}
