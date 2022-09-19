# /* 
# 320. Generalized Abbreviation
# Medium

# 633

# 215

# Add to List

# Share
# A word's generalized abbreviation can be constructed by taking any number of non-overlapping and non-adjacent substrings and replacing them with their respective lengths.

# For example, "abcde" can be abbreviated into:
# "a3e" ("bcd" turned into "3")
# "1bcd1" ("a" and "e" both turned into "1")
# "5" ("abcde" turned into "5")
# "abcde" (no substrings replaced)
# However, these abbreviations are invalid:
# "23" ("ab" turned into "2" and "cde" turned into "3") is invalid as the substrings chosen are adjacent.
# "22de" ("ab" turned into "2" and "bc" turned into "2") is invalid as the substring chosen overlap.
# Given a string word, return a list of all the possible generalized abbreviations of word. Return the answer in any order.

 

# Example 1:

# Input: word = "word"
# Output: ["4","3d","2r1","2rd","1o2","1o1d","1or1","1ord","w3","w2d","w1r1","w1rd","wo2","wo1d","wor1","word"]
# Example 2:

# Input: word = "a"
# Output: ["1","a"]
# */

from collections import deque


class AbbreviatedWord:

  def __init__(self, str, start,  count):
    self.str = str
    self.start = start
    self.count = count


def generate_generalized_abbreviation(word):
  wordLen = len(word)
  result = []
  queue = deque()
  queue.append(AbbreviatedWord(list(), 0, 0))
  while queue:
    abWord = queue.popleft()
    if abWord.start == wordLen:
      if abWord.count != 0:
        abWord.str.append(str(abWord.count))
      result.append(''.join(abWord.str))
    else:
      # continue abbreviating by incrementing the current abbreviation count
      queue.append(AbbreviatedWord(list(abWord.str),
                                   abWord.start + 1, abWord.count + 1))

      # restart abbreviating, append the count and the current character to the string
      if abWord.count != 0:
        abWord.str.append(str(abWord.count))

      newWord = list(abWord.str)
      newWord.append(word[abWord.start])
      queue.append(AbbreviatedWord(newWord, abWord.start + 1, 0))

  return result


def main():
  print("Generalized abbreviation are: " +
        str(generate_generalized_abbreviation("BAT")))
  print("Generalized abbreviation are: " +
        str(generate_generalized_abbreviation("code")))


main()
