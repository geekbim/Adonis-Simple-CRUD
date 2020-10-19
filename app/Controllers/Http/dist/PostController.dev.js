'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = use('App/Models/Post');

var PostController =
/*#__PURE__*/
function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: "index",
    value: function index(_ref) {
      var request, response, view, posts;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request, response = _ref.response, view = _ref.view;
              _context.next = 3;
              return regeneratorRuntime.awrap(Post.all());

            case 3:
              posts = _context.sent;
              return _context.abrupt("return", view.render('posts.index', {
                posts: posts.rows
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(_ref2) {
      var request = _ref2.request,
          response = _ref2.response,
          view = _ref2.view;
      return view.render('posts.create');
    }
  }, {
    key: "store",
    value: function store(_ref3) {
      var request, response, view, session, post;
      return regeneratorRuntime.async(function store$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              request = _ref3.request, response = _ref3.response, view = _ref3.view, session = _ref3.session;
              post = new Post();
              post.title = request.input('title');
              post.content = request.input('content');
              _context2.next = 6;
              return regeneratorRuntime.awrap(post.save());

            case 6:
              session.flash({
                notification: 'Saved Data Successfully'
              });
              return _context2.abrupt("return", response.route('posts.index'));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "edit",
    value: function edit(_ref4) {
      var request, response, view, params, id, post;
      return regeneratorRuntime.async(function edit$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              request = _ref4.request, response = _ref4.response, view = _ref4.view, params = _ref4.params;
              id = params.id;
              _context3.next = 4;
              return regeneratorRuntime.awrap(Post.find(id));

            case 4:
              post = _context3.sent;
              return _context3.abrupt("return", view.render('posts.edit', {
                post: post
              }));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(_ref5) {
      var request, response, view, params, session, id, post;
      return regeneratorRuntime.async(function update$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              request = _ref5.request, response = _ref5.response, view = _ref5.view, params = _ref5.params, session = _ref5.session;
              id = params.id;
              _context4.next = 4;
              return regeneratorRuntime.awrap(Post.find(id));

            case 4:
              post = _context4.sent;
              post.title = request.input('title');
              post.content = request.input('content');
              _context4.next = 9;
              return regeneratorRuntime.awrap(post.save());

            case 9:
              session.flash({
                notification: 'Update Data Successfully'
              });
              return _context4.abrupt("return", response.route('posts.index'));

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref6) {
      var request, response, view, params, session, id, post;
      return regeneratorRuntime.async(function _delete$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              request = _ref6.request, response = _ref6.response, view = _ref6.view, params = _ref6.params, session = _ref6.session;
              id = params.id;
              _context5.next = 4;
              return regeneratorRuntime.awrap(Post.find(id));

            case 4:
              post = _context5.sent;
              _context5.next = 7;
              return regeneratorRuntime.awrap(post["delete"]());

            case 7:
              session.flash({
                notification: 'Delete Data Successfully'
              });
              return _context5.abrupt("return", response.route('posts.index'));

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return PostController;
}();

module.exports = PostController;