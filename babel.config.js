module.exports = {
    presets: [
        ['@babel/preset-typescript'],
        ['@babel/preset-react'],
        ['@babel/preset-env'],
    ],
    sourceType: "unambiguous",
    plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        ['@babel/plugin-proposal-class-properties'],
        ['@babel/plugin-transform-modules-commonjs'],
        ['@babel/plugin-transform-arrow-functions'],
        ['@babel/plugin-transform-object-assign'],
        ['@babel/transform-runtime', { useESModules: false, regenerator: true }],
    ],
    ignore: [
        /node_modules\/(?!(color-convert|ansi-styles|strip-ansi|ansi-regex|debug|react-dev-utils|chalk|acorn-jsx|punycode|redux-saga-promise-actions)\/).*/,
        /[\/\\]core-js/,
        /@babel[\/\\]runtime/,
    ],
};