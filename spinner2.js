const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']

let timer = 0
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, timer);
  timer += 100
}