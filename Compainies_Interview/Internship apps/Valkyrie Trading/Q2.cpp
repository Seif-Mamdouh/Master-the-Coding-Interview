// #include <bits / stdc++.h>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

// Assuming this is the Node Structure
struct BinaryNode
{
    int key;
    BinaryNode *left;
    BinaryNode *right;
};

int singleParent(BinaryNode *tree)
{
    if (tree != NULL)
    {
        int count = singleParent(tree->left) + singleParent(tree->right);

        if ((tree->left == NULL && tree->right != NULL) || 
        (tree->left != NULL && tree->right == NULL))
        {
            count++;
        }
        return count;
    }
    return 0;
};

BinaryNode * createNode(int data, BinaryNode * left = NULL, BinaryNode * right = NULL){
    BinaryNode *n = new BinaryNode;
    n->key = data;
    n -> left = left;
    n->right = right;
    return n;
}

int main(){
    BinaryNode *root = createNode(8, createNode(7, createNode(13)), createNode(6, createNode(2)));
    cout << singleParent(root) << endl;
    return 0;
}


