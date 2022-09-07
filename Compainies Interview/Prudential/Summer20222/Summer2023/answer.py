l = input()
nums = l.split(" : ")
numbers_list = nums[0]
pairs = nums[1].split(", ")
numbers_list = list(map(int, numbers_list.split(" ")))
for pair in pairs:
    ind1 = int(pair[0])
    ind2 = int(pair[2])
    numbers_list[ind1], numbers_list[ind2] = numbers_list[ind2], numbers_list[ind1]
print(*numbers_list)