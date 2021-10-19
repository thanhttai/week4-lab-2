const express = require('express')
const router = express.Router()

/* Get news queries */
router.get("/news", function (req, res, next) {
  const queries = req.query;
  const { page, q, title, city, category } = queries;
  console.log(queries);
  if (page === undefined && q === undefined && title === undefined && city === undefined && category === undefined) {
    res.send("Successfully get all news");
  } else if (category && city && title) {
    res.send(`Sucessfully get all news that have title ${title} in category of ${category} and in ${city}`);
  } else if (page) {
    res.send(`Successfully get page ${page} news`);
  } else if (q) {
    res.send(`Successfully get all news related to query ${q}`);
  } else if (title) {
    res.send(`Successfully get all news that have title ${title}`);
  } else if (category) {
    res.send(`Successfully get all news that have category ${category}`);
  } else if (city) {
    res.send(city);
  }
});

/*Get news params*/
router.get("/news/:id", function (req, res, next) {
  console.log("params", req.params);
  const { id } = req.params;
  res.send(`Successfully get detail of 1 single news with the id - ${id}`);
})

/*Post request*/
router.post("/news", function (req, res, next) {
  const requestBody = {
    "title": "Morning HCM",
    "category": ["daily", "general", "covid19"],
    "city": "HCM"
  };
  res.send(`Successfully create a news about ${requestBody.title} in ${requestBody.city} and related to category of ${requestBody.category[0]}, ${requestBody.category[1]} and ${requestBody.category[2]}`);
})

/*Put request*/
router.put("/news/:id", function (req, res, next) {
  // const params = req.params;
  // console.log(params);
  const requestBody = {
    "title": "Afternoon HCM",
    "category": ["daily", "general", "covid19"],
    "city": "HCM"
  };
  // if (params.id) {
  res.send(`Successfully create a news about ${requestBody.title} in ${requestBody.city} and related to category of ${requestBody.category[0]}, ${requestBody.category[1]} and ${requestBody.category[2]}`);
  // };
})

/*Delete request*/
router.delete("/news/:id", function (req, res, next) {
  const params = req.params;
  console.log(params);
  res.send(`Successfully find the news with ${params.id}, and delete`);
})
module.exports = router;