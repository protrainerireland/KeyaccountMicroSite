const fetch = require("node-fetch");

const Cache = require("@11ty/eleventy-cache-assets");
const fs = require('fs');


//const site = JSON.parse(json);

module.exports = async function() {
  console.log( "***Fetching courses" );

  console.log(__dirname);

  let rawData = fs.readFileSync(`${__dirname}/site.json`);
  let site = JSON.parse(rawData);

  let url = `https://professional.ie/api/getCoursesFull.php?keywords=JavaScript`;

  console.log(url);

  let json = await Cache(url, {
    duration: "1m", 
    type: "json"
  });

  return {
    courses: json.courses
  };

  // GitHub API: https://developer.github.com/v3/repos/#get
  /*
  return fetch(`https://professional.ie/api/getCoursesFull.php?keywords=JavaScript`)
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {

      console.log(json.courses.length);

      // prune the data to return only what we want
      return {
        courses: json.courses
      };
    });
  */
};