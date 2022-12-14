module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);

    const presets = [
        "@babel/preset-env",
        "babel-preset-vue",
        "@babel/preset-typescript"
    ];
    const plugins = [
        process.env.NODE_ENV === 'development' && 'react-refresh/babel',
        "@babel/plugin-transform-runtime"
    ].filter(Boolean);

    return {
        sourceType: "unambiguous",
        presets,
        plugins
    }
}