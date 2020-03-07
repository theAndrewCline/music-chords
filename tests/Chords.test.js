const Chords = require('../src/Chords')

const fullKey = [ 1, 2, 3, 4, 5, 6, 7]

describe('Chords.toNashvileNumber', function () {
  it('Given the key of C should return the correct array', function () {
    expect(Chords.toNashvileNumber('C')(['C', 'D', 'E', 'F', 'G', 'A', 'B'])).toEqual(fullKey)
  })

  it('Given the key of G should return the correct array', function () {
    expect(Chords.toNashvileNumber('G')(['G', 'A', 'B', 'C', 'D', 'E', 'F#'])).toEqual(fullKey)
  })

  it('Given the key of D should return the correct array', function () {
    expect(Chords.toNashvileNumber('D')(['D', 'E', 'F#', 'G', 'A', 'B', 'C#'])).toEqual(fullKey)
  })

  it('Given the key of A should return the correct array', function () {
    expect(Chords.toNashvileNumber('A')(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'])).toEqual(fullKey)
  })

  it('Given the key of E should return the correct array', function () {
    expect(Chords.toNashvileNumber('E')(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'])).toEqual(fullKey)
  })

  it('Given the key of B should return the correct array', function () {
    expect(Chords.toNashvileNumber('B')(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'])).toEqual(fullKey)
  })

  it('Given the key of F# should return the correct array', function () {
    expect(Chords.toNashvileNumber('F#')(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'])).toEqual(fullKey)
  })

  it('Given the key of C# should return the correct array', function () {
    expect(Chords.toNashvileNumber('C#')(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'])).toEqual(fullKey)
  })

  it('Given the key of F should return the correct array', function () {
    expect(Chords.toNashvileNumber('F')(['F', 'G', 'A', 'Bb', 'C', 'D', 'E'])).toEqual(fullKey)
  })

  it('Given the key of Bb should return the correct array', function () {
    expect(Chords.toNashvileNumber('Bb')(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'])).toEqual(fullKey)
  })

  it('Given the key of Ab should return the correct array', function () {
    expect(Chords.toNashvileNumber('Ab')(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'])).toEqual(fullKey)
  })

  it('Given the key of Eb should return the correct array', function () {
    expect(Chords.toNashvileNumber('Eb')(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'])).toEqual(fullKey)
  })

  it('Given the key of Db should return the correct array', function () {
    expect(Chords.toNashvileNumber('Db')(['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'])).toEqual(fullKey)
  })

  it(`Given 'C' and ['C', 'F', 'A', 'G'] should return [1, 4, 6, 5]`, function () {
    expect(Chords.toNashvileNumber('C')(['C', 'F', 'A', 'G'])).toEqual([1, 4, 6, 5])
  })

  it(`Given 'F' and ['C', 'F', 'A', 'G'] should return [5, 1, 3, 2]`, function () {
    expect(Chords.toNashvileNumber('F')(['C', 'F', 'A', 'G'])).toEqual([5, 1, 3, 2])
  })

  it(`Given 'A' and ['C#', 'F#', 'A', 'G#'] should return [3, 6, 1, 7]`, function () {
    expect(Chords.toNashvileNumber('A')(['C#', 'F#', 'A', 'G#'])).toEqual([3, 6, 1, 7])
  })
})

describe('Chords.fromNashvileNumber', function () {
  it('Given the key of C should return the correct array', function () {
    expect(Chords.fromNashvileNumber('C')(fullKey)).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  })

  it('Given the key of G should return the correct array', function () {
    expect(Chords.fromNashvileNumber('G')(fullKey)).toEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#'])
  })

  it('Given the key of D should return the correct array', function () {
    expect(Chords.fromNashvileNumber('D')(fullKey)).toEqual(['D', 'E', 'F#', 'G', 'A', 'B', 'C#'])
  })

  it('Given the key of A should return the correct array', function () {
    expect(Chords.fromNashvileNumber('A')(fullKey)).toEqual(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'])
  })

  it('Given the key of E should return the correct array', function () {
    expect(Chords.fromNashvileNumber('E')(fullKey)).toEqual(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'])
  })

  it('Given the key of B should return the correct array', function () {
    expect(Chords.fromNashvileNumber('B')(fullKey)).toEqual(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'])
  })

  it('Given the key of F# should return the correct array', function () {
    expect(Chords.fromNashvileNumber('F#')(fullKey)).toEqual(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'])
  })

  it('Given the key of C# should return the correct array', function () {
    expect(Chords.fromNashvileNumber('C#')(fullKey)).toEqual(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'])
  })

  it('Given the key of F should return the correct array', function () {
    expect(Chords.fromNashvileNumber('F')(fullKey)).toEqual(['F', 'G', 'A', 'Bb', 'C', 'D', 'E'])
  })

  it('Given the key of Bb should return the correct array', function () {
    expect(Chords.fromNashvileNumber('Bb')(fullKey)).toEqual(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'])
  })

  it('Given the key of Ab should return the correct array', function () {
    expect(Chords.fromNashvileNumber('Ab')(fullKey)).toEqual(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'])
  })

  it('Given the key of Eb should return the correct array', function () {
    expect(Chords.fromNashvileNumber('Eb')(fullKey)).toEqual(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'])
  })

  it('Given the key of Db should return the correct array', function () {
    expect(Chords.fromNashvileNumber('Db')(fullKey)).toEqual(['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'])
  })

  it(`Given 'C' and ['C', 'F', 'A', 'G'] should return [1, 4, 6, 5]`, function () {
    expect(Chords.fromNashvileNumber('C')([1, 4, 6, 5])).toEqual(['C', 'F', 'A', 'G'])
  })

  it(`Given 'F' and ['C', 'F', 'A', 'G'] should return [5, 1, 3, 2]`, function () {
    expect(Chords.fromNashvileNumber('F')([5, 1, 3, 2])).toEqual(['C', 'F', 'A', 'G'])
  })

  it(`Given 'A' and ['C#', 'F#', 'A', 'G#'] should return [3, 6, 1, 7]`, function () {
    expect(Chords.fromNashvileNumber('A')([3, 6, 1, 7])).toEqual(['C#', 'F#', 'A', 'G#'])
  })
})

describe('Chords.toKeyFromKey', function () {
  expect(Chords.toKeyFromKey('A')('C')(['C', 'D', 'E', 'F', 'G', 'A', 'B']))
   .toEqual(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'])
})

