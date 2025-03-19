function getRandomTsCode(): string {
  const rand = Math.floor(Math.random() * 100);
  if (rand <= 50) {
    return `console.log("Hello, world!")`;
  } else {
    return `const message = "Hello, world!"`
  }
}
