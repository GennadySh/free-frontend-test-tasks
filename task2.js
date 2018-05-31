let a;
let b;

function countArrayShift(a, b) {
  if (a.length !== b.length)
    return(-1);
  for (let i = 0; i < a.length; i++) {
    if (a === b)
      return(i < a.length - i) ? i : (a.length - i);
    a = a.substring(1) + a[0];
  }
  return(-1);
}

if(process.argv.length >= 4) {
  a = process.argv[2].toString().replace(/\D+/g,"");
  b = process.argv[3].toString().replace(/\D+/g,"");
    if (a.length >= 1 && a.length <= 10000 && b.length >=1 && b.length <= 10000) {
      process.stdout.write(countArrayShift(a, b) + "\n");
    }
    else {
      process.stdout.write('Line length out of range!');
    }
}
else {
  process.stdout.write("The input should be given two strings!\n");
}