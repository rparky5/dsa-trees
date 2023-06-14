"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let startingLayer = {
      depth: 1,
      nodes: [this]
    }
    let toVisitQueue = [startingLayer];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      for (let node of current.nodes) {
        if (!node.left || !node.right) {
          return current.depth
        }
        toVisitQueue.push({
          depth: current.depth + 1,
          nodes: [node.left, node.right]
        });
      }
    }
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth(depth = 1) {
    if (!this.left && !this.right) return depth;

    return Math.max(this.left?.maxDepth(depth + 1) || depth, this.right?.maxDepth(depth + 1) || depth)
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth(depth = 1) {
    if (!this.left && !this.right) return depth;

    return Math.min(this.left?.minDepth(depth + 1) || Infinity, this.right?.minDepth(depth + 1) || Infinity)
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound, currLowest = Infinity) {
    if (!this.left && !this.right) return (
      (this.val > lowerBound && this.val < currLowest)
      ? this.val
      : null
    );

    let min = Math.min(this.val, this.left?.nextLarger(lowerBound, currLowest) || Infinity, this.right?.nextLarger(lowerBound, currLowest) || Infinity)

    if (this.val > lowerBound && this.val < currLowest) currLowest = this.val;

    return (min > lowerBound && min < currLowest) ? min : null
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    return this.root?.minDepthToIncompleteNode() || 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    return this.root?.maxDepth() || 0;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    return this.root?.minDepth() || 0;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    return this.root?.nextLarger(lowerBound) || null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
