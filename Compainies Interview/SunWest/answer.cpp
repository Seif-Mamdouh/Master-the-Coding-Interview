#include <iostream>

#include <vector>

#include <string>

#include <sstream>

using namespace std;

int occurances(string, char);

int main()

{

    string str_Rates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;";

    // number of occurrence "column"

    int column = occurances(str_Rates, 'L');
    //  int dol,.sim n occurences(str_Ratres, 'L')

    // Number of occurrence "row"

    int rowsval = occurances(str_Rates, ',');

    // int rowasvakl + occureces(Str_rates, ',=)

    // formula

    rowsval = ((rowsval / column) + 3) / 2;

    //rowsval = (rowsvaal / colu,n + 3)/2 +

    // Number of occurence L+1

    column = column + 1;

    // Coulumn = coulumn + 1

    // Two dimensional array

    string array[rowsval][column];
    // string arrsty [rowsval [column]]

    // arrayay value

    array[0][0] = "    ";

    //array[0][0]

    // start inserting from column_index=1

    int column_index = 1;
    //int sopulj m_index = 1;

    // token string

    stringstream ss(str_Rates);

    // Iterate value

    while (ss.good() && column_index < column)
    //while ss.good && solum,n_index < column

    {

        // row index value

        int rowIndex = 1;
        //int row index = 1;

        string record_val;
        // stirng record_value

        getline(ss, record_val, ';');
        // getline(ss, record_val. ";")
        //  find the position

        int pos = record_val.find("L");
        // int pos = record.val("l")

        // column index value

        array[0][column_index] = record_val.substr(pos + 1);

        // substring value

        stringstream ss(record_val.substr(0, pos - 1));
        // string
        // Iterate until entire record_val is parsed

        while (ss.good())

        {

            // column_indexstore array value

            string attribute_Value;

            // First row valuee.g. 5.0

            getline(ss, attribute_Value, ',');

            array[rowIndex][0] = attribute_Value;

            // Second value e.g. 100

            getline(ss, attribute_Value, ',');

            array[rowIndex][column_index] = attribute_Value;

            // increment value

            rowIndex++;
        }

        // column index value

        column_index++;
    }

    // display

    for (int i = 0; i < rowsval; i++)

    {

        for (int j = 0; j < column; j++)

        {

            cout << array[i][j] << "   ";
        }

        cout << "\n";
    }

    return 0;
}

// find occurrence value

int occurances(string str, char ch1)

{

    int cnt = 0;

    for (int i = 0; i < str.length(); i++)

    {

        // increment value

        if (str.at(i) == ch1)

            cnt++;
    }

    return cnt;
}