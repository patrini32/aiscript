import { readFile, writeFile } from 'node:fs/promises';

const pkg = JSON.parse((await readFile('./package.json', 'utf8')));
await writeFile('./src/pkg.ts',
`/*
	This file is automatically generated by scripts/gen-pkg-ts.js.
	DO NOT edit this file. To change it's behavior, edit scripts/gen-pkg-ts.js instead.
*/
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
export const pkg = ${ JSON.stringify({
	version: pkg.version,
}, undefined, '\t')} as const;
`
);