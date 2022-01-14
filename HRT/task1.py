# I will need to store each number in a 2D list array
#In each column we will store 1 number
#For answer we just have to find the maximum number of 1s in any row
arr = [13, 7, 2, 8, 3]
#getting the max binary number length
m = max(arr)
l = len(bin(m)[2:])
#2D list to hold binary representation of every number and sum of 1s in each row
ans = [[0 for i in range(len(arr)+1)] for j in range(l)]
#counter variable
j = 0
for i in arr:
    #looping through the array of numbers
    #counter for row
    k = 0
    #current number
    temp = i
    #loop to generate binary form
    while temp > 0:
        #push the bits in ans 2D list
        ans[k][j] = temp % 2
        temp = temp//2
        k += 1
    #move to next column
    j += 1
#variable to hold the length of answer subset
max_subset_length = 0
#calculating max number of 1s in each row and that is the answer
for i in range(l):
    ans[i][-1] = sum(ans[i])
    if max_subset_length < ans[i][-1]:
        max_subset_length = ans[i][-1]

print(max_subset_length)












def solution(A): 
    
    
    m = max(A)
    l = len(bin(m)[2:])
    
    ans = [[0 for i in range(len(A) + 1)] for j in range(l)]
    
    j = 0
    
    for i in A: 
        
        k = 0
        
        temp = i
        
        while temp > 0: k
        ans[k][j] = temp % 2
        temp = temp//2
        
        k += 1
        
    j += 1
    
    subset_max = 0
    
    for i in range(l): 
        ans[i][-1] = sum(ans[i])
        if subset_max < ans[i][-1]: 
            subset_max = ans[i][-1]
    print(subset_max)


#testcase 
A = [13, 7, 2, 8, 3]
print(solution(A))

