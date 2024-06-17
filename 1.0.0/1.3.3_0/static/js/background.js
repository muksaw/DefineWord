!(function () {
  var t = {
      757: function (t, r, e) {
        t.exports = e(727);
      },
      727: function (t) {
        var r = (function (t) {
          "use strict";
          var r,
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = "function" === typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator",
            i = o.toStringTag || "@@toStringTag";
          function u(t, r, e) {
            return (
              Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[r]
            );
          }
          try {
            u({}, "");
          } catch (F) {
            u = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(t, r, e, n) {
            var o = r && r.prototype instanceof m ? r : m,
              a = Object.create(o.prototype),
              c = new S(n || []);
            return (
              (a._invoke = (function (t, r, e) {
                var n = h;
                return function (o, a) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === v) {
                    if ("throw" === o) throw a;
                    return T();
                  }
                  for (e.method = o, e.arg = a; ; ) {
                    var c = e.delegate;
                    if (c) {
                      var i = L(c, e);
                      if (i) {
                        if (i === d) continue;
                        return i;
                      }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                      if (n === h) throw ((n = v), e.arg);
                      e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = p;
                    var u = f(t, r, e);
                    if ("normal" === u.type) {
                      if (((n = e.done ? v : l), u.arg === d)) continue;
                      return { value: u.arg, done: e.done };
                    }
                    "throw" === u.type &&
                      ((n = v), (e.method = "throw"), (e.arg = u.arg));
                  }
                };
              })(t, e, c)),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: "normal", arg: t.call(r, e) };
            } catch (F) {
              return { type: "throw", arg: F };
            }
          }
          t.wrap = s;
          var h = "suspendedStart",
            l = "suspendedYield",
            p = "executing",
            v = "completed",
            d = {};
          function m() {}
          function w() {}
          function y() {}
          var g = {};
          u(g, a, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            b = x && x(x(I([])));
          b && b !== e && n.call(b, a) && (g = b);
          var k = (y.prototype = m.prototype = Object.create(g));
          function _(t) {
            ["next", "throw", "return"].forEach(function (r) {
              u(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function E(t, r) {
            function e(o, a, c, i) {
              var u = f(t[o], t, a);
              if ("throw" !== u.type) {
                var s = u.arg,
                  h = s.value;
                return h && "object" === typeof h && n.call(h, "__await")
                  ? r.resolve(h.__await).then(
                      function (t) {
                        e("next", t, c, i);
                      },
                      function (t) {
                        e("throw", t, c, i);
                      }
                    )
                  : r.resolve(h).then(
                      function (t) {
                        (s.value = t), c(s);
                      },
                      function (t) {
                        return e("throw", t, c, i);
                      }
                    );
              }
              i(u.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function a() {
                return new r(function (r, o) {
                  e(t, n, r, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            };
          }
          function L(t, e) {
            var n = t.iterator[e.method];
            if (n === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = r),
                  L(t, e),
                  "throw" === e.method)
                )
                  return d;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return d;
            }
            var o = f(n, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((e[t.resultName] = a.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                  (e.delegate = null),
                  d)
                : a
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function O(t) {
            var r = { tryLoc: t[0] };
            1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r);
          }
          function j(t) {
            var r = t.completion || {};
            (r.type = "normal"), delete r.arg, (t.completion = r);
          }
          function S(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(O, this),
              this.reset(!0);
          }
          function I(t) {
            if (t) {
              var e = t[a];
              if (e) return e.call(t);
              if ("function" === typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  c = function e() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (e.value = t[o]), (e.done = !1), e;
                    return (e.value = r), (e.done = !0), e;
                  };
                return (c.next = c);
              }
            }
            return { next: T };
          }
          function T() {
            return { value: r, done: !0 };
          }
          return (
            (w.prototype = y),
            u(k, "constructor", y),
            u(y, "constructor", w),
            (w.displayName = u(y, i, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var r = "function" === typeof t && t.constructor;
              return (
                !!r &&
                (r === w || "GeneratorFunction" === (r.displayName || r.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), u(t, i, "GeneratorFunction")),
                (t.prototype = Object.create(k)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            _(E.prototype),
            u(E.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = E),
            (t.async = function (r, e, n, o, a) {
              void 0 === a && (a = Promise);
              var c = new E(s(r, e, n, o), a);
              return t.isGeneratorFunction(e)
                ? c
                : c.next().then(function (t) {
                    return t.done ? t.value : c.next();
                  });
            }),
            _(k),
            u(k, i, "Generator"),
            u(k, a, function () {
              return this;
            }),
            u(k, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var r = [];
              for (var e in t) r.push(e);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = I),
            (S.prototype = {
              constructor: S,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(j),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = r);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function o(n, o) {
                  return (
                    (i.type = "throw"),
                    (i.arg = t),
                    (e.next = n),
                    o && ((e.method = "next"), (e.arg = r)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var c = this.tryEntries[a],
                    i = c.completion;
                  if ("root" === c.tryLoc) return o("end");
                  if (c.tryLoc <= this.prev) {
                    var u = n.call(c, "catchLoc"),
                      s = n.call(c, "finallyLoc");
                    if (u && s) {
                      if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                      if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                    } else if (u) {
                      if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var o = this.tryEntries[e];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var a = o;
                    break;
                  }
                }
                a &&
                  ("break" === t || "continue" === t) &&
                  a.tryLoc <= r &&
                  r <= a.finallyLoc &&
                  (a = null);
                var c = a ? a.completion : {};
                return (
                  (c.type = t),
                  (c.arg = r),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                    : this.complete(c)
                );
              },
              complete: function (t, r) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && r && (this.next = r),
                  d
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), j(e), d;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      j(e);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: I(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = r),
                  d
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    r = {};
  function e(n) {
    var o = r[n];
    if (void 0 !== o) return o.exports;
    var a = (r[n] = { exports: {} });
    return t[n](a, a.exports, e), a.exports;
  }
  (e.n = function (t) {
    var r =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return e.d(r, { a: r }), r;
  }),
    (e.d = function (t, r) {
      for (var n in r)
        e.o(r, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    }),
    (e.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (function () {
      "use strict";
      function t(t, r, e) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = e),
          t
        );
      }
      function r(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function n(e) {
        for (var n = 1; n < arguments.length; n++) {
          var o = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? r(Object(o), !0).forEach(function (r) {
                t(e, r, o[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : r(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      function o(t, r, e, n, o, a, c) {
        try {
          var i = t[a](c),
            u = i.value;
        } catch (s) {
          return void e(s);
        }
        i.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function a(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (n, a) {
            var c = t.apply(r, e);
            function i(t) {
              o(c, n, a, i, u, "next", t);
            }
            function u(t) {
              o(c, n, a, i, u, "throw", t);
            }
            i(void 0);
          });
        };
      }
      var c,
        i,
        u = e(757),
        s = e.n(u);
      function f(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n;
      }
      function h(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return f(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, r) {
            if (t) {
              if ("string" === typeof t) return f(t, r);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(t)
                  : "Arguments" === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? f(t, r)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (t) {
        (t[(t.LOGIN = 0)] = "LOGIN"),
          (t[(t.LOGOUT = 1)] = "LOGOUT"),
          (t[(t.FETCH_ALL_FOLLOWED = 2)] = "FETCH_ALL_FOLLOWED");
      })(c || (c = {})),
        (function (t) {
          (t[(t.MUST_LOGIN = 0)] = "MUST_LOGIN"),
            (t[(t.SUCCESS = 1)] = "SUCCESS"),
            (t[(t.FAILURE = 2)] = "FAILURE"),
            (t[(t.FETCH_ERROR = 3)] = "FETCH_ERROR");
        })(i || (i = {}));
      var l = (function () {
          var t = a(
            s().mark(function t(r, e) {
              var n, o;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        "",
                        (n = []),
                        (o = (function () {
                          var t = a(
                            s().mark(function t(n, a) {
                              var c, i, u, f;
                              return s().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        fetch(
                                          "https://api.twitch.tv/helix/channels/followed?user_id="
                                            .concat(e, "&first=100&after=")
                                            .concat(n),
                                          {
                                            method: "GET",
                                            headers: {
                                              "client-id":
                                                "6pjoe8hgtubwhl1rs8s39gh96m103n",
                                              Authorization: "Bearer ".concat(
                                                r
                                              ),
                                            },
                                          }
                                        )
                                      );
                                    case 2:
                                      if ((i = t.sent).ok) {
                                        t.next = 7;
                                        break;
                                      }
                                      if (401 !== i.status) {
                                        t.next = 6;
                                        break;
                                      }
                                      throw new Error("Invalid Token");
                                    case 6:
                                      throw new Error(
                                        "Fetch All Follows Failed"
                                      );
                                    case 7:
                                      return (t.next = 9), i.json();
                                    case 9:
                                      if (
                                        ((u = t.sent),
                                        (f = u.data.map(function (t) {
                                          return t.broadcaster_login;
                                        })),
                                        null === (c = u.pagination) ||
                                          void 0 === c ||
                                          !c.cursor)
                                      ) {
                                        t.next = 15;
                                        break;
                                      }
                                      return (
                                        (t.next = 14),
                                        o(
                                          u.pagination.cursor,
                                          [].concat(h(a), h(f))
                                        )
                                      );
                                    case 14:
                                      return t.abrupt("return", t.sent);
                                    case 15:
                                      return t.abrupt(
                                        "return",
                                        [].concat(h(a), h(f))
                                      );
                                    case 16:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (r, e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 5),
                        o("", n)
                      );
                    case 5:
                      return (n = t.sent), t.abrupt("return", n);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r, e) {
            return t.apply(this, arguments);
          };
        })(),
        p = (function () {
          var t = a(
            s().mark(function t(r, e) {
              var n, o;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        "",
                        (n = []),
                        (o = (function () {
                          var t = a(
                            s().mark(function t(n, a) {
                              var c, i, u, f;
                              return s().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        fetch(
                                          "https://api.twitch.tv/helix/streams/followed?user_id="
                                            .concat(e, "&first=100&after=")
                                            .concat(n),
                                          {
                                            method: "GET",
                                            headers: {
                                              "client-id":
                                                "6pjoe8hgtubwhl1rs8s39gh96m103n",
                                              Authorization: "Bearer ".concat(
                                                r
                                              ),
                                            },
                                          }
                                        )
                                      );
                                    case 2:
                                      if ((i = t.sent).ok) {
                                        t.next = 7;
                                        break;
                                      }
                                      if (401 !== i.status) {
                                        t.next = 6;
                                        break;
                                      }
                                      throw new Error("Invalid Token");
                                    case 6:
                                      throw new Error(
                                        "Fetch Followed Streams Failed"
                                      );
                                    case 7:
                                      return (t.next = 9), i.json();
                                    case 9:
                                      if (
                                        ((u = t.sent),
                                        (f = u.data.map(function (t) {
                                          return {
                                            game_name: t.game_name,
                                            thumbnail_url: t.thumbnail_url,
                                            title: t.title,
                                            user_id: t.user_id,
                                            user_login: t.user_login,
                                            user_name: t.user_name,
                                            viewer_count: t.viewer_count,
                                          };
                                        })),
                                        null === (c = u.pagination) ||
                                          void 0 === c ||
                                          !c.cursor)
                                      ) {
                                        t.next = 15;
                                        break;
                                      }
                                      return (
                                        (t.next = 14),
                                        o(
                                          u.pagination.cursor,
                                          [].concat(h(a), h(f))
                                        )
                                      );
                                    case 14:
                                      return t.abrupt("return", t.sent);
                                    case 15:
                                      return t.abrupt(
                                        "return",
                                        [].concat(h(a), h(f))
                                      );
                                    case 16:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (r, e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 5),
                        o("", n)
                      );
                    case 5:
                      return (n = t.sent), t.abrupt("return", n);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r, e) {
            return t.apply(this, arguments);
          };
        })(),
        v = (function () {
          var t = a(
            s().mark(function t(r) {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(function (t, e) {
                          try {
                            chrome.storage.local.get(r, function (e) {
                              t(e[r]);
                            });
                          } catch (n) {
                            e(n);
                          }
                        })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        d = (function () {
          var t = a(
            s().mark(function t(r) {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(function (t, e) {
                          try {
                            chrome.storage.local.get(r, function (r) {
                              t(r);
                            });
                          } catch (n) {
                            e(n);
                          }
                        })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        m = (function () {
          var t = a(
            s().mark(function t() {
              var r, e, n, o;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), d(["currentUserId", "favorites"]);
                    case 2:
                      if (
                        ((r = t.sent),
                        (e = r.currentUserId),
                        (n = r.favorites || []),
                        -1 ===
                          (o = n.findIndex(function (t) {
                            return t.userId === e;
                          })))
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return", n[o].data);
                    case 10:
                      return t.abrupt("return", []);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        w = (function () {
          var r = a(
            s().mark(function r(e, n) {
              return s().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return r.abrupt(
                        "return",
                        new Promise(function (r, o) {
                          try {
                            chrome.storage.local.set(t({}, e, n), function () {
                              r();
                            });
                          } catch (a) {
                            o(a);
                          }
                        })
                      );
                    case 1:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
          return function (t, e) {
            return r.apply(this, arguments);
          };
        })(),
        y = (function () {
          var t = a(
            s().mark(function t(r) {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(function (t, e) {
                          try {
                            chrome.storage.local.remove(r, function () {
                              t();
                            });
                          } catch (n) {
                            e(n);
                          }
                        })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        g = (function () {
          var t = a(
            s().mark(function t(r, e) {
              var n, o;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      for (n = [], o = 0; o < e.length; o += 99)
                        n.push(
                          fetch(
                            "https://api.twitch.tv/helix/users?login=".concat(
                              e.slice(o, o + 99).join("&login=")
                            ),
                            {
                              method: "GET",
                              headers: {
                                "client-id": "6pjoe8hgtubwhl1rs8s39gh96m103n",
                                Authorization: "Bearer ".concat(r),
                              },
                            }
                          ).then(
                            (function () {
                              var t = a(
                                s().mark(function t(r) {
                                  return s().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (r.ok) {
                                            t.next = 4;
                                            break;
                                          }
                                          if (401 !== r.status) {
                                            t.next = 3;
                                            break;
                                          }
                                          throw new Error("Invalid Token");
                                        case 3:
                                          throw new Error(
                                            "Fetch Users Infos Failed"
                                          );
                                        case 4:
                                          return (t.next = 6), r.json();
                                        case 6:
                                          return t.abrupt(
                                            "return",
                                            t.sent.data
                                          );
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (r) {
                                return t.apply(this, arguments);
                              };
                            })()
                          )
                        );
                      return (t.next = 4), Promise.all(n);
                    case 4:
                      return t.abrupt("return", t.sent.flat());
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r, e) {
            return t.apply(this, arguments);
          };
        })(),
        x = (function () {
          var t = a(
            s().mark(function t() {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        chrome.action.setBadgeText({ text: "" }),
                        (t.next = 3),
                        y("token")
                      );
                    case 3:
                      return (t.next = 5), y("liveStreams");
                    case 5:
                      return (t.next = 7), y("currentUserId");
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        b = (function () {
          var t = a(
            s().mark(function t(r) {
              var e, n, o;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return "userId", (t.next = 3), v("userId");
                    case 3:
                      if (!(e = t.sent)) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", e);
                    case 6:
                      return (
                        (t.next = 8),
                        fetch("https://api.twitch.tv/helix/users", {
                          method: "GET",
                          headers: {
                            "client-id": "6pjoe8hgtubwhl1rs8s39gh96m103n",
                            Authorization: "Bearer ".concat(r),
                          },
                        })
                      );
                    case 8:
                      if ((n = t.sent).ok) {
                        t.next = 11;
                        break;
                      }
                      throw new Error("Fetch Current User Id Failed");
                    case 11:
                      return (t.next = 13), n.json();
                    case 13:
                      return (o = t.sent), t.abrupt("return", o.data[0].id);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        k = (function () {
          var t = a(
            s().mark(function t() {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(
                          (function () {
                            var t = a(
                              s().mark(function t(r, e) {
                                var n;
                                return s().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        (n = (n =
                                          chrome.identity.getRedirectURL()).slice(
                                          0,
                                          n.length - 1
                                        )),
                                          chrome.identity.launchWebAuthFlow(
                                            {
                                              url: "https://id.twitch.tv/oauth2/authorize?client_id="
                                                .concat(
                                                  "6pjoe8hgtubwhl1rs8s39gh96m103n",
                                                  "&redirect_uri="
                                                )
                                                .concat(
                                                  n,
                                                  "&force_verify=true&response_type=token&scope=user:read:follows"
                                                ),
                                              interactive: !0,
                                            },
                                            (function () {
                                              var t = a(
                                                s().mark(function t(n) {
                                                  var o, a, c, i;
                                                  return s().wrap(
                                                    function (t) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            if (
                                                              ((t.prev = 0),
                                                              (a =
                                                                /access_token=(.*?)&/g),
                                                              n)
                                                            ) {
                                                              t.next = 4;
                                                              break;
                                                            }
                                                            throw new Error(
                                                              "No redirect url"
                                                            );
                                                          case 4:
                                                            if (
                                                              (c =
                                                                null ===
                                                                  (o =
                                                                    a.exec(
                                                                      n
                                                                    )) ||
                                                                void 0 === o
                                                                  ? void 0
                                                                  : o[1])
                                                            ) {
                                                              t.next = 7;
                                                              break;
                                                            }
                                                            throw new Error(
                                                              "No token"
                                                            );
                                                          case 7:
                                                            return (
                                                              (t.next = 9),
                                                              w("token", c)
                                                            );
                                                          case 9:
                                                            return (
                                                              (t.next = 11),
                                                              b(c)
                                                            );
                                                          case 11:
                                                            return (
                                                              (i = t.sent),
                                                              (t.next = 14),
                                                              w(
                                                                "currentUserId",
                                                                i
                                                              )
                                                            );
                                                          case 14:
                                                            r(), (t.next = 21);
                                                            break;
                                                          case 17:
                                                            (t.prev = 17),
                                                              (t.t0 =
                                                                t.catch(0)),
                                                              chrome.runtime
                                                                .lastError,
                                                              e();
                                                          case 21:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    t,
                                                    null,
                                                    [[0, 17]]
                                                  );
                                                })
                                              );
                                              return function (r) {
                                                return t.apply(this, arguments);
                                              };
                                            })()
                                          );
                                      case 3:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (r, e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        _ = (function () {
          var t = a(
            s().mark(function t() {
              var r;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), v("token");
                    case 2:
                      return (
                        (r = t.sent),
                        (t.next = 5),
                        fetch(
                          "https://id.twitch.tv/oauth2/revoke?client_id="
                            .concat("6pjoe8hgtubwhl1rs8s39gh96m103n", "&token=")
                            .concat(r),
                          { method: "post" }
                        )
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      chrome.action.setBadgeBackgroundColor({ color: "#5c3596" }),
        chrome.runtime.onStartup.addListener(function () {
          E(!0);
        }),
        chrome.alarms.create({ periodInMinutes: 2.5 }),
        chrome.alarms.onAlarm.addListener(function () {
          E(!1);
        });
      var E = (function () {
          var t = a(
            s().mark(function t(r) {
              var e, o, a, c, i, u;
              return s().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), v("token");
                      case 3:
                        if ((e = t.sent)) {
                          t.next = 6;
                          break;
                        }
                        return t.abrupt("return");
                      case 6:
                        return (t.next = 8), v("currentUserId");
                      case 8:
                        return (o = t.sent), (t.next = 11), p(e, o);
                      case 11:
                        return (
                          (a = t.sent),
                          (t.next = 14),
                          g(
                            e,
                            a.map(function (t) {
                              return t.user_login;
                            })
                          )
                        );
                      case 14:
                        return (
                          (c = t.sent),
                          (i = []),
                          a.forEach(function (t) {
                            var r;
                            i.push(
                              n(
                                n({}, t),
                                {},
                                {
                                  user_image:
                                    null ===
                                      (r = c.find(function (r) {
                                        return r.id === t.user_id;
                                      })) || void 0 === r
                                      ? void 0
                                      : r.profile_image_url,
                                }
                              )
                            );
                          }),
                          (t.next = 19),
                          v("notification")
                        );
                      case 19:
                        if (((u = t.sent), r || !Boolean(u))) {
                          t.next = 27;
                          break;
                        }
                        return (t.next = 23), O(a);
                      case 23:
                        return (t.next = 25), w("liveStreams", i);
                      case 25:
                        t.next = 29;
                        break;
                      case 27:
                        return (t.next = 29), w("liveStreams", i);
                      case 29:
                        L(a), (t.next = 37);
                        break;
                      case 32:
                        if (
                          ((t.prev = 32),
                          (t.t0 = t.catch(0)),
                          "Invalid Token" !== t.t0.message)
                        ) {
                          t.next = 37;
                          break;
                        }
                        return (t.next = 37), x();
                      case 37:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 32]]
              );
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        L = (function () {
          var t = a(
            s().mark(function t(r) {
              var e, n;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), m();
                    case 2:
                      (e = t.sent),
                        (n = r.filter(function (t) {
                          return e.includes(t.user_id);
                        })),
                        chrome.action.setBadgeText({
                          text: n.length.toString(),
                        });
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        O = (function () {
          var t = a(
            s().mark(function t(r) {
              var e, n, o, a;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), m();
                    case 2:
                      return (e = t.sent), (t.next = 5), v("liveStreams");
                    case 5:
                      (n = t.sent),
                        0 !==
                          (o = r
                            .filter(function (t) {
                              return !n.some(function (r) {
                                return r.user_id === t.user_id;
                              });
                            })
                            .filter(function (t) {
                              return e.some(function (r) {
                                return r === t.user_id;
                              });
                            })).length &&
                          ((a = ""),
                          o.forEach(function (t, r) {
                            a +=
                              0 === r
                                ? "" === t.user_name
                                  ? t.user_login
                                  : t.user_name
                                : ", ".concat(
                                    "" === t.user_name
                                      ? t.user_login
                                      : t.user_name
                                  );
                          }),
                          chrome.notifications.create(
                            "TFS-".concat(Date.now()),
                            {
                              message: ""
                                .concat(a, " ")
                                .concat(o.length > 1 ? "are" : "is", " live"),
                              type: "basic",
                              title: "TFS",
                              iconUrl: "../../images/icon-128.png",
                            }
                          ));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        j = (function () {
          var t = a(
            s().mark(function t(r) {
              return s().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), k();
                      case 3:
                        return (t.next = 5), E(!0);
                      case 5:
                        r(i.SUCCESS), (t.next = 13);
                        break;
                      case 8:
                        return (
                          (t.prev = 8), (t.t0 = t.catch(0)), (t.next = 12), x()
                        );
                      case 12:
                        r(i.FAILURE);
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 8]]
              );
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        S = (function () {
          var t = a(
            s().mark(function t(r) {
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), _();
                    case 2:
                      return (t.next = 4), x();
                    case 4:
                      r(i.SUCCESS);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })(),
        I = (function () {
          var t = a(
            s().mark(function t(r) {
              var e, n, o, a;
              return s().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), v("token");
                      case 3:
                        if ((e = t.sent)) {
                          t.next = 7;
                          break;
                        }
                        throw (
                          (r({ message: i.MUST_LOGIN }),
                          new Error("Must login"))
                        );
                      case 7:
                        return (t.next = 9), v("currentUserId");
                      case 9:
                        return (n = t.sent), (t.next = 12), l(e, n);
                      case 12:
                        return (o = t.sent), (t.next = 15), g(e, o);
                      case 15:
                        (a = t.sent),
                          r({ message: i.SUCCESS, followedUsersInfo: a }),
                          (t.next = 28);
                        break;
                      case 19:
                        if (
                          ((t.prev = 19),
                          (t.t0 = t.catch(0)),
                          "Invalid Token" !== t.t0.message)
                        ) {
                          t.next = 27;
                          break;
                        }
                        return (t.next = 24), x();
                      case 24:
                        r({ message: i.FAILURE }), (t.next = 28);
                        break;
                      case 27:
                        r({ message: i.FETCH_ERROR });
                      case 28:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 19]]
              );
            })
          );
          return function (r) {
            return t.apply(this, arguments);
          };
        })();
      chrome.runtime.onMessage.addListener(function (t, r, e) {
        switch (t) {
          case c.LOGIN:
            j(e);
            break;
          case c.LOGOUT:
            S(e);
            break;
          case c.FETCH_ALL_FOLLOWED:
            I(e);
        }
        return !0;
      });
    })();
})();
//# sourceMappingURL=background.js.map
