<template>
  <div class="margin">
<b-field grouped>
    <p class="placing">2nd</p>
       <b-field label="Country">
            <b-select v-model="second.country">
                 <option v-for="country in countries" :key="country">{{country}}</option>
            </b-select>
          </b-field>
        <b-field label="Team">
            <b-input v-model="second.team"></b-input>
        </b-field>
        <b-field label="Player">
            <b-input v-model="second.name"></b-input>
        </b-field>
        <b-field label="Character 1">
            <b-select v-model="second.chars.char1">
             <option></option>
             <option v-for="character in characters" :key="character">{{character}}</option>
            </b-select>
          </b-field>
           <b-field label="Character 2">
            <b-select v-model="second.chars.char2">
              <option></option>
              <option v-for="character in characters" :key="character">{{character}}</option>
            </b-select>
          </b-field>
           <b-field label="Character 3">
            <b-select v-model="second.chars.char3">
              <option></option>
             <option v-for="character in characters" :key="character">{{character}}</option>
            </b-select>
          </b-field>
           <b-field label="Character 4">
            <b-select v-model="second.chars.char4">
              <option></option>
                <option v-for="character in characters" :key="character">{{character}}</option>
            </b-select>
          </b-field>
    </b-field>
<b-field grouped>
       <p class="placing">Labels</p>
        <b-field label="Date">
            <b-input v-model="labels.date"></b-input>
        </b-field>
        <b-field label="Entrants">
            <b-input v-model="labels.entrants"></b-input>
        </b-field>
         <b-field label="Tournament">
            <b-input v-model="labels.tourney"></b-input>
        </b-field>
    </b-field>

<center> <button class="button is-primary" @click="createImg">Create</button></center>

  </div>
</template>
<style>
.margin {
  margin-left: 6%;
  margin-right: 10%;
}

.placing {
  text-align: center;
  padding-top: 35px;
  padding-right: 10px;
}
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Canvas from "canvas";
import axios from "axios";


export default {
  name: "home",
  components: {
    HelloWorld
  },

  data: function() {
    return {
      second: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      third: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      forth: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      fith: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      fith2: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      seventh: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      seventh2: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      labels:{
        date: "",
        entrants: "",
        tourney: ""
      },
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
      ],
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
      ]
    };
  },
  methods: {
    async createImg() {
      console.log(this.second);
      axios.post("http://localhost:3000/images", {
        second:{
            country: this.second.country,
            team: this.second.team,
            name: this.second.name,
            char1: this.second.chars.char1,
            char2: this.second.chars.char2,
            char3: this.second.chars.char3,
            char4: this.second.chars.char4
        },
        labels:{
          date: this.labels.date,
          entrants: this.labels.entrants,
          tourney: this.labels.tourney
        }
        });
    }
  }
};
</script>
