/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0
    grid.forEach((subArr, x) => {
        subArr.forEach((el, y) => {
            if (el) {
                if (grid[x - 1]) {
                    if (!grid[x - 1][y]) {
                        perimeter += 1
                    }
                } else {
                    perimeter += 1
                }


                if (grid[x + 1]) {
                    if (!grid[x + 1][y]) {
                        perimeter += 1
                    }
                } else {
                    perimeter += 1
                }

                if (grid[x][y - 1]) {
                    if (!grid[x][y - 1]) {
                        perimeter += 1
                    }
                } else {
                    perimeter += 1
                }

                if (grid[x][y + 1]) {
                    if (!grid[x][y + 1]) {
                        perimeter += 1

                    }
                } else {
                    console.log(grid[x][y + 1])
                    perimeter += 1
                }

            }
        })
    })
    return perimeter
};