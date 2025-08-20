import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        output: [
            {file: "dist/index.cjs.js", format: "cjs", sourcemap: true},
            {file: "dist/index.esm.js", format: "esm", sourcemap: true}
        ],
        external: ["react", "react-dom"],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json", declaration: false, declarationMap: false}),
            postcss({
                extract: "styles.css", // emit CSS file
                modules: false,
                minimize: true
            })
        ]
    },
    {
        input: "./dist/types/packages/neu/src/index.d.ts",   // ✅ point here
        output: [{file: "./dist/index.d.ts", format: "es"}],
        plugins: [dts()],
        external: [/\.css$/]
    }
];
