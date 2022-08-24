# def getUnallottedUsers(bids, totalShares):  # Function getUnalottedUsers
#    #Sorts price(decending) and timestamp(ascending)
#    sorted_bids = sorted(sorted(
#        bids, key=lambda x: x[3], reverse=False), key=lambda x: x[2], reverse=True)
#    # Dictionary to store all ids that were allocated atleast 1 share
#    shares_received = dict()
#    for i in range(len(sorted_bids)):  # loop through sorted list
#       if totalShares > 0:  # Check if shares are still remaining
#          # Checking if there is no tie in bidding amount
#          if sorted_bids[i][2] > sorted_bids[i+1][2]:
#             # If shares are less than requested
#             if totalShares < sorted_bids[i][1]:
#                shares_received[sorted_bids[i][0]] = "1"
#                return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
#             # if shares are more than requested
#             totalShares -= sorted_bids[i][1]
#             shares_received[sorted_bids[i][0]] = "1"

#          else:  # If there is a tie in amount
#             sum_req = sorted_bids[i][1]
#             end = i
#             # Check how many users have bid the same amount
#             for j in range(i, len(sorted_bids)):
#                end = j
#                if sorted_bids[j][2] == sorted_bids[j+1][2]:
#                   sum_req += sorted_bids[j+1][1]
#                   continue
#                else:
#                   break
#             # If total shares < number of users that bid same amount
#             if totalShares < (end-i):
#                for x in range(i, len(sorted_bids)):  # allocate according to timestamp
#                   if totalShares > 0:
#                      shares_received[sorted_bids[x][0]] = "1"
#                      totalShares -= 1
#                   else:
#                      return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
#             elif totalShares > sum_req:  # If totalshares> requested amount by all users
#                for x in range(i, end+1):
#                   shares_received[sorted_bids[x][0]] = "1"
#                totalShares -= sum_req
#             else:
#                # if shares are > number of ties users but< requested amount
#                for x in range(i, end+1):
#                   shares_received[sorted_bids[x][0]] = "1"
#                return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
#       else:
#          return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]


# print(getUnallottedUsers(
#     [[1, 5, 5, 0], [2, 7, 8, 1], [3, 7, 5, 1], [4, 10, 3, 3]], 20))
# print(getUnallottedUsers ([[1, 5, 5, 0], [2, 7, 8, 1], [3, 7, 5, 1], [4, 10, 3, 3]] , 19) )
# print(getUnallottedUsers([[1, 5, 5, 0], [2, 7, 8, 1], [3, 7, 8, 0], [4, 10, 5, 3]] , 19))
# print(getUnallottedUsers([[1,5,8,1],[2,5,5,1],[3,8,1,0]],5))


# def f(e):

# return e[2]

# def f1(e):

# return e[3]

# def getUnallottedUsers(bids, totalShares):
#     for i in range(len(bids)):
#         bids.sort(reverse=True, key=f)
#         i = 0
#         lst = []
#         lst1 = []
#         lst2 = []

#         while True:
#             if i < (len(bids)-1) and bids[i][2] == bids[i+1][2]:
#                 if lst == []:
#                     lst.append(bids[i])
#                     lst.append(bids[i+1])
#                     i += 1
#                     continue
#                 else:
#                     if lst == []:
#                         lst.append(bids[i])
#                         if len(lst) == 1 and totalShares > 0:
#                             totalShares -= bids[i][1]
#                         else:
#                             lst.sort(key=f1)
#                             m = 0
#                             while lst != []:
#                                 n = m % len(lst)
#                                 if totalShares > 0 and lst[n][1] > 0:
#                                     totalShares -= 1
#                                     lst[n][1] -= 1
#                                     if lst[n] not in lst2:
#                                         lst2.append(lst[n])
#                                     elif totalShares > 0 and lst[n][1] == 0:
#                                         lst.pop(n)
#                                     else:
#                                         lst1.append([x[0] for x in lst if x not in lst2])
#                                         break
#                                     m += 1
#                                     i += 1
#                                     lst.clear()
#                                     if totalShares == 0:
#                                         if i != len(bids):
#                                             lst1.append([x[0] for x in bids[i:]])
#                                             print(*lst1[1])
#                                             exit(0)
#                                             print(*lst1[0])
#                                             break
#                                         size = int(input())
#                                         att = int(input())
#                                         bids = []
#                                         for i in range(size):
#                                             x = list(map(int, input().split()))
#                                             bids.append(x)
#                                             totalShares = int(input())
#                                             print("\n")
                                            
#                                             getUnallottedUsers(bids, totalShares)


def getUnalottedUsers(bids, totalShares):  # Function getUnalottedUsers
   #Sorts price(decending) and timestamp(ascending)
   sorted_bids = sorted(sorted(
       bids, key=lambda x: x[3], reverse=False), key=lambda x: x[2], reverse=True)
   # Dictionary to store all ids that were allocated atleast 1 share
   shares_received = dict()
   for i in range(len(sorted_bids)):  # loop through sorted list
      if totalShares > 0:  # Check if shares are still remaining
         # Checking if there is no tie in bidding amount
         if sorted_bids[i][2] > sorted_bids[i+1][2]:
            # If shares are less than requested
            if totalShares < sorted_bids[i][1]:
               shares_received[sorted_bids[i][0]] = "1"
               return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
            # if shares are more than requested
            totalShares -= sorted_bids[i][1]
            shares_received[sorted_bids[i][0]] = "1"

         else:  # If there is a tie in amount
            sum_req = sorted_bids[i][1]
            end = i
            # Check how many users have bid the same amount
            for j in range(i, len(sorted_bids)):
               end = j
               if sorted_bids[j][2] == sorted_bids[j+1][2]:
                  sum_req += sorted_bids[j+1][1]
                  continue
               else:
                  break
            # If total shares < number of users that bid same amount
            if totalShares < (end-i):
               for x in range(i, len(sorted_bids)):  # allocate according to timestamp
                  if totalShares > 0:
                     shares_received[sorted_bids[x][0]] = "1"
                     totalShares -= 1
                  else:
                     return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
            elif totalShares > sum_req:  # If totalshares> requested amount by all users
               for x in range(i, end+1):
                  shares_received[sorted_bids[x][0]] = "1"
               totalShares -= sum_req
            else:
               # if shares are > number of ties users but< requested amount
               for x in range(i, end+1):
                  shares_received[sorted_bids[x][0]] = "1"
               return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]
      else:
         return [x[0] for x in sorted_bids if x[0] not in list(shares_received.keys())]


def main():
   bids = [[1, 5, 5, 0], [2, 7, 8, 1], [3, 7, 5, 1], [4, 10, 3, 3]]
   totalShares = 18
   ret = getUnalottedUsers(bids, totalShares)
   print(ret)
