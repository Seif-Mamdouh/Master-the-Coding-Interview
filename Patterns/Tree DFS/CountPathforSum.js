var pathSum = function (root, seq) {
    if (root.val !== seq[0]) {
        return false;
    }

    if (!root || seq.length = 0) {
        return false;
    }

    if (!root && seq.length === 0) {
        return true;
    }

    return (
        pathSum(root.left, seq.slice(1) || pathSum(root.right, seq.slice(1)
        )
    )
}