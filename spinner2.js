let time = 100;
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];
for (const i of spinner) {
  setTimeout(() => {
    process.stdout.write(i);
  }, time);
  time += 200;
}