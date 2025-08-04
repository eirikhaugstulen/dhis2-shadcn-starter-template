/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',

    entryPoints: {
        app: './src/app.tsx',
    },

    direction: 'auto',
    viteConfigExtensions: './viteConfigExtensions.mjs',
}

module.exports = config
