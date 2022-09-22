# Capitalize Words
# Programming challenge description:
# Write a program which capitalizes the first
# letter of each word in a sentence.
# Input:
# Your program should read lines from standard
# input. Each line has a sequence of words
# Output:
# Print the capitalized words.
# Test 1
# Test Input 7
# Hello world
# Expected Output 7
# Hello World
# Test 2
# Test Input E
# a letter
# Expected Output A

#answer
import sys

for line in sys.stdin:
    print(line.title(), end = "")