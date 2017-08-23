module.exports = function(nameSchemaModel) {
    var nameList = {};

    var index = function(req, res, next) {

        nameSchemaModel.find({}, function(err, result) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                res.render('index', {
                    name: result
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

        console.log("in add...");

        var newName = req.body.newName;
        var language = req.body.language;

        console.log(newName);
        console.log(language);

        if (nameList[newName] === undefined) {
            console.log("first time the name is found...");
            nameList[newName] = 1;
            nameSchemaModel.create({
                name: newName,
                counter: 1
            }, function(err) {
                console.log("###");
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

            console.log("name have been greeted again...");

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
