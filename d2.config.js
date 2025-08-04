/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',

    entryPoints: {
        app: './src/App.tsx',
    },

    direction: 'auto',
    viteConfigExtensions: './viteConfigExtensions.mjs',
}

module.exports = config
