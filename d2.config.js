/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',
    id: 'assisted-ai-development',
    name: 'assisted-ai-development',
    title: 'AI-assisted Development',
    

    entryPoints: {
        app: './src/app.tsx',
    },

    direction: 'auto',
    viteConfigExtensions: './vite.config.mts',
}

module.exports = config
