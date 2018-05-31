let str;

function lockFilter(str) {
  str = str.replace(/[РрКкНн]/g,'');
  return(str);
}

if(process.argv.length >= 3) {
  str = process.argv[2].toString();

  if (str.length >= 1 && str.length <= 10000) {
    process.stdout.write(lockFilter(str) + "\n");
  }
  else {
    process.stdout.write('Line length out of range!\n');
  }
}
else {
  process.stdout.write("The input should be given one string!\n");
}