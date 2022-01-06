import itertools
# setting a global varialbe to 0
globallMax = 0

#Function that runs to find the current Min
def getCurrMin(x, y):
  tempMax = 0
  absval = abs(x-y)
  return absval

def findMaximum(arr, n):
    global globallMax
    lst = []
    perms = set(itertools.permutations(arr, n))
    for i, k in perms: 
        lst.append(getCurrMin(i, k))
    currmin = min(lst)
    globallMax = max(globallMax, currmin) 
    return globallMax     


print(findMaximum([2, 5, 9], 2))
