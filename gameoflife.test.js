import { testStatus } from './gameoflife';
// 1 = alive
// 0 = dead
const gameOfLifeArr = [{
  cell: { status: 1 },
  neighbors: [
    { status: 1 },
    { status: 1 },
    { status: 1 },
    { status: 0 },
    { status: 0 },
  ]
},
{
    cell: { status: 1 },
    neighbors: [
      { status: 1 },
      { status: 0 },
      { status: 0 },
      { status: 0 },
      { status: 0 },
    ]
  },

 {
    cell: { status: 1 },
    neighbors: [
      { status: 1 },
      { status: 1 },
      { status: 1 },
      { status: 1 },
      { status: 0 },
    ]
  },

{
    cell: { status: 0 },
    neighbors: [
      { status: 1 },
      { status: 1 },
      { status: 1 },
      { status: 0 },
      { status: 0 },
    ]
  },
]
describe('gameOfLife', () => {
  it("should return 1 if the cell has two or three live neighbors and is already alive", () => {
    const currentCell = testStatus(gameOfLifeArr[0])
    expect(currentCell).toBe(1);
  })
})

describe('gameOfLife', () => {
    it("should return 0 if the cell has fewer then two live neighbors and is already alive", () => {
      const currentCell = testStatus(gameOfLifeArr[1])
      expect(currentCell).toBe(0);
    })
  })

  describe('gameOfLife', () => {
    it("should return 0 if the cell has more than three live neighbors and is already alive", () => {
      const currentCell = testStatus(gameOfLifeArr[2])
      expect(currentCell).toBe(0);
    })
  })

  describe('gameOfLife', () => {
    it("should return 1 if the cell has three live neighbors and is already dead", () => {
      const currentCell = testStatus(gameOfLifeArr[3])
      expect(currentCell).toBe(1);
    })
  })