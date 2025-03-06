function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(): string {
  const length = getRandomInt(8, 16);
  let password = "";
  for (let i = 0; i < length; i++) {
    password += String.fromCharCode(getRandomInt(65, 90));
  }
  return password;
}
