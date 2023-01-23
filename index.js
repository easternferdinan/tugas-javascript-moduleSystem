import createTable from "./tableModule.js";

const entryList = {
    "columns": ["Team", "Driver 1", "Driver 2", "Homebase"],
    "teams":{
        "Mercedes-AMG Petronas Formula 1 Team": {
            "driver": ["Lewis Hamilton", "George Russel"],
            "homebase": "Great Britain"
        },
        "Oracle Red Bull Racing": {
            "driver": ["Max Verstappen", "Sergio Perez"],
            "homebase": "Austria"
        },
        "Scuderia Ferrari": {
            "driver": ["Charles Leclerc", "Carlos Sainz"],
            "homebase": "Italy"
        },
        "McLaren Formula 1 Team": {
            "driver": ["Lando Norris", "Oscar Piatri"],
            "homebase": "Great Britain"
        },
        "BWT Alpine F1 Team": {
            "driver": ["Esteban Ocon", "Pierre Gasly"],
            "homebase": "France"
        },
        "Alfa Romeo F1 Team Orlen": {
            "driver": ["Valtteri Bottas", "Guanyu Zhou"],
            "homebase": "Italy"
        },
        "Aston Martin Aramco Cognizant F1 Team": {
            "driver": ["Lance Stroll", "Fernando Alonso"],
            "homebase": "Great Britain"
        },
        "MoneyGram Haas F1 Team": {
            "driver": ["Kevin Magnussen", "Nico Hulkenberg"],
            "homebase": "United States of America"
        },
        "Scuderia AlphaTauri": {
            "driver": ["Nyck de Vries", "Yuki Tsunoda"],
            "homebase": "Italy"
        },
        "Williams Racing": {
            "driver": ["Alex Albon", "Logan Sargeant"],
            "homebase": "Great Britain"
        }
    }
};

createTable(entryList, ".dynamicTable")