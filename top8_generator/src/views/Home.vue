<template>
  <div class="container">
    <h1>EUBC Top 8 Generator</h1>
<form>
 <div class="form-row">
 <!-- first place -->
    <p class="placing">1nd</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="first.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="first.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="first.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="first.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Color</label>
    <select v-model="first.color" class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="first.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="first.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

   <!-- second place -->
    <div class="form-row">
    <p class="placing">2nd</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="second.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="second.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="second.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="second.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="second.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="second.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="second.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

     <!-- Third place -->
 <div class="form-row">
      <p class="placing">3rd</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="third.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="third.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="third.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="third.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="third.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="third.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="third.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

       <!-- Fourth place -->
 <div class="form-row">
      <p class="placing">4th</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="fourth.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="fourth.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="fourth.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="fourth.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="fourth.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="fourth.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="fourth.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>


  <!-- Fifth place -->
 <div class="form-row">
      <p class="placing">5th</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="fifth.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="fifth.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="fifth.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="fifth.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="fifth.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="fifth.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="fifth.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

    <!-- Fifth place 2 -->
 <div class="form-row">
      <p class="placing">5th</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="fifth2.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="fifth2.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="fifth2.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="fifth2.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="fifth2.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="fifth2.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="fifth2.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

      <!-- Seventh place -->
 <div class="form-row">
      <p class="placing">7th</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="seventh.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="seventh.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="seventh.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="seventh.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="seventh.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="seventh.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="seventh.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>


       <!-- Seventh place 2 -->
 <div class="form-row">
      <p class="placing">7th</p>
      <div class="form-group col-md-1">
      <label>Country</label>
    <select v-model="seventh2.country" class="form-control" id="exampleFormControlSelect1">
      <option v-for="country in countries" :key="country">{{country}}</option>
    </select>
    </div>
   <div class="form-group col-md-1">
      <label>Team</label>
      <input v-model="seventh2.team" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Player</label>
      <input  v-model="seventh2.name" type="text" class="form-control" >
    </div>
    <div class="form-group col-md-1">
      <label>Character 1</label>
    <select v-model="seventh2.chars.char1" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
    <div class="form-group col-md-1">
      <label>Character 2</label>
    <select v-model="seventh2.chars.char2" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 3</label>
    <select v-model="seventh2.chars.char3" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
        <div class="form-group col-md-1">
      <label>Character 4</label>
    <select v-model="seventh2.chars.char4" class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option v-for="character in characters" :key="character">{{character}}</option>
    </select>
    </div>
  </div>

   <div class="form-row">
      <p class="placing">Labels</p>
          <div class="form-group col-md-1">
      <label>Date</label>
      <input v-model="labels.date" type="text" class="form-control" >
    </div>

        <div class="form-group col-md-1">
      <label>Entrants</label>
      <input v-model="labels.entrants" type="number" class="form-control" >
    </div>
       <div class="form-group col-md-1">
      <label>Tournament</label>
      <input v-model="labels.tourney" type="text" class="form-control" >
    </div>
   </div>
</form>



<button class="btn btn-primary" @click="createImg">Create</button>

</div>
</template>
<style>
.margin {
  margin-left: 18%;
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
      first: {
        country: "",
        team: "",
        name: "",
        color: 0,
        chars: { char1: "", char2: "", char3: "",}
      },
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
      fourth: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      fifth: {
        country: "",
        team: "",
        name: "",
        chars: { char1: "", char2: "", char3: "", char4: "" }
      },
      fifth2: {
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
      labels: {
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
          first: {
          country: this.first.country,
          team: this.first.team,
          name: this.first.name,
          color: this.first.color,
          char1: this.first.chars.char1,
          char2: this.first.chars.char2,
          char3: this.first.chars.char3,
        },
        second: {
          country: this.second.country,
          team: this.second.team,
          name: this.second.name,
          char1: this.second.chars.char1,
          char2: this.second.chars.char2,
          char3: this.second.chars.char3,
          char4: this.second.chars.char4
        },
        third: {
          country: this.third.country,
          team: this.third.team,
          name: this.third.name,
          char1: this.third.chars.char1,
          char2: this.third.chars.char2,
          char3: this.third.chars.char3,
          char4: this.third.chars.char4
        },
        fourth: {
          country: this.fourth.country,
          team: this.fourth.team,
          name: this.fourth.name,
          char1: this.fourth.chars.char1,
          char2: this.fourth.chars.char2,
          char3: this.fourth.chars.char3,
          char4: this.fourth.chars.char4
        },
        fifth: {
          country: this.fifth.country,
          team: this.fifth.team,
          name: this.fifth.name,
          char1: this.fifth.chars.char1,
          char2: this.fifth.chars.char2,
          char3: this.fifth.chars.char3,
          char4: this.fifth.chars.char4
        },
        fifth2: {
          country: this.fifth2.country,
          team: this.fifth2.team,
          name: this.fifth2.name,
          char1: this.fifth2.chars.char1,
          char2: this.fifth2.chars.char2,
          char3: this.fifth2.chars.char3,
          char4: this.fifth2.chars.char4
        },
        seventh: {
          country: this.seventh.country,
          team: this.seventh.team,
          name: this.seventh.name,
          char1: this.seventh.chars.char1,
          char2: this.seventh.chars.char2,
          char3: this.seventh.chars.char3,
          char4: this.seventh.chars.char4
        },
        seventh2: {
          country: this.seventh2.country,
          team: this.seventh2.team,
          name: this.seventh2.name,
          char1: this.seventh2.chars.char1,
          char2: this.seventh2.chars.char2,
          char3: this.seventh2.chars.char3,
          char4: this.seventh2.chars.char4
        },
        labels: {
          date: this.labels.date,
          entrants: this.labels.entrants,
          tourney: this.labels.tourney
        }
      });
    }
  }
};
</script>
