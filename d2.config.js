/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',

    entryPoints: {
        app: './src/app.tsx',
    },

    direction: 'auto',
    viteConfigExtensions: './vite.config.mts',
}

module.exports = config
