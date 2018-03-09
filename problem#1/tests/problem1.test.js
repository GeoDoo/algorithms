const spiral = require('../src/problem1')

describe('Problem 1', () => {
	let matrix, generator

	beforeEach(() => {
		matrix = [[1,  2,  3,  4,  5],
						 [6,  7,  8,  9,  10],
						 [11, 12, 13, 14, 15],
						 [16, 17, 18, 19, 20]]
		
		generator = spiral(matrix)
	})

	test('should yield the values of the first row', () => {
		expect(generator.next().value).toBe(1)
		expect(generator.next().value).toBe(2)
		expect(generator.next().value).toBe(3)
		expect(generator.next().value).toBe(4)
		expect(generator.next().value).toBe(5)
	})

	test('should print the last element of the second row', () => {
		const expected = 10
		generator.next()
		generator.next()
		generator.next()
		generator.next()
		generator.next()

		expect(generator.next().value).toBe(expected)	
	})
})