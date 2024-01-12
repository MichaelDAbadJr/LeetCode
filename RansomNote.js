const magazine = 'aaddacf';
const ransomNote = 'aadazf';

function canConstruct(ransomNote, magazine) {
  const map = new Map();
  console.log('magazine: ' + magazine);
  console.log('ransomNote: ' + ransomNote);
  for (let i = 0; i <= magazine.length - 1; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      map.set(magazine[i], 1);
    }
  }
  console.log('Magazine Map:');
  console.log(map);
  for (let i = 0; i <= ransomNote.length - 1; i++) {
    if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
      console.log('Magazine Map returning Ransom Map that is now false:');
      console.log(map);
      return false;
    } else {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }
  }
  console.log('Magazine Map adjusted to be Ransom Map:');
  console.log(map);
  return true;
}

console.log(canConstruct(ransomNote, magazine));
