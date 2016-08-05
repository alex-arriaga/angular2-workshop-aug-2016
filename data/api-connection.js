const http = require('http');
const fs = require("fs");
const path = require("path");
const request = require('request');

let PokeAPI = {
    data: {},
    utils: {
      addLeadingZeros: function (str, max) {
        str = str.toString();
        return str.length < max ? PokeAPI.utils.addLeadingZeros("0" + str, max) : str;
      }
    },
    actions: {
      getPokemonImages: function (pokemonItems) {
        // Get Images (you can use these limits to not downloading too many images at once)
        let start = 250;
        let end = 251;
        let baseURL = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

        for (let i = start, length = pokemonItems.length; i < end && i <= length; i++) {
          let imageName = PokeAPI.utils.addLeadingZeros(i, 3) + '.png';
          let imageURL = baseURL + imageName;
          let imageFileName = imageName;

          // The image URL will be created in this format:
          // http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
          PokeAPI.actions.downloadImage(imageURL, path.resolve(__dirname, './img/' + imageFileName), () => {
            console.log('Done downloading image.');
          });
        }
      },
      downloadImage: function (uri, filename, callback) {
        request.head(uri, (err, res, body) => {
          console.log('content-type:', res.headers['content-type']);
          console.log('content-length:', res.headers['content-length']);
          console.log("Image: ", filename);

          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      },
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
  }
  ;

// Run download
let fileName = "get-250-pokemon.json";
let url = 'http://pokeapi.co/api/v2/pokemon/?limit=250';
let folder = "./pokemon-details/";

let start = 220;
let end = 250;

PokeAPI.actions.getPokemonData(url, fileName).then((data) => {
  PokeAPI.data = data;
  let results = PokeAPI.data.results;

  PokeAPI.actions.getPokemonImages(results);

  // Get JSON Data
  // for (let i = start; i < end; i++) {
  //   let pokemon = results[i];
  //
  //   setTimeout(()=> {
  //     PokeAPI.actions.getPokemonData(pokemon.url, folder + pokemon.name + '.json');
  //
  //   }, 4000);
  // }


});
