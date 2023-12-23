const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootProperty = null;
  }

  root() {
      return this.rootProperty
    }
    

  add(data) {
    this.rootProperty = addNewNode(this.rootProperty, data);

    function addNewNode(currentNode, data) {
      if (!currentNode) {
        return new Node(data);
      }

      if (currentNode.data === data) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode.left = addNewNode(currentNode.left, data);
      } else {
        currentNode.right = addNewNode(currentNode.right, data);
      }

      return currentNode;
    }
  }

  has(data) {
    return searchWithin(this.rootProperty, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchWithin(this.rootProperty, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }
    // returns node with the  data  if node with the data exists in the tree and  null  otherwise

  remove(data) {

    this.rootProperty = removeNode(this.rootProperty, data);

    function removeNode(node, data) {

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootProperty) {
      return;
    }

    let node = this.rootProperty;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootProperty) {
    return;
  }

  let node = this.rootProperty;
  while (node.right) {
    node = node.right;
  }

  return node.data;
}
}

module.exports = {
  BinarySearchTree
};