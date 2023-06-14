"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = 0;
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      sum += current.val;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return sum
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) count++;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return count
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let count = 0;
    let toVisitStack = [this];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) count++;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return count
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    return this.root?.sumValues() || 0;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    return this.root?.countEvens() || 0;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this.root?.numGreater(lowerBound) || 0;
  }
}

module.exports = { Tree, TreeNode };
