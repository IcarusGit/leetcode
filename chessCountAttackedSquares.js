function squaresUnderQueenAttack(a, b) {
    let totalAttacked = 0;

    for (let i = 0; i < a; i++) { // Loop through rows
        for (let j = 0; j < b; j++) { // Loop through columns
            // Calculate attacked squares from (i, j)
            const verticalAttacks = (a - 1); // Other rows in the same column
            const horizontalAttacks = (b - 1); // Other columns in the same row
            
            // Diagonal attacks
            const topLeft = Math.min(i, j);
            const topRight = Math.min(i, b - 1 - j);
            const bottomLeft = Math.min(a - 1 - i, j);
            const bottomRight = Math.min(a - 1 - i, b - 1 - j);

            const attackedFromPosition = (
                verticalAttacks +
                horizontalAttacks +
                topLeft +
                topRight +
                bottomLeft +
                bottomRight
            );

            totalAttacked += attackedFromPosition;
        }
    }

    return totalAttacked;
}

// Example usages
console.log(squaresUnderQueenAttack(2, 2));  // Output: 12
console.log(squaresUnderQueenAttack(2, 3));  // Output: 26










