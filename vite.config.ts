import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import styleImport,{AntdResolve} from 'vite-plugin-style-import';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
      AntdResolve()
      ],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://47.93.114.103:6688/manage',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      }
    }
  },
  
  resolve:{
    alias:{
    "@":path.resolve(__dirname,'./src')
    }
    }
})
