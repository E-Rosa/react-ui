import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts"],
      name: "react-ui",
      formats: ["es"],
      fileName: "react-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "framer-motion"], // Prevent bundling React (important!)
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      copyDtsFiles: true, // Ensures all .d.ts files are included
    }),
    react(),
  ],
});
