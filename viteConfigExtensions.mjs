import path from 'path'
import { defineConfig } from 'vite'

const viteConfig = defineConfig(async (configEnv) => {
    const { mode } = configEnv
    return {
        clearScreen: mode !== 'development',
        resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
    }
})

export default viteConfig