import { ts } from "https://deno.land/std/fs/mod.ts";

const code = `
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
`;

console.log(code);
