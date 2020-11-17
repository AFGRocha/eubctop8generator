import React from 'react';
//import countries from './data/euro-countries.json'

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [
                " ",
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
                " ",
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
                "Min MinS",
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
                "Steve",
                "Terry",
                "Toon Link",
                "Villager",
                "Wario",
                "Wii Fit Trainer",
                "Wolf",
                "Yoshi",
                "Young Link",
                "Zelda",
                "Zero Suit Samus",
            ],
            countryValue: "",
        };
    }

   
    onChangeData(event){
        this.setState({countryValue: event.target.value});
        //console.log(this.state.countryValue)
        console.log(event.target.getAttribute("id"))
        this.props.changeData({[event.target.getAttribute("id")]: event.target.value, placing:this.props.place, id: event.target.getAttribute("id")})
        
    }

    render() {
        const countryNames = this.state.countries.map((country) =>
            <option>{country}</option>);

        const characterNames = this.state.characters.map((character) =>
            <option>{character}</option>);


        return (<div>
            <h2>{this.props.name} </h2>
            <label>Country</label>
            <select id="country" onChange={this.onChangeData.bind(this)}>{countryNames}</select>
            <label>Team</label>
            <input id="team" onChange={this.onChangeData.bind(this)} type="text" />   
            <label>Player</label>
            <input id="name"onChange={this.onChangeData.bind(this)} type="text" />
            <label >Character 1</label>
            <select id="char1" onChange={this.onChangeData.bind(this)}>{characterNames}</select>
            <label>Character 2</label>
            <select id="char2"onChange={this.onChangeData.bind(this)}>{characterNames}</select>
            <label >Character 3</label>
            <select id="char3"onChange={this.onChangeData.bind(this)}>{characterNames}</select>
            <label>Character 4</label>
            <select id="char4" onChange={this.onChangeData.bind(this)}>{characterNames}</select>

        </div>);
    }
}




export default Row;