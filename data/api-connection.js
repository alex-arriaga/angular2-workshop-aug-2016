const http = require('http');
const fs = require("fs");
// const path = require("path");
// const request = require('request');

let PokeAPI = {
  data: {},
  actions: {
    getPokemonData: function (url, fileName) {
      return new Promise((resolve, reject) => {

        http.get(url, (res) => {
          var body = '';

          res.on('data', (chunk) => {
            body += chunk;
          });

          res.on('end', () => {
            fs.writeFile(fileName, body, (err) => {
              if (err) throw err;
              console.log("File << " + fileName + " >> was saved!");

              let data = JSON.parse(body);
              resolve(data);
            });
          });
        }).on('error', (e) => {
          console.log("Got an error: ", e);
          reject();
        });
      });


    }
  }
};

// Run download
let fileName = "get-250-pokemon.json";
let url = 'http://pokeapi.co/api/v2/pokemon/?limit=250';
let folder = "./pokemon-details/";

let start = 220;
let end = 250;

PokeAPI.actions.getPokemonData(url, fileName).then((data) => {
  PokeAPI.data = data;
  let results = PokeAPI.data.results;

  for (let i = start; i < end; i++) {
    let pokemon = results[i];

    setTimeout(()=> {
      PokeAPI.actions.getPokemonData(pokemon.url, folder + pokemon.name + '.json');

    }, 4000);
  }
});
