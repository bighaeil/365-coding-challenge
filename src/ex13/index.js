/**
 * ex13. 이진 트리 최대 깊이 (Maximum Depth of Binary Tree)
 * 이진 트리의 루트에서 가장 깊은 리프 노드까지의 노드 수를 반환한다.
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * 재귀(DFS)로 최대 깊이 계산
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(h) — h는 트리 높이
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function maxDepth(root) {
  // 여기에 풀이를 작성하세요
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// ─── 테스트용 헬퍼: 배열(레벨 순서)로 이진 트리 생성 ────────────────────────
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
const root1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root1)); // 3

const root2 = buildTree([1, null, 2]);
console.log(maxDepth(root2)); // 2

console.log(maxDepth(null)); // 0

module.exports = { maxDepth, buildTree, TreeNode };