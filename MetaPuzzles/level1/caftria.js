A cafeteria table consists of a row of 
�
N seats, numbered from 
1
1 to 
�
N from left to right. Social distancing guidelines require that every diner be seated such that 
�
K seats to their left and 
�
K seats to their right (or all the remaining seats to that side if there are fewer than 
�
K) remain empty.
There are currently 
�
M diners seated at the table, the 
�
ith of whom is in seat 
�
�
S 
i
​
 . No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.
Determine the maximum number of additional diners who can potentially sit at the table without social distancing guidelines being violated for any new or existing diners, assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.
Please take care to write a solution which runs within the time limit.
Constraints
1
≤
�
≤
1
0
1
5
1≤N≤10 
15
 
1
≤
�
≤
�
1≤K≤N
1
≤
�
≤
5
0
0
,
0
0
0
1≤M≤500,000
�
≤
�
M≤N
1
≤
�
�
≤
�
1≤S 
i
​
 ≤N



 Sample test case #1
N = 10
K = 1
M = 2
S = [2, 6]

Expected Return Value = 3
