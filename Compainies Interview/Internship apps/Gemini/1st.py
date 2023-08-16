# We call a integer a "duodigit" if its decimal representation uses no more than two different digits. For example, 12, 110, -33333 are duodigits, but 192 is not.
# Implement the function is_duo_digit(number) which returns a string.
# • y if number is a duodigit
# • n otherwise


import sys
import math
def is_duo_digit(number):
    s=str(number)
    s1=set()
    for each in s:
        s1.add(each)
    if(len(s1)<=2):
        return (“y”)
    else:
        return (“n”)