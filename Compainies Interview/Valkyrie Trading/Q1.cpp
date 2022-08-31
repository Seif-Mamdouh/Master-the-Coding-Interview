#include <bits/stdc++.h>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>

#include <math.h> // for using log2()
/*
 * Complete the 'PowerOfTwoCeiling' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER a as parameter.
 */

int PowerOfTwoCeiling(unsigned int a)
{
    unsigned count = 0;

    // First n in the below condition
    // is for the case where n is 0
    if (a && !(a & (a - 1)))
        return a;

    while (a != 0)
    {
        a >>= 1;
        count += 1;
    }

    return 1 << count;
}

int main()
{
    std::ofstream fout(std::getenv("OUTPUT_PATH"));

    std::string inputString;
    std::getline(std::cin, inputString);
    std::stringstream input(inputString);

    int a;
    input >> a;

    fout << PowerOfTwoCeiling(a);

    fout.close();

    return 0;
}