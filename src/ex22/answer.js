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
 * 방법 1. 재귀(DFS) — ex13 maxDepth와 같은 뼈대
 * maxDepth:   1        + Math.max(왼쪽, 오른쪽)
 * maxPathSum: root.val + Math.max(왼쪽, 오른쪽)
 *
 * ⚠️ 음수 주의: null을 "합 0인 경로"로 취급하면 안 된다.
 *    한쪽 자식만 있는 노드에서 없는 쪽을 0으로 보면
 *    실제로는 존재하지 않는 "루트→중간노드" 경로를 만들어 버린다.
 *    (예: [1, -5] → 정답 -4 이지만, null=0 방식은 1을 반환하는 오답)
 *    → 리프에서만 경로를 확정하도록 한쪽 자식 케이스를 분리한다.
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(h) — h는 트리 높이 (재귀 스택)
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function maxPathSum(root) {
  if (root === null) return 0;                                   // 빈 트리
  if (root.left === null && root.right === null) return root.val; // 리프: 경로 확정
  if (root.left === null) return root.val + maxPathSum(root.right); // 오른쪽만
  if (root.right === null) return root.val + maxPathSum(root.left); // 왼쪽만
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
}

/**
 * 방법 2. 반복(명시적 스택 DFS) — 재귀 스택 오버플로우 회피
 * 스택에 [노드, 루트부터 여기까지의 누적합]을 함께 담고,
 * 리프에 도달했을 때만 best를 갱신한다.
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(n)
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function maxPathSumIterative(root) {
  if (root === null) return 0;

  let best = -Infinity;
  const stack = [[root, root.val]]; // [노드, 누적합]

  while (stack.length > 0) {
    const [node, sum] = stack.pop();

    if (node.left === null && node.right === null) {
      best = Math.max(best, sum); // 리프에서만 경로 합 확정
      continue;
    }
    if (node.left !== null) stack.push([node.left, sum + node.left.val]);
    if (node.right !== null) stack.push([node.right, sum + node.right.val]);
  }

  return best;
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

module.exports = { maxPathSum, maxPathSumIterative, buildTree, TreeNode };
