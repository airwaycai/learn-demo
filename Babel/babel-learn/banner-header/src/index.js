
// var parser = require("@babel/parser");
// var traverse = require("babel-traverse").default;
// var t = require("babel-types");
// var template = require("@babel/template");
// var generator = require("@babel/generator");

const {isComment, getCommentContent} = require('./utils');


module.exports = function(babel) {
    debugger;
    const {types} = babel;
    return {
        name: "banner-header",
        visitor: {
            Program: function Program( path, { opts } ) {
				const { banner } = opts;
                debugger;
				if ( typeof banner !== 'string' || !isComment( banner ) ) {
					throw new TypeError( 'Banner must be a valid comment.' );
				}

				path.addComment( 'leading', getCommentContent( banner ) );
			}
        }
    };
};