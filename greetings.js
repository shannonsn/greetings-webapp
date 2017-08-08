var nameList = [];
module.exports = function() {

    // var index = function(req, res) {
    //     res.render('index', {
    //         names: nameList
    //     });
    // };
    const addOn = function(req, res) {
        res.render('add');

    }

    var add = function(req, res) {
        var newName = req.body.newName;
console.log(newName)
        var foundName = nameList.find(function(currentName) {
            return currentName === newName;
        });
        if (!newName) {
            req.flash('error', 'text field should not be blank')
        } else {
            if (!foundName) {
                nameList.push(newName);
            }
        }

          var language = req.body.language;
console.log(language);
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

        add,
        addOn
    }
}
