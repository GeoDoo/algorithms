const spiral = (matrix) => {

	const firstRow = matrix[0]

	for (let i = 0; i < firstRow.length; i++) {
		console.log(firstRow[i])
	}

	for (let i = 1; i < matrix.length; i++) {
		console.log(matrix[i][matrix[i].length - 1])
	}

	for (let i = matrix[matrix.length - 1].length - 2; i >= 0; i--) {
		console.log(matrix[matrix.length - 1][i])
	}
}

module.exports = spiral
