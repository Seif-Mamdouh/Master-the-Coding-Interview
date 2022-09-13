# // # 295. Find Median from Data Stream
# // # Hard

# // # 8191

# // # 148

# // # Add to List

# // # Share
# // # The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

# // # For example, for arr = [2, 3, 4], the median is 3.
# // # For example, for arr = [2, 3], the median is (2 + 3) / 2 = 2.5.
# // # Implement the MedianFinder class:

# // # MedianFinder() initializes the MedianFinder object.
# // # void addNum(int num) adds the integer num from the data stream to the data structure.
# // # double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


# // # Example 1:

# // # Input
# // # ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
# // # [[], [1], [2], [], [3], []]
# // # Output
# // # [null, null, null, 1.5, null, 2.0]

# // # Explanation
# // # MedianFinder medianFinder = new MedianFinder()
# // # medianFinder.addNum(1)
# // # // arr = [1]
# // # medianFinder.addNum(2)
# // # // arr = [1, 2]
# // # medianFinder.findMedian()
# // # // return 1.5 (i.e., (1 + 2) / 2)
# // # medianFinder.addNum(3)
# // # // arr[1, 2, 3]
# // # medianFinder.findMedian()
# // # // return 2.0


# // # Constraints:

# // # -105 <= num <= 105
# // # There will be at least one element in the data structure before calling findMedian.
# // # At most 5 * 104 calls will be made to addNum and findMedian.




from heapq import * 

class MedianOfAStream:
    maxHeap = []
    minHeap = []
    
    
    def insert_num(self, num):
        if not self.maxHeap or -self.maxHeap[0] >= num:
            heappush(self.maxHeap, -num)
        else:
            heappush(self.minHeap, num)
            
        # either both the heaps will have equal number of elements 
        # or max-heap will have one
        # more element than the min-heap
        if len(self.maxHeap) > len(self.minHeap) + 1:
            heappush(self.minHeap, -heappop(self.maxHeap))
        elif len(self.maxHeap) < len(self.minHeap):
            heappush(self.maxHeap, -heappop(self.minHeap))
    
    
    def find_median(self):
        if len(self.maxHeap) == len(self.minHeap):
            #we have even numbers of elements, take the average
            #of middle two elements
            return -self.maxHeap[0] / 2.0 + self.minHeap[0] / 2.0
        
        #because max-heap will have one more element than the min-heap
        return -self.maxHeap[0];
    
    def main():
        medianOfAStream = MedianOfAStream()
    medianOfAStream.insert_num(3)
    medianOfAStream.insert_num(1)
    print("The median is: " + str(medianOfAStream.find_median()))
    medianOfAStream.insert_num(5)
    print("The median is: " + str(medianOfAStream.find_median()))
    medianOfAStream.insert_num(4)
    print("The median is: " + str(medianOfAStream.find_median()))


main()
