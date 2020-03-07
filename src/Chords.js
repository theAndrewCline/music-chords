// -- iterate/map over list
// -- could ... create a map of every key since it's a finite list
// 'G' { A: 2, B: 3, C: 4, D:k 5, E: 6, F: 7, G: 1 }
const theSet = {
  'G': { 'A': 2, 'B': 3, 'C': 4, 'D': 5, 'E': 6, 'F#': 7, 'G': 1 },
  'C': { 'A': 6, 'B': 7, 'C': 1, 'D': 2, 'E': 3, 'F': 4, 'G': 5 },
  'F': { 'A': 3, 'B': 4, 'C': 5, 'D': 6, 'E': 7, 'F': 1, 'G': 2 },
  'A': { 'A': 1, 'B': 2, 'C#': 3, 'D': 4, 'E': 5, 'F#': 6, 'G#': 7 },
  'D': { 'A': 5, 'B': 6, 'C#': 7, 'D': 1, 'E': 2, 'F#': 3, 'G': 4 },
  'E': { 'A': 4, 'B': 5, 'C#': 6, 'D#': 7, 'E': 1, 'F#': 2, 'G#': 3 },
  'B': { 'A#': 7, 'B': 1, 'C#': 2, 'D#': 3, 'E': 4, 'F#': 5, 'G#': 6 },
  'F#': { 'A#': 3, 'B': 4, 'C#': 5, 'D#': 6, 'E#': 7, 'F#': 1, 'G#': 2 },
  'C#': { 'A#': 6, 'B#': 7, 'C#': 1, 'D#': 2, 'E#': 3, 'F#': 4, 'G#': 5 },
  'F': { 'A': 3, 'Bb': 4, 'C': 5, 'D': 6, 'E': 7, 'F': 1, 'G': 2 },
  'Bb': { 'A': 7, 'Bb': 1, 'C': 2, 'D': 3, 'Eb': 4, 'F': 5, 'G': 6 },
  'Eb': { 'Ab': 4, 'Bb': 5, 'C': 6, 'D': 7, 'Eb': 1, 'F': 2, 'G': 3 },
  'Ab': { 'Ab': 1, 'Bb': 2, 'C': 3, 'Db': 4, 'Eb': 5, 'F': 6, 'G': 7 },
  'Db': { 'Ab': 5, 'Bb': 6, 'C': 7, 'Db': 1, 'Eb': 2, 'F': 3, 'Gb': 4 },
}

const transposeTo = key => letter => theSet[key][letter]
const toNashvileNumber = key => letterList => letterList.map(transposeTo(key))

const transposeFrom = key => number => {
  return Object.entries(theSet[key])
    .filter(x => x[1] === number)[0][0]
}
const fromNashvileNumber = key => numberList => numberList.map(transposeFrom(key))

const toKeyFromKey = targetKey => originalKey => letterList => {
  return fromNashvileNumber(targetKey)(toNashvileNumber(originalKey)(letterList))
}

module.exports = {
  toNashvileNumber,
  fromNashvileNumber,
  toKeyFromKey
}
