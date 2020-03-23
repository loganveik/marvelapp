// Require NPM packages
const express = require('express');
const app = express();
// const results = require('../personalities/personality');
const charImgName = require('../public/js/writereview');
const db = require('../models');
// const bcrypt = require('bcryptjs');

// Render 'Home' handlebars template at root
module.exports = function(app) {
app.get('/', (req, res) => res.render('character'));    
}


// Render 'Questions' handlebars template and insert all questions from db
// router.get('/questions', (req, res) => {
//     db.Question.findAll({})
//         .then(data => {
//             const questionObj = { values: [] };
//             data.map(value => questionObj.values.push(value.dataValues))
//             res.render('questions', questionObj);
//         });
// });

// module.exports = router;