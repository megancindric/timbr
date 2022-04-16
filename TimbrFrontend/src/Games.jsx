//API returns information about upcoming games & odds, deletes games once completed, no way to track winner/loser
//Saving a "Game" object to local DB based on these API games
//Problem: We need to wait for two axios calls to complete before proceeding with a function
    //One call to DB, one to API, then this function will check if all API games exist in DB
        //If they don't exist, we POST a new game based on that API object

    //Currently we can't find a way to wait for BOTH of these responses to come back BEFORE proceeding with comparison logic
        //If DB games aren't back, we won't "see" API game in DB and will end up with duplicates being Posted

//Potential solution:
    //useEffect hooked into [], have a wrapper function for both of these axios call functions, then use .then to lead into comparison function
    //Or, await Promise.all([getDatabaseGames, getAPIGames])