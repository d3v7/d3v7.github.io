(window.webpackJsonp = window.webpackJsonp || []).push([
        [1], {
            0: function(e, t, n) {
                e.exports = n("zUnb")
            },
            ELNm: function(e, t, n) {
                var r;
                r = function() {
                    return function(e) {
                        var t = {};

                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var i = t[r] = {
                                exports: {},
                                id: r,
                                loaded: !1
                            };
                            return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                        }
                        return n.m = e, n.c = t, n.p = "", n(0)
                    }([function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }
                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(),
                            i = n(1),
                            s = n(3),
                            o = function() {
                                function e(t, n) {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), i.initializer.load(this, n, t), this.begin()
                                }
                                return r(e, [{
                                    key: "toggle",
                                    value: function() {
                                        this.pause.status ? this.start() : this.stop()
                                    }
                                }, {
                                    key: "stop",
                                    value: function() {
                                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                                    }
                                }, {
                                    key: "start",
                                    value: function() {
                                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.reset(!1), this.options.onDestroy(this)
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                                    }
                                }, {
                                    key: "begin",
                                    value: function() {
                                        var e = this;
                                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                                            e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                                        }), this.startDelay)
                                    }
                                }, {
                                    key: "typewrite",
                                    value: function(e, t) {
                                        var n = this;
                                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                        var r = this.humanizer(this.typeSpeed),
                                            i = 1;
                                        !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                                            t = s.htmlParser.typeHtmlChars(e, t, n);
                                            var r = 0,
                                                o = e.substr(t);
                                            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                                                var a = 1;
                                                a += (o = /\d+/.exec(o)[0]).length, r = parseInt(o), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), e = e.substring(0, t) + e.substring(t + a), n.toggleBlinking(!0)
                                            }
                                            if ("`" === o.charAt(0)) {
                                                for (;
                                                    "`" !== e.substr(t + i).charAt(0) && !(t + ++i > e.length););
                                                var l = e.substring(0, t),
                                                    u = e.substring(l.length + 1, t + i),
                                                    c = e.substring(t + i + 1);
                                                e = l + u + c, i--
                                            }
                                            n.timeout = setTimeout((function() {
                                                n.toggleBlinking(!1), t === e.length ? n.doneTyping(e, t) : n.keepTyping(e, t, i), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n))
                                            }), r)
                                        }), r) : this.setPauseStatus(e, t, !0)
                                    }
                                }, {
                                    key: "keepTyping",
                                    value: function(e, t, n) {
                                        0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                                        var r = e.substr(0, t += n);
                                        this.replaceText(r), this.typewrite(e, t)
                                    }
                                }, {
                                    key: "doneTyping",
                                    value: function(e, t) {
                                        var n = this;
                                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                                            n.backspace(e, t)
                                        }), this.backDelay))
                                    }
                                }, {
                                    key: "backspace",
                                    value: function(e, t) {
                                        var n = this;
                                        if (!0 !== this.pause.status) {
                                            if (this.fadeOut) return this.initFadeOut();
                                            this.toggleBlinking(!1);
                                            var r = this.humanizer(this.backSpeed);
                                            this.timeout = setTimeout((function() {
                                                t = s.htmlParser.backSpaceHtmlChars(e, t, n);
                                                var r = e.substr(0, t);
                                                if (n.replaceText(r), n.smartBackspace) {
                                                    var i = n.strings[n.arrayPos + 1];
                                                    n.stopNum = i && r === i.substr(0, t) ? t : 0
                                                }
                                                t > n.stopNum ? n.backspace(e, --t) : t <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
                                            }), r)
                                        } else this.setPauseStatus(e, t, !0)
                                    }
                                }, {
                                    key: "complete",
                                    value: function() {
                                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                                    }
                                }, {
                                    key: "setPauseStatus",
                                    value: function(e, t, n) {
                                        this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
                                    }
                                }, {
                                    key: "toggleBlinking",
                                    value: function(e) {
                                        this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                                    }
                                }, {
                                    key: "humanizer",
                                    value: function(e) {
                                        return Math.round(Math.random() * e / 2) + e
                                    }
                                }, {
                                    key: "shuffleStringsIfNeeded",
                                    value: function() {
                                        this.shuffle && (this.sequence = this.sequence.sort((function() {
                                            return Math.random() - .5
                                        })))
                                    }
                                }, {
                                    key: "initFadeOut",
                                    value: function() {
                                        var e = this;
                                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout((function() {
                                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                                        }), this.fadeOutDelay)
                                    }
                                }, {
                                    key: "replaceText",
                                    value: function(e) {
                                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                                    }
                                }, {
                                    key: "bindFocusEvents",
                                    value: function() {
                                        var e = this;
                                        this.isInput && (this.el.addEventListener("focus", (function(t) {
                                            e.stop()
                                        })), this.el.addEventListener("blur", (function(t) {
                                            e.el.value && 0 !== e.el.value.length || e.start()
                                        })))
                                    }
                                }, {
                                    key: "insertCursor",
                                    value: function() {
                                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                                    }
                                }]), e
                            }();
                        t.default = o, e.exports = t.default
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, i = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                }
                                return e
                            },
                            s = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }
                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(),
                            o = (r = n(2)) && r.__esModule ? r : {
                                default: r
                            },
                            a = function() {
                                function e() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }
                                return s(e, [{
                                    key: "load",
                                    value: function(e, t, n) {
                                        if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = i({}, o.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map((function(e) {
                                                return e.trim()
                                            })), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
                                            e.strings = [], e.stringsElement.style.display = "none";
                                            var r = Array.prototype.slice.apply(e.stringsElement.children),
                                                s = r.length;
                                            if (s)
                                                for (var a = 0; a < s; a += 1) e.strings.push(r[a].innerHTML.trim())
                                        }
                                        for (var a in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                                status: !1,
                                                typewrite: !0,
                                                curString: "",
                                                curStrPos: 0
                                            }, e.typingComplete = !1, e.strings) e.sequence[a] = a;
                                        e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                                    }
                                }, {
                                    key: "getCurrentElContent",
                                    value: function(e) {
                                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                                    }
                                }, {
                                    key: "appendAnimationCss",
                                    value: function(e) {
                                        if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                                            var t = document.createElement("style");
                                            t.type = "text/css", t.setAttribute("data-typed-js-css", !0);
                                            var n = "";
                                            e.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = n, document.body.appendChild(t))
                                        }
                                    }
                                }]), e
                            }();
                        t.default = a;
                        var l = new a;
                        t.initializer = l
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = {
                            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                            stringsElement: null,
                            typeSpeed: 0,
                            startDelay: 0,
                            backSpeed: 0,
                            smartBackspace: !0,
                            shuffle: !1,
                            backDelay: 700,
                            fadeOut: !1,
                            fadeOutClass: "typed-fade-out",
                            fadeOutDelay: 500,
                            loop: !1,
                            loopCount: 1 / 0,
                            showCursor: !0,
                            cursorChar: "|",
                            autoInsertCss: !0,
                            attr: null,
                            bindInputFocusEvents: !1,
                            contentType: "html",
                            onComplete: function(e) {},
                            preStringTyped: function(e, t) {},
                            onStringTyped: function(e, t) {},
                            onLastStringBackspaced: function(e) {},
                            onTypingPaused: function(e, t) {},
                            onTypingResumed: function(e, t) {},
                            onReset: function(e) {},
                            onStop: function(e, t) {},
                            onStart: function(e, t) {},
                            onDestroy: function(e) {}
                        }, e.exports = t.default
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                    }
                                }
                                return function(t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t
                                }
                            }(),
                            r = function() {
                                function e() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }
                                return n(e, [{
                                    key: "typeHtmlChars",
                                    value: function(e, t, n) {
                                        if ("html" !== n.contentType) return t;
                                        var r = e.substr(t).charAt(0);
                                        if ("<" === r || "&" === r) {
                                            var i;
                                            for (i = "<" === r ? ">" : ";"; e.substr(t + 1).charAt(0) !== i && !(++t + 1 > e.length););
                                            t++
                                        }
                                        return t
                                    }
                                }, {
                                    key: "backSpaceHtmlChars",
                                    value: function(e, t, n) {
                                        if ("html" !== n.contentType) return t;
                                        var r = e.substr(t).charAt(0);
                                        if (">" === r || ";" === r) {
                                            var i;
                                            for (i = ">" === r ? "<" : "&"; e.substr(t - 1).charAt(0) !== i && !(--t < 0););
                                            t--
                                        }
                                        return t
                                    }
                                }]), e
                            }();
                        t.default = r;
                        var i = new r;
                        t.htmlParser = i
                    }])
                }, e.exports = r()
            },
            EVdn: function(e, t, n) {
                var r;
                ! function(t, n) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, (function(n, i) {
                    "use strict";
                    var s = [],
                        o = n.document,
                        a = Object.getPrototypeOf,
                        l = s.slice,
                        u = s.concat,
                        c = s.push,
                        h = s.indexOf,
                        d = {},
                        f = d.toString,
                        p = d.hasOwnProperty,
                        g = p.toString,
                        m = g.call(Object),
                        v = {},
                        y = function(e) {
                            return "function" == typeof e && "number" != typeof e.nodeType
                        },
                        b = function(e) {
                            return null != e && e === e.window
                        },
                        w = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function _(e, t, n) {
                        var r, i, s = (n = n || o).createElement("script");
                        if (s.text = e, t)
                            for (r in w)(i = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, i);
                        n.head.appendChild(s).parentNode.removeChild(s)
                    }

                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
                    }
                    var C = function(e, t) {
                            return new C.fn.init(e, t)
                        },
                        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                    function E(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    C.fn = C.prototype = {
                        jquery: "3.4.1",
                        constructor: C,
                        length: 0,
                        toArray: function() {
                            return l.call(this)
                        },
                        get: function(e) {
                            return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function(e) {
                            var t = C.merge(this.constructor(), e);
                            return t.prevObject = this, t
                        },
                        each: function(e) {
                            return C.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(C.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(l.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: s.sort,
                        splice: s.splice
                    }, C.extend = C.fn.extend = function() {
                        var e, t, n, r, i, s, o = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            u = !1;
                        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || y(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                            if (null != (e = arguments[a]))
                                for (t in e) r = e[t], "__proto__" !== t && o !== r && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], s = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, o[t] = C.extend(u, s, r)) : void 0 !== r && (o[t] = r));
                        return o
                    }, C.extend({
                        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return !(!e || "[object Object]" !== f.call(e) || (t = a(e)) && ("function" != typeof(n = p.call(t, "constructor") && t.constructor) || g.call(n) !== m))
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        globalEval: function(e, t) {
                            _(e, {
                                nonce: t && t.nonce
                            })
                        },
                        each: function(e, t) {
                            var n, r = 0;
                            if (E(e))
                                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break;
                            return e
                        },
                        trim: function(e) {
                            return null == e ? "" : (e + "").replace(S, "")
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : h.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                            return e.length = i, e
                        },
                        grep: function(e, t, n) {
                            for (var r = [], i = 0, s = e.length, o = !n; i < s; i++) !t(e[i], i) !== o && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, s = 0,
                                o = [];
                            if (E(e))
                                for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && o.push(i);
                            else
                                for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
                            return u.apply([], o)
                        },
                        guid: 1,
                        support: v
                    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        d["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var T = function(e) {
                        var t, n, r, i, s, o, a, l, u, c, h, d, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                            _ = e.document,
                            x = 0,
                            C = 0,
                            S = le(),
                            E = le(),
                            T = le(),
                            k = le(),
                            A = function(e, t) {
                                return e === t && (h = !0), 0
                            },
                            N = {}.hasOwnProperty,
                            I = [],
                            R = I.pop,
                            O = I.push,
                            P = I.push,
                            D = I.slice,
                            M = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            L = "[\\x20\\t\\r\\n\\f]",
                            U = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                            H = "\\[" + L + "*(" + U + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + L + "*\\]",
                            F = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                            $ = new RegExp(L + "+", "g"),
                            z = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                            V = new RegExp("^" + L + "*," + L + "*"),
                            q = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                            B = new RegExp(L + "|>"),
                            W = new RegExp(F),
                            Q = new RegExp("^" + U + "$"),
                            Z = {
                                ID: new RegExp("^#(" + U + ")"),
                                CLASS: new RegExp("^\\.(" + U + ")"),
                                TAG: new RegExp("^(" + U + "|[*])"),
                                ATTR: new RegExp("^" + H),
                                PSEUDO: new RegExp("^" + F),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + j + ")$", "i"),
                                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                            },
                            G = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            X = /^h\d$/i,
                            Y = /^[^{]+\{\s*\[native \w/,
                            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                            ne = function(e, t, n) {
                                var r = "0x" + t - 65536;
                                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function(e, t) {
                                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            se = function() {
                                d()
                            },
                            oe = we((function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            P.apply(I = D.call(_.childNodes), _.childNodes)
                        } catch (Ee) {
                            P = {
                                apply: I.length ? function(e, t) {
                                    O.apply(e, D.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function ae(e, t, r, i) {
                            var s, a, u, c, h, p, v, y = t && t.ownerDocument,
                                x = t ? t.nodeType : 9;
                            if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
                            if (!i && ((t ? t.ownerDocument || t : _) !== f && d(t), t = t || f, g)) {
                                if (11 !== x && (h = J.exec(e)))
                                    if (s = h[1]) {
                                        if (9 === x) {
                                            if (!(u = t.getElementById(s))) return r;
                                            if (u.id === s) return r.push(u), r
                                        } else if (y && (u = y.getElementById(s)) && b(t, u) && u.id === s) return r.push(u), r
                                    } else {
                                        if (h[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                                        if ((s = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(s)), r
                                    } if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                                    if (v = e, y = t, 1 === x && B.test(e)) {
                                        for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = w), a = (p = o(e)).length; a--;) p[a] = "#" + c + " " + be(p[a]);
                                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                                    }
                                    try {
                                        return P.apply(r, y.querySelectorAll(v)), r
                                    } catch (C) {
                                        k(e, !0)
                                    } finally {
                                        c === w && t.removeAttribute("id")
                                    }
                                }
                            }
                            return l(e.replace(z, "$1"), t, r, i)
                        }

                        function le() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                            }
                        }

                        function ue(e) {
                            return e[w] = !0, e
                        }

                        function ce(e) {
                            var t = f.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (Ee) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function he(e, t) {
                            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                        }

                        function de(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function fe(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function pe(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function ge(e) {
                            return function(t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function me(e) {
                            return ue((function(t) {
                                return t = +t, ue((function(n, r) {
                                    for (var i, s = e([], n.length, t), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = ae.support = {}, s = ae.isXML = function(e) {
                                var t = (e.ownerDocument || e).documentElement;
                                return !G.test(e.namespaceURI || t && t.nodeName || "HTML")
                            }, d = ae.setDocument = function(e) {
                                var t, i, o = e ? e.ownerDocument || e : _;
                                return o !== f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, g = !s(f), _ !== f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", se, !1) : i.attachEvent && i.attachEvent("onunload", se)), n.attributes = ce((function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                })), n.getElementsByTagName = ce((function(e) {
                                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                                })), n.getElementsByClassName = Y.test(f.getElementsByClassName), n.getById = ce((function(e) {
                                    return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                                })), n.getById ? (r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, r.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }) : (r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }, r.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n, r, i, s = t.getElementById(e);
                                        if (s) {
                                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                            for (i = t.getElementsByName(e), r = 0; s = i[r++];)
                                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                                        }
                                        return []
                                    }
                                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, r = [],
                                        i = 0,
                                        s = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return s
                                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                                }, v = [], m = [], (n.qsa = Y.test(f.querySelectorAll)) && (ce((function(e) {
                                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                                })), ce((function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = f.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (n.matchesSelector = Y.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Y.test(p.compareDocumentPosition), b = t || Y.test(p.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, A = t ? function(e, t) {
                                    if (e === t) return h = !0, 0;
                                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === f || e.ownerDocument === _ && b(_, e) ? -1 : t === f || t.ownerDocument === _ && b(_, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return h = !0, 0;
                                    var n, r = 0,
                                        i = e.parentNode,
                                        s = t.parentNode,
                                        o = [e],
                                        a = [t];
                                    if (!i || !s) return e === f ? -1 : t === f ? 1 : i ? -1 : s ? 1 : c ? M(c, e) - M(c, t) : 0;
                                    if (i === s) return de(e, t);
                                    for (n = e; n = n.parentNode;) o.unshift(n);
                                    for (n = t; n = n.parentNode;) a.unshift(n);
                                    for (; o[r] === a[r];) r++;
                                    return r ? de(o[r], a[r]) : o[r] === _ ? -1 : a[r] === _ ? 1 : 0
                                }, f) : f
                            }, ae.matches = function(e, t) {
                                return ae(e, null, null, t)
                            }, ae.matchesSelector = function(e, t) {
                                if ((e.ownerDocument || e) !== f && d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                                    var r = y.call(e, t);
                                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                                } catch (Ee) {
                                    k(t, !0)
                                }
                                return ae(t, f, null, [e]).length > 0
                            }, ae.contains = function(e, t) {
                                return (e.ownerDocument || e) !== f && d(e), b(e, t)
                            }, ae.attr = function(e, t) {
                                (e.ownerDocument || e) !== f && d(e);
                                var i = r.attrHandle[t.toLowerCase()],
                                    s = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                                return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                            }, ae.escape = function(e) {
                                return (e + "").replace(re, ie)
                            }, ae.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, ae.uniqueSort = function(e) {
                                var t, r = [],
                                    i = 0,
                                    s = 0;
                                if (h = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), h) {
                                    for (; t = e[s++];) t === e[s] && (i = r.push(s));
                                    for (; i--;) e.splice(r[i], 1)
                                }
                                return c = null, e
                            }, i = ae.getText = function(e) {
                                var t, n = "",
                                    r = 0,
                                    s = e.nodeType;
                                if (s) {
                                    if (1 === s || 9 === s || 11 === s) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                    } else if (3 === s || 4 === s) return e.nodeValue
                                } else
                                    for (; t = e[r++];) n += i(t);
                                return n
                            }, (r = ae.selectors = {
                                cacheLength: 50,
                                createPseudo: ue,
                                match: Z,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = S[e + " "];
                                        return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && S(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = ae.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var s = "nth" !== e.slice(0, 3),
                                            o = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, l) {
                                            var u, c, h, d, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                                                m = t.parentNode,
                                                v = a && t.nodeName.toLowerCase(),
                                                y = !l && !a,
                                                b = !1;
                                            if (m) {
                                                if (s) {
                                                    for (; g;) {
                                                        for (d = t; d = d[g];)
                                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                        p = g = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                                    for (b = (f = (u = (c = (h = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) {
                                                            c[e] = [x, f, b];
                                                            break
                                                        }
                                                } else if (y && (b = f = (u = (c = (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b)
                                                    for (;
                                                        (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [x, b]), d !== t)););
                                                return (b -= i) === r || b % r == 0 && b / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, t) {
                                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                        return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                            for (var r, s = i(e, t), o = s.length; o--;) e[r = M(e, s[o])] = !(n[r] = s[o])
                                        })) : function(e) {
                                            return i(e, 0, n)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: ue((function(e) {
                                        var t = [],
                                            n = [],
                                            r = a(e.replace(z, "$1"));
                                        return r[w] ? ue((function(e, t, n, i) {
                                            for (var s, o = r(e, null, i, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                                        })) : function(e, i, s) {
                                            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: ue((function(e) {
                                        return function(t) {
                                            return ae(e, t).length > 0
                                        }
                                    })),
                                    contains: ue((function(e) {
                                        return e = e.replace(te, ne),
                                            function(t) {
                                                return (t.textContent || i(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: ue((function(e) {
                                        return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function(e) {
                                        return e === p
                                    },
                                    focus: function(e) {
                                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !r.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return X.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return K.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: me((function() {
                                        return [0]
                                    })),
                                    last: me((function(e, t) {
                                        return [t - 1]
                                    })),
                                    eq: me((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: me((function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: me((function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: me((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                        return e
                                    })),
                                    gt: me((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    }))
                                }
                            }).pseudos.nth = r.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) r.pseudos[t] = fe(t);
                        for (t in {
                                submit: !0,
                                reset: !0
                            }) r.pseudos[t] = pe(t);

                        function ye() {}

                        function be(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function we(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                s = i || r,
                                o = n && "parentNode" === s,
                                a = C++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || o) return e(t, n, i);
                                return !1
                            } : function(t, n, l) {
                                var u, c, h, d = [x, a];
                                if (l) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || o)
                                            if (c = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                            else {
                                                if ((u = c[s]) && u[0] === x && u[1] === a) return d[2] = u[2];
                                                if (c[s] = d, d[2] = e(t, n, l)) return !0
                                            } return !1
                            }
                        }

                        function _e(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function xe(e, t, n, r, i) {
                            for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (n && !n(s, r, i) || (o.push(s), u && t.push(a)));
                            return o
                        }

                        function Ce(e, t, n, r, i, s) {
                            return r && !r[w] && (r = Ce(r)), i && !i[w] && (i = Ce(i, s)), ue((function(s, o, a, l) {
                                var u, c, h, d = [],
                                    f = [],
                                    p = o.length,
                                    g = s || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                                        return n
                                    }(t || "*", a.nodeType ? [a] : a, []),
                                    m = !e || !s && t ? g : xe(g, d, e, a, l),
                                    v = n ? i || (s ? e : p || r) ? [] : o : m;
                                if (n && n(m, v, a, l), r)
                                    for (u = xe(v, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (v[f[c]] = !(m[f[c]] = h));
                                if (s) {
                                    if (i || e) {
                                        if (i) {
                                            for (u = [], c = v.length; c--;)(h = v[c]) && u.push(m[c] = h);
                                            i(null, v = [], u, l)
                                        }
                                        for (c = v.length; c--;)(h = v[c]) && (u = i ? M(s, h) : d[c]) > -1 && (s[u] = !(o[u] = h))
                                    }
                                } else v = xe(v === o ? v.splice(p, v.length) : v), i ? i(null, o, v, l) : P.apply(o, v)
                            }))
                        }

                        function Se(e) {
                            for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], l = o ? 1 : 0, c = we((function(e) {
                                    return e === t
                                }), a, !0), h = we((function(e) {
                                    return M(t, e) > -1
                                }), a, !0), d = [function(e, n, r) {
                                    var i = !o && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : h(e, n, r));
                                    return t = null, i
                                }]; l < s; l++)
                                if (n = r.relative[e[l].type]) d = [we(_e(d), n)];
                                else {
                                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                        for (i = ++l; i < s && !r.relative[e[i].type]; i++);
                                        return Ce(l > 1 && _e(d), l > 1 && be(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(z, "$1"), n, l < i && Se(e.slice(l, i)), i < s && Se(e = e.slice(i)), i < s && be(e))
                                    }
                                    d.push(n)
                                } return _e(d)
                        }
                        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, o = ae.tokenize = function(e, t) {
                            var n, i, s, o, a, l, u, c = E[e + " "];
                            if (c) return t ? 0 : c.slice(0);
                            for (a = e, l = [], u = r.preFilter; a;) {
                                for (o in n && !(i = V.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(s = [])), n = !1, (i = q.exec(a)) && (n = i.shift(), s.push({
                                        value: n,
                                        type: i[0].replace(z, " ")
                                    }), a = a.slice(n.length)), r.filter) !(i = Z[o].exec(a)) || u[o] && !(i = u[o](i)) || (n = i.shift(), s.push({
                                    value: n,
                                    type: o,
                                    matches: i
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
                        }, a = ae.compile = function(e, t) {
                            var n, i = [],
                                s = [],
                                a = T[e + " "];
                            if (!a) {
                                for (t || (t = o(e)), n = t.length; n--;)(a = Se(t[n]))[w] ? i.push(a) : s.push(a);
                                (a = T(e, function(e, t) {
                                    var n = t.length > 0,
                                        i = e.length > 0,
                                        s = function(s, o, a, l, c) {
                                            var h, p, m, v = 0,
                                                y = "0",
                                                b = s && [],
                                                w = [],
                                                _ = u,
                                                C = s || i && r.find.TAG("*", c),
                                                S = x += null == _ ? 1 : Math.random() || .1,
                                                E = C.length;
                                            for (c && (u = o === f || o || c); y !== E && null != (h = C[y]); y++) {
                                                if (i && h) {
                                                    for (p = 0, o || h.ownerDocument === f || (d(h), a = !g); m = e[p++];)
                                                        if (m(h, o || f, a)) {
                                                            l.push(h);
                                                            break
                                                        } c && (x = S)
                                                }
                                                n && ((h = !m && h) && v--, s && b.push(h))
                                            }
                                            if (v += y, n && y !== v) {
                                                for (p = 0; m = t[p++];) m(b, w, o, a);
                                                if (s) {
                                                    if (v > 0)
                                                        for (; y--;) b[y] || w[y] || (w[y] = R.call(l));
                                                    w = xe(w)
                                                }
                                                P.apply(l, w), c && !s && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                            }
                                            return c && (x = S, u = _), b
                                        };
                                    return n ? ue(s) : s
                                }(s, i))).selector = e
                            }
                            return a
                        }, l = ae.select = function(e, t, n, i) {
                            var s, l, u, c, h, d = "function" == typeof e && e,
                                f = !i && o(e = d.selector || e);
                            if (n = n || [], 1 === f.length) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                                    if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                                }
                                for (s = Z.needsContext.test(e) ? 0 : l.length; s-- && !r.relative[c = (u = l[s]).type];)
                                    if ((h = r.find[c]) && (i = h(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                        if (l.splice(s, 1), !(e = i.length && be(l))) return P.apply(n, i), n;
                                        break
                                    }
                            }
                            return (d || a(e, f))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                        }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!h, d(), n.sortDetached = ce((function(e) {
                            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                        })), ce((function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || he("type|href|height|width", (function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ce((function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || he("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ce((function(e) {
                            return null == e.getAttribute("disabled")
                        })) || he(j, (function(e, t, n) {
                            var r;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        })), ae
                    }(n);
                    C.find = T, C.expr = T.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = T.uniqueSort, C.text = T.getText, C.isXMLDoc = T.isXML, C.contains = T.contains, C.escapeSelector = T.escape;
                    var k = function(e, t, n) {
                            for (var r = [], i = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (i && C(e).is(n)) break;
                                    r.push(e)
                                } return r
                        },
                        A = function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        N = C.expr.match.needsContext;

                    function I(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    var R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function O(e, t, n) {
                        return y(t) ? C.grep(e, (function(e, r) {
                            return !!t.call(e, r, e) !== n
                        })) : t.nodeType ? C.grep(e, (function(e) {
                            return e === t !== n
                        })) : "string" != typeof t ? C.grep(e, (function(e) {
                            return h.call(t, e) > -1 !== n
                        })) : C.filter(t, e, n)
                    }
                    C.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                            return 1 === e.nodeType
                        })))
                    }, C.fn.extend({
                        find: function(e) {
                            var t, n, r = this.length,
                                i = this;
                            if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (C.contains(i[t], this)) return !0
                            })));
                            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                            return r > 1 ? C.uniqueSort(n) : n
                        },
                        filter: function(e) {
                            return this.pushStack(O(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(O(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!O(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length
                        }
                    });
                    var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (C.fn.init = function(e, t, n) {
                        var r, i;
                        if (!e) return this;
                        if (n = n || P, "string" == typeof e) {
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (C.merge(this, C.parseHTML(r[1], (t = t instanceof C ? t[0] : t) && t.nodeType ? t.ownerDocument || t : o, !0)), R.test(r[1]) && C.isPlainObject(t))
                                    for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return (i = o.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                    }).prototype = C.fn, P = C(o);
                    var M = /^(?:parents|prev(?:Until|All))/,
                        j = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function L(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    C.fn.extend({
                        has: function(e) {
                            var t = C(e, this),
                                n = t.length;
                            return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (C.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function(e, t) {
                            var n, r = 0,
                                i = this.length,
                                s = [],
                                o = "string" != typeof e && C(e);
                            if (!N.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                            s.push(n);
                                            break
                                        } return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? h.call(C(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), C.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return k(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return k(e, "parentNode", n)
                        },
                        next: function(e) {
                            return L(e, "nextSibling")
                        },
                        prev: function(e) {
                            return L(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return k(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return k(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return k(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return k(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return A((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return A(e.firstChild)
                        },
                        contents: function(e) {
                            return void 0 !== e.contentDocument ? e.contentDocument : (I(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                        }
                    }, (function(e, t) {
                        C.fn[e] = function(n, r) {
                            var i = C.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (j[e] || C.uniqueSort(i), M.test(e) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var U = /[^\x20\t\r\n\f]+/g;

                    function H(e) {
                        return e
                    }

                    function F(e) {
                        throw e
                    }

                    function $(e, t, n, r) {
                        var i;
                        try {
                            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    C.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var t = {};
                            return C.each(e.match(U) || [], (function(e, n) {
                                t[n] = !0
                            })), t
                        }(e) : C.extend({}, e);
                        var t, n, r, i, s = [],
                            o = [],
                            a = -1,
                            l = function() {
                                for (i = i || e.once, r = t = !0; o.length; a = -1)
                                    for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length, n = !1);
                                e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
                            },
                            u = {
                                add: function() {
                                    return s && (n && !t && (a = s.length - 1, o.push(n)), function t(n) {
                                        C.each(n, (function(n, r) {
                                            y(r) ? e.unique && u.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                                        }))
                                    }(arguments), n && !t && l()), this
                                },
                                remove: function() {
                                    return C.each(arguments, (function(e, t) {
                                        for (var n;
                                            (n = C.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                                    })), this
                                },
                                has: function(e) {
                                    return e ? C.inArray(e, s) > -1 : s.length > 0
                                },
                                empty: function() {
                                    return s && (s = []), this
                                },
                                disable: function() {
                                    return i = o = [], s = n = "", this
                                },
                                disabled: function() {
                                    return !s
                                },
                                lock: function() {
                                    return i = o = [], n || t || (s = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(e, n) {
                                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
                                },
                                fire: function() {
                                    return u.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return u
                    }, C.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                                ],
                                r = "pending",
                                i = {
                                    state: function() {
                                        return r
                                    },
                                    always: function() {
                                        return s.done(arguments).fail(arguments), this
                                    },
                                    catch: function(e) {
                                        return i.then(null, e)
                                    },
                                    pipe: function() {
                                        var e = arguments;
                                        return C.Deferred((function(n) {
                                            C.each(t, (function(t, r) {
                                                var i = y(e[r[4]]) && e[r[4]];
                                                s[r[1]]((function() {
                                                    var e = i && i.apply(this, arguments);
                                                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    then: function(e, r, i) {
                                        var s = 0;

                                        function o(e, t, r, i) {
                                            return function() {
                                                var a = this,
                                                    l = arguments,
                                                    u = function() {
                                                        var n, u;
                                                        if (!(e < s)) {
                                                            if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                            y(u = n && ("object" == typeof n || "function" == typeof n) && n.then) ? i ? u.call(n, o(s, t, H, i), o(s, t, F, i)) : u.call(n, o(++s, t, H, i), o(s, t, F, i), o(s, t, H, t.notifyWith)) : (r !== H && (a = void 0, l = [n]), (i || t.resolveWith)(a, l))
                                                        }
                                                    },
                                                    c = i ? u : function() {
                                                        try {
                                                            u()
                                                        } catch (n) {
                                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= s && (r !== F && (a = void 0, l = [n]), t.rejectWith(a, l))
                                                        }
                                                    };
                                                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                            }
                                        }
                                        return C.Deferred((function(n) {
                                            t[0][3].add(o(0, n, y(i) ? i : H, n.notifyWith)), t[1][3].add(o(0, n, y(e) ? e : H)), t[2][3].add(o(0, n, y(r) ? r : F))
                                        })).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? C.extend(e, i) : i
                                    }
                                },
                                s = {};
                            return C.each(t, (function(e, n) {
                                var o = n[2],
                                    a = n[5];
                                i[n[1]] = o.add, a && o.add((function() {
                                    r = a
                                }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), s[n[0]] = function() {
                                    return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                                }, s[n[0] + "With"] = o.fireWith
                            })), i.promise(s), e && e.call(s, s), s
                        },
                        when: function(e) {
                            var t = arguments.length,
                                n = t,
                                r = Array(n),
                                i = l.call(arguments),
                                s = C.Deferred(),
                                o = function(e) {
                                    return function(n) {
                                        r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || s.resolveWith(r, i)
                                    }
                                };
                            if (t <= 1 && ($(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || y(i[n] && i[n].then))) return s.then();
                            for (; n--;) $(i[n], o(n), s.reject);
                            return s.promise()
                        }
                    });
                    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    C.Deferred.exceptionHook = function(e, t) {
                        n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, C.readyException = function(e) {
                        n.setTimeout((function() {
                            throw e
                        }))
                    };
                    var V = C.Deferred();

                    function q() {
                        o.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), C.ready()
                    }
                    C.fn.ready = function(e) {
                        return V.then(e).catch((function(e) {
                            C.readyException(e)
                        })), this
                    }, C.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || V.resolveWith(o, [C]))
                        }
                    }), C.ready.then = V.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(C.ready) : (o.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
                    var B = function(e, t, n, r, i, s, o) {
                            var a = 0,
                                l = e.length,
                                u = null == n;
                            if ("object" === x(n))
                                for (a in i = !0, n) B(e, t, a, n[a], !0, s, o);
                            else if (void 0 !== r && (i = !0, y(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                                    return u.call(C(e), n)
                                })), t))
                                for (; a < l; a++) t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
                            return i ? e : u ? t.call(e) : l ? t(e[0], n) : s
                        },
                        W = /^-ms-/,
                        Q = /-([a-z])/g;

                    function Z(e, t) {
                        return t.toUpperCase()
                    }

                    function G(e) {
                        return e.replace(W, "ms-").replace(Q, Z)
                    }
                    var K = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };

                    function X() {
                        this.expando = C.expando + X.uid++
                    }
                    X.uid = 1, X.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var r, i = this.cache(e);
                            if ("string" == typeof t) i[G(t)] = n;
                            else
                                for (r in t) i[G(r)] = t[r];
                            return i
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                        },
                        access: function(e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(U) || []).length;
                                    for (; n--;) delete r[t[n]]
                                }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !C.isEmptyObject(t)
                        }
                    };
                    var Y = new X,
                        J = new X,
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;

                    function ne(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                                try {
                                    n = function(e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (i) {}
                                J.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    C.extend({
                        hasData: function(e) {
                            return J.hasData(e) || Y.hasData(e)
                        },
                        data: function(e, t, n) {
                            return J.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            J.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return Y.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            Y.remove(e, t)
                        }
                    }), C.fn.extend({
                        data: function(e, t) {
                            var n, r, i, s = this[0],
                                o = s && s.attributes;
                            if (void 0 === e) {
                                if (this.length && (i = J.get(s), 1 === s.nodeType && !Y.get(s, "hasDataAttrs"))) {
                                    for (n = o.length; n--;) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(s, r, i[r]));
                                    Y.set(s, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof e ? this.each((function() {
                                J.set(this, e)
                            })) : B(this, (function(t) {
                                var n;
                                if (s && void 0 === t) return void 0 !== (n = J.get(s, e)) ? n : void 0 !== (n = ne(s, e)) ? n : void 0;
                                this.each((function() {
                                    J.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                J.remove(this, e)
                            }))
                        }
                    }), C.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e) return r = Y.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = Y.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(e, t) {
                            var n = C.queue(e, t = t || "fx"),
                                r = n.length,
                                i = n.shift(),
                                s = C._queueHooks(e, t);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, (function() {
                                C.dequeue(e, t)
                            }), s)), !r && s && s.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return Y.get(e, n) || Y.access(e, n, {
                                empty: C.Callbacks("once memory").add((function() {
                                    Y.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), C.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                var n = C.queue(this, e, t);
                                C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                            }))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                C.dequeue(this, e)
                            }))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1,
                                i = C.Deferred(),
                                s = this,
                                o = this.length,
                                a = function() {
                                    --r || i.resolveWith(s, [s])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Y.get(s[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                            return a(), i.promise(t)
                        }
                    });
                    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                        se = ["Top", "Right", "Bottom", "Left"],
                        oe = o.documentElement,
                        ae = function(e) {
                            return C.contains(e.ownerDocument, e)
                        },
                        le = {
                            composed: !0
                        };
                    oe.getRootNode && (ae = function(e) {
                        return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                    });
                    var ue = function(e, t) {
                            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
                        },
                        ce = function(e, t, n, r) {
                            var i, s, o = {};
                            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                            for (s in i = n.apply(e, r || []), t) e.style[s] = o[s];
                            return i
                        };

                    function he(e, t, n, r) {
                        var i, s, o = 20,
                            a = r ? function() {
                                return r.cur()
                            } : function() {
                                return C.css(e, t, "")
                            },
                            l = a(),
                            u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && ie.exec(C.css(e, t));
                        if (c && c[3] !== u) {
                            for (u = u || c[3], c = +(l /= 2) || 1; o--;) C.style(e, t, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
                            C.style(e, t, (c *= 2) + u), n = n || []
                        }
                        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
                    }
                    var de = {};

                    function fe(e) {
                        var t, n = e.ownerDocument,
                            r = e.nodeName,
                            i = de[r];
                        return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), de[r] = i, i)
                    }

                    function pe(e, t) {
                        for (var n, r, i = [], s = 0, o = e.length; s < o; s++)(r = e[s]).style && (n = r.style.display, t ? ("none" === n && (i[s] = Y.get(r, "display") || null, i[s] || (r.style.display = "")), "" === r.style.display && ue(r) && (i[s] = fe(r))) : "none" !== n && (i[s] = "none", Y.set(r, "display", n)));
                        for (s = 0; s < o; s++) null != i[s] && (e[s].style.display = i[s]);
                        return e
                    }
                    C.fn.extend({
                        show: function() {
                            return pe(this, !0)
                        },
                        hide: function() {
                            return pe(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                ue(this) ? C(this).show() : C(this).hide()
                            }))
                        }
                    });
                    var ge = /^(?:checkbox|radio)$/i,
                        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ve = /^$|^module$|\/(?:java|ecma)script/i,
                        ye = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""]
                        };

                    function be(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && I(e, t) ? C.merge([e], n) : n
                    }

                    function we(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
                    }
                    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
                    var _e, xe, Ce = /<|&#?\w+;/;

                    function Se(e, t, n, r, i) {
                        for (var s, o, a, l, u, c, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                            if ((s = e[f]) || 0 === s)
                                if ("object" === x(s)) C.merge(d, s.nodeType ? [s] : s);
                                else if (Ce.test(s)) {
                            for (o = o || h.appendChild(t.createElement("div")), a = (me.exec(s) || ["", ""])[1].toLowerCase(), o.innerHTML = (l = ye[a] || ye._default)[1] + C.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
                            C.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
                        } else d.push(t.createTextNode(s));
                        for (h.textContent = "", f = 0; s = d[f++];)
                            if (r && C.inArray(s, r) > -1) i && i.push(s);
                            else if (u = ae(s), o = be(h.appendChild(s), "script"), u && we(o), n)
                            for (c = 0; s = o[c++];) ve.test(s.type || "") && n.push(s);
                        return h
                    }
                    _e = o.createDocumentFragment().appendChild(o.createElement("div")), (xe = o.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), _e.appendChild(xe), v.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked, _e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
                    var Ee = /^key/,
                        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        ke = /^([^.]*)(?:\.(.+)|)/;

                    function Ae() {
                        return !0
                    }

                    function Ne() {
                        return !1
                    }

                    function Ie(e, t) {
                        return e === function() {
                            try {
                                return o.activeElement
                            } catch (e) {}
                        }() == ("focus" === t)
                    }

                    function Re(e, t, n, r, i, s) {
                        var o, a;
                        if ("object" == typeof t) {
                            for (a in "string" != typeof n && (r = r || n, n = void 0), t) Re(e, a, n, r, t[a], s);
                            return e
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
                        else if (!i) return e;
                        return 1 === s && (o = i, (i = function(e) {
                            return C().off(e), o.apply(this, arguments)
                        }).guid = o.guid || (o.guid = C.guid++)), e.each((function() {
                            C.event.add(this, t, i, r, n)
                        }))
                    }

                    function Oe(e, t, n) {
                        n ? (Y.set(e, t, !1), C.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var r, i, s = Y.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (s.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (s = l.call(arguments), Y.set(this, t, s), r = n(this, t), this[t](), s !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {}, s !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                                } else s.length && (Y.set(this, t, {
                                    value: C.event.trigger(C.extend(s[0], C.Event.prototype), s.slice(1), this)
                                }), e.stopImmediatePropagation())
                            }
                        })) : void 0 === Y.get(e, t) && C.event.add(e, t, Ae)
                    }
                    C.event = {
                        global: {},
                        add: function(e, t, n, r, i) {
                            var s, o, a, l, u, c, h, d, f, p, g, m = Y.get(e);
                            if (m)
                                for (n.handler && (n = (s = n).handler, i = s.selector), i && C.find.matchesSelector(oe, i), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                                    }), u = (t = (t || "").match(U) || [""]).length; u--;) f = g = (a = ke.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = C.event.special[f] || {}, h = C.event.special[f = (i ? h.delegateType : h.bindType) || f] || {}, c = C.extend({
                                    type: f,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && C.expr.match.needsContext.test(i),
                                    namespace: p.join(".")
                                }, s), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, r, p, o) || e.addEventListener && e.addEventListener(f, o)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[f] = !0)
                        },
                        remove: function(e, t, n, r, i) {
                            var s, o, a, l, u, c, h, d, f, p, g, m = Y.hasData(e) && Y.get(e);
                            if (m && (l = m.events)) {
                                for (u = (t = (t || "").match(U) || [""]).length; u--;)
                                    if (f = g = (a = ke.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                        for (h = C.event.special[f] || {}, d = l[f = (r ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(e, c));
                                        o && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
                                    } else
                                        for (f in l) C.event.remove(e, f + t[u], n, r, !0);
                                C.isEmptyObject(l) && Y.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            var t, n, r, i, s, o, a = C.event.fix(e),
                                l = new Array(arguments.length),
                                u = (Y.get(this, "events") || {})[a.type] || [],
                                c = C.event.special[a.type] || {};
                            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                                for (o = C.event.handlers.call(this, a, u), t = 0;
                                    (i = o[t++]) && !a.isPropagationStopped();)
                                    for (a.currentTarget = i.elem, n = 0;
                                        (s = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== s.namespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (r = ((C.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, a), a.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, i, s, o, a = [],
                                l = t.delegateCount,
                                u = e.target;
                            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                        for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length), o[i] && s.push(r);
                                        s.length && a.push({
                                            elem: u,
                                            handlers: s
                                        })
                                    } return u = this, l < t.length && a.push({
                                elem: u,
                                handlers: t.slice(l)
                            }), a
                        },
                        addProp: function(e, t) {
                            Object.defineProperty(C.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: y(t) ? function() {
                                    if (this.originalEvent) return t(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[e]
                                },
                                set: function(t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function(e) {
                            return e[C.expando] ? e : new C.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(e) {
                                    var t = this || e;
                                    return ge.test(t.type) && t.click && I(t, "input") && Oe(t, "click", Ae), !1
                                },
                                trigger: function(e) {
                                    var t = this || e;
                                    return ge.test(t.type) && t.click && I(t, "input") && Oe(t, "click"), !0
                                },
                                _default: function(e) {
                                    var t = e.target;
                                    return ge.test(t.type) && t.click && I(t, "input") && Y.get(t, "click") || I(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, C.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, C.Event = function(e, t) {
                        if (!(this instanceof C.Event)) return new C.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
                    }, C.Event.prototype = {
                        constructor: C.Event,
                        isDefaultPrevented: Ne,
                        isPropagationStopped: Ne,
                        isImmediatePropagationStopped: Ne,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, C.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function(e) {
                            var t = e.button;
                            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                        }
                    }, C.event.addProp), C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        C.event.special[e] = {
                            setup: function() {
                                return Oe(this, e, Ie), !1
                            },
                            trigger: function() {
                                return Oe(this, e), !0
                            },
                            delegateType: t
                        }
                    })), C.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                        C.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    s = e.handleObj;
                                return i && (i === r || C.contains(r, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), C.fn.extend({
                        on: function(e, t, n, r) {
                            return Re(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return Re(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof e) {
                                for (i in e) this.off(i, t, e[i]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each((function() {
                                C.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                        De = /<script|<style|<link/i,
                        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function Le(e, t) {
                        return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                    }

                    function Ue(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function He(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                    }

                    function Fe(e, t) {
                        var n, r, i, s, o, a, l, u;
                        if (1 === t.nodeType) {
                            if (Y.hasData(e) && (s = Y.access(e), o = Y.set(t, s), u = s.events))
                                for (i in delete o.handle, o.events = {}, u)
                                    for (n = 0, r = u[i].length; n < r; n++) C.event.add(t, i, u[i][n]);
                            J.hasData(e) && (a = J.access(e), l = C.extend({}, a), J.set(t, l))
                        }
                    }

                    function $e(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }

                    function ze(e, t, n, r) {
                        t = u.apply([], t);
                        var i, s, o, a, l, c, h = 0,
                            d = e.length,
                            f = d - 1,
                            p = t[0],
                            g = y(p);
                        if (g || d > 1 && "string" == typeof p && !v.checkClone && Me.test(p)) return e.each((function(i) {
                            var s = e.eq(i);
                            g && (t[0] = p.call(this, i, s.html())), ze(s, t, n, r)
                        }));
                        if (d && (s = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
                            for (a = (o = C.map(be(i, "script"), Ue)).length; h < d; h++) l = i, h !== f && (l = C.clone(l, !0, !0), a && C.merge(o, be(l, "script"))), n.call(e[h], l, h);
                            if (a)
                                for (c = o[o.length - 1].ownerDocument, C.map(o, He), h = 0; h < a; h++) ve.test((l = o[h]).type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                                    nonce: l.nonce || l.getAttribute("nonce")
                                }) : _(l.textContent.replace(je, ""), l, c))
                        }
                        return e
                    }

                    function Ve(e, t, n) {
                        for (var r, i = t ? C.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || C.cleanData(be(r)), r.parentNode && (n && ae(r) && we(be(r, "script")), r.parentNode.removeChild(r));
                        return e
                    }
                    C.extend({
                        htmlPrefilter: function(e) {
                            return e.replace(Pe, "<$1></$2>")
                        },
                        clone: function(e, t, n) {
                            var r, i, s, o, a = e.cloneNode(!0),
                                l = ae(e);
                            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                                for (o = be(a), r = 0, i = (s = be(e)).length; r < i; r++) $e(s[r], o[r]);
                            if (t)
                                if (n)
                                    for (s = s || be(e), o = o || be(a), r = 0, i = s.length; r < i; r++) Fe(s[r], o[r]);
                                else Fe(e, a);
                            return (o = be(a, "script")).length > 0 && we(o, !l && be(e, "script")), a
                        },
                        cleanData: function(e) {
                            for (var t, n, r, i = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
                                if (K(n)) {
                                    if (t = n[Y.expando]) {
                                        if (t.events)
                                            for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                        n[Y.expando] = void 0
                                    }
                                    n[J.expando] && (n[J.expando] = void 0)
                                }
                        }
                    }), C.fn.extend({
                        detach: function(e) {
                            return Ve(this, e, !0)
                        },
                        remove: function(e) {
                            return Ve(this, e)
                        },
                        text: function(e) {
                            return B(this, (function(e) {
                                return void 0 === e ? C.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function() {
                            return ze(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                            }))
                        },
                        prepend: function() {
                            return ze(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = Le(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return ze(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function() {
                            return ze(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                return C.clone(this, e, t)
                            }))
                        },
                        html: function(e) {
                            return B(this, (function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !De.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = C.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (i) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return ze(this, arguments, (function(t) {
                                var n = this.parentNode;
                                C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), C.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                        C.fn[e] = function(e) {
                            for (var n, r = [], i = C(e), s = i.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), C(i[o])[t](n), c.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var qe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                        Be = function(e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = n), t.getComputedStyle(e)
                        },
                        We = new RegExp(se.join("|"), "i");

                    function Qe(e, t, n) {
                        var r, i, s, o, a = e.style;
                        return (n = n || Be(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ae(e) || (o = C.style(e, t)), !v.pixelBoxStyles() && qe.test(o) && We.test(t) && (r = a.width, i = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, a.minWidth = i, a.maxWidth = s)), void 0 !== o ? o + "" : o
                    }

                    function Ze(e, t) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function e() {
                            if (c) {
                                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(u).appendChild(c);
                                var e = n.getComputedStyle(c);
                                r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", s = 12 === t(c.offsetWidth / 3), oe.removeChild(u), c = null
                            }
                        }

                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var r, i, s, a, l, u = o.createElement("div"),
                            c = o.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
                            boxSizingReliable: function() {
                                return e(), i
                            },
                            pixelBoxStyles: function() {
                                return e(), a
                            },
                            pixelPosition: function() {
                                return e(), r
                            },
                            reliableMarginLeft: function() {
                                return e(), l
                            },
                            scrollboxSize: function() {
                                return e(), s
                            }
                        }))
                    }();
                    var Ge = ["Webkit", "Moz", "ms"],
                        Ke = o.createElement("div").style,
                        Xe = {};

                    function Ye(e) {
                        return C.cssProps[e] || Xe[e] || (e in Ke ? e : Xe[e] = function(e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                                if ((e = Ge[n] + t) in Ke) return e
                        }(e) || e)
                    }
                    var Je = /^(none|table(?!-c[ea]).+)/,
                        et = /^--/,
                        tt = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        nt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function rt(e, t, n) {
                        var r = ie.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                    }

                    function it(e, t, n, r, i, s) {
                        var o = "width" === t ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; o < 4; o += 2) "margin" === n && (l += C.css(e, n + se[o], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + se[o], !0, i)), "margin" !== n && (l -= C.css(e, "border" + se[o] + "Width", !0, i))) : (l += C.css(e, "padding" + se[o], !0, i), "padding" !== n ? l += C.css(e, "border" + se[o] + "Width", !0, i) : a += C.css(e, "border" + se[o] + "Width", !0, i));
                        return !r && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
                    }

                    function st(e, t, n) {
                        var r = Be(e),
                            i = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                            s = i,
                            o = Qe(e, t, r),
                            a = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (qe.test(o)) {
                            if (!n) return o;
                            o = "auto"
                        }
                        return (!v.boxSizingReliable() && i || "auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (s = a in e) && (o = e[a])), (o = parseFloat(o) || 0) + it(e, t, n || (i ? "border" : "content"), s, r, o) + "px"
                    }

                    function ot(e, t, n, r, i) {
                        return new ot.prototype.init(e, t, n, r, i)
                    }
                    C.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = Qe(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i, s, o, a = G(t),
                                    l = et.test(t),
                                    u = e.style;
                                if (l || (t = Ye(a)), o = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : u[t];
                                "string" == (s = typeof n) && (i = ie.exec(n)) && i[1] && (n = he(e, t, i), s = "number"), null != n && n == n && ("number" !== s || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                            }
                        },
                        css: function(e, t, n, r) {
                            var i, s, o, a = G(t);
                            return et.test(t) || (t = Ye(a)), (o = C.cssHooks[t] || C.cssHooks[a]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = Qe(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (s = parseFloat(i), !0 === n || isFinite(s) ? s || 0 : i) : i
                        }
                    }), C.each(["height", "width"], (function(e, t) {
                        C.cssHooks[t] = {
                            get: function(e, n, r) {
                                if (n) return !Je.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? st(e, t, r) : ce(e, tt, (function() {
                                    return st(e, t, r)
                                }))
                            },
                            set: function(e, n, r) {
                                var i, s = Be(e),
                                    o = !v.scrollboxSize() && "absolute" === s.position,
                                    a = (o || r) && "border-box" === C.css(e, "boxSizing", !1, s),
                                    l = r ? it(e, t, r, a, s) : 0;
                                return a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - it(e, t, "border", !1, s) - .5)), l && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), rt(0, n, l)
                            }
                        }
                    })), C.cssHooks.marginLeft = Ze(v.reliableMarginLeft, (function(e, t) {
                        if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), C.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                        C.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + se[r] + t] = s[r] || s[r - 2] || s[0];
                                return i
                            }
                        }, "margin" !== e && (C.cssHooks[e + t].set = rt)
                    })), C.fn.extend({
                        css: function(e, t) {
                            return B(this, (function(e, t, n) {
                                var r, i, s = {},
                                    o = 0;
                                if (Array.isArray(t)) {
                                    for (r = Be(e), i = t.length; o < i; o++) s[t[o]] = C.css(e, t[o], !1, r);
                                    return s
                                }
                                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                            }), e, t, arguments.length > 1)
                        }
                    }), C.Tween = ot, (ot.prototype = {
                        constructor: ot,
                        init: function(e, t, n, r, i, s) {
                            this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (C.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = ot.propHooks[this.prop];
                            return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = ot.propHooks[this.prop];
                            return this.pos = t = this.options.duration ? C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
                        }
                    }).init.prototype = ot.prototype, (ot.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }).scrollTop = ot.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, C.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, C.fx = ot.prototype.init, C.fx.step = {};
                    var at, lt, ut = /^(?:toggle|show|hide)$/,
                        ct = /queueHooks$/;

                    function ht() {
                        lt && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ht) : n.setTimeout(ht, C.fx.interval), C.fx.tick())
                    }

                    function dt() {
                        return n.setTimeout((function() {
                            at = void 0
                        })), at = Date.now()
                    }

                    function ft(e, t) {
                        var n, r = 0,
                            i = {
                                height: e
                            };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = se[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i
                    }

                    function pt(e, t, n) {
                        for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), s = 0, o = i.length; s < o; s++)
                            if (r = i[s].call(n, t, e)) return r
                    }

                    function gt(e, t, n) {
                        var r, i, s = 0,
                            o = gt.prefilters.length,
                            a = C.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (i) return !1;
                                for (var t = at || dt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) u.tweens[s].run(r);
                                return a.notifyWith(e, [u, r, n]), r < 1 && o ? n : (o || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
                            },
                            u = a.promise({
                                elem: e,
                                props: C.extend({}, t),
                                opts: C.extend(!0, {
                                    specialEasing: {},
                                    easing: C.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: at || dt(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                    return u.tweens.push(r), r
                                },
                                stop: function(t) {
                                    var n = 0,
                                        r = t ? u.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                                }
                            }),
                            c = u.props;
                        for (function(e, t) {
                                var n, r, i, s, o;
                                for (n in e)
                                    if (i = t[r = G(n)], s = e[n], Array.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), (o = C.cssHooks[r]) && "expand" in o)
                                        for (n in s = o.expand(s), delete e[r], s) n in e || (e[n] = s[n], t[n] = i);
                                    else t[r] = i
                            }(c, u.opts.specialEasing); s < o; s++)
                            if (r = gt.prefilters[s].call(u, e, c, u.opts)) return y(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
                        return C.map(c, pt, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
                            elem: e,
                            anim: u,
                            queue: u.opts.queue
                        })), u
                    }
                    C.Animation = C.extend(gt, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return he(n.elem, e, ie.exec(t), n), n
                                }]
                            },
                            tweener: function(e, t) {
                                y(e) ? (t = e, e = ["*"]) : e = e.match(U);
                                for (var n, r = 0, i = e.length; r < i; r++)(gt.tweeners[n = e[r]] = gt.tweeners[n] || []).unshift(t)
                            },
                            prefilters: [function(e, t, n) {
                                var r, i, s, o, a, l, u, c, h = "width" in t || "height" in t,
                                    d = this,
                                    f = {},
                                    p = e.style,
                                    g = e.nodeType && ue(e),
                                    m = Y.get(e, "fxshow");
                                for (r in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                                        o.unqueued || a()
                                    }), o.unqueued++, d.always((function() {
                                        d.always((function() {
                                            o.unqueued--, C.queue(e, "fx").length || o.empty.fire()
                                        }))
                                    }))), t)
                                    if (ut.test(i = t[r])) {
                                        if (delete t[r], s = s || "toggle" === i, i === (g ? "hide" : "show")) {
                                            if ("show" !== i || !m || void 0 === m[r]) continue;
                                            g = !0
                                        }
                                        f[r] = m && m[r] || C.style(e, r)
                                    } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                                    for (r in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (pe([e], !0), u = e.style.display || u, c = C.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done((function() {
                                            p.display = u
                                        })), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                        }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                                        display: u
                                    }), s && (m.hidden = !g), g && pe([e], !0), d.done((function() {
                                        for (r in g || pe([e]), Y.remove(e, "fxshow"), f) C.style(e, r, f[r])
                                    }))), l = pt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(e, t) {
                                t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
                            }
                        }), C.speed = function(e, t, n) {
                            var r = e && "object" == typeof e ? C.extend({}, e) : {
                                complete: n || !n && t || y(e) && e,
                                duration: e,
                                easing: n && t || t && !y(t) && t
                            };
                            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                            }, r
                        }, C.fn.extend({
                            fadeTo: function(e, t, n, r) {
                                return this.filter(ue).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function(e, t, n, r) {
                                var i = C.isEmptyObject(e),
                                    s = C.speed(t, n, r),
                                    o = function() {
                                        var t = gt(this, C.extend({}, e), s);
                                        (i || Y.get(this, "finish")) && t.stop(!0)
                                    };
                                return o.finish = o, i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                            },
                            stop: function(e, t, n) {
                                var r = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        s = C.timers,
                                        o = Y.get(this);
                                    if (i) o[i] && o[i].stop && r(o[i]);
                                    else
                                        for (i in o) o[i] && o[i].stop && ct.test(i) && r(o[i]);
                                    for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                                    !t && n || C.dequeue(this, e)
                                }))
                            },
                            finish: function(e) {
                                return !1 !== e && (e = e || "fx"), this.each((function() {
                                    var t, n = Y.get(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        s = C.timers,
                                        o = r ? r.length : 0;
                                    for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), C.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = C.fn[t];
                            C.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i)
                            }
                        })), C.each({
                            slideDown: ft("show"),
                            slideUp: ft("hide"),
                            slideToggle: ft("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(e, t) {
                            C.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        })), C.timers = [], C.fx.tick = function() {
                            var e, t = 0,
                                n = C.timers;
                            for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || C.fx.stop(), at = void 0
                        }, C.fx.timer = function(e) {
                            C.timers.push(e), C.fx.start()
                        }, C.fx.interval = 13, C.fx.start = function() {
                            lt || (lt = !0, ht())
                        }, C.fx.stop = function() {
                            lt = null
                        }, C.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, C.fn.delay = function(e, t) {
                            return e = C.fx && C.fx.speeds[e] || e, this.queue(t = t || "fx", (function(t, r) {
                                var i = n.setTimeout(t, e);
                                r.stop = function() {
                                    n.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var e = o.createElement("input"),
                                t = o.createElement("select").appendChild(o.createElement("option"));
                            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                        }();
                    var mt, vt = C.expr.attrHandle;
                    C.fn.extend({
                        attr: function(e, t) {
                            return B(this, C.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each((function() {
                                C.removeAttr(this, e)
                            }))
                        }
                    }), C.extend({
                        attr: function(e, t, n) {
                            var r, i, s = e.nodeType;
                            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!v.radioValue && "radio" === t && I(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r = 0,
                                i = t && t.match(U);
                            if (i && 1 === e.nodeType)
                                for (; n = i[r++];) e.removeAttribute(n)
                        }
                    }), mt = {
                        set: function(e, t, n) {
                            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = vt[t] || C.find.attr;
                        vt[t] = function(e, t, r) {
                            var i, s, o = t.toLowerCase();
                            return r || (s = vt[o], vt[o] = i, i = null != n(e, t, r) ? o : null, vt[o] = s), i
                        }
                    }));
                    var yt = /^(?:input|select|textarea|button)$/i,
                        bt = /^(?:a|area)$/i;

                    function wt(e) {
                        return (e.match(U) || []).join(" ")
                    }

                    function _t(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }

                    function xt(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(U) || []
                    }
                    C.fn.extend({
                        prop: function(e, t) {
                            return B(this, C.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each((function() {
                                delete this[C.propFix[e] || e]
                            }))
                        }
                    }), C.extend({
                        prop: function(e, t, n) {
                            var r, i, s = e.nodeType;
                            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (i = C.propHooks[t = C.propFix[t] || t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = C.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), v.optSelected || (C.propHooks.selected = {
                        get: function(e) {
                            return null
                        },
                        set: function(e) {}
                    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        C.propFix[this.toLowerCase()] = this
                    })), C.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, s, o, a, l = 0;
                            if (y(e)) return this.each((function(t) {
                                C(this).addClass(e.call(this, t, _t(this)))
                            }));
                            if ((t = xt(e)).length)
                                for (; n = this[l++];)
                                    if (i = _t(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
                                        for (o = 0; s = t[o++];) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                                        i !== (a = wt(r)) && n.setAttribute("class", a)
                                    } return this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, s, o, a, l = 0;
                            if (y(e)) return this.each((function(t) {
                                C(this).removeClass(e.call(this, t, _t(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = xt(e)).length)
                                for (; n = this[l++];)
                                    if (i = _t(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
                                        for (o = 0; s = t[o++];)
                                            for (; r.indexOf(" " + s + " ") > -1;) r = r.replace(" " + s + " ", " ");
                                        i !== (a = wt(r)) && n.setAttribute("class", a)
                                    } return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e,
                                r = "string" === n || Array.isArray(e);
                            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
                                C(this).toggleClass(e.call(this, n, _t(this), t), t)
                            })) : this.each((function() {
                                var t, i, s, o;
                                if (r)
                                    for (i = 0, s = C(this), o = xt(e); t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                                else void 0 !== e && "boolean" !== n || ((t = _t(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + wt(_t(n)) + " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var Ct = /\r/g;
                    C.fn.extend({
                        val: function(e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = y(e), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) {
                                    return null == e ? "" : e + ""
                                }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            }))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0
                        }
                    }), C.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = C.find.attr(e, "value");
                                    return null != t ? t : wt(C.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t, n, r, i = e.options,
                                        s = e.selectedIndex,
                                        o = "select-one" === e.type,
                                        a = o ? null : [],
                                        l = o ? s + 1 : i.length;
                                    for (r = s < 0 ? l : o ? s : 0; r < l; r++)
                                        if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                                            if (t = C(n).val(), o) return t;
                                            a.push(t)
                                        } return a
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, s = C.makeArray(t), o = i.length; o--;)((r = i[o]).selected = C.inArray(C.valHooks.option.get(r), s) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), s
                                }
                            }
                        }
                    }), C.each(["radio", "checkbox"], (function() {
                        C.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                            }
                        }, v.checkOn || (C.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    })), v.focusin = "onfocusin" in n;
                    var St = /^(?:focusinfocus|focusoutblur)$/,
                        Et = function(e) {
                            e.stopPropagation()
                        };
                    C.extend(C.event, {
                        trigger: function(e, t, r, i) {
                            var s, a, l, u, c, h, d, f, g = [r || o],
                                m = p.call(e, "type") ? e.type : e,
                                v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = f = l = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                                if (!i && !d.noBubble && !b(r)) {
                                    for (St.test((u = d.delegateType || m) + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                                    l === (r.ownerDocument || o) && g.push(l.defaultView || l.parentWindow || n)
                                }
                                for (s = 0;
                                    (a = g[s++]) && !e.isPropagationStopped();) f = a, e.type = s > 1 ? u : d.bindType || m, (h = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && h.apply(a, t), (h = c && a[c]) && h.apply && K(a) && (e.result = h.apply(a, t), !1 === e.result && e.preventDefault());
                                return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !K(r) || c && y(r[m]) && !b(r) && ((l = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Et), r[m](), e.isPropagationStopped() && f.removeEventListener(m, Et), C.event.triggered = void 0, l && (r[c] = l)), e.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var r = C.extend(new C.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            C.event.trigger(r, null, t)
                        }
                    }), C.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                C.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return C.event.trigger(e, t, n, !0)
                        }
                    }), v.focusin || C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        var n = function(e) {
                            C.event.simulate(t, e.target, C.event.fix(e))
                        };
                        C.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this,
                                    i = Y.access(r, t);
                                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this,
                                    i = Y.access(r, t) - 1;
                                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
                            }
                        }
                    }));
                    var Tt = n.location,
                        kt = Date.now(),
                        At = /\?/;
                    C.parseXML = function(e) {
                        var t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new n.DOMParser).parseFromString(e, "text/xml")
                        } catch (r) {
                            t = void 0
                        }
                        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
                    };
                    var Nt = /\[\]$/,
                        It = /\r?\n/g,
                        Rt = /^(?:submit|button|image|reset|file)$/i,
                        Ot = /^(?:input|select|textarea|keygen)/i;

                    function Pt(e, t, n, r) {
                        var i;
                        if (Array.isArray(t)) C.each(t, (function(t, i) {
                            n || Nt.test(e) ? r(e, i) : Pt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== x(t)) r(e, t);
                        else
                            for (i in t) Pt(e + "[" + i + "]", t[i], n, r)
                    }
                    C.param = function(e, t) {
                        var n, r = [],
                            i = function(e, t) {
                                var n = y(t) ? t() : t;
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in e) Pt(n, e[n], t, i);
                        return r.join("&")
                    }, C.fn.extend({
                        serialize: function() {
                            return C.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var e = C.prop(this, "elements");
                                return e ? C.makeArray(e) : this
                            })).filter((function() {
                                var e = this.type;
                                return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !Rt.test(e) && (this.checked || !ge.test(e))
                            })).map((function(e, t) {
                                var n = C(this).val();
                                return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(It, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(It, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var Dt = /%20/g,
                        Mt = /#.*$/,
                        jt = /([?&])_=[^&]*/,
                        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Ut = /^(?:GET|HEAD)$/,
                        Ht = /^\/\//,
                        Ft = {},
                        $t = {},
                        zt = "*/".concat("*"),
                        Vt = o.createElement("a");

                    function qt(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var r, i = 0,
                                s = t.toLowerCase().match(U) || [];
                            if (y(n))
                                for (; r = s[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }

                    function Bt(e, t, n, r) {
                        var i = {},
                            s = e === $t;

                        function o(a) {
                            var l;
                            return i[a] = !0, C.each(e[a] || [], (function(e, a) {
                                var u = a(t, n, r);
                                return "string" != typeof u || s || i[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                            })), l
                        }
                        return o(t.dataTypes[0]) || !i["*"] && o("*")
                    }

                    function Wt(e, t) {
                        var n, r, i = C.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && C.extend(!0, e, r), e
                    }
                    Vt.href = Tt.href, C.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Tt.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": zt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": C.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
                        },
                        ajaxPrefilter: qt(Ft),
                        ajaxTransport: qt($t),
                        ajax: function(e, t) {
                            "object" == typeof e && (t = e, e = void 0);
                            var r, i, s, a, l, u, c, h, d, f, p = C.ajaxSetup({}, t = t || {}),
                                g = p.context || p,
                                m = p.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                                v = C.Deferred(),
                                y = C.Callbacks("once memory"),
                                b = p.statusCode || {},
                                w = {},
                                _ = {},
                                x = "canceled",
                                S = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (c) {
                                            if (!a)
                                                for (a = {}; t = Lt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = a[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? s : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        return null == c && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return null == c && (p.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (c) S.always(e[S.status]);
                                            else
                                                for (t in e) b[t] = [b[t], e[t]];
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || x;
                                        return r && r.abort(t), E(0, t), this
                                    }
                                };
                            if (v.promise(S), p.url = ((e || p.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(U) || [""], null == p.crossDomain) {
                                u = o.createElement("a");
                                try {
                                    u.href = p.url, u.href = u.href, p.crossDomain = Vt.protocol + "//" + Vt.host != u.protocol + "//" + u.host
                                } catch (T) {
                                    p.crossDomain = !0
                                }
                            }
                            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Bt(Ft, p, t, S), c) return S;
                            for (d in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ut.test(p.type), i = p.url.replace(Mt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Dt, "+")) : (f = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (At.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(jt, "$1"), f = (At.test(i) ? "&" : "?") + "_=" + kt++ + f), p.url = i + f), p.ifModified && (C.lastModified[i] && S.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
                            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();
                            if (x = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = Bt($t, p, t, S)) {
                                if (S.readyState = 1, h && m.trigger("ajaxSend", [S, p]), c) return S;
                                p.async && p.timeout > 0 && (l = n.setTimeout((function() {
                                    S.abort("timeout")
                                }), p.timeout));
                                try {
                                    c = !1, r.send(w, E)
                                } catch (T) {
                                    if (c) throw T;
                                    E(-1, T)
                                }
                            } else E(-1, "No Transport");

                            function E(e, t, o, a) {
                                var u, d, f, w, _, x = t;
                                c || (c = !0, l && n.clearTimeout(l), r = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, o && (w = function(e, t, n) {
                                    for (var r, i, s, o, a = e.contents, l = e.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in a)
                                            if (a[i] && a[i].test(r)) {
                                                l.unshift(i);
                                                break
                                            } if (l[0] in n) s = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                                s = i;
                                                break
                                            }
                                            o || (o = i)
                                        }
                                        s = s || o
                                    }
                                    if (s) return s !== l[0] && l.unshift(s), n[s]
                                }(p, S, o)), w = function(e, t, n, r) {
                                    var i, s, o, a, l, u = {},
                                        c = e.dataTypes.slice();
                                    if (c[1])
                                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                                    for (s = c.shift(); s;)
                                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                                            if ("*" === s) s = l;
                                            else if ("*" !== l && l !== s) {
                                        if (!(o = u[l + " " + s] || u["* " + s]))
                                            for (i in u)
                                                if ((a = i.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                    !0 === o ? o = u[i] : !0 !== u[i] && (s = a[0], c.unshift(a[1]));
                                                    break
                                                } if (!0 !== o)
                                            if (o && e.throws) t = o(t);
                                            else try {
                                                t = o(t)
                                            } catch (T) {
                                                return {
                                                    state: "parsererror",
                                                    error: o ? T : "No conversion from " + l + " to " + s
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(p, w, S, u), u ? (p.ifModified && ((_ = S.getResponseHeader("Last-Modified")) && (C.lastModified[i] = _), (_ = S.getResponseHeader("etag")) && (C.etag[i] = _)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, d = w.data, u = !(f = w.error))) : (f = x, !e && x || (x = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || x) + "", u ? v.resolveWith(g, [d, x, S]) : v.rejectWith(g, [S, x, f]), S.statusCode(b), b = void 0, h && m.trigger(u ? "ajaxSuccess" : "ajaxError", [S, p, u ? d : f]), y.fireWith(g, [S, x]), h && (m.trigger("ajaxComplete", [S, p]), --C.active || C.event.trigger("ajaxStop")))
                            }
                            return S
                        },
                        getJSON: function(e, t, n) {
                            return C.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return C.get(e, void 0, t, "script")
                        }
                    }), C.each(["get", "post"], (function(e, t) {
                        C[t] = function(e, n, r, i) {
                            return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            }, C.isPlainObject(e) && e))
                        }
                    })), C._evalUrl = function(e, t) {
                        return C.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                C.globalEval(e, t)
                            }
                        })
                    }, C.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this
                        },
                        wrapInner: function(e) {
                            return y(e) ? this.each((function(t) {
                                C(this).wrapInner(e.call(this, t))
                            })) : this.each((function() {
                                var t = C(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function(e) {
                            var t = y(e);
                            return this.each((function(n) {
                                C(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each((function() {
                                C(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), C.expr.pseudos.hidden = function(e) {
                        return !C.expr.pseudos.visible(e)
                    }, C.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }, C.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Qt = {
                            0: 200,
                            1223: 204
                        },
                        Zt = C.ajaxSettings.xhr();
                    v.cors = !!Zt && "withCredentials" in Zt, v.ajax = Zt = !!Zt, C.ajaxTransport((function(e) {
                        var t, r;
                        if (v.cors || Zt && !e.crossDomain) return {
                            send: function(i, s) {
                                var o, a = e.xhr();
                                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(o, i[o]);
                                t = function(e) {
                                    return function() {
                                        t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                                    4 === a.readyState && n.setTimeout((function() {
                                        t && r()
                                    }))
                                }, t = t("abort");
                                try {
                                    a.send(e.hasContent && e.data || null)
                                } catch (l) {
                                    if (t) throw l
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                    })), C.ajaxPrefilter((function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    })), C.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return C.globalEval(e), e
                            }
                        }
                    }), C.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), C.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function(r, i) {
                                t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                                }), o.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var Gt, Kt = [],
                        Xt = /(=)\?(?=&|$)|\?\?/;
                    C.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = Kt.pop() || C.expando + "_" + kt++;
                            return this[e] = !0, e
                        }
                    }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
                        var i, s, o, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                            return o || C.error(i + " was not called"), o[0]
                        }, e.dataTypes[0] = "json", s = n[i], n[i] = function() {
                            o = arguments
                        }, r.always((function() {
                            void 0 === s ? C(n).removeProp(i) : n[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), o && y(s) && s(o[0]), o = s = void 0
                        })), "script"
                    })), v.createHTMLDocument = ((Gt = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), C.parseHTML = function(e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(r)) : t = o), s = !n && [], (i = R.exec(e)) ? [t.createElement(i[1])] : (i = Se([e], t, s), s && s.length && C(s).remove(), C.merge([], i.childNodes)));
                        var r, i, s
                    }, C.fn.load = function(e, t, n) {
                        var r, i, s, o = this,
                            a = e.indexOf(" ");
                        return a > -1 && (r = wt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && C.ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                            s = arguments, o.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                        })).always(n && function(e, t) {
                            o.each((function() {
                                n.apply(this, s || [e.responseText, t, e])
                            }))
                        }), this
                    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        C.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })), C.expr.pseudos.animated = function(e) {
                        return C.grep(C.timers, (function(t) {
                            return e === t.elem
                        })).length
                    }, C.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, s, o, a, l, u = C.css(e, "position"),
                                c = C(e),
                                h = {};
                            "static" === u && (e.style.position = "relative"), a = c.offset(), s = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (r = c.position()).top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
                        }
                    }, C.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                C.offset.setOffset(this, e, t)
                            }));
                            var t, n, r = this[0];
                            return r ? r.getClientRects().length ? {
                                top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
                                left: t.left + n.pageXOffset
                            } : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                    e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - i.top - C.css(r, "marginTop", !0),
                                    left: t.left - i.left - C.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                                return e || oe
                            }))
                        }
                    }), C.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        C.fn[e] = function(r) {
                            return B(this, (function(e, r, i) {
                                var s;
                                if (b(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === i) return s ? s[t] : e[r];
                                s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i
                            }), e, r, arguments.length)
                        }
                    })), C.each(["top", "left"], (function(e, t) {
                        C.cssHooks[t] = Ze(v.pixelPosition, (function(e, n) {
                            if (n) return n = Qe(e, t), qe.test(n) ? C(e).position()[t] + "px" : n
                        }))
                    })), C.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                        C.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, r) {
                            C.fn[r] = function(i, s) {
                                var o = arguments.length && (n || "boolean" != typeof i),
                                    a = n || (!0 === i || !0 === s ? "margin" : "border");
                                return B(this, (function(t, n, i) {
                                    var s;
                                    return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                                }), t, o ? i : void 0, o)
                            }
                        }))
                    })), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                        C.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    })), C.fn.extend({
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), C.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        }
                    }), C.proxy = function(e, t) {
                        var n, r, i;
                        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = l.call(arguments, 2), (i = function() {
                            return e.apply(t || this, r.concat(l.call(arguments)))
                        }).guid = e.guid = e.guid || C.guid++, i
                    }, C.holdReady = function(e) {
                        e ? C.readyWait++ : C.ready(!0)
                    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = I, C.isFunction = y, C.isWindow = b, C.camelCase = G, C.type = x, C.now = Date.now, C.isNumeric = function(e) {
                        var t = C.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, void 0 === (r = (function() {
                        return C
                    }).apply(t, [])) || (e.exports = r);
                    var Yt = n.jQuery,
                        Jt = n.$;
                    return C.noConflict = function(e) {
                        return n.$ === C && (n.$ = Jt), e && n.jQuery === C && (n.jQuery = Yt), C
                    }, i || (n.jQuery = n.$ = C), C
                }))
            },
            crnd: function(e, t) {
                function n(e) {
                    return Promise.resolve().then((function() {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }))
                }
                n.keys = function() {
                    return []
                }, n.resolve = n, e.exports = n, n.id = "crnd"
            },
            zUnb: function(e, t, n) {
                "use strict";

                function r(e) {
                    return "function" == typeof e
                }
                n.r(t);
                let i = !1;
                const s = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(e) {
                        if (e) {
                            const e = new Error;
                            console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                        } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                        i = e
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return i
                    }
                };

                function o(e) {
                    setTimeout(() => {
                        throw e
                    }, 0)
                }
                const a = {
                        closed: !0,
                        next(e) {},
                        error(e) {
                            if (s.useDeprecatedSynchronousErrorHandling) throw e;
                            o(e)
                        },
                        complete() {}
                    },
                    l = (() => Array.isArray || (e => e && "number" == typeof e.length))();

                function u(e) {
                    return null !== e && "object" == typeof e
                }
                const c = (() => {
                    function e(e) {
                        return Error.call(this), this.message = e ? `${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = e, this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                })();
                let h = (() => {
                    class e {
                        constructor(e) {
                            this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e)
                        }
                        unsubscribe() {
                            let t;
                            if (this.closed) return;
                            let {
                                _parentOrParents: n,
                                _unsubscribe: i,
                                _subscriptions: s
                            } = this;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                            else if (null !== n)
                                for (let e = 0; e < n.length; ++e) n[e].remove(this);
                            if (r(i)) try {
                                i.call(this)
                            } catch (o) {
                                t = o instanceof c ? d(o.errors) : [o]
                            }
                            if (l(s)) {
                                let e = -1,
                                    n = s.length;
                                for (; ++e < n;) {
                                    const n = s[e];
                                    if (u(n)) try {
                                        n.unsubscribe()
                                    } catch (o) {
                                        t = t || [], o instanceof c ? t = t.concat(d(o.errors)) : t.push(o)
                                    }
                                }
                            }
                            if (t) throw new c(t)
                        }
                        add(t) {
                            let n = t;
                            if (!t) return e.EMPTY;
                            switch (typeof t) {
                                case "function":
                                    n = new e(t);
                                case "object":
                                    if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                    if (this.closed) return n.unsubscribe(), n;
                                    if (!(n instanceof e)) {
                                        const t = n;
                                        (n = new e)._subscriptions = [t]
                                    }
                                    break;
                                default:
                                    throw new Error("unrecognized teardown " + t + " added to Subscription.")
                            }
                            let {
                                _parentOrParents: r
                            } = n;
                            if (null === r) n._parentOrParents = this;
                            else if (r instanceof e) {
                                if (r === this) return n;
                                n._parentOrParents = [r, this]
                            } else {
                                if (-1 !== r.indexOf(this)) return n;
                                r.push(this)
                            }
                            const i = this._subscriptions;
                            return null === i ? this._subscriptions = [n] : i.push(n), n
                        }
                        remove(e) {
                            const t = this._subscriptions;
                            if (t) {
                                const n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                            }
                        }
                    }
                    return e.EMPTY = function(e) {
                        return e.closed = !0, e
                    }(new e), e
                })();

                function d(e) {
                    return e.reduce((e, t) => e.concat(t instanceof c ? t.errors : t), [])
                }
                const f = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
                class p extends h {
                    constructor(e, t, n) {
                        switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                            case 0:
                                this.destination = a;
                                break;
                            case 1:
                                if (!e) {
                                    this.destination = a;
                                    break
                                }
                                if ("object" == typeof e) {
                                    e instanceof p ? (this.syncErrorThrowable = e.syncErrorThrowable, this.destination = e, e.add(this)) : (this.syncErrorThrowable = !0, this.destination = new g(this, e));
                                    break
                                }
                                default:
                                    this.syncErrorThrowable = !0, this.destination = new g(this, e, t, n)
                        }
                    } [f]() {
                        return this
                    }
                    static create(e, t, n) {
                        const r = new p(e, t, n);
                        return r.syncErrorThrowable = !1, r
                    }
                    next(e) {
                        this.isStopped || this._next(e)
                    }
                    error(e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }
                    complete() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }
                    unsubscribe() {
                        this.closed || (this.isStopped = !0, super.unsubscribe())
                    }
                    _next(e) {
                        this.destination.next(e)
                    }
                    _error(e) {
                        this.destination.error(e), this.unsubscribe()
                    }
                    _complete() {
                        this.destination.complete(), this.unsubscribe()
                    }
                    _unsubscribeAndRecycle() {
                        const {
                            _parentOrParents: e
                        } = this;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                    }
                }
                class g extends p {
                    constructor(e, t, n, i) {
                        let s;
                        super(), this._parentSubscriber = e;
                        let o = this;
                        r(t) ? s = t : t && (s = t.next, n = t.error, i = t.complete, t !== a && (r((o = Object.create(t)).unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = s, this._error = n, this._complete = i
                    }
                    next(e) {
                        if (!this.isStopped && this._next) {
                            const {
                                _parentSubscriber: t
                            } = this;
                            s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                        }
                    }
                    error(e) {
                        if (!this.isStopped) {
                            const {
                                _parentSubscriber: t
                            } = this, {
                                useDeprecatedSynchronousErrorHandling: n
                            } = s;
                            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                            else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : o(e), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw e;
                                o(e)
                            }
                        }
                    }
                    complete() {
                        if (!this.isStopped) {
                            const {
                                _parentSubscriber: e
                            } = this;
                            if (this._complete) {
                                const t = () => this._complete.call(this._context);
                                s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, t), this.unsubscribe()) : (this.__tryOrUnsub(t), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }
                    __tryOrUnsub(e, t) {
                        try {
                            e.call(this._context, t)
                        } catch (n) {
                            if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw n;
                            o(n)
                        }
                    }
                    __tryOrSetError(e, t, n) {
                        if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            t.call(this._context, n)
                        } catch (r) {
                            return s.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (o(r), !0)
                        }
                        return !1
                    }
                    _unsubscribe() {
                        const {
                            _parentSubscriber: e
                        } = this;
                        this._context = null, this._parentSubscriber = null, e.unsubscribe()
                    }
                }
                const m = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

                function v() {}

                function y(...e) {
                    return b(e)
                }

                function b(e) {
                    return e ? 1 === e.length ? e[0] : function(t) {
                        return e.reduce((e, t) => t(e), t)
                    } : v
                }
                let w = (() => {
                    class e {
                        constructor(e) {
                            this._isScalar = !1, e && (this._subscribe = e)
                        }
                        lift(t) {
                            const n = new e;
                            return n.source = this, n.operator = t, n
                        }
                        subscribe(e, t, n) {
                            const {
                                operator: r
                            } = this, i = function(e, t, n) {
                                if (e) {
                                    if (e instanceof p) return e;
                                    if (e[f]) return e[f]()
                                }
                                return e || t || n ? new p(e, t, n) : new p(a)
                            }(e, t, n);
                            if (i.add(r ? r.call(i, this.source) : this.source || s.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), s.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                            return i
                        }
                        _trySubscribe(e) {
                            try {
                                return this._subscribe(e)
                            } catch (t) {
                                s.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                                    function(e) {
                                        for (; e;) {
                                            const {
                                                closed: t,
                                                destination: n,
                                                isStopped: r
                                            } = e;
                                            if (t || r) return !1;
                                            e = n && n instanceof p ? n : null
                                        }
                                        return !0
                                    }(e) ? e.error(t) : console.warn(t)
                            }
                        }
                        forEach(e, t) {
                            return new(t = _(t))((t, n) => {
                                let r;
                                r = this.subscribe(t => {
                                    try {
                                        e(t)
                                    } catch (i) {
                                        n(i), r && r.unsubscribe()
                                    }
                                }, n, t)
                            })
                        }
                        _subscribe(e) {
                            const {
                                source: t
                            } = this;
                            return t && t.subscribe(e)
                        } [m]() {
                            return this
                        }
                        pipe(...e) {
                            return 0 === e.length ? this : b(e)(this)
                        }
                        toPromise(e) {
                            return new(e = _(e))((e, t) => {
                                let n;
                                this.subscribe(e => n = e, e => t(e), () => e(n))
                            })
                        }
                    }
                    return e.create = t => new e(t), e
                })();

                function _(e) {
                    if (e || (e = s.Promise || Promise), !e) throw new Error("no Promise impl found");
                    return e
                }
                const x = (() => {
                    function e() {
                        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                })();
                class C extends h {
                    constructor(e, t) {
                        super(), this.subject = e, this.subscriber = t, this.closed = !1
                    }
                    unsubscribe() {
                        if (this.closed) return;
                        this.closed = !0;
                        const e = this.subject,
                            t = e.observers;
                        if (this.subject = null, !t || 0 === t.length || e.isStopped || e.closed) return;
                        const n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                    }
                }
                class S extends p {
                    constructor(e) {
                        super(e), this.destination = e
                    }
                }
                let E = (() => {
                    class e extends w {
                        constructor() {
                            super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                        } [f]() {
                            return new S(this)
                        }
                        lift(e) {
                            const t = new T(this, this);
                            return t.operator = e, t
                        }
                        next(e) {
                            if (this.closed) throw new x;
                            if (!this.isStopped) {
                                const {
                                    observers: t
                                } = this, n = t.length, r = t.slice();
                                for (let i = 0; i < n; i++) r[i].next(e)
                            }
                        }
                        error(e) {
                            if (this.closed) throw new x;
                            this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                            const {
                                observers: t
                            } = this, n = t.length, r = t.slice();
                            for (let i = 0; i < n; i++) r[i].error(e);
                            this.observers.length = 0
                        }
                        complete() {
                            if (this.closed) throw new x;
                            this.isStopped = !0;
                            const {
                                observers: e
                            } = this, t = e.length, n = e.slice();
                            for (let r = 0; r < t; r++) n[r].complete();
                            this.observers.length = 0
                        }
                        unsubscribe() {
                            this.isStopped = !0, this.closed = !0, this.observers = null
                        }
                        _trySubscribe(e) {
                            if (this.closed) throw new x;
                            return super._trySubscribe(e)
                        }
                        _subscribe(e) {
                            if (this.closed) throw new x;
                            return this.hasError ? (e.error(this.thrownError), h.EMPTY) : this.isStopped ? (e.complete(), h.EMPTY) : (this.observers.push(e), new C(this, e))
                        }
                        asObservable() {
                            const e = new w;
                            return e.source = this, e
                        }
                    }
                    return e.create = (e, t) => new T(e, t), e
                })();
                class T extends E {
                    constructor(e, t) {
                        super(), this.destination = e, this.source = t
                    }
                    next(e) {
                        const {
                            destination: t
                        } = this;
                        t && t.next && t.next(e)
                    }
                    error(e) {
                        const {
                            destination: t
                        } = this;
                        t && t.error && this.destination.error(e)
                    }
                    complete() {
                        const {
                            destination: e
                        } = this;
                        e && e.complete && this.destination.complete()
                    }
                    _subscribe(e) {
                        const {
                            source: t
                        } = this;
                        return t ? this.source.subscribe(e) : h.EMPTY
                    }
                }

                function k(e) {
                    return e && "function" == typeof e.schedule
                }
                class A extends p {
                    constructor(e, t, n) {
                        super(), this.parent = e, this.outerValue = t, this.outerIndex = n, this.index = 0
                    }
                    _next(e) {
                        this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
                    }
                    _error(e) {
                        this.parent.notifyError(e, this), this.unsubscribe()
                    }
                    _complete() {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }
                }
                const N = e => t => {
                    for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                    t.complete()
                };

                function I() {
                    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
                }
                const R = I(),
                    O = e => e && "number" == typeof e.length && "function" != typeof e;

                function P(e) {
                    return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
                }
                const D = e => {
                    if (e && "function" == typeof e[m]) return (e => t => {
                        const n = e[m]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(t)
                    })(e);
                    if (O(e)) return N(e);
                    if (P(e)) return (e => t => (e.then(e => {
                        t.closed || (t.next(e), t.complete())
                    }, e => t.error(e)).then(null, o), t))(e);
                    if (e && "function" == typeof e[R]) return (e => t => {
                        const n = e[R]();
                        for (;;) {
                            const e = n.next();
                            if (e.done) {
                                t.complete();
                                break
                            }
                            if (t.next(e.value), t.closed) break
                        }
                        return "function" == typeof n.return && t.add(() => {
                            n.return && n.return()
                        }), t
                    })(e); {
                        const t = u(e) ? "an invalid object" : `'${e}'`;
                        throw new TypeError(`You provided ${t} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
                    }
                };

                function M(e, t, n, r, i = new A(e, n, r)) {
                    if (!i.closed) return t instanceof w ? t.subscribe(i) : D(t)(i)
                }
                class j extends p {
                    notifyNext(e, t, n, r, i) {
                        this.destination.next(t)
                    }
                    notifyError(e, t) {
                        this.destination.error(e)
                    }
                    notifyComplete(e) {
                        this.destination.complete()
                    }
                }

                function L(e, t) {
                    return function(n) {
                        if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                        return n.lift(new U(e, t))
                    }
                }
                class U {
                    constructor(e, t) {
                        this.project = e, this.thisArg = t
                    }
                    call(e, t) {
                        return t.subscribe(new H(e, this.project, this.thisArg))
                    }
                }
                class H extends p {
                    constructor(e, t, n) {
                        super(e), this.project = t, this.count = 0, this.thisArg = n || this
                    }
                    _next(e) {
                        let t;
                        try {
                            t = this.project.call(this.thisArg, e, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(t)
                    }
                }

                function F(e, t) {
                    return new w(n => {
                        const r = new h;
                        let i = 0;
                        return r.add(t.schedule((function() {
                            i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete()
                        }))), r
                    })
                }

                function $(e, t) {
                    return t ? function(e, t) {
                        if (null != e) {
                            if (function(e) {
                                    return e && "function" == typeof e[m]
                                }(e)) return function(e, t) {
                                return new w(n => {
                                    const r = new h;
                                    return r.add(t.schedule(() => {
                                        const i = e[m]();
                                        r.add(i.subscribe({
                                            next(e) {
                                                r.add(t.schedule(() => n.next(e)))
                                            },
                                            error(e) {
                                                r.add(t.schedule(() => n.error(e)))
                                            },
                                            complete() {
                                                r.add(t.schedule(() => n.complete()))
                                            }
                                        }))
                                    })), r
                                })
                            }(e, t);
                            if (P(e)) return function(e, t) {
                                return new w(n => {
                                    const r = new h;
                                    return r.add(t.schedule(() => e.then(e => {
                                        r.add(t.schedule(() => {
                                            n.next(e), r.add(t.schedule(() => n.complete()))
                                        }))
                                    }, e => {
                                        r.add(t.schedule(() => n.error(e)))
                                    }))), r
                                })
                            }(e, t);
                            if (O(e)) return F(e, t);
                            if (function(e) {
                                    return e && "function" == typeof e[R]
                                }(e) || "string" == typeof e) return function(e, t) {
                                if (!e) throw new Error("Iterable cannot be null");
                                return new w(n => {
                                    const r = new h;
                                    let i;
                                    return r.add(() => {
                                        i && "function" == typeof i.return && i.return()
                                    }), r.add(t.schedule(() => {
                                        i = e[R](), r.add(t.schedule((function() {
                                            if (n.closed) return;
                                            let e, t;
                                            try {
                                                const n = i.next();
                                                e = n.value, t = n.done
                                            } catch (r) {
                                                return void n.error(r)
                                            }
                                            t ? n.complete() : (n.next(e), this.schedule())
                                        })))
                                    })), r
                                })
                            }(e, t)
                        }
                        throw new TypeError((null !== e && typeof e || e) + " is not observable")
                    }(e, t) : e instanceof w ? e : new w(D(e))
                }

                function z(e, t, n = Number.POSITIVE_INFINITY) {
                    return "function" == typeof t ? r => r.pipe(z((n, r) => $(e(n, r)).pipe(L((e, i) => t(n, e, r, i))), n)) : ("number" == typeof t && (n = t), t => t.lift(new V(e, n)))
                }
                class V {
                    constructor(e, t = Number.POSITIVE_INFINITY) {
                        this.project = e, this.concurrent = t
                    }
                    call(e, t) {
                        return t.subscribe(new q(e, this.project, this.concurrent))
                    }
                }
                class q extends j {
                    constructor(e, t, n = Number.POSITIVE_INFINITY) {
                        super(e), this.project = t, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                    }
                    _next(e) {
                        this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                    }
                    _tryNext(e) {
                        let t;
                        const n = this.index++;
                        try {
                            t = this.project(e, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.active++, this._innerSub(t, e, n)
                    }
                    _innerSub(e, t, n) {
                        const r = new A(this, void 0, void 0);
                        this.destination.add(r), M(this, e, t, n, r)
                    }
                    _complete() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }
                    notifyNext(e, t, n, r, i) {
                        this.destination.next(t)
                    }
                    notifyComplete(e) {
                        const t = this.buffer;
                        this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }
                }

                function B(e) {
                    return e
                }

                function W(e = Number.POSITIVE_INFINITY) {
                    return z(B, e)
                }

                function Q(e, t) {
                    return t ? F(e, t) : new w(N(e))
                }

                function Z() {
                    return function(e) {
                        return e.lift(new G(e))
                    }
                }
                class G {
                    constructor(e) {
                        this.connectable = e
                    }
                    call(e, t) {
                        const {
                            connectable: n
                        } = this;
                        n._refCount++;
                        const r = new K(e, n),
                            i = t.subscribe(r);
                        return r.closed || (r.connection = n.connect()), i
                    }
                }
                class K extends p {
                    constructor(e, t) {
                        super(e), this.connectable = t
                    }
                    _unsubscribe() {
                        const {
                            connectable: e
                        } = this;
                        if (!e) return void(this.connection = null);
                        this.connectable = null;
                        const t = e._refCount;
                        if (t <= 0) return void(this.connection = null);
                        if (e._refCount = t - 1, t > 1) return void(this.connection = null);
                        const {
                            connection: n
                        } = this, r = e._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                }
                class X extends w {
                    constructor(e, t) {
                        super(), this.source = e, this.subjectFactory = t, this._refCount = 0, this._isComplete = !1
                    }
                    _subscribe(e) {
                        return this.getSubject().subscribe(e)
                    }
                    getSubject() {
                        const e = this._subject;
                        return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }
                    connect() {
                        let e = this._connection;
                        return e || (this._isComplete = !1, (e = this._connection = new h).add(this.source.subscribe(new J(this.getSubject(), this))), e.closed && (this._connection = null, e = h.EMPTY)), e
                    }
                    refCount() {
                        return Z()(this)
                    }
                }
                const Y = (() => {
                    const e = X.prototype;
                    return {
                        operator: {
                            value: null
                        },
                        _refCount: {
                            value: 0,
                            writable: !0
                        },
                        _subject: {
                            value: null,
                            writable: !0
                        },
                        _connection: {
                            value: null,
                            writable: !0
                        },
                        _subscribe: {
                            value: e._subscribe
                        },
                        _isComplete: {
                            value: e._isComplete,
                            writable: !0
                        },
                        getSubject: {
                            value: e.getSubject
                        },
                        connect: {
                            value: e.connect
                        },
                        refCount: {
                            value: e.refCount
                        }
                    }
                })();
                class J extends S {
                    constructor(e, t) {
                        super(e), this.connectable = t
                    }
                    _error(e) {
                        this._unsubscribe(), super._error(e)
                    }
                    _complete() {
                        this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                    }
                    _unsubscribe() {
                        const e = this.connectable;
                        if (e) {
                            this.connectable = null;
                            const t = e._connection;
                            e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                        }
                    }
                }

                function ee() {
                    return new E
                }
                const te = "__parameters__";

                function ne(e, t, n) {
                    const r = function(e) {
                        return function(...t) {
                            if (e) {
                                const n = e(...t);
                                for (const e in n) this[e] = n[e]
                            }
                        }
                    }(t);

                    function i(...e) {
                        if (this instanceof i) return r.apply(this, e), this;
                        const t = new i(...e);
                        return n.annotation = t, n;

                        function n(e, n, r) {
                            const i = e.hasOwnProperty(te) ? e[te] : Object.defineProperty(e, te, {
                                value: []
                            })[te];
                            for (; i.length <= r;) i.push(null);
                            return (i[r] = i[r] || []).push(t), e
                        }
                    }
                    return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
                }
                const re = ne("Inject", e => ({
                        token: e
                    })),
                    ie = ne("Optional"),
                    se = ne("Self"),
                    oe = ne("SkipSelf");
                var ae = function(e) {
                    return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
                }({});

                function le(e) {
                    for (let t in e)
                        if (e[t] === le) return t;
                    throw Error("Could not find renamed property on target object.")
                }

                function ue(e) {
                    return {
                        token: e.token,
                        providedIn: e.providedIn || null,
                        factory: e.factory,
                        value: void 0
                    }
                }
                const ce = ue;

                function he(e) {
                    const t = e[de];
                    return t && t.token === e ? t : null
                }
                const de = le({
                    ngInjectableDef: le
                });

                function fe(e) {
                    if ("string" == typeof e) return e;
                    if (e instanceof Array) return "[" + e.map(fe).join(", ") + "]";
                    if (null == e) return "" + e;
                    if (e.overriddenName) return `${e.overriddenName}`;
                    if (e.name) return `${e.name}`;
                    const t = e.toString();
                    if (null == t) return "" + t;
                    const n = t.indexOf("\n");
                    return -1 === n ? t : t.substring(0, n)
                }
                const pe = le({
                    __forward_ref__: le
                });

                function ge(e) {
                    return e.__forward_ref__ = ge, e.toString = function() {
                        return fe(this())
                    }, e
                }

                function me(e) {
                    const t = e;
                    return "function" == typeof t && t.hasOwnProperty(pe) && t.__forward_ref__ === ge ? t() : e
                }
                const ve = "undefined" != typeof globalThis && globalThis,
                    ye = "undefined" != typeof window && window,
                    be = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                    we = "undefined" != typeof global && global,
                    _e = ve || we || ye || be;
                class xe {
                    constructor(e, t) {
                        this._desc = e, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof t ? this.__NG_ELEMENT_ID__ = t : void 0 !== t && (this.ngInjectableDef = ue({
                            token: this,
                            providedIn: t.providedIn || "root",
                            factory: t.factory
                        }))
                    }
                    toString() {
                        return `InjectionToken ${this._desc}`
                    }
                }
                const Ce = new xe("INJECTOR", -1),
                    Se = new Object,
                    Ee = "ngTempTokenPath",
                    Te = "ngTokenPath",
                    ke = /\n/gm,
                    Ae = "\u0275",
                    Ne = "__source",
                    Ie = le({
                        provide: String,
                        useValue: le
                    });
                let Re, Oe = void 0;

                function Pe(e) {
                    const t = Oe;
                    return Oe = e, t
                }

                function De(e, t = ae.Default) {
                    if (void 0 === Oe) throw new Error("inject() must be called from an injection context");
                    return null === Oe ? function(e, t, n) {
                        const r = he(e);
                        if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                        if (n & ae.Optional) return null;
                        throw new Error(`Injector: NOT_FOUND [${fe(e)}]`)
                    }(e, 0, t) : Oe.get(e, t & ae.Optional ? null : void 0, t)
                }

                function Me(e, t = ae.Default) {
                    return (Re || De)(e, t)
                }
                class je {
                    get(e, t = Se) {
                        if (t === Se) {
                            const t = new Error(`NullInjectorError: No provider for ${fe(e)}!`);
                            throw t.name = "NullInjectorError", t
                        }
                        return t
                    }
                }

                function Le(e, t, n, r = null) {
                    e = e && "\n" === e.charAt(0) && e.charAt(1) == Ae ? e.substr(2) : e;
                    let i = fe(t);
                    if (t instanceof Array) i = t.map(fe).join(" -> ");
                    else if ("object" == typeof t) {
                        let e = [];
                        for (let n in t)
                            if (t.hasOwnProperty(n)) {
                                let r = t[n];
                                e.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : fe(r)))
                            } i = `{${e.join(", ")}}`
                    }
                    return `${n}${r?"("+r+")":""}[${i}]: ${e.replace(ke,"\n  ")}`
                }
                class Ue {}
                class He {}

                function Fe(e, t, n) {
                    t >= e.length ? e.push(n) : e.splice(t, 0, n)
                }

                function $e(e, t) {
                    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
                }
                const ze = function() {
                        var e = {
                            Emulated: 0,
                            Native: 1,
                            None: 2,
                            ShadowDom: 3
                        };
                        return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e
                    }(),
                    Ve = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(_e))(),
                    qe = "ngDebugContext",
                    Be = "ngOriginalError",
                    We = "ngErrorLogger";

                function Qe(e) {
                    return e[qe]
                }

                function Ze(e) {
                    return e[Be]
                }

                function Ge(e, ...t) {
                    e.error(...t)
                }
                class Ke {
                    constructor() {
                        this._console = console
                    }
                    handleError(e) {
                        const t = this._findOriginalError(e),
                            n = this._findContext(e),
                            r = function(e) {
                                return e[We] || Ge
                            }(e);
                        r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                    }
                    _findContext(e) {
                        return e ? Qe(e) ? Qe(e) : this._findContext(Ze(e)) : null
                    }
                    _findOriginalError(e) {
                        let t = Ze(e);
                        for (; t && Ze(t);) t = Ze(t);
                        return t
                    }
                }
                let Xe = !0,
                    Ye = !1;

                function Je() {
                    return Ye = !0, Xe
                }
                class et {
                    constructor(e) {
                        if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            const e = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() {
                            try {
                                return !!window.DOMParser
                            } catch (e) {
                                return !1
                            }
                        }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    getInertBodyElement_XHR(e) {
                        e = "<body><remove></remove>" + e + "</body>";
                        try {
                            e = encodeURI(e)
                        } catch (r) {
                            return null
                        }
                        const t = new XMLHttpRequest;
                        t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(void 0);
                        const n = t.response.body;
                        return n.removeChild(n.firstChild), n
                    }
                    getInertBodyElement_DOMParser(e) {
                        e = "<body><remove></remove>" + e + "</body>";
                        try {
                            const t = (new window.DOMParser).parseFromString(e, "text/html").body;
                            return t.removeChild(t.firstChild), t
                        } catch (t) {
                            return null
                        }
                    }
                    getInertBodyElement_InertDocument(e) {
                        const t = this.inertDocument.createElement("template");
                        return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                    }
                    stripCustomNsAttrs(e) {
                        const t = e.attributes;
                        for (let r = t.length - 1; 0 < r; r--) {
                            const n = t.item(r).name;
                            "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || e.removeAttribute(n)
                        }
                        let n = e.firstChild;
                        for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
                    }
                }
                const tt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                    nt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

                function rt(e) {
                    return (e = String(e)).match(tt) || e.match(nt) ? e : (Je() && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`), "unsafe:" + e)
                }

                function it(e) {
                    const t = {};
                    for (const n of e.split(",")) t[n] = !0;
                    return t
                }

                function st(...e) {
                    const t = {};
                    for (const n of e)
                        for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
                    return t
                }
                const ot = it("area,br,col,hr,img,wbr"),
                    at = it("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                    lt = it("rp,rt"),
                    ut = st(lt, at),
                    ct = st(ot, st(at, it("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), st(lt, it("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ut),
                    ht = it("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                    dt = it("srcset"),
                    ft = st(ht, dt, it("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), it("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                    pt = it("script,style,template");
                class gt {
                    constructor() {
                        this.sanitizedSomething = !1, this.buf = []
                    }
                    sanitizeChildren(e) {
                        let t = e.firstChild,
                            n = !0;
                        for (; t;)
                            if (t.nodeType === Node.ELEMENT_NODE ? n = this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, n && t.firstChild) t = t.firstChild;
                            else
                                for (; t;) {
                                    t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                                    let e = this.checkClobberedElement(t, t.nextSibling);
                                    if (e) {
                                        t = e;
                                        break
                                    }
                                    t = this.checkClobberedElement(t, t.parentNode)
                                }
                        return this.buf.join("")
                    }
                    startElement(e) {
                        const t = e.nodeName.toLowerCase();
                        if (!ct.hasOwnProperty(t)) return this.sanitizedSomething = !0, !pt.hasOwnProperty(t);
                        this.buf.push("<"), this.buf.push(t);
                        const n = e.attributes;
                        for (let i = 0; i < n.length; i++) {
                            const e = n.item(i),
                                t = e.name,
                                s = t.toLowerCase();
                            if (!ft.hasOwnProperty(s)) {
                                this.sanitizedSomething = !0;
                                continue
                            }
                            let o = e.value;
                            ht[s] && (o = rt(o)), dt[s] && (r = o, o = (r = String(r)).split(",").map(e => rt(e.trim())).join(", ")), this.buf.push(" ", t, '="', yt(o), '"')
                        }
                        var r;
                        return this.buf.push(">"), !0
                    }
                    endElement(e) {
                        const t = e.nodeName.toLowerCase();
                        ct.hasOwnProperty(t) && !ot.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
                    }
                    chars(e) {
                        this.buf.push(yt(e))
                    }
                    checkClobberedElement(e, t) {
                        if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);
                        return t
                    }
                }
                const mt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                    vt = /([^\#-~ |!])/g;

                function yt(e) {
                    return e.replace(/&/g, "&amp;").replace(mt, (function(e) {
                        return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
                    })).replace(vt, (function(e) {
                        return "&#" + e.charCodeAt(0) + ";"
                    })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                let bt;

                function wt(e) {
                    return "content" in e && function(e) {
                        return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
                    }(e) ? e.content : null
                }
                const _t = function() {
                    var e = {
                        NONE: 0,
                        HTML: 1,
                        STYLE: 2,
                        SCRIPT: 3,
                        URL: 4,
                        RESOURCE_URL: 5
                    };
                    return e[e.NONE] = "NONE", e[e.HTML] = "HTML", e[e.STYLE] = "STYLE", e[e.SCRIPT] = "SCRIPT", e[e.URL] = "URL", e[e.RESOURCE_URL] = "RESOURCE_URL", e
                }();
                class xt {}
                const Ct = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                    St = /^url\(([^)]+)\)$/,
                    Et = /([A-Z])/g;

                function Tt(e) {
                    try {
                        return null != e ? e.toString().slice(0, 30) : e
                    } catch (t) {
                        return "[ERROR] Exception while trying to serialize the value"
                    }
                }
                let kt = (() => {
                    class e {}
                    return e.__NG_ELEMENT_ID__ = () => At(), e
                })();
                const At = (...e) => {},
                    Nt = new xe("The presence of this token marks an injector as being the root injector."),
                    It = function(e, t, n) {
                        return new Lt(e, t, n)
                    };
                let Rt = (() => {
                    class e {
                        static create(e, t) {
                            return Array.isArray(e) ? It(e, t, "") : It(e.providers, e.parent, e.name || "")
                        }
                    }
                    return e.THROW_IF_NOT_FOUND = Se, e.NULL = new je, e.ngInjectableDef = ue({
                        token: e,
                        providedIn: "any",
                        factory: () => Me(Ce)
                    }), e.__NG_ELEMENT_ID__ = -1, e
                })();
                const Ot = function(e) {
                        return e
                    },
                    Pt = [],
                    Dt = Ot,
                    Mt = function() {
                        return Array.prototype.slice.call(arguments)
                    },
                    jt = "\u0275";
                class Lt {
                    constructor(e, t = Rt.NULL, n = null) {
                        this.parent = t, this.source = n;
                        const r = this._records = new Map;
                        r.set(Rt, {
                                token: Rt,
                                fn: Ot,
                                deps: Pt,
                                value: this,
                                useNew: !1
                            }), r.set(Ce, {
                                token: Ce,
                                fn: Ot,
                                deps: Pt,
                                value: this,
                                useNew: !1
                            }),
                            function e(t, n) {
                                if (n)
                                    if ((n = me(n)) instanceof Array)
                                        for (let r = 0; r < n.length; r++) e(t, n[r]);
                                    else {
                                        if ("function" == typeof n) throw Ht("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw Ht("Unexpected provider", n); {
                                            let e = me(n.provide);
                                            const r = function(e) {
                                                const t = function(e) {
                                                    let t = Pt;
                                                    const n = e.deps;
                                                    if (n && n.length) {
                                                        t = [];
                                                        for (let e = 0; e < n.length; e++) {
                                                            let r = 6,
                                                                i = me(n[e]);
                                                            if (i instanceof Array)
                                                                for (let e = 0, t = i; e < t.length; e++) {
                                                                    const n = t[e];
                                                                    n instanceof ie || n == ie ? r |= 1 : n instanceof oe || n == oe ? r &= -3 : n instanceof se || n == se ? r &= -5 : i = n instanceof re ? n.token : me(n)
                                                                }
                                                            t.push({
                                                                token: i,
                                                                options: r
                                                            })
                                                        }
                                                    } else if (e.useExisting) t = [{
                                                        token: me(e.useExisting),
                                                        options: 6
                                                    }];
                                                    else if (!(n || Ie in e)) throw Ht("'deps' required", e);
                                                    return t
                                                }(e);
                                                let n = Ot,
                                                    r = Pt,
                                                    i = !1,
                                                    s = me(e.provide);
                                                if (Ie in e) r = e.useValue;
                                                else if (e.useFactory) n = e.useFactory;
                                                else if (e.useExisting);
                                                else if (e.useClass) i = !0, n = me(e.useClass);
                                                else {
                                                    if ("function" != typeof s) throw Ht("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                                                    i = !0, n = s
                                                }
                                                return {
                                                    deps: t,
                                                    fn: n,
                                                    useNew: i,
                                                    value: r
                                                }
                                            }(n);
                                            if (!0 === n.multi) {
                                                let r = t.get(e);
                                                if (r) {
                                                    if (r.fn !== Mt) throw Ut(e)
                                                } else t.set(e, r = {
                                                    token: n.provide,
                                                    deps: [],
                                                    useNew: !1,
                                                    fn: Mt,
                                                    value: Pt
                                                });
                                                r.deps.push({
                                                    token: e = n,
                                                    options: 6
                                                })
                                            }
                                            const i = t.get(e);
                                            if (i && i.fn == Mt) throw Ut(e);
                                            t.set(e, r)
                                        }
                                    }
                            }(r, e)
                    }
                    get(e, t, n = ae.Default) {
                        const r = this._records.get(e);
                        try {
                            return function e(t, n, r, i, s, o) {
                                try {
                                    return function(t, n, r, i, s, o) {
                                        let a;
                                        if (!n || o & ae.SkipSelf) o & ae.Self || (a = i.get(t, s, ae.Default));
                                        else {
                                            if ((a = n.value) == Dt) throw Error(jt + "Circular dependency");
                                            if (a === Pt) {
                                                n.value = Dt;
                                                let t = void 0,
                                                    s = n.useNew,
                                                    o = n.fn,
                                                    l = n.deps,
                                                    u = Pt;
                                                if (l.length) {
                                                    u = [];
                                                    for (let t = 0; t < l.length; t++) {
                                                        const n = l[t],
                                                            s = n.options,
                                                            o = 2 & s ? r.get(n.token) : void 0;
                                                        u.push(e(n.token, o, r, o || 4 & s ? i : Rt.NULL, 1 & s ? null : Rt.THROW_IF_NOT_FOUND, ae.Default))
                                                    }
                                                }
                                                n.value = a = s ? new o(...u) : o.apply(t, u)
                                            }
                                        }
                                        return a
                                    }(t, n, r, i, s, o)
                                } catch (a) {
                                    throw a instanceof Error || (a = new Error(a)), (a[Ee] = a[Ee] || []).unshift(t), n && n.value == Dt && (n.value = Pt), a
                                }
                            }(e, r, this._records, this.parent, t, n)
                        } catch (i) {
                            return function(e, t, n, r) {
                                const i = e[Ee];
                                throw t[Ne] && i.unshift(t[Ne]), e.message = Le("\n" + e.message, i, "StaticInjectorError", r), e[Te] = i, e[Ee] = null, e
                            }(i, e, 0, this.source)
                        }
                    }
                    toString() {
                        const e = [];
                        return this._records.forEach((t, n) => e.push(fe(n))), `StaticInjector[${e.join(", ")}]`
                    }
                }

                function Ut(e) {
                    return Ht("Cannot mix multi providers and regular providers", e)
                }

                function Ht(e, t) {
                    return new Error(Le(e, t, "StaticInjectorError"))
                }
                const Ft = new xe("AnalyzeForEntryComponents");
                let $t = null;

                function zt() {
                    if (!$t) {
                        const e = _e.Symbol;
                        if (e && e.iterator) $t = e.iterator;
                        else {
                            const e = Object.getOwnPropertyNames(Map.prototype);
                            for (let t = 0; t < e.length; ++t) {
                                const n = e[t];
                                "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && ($t = n)
                            }
                        }
                    }
                    return $t
                }

                function Vt(e, t) {
                    return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                }

                function qt(e, t) {
                    const n = Wt(e),
                        r = Wt(t);
                    if (n && r) return function(e, t, n) {
                        const r = e[zt()](),
                            i = t[zt()]();
                        for (;;) {
                            const e = r.next(),
                                t = i.next();
                            if (e.done && t.done) return !0;
                            if (e.done || t.done) return !1;
                            if (!n(e.value, t.value)) return !1
                        }
                    }(e, t, qt); {
                        const i = e && ("object" == typeof e || "function" == typeof e),
                            s = t && ("object" == typeof t || "function" == typeof t);
                        return !(n || !i || r || !s) || Vt(e, t)
                    }
                }
                class Bt {
                    constructor(e) {
                        this.wrapped = e
                    }
                    static wrap(e) {
                        return new Bt(e)
                    }
                    static unwrap(e) {
                        return Bt.isWrapped(e) ? e.wrapped : e
                    }
                    static isWrapped(e) {
                        return e instanceof Bt
                    }
                }

                function Wt(e) {
                    return !!Qt(e) && (Array.isArray(e) || !(e instanceof Map) && zt() in e)
                }

                function Qt(e) {
                    return null !== e && ("function" == typeof e || "object" == typeof e)
                }

                function Zt(e) {
                    return !!e && "function" == typeof e.then
                }

                function Gt(e) {
                    return !!e && "function" == typeof e.subscribe
                }
                class Kt {
                    constructor(e, t, n) {
                        this.previousValue = e, this.currentValue = t, this.firstChange = n
                    }
                    isFirstChange() {
                        return this.firstChange
                    }
                }
                class Xt {}
                class Yt {}

                function Jt(e) {
                    const t = Error(`No component factory found for ${fe(e)}. Did you add it to @NgModule.entryComponents?`);
                    return t[en] = e, t
                }
                const en = "ngComponent";
                class tn {
                    resolveComponentFactory(e) {
                        throw Jt(e)
                    }
                }
                let nn = (() => {
                    class e {}
                    return e.NULL = new tn, e
                })();
                class rn {
                    constructor(e, t, n) {
                        this._parent = t, this._ngModule = n, this._factories = new Map;
                        for (let r = 0; r < e.length; r++) {
                            const t = e[r];
                            this._factories.set(t.componentType, t)
                        }
                    }
                    resolveComponentFactory(e) {
                        let t = this._factories.get(e);
                        if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw Jt(e);
                        return new sn(t, this._ngModule)
                    }
                }
                class sn extends Yt {
                    constructor(e, t) {
                        super(), this.factory = e, this.ngModule = t, this.selector = e.selector, this.componentType = e.componentType, this.ngContentSelectors = e.ngContentSelectors, this.inputs = e.inputs, this.outputs = e.outputs
                    }
                    create(e, t, n, r) {
                        return this.factory.create(e, t, n, r || this.ngModule)
                    }
                }

                function on(...e) {}
                let an = (() => {
                    class e {
                        constructor(e) {
                            this.nativeElement = e
                        }
                    }
                    return e.__NG_ELEMENT_ID__ = () => ln(e), e
                })();
                const ln = on;
                class un {}
                class cn {}
                const hn = function() {
                    var e = {
                        Important: 1,
                        DashCase: 2
                    };
                    return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e
                }();
                let dn = (() => {
                    class e {}
                    return e.__NG_ELEMENT_ID__ = () => fn(), e
                })();
                const fn = on;
                class pn {
                    constructor(e) {
                        this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
                    }
                }
                const gn = new pn("8.2.11");
                class mn {
                    constructor() {}
                    supports(e) {
                        return Wt(e)
                    }
                    create(e) {
                        return new yn(e)
                    }
                }
                const vn = (e, t) => t;
                class yn {
                    constructor(e) {
                        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || vn
                    }
                    forEachItem(e) {
                        let t;
                        for (t = this._itHead; null !== t; t = t._next) e(t)
                    }
                    forEachOperation(e) {
                        let t = this._itHead,
                            n = this._removalsHead,
                            r = 0,
                            i = null;
                        for (; t || n;) {
                            const s = !n || t && t.currentIndex < xn(n, r, i) ? t : n,
                                o = xn(s, r, i),
                                a = s.currentIndex;
                            if (s === n) r--, n = n._nextRemoved;
                            else if (t = t._next, null == s.previousIndex) r++;
                            else {
                                i || (i = []);
                                const e = o - r,
                                    t = a - r;
                                if (e != t) {
                                    for (let n = 0; n < e; n++) {
                                        const r = n < i.length ? i[n] : i[n] = 0,
                                            s = r + n;
                                        t <= s && s < e && (i[n] = r + 1)
                                    }
                                    i[s.previousIndex] = t - e
                                }
                            }
                            o !== a && e(s, o, a)
                        }
                    }
                    forEachPreviousItem(e) {
                        let t;
                        for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
                    }
                    forEachAddedItem(e) {
                        let t;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                    }
                    forEachMovedItem(e) {
                        let t;
                        for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
                    }
                    forEachRemovedItem(e) {
                        let t;
                        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                    }
                    forEachIdentityChange(e) {
                        let t;
                        for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
                    }
                    diff(e) {
                        if (null == e && (e = []), !Wt(e)) throw new Error(`Error trying to diff '${fe(e)}'. Only arrays and iterables are allowed`);
                        return this.check(e) ? this : null
                    }
                    onDestroy() {}
                    check(e) {
                        this._reset();
                        let t, n, r, i = this._itHead,
                            s = !1;
                        if (Array.isArray(e)) {
                            this.length = e.length;
                            for (let t = 0; t < this.length; t++) r = this._trackByFn(t, n = e[t]), null !== i && Vt(i.trackById, r) ? (s && (i = this._verifyReinsertion(i, n, r, t)), Vt(i.item, n) || this._addIdentityChange(i, n)) : (i = this._mismatch(i, n, r, t), s = !0), i = i._next
                        } else t = 0,
                            function(e, t) {
                                if (Array.isArray(e))
                                    for (let n = 0; n < e.length; n++) t(e[n]);
                                else {
                                    const n = e[zt()]();
                                    let r;
                                    for (; !(r = n.next()).done;) t(r.value)
                                }
                            }(e, e => {
                                r = this._trackByFn(t, e), null !== i && Vt(i.trackById, r) ? (s && (i = this._verifyReinsertion(i, e, r, t)), Vt(i.item, e) || this._addIdentityChange(i, e)) : (i = this._mismatch(i, e, r, t), s = !0), i = i._next, t++
                            }), this.length = t;
                        return this._truncate(i), this.collection = e, this.isDirty
                    }
                    get isDirty() {
                        return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                    }
                    _reset() {
                        if (this.isDirty) {
                            let e, t;
                            for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }
                    _mismatch(e, t, n, r) {
                        let i;
                        return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Vt(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Vt(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new bn(t, n), i, r), e
                    }
                    _verifyReinsertion(e, t, n, r) {
                        let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                        return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
                    }
                    _truncate(e) {
                        for (; null !== e;) {
                            const t = e._next;
                            this._addToRemovals(this._unlink(e)), e = t
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }
                    _reinsertAfter(e, t, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                        const r = e._prevRemoved,
                            i = e._nextRemoved;
                        return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                    }
                    _moveAfter(e, t, n) {
                        return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
                    }
                    _addAfter(e, t, n) {
                        return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                    }
                    _insertAfter(e, t, n) {
                        const r = null === t ? this._itHead : t._next;
                        return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new _n), this._linkedRecords.put(e), e.currentIndex = n, e
                    }
                    _remove(e) {
                        return this._addToRemovals(this._unlink(e))
                    }
                    _unlink(e) {
                        null !== this._linkedRecords && this._linkedRecords.remove(e);
                        const t = e._prev,
                            n = e._next;
                        return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                    }
                    _addToMoves(e, t) {
                        return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e)
                    }
                    _addToRemovals(e) {
                        return null === this._unlinkedRecords && (this._unlinkedRecords = new _n), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                    }
                    _addIdentityChange(e, t) {
                        return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                    }
                }
                class bn {
                    constructor(e, t) {
                        this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                    }
                }
                class wn {
                    constructor() {
                        this._head = null, this._tail = null
                    }
                    add(e) {
                        null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                    }
                    get(e, t) {
                        let n;
                        for (n = this._head; null !== n; n = n._nextDup)
                            if ((null === t || t <= n.currentIndex) && Vt(n.trackById, e)) return n;
                        return null
                    }
                    remove(e) {
                        const t = e._prevDup,
                            n = e._nextDup;
                        return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                    }
                }
                class _n {
                    constructor() {
                        this.map = new Map
                    }
                    put(e) {
                        const t = e.trackById;
                        let n = this.map.get(t);
                        n || (n = new wn, this.map.set(t, n)), n.add(e)
                    }
                    get(e, t) {
                        const n = this.map.get(e);
                        return n ? n.get(e, t) : null
                    }
                    remove(e) {
                        const t = e.trackById;
                        return this.map.get(t).remove(e) && this.map.delete(t), e
                    }
                    get isEmpty() {
                        return 0 === this.map.size
                    }
                    clear() {
                        this.map.clear()
                    }
                }

                function xn(e, t, n) {
                    const r = e.previousIndex;
                    if (null === r) return r;
                    let i = 0;
                    return n && r < n.length && (i = n[r]), r + t + i
                }
                class Cn {
                    constructor() {}
                    supports(e) {
                        return e instanceof Map || Qt(e)
                    }
                    create() {
                        return new Sn
                    }
                }
                class Sn {
                    constructor() {
                        this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                    }
                    get isDirty() {
                        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                    }
                    forEachItem(e) {
                        let t;
                        for (t = this._mapHead; null !== t; t = t._next) e(t)
                    }
                    forEachPreviousItem(e) {
                        let t;
                        for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                    }
                    forEachChangedItem(e) {
                        let t;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                    }
                    forEachAddedItem(e) {
                        let t;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                    }
                    forEachRemovedItem(e) {
                        let t;
                        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                    }
                    diff(e) {
                        if (e) {
                            if (!(e instanceof Map || Qt(e))) throw new Error(`Error trying to diff '${fe(e)}'. Only maps and objects are allowed`)
                        } else e = new Map;
                        return this.check(e) ? this : null
                    }
                    onDestroy() {}
                    check(e) {
                        this._reset();
                        let t = this._mapHead;
                        if (this._appendAfter = null, this._forEach(e, (e, n) => {
                                if (t && t.key === n) this._maybeAddToChanges(t, e), this._appendAfter = t, t = t._next;
                                else {
                                    const r = this._getOrCreateRecordForKey(n, e);
                                    t = this._insertBeforeOrAppend(t, r)
                                }
                            }), t) {
                            t._prev && (t._prev._next = null), this._removalsHead = t;
                            for (let e = t; null !== e; e = e._nextRemoved) e === this._mapHead && (this._mapHead = null), this._records.delete(e.key), e._nextRemoved = e._next, e.previousValue = e.currentValue, e.currentValue = null, e._prev = null, e._next = null
                        }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }
                    _insertBeforeOrAppend(e, t) {
                        if (e) {
                            const n = e._prev;
                            return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                        }
                        return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                    }
                    _getOrCreateRecordForKey(e, t) {
                        if (this._records.has(e)) {
                            const n = this._records.get(e);
                            this._maybeAddToChanges(n, t);
                            const r = n._prev,
                                i = n._next;
                            return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                        }
                        const n = new En(e);
                        return this._records.set(e, n), n.currentValue = t, this._addToAdditions(n), n
                    }
                    _reset() {
                        if (this.isDirty) {
                            let e;
                            for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                            for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                            for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }
                    _maybeAddToChanges(e, t) {
                        Vt(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                    }
                    _addToAdditions(e) {
                        null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                    }
                    _addToChanges(e) {
                        null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                    }
                    _forEach(e, t) {
                        e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(n => t(e[n], n))
                    }
                }
                class En {
                    constructor(e) {
                        this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                    }
                }
                let Tn = (() => {
                        class e {
                            constructor(e) {
                                this.factories = e
                            }
                            static create(t, n) {
                                if (null != n) {
                                    const e = n.factories.slice();
                                    t = t.concat(e)
                                }
                                return new e(t)
                            }
                            static extend(t) {
                                return {
                                    provide: e,
                                    useFactory: n => {
                                        if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                        return e.create(t, n)
                                    },
                                    deps: [
                                        [e, new oe, new ie]
                                    ]
                                }
                            }
                            find(e) {
                                const t = this.factories.find(t => t.supports(e));
                                if (null != t) return t;
                                throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);
                                var n
                            }
                        }
                        return e.ngInjectableDef = ue({
                            token: e,
                            providedIn: "root",
                            factory: () => new e([new mn])
                        }), e
                    })(),
                    kn = (() => {
                        class e {
                            constructor(e) {
                                this.factories = e
                            }
                            static create(t, n) {
                                if (n) {
                                    const e = n.factories.slice();
                                    t = t.concat(e)
                                }
                                return new e(t)
                            }
                            static extend(t) {
                                return {
                                    provide: e,
                                    useFactory: n => {
                                        if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                        return e.create(t, n)
                                    },
                                    deps: [
                                        [e, new oe, new ie]
                                    ]
                                }
                            }
                            find(e) {
                                const t = this.factories.find(t => t.supports(e));
                                if (t) return t;
                                throw new Error(`Cannot find a differ supporting object '${e}'`)
                            }
                        }
                        return e.ngInjectableDef = ue({
                            token: e,
                            providedIn: "root",
                            factory: () => new e([new Cn])
                        }), e
                    })();
                const An = [new Cn],
                    Nn = new Tn([new mn]),
                    In = new kn(An);
                let Rn = (() => {
                    class e {}
                    return e.__NG_ELEMENT_ID__ = () => On(e, an), e
                })();
                const On = on;
                let Pn = (() => {
                    class e {}
                    return e.__NG_ELEMENT_ID__ = () => Dn(e, an), e
                })();
                const Dn = on;

                function Mn(e, t, n, r) {
                    let i = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
                    return r && (i += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                        function(e, t) {
                            const n = new Error(e);
                            return jn(n, t), n
                        }(i, e)
                }

                function jn(e, t) {
                    e[qe] = t, e[We] = t.logError.bind(t)
                }

                function Ln(e) {
                    return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${e}`)
                }

                function Un(e, t, n) {
                    const r = e.state,
                        i = 1792 & r;
                    return i === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : i === n
                }

                function Hn(e, t, n) {
                    return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0)
                }

                function Fn(e, t) {
                    return e.nodes[t]
                }

                function $n(e, t) {
                    return e.nodes[t]
                }

                function zn(e, t) {
                    return e.nodes[t]
                }

                function Vn(e, t) {
                    return e.nodes[t]
                }

                function qn(e, t) {
                    return e.nodes[t]
                }
                const Bn = {
                        setCurrentNode: void 0,
                        createRootView: void 0,
                        createEmbeddedView: void 0,
                        createComponentView: void 0,
                        createNgModuleRef: void 0,
                        overrideProvider: void 0,
                        overrideComponentView: void 0,
                        clearOverrides: void 0,
                        checkAndUpdateView: void 0,
                        checkNoChangesView: void 0,
                        destroyView: void 0,
                        resolveDep: void 0,
                        createDebugContext: void 0,
                        handleEvent: void 0,
                        updateDirectives: void 0,
                        updateRenderer: void 0,
                        dirtyParentQueries: void 0
                    },
                    Wn = () => {},
                    Qn = new Map;

                function Zn(e) {
                    let t = Qn.get(e);
                    return t || (t = fe(e) + "_" + Qn.size, Qn.set(e, t)), t
                }
                const Gn = "$$undefined",
                    Kn = "$$empty";

                function Xn(e) {
                    return {
                        id: Gn,
                        styles: e.styles,
                        encapsulation: e.encapsulation,
                        data: e.data
                    }
                }
                let Yn = 0;

                function Jn(e, t, n, r) {
                    return !(!(2 & e.state) && Vt(e.oldValues[t.bindingIndex + n], r))
                }

                function er(e, t, n, r) {
                    return !!Jn(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0)
                }

                function tr(e, t, n, r) {
                    const i = e.oldValues[t.bindingIndex + n];
                    if (1 & e.state || !qt(i, r)) {
                        const s = t.bindings[n].name;
                        throw Mn(Bn.createDebugContext(e, t.nodeIndex), `${s}: ${i}`, `${s}: ${r}`, 0 != (1 & e.state))
                    }
                }

                function nr(e) {
                    let t = e;
                    for (; t;) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent
                }

                function rr(e, t) {
                    let n = e;
                    for (; n && n !== t;) n.state |= 64, n = n.viewContainerParent || n.parent
                }

                function ir(e, t, n, r) {
                    try {
                        return nr(33554432 & e.def.nodes[t].flags ? $n(e, t).componentView : e), Bn.handleEvent(e, t, n, r)
                    } catch (i) {
                        e.root.errorHandler.handleError(i)
                    }
                }

                function sr(e) {
                    return e.parent ? $n(e.parent, e.parentNodeDef.nodeIndex) : null
                }

                function or(e) {
                    return e.parent ? e.parentNodeDef.parent : null
                }

                function ar(e, t) {
                    switch (201347067 & t.flags) {
                        case 1:
                            return $n(e, t.nodeIndex).renderElement;
                        case 2:
                            return Fn(e, t.nodeIndex).renderText
                    }
                }

                function lr(e) {
                    return !!e.parent && !!(32768 & e.parentNodeDef.flags)
                }

                function ur(e) {
                    return !(!e.parent || 32768 & e.parentNodeDef.flags)
                }

                function cr(e) {
                    const t = {};
                    let n = 0;
                    const r = {};
                    return e && e.forEach(([e, i]) => {
                        "number" == typeof e ? (t[e] = i, n |= function(e) {
                            return 1 << e % 32
                        }(e)) : r[e] = i
                    }), {
                        matchedQueries: t,
                        references: r,
                        matchedQueryIds: n
                    }
                }

                function hr(e, t) {
                    return e.map(e => {
                        let n, r;
                        return Array.isArray(e) ? [r, n] = e : (r = 0, n = e), n && ("function" == typeof n || "object" == typeof n) && t && Object.defineProperty(n, Ne, {
                            value: t,
                            configurable: !0
                        }), {
                            flags: r,
                            token: n,
                            tokenKey: Zn(n)
                        }
                    })
                }

                function dr(e, t, n) {
                    let r = n.renderParent;
                    return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === ze.Native ? $n(e, n.renderParent.nodeIndex).renderElement : void 0 : t
                }
                const fr = new WeakMap;

                function pr(e) {
                    let t = fr.get(e);
                    return t || ((t = e(() => Wn)).factory = e, fr.set(e, t)), t
                }

                function gr(e, t, n, r, i) {
                    3 === t && (n = e.renderer.parentNode(ar(e, e.def.lastRenderRootNode))), mr(e, t, 0, e.def.nodes.length - 1, n, r, i)
                }

                function mr(e, t, n, r, i, s, o) {
                    for (let a = n; a <= r; a++) {
                        const n = e.def.nodes[a];
                        11 & n.flags && yr(e, n, t, i, s, o), a += n.childCount
                    }
                }

                function vr(e, t, n, r, i, s) {
                    let o = e;
                    for (; o && !lr(o);) o = o.parent;
                    const a = o.parent,
                        l = or(o),
                        u = l.nodeIndex + l.childCount;
                    for (let c = l.nodeIndex + 1; c <= u; c++) {
                        const e = a.def.nodes[c];
                        e.ngContentIndex === t && yr(a, e, n, r, i, s), c += e.childCount
                    }
                    if (!a.parent) {
                        const o = e.root.projectableNodes[t];
                        if (o)
                            for (let t = 0; t < o.length; t++) br(e, o[t], n, r, i, s)
                    }
                }

                function yr(e, t, n, r, i, s) {
                    if (8 & t.flags) vr(e, t.ngContent.index, n, r, i, s);
                    else {
                        const o = ar(e, t);
                        if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && br(e, o, n, r, i, s), 32 & t.bindingFlags && br($n(e, t.nodeIndex).componentView, o, n, r, i, s)) : br(e, o, n, r, i, s), 16777216 & t.flags) {
                            const o = $n(e, t.nodeIndex).viewContainer._embeddedViews;
                            for (let e = 0; e < o.length; e++) gr(o[e], n, r, i, s)
                        }
                        1 & t.flags && !t.element.name && mr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, s)
                    }
                }

                function br(e, t, n, r, i, s) {
                    const o = e.renderer;
                    switch (n) {
                        case 1:
                            o.appendChild(r, t);
                            break;
                        case 2:
                            o.insertBefore(r, t, i);
                            break;
                        case 3:
                            o.removeChild(r, t);
                            break;
                        case 0:
                            s.push(t)
                    }
                }
                const wr = /^:([^:]+):(.+)$/;

                function _r(e) {
                    if (":" === e[0]) {
                        const t = e.match(wr);
                        return [t[1], t[2]]
                    }
                    return ["", e]
                }

                function xr(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t |= e[n].flags;
                    return t
                }
                const Cr = new Object,
                    Sr = Zn(Rt),
                    Er = Zn(Ce),
                    Tr = Zn(Ue);

                function kr(e, t, n, r) {
                    return n = me(n), {
                        index: -1,
                        deps: hr(r, fe(t)),
                        flags: e,
                        token: t,
                        value: n
                    }
                }

                function Ar(e, t, n = Rt.THROW_IF_NOT_FOUND) {
                    const r = Pe(e);
                    try {
                        if (8 & t.flags) return t.token;
                        if (2 & t.flags && (n = null), 1 & t.flags) return e._parent.get(t.token, n);
                        const o = t.tokenKey;
                        switch (o) {
                            case Sr:
                            case Er:
                            case Tr:
                                return e
                        }
                        const a = e._def.providersByKey[o];
                        let l;
                        if (a) {
                            let t = e._providers[a.index];
                            return void 0 === t && (t = e._providers[a.index] = Nr(e, a)), t === Cr ? void 0 : t
                        }
                        if ((l = he(t.token)) && (i = e, null != (s = l).providedIn && (function(e, t) {
                                return e._def.modules.indexOf(t) > -1
                            }(i, s.providedIn) || "root" === s.providedIn && i._def.isRoot))) {
                            const n = e._providers.length;
                            return e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                                flags: 5120,
                                value: l.factory,
                                deps: [],
                                index: n,
                                token: t.token
                            }, e._providers[n] = Cr, e._providers[n] = Nr(e, e._def.providersByKey[t.tokenKey])
                        }
                        return 4 & t.flags ? n : e._parent.get(t.token, n)
                    } finally {
                        Pe(r)
                    }
                    var i, s
                }

                function Nr(e, t) {
                    let n;
                    switch (201347067 & t.flags) {
                        case 512:
                            n = function(e, t, n) {
                                const r = n.length;
                                switch (r) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(Ar(e, n[0]));
                                    case 2:
                                        return new t(Ar(e, n[0]), Ar(e, n[1]));
                                    case 3:
                                        return new t(Ar(e, n[0]), Ar(e, n[1]), Ar(e, n[2]));
                                    default:
                                        const i = new Array(r);
                                        for (let t = 0; t < r; t++) i[t] = Ar(e, n[t]);
                                        return new t(...i)
                                }
                            }(e, t.value, t.deps);
                            break;
                        case 1024:
                            n = function(e, t, n) {
                                const r = n.length;
                                switch (r) {
                                    case 0:
                                        return t();
                                    case 1:
                                        return t(Ar(e, n[0]));
                                    case 2:
                                        return t(Ar(e, n[0]), Ar(e, n[1]));
                                    case 3:
                                        return t(Ar(e, n[0]), Ar(e, n[1]), Ar(e, n[2]));
                                    default:
                                        const i = Array(r);
                                        for (let t = 0; t < r; t++) i[t] = Ar(e, n[t]);
                                        return t(...i)
                                }
                            }(e, t.value, t.deps);
                            break;
                        case 2048:
                            n = Ar(e, t.deps[0]);
                            break;
                        case 256:
                            n = t.value
                    }
                    return n === Cr || null === n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), void 0 === n ? Cr : n
                }

                function Ir(e, t) {
                    const n = e.viewContainer._embeddedViews;
                    if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null;
                    const r = n[t];
                    return r.viewContainerParent = null, $e(n, t), Bn.dirtyParentQueries(r), Or(r), r
                }

                function Rr(e, t, n) {
                    const r = t ? ar(t, t.def.lastRenderRootNode) : e.renderElement,
                        i = n.renderer.parentNode(r),
                        s = n.renderer.nextSibling(r);
                    gr(n, 2, i, s, void 0)
                }

                function Or(e) {
                    gr(e, 3, null, null, void 0)
                }
                const Pr = new Object;

                function Dr(e, t, n, r, i, s) {
                    return new Mr(e, t, n, r, i, s)
                }
                class Mr extends Yt {
                    constructor(e, t, n, r, i, s) {
                        super(), this.selector = e, this.componentType = t, this._inputs = r, this._outputs = i, this.ngContentSelectors = s, this.viewDefFactory = n
                    }
                    get inputs() {
                        const e = [],
                            t = this._inputs;
                        for (let n in t) e.push({
                            propName: n,
                            templateName: t[n]
                        });
                        return e
                    }
                    get outputs() {
                        const e = [];
                        for (let t in this._outputs) e.push({
                            propName: t,
                            templateName: this._outputs[t]
                        });
                        return e
                    }
                    create(e, t, n, r) {
                        if (!r) throw new Error("ngModule should be provided");
                        const i = pr(this.viewDefFactory),
                            s = i.nodes[0].element.componentProvider.nodeIndex,
                            o = Bn.createRootView(e, t || [], n, i, r, Pr),
                            a = zn(o, s).instance;
                        return n && o.renderer.setAttribute($n(o, 0).renderElement, "ng-version", gn.full), new jr(o, new Fr(o), a)
                    }
                }
                class jr extends Xt {
                    constructor(e, t, n) {
                        super(), this._view = e, this._viewRef = t, this._component = n, this._elDef = this._view.def.nodes[0], this.hostView = t, this.changeDetectorRef = t, this.instance = n
                    }
                    get location() {
                        return new an($n(this._view, this._elDef.nodeIndex).renderElement)
                    }
                    get injector() {
                        return new qr(this._view, this._elDef)
                    }
                    get componentType() {
                        return this._component.constructor
                    }
                    destroy() {
                        this._viewRef.destroy()
                    }
                    onDestroy(e) {
                        this._viewRef.onDestroy(e)
                    }
                }

                function Lr(e, t, n) {
                    return new Ur(e, t, n)
                }
                class Ur {
                    constructor(e, t, n) {
                        this._view = e, this._elDef = t, this._data = n, this._embeddedViews = []
                    }
                    get element() {
                        return new an(this._data.renderElement)
                    }
                    get injector() {
                        return new qr(this._view, this._elDef)
                    }
                    get parentInjector() {
                        let e = this._view,
                            t = this._elDef.parent;
                        for (; !t && e;) t = or(e), e = e.parent;
                        return e ? new qr(e, t) : new qr(this._view, null)
                    }
                    clear() {
                        for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
                            const t = Ir(this._data, e);
                            Bn.destroyView(t)
                        }
                    }
                    get(e) {
                        const t = this._embeddedViews[e];
                        if (t) {
                            const e = new Fr(t);
                            return e.attachToViewContainerRef(this), e
                        }
                        return null
                    }
                    get length() {
                        return this._embeddedViews.length
                    }
                    createEmbeddedView(e, t, n) {
                        const r = e.createEmbeddedView(t || {});
                        return this.insert(r, n), r
                    }
                    createComponent(e, t, n, r, i) {
                        const s = n || this.parentInjector;
                        i || e instanceof sn || (i = s.get(Ue));
                        const o = e.create(s, r, void 0, i);
                        return this.insert(o.hostView, t), o
                    }
                    insert(e, t) {
                        if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                        const n = e;
                        return function(e, t, n, r) {
                            let i = t.viewContainer._embeddedViews;
                            null == n && (n = i.length), r.viewContainerParent = e, Fe(i, n, r),
                                function(e, t) {
                                    const n = sr(t);
                                    if (!n || n === e || 16 & t.state) return;
                                    t.state |= 16;
                                    let r = n.template._projectedViews;
                                    r || (r = n.template._projectedViews = []), r.push(t),
                                        function(e, t) {
                                            if (4 & t.flags) return;
                                            e.nodeFlags |= 4, t.flags |= 4;
                                            let n = t.parent;
                                            for (; n;) n.childFlags |= 4, n = n.parent
                                        }(t.parent.def, t.parentNodeDef)
                                }(t, r), Bn.dirtyParentQueries(r), Rr(t, n > 0 ? i[n - 1] : null, r)
                        }(this._view, this._data, t, n._view), n.attachToViewContainerRef(this), e
                    }
                    move(e, t) {
                        if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                        const n = this._embeddedViews.indexOf(e._view);
                        return function(e, t, n) {
                            const r = e.viewContainer._embeddedViews,
                                i = r[t];
                            $e(r, t), null == n && (n = r.length), Fe(r, n, i), Bn.dirtyParentQueries(i), Or(i), Rr(e, n > 0 ? r[n - 1] : null, i)
                        }(this._data, n, t), e
                    }
                    indexOf(e) {
                        return this._embeddedViews.indexOf(e._view)
                    }
                    remove(e) {
                        const t = Ir(this._data, e);
                        t && Bn.destroyView(t)
                    }
                    detach(e) {
                        const t = Ir(this._data, e);
                        return t ? new Fr(t) : null
                    }
                }

                function Hr(e) {
                    return new Fr(e)
                }
                class Fr {
                    constructor(e) {
                        this._view = e, this._viewContainerRef = null, this._appRef = null
                    }
                    get rootNodes() {
                        return function(e) {
                            const t = [];
                            return gr(e, 0, void 0, void 0, t), t
                        }(this._view)
                    }
                    get context() {
                        return this._view.context
                    }
                    get destroyed() {
                        return 0 != (128 & this._view.state)
                    }
                    markForCheck() {
                        nr(this._view)
                    }
                    detach() {
                        this._view.state &= -5
                    }
                    detectChanges() {
                        const e = this._view.root.rendererFactory;
                        e.begin && e.begin();
                        try {
                            Bn.checkAndUpdateView(this._view)
                        } finally {
                            e.end && e.end()
                        }
                    }
                    checkNoChanges() {
                        Bn.checkNoChangesView(this._view)
                    }
                    reattach() {
                        this._view.state |= 4
                    }
                    onDestroy(e) {
                        this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e)
                    }
                    destroy() {
                        this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Bn.destroyView(this._view)
                    }
                    detachFromAppRef() {
                        this._appRef = null, Or(this._view), Bn.dirtyParentQueries(this._view)
                    }
                    attachToAppRef(e) {
                        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = e
                    }
                    attachToViewContainerRef(e) {
                        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = e
                    }
                }

                function $r(e, t) {
                    return new zr(e, t)
                }
                class zr extends Rn {
                    constructor(e, t) {
                        super(), this._parentView = e, this._def = t
                    }
                    createEmbeddedView(e) {
                        return new Fr(Bn.createEmbeddedView(this._parentView, this._def, this._def.element.template, e))
                    }
                    get elementRef() {
                        return new an($n(this._parentView, this._def.nodeIndex).renderElement)
                    }
                }

                function Vr(e, t) {
                    return new qr(e, t)
                }
                class qr {
                    constructor(e, t) {
                        this.view = e, this.elDef = t
                    }
                    get(e, t = Rt.THROW_IF_NOT_FOUND) {
                        return Bn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                            flags: 0,
                            token: e,
                            tokenKey: Zn(e)
                        }, t)
                    }
                }

                function Br(e, t) {
                    const n = e.def.nodes[t];
                    if (1 & n.flags) {
                        const t = $n(e, n.nodeIndex);
                        return n.element.template ? t.template : t.renderElement
                    }
                    if (2 & n.flags) return Fn(e, n.nodeIndex).renderText;
                    if (20240 & n.flags) return zn(e, n.nodeIndex).instance;
                    throw new Error(`Illegal state: read nodeValue for node index ${t}`)
                }

                function Wr(e) {
                    return new Qr(e.renderer)
                }
                class Qr {
                    constructor(e) {
                        this.delegate = e
                    }
                    selectRootElement(e) {
                        return this.delegate.selectRootElement(e)
                    }
                    createElement(e, t) {
                        const [n, r] = _r(t), i = this.delegate.createElement(r, n);
                        return e && this.delegate.appendChild(e, i), i
                    }
                    createViewRoot(e) {
                        return e
                    }
                    createTemplateAnchor(e) {
                        const t = this.delegate.createComment("");
                        return e && this.delegate.appendChild(e, t), t
                    }
                    createText(e, t) {
                        const n = this.delegate.createText(t);
                        return e && this.delegate.appendChild(e, n), n
                    }
                    projectNodes(e, t) {
                        for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n])
                    }
                    attachViewAfter(e, t) {
                        const n = this.delegate.parentNode(e),
                            r = this.delegate.nextSibling(e);
                        for (let i = 0; i < t.length; i++) this.delegate.insertBefore(n, t[i], r)
                    }
                    detachView(e) {
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t],
                                r = this.delegate.parentNode(n);
                            this.delegate.removeChild(r, n)
                        }
                    }
                    destroyView(e, t) {
                        for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n])
                    }
                    listen(e, t, n) {
                        return this.delegate.listen(e, t, n)
                    }
                    listenGlobal(e, t, n) {
                        return this.delegate.listen(e, t, n)
                    }
                    setElementProperty(e, t, n) {
                        this.delegate.setProperty(e, t, n)
                    }
                    setElementAttribute(e, t, n) {
                        const [r, i] = _r(t);
                        null != n ? this.delegate.setAttribute(e, i, n, r) : this.delegate.removeAttribute(e, i, r)
                    }
                    setBindingDebugInfo(e, t, n) {}
                    setElementClass(e, t, n) {
                        n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t)
                    }
                    setElementStyle(e, t, n) {
                        null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t)
                    }
                    invokeElementMethod(e, t, n) {
                        e[t].apply(e, n)
                    }
                    setText(e, t) {
                        this.delegate.setValue(e, t)
                    }
                    animate() {
                        throw new Error("Renderer.animate is no longer supported!")
                    }
                }

                function Zr(e, t, n, r) {
                    return new Gr(e, t, n, r)
                }
                class Gr {
                    constructor(e, t, n, r) {
                        this._moduleType = e, this._parent = t, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(e) {
                                const t = e._def,
                                    n = e._providers = new Array(t.providers.length);
                                for (let r = 0; r < t.providers.length; r++) {
                                    const i = t.providers[r];
                                    4096 & i.flags || void 0 === n[r] && (n[r] = Nr(e, i))
                                }
                            }(this)
                    }
                    get(e, t = Rt.THROW_IF_NOT_FOUND, n = ae.Default) {
                        let r = 0;
                        return n & ae.SkipSelf ? r |= 1 : n & ae.Self && (r |= 4), Ar(this, {
                            token: e,
                            tokenKey: Zn(e),
                            flags: r
                        }, t)
                    }
                    get instance() {
                        return this.get(this._moduleType)
                    }
                    get componentFactoryResolver() {
                        return this.get(nn)
                    }
                    destroy() {
                        if (this._destroyed) throw new Error(`The ng module ${fe(this.instance.constructor)} has already been destroyed.`);
                        this._destroyed = !0,
                            function(e, t) {
                                const n = e._def,
                                    r = new Set;
                                for (let i = 0; i < n.providers.length; i++)
                                    if (131072 & n.providers[i].flags) {
                                        const t = e._providers[i];
                                        if (t && t !== Cr) {
                                            const e = t.ngOnDestroy;
                                            "function" != typeof e || r.has(t) || (e.apply(t), r.add(t))
                                        }
                                    }
                            }(this), this._destroyListeners.forEach(e => e())
                    }
                    onDestroy(e) {
                        this._destroyListeners.push(e)
                    }
                }
                const Kr = Zn(un),
                    Xr = Zn(dn),
                    Yr = Zn(an),
                    Jr = Zn(Pn),
                    ei = Zn(Rn),
                    ti = Zn(kt),
                    ni = Zn(Rt),
                    ri = Zn(Ce);

                function ii(e, t, n, r, i, s, o, a) {
                    const l = [];
                    if (o)
                        for (let c in o) {
                            const [e, t] = o[c];
                            l[e] = {
                                flags: 8,
                                name: c,
                                nonMinifiedName: t,
                                ns: null,
                                securityContext: null,
                                suffix: null
                            }
                        }
                    const u = [];
                    if (a)
                        for (let c in a) u.push({
                            type: 1,
                            propName: c,
                            target: null,
                            eventName: a[c]
                        });
                    return oi(e, t |= 16384, n, r, i, i, s, l, u)
                }

                function si(e, t, n, r, i) {
                    return oi(-1, e, t, 0, n, r, i)
                }

                function oi(e, t, n, r, i, s, o, a, l) {
                    const {
                        matchedQueries: u,
                        references: c,
                        matchedQueryIds: h
                    } = cr(n);
                    l || (l = []), a || (a = []), s = me(s);
                    const d = hr(o, fe(i));
                    return {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: e,
                        flags: t,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: u,
                        matchedQueryIds: h,
                        references: c,
                        ngContentIndex: -1,
                        childCount: r,
                        bindings: a,
                        bindingFlags: xr(a),
                        outputs: l,
                        element: null,
                        provider: {
                            token: i,
                            value: s,
                            deps: d
                        },
                        text: null,
                        query: null,
                        ngContent: null
                    }
                }

                function ai(e, t) {
                    return hi(e, t)
                }

                function li(e, t) {
                    let n = e;
                    for (; n.parent && !lr(n);) n = n.parent;
                    return di(n.parent, or(n), !0, t.provider.value, t.provider.deps)
                }

                function ui(e, t) {
                    const n = di(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
                    if (t.outputs.length)
                        for (let r = 0; r < t.outputs.length; r++) {
                            const i = t.outputs[r],
                                s = n[i.propName];
                            if (!Gt(s)) throw new Error(`@Output ${i.propName} not initialized in '${n.constructor.name}'.`); {
                                const n = s.subscribe(ci(e, t.parent.nodeIndex, i.eventName));
                                e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n)
                            }
                        }
                    return n
                }

                function ci(e, t, n) {
                    return r => ir(e, t, n, r)
                }

                function hi(e, t) {
                    const n = (8192 & t.flags) > 0,
                        r = t.provider;
                    switch (201347067 & t.flags) {
                        case 512:
                            return di(e, t.parent, n, r.value, r.deps);
                        case 1024:
                            return function(e, t, n, r, i) {
                                const s = i.length;
                                switch (s) {
                                    case 0:
                                        return r();
                                    case 1:
                                        return r(pi(e, t, n, i[0]));
                                    case 2:
                                        return r(pi(e, t, n, i[0]), pi(e, t, n, i[1]));
                                    case 3:
                                        return r(pi(e, t, n, i[0]), pi(e, t, n, i[1]), pi(e, t, n, i[2]));
                                    default:
                                        const o = Array(s);
                                        for (let r = 0; r < s; r++) o[r] = pi(e, t, n, i[r]);
                                        return r(...o)
                                }
                            }(e, t.parent, n, r.value, r.deps);
                        case 2048:
                            return pi(e, t.parent, n, r.deps[0]);
                        case 256:
                            return r.value
                    }
                }

                function di(e, t, n, r, i) {
                    const s = i.length;
                    switch (s) {
                        case 0:
                            return new r;
                        case 1:
                            return new r(pi(e, t, n, i[0]));
                        case 2:
                            return new r(pi(e, t, n, i[0]), pi(e, t, n, i[1]));
                        case 3:
                            return new r(pi(e, t, n, i[0]), pi(e, t, n, i[1]), pi(e, t, n, i[2]));
                        default:
                            const o = new Array(s);
                            for (let r = 0; r < s; r++) o[r] = pi(e, t, n, i[r]);
                            return new r(...o)
                    }
                }
                const fi = {};

                function pi(e, t, n, r, i = Rt.THROW_IF_NOT_FOUND) {
                    if (8 & r.flags) return r.token;
                    const s = e;
                    2 & r.flags && (i = null);
                    const o = r.tokenKey;
                    o === ti && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, t = t.parent);
                    let a = e;
                    for (; a;) {
                        if (t) switch (o) {
                            case Kr:
                                return Wr(gi(a, t, n));
                            case Xr:
                                return gi(a, t, n).renderer;
                            case Yr:
                                return new an($n(a, t.nodeIndex).renderElement);
                            case Jr:
                                return $n(a, t.nodeIndex).viewContainer;
                            case ei:
                                if (t.element.template) return $n(a, t.nodeIndex).template;
                                break;
                            case ti:
                                return Hr(gi(a, t, n));
                            case ni:
                            case ri:
                                return Vr(a, t);
                            default:
                                const e = (n ? t.element.allProviders : t.element.publicProviders)[o];
                                if (e) {
                                    let t = zn(a, e.nodeIndex);
                                    return t || (t = {
                                        instance: hi(a, e)
                                    }, a.nodes[e.nodeIndex] = t), t.instance
                                }
                        }
                        n = lr(a), t = or(a), a = a.parent, 4 & r.flags && (a = null)
                    }
                    const l = s.root.injector.get(r.token, fi);
                    return l !== fi || i === fi ? l : s.root.ngModule.injector.get(r.token, i)
                }

                function gi(e, t, n) {
                    let r;
                    if (n) r = $n(e, t.nodeIndex).componentView;
                    else
                        for (r = e; r.parent && !lr(r);) r = r.parent;
                    return r
                }

                function mi(e, t, n, r, i, s) {
                    if (32768 & n.flags) {
                        const t = $n(e, n.parent.nodeIndex).componentView;
                        2 & t.def.flags && (t.state |= 8)
                    }
                    if (t.instance[n.bindings[r].name] = i, 524288 & n.flags) {
                        s = s || {};
                        const t = Bt.unwrap(e.oldValues[n.bindingIndex + r]);
                        s[n.bindings[r].nonMinifiedName] = new Kt(t, i, 0 != (2 & e.state))
                    }
                    return e.oldValues[n.bindingIndex + r] = i, s
                }

                function vi(e, t) {
                    if (!(e.def.nodeFlags & t)) return;
                    const n = e.def.nodes;
                    let r = 0;
                    for (let i = 0; i < n.length; i++) {
                        const s = n[i];
                        let o = s.parent;
                        for (!o && s.flags & t && bi(e, i, s.flags & t, r++), 0 == (s.childFlags & t) && (i += s.childCount); o && 1 & o.flags && i === o.nodeIndex + o.childCount;) o.directChildFlags & t && (r = yi(e, o, t, r)), o = o.parent
                    }
                }

                function yi(e, t, n, r) {
                    for (let i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) {
                        const t = e.def.nodes[i];
                        t.flags & n && bi(e, i, t.flags & n, r++), i += t.childCount
                    }
                    return r
                }

                function bi(e, t, n, r) {
                    const i = zn(e, t);
                    if (!i) return;
                    const s = i.instance;
                    s && (Bn.setCurrentNode(e, t), 1048576 & n && Hn(e, 512, r) && s.ngAfterContentInit(), 2097152 & n && s.ngAfterContentChecked(), 4194304 & n && Hn(e, 768, r) && s.ngAfterViewInit(), 8388608 & n && s.ngAfterViewChecked(), 131072 & n && s.ngOnDestroy())
                }
                const wi = new xe("SCHEDULER_TOKEN", {
                        providedIn: "root",
                        factory: () => Ve
                    }),
                    _i = {},
                    xi = function() {
                        var e = {
                            LocaleId: 0,
                            DayPeriodsFormat: 1,
                            DayPeriodsStandalone: 2,
                            DaysFormat: 3,
                            DaysStandalone: 4,
                            MonthsFormat: 5,
                            MonthsStandalone: 6,
                            Eras: 7,
                            FirstDayOfWeek: 8,
                            WeekendRange: 9,
                            DateFormat: 10,
                            TimeFormat: 11,
                            DateTimeFormat: 12,
                            NumberSymbols: 13,
                            NumberFormats: 14,
                            CurrencySymbol: 15,
                            CurrencyName: 16,
                            Currencies: 17,
                            PluralCase: 18,
                            ExtraData: 19
                        };
                        return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e
                    }(),
                    Ci = void 0;
                var Si = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], Ci
                    ],
                    [
                        ["AM", "PM"], Ci, Ci
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], Ci, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], Ci, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", Ci, "{1} 'at' {0}", Ci],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(e) {
                        let t = Math.floor(Math.abs(e)),
                            n = e.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === t && 0 === n ? 1 : 5
                    }
                ];
                const Ei = "en-US";
                let Ti = Ei;

                function ki(e) {
                    var t;
                    t = "Expected localeId to be defined", null == e && function(e) {
                        throw new Error(`ASSERTION ERROR: ${e}`)
                    }(t), "string" == typeof e && (Ti = e.toLowerCase().replace(/_/g, "-"))
                }
                class Ai extends E {
                    constructor(e = !1) {
                        super(), this.__isAsync = e
                    }
                    emit(e) {
                        super.next(e)
                    }
                    subscribe(e, t, n) {
                        let r, i = e => null,
                            s = () => null;
                        e && "object" == typeof e ? (r = this.__isAsync ? t => {
                            setTimeout(() => e.next(t))
                        } : t => {
                            e.next(t)
                        }, e.error && (i = this.__isAsync ? t => {
                            setTimeout(() => e.error(t))
                        } : t => {
                            e.error(t)
                        }), e.complete && (s = this.__isAsync ? () => {
                            setTimeout(() => e.complete())
                        } : () => {
                            e.complete()
                        })) : (r = this.__isAsync ? t => {
                            setTimeout(() => e(t))
                        } : t => {
                            e(t)
                        }, t && (i = this.__isAsync ? e => {
                            setTimeout(() => t(e))
                        } : e => {
                            t(e)
                        }), n && (s = this.__isAsync ? () => {
                            setTimeout(() => n())
                        } : () => {
                            n()
                        }));
                        const o = super.subscribe(r, i, s);
                        return e instanceof h && e.add(o), o
                    }
                }

                function Ni() {
                    return this._results[zt()]()
                }
                class Ii {
                    constructor() {
                        this.dirty = !0, this._results = [], this.changes = new Ai, this.length = 0;
                        const e = zt(),
                            t = Ii.prototype;
                        t[e] || (t[e] = Ni)
                    }
                    map(e) {
                        return this._results.map(e)
                    }
                    filter(e) {
                        return this._results.filter(e)
                    }
                    find(e) {
                        return this._results.find(e)
                    }
                    reduce(e, t) {
                        return this._results.reduce(e, t)
                    }
                    forEach(e) {
                        this._results.forEach(e)
                    }
                    some(e) {
                        return this._results.some(e)
                    }
                    toArray() {
                        return this._results.slice()
                    }
                    toString() {
                        return this._results.toString()
                    }
                    reset(e) {
                        this._results = function e(t, n) {
                            void 0 === n && (n = t);
                            for (let r = 0; r < t.length; r++) {
                                let i = t[r];
                                Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i)
                            }
                            return n
                        }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                    }
                    notifyOnChanges() {
                        this.changes.emit(this)
                    }
                    setDirty() {
                        this.dirty = !0
                    }
                    destroy() {
                        this.changes.complete(), this.changes.unsubscribe()
                    }
                }
                const Ri = new xe("Application Initializer");
                class Oi {
                    constructor(e) {
                        this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const e = [],
                            t = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let n = 0; n < this.appInits.length; n++) {
                                const t = this.appInits[n]();
                                Zt(t) && e.push(t)
                            }
                        Promise.all(e).then(() => {
                            t()
                        }).catch(e => {
                            this.reject(e)
                        }), 0 === e.length && t(), this.initialized = !0
                    }
                }
                const Pi = new xe("AppId");

                function Di() {
                    return `${Mi()}${Mi()}${Mi()}`
                }

                function Mi() {
                    return String.fromCharCode(97 + Math.floor(25 * Math.random()))
                }
                const ji = new xe("Platform Initializer"),
                    Li = new xe("Platform ID"),
                    Ui = new xe("appBootstrapListener");
                class Hi {
                    log(e) {
                        console.log(e)
                    }
                    warn(e) {
                        console.warn(e)
                    }
                }
                const Fi = new xe("LocaleId"),
                    $i = !1;

                function zi() {
                    throw new Error("Runtime compiler is not loaded")
                }
                const Vi = zi,
                    qi = zi,
                    Bi = zi,
                    Wi = zi;
                class Qi {
                    constructor() {
                        this.compileModuleSync = Vi, this.compileModuleAsync = qi, this.compileModuleAndAllComponentsSync = Bi, this.compileModuleAndAllComponentsAsync = Wi
                    }
                    clearCache() {}
                    clearCacheFor(e) {}
                    getModuleId(e) {}
                }
                class Zi {}
                let Gi, Ki;

                function Xi() {
                    const e = _e.wtf;
                    return !(!e || !(Gi = e.trace) || (Ki = Gi.events, 0))
                }
                const Yi = Xi();

                function Ji(e, t) {
                    return null
                }
                const es = Yi ? function(e, t = null) {
                        return Ki.createScope(e, t)
                    } : (e, t) => Ji,
                    ts = Yi ? function(e, t) {
                        return Gi.leaveScope(e, t), t
                    } : (e, t) => t,
                    ns = (() => Promise.resolve(0))();

                function rs(e) {
                    "undefined" == typeof Zone ? ns.then(() => {
                        e && e.apply(null, null)
                    }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
                }
                class is {
                    constructor({
                        enableLongStackTrace: e = !1
                    }) {
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ai(!1), this.onMicrotaskEmpty = new Ai(!1), this.onStable = new Ai(!1), this.onError = new Ai(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        var t;
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (t = this)._inner = t._inner.fork({
                            name: "angular",
                            properties: {
                                isAngularZone: !0
                            },
                            onInvokeTask: (e, n, r, i, s, o) => {
                                try {
                                    return ls(t), e.invokeTask(r, i, s, o)
                                } finally {
                                    us(t)
                                }
                            },
                            onInvoke: (e, n, r, i, s, o, a) => {
                                try {
                                    return ls(t), e.invoke(r, i, s, o, a)
                                } finally {
                                    us(t)
                                }
                            },
                            onHasTask: (e, n, r, i) => {
                                e.hasTask(r, i), n === r && ("microTask" == i.change ? (t.hasPendingMicrotasks = i.microTask, as(t)) : "macroTask" == i.change && (t.hasPendingMacrotasks = i.macroTask))
                            },
                            onHandleError: (e, n, r, i) => (e.handleError(r, i), t.runOutsideAngular(() => t.onError.emit(i)), !1)
                        })
                    }
                    static isInAngularZone() {
                        return !0 === Zone.current.get("isAngularZone")
                    }
                    static assertInAngularZone() {
                        if (!is.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                    }
                    static assertNotInAngularZone() {
                        if (is.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                    }
                    run(e, t, n) {
                        return this._inner.run(e, t, n)
                    }
                    runTask(e, t, n, r) {
                        const i = this._inner,
                            s = i.scheduleEventTask("NgZoneEvent: " + r, e, os, ss, ss);
                        try {
                            return i.runTask(s, t, n)
                        } finally {
                            i.cancelTask(s)
                        }
                    }
                    runGuarded(e, t, n) {
                        return this._inner.runGuarded(e, t, n)
                    }
                    runOutsideAngular(e) {
                        return this._outer.run(e)
                    }
                }

                function ss() {}
                const os = {};

                function as(e) {
                    if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                        e._nesting++, e.onMicrotaskEmpty.emit(null)
                    } finally {
                        if (e._nesting--, !e.hasPendingMicrotasks) try {
                            e.runOutsideAngular(() => e.onStable.emit(null))
                        } finally {
                            e.isStable = !0
                        }
                    }
                }

                function ls(e) {
                    e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
                }

                function us(e) {
                    e._nesting--, as(e)
                }
                class cs {
                    constructor() {
                        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ai, this.onMicrotaskEmpty = new Ai, this.onStable = new Ai, this.onError = new Ai
                    }
                    run(e) {
                        return e()
                    }
                    runGuarded(e) {
                        return e()
                    }
                    runOutsideAngular(e) {
                        return e()
                    }
                    runTask(e) {
                        return e()
                    }
                }
                class hs {
                    constructor(e) {
                        this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run(() => {
                            this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                        })
                    }
                    _watchAngularEvents() {
                        this._ngZone.onUnstable.subscribe({
                            next: () => {
                                this._didWork = !0, this._isZoneStable = !1
                            }
                        }), this._ngZone.runOutsideAngular(() => {
                            this._ngZone.onStable.subscribe({
                                next: () => {
                                    is.assertNotInAngularZone(), rs(() => {
                                        this._isZoneStable = !0, this._runCallbacksIfReady()
                                    })
                                }
                            })
                        })
                    }
                    increasePendingRequestCount() {
                        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                    }
                    decreasePendingRequestCount() {
                        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                        return this._runCallbacksIfReady(), this._pendingCount
                    }
                    isStable() {
                        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                    }
                    _runCallbacksIfReady() {
                        if (this.isStable()) rs(() => {
                            for (; 0 !== this._callbacks.length;) {
                                let e = this._callbacks.pop();
                                clearTimeout(e.timeoutId), e.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        });
                        else {
                            let e = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter(t => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)), this._didWork = !0
                        }
                    }
                    getPendingTasks() {
                        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(e => ({
                            source: e.source,
                            creationLocation: e.creationLocation,
                            data: e.data
                        })) : []
                    }
                    addCallback(e, t, n) {
                        let r = -1;
                        t && t > 0 && (r = setTimeout(() => {
                            this._callbacks = this._callbacks.filter(e => e.timeoutId !== r), e(this._didWork, this.getPendingTasks())
                        }, t)), this._callbacks.push({
                            doneCb: e,
                            timeoutId: r,
                            updateCb: n
                        })
                    }
                    whenStable(e, t, n) {
                        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(e, t, n), this._runCallbacksIfReady()
                    }
                    getPendingRequestCount() {
                        return this._pendingCount
                    }
                    findProviders(e, t, n) {
                        return []
                    }
                }
                class ds {
                    constructor() {
                        this._applications = new Map, gs.addToWindow(this)
                    }
                    registerApplication(e, t) {
                        this._applications.set(e, t)
                    }
                    unregisterApplication(e) {
                        this._applications.delete(e)
                    }
                    unregisterAllApplications() {
                        this._applications.clear()
                    }
                    getTestability(e) {
                        return this._applications.get(e) || null
                    }
                    getAllTestabilities() {
                        return Array.from(this._applications.values())
                    }
                    getAllRootElements() {
                        return Array.from(this._applications.keys())
                    }
                    findTestabilityInTree(e, t = !0) {
                        return gs.findTestabilityInTree(this, e, t)
                    }
                }
                class fs {
                    addToWindow(e) {}
                    findTestabilityInTree(e, t, n) {
                        return null
                    }
                }
                let ps, gs = new fs,
                    ms = function(e, t, n) {
                        return e.get(Zi).createCompiler([t]).compileModuleAsync(n)
                    },
                    vs = function(e) {
                        return e instanceof sn
                    };
                const ys = new xe("AllowMultipleToken");
                class bs {
                    constructor(e, t) {
                        this.name = e, this.token = t
                    }
                }

                function ws(e, t, n = []) {
                    const r = `Platform: ${t}`,
                        i = new xe(r);
                    return (t = []) => {
                        let s = _s();
                        if (!s || s.injector.get(ys, !1))
                            if (e) e(n.concat(t).concat({
                                provide: i,
                                useValue: !0
                            }));
                            else {
                                const e = n.concat(t).concat({
                                    provide: i,
                                    useValue: !0
                                });
                                ! function(e) {
                                    if (ps && !ps.destroyed && !ps.injector.get(ys, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                    ps = e.get(xs);
                                    const t = e.get(ji, null);
                                    t && t.forEach(e => e())
                                }(Rt.create({
                                    providers: e,
                                    name: r
                                }))
                            } return function(e) {
                            const t = _s();
                            if (!t) throw new Error("No platform exists!");
                            if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                            return t
                        }(i)
                    }
                }

                function _s() {
                    return ps && !ps.destroyed ? ps : null
                }
                class xs {
                    constructor(e) {
                        this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(e, t) {
                        const n = "noop" === (i = t ? t.ngZone : void 0) ? new cs : ("zone.js" === i ? void 0 : i) || new is({
                                enableLongStackTrace: Je()
                            }),
                            r = [{
                                provide: is,
                                useValue: n
                            }];
                        var i;
                        return n.run(() => {
                            const t = Rt.create({
                                    providers: r,
                                    parent: this.injector,
                                    name: e.moduleType.name
                                }),
                                i = e.create(t),
                                s = i.injector.get(Ke, null);
                            if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return $i && ki(i.injector.get(Fi, Ei) || Ei), i.onDestroy(() => Es(this._modules, i)), n.runOutsideAngular(() => n.onError.subscribe({
                                    next: e => {
                                        s.handleError(e)
                                    }
                                })),
                                function(e, t, n) {
                                    try {
                                        const r = n();
                                        return Zt(r) ? r.catch(n => {
                                            throw t.runOutsideAngular(() => e.handleError(n)), n
                                        }) : r
                                    } catch (r) {
                                        throw t.runOutsideAngular(() => e.handleError(r)), r
                                    }
                                }(s, n, () => {
                                    const e = i.injector.get(Oi);
                                    return e.runInitializers(), e.donePromise.then(() => (this._moduleDoBootstrap(i), i))
                                })
                        })
                    }
                    bootstrapModule(e, t = []) {
                        const n = Cs({}, t);
                        return ms(this.injector, n, e).then(e => this.bootstrapModuleFactory(e, n))
                    }
                    _moduleDoBootstrap(e) {
                        const t = e.injector.get(Ss);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(e => t.bootstrap(e));
                        else {
                            if (!e.instance.ngDoBootstrap) throw new Error(`The module ${fe(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                    onDestroy(e) {
                        this._destroyListeners.push(e)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(e => e.destroy()), this._destroyListeners.forEach(e => e()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }

                function Cs(e, t) {
                    return Array.isArray(t) ? t.reduce(Cs, e) : Object.assign({}, e, t)
                }
                let Ss = (() => {
                    class e {
                        constructor(e, t, n, r, i, s) {
                            this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = i, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Je(), this._zone.onMicrotaskEmpty.subscribe({
                                next: () => {
                                    this._zone.run(() => {
                                        this.tick()
                                    })
                                }
                            });
                            const o = new w(e => {
                                    this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                        e.next(this._stable), e.complete()
                                    })
                                }),
                                a = new w(e => {
                                    let t;
                                    this._zone.runOutsideAngular(() => {
                                        t = this._zone.onStable.subscribe(() => {
                                            is.assertNotInAngularZone(), rs(() => {
                                                this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, e.next(!0))
                                            })
                                        })
                                    });
                                    const n = this._zone.onUnstable.subscribe(() => {
                                        is.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                            e.next(!1)
                                        }))
                                    });
                                    return () => {
                                        t.unsubscribe(), n.unsubscribe()
                                    }
                                });
                            this.isStable = function(...e) {
                                let t = Number.POSITIVE_INFINITY,
                                    n = null,
                                    r = e[e.length - 1];
                                return k(r) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof w ? e[0] : W(t)(Q(e, n))
                            }(o, a.pipe(e => Z()(function(e, t) {
                                return function(t) {
                                    let n;
                                    n = "function" == typeof e ? e : function() {
                                        return e
                                    };
                                    const r = Object.create(t, Y);
                                    return r.source = t, r.subjectFactory = n, r
                                }
                            }(ee)(e))))
                        }
                        bootstrap(e, t) {
                            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                            let n;
                            n = e instanceof Yt ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                            const r = vs(n) ? null : this._injector.get(Ue),
                                i = n.create(Rt.NULL, [], t || n.selector, r);
                            i.onDestroy(() => {
                                this._unloadComponent(i)
                            });
                            const s = i.injector.get(hs, null);
                            return s && i.injector.get(ds).registerApplication(i.location.nativeElement, s), this._loadComponent(i), Je() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
                        }
                        tick() {
                            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                            const t = e._tickScope();
                            try {
                                this._runningTick = !0;
                                for (let e of this._views) e.detectChanges();
                                if (this._enforceNoNewChanges)
                                    for (let e of this._views) e.checkNoChanges()
                            } catch (n) {
                                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
                            } finally {
                                this._runningTick = !1, ts(t)
                            }
                        }
                        attachView(e) {
                            const t = e;
                            this._views.push(t), t.attachToAppRef(this)
                        }
                        detachView(e) {
                            const t = e;
                            Es(this._views, t), t.detachFromAppRef()
                        }
                        _loadComponent(e) {
                            this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Ui, []).concat(this._bootstrapListeners).forEach(t => t(e))
                        }
                        _unloadComponent(e) {
                            this.detachView(e.hostView), Es(this.components, e)
                        }
                        ngOnDestroy() {
                            this._views.slice().forEach(e => e.destroy())
                        }
                        get viewCount() {
                            return this._views.length
                        }
                    }
                    return e._tickScope = es("ApplicationRef#tick()"), e
                })();

                function Es(e, t) {
                    const n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                }
                class Ts {}
                const ks = "#",
                    As = "NgFactory";
                class Ns {}
                const Is = {
                    factoryPathPrefix: "",
                    factoryPathSuffix: ".ngfactory"
                };
                class Rs {
                    constructor(e, t) {
                        this._compiler = e, this._config = t || Is
                    }
                    load(e) {
                        return !$i && this._compiler instanceof Qi ? this.loadFactory(e) : this.loadAndCompile(e)
                    }
                    loadAndCompile(e) {
                        let [t, r] = e.split(ks);
                        return void 0 === r && (r = "default"), n("crnd")(t).then(e => e[r]).then(e => Os(e, t, r)).then(e => this._compiler.compileModuleAsync(e))
                    }
                    loadFactory(e) {
                        let [t, r] = e.split(ks), i = As;
                        return void 0 === r && (r = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + t + this._config.factoryPathSuffix).then(e => e[r + i]).then(e => Os(e, t, r))
                    }
                }

                function Os(e, t, n) {
                    if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
                    return e
                }
                class Ps {
                    constructor(e, t) {
                        this.name = e, this.callback = t
                    }
                }
                class Ds {
                    constructor(e, t, n) {
                        this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = e, t && t instanceof Ms && t.addChild(this)
                    }
                    get injector() {
                        return this._debugContext.injector
                    }
                    get componentInstance() {
                        return this._debugContext.component
                    }
                    get context() {
                        return this._debugContext.context
                    }
                    get references() {
                        return this._debugContext.references
                    }
                    get providerTokens() {
                        return this._debugContext.providerTokens
                    }
                }
                class Ms extends Ds {
                    constructor(e, t, n) {
                        super(e, t, n), this.properties = {}, this.attributes = {}, this.classes = {}, this.styles = {}, this.childNodes = [], this.nativeElement = e
                    }
                    addChild(e) {
                        e && (this.childNodes.push(e), e.parent = this)
                    }
                    removeChild(e) {
                        const t = this.childNodes.indexOf(e); - 1 !== t && (e.parent = null, this.childNodes.splice(t, 1))
                    }
                    insertChildrenAfter(e, t) {
                        const n = this.childNodes.indexOf(e); - 1 !== n && (this.childNodes.splice(n + 1, 0, ...t), t.forEach(t => {
                            t.parent && t.parent.removeChild(t), e.parent = this
                        }))
                    }
                    insertBefore(e, t) {
                        const n = this.childNodes.indexOf(e); - 1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, this.childNodes.splice(n, 0, t))
                    }
                    query(e) {
                        return this.queryAll(e)[0] || null
                    }
                    queryAll(e) {
                        const t = [];
                        return function e(t, n, r) {
                            t.childNodes.forEach(t => {
                                t instanceof Ms && (n(t) && r.push(t), e(t, n, r))
                            })
                        }(this, e, t), t
                    }
                    queryAllNodes(e) {
                        const t = [];
                        return function e(t, n, r) {
                            t instanceof Ms && t.childNodes.forEach(t => {
                                n(t) && r.push(t), t instanceof Ms && e(t, n, r)
                            })
                        }(this, e, t), t
                    }
                    get children() {
                        return this.childNodes.filter(e => e instanceof Ms)
                    }
                    triggerEventHandler(e, t) {
                        this.listeners.forEach(n => {
                            n.name == e && n.callback(t)
                        })
                    }
                }
                const js = new Map,
                    Ls = function(e) {
                        return js.get(e) || null
                    };

                function Us(e) {
                    js.set(e.nativeNode, e)
                }
                const Hs = ws(null, "core", [{
                    provide: Li,
                    useValue: "unknown"
                }, {
                    provide: xs,
                    deps: [Rt]
                }, {
                    provide: ds,
                    deps: []
                }, {
                    provide: Hi,
                    deps: []
                }]);

                function Fs() {
                    return Nn
                }

                function $s() {
                    return In
                }

                function zs(e) {
                    return e ? ($i && ki(e), e) : Ei
                }

                function Vs(e) {
                    let t = [];
                    return e.onStable.subscribe(() => {
                            for (; t.length;) t.pop()()
                        }),
                        function(e) {
                            t.push(e)
                        }
                }
                class qs {
                    constructor(e) {}
                }

                function Bs(e, t, n, r, i, s) {
                    e |= 1;
                    const {
                        matchedQueries: o,
                        references: a,
                        matchedQueryIds: l
                    } = cr(t);
                    return {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        flags: e,
                        checkIndex: -1,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: o,
                        matchedQueryIds: l,
                        references: a,
                        ngContentIndex: n,
                        childCount: r,
                        bindings: [],
                        bindingFlags: 0,
                        outputs: [],
                        element: {
                            ns: null,
                            name: null,
                            attrs: null,
                            template: s ? pr(s) : null,
                            componentProvider: null,
                            componentView: null,
                            componentRendererType: null,
                            publicProviders: null,
                            allProviders: null,
                            handleEvent: i || Wn
                        },
                        provider: null,
                        text: null,
                        query: null,
                        ngContent: null
                    }
                }

                function Ws(e, t, n, r, i, s, o = [], a, l, u, c, h) {
                    u || (u = Wn);
                    const {
                        matchedQueries: d,
                        references: f,
                        matchedQueryIds: p
                    } = cr(n);
                    let g = null,
                        m = null;
                    s && ([g, m] = _r(s)), a = a || [];
                    const v = new Array(a.length);
                    for (let w = 0; w < a.length; w++) {
                        const [e, t, n] = a[w], [r, i] = _r(t);
                        let s = void 0,
                            o = void 0;
                        switch (15 & e) {
                            case 4:
                                o = n;
                                break;
                            case 1:
                            case 8:
                                s = n
                        }
                        v[w] = {
                            flags: e,
                            ns: r,
                            name: i,
                            nonMinifiedName: i,
                            securityContext: s,
                            suffix: o
                        }
                    }
                    l = l || [];
                    const y = new Array(l.length);
                    for (let w = 0; w < l.length; w++) {
                        const [e, t] = l[w];
                        y[w] = {
                            type: 0,
                            target: e,
                            eventName: t,
                            propName: null
                        }
                    }
                    const b = (o = o || []).map(([e, t]) => {
                        const [n, r] = _r(e);
                        return [n, r, t]
                    });
                    return h = function(e) {
                        if (e && e.id === Gn) {
                            const t = null != e.encapsulation && e.encapsulation !== ze.None || e.styles.length || Object.keys(e.data).length;
                            e.id = t ? `c${Yn++}` : Kn
                        }
                        return e && e.id === Kn && (e = null), e || null
                    }(h), c && (t |= 33554432), {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: e,
                        flags: t |= 1,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: d,
                        matchedQueryIds: p,
                        references: f,
                        ngContentIndex: r,
                        childCount: i,
                        bindings: v,
                        bindingFlags: xr(v),
                        outputs: y,
                        element: {
                            ns: g,
                            name: m,
                            attrs: b,
                            template: null,
                            componentProvider: null,
                            componentView: c || null,
                            componentRendererType: h,
                            publicProviders: null,
                            allProviders: null,
                            handleEvent: u || Wn
                        },
                        provider: null,
                        text: null,
                        query: null,
                        ngContent: null
                    }
                }

                function Qs(e, t, n) {
                    const r = n.element,
                        i = e.root.selectorOrNode,
                        s = e.renderer;
                    let o;
                    if (e.parent || !i) {
                        o = r.name ? s.createElement(r.name, r.ns) : s.createComment("");
                        const i = dr(e, t, n);
                        i && s.appendChild(i, o)
                    } else o = s.selectRootElement(i, !!r.componentRendererType && r.componentRendererType.encapsulation === ze.ShadowDom);
                    if (r.attrs)
                        for (let a = 0; a < r.attrs.length; a++) {
                            const [e, t, n] = r.attrs[a];
                            s.setAttribute(o, t, n, e)
                        }
                    return o
                }

                function Zs(e, t, n, r) {
                    for (let o = 0; o < n.outputs.length; o++) {
                        const a = n.outputs[o],
                            l = Gs(e, n.nodeIndex, (s = a.eventName, (i = a.target) ? `${i}:${s}` : s));
                        let u = a.target,
                            c = e;
                        "component" === a.target && (u = null, c = t);
                        const h = c.renderer.listen(u || r, a.eventName, l);
                        e.disposables[n.outputIndex + o] = h
                    }
                    var i, s
                }

                function Gs(e, t, n) {
                    return r => ir(e, t, n, r)
                }

                function Ks(e, t, n, r) {
                    if (!er(e, t, n, r)) return !1;
                    const i = t.bindings[n],
                        s = $n(e, t.nodeIndex),
                        o = s.renderElement,
                        a = i.name;
                    switch (15 & i.flags) {
                        case 1:
                            ! function(e, t, n, r, i, s) {
                                const o = t.securityContext;
                                let a = o ? e.root.sanitizer.sanitize(o, s) : s;
                                a = null != a ? a.toString() : null;
                                const l = e.renderer;
                                null != s ? l.setAttribute(n, i, a, r) : l.removeAttribute(n, i, r)
                            }(e, i, o, i.ns, a, r);
                            break;
                        case 2:
                            ! function(e, t, n, r) {
                                const i = e.renderer;
                                r ? i.addClass(t, n) : i.removeClass(t, n)
                            }(e, o, a, r);
                            break;
                        case 4:
                            ! function(e, t, n, r, i) {
                                let s = e.root.sanitizer.sanitize(_t.STYLE, i);
                                if (null != s) {
                                    s = s.toString();
                                    const e = t.suffix;
                                    null != e && (s += e)
                                } else s = null;
                                const o = e.renderer;
                                null != s ? o.setStyle(n, r, s) : o.removeStyle(n, r)
                            }(e, i, o, a, r);
                            break;
                        case 8:
                            ! function(e, t, n, r, i) {
                                const s = t.securityContext;
                                let o = s ? e.root.sanitizer.sanitize(s, i) : i;
                                e.renderer.setProperty(n, r, o)
                            }(33554432 & t.flags && 32 & i.flags ? s.componentView : e, i, o, a, r)
                    }
                    return !0
                }

                function Xs(e) {
                    const t = e.def.nodeMatchedQueries;
                    for (; e.parent && ur(e);) {
                        let n = e.parentNodeDef;
                        e = e.parent;
                        const r = n.nodeIndex + n.childCount;
                        for (let i = 0; i <= r; i++) {
                            const r = e.def.nodes[i];
                            67108864 & r.flags && 536870912 & r.flags && (r.query.filterId & t) === r.query.filterId && qn(e, i).setDirty(), !(1 & r.flags && i + r.childCount < n.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags || (i += r.childCount)
                        }
                    }
                    if (134217728 & e.def.nodeFlags)
                        for (let n = 0; n < e.def.nodes.length; n++) {
                            const t = e.def.nodes[n];
                            134217728 & t.flags && 536870912 & t.flags && qn(e, n).setDirty(), n += t.childCount
                        }
                }

                function Ys(e, t) {
                    const n = qn(e, t.nodeIndex);
                    if (!n.dirty) return;
                    let r, i = void 0;
                    if (67108864 & t.flags) {
                        const n = t.parent.parent;
                        i = Js(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, []), r = zn(e, t.parent.nodeIndex).instance
                    } else 134217728 & t.flags && (i = Js(e, 0, e.def.nodes.length - 1, t.query, []), r = e.component);
                    n.reset(i);
                    const s = t.query.bindings;
                    let o = !1;
                    for (let a = 0; a < s.length; a++) {
                        const e = s[a];
                        let t;
                        switch (e.bindingType) {
                            case 0:
                                t = n.first;
                                break;
                            case 1:
                                t = n, o = !0
                        }
                        r[e.propName] = t
                    }
                    o && n.notifyOnChanges()
                }

                function Js(e, t, n, r, i) {
                    for (let s = t; s <= n; s++) {
                        const t = e.def.nodes[s],
                            n = t.matchedQueries[r.id];
                        if (null != n && i.push(eo(e, t, n)), 1 & t.flags && t.element.template && (t.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                            const n = $n(e, s);
                            if ((t.childMatchedQueries & r.filterId) === r.filterId && (Js(e, s + 1, s + t.childCount, r, i), s += t.childCount), 16777216 & t.flags) {
                                const e = n.viewContainer._embeddedViews;
                                for (let t = 0; t < e.length; t++) {
                                    const s = e[t],
                                        o = sr(s);
                                    o && o === n && Js(s, 0, s.def.nodes.length - 1, r, i)
                                }
                            }
                            const o = n.template._projectedViews;
                            if (o)
                                for (let e = 0; e < o.length; e++) {
                                    const t = o[e];
                                    Js(t, 0, t.def.nodes.length - 1, r, i)
                                }
                        }(t.childMatchedQueries & r.filterId) !== r.filterId && (s += t.childCount)
                    }
                    return i
                }

                function eo(e, t, n) {
                    if (null != n) switch (n) {
                        case 1:
                            return $n(e, t.nodeIndex).renderElement;
                        case 0:
                            return new an($n(e, t.nodeIndex).renderElement);
                        case 2:
                            return $n(e, t.nodeIndex).template;
                        case 3:
                            return $n(e, t.nodeIndex).viewContainer;
                        case 4:
                            return zn(e, t.nodeIndex).instance
                    }
                }

                function to(e, t) {
                    return {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: -1,
                        flags: 8,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: {},
                        matchedQueryIds: 0,
                        references: {},
                        ngContentIndex: e,
                        childCount: 0,
                        bindings: [],
                        bindingFlags: 0,
                        outputs: [],
                        element: null,
                        provider: null,
                        text: null,
                        query: null,
                        ngContent: {
                            index: t
                        }
                    }
                }

                function no(e, t, n) {
                    const r = dr(e, t, n);
                    r && vr(e, n.ngContent.index, 1, r, null, void 0)
                }

                function ro(e, t) {
                    const n = Object.keys(t),
                        r = n.length,
                        i = new Array(r);
                    for (let s = 0; s < r; s++) {
                        const e = n[s];
                        i[t[e]] = e
                    }
                    return function(e, t, n) {
                        const r = new Array(n.length);
                        for (let i = 0; i < n.length; i++) {
                            const e = n[i];
                            r[i] = {
                                flags: 8,
                                name: e,
                                ns: null,
                                nonMinifiedName: e,
                                securityContext: null,
                                suffix: null
                            }
                        }
                        return {
                            nodeIndex: -1,
                            parent: null,
                            renderParent: null,
                            bindingIndex: -1,
                            outputIndex: -1,
                            checkIndex: t,
                            flags: 64,
                            childFlags: 0,
                            directChildFlags: 0,
                            childMatchedQueries: 0,
                            matchedQueries: {},
                            matchedQueryIds: 0,
                            references: {},
                            ngContentIndex: -1,
                            childCount: 0,
                            bindings: r,
                            bindingFlags: xr(r),
                            outputs: [],
                            element: null,
                            provider: null,
                            text: null,
                            query: null,
                            ngContent: null
                        }
                    }(0, e, i)
                }

                function io(e, t, n) {
                    const r = new Array(n.length - 1);
                    for (let i = 1; i < n.length; i++) r[i - 1] = {
                        flags: 8,
                        name: null,
                        ns: null,
                        nonMinifiedName: null,
                        securityContext: null,
                        suffix: n[i]
                    };
                    return {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: e,
                        flags: 2,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: {},
                        matchedQueryIds: 0,
                        references: {},
                        ngContentIndex: t,
                        childCount: 0,
                        bindings: r,
                        bindingFlags: 8,
                        outputs: [],
                        element: null,
                        provider: null,
                        text: {
                            prefix: n[0]
                        },
                        query: null,
                        ngContent: null
                    }
                }

                function so(e, t, n) {
                    let r;
                    const i = e.renderer;
                    r = i.createText(n.text.prefix);
                    const s = dr(e, t, n);
                    return s && i.appendChild(s, r), {
                        renderText: r
                    }
                }

                function oo(e, t) {
                    return (null != e ? e.toString() : "") + t.suffix
                }

                function ao(e, t, n, r) {
                    let i = 0,
                        s = 0,
                        o = 0,
                        a = 0,
                        l = 0,
                        u = null,
                        c = null,
                        h = !1,
                        d = !1,
                        f = null;
                    for (let p = 0; p < t.length; p++) {
                        const e = t[p];
                        if (e.nodeIndex = p, e.parent = u, e.bindingIndex = i, e.outputIndex = s, e.renderParent = c, o |= e.flags, l |= e.matchedQueryIds, e.element) {
                            const t = e.element;
                            t.publicProviders = u ? u.element.publicProviders : Object.create(null), t.allProviders = t.publicProviders, h = !1, d = !1, e.element.template && (l |= e.element.template.nodeMatchedQueries)
                        }
                        if (uo(u, e, t.length), i += e.bindings.length, s += e.outputs.length, !c && 3 & e.flags && (f = e), 20224 & e.flags) {
                            h || (h = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                            const t = 0 != (32768 & e.flags);
                            0 == (8192 & e.flags) || t ? u.element.publicProviders[Zn(e.provider.token)] = e : (d || (d = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Zn(e.provider.token)] = e), t && (u.element.componentProvider = e)
                        }
                        if (u ? (u.childFlags |= e.flags, u.directChildFlags |= e.flags, u.childMatchedQueries |= e.matchedQueryIds, e.element && e.element.template && (u.childMatchedQueries |= e.element.template.nodeMatchedQueries)) : a |= e.flags, e.childCount > 0) u = e, lo(e) || (c = e);
                        else
                            for (; u && p === u.nodeIndex + u.childCount;) {
                                const e = u.parent;
                                e && (e.childFlags |= u.childFlags, e.childMatchedQueries |= u.childMatchedQueries), c = (u = e) && lo(u) ? u.renderParent : u
                            }
                    }
                    return {
                        factory: null,
                        nodeFlags: o,
                        rootNodeFlags: a,
                        nodeMatchedQueries: l,
                        flags: e,
                        nodes: t,
                        updateDirectives: n || Wn,
                        updateRenderer: r || Wn,
                        handleEvent: (e, n, r, i) => t[n].element.handleEvent(e, r, i),
                        bindingCount: i,
                        outputCount: s,
                        lastRenderRootNode: f
                    }
                }

                function lo(e) {
                    return 0 != (1 & e.flags) && null === e.element.name
                }

                function uo(e, t, n) {
                    const r = t.element && t.element.template;
                    if (r) {
                        if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                        if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`)
                    }
                    if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0))) throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`);
                    if (t.query) {
                        if (67108864 & t.flags && (!e || 0 == (16384 & e.flags))) throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`);
                        if (134217728 & t.flags && e) throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`)
                    }
                    if (t.childCount) {
                        const r = e ? e.nodeIndex + e.childCount : n - 1;
                        if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r) throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`)
                    }
                }

                function co(e, t, n, r) {
                    const i = po(e.root, e.renderer, e, t, n);
                    return go(i, e.component, r), mo(i), i
                }

                function ho(e, t, n) {
                    const r = po(e, e.renderer, null, null, t);
                    return go(r, n, n), mo(r), r
                }

                function fo(e, t, n, r) {
                    const i = t.element.componentRendererType;
                    let s;
                    return s = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer, po(e.root, s, e, t.element.componentProvider, n)
                }

                function po(e, t, n, r, i) {
                    const s = new Array(i.nodes.length),
                        o = i.outputCount ? new Array(i.outputCount) : null;
                    return {
                        def: i,
                        parent: n,
                        viewContainerParent: null,
                        parentNodeDef: r,
                        context: null,
                        component: null,
                        nodes: s,
                        state: 13,
                        root: e,
                        renderer: t,
                        oldValues: new Array(i.bindingCount),
                        disposables: o,
                        initIndex: -1
                    }
                }

                function go(e, t, n) {
                    e.component = t, e.context = n
                }

                function mo(e) {
                    let t;
                    lr(e) && (t = $n(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
                    const n = e.def,
                        r = e.nodes;
                    for (let i = 0; i < n.nodes.length; i++) {
                        const s = n.nodes[i];
                        let o;
                        switch (Bn.setCurrentNode(e, i), 201347067 & s.flags) {
                            case 1:
                                const n = Qs(e, t, s);
                                let a = void 0;
                                if (33554432 & s.flags) {
                                    const t = pr(s.element.componentView);
                                    a = Bn.createComponentView(e, s, t, n)
                                }
                                Zs(e, a, s, n), o = {
                                    renderElement: n,
                                    componentView: a,
                                    viewContainer: null,
                                    template: s.element.template ? $r(e, s) : void 0
                                }, 16777216 & s.flags && (o.viewContainer = Lr(e, s, o));
                                break;
                            case 2:
                                o = so(e, t, s);
                                break;
                            case 512:
                            case 1024:
                            case 2048:
                            case 256:
                                (o = r[i]) || 4096 & s.flags || (o = {
                                    instance: ai(e, s)
                                });
                                break;
                            case 16:
                                o = {
                                    instance: li(e, s)
                                };
                                break;
                            case 16384:
                                (o = r[i]) || (o = {
                                    instance: ui(e, s)
                                }), 32768 & s.flags && go($n(e, s.parent.nodeIndex).componentView, o.instance, o.instance);
                                break;
                            case 32:
                            case 64:
                            case 128:
                                o = {
                                    value: void 0
                                };
                                break;
                            case 67108864:
                            case 134217728:
                                o = new Ii;
                                break;
                            case 8:
                                no(e, t, s), o = void 0
                        }
                        r[i] = o
                    }
                    Eo(e, So.CreateViewNodes), No(e, 201326592, 268435456, 0)
                }

                function vo(e) {
                    wo(e), Bn.updateDirectives(e, 1), To(e, So.CheckNoChanges), Bn.updateRenderer(e, 1), Eo(e, So.CheckNoChanges), e.state &= -97
                }

                function yo(e) {
                    1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, Un(e, 0, 256), wo(e), Bn.updateDirectives(e, 0), To(e, So.CheckAndUpdate), No(e, 67108864, 536870912, 0);
                    let t = Un(e, 256, 512);
                    vi(e, 2097152 | (t ? 1048576 : 0)), Bn.updateRenderer(e, 0), Eo(e, So.CheckAndUpdate), No(e, 134217728, 536870912, 0), vi(e, 8388608 | ((t = Un(e, 512, 768)) ? 4194304 : 0)), 2 & e.def.flags && (e.state &= -9), e.state &= -97, Un(e, 768, 1024)
                }

                function bo(e, t, n, r, i, s, o, a, l, u, c, h, d) {
                    return 0 === n ? function(e, t, n, r, i, s, o, a, l, u, c, h) {
                        switch (201347067 & t.flags) {
                            case 1:
                                return function(e, t, n, r, i, s, o, a, l, u, c, h) {
                                    const d = t.bindings.length;
                                    let f = !1;
                                    return d > 0 && Ks(e, t, 0, n) && (f = !0), d > 1 && Ks(e, t, 1, r) && (f = !0), d > 2 && Ks(e, t, 2, i) && (f = !0), d > 3 && Ks(e, t, 3, s) && (f = !0), d > 4 && Ks(e, t, 4, o) && (f = !0), d > 5 && Ks(e, t, 5, a) && (f = !0), d > 6 && Ks(e, t, 6, l) && (f = !0), d > 7 && Ks(e, t, 7, u) && (f = !0), d > 8 && Ks(e, t, 8, c) && (f = !0), d > 9 && Ks(e, t, 9, h) && (f = !0), f
                                }(e, t, n, r, i, s, o, a, l, u, c, h);
                            case 2:
                                return function(e, t, n, r, i, s, o, a, l, u, c, h) {
                                    let d = !1;
                                    const f = t.bindings,
                                        p = f.length;
                                    if (p > 0 && er(e, t, 0, n) && (d = !0), p > 1 && er(e, t, 1, r) && (d = !0), p > 2 && er(e, t, 2, i) && (d = !0), p > 3 && er(e, t, 3, s) && (d = !0), p > 4 && er(e, t, 4, o) && (d = !0), p > 5 && er(e, t, 5, a) && (d = !0), p > 6 && er(e, t, 6, l) && (d = !0), p > 7 && er(e, t, 7, u) && (d = !0), p > 8 && er(e, t, 8, c) && (d = !0), p > 9 && er(e, t, 9, h) && (d = !0), d) {
                                        let d = t.text.prefix;
                                        p > 0 && (d += oo(n, f[0])), p > 1 && (d += oo(r, f[1])), p > 2 && (d += oo(i, f[2])), p > 3 && (d += oo(s, f[3])), p > 4 && (d += oo(o, f[4])), p > 5 && (d += oo(a, f[5])), p > 6 && (d += oo(l, f[6])), p > 7 && (d += oo(u, f[7])), p > 8 && (d += oo(c, f[8])), p > 9 && (d += oo(h, f[9]));
                                        const g = Fn(e, t.nodeIndex).renderText;
                                        e.renderer.setValue(g, d)
                                    }
                                    return d
                                }(e, t, n, r, i, s, o, a, l, u, c, h);
                            case 16384:
                                return function(e, t, n, r, i, s, o, a, l, u, c, h) {
                                    const d = zn(e, t.nodeIndex),
                                        f = d.instance;
                                    let p = !1,
                                        g = void 0;
                                    const m = t.bindings.length;
                                    return m > 0 && Jn(e, t, 0, n) && (p = !0, g = mi(e, d, t, 0, n, g)), m > 1 && Jn(e, t, 1, r) && (p = !0, g = mi(e, d, t, 1, r, g)), m > 2 && Jn(e, t, 2, i) && (p = !0, g = mi(e, d, t, 2, i, g)), m > 3 && Jn(e, t, 3, s) && (p = !0, g = mi(e, d, t, 3, s, g)), m > 4 && Jn(e, t, 4, o) && (p = !0, g = mi(e, d, t, 4, o, g)), m > 5 && Jn(e, t, 5, a) && (p = !0, g = mi(e, d, t, 5, a, g)), m > 6 && Jn(e, t, 6, l) && (p = !0, g = mi(e, d, t, 6, l, g)), m > 7 && Jn(e, t, 7, u) && (p = !0, g = mi(e, d, t, 7, u, g)), m > 8 && Jn(e, t, 8, c) && (p = !0, g = mi(e, d, t, 8, c, g)), m > 9 && Jn(e, t, 9, h) && (p = !0, g = mi(e, d, t, 9, h, g)), g && f.ngOnChanges(g), 65536 & t.flags && Hn(e, 256, t.nodeIndex) && f.ngOnInit(), 262144 & t.flags && f.ngDoCheck(), p
                                }(e, t, n, r, i, s, o, a, l, u, c, h);
                            case 32:
                            case 64:
                            case 128:
                                return function(e, t, n, r, i, s, o, a, l, u, c, h) {
                                    const d = t.bindings;
                                    let f = !1;
                                    const p = d.length;
                                    if (p > 0 && er(e, t, 0, n) && (f = !0), p > 1 && er(e, t, 1, r) && (f = !0), p > 2 && er(e, t, 2, i) && (f = !0), p > 3 && er(e, t, 3, s) && (f = !0), p > 4 && er(e, t, 4, o) && (f = !0), p > 5 && er(e, t, 5, a) && (f = !0), p > 6 && er(e, t, 6, l) && (f = !0), p > 7 && er(e, t, 7, u) && (f = !0), p > 8 && er(e, t, 8, c) && (f = !0), p > 9 && er(e, t, 9, h) && (f = !0), f) {
                                        const f = Vn(e, t.nodeIndex);
                                        let g;
                                        switch (201347067 & t.flags) {
                                            case 32:
                                                g = new Array(d.length), p > 0 && (g[0] = n), p > 1 && (g[1] = r), p > 2 && (g[2] = i), p > 3 && (g[3] = s), p > 4 && (g[4] = o), p > 5 && (g[5] = a), p > 6 && (g[6] = l), p > 7 && (g[7] = u), p > 8 && (g[8] = c), p > 9 && (g[9] = h);
                                                break;
                                            case 64:
                                                g = {}, p > 0 && (g[d[0].name] = n), p > 1 && (g[d[1].name] = r), p > 2 && (g[d[2].name] = i), p > 3 && (g[d[3].name] = s), p > 4 && (g[d[4].name] = o), p > 5 && (g[d[5].name] = a), p > 6 && (g[d[6].name] = l), p > 7 && (g[d[7].name] = u), p > 8 && (g[d[8].name] = c), p > 9 && (g[d[9].name] = h);
                                                break;
                                            case 128:
                                                const e = n;
                                                switch (p) {
                                                    case 1:
                                                        g = e.transform(n);
                                                        break;
                                                    case 2:
                                                        g = e.transform(r);
                                                        break;
                                                    case 3:
                                                        g = e.transform(r, i);
                                                        break;
                                                    case 4:
                                                        g = e.transform(r, i, s);
                                                        break;
                                                    case 5:
                                                        g = e.transform(r, i, s, o);
                                                        break;
                                                    case 6:
                                                        g = e.transform(r, i, s, o, a);
                                                        break;
                                                    case 7:
                                                        g = e.transform(r, i, s, o, a, l);
                                                        break;
                                                    case 8:
                                                        g = e.transform(r, i, s, o, a, l, u);
                                                        break;
                                                    case 9:
                                                        g = e.transform(r, i, s, o, a, l, u, c);
                                                        break;
                                                    case 10:
                                                        g = e.transform(r, i, s, o, a, l, u, c, h)
                                                }
                                        }
                                        f.value = g
                                    }
                                    return f
                                }(e, t, n, r, i, s, o, a, l, u, c, h);
                            default:
                                throw "unreachable"
                        }
                    }(e, t, r, i, s, o, a, l, u, c, h, d) : function(e, t, n) {
                        switch (201347067 & t.flags) {
                            case 1:
                                return function(e, t, n) {
                                    let r = !1;
                                    for (let i = 0; i < n.length; i++) Ks(e, t, i, n[i]) && (r = !0);
                                    return r
                                }(e, t, n);
                            case 2:
                                return function(e, t, n) {
                                    const r = t.bindings;
                                    let i = !1;
                                    for (let s = 0; s < n.length; s++) er(e, t, s, n[s]) && (i = !0);
                                    if (i) {
                                        let i = "";
                                        for (let e = 0; e < n.length; e++) i += oo(n[e], r[e]);
                                        i = t.text.prefix + i;
                                        const s = Fn(e, t.nodeIndex).renderText;
                                        e.renderer.setValue(s, i)
                                    }
                                    return i
                                }(e, t, n);
                            case 16384:
                                return function(e, t, n) {
                                    const r = zn(e, t.nodeIndex),
                                        i = r.instance;
                                    let s = !1,
                                        o = void 0;
                                    for (let a = 0; a < n.length; a++) Jn(e, t, a, n[a]) && (s = !0, o = mi(e, r, t, a, n[a], o));
                                    return o && i.ngOnChanges(o), 65536 & t.flags && Hn(e, 256, t.nodeIndex) && i.ngOnInit(), 262144 & t.flags && i.ngDoCheck(), s
                                }(e, t, n);
                            case 32:
                            case 64:
                            case 128:
                                return function(e, t, n) {
                                    const r = t.bindings;
                                    let i = !1;
                                    for (let s = 0; s < n.length; s++) er(e, t, s, n[s]) && (i = !0);
                                    if (i) {
                                        const i = Vn(e, t.nodeIndex);
                                        let s;
                                        switch (201347067 & t.flags) {
                                            case 32:
                                                s = n;
                                                break;
                                            case 64:
                                                s = {};
                                                for (let i = 0; i < n.length; i++) s[r[i].name] = n[i];
                                                break;
                                            case 128:
                                                const e = n[0],
                                                    t = n.slice(1);
                                                s = e.transform(...t)
                                        }
                                        i.value = s
                                    }
                                    return i
                                }(e, t, n);
                            default:
                                throw "unreachable"
                        }
                    }(e, t, r)
                }

                function wo(e) {
                    const t = e.def;
                    if (4 & t.nodeFlags)
                        for (let n = 0; n < t.nodes.length; n++) {
                            const r = t.nodes[n];
                            if (4 & r.flags) {
                                const t = $n(e, n).template._projectedViews;
                                if (t)
                                    for (let n = 0; n < t.length; n++) {
                                        const r = t[n];
                                        r.state |= 32, rr(r, e)
                                    }
                            } else 0 == (4 & r.childFlags) && (n += r.childCount)
                        }
                }

                function _o(e, t, n, r, i, s, o, a, l, u, c, h, d) {
                    return 0 === n ? function(e, t, n, r, i, s, o, a, l, u, c, h) {
                        const d = t.bindings.length;
                        d > 0 && tr(e, t, 0, n), d > 1 && tr(e, t, 1, r), d > 2 && tr(e, t, 2, i), d > 3 && tr(e, t, 3, s), d > 4 && tr(e, t, 4, o), d > 5 && tr(e, t, 5, a), d > 6 && tr(e, t, 6, l), d > 7 && tr(e, t, 7, u), d > 8 && tr(e, t, 8, c), d > 9 && tr(e, t, 9, h)
                    }(e, t, r, i, s, o, a, l, u, c, h, d) : function(e, t, n) {
                        for (let r = 0; r < n.length; r++) tr(e, t, r, n[r])
                    }(e, t, r), !1
                }

                function xo(e, t) {
                    if (qn(e, t.nodeIndex).dirty) throw Mn(Bn.createDebugContext(e, t.nodeIndex), `Query ${t.query.id} not dirty`, `Query ${t.query.id} dirty`, 0 != (1 & e.state))
                }

                function Co(e) {
                    if (!(128 & e.state)) {
                        if (To(e, So.Destroy), Eo(e, So.Destroy), vi(e, 131072), e.disposables)
                            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
                        ! function(e) {
                            if (!(16 & e.state)) return;
                            const t = sr(e);
                            if (t) {
                                const n = t.template._projectedViews;
                                n && ($e(n, n.indexOf(e)), Bn.dirtyParentQueries(e))
                            }
                        }(e), e.renderer.destroyNode && function(e) {
                            const t = e.def.nodes.length;
                            for (let n = 0; n < t; n++) {
                                const t = e.def.nodes[n];
                                1 & t.flags ? e.renderer.destroyNode($n(e, n).renderElement) : 2 & t.flags ? e.renderer.destroyNode(Fn(e, n).renderText) : (67108864 & t.flags || 134217728 & t.flags) && qn(e, n).destroy()
                            }
                        }(e), lr(e) && e.renderer.destroy(), e.state |= 128
                    }
                }
                const So = function() {
                    var e = {
                        CreateViewNodes: 0,
                        CheckNoChanges: 1,
                        CheckNoChangesProjectedViews: 2,
                        CheckAndUpdate: 3,
                        CheckAndUpdateProjectedViews: 4,
                        Destroy: 5
                    };
                    return e[e.CreateViewNodes] = "CreateViewNodes", e[e.CheckNoChanges] = "CheckNoChanges", e[e.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate] = "CheckAndUpdate", e[e.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", e[e.Destroy] = "Destroy", e
                }();

                function Eo(e, t) {
                    const n = e.def;
                    if (33554432 & n.nodeFlags)
                        for (let r = 0; r < n.nodes.length; r++) {
                            const i = n.nodes[r];
                            33554432 & i.flags ? ko($n(e, r).componentView, t) : 0 == (33554432 & i.childFlags) && (r += i.childCount)
                        }
                }

                function To(e, t) {
                    const n = e.def;
                    if (16777216 & n.nodeFlags)
                        for (let r = 0; r < n.nodes.length; r++) {
                            const i = n.nodes[r];
                            if (16777216 & i.flags) {
                                const n = $n(e, r).viewContainer._embeddedViews;
                                for (let e = 0; e < n.length; e++) ko(n[e], t)
                            } else 0 == (16777216 & i.childFlags) && (r += i.childCount)
                        }
                }

                function ko(e, t) {
                    const n = e.state;
                    switch (t) {
                        case So.CheckNoChanges:
                            0 == (128 & n) && (12 == (12 & n) ? vo(e) : 64 & n && Ao(e, So.CheckNoChangesProjectedViews));
                            break;
                        case So.CheckNoChangesProjectedViews:
                            0 == (128 & n) && (32 & n ? vo(e) : 64 & n && Ao(e, t));
                            break;
                        case So.CheckAndUpdate:
                            0 == (128 & n) && (12 == (12 & n) ? yo(e) : 64 & n && Ao(e, So.CheckAndUpdateProjectedViews));
                            break;
                        case So.CheckAndUpdateProjectedViews:
                            0 == (128 & n) && (32 & n ? yo(e) : 64 & n && Ao(e, t));
                            break;
                        case So.Destroy:
                            Co(e);
                            break;
                        case So.CreateViewNodes:
                            mo(e)
                    }
                }

                function Ao(e, t) {
                    To(e, t), Eo(e, t)
                }

                function No(e, t, n, r) {
                    if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
                    const i = e.def.nodes.length;
                    for (let s = 0; s < i; s++) {
                        const i = e.def.nodes[s];
                        if (i.flags & t && i.flags & n) switch (Bn.setCurrentNode(e, i.nodeIndex), r) {
                            case 0:
                                Ys(e, i);
                                break;
                            case 1:
                                xo(e, i)
                        }
                        i.childFlags & t && i.childFlags & n || (s += i.childCount)
                    }
                }
                let Io = !1;

                function Ro(e, t, n, r, i, s) {
                    const o = i.injector.get(cn);
                    return ho(Po(e, i, o, t, n), r, s)
                }

                function Oo(e, t, n, r, i, s) {
                    const o = i.injector.get(cn),
                        a = Po(e, i, new ha(o), t, n),
                        l = Vo(r);
                    return ua(Go.create, ho, null, [a, l, s])
                }

                function Po(e, t, n, r, i) {
                    const s = t.injector.get(xt),
                        o = t.injector.get(Ke),
                        a = n.createRenderer(null, null);
                    return {
                        ngModule: t,
                        injector: e,
                        projectableNodes: r,
                        selectorOrNode: i,
                        sanitizer: s,
                        rendererFactory: n,
                        renderer: a,
                        errorHandler: o
                    }
                }

                function Do(e, t, n, r) {
                    const i = Vo(n);
                    return ua(Go.create, co, null, [e, t, i, r])
                }

                function Mo(e, t, n, r) {
                    return n = Ho.get(t.element.componentProvider.provider.token) || Vo(n), ua(Go.create, fo, null, [e, t, n, r])
                }

                function jo(e, t, n, r) {
                    return Zr(e, t, n, function(e) {
                        const {
                            hasOverrides: t,
                            hasDeprecatedOverrides: n
                        } = function(e) {
                            let t = !1,
                                n = !1;
                            return 0 === Lo.size ? {
                                hasOverrides: t,
                                hasDeprecatedOverrides: n
                            } : (e.providers.forEach(e => {
                                const r = Lo.get(e.token);
                                3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior)
                            }), e.modules.forEach(e => {
                                Uo.forEach((r, i) => {
                                    he(i).providedIn === e && (t = !0, n = n || r.deprecatedBehavior)
                                })
                            }), {
                                hasOverrides: t,
                                hasDeprecatedOverrides: n
                            })
                        }(e);
                        return t ? (function(e) {
                            for (let t = 0; t < e.providers.length; t++) {
                                const r = e.providers[t];
                                n && (r.flags |= 4096);
                                const i = Lo.get(r.token);
                                i && (r.flags = -3841 & r.flags | i.flags, r.deps = hr(i.deps), r.value = i.value)
                            }
                            if (Uo.size > 0) {
                                let t = new Set(e.modules);
                                Uo.forEach((r, i) => {
                                    if (t.has(he(i).providedIn)) {
                                        let t = {
                                            token: i,
                                            flags: r.flags | (n ? 4096 : 0),
                                            deps: hr(r.deps),
                                            value: r.value,
                                            index: e.providers.length
                                        };
                                        e.providers.push(t), e.providersByKey[Zn(i)] = t
                                    }
                                })
                            }
                        }(e = e.factory(() => Wn)), e) : e
                    }(r))
                }
                const Lo = new Map,
                    Uo = new Map,
                    Ho = new Map;

                function Fo(e) {
                    let t;
                    Lo.set(e.token, e), "function" == typeof e.token && (t = he(e.token)) && "function" == typeof t.providedIn && Uo.set(e.token, e)
                }

                function $o(e, t) {
                    const n = pr(t.viewDefFactory),
                        r = pr(n.nodes[0].element.componentView);
                    Ho.set(e, r)
                }

                function zo() {
                    Lo.clear(), Uo.clear(), Ho.clear()
                }

                function Vo(e) {
                    if (0 === Lo.size) return e;
                    const t = function(e) {
                        const t = [];
                        let n = null;
                        for (let r = 0; r < e.nodes.length; r++) {
                            const i = e.nodes[r];
                            1 & i.flags && (n = i), n && 3840 & i.flags && Lo.has(i.provider.token) && (t.push(n.nodeIndex), n = null)
                        }
                        return t
                    }(e);
                    if (0 === t.length) return e;
                    e = e.factory(() => Wn);
                    for (let r = 0; r < t.length; r++) n(e, t[r]);
                    return e;

                    function n(e, t) {
                        for (let n = t + 1; n < e.nodes.length; n++) {
                            const t = e.nodes[n];
                            if (1 & t.flags) return;
                            if (3840 & t.flags) {
                                const e = t.provider,
                                    n = Lo.get(e.token);
                                n && (t.flags = -3841 & t.flags | n.flags, e.deps = hr(n.deps), e.value = n.value)
                            }
                        }
                    }
                }

                function qo(e, t, n, r, i, s, o, a, l, u, c, h, d) {
                    const f = e.def.nodes[t];
                    return bo(e, f, n, r, i, s, o, a, l, u, c, h, d), 224 & f.flags ? Vn(e, t).value : void 0
                }

                function Bo(e, t, n, r, i, s, o, a, l, u, c, h, d) {
                    const f = e.def.nodes[t];
                    return _o(e, f, n, r, i, s, o, a, l, u, c, h, d), 224 & f.flags ? Vn(e, t).value : void 0
                }

                function Wo(e) {
                    return ua(Go.detectChanges, yo, null, [e])
                }

                function Qo(e) {
                    return ua(Go.checkNoChanges, vo, null, [e])
                }

                function Zo(e) {
                    return ua(Go.destroy, Co, null, [e])
                }
                const Go = function() {
                    var e = {
                        create: 0,
                        detectChanges: 1,
                        checkNoChanges: 2,
                        destroy: 3,
                        handleEvent: 4
                    };
                    return e[e.create] = "create", e[e.detectChanges] = "detectChanges", e[e.checkNoChanges] = "checkNoChanges", e[e.destroy] = "destroy", e[e.handleEvent] = "handleEvent", e
                }();
                let Ko, Xo, Yo;

                function Jo(e, t) {
                    Xo = e, Yo = t
                }

                function ea(e, t, n, r) {
                    return Jo(e, t), ua(Go.handleEvent, e.def.handleEvent, null, [e, t, n, r])
                }

                function ta(e, t) {
                    if (128 & e.state) throw Ln(Go[Ko]);
                    return Jo(e, sa(e, 0)), e.def.updateDirectives((function(e, n, r, ...i) {
                        const s = e.def.nodes[n];
                        return 0 === t ? ra(e, s, r, i) : ia(e, s, r, i), 16384 & s.flags && Jo(e, sa(e, n)), 224 & s.flags ? Vn(e, s.nodeIndex).value : void 0
                    }), e)
                }

                function na(e, t) {
                    if (128 & e.state) throw Ln(Go[Ko]);
                    return Jo(e, oa(e, 0)), e.def.updateRenderer((function(e, n, r, ...i) {
                        const s = e.def.nodes[n];
                        return 0 === t ? ra(e, s, r, i) : ia(e, s, r, i), 3 & s.flags && Jo(e, oa(e, n)), 224 & s.flags ? Vn(e, s.nodeIndex).value : void 0
                    }), e)
                }

                function ra(e, t, n, r) {
                    if (bo(e, t, n, ...r)) {
                        const o = 1 === n ? r[0] : r;
                        if (16384 & t.flags) {
                            const n = {};
                            for (let e = 0; e < t.bindings.length; e++) {
                                const r = t.bindings[e],
                                    a = o[e];
                                8 & r.flags && (n[(i = r.nonMinifiedName, s = void 0, s = i.replace(/[$@]/g, "_"), `ng-reflect-${i=s.replace(Et,(...e)=>"-"+e[1].toLowerCase())}`)] = Tt(a))
                            }
                            const r = t.parent,
                                a = $n(e, r.nodeIndex).renderElement;
                            if (r.element.name)
                                for (let t in n) {
                                    const r = n[t];
                                    null != r ? e.renderer.setAttribute(a, t, r) : e.renderer.removeAttribute(a, t)
                                } else e.renderer.setValue(a, `bindings=${JSON.stringify(n,null,2)}`)
                        }
                    }
                    var i, s
                }

                function ia(e, t, n, r) {
                    _o(e, t, n, ...r)
                }

                function sa(e, t) {
                    for (let n = t; n < e.def.nodes.length; n++) {
                        const t = e.def.nodes[n];
                        if (16384 & t.flags && t.bindings && t.bindings.length) return n
                    }
                    return null
                }

                function oa(e, t) {
                    for (let n = t; n < e.def.nodes.length; n++) {
                        const t = e.def.nodes[n];
                        if (3 & t.flags && t.bindings && t.bindings.length) return n
                    }
                    return null
                }
                class aa {
                    constructor(e, t) {
                        this.view = e, this.nodeIndex = t, null == t && (this.nodeIndex = t = 0), this.nodeDef = e.def.nodes[t];
                        let n = this.nodeDef,
                            r = e;
                        for (; n && 0 == (1 & n.flags);) n = n.parent;
                        if (!n)
                            for (; !n && r;) n = or(r), r = r.parent;
                        this.elDef = n, this.elView = r
                    }
                    get elOrCompView() {
                        return $n(this.elView, this.elDef.nodeIndex).componentView || this.view
                    }
                    get injector() {
                        return Vr(this.elView, this.elDef)
                    }
                    get component() {
                        return this.elOrCompView.component
                    }
                    get context() {
                        return this.elOrCompView.context
                    }
                    get providerTokens() {
                        const e = [];
                        if (this.elDef)
                            for (let t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                                const n = this.elView.def.nodes[t];
                                20224 & n.flags && e.push(n.provider.token), t += n.childCount
                            }
                        return e
                    }
                    get references() {
                        const e = {};
                        if (this.elDef) {
                            la(this.elView, this.elDef, e);
                            for (let t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                                const n = this.elView.def.nodes[t];
                                20224 & n.flags && la(this.elView, n, e), t += n.childCount
                            }
                        }
                        return e
                    }
                    get componentRenderElement() {
                        const e = function(e) {
                            for (; e && !lr(e);) e = e.parent;
                            return e.parent ? $n(e.parent, or(e).nodeIndex) : null
                        }(this.elOrCompView);
                        return e ? e.renderElement : void 0
                    }
                    get renderNode() {
                        return 2 & this.nodeDef.flags ? ar(this.view, this.nodeDef) : ar(this.elView, this.elDef)
                    }
                    logError(e, ...t) {
                        let n, r;
                        2 & this.nodeDef.flags ? (n = this.view.def, r = this.nodeDef.nodeIndex) : (n = this.elView.def, r = this.elDef.nodeIndex);
                        const i = function(e, t) {
                            let n = -1;
                            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
                            return n
                        }(n, r);
                        let s = -1;
                        n.factory(() => ++s === i ? e.error.bind(e, ...t) : Wn), s < i && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), e.error(...t))
                    }
                }

                function la(e, t, n) {
                    for (let r in t.references) n[r] = eo(e, t, t.references[r])
                }

                function ua(e, t, n, r) {
                    const i = Ko,
                        s = Xo,
                        o = Yo;
                    try {
                        Ko = e;
                        const a = t.apply(n, r);
                        return Xo = s, Yo = o, Ko = i, a
                    } catch (u) {
                        if (Qe(u) || !Xo) throw u;
                        throw a = u, l = ca(), a instanceof Error || (a = new Error(a.toString())), jn(a, l), a
                    }
                    var a, l
                }

                function ca() {
                    return Xo ? new aa(Xo, Yo) : null
                }
                class ha {
                    constructor(e) {
                        this.delegate = e
                    }
                    createRenderer(e, t) {
                        return new da(this.delegate.createRenderer(e, t))
                    }
                    begin() {
                        this.delegate.begin && this.delegate.begin()
                    }
                    end() {
                        this.delegate.end && this.delegate.end()
                    }
                    whenRenderingDone() {
                        return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
                    }
                }
                class da {
                    constructor(e) {
                        this.delegate = e, this.debugContextFactory = ca, this.data = this.delegate.data
                    }
                    createDebugContext(e) {
                        return this.debugContextFactory(e)
                    }
                    destroyNode(e) {
                        const t = Ls(e);
                        ! function(e) {
                            js.delete(e.nativeNode)
                        }(t), t instanceof Ds && (t.listeners.length = 0), this.delegate.destroyNode && this.delegate.destroyNode(e)
                    }
                    destroy() {
                        this.delegate.destroy()
                    }
                    createElement(e, t) {
                        const n = this.delegate.createElement(e, t),
                            r = this.createDebugContext(n);
                        if (r) {
                            const t = new Ms(n, null, r);
                            t.name = e, Us(t)
                        }
                        return n
                    }
                    createComment(e) {
                        const t = this.delegate.createComment(e),
                            n = this.createDebugContext(t);
                        return n && Us(new Ds(t, null, n)), t
                    }
                    createText(e) {
                        const t = this.delegate.createText(e),
                            n = this.createDebugContext(t);
                        return n && Us(new Ds(t, null, n)), t
                    }
                    appendChild(e, t) {
                        const n = Ls(e),
                            r = Ls(t);
                        n && r && n instanceof Ms && n.addChild(r), this.delegate.appendChild(e, t)
                    }
                    insertBefore(e, t, n) {
                        const r = Ls(e),
                            i = Ls(t),
                            s = Ls(n);
                        r && i && r instanceof Ms && r.insertBefore(s, i), this.delegate.insertBefore(e, t, n)
                    }
                    removeChild(e, t) {
                        const n = Ls(e),
                            r = Ls(t);
                        n && r && n instanceof Ms && n.removeChild(r), this.delegate.removeChild(e, t)
                    }
                    selectRootElement(e, t) {
                        const n = this.delegate.selectRootElement(e, t),
                            r = ca();
                        return r && Us(new Ms(n, null, r)), n
                    }
                    setAttribute(e, t, n, r) {
                        const i = Ls(e);
                        i && i instanceof Ms && (i.attributes[r ? r + ":" + t : t] = n), this.delegate.setAttribute(e, t, n, r)
                    }
                    removeAttribute(e, t, n) {
                        const r = Ls(e);
                        r && r instanceof Ms && (r.attributes[n ? n + ":" + t : t] = null), this.delegate.removeAttribute(e, t, n)
                    }
                    addClass(e, t) {
                        const n = Ls(e);
                        n && n instanceof Ms && (n.classes[t] = !0), this.delegate.addClass(e, t)
                    }
                    removeClass(e, t) {
                        const n = Ls(e);
                        n && n instanceof Ms && (n.classes[t] = !1), this.delegate.removeClass(e, t)
                    }
                    setStyle(e, t, n, r) {
                        const i = Ls(e);
                        i && i instanceof Ms && (i.styles[t] = n), this.delegate.setStyle(e, t, n, r)
                    }
                    removeStyle(e, t, n) {
                        const r = Ls(e);
                        r && r instanceof Ms && (r.styles[t] = null), this.delegate.removeStyle(e, t, n)
                    }
                    setProperty(e, t, n) {
                        const r = Ls(e);
                        r && r instanceof Ms && (r.properties[t] = n), this.delegate.setProperty(e, t, n)
                    }
                    listen(e, t, n) {
                        if ("string" != typeof e) {
                            const r = Ls(e);
                            r && r.listeners.push(new Ps(t, n))
                        }
                        return this.delegate.listen(e, t, n)
                    }
                    parentNode(e) {
                        return this.delegate.parentNode(e)
                    }
                    nextSibling(e) {
                        return this.delegate.nextSibling(e)
                    }
                    setValue(e, t) {
                        return this.delegate.setValue(e, t)
                    }
                }

                function fa(e, t, n) {
                    return new pa(e, t, n)
                }
                class pa extends He {
                    constructor(e, t, n) {
                        super(), this.moduleType = e, this._bootstrapComponents = t, this._ngModuleDefFactory = n
                    }
                    create(e) {
                        ! function() {
                            if (Io) return;
                            Io = !0;
                            const e = Je() ? {
                                setCurrentNode: Jo,
                                createRootView: Oo,
                                createEmbeddedView: Do,
                                createComponentView: Mo,
                                createNgModuleRef: jo,
                                overrideProvider: Fo,
                                overrideComponentView: $o,
                                clearOverrides: zo,
                                checkAndUpdateView: Wo,
                                checkNoChangesView: Qo,
                                destroyView: Zo,
                                createDebugContext: (e, t) => new aa(e, t),
                                handleEvent: ea,
                                updateDirectives: ta,
                                updateRenderer: na
                            } : {
                                setCurrentNode: () => {},
                                createRootView: Ro,
                                createEmbeddedView: co,
                                createComponentView: fo,
                                createNgModuleRef: Zr,
                                overrideProvider: Wn,
                                overrideComponentView: Wn,
                                clearOverrides: Wn,
                                checkAndUpdateView: yo,
                                checkNoChangesView: vo,
                                destroyView: Co,
                                createDebugContext: (e, t) => new aa(e, t),
                                handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                                updateDirectives: (e, t) => e.def.updateDirectives(0 === t ? qo : Bo, e),
                                updateRenderer: (e, t) => e.def.updateRenderer(0 === t ? qo : Bo, e)
                            };
                            Bn.setCurrentNode = e.setCurrentNode, Bn.createRootView = e.createRootView, Bn.createEmbeddedView = e.createEmbeddedView, Bn.createComponentView = e.createComponentView, Bn.createNgModuleRef = e.createNgModuleRef, Bn.overrideProvider = e.overrideProvider, Bn.overrideComponentView = e.overrideComponentView, Bn.clearOverrides = e.clearOverrides, Bn.checkAndUpdateView = e.checkAndUpdateView, Bn.checkNoChangesView = e.checkNoChangesView, Bn.destroyView = e.destroyView, Bn.resolveDep = pi, Bn.createDebugContext = e.createDebugContext, Bn.handleEvent = e.handleEvent, Bn.updateDirectives = e.updateDirectives, Bn.updateRenderer = e.updateRenderer, Bn.dirtyParentQueries = Xs
                        }();
                        const t = function(e) {
                            const t = Array.from(e.providers),
                                n = Array.from(e.modules),
                                r = {};
                            for (const i in e.providersByKey) r[i] = e.providersByKey[i];
                            return {
                                factory: e.factory,
                                isRoot: e.isRoot,
                                providers: t,
                                modules: n,
                                providersByKey: r
                            }
                        }(pr(this._ngModuleDefFactory));
                        return Bn.createNgModuleRef(this.moduleType, e || Rt.NULL, this._bootstrapComponents, t)
                    }
                }
                class ga {}
                class ma {}
                const va = new xe("Location Initialized");
                class ya {}
                const ba = new xe("appBaseHref");
                class wa {
                    constructor(e, t) {
                        this._subject = new Ai, this._urlChangeListeners = [], this._platformStrategy = e;
                        const n = this._platformStrategy.getBaseHref();
                        this._platformLocation = t, this._baseHref = wa.stripTrailingSlash(_a(n)), this._platformStrategy.onPopState(e => {
                            this._subject.emit({
                                url: this.path(!0),
                                pop: !0,
                                state: e.state,
                                type: e.type
                            })
                        })
                    }
                    path(e = !1) {
                        return this.normalize(this._platformStrategy.path(e))
                    }
                    getState() {
                        return this._platformLocation.getState()
                    }
                    isCurrentPathEqualTo(e, t = "") {
                        return this.path() == this.normalize(e + wa.normalizeQueryParams(t))
                    }
                    normalize(e) {
                        return wa.stripTrailingSlash(function(e, t) {
                            return e && t.startsWith(e) ? t.substring(e.length) : t
                        }(this._baseHref, _a(e)))
                    }
                    prepareExternalUrl(e) {
                        return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e)
                    }
                    go(e, t = "", n = null) {
                        this._platformStrategy.pushState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + wa.normalizeQueryParams(t)), n)
                    }
                    replaceState(e, t = "", n = null) {
                        this._platformStrategy.replaceState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + wa.normalizeQueryParams(t)), n)
                    }
                    forward() {
                        this._platformStrategy.forward()
                    }
                    back() {
                        this._platformStrategy.back()
                    }
                    onUrlChange(e) {
                        this._urlChangeListeners.push(e), this.subscribe(e => {
                            this._notifyUrlChangeListeners(e.url, e.state)
                        })
                    }
                    _notifyUrlChangeListeners(e = "", t) {
                        this._urlChangeListeners.forEach(n => n(e, t))
                    }
                    subscribe(e, t, n) {
                        return this._subject.subscribe({
                            next: e,
                            error: t,
                            complete: n
                        })
                    }
                    static normalizeQueryParams(e) {
                        return e && "?" !== e[0] ? "?" + e : e
                    }
                    static joinWithSlash(e, t) {
                        if (0 == e.length) return t;
                        if (0 == t.length) return e;
                        let n = 0;
                        return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
                    }
                    static stripTrailingSlash(e) {
                        const t = e.match(/#|\?|$/),
                            n = t && t.index || e.length;
                        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
                    }
                }

                function _a(e) {
                    return e.replace(/\/index.html$/, "")
                }
                class xa extends ya {
                    constructor(e, t) {
                        super(), this._platformLocation = e, this._baseHref = "", null != t && (this._baseHref = t)
                    }
                    onPopState(e) {
                        this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                    }
                    getBaseHref() {
                        return this._baseHref
                    }
                    path(e = !1) {
                        let t = this._platformLocation.hash;
                        return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t
                    }
                    prepareExternalUrl(e) {
                        const t = wa.joinWithSlash(this._baseHref, e);
                        return t.length > 0 ? "#" + t : t
                    }
                    pushState(e, t, n, r) {
                        let i = this.prepareExternalUrl(n + wa.normalizeQueryParams(r));
                        0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i)
                    }
                    replaceState(e, t, n, r) {
                        let i = this.prepareExternalUrl(n + wa.normalizeQueryParams(r));
                        0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i)
                    }
                    forward() {
                        this._platformLocation.forward()
                    }
                    back() {
                        this._platformLocation.back()
                    }
                }
                class Ca extends ya {
                    constructor(e, t) {
                        if (super(), this._platformLocation = e, null == t && (t = this._platformLocation.getBaseHrefFromDOM()), null == t) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                        this._baseHref = t
                    }
                    onPopState(e) {
                        this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                    }
                    getBaseHref() {
                        return this._baseHref
                    }
                    prepareExternalUrl(e) {
                        return wa.joinWithSlash(this._baseHref, e)
                    }
                    path(e = !1) {
                        const t = this._platformLocation.pathname + wa.normalizeQueryParams(this._platformLocation.search),
                            n = this._platformLocation.hash;
                        return n && e ? `${t}${n}` : t
                    }
                    pushState(e, t, n, r) {
                        const i = this.prepareExternalUrl(n + wa.normalizeQueryParams(r));
                        this._platformLocation.pushState(e, t, i)
                    }
                    replaceState(e, t, n, r) {
                        const i = this.prepareExternalUrl(n + wa.normalizeQueryParams(r));
                        this._platformLocation.replaceState(e, t, i)
                    }
                    forward() {
                        this._platformLocation.forward()
                    }
                    back() {
                        this._platformLocation.back()
                    }
                }
                const Sa = function() {
                        var e = {
                            Zero: 0,
                            One: 1,
                            Two: 2,
                            Few: 3,
                            Many: 4,
                            Other: 5
                        };
                        return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e
                    }(),
                    Ea = function(e) {
                        return function(e) {
                            const t = e.toLowerCase().replace(/_/g, "-");
                            let n = _i[t];
                            if (n) return n;
                            const r = t.split("-")[0];
                            if (n = _i[r]) return n;
                            if ("en" === r) return Si;
                            throw new Error(`Missing locale data for the locale "${e}".`)
                        }(e)[xi.PluralCase]
                    },
                    Ta = new xe("UseV4Plurals");
                class ka {}
                class Aa extends ka {
                    constructor(e, t) {
                        super(), this.locale = e, this.deprecatedPluralFn = t
                    }
                    getPluralCategory(e, t) {
                        switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : Ea(t || this.locale)(e)) {
                            case Sa.Zero:
                                return "zero";
                            case Sa.One:
                                return "one";
                            case Sa.Two:
                                return "two";
                            case Sa.Few:
                                return "few";
                            case Sa.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }

                function Na(e, t) {
                    t = encodeURIComponent(t);
                    for (const n of e.split(";")) {
                        const e = n.indexOf("="),
                            [r, i] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
                        if (r.trim() === t) return decodeURIComponent(i)
                    }
                    return null
                }
                class Ia {
                    constructor(e, t, n, r) {
                        this.$implicit = e, this.ngForOf = t, this.index = n, this.count = r
                    }
                    get first() {
                        return 0 === this.index
                    }
                    get last() {
                        return this.index === this.count - 1
                    }
                    get even() {
                        return this.index % 2 == 0
                    }
                    get odd() {
                        return !this.even
                    }
                }
                class Ra {
                    constructor(e, t, n) {
                        this._viewContainer = e, this._template = t, this._differs = n, this._ngForOfDirty = !0, this._differ = null
                    }
                    set ngForOf(e) {
                        this._ngForOf = e, this._ngForOfDirty = !0
                    }
                    set ngForTrackBy(e) {
                        Je() && null != e && "function" != typeof e && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. ` + "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = e
                    }
                    get ngForTrackBy() {
                        return this._trackByFn
                    }
                    set ngForTemplate(e) {
                        e && (this._template = e)
                    }
                    ngDoCheck() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            const n = this._ngForOf;
                            if (!this._differ && n) try {
                                this._differ = this._differs.find(n).create(this.ngForTrackBy)
                            } catch (t) {
                                throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)
                            }
                        }
                        var e;
                        if (this._differ) {
                            const e = this._differ.diff(this._ngForOf);
                            e && this._applyChanges(e)
                        }
                    }
                    _applyChanges(e) {
                        const t = [];
                        e.forEachOperation((e, n, r) => {
                            if (null == e.previousIndex) {
                                const n = this._viewContainer.createEmbeddedView(this._template, new Ia(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                                    i = new Oa(e, n);
                                t.push(i)
                            } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
                            else if (null !== n) {
                                const i = this._viewContainer.get(n);
                                this._viewContainer.move(i, r);
                                const s = new Oa(e, i);
                                t.push(s)
                            }
                        });
                        for (let n = 0; n < t.length; n++) this._perViewChange(t[n].view, t[n].record);
                        for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                            const e = this._viewContainer.get(n);
                            e.context.index = n, e.context.count = r, e.context.ngForOf = this._ngForOf
                        }
                        e.forEachIdentityChange(e => {
                            this._viewContainer.get(e.currentIndex).context.$implicit = e.item
                        })
                    }
                    _perViewChange(e, t) {
                        e.context.$implicit = t.item
                    }
                    static ngTemplateContextGuard(e, t) {
                        return !0
                    }
                }
                class Oa {
                    constructor(e, t) {
                        this.record = e, this.view = t
                    }
                }
                class Pa {
                    constructor(e, t) {
                        this._viewContainer = e, this._context = new Da, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = t
                    }
                    set ngIf(e) {
                        this._context.$implicit = this._context.ngIf = e, this._updateView()
                    }
                    set ngIfThen(e) {
                        Ma("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
                    }
                    set ngIfElse(e) {
                        Ma("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
                    }
                    _updateView() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }
                }
                class Da {
                    constructor() {
                        this.$implicit = null, this.ngIf = null
                    }
                }

                function Ma(e, t) {
                    if (t && !t.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${fe(t)}'.`)
                }
                class ja {}
                class La {
                    constructor(e, t, n) {
                        this._ngEl = e, this._differs = t, this._renderer = n
                    }
                    getValue() {
                        return null
                    }
                    setNgStyle(e) {
                        this._ngStyle = e, !this._differ && e && (this._differ = this._differs.find(e).create())
                    }
                    applyChanges() {
                        if (this._differ) {
                            const e = this._differ.diff(this._ngStyle);
                            e && this._applyChanges(e)
                        }
                    }
                    _applyChanges(e) {
                        e.forEachRemovedItem(e => this._setStyle(e.key, null)), e.forEachAddedItem(e => this._setStyle(e.key, e.currentValue)), e.forEachChangedItem(e => this._setStyle(e.key, e.currentValue))
                    }
                    _setStyle(e, t) {
                        const [n, r] = e.split(".");
                        null != (t = null != t && r ? `${t}${r}` : t) ? this._renderer.setStyle(this._ngEl.nativeElement, n, t) : this._renderer.removeStyle(this._ngEl.nativeElement, n)
                    }
                }
                let Ua = (() => {
                    class e {
                        constructor(e) {
                            this._delegate = e
                        }
                        getValue() {
                            return this._delegate.getValue()
                        }
                    }
                    return e.ngDirectiveDef = void 0, e
                })();
                class Ha extends Ua {
                    constructor(e) {
                        super(e)
                    }
                    set ngStyle(e) {
                        this._delegate.setNgStyle(e)
                    }
                    ngDoCheck() {
                        this._delegate.applyChanges()
                    }
                }
                class Fa {}
                const $a = new xe("DocumentToken"),
                    za = "server";
                let Va = (() => {
                    class e {}
                    return e.ngInjectableDef = ue({
                        token: e,
                        providedIn: "root",
                        factory: () => new qa(Me($a), window, Me(Ke))
                    }), e
                })();
                class qa {
                    constructor(e, t, n) {
                        this.document = e, this.window = t, this.errorHandler = n, this.offset = () => [0, 0]
                    }
                    setOffset(e) {
                        this.offset = Array.isArray(e) ? () => e : e
                    }
                    getScrollPosition() {
                        return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                    }
                    scrollToPosition(e) {
                        this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1])
                    }
                    scrollToAnchor(e) {
                        if (this.supportScrollRestoration()) {
                            e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                            try {
                                const t = this.document.querySelector(`#${e}`);
                                if (t) return void this.scrollToElement(t);
                                const n = this.document.querySelector(`[name='${e}']`);
                                if (n) return void this.scrollToElement(n)
                            } catch (t) {
                                this.errorHandler.handleError(t)
                            }
                        }
                    }
                    setHistoryScrollRestoration(e) {
                        if (this.supportScrollRestoration()) {
                            const t = this.window.history;
                            t && t.scrollRestoration && (t.scrollRestoration = e)
                        }
                    }
                    scrollToElement(e) {
                        const t = e.getBoundingClientRect(),
                            n = t.left + this.window.pageXOffset,
                            r = t.top + this.window.pageYOffset,
                            i = this.offset();
                        this.window.scrollTo(n - i[0], r - i[1])
                    }
                    supportScrollRestoration() {
                        try {
                            return !!this.window && !!this.window.scrollTo
                        } catch (e) {
                            return !1
                        }
                    }
                }

                function Ba(...e) {
                    let t = e[e.length - 1];
                    return k(t) ? (e.pop(), F(e, t)) : Q(e)
                }
                class Wa extends E {
                    constructor(e) {
                        super(), this._value = e
                    }
                    get value() {
                        return this.getValue()
                    }
                    _subscribe(e) {
                        const t = super._subscribe(e);
                        return t && !t.closed && e.next(this._value), t
                    }
                    getValue() {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new x;
                        return this._value
                    }
                    next(e) {
                        super.next(this._value = e)
                    }
                }
                const Qa = (() => {
                        function e() {
                            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                        }
                        return e.prototype = Object.create(Error.prototype), e
                    })(),
                    Za = {};
                class Ga {
                    constructor(e) {
                        this.resultSelector = e
                    }
                    call(e, t) {
                        return t.subscribe(new Ka(e, this.resultSelector))
                    }
                }
                class Ka extends j {
                    constructor(e, t) {
                        super(e), this.resultSelector = t, this.active = 0, this.values = [], this.observables = []
                    }
                    _next(e) {
                        this.values.push(Za), this.observables.push(e)
                    }
                    _complete() {
                        const e = this.observables,
                            t = e.length;
                        if (0 === t) this.destination.complete();
                        else {
                            this.active = t, this.toRespond = t;
                            for (let n = 0; n < t; n++) {
                                const t = e[n];
                                this.add(M(this, t, t, n))
                            }
                        }
                    }
                    notifyComplete(e) {
                        0 == (this.active -= 1) && this.destination.complete()
                    }
                    notifyNext(e, t, n, r, i) {
                        const s = this.values,
                            o = this.toRespond ? s[n] === Za ? --this.toRespond : this.toRespond : 0;
                        s[n] = t, 0 === o && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()))
                    }
                    _tryResultSelector(e) {
                        let t;
                        try {
                            t = this.resultSelector.apply(this, e)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(t)
                    }
                }
                const Xa = new w(e => e.complete());

                function Ya(e) {
                    return e ? function(e) {
                        return new w(t => e.schedule(() => t.complete()))
                    }(e) : Xa
                }

                function Ja(e) {
                    return new w(t => {
                        let n;
                        try {
                            n = e()
                        } catch (r) {
                            return void t.error(r)
                        }
                        return (n ? $(n) : Ya()).subscribe(t)
                    })
                }

                function el() {
                    return W(1)
                }

                function tl(e, t) {
                    return function(n) {
                        return n.lift(new nl(e, t))
                    }
                }
                class nl {
                    constructor(e, t) {
                        this.predicate = e, this.thisArg = t
                    }
                    call(e, t) {
                        return t.subscribe(new rl(e, this.predicate, this.thisArg))
                    }
                }
                class rl extends p {
                    constructor(e, t, n) {
                        super(e), this.predicate = t, this.thisArg = n, this.count = 0
                    }
                    _next(e) {
                        let t;
                        try {
                            t = this.predicate.call(this.thisArg, e, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        t && this.destination.next(e)
                    }
                }
                const il = (() => {
                    function e() {
                        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                })();

                function sl(e) {
                    return function(t) {
                        return 0 === e ? Ya() : t.lift(new ol(e))
                    }
                }
                class ol {
                    constructor(e) {
                        if (this.total = e, this.total < 0) throw new il
                    }
                    call(e, t) {
                        return t.subscribe(new al(e, this.total))
                    }
                }
                class al extends p {
                    constructor(e, t) {
                        super(e), this.total = t, this.ring = new Array, this.count = 0
                    }
                    _next(e) {
                        const t = this.ring,
                            n = this.total,
                            r = this.count++;
                        t.length < n ? t.push(e) : t[r % n] = e
                    }
                    _complete() {
                        const e = this.destination;
                        let t = this.count;
                        if (t > 0) {
                            const n = this.count >= this.total ? this.total : this.count,
                                r = this.ring;
                            for (let i = 0; i < n; i++) {
                                const i = t++ % n;
                                e.next(r[i])
                            }
                        }
                        e.complete()
                    }
                }

                function ll(e = hl) {
                    return t => t.lift(new ul(e))
                }
                class ul {
                    constructor(e) {
                        this.errorFactory = e
                    }
                    call(e, t) {
                        return t.subscribe(new cl(e, this.errorFactory))
                    }
                }
                class cl extends p {
                    constructor(e, t) {
                        super(e), this.errorFactory = t, this.hasValue = !1
                    }
                    _next(e) {
                        this.hasValue = !0, this.destination.next(e)
                    }
                    _complete() {
                        if (this.hasValue) return this.destination.complete(); {
                            let t;
                            try {
                                t = this.errorFactory()
                            } catch (e) {
                                t = e
                            }
                            this.destination.error(t)
                        }
                    }
                }

                function hl() {
                    return new Qa
                }

                function dl(e = null) {
                    return t => t.lift(new fl(e))
                }
                class fl {
                    constructor(e) {
                        this.defaultValue = e
                    }
                    call(e, t) {
                        return t.subscribe(new pl(e, this.defaultValue))
                    }
                }
                class pl extends p {
                    constructor(e, t) {
                        super(e), this.defaultValue = t, this.isEmpty = !0
                    }
                    _next(e) {
                        this.isEmpty = !1, this.destination.next(e)
                    }
                    _complete() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }
                }

                function gl(e, t) {
                    const n = arguments.length >= 2;
                    return r => r.pipe(e ? tl((t, n) => e(t, n, r)) : B, sl(1), n ? dl(t) : ll(() => new Qa))
                }

                function ml(e) {
                    return function(t) {
                        const n = new vl(e),
                            r = t.lift(n);
                        return n.caught = r
                    }
                }
                class vl {
                    constructor(e) {
                        this.selector = e
                    }
                    call(e, t) {
                        return t.subscribe(new yl(e, this.selector, this.caught))
                    }
                }
                class yl extends j {
                    constructor(e, t, n) {
                        super(e), this.selector = t, this.caught = n
                    }
                    error(e) {
                        if (!this.isStopped) {
                            let n;
                            try {
                                n = this.selector(e, this.caught)
                            } catch (t) {
                                return void super.error(t)
                            }
                            this._unsubscribeAndRecycle();
                            const r = new A(this, void 0, void 0);
                            this.add(r), M(this, n, void 0, void 0, r)
                        }
                    }
                }

                function bl(e) {
                    return t => 0 === e ? Ya() : t.lift(new wl(e))
                }
                class wl {
                    constructor(e) {
                        if (this.total = e, this.total < 0) throw new il
                    }
                    call(e, t) {
                        return t.subscribe(new _l(e, this.total))
                    }
                }
                class _l extends p {
                    constructor(e, t) {
                        super(e), this.total = t, this.count = 0
                    }
                    _next(e) {
                        const t = this.total,
                            n = ++this.count;
                        n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
                    }
                }

                function xl(e, t) {
                    const n = arguments.length >= 2;
                    return r => r.pipe(e ? tl((t, n) => e(t, n, r)) : B, bl(1), n ? dl(t) : ll(() => new Qa))
                }
                class Cl {
                    constructor(e, t, n) {
                        this.predicate = e, this.thisArg = t, this.source = n
                    }
                    call(e, t) {
                        return t.subscribe(new Sl(e, this.predicate, this.thisArg, this.source))
                    }
                }
                class Sl extends p {
                    constructor(e, t, n, r) {
                        super(e), this.predicate = t, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this
                    }
                    notifyComplete(e) {
                        this.destination.next(e), this.destination.complete()
                    }
                    _next(e) {
                        let t = !1;
                        try {
                            t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        t || this.notifyComplete(!1)
                    }
                    _complete() {
                        this.notifyComplete(!0)
                    }
                }

                function El(e, t) {
                    return "function" == typeof t ? n => n.pipe(El((n, r) => $(e(n, r)).pipe(L((e, i) => t(n, e, r, i))))) : t => t.lift(new Tl(e))
                }
                class Tl {
                    constructor(e) {
                        this.project = e
                    }
                    call(e, t) {
                        return t.subscribe(new kl(e, this.project))
                    }
                }
                class kl extends j {
                    constructor(e, t) {
                        super(e), this.project = t, this.index = 0
                    }
                    _next(e) {
                        let t;
                        const n = this.index++;
                        try {
                            t = this.project(e, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this._innerSub(t, e, n)
                    }
                    _innerSub(e, t, n) {
                        const r = this.innerSubscription;
                        r && r.unsubscribe();
                        const i = new A(this, void 0, void 0);
                        this.destination.add(i), this.innerSubscription = M(this, e, t, n, i)
                    }
                    _complete() {
                        const {
                            innerSubscription: e
                        } = this;
                        e && !e.closed || super._complete(), this.unsubscribe()
                    }
                    _unsubscribe() {
                        this.innerSubscription = null
                    }
                    notifyComplete(e) {
                        this.destination.remove(e), this.innerSubscription = null, this.isStopped && super._complete()
                    }
                    notifyNext(e, t, n, r, i) {
                        this.destination.next(t)
                    }
                }

                function Al(...e) {
                    return el()(Ba(...e))
                }

                function Nl(e, t) {
                    let n = !1;
                    return arguments.length >= 2 && (n = !0),
                        function(r) {
                            return r.lift(new Il(e, t, n))
                        }
                }
                class Il {
                    constructor(e, t, n = !1) {
                        this.accumulator = e, this.seed = t, this.hasSeed = n
                    }
                    call(e, t) {
                        return t.subscribe(new Rl(e, this.accumulator, this.seed, this.hasSeed))
                    }
                }
                class Rl extends p {
                    constructor(e, t, n, r) {
                        super(e), this.accumulator = t, this._seed = n, this.hasSeed = r, this.index = 0
                    }
                    get seed() {
                        return this._seed
                    }
                    set seed(e) {
                        this.hasSeed = !0, this._seed = e
                    }
                    _next(e) {
                        if (this.hasSeed) return this._tryNext(e);
                        this.seed = e, this.destination.next(e)
                    }
                    _tryNext(e) {
                        const t = this.index++;
                        let n;
                        try {
                            n = this.accumulator(this.seed, e, t)
                        } catch (r) {
                            this.destination.error(r)
                        }
                        this.seed = n, this.destination.next(n)
                    }
                }

                function Ol(e, t) {
                    return z(e, t, 1)
                }

                function Pl(e, t, n) {
                    return function(r) {
                        return r.lift(new Dl(e, t, n))
                    }
                }
                class Dl {
                    constructor(e, t, n) {
                        this.nextOrObserver = e, this.error = t, this.complete = n
                    }
                    call(e, t) {
                        return t.subscribe(new Ml(e, this.nextOrObserver, this.error, this.complete))
                    }
                }
                class Ml extends p {
                    constructor(e, t, n, i) {
                        super(e), this._tapNext = v, this._tapError = v, this._tapComplete = v, this._tapError = n || v, this._tapComplete = i || v, r(t) ? (this._context = this, this._tapNext = t) : t && (this._context = t, this._tapNext = t.next || v, this._tapError = t.error || v, this._tapComplete = t.complete || v)
                    }
                    _next(e) {
                        try {
                            this._tapNext.call(this._context, e)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }
                    _error(e) {
                        try {
                            this._tapError.call(this._context, e)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        this.destination.error(e)
                    }
                    _complete() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        return this.destination.complete()
                    }
                }
                class jl {
                    constructor(e) {
                        this.callback = e
                    }
                    call(e, t) {
                        return t.subscribe(new Ll(e, this.callback))
                    }
                }
                class Ll extends p {
                    constructor(e, t) {
                        super(e), this.add(new h(t))
                    }
                }
                let Ul = null;

                function Hl() {
                    return Ul
                }
                class Fl {
                    constructor() {
                        this.resourceLoaderType = null
                    }
                    get attrToPropMap() {
                        return this._attrToPropMap
                    }
                    set attrToPropMap(e) {
                        this._attrToPropMap = e
                    }
                }
                class $l extends Fl {
                    constructor() {
                        super(), this._animationPrefix = null, this._transitionEnd = null;
                        try {
                            const e = this.createElement("div", document);
                            if (null != this.getStyle(e, "animationName")) this._animationPrefix = "";
                            else {
                                const t = ["Webkit", "Moz", "O", "ms"];
                                for (let n = 0; n < t.length; n++)
                                    if (null != this.getStyle(e, t[n] + "AnimationName")) {
                                        this._animationPrefix = "-" + t[n].toLowerCase() + "-";
                                        break
                                    }
                            }
                            const t = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                            Object.keys(t).forEach(n => {
                                null != this.getStyle(e, n) && (this._transitionEnd = t[n])
                            })
                        } catch (e) {
                            this._animationPrefix = null, this._transitionEnd = null
                        }
                    }
                    getDistributedNodes(e) {
                        return e.getDistributedNodes()
                    }
                    resolveAndSetHref(e, t, n) {
                        e.href = null == n ? t : t + "/../" + n
                    }
                    supportsDOMEvents() {
                        return !0
                    }
                    supportsNativeShadowDOM() {
                        return "function" == typeof document.body.createShadowRoot
                    }
                    getAnimationPrefix() {
                        return this._animationPrefix ? this._animationPrefix : ""
                    }
                    getTransitionEnd() {
                        return this._transitionEnd ? this._transitionEnd : ""
                    }
                    supportsAnimation() {
                        return null != this._animationPrefix && null != this._transitionEnd
                    }
                }
                const zl = {
                        class: "className",
                        innerHtml: "innerHTML",
                        readonly: "readOnly",
                        tabindex: "tabIndex"
                    },
                    Vl = 3,
                    ql = {
                        "\b": "Backspace",
                        "\t": "Tab",
                        "\x7f": "Delete",
                        "\x1b": "Escape",
                        Del: "Delete",
                        Esc: "Escape",
                        Left: "ArrowLeft",
                        Right: "ArrowRight",
                        Up: "ArrowUp",
                        Down: "ArrowDown",
                        Menu: "ContextMenu",
                        Scroll: "ScrollLock",
                        Win: "OS"
                    },
                    Bl = {
                        A: "1",
                        B: "2",
                        C: "3",
                        D: "4",
                        E: "5",
                        F: "6",
                        G: "7",
                        H: "8",
                        I: "9",
                        J: "*",
                        K: "+",
                        M: "-",
                        N: ".",
                        O: "/",
                        "`": "0",
                        "\x90": "NumLock"
                    },
                    Wl = (() => {
                        if (_e.Node) return _e.Node.prototype.contains || function(e) {
                            return !!(16 & this.compareDocumentPosition(e))
                        }
                    })();
                class Ql extends $l {
                    parse(e) {
                        throw new Error("parse not implemented")
                    }
                    static makeCurrent() {
                        var e;
                        e = new Ql, Ul || (Ul = e)
                    }
                    hasProperty(e, t) {
                        return t in e
                    }
                    setProperty(e, t, n) {
                        e[t] = n
                    }
                    getProperty(e, t) {
                        return e[t]
                    }
                    invoke(e, t, n) {
                        e[t](...n)
                    }
                    logError(e) {
                        window.console && (console.error ? console.error(e) : console.log(e))
                    }
                    log(e) {
                        window.console && window.console.log && window.console.log(e)
                    }
                    logGroup(e) {
                        window.console && window.console.group && window.console.group(e)
                    }
                    logGroupEnd() {
                        window.console && window.console.groupEnd && window.console.groupEnd()
                    }
                    get attrToPropMap() {
                        return zl
                    }
                    contains(e, t) {
                        return Wl.call(e, t)
                    }
                    querySelector(e, t) {
                        return e.querySelector(t)
                    }
                    querySelectorAll(e, t) {
                        return e.querySelectorAll(t)
                    }
                    on(e, t, n) {
                        e.addEventListener(t, n, !1)
                    }
                    onAndCancel(e, t, n) {
                        return e.addEventListener(t, n, !1), () => {
                            e.removeEventListener(t, n, !1)
                        }
                    }
                    dispatchEvent(e, t) {
                        e.dispatchEvent(t)
                    }
                    createMouseEvent(e) {
                        const t = this.getDefaultDocument().createEvent("MouseEvent");
                        return t.initEvent(e, !0, !0), t
                    }
                    createEvent(e) {
                        const t = this.getDefaultDocument().createEvent("Event");
                        return t.initEvent(e, !0, !0), t
                    }
                    preventDefault(e) {
                        e.preventDefault(), e.returnValue = !1
                    }
                    isPrevented(e) {
                        return e.defaultPrevented || null != e.returnValue && !e.returnValue
                    }
                    getInnerHTML(e) {
                        return e.innerHTML
                    }
                    getTemplateContent(e) {
                        return "content" in e && this.isTemplateElement(e) ? e.content : null
                    }
                    getOuterHTML(e) {
                        return e.outerHTML
                    }
                    nodeName(e) {
                        return e.nodeName
                    }
                    nodeValue(e) {
                        return e.nodeValue
                    }
                    type(e) {
                        return e.type
                    }
                    content(e) {
                        return this.hasProperty(e, "content") ? e.content : e
                    }
                    firstChild(e) {
                        return e.firstChild
                    }
                    nextSibling(e) {
                        return e.nextSibling
                    }
                    parentElement(e) {
                        return e.parentNode
                    }
                    childNodes(e) {
                        return e.childNodes
                    }
                    childNodesAsList(e) {
                        const t = e.childNodes,
                            n = new Array(t.length);
                        for (let r = 0; r < t.length; r++) n[r] = t[r];
                        return n
                    }
                    clearNodes(e) {
                        for (; e.firstChild;) e.removeChild(e.firstChild)
                    }
                    appendChild(e, t) {
                        e.appendChild(t)
                    }
                    removeChild(e, t) {
                        e.removeChild(t)
                    }
                    replaceChild(e, t, n) {
                        e.replaceChild(t, n)
                    }
                    remove(e) {
                        return e.parentNode && e.parentNode.removeChild(e), e
                    }
                    insertBefore(e, t, n) {
                        e.insertBefore(n, t)
                    }
                    insertAllBefore(e, t, n) {
                        n.forEach(n => e.insertBefore(n, t))
                    }
                    insertAfter(e, t, n) {
                        e.insertBefore(n, t.nextSibling)
                    }
                    setInnerHTML(e, t) {
                        e.innerHTML = t
                    }
                    getText(e) {
                        return e.textContent
                    }
                    setText(e, t) {
                        e.textContent = t
                    }
                    getValue(e) {
                        return e.value
                    }
                    setValue(e, t) {
                        e.value = t
                    }
                    getChecked(e) {
                        return e.checked
                    }
                    setChecked(e, t) {
                        e.checked = t
                    }
                    createComment(e) {
                        return this.getDefaultDocument().createComment(e)
                    }
                    createTemplate(e) {
                        const t = this.getDefaultDocument().createElement("template");
                        return t.innerHTML = e, t
                    }
                    createElement(e, t) {
                        return (t = t || this.getDefaultDocument()).createElement(e)
                    }
                    createElementNS(e, t, n) {
                        return (n = n || this.getDefaultDocument()).createElementNS(e, t)
                    }
                    createTextNode(e, t) {
                        return (t = t || this.getDefaultDocument()).createTextNode(e)
                    }
                    createScriptTag(e, t, n) {
                        const r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                        return r.setAttribute(e, t), r
                    }
                    createStyleElement(e, t) {
                        const n = (t = t || this.getDefaultDocument()).createElement("style");
                        return this.appendChild(n, this.createTextNode(e, t)), n
                    }
                    createShadowRoot(e) {
                        return e.createShadowRoot()
                    }
                    getShadowRoot(e) {
                        return e.shadowRoot
                    }
                    getHost(e) {
                        return e.host
                    }
                    clone(e) {
                        return e.cloneNode(!0)
                    }
                    getElementsByClassName(e, t) {
                        return e.getElementsByClassName(t)
                    }
                    getElementsByTagName(e, t) {
                        return e.getElementsByTagName(t)
                    }
                    classList(e) {
                        return Array.prototype.slice.call(e.classList, 0)
                    }
                    addClass(e, t) {
                        e.classList.add(t)
                    }
                    removeClass(e, t) {
                        e.classList.remove(t)
                    }
                    hasClass(e, t) {
                        return e.classList.contains(t)
                    }
                    setStyle(e, t, n) {
                        e.style[t] = n
                    }
                    removeStyle(e, t) {
                        e.style[t] = ""
                    }
                    getStyle(e, t) {
                        return e.style[t]
                    }
                    hasStyle(e, t, n) {
                        const r = this.getStyle(e, t) || "";
                        return n ? r == n : r.length > 0
                    }
                    tagName(e) {
                        return e.tagName
                    }
                    attributeMap(e) {
                        const t = new Map,
                            n = e.attributes;
                        for (let r = 0; r < n.length; r++) {
                            const e = n.item(r);
                            t.set(e.name, e.value)
                        }
                        return t
                    }
                    hasAttribute(e, t) {
                        return e.hasAttribute(t)
                    }
                    hasAttributeNS(e, t, n) {
                        return e.hasAttributeNS(t, n)
                    }
                    getAttribute(e, t) {
                        return e.getAttribute(t)
                    }
                    getAttributeNS(e, t, n) {
                        return e.getAttributeNS(t, n)
                    }
                    setAttribute(e, t, n) {
                        e.setAttribute(t, n)
                    }
                    setAttributeNS(e, t, n, r) {
                        e.setAttributeNS(t, n, r)
                    }
                    removeAttribute(e, t) {
                        e.removeAttribute(t)
                    }
                    removeAttributeNS(e, t, n) {
                        e.removeAttributeNS(t, n)
                    }
                    templateAwareRoot(e) {
                        return this.isTemplateElement(e) ? this.content(e) : e
                    }
                    createHtmlDocument() {
                        return document.implementation.createHTMLDocument("fakeTitle")
                    }
                    getDefaultDocument() {
                        return document
                    }
                    getBoundingClientRect(e) {
                        try {
                            return e.getBoundingClientRect()
                        } catch (t) {
                            return {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    getTitle(e) {
                        return e.title
                    }
                    setTitle(e, t) {
                        e.title = t || ""
                    }
                    elementMatches(e, t) {
                        return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t))
                    }
                    isTemplateElement(e) {
                        return this.isElementNode(e) && "TEMPLATE" === e.nodeName
                    }
                    isTextNode(e) {
                        return e.nodeType === Node.TEXT_NODE
                    }
                    isCommentNode(e) {
                        return e.nodeType === Node.COMMENT_NODE
                    }
                    isElementNode(e) {
                        return e.nodeType === Node.ELEMENT_NODE
                    }
                    hasShadowRoot(e) {
                        return null != e.shadowRoot && e instanceof HTMLElement
                    }
                    isShadowRoot(e) {
                        return e instanceof DocumentFragment
                    }
                    importIntoDoc(e) {
                        return document.importNode(this.templateAwareRoot(e), !0)
                    }
                    adoptNode(e) {
                        return document.adoptNode(e)
                    }
                    getHref(e) {
                        return e.getAttribute("href")
                    }
                    getEventKey(e) {
                        let t = e.key;
                        if (null == t) {
                            if (null == (t = e.keyIdentifier)) return "Unidentified";
                            t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), e.location === Vl && Bl.hasOwnProperty(t) && (t = Bl[t]))
                        }
                        return ql[t] || t
                    }
                    getGlobalEventTarget(e, t) {
                        return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
                    }
                    getHistory() {
                        return window.history
                    }
                    getLocation() {
                        return window.location
                    }
                    getBaseHref(e) {
                        const t = Gl || (Gl = document.querySelector("base")) ? Gl.getAttribute("href") : null;
                        return null == t ? null : (n = t, Zl || (Zl = document.createElement("a")), Zl.setAttribute("href", n), "/" === Zl.pathname.charAt(0) ? Zl.pathname : "/" + Zl.pathname);
                        var n
                    }
                    resetBaseElement() {
                        Gl = null
                    }
                    getUserAgent() {
                        return window.navigator.userAgent
                    }
                    setData(e, t, n) {
                        this.setAttribute(e, "data-" + t, n)
                    }
                    getData(e, t) {
                        return this.getAttribute(e, "data-" + t)
                    }
                    getComputedStyle(e) {
                        return getComputedStyle(e)
                    }
                    supportsWebAnimation() {
                        return "function" == typeof Element.prototype.animate
                    }
                    performanceNow() {
                        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                    }
                    supportsCookies() {
                        return !0
                    }
                    getCookie(e) {
                        return Na(document.cookie, e)
                    }
                    setCookie(e, t) {
                        document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    }
                }
                let Zl, Gl = null;

                function Kl() {
                    return !!window.history.pushState
                }
                const Xl = new xe("TRANSITION_ID"),
                    Yl = [{
                        provide: Ri,
                        useFactory: function(e, t, n) {
                            return () => {
                                n.get(Oi).donePromise.then(() => {
                                    const n = Hl();
                                    Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter(t => n.getAttribute(t, "ng-transition") === e).forEach(e => n.remove(e))
                                })
                            }
                        },
                        deps: [Xl, $a, Rt],
                        multi: !0
                    }];
                class Jl {
                    static init() {
                        var e;
                        e = new Jl, gs = e
                    }
                    addToWindow(e) {
                        _e.getAngularTestability = (t, n = !0) => {
                            const r = e.findTestabilityInTree(t, n);
                            if (null == r) throw new Error("Could not find testability for element.");
                            return r
                        }, _e.getAllAngularTestabilities = () => e.getAllTestabilities(), _e.getAllAngularRootElements = () => e.getAllRootElements(), _e.frameworkStabilizers || (_e.frameworkStabilizers = []), _e.frameworkStabilizers.push(e => {
                            const t = _e.getAllAngularTestabilities();
                            let n = t.length,
                                r = !1;
                            const i = function(t) {
                                r = r || t, 0 == --n && e(r)
                            };
                            t.forEach((function(e) {
                                e.whenStable(i)
                            }))
                        })
                    }
                    findTestabilityInTree(e, t, n) {
                        if (null == t) return null;
                        const r = e.getTestability(t);
                        return null != r ? r : n ? Hl().isShadowRoot(t) ? this.findTestabilityInTree(e, Hl().getHost(t), !0) : this.findTestabilityInTree(e, Hl().parentElement(t), !0) : null
                    }
                }

                function eu(e, t) {
                    "undefined" != typeof COMPILED && COMPILED || ((_e.ng = _e.ng || {})[e] = t)
                }
                const tu = (() => ({
                    ApplicationRef: Ss,
                    NgZone: is
                }))();

                function nu(e) {
                    return Ls(e)
                }
                const ru = new xe("EventManagerPlugins");
                class iu {
                    constructor(e, t) {
                        this._zone = t, this._eventNameToPlugin = new Map, e.forEach(e => e.manager = this), this._plugins = e.slice().reverse()
                    }
                    addEventListener(e, t, n) {
                        return this._findPluginFor(t).addEventListener(e, t, n)
                    }
                    addGlobalEventListener(e, t, n) {
                        return this._findPluginFor(t).addGlobalEventListener(e, t, n)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(e) {
                        const t = this._eventNameToPlugin.get(e);
                        if (t) return t;
                        const n = this._plugins;
                        for (let r = 0; r < n.length; r++) {
                            const t = n[r];
                            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t
                        }
                        throw new Error(`No event manager plugin found for event ${e}`)
                    }
                }
                class su {
                    constructor(e) {
                        this._doc = e
                    }
                    addGlobalEventListener(e, t, n) {
                        const r = Hl().getGlobalEventTarget(this._doc, e);
                        if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
                        return this.addEventListener(r, t, n)
                    }
                }
                class ou {
                    constructor() {
                        this._stylesSet = new Set
                    }
                    addStyles(e) {
                        const t = new Set;
                        e.forEach(e => {
                            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e))
                        }), this.onStylesAdded(t)
                    }
                    onStylesAdded(e) {}
                    getAllStyles() {
                        return Array.from(this._stylesSet)
                    }
                }
                class au extends ou {
                    constructor(e) {
                        super(), this._doc = e, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(e.head)
                    }
                    _addStylesToHost(e, t) {
                        e.forEach(e => {
                            const n = this._doc.createElement("style");
                            n.textContent = e, this._styleNodes.add(t.appendChild(n))
                        })
                    }
                    addHost(e) {
                        this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
                    }
                    removeHost(e) {
                        this._hostNodes.delete(e)
                    }
                    onStylesAdded(e) {
                        this._hostNodes.forEach(t => this._addStylesToHost(e, t))
                    }
                    ngOnDestroy() {
                        this._styleNodes.forEach(e => Hl().remove(e))
                    }
                }
                const lu = {
                        svg: "http://www.w3.org/2000/svg",
                        xhtml: "http://www.w3.org/1999/xhtml",
                        xlink: "http://www.w3.org/1999/xlink",
                        xml: "http://www.w3.org/XML/1998/namespace",
                        xmlns: "http://www.w3.org/2000/xmlns/"
                    },
                    uu = /%COMP%/g,
                    cu = "_nghost-%COMP%",
                    hu = "_ngcontent-%COMP%";

                function du(e, t, n) {
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        Array.isArray(i) ? du(e, i, n) : (i = i.replace(uu, e), n.push(i))
                    }
                    return n
                }

                function fu(e) {
                    return t => {
                        !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
                    }
                }
                class pu {
                    constructor(e, t, n) {
                        this.eventManager = e, this.sharedStylesHost = t, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new gu(e)
                    }
                    createRenderer(e, t) {
                        if (!e || !t) return this.defaultRenderer;
                        switch (t.encapsulation) {
                            case ze.Emulated: {
                                let n = this.rendererByCompId.get(t.id);
                                return n || (n = new yu(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n
                            }
                            case ze.Native:
                            case ze.ShadowDom:
                                return new bu(this.eventManager, this.sharedStylesHost, e, t);
                            default:
                                if (!this.rendererByCompId.has(t.id)) {
                                    const e = du(t.id, t.styles, []);
                                    this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                class gu {
                    constructor(e) {
                        this.eventManager = e, this.data = Object.create(null)
                    }
                    destroy() {}
                    createElement(e, t) {
                        return t ? document.createElementNS(lu[t] || t, e) : document.createElement(e)
                    }
                    createComment(e) {
                        return document.createComment(e)
                    }
                    createText(e) {
                        return document.createTextNode(e)
                    }
                    appendChild(e, t) {
                        e.appendChild(t)
                    }
                    insertBefore(e, t, n) {
                        e && e.insertBefore(t, n)
                    }
                    removeChild(e, t) {
                        e && e.removeChild(t)
                    }
                    selectRootElement(e, t) {
                        let n = "string" == typeof e ? document.querySelector(e) : e;
                        if (!n) throw new Error(`The selector "${e}" did not match any elements`);
                        return t || (n.textContent = ""), n
                    }
                    parentNode(e) {
                        return e.parentNode
                    }
                    nextSibling(e) {
                        return e.nextSibling
                    }
                    setAttribute(e, t, n, r) {
                        if (r) {
                            t = r + ":" + t;
                            const i = lu[r];
                            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)
                        } else e.setAttribute(t, n)
                    }
                    removeAttribute(e, t, n) {
                        if (n) {
                            const r = lu[n];
                            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`)
                        } else e.removeAttribute(t)
                    }
                    addClass(e, t) {
                        e.classList.add(t)
                    }
                    removeClass(e, t) {
                        e.classList.remove(t)
                    }
                    setStyle(e, t, n, r) {
                        r & hn.DashCase ? e.style.setProperty(t, n, r & hn.Important ? "important" : "") : e.style[t] = n
                    }
                    removeStyle(e, t, n) {
                        n & hn.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
                    }
                    setProperty(e, t, n) {
                        vu(t, "property"), e[t] = n
                    }
                    setValue(e, t) {
                        e.nodeValue = t
                    }
                    listen(e, t, n) {
                        return vu(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, fu(n)) : this.eventManager.addEventListener(e, t, fu(n))
                    }
                }
                const mu = (() => "@".charCodeAt(0))();

                function vu(e, t) {
                    if (e.charCodeAt(0) === mu) throw new Error(`Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`)
                }
                class yu extends gu {
                    constructor(e, t, n, r) {
                        super(e), this.component = n;
                        const i = du(r + "-" + n.id, n.styles, []);
                        t.addStyles(i), this.contentAttr = hu.replace(uu, r + "-" + n.id), this.hostAttr = cu.replace(uu, r + "-" + n.id)
                    }
                    applyToHost(e) {
                        super.setAttribute(e, this.hostAttr, "")
                    }
                    createElement(e, t) {
                        const n = super.createElement(e, t);
                        return super.setAttribute(n, this.contentAttr, ""), n
                    }
                }
                class bu extends gu {
                    constructor(e, t, n, r) {
                        super(e), this.sharedStylesHost = t, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === ze.ShadowDom ? n.attachShadow({
                            mode: "open"
                        }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
                        const i = du(r.id, r.styles, []);
                        for (let s = 0; s < i.length; s++) {
                            const e = document.createElement("style");
                            e.textContent = i[s], this.shadowRoot.appendChild(e)
                        }
                    }
                    nodeOrShadowRoot(e) {
                        return e === this.hostEl ? this.shadowRoot : e
                    }
                    destroy() {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }
                    appendChild(e, t) {
                        return super.appendChild(this.nodeOrShadowRoot(e), t)
                    }
                    insertBefore(e, t, n) {
                        return super.insertBefore(this.nodeOrShadowRoot(e), t, n)
                    }
                    removeChild(e, t) {
                        return super.removeChild(this.nodeOrShadowRoot(e), t)
                    }
                    parentNode(e) {
                        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
                    }
                }
                const wu = (() => "undefined" != typeof Zone && Zone.__symbol__ || function(e) {
                        return "__zone_symbol__" + e
                    })(),
                    _u = wu("addEventListener"),
                    xu = wu("removeEventListener"),
                    Cu = {},
                    Su = "FALSE",
                    Eu = "ANGULAR",
                    Tu = "addEventListener",
                    ku = "removeEventListener",
                    Au = "__zone_symbol__propagationStopped",
                    Nu = "__zone_symbol__stopImmediatePropagation",
                    Iu = (() => {
                        const e = "undefined" != typeof Zone && Zone[wu("BLACK_LISTED_EVENTS")];
                        if (e) {
                            const t = {};
                            return e.forEach(e => {
                                t[e] = e
                            }), t
                        }
                    })(),
                    Ru = function(e) {
                        return !!Iu && Iu.hasOwnProperty(e)
                    },
                    Ou = function(e) {
                        const t = Cu[e.type];
                        if (!t) return;
                        const n = this[t];
                        if (!n) return;
                        const r = [e];
                        if (1 === n.length) {
                            const e = n[0];
                            return e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r)
                        } {
                            const t = n.slice();
                            for (let n = 0; n < t.length && !0 !== e[Au]; n++) {
                                const e = t[n];
                                e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r)
                            }
                        }
                    };
                class Pu extends su {
                    constructor(e, t, n) {
                        super(e), this.ngZone = t, n && function(e) {
                            return e === za
                        }(n) || this.patchEvent()
                    }
                    patchEvent() {
                        if ("undefined" == typeof Event || !Event || !Event.prototype) return;
                        if (Event.prototype[Nu]) return;
                        const e = Event.prototype[Nu] = Event.prototype.stopImmediatePropagation;
                        Event.prototype.stopImmediatePropagation = function() {
                            this && (this[Au] = !0), e && e.apply(this, arguments)
                        }
                    }
                    supports(e) {
                        return !0
                    }
                    addEventListener(e, t, n) {
                        let r = n;
                        if (!e[_u] || is.isInAngularZone() && !Ru(t)) e[Tu](t, r, !1);
                        else {
                            let n = Cu[t];
                            n || (n = Cu[t] = wu(Eu + t + Su));
                            let i = e[n];
                            const s = i && i.length > 0;
                            i || (i = e[n] = []);
                            const o = Ru(t) ? Zone.root : Zone.current;
                            if (0 === i.length) i.push({
                                zone: o,
                                handler: r
                            });
                            else {
                                let e = !1;
                                for (let t = 0; t < i.length; t++)
                                    if (i[t].handler === r) {
                                        e = !0;
                                        break
                                    } e || i.push({
                                    zone: o,
                                    handler: r
                                })
                            }
                            s || e[_u](t, Ou, !1)
                        }
                        return () => this.removeEventListener(e, t, r)
                    }
                    removeEventListener(e, t, n) {
                        let r = e[xu];
                        if (!r) return e[ku].apply(e, [t, n, !1]);
                        let i = Cu[t],
                            s = i && e[i];
                        if (!s) return e[ku].apply(e, [t, n, !1]);
                        let o = !1;
                        for (let a = 0; a < s.length; a++)
                            if (s[a].handler === n) {
                                o = !0, s.splice(a, 1);
                                break
                            } o ? 0 === s.length && r.apply(e, [t, Ou, !1]) : e[ku].apply(e, [t, n, !1])
                    }
                }
                const Du = {
                        pan: !0,
                        panstart: !0,
                        panmove: !0,
                        panend: !0,
                        pancancel: !0,
                        panleft: !0,
                        panright: !0,
                        panup: !0,
                        pandown: !0,
                        pinch: !0,
                        pinchstart: !0,
                        pinchmove: !0,
                        pinchend: !0,
                        pinchcancel: !0,
                        pinchin: !0,
                        pinchout: !0,
                        press: !0,
                        pressup: !0,
                        rotate: !0,
                        rotatestart: !0,
                        rotatemove: !0,
                        rotateend: !0,
                        rotatecancel: !0,
                        swipe: !0,
                        swipeleft: !0,
                        swiperight: !0,
                        swipeup: !0,
                        swipedown: !0,
                        tap: !0
                    },
                    Mu = new xe("HammerGestureConfig"),
                    ju = new xe("HammerLoader");
                class Lu {
                    constructor() {
                        this.events = [], this.overrides = {}
                    }
                    buildHammer(e) {
                        const t = new Hammer(e, this.options);
                        t.get("pinch").set({
                            enable: !0
                        }), t.get("rotate").set({
                            enable: !0
                        });
                        for (const n in this.overrides) t.get(n).set(this.overrides[n]);
                        return t
                    }
                }
                class Uu extends su {
                    constructor(e, t, n, r) {
                        super(e), this._config = t, this.console = n, this.loader = r
                    }
                    supports(e) {
                        return !(!Du.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader && (this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not ` + "loaded and no custom loader has been specified."), 1))
                    }
                    addEventListener(e, t, n) {
                        const r = this.manager.getZone();
                        if (t = t.toLowerCase(), !window.Hammer && this.loader) {
                            let r = !1,
                                i = () => {
                                    r = !0
                                };
                            return this.loader().then(() => {
                                if (!window.Hammer) return this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(i = () => {});
                                r || (i = this.addEventListener(e, t, n))
                            }).catch(() => {
                                this.console.warn(`The "${t}" event cannot be bound because the custom ` + "Hammer.JS loader failed."), i = () => {}
                            }), () => {
                                i()
                            }
                        }
                        return r.runOutsideAngular(() => {
                            const i = this._config.buildHammer(e),
                                s = function(e) {
                                    r.runGuarded((function() {
                                        n(e)
                                    }))
                                };
                            return i.on(t, s), () => {
                                i.off(t, s), "function" == typeof i.destroy && i.destroy()
                            }
                        })
                    }
                    isCustomEvent(e) {
                        return this._config.events.indexOf(e) > -1
                    }
                }
                const Hu = ["alt", "control", "meta", "shift"],
                    Fu = {
                        alt: e => e.altKey,
                        control: e => e.ctrlKey,
                        meta: e => e.metaKey,
                        shift: e => e.shiftKey
                    };
                class $u extends su {
                    constructor(e) {
                        super(e)
                    }
                    supports(e) {
                        return null != $u.parseEventName(e)
                    }
                    addEventListener(e, t, n) {
                        const r = $u.parseEventName(t),
                            i = $u.eventCallback(r.fullKey, n, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => Hl().onAndCancel(e, r.domEventName, i))
                    }
                    static parseEventName(e) {
                        const t = e.toLowerCase().split("."),
                            n = t.shift();
                        if (0 === t.length || "keydown" !== n && "keyup" !== n) return null;
                        const r = $u._normalizeKey(t.pop());
                        let i = "";
                        if (Hu.forEach(e => {
                                const n = t.indexOf(e);
                                n > -1 && (t.splice(n, 1), i += e + ".")
                            }), i += r, 0 != t.length || 0 === r.length) return null;
                        const s = {};
                        return s.domEventName = n, s.fullKey = i, s
                    }
                    static getEventFullKey(e) {
                        let t = "",
                            n = Hl().getEventKey(e);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Hu.forEach(r => {
                            r != n && (0, Fu[r])(e) && (t += r + ".")
                        }), t += n
                    }
                    static eventCallback(e, t, n) {
                        return r => {
                            $u.getEventFullKey(r) === e && n.runGuarded(() => t(r))
                        }
                    }
                    static _normalizeKey(e) {
                        switch (e) {
                            case "esc":
                                return "escape";
                            default:
                                return e
                        }
                    }
                }
                class zu {}
                class Vu extends zu {
                    constructor(e) {
                        super(), this._doc = e
                    }
                    sanitize(e, t) {
                        if (null == t) return null;
                        switch (e) {
                            case _t.NONE:
                                return t;
                            case _t.HTML:
                                return t instanceof Bu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), function(e, t) {
                                    let n = null;
                                    try {
                                        bt = bt || new et(e);
                                        let r = t ? String(t) : "";
                                        n = bt.getInertBodyElement(r);
                                        let i = 5,
                                            s = r;
                                        do {
                                            if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
                                            i--, r = s, s = n.innerHTML, n = bt.getInertBodyElement(r)
                                        } while (r !== s);
                                        const o = new gt,
                                            a = o.sanitizeChildren(wt(n) || n);
                                        return Je() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
                                    } finally {
                                        if (n) {
                                            const e = wt(n) || n;
                                            for (; e.firstChild;) e.removeChild(e.firstChild)
                                        }
                                    }
                                }(this._doc, String(t)));
                            case _t.STYLE:
                                return t instanceof Wu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), function(e) {
                                    if (!(e = String(e).trim())) return "";
                                    const t = e.match(St);
                                    return t && rt(t[1]) === t[1] || e.match(Ct) && function(e) {
                                        let t = !0,
                                            n = !0;
                                        for (let r = 0; r < e.length; r++) {
                                            const i = e.charAt(r);
                                            "'" === i && n ? t = !t : '"' === i && t && (n = !n)
                                        }
                                        return t && n
                                    }(e) ? e : (Je() && console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`), "unsafe")
                                }(t));
                            case _t.SCRIPT:
                                if (t instanceof Qu) return t.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");
                            case _t.URL:
                                return t instanceof Gu || t instanceof Zu ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), rt(String(t)));
                            case _t.RESOURCE_URL:
                                if (t instanceof Gu) return t.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                            default:
                                throw new Error(`Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`)
                        }
                    }
                    checkNotSafeValue(e, t) {
                        if (e instanceof qu) throw new Error(`Required a safe ${t}, got a ${e.getTypeName()} ` + "(see http://g.co/ng/security#xss)")
                    }
                    bypassSecurityTrustHtml(e) {
                        return new Bu(e)
                    }
                    bypassSecurityTrustStyle(e) {
                        return new Wu(e)
                    }
                    bypassSecurityTrustScript(e) {
                        return new Qu(e)
                    }
                    bypassSecurityTrustUrl(e) {
                        return new Zu(e)
                    }
                    bypassSecurityTrustResourceUrl(e) {
                        return new Gu(e)
                    }
                }
                class qu {
                    constructor(e) {
                        this.changingThisBreaksApplicationSecurity = e
                    }
                    toString() {
                        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
                    }
                }
                class Bu extends qu {
                    getTypeName() {
                        return "HTML"
                    }
                }
                class Wu extends qu {
                    getTypeName() {
                        return "Style"
                    }
                }
                class Qu extends qu {
                    getTypeName() {
                        return "Script"
                    }
                }
                class Zu extends qu {
                    getTypeName() {
                        return "URL"
                    }
                }
                class Gu extends qu {
                    getTypeName() {
                        return "ResourceURL"
                    }
                }
                const Ku = ws(Hs, "browser", [{
                    provide: Li,
                    useValue: "browser"
                }, {
                    provide: ji,
                    useValue: function() {
                        Ql.makeCurrent(), Jl.init()
                    },
                    multi: !0
                }, {
                    provide: ma,
                    useClass: class extends ma {
                        constructor(e) {
                            super(), this._doc = e, this._init()
                        }
                        _init() {
                            this.location = Hl().getLocation(), this._history = Hl().getHistory()
                        }
                        getBaseHrefFromDOM() {
                            return Hl().getBaseHref(this._doc)
                        }
                        onPopState(e) {
                            Hl().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
                        }
                        onHashChange(e) {
                            Hl().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
                        }
                        get href() {
                            return this.location.href
                        }
                        get protocol() {
                            return this.location.protocol
                        }
                        get hostname() {
                            return this.location.hostname
                        }
                        get port() {
                            return this.location.port
                        }
                        get pathname() {
                            return this.location.pathname
                        }
                        get search() {
                            return this.location.search
                        }
                        get hash() {
                            return this.location.hash
                        }
                        set pathname(e) {
                            this.location.pathname = e
                        }
                        pushState(e, t, n) {
                            Kl() ? this._history.pushState(e, t, n) : this.location.hash = n
                        }
                        replaceState(e, t, n) {
                            Kl() ? this._history.replaceState(e, t, n) : this.location.hash = n
                        }
                        forward() {
                            this._history.forward()
                        }
                        back() {
                            this._history.back()
                        }
                        getState() {
                            return this._history.state
                        }
                    },
                    deps: [$a]
                }, {
                    provide: $a,
                    useFactory: function() {
                        return document
                    },
                    deps: []
                }]);

                function Xu() {
                    return new Ke
                }
                class Yu {
                    constructor(e) {
                        if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(e) {
                        return {
                            ngModule: Yu,
                            providers: [{
                                provide: Pi,
                                useValue: e.appId
                            }, {
                                provide: Xl,
                                useExisting: Pi
                            }, Yl]
                        }
                    }
                }
                "undefined" != typeof window && window;
                class Ju {
                    constructor(e, t) {
                        this.id = e, this.url = t
                    }
                }
                class ec extends Ju {
                    constructor(e, t, n = "imperative", r = null) {
                        super(e, t), this.navigationTrigger = n, this.restoredState = r
                    }
                    toString() {
                        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                    }
                }
                class tc extends Ju {
                    constructor(e, t, n) {
                        super(e, t), this.urlAfterRedirects = n
                    }
                    toString() {
                        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                    }
                }
                class nc extends Ju {
                    constructor(e, t, n) {
                        super(e, t), this.reason = n
                    }
                    toString() {
                        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                    }
                }
                class rc extends Ju {
                    constructor(e, t, n) {
                        super(e, t), this.error = n
                    }
                    toString() {
                        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                    }
                }
                class ic extends Ju {
                    constructor(e, t, n, r) {
                        super(e, t), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class sc extends Ju {
                    constructor(e, t, n, r) {
                        super(e, t), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class oc extends Ju {
                    constructor(e, t, n, r, i) {
                        super(e, t), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = i
                    }
                    toString() {
                        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                    }
                }
                class ac extends Ju {
                    constructor(e, t, n, r) {
                        super(e, t), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class lc extends Ju {
                    constructor(e, t, n, r) {
                        super(e, t), this.urlAfterRedirects = n, this.state = r
                    }
                    toString() {
                        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                    }
                }
                class uc {
                    constructor(e) {
                        this.route = e
                    }
                    toString() {
                        return `RouteConfigLoadStart(path: ${this.route.path})`
                    }
                }
                class cc {
                    constructor(e) {
                        this.route = e
                    }
                    toString() {
                        return `RouteConfigLoadEnd(path: ${this.route.path})`
                    }
                }
                class hc {
                    constructor(e) {
                        this.snapshot = e
                    }
                    toString() {
                        return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class dc {
                    constructor(e) {
                        this.snapshot = e
                    }
                    toString() {
                        return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class fc {
                    constructor(e) {
                        this.snapshot = e
                    }
                    toString() {
                        return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class pc {
                    constructor(e) {
                        this.snapshot = e
                    }
                    toString() {
                        return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                    }
                }
                class gc {
                    constructor(e, t, n) {
                        this.routerEvent = e, this.position = t, this.anchor = n
                    }
                    toString() {
                        return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                    }
                }
                class mc {}
                const vc = "primary";
                class yc {
                    constructor(e) {
                        this.params = e || {}
                    }
                    has(e) {
                        return this.params.hasOwnProperty(e)
                    }
                    get(e) {
                        if (this.has(e)) {
                            const t = this.params[e];
                            return Array.isArray(t) ? t[0] : t
                        }
                        return null
                    }
                    getAll(e) {
                        if (this.has(e)) {
                            const t = this.params[e];
                            return Array.isArray(t) ? t : [t]
                        }
                        return []
                    }
                    get keys() {
                        return Object.keys(this.params)
                    }
                }

                function bc(e) {
                    return new yc(e)
                }
                const wc = "ngNavigationCancelingError";

                function _c(e) {
                    const t = Error("NavigationCancelingError: " + e);
                    return t[wc] = !0, t
                }

                function xc(e, t, n) {
                    const r = n.path.split("/");
                    if (r.length > e.length) return null;
                    if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
                    const i = {};
                    for (let s = 0; s < r.length; s++) {
                        const t = r[s],
                            n = e[s];
                        if (t.startsWith(":")) i[t.substring(1)] = n;
                        else if (t !== n.path) return null
                    }
                    return {
                        consumed: e.slice(0, r.length),
                        posParams: i
                    }
                }
                class Cc {
                    constructor(e, t) {
                        this.routes = e, this.module = t
                    }
                }

                function Sc(e, t = "") {
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        Ec(r, Tc(t, r))
                    }
                }

                function Ec(e, t) {
                    if (!e) throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);
                    if (Array.isArray(e)) throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);
                    if (!e.component && !e.children && !e.loadChildren && e.outlet && e.outlet !== vc) throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);
                    if (e.redirectTo && e.children) throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);
                    if (e.redirectTo && e.loadChildren) throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);
                    if (e.children && e.loadChildren) throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);
                    if (e.redirectTo && e.component) throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);
                    if (e.path && e.matcher) throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);
                    if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
                    if (void 0 === e.path && void 0 === e.matcher) throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);
                    if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);
                    if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);
                    if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);
                    e.children && Sc(e.children, t)
                }

                function Tc(e, t) {
                    return t ? e || t.path ? e && !t.path ? `${e}/` : !e && t.path ? t.path : `${e}/${t.path}` : "" : e
                }

                function kc(e) {
                    const t = e.children && e.children.map(kc),
                        n = t ? Object.assign({}, e, {
                            children: t
                        }) : Object.assign({}, e);
                    return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== vc && (n.component = mc), n
                }

                function Ac(e, t) {
                    const n = Object.keys(e),
                        r = Object.keys(t);
                    if (!n || !r || n.length != r.length) return !1;
                    let i;
                    for (let s = 0; s < n.length; s++)
                        if (e[i = n[s]] !== t[i]) return !1;
                    return !0
                }

                function Nc(e) {
                    return Array.prototype.concat.apply([], e)
                }

                function Ic(e) {
                    return e.length > 0 ? e[e.length - 1] : null
                }

                function Rc(e, t) {
                    for (const n in e) e.hasOwnProperty(n) && t(e[n], n)
                }

                function Oc(e) {
                    return Gt(e) ? e : Zt(e) ? $(Promise.resolve(e)) : Ba(e)
                }

                function Pc(e, t, n) {
                    return n ? function(e, t) {
                        return Ac(e, t)
                    }(e.queryParams, t.queryParams) && function e(t, n) {
                        if (!Lc(t.segments, n.segments)) return !1;
                        if (t.numberOfChildren !== n.numberOfChildren) return !1;
                        for (const r in n.children) {
                            if (!t.children[r]) return !1;
                            if (!e(t.children[r], n.children[r])) return !1
                        }
                        return !0
                    }(e.root, t.root) : function(e, t) {
                        return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n => t[n] === e[n])
                    }(e.queryParams, t.queryParams) && function e(t, n) {
                        return function t(n, r, i) {
                            if (n.segments.length > i.length) return !!Lc(n.segments.slice(0, i.length), i) && !r.hasChildren();
                            if (n.segments.length === i.length) {
                                if (!Lc(n.segments, i)) return !1;
                                for (const t in r.children) {
                                    if (!n.children[t]) return !1;
                                    if (!e(n.children[t], r.children[t])) return !1
                                }
                                return !0
                            } {
                                const e = i.slice(0, n.segments.length),
                                    s = i.slice(n.segments.length);
                                return !!Lc(n.segments, e) && !!n.children[vc] && t(n.children[vc], r, s)
                            }
                        }(t, n, n.segments)
                    }(e.root, t.root)
                }
                class Dc {
                    constructor(e, t, n) {
                        this.root = e, this.queryParams = t, this.fragment = n
                    }
                    get queryParamMap() {
                        return this._queryParamMap || (this._queryParamMap = bc(this.queryParams)), this._queryParamMap
                    }
                    toString() {
                        return $c.serialize(this)
                    }
                }
                class Mc {
                    constructor(e, t) {
                        this.segments = e, this.children = t, this.parent = null, Rc(t, (e, t) => e.parent = this)
                    }
                    hasChildren() {
                        return this.numberOfChildren > 0
                    }
                    get numberOfChildren() {
                        return Object.keys(this.children).length
                    }
                    toString() {
                        return zc(this)
                    }
                }
                class jc {
                    constructor(e, t) {
                        this.path = e, this.parameters = t
                    }
                    get parameterMap() {
                        return this._parameterMap || (this._parameterMap = bc(this.parameters)), this._parameterMap
                    }
                    toString() {
                        return Zc(this)
                    }
                }

                function Lc(e, t) {
                    return e.length === t.length && e.every((e, n) => e.path === t[n].path)
                }

                function Uc(e, t) {
                    let n = [];
                    return Rc(e.children, (e, r) => {
                        r === vc && (n = n.concat(t(e, r)))
                    }), Rc(e.children, (e, r) => {
                        r !== vc && (n = n.concat(t(e, r)))
                    }), n
                }
                class Hc {}
                class Fc {
                    parse(e) {
                        const t = new Jc(e);
                        return new Dc(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
                    }
                    serialize(e) {
                        var t;
                        return `${`/${function e(t,n){if(!t.hasChildren())return zc(t);if(n){const n=t.children[vc]?e(t.children[vc],!1):"",r=[];return Rc(t.children,(t,n)=>{n!==vc&&r.push(`${n}:${e(t,!1)}`)}),r.length>0?`${n}(${r.join("//")})`: n
                    } {
                        const n = Uc(t, (n, r) => r === vc ? [e(t.children[vc], !1)] : [`${r}:${e(n,!1)}`]);
                        return `${zc(t)}/(${n.join("//")})`
                    }
                }(e.root, !0)
            }
            `}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${qc(t)}=${qc(e)}`).join("&"):`${qc(t)}=${qc(n)}`});return t.length?` ? $ {
                t.join("&")
            }
            `:""}(e.queryParams)}${"string"==typeof e.fragment?`#${t=e.fragment,encodeURI(t)}`:""}`
        }
    }
    const $c = new Fc;

    function zc(e) {
        return e.segments.map(e => Zc(e)).join("/")
    }

    function Vc(e) {
        return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
    }

    function qc(e) {
        return Vc(e).replace(/%3B/gi, ";")
    }

    function Bc(e) {
        return Vc(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
    }

    function Wc(e) {
        return decodeURIComponent(e)
    }

    function Qc(e) {
        return Wc(e.replace(/\+/g, "%20"))
    }

    function Zc(e) {
        return `${Bc(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${Bc(e)}=${Bc(t[e])}`).join("")}`;
        var t
    }
    const Gc = /^[^\/()?;=#]+/;

    function Kc(e) {
        const t = e.match(Gc);
        return t ? t[0] : ""
    }
    const Xc = /^[^=?&#]+/, Yc = /^[^?&#]+/; class Jc {
        constructor(e) {
            this.url = e, this.remaining = e
        }
        parseRootSegment() {
            return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Mc([], {}) : new Mc([], this.parseChildren())
        }
        parseQueryParams() {
            const e = {};
            if (this.consumeOptional("?"))
                do {
                    this.parseQueryParam(e)
                } while (this.consumeOptional("&"));
            return e
        }
        parseFragment() {
            return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
        }
        parseChildren() {
            if ("" === this.remaining) return {};
            this.consumeOptional("/");
            const e = [];
            for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
            let t = {};
            this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
            let n = {};
            return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[vc] = new Mc(e, t)), n
        }
        parseSegment() {
            const e = Kc(this.remaining);
            if ("" === e && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
            return this.capture(e), new jc(Wc(e), this.parseMatrixParams())
        }
        parseMatrixParams() {
            const e = {};
            for (; this.consumeOptional(";");) this.parseParam(e);
            return e
        }
        parseParam(e) {
            const t = Kc(this.remaining);
            if (!t) return;
            this.capture(t);
            let n = "";
            if (this.consumeOptional("=")) {
                const e = Kc(this.remaining);
                e && this.capture(n = e)
            }
            e[Wc(t)] = Wc(n)
        }
        parseQueryParam(e) {
            const t = function(e) {
                const t = e.match(Xc);
                return t ? t[0] : ""
            }(this.remaining);
            if (!t) return;
            this.capture(t);
            let n = "";
            if (this.consumeOptional("=")) {
                const e = function(e) {
                    const t = e.match(Yc);
                    return t ? t[0] : ""
                }(this.remaining);
                e && this.capture(n = e)
            }
            const r = Qc(t),
                i = Qc(n);
            if (e.hasOwnProperty(r)) {
                let t = e[r];
                Array.isArray(t) || (e[r] = t = [t]), t.push(i)
            } else e[r] = i
        }
        parseParens(e) {
            const t = {};
            for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                const n = Kc(this.remaining),
                    r = this.remaining[n.length];
                if ("/" !== r && ")" !== r && ";" !== r) throw new Error(`Cannot parse url '${this.url}'`);
                let i = void 0;
                n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = vc);
                const s = this.parseChildren();
                t[i] = 1 === Object.keys(s).length ? s[vc] : new Mc([], s), this.consumeOptional("//")
            }
            return t
        }
        peekStartsWith(e) {
            return this.remaining.startsWith(e)
        }
        consumeOptional(e) {
            return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
        }
        capture(e) {
            if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`)
        }
    }
    class eh {
        constructor(e) {
            this._root = e
        }
        get root() {
            return this._root.value
        }
        parent(e) {
            const t = this.pathFromRoot(e);
            return t.length > 1 ? t[t.length - 2] : null
        }
        children(e) {
            const t = th(e, this._root);
            return t ? t.children.map(e => e.value) : []
        }
        firstChild(e) {
            const t = th(e, this._root);
            return t && t.children.length > 0 ? t.children[0].value : null
        }
        siblings(e) {
            const t = nh(e, this._root);
            return t.length < 2 ? [] : t[t.length - 2].children.map(e => e.value).filter(t => t !== e)
        }
        pathFromRoot(e) {
            return nh(e, this._root).map(e => e.value)
        }
    }

    function th(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
            const t = th(e, n);
            if (t) return t
        }
        return null
    }

    function nh(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
            const r = nh(e, n);
            if (r.length) return r.unshift(t), r
        }
        return []
    }
    class rh {
        constructor(e, t) {
            this.value = e, this.children = t
        }
        toString() {
            return `TreeNode(${this.value})`
        }
    }

    function ih(e) {
        const t = {};
        return e && e.children.forEach(e => t[e.value.outlet] = e), t
    }
    class sh extends eh {
        constructor(e, t) {
            super(e), this.snapshot = t, hh(this, e)
        }
        toString() {
            return this.snapshot.toString()
        }
    }

    function oh(e, t) {
        const n = function(e, t) {
                const n = new uh([], {}, {}, "", {}, vc, t, null, e.root, -1, {});
                return new ch("", new rh(n, []))
            }(e, t),
            r = new Wa([new jc("", {})]),
            i = new Wa({}),
            s = new Wa({}),
            o = new Wa({}),
            a = new Wa(""),
            l = new ah(r, i, o, a, s, vc, t, n.root);
        return l.snapshot = n.root, new sh(new rh(l, []), n)
    }
    class ah {
        constructor(e, t, n, r, i, s, o, a) {
            this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = i, this.outlet = s, this.component = o, this._futureSnapshot = a
        }
        get routeConfig() {
            return this._futureSnapshot.routeConfig
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap || (this._paramMap = this.params.pipe(L(e => bc(e)))), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(L(e => bc(e)))), this._queryParamMap
        }
        toString() {
            return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
        }
    }

    function lh(e, t = "emptyOnly") {
        const n = e.pathFromRoot;
        let r = 0;
        if ("always" !== t)
            for (r = n.length - 1; r >= 1;) {
                const e = n[r],
                    t = n[r - 1];
                if (e.routeConfig && "" === e.routeConfig.path) r--;
                else {
                    if (t.component) break;
                    r--
                }
            }
        return function(e) {
            return e.reduce((e, t) => ({
                params: Object.assign({}, e.params, t.params),
                data: Object.assign({}, e.data, t.data),
                resolve: Object.assign({}, e.resolve, t._resolvedData)
            }), {
                params: {},
                data: {},
                resolve: {}
            })
        }(n.slice(r))
    }
    class uh {
        constructor(e, t, n, r, i, s, o, a, l, u, c) {
            this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = i, this.outlet = s, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap || (this._paramMap = bc(this.params)), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = bc(this.queryParams)), this._queryParamMap
        }
        toString() {
            return `Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
        }
    }
    class ch extends eh {
        constructor(e, t) {
            super(t), this.url = e, hh(this, t)
        }
        toString() {
            return dh(this._root)
        }
    }

    function hh(e, t) {
        t.value._routerState = e, t.children.forEach(t => hh(e, t))
    }

    function dh(e) {
        const t = e.children.length > 0 ? ` { ${e.children.map(dh).join(", ")} } ` : "";
        return `${e.value}${t}`
    }

    function fh(e) {
        if (e.snapshot) {
            const t = e.snapshot,
                n = e._futureSnapshot;
            e.snapshot = n, Ac(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), Ac(t.params, n.params) || e.params.next(n.params),
                function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; ++n)
                        if (!Ac(e[n], t[n])) return !1;
                    return !0
                }(t.url, n.url) || e.url.next(n.url), Ac(t.data, n.data) || e.data.next(n.data)
        } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
    }

    function ph(e, t) {
        var n, r;
        return Ac(e.params, t.params) && Lc(n = e.url, r = t.url) && n.every((e, t) => Ac(e.parameters, r[t].parameters)) && !(!e.parent != !t.parent) && (!e.parent || ph(e.parent, t.parent))
    }

    function gh(e) {
        return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
    }

    function mh(e, t, n, r, i) {
        let s = {};
        return r && Rc(r, (e, t) => {
            s[t] = Array.isArray(e) ? e.map(e => `${e}`) : `${e}`
        }), new Dc(n.root === e ? t : function e(t, n, r) {
            const i = {};
            return Rc(t.children, (t, s) => {
                i[s] = t === n ? r : e(t, n, r)
            }), new Mc(t.segments, i)
        }(n.root, e, t), s, i)
    }
    class vh {
        constructor(e, t, n) {
            if (this.isAbsolute = e, this.numberOfDoubleDots = t, this.commands = n, e && n.length > 0 && gh(n[0])) throw new Error("Root segment cannot have matrix parameters");
            const r = n.find(e => "object" == typeof e && null != e && e.outlets);
            if (r && r !== Ic(n)) throw new Error("{outlets:{}} has to be the last command")
        }
        toRoot() {
            return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
        }
    }
    class yh {
        constructor(e, t, n) {
            this.segmentGroup = e, this.processChildren = t, this.index = n
        }
    }

    function bh(e) {
        return "object" == typeof e && null != e && e.outlets ? e.outlets[vc] : `${e}`
    }

    function wh(e, t, n) {
        if (e || (e = new Mc([], {})), 0 === e.segments.length && e.hasChildren()) return _h(e, t, n);
        const r = function(e, t, n) {
                let r = 0,
                    i = t;
                const s = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                };
                for (; i < e.segments.length;) {
                    if (r >= n.length) return s;
                    const t = e.segments[i],
                        o = bh(n[r]),
                        a = r < n.length - 1 ? n[r + 1] : null;
                    if (i > 0 && void 0 === o) break;
                    if (o && a && "object" == typeof a && void 0 === a.outlets) {
                        if (!Eh(o, a, t)) return s;
                        r += 2
                    } else {
                        if (!Eh(o, {}, t)) return s;
                        r++
                    }
                    i++
                }
                return {
                    match: !0,
                    pathIndex: i,
                    commandIndex: r
                }
            }(e, t, n),
            i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
            const t = new Mc(e.segments.slice(0, r.pathIndex), {});
            return t.children[vc] = new Mc(e.segments.slice(r.pathIndex), e.children), _h(t, 0, i)
        }
        return r.match && 0 === i.length ? new Mc(e.segments, {}) : r.match && !e.hasChildren() ? xh(e, t, n) : r.match ? _h(e, 0, i) : xh(e, t, n)
    }

    function _h(e, t, n) {
        if (0 === n.length) return new Mc(e.segments, {}); {
            const r = function(e) {
                    return "object" != typeof e[0] ? {
                        [vc]: e
                    } : void 0 === e[0].outlets ? {
                        [vc]: e
                    } : e[0].outlets
                }(n),
                i = {};
            return Rc(r, (n, r) => {
                null !== n && (i[r] = wh(e.children[r], t, n))
            }), Rc(e.children, (e, t) => {
                void 0 === r[t] && (i[t] = e)
            }), new Mc(e.segments, i)
        }
    }

    function xh(e, t, n) {
        const r = e.segments.slice(0, t);
        let i = 0;
        for (; i < n.length;) {
            if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
                const e = Ch(n[i].outlets);
                return new Mc(r, e)
            }
            if (0 === i && gh(n[0])) {
                r.push(new jc(e.segments[t].path, n[0])), i++;
                continue
            }
            const s = bh(n[i]),
                o = i < n.length - 1 ? n[i + 1] : null;
            s && o && gh(o) ? (r.push(new jc(s, Sh(o))), i += 2) : (r.push(new jc(s, {})), i++)
        }
        return new Mc(r, {})
    }

    function Ch(e) {
        const t = {};
        return Rc(e, (e, n) => {
            null !== e && (t[n] = xh(new Mc([], {}), 0, e))
        }), t
    }

    function Sh(e) {
        const t = {};
        return Rc(e, (e, n) => t[n] = `${e}`), t
    }

    function Eh(e, t, n) {
        return e == n.path && Ac(t, n.parameters)
    }
    const Th = (e, t, n) => L(r => (new kh(t, r.targetRouterState, r.currentRouterState, n).activate(e), r)); class kh {
        constructor(e, t, n, r) {
            this.routeReuseStrategy = e, this.futureState = t, this.currState = n, this.forwardEvent = r
        }
        activate(e) {
            const t = this.futureState._root,
                n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(t, n, e), fh(this.futureState.root), this.activateChildRoutes(t, n, e)
        }
        deactivateChildRoutes(e, t, n) {
            const r = ih(t);
            e.children.forEach(e => {
                const t = e.value.outlet;
                this.deactivateRoutes(e, r[t], n), delete r[t]
            }), Rc(r, (e, t) => {
                this.deactivateRouteAndItsChildren(e, n)
            })
        }
        deactivateRoutes(e, t, n) {
            const r = e.value,
                i = t ? t.value : null;
            if (r === i)
                if (r.component) {
                    const i = n.getContext(r.outlet);
                    i && this.deactivateChildRoutes(e, t, i.children)
                } else this.deactivateChildRoutes(e, t, n);
            else i && this.deactivateRouteAndItsChildren(t, n)
        }
        deactivateRouteAndItsChildren(e, t) {
            this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
        }
        detachAndStoreRouteSubtree(e, t) {
            const n = t.getContext(e.value.outlet);
            if (n && n.outlet) {
                const t = n.outlet.detach(),
                    r = n.children.onOutletDeactivated();
                this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: t,
                    route: e,
                    contexts: r
                })
            }
        }
        deactivateRouteAndOutlet(e, t) {
            const n = t.getContext(e.value.outlet);
            if (n) {
                const r = ih(e),
                    i = e.value.component ? n.children : t;
                Rc(r, (e, t) => this.deactivateRouteAndItsChildren(e, i)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
            }
        }
        activateChildRoutes(e, t, n) {
            const r = ih(t);
            e.children.forEach(e => {
                this.activateRoutes(e, r[e.value.outlet], n), this.forwardEvent(new pc(e.value.snapshot))
            }), e.children.length && this.forwardEvent(new dc(e.value.snapshot))
        }
        activateRoutes(e, t, n) {
            const r = e.value,
                i = t ? t.value : null;
            if (fh(r), r === i)
                if (r.component) {
                    const i = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, i.children)
                } else this.activateChildRoutes(e, t, n);
            else if (r.component) {
                const t = n.getOrCreateContext(r.outlet);
                if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    const e = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null), t.children.onOutletReAttached(e.contexts), t.attachRef = e.componentRef, t.route = e.route.value, t.outlet && t.outlet.attach(e.componentRef, e.route.value), Ah(e.route)
                } else {
                    const n = function(e) {
                            for (let t = e.parent; t; t = t.parent) {
                                const e = t.routeConfig;
                                if (e && e._loadedConfig) return e._loadedConfig;
                                if (e && e.component) return null
                            }
                            return null
                        }(r.snapshot),
                        i = n ? n.module.componentFactoryResolver : null;
                    t.attachRef = null, t.route = r, t.resolver = i, t.outlet && t.outlet.activateWith(r, i), this.activateChildRoutes(e, null, t.children)
                }
            } else this.activateChildRoutes(e, null, n)
        }
    }

    function Ah(e) {
        fh(e.value), e.children.forEach(Ah)
    }

    function Nh(e) {
        return "function" == typeof e
    }

    function Ih(e) {
        return e instanceof Dc
    }
    class Rh {
        constructor(e) {
            this.segmentGroup = e || null
        }
    }
    class Oh {
        constructor(e) {
            this.urlTree = e
        }
    }

    function Ph(e) {
        return new w(t => t.error(new Rh(e)))
    }

    function Dh(e) {
        return new w(t => t.error(new Oh(e)))
    }

    function Mh(e) {
        return new w(t => t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))
    }
    class jh {
        constructor(e, t, n, r, i) {
            this.configLoader = t, this.urlSerializer = n, this.urlTree = r, this.config = i, this.allowRedirects = !0, this.ngModule = e.get(Ue)
        }
        apply() {
            return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, vc).pipe(L(e => this.createUrlTree(e, this.urlTree.queryParams, this.urlTree.fragment))).pipe(ml(e => {
                if (e instanceof Oh) return this.allowRedirects = !1, this.match(e.urlTree);
                if (e instanceof Rh) throw this.noMatchError(e);
                throw e
            }))
        }
        match(e) {
            return this.expandSegmentGroup(this.ngModule, this.config, e.root, vc).pipe(L(t => this.createUrlTree(t, e.queryParams, e.fragment))).pipe(ml(e => {
                if (e instanceof Rh) throw this.noMatchError(e);
                throw e
            }))
        }
        noMatchError(e) {
            return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)
        }
        createUrlTree(e, t, n) {
            const r = e.segments.length > 0 ? new Mc([], {
                [vc]: e
            }) : e;
            return new Dc(r, t, n)
        }
        expandSegmentGroup(e, t, n, r) {
            return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(L(e => new Mc([], e))) : this.expandSegment(e, n, t, n.segments, r, !0)
        }
        expandChildren(e, t, n) {
            return function(e, t) {
                if (0 === Object.keys(e).length) return Ba({});
                const n = [],
                    r = [],
                    i = {};
                return Rc(e, (e, s) => {
                    const o = t(s, e).pipe(L(e => i[s] = e));
                    s === vc ? n.push(o) : r.push(o)
                }), Ba.apply(null, n.concat(r)).pipe(el(), gl(), L(() => i))
            }(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n))
        }
        expandSegment(e, t, n, r, i, s) {
            return Ba(...n).pipe(L(o => this.expandSegmentAgainstRoute(e, t, n, o, r, i, s).pipe(ml(e => {
                if (e instanceof Rh) return Ba(null);
                throw e
            }))), el(), xl(e => !!e), ml((e, n) => {
                if (e instanceof Qa || "EmptyError" === e.name) {
                    if (this.noLeftoversInUrl(t, r, i)) return Ba(new Mc([], {}));
                    throw new Rh(t)
                }
                throw e
            }))
        }
        noLeftoversInUrl(e, t, n) {
            return 0 === t.length && !e.children[n]
        }
        expandSegmentAgainstRoute(e, t, n, r, i, s, o) {
            return Fh(r) !== s ? Ph(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s) : Ph(t)
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s) {
            return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s)
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
            const i = this.applyRedirectCommands([], n.redirectTo, {});
            return n.redirectTo.startsWith("/") ? Dh(i) : this.lineralizeSegments(n, i).pipe(z(n => {
                const i = new Mc(n, {});
                return this.expandSegment(e, i, t, n, r, !1)
            }))
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, s) {
            const {
                matched: o,
                consumedSegments: a,
                lastChild: l,
                positionalParamSegments: u
            } = Lh(t, r, i);
            if (!o) return Ph(t);
            const c = this.applyRedirectCommands(a, r.redirectTo, u);
            return r.redirectTo.startsWith("/") ? Dh(c) : this.lineralizeSegments(r, c).pipe(z(r => this.expandSegment(e, t, n, r.concat(i.slice(l)), s, !1)))
        }
        matchSegmentAgainstRoute(e, t, n, r) {
            if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(L(e => (n._loadedConfig = e, new Mc(r, {})))) : Ba(new Mc(r, {}));
            const {
                matched: i,
                consumedSegments: s,
                lastChild: o
            } = Lh(t, n, r);
            if (!i) return Ph(t);
            const a = r.slice(o);
            return this.getChildConfig(e, n, r).pipe(z(e => {
                const n = e.module,
                    r = e.routes,
                    {
                        segmentGroup: i,
                        slicedSegments: o
                    } = function(e, t, n, r) {
                        return n.length > 0 && function(e, t, n) {
                            return n.some(n => Hh(e, t, n) && Fh(n) !== vc)
                        }(e, n, r) ? {
                            segmentGroup: Uh(new Mc(t, function(e, t) {
                                const n = {};
                                n[vc] = t;
                                for (const r of e) "" === r.path && Fh(r) !== vc && (n[Fh(r)] = new Mc([], {}));
                                return n
                            }(r, new Mc(n, e.children)))),
                            slicedSegments: []
                        } : 0 === n.length && function(e, t, n) {
                            return n.some(n => Hh(e, t, n))
                        }(e, n, r) ? {
                            segmentGroup: Uh(new Mc(e.segments, function(e, t, n, r) {
                                const i = {};
                                for (const s of n) Hh(e, t, s) && !r[Fh(s)] && (i[Fh(s)] = new Mc([], {}));
                                return Object.assign({}, r, i)
                            }(e, n, r, e.children))),
                            slicedSegments: n
                        } : {
                            segmentGroup: e,
                            slicedSegments: n
                        }
                    }(t, s, a, r);
                return 0 === o.length && i.hasChildren() ? this.expandChildren(n, r, i).pipe(L(e => new Mc(s, e))) : 0 === r.length && 0 === o.length ? Ba(new Mc(s, {})) : this.expandSegment(n, i, r, o, vc, !0).pipe(L(e => new Mc(s.concat(e.segments), e.children)))
            }))
        }
        getChildConfig(e, t, n) {
            return t.children ? Ba(new Cc(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? Ba(t._loadedConfig) : function(e, t, n) {
                const r = t.canLoad;
                return r && 0 !== r.length ? $(r).pipe(L(r => {
                    const i = e.get(r);
                    let s;
                    if (function(e) {
                            return e && Nh(e.canLoad)
                        }(i)) s = i.canLoad(t, n);
                    else {
                        if (!Nh(i)) throw new Error("Invalid CanLoad guard");
                        s = i(t, n)
                    }
                    return Oc(s)
                })).pipe(el(), (i = e => !0 === e, e => e.lift(new Cl(i, void 0, e)))) : Ba(!0);
                var i
            }(e.injector, t, n).pipe(z(n => n ? this.configLoader.load(e.injector, t).pipe(L(e => (t._loadedConfig = e, e))) : function(e) {
                return new w(t => t.error(_c(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))
            }(t))) : Ba(new Cc([], e))
        }
        lineralizeSegments(e, t) {
            let n = [],
                r = t.root;
            for (;;) {
                if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ba(n);
                if (r.numberOfChildren > 1 || !r.children[vc]) return Mh(e.redirectTo);
                r = r.children[vc]
            }
        }
        applyRedirectCommands(e, t, n) {
            return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n)
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
            const i = this.createSegmentGroup(e, t.root, n, r);
            return new Dc(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
        }
        createQueryParams(e, t) {
            const n = {};
            return Rc(e, (e, r) => {
                if ("string" == typeof e && e.startsWith(":")) {
                    const i = e.substring(1);
                    n[r] = t[i]
                } else n[r] = e
            }), n
        }
        createSegmentGroup(e, t, n, r) {
            const i = this.createSegments(e, t.segments, n, r);
            let s = {};
            return Rc(t.children, (t, i) => {
                s[i] = this.createSegmentGroup(e, t, n, r)
            }), new Mc(i, s)
        }
        createSegments(e, t, n, r) {
            return t.map(t => t.path.startsWith(":") ? this.findPosParam(e, t, r) : this.findOrReturn(t, n))
        }
        findPosParam(e, t, n) {
            const r = n[t.path.substring(1)];
            if (!r) throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);
            return r
        }
        findOrReturn(e, t) {
            let n = 0;
            for (const r of t) {
                if (r.path === e.path) return t.splice(n), r;
                n++
            }
            return e
        }
    }

    function Lh(e, t, n) {
        if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {}
        } : {
            matched: !0,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {}
        };
        const r = (t.matcher || xc)(n, e, t);
        return r ? {
            matched: !0,
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            positionalParamSegments: r.posParams
        } : {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {}
        }
    }

    function Uh(e) {
        if (1 === e.numberOfChildren && e.children[vc]) {
            const t = e.children[vc];
            return new Mc(e.segments.concat(t.segments), t.children)
        }
        return e
    }

    function Hh(e, t, n) {
        return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
    }

    function Fh(e) {
        return e.outlet || vc
    }
    class $h {
        constructor(e) {
            this.path = e, this.route = this.path[this.path.length - 1]
        }
    }
    class zh {
        constructor(e, t) {
            this.component = e, this.route = t
        }
    }

    function Vh(e, t, n) {
        const r = e._root;
        return function e(t, n, r, i, s = {
            canDeactivateChecks: [],
            canActivateChecks: []
        }) {
            const o = ih(n);
            return t.children.forEach(t => {
                ! function(t, n, r, i, s = {
                    canDeactivateChecks: [],
                    canActivateChecks: []
                }) {
                    const o = t.value,
                        a = n ? n.value : null,
                        l = r ? r.getContext(t.value.outlet) : null;
                    if (a && o.routeConfig === a.routeConfig) {
                        const u = function(e, t, n) {
                            if ("function" == typeof n) return n(e, t);
                            switch (n) {
                                case "pathParamsChange":
                                    return !Lc(e.url, t.url);
                                case "pathParamsOrQueryParamsChange":
                                    return !Lc(e.url, t.url) || !Ac(e.queryParams, t.queryParams);
                                case "always":
                                    return !0;
                                case "paramsOrQueryParamsChange":
                                    return !ph(e, t) || !Ac(e.queryParams, t.queryParams);
                                case "paramsChange":
                                default:
                                    return !ph(e, t)
                            }
                        }(a, o, o.routeConfig.runGuardsAndResolvers);
                        u ? s.canActivateChecks.push(new $h(i)) : (o.data = a.data, o._resolvedData = a._resolvedData), e(t, n, o.component ? l ? l.children : null : r, i, s), u && s.canDeactivateChecks.push(new zh(l && l.outlet && l.outlet.component || null, a))
                    } else a && Bh(n, l, s), s.canActivateChecks.push(new $h(i)), e(t, null, o.component ? l ? l.children : null : r, i, s)
                }(t, o[t.value.outlet], r, i.concat([t.value]), s), delete o[t.value.outlet]
            }), Rc(o, (e, t) => Bh(e, r.getContext(t), s)), s
        }(r, t ? t._root : null, n, [r.value])
    }

    function qh(e, t, n) {
        const r = function(e) {
            if (!e) return null;
            for (let t = e.parent; t; t = t.parent) {
                const e = t.routeConfig;
                if (e && e._loadedConfig) return e._loadedConfig
            }
            return null
        }(t);
        return (r ? r.module.injector : n).get(e)
    }

    function Bh(e, t, n) {
        const r = ih(e),
            i = e.value;
        Rc(r, (e, r) => {
            Bh(e, i.component ? t ? t.children.getContext(r) : null : t, n)
        }), n.canDeactivateChecks.push(new zh(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
    }
    const Wh = Symbol("INITIAL_VALUE");

    function Qh() {
        return El(e => (function(...e) {
            let t = null,
                n = null;
            return k(e[e.length - 1]) && (n = e.pop()), "function" == typeof e[e.length - 1] && (t = e.pop()), 1 === e.length && l(e[0]) && (e = e[0]), Q(e, n).lift(new Ga(t))
        })(...e.map(e => e.pipe(bl(1), function(...e) {
            const t = e[e.length - 1];
            return k(t) ? (e.pop(), n => Al(e, n, t)) : t => Al(e, t)
        }(Wh)))).pipe(Nl((e, t) => {
            let n = !1;
            return t.reduce((e, r, i) => {
                if (e !== Wh) return e;
                if (r === Wh && (n = !0), !n) {
                    if (!1 === r) return r;
                    if (i === t.length - 1 || Ih(r)) return r
                }
                return e
            }, e)
        }, Wh), tl(e => e !== Wh), L(e => Ih(e) ? e : !0 === e), bl(1)))
    }

    function Zh(e, t) {
        return null !== e && t && t(new fc(e)), Ba(!0)
    }

    function Gh(e, t) {
        return null !== e && t && t(new hc(e)), Ba(!0)
    }

    function Kh(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length ? Ba(r.map(r => Ja(() => {
            const i = qh(r, t, n);
            let s;
            if (function(e) {
                    return e && Nh(e.canActivate)
                }(i)) s = Oc(i.canActivate(t, e));
            else {
                if (!Nh(i)) throw new Error("Invalid CanActivate guard");
                s = Oc(i(t, e))
            }
            return s.pipe(xl())
        }))).pipe(Qh()) : Ba(!0)
    }

    function Xh(e, t, n) {
        const r = t[t.length - 1],
            i = t.slice(0, t.length - 1).reverse().map(e => (function(e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? {
                    node: e,
                    guards: t
                } : null
            })(e)).filter(e => null !== e).map(t => Ja(() => Ba(t.guards.map(i => {
                const s = qh(i, t.node, n);
                let o;
                if (function(e) {
                        return e && Nh(e.canActivateChild)
                    }(s)) o = Oc(s.canActivateChild(r, e));
                else {
                    if (!Nh(s)) throw new Error("Invalid CanActivateChild guard");
                    o = Oc(s(r, e))
                }
                return o.pipe(xl())
            })).pipe(Qh())));
        return Ba(i).pipe(Qh())
    }
    class Yh {}
    class Jh {
        constructor(e, t, n, r, i, s) {
            this.rootComponentType = e, this.config = t, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = i, this.relativeLinkResolution = s
        }
        recognize() {
            try {
                const e = nd(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                    t = this.processSegmentGroup(this.config, e, vc),
                    n = new uh([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, vc, this.rootComponentType, null, this.urlTree.root, -1, {}),
                    r = new rh(n, t),
                    i = new ch(this.url, r);
                return this.inheritParamsAndData(i._root), Ba(i)
            } catch (e) {
                return new w(t => t.error(e))
            }
        }
        inheritParamsAndData(e) {
            const t = e.value,
                n = lh(t, this.paramsInheritanceStrategy);
            t.params = Object.freeze(n.params), t.data = Object.freeze(n.data), e.children.forEach(e => this.inheritParamsAndData(e))
        }
        processSegmentGroup(e, t, n) {
            return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n)
        }
        processChildren(e, t) {
            const n = Uc(t, (t, n) => this.processSegmentGroup(e, t, n));
            return function(e) {
                const t = {};
                e.forEach(e => {
                    const n = t[e.value.outlet];
                    if (n) {
                        const t = n.url.map(e => e.toString()).join("/"),
                            r = e.value.url.map(e => e.toString()).join("/");
                        throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`)
                    }
                    t[e.value.outlet] = e.value
                })
            }(n), n.sort((e, t) => e.value.outlet === vc ? -1 : t.value.outlet === vc ? 1 : e.value.outlet.localeCompare(t.value.outlet)), n
        }
        processSegment(e, t, n, r) {
            for (const s of e) try {
                return this.processSegmentAgainstRoute(s, t, n, r)
            } catch (i) {
                if (!(i instanceof Yh)) throw i
            }
            if (this.noLeftoversInUrl(t, n, r)) return [];
            throw new Yh
        }
        noLeftoversInUrl(e, t, n) {
            return 0 === t.length && !e.children[n]
        }
        processSegmentAgainstRoute(e, t, n, r) {
            if (e.redirectTo) throw new Yh;
            if ((e.outlet || vc) !== r) throw new Yh;
            let i, s = [],
                o = [];
            if ("**" === e.path) {
                const s = n.length > 0 ? Ic(n).parameters : {};
                i = new uh(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, sd(e), r, e.component, e, ed(t), td(t) + n.length, od(e))
            } else {
                const a = function(e, t, n) {
                    if ("" === t.path) {
                        if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Yh;
                        return {
                            consumedSegments: [],
                            lastChild: 0,
                            parameters: {}
                        }
                    }
                    const r = (t.matcher || xc)(n, e, t);
                    if (!r) throw new Yh;
                    const i = {};
                    Rc(r.posParams, (e, t) => {
                        i[t] = e.path
                    });
                    const s = r.consumed.length > 0 ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters) : i;
                    return {
                        consumedSegments: r.consumed,
                        lastChild: r.consumed.length,
                        parameters: s
                    }
                }(t, e, n);
                s = a.consumedSegments, o = n.slice(a.lastChild), i = new uh(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, sd(e), r, e.component, e, ed(t), td(t) + s.length, od(e))
            }
            const a = function(e) {
                    return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                }(e),
                {
                    segmentGroup: l,
                    slicedSegments: u
                } = nd(t, s, o, a, this.relativeLinkResolution);
            if (0 === u.length && l.hasChildren()) {
                const e = this.processChildren(a, l);
                return [new rh(i, e)]
            }
            if (0 === a.length && 0 === u.length) return [new rh(i, [])];
            const c = this.processSegment(a, l, u, vc);
            return [new rh(i, c)]
        }
    }

    function ed(e) {
        let t = e;
        for (; t._sourceSegment;) t = t._sourceSegment;
        return t
    }

    function td(e) {
        let t = e,
            n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
        return n - 1
    }

    function nd(e, t, n, r, i) {
        if (n.length > 0 && function(e, t, n) {
                return n.some(n => rd(e, t, n) && id(n) !== vc)
            }(e, n, r)) {
            const i = new Mc(t, function(e, t, n, r) {
                const i = {};
                i[vc] = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                for (const s of n)
                    if ("" === s.path && id(s) !== vc) {
                        const n = new Mc([], {});
                        n._sourceSegment = e, n._segmentIndexShift = t.length, i[id(s)] = n
                    } return i
            }(e, t, r, new Mc(n, e.children)));
            return i._sourceSegment = e, i._segmentIndexShift = t.length, {
                segmentGroup: i,
                slicedSegments: []
            }
        }
        if (0 === n.length && function(e, t, n) {
                return n.some(n => rd(e, t, n))
            }(e, n, r)) {
            const s = new Mc(e.segments, function(e, t, n, r, i, s) {
                const o = {};
                for (const a of r)
                    if (rd(e, n, a) && !i[id(a)]) {
                        const n = new Mc([], {});
                        n._sourceSegment = e, n._segmentIndexShift = "legacy" === s ? e.segments.length : t.length, o[id(a)] = n
                    } return Object.assign({}, i, o)
            }(e, t, n, r, e.children, i));
            return s._sourceSegment = e, s._segmentIndexShift = t.length, {
                segmentGroup: s,
                slicedSegments: n
            }
        }
        const s = new Mc(e.segments, e.children);
        return s._sourceSegment = e, s._segmentIndexShift = t.length, {
            segmentGroup: s,
            slicedSegments: n
        }
    }

    function rd(e, t, n) {
        return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
    }

    function id(e) {
        return e.outlet || vc
    }

    function sd(e) {
        return e.data || {}
    }

    function od(e) {
        return e.resolve || {}
    }

    function ad(e, t, n, r) {
        const i = qh(e, t, r);
        return Oc(i.resolve ? i.resolve(t, n) : i(t, n))
    }

    function ld(e) {
        return function(t) {
            return t.pipe(El(t => {
                const n = e(t);
                return n ? $(n).pipe(L(() => t)) : $([t])
            }))
        }
    }
    class ud {}
    class cd {
        shouldDetach(e) {
            return !1
        }
        store(e, t) {}
        shouldAttach(e) {
            return !1
        }
        retrieve(e) {
            return null
        }
        shouldReuseRoute(e, t) {
            return e.routeConfig === t.routeConfig
        }
    }
    const hd = new xe("ROUTES"); class dd {
        constructor(e, t, n, r) {
            this.loader = e, this.compiler = t, this.onLoadStartListener = n, this.onLoadEndListener = r
        }
        load(e, t) {
            return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(L(n => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new Cc(Nc(r.injector.get(hd)).map(kc), r)
            }))
        }
        loadModuleFactory(e) {
            return "string" == typeof e ? $(this.loader.load(e)) : Oc(e()).pipe(z(e => e instanceof He ? Ba(e) : $(this.compiler.compileModuleAsync(e))))
        }
    }
    class fd {}
    class pd {
        shouldProcessUrl(e) {
            return !0
        }
        extract(e) {
            return e
        }
        merge(e, t) {
            return e
        }
    }

    function gd(e) {
        throw e
    }

    function md(e, t, n) {
        return t.parse("/")
    }

    function vd(e, t) {
        return Ba(null)
    }
    class yd {
        constructor(e, t, n, r, i, s, o, a) {
            this.rootComponentType = e, this.urlSerializer = t, this.rootContexts = n, this.location = r, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new E, this.errorHandler = gd, this.malformedUriErrorHandler = md, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                beforePreactivation: vd,
                afterPreactivation: vd
            }, this.urlHandlingStrategy = new pd, this.routeReuseStrategy = new cd, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = i.get(Ue), this.console = i.get(Hi);
            const l = i.get(is);
            this.isNgZoneEnabled = l instanceof is, this.resetConfig(a), this.currentUrlTree = new Dc(new Mc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new dd(s, o, e => this.triggerEvent(new uc(e)), e => this.triggerEvent(new cc(e))), this.routerState = oh(this.currentUrlTree, this.rootComponentType), this.transitions = new Wa({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: {
                    canActivateChecks: [],
                    canDeactivateChecks: []
                },
                guardsResult: null
            }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
        }
        setupNavigations(e) {
            const t = this.events;
            return e.pipe(tl(e => 0 !== e.id), L(e => Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl)
            })), El(e => {
                let n = !1,
                    r = !1;
                return Ba(e).pipe(Pl(e => {
                    this.currentNavigation = {
                        id: e.id,
                        initialUrl: e.currentRawUrl,
                        extractedUrl: e.extractedUrl,
                        trigger: e.source,
                        extras: e.extras,
                        previousNavigation: this.lastSuccessfulNavigation ? Object.assign({}, this.lastSuccessfulNavigation, {
                            previousNavigation: null
                        }) : null
                    }
                }), El(e => {
                    const n = !this.navigated || e.extractedUrl.toString() !== this.browserUrlTree.toString();
                    if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return Ba(e).pipe(El(e => {
                        const n = this.transitions.getValue();
                        return t.next(new ec(e.id, this.serializeUrl(e.extractedUrl), e.source, e.restoredState)), n !== this.transitions.getValue() ? Xa : [e]
                    }), El(e => Promise.resolve(e)), function(e, t, n, r) {
                        return function(i) {
                            return i.pipe(El(i => (function(e, t, n, r, i) {
                                return new jh(e, t, n, r, i).apply()
                            })(e, t, n, i.extractedUrl, r).pipe(L(e => Object.assign({}, i, {
                                urlAfterRedirects: e
                            })))))
                        }
                    }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), Pl(e => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                            finalUrl: e.urlAfterRedirects
                        })
                    }), function(e, t, n, r, i) {
                        return function(s) {
                            return s.pipe(z(s => (function(e, t, n, r, i = "emptyOnly", s = "legacy") {
                                return new Jh(e, t, n, r, i, s).recognize()
                            })(e, t, s.urlAfterRedirects, n(s.urlAfterRedirects), r, i).pipe(L(e => Object.assign({}, s, {
                                targetSnapshot: e
                            })))))
                        }
                    }(this.rootComponentType, this.config, e => this.serializeUrl(e), this.paramsInheritanceStrategy, this.relativeLinkResolution), Pl(e => {
                        "eager" === this.urlUpdateStrategy && (e.extras.skipLocationChange || this.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), this.browserUrlTree = e.urlAfterRedirects)
                    }), Pl(e => {
                        const n = new ic(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                        t.next(n)
                    }));
                    if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: i,
                            restoredState: s,
                            extras: o
                        } = e, a = new ec(n, this.serializeUrl(r), i, s);
                        t.next(a);
                        const l = oh(r, this.rootComponentType).snapshot;
                        return Ba(Object.assign({}, e, {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign({}, o, {
                                skipLocationChange: !1,
                                replaceUrl: !1
                            })
                        }))
                    }
                    return this.rawUrlTree = e.rawUrl, this.browserUrlTree = e.urlAfterRedirects, e.resolve(null), Xa
                }), ld(e => {
                    const {
                        targetSnapshot: t,
                        id: n,
                        extractedUrl: r,
                        rawUrl: i,
                        extras: {
                            skipLocationChange: s,
                            replaceUrl: o
                        }
                    } = e;
                    return this.hooks.beforePreactivation(t, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: i,
                        skipLocationChange: !!s,
                        replaceUrl: !!o
                    })
                }), Pl(e => {
                    const t = new sc(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                    this.triggerEvent(t)
                }), L(e => Object.assign({}, e, {
                    guards: Vh(e.targetSnapshot, e.currentSnapshot, this.rootContexts)
                })), function(e, t) {
                    return function(n) {
                        return n.pipe(z(n => {
                            const {
                                targetSnapshot: r,
                                currentSnapshot: i,
                                guards: {
                                    canActivateChecks: s,
                                    canDeactivateChecks: o
                                }
                            } = n;
                            return 0 === o.length && 0 === s.length ? Ba(Object.assign({}, n, {
                                guardsResult: !0
                            })) : function(e, t, n, r) {
                                return $(e).pipe(z(e => (function(e, t, n, r, i) {
                                    const s = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                    return s && 0 !== s.length ? Ba(s.map(s => {
                                        const o = qh(s, t, i);
                                        let a;
                                        if (function(e) {
                                                return e && Nh(e.canDeactivate)
                                            }(o)) a = Oc(o.canDeactivate(e, t, n, r));
                                        else {
                                            if (!Nh(o)) throw new Error("Invalid CanDeactivate guard");
                                            a = Oc(o(e, t, n, r))
                                        }
                                        return a.pipe(xl())
                                    })).pipe(Qh()) : Ba(!0)
                                })(e.component, e.route, n, t, r)), xl(e => !0 !== e, !0))
                            }(o, r, i, e).pipe(z(n => n && function(e) {
                                return "boolean" == typeof e
                            }(n) ? function(e, t, n, r) {
                                return $(t).pipe(Ol(t => $([Gh(t.route.parent, r), Zh(t.route, r), Xh(e, t.path, n), Kh(e, t.route, n)]).pipe(el(), xl(e => !0 !== e, !0))), xl(e => !0 !== e, !0))
                            }(r, s, e, t) : Ba(n)), L(e => Object.assign({}, n, {
                                guardsResult: e
                            })))
                        }))
                    }
                }(this.ngModule.injector, e => this.triggerEvent(e)), Pl(e => {
                    if (Ih(e.guardsResult)) {
                        const t = _c(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);
                        throw t.url = e.guardsResult, t
                    }
                }), Pl(e => {
                    const t = new oc(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                    this.triggerEvent(t)
                }), tl(e => {
                    if (!e.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new nc(e.id, this.serializeUrl(e.extractedUrl), "");
                        return t.next(n), e.resolve(!1), !1
                    }
                    return !0
                }), ld(e => {
                    if (e.guards.canActivateChecks.length) return Ba(e).pipe(Pl(e => {
                        const t = new ac(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                        this.triggerEvent(t)
                    }), function(e, t) {
                        return function(n) {
                            return n.pipe(z(n => {
                                const {
                                    targetSnapshot: r,
                                    guards: {
                                        canActivateChecks: i
                                    }
                                } = n;
                                return i.length ? $(i).pipe(Ol(n => (function(e, t, n, r) {
                                    return function(e, t, n, r) {
                                        const i = Object.keys(e);
                                        if (0 === i.length) return Ba({});
                                        if (1 === i.length) {
                                            const s = i[0];
                                            return ad(e[s], t, n, r).pipe(L(e => ({
                                                [s]: e
                                            })))
                                        }
                                        const s = {};
                                        return $(i).pipe(z(i => ad(e[i], t, n, r).pipe(L(e => (s[i] = e, e))))).pipe(gl(), L(() => s))
                                    }(e._resolve, e, t, r).pipe(L(t => (e._resolvedData = t, e.data = Object.assign({}, e.data, lh(e, n).resolve), null)))
                                })(n.route, r, e, t)), function(e, t) {
                                    return arguments.length >= 2 ? function(n) {
                                        return y(Nl(e, t), sl(1), dl(t))(n)
                                    } : function(t) {
                                        return y(Nl((t, n, r) => e(t, n, r + 1)), sl(1))(t)
                                    }
                                }((e, t) => e), L(e => n)) : Ba(n)
                            }))
                        }
                    }(this.paramsInheritanceStrategy, this.ngModule.injector), Pl(e => {
                        const t = new lc(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                        this.triggerEvent(t)
                    }))
                }), ld(e => {
                    const {
                        targetSnapshot: t,
                        id: n,
                        extractedUrl: r,
                        rawUrl: i,
                        extras: {
                            skipLocationChange: s,
                            replaceUrl: o
                        }
                    } = e;
                    return this.hooks.afterPreactivation(t, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: i,
                        skipLocationChange: !!s,
                        replaceUrl: !!o
                    })
                }), L(e => {
                    const t = function(e, t, n) {
                        const r = function e(t, n, r) {
                            if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                const i = r.value;
                                i._futureSnapshot = n.value;
                                const s = function(t, n, r) {
                                    return n.children.map(n => {
                                        for (const i of r.children)
                                            if (t.shouldReuseRoute(i.value.snapshot, n.value)) return e(t, n, i);
                                        return e(t, n)
                                    })
                                }(t, n, r);
                                return new rh(i, s)
                            } {
                                const r = t.retrieve(n.value);
                                if (r) {
                                    const e = r.route;
                                    return function e(t, n) {
                                        if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                        if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                        n.value._futureSnapshot = t.value;
                                        for (let r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                                    }(n, e), e
                                } {
                                    const r = new ah(new Wa((i = n.value).url), new Wa(i.params), new Wa(i.queryParams), new Wa(i.fragment), new Wa(i.data), i.outlet, i.component, i),
                                        s = n.children.map(n => e(t, n));
                                    return new rh(r, s)
                                }
                            }
                            var i
                        }(e, t._root, n ? n._root : void 0);
                        return new sh(r, t)
                    }(this.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                    return Object.assign({}, e, {
                        targetRouterState: t
                    })
                }), Pl(e => {
                    this.currentUrlTree = e.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e.rawUrl), this.routerState = e.targetRouterState, "deferred" === this.urlUpdateStrategy && (e.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), this.browserUrlTree = e.urlAfterRedirects)
                }), Th(this.rootContexts, this.routeReuseStrategy, e => this.triggerEvent(e)), Pl({
                    next() {
                        n = !0
                    },
                    complete() {
                        n = !0
                    }
                }), function(e) {
                    return t => t.lift(new jl(e))
                }(() => {
                    if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new nc(e.id, this.serializeUrl(e.extractedUrl), `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);
                        t.next(n), e.resolve(!1)
                    }
                    this.currentNavigation = null
                }), ml(n => {
                    if (r = !0, function(e) {
                            return e && e[wc]
                        }(n)) {
                        const r = Ih(n.url);
                        r || (this.navigated = !0, this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                        const i = new nc(e.id, this.serializeUrl(e.extractedUrl), n.message);
                        t.next(i), e.resolve(!1), r && this.navigateByUrl(n.url)
                    } else {
                        this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                        const r = new rc(e.id, this.serializeUrl(e.extractedUrl), n);
                        t.next(r);
                        try {
                            e.resolve(this.errorHandler(n))
                        } catch (i) {
                            e.reject(i)
                        }
                    }
                    return Xa
                }))
            }))
        }
        resetRootComponentType(e) {
            this.rootComponentType = e, this.routerState.root.component = this.rootComponentType
        }
        getTransition() {
            const e = this.transitions.value;
            return e.urlAfterRedirects = this.browserUrlTree, e
        }
        setTransition(e) {
            this.transitions.next(Object.assign({}, this.getTransition(), e))
        }
        initialNavigation() {
            this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                replaceUrl: !0
            })
        }
        setUpLocationChangeListener() {
            this.locationSubscription || (this.locationSubscription = this.location.subscribe(e => {
                let t = this.parseUrl(e.url);
                const n = "popstate" === e.type ? "popstate" : "hashchange",
                    r = e.state && e.state.navigationId ? e.state : null;
                setTimeout(() => {
                    this.scheduleNavigation(t, n, r, {
                        replaceUrl: !0
                    })
                }, 0)
            }))
        }
        get url() {
            return this.serializeUrl(this.currentUrlTree)
        }
        getCurrentNavigation() {
            return this.currentNavigation
        }
        triggerEvent(e) {
            this.events.next(e)
        }
        resetConfig(e) {
            Sc(e), this.config = e.map(kc), this.navigated = !1, this.lastSuccessfulId = -1
        }
        ngOnDestroy() {
            this.dispose()
        }
        dispose() {
            this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
        }
        createUrlTree(e, t = {}) {
            const {
                relativeTo: n,
                queryParams: r,
                fragment: i,
                preserveQueryParams: s,
                queryParamsHandling: o,
                preserveFragment: a
            } = t;
            Je() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
            const l = n || this.routerState.root,
                u = a ? this.currentUrlTree.fragment : i;
            let c = null;
            if (o) switch (o) {
                case "merge":
                    c = Object.assign({}, this.currentUrlTree.queryParams, r);
                    break;
                case "preserve":
                    c = this.currentUrlTree.queryParams;
                    break;
                default:
                    c = r || null
            } else c = s ? this.currentUrlTree.queryParams : r || null;
            return null !== c && (c = this.removeEmptyProps(c)),
                function(e, t, n, r, i) {
                    if (0 === n.length) return mh(t.root, t.root, t, r, i);
                    const s = function(e) {
                        if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new vh(!0, 0, e);
                        let t = 0,
                            n = !1;
                        const r = e.reduce((e, r, i) => {
                            if ("object" == typeof r && null != r) {
                                if (r.outlets) {
                                    const t = {};
                                    return Rc(r.outlets, (e, n) => {
                                        t[n] = "string" == typeof e ? e.split("/") : e
                                    }), [...e, {
                                        outlets: t
                                    }]
                                }
                                if (r.segmentPath) return [...e, r.segmentPath]
                            }
                            return "string" != typeof r ? [...e, r] : 0 === i ? (r.split("/").forEach((r, i) => {
                                0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r))
                            }), e) : [...e, r]
                        }, []);
                        return new vh(n, t, r)
                    }(n);
                    if (s.toRoot()) return mh(t.root, new Mc([], {}), t, r, i);
                    const o = function(e, t, n) {
                            if (e.isAbsolute) return new yh(t.root, !0, 0);
                            if (-1 === n.snapshot._lastPathIndex) return new yh(n.snapshot._urlSegment, !0, 0);
                            const r = gh(e.commands[0]) ? 0 : 1;
                            return function(e, t, n) {
                                let r = e,
                                    i = t,
                                    s = n;
                                for (; s > i;) {
                                    if (s -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                    i = r.segments.length
                                }
                                return new yh(r, !1, i - s)
                            }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                        }(s, t, e),
                        a = o.processChildren ? _h(o.segmentGroup, o.index, s.commands) : wh(o.segmentGroup, o.index, s.commands);
                    return mh(o.segmentGroup, a, t, r, i)
                }(l, this.currentUrlTree, e, c, u)
        }
        navigateByUrl(e, t = {
            skipLocationChange: !1
        }) {
            Je() && this.isNgZoneEnabled && !is.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
            const n = Ih(e) ? e : this.parseUrl(e),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
            return this.scheduleNavigation(r, "imperative", null, t)
        }
        navigate(e, t = {
            skipLocationChange: !1
        }) {
            return function(e) {
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (null == n) throw new Error(`The requested path contains ${n} segment at index ${t}`)
                }
            }(e), this.navigateByUrl(this.createUrlTree(e, t), t)
        }
        serializeUrl(e) {
            return this.urlSerializer.serialize(e)
        }
        parseUrl(e) {
            let t;
            try {
                t = this.urlSerializer.parse(e)
            } catch (n) {
                t = this.malformedUriErrorHandler(n, this.urlSerializer, e)
            }
            return t
        }
        isActive(e, t) {
            if (Ih(e)) return Pc(this.currentUrlTree, e, t);
            const n = this.parseUrl(e);
            return Pc(this.currentUrlTree, n, t)
        }
        removeEmptyProps(e) {
            return Object.keys(e).reduce((t, n) => {
                const r = e[n];
                return null != r && (t[n] = r), t
            }, {})
        }
        processNavigations() {
            this.navigations.subscribe(e => {
                this.navigated = !0, this.lastSuccessfulId = e.id, this.events.next(new tc(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, e.resolve(!0)
            }, e => {
                this.console.warn("Unhandled Navigation Error: ")
            })
        }
        scheduleNavigation(e, t, n, r) {
            const i = this.getTransition();
            if (i && "imperative" !== t && "imperative" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
            if (i && "hashchange" == t && "popstate" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
            if (i && "popstate" == t && "hashchange" === i.source && i.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
            let s = null,
                o = null;
            const a = new Promise((e, t) => {
                    s = e, o = t
                }),
                l = ++this.navigationId;
            return this.setTransition({
                id: l,
                source: t,
                restoredState: n,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: e,
                extras: r,
                resolve: s,
                reject: o,
                promise: a,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
            }), a.catch(e => Promise.reject(e))
        }
        setBrowserUrl(e, t, n, r) {
            const i = this.urlSerializer.serialize(e);
            r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign({}, r, {
                navigationId: n
            })) : this.location.go(i, "", Object.assign({}, r, {
                navigationId: n
            }))
        }
        resetStateAndUrl(e, t, n) {
            this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
        }
        resetUrlToCurrentUrlTree() {
            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                navigationId: this.lastSuccessfulId
            })
        }
    }
    class bd {
        constructor(e, t, n) {
            this.router = e, this.route = t, this.locationStrategy = n, this.commands = [], this.subscription = e.events.subscribe(e => {
                e instanceof tc && this.updateTargetUrlAndHref()
            })
        }
        set routerLink(e) {
            this.commands = null != e ? Array.isArray(e) ? e : [e] : []
        }
        set preserveQueryParams(e) {
            Je() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e
        }
        ngOnChanges(e) {
            this.updateTargetUrlAndHref()
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        onClick(e, t, n, r) {
            if (0 !== e || t || n || r) return !0;
            if ("string" == typeof this.target && "_self" != this.target) return !0;
            const i = {
                skipLocationChange: wd(this.skipLocationChange),
                replaceUrl: wd(this.replaceUrl),
                state: this.state
            };
            return this.router.navigateByUrl(this.urlTree, i), !1
        }
        updateTargetUrlAndHref() {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
        }
        get urlTree() {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: wd(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: wd(this.preserveFragment)
            })
        }
    }

    function wd(e) {
        return "" === e || !!e
    }
    class _d {
        constructor() {
            this.outlet = null, this.route = null, this.resolver = null, this.children = new xd, this.attachRef = null
        }
    }
    class xd {
        constructor() {
            this.contexts = new Map
        }
        onChildOutletCreated(e, t) {
            const n = this.getOrCreateContext(e);
            n.outlet = t, this.contexts.set(e, n)
        }
        onChildOutletDestroyed(e) {
            const t = this.getContext(e);
            t && (t.outlet = null)
        }
        onOutletDeactivated() {
            const e = this.contexts;
            return this.contexts = new Map, e
        }
        onOutletReAttached(e) {
            this.contexts = e
        }
        getOrCreateContext(e) {
            let t = this.getContext(e);
            return t || (t = new _d, this.contexts.set(e, t)), t
        }
        getContext(e) {
            return this.contexts.get(e) || null
        }
    }
    class Cd {
        constructor(e, t, n, r, i) {
            this.parentContexts = e, this.location = t, this.resolver = n, this.changeDetector = i, this.activated = null, this._activatedRoute = null, this.activateEvents = new Ai, this.deactivateEvents = new Ai, this.name = r || vc, e.onChildOutletCreated(this.name, this)
        }
        ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name)
        }
        ngOnInit() {
            if (!this.activated) {
                const e = this.parentContexts.getContext(this.name);
                e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
            }
        }
        get isActivated() {
            return !!this.activated
        }
        get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance
        }
        get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute
        }
        get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }
        detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const e = this.activated;
            return this.activated = null, this._activatedRoute = null, e
        }
        attach(e, t) {
            this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView)
        }
        deactivate() {
            if (this.activated) {
                const e = this.component;
                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
            }
        }
        activateWith(e, t) {
            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = e;
            const n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                i = new Sd(e, r, this.location.injector);
            this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
        }
    }
    class Sd {
        constructor(e, t, n) {
            this.route = e, this.childContexts = t, this.parent = n
        }
        get(e, t) {
            return e === ah ? this.route : e === xd ? this.childContexts : this.parent.get(e, t)
        }
    }
    class Ed {}
    class Td {
        preload(e, t) {
            return t().pipe(ml(() => Ba(null)))
        }
    }
    class kd {
        preload(e, t) {
            return Ba(null)
        }
    }
    class Ad {
        constructor(e, t, n, r, i) {
            this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = new dd(t, n, t => e.triggerEvent(new uc(t)), t => e.triggerEvent(new cc(t)))
        }
        setUpPreloading() {
            this.subscription = this.router.events.pipe(tl(e => e instanceof tc), Ol(() => this.preload())).subscribe(() => {})
        }
        preload() {
            const e = this.injector.get(Ue);
            return this.processRoutes(e, this.router.config)
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        processRoutes(e, t) {
            const n = [];
            for (const r of t)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                    const e = r._loadedConfig;
                    n.push(this.processRoutes(e.module, e.routes))
                } else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(e, r)) : r.children && n.push(this.processRoutes(e, r.children));
            return $(n).pipe(W(), L(e => void 0))
        }
        preloadConfig(e, t) {
            return this.preloadingStrategy.preload(t, () => this.loader.load(e.injector, t).pipe(z(e => (t._loadedConfig = e, this.processRoutes(e.module, e.routes)))))
        }
    }
    class Nd {
        constructor(e, t, n = {}) {
            this.router = e, this.viewportScroller = t, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
        }
        init() {
            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
        }
        createScrollEvents() {
            return this.router.events.subscribe(e => {
                e instanceof ec ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof tc && (this.lastId = e.id, this.scheduleScrollEvent(e, this.router.parseUrl(e.urlAfterRedirects).fragment))
            })
        }
        consumeScrollEvents() {
            return this.router.events.subscribe(e => {
                e instanceof gc && (e.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
            })
        }
        scheduleScrollEvent(e, t) {
            this.router.triggerEvent(new gc(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t))
        }
        ngOnDestroy() {
            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
        }
    }
    const Id = new xe("ROUTER_CONFIGURATION"), Rd = new xe("ROUTER_FORROOT_GUARD"), Od = [wa, {
        provide: Hc,
        useClass: Fc
    }, {
        provide: yd,
        useFactory: Hd,
        deps: [Ss, Hc, xd, wa, Rt, Ts, Qi, hd, Id, [fd, new ie],
            [ud, new ie]
        ]
    }, xd, {
        provide: ah,
        useFactory: Fd,
        deps: [yd]
    }, {
        provide: Ts,
        useClass: Rs
    }, Ad, kd, Td, {
        provide: Id,
        useValue: {
            enableTracing: !1
        }
    }];

    function Pd() {
        return new bs("Router", yd)
    }
    class Dd {
        constructor(e, t) {}
        static forRoot(e, t) {
            return {
                ngModule: Dd,
                providers: [Od, Ud(e), {
                        provide: Rd,
                        useFactory: Ld,
                        deps: [
                            [yd, new ie, new oe]
                        ]
                    }, {
                        provide: Id,
                        useValue: t || {}
                    }, {
                        provide: ya,
                        useFactory: jd,
                        deps: [ma, [new re(ba), new ie], Id]
                    }, {
                        provide: Nd,
                        useFactory: Md,
                        deps: [yd, Va, Id]
                    }, {
                        provide: Ed,
                        useExisting: t && t.preloadingStrategy ? t.preloadingStrategy : kd
                    }, {
                        provide: bs,
                        multi: !0,
                        useFactory: Pd
                    },
                    [$d, {
                        provide: Ri,
                        multi: !0,
                        useFactory: zd,
                        deps: [$d]
                    }, {
                        provide: qd,
                        useFactory: Vd,
                        deps: [$d]
                    }, {
                        provide: Ui,
                        multi: !0,
                        useExisting: qd
                    }]
                ]
            }
        }
        static forChild(e) {
            return {
                ngModule: Dd,
                providers: [Ud(e)]
            }
        }
    }

    function Md(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Nd(e, t, n)
    }

    function jd(e, t, n = {}) {
        return n.useHash ? new xa(e, t) : new Ca(e, t)
    }

    function Ld(e) {
        if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
        return "guarded"
    }

    function Ud(e) {
        return [{
            provide: Ft,
            multi: !0,
            useValue: e
        }, {
            provide: hd,
            multi: !0,
            useValue: e
        }]
    }

    function Hd(e, t, n, r, i, s, o, a, l = {}, u, c) {
        const h = new yd(null, t, n, r, i, s, o, Nc(a));
        if (u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c), l.errorHandler && (h.errorHandler = l.errorHandler), l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler), l.enableTracing) {
            const e = Hl();
            h.events.subscribe(t => {
                e.logGroup(`Router Event: ${t.constructor.name}`), e.log(t.toString()), e.log(t), e.logGroupEnd()
            })
        }
        return l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation), l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy), l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy), l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution), h
    }

    function Fd(e) {
        return e.routerState.root
    }
    class $d {
        constructor(e) {
            this.injector = e, this.initNavigation = !1, this.resultOfPreactivationDone = new E
        }
        appInitializer() {
            return this.injector.get(va, Promise.resolve(null)).then(() => {
                let e = null;
                const t = new Promise(t => e = t),
                    n = this.injector.get(yd),
                    r = this.injector.get(Id);
                if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
                else if ("disabled" === r.initialNavigation) n.setUpLocationChangeListener(), e(!0);
                else {
                    if ("enabled" !== r.initialNavigation) throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
                    n.hooks.afterPreactivation = () => this.initNavigation ? Ba(null) : (this.initNavigation = !0, e(!0), this.resultOfPreactivationDone), n.initialNavigation()
                }
                return t
            })
        }
        bootstrapListener(e) {
            const t = this.injector.get(Id),
                n = this.injector.get(Ad),
                r = this.injector.get(Nd),
                i = this.injector.get(yd),
                s = this.injector.get(Ss);
            e === s.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(s.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
        }
        isLegacyEnabled(e) {
            return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
        }
        isLegacyDisabled(e) {
            return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation
        }
    }

    function zd(e) {
        return e.appInitializer.bind(e)
    }

    function Vd(e) {
        return e.bootstrapListener.bind(e)
    }
    const qd = new xe("Router Initializer"); class Bd {
        constructor(e) {
            this.router = e, this.title = "D3v7"
        }
        ngAfterViewInit() {
            this.router.events.subscribe(e => {
                e instanceof tc && (window.ga("set", "page", e.urlAfterRedirects), window.ga("send", "pageview"))
            })
        }
    }
    var Wd = Xn({
        encapsulation: 2,
        styles: [],
        data: {}
    });

    function Qd(e) {
        return ao(0, [(e()(), Ws(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ii(1, 212992, null, 0, Cd, [xd, Pn, nn, [8, null], kt], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }

    function Zd(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "ng-component", [], null, null, null, Qd, Wd)), ii(1, 49152, null, 0, mc, [], null, null)], null, null)
    }
    var Gd = Dr("ng-component", mc, Zd, {}, {}, []), Kd = n("EVdn"), Xd = n("ELNm"); class Yd {
        constructor(e) {
            this._router = e
        }
        ngOnInit() {
            "/" == this._router.url && Kd(".particles-js-canvas-el").css("visibility", "visible"), Kd(document).ready((function() {
                var e;
                Kd(".social").hover((function(t) {
                    var n = new Array("g-green", "g-red", "g-yellow", "g-blue")[Math.floor(4 * Math.random())];
                    e = n, Kd(t.target).addClass(n)
                }), (function(t) {
                    Kd(t.target).removeClass(e)
                })), "/" == this.router && Kd(".particles-js-canvas-el").css("visibility", "visible")
            })), new Xd(".typed", {
                strings: ["a Frontend Developer.", "a Custom ROM Developer."],
                typeSpeed: 50,
                backSpeed: 50,
                showCursor: !0,
                cursorChar: "|",
                loop: !0
            })
        }
    }
    var Jd = Xn({
        encapsulation: 0,
        styles: [
            [".fab[_ngcontent-%COMP%]{color:#212121}.s-google[_ngcontent-%COMP%]{width:20%!important}@media only screen and (min-device-width :320px) and (max-device-width :480px){.s-google[_ngcontent-%COMP%]{width:50%!important}}@media only screen and (min-device-width :768px) and (max-device-width :1024px){.s-google[_ngcontent-%COMP%]{width:35%!important}}"],
            [".g-red[_ngcontent-%COMP%]{color:#db3236!important}.g-green[_ngcontent-%COMP%]{color:#3cba54!important}.g-yellow[_ngcontent-%COMP%]{color:#f4c20d!important}.g-blue[_ngcontent-%COMP%]{color:#4885ed!important}.fa-heart[_ngcontent-%COMP%]{color:red}"]
        ],
        data: {}
    });

    function ef(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 19, "div", [
            ["class", "container-fluid"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 8, "div", [
            ["class", "row text-center pt-5"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 1, "div", [
            ["class", "col-lg-12"]
        ], null, null, null, null, null)), (e()(), Ws(3, 0, null, null, 0, "img", [
            ["class", "img-fluid s-google"],
            ["src", "/assets/img/logo.png"]
        ], null, null, null, null, null)), (e()(), Ws(4, 0, null, null, 5, "div", [
            ["class", "col-lg-12"]
        ], null, null, null, null, null)), (e()(), Ws(5, 0, null, null, 2, "h1", [], null, null, null, null, null)), (e()(), io(-1, null, ["I'm "])), (e()(), Ws(7, 0, null, null, 0, "span", [
            ["class", "typed"]
        ], null, null, null, null, null)), (e()(), Ws(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), io(-1, null, ["Another noob in this Professional world."])), (e()(), Ws(10, 0, null, null, 9, "div", [
            ["class", "row text-center"]
        ], null, null, null, null, null)), (e()(), Ws(11, 0, null, null, 8, "div", [
            ["class", "text-center col-lg-12"],
            ["id", "social-media"]
        ], null, null, null, null, null)), (e()(), Ws(12, 0, null, null, 1, "a", [
            ["class", "social ml-2 mr-2"],
            ["href", "https://t.me/SoniSins"]
        ], null, null, null, null, null)), (e()(), Ws(13, 0, null, null, 0, "i", [
            ["class", "fab fa-telegram fa-2x"]
        ], null, null, null, null, null)), (e()(), Ws(14, 0, null, null, 1, "a", [
            ["class", "social ml-2 mr-2"],
            ["href", "https://fb.com/manas.patel.35"]
        ], null, null, null, null, null)), (e()(), Ws(15, 0, null, null, 0, "i", [
            ["class", "fab fa-facebook fa-2x"]
        ], null, null, null, null, null)), (e()(), Ws(16, 0, null, null, 1, "a", [
            ["class", "social ml-2 mr-2"],
            ["href", "https://instagram.com/mr.3xpl0it"]
        ], null, null, null, null, null)), (e()(), Ws(17, 0, null, null, 0, "i", [
            ["class", "fab fa-instagram fa-2x"]
        ], null, null, null, null, null)), (e()(), Ws(18, 0, null, null, 1, "a", [
            ["class", "social ml-2 mr-2"],
            ["href", "https://twitter.com/mr.3xpl0it"]
        ], null, null, null, null, null)), (e()(), Ws(19, 0, null, null, 0, "i", [
            ["class", "fab fa-twitter fa-2x"]
        ], null, null, null, null, null))], null, null)
    }

    function tf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-portfolio", [], null, null, null, ef, Jd)), ii(1, 114688, null, 0, Yd, [yd], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }
    var nf = Dr("app-portfolio", Yd, tf, {}, {}, []); class rf {
        constructor() {}
        ngAfterViewInit() {
            const e = document.createElement("script");
            e.src = "//p374858.clksite.com/adServe/banners?tid=374858_735346_0", e.type = "text/javascript", document.getElementById("ad").appendChild(e)
        }
    }
    var sf = Xn({
        encapsulation: 0,
        styles: [
            [""]
        ],
        data: {}
    });

    function of (e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 0, "div", [
            ["class", "text-center"],
            ["id", "ad"]
        ], null, null, null, null, null)), (e()(), Ws(1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ii(2, 212992, null, 0, Cd, [xd, Pn, nn, [8, null], kt], null, null)], (function(e, t) {
            e(t, 2, 0)
        }), null)
    }

    function af(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-download-index", [], null, null, null, of , sf)), ii(1, 4243456, null, 0, rf, [], null, null)], null, null)
    }
    var lf = Dr("app-download-index", rf, af, {}, {}, []); class uf {
        constructor() {}
        ngOnInit() {}
    }
    var cf = Xn({
        encapsulation: 0,
        styles: [
            [".list-group-item[_ngcontent-%COMP%]   .fol-name[_ngcontent-%COMP%]{padding-left:25px}.fol-shadow[_ngcontent-%COMP%]{box-shadow:0 1px 2px rgba(0,0,0,.15);transition:box-shadow .3s ease-in-out}.fol-shadow[_ngcontent-%COMP%]:hover{box-shadow:0 5px 15px rgba(0,0,0,.3)}"]
        ],
        data: {}
    });

    function hf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 3, "li", [
            ["class", "list-group-item fol-shadow"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 0, "i", [
            ["class", "fas fa-folder"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 1, "span", [
            ["class", "fol-name"]
        ], null, null, null, null, null)), to(null, 0)], null, null)
    }
    class df {
        constructor(e) {
            this.http = e
        }
        getJSON() {
            return this.http.get("/assets/rom.json").pipe(L(e => e))
        }
    }
    class ff {}
    class pf {}
    class gf {
        constructor(e) {
            this.normalizedNames = new Map, this.lazyUpdate = null, e ? this.lazyInit = "string" == typeof e ? () => {
                this.headers = new Map, e.split("\n").forEach(e => {
                    const t = e.indexOf(":");
                    if (t > 0) {
                        const n = e.slice(0, t),
                            r = n.toLowerCase(),
                            i = e.slice(t + 1).trim();
                        this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(i) : this.headers.set(r, [i])
                    }
                })
            } : () => {
                this.headers = new Map, Object.keys(e).forEach(t => {
                    let n = e[t];
                    const r = t.toLowerCase();
                    "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(t, r))
                })
            } : this.headers = new Map
        }
        has(e) {
            return this.init(), this.headers.has(e.toLowerCase())
        }
        get(e) {
            this.init();
            const t = this.headers.get(e.toLowerCase());
            return t && t.length > 0 ? t[0] : null
        }
        keys() {
            return this.init(), Array.from(this.normalizedNames.values())
        }
        getAll(e) {
            return this.init(), this.headers.get(e.toLowerCase()) || null
        }
        append(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "a"
            })
        }
        set(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "s"
            })
        }
        delete(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "d"
            })
        }
        maybeSetNormalizedName(e, t) {
            this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
        }
        init() {
            this.lazyInit && (this.lazyInit instanceof gf ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
        }
        copyFrom(e) {
            e.init(), Array.from(e.headers.keys()).forEach(t => {
                this.headers.set(t, e.headers.get(t)), this.normalizedNames.set(t, e.normalizedNames.get(t))
            })
        }
        clone(e) {
            const t = new gf;
            return t.lazyInit = this.lazyInit && this.lazyInit instanceof gf ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([e]), t
        }
        applyUpdate(e) {
            const t = e.name.toLowerCase();
            switch (e.op) {
                case "a":
                case "s":
                    let n = e.value;
                    if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                    this.maybeSetNormalizedName(e.name, t);
                    const r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                    r.push(...n), this.headers.set(t, r);
                    break;
                case "d":
                    const i = e.value;
                    if (i) {
                        let e = this.headers.get(t);
                        if (!e) return;
                        0 === (e = e.filter(e => -1 === i.indexOf(e))).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, e)
                    } else this.headers.delete(t), this.normalizedNames.delete(t)
            }
        }
        forEach(e) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(t => e(this.normalizedNames.get(t), this.headers.get(t)))
        }
    }
    class mf {
        encodeKey(e) {
            return vf(e)
        }
        encodeValue(e) {
            return vf(e)
        }
        decodeKey(e) {
            return decodeURIComponent(e)
        }
        decodeValue(e) {
            return decodeURIComponent(e)
        }
    }

    function vf(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
    }
    class yf {
        constructor(e = {}) {
            if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new mf, e.fromString) {
                if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                this.map = function(e, t) {
                    const n = new Map;
                    return e.length > 0 && e.split("&").forEach(e => {
                        const r = e.indexOf("="),
                            [i, s] = -1 == r ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))],
                            o = n.get(i) || [];
                        o.push(s), n.set(i, o)
                    }), n
                }(e.fromString, this.encoder)
            } else e.fromObject ? (this.map = new Map, Object.keys(e.fromObject).forEach(t => {
                const n = e.fromObject[t];
                this.map.set(t, Array.isArray(n) ? n : [n])
            })) : this.map = null
        }
        has(e) {
            return this.init(), this.map.has(e)
        }
        get(e) {
            this.init();
            const t = this.map.get(e);
            return t ? t[0] : null
        }
        getAll(e) {
            return this.init(), this.map.get(e) || null
        }
        keys() {
            return this.init(), Array.from(this.map.keys())
        }
        append(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "a"
            })
        }
        set(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "s"
            })
        }
        delete(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "d"
            })
        }
        toString() {
            return this.init(), this.keys().map(e => {
                const t = this.encoder.encodeKey(e);
                return this.map.get(e).map(e => t + "=" + this.encoder.encodeValue(e)).join("&")
            }).join("&")
        }
        clone(e) {
            const t = new yf({
                encoder: this.encoder
            });
            return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat([e]), t
        }
        init() {
            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(e => this.map.set(e, this.cloneFrom.map.get(e))), this.updates.forEach(e => {
                switch (e.op) {
                    case "a":
                    case "s":
                        const t = ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                        t.push(e.value), this.map.set(e.param, t);
                        break;
                    case "d":
                        if (void 0 === e.value) {
                            this.map.delete(e.param);
                            break
                        } {
                            let t = this.map.get(e.param) || [];
                            const n = t.indexOf(e.value); - 1 !== n && t.splice(n, 1), t.length > 0 ? this.map.set(e.param, t) : this.map.delete(e.param)
                        }
                }
            }), this.cloneFrom = this.updates = null)
        }
    }

    function bf(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
    }

    function wf(e) {
        return "undefined" != typeof Blob && e instanceof Blob
    }

    function _f(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    class xf {
        constructor(e, t, n, r) {
            let i;
            if (this.url = t, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = e.toUpperCase(), function(e) {
                    switch (e) {
                        case "DELETE":
                        case "GET":
                        case "HEAD":
                        case "OPTIONS":
                        case "JSONP":
                            return !1;
                        default:
                            return !0
                    }
                }(this.method) || r ? (this.body = void 0 !== n ? n : null, i = r) : i = n, i && (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.params && (this.params = i.params)), this.headers || (this.headers = new gf), this.params) {
                const e = this.params.toString();
                if (0 === e.length) this.urlWithParams = t;
                else {
                    const n = t.indexOf("?");
                    this.urlWithParams = t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e
                }
            } else this.params = new yf, this.urlWithParams = t
        }
        serializeBody() {
            return null === this.body ? null : bf(this.body) || wf(this.body) || _f(this.body) || "string" == typeof this.body ? this.body : this.body instanceof yf ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
        }
        detectContentTypeHeader() {
            return null === this.body ? null : _f(this.body) ? null : wf(this.body) ? this.body.type || null : bf(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof yf ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
        }
        clone(e = {}) {
            const t = e.method || this.method,
                n = e.url || this.url,
                r = e.responseType || this.responseType,
                i = void 0 !== e.body ? e.body : this.body,
                s = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                o = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress;
            let a = e.headers || this.headers,
                l = e.params || this.params;
            return void 0 !== e.setHeaders && (a = Object.keys(e.setHeaders).reduce((t, n) => t.set(n, e.setHeaders[n]), a)), e.setParams && (l = Object.keys(e.setParams).reduce((t, n) => t.set(n, e.setParams[n]), l)), new xf(t, n, i, {
                params: l,
                headers: a,
                reportProgress: o,
                responseType: r,
                withCredentials: s
            })
        }
    }
    const Cf = function() {
        var e = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5
        };
        return e[e.Sent] = "Sent", e[e.UploadProgress] = "UploadProgress", e[e.ResponseHeader] = "ResponseHeader", e[e.DownloadProgress] = "DownloadProgress", e[e.Response] = "Response", e[e.User] = "User", e
    }(); class Sf {
        constructor(e, t = 200, n = "OK") {
            this.headers = e.headers || new gf, this.status = void 0 !== e.status ? e.status : t, this.statusText = e.statusText || n, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
        }
    }
    class Ef extends Sf {
        constructor(e = {}) {
            super(e), this.type = Cf.ResponseHeader
        }
        clone(e = {}) {
            return new Ef({
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            })
        }
    }
    class Tf extends Sf {
        constructor(e = {}) {
            super(e), this.type = Cf.Response, this.body = void 0 !== e.body ? e.body : null
        }
        clone(e = {}) {
            return new Tf({
                body: void 0 !== e.body ? e.body : this.body,
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            })
        }
    }
    class kf extends Sf {
        constructor(e) {
            super(e, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${e.url||"(unknown url)"}` : `Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`, this.error = e.error || null
        }
    }

    function Af(e, t) {
        return {
            body: t,
            headers: e.headers,
            observe: e.observe,
            params: e.params,
            reportProgress: e.reportProgress,
            responseType: e.responseType,
            withCredentials: e.withCredentials
        }
    }
    class Nf {
        constructor(e) {
            this.handler = e
        }
        request(e, t, n = {}) {
            let r;
            if (e instanceof xf) r = e;
            else {
                let i = void 0;
                i = n.headers instanceof gf ? n.headers : new gf(n.headers);
                let s = void 0;
                n.params && (s = n.params instanceof yf ? n.params : new yf({
                    fromObject: n.params
                })), r = new xf(e, t, void 0 !== n.body ? n.body : null, {
                    headers: i,
                    params: s,
                    reportProgress: n.reportProgress,
                    responseType: n.responseType || "json",
                    withCredentials: n.withCredentials
                })
            }
            const i = Ba(r).pipe(Ol(e => this.handler.handle(e)));
            if (e instanceof xf || "events" === n.observe) return i;
            const s = i.pipe(tl(e => e instanceof Tf));
            switch (n.observe || "body") {
                case "body":
                    switch (r.responseType) {
                        case "arraybuffer":
                            return s.pipe(L(e => {
                                if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                return e.body
                            }));
                        case "blob":
                            return s.pipe(L(e => {
                                if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                return e.body
                            }));
                        case "text":
                            return s.pipe(L(e => {
                                if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                                return e.body
                            }));
                        case "json":
                        default:
                            return s.pipe(L(e => e.body))
                    }
                    case "response":
                        return s;
                    default:
                        throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
            }
        }
        delete(e, t = {}) {
            return this.request("DELETE", e, t)
        }
        get(e, t = {}) {
            return this.request("GET", e, t)
        }
        head(e, t = {}) {
            return this.request("HEAD", e, t)
        }
        jsonp(e, t) {
            return this.request("JSONP", e, {
                params: (new yf).append(t, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            })
        }
        options(e, t = {}) {
            return this.request("OPTIONS", e, t)
        }
        patch(e, t, n = {}) {
            return this.request("PATCH", e, Af(n, t))
        }
        post(e, t, n = {}) {
            return this.request("POST", e, Af(n, t))
        }
        put(e, t, n = {}) {
            return this.request("PUT", e, Af(n, t))
        }
    }
    class If {
        constructor(e, t) {
            this.next = e, this.interceptor = t
        }
        handle(e) {
            return this.interceptor.intercept(e, this.next)
        }
    }
    const Rf = new xe("HTTP_INTERCEPTORS"); class Of {
        intercept(e, t) {
            return t.handle(e)
        }
    }
    const Pf = /^\)\]\}',?\n/; class Df {}
    class Mf {
        constructor() {}
        build() {
            return new XMLHttpRequest
        }
    }
    class jf {
        constructor(e) {
            this.xhrFactory = e
        }
        handle(e) {
            if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
            return new w(t => {
                const n = this.xhrFactory.build();
                if (n.open(e.method, e.urlWithParams), e.withCredentials && (n.withCredentials = !0), e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(","))), e.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                    const t = e.detectContentTypeHeader();
                    null !== t && n.setRequestHeader("Content-Type", t)
                }
                if (e.responseType) {
                    const t = e.responseType.toLowerCase();
                    n.responseType = "json" !== t ? t : "text"
                }
                const r = e.serializeBody();
                let i = null;
                const s = () => {
                        if (null !== i) return i;
                        const t = 1223 === n.status ? 204 : n.status,
                            r = n.statusText || "OK",
                            s = new gf(n.getAllResponseHeaders()),
                            o = function(e) {
                                return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                            }(n) || e.url;
                        return i = new Ef({
                            headers: s,
                            status: t,
                            statusText: r,
                            url: o
                        })
                    },
                    o = () => {
                        let {
                            headers: r,
                            status: i,
                            statusText: o,
                            url: a
                        } = s(), l = null;
                        204 !== i && (l = void 0 === n.response ? n.responseText : n.response), 0 === i && (i = l ? 200 : 0);
                        let u = i >= 200 && i < 300;
                        if ("json" === e.responseType && "string" == typeof l) {
                            const e = l;
                            l = l.replace(Pf, "");
                            try {
                                l = "" !== l ? JSON.parse(l) : null
                            } catch (c) {
                                l = e, u && (u = !1, l = {
                                    error: c,
                                    text: l
                                })
                            }
                        }
                        u ? (t.next(new Tf({
                            body: l,
                            headers: r,
                            status: i,
                            statusText: o,
                            url: a || void 0
                        })), t.complete()) : t.error(new kf({
                            error: l,
                            headers: r,
                            status: i,
                            statusText: o,
                            url: a || void 0
                        }))
                    },
                    a = e => {
                        const {
                            url: r
                        } = s(), i = new kf({
                            error: e,
                            status: n.status || 0,
                            statusText: n.statusText || "Unknown Error",
                            url: r || void 0
                        });
                        t.error(i)
                    };
                let l = !1;
                const u = r => {
                        l || (t.next(s()), l = !0);
                        let i = {
                            type: Cf.DownloadProgress,
                            loaded: r.loaded
                        };
                        r.lengthComputable && (i.total = r.total), "text" === e.responseType && n.responseText && (i.partialText = n.responseText), t.next(i)
                    },
                    c = e => {
                        let n = {
                            type: Cf.UploadProgress,
                            loaded: e.loaded
                        };
                        e.lengthComputable && (n.total = e.total), t.next(n)
                    };
                return n.addEventListener("load", o), n.addEventListener("error", a), e.reportProgress && (n.addEventListener("progress", u), null !== r && n.upload && n.upload.addEventListener("progress", c)), n.send(r), t.next({
                    type: Cf.Sent
                }), () => {
                    n.removeEventListener("error", a), n.removeEventListener("load", o), e.reportProgress && (n.removeEventListener("progress", u), null !== r && n.upload && n.upload.removeEventListener("progress", c)), n.abort()
                }
            })
        }
    }
    const Lf = new xe("XSRF_COOKIE_NAME"), Uf = new xe("XSRF_HEADER_NAME"); class Hf {}
    class Ff {
        constructor(e, t, n) {
            this.doc = e, this.platform = t, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
        }
        getToken() {
            if ("server" === this.platform) return null;
            const e = this.doc.cookie || "";
            return e !== this.lastCookieString && (this.parseCount++, this.lastToken = Na(e, this.cookieName), this.lastCookieString = e), this.lastToken
        }
    }
    class $f {
        constructor(e, t) {
            this.tokenService = e, this.headerName = t
        }
        intercept(e, t) {
            const n = e.url.toLowerCase();
            if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
            const r = this.tokenService.getToken();
            return null === r || e.headers.has(this.headerName) || (e = e.clone({
                headers: e.headers.set(this.headerName, r)
            })), t.handle(e)
        }
    }
    class zf {
        constructor(e, t) {
            this.backend = e, this.injector = t, this.chain = null
        }
        handle(e) {
            if (null === this.chain) {
                const e = this.injector.get(Rf, []);
                this.chain = e.reduceRight((e, t) => new If(e, t), this.backend)
            }
            return this.chain.handle(e)
        }
    }
    class Vf {
        static disable() {
            return {
                ngModule: Vf,
                providers: [{
                    provide: $f,
                    useClass: Of
                }]
            }
        }
        static withOptions(e = {}) {
            return {
                ngModule: Vf,
                providers: [e.cookieName ? {
                    provide: Lf,
                    useValue: e.cookieName
                } : [], e.headerName ? {
                    provide: Uf,
                    useValue: e.headerName
                } : []]
            }
        }
    }
    class qf {}
    class Bf {
        constructor(e, t, n) {
            this.http = e, this.route = t, this.rom = n
        }
        printPath(e) {
            console.log(e);
            for (let t = 0; t < this.romData.length; t++) e == this.romData[t].path && console.log("matched at:", t)
        }
        setRomFolder() {
            this.rom.getJSON().subscribe(e => {
                this.romData = e, console.log(this.romData)
            })
        }
        ngOnInit() {
            this.route.url && (document.querySelector(".particles-js-canvas-el").style.visibility = "hidden"), this.setRomFolder()
        }
    }
    var Wf = Xn({
        encapsulation: 0,
        styles: [
            ["a[_ngcontent-%COMP%]{color:#212121;text-decoration:none}"]
        ],
        data: {}
    });

    function Qf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 5, "div", [], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 4, "a", [], [
            [1, "target", 0],
            [8, "href", 4]
        ], [
            [null, "click"]
        ], (function(e, t, n) {
            var r = !0,
                i = e.component;
            return "click" === t && (r = !1 !== Br(e, 2).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== i.printPath(e.context.$implicit.path) && r), r
        }), null, null)), ii(2, 671744, null, 0, bd, [yd, ah, ya], {
            routerLink: [0, "routerLink"]
        }, null), (e()(), Ws(3, 0, null, null, 2, "app-folder", [], [
            [8, "id", 0]
        ], null, null, hf, cf)), ii(4, 114688, null, 0, uf, [], null, null), (e()(), io(5, 0, ["", ""]))], (function(e, t) {
            e(t, 2, 0, t.context.$implicit.path), e(t, 4, 0)
        }), (function(e, t) {
            e(t, 1, 0, Br(t, 2).target, Br(t, 2).href), e(t, 3, 0, t.context.$implicit.path), e(t, 5, 0, t.context.$implicit.romName)
        }))
    }

    function Zf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "ul", [
            ["class", "list-group"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, Qf)), ii(2, 278528, null, 0, Ra, [Pn, Rn, Tn], {
            ngForOf: [0, "ngForOf"]
        }, null)], (function(e, t) {
            e(t, 2, 0, t.component.romData)
        }), null)
    }

    function Gf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 4, "div", [
            ["class", "container"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 3, "div", [
            ["class", "row"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 2, "div", [
            ["class", "col-lg-12"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, Zf)), ii(4, 16384, null, 0, Pa, [Pn, Rn], {
            ngIf: [0, "ngIf"]
        }, null)], (function(e, t) {
            e(t, 4, 0, t.component.romData)
        }), null)
    }

    function Kf(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "app-downloads", [], null, null, null, Gf, Wf)), si(512, null, df, df, [Nf]), ii(2, 114688, null, 0, Bf, [Nf, yd, df], null, null)], (function(e, t) {
            e(t, 2, 0)
        }), null)
    }
    var Xf = Dr("app-downloads", Bf, Kf, {
        foldur: "foldur"
    }, {}, []); class Yf {
        constructor() {}
        ngOnInit() {}
    }
    var Jf = Xn({
        encapsulation: 0,
        styles: [
            [""]
        ],
        data: {}
    });

    function ep(e) {
        return ao(0, [(e()(), Ws(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ii(1, 212992, null, 0, Cd, [xd, Pn, nn, [8, null], kt], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }

    function tp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-device-index", [], null, null, null, ep, Jf)), ii(1, 114688, null, 0, Yf, [], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }
    var np = Dr("app-device-index", Yf, tp, {}, {}, []); class rp {
        constructor(e, t, n) {
            this.rom = e, this.http = t, this.router = n
        }
        deviceLoad() {
            let e = this.router.url;
            console.log(e.slice(11)), e = e.slice(11), this.rom.getJSON().subscribe(t => {
                let n;
                this.romData = t, console.log(this.romData);
                for (let r = 0; r < this.romData.length; r++) e == (n = this.romData[r].path) && (console.log("matched at:", r), this.romData = this.romData[r].deviceData)
            })
        }
        ngOnInit() {
            this.router.url && (document.querySelector(".particles-js-canvas-el").style.visibility = "hidden"), this.deviceLoad()
        }
    }
    var ip = Xn({
        encapsulation: 0,
        styles: [
            ["a[_ngcontent-%COMP%]{color:#212121;text-decoration:none}"]
        ],
        data: {}
    });

    function sp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 5, "div", [], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 4, "a", [], [
            [1, "target", 0],
            [8, "href", 4]
        ], [
            [null, "click"]
        ], (function(e, t, n) {
            var r = !0;
            return "click" === t && (r = !1 !== Br(e, 2).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }), null, null)), ii(2, 671744, null, 0, bd, [yd, ah, ya], {
            routerLink: [0, "routerLink"]
        }, null), (e()(), Ws(3, 0, null, null, 2, "app-folder", [], [
            [8, "id", 0]
        ], null, null, hf, cf)), ii(4, 114688, null, 0, uf, [], null, null), (e()(), io(5, 0, ["", ""]))], (function(e, t) {
            e(t, 2, 0, t.context.$implicit.name), e(t, 4, 0)
        }), (function(e, t) {
            e(t, 1, 0, Br(t, 2).target, Br(t, 2).href), e(t, 3, 0, t.context.$implicit.name), e(t, 5, 0, t.context.$implicit.name)
        }))
    }

    function op(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "ul", [
            ["class", "list-group"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, sp)), ii(2, 278528, null, 0, Ra, [Pn, Rn, Tn], {
            ngForOf: [0, "ngForOf"]
        }, null)], (function(e, t) {
            e(t, 2, 0, t.component.romData)
        }), null)
    }

    function ap(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 4, "div", [
            ["class", "container"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 3, "div", [
            ["class", "row"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 2, "div", [
            ["class", "col-lg-12"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, op)), ii(4, 16384, null, 0, Pa, [Pn, Rn], {
            ngIf: [0, "ngIf"]
        }, null)], (function(e, t) {
            e(t, 4, 0, t.component.romData)
        }), null)
    }

    function lp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "app-device", [], null, null, null, ap, ip)), si(512, null, df, df, [Nf]), ii(2, 114688, null, 0, rp, [df, Nf, yd], null, null)], (function(e, t) {
            e(t, 2, 0)
        }), null)
    }
    var up = Dr("app-device", rp, lp, {}, {}, []); class cp {
        constructor() {}
        ngOnInit() {}
    }
    var hp = Xn({
        encapsulation: 0,
        styles: [
            [""]
        ],
        data: {}
    });

    function dp(e) {
        return ao(0, [(e()(), Ws(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ii(1, 212992, null, 0, Cd, [xd, Pn, nn, [8, null], kt], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }

    function fp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-build-index", [], null, null, null, dp, hp)), ii(1, 114688, null, 0, cp, [], null, null)], (function(e, t) {
            e(t, 1, 0)
        }), null)
    }
    var pp = Dr("app-build-index", cp, fp, {}, {}, []); class gp {
        constructor() {}
        ngOnInit() {}
    }
    var mp = Xn({
        encapsulation: 0,
        styles: [
            [".list-group-item[_ngcontent-%COMP%]   .fol-name[_ngcontent-%COMP%]{padding-left:25px}.fol-shadow[_ngcontent-%COMP%]{box-shadow:0 1px 2px rgba(0,0,0,.15);transition:box-shadow .3s ease-in-out}.fol-shadow[_ngcontent-%COMP%]:hover{box-shadow:0 5px 15px rgba(0,0,0,.3)}"]
        ],
        data: {}
    });

    function vp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 3, "li", [
            ["class", "list-group-item fol-shadow"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 0, "i", [
            ["class", "fas fa-file"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 1, "span", [
            ["class", "fol-name"]
        ], null, null, null, null, null)), to(null, 0)], null, null)
    }
    class yp {
        constructor(e, t, n) {
            this.rom = e, this.http = t, this.router = n
        }
        getBuilds() {
            let e = this.router.url;
            e = (e = e.slice(11)).slice(this.getSlash(e)), console.log("device id :", e);
            let t = this.router.url;
            t = t.slice(11, this.getSlash(t) - 1), console.log("build id:", t), this.rom.getJSON().subscribe(n => {
                console.log(n);
                for (let r = 0; r < n.length; r++)
                    if (n[r].path == t) {
                        console.log("matched build id at:", r);
                        for (let t = 0; t < n[r].deviceData.length; t++) n[r].deviceData[t].name == e && (console.log("found deviceID (loop) at :", t, n[r].deviceData[t].name), this.romData = n[r].deviceData[t].builds, console.log(this.romData))
                    }
            })
        }
        getSlash(e) {
            let t;
            console.log(e);
            for (let n = 0; n < e.length; n++) "/" === e[n] && (console.log("found / at:", n), t = n);
            return t + 1
        }
        ngOnInit() {
            this.router.url && (document.querySelector(".particles-js-canvas-el").style.visibility = "hidden"), this.getBuilds()
        }
    }
    var bp = Xn({
        encapsulation: 0,
        styles: [
            ["a[_ngcontent-%COMP%]{color:#212121;text-decoration:none}"]
        ],
        data: {}
    });

    function wp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 3, "a", [], [
            [8, "href", 4]
        ], null, null, null, null)), (e()(), Ws(2, 0, null, null, 2, "app-file", [], [
            [8, "id", 0]
        ], null, null, vp, mp)), ii(3, 114688, null, 0, gp, [], null, null), (e()(), io(4, 0, ["", ""]))], (function(e, t) {
            e(t, 3, 0)
        }), (function(e, t) {
            e(t, 1, 0, t.context.$implicit.url), e(t, 2, 0, t.context.index), e(t, 4, 0, t.context.$implicit.name)
        }))
    }

    function _p(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "ul", [
            ["class", "list-group"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, wp)), ii(2, 278528, null, 0, Ra, [Pn, Rn, Tn], {
            ngForOf: [0, "ngForOf"]
        }, null)], (function(e, t) {
            e(t, 2, 0, t.component.romData)
        }), null)
    }

    function xp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 4, "div", [
            ["class", "container"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 3, "div", [
            ["class", "row"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 2, "div", [
            ["class", "col-lg-12"]
        ], null, null, null, null, null)), (e()(), Bs(16777216, null, null, 1, null, _p)), ii(4, 16384, null, 0, Pa, [Pn, Rn], {
            ngIf: [0, "ngIf"]
        }, null)], (function(e, t) {
            e(t, 4, 0, t.component.romData)
        }), null)
    }

    function Cp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 2, "app-build", [], null, null, null, xp, bp)), si(512, null, df, df, [Nf]), ii(2, 114688, null, 0, yp, [df, Nf, yd], null, null)], (function(e, t) {
            e(t, 2, 0)
        }), null)
    }
    var Sp = Dr("app-build", yp, Cp, {}, {}, []); class Ep {
        constructor() {}
        ngOnInit() {}
    }
    var Tp = Xn({
        encapsulation: 0,
        styles: [
            ['.uno[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{position:relative;color:#000;text-decoration:none}.uno[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#000}.uno[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:#000;visibility:hidden;transform:scaleX(0);transition:all .3s ease-in-out 0s}.uno[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover:before{visibility:visible;transform:scaleX(1)}']
        ],
        data: {}
    });

    function kp(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 21, "header", [], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 20, "nav", [
            ["class", "navbar navbar-expand container"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 0, "a", [
            ["class", "navbar-brand"],
            ["href", "#"]
        ], null, null, null, null, null)), (e()(), Ws(3, 0, null, null, 1, "button", [
            ["aria-controls", "navbarNav"],
            ["aria-expanded", "false"],
            ["aria-label", "Toggle navigation"],
            ["class", "navbar-toggler"],
            ["data-target", "#navbarNav"],
            ["data-toggle", "collapse"],
            ["type", "button"]
        ], null, null, null, null, null)), (e()(), Ws(4, 0, null, null, 0, "span", [
            ["class", "navbar-toggler-icon"]
        ], null, null, null, null, null)), (e()(), Ws(5, 0, null, null, 16, "div", [
            ["class", "collapse navbar-collapse"],
            ["id", "navbarNav"]
        ], null, null, null, null, null)), (e()(), Ws(6, 0, null, null, 5, "ul", [
            ["class", "navbar-nav mr-auto"]
        ], null, null, null, null, null)), (e()(), Ws(7, 0, null, null, 4, "li", [
            ["class", "navbar-item active"]
        ], null, null, null, null, null)), (e()(), Ws(8, 0, null, null, 3, "h4", [
            ["class", "uno"]
        ], null, null, null, null, null)), (e()(), Ws(9, 0, null, null, 2, "a", [
            ["class", "nav-link text-dark"],
            ["routerLink", "/"]
        ], [
            [1, "target", 0],
            [8, "href", 4]
        ], [
            [null, "click"]
        ], (function(e, t, n) {
            var r = !0;
            return "click" === t && (r = !1 !== Br(e, 10).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }), null, null)), ii(10, 671744, null, 0, bd, [yd, ah, ya], {
            routerLink: [0, "routerLink"]
        }, null), (e()(), io(-1, null, ["D3v7"])), (e()(), Ws(12, 0, null, null, 9, "ul", [
            ["class", "navbar-nav ml-auto mr-md-5"]
        ], null, null, null, null, null)), (e()(), Ws(13, 0, null, null, 3, "li", [
            ["class", "nav-item active"]
        ], null, null, null, null, null)), (e()(), Ws(14, 0, null, null, 2, "h6", [
            ["class", "uno"]
        ], null, null, null, null, null)), (e()(), Ws(15, 0, null, null, 1, "a", [
            ["class", "nav-link text-dark"],
            ["href", "#"]
        ], null, null, null, null, null)), (e()(), io(-1, null, ["Blog"])), (e()(), Ws(17, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Ws(18, 0, null, null, 3, "h6", [
            ["class", "uno"]
        ], null, null, null, null, null)), (e()(), Ws(19, 0, null, null, 2, "a", [
            ["class", "nav-link text-dark"],
            ["routerLink", "/downloads"]
        ], [
            [1, "target", 0],
            [8, "href", 4]
        ], [
            [null, "click"]
        ], (function(e, t, n) {
            var r = !0;
            return "click" === t && (r = !1 !== Br(e, 20).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
        }), null, null)), ii(20, 671744, null, 0, bd, [yd, ah, ya], {
            routerLink: [0, "routerLink"]
        }, null), (e()(), io(-1, null, ["Downloads"]))], (function(e, t) {
            e(t, 10, 0, "/"), e(t, 20, 0, "/downloads")
        }), (function(e, t) {
            e(t, 9, 0, Br(t, 10).target, Br(t, 10).href), e(t, 19, 0, Br(t, 20).target, Br(t, 20).href)
        }))
    }

    function Ap(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Np(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            })))), r.forEach((function(t) {
                Ap(e, t, n[t])
            }))
        }
        return e
    }
    var Ip = {}, Rp = {};
    try {
        "undefined" != typeof window && (Ip = window), "undefined" != typeof document && (Rp = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && performance
    } catch (Bg) {}
    var Op = (Ip.navigator || {}).userAgent, Pp = void 0 === Op ? "" : Op, Dp = Ip, Mp = Rp, jp = !!Mp.documentElement && !!Mp.head && "function" == typeof Mp.addEventListener && "function" == typeof Mp.createElement, Lp = (~Pp.indexOf("MSIE") || Pp.indexOf("Trident/"), "fa"), Up = "svg-inline--fa", Hp = "data-fa-i2svg", Fp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $p = Fp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), zp = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(Fp.map((function(e) {
        return "".concat(e, "x")
    }))).concat($p.map((function(e) {
        return "w-".concat(e)
    }))), Dp.FontAwesomeConfig || {}); Mp && "function" == typeof Mp.querySelector && [
        ["data-family-prefix", "familyPrefix"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ].forEach((function(e) {
        var t, n = (2, function(e) {
                if (Array.isArray(e)) return e
            }(t = e) || function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), 2 !== n.length); r = !0);
                } catch (l) {
                    i = !0, s = l
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (i) throw s
                    }
                }
                return n
            }(t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()),
            r = n[1],
            i = function(e) {
                return "" === e || "false" !== e && ("true" === e || e)
            }(function(e) {
                var t = Mp.querySelector("script[" + e + "]");
                if (t) return t.getAttribute(e)
            }(n[0]));
        null != i && (zp[r] = i)
    }));
    var Vp = Np({
        familyPrefix: Lp,
        replacementClass: Up,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, zp); Vp.autoReplaceSvg || (Vp.observeMutations = !1);
    var qp = Np({}, Vp); Dp.FontAwesomeConfig = qp;
    var Bp = Dp || {}; Bp.___FONT_AWESOME___ || (Bp.___FONT_AWESOME___ = {}), Bp.___FONT_AWESOME___.styles || (Bp.___FONT_AWESOME___.styles = {}), Bp.___FONT_AWESOME___.hooks || (Bp.___FONT_AWESOME___.hooks = {}), Bp.___FONT_AWESOME___.shims || (Bp.___FONT_AWESOME___.shims = []);
    var Wp = Bp.___FONT_AWESOME___, Qp = []; jp && ((Mp.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Mp.readyState) || Mp.addEventListener("DOMContentLoaded", (function e() {
        Mp.removeEventListener("DOMContentLoaded", e), Qp.map((function(e) {
            return e()
        }))
    })));
    var Zp = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    }, Gp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function Kp() {
        for (var e = 12, t = ""; e-- > 0;) t += Gp[62 * Math.random() | 0];
        return t
    }

    function Xp(e) {
        return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Yp(e) {
        return Object.keys(e || {}).reduce((function(t, n) {
            return t + "".concat(n, ": ").concat(e[n], ";")
        }), "")
    }

    function Jp(e) {
        return e.size !== Zp.size || e.x !== Zp.x || e.y !== Zp.y || e.rotate !== Zp.rotate || e.flipX || e.flipY
    }

    function eg(e) {
        var t = e.transform,
            n = e.iconWidth,
            r = {
                transform: "translate(".concat(e.containerWidth / 2, " 256)")
            },
            i = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
            s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
            o = "rotate(".concat(t.rotate, " 0 0)");
        return {
            outer: r,
            inner: {
                transform: "".concat(i, " ").concat(s, " ").concat(o)
            },
            path: {
                transform: "translate(".concat(n / 2 * -1, " -256)")
            }
        }
    }
    var tg = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function ng(e) {
        var t = e.icons,
            n = t.main,
            r = t.mask,
            i = e.prefix,
            s = e.iconName,
            o = e.transform,
            a = e.symbol,
            l = e.title,
            u = e.extra,
            c = e.watchable,
            h = void 0 !== c && c,
            d = r.found ? r : n,
            f = d.width,
            p = d.height,
            g = "fa-w-".concat(Math.ceil(f / p * 16)),
            m = [qp.replacementClass, s ? "".concat(qp.familyPrefix, "-").concat(s) : "", g].filter((function(e) {
                return -1 === u.classes.indexOf(e)
            })).concat(u.classes).join(" "),
            v = {
                children: [],
                attributes: Np({}, u.attributes, {
                    "data-prefix": i,
                    "data-icon": s,
                    class: m,
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(f, " ").concat(p)
                })
            };
        h && (v.attributes[Hp] = ""), l && v.children.push({
            tag: "title",
            attributes: {
                id: v.attributes["aria-labelledby"] || "title-".concat(Kp())
            },
            children: [l]
        });
        var y = Np({}, v, {
                prefix: i,
                iconName: s,
                main: n,
                mask: r,
                transform: o,
                symbol: a,
                styles: u.styles
            }),
            b = r.found && n.found ? function(e) {
                var t = e.children,
                    n = e.attributes,
                    r = e.main,
                    i = e.mask,
                    s = r.icon,
                    o = i.icon,
                    a = eg({
                        transform: e.transform,
                        containerWidth: i.width,
                        iconWidth: r.width
                    }),
                    l = {
                        tag: "rect",
                        attributes: Np({}, tg, {
                            fill: "white"
                        })
                    },
                    u = {
                        tag: "g",
                        attributes: Np({}, a.inner),
                        children: [{
                            tag: "path",
                            attributes: Np({}, s.attributes, a.path, {
                                fill: "black"
                            })
                        }]
                    },
                    c = {
                        tag: "g",
                        attributes: Np({}, a.outer),
                        children: [u]
                    },
                    h = "mask-".concat(Kp()),
                    d = "clip-".concat(Kp()),
                    f = {
                        tag: "mask",
                        attributes: Np({}, tg, {
                            id: h,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [l, c]
                    };
                return t.push({
                    tag: "defs",
                    children: [{
                        tag: "clipPath",
                        attributes: {
                            id: d
                        },
                        children: [o]
                    }, f]
                }, {
                    tag: "rect",
                    attributes: Np({
                        fill: "currentColor",
                        "clip-path": "url(#".concat(d, ")"),
                        mask: "url(#".concat(h, ")")
                    }, tg)
                }), {
                    children: t,
                    attributes: n
                }
            }(y) : function(e) {
                var t = e.children,
                    n = e.attributes,
                    r = e.main,
                    i = e.transform,
                    s = Yp(e.styles);
                if (s.length > 0 && (n.style = s), Jp(i)) {
                    var o = eg({
                        transform: i,
                        containerWidth: r.width,
                        iconWidth: r.width
                    });
                    t.push({
                        tag: "g",
                        attributes: Np({}, o.outer),
                        children: [{
                            tag: "g",
                            attributes: Np({}, o.inner),
                            children: [{
                                tag: r.icon.tag,
                                children: r.icon.children,
                                attributes: Np({}, r.icon.attributes, o.path)
                            }]
                        }]
                    })
                } else t.push(r.icon);
                return {
                    children: t,
                    attributes: n
                }
            }(y),
            w = b.attributes;
        return y.children = b.children, y.attributes = w, a ? function(e) {
            var t = e.iconName,
                n = e.children,
                r = e.symbol;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: Np({}, e.attributes, {
                        id: !0 === r ? "".concat(e.prefix, "-").concat(qp.familyPrefix, "-").concat(t) : r
                    }),
                    children: n
                }]
            }]
        }(y) : function(e) {
            var t = e.children,
                n = e.main,
                r = e.mask,
                i = e.attributes,
                s = e.styles,
                o = e.transform;
            if (Jp(o) && n.found && !r.found) {
                var a = {
                    x: n.width / n.height / 2,
                    y: .5
                };
                i.style = Yp(Np({}, s, {
                    "transform-origin": "".concat(a.x + o.x / 16, "em ").concat(a.y + o.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: i,
                children: t
            }]
        }(y)
    }
    var rg = function(e, t, n, r) {
        var i, s, o, a = Object.keys(e),
            l = a.length,
            u = void 0 !== r ? function(e, t) {
                return function(n, r, i, s) {
                    return e.call(t, n, r, i, s)
                }
            }(t, r) : t;
        for (void 0 === n ? (i = 1, o = e[a[0]]) : (i = 0, o = n); i < l; i++) o = u(o, e[s = a[i]], s, e);
        return o
    }, ig = Wp.styles, sg = Wp.shims, og = function() {
        var e = function(e) {
            return rg(ig, (function(t, n, r) {
                return t[r] = rg(n, e, {}), t
            }), {})
        };
        e((function(e, t, n) {
            return e[t[3]] = n, e
        })), e((function(e, t, n) {
            var r = t[2];
            return e[n] = n, r.forEach((function(t) {
                e[t] = n
            })), e
        }));
        var t = "far" in ig;
        rg(sg, (function(e, n) {
            var r = n[1];
            return "far" !== r || t || (r = "fas"), e[n[0]] = {
                prefix: r,
                iconName: n[2]
            }, e
        }), {})
    };

    function ag(e, t, n) {
        if (e && e[t] && e[t][n]) return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
    }

    function lg(e) {
        var t = e.tag,
            n = e.attributes,
            r = void 0 === n ? {} : n,
            i = e.children,
            s = void 0 === i ? [] : i;
        return "string" == typeof e ? Xp(e) : "<".concat(t, " ").concat(function(e) {
            return Object.keys(e || {}).reduce((function(t, n) {
                return t + "".concat(n, '="').concat(Xp(e[n]), '" ')
            }), "").trim()
        }(r), ">").concat(s.map(lg).join(""), "</").concat(t, ">")
    }

    function ug(e) {
        this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
    }
    og(), (ug.prototype = Object.create(Error.prototype)).constructor = ug;
    var cg = {
        fill: "currentColor"
    }, hg = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
    }, dg = (Np({}, cg, {
        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
    }), Np({}, hg, {
        attributeName: "opacity"
    })); Np({}, cg, {
        cx: "256",
        cy: "364",
        r: "28"
    }), Np({}, hg, {
        attributeName: "r",
        values: "28;14;28;28;14;28;"
    }), Np({}, dg, {
        values: "1;0;1;1;0;1;"
    }), Np({}, cg, {
        opacity: "1",
        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
    }), Np({}, dg, {
        values: "1;0;0;0;0;1;"
    }), Np({}, cg, {
        opacity: "0",
        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
    }), Np({}, dg, {
        values: "0;0;1;1;0;0;"
    });
    var fg = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}';

    function pg(e, t) {
        var n = Object.keys(t).reduce((function(e, n) {
            var r = t[n];
            return r.icon ? e[r.iconName] = r.icon : e[n] = r, e
        }), {});
        "function" == typeof Wp.hooks.addPack ? Wp.hooks.addPack(e, n) : Wp.styles[e] = Np({}, Wp.styles[e] || {}, n), "fas" === e && pg("fa", t)
    }

    function gg(e) {
        return {
            found: !0,
            width: e[0],
            height: e[1],
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: e.slice(4)[0]
                }
            }
        }
    }

    function mg() {
        qp.autoAddCss && !_g && (function(e) {
            if (e && jp) {
                var t = Mp.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e;
                for (var n = Mp.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                    var s = n[i],
                        o = (s.tagName || "").toUpperCase();
                    ["STYLE", "LINK"].indexOf(o) > -1 && (r = s)
                }
                Mp.head.insertBefore(t, r)
            }
        }(function() {
            var e = Up,
                t = qp.familyPrefix,
                n = qp.replacementClass,
                r = fg;
            if (t !== Lp || n !== e) {
                var i = new RegExp("\\.".concat(Lp, "\\-"), "g"),
                    s = new RegExp("\\.".concat(e), "g");
                r = r.replace(i, ".".concat(t, "-")).replace(s, ".".concat(n))
            }
            return r
        }()), _g = !0)
    }

    function vg(e, t) {
        return Object.defineProperty(e, "abstract", {
            get: t
        }), Object.defineProperty(e, "html", {
            get: function() {
                return e.abstract.map((function(e) {
                    return lg(e)
                }))
            }
        }), Object.defineProperty(e, "node", {
            get: function() {
                if (jp) {
                    var t = Mp.createElement("div");
                    return t.innerHTML = e.html, t.children
                }
            }
        }), e
    }

    function yg(e) {
        var t = e.prefix,
            n = void 0 === t ? "fa" : t,
            r = e.iconName;
        if (r) return ag(wg.definitions, n, r) || ag(Wp.styles, n, r)
    }
    var bg, wg = new(function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.definitions = {}
        }
        var t;
        return (t = [{
            key: "add",
            value: function() {
                for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var i = n.reduce(this._pullDefinitions, {});
                Object.keys(i).forEach((function(t) {
                    e.definitions[t] = Np({}, e.definitions[t] || {}, i[t]), pg(t, i[t]), og()
                }))
            }
        }, {
            key: "reset",
            value: function() {
                this.definitions = {}
            }
        }, {
            key: "_pullDefinitions",
            value: function(e, t) {
                var n = t.prefix && t.iconName && t.icon ? {
                    0: t
                } : t;
                return Object.keys(n).map((function(t) {
                    var r = n[t],
                        i = r.prefix,
                        s = r.iconName,
                        o = r.icon;
                    e[i] || (e[i] = {}), e[i][s] = o
                })), e
            }
        }]) && function(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }(e.prototype, t), e
    }()), _g = !1, xg = {
        transform: function(e) {
            return function(e) {
                var t = {
                    size: 16,
                    x: 0,
                    y: 0,
                    flipX: !1,
                    flipY: !1,
                    rotate: 0
                };
                return e ? e.toLowerCase().split(" ").reduce((function(e, t) {
                    var n = t.toLowerCase().split("-"),
                        r = n[0],
                        i = n.slice(1).join("-");
                    if (r && "h" === i) return e.flipX = !0, e;
                    if (r && "v" === i) return e.flipY = !0, e;
                    if (i = parseFloat(i), isNaN(i)) return e;
                    switch (r) {
                        case "grow":
                            e.size = e.size + i;
                            break;
                        case "shrink":
                            e.size = e.size - i;
                            break;
                        case "left":
                            e.x = e.x - i;
                            break;
                        case "right":
                            e.x = e.x + i;
                            break;
                        case "up":
                            e.y = e.y - i;
                            break;
                        case "down":
                            e.y = e.y + i;
                            break;
                        case "rotate":
                            e.rotate = e.rotate + i
                    }
                    return e
                }), t) : t
            }(e)
        }
    }, Cg = (bg = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.transform,
            r = void 0 === n ? Zp : n,
            i = t.symbol,
            s = void 0 !== i && i,
            o = t.mask,
            a = void 0 === o ? null : o,
            l = t.title,
            u = void 0 === l ? null : l,
            c = t.classes,
            h = void 0 === c ? [] : c,
            d = t.attributes,
            f = void 0 === d ? {} : d,
            p = t.styles,
            g = void 0 === p ? {} : p;
        if (e) {
            var m = e.prefix,
                v = e.iconName,
                y = e.icon;
            return vg(Np({
                type: "icon"
            }, e), (function() {
                return mg(), qp.autoA11y && (u ? f["aria-labelledby"] = "".concat(qp.replacementClass, "-title-").concat(Kp()) : f["aria-hidden"] = "true"), ng({
                    icons: {
                        main: gg(y),
                        mask: a ? gg(a.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: m,
                    iconName: v,
                    transform: Np({}, Zp, r),
                    symbol: s,
                    title: u,
                    extra: {
                        attributes: f,
                        styles: g,
                        classes: h
                    }
                })
            }))
        }
    }, function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = (e || {}).icon ? e : yg(e || {}),
            r = t.mask;
        return r && (r = (r || {}).icon ? r : yg(r || {})), bg(n, Np({}, t, {
            mask: r
        }))
    });
    const Sg = (e, t = "fas") => null == e ? null : (e => void 0 !== e.prefix && void 0 !== e.iconName)(e) ? e : Array.isArray(e) && 2 === e.length ? {
        prefix: e[0],
        iconName: e[1]
    } : "string" == typeof e ? {
        prefix: t,
        iconName: e
    } : void 0, Eg = (e, t) => Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? {
        [e]: t
    } : {}, Tg = e => {
        const t = {
            "fa-spin": e.spin,
            "fa-pulse": e.pulse,
            "fa-fw": e.fixedWidth,
            "fa-border": e.border,
            "fa-li": e.listItem,
            "fa-inverse": e.inverse,
            "fa-layers-counter": e.counter,
            "fa-flip-horizontal": "horizontal" === e.flip || "both" === e.flip,
            "fa-flip-vertical": "vertical" === e.flip || "both" === e.flip,
            [`fa-${e.size}`]: null !== e.size,
            [`fa-rotate-${e.rotate}`]: null !== e.rotate,
            [`fa-pull-${e.pull}`]: null !== e.pull
        };
        return Object.keys(t).map(e => t[e] ? e : null).filter(e => e)
    }, kg = (e, t) => {
        t && !e && console.error(`FontAwesome: Could not find icon with iconName=${t.iconName} and prefix=${t.prefix}`)
    }, Ag = e => {
        e || console.error("FontAwesome: Could not find icon. It looks like you've provided a null or undefined icon object to this component.")
    }, Ng = `<svg class="${qp.replacementClass}" viewBox="0 0 448 512"></svg>\x3c!--icon not found--\x3e`;
    let Ig = (() => {
        class e {
            constructor() {
                this.defaultPrefix = "fas"
            }
        }
        return e.ngInjectableDef = ce({
            factory: function() {
                return new e
            },
            token: e,
            providedIn: "root"
        }), e
    })(); class Rg {
        constructor(e, t) {
            this.sanitizer = e, this.iconService = t, this.classes = []
        }
        ngOnChanges(e) {
            e && (this.updateIconSpec(), this.updateParams(), this.updateIcon(), this.renderIcon())
        }
        updateIconSpec() {
            this.iconSpec = Sg(this.iconProp, this.iconService.defaultPrefix)
        }
        updateParams() {
            const e = Eg("classes", [...Tg({
                    flip: this.flip,
                    spin: this.spin,
                    pulse: this.pulse,
                    border: this.border,
                    inverse: this.inverse,
                    listItem: this.listItem,
                    size: this.size || null,
                    pull: this.pull || null,
                    rotate: this.rotate || null,
                    fixedWidth: this.fixedWidth
                }), ...this.classes]),
                t = Eg("mask", Sg(this.mask, this.iconService.defaultPrefix)),
                n = "string" == typeof this.transform ? xg.transform(this.transform) : this.transform,
                r = Eg("transform", n);
            this.params = Object.assign({
                title: this.title
            }, r, e, t, {
                styles: this.styles,
                symbol: this.symbol
            })
        }
        updateIcon() {
            this.icon = Cg(this.iconSpec, this.params)
        }
        renderIcon() {
            Ag(this.iconSpec), kg(this.icon, this.iconSpec), this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join("\n") : Ng)
        }
    }
    class Og {}
    var Pg = Xn({
        encapsulation: 2,
        styles: [],
        data: {}
    });

    function Dg(e) {
        return ao(0, [], null, null)
    }
    var Mg = {
        prefix: "fas",
        iconName: "heart",
        icon: [512, 512, [], "f004", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]
    }; class jg {
        constructor(e) {
            this.router = e, this.faHeart = Mg
        }
        ngOnInit() {
            "/footer" == this.router.url && Kd(".particles-js-canvas-el").remove()
        }
    }
    var Lg = Xn({
        encapsulation: 0,
        styles: [
            [""]
        ],
        data: {}
    });

    function Ug(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 12, "footer", [
            ["class", "fixed-bottom"]
        ], null, null, null, null, null)), (e()(), Ws(1, 0, null, null, 11, "section", [
            ["class", "container text-center"]
        ], null, null, null, null, null)), (e()(), Ws(2, 0, null, null, 10, "p", [], null, null, null, null, null)), (e()(), io(-1, null, [" Made with "])), (e()(), Ws(4, 0, null, null, 4, "fa-icon", [
            ["class", "ng-fa-icon"]
        ], [
            [8, "innerHTML", 1]
        ], null, null, Dg, Pg)), si(512, null, ja, La, [an, kn, dn]), ii(6, 278528, null, 0, Ha, [ja], {
            ngStyle: [0, "ngStyle"]
        }, null), ro(7, {
            color: 0
        }), ii(8, 573440, null, 0, Rg, [zu, Ig], {
            iconProp: [0, "iconProp"]
        }, null), (e()(), io(-1, null, [" by "])), (e()(), Ws(10, 0, null, null, 1, "a", [
            ["href", "https://D3v7.github.io"]
        ], null, null, null, null, null)), (e()(), io(-1, null, ["D3v7"])), (e()(), io(-1, null, [". "]))], (function(e, t) {
            var n = t.component,
                r = e(t, 7, 0, "red");
            e(t, 6, 0, r), e(t, 8, 0, n.faHeart)
        }), (function(e, t) {
            e(t, 4, 0, Br(t, 8).renderedIconHTML)
        }))
    }
    var Hg = Xn({
        encapsulation: 0,
        styles: [
            [""]
        ],
        data: {}
    });

    function Fg(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-header", [], null, null, null, kp, Tp)), ii(1, 114688, null, 0, Ep, [], null, null), (e()(), Ws(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ii(3, 212992, null, 0, Cd, [xd, Pn, nn, [8, null], kt], null, null), (e()(), Ws(4, 0, null, null, 1, "app-footer", [], null, null, null, Ug, Lg)), ii(5, 114688, null, 0, jg, [yd], null, null)], (function(e, t) {
            e(t, 1, 0), e(t, 3, 0), e(t, 5, 0)
        }), null)
    }

    function $g(e) {
        return ao(0, [(e()(), Ws(0, 0, null, null, 1, "app-root", [], null, null, null, Fg, Hg)), ii(1, 4243456, null, 0, Bd, [yd], null, null)], null, null)
    }
    var zg = Dr("app-root", Bd, $g, {}, {}, []); class Vg {}
    var qg = fa(ga, [Bd], (function(e) {
        return function(e) {
            const t = {},
                n = [];
            let r = !1;
            for (let i = 0; i < e.length; i++) {
                const s = e[i];
                s.token === Nt && !0 === s.value && (r = !0), 1073741824 & s.flags && n.push(s.token), s.index = i, t[Zn(s.token)] = s
            }
            return {
                factory: null,
                providersByKey: t,
                providers: e,
                modules: n,
                isRoot: r
            }
        }([kr(512, nn, rn, [
            [8, [Gd, nf, lf, Xf, np, up, pp, Sp, zg]],
            [3, nn], Ue
        ]), kr(5120, Fi, zs, [
            [3, Fi]
        ]), kr(4608, ka, Aa, [Fi, [2, Ta]]), kr(5120, wi, Vs, [is]), kr(5120, Pi, Di, []), kr(5120, Tn, Fs, []), kr(5120, kn, $s, []), kr(4608, zu, Vu, [$a]), kr(6144, xt, null, [zu]), kr(4608, Mu, Lu, []), kr(5120, ru, (function(e, t, n, r, i, s, o, a) {
            return [new Pu(e, t, n), new $u(r), new Uu(i, s, o, a)]
        }), [$a, is, Li, $a, $a, Mu, Hi, [2, ju]]), kr(4608, iu, iu, [ru, is]), kr(135680, au, au, [$a]), kr(4608, pu, pu, [iu, au, Pi]), kr(6144, cn, null, [pu]), kr(6144, ou, null, [au]), kr(4608, hs, hs, [is]), kr(5120, ah, Fd, [yd]), kr(4608, kd, kd, []), kr(6144, Ed, null, [kd]), kr(135680, Ad, Ad, [yd, Ts, Qi, Rt, Ed]), kr(4608, Td, Td, []), kr(5120, Nd, Md, [yd, Va, Id]), kr(5120, qd, Vd, [$d]), kr(5120, Ui, (function(e) {
            return [e]
        }), [qd]), kr(4608, Hf, Ff, [$a, Li, Lf]), kr(4608, $f, $f, [Hf, Uf]), kr(5120, Rf, (function(e) {
            return [e]
        }), [$f]), kr(4608, Mf, Mf, []), kr(6144, Df, null, [Mf]), kr(4608, jf, jf, [Df]), kr(6144, pf, null, [jf]), kr(4608, ff, zf, [pf, Rt]), kr(4608, Nf, Nf, [ff]), kr(1073742336, Fa, Fa, []), kr(1024, Ke, Xu, []), kr(1024, bs, (function() {
            return [Pd()]
        }), []), kr(512, $d, $d, [Rt]), kr(1024, Ri, (function(e, t) {
            return [(n = e, eu("probe", nu), eu("coreTokens", Object.assign({}, tu, (n || []).reduce((e, t) => (e[t.name] = t.token, e), {}))), () => nu), zd(t)];
            var n
        }), [
            [2, bs], $d
        ]), kr(512, Oi, Oi, [
            [2, Ri]
        ]), kr(131584, Ss, Ss, [is, Hi, Rt, Ke, nn, Oi]), kr(1073742336, qs, qs, [Ss]), kr(1073742336, Yu, Yu, [
            [3, Yu]
        ]), kr(1024, Rd, Ld, [
            [3, yd]
        ]), kr(512, Hc, Fc, []), kr(512, xd, xd, []), kr(256, Id, {}, []), kr(1024, ya, jd, [ma, [2, ba], Id]), kr(512, wa, wa, [ya, ma]), kr(512, Qi, Qi, []), kr(512, Ts, Rs, [Qi, [2, Ns]]), kr(1024, hd, (function() {
            return [
                [{
                    path: "",
                    component: Yd
                }, {
                    path: "downloads",
                    component: rf,
                    children: [{
                        path: "",
                        component: Bf
                    }, {
                        path: ":id",
                        component: Yf,
                        children: [{
                            path: "",
                            component: rp
                        }, {
                            path: ":id",
                            component: cp,
                            children: [{
                                path: "",
                                component: yp
                            }]
                        }]
                    }]
                }]
            ]
        }), []), kr(1024, yd, Hd, [Ss, Hc, xd, wa, Rt, Ts, Qi, hd, Id, [2, fd],
            [2, ud]
        ]), kr(1073742336, Dd, Dd, [
            [2, Rd],
            [2, yd]
        ]), kr(1073742336, Vg, Vg, []), kr(1073742336, Og, Og, []), kr(1073742336, Vf, Vf, []), kr(1073742336, qf, qf, []), kr(1073742336, ga, ga, []), kr(256, Nt, !0, []), kr(256, Lf, "XSRF-TOKEN", []), kr(256, Uf, "X-XSRF-TOKEN", [])])
    }));
    (function() {
        if (Ye) throw new Error("Cannot enable prod mode after platform setup.");
        Xe = !1
    })(), Ku().bootstrapModuleFactory(qg).catch(e => console.error(e))
}
}, [
    [0, 0]
]]);