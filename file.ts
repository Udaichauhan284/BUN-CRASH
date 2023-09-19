// const data = "I love JavaScript Bun";
// await Bun.write('output.txt', data);

const file = await Bun.file('output.txt');
console.log(await file.text());