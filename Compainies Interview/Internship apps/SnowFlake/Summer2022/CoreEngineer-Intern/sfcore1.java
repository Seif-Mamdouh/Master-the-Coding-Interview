import java.util.ArrayList;
import java.util.*;

class Result {
    public static int countingPairs(List<Integer> numbers, int k) {
        // stores size of list passed
        int n = numbers.size();
        // variable for flaging g
        int f = 0;
        // variable counting for unqiue pairs
        int counting = 0;
        // binary search to get all the possible amount of pairs. 
//         int pair = n * (n - 1) / 2;
//         // temporary 2D array to store pairs of numbers
//         int[][] b = new int[pair][2];
//         for (int i = 0; i < n; i++) {
//             for (int j = i + 1; j < n; j++) {
//                 if ((numbers.get(i) + k) == numbers.get(j)) {
//                     //check if teh pair is present in the array or not
//                     for (int l = 0; l <= counting; l++) 
//                     {
//                         //if the pair alread exixts, add it to b
//                         if (b[l][0] == numbers.get(i) && b[l][1] == numbers.get(j)) {
//                             f = 1;
//                             break;
//                         }
//                     }
                    
//                     //If the pair doens't exisit then put it in the b array and increment teh counting variable 
//                     if (f == 0) 
//                     {
//                         b[counting][0] = numbers.get(i);
//                         b[counting][1] = numbers.get(j);
//                         counting++;
//                     } else //else assign 0 to variable f for next iteration
//                         f = 0;
//                 }
//             }
//         }
//         return counting;
//     }
// }
// class Main
// {
// public static void main (String[] args)
// {
// int k=1;
// List<Integer> numbers = new ArrayList<Integer>();
// numbers.add(1);
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(3);
// numbers.add(3);
// int c=Result.countingPairs(numbers,k);
// System.out.println(c);
// }
// }


