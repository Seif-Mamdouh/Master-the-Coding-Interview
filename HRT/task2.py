def solution(S):
    #total count of 'a'
    count = 0
    
    
    for c in S:
        if c == 'a':
            # increment by 1 if is c = a
            count += 1
        
    #if total count of 'a' is not divisible by 3 return 0
    if(count%3 != 0):
        return 0
    
    res = 0
    k = count // 3
    sum = 0
    
    #initialize map 
    mp = {}
    
    #traverse through the string to find ways to split the string
    for i in range(len(S)):
        #increment count if 'a' appears
        if(S[i] == 'a'):
            sum += 1
        
        #increment result in sum = 2k & k exists in map
        if(sum == 2*k and k in mp and i<len(S)-1 and i > 0):
            res += mp[k]
            
        #insert sum in a map
        if(sum in mp):
            mp[sum] += 1
        else:
            mp[sum] = 1
    #final result
    return res

#test cases
S = 'babaa'
print(solution(S))
S = 'ababa'
print(solution(S))
S = 'aba'
print(solution(S))
S = 'bbbbb'
print(solution(S))


