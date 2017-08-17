module.exports = function(nameSchemaModel) {
  var nameList = {};
    var index = function(req, res, next) {

        nameSchemaModel.find({}, function(err) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                res.render('index', {
                    name: nameList
                });
            }
        })
    };

    const addOn = function(req, res) {
        res.render('add');
    };

    function manageLang(lang) {
        var string = ','
        return lang + string
    }
    var add = function(req, res, next) {
        var newName = req.body.newName;
        var language = req.body.language;

        if (nameList[newName] === undefined) {
            nameList[newName] = 1;

            nameSchemaModel.create({
                name: newName,
                counter: 1
            }, function(err) {
                if (err) {
                    console.log(err);
                    next(err);
                } else {
                    res.render('add', {
                        name: newName,
                        lang: manageLang(language)
                    });
                }
            });

        } else if (nameList[newName] !== undefined) {
            nameList[newName] += 1;
            nameSchemaModel.findOneAndUpdate({
                name: newName
            }, {
                $inc: {
                    counter: 1
                }
            }, function(err) {
                if (err) {
                    console.log(err);
                    next(err)
                } else {
                    res.render('add', {
                        name: newName,
                        lang: manageLang(language)
                    })
                }
            });
        }
    }
    return {
        index,
        add,
        addOn
    };
};
