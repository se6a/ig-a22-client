import path from "path";
import {sveltekit} from "@sveltejs/kit/vite";
import type {UserConfig} from "vite";

const config: UserConfig = {
    resolve: {
        alias: {
            $components: path.resolve("./src/lib/components"),
            $css: path.resolve("./src/lib/css")
        }
    },

    build: {
        target: "es2015"
    },

    server: {
        port: 3000
    },

    plugins: [sveltekit()]
};

export default config;
