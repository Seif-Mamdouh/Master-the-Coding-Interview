#include <iostream>
#include <vector>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> monthMap = {
    {"Jan", "01"},
    {"Feb", "02"},
    {"Mar", "03"},
    {"Apr", "04"},
    {"May", "05"},
    {"Jun", "06"},
    {"Jul", "07"},
    {"Aug", "08"},
    {"Sep", "09"},
    {"Oct", "10"},
    {"Nov", "11"},
    {"Dec", "12"}};

string preprocessDate(string date)
{
    stringstream ss(date);
    string day, month, year;
    ss >> day >> month >> year;

    // Remove "st", "nd", "rd", or "th" from day
    day.pop_back();
    day.pop_back();

    // Add leading zero if day is single digit
    if (day.size() == 1)
    {
        day = "0" + day;
    }

    return year + "-" + monthMap[month] + "-" + day;
}

vector<string> preprocessDate(vector<string> dates)
{
    vector<string> processedDates;
    for (const auto &date : dates)
    {
        processedDates.push_back(preprocessDate(date));
    }
    return processedDates;
}

int main()
{
    vector<string> dates = {"1st Mar 1974", "22nd Dec 2023", "15th Oct 2000"};
    vector<string> processedDates = preprocessDate(dates);

    for (const auto &date : processedDates)
    {
        cout << date << endl;
    }

    return 0;
}
