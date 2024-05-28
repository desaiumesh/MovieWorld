import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  const env = loadEnv (mode, process.cwd(),'');

  return {
    define :{
      'process.env.REACT_API_JWT_Token': JSON.stringify(env.REACT_API_JWT_Token),
      'process.env.REACT_API_MOVIES_BASE_URL': JSON.stringify(env.REACT_API_MOVIES_BASE_URL)
    },
    plugins: [react()],
  }

})
