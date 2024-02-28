newFunction();

function newFunction() {
    const transpose = function(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;


        const result = [];
        for (let j = 0; j < cols; j++) {

            const newRow = [];
            for (let i = 0; i < rows; i++) {

                newRow.push(matrix[i][j]);
            }

            result.push(newRow);
        }

        return result;
    };

    // Do not edit this function.
    const printMatrix = matrix => {
        for (const row of matrix) {
            for (const el of row) {
                process.stdout.write(el + ' ');
            }
            process.stdout.write('\n');
        }
    };

    printMatrix(
        transpose([
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ])
    );

    console.log('----');

    printMatrix(
        transpose([
            [1, 2],
            [3, 4],
            [5, 6],
        ])
    );

    console.log('----');

    printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
}