class SchoolExperiments {
  public getRandomTsCode(): string {
    const codes = ["const greetings = 'Hello World!'", "console.log(greetings);"];
    return codes[Math.floor(Math.random() * codes.length)];
  }
}
