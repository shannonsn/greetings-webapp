module.exports = function() {
    var nameList = [];

    var index = function(req, res) {
        res.render('index', {
            names: nameList
        });
    };
    const addOn = function(req, res) {
        res.render('add');

    }

    var add = function(req, res) {
        var newName = req.body.newName;

        var foundName = nameList.find(function(currentSubject) {
            return currentSubject === newName;
        });
        if (!newName) {
            req.flash('error', 'text field should not be blank')
        } else {
            if (!foundName) {
                nameList.push(newName);
            }
        }

          var language = req.body.language;

        if (language === 'Dutch') {
          res.render('add',{lang: 'Hallo, ', name: newName})
        }
        else if (language === 'English') {
          res.render('add', {lang: 'Hello, ' , name: newName})
        }
        else if (language === 'Espanol') {
          res.render('add', {lang: 'Hola, ' , name: newName})
        }
        else{
          res.render('add', {message: 'Please enter name or select a language!'})
        }

    }
    return {
        index,
        add,
        addOn
    }
}
