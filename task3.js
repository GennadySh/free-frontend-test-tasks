let a;
let b;

function isInteger(num) {
  return (num ^ 0) === num;
}

function nod(a, b) {
  if (b === 0) {
    return(Math.abs(a));
  }
  else {
    return(nod(b, a % b));
  }
}

if(process.argv.length >= 4) {
  a = +(process.argv[2].replace(/[^0-9.-]/g, ""));
  b = +(process.argv[3].replace(/[^0-9.-]/g, ""));

  if(isInteger(a) && isInteger(b)) {
     if(a >= 1 && a <= 10000 && b >= 1 && b <= 10000) {
      process.stdout.write(nod(a, b) + "\n");
    }
    else {
      process.stdout.write('Numbers out of range!\n');
    }
  }
  else {
    process.stdout.write("Numbers must be integers!\n");
  }
}
else {
  process.stdout.write("The input should be given two numbers!\n");
}
