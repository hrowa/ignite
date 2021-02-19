//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if(month < 10){
        return `0${month}`
    } else {
        return month;
    }
}

//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    } else {
        return day;
    }
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
console.log(currentDate)

//Popular games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-release&page_size=10`;


export const popularGamesUrl = () =>`${base_url}${popular_games}`;

export const upcomingGamesUrl = () =>`${base_url}${upcoming_games}`;

export const newGamesUrl = () =>`${base_url}${new_games}`;

//GAME DETAILS

export const gameDetailsUrl = (game_id) =>`${base_url}games/${game_id}`

//GAME SCREENSHOTS
export const gameScreenshotUrl = (game_id) =>`${base_url}games/${game_id}/screenshots`;

//Searched game
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9`