var diameterOfBinaryTree = function (root) {
    let maxD = 0;

    function helper(node) {
        if (!node) {
            return 0;
        }

        let left = helper(root.left);
        let right = helper(root.right);
        let curD = left + right;

        maxD = Math.max(maxD, curD);

        return Math.max(left + 1, right + 1);
    }

    helper(root);
    return maxD
}