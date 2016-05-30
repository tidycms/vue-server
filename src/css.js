var CSSParser = {
  parse: function (string) {
    var temp = string.split(';');
    var obj = {};
    try {

      for (var i = 0; i < temp.length; i++) {
        (function () {
          var item = temp[i];
          if (item && item.trim().length > 0) {
            var prop = item.split(/\:(.+)/);

            if (!prop[1]) {
              throw 'CSS format is invalid: "' + item + '"';
            }

            obj[prop[0].trim()] = prop[1].trim();
          }
        })();
      }

    } catch (err) {
      console.error('CSS PARSER', err);
    }
    return obj;
  },

  stringify: function (object) {
    var string = '';

    for (var prop in object) {
      if (object[prop] === undefined || object[prop] === null || object[prop] === '') {
        continue;
      }
      string += prop.replace(/[A-Z]/g, function (a) { return '-' + a.toLowerCase(); }) + ': ' + object[prop] + '; ';
      // string += prop + ': ' + object[prop] + '; ';
    }

    return string.trim();
  }
};

module.exports = CSSParser;
