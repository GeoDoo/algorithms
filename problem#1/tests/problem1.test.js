const spiral = require('../src/problem1')

describe('Problem 1', () => {
	const	matrix = [[1,  2,  3,  4,  5],
								 [6,  7,  8,  9,  10],
								 [11, 12, 13, 14, 15],
								 [16, 17, 18, 19, 20]]

	const spy = jest.spyOn(global.console, 'log')

	afterEach(() => {
	 	spy.mockReset()
    spy.mockRestore()
	})

	test('should print the values of the first row first', () => {
		const expectedNumOfCalls = matrix[0].length
		spiral(matrix)

		expect(spy).toHaveBeenCalledTimes(expectedNumOfCalls)
	})

	test.skip('should print the last column from top to bottom next', () => {

	})
})
