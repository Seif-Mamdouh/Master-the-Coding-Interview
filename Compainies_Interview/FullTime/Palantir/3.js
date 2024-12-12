// looking through an API make a get request request to the server and get the data and sort the data based on the key value pair

// api url = 'https://jsonmock.hackerrank.com/api/football_matches?year=%3Cyear%3E&team2=%3Cteam%3E'

async function getFootballData(year, team) {

    // let currentPage = 0;
    // let totalPages = 0;
    let data = [];
    let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`;

    try{
        let data = await fetch (url)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let jsonData = await response.json();
        data = jsonData.data;
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }


    return data;
}