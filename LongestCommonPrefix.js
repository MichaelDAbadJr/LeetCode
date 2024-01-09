let strs = ['flower', 'flow', 'flight'];

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  let prefix = strs[0];
  // console.log(`out for loop: strs = ${strs}, prefix = ${prefix}`);
  for (let i = 1; i < strs.length; i++) {
    // console.log(`in for loop: strs[i] = ${strs[i]}, prefix = ${prefix}`);
    while (strs[i].indexOf(prefix) !== 0) {
      // console.log(`in while loop, before prefix.substring: strs[i] = ${strs[i]}, prefix = ${prefix}`);
      // console.log(`in while loop, before prefix.substring: strs[i].indexOf(prefix) = ${strs[i].indexOf(prefix)}`);
      prefix = prefix.substring(0, prefix.length - 1);
      // console.log(`in while loop, after prefix.substring: strs[i] = ${strs[i]}, prefix = ${prefix}`);
      // console.log(`in while loop, after prefix.substring: strs[i].indexOf(prefix) = ${strs[i].indexOf(prefix)}`);
      if (prefix === '') {
        return '';
      }
    }
    console.log('Prefix is currently ' + prefix);
  }
  return prefix;
}

console.log(longestCommonPrefix(strs));
