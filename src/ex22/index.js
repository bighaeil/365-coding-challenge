/**
 * ex22. 이진 트리 최대 경로 합 (Maximum Root-to-Leaf Path Sum)
 * 루트에서 리프까지 이어지는 경로들 중, 노드 val의 합이 가장 큰 값을 반환한다.
 * (ex13 "최대 깊이"의 변형 — 깊이 카운트 대신 val을 누적한다)
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function maxPathSum(root) {
  // 여기에 풀이를 작성하세요
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
console.log(maxPathSum(root1)); // 38  (경로 3 → 20 → 15)

const root2 = buildTree([1, null, 2]);
console.log(maxPathSum(root2)); // 3   (경로 1 → 2)

const root3 = buildTree([1, -5]);
console.log(maxPathSum(root3)); // -4  (유일한 경로 1 → -5)

console.log(maxPathSum(null)); // 0

module.exports = { maxPathSum, buildTree, TreeNode };
