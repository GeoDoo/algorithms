const spiral = require('../src/problem1')

describe('Problem 1', () => {
	const	matrix = [[1,  2,  3,  4,  5],
								  [6,  7,  8,  9,  10],
								  [11, 12, 13, 14, 15],
								  [16, 17, 18, 19, 20]]

	let spy

	beforeEach(() => {
		spy = jest.spyOn(global.console, 'log')
	})

	test('should print the values in a spiral way clockwise', () => {
		const expectedNumOfCalls = matrix[0].length + matrix.length - 1 + matrix[matrix.length - 1].length - 1
		spiral(matrix)

		expect(spy).toHaveBeenCalledTimes(expectedNumOfCalls)

		// const endResult = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
	})
})
