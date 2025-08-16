
type User = {
  socketId: string
  username: string
}

type Player = {
  user: User
  spelled: {
    word: string
    points: number
  }[]
  letters: {
    char: string
    row: number
    column: number
  }[]
  round: number
}

type Letter =
  'A' | 'B' | 'C' | 'D' | 'E' |
  'F' | 'G' | 'H' | 'I' | 'J' |
  'K' | 'L' | 'M' | 'N' | 'O' |
  'P' | 'Q' | 'R' | 'S' | 'T' |
  'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

const Letters = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
]

enum ScrabbleState {}

export class ScrabbleGame {
  static readonly letterBag: {[key in Letter]: {
    score: number
    initCount: number
  }} = {
    A: { score: 1, initCount: 9 },
    E: { score: 1, initCount: 12 },
    S: { score: 1, initCount: 4 },
    I: { score: 1, initCount: 9 },
    R: { score: 1, initCount: 6 },
    O: { score: 1, initCount: 8 },
    N: { score: 1, initCount: 6 },
    T: { score: 1, initCount: 6 },
    L: { score: 1, initCount: 4 },
    D: { score: 2, initCount: 4 },
    U: { score: 1, initCount: 4 },
    C: { score: 3, initCount: 2 },
    G: { score: 2, initCount: 3 },
    P: { score: 3, initCount: 2 },
    M: { score: 3, initCount: 2 },
    H: { score: 4, initCount: 2 },
    B: { score: 3, initCount: 2 },
    Y: { score: 4, initCount: 2 },
    K: { score: 5, initCount: 1 },
    F: { score: 4, initCount: 2 },
    W: { score: 4, initCount: 2 },
    V: { score: 4, initCount: 2 },
    Z: { score: 10, initCount: 1 },
    X: { score: 8, initCount: 1 },
    J: { score: 8, initCount: 1 },
    Q: { score: 10, initCount: 1 },
  }

  players: Player[] = []
  lettersCount: { [key in Letter]: number } = Letters.reduce(
    (obj, letter) => ({
      ...obj,
      [letter]: ScrabbleGame.letterBag[letter as Letter].initCount,
    }),
    {} as { [key in Letter]: number },
  )
  gameBoard: {
    letter: Letter | ''
    player: Player | null
  }[][] = new Array(15).fill(0).map(
    () => new Array(15).fill({ letter: '', player: null }),
  )
  curPlayer: Player | null = null

  // constructor() {}

}
