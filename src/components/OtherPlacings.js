import React from 'react';
import ReactDOM from 'react-dom';
//import countries from './data/euro-countries.json'

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [
                "Austria",
                "Belgium",
                "Denmark",
                "Finland",
                "France",
                "Germany",
                "Greece",
                "Ireland",
                "Italy",
                "Netherlands",
                "Norway",
                "Portugal",
                "Spain",
                "Sweden",
                "United Kingdom"
            ],
            characters: [
                "Banjo & Kazooie",
                "Bayonetta",
                "Bowser",
                "Bowser Jr.",
                "Byleth",
                "Captain Falcon",
                "Chrom",
                "Cloud",
                "Corrin",
                "Daisy",
                "Dark Pit",
                "Dark Samus",
                "Diddy Kong",
                "Donkey Kong",
                "Dr. Mario",
                "Duck Hunt",
                "Falco",
                "Fox",
                "Ganondorf",
                "Greninja",
                "Hero",
                "Ice Climbers",
                "Ike",
                "Incineroar",
                "Inkling",
                "Isabelle",
                "Ivysaur",
                "Jigglypuff",
                "Joker",
                "Ken",
                "King Dedede",
                "King K. Rool",
                "Kirby",
                "Link",
                "Little Mac",
                "Lucario",
                "Lucas",
                "Lucina",
                "Luigi",
                "Mario",
                "Marth",
                "Mega Man",
                "Meta Knight",
                "Mewtwo",
                "Mii Brawler",
                "Mii Swordfighter",
                "Mii Gunner",
                "Mr. Game & Watch",
                "Ness",
                "Olimar",
                "Pac-Man",
                "Palutena",
                "Peach",
                "Pichu",
                "Pikachu",
                "Piranha Plant",
                "Pit",
                "Pokémon Trainer",
                "Richter",
                "Ridley",
                "R.O.B.",
                "Robin",
                "Rosalina & Luma",
                "Roy",
                "Ryu",
                "Samus",
                "Sheik",
                "Shulk",
                "Simon",
                "Snake",
                "Sonic",
                "Squirtle",
                "Terry",
                "Toon Link",
                "Villager",
                "Wario",
                "Wii Fit Trainer",
                "Wolf",
                "Yoshi",
                "Young Link",
                "Zelda",
                "Zero Suit Samus"
            ]
        };
    }
    render() {
        const countryNames = this.state.countries.map((country) =>
            <option>{country}</option>);

        const characterNames = this.state.characters.map((character) =>
            <option>{character}</option>);


        return (<div>
            <h2>{this.props.place} </h2>
            <label>Country</label>
            <select>{countryNames}</select>
            <label>Team</label>
            <input type="text" />
            <label>Player</label>
            <input type="text" />
            <label>Character 1</label>
            <select>{characterNames}</select>
            <label>Character 2</label>
            <select>{characterNames}</select>
            <label>Character 3</label>
            <select>{characterNames}</select>
            <label>Character 4</label>
            <select>{characterNames}</select>

        </div>);
    }
}




export default Row;