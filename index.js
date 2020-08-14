const axios = require("axios");

// https://fixer.io/
const FIXER_API_KEY = "2fd2013d75fd68e814586f1a4b17f0f0";
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`;
