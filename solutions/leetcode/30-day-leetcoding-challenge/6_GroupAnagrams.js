function groupAnagrams(strs) {
  let map = {};

  for (const str of strs) {
    let key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
// groupAnagrams(['', '']);
// groupAnagrams(['', 'b']);
