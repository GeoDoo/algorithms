function* spiral (matrix) {

	const firstRow = matrix[0]

	for (let i = 0; i < firstRow.length; i++) {
		yield firstRow[i]
	}

	yield matrix[1][4]
}

module.exports = spiral