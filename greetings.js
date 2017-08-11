module.exports = function() {
  var nameList = {};
    var index = function (req, res) {

        res.render('index', {
        name: nameList
        });
    };

    const addOn = function(req, res) {
        res.render('add');
    };

      var add = function(req, res) {
  var newName = req.body.newName;

  if (nameList[newName] === undefined) {
   nameList[newName] = 0;
}
nameList[newName] += 1;

console.log(nameList);
  var language = req.body.language
        if (language === 'Hallo') {
          res.render('add',{lang: 'Hallo, ' , name: newName})
        }
        else if (language === 'Hello') {
          res.render('add', {lang: 'Hello, ' , name: newName})
        }
        else if (language === 'Hola') {
          res.render('add', {lang: 'Hola, ' , name: newName})
        }
        else{
          res.render('add', {message: 'Please select a language!'})
        }
}
        return {
          index,
          add,
          addOn
        }
    };
