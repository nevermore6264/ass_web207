(function (a, b, c) {
    function h(a) {
        return String.fromCharCode(a)
    }

    function t(a, b, c) {
        var d;
        if (a) if (L(a)) for (d in a) d != "prototype" && d != "length" && d != "name" && a.hasOwnProperty(d) && b.call(c, a[d], d); else if (a.forEach && a.forEach !== t) a.forEach(b, c); else if (G(a) && I(a.length)) for (d = 0; d < a.length; d++) b.call(c, a[d], d); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a
    }

    function u(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }

    function v(a, b, c) {
        var d = u(a);
        for (var e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function w(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function x() {
        var a = s.length, b;
        while (a) {
            a--, b = s[a].charCodeAt(0);
            if (b == 57) return s[a] = "A", s.join("");
            if (b != 90) return s[a] = String.fromCharCode(b + 1), s.join("");
            s[a] = "0"
        }
        return s.unshift("0"), s.join("")
    }

    function y(a) {
        return t(arguments, function (b) {
            b !== a && t(b, function (b, c) {
                a[c] = b
            })
        }), a
    }

    function z(a) {
        return parseInt(a, 10)
    }

    function A(a, b) {
        return y(new (y(function () {
        }, {prototype: a})), b)
    }

    function B() {
    }

    function C(a) {
        return a
    }

    function D(a) {
        return function () {
            return a
        }
    }

    function E(a) {
        return typeof a == "undefined"
    }

    function F(a) {
        return typeof a != "undefined"
    }

    function G(a) {
        return a != null && typeof a == "object"
    }

    function H(a) {
        return typeof a == "string"
    }

    function I(a) {
        return typeof a == "number"
    }

    function J(a) {
        return o.apply(a) == "[object Date]"
    }

    function K(a) {
        return o.apply(a) == "[object Array]"
    }

    function L(a) {
        return typeof a == "function"
    }

    function M(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }

    function N(a) {
        return a && a.$evalAsync && a.$watch
    }

    function O(a) {
        return o.apply(a) === "[object File]"
    }

    function P(a) {
        return typeof a == "boolean"
    }

    function Q(a) {
        return H(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
    }

    function R(a) {
        return a && (a.nodeName || a.bind && a.find)
    }

    function S(a) {
        var b = {}, c = a.split(","), d;
        for (d = 0; d < c.length; d++) b[c[d]] = !0;
        return b
    }

    function T(a, b, c) {
        var d = [];
        return t(a, function (a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d
    }

    function U(a, b) {
        var c = 0, d;
        if (K(a) || H(a)) return a.length;
        if (G(a)) for (d in a) (!b || a.hasOwnProperty(d)) && c++;
        return c
    }

    function V(a, b) {
        return W(a, b) != -1
    }

    function W(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return -1
    }

    function X(a, b) {
        var c = W(a, b);
        return c >= 0 && a.splice(c, 1), b
    }

    function Y(a) {
        if (a) switch (a.nodeName) {
            case"OPTION":
            case"PRE":
            case"TITLE":
                return !0
        }
        return !1
    }

    function Z(a, b) {
        if (M(a) || N(a)) throw i("Can't copy Window or Scope");
        if (!b) b = a, a && (K(a) ? b = Z(a, []) : J(a) ? b = new Date(a.getTime()) : G(a) && (b = Z(a, {}))); else {
            if (a === b) throw i("Can't copy equivalent objects or arrays");
            if (K(a)) {
                while (b.length) b.pop();
                for (var c = 0; c < a.length; c++) b.push(Z(a[c]))
            } else {
                t(b, function (a, c) {
                    delete b[c]
                });
                for (var d in a) b[d] = Z(a[d])
            }
        }
        return b
    }

    function $(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (b[c] = a[c]);
        return b
    }

    function _(a, b) {
        if (a === b) return !0;
        if (a === null || b === null) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a, e = typeof b, f, g, h;
        if (d == e && d == "object") {
            if (!K(a)) {
                if (J(a)) return J(b) && a.getTime() == b.getTime();
                if (N(a) || N(b) || M(a) || M(b)) return !1;
                h = {};
                for (g in a) {
                    if (g.charAt(0) === "$" || L(a[g])) continue;
                    if (!_(a[g], b[g])) return !1;
                    h[g] = !0
                }
                for (g in b) if (!h[g] && g.charAt(0) !== "$" && b[g] !== c && !L(b[g])) return !1;
                return !0
            }
            if ((f = a.length) == b.length) {
                for (g = 0; g < f; g++) if (!_(a[g], b[g])) return !1;
                return !0
            }
        }
        return !1
    }

    function ab(a, b, c) {
        return a.concat(m.call(b, c))
    }

    function bb(a, b) {
        return m.call(a, b || 0)
    }

    function cb(a, b) {
        var c = arguments.length > 2 ? bb(arguments, 2) : [];
        return !L(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, c.concat(m.call(arguments, 0))) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function db(a, d) {
        var e = d;
        return /^\$+/.test(a) ? e = c : M(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : N(d) && (e = "$SCOPE"), e
    }

    function eb(a, b) {
        return JSON.stringify(a, db, b ? "  " : null)
    }

    function fb(a) {
        return H(a) ? JSON.parse(a) : a
    }

    function gb(a) {
        if (a && a.length !== 0) {
            var b = d("" + a);
            a = b != "f" && b != "0" && b != "false" && b != "no" && b != "n" && b != "[]"
        } else a = !1;
        return a
    }

    function hb(a) {
        a = k(a).clone();
        try {
            a.html("")
        } catch (b) {
        }
        return k("<div>").append(a).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
            return "<" + d(b)
        })
    }

    function ib(a) {
        var b = {}, c, d;
        return t((a || "").split("&"), function (a) {
            a && (c = a.split("="), d = decodeURIComponent(c[0]), b[d] = F(c[1]) ? decodeURIComponent(c[1]) : !0)
        }), b
    }

    function jb(a) {
        var b = [];
        return t(a, function (a, c) {
            b.push(lb(c, !0) + (a === !0 ? "" : "=" + lb(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function kb(a) {
        return lb(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function lb(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(b ? null : /%20/g, "+")
    }

    function mb(a, c) {
        function i(a) {
            a && d.push(a)
        }

        var d = [a], e, f, g = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        t(g, function (c) {
            g[c] = !0, i(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (t(a.querySelectorAll("." + c), i), t(a.querySelectorAll("." + c + "\\:"), i), t(a.querySelectorAll("[" + c + "]"), i))
        }), t(d, function (a) {
            if (!e) {
                var b = " " + a.className + " ", c = h.exec(b);
                c ? (e = a, f = (c[2] || "").replace(/\s+/g, ",")) : t(a.attributes, function (b) {
                    !e && g[b.name] && (e = a, f = b.value)
                })
            }
        }), e && c(e, f ? [f] : [])
    }

    function nb(a, b) {
        a = k(a), b = b || [], b.unshift(["$provide", function (b) {
            b.value("$rootElement", a)
        }]), b.unshift("ng");
        var c = ec(b);
        return c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
            a.$apply(function () {
                b.data("$injector", d), c(b)(a)
            })
        }]), c
    }

    function pb(a, b) {
        return b = b || "_", a.replace(ob, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function qb() {
        l = a.jQuery, l ? (k = l, y(l.fn, {
            scope: Tb.scope,
            controller: Tb.controller,
            injector: Tb.injector,
            inheritedData: Tb.inheritedData
        }), Fb("remove", !0), Fb("empty"), Fb("html")) : k = Gb, p.element = k
    }

    function rb(a, b, c) {
        if (!a) throw new i("Argument '" + (b || "?") + "' is " + (c || "required"));
        return a
    }

    function sb(a, b, c) {
        return c && K(a) && (a = a[a.length - 1]), rb(L(a), b, "not a function, got " + (a && typeof a == "object" ? a.constructor.name || "Object" : typeof a)), a
    }

    function tb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        return b(b(a, "angular", Object), "module", function () {
            var a = {};
            return function (d, e, f) {
                return e && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                    function h(b, c, d) {
                        return function () {
                            return a[d || "push"]([b, c, arguments]), g
                        }
                    }

                    if (!e) throw i("No module: " + d);
                    var a = [], b = [], c = h("$injector", "invoke"), g = {
                        _invokeQueue: a,
                        _runBlocks: b,
                        requires: e,
                        name: d,
                        provider: h("$provide", "provider"),
                        factory: h("$provide", "factory"),
                        service: h("$provide", "service"),
                        value: h("$provide", "value"),
                        constant: h("$provide", "constant", "unshift"),
                        filter: h("$filterProvider", "register"),
                        controller: h("$controllerProvider", "register"),
                        directive: h("$compileProvider", "directive"),
                        config: c,
                        run: function (a) {
                            return b.push(a), this
                        }
                    };
                    return f && c(f), g
                })
            }
        })
    }

    function vb(b) {
        y(b, {
            bootstrap: nb,
            copy: Z,
            extend: y,
            equals: _,
            element: k,
            forEach: t,
            injector: ec,
            noop: B,
            bind: cb,
            toJson: eb,
            fromJson: fb,
            identity: C,
            isUndefined: E,
            isDefined: F,
            isString: H,
            isFunction: L,
            isObject: G,
            isNumber: I,
            isElement: R,
            isArray: K,
            version: ub,
            isDate: J,
            lowercase: d,
            uppercase: e,
            callbacks: {counter: 0}
        }), q = tb(a);
        try {
            q("ngLocale")
        } catch (c) {
            q("ngLocale", []).provider("$locale", jd)
        }
        q("ng", ["ngLocale"], ["$provide", function (b) {
            b.provider("$compile", lc).directive({
                a: Gd,
                input: Yd,
                textarea: Yd,
                form: Ld,
                script: Ie,
                select: Ke,
                style: Me,
                option: Le,
                ngBind: ie,
                ngBindHtmlUnsafe: ke,
                ngBindTemplate: je,
                ngClass: me,
                ngClassEven: oe,
                ngClassOdd: ne,
                ngCsp: re,
                ngCloak: pe,
                ngController: qe,
                ngForm: Md,
                ngHide: Ae,
                ngInclude: ue,
                ngInit: ve,
                ngNonBindable: we,
                ngPluralize: xe,
                ngRepeat: ye,
                ngShow: ze,
                ngSubmit: te,
                ngStyle: Be,
                ngSwitch: De,
                ngSwitchWhen: Ee,
                ngSwitchDefault: Fe,
                ngOptions: Je,
                ngView: He,
                ngTransclude: Ge,
                ngModel: ce,
                ngList: fe,
                ngChange: de,
                required: ee,
                ngRequired: ee,
                ngValue: he
            }).directive(Hd).directive(se), b.provider({
                $anchorScroll: fc,
                $browser: hc,
                $cacheFactory: ic,
                $controller: qc,
                $document: rc,
                $exceptionHandler: sc,
                $filter: ld,
                $interpolate: tc,
                $http: fd,
                $httpBackend: hd,
                $location: Kc,
                $log: Lc,
                $parse: Vc,
                $route: Yc,
                $routeParams: Zc,
                $rootScope: $c,
                $q: Wc,
                $sniffer: _c,
                $templateCache: jc,
                $timeout: kd,
                $window: ad
            })
        }])
    }

    function Bb() {
        return ++yb
    }

    function Eb(a) {
        return a.replace(Cb, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Db, "Moz$1")
    }

    function Fb(a, b) {
        function d() {
            var a = [this], d = b, e, f, g, h, i, j, m, n, o;
            while (a.length) {
                e = a.shift();
                for (f = 0, g = e.length; f < g; f++) {
                    h = k(e[f]), d ? h.triggerHandler("$destroy") : d = !d;
                    for (i = 0, j = (m = h.children()).length; i < j; i++) a.push(l(m[i]))
                }
            }
            return c.apply(this, arguments)
        }

        var c = l.fn[a];
        c = c.$original || c, d.$original = c, l.fn[a] = d
    }

    function Gb(a) {
        if (a instanceof Gb) return a;
        if (!(this instanceof Gb)) {
            if (H(a) && a.charAt(0) != "<") throw i("selectors not implemented");
            return new Gb(a)
        }
        if (H(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), Qb(this, c.childNodes), this.remove()
        } else Qb(this, a)
    }

    function Hb(a) {
        return a.cloneNode(!0)
    }

    function Ib(a) {
        Kb(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++) Ib(c[b])
    }

    function Jb(a, b, c) {
        var d = Lb(a, "events"), e = Lb(a, "handle");
        if (!e) return;
        E(b) ? t(d, function (b, c) {
            Ab(a, c, b), delete d[c]
        }) : E(c) ? (Ab(a, b, d[b]), delete d[b]) : X(d[b], c)
    }

    function Kb(a) {
        var b = a[xb], d = wb[b];
        d && (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Jb(a)), delete wb[b], a[xb] = c)
    }

    function Lb(a, b, c) {
        var d = a[xb], e = wb[d || -1];
        if (!F(c)) return e && e[b];
        e || (a[xb] = d = Bb(), e = wb[d] = {}), e[b] = c
    }

    function Mb(a, b, c) {
        var d = Lb(a, "data"), e = F(c), f = !e && F(b), g = f && !G(b);
        !d && !g && Lb(a, "data", d = {});
        if (e) d[b] = c; else {
            if (!f) return d;
            if (g) return d && d[b];
            y(d, b)
        }
    }

    function Nb(a, b) {
        return (" " + a.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1
    }

    function Ob(a, b) {
        b && t(b.split(" "), function (b) {
            a.className = Q((" " + a.className + " ").replace(/[\n\t]/g, " ").replace(" " + Q(b) + " ", " "))
        })
    }

    function Pb(a, b) {
        b && t(b.split(" "), function (b) {
            Nb(a, b) || (a.className = Q(a.className + " " + Q(b)))
        })
    }

    function Qb(a, b) {
        if (b) {
            b = !b.nodeName && F(b.length) && !M(b) ? b : [b];
            for (var c = 0; c < b.length; c++) a.push(b[c])
        }
    }

    function Rb(a, b) {
        return Sb(a, "$" + (b || "ngController") + "Controller")
    }

    function Sb(a, b, c) {
        a = k(a), a[0].nodeType == 9 && (a = a.find("html"));
        while (a.length) {
            if (c = a.data(b)) return c;
            a = a.parent()
        }
    }

    function Wb(a, b) {
        var c = Ub[b.toLowerCase()];
        return c && Vb[a.nodeName] && c
    }

    function Xb(a, c) {
        var d = function (d, e) {
            d.preventDefault || (d.preventDefault = function () {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function () {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b);
            if (E(d.defaultPrevented)) {
                var f = d.preventDefault;
                d.preventDefault = function () {
                    d.defaultPrevented = !0, f.call(d)
                }, d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function () {
                return d.defaultPrevented
            }, t(c[e || d.type], function (b) {
                b.call(a, d)
            }), j <= 8 ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a, d
    }

    function Yb(a) {
        var b = typeof a, d;
        return b == "object" && a !== null ? typeof (d = a.$$hashKey) == "function" ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = x()) : d = a, b + ":" + d
    }

    function Zb(a) {
        t(a, this.put, this)
    }

    function $b() {
    }

    function dc(a) {
        var b, c, d, e;
        return typeof a == "function" ? (b = a.$inject) || (b = [], c = a.toString().replace(cc, ""), d = c.match(_b), t(d[1].split(ac), function (a) {
            a.replace(bc, function (a, c, d) {
                b.push(d)
            })
        }), a.$inject = b) : K(a) ? (e = a.length - 1, sb(a[e], "fn"), b = a.slice(0, e)) : sb(a, "fn", !0), b
    }

    function ec(a) {
        function k(a) {
            return function (b, c) {
                if (!G(b)) return a(b, c);
                t(b, w(a))
            }
        }

        function l(a, b) {
            if (L(b) || K(b)) b = g.instantiate(b);
            if (!b.$get) throw i("Provider " + a + " must define $get factory method.");
            return f[a + c] = b
        }

        function m(a, b) {
            return l(a, {$get: b})
        }

        function n(a, b) {
            return m(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function o(a, b) {
            return m(a, D(b))
        }

        function p(a, b) {
            f[a] = b, h[a] = b
        }

        function r(a, b) {
            var d = g.get(a + c), e = d.$get;
            d.$get = function () {
                var a = j.invoke(e, d);
                return j.invoke(b, null, {$delegate: a})
            }
        }

        function s(a) {
            var b = [];
            return t(a, function (a) {
                if (e.get(a)) return;
                e.put(a, !0);
                if (H(a)) {
                    var c = q(a);
                    b = b.concat(s(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, f = 0, h = d.length; f < h; f++) {
                            var i = d[f], j = i[0] == "$injector" ? g : g.get(i[0]);
                            j[i[1]].apply(j, i[2])
                        }
                    } catch (k) {
                        throw k.message && (k.message += " from " + a), k
                    }
                } else if (L(a)) try {
                    b.push(g.invoke(a))
                } catch (k) {
                    throw k.message && (k.message += " from " + a), k
                } else if (K(a)) try {
                    b.push(g.invoke(a))
                } catch (k) {
                    throw k.message && (k.message += " from " + String(a[a.length - 1])), k
                } else sb(a, "module")
            }), b
        }

        function u(a, c) {
            function e(e) {
                if (typeof e != "string") throw i("Service name expected");
                if (a.hasOwnProperty(e)) {
                    if (a[e] === b) throw i("Circular dependency: " + d.join(" <- "));
                    return a[e]
                }
                try {
                    return d.unshift(e), a[e] = b, a[e] = c(e)
                } finally {
                    d.shift()
                }
            }

            function f(a, b, c) {
                var d = [], f = dc(a), g, h, i;
                for (h = 0, g = f.length; h < g; h++) i = f[h], d.push(c && c.hasOwnProperty(i) ? c[i] : e(i));
                a.$inject || (a = a[g]);
                switch (b ? -1 : d.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(d[0]);
                    case 2:
                        return a(d[0], d[1]);
                    case 3:
                        return a(d[0], d[1], d[2]);
                    case 4:
                        return a(d[0], d[1], d[2], d[3]);
                    case 5:
                        return a(d[0], d[1], d[2], d[3], d[4]);
                    case 6:
                        return a(d[0], d[1], d[2], d[3], d[4], d[5]);
                    case 7:
                        return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6]);
                    case 8:
                        return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
                    case 9:
                        return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]);
                    case 10:
                        return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9]);
                    default:
                        return a.apply(b, d)
                }
            }

            function g(a, b) {
                var c = function () {
                }, d, e;
                return c.prototype = (K(a) ? a[a.length - 1] : a).prototype, d = new c, e = f(a, d, b), G(e) ? e : d
            }

            return {invoke: f, instantiate: g, get: e, annotate: dc}
        }

        var b = {}, c = "Provider", d = [], e = new Zb,
            f = {$provide: {provider: k(l), factory: k(m), service: k(n), value: k(o), constant: k(p), decorator: r}},
            g = u(f, function () {
                throw i("Unknown provider: " + d.join(" <- "))
            }), h = {}, j = h.$injector = u(h, function (a) {
                var b = g.get(a + c);
                return j.invoke(b.$get, b)
            });
        return t(s(a), function (a) {
            j.invoke(a || B)
        }), j
    }

    function fc() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, e) {
            function g(a) {
                var b = null;
                return t(a, function (a) {
                    !b && d(a.nodeName) === "a" && (b = a)
                }), b
            }

            function h() {
                var a = c.hash(), d;
                a ? (d = f.getElementById(a)) ? d.scrollIntoView() : (d = g(f.getElementsByName(a))) ? d.scrollIntoView() : a === "top" && b.scrollTo(0, 0) : b.scrollTo(0, 0)
            }

            var f = b.document;
            return a && e.$watch(function () {
                return c.hash()
            }, function () {
                e.$evalAsync(h)
            }), h
        }]
    }

    function gc(a, b, d, e) {
        function p(a) {
            try {
                a.apply(null, bb(arguments, 1))
            } finally {
                n--;
                if (n === 0) while (o.length) try {
                    o.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function s(a, b) {
            (function c() {
                t(q, function (a) {
                    a()
                }), r = b(c, a)
            })()
        }

        function y() {
            if (u == f.url()) return;
            u = f.url(), t(w, function (a) {
                a(f.url())
            })
        }

        var f = this, g = b[0], h = a.location, i = a.history, j = a.setTimeout, l = a.clearTimeout, m = {};
        f.isMock = !1;
        var n = 0, o = [];
        f.$$completeOutstandingRequest = p, f.$$incOutstandingRequestCount = function () {
            n++
        }, f.notifyWhenNoOutstandingRequests = function (a) {
            t(q, function (a) {
                a()
            }), n === 0 ? a() : o.push(a)
        };
        var q = [], r;
        f.addPollFn = function (a) {
            return E(r) && s(100, j), q.push(a), a
        };
        var u = h.href, v = b.find("base");
        f.url = function (a, b) {
            if (a) {
                if (u == a) return;
                return u = a, e.history ? b ? i.replaceState(null, "", a) : (i.pushState(null, "", a), v.attr("href", v.attr("href"))) : b ? h.replace(a) : h.href = a, f
            }
            return h.href.replace(/%27/g, "'")
        };
        var w = [], x = !1;
        f.onUrlChange = function (b) {
            return x || (e.history && k(a).bind("popstate", y), e.hashchange ? k(a).bind("hashchange", y) : f.addPollFn(y), x = !0), w.push(b), b
        }, f.baseHref = function () {
            var a = v.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : a
        };
        var z = {}, A = "", C = f.baseHref();
        f.cookies = function (a, b) {
            var e, f, h, i, j;
            if (!a) {
                if (g.cookie !== A) {
                    A = g.cookie, f = A.split("; "), z = {};
                    for (i = 0; i < f.length; i++) h = f[i], j = h.indexOf("="), j > 0 && (z[unescape(h.substring(0, j))] = unescape(h.substring(j + 1)))
                }
                return z
            }
            b === c ? g.cookie = escape(a) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : H(b) && (e = (g.cookie = escape(a) + "=" + escape(b) + ";path=" + C).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, f.defer = function (a, b) {
            var c;
            return n++, c = j(function () {
                delete m[c], p(a)
            }, b || 0), m[c] = !0, c
        }, f.defer.cancel = function (a) {
            return m[a] ? (delete m[a], l(a), p(B), !0) : !1
        }
    }

    function hc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new gc(a, d, b, c)
        }]
    }

    function ic() {
        this.$get = function () {
            function b(b, c) {
                function l(a) {
                    a != j && (k ? k == a && (k = a.n) : k = a, m(a.n, a.p), m(a, j), j = a, j.n = null)
                }

                function m(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a) throw i("cacheId " + b + " taken");
                var d = 0, e = y({}, c, {id: b}), f = {}, g = c && c.capacity || Number.MAX_VALUE, h = {}, j = null,
                    k = null;
                return a[b] = {
                    put: function (a, b) {
                        var c = h[a] || (h[a] = {key: a});
                        l(c);
                        if (E(b)) return;
                        a in f || d++, f[a] = b, d > g && this.remove(k.key)
                    }, get: function (a) {
                        var b = h[a];
                        if (!b) return;
                        return l(b), f[a]
                    }, remove: function (a) {
                        var b = h[a];
                        if (!b) return;
                        b == j && (j = b.p), b == k && (k = b.n), m(b.n, b.p), delete h[a], delete f[a], d--
                    }, removeAll: function () {
                        f = {}, d = 0, h = {}, j = k = null
                    }, destroy: function () {
                        f = null, e = null, h = null, delete a[b]
                    }, info: function () {
                        return y({}, e, {size: d})
                    }
                }
            }

            var a = {};
            return b.info = function () {
                var b = {};
                return t(a, function (a, c) {
                    b[c] = a.info()
                }), b
            }, b.get = function (b) {
                return a[b]
            }, b
        }
    }

    function jc() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function lc(a) {
        var d = {}, e = "Directive", f = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            h = "Template must have exactly one root element. was: ";
        this.directive = function l(b, c) {
            return H(b) ? (rb(c, "directive"), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + e, ["$injector", "$exceptionHandler", function (a, c) {
                var e = [];
                return t(d[b], function (d) {
                    try {
                        var f = a.invoke(d);
                        L(f) ? f = {compile: D(f)} : !f.compile && f.link && (f.compile = D(f.link)), f.priority = f.priority || 0, f.name = f.name || b, f.require = f.require || f.controller && f.name, f.restrict = f.restrict || "A", e.push(f)
                    } catch (g) {
                        c(g)
                    }
                }), e
            }])), d[b].push(c)) : t(b, w(l)), this
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", function (a, l, m, n, o, p, q, s) {
            function z(a, b, c) {
                a instanceof k || (a = k(a)), t(a, function (b, c) {
                    b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = k(b).wrap("<span></span>").parent()[0])
                });
                var d = E(a, b, a, c);
                return function (c, e) {
                    rb(c, "scope");
                    var f = e ? Tb.clone.call(a) : a;
                    return f.data("$scope", c), B(f, "ng-scope"), e && e(f, c), d && d(c, f, f), f
                }
            }

            function A(a, b) {
                throw i("Unsupported '" + b + "' for '" + a + "'.")
            }

            function B(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function E(a, b, d, e) {
                function n(a, d, e, g) {
                    var h, i, j, l, m, n, o, p, q = [];
                    for (n = 0, o = d.length; n < o; n++) q.push(d[n]);
                    for (n = 0, p = 0, o = f.length; n < o; p++) j = q[p], h = f[n++], i = f[n++], h ? (h.scope ? (l = a.$new(G(h.scope)), k(j).data("$scope", l)) : l = a, m = h.transclude, m || !g && b ? h(i, l, j, e, function (b) {
                        return function (c) {
                            var d = a.$new();
                            return b(d, c).bind("$destroy", cb(d, d.$destroy))
                        }
                    }(m || b)) : h(i, l, j, c, g)) : i && i(a, j.childNodes, c, g)
                }

                var f = [], g, h, i, j, l;
                for (var m = 0; m < a.length; m++) j = new u, i = F(a[m], [], j, e), g = i.length ? I(i, a[m], j, b, d) : null, h = g && g.terminal || !a[m].childNodes.length ? null : E(a[m].childNodes, g ? g.transclude : b), f.push(g), f.push(h), l = l || g || h;
                return l ? n : null
            }

            function F(a, b, c, d) {
                var e = a.nodeType, h = c.$attr, i, k;
                switch (e) {
                    case 1:
                        J(b, nc(r(a).toLowerCase()), "E", d);
                        for (var l, m, n, o, p = a.attributes, q = 0, s = p && p.length; q < s; q++) l = p[q], l.specified && (m = l.name, n = nc(m.toLowerCase()), h[n] = m, c[n] = o = Q(j && m == "href" ? decodeURIComponent(a.getAttribute(m, 2)) : l.value), Wb(a, n) && (c[n] = !0), S(a, b, o, n), J(b, n, "A", d));
                        k = a.className;
                        if (H(k) && k !== "") while (i = g.exec(k)) n = nc(i[2]), J(b, n, "C", d) && (c[n] = Q(i[3])), k = k.substr(i.index + i[0].length);
                        break;
                    case 3:
                        R(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            i = f.exec(a.nodeValue), i && (n = nc(i[1]), J(b, n, "M", d) && (c[n] = Q(i[2])))
                        } catch (t) {
                        }
                }
                return b.sort(O), b
            }

            function I(a, d, e, f, g) {
                function V(a, b) {
                    a && (a.require = w.require, l.push(a)), b && (b.require = w.require, n.push(b))
                }

                function W(a, b) {
                    var c, d = "data", e = !1;
                    if (H(a)) {
                        while ((c = a.charAt(0)) == "^" || c == "?") a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e) throw i("No controller: " + a);
                        return c
                    }
                    return K(a) && (c = [], t(a, function (a) {
                        c.push(W(a, b))
                    })), c
                }

                function X(a, b, f, g, h) {
                    var j, o, s, v, w, x;
                    d === f ? j = e : j = $(e, new u(k(f), e.$attr)), o = j.$$element;
                    if (r) {
                        var y = /^\s*([@=&])\s*(\w*)\s*$/, z = b.$parent || b;
                        t(r.scope, function (a, c) {
                            var d = a.match(y) || [], e = d[2] || c, f = d[1], g, h, k;
                            switch (f) {
                                case"@":
                                    j.$observe(e, function (a) {
                                        b[c] = a
                                    }), j.$$observers[e].$$scope = z;
                                    break;
                                case"=":
                                    h = p(j[e]), k = h.assign || function () {
                                        throw g = b[c] = h(z), i(kc + j[e] + " (directive: " + r.name + ")")
                                    }, g = b[c] = h(z), b.$watch(function () {
                                        var d = h(z);
                                        return d !== b[c] && (d !== g ? g = b[c] = d : k(z, d = g = b[c])), d
                                    });
                                    break;
                                case"&":
                                    h = p(j[e]), b[c] = function (a) {
                                        return h(z, a)
                                    };
                                    break;
                                default:
                                    throw i("Invalid isolate scope definition for directive " + r.name + ": " + a)
                            }
                        })
                    }
                    E && t(E, function (a) {
                        var c = {$scope: b, $element: o, $attrs: j, $transclude: h};
                        x = a.controller, x == "@" && (x = j[a.name]), o.data("$" + a.name + "Controller", q(x, c))
                    });
                    for (s = 0, v = l.length; s < v; s++) try {
                        w = l[s], w(b, o, j, w.require && W(w.require, o))
                    } catch (A) {
                        m(A, hb(o))
                    }
                    a && a(b, f.childNodes, c, h);
                    for (s = 0, v = n.length; s < v; s++) try {
                        w = n[s], w(b, o, j, w.require && W(w.require, o))
                    } catch (A) {
                        m(A, hb(o))
                    }
                }

                var j = -Number.MAX_VALUE, l = [], n = [], o = null, r = null, s = null, v = e.$$element = k(d), w, y,
                    A, C, D = f, E, I, J;
                for (var O = 0, R = a.length; O < R; O++) {
                    w = a[O], A = c;
                    if (j > w.priority) break;
                    if (J = w.scope) P("isolated scope", r, w, v), G(J) && (B(v, "ng-isolate-scope"), r = w), B(v, "ng-scope"), o = o || w;
                    y = w.name;
                    if (J = w.controller) E = E || {}, P("'" + y + "' controller", E[y], w, v), E[y] = w;
                    if (J = w.transclude) P("transclusion", C, w, v), C = w, j = w.priority, J == "element" ? (A = k(d), v = e.$$element = k(b.createComment(" " + y + ": " + e[y] + " ")), d = v[0], T(g, k(A[0]), d), D = z(A, f, j)) : (A = k(Hb(d)).contents(), v.html(""), D = z(A, f));
                    if (J = w.template) {
                        P("template", s, w, v), s = w, J = x(J);
                        if (w.replace) {
                            A = k("<div>" + Q(J) + "</div>").contents(), d = A[0];
                            if (A.length != 1 || d.nodeType !== 1) throw new i(h + J);
                            T(g, v, d);
                            var S = {$attr: {}};
                            a = a.concat(F(d, a.splice(O + 1, a.length - (O + 1)), S)), M(e, S), R = a.length
                        } else v.html(J)
                    }
                    if (w.templateUrl) P("template", s, w, v), s = w, X = N(a.splice(O, a.length - O), X, v, e, g, w.replace, D), R = a.length; else if (w.compile) try {
                        I = w.compile(v, e, D), L(I) ? V(null, I) : I && V(I.pre, I.post)
                    } catch (U) {
                        m(U, hb(v))
                    }
                    w.terminal && (X.terminal = !0, j = Math.max(j, w.priority))
                }
                return X.scope = o && o.scope, X.transclude = C && D, X
            }

            function J(b, f, g, h) {
                var i = !1;
                if (d.hasOwnProperty(f)) for (var j, k = a.get(f + e), l = 0, n = k.length; l < n; l++) try {
                    j = k[l], (h === c || h > j.priority) && j.restrict.indexOf(g) != -1 && (b.push(j), i = !0)
                } catch (o) {
                    m(o)
                }
                return i
            }

            function M(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                t(a, function (d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), t(b, function (b, f) {
                    f == "class" ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : f == "style" ? e.attr("style", e.attr("style") + ";" + b) : f.charAt(0) != "$" && !a.hasOwnProperty(f) && (a[f] = b, d[f] = c[f])
                })
            }

            function N(a, b, c, d, e, f, g) {
                var j = [], l, m, p = c[0], q = a.shift(),
                    r = y({}, q, {controller: null, templateUrl: null, transclude: null, scope: null});
                return c.html(""), n.get(q.templateUrl, {cache: o}).success(function (n) {
                    var o, q, s;
                    n = x(n);
                    if (f) {
                        s = k("<div>" + Q(n) + "</div>").contents(), o = s[0];
                        if (s.length != 1 || o.nodeType !== 1) throw new i(h + n);
                        q = {$attr: {}}, T(e, c, o), F(o, a, q), M(d, q)
                    } else o = p, c.html(n);
                    a.unshift(r), l = I(a, c, d, g), m = E(c.contents(), g);
                    while (j.length) {
                        var t = j.pop(), u = j.pop(), v = j.pop(), w = j.pop(), y = o;
                        v !== p && (y = Hb(o), T(u, k(v), y)), l(function () {
                            b(m, w, y, e, t)
                        }, w, y, e, t)
                    }
                    j = null
                }).error(function (a, b, c, d) {
                    throw i("Failed to load template: " + d.url)
                }), function (c, d, e, f, g) {
                    j ? (j.push(d), j.push(e), j.push(f), j.push(g)) : l(function () {
                        b(m, d, e, f, g)
                    }, d, e, f, g)
                }
            }

            function O(a, b) {
                return b.priority - a.priority
            }

            function P(a, b, c, d) {
                if (b) throw i("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + hb(d))
            }

            function R(a, b) {
                var c = l(b, !0);
                c && a.push({
                    priority: 0, compile: D(function (b, d) {
                        var e = d.parent(), f = e.data("$binding") || [];
                        f.push(c), B(e.data("$binding", f), "ng-binding"), b.$watch(c, function (b) {
                            d[0].nodeValue = b
                        })
                    })
                })
            }

            function S(a, b, d, e) {
                var f = l(d, !0);
                if (!f) return;
                b.push({
                    priority: 100, compile: D(function (b, d, g) {
                        var h = g.$$observers || (g.$$observers = {});
                        e === "class" && (f = l(g[e], !0)), g[e] = c, (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function (b) {
                            g.$set(e, b)
                        })
                    })
                })
            }

            function T(a, b, c) {
                var d = b[0], e = d.parentNode, f, g;
                if (a) for (f = 0, g = a.length; f < g; f++) if (a[f] == d) {
                    a[f] = c;
                    break
                }
                e && e.replaceChild(c, d), c[k.expando] = d[k.expando], b[0] = c
            }

            var u = function (a, b) {
                this.$$element = a, this.$attr = b || {}
            };
            u.prototype = {
                $normalize: nc, $set: function (a, b, d, e) {
                    var f = Wb(this.$$element[0], a), g = this.$$observers;
                    f && (this.$$element.prop(a, b), e = f), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = pb(a, "-"))), d !== !1 && (b === null || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), g && t(g[a], function (a) {
                        try {
                            a(b)
                        } catch (c) {
                            m(c)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    return e.push(b), s.$evalAsync(function () {
                        e.$$inter || b(c[a])
                    }), b
                }
            };
            var v = l.startSymbol(), w = l.endSymbol(), x = v == "{{" || w == "}}" ? C : function (b) {
                return b.replace(/\{\{/g, v).replace(/}}/g, w)
            };
            return z
        }]
    }

    function nc(a) {
        return Eb(a.replace(mc, ""))
    }

    function oc(a, b, c, d) {
    }

    function pc(a, b, c, d, e) {
    }

    function qc() {
        var a = {};
        this.register = function (b, c) {
            G(b) ? y(a, b) : a[b] = c
        }, this.$get = ["$injector", "$window", function (b, c) {
            return function (d, e) {
                if (H(d)) {
                    var f = d;
                    d = a.hasOwnProperty(f) ? a[f] : Rc(e.$scope, f, !0) || Rc(c, f, !0), sb(d, f, !0)
                }
                return b.instantiate(d, e)
            }
        }]
    }

    function rc() {
        this.$get = ["$window", function (a) {
            return k(a.document)
        }]
    }

    function sc() {
        this.$get = ["$log", function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function tc() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", function (d) {
            function g(g, h) {
                var i, j, k = 0, l = [], m = g.length, n = !1, o, p, q = [];
                while (k < m) (i = g.indexOf(a, k)) != -1 && (j = g.indexOf(b, i + e)) != -1 ? (k != i && l.push(g.substring(k, i)), l.push(o = d(p = g.substring(i + e, j))), o.exp = p, k = j + f, n = !0) : (k != m && l.push(g.substring(k)), k = m);
                (m = l.length) || (l.push(""), m = 1);
                if (!h || n) return q.length = m, o = function (a) {
                    for (var b = 0, d = m, e; b < d; b++) typeof (e = l[b]) == "function" && (e = e(a), e == null || e == c ? e = "" : typeof e != "string" && (e = eb(e))), q[b] = e;
                    return q.join("")
                }, o.exp = g, o.parts = l, o
            }

            var e = a.length, f = b.length;
            return g.startSymbol = function () {
                return a
            }, g.endSymbol = function () {
                return b
            }, g
        }]
    }

    function yc(a) {
        var b = a.split("/"), c = b.length;
        while (c--) b[c] = kb(b[c]);
        return b.join("/")
    }

    function zc(a) {
        return a.split("#")[0]
    }

    function Ac(a, b) {
        var c = uc.exec(a);
        return c = {
            protocol: c[1],
            host: c[3],
            port: z(c[5]) || xc[c[1]] || null,
            path: c[6] || "/",
            search: c[8],
            hash: c[10]
        }, b && (b.$$protocol = c.protocol, b.$$host = c.host, b.$$port = c.port), c
    }

    function Bc(a, b, c) {
        return a + "://" + b + (c == xc[a] ? "" : ":" + c)
    }

    function Cc(a) {
        return a.substr(0, a.lastIndexOf("/"))
    }

    function Dc(a, b, c) {
        var d = Ac(a);
        return decodeURIComponent(d.path) != b || E(d.hash) || d.hash.indexOf(c) !== 0 ? a : Bc(d.protocol, d.host, d.port) + Cc(b) + d.hash.substr(c.length)
    }

    function Ec(a, b, c) {
        var d = Ac(a);
        if (decodeURIComponent(d.path) == b) return a;
        var e = d.search && "?" + d.search || "", f = d.hash && "#" + d.hash || "", g = Cc(b),
            h = d.path.substr(g.length);
        if (d.path.indexOf(g) !== 0) throw i('Invalid url "' + a + '", missing path prefix "' + g + '" !');
        return Bc(d.protocol, d.host, d.port) + b + "#" + c + h + e + f
    }

    function Fc(a, b, c) {
        b = b || "", this.$$parse = function (a) {
            var c = Ac(a, this);
            if (c.path.indexOf(b) !== 0) throw i('Invalid url "' + a + '", missing path prefix "' + b + '" !');
            this.$$path = decodeURIComponent(c.path.substr(b.length)), this.$$search = ib(c.search), this.$$hash = c.hash && decodeURIComponent(c.hash) || "", this.$$compose()
        }, this.$$compose = function () {
            var a = jb(this.$$search), c = this.$$hash ? "#" + kb(this.$$hash) : "";
            this.$$url = yc(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Bc(this.$$protocol, this.$$host, this.$$port) + b + this.$$url
        }, this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0) return a
        }, this.$$parse(a)
    }

    function Gc(a, b, c) {
        var d;
        this.$$parse = function (a) {
            var c = Ac(a, this);
            if (c.hash && c.hash.indexOf(b) !== 0) throw i('Invalid url "' + a + '", missing hash prefix "' + b + '" !');
            d = c.path + (c.search ? "?" + c.search : ""), c = wc.exec((c.hash || "").substr(b.length)), c[1] ? this.$$path = (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : this.$$path = "", this.$$search = ib(c[3]), this.$$hash = c[5] && decodeURIComponent(c[5]) || "", this.$$compose()
        }, this.$$compose = function () {
            var a = jb(this.$$search), c = this.$$hash ? "#" + kb(this.$$hash) : "";
            this.$$url = yc(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Bc(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + b + this.$$url : "")
        }, this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0) return a
        }, this.$$parse(a)
    }

    function Hc(a, b, c, d) {
        Gc.apply(this, arguments), this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0) return c + d + "#" + b + a.substr(c.length)
        }
    }

    function Ic(a) {
        return function () {
            return this[a]
        }
    }

    function Jc(a, b) {
        return function (c) {
            return E(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Kc() {
        var b = "", c = !1;
        this.hashPrefix = function (a) {
            return F(a) ? (b = a, this) : b
        }, this.html5Mode = function (a) {
            return F(a) ? (c = a, this) : c
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (e, f, g, h) {
            function q(a) {
                e.$broadcast("$locationChangeSuccess", i.absUrl(), a)
            }

            var i, j, l, m = f.url(), n = Ac(m), o;
            c ? (j = f.baseHref() || "/", l = Cc(j), o = Bc(n.protocol, n.host, n.port) + l + "/", g.history ? i = new Fc(Dc(m, j, b), l, o) : i = new Hc(Ec(m, j, b), b, o, j.substr(l.length + 1))) : (o = Bc(n.protocol, n.host, n.port) + (n.path || "") + (n.search ? "?" + n.search : "") + "#" + b + "/", i = new Gc(m, b, o)), h.bind("click", function (b) {
                if (b.ctrlKey || b.metaKey || b.which == 2) return;
                var c = k(b.target);
                while (d(c[0].nodeName) !== "a") if (c[0] === h[0] || !(c = c.parent())[0]) return;
                var f = c.prop("href"), g = i.$$rewriteAppUrl(f);
                f && !c.attr("target") && g && (i.$$parse(g), e.$apply(), b.preventDefault(), a.angular["ff-684208-preventDefault"] = !0)
            }), i.absUrl() != m && f.url(i.absUrl(), !0), f.onUrlChange(function (a) {
                i.absUrl() != a && (e.$evalAsync(function () {
                    var b = i.absUrl();
                    i.$$parse(a), q(b)
                }), e.$$phase || e.$digest())
            });
            var p = 0;
            return e.$watch(function () {
                var b = f.url(), c = i.$$replace;
                if (!p || b != i.absUrl()) p++, e.$evalAsync(function () {
                    e.$broadcast("$locationChangeStart", i.absUrl(), b).defaultPrevented ? i.$$parse(b) : (f.url(i.absUrl(), c), q(b))
                });
                return i.$$replace = !1, p
            }), i
        }]
    }

    function Lc() {
        this.$get = ["$window", function (a) {
            function b(a) {
                return a instanceof i && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function c(c) {
                var d = a.console || {}, e = d[c] || d.log || B;
                return e.apply ? function () {
                    var a = [];
                    return t(arguments, function (c) {
                        a.push(b(c))
                    }), e.apply(d, a)
                } : function (a, b) {
                    e(a, b)
                }
            }

            return {log: c("log"), warn: c("warn"), info: c("info"), error: c("error")}
        }]
    }

    function Oc(a, b) {
        function n(a) {
            return a.indexOf(h) != -1
        }

        function o(a) {
            return a.indexOf(j) != -1
        }

        function p() {
            return f + 1 < a.length ? a.charAt(f + 1) : !1
        }

        function q(a) {
            return "0" <= a && a <= "9"
        }

        function r(a) {
            return a == " " || a == "\r" || a == "	" || a == "\n" || a == "" || a == " "
        }

        function s(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function t(a) {
            return a == "-" || a == "+" || q(a)
        }

        function u(b, c, d) {
            throw d = d || f, i("Lexer Error: " + b + " at column" + (F(c) ? "s " + c + "-" + f + " [" + a.substring(c, d) + "]" : " " + d) + " in expression [" + a + "].")
        }

        function v() {
            var b = "", e = f;
            while (f < a.length) {
                var g = d(a.charAt(f));
                if (g == "." || q(g)) b += g; else {
                    var h = p();
                    if (g == "e" && t(h)) b += g; else if (t(g) && h && q(h) && b.charAt(b.length - 1) == "e") b += g; else {
                        if (!t(g) || !!h && !!q(h) || b.charAt(b.length - 1) != "e") break;
                        u("Invalid exponent")
                    }
                }
                f++
            }
            b = 1 * b, c.push({
                index: e, text: b, json: !0, fn: function () {
                    return b
                }
            })
        }

        function w() {
            var d = "", e = f, g, h, i;
            while (f < a.length) {
                var j = a.charAt(f);
                if (j != "." && !s(j) && !q(j)) break;
                j == "." && (g = f), d += j, f++
            }
            if (g) {
                h = f;
                while (h < a.length) {
                    var j = a.charAt(h);
                    if (j == "(") {
                        i = d.substr(g - e + 1), d = d.substr(0, g - e), f = h;
                        break
                    }
                    if (!r(j)) break;
                    h++
                }
            }
            var k = {index: e, text: d};
            if (Mc.hasOwnProperty(d)) k.fn = k.json = Mc[d]; else {
                var l = Uc(d, b);
                k.fn = y(function (a, b) {
                    return l(a, b)
                }, {
                    assign: function (a, b) {
                        return Qc(a, d, b)
                    }
                })
            }
            c.push(k), i && (c.push({index: g, text: ".", json: !1}), c.push({index: g + 1, text: i, json: !1}))
        }

        function x(b) {
            var d = f;
            f++;
            var e = "", g = b, h = !1;
            while (f < a.length) {
                var i = a.charAt(f);
                g += i;
                if (h) {
                    if (i == "u") {
                        var j = a.substring(f + 1, f + 5);
                        j.match(/[\da-f]{4}/i) || u("Invalid unicode escape [\\u" + j + "]"), f += 4, e += String.fromCharCode(parseInt(j, 16))
                    } else {
                        var k = Nc[i];
                        k ? e += k : e += i
                    }
                    h = !1
                } else if (i == "\\") h = !0; else {
                    if (i == b) {
                        f++, c.push({
                            index: d, text: g, string: e, json: !0, fn: function () {
                                return e
                            }
                        });
                        return
                    }
                    e += i
                }
                f++
            }
            u("Unterminated quote", d)
        }

        var c = [], e, f = 0, g = [], h, j = ":";
        while (f < a.length) {
            h = a.charAt(f);
            if (n("\"'")) x(h); else if (q(h) || n(".") && q(p())) v(); else if (s(h)) w(), o("{,") && g[0] == "{" && (e = c[c.length - 1]) && (e.json = e.text.indexOf(".") == -1); else if (n("(){}[].,;:")) c.push({
                index: f,
                text: h,
                json: o(":[,") && n("{[") || n("}]:,")
            }), n("{[") && g.unshift(h), n("}]") && g.shift(), f++; else {
                if (r(h)) {
                    f++;
                    continue
                }
                var k = h + p(), l = Mc[h], m = Mc[k];
                m ? (c.push({index: f, text: k, fn: m}), f += 2) : l ? (c.push({
                    index: f,
                    text: h,
                    fn: l,
                    json: o("[,:") && n("+-")
                }), f += 1) : u("Unexpected next character ", f, f + 1)
            }
            j = h
        }
        return c
    }

    function Pc(a, b, d, e) {
        function o(b, c) {
            throw i("Syntax Error: Token '" + c.text + "' " + b + " at column " + (c.index + 1) + " of the expression [" + a + "] starting at [" + a.substring(c.index) + "].")
        }

        function p() {
            if (h.length === 0) throw i("Unexpected end of expression: " + a);
            return h[0]
        }

        function q(a, b, c, d) {
            if (h.length > 0) {
                var e = h[0], f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
            }
            return !1
        }

        function r(a, c, d, e) {
            var f = q(a, c, d, e);
            return f ? (b && !f.json && o("is not valid json", f), h.shift(), f) : !1
        }

        function s(a) {
            r(a) || o("is unexpected, expecting [" + a + "]", q())
        }

        function t(a, b) {
            return function (c, d) {
                return a(c, d, b)
            }
        }

        function u(a, b, c) {
            return function (d, e) {
                return b(d, e, a, c)
            }
        }

        function v() {
            var a = [];
            for (; ;) {
                h.length > 0 && !q("}", ")", ";", "]") && a.push(n());
                if (!r(";")) return a.length == 1 ? a[0] : function (b, c) {
                    var d;
                    for (var e = 0; e < a.length; e++) {
                        var f = a[e];
                        f && (d = f(b, c))
                    }
                    return d
                }
            }
        }

        function w() {
            var a = z(), b;
            for (; ;) {
                if (!(b = r("|"))) return a;
                a = u(a, b.fn, x())
            }
        }

        function x() {
            var a = r(), b = d(a.text), c = [];
            for (; ;) {
                if (!(a = r(":"))) {
                    var e = function (a, d, e) {
                        var f = [e];
                        for (var g = 0; g < c.length; g++) f.push(c[g](a, d));
                        return b.apply(a, f)
                    };
                    return function () {
                        return e
                    }
                }
                c.push(z())
            }
        }

        function z() {
            return j()
        }

        function A() {
            var b = C(), c, d;
            return (d = r("=")) ? (b.assign || o("implies assignment but [" + a.substring(0, d.index) + "] can not be assigned to", d), c = C(), function (a, d) {
                return b.assign(a, c(a, d), d)
            }) : b
        }

        function C() {
            var a = E(), b;
            for (; ;) {
                if (!(b = r("||"))) return a;
                a = u(a, b.fn, E())
            }
        }

        function E() {
            var a = F(), b;
            if (b = r("&&")) a = u(a, b.fn, E());
            return a
        }

        function F() {
            var a = G(), b;
            if (b = r("==", "!=")) a = u(a, b.fn, F());
            return a
        }

        function G() {
            var a = H(), b;
            if (b = r("<", ">", "<=", ">=")) a = u(a, b.fn, G());
            return a
        }

        function H() {
            var a = I(), b;
            while (b = r("+", "-")) a = u(a, b.fn, I());
            return a
        }

        function I() {
            var a = J(), b;
            while (b = r("*", "/", "%")) a = u(a, b.fn, J());
            return a
        }

        function J() {
            var a;
            return r("+") ? K() : (a = r("-")) ? u(f, a.fn, J()) : (a = r("!")) ? t(a.fn, J()) : K()
        }

        function K() {
            var a;
            if (r("(")) a = n(), s(")"); else if (r("[")) a = O(); else if (r("{")) a = P(); else {
                var b = r();
                a = b.fn, a || o("not a primary expression", b)
            }
            var c, d;
            while (c = r("(", "[", ".")) c.text === "(" ? (a = k(a, d), d = null) : c.text === "[" ? (d = a, a = m(a)) : c.text === "." ? (d = a, a = l(a)) : o("IMPOSSIBLE");
            return a
        }

        function L(a) {
            var b = r().text, c = Uc(b, e);
            return y(function (b, d) {
                return c(a(b, d), d)
            }, {
                assign: function (c, d, e) {
                    return Qc(a(c, e), b, d)
                }
            })
        }

        function M(a) {
            var b = z();
            return s("]"), y(function (d, e) {
                var f = a(d, e), g = b(d, e), h, i;
                return f ? (h = f[g], h && h.then && (i = h, "$$v" in h || (i.$$v = c, i.then(function (a) {
                    i.$$v = a
                })), h = h.$$v), h) : c
            }, {
                assign: function (c, d, e) {
                    return a(c, e)[b(c, e)] = d
                }
            })
        }

        function N(a, b) {
            var c = [];
            if (p().text != ")") do c.push(z()); while (r(","));
            return s(")"), function (d, e) {
                var f = [], g = b ? b(d, e) : d;
                for (var h = 0; h < c.length; h++) f.push(c[h](d, e));
                var i = a(d, e) || B;
                return i.apply ? i.apply(g, f) : i(f[0], f[1], f[2], f[3], f[4])
            }
        }

        function O() {
            var a = [];
            if (p().text != "]") do a.push(z()); while (r(","));
            return s("]"), function (b, c) {
                var d = [];
                for (var e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }
        }

        function P() {
            var a = [];
            if (p().text != "}") do {
                var b = r(), c = b.string || b.text;
                s(":");
                var d = z();
                a.push({key: c, value: d})
            } while (r(","));
            return s("}"), function (b, c) {
                var d = {};
                for (var e = 0; e < a.length; e++) {
                    var f = a[e], g = f.value(b, c);
                    d[f.key] = g
                }
                return d
            }
        }

        var f = D(0), g, h = Oc(a, e), j = A, k = N, l = L, m = M, n = w;
        return b ? (j = C, k = l = m = n = function () {
            o("is not valid json", {text: a, index: 0})
        }, g = K()) : g = v(), h.length !== 0 && o("is an unexpected token", h[0]), g
    }

    function Qc(a, b, c) {
        var d = b.split(".");
        for (var e = 0; d.length > 1; e++) {
            var f = d.shift(), g = a[f];
            g || (g = {}, a[f] = g), a = g
        }
        return a[d.shift()] = c, c
    }

    function Rc(a, b, c) {
        if (!b) return a;
        var d = b.split("."), e, f = a, g = d.length;
        for (var h = 0; h < g; h++) e = d[h], a && (a = (f = a)[e]);
        return !c && L(a) ? cb(f, a) : a
    }

    function Tc(a, b, d, e, f) {
        return function (g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g, j;
            return i === null || i === c ? i : (i = i[a], i && i.then && ("$$v" in i || (j = i, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), i = i.$$v), !b || i === null || i === c ? i : (i = i[b], i && i.then && ("$$v" in i || (j = i, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), i = i.$$v), !d || i === null || i === c ? i : (i = i[d], i && i.then && ("$$v" in i || (j = i, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), i = i.$$v), !e || i === null || i === c ? i : (i = i[e], i && i.then && ("$$v" in i || (j = i, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), i = i.$$v), !f || i === null || i === c ? i : (i = i[f], i && i.then && ("$$v" in i || (j = i, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), i = i.$$v), i)))))
        }
    }

    function Uc(a, b) {
        if (Sc.hasOwnProperty(a)) return Sc[a];
        var d = a.split("."), e = d.length, f;
        if (b) f = e < 6 ? Tc(d[0], d[1], d[2], d[3], d[4]) : function (a, b) {
            var f = 0, g;
            do g = Tc(d[f++], d[f++], d[f++], d[f++], d[f++])(a, b), b = c, a = g; while (f < e);
            return g
        }; else {
            var g = "var l, fn, p;\n";
            t(d, function (a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"]' + ";\n" + "if (s && s.then) {\n" + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n"
            }), g += "return s;", f = Function("s", "k", g), f.toString = function () {
                return g
            }
        }
        return Sc[a] = f
    }

    function Vc() {
        var a = {};
        this.$get = ["$filter", "$sniffer", function (b, c) {
            return function (d) {
                switch (typeof d) {
                    case"string":
                        return a.hasOwnProperty(d) ? a[d] : a[d] = Pc(d, !1, b, c.csp);
                    case"function":
                        return d;
                    default:
                        return B
                }
            }
        }]
    }

    function Wc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return Xc(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function Xc(a, b) {
        function h(a) {
            return a
        }

        function i(a) {
            return f(a)
        }

        function j(a) {
            var b = d(), c = a.length, f = [];
            return c ? t(a, function (a, d) {
                e(a).then(function (a) {
                    if (d in f) return;
                    f[d] = a, --c || b.resolve(f)
                }, function (a) {
                    if (d in f) return;
                    b.reject(a)
                })
            }) : b.resolve(f), b.promise
        }

        var d = function () {
            var g = [], j, k;
            return k = {
                resolve: function (b) {
                    if (g) {
                        var d = g;
                        g = c, j = e(b), d.length && a(function () {
                            var a;
                            for (var b = 0, c = d.length; b < c; b++) a = d[b], j.then(a[0], a[1])
                        })
                    }
                }, reject: function (a) {
                    k.resolve(f(a))
                }, promise: {
                    then: function (a, c) {
                        var e = d(), f = function (c) {
                            try {
                                e.resolve((a || h)(c))
                            } catch (d) {
                                b(d), e.reject(d)
                            }
                        }, k = function (a) {
                            try {
                                e.resolve((c || i)(a))
                            } catch (d) {
                                b(d), e.reject(d)
                            }
                        };
                        return g ? g.push([f, k]) : j.then(f, k), e.promise
                    }
                }
            }, k
        }, e = function (b) {
            return b && b.then ? b : {
                then: function (c) {
                    var e = d();
                    return a(function () {
                        e.resolve(c(b))
                    }), e.promise
                }
            }
        }, f = function (b) {
            return {
                then: function (c, e) {
                    var f = d();
                    return a(function () {
                        f.resolve((e || i)(b))
                    }), f.promise
                }
            }
        }, g = function (c, g, j) {
            var k = d(), l, m = function (a) {
                try {
                    return (g || h)(a)
                } catch (c) {
                    return b(c), f(c)
                }
            }, n = function (a) {
                try {
                    return (j || i)(a)
                } catch (c) {
                    return b(c), f(c)
                }
            };
            return a(function () {
                e(c).then(function (a) {
                    if (l) return;
                    l = !0, k.resolve(e(a).then(m, n))
                }, function (a) {
                    if (l) return;
                    l = !0, k.resolve(n(a))
                })
            }), k.promise
        };
        return {defer: d, reject: f, when: g, all: j}
    }

    function Yc() {
        var a = {};
        this.when = function (b, c) {
            a[b] = y({reloadOnSearch: !0}, c);
            if (b) {
                var d = b[b.length - 1] == "/" ? b.substr(0, b.length - 1) : b + "/";
                a[d] = {redirectTo: b}
            }
            return this
        }, this.otherwise = function (a) {
            return this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (b, c, d, e, f, g, h) {
            function k(a, b) {
                b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                var c = "", d = [], e = {}, f = /:(\w+)/g, g, h = 0;
                while ((g = f.exec(b)) !== null) c += b.slice(h, g.index), c += "([^\\/]*)", d.push(g[1]), h = f.lastIndex;
                c += b.substr(h);
                var i = a.match(new RegExp(c));
                return i && t(d, function (a, b) {
                    e[a] = i[b + 1]
                }), i ? e : null
            }

            function l() {
                var a = m(), k = j.current;
                if (a && k && a.$route === k.$route && _(a.pathParams, k.pathParams) && !a.reloadOnSearch && !i) k.params = a.params, Z(k.params, d), b.$broadcast("$routeUpdate", k); else if (a || k) i = !1, b.$broadcast("$routeChangeStart", a, k), j.current = a, a && a.redirectTo && (H(a.redirectTo) ? c.path(n(a.redirectTo, a.params)).search(a.params).replace() : c.url(a.redirectTo(a.pathParams, c.path(), c.search())).replace()), e.when(a).then(function () {
                    if (a) {
                        var b = [], c = [], d;
                        return t(a.resolve || {}, function (a, d) {
                            b.push(d), c.push(H(a) ? f.get(a) : f.invoke(a))
                        }), F(d = a.template) || F(d = a.templateUrl) && (d = g.get(d, {cache: h}).then(function (a) {
                            return a.data
                        })), F(d) && (b.push("$template"), c.push(d)), e.all(c).then(function (a) {
                            var c = {};
                            return t(a, function (a, d) {
                                c[b[d]] = a
                            }), c
                        })
                    }
                }).then(function (c) {
                    a == j.current && (a && (a.locals = c, Z(a.params, d)), b.$broadcast("$routeChangeSuccess", a, k))
                }, function (c) {
                    a == j.current && b.$broadcast("$routeChangeError", a, k, c)
                })
            }

            function m() {
                var b, d;
                return t(a, function (a, e) {
                    !d && (b = k(c.path(), e)) && (d = A(a, {
                        params: y({}, c.search(), b),
                        pathParams: b
                    }), d.$route = a)
                }), d || a[null] && A(a[null], {params: {}, pathParams: {}})
            }

            function n(a, b) {
                var c = [];
                return t((a || "").split(":"), function (a, d) {
                    if (d == 0) c.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        c.push(b[f]), c.push(e[2] || ""), delete b[f]
                    }
                }), c.join("")
            }

            var i = !1, j = {
                routes: a, reload: function () {
                    i = !0, b.$evalAsync(l)
                }
            };
            return b.$on("$locationChangeSuccess", l), j
        }]
    }

    function Zc() {
        this.$get = D({})
    }

    function $c() {
        var a = 10;
        this.digestTtl = function (b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", function (b, c, d) {
            function e() {
                this.$id = x(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$listeners = {}
            }

            function g(a) {
                if (f.$$phase) throw i(f.$$phase + " already in progress");
                f.$$phase = a
            }

            function h() {
                f.$$phase = null
            }

            function j(a, b) {
                var c = d(a);
                return sb(c, b), c
            }

            function k() {
            }

            e.prototype = {
                $new: function (a) {
                    var b, c;
                    if (L(a)) throw i("API-CHANGE: Use $controller to instantiate controllers.");
                    return a ? (c = new e, c.$root = this.$root) : (b = function () {
                    }, b.prototype = this, c = new b, c.$id = x()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$asyncQueue = [], c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
                }, $watch: function (a, b, c) {
                    var d = this, e = j(a, "watch"), f = d.$$watchers, g = {fn: b, last: k, get: e, exp: a, eq: !!c};
                    if (!L(b)) {
                        var h = j(b || B, "listener");
                        g.fn = function (a, b, c) {
                            h(c)
                        }
                    }
                    return f || (f = d.$$watchers = []), f.unshift(g), function () {
                        X(f, g)
                    }
                }, $digest: function () {
                    var b, d, e, f, j, l, m, n = a, o, p, q = this, r = [], s, t;
                    g("$digest");
                    do {
                        m = !1, p = q;
                        do {
                            j = p.$$asyncQueue;
                            while (j.length) try {
                                p.$eval(j.shift())
                            } catch (u) {
                                c(u)
                            }
                            if (f = p.$$watchers) {
                                l = f.length;
                                while (l--) try {
                                    b = f[l], (d = b.get(p)) !== (e = b.last) && !(b.eq ? _(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)) && (m = !0, b.last = b.eq ? Z(d) : d, b.fn(d, e === k ? d : e, p), n < 5 && (s = 4 - n, r[s] || (r[s] = []), t = L(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp, t += "; newVal: " + eb(d) + "; oldVal: " + eb(e), r[s].push(t)))
                                } catch (u) {
                                    c(u)
                                }
                            }
                            if (!(o = p.$$childHead || p !== q && p.$$nextSibling)) while (p !== q && !(o = p.$$nextSibling)) p = p.$parent
                        } while (p = o);
                        if (m && !(n--)) throw h(), i(a + " $digest() iterations reached. Aborting!\n" + "Watchers fired in the last 5 iterations: " + eb(r))
                    } while (m || j.length);
                    h()
                }, $destroy: function () {
                    if (f == this || this.$$destroyed) return;
                    var a = this.$parent;
                    this.$broadcast("$destroy"), this.$$destroyed = !0, a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                }, $eval: function (a, b) {
                    return d(a)(this, b)
                }, $evalAsync: function (a) {
                    this.$$asyncQueue.push(a)
                }, $apply: function (a) {
                    try {
                        return g("$apply"), this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        h();
                        try {
                            f.$digest()
                        } catch (b) {
                            throw c(b), b
                        }
                    }
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    return c || (this.$$listeners[a] = c = []), c.push(b), function () {
                        c[W(c, b)] = null
                    }
                }, $emit: function (a, b) {
                    var d = [], e, f = this, g = !1, h = {
                        name: a, targetScope: f, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, i = ab([h], arguments, 1), j, k;
                    do {
                        e = f.$$listeners[a] || d, h.currentScope = f;
                        for (j = 0, k = e.length; j < k; j++) {
                            if (!e[j]) {
                                e.splice(j, 1), j--, k--;
                                continue
                            }
                            try {
                                e[j].apply(null, i);
                                if (g) return h
                            } catch (l) {
                                c(l)
                            }
                        }
                        f = f.$parent
                    } while (f);
                    return h
                }, $broadcast: function (a, b) {
                    var d = this, e = d, f = d, g = {
                        name: a, targetScope: d, preventDefault: function () {
                            g.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, h = ab([g], arguments, 1), i, j, k;
                    do {
                        e = f, g.currentScope = e, i = e.$$listeners[a] || [];
                        for (j = 0, k = i.length; j < k; j++) {
                            if (!i[j]) {
                                i.splice(j, 1), j--, k--;
                                continue
                            }
                            try {
                                i[j].apply(null, h)
                            } catch (l) {
                                c(l)
                            }
                        }
                        if (!(f = e.$$childHead || e !== d && e.$$nextSibling)) while (e !== d && !(f = e.$$nextSibling)) e = e.$parent
                    } while (e = f);
                    return g
                }
            };
            var f = new e;
            return f
        }]
    }

    function _c() {
        this.$get = ["$window", function (a) {
            var b = {}, c = z((/android (\d+)/.exec(d(a.navigator.userAgent)) || [])[1]);
            return {
                history: !(!a.history || !a.history.pushState || c < 4),
                hashchange: "onhashchange" in a && (!a.document.documentMode || a.document.documentMode > 7),
                hasEvent: function (c) {
                    if (c == "input" && j == 9) return !1;
                    if (E(b[c])) {
                        var d = a.document.createElement("div");
                        b[c] = "on" + c in d
                    }
                    return b[c]
                },
                csp: !1
            }
        }]
    }

    function ad() {
        this.$get = D(a)
    }

    function bd(a) {
        var b = {}, c, e, f;
        return a ? (t(a.split("\n"), function (a) {
            f = a.indexOf(":"), c = d(Q(a.substr(0, f))), e = Q(a.substr(f + 1)), c && (b[c] ? b[c] += ", " + e : b[c] = e)
        }), b) : b
    }

    function cd(a) {
        var b = G(a) ? a : c;
        return function (c) {
            return b || (b = bd(a)), c ? b[d(c)] || null : b
        }
    }

    function dd(a, b, c) {
        return L(c) ? c(a, b) : (t(c, function (c) {
            a = c(a, b)
        }), a)
    }

    function ed(a) {
        return 200 <= a && a < 300
    }

    function fd() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, f = /^\)\]\}',?\n/, g = this.defaults = {
            transformResponse: [function (c) {
                return H(c) && (c = c.replace(f, ""), a.test(c) && b.test(c) && (c = fb(c, !0))), c
            }],
            transformRequest: [function (a) {
                return G(a) && !O(a) ? eb(a) : a
            }],
            headers: {
                common: {Accept: "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest"},
                post: {"Content-Type": "application/json;charset=utf-8"},
                put: {"Content-Type": "application/json;charset=utf-8"}
            }
        }, h = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, f, i, j, k) {
            function n(a) {
                function n(a) {
                    var b = y({}, a, {data: dd(a.data, a.headers, f)});
                    return ed(a.status) ? b : j.reject(b)
                }

                a.method = e(a.method);
                var c = a.transformRequest || g.transformRequest, f = a.transformResponse || g.transformResponse,
                    h = g.headers,
                    i = y({"X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]}, h.common, h[d(a.method)], a.headers),
                    k = dd(a.data, cd(i), c), l;
                return E(a.data) && delete i["Content-Type"], l = q(a, k, i), l = l.then(n, n), t(m, function (a) {
                    l = a(l)
                }), l.success = function (b) {
                    return l.then(function (c) {
                        b(c.data, c.status, c.headers, a)
                    }), l
                }, l.error = function (b) {
                    return l.then(null, function (c) {
                        b(c.data, c.status, c.headers, a)
                    }), l
                }, l
            }

            function o(a) {
                t(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(y(c || {}, {method: a, url: b}))
                    }
                })
            }

            function p(a) {
                t(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(y(d || {}, {method: a, url: b, data: c}))
                    }
                })
            }

            function q(b, c, d) {
                function m(a, b, c) {
                    g && (ed(a) ? g.put(k, [a, b, bd(c)]) : g.remove(k)), o(b, a, c), i.$apply()
                }

                function o(a, c, d) {
                    c = Math.max(c, 0), (ed(c) ? e.resolve : e.reject)({data: a, status: c, headers: cd(d), config: b})
                }

                function p() {
                    var a = W(n.pendingRequests, b);
                    a !== -1 && n.pendingRequests.splice(a, 1)
                }

                var e = j.defer(), f = e.promise, g, h, k = r(b.url, b.params);
                n.pendingRequests.push(b), f.then(p, p), b.cache && b.method == "GET" && (g = G(b.cache) ? b.cache : l);
                if (g) {
                    h = g.get(k);
                    if (h) {
                        if (h.then) return h.then(p, p), h;
                        K(h) ? o(h[1], h[0], Z(h[2])) : o(h, 200, {})
                    } else g.put(k, f)
                }
                return h || a(b.method, k, c, m, d, b.timeout, b.withCredentials), f
            }

            function r(a, b) {
                if (!b) return a;
                var d = [];
                return v(b, function (a, b) {
                    if (a == null || a == c) return;
                    G(a) && (a = eb(a)), d.push(encodeURIComponent(b) + "=" + encodeURIComponent(a))
                }), a + (a.indexOf("?") == -1 ? "?" : "&") + d.join("&")
            }

            var l = f("$http"), m = [];
            return t(h, function (a) {
                m.push(H(a) ? k.get(a) : k.invoke(a))
            }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
        }]
    }

    function hd() {
        this.$get = ["$browser", "$window", "$document", function (a, b, c) {
            return id(a, gd, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""))
        }]
    }

    function id(a, b, c, e, f, g) {
        function h(a, b) {
            var c = f.createElement("script"), d = function () {
                f.body.removeChild(c), b && b()
            };
            c.type = "text/javascript", c.src = a, j ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d, f.body.appendChild(c)
        }

        return function (f, i, j, k, l, m, n) {
            function r(b, c, d, e) {
                var f = (i.match(uc) || ["", g])[1];
                c = f == "file" ? d ? 200 : 404 : c, c = c == 1223 ? 204 : c, b(c, d, e), a.$$completeOutstandingRequest(B)
            }

            a.$$incOutstandingRequestCount(), i = i || a.url();
            if (d(f) == "jsonp") {
                var o = "_" + (e.counter++).toString(36);
                e[o] = function (a) {
                    e[o].data = a
                }, h(i.replace("JSON_CALLBACK", "angular.callbacks." + o), function () {
                    e[o].data ? r(k, 200, e[o].data) : r(k, -2), delete e[o]
                })
            } else {
                var p = new b;
                p.open(f, i, !0), t(l, function (a, b) {
                    a && p.setRequestHeader(b, a)
                });
                var q;
                p.onreadystatechange = function () {
                    p.readyState == 4 && r(k, q || p.status, p.responseText, p.getAllResponseHeaders())
                }, n && (p.withCredentials = !0), p.send(j || ""), m > 0 && c(function () {
                    q = -1, p.abort()
                }, m)
            }
        }
    }

    function jd() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (a) {
                    return a === 1 ? "one" : "other"
                }
            }
        }
    }

    function kd() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (a, b, c, d) {
            function f(f, g, h) {
                var i = c.defer(), j = i.promise, k = F(h) && !h, l, m;
                return l = b.defer(function () {
                    try {
                        i.resolve(f())
                    } catch (b) {
                        i.reject(b), d(b)
                    }
                    k || a.$apply()
                }, g), m = function () {
                    delete e[j.$$timeoutId]
                }, j.$$timeoutId = l, e[l] = i, j.then(m, m), j
            }

            var e = {};
            return f.cancel = function (a) {
                return a && a.$$timeoutId in e ? (e[a.$$timeoutId].reject("canceled"), b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function ld(a) {
        function c(c, d) {
            return a.factory(c + b, d)
        }

        var b = "Filter";
        this.register = c, this.$get = ["$injector", function (a) {
            return function (c) {
                return a.get(c + b)
            }
        }], c("currency", nd), c("date", zd), c("filter", md), c("json", Ad), c("limitTo", Dd), c("lowercase", Bd), c("number", od), c("orderBy", Ed), c("uppercase", Cd)
    }

    function md() {
        return function (a, b) {
            if (a instanceof Array) {
                var c = [];
                c.check = function (a) {
                    for (var b = 0; b < c.length; b++) if (!c[b](a)) return !1;
                    return !0
                };
                var d = function (a, b) {
                    if (b.charAt(0) === "!") return !d(a, b.substr(1));
                    switch (typeof a) {
                        case"boolean":
                        case"number":
                        case"string":
                            return ("" + a).toLowerCase().indexOf(b) > -1;
                        case"object":
                            for (var c in a) if (c.charAt(0) !== "$" && d(a[c], b)) return !0;
                            return !1;
                        case"array":
                            for (var e = 0; e < a.length; e++) if (d(a[e], b)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof b) {
                    case"boolean":
                    case"number":
                    case"string":
                        b = {$: b};
                    case"object":
                        for (var e in b) e == "$" ? function () {
                            var a = ("" + b[e]).toLowerCase();
                            if (!a) return;
                            c.push(function (b) {
                                return d(b, a)
                            })
                        }() : function () {
                            var a = e, f = ("" + b[e]).toLowerCase();
                            if (!f) return;
                            c.push(function (b) {
                                return d(Rc(b, a), f)
                            })
                        }();
                        break;
                    case"function":
                        c.push(b);
                        break;
                    default:
                        return a
                }
                var f = [];
                for (var g = 0; g < a.length; g++) {
                    var h = a[g];
                    c.check(h) && f.push(h)
                }
                return f
            }
            return a
        }
    }

    function nd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return E(c) && (c = b.CURRENCY_SYM), qd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
        }
    }

    function od(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return qd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function qd(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = a < 0;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (g.indexOf("e") !== -1) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && k[2] == "-" && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
        }
        if (!j) {
            var l = (g.split(pd)[1] || "").length;
            E(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
            var m = Math.pow(10, e);
            a = Math.round(a * m) / m;
            var n = ("" + a).split(pd), o = n[0];
            n = n[1] || "";
            var p = 0, q = b.lgSize, r = b.gSize;
            if (o.length >= q + r) {
                p = o.length - q;
                for (var s = 0; s < p; s++) (p - s) % r === 0 && s !== 0 && (h += c), h += o.charAt(s)
            }
            for (s = p; s < o.length; s++) (o.length - s) % q === 0 && s !== 0 && (h += c), h += o.charAt(s);
            while (n.length < e) n += "0";
            e && (h += d + n.substr(0, e))
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
    }

    function rd(a, b, c) {
        var d = "";
        a < 0 && (d = "-", a = -a), a = "" + a;
        while (a.length < b) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function sd(a, b, c, d) {
        return function (e) {
            var f = e["get" + a]();
            if (c > 0 || f > -c) f += c;
            return f === 0 && c == -12 && (f = 12), rd(f, b, d)
        }
    }

    function td(a, b) {
        return function (c, d) {
            var f = c["get" + a](), g = e(b ? "SHORT" + a : a);
            return d[g][f]
        }
    }

    function ud(a) {
        var b = a.getTimezoneOffset();
        return rd(b / 60, 2) + rd(Math.abs(b % 60), 2)
    }

    function vd(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function zd(a) {
        function c(a) {
            var c;
            if (c = a.match(b)) {
                var d = new Date(0), e = 0, f = 0;
                return c[9] && (e = z(c[9] + c[10]), f = z(c[9] + c[11])), d.setUTCFullYear(z(c[1]), z(c[2]) - 1, z(c[3])), d.setUTCHours(z(c[4] || 0) - e, z(c[5] || 0) - f, z(c[6] || 0), z(c[7] || 0)), d
            }
            return a
        }

        var b = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (b, d) {
            var e = "", f = [], g, h;
            d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, H(b) && (yd.test(b) ? b = z(b) : b = c(b)), I(b) && (b = new Date(b));
            if (!J(b)) return b;
            while (d) h = xd.exec(d), h ? (f = ab(f, h, 1), d = f.pop()) : (f.push(d), d = null);
            return t(f, function (c) {
                g = wd[c], e += g ? g(b, a.DATETIME_FORMATS) : c.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), e
        }
    }

    function Ad() {
        return function (a) {
            return eb(a, !0)
        }
    }

    function Dd() {
        return function (a, b) {
            if (a instanceof Array) {
                b = z(b);
                var c = [], d, e;
                if (!!a && a instanceof Array) {
                    b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (d = 0, e = b) : (d = a.length + b, e = a.length);
                    for (; d < e; d++) c.push(a[d]);
                    return c
                }
                return c
            }
            return a
        }
    }

    function Ed(a) {
        return function (b, c, d) {
            function g(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0) return e
                }
                return 0
            }

            function h(a, b) {
                return gb(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function i(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (c == "string" && (a = a.toLowerCase()), c == "string" && (b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (b instanceof Array) {
                if (!c) return b;
                c = K(c) ? c : [c], c = T(c, function (b) {
                    var c = !1, d = b || C;
                    if (H(b)) {
                        if (b.charAt(0) == "+" || b.charAt(0) == "-") c = b.charAt(0) == "-", b = b.substring(1);
                        d = a(b)
                    }
                    return h(function (a, b) {
                        return i(d(a), d(b))
                    }, c)
                });
                var e = [];
                for (var f = 0; f < b.length; f++) e.push(b[f]);
                return e.sort(h(g, d))
            }
            return b
        }
    }

    function Fd(a) {
        return L(a) && (a = {link: a}), a.restrict = a.restrict || "AC", D(a)
    }

    function Jd(a, b) {
        function g(b, c) {
            c = c ? "-" + pb(c, "-") : "", a.removeClass((b ? $d : Zd) + c).addClass((b ? Zd : $d) + c)
        }

        var c = this, d = a.parent().controller("form") || Id, e = 0, f = c.$error = {};
        c.$name = b.name, c.$dirty = !1, c.$pristine = !0, c.$valid = !0, c.$invalid = !1, d.$addControl(c), a.addClass(_d), g(!0), c.$addControl = function (a) {
            a.$name && !c.hasOwnProperty(a.$name) && (c[a.$name] = a)
        }, c.$removeControl = function (a) {
            a.$name && c[a.$name] === a && delete c[a.$name], t(f, function (b, d) {
                c.$setValidity(d, !0, a)
            })
        }, c.$setValidity = function (a, b, h) {
            var i = f[a];
            if (b) i && (X(i, h), i.length || (e--, e || (g(b), c.$valid = !0, c.$invalid = !1), f[a] = !1, g(!0, a), d.$setValidity(a, !0, c))); else {
                e || g(b);
                if (i) {
                    if (V(i, h)) return
                } else f[a] = i = [], e++, g(!1, a), d.$setValidity(a, !1, c);
                i.push(h), c.$valid = !1, c.$invalid = !0
            }
        }, c.$setDirty = function () {
            a.removeClass(_d).addClass(ae), c.$dirty = !0, c.$pristine = !1, d.$setDirty()
        }
    }

    function Rd(a) {
        return E(a) || a === "" || a === null || a !== a
    }

    function Sd(a, b, d, e, f, g) {
        var h = function () {
            var c = Q(b.val());
            e.$viewValue !== c && a.$apply(function () {
                e.$setViewValue(c)
            })
        };
        if (f.hasEvent("input")) b.bind("input", h); else {
            var j;
            b.bind("keydown", function (a) {
                var b = a.keyCode;
                if (b === 91 || 15 < b && b < 19 || 37 <= b && b <= 40) return;
                j || (j = g.defer(function () {
                    h(), j = null
                }))
            }), b.bind("change", h)
        }
        e.$render = function () {
            b.val(Rd(e.$viewValue) ? "" : e.$viewValue)
        };
        var k = d.ngPattern, l, m = function (a, b) {
            return Rd(b) || a.test(b) ? (e.$setValidity("pattern", !0), b) : (e.$setValidity("pattern", !1), c)
        };
        k && (k.match(/^\/(.*)\/$/) ? (k = new RegExp(k.substr(1, k.length - 2)), l = function (a) {
            return m(k, a)
        }) : l = function (b) {
            var c = a.$eval(k);
            if (!c || !c.test) throw new i("Expected " + k + " to be a RegExp but was " + c);
            return m(c, b)
        }, e.$formatters.push(l), e.$parsers.push(l));
        if (d.ngMinlength) {
            var n = z(d.ngMinlength), o = function (a) {
                return !Rd(a) && a.length < n ? (e.$setValidity("minlength", !1), c) : (e.$setValidity("minlength", !0), a)
            };
            e.$parsers.push(o), e.$formatters.push(o)
        }
        if (d.ngMaxlength) {
            var p = z(d.ngMaxlength), q = function (a) {
                return !Rd(a) && a.length > p ? (e.$setValidity("maxlength", !1), c) : (e.$setValidity("maxlength", !0), a)
            };
            e.$parsers.push(q), e.$formatters.push(q)
        }
    }

    function Td(a, b, d, e, f, g) {
        Sd(a, b, d, e, f, g), e.$parsers.push(function (a) {
            var b = Rd(a);
            return b || Pd.test(a) ? (e.$setValidity("number", !0), a === "" ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), e.$formatters.push(function (a) {
            return Rd(a) ? "" : "" + a
        });
        if (d.min) {
            var h = parseFloat(d.min), i = function (a) {
                return !Rd(a) && a < h ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
            };
            e.$parsers.push(i), e.$formatters.push(i)
        }
        if (d.max) {
            var j = parseFloat(d.max), k = function (a) {
                return !Rd(a) && a > j ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
            };
            e.$parsers.push(k), e.$formatters.push(k)
        }
        e.$formatters.push(function (a) {
            return Rd(a) || I(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
        })
    }

    function Ud(a, b, d, e, f, g) {
        Sd(a, b, d, e, f, g);
        var h = function (a) {
            return Rd(a) || Nd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function Vd(a, b, d, e, f, g) {
        Sd(a, b, d, e, f, g);
        var h = function (a) {
            return Rd(a) || Od.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function Wd(a, b, c, d) {
        E(c.name) && b.attr("name", x()), b.bind("click", function () {
            b[0].checked && a.$apply(function () {
                d.$setViewValue(c.value)
            })
        }), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function Xd(a, b, c, d) {
        var e = c.ngTrueValue, f = c.ngFalseValue;
        H(e) || (e = !0), H(f) || (f = !1), b.bind("click", function () {
            a.$apply(function () {
                d.$setViewValue(b[0].checked)
            })
        }), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$formatters.push(function (a) {
            return a === e
        }), d.$parsers.push(function (a) {
            return a ? e : f
        })
    }

    function le(a, b) {
        return a = "ngClass" + a, Fd(function (c, d, e) {
            function f(a, d) {
                if (b === !0 || c.$index % 2 === b) d && a !== d && g(d), h(a)
            }

            function g(a) {
                G(a) && !K(a) && (a = T(a, function (a, b) {
                    if (a) return b
                })), d.removeClass(K(a) ? a.join(" ") : a)
            }

            function h(a) {
                G(a) && !K(a) && (a = T(a, function (a, b) {
                    if (a) return b
                })), a && d.addClass(K(a) ? a.join(" ") : a)
            }

            c.$watch(e[a], f, !0), e.$observe("class", function (b) {
                var d = c.$eval(e[a]);
                f(d, d)
            }), a !== "ngClass" && c.$watch("$index", function (d, f) {
                var i = d % 2;
                i !== f % 2 && (i == b ? h(c.$eval(e[a])) : g(c.$eval(e[a])))
            })
        })
    }

    "use strict";
    var d = function (a) {
        return H(a) ? a.toLowerCase() : a
    }, e = function (a) {
        return H(a) ? a.toUpperCase() : a
    }, f = function (a) {
        return H(a) ? a.replace(/[A-Z]/g, function (a) {
            return h(a.charCodeAt(0) | 32)
        }) : a
    }, g = function (a) {
        return H(a) ? a.replace(/[a-z]/g, function (a) {
            return h(a.charCodeAt(0) & -33)
        }) : a
    };
    "i" !== "I".toLowerCase() && (d = f, e = g);
    var i = a.Error, j = z((/msie (\d+)/.exec(d(navigator.userAgent)) || [])[1]), k, l, m = [].slice, n = [].push,
        o = Object.prototype.toString, p = a.angular || (a.angular = {}), q, r, s = ["0", "0", "0"];
    B.$inject = [], C.$inject = [], j < 9 ? r = function (a) {
        return a = a.nodeName ? a : a[0], a.scopeName && a.scopeName != "HTML" ? e(a.scopeName + ":" + a.nodeName) : a.nodeName
    } : r = function (a) {
        return a.nodeName ? a.nodeName : a[0].nodeName
    };
    var ob = /[A-Z]/g, ub = {full: "1.0.4", major: 1, minor: 0, dot: 4, codeName: "bewildering-hair"},
        wb = Gb.cache = {}, xb = Gb.expando = "ng-" + (new Date).getTime(), yb = 1,
        zb = a.document.addEventListener ? function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : function (a, b, c) {
            a.attachEvent("on" + b, c)
        }, Ab = a.document.removeEventListener ? function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            a.detachEvent("on" + b, c)
        }, Cb = /([\:\-\_]+(.))/g, Db = /^moz([A-Z])/, Tb = Gb.prototype = {
            ready: function (b) {
                function d() {
                    if (c) return;
                    c = !0, b()
                }

                var c = !1;
                this.bind("DOMContentLoaded", d), Gb(a).bind("load", d)
            }, toString: function () {
                var a = [];
                return t(this, function (b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            }, eq: function (a) {
                return a >= 0 ? k(this[a]) : k(this[this.length + a])
            }, length: 0, push: n, sort: [].sort, splice: [].splice
        }, Ub = {};
    t("multiple,selected,checked,disabled,readOnly,required".split(","), function (a) {
        Ub[d(a)] = a
    });
    var Vb = {};
    t("input,select,option,textarea,button,form".split(","), function (a) {
        Vb[e(a)] = !0
    }), t({
        data: Mb, inheritedData: Sb, scope: function (a) {
            return Sb(a, "$scope")
        }, controller: Rb, injector: function (a) {
            return Sb(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: Nb, css: function (a, b, d) {
            b = Eb(b);
            if (!F(d)) {
                var e;
                return j <= 8 && (e = a.currentStyle && a.currentStyle[b], e === "" && (e = "auto")), e = e || a.style[b], j <= 8 && (e = e === "" ? c : e), e
            }
            a.style[b] = d
        }, attr: function (a, b, e) {
            var f = d(b);
            if (Ub[f]) {
                if (!F(e)) return a[b] || (a.attributes.getNamedItem(b) || B).specified ? f : c;
                e ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
            } else if (F(e)) a.setAttribute(b, e); else if (a.getAttribute) {
                var g = a.getAttribute(b, 2);
                return g === null ? c : g
            }
        }, prop: function (a, b, c) {
            if (!F(c)) return a[b];
            a[b] = c
        }, text: y(j < 9 ? function (a, b) {
            if (a.nodeType == 1) {
                if (E(b)) return a.innerText;
                a.innerText = b
            } else {
                if (E(b)) return a.nodeValue;
                a.nodeValue = b
            }
        } : function (a, b) {
            if (E(b)) return a.textContent;
            a.textContent = b
        }, {$dv: ""}), val: function (a, b) {
            if (E(b)) return a.value;
            a.value = b
        }, html: function (a, b) {
            if (E(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) Ib(d[c]);
            a.innerHTML = b
        }
    }, function (a, b) {
        Gb.prototype[b] = function (b, d) {
            var e, f;
            if ((a.length == 2 && a !== Nb && a !== Rb ? b : d) !== c) {
                for (e = 0; e < this.length; e++) a(this[e], b, d);
                return this
            }
            if (G(b)) {
                for (e = 0; e < this.length; e++) if (a === Mb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                return this
            }
            return this.length ? a(this[0], b, d) : a.$dv
        }
    }), t({
        removeData: Kb, dealoc: Ib, bind: function Ne(a, b, c) {
            var d = Lb(a, "events"), e = Lb(a, "handle");
            d || Lb(a, "events", d = {}), e || Lb(a, "handle", e = Xb(a, d)), t(b.split(" "), function (b) {
                var f = d[b];
                if (!f) {
                    if (b == "mouseenter" || b == "mouseleave") {
                        var g = 0;
                        d.mouseenter = [], d.mouseleave = [], Ne(a, "mouseover", function (a) {
                            g++, g == 1 && e(a, "mouseenter")
                        }), Ne(a, "mouseout", function (a) {
                            g--, g == 0 && e(a, "mouseleave")
                        })
                    } else zb(a, b, e), d[b] = [];
                    f = d[b]
                }
                f.push(c)
            })
        }, unbind: Jb, replaceWith: function (a, b) {
            var c, d = a.parentNode;
            Ib(a), t(new Gb(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        }, children: function (a) {
            var b = [];
            return t(a.childNodes, function (a) {
                a.nodeType === 1 && b.push(a)
            }), b
        }, contents: function (a) {
            return a.childNodes || []
        }, append: function (a, b) {
            t(new Gb(b), function (b) {
                a.nodeType === 1 && a.appendChild(b)
            })
        }, prepend: function (a, b) {
            if (a.nodeType === 1) {
                var c = a.firstChild;
                t(new Gb(b), function (b) {
                    c ? a.insertBefore(b, c) : (a.appendChild(b), c = b)
                })
            }
        }, wrap: function (a, b) {
            b = k(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        }, remove: function (a) {
            Ib(a);
            var b = a.parentNode;
            b && b.removeChild(a)
        }, after: function (a, b) {
            var c = a, d = a.parentNode;
            t(new Gb(b), function (a) {
                d.insertBefore(a, c.nextSibling), c = a
            })
        }, addClass: Pb, removeClass: Ob, toggleClass: function (a, b, c) {
            E(c) && (c = !Nb(a, b)), (c ? Pb : Ob)(a, b)
        }, parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, next: function (a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            var b = a.nextSibling;
            while (b != null && b.nodeType !== 1) b = b.nextSibling;
            return b
        }, find: function (a, b) {
            return a.getElementsByTagName(b)
        }, clone: Hb, triggerHandler: function (a, b) {
            var c = (Lb(a, "events") || {})[b];
            t(c, function (b) {
                b.call(a, null)
            })
        }
    }, function (a, b) {
        Gb.prototype[b] = function (b, d) {
            var e;
            for (var f = 0; f < this.length; f++) e == c ? (e = a(this[f], b, d), e !== c && (e = k(e))) : Qb(e, a(this[f], b, d));
            return e == c ? this : e
        }
    }), Zb.prototype = {
        put: function (a, b) {
            this[Yb(a)] = b
        }, get: function (a) {
            return this[Yb(a)]
        }, remove: function (a) {
            var b = this[a = Yb(a)];
            return delete this[a], b
        }
    }, $b.prototype = {
        push: function (a, b) {
            var c = this[a = Yb(a)];
            c ? c.push(b) : this[a] = [b]
        }, shift: function (a) {
            var b = this[a = Yb(a)];
            if (b) return b.length == 1 ? (delete this[a], b[0]) : b.shift()
        }, peek: function (a) {
            var b = this[Yb(a)];
            if (b) return b[0]
        }
    };
    var _b = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, ac = /,/, bc = /^\s*(_?)(\S+?)\1\s*$/,
        cc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, kc = "Non-assignable model expression: ";
    lc.$inject = ["$provide"];
    var mc = /^(x[\:\-_]|data[\:\-_])/i,
        uc = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        vc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, wc = vc, xc = {http: 80, https: 443, ftp: 21};
    Fc.prototype = {
        $$replace: !1, absUrl: Ic("$$absUrl"), url: function (a, b) {
            if (E(a)) return this.$$url;
            var c = vc.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
        }, protocol: Ic("$$protocol"), host: Ic("$$host"), port: Ic("$$port"), path: Jc("$$path", function (a) {
            return a.charAt(0) == "/" ? a : "/" + a
        }), search: function (a, b) {
            return E(a) ? this.$$search : (F(b) ? b === null ? delete this.$$search[a] : this.$$search[a] = b : this.$$search = H(a) ? ib(a) : a, this.$$compose(), this)
        }, hash: Jc("$$hash", C), replace: function () {
            return this.$$replace = !0, this
        }
    }, Gc.prototype = A(Fc.prototype), Hc.prototype = A(Gc.prototype);
    var Mc = {
            "null": function () {
                return null
            }, "true": function () {
                return !0
            }, "false": function () {
                return !1
            }, "undefined": B, "+": function (a, b, d, e) {
                return d = d(a, b), e = e(a, b), F(d) ? F(e) ? d + e : d : F(e) ? e : c
            }, "-": function (a, b, c, d) {
                return c = c(a, b), d = d(a, b), (F(c) ? c : 0) - (F(d) ? d : 0)
            }, "*": function (a, b, c, d) {
                return c(a, b) * d(a, b)
            }, "/": function (a, b, c, d) {
                return c(a, b) / d(a, b)
            }, "%": function (a, b, c, d) {
                return c(a, b) % d(a, b)
            }, "^": function (a, b, c, d) {
                return c(a, b) ^ d(a, b)
            }, "=": B, "==": function (a, b, c, d) {
                return c(a, b) == d(a, b)
            }, "!=": function (a, b, c, d) {
                return c(a, b) != d(a, b)
            }, "<": function (a, b, c, d) {
                return c(a, b) < d(a, b)
            }, ">": function (a, b, c, d) {
                return c(a, b) > d(a, b)
            }, "<=": function (a, b, c, d) {
                return c(a, b) <= d(a, b)
            }, ">=": function (a, b, c, d) {
                return c(a, b) >= d(a, b)
            }, "&&": function (a, b, c, d) {
                return c(a, b) && d(a, b)
            }, "||": function (a, b, c, d) {
                return c(a, b) || d(a, b)
            }, "&": function (a, b, c, d) {
                return c(a, b) & d(a, b)
            }, "|": function (a, b, c, d) {
                return d(a, b)(a, b, c(a, b))
            }, "!": function (a, b, c) {
                return !c(a, b)
            }
        }, Nc = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, Sc = {},
        gd = a.XMLHttpRequest || function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (b) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {
            }
            throw new i("This browser does not support XMLHttpRequest.")
        };
    ld.$inject = ["$provide"], nd.$inject = ["$locale"], od.$inject = ["$locale"];
    var pd = ".", wd = {
        yyyy: sd("FullYear", 4),
        yy: sd("FullYear", 2, 0, !0),
        y: sd("FullYear", 1),
        MMMM: td("Month"),
        MMM: td("Month", !0),
        MM: sd("Month", 2, 1),
        M: sd("Month", 1, 1),
        dd: sd("Date", 2),
        d: sd("Date", 1),
        HH: sd("Hours", 2),
        H: sd("Hours", 1),
        hh: sd("Hours", 2, -12),
        h: sd("Hours", 1, -12),
        mm: sd("Minutes", 2),
        m: sd("Minutes", 1),
        ss: sd("Seconds", 2),
        s: sd("Seconds", 1),
        EEEE: td("Day"),
        EEE: td("Day", !0),
        a: vd,
        Z: ud
    }, xd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, yd = /^\d+$/;
    zd.$inject = ["$locale"];
    var Bd = D(d), Cd = D(e);
    Ed.$inject = ["$parse"];
    var Gd = D({
        restrict: "E", compile: function (a, b) {
            return b.href || b.$set("href", ""), function (a, b) {
                b.bind("click", function (a) {
                    b.attr("href") || a.preventDefault()
                })
            }
        }
    }), Hd = {};
    t(Ub, function (a, b) {
        var c = nc("ng-" + b);
        Hd[c] = function () {
            return {
                priority: 100, compile: function () {
                    return function (a, d, e) {
                        a.$watch(e[c], function (c) {
                            e.$set(b, !!c)
                        })
                    }
                }
            }
        }
    }), t(["src", "href"], function (a) {
        var b = nc("ng-" + a);
        Hd[b] = function () {
            return {
                priority: 99, link: function (c, d, e) {
                    e.$observe(b, function (b) {
                        if (!b) return;
                        e.$set(a, b), j && d.prop(a, b)
                    })
                }
            }
        }
    });
    var Id = {$addControl: B, $removeControl: B, $setValidity: B, $setDirty: B};
    Jd.$inject = ["$element", "$attrs", "$scope"];
    var Kd = function (a) {
            return ["$timeout", function (b) {
                var d = {
                    name: "form", restrict: "E", controller: Jd, compile: function () {
                        return {
                            pre: function (a, d, e, f) {
                                if (!e.action) {
                                    var g = function (a) {
                                        a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                    };
                                    zb(d[0], "submit", g), d.bind("$destroy", function () {
                                        b(function () {
                                            Ab(d[0], "submit", g)
                                        }, 0, !1)
                                    })
                                }
                                var h = d.parent().controller("form"), i = e.name || e.ngForm;
                                i && (a[i] = f), h && d.bind("$destroy", function () {
                                    h.$removeControl(f), i && (a[i] = c), y(f, Id)
                                })
                            }
                        }
                    }
                };
                return a ? y(Z(d), {restrict: "EAC"}) : d
            }]
        }, Ld = Kd(), Md = Kd(!0),
        Nd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Od = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, Pd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Qd = {
            text: Sd,
            number: Td,
            url: Ud,
            email: Vd,
            radio: Wd,
            checkbox: Xd,
            hidden: B,
            button: B,
            submit: B,
            reset: B
        }, Yd = ["$browser", "$sniffer", function (a, b) {
            return {
                restrict: "E", require: "?ngModel", link: function (c, e, f, g) {
                    g && (Qd[d(f.type)] || Qd.text)(c, e, f, g, b, a)
                }
            }
        }], Zd = "ng-valid", $d = "ng-invalid", _d = "ng-pristine", ae = "ng-dirty",
        be = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, b, c, d, e) {
            function l(a, b) {
                b = b ? "-" + pb(b, "-") : "", d.removeClass((a ? $d : Zd) + b).addClass((a ? Zd : $d) + b)
            }

            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
            var f = e(c.ngModel), g = f.assign;
            if (!g) throw i(kc + c.ngModel + " (" + hb(d) + ")");
            this.$render = B;
            var h = d.inheritedData("$formController") || Id, j = 0, k = this.$error = {};
            d.addClass(_d), l(!0), this.$setValidity = function (a, b) {
                if (k[a] === !b) return;
                b ? (k[a] && j--, j || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, j++), k[a] = !b, l(b, a), h.$setValidity(a, b, this)
            }, this.$setViewValue = function (c) {
                this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, d.removeClass(_d).addClass(ae), h.$setDirty()), t(this.$parsers, function (a) {
                    c = a(c)
                }), this.$modelValue !== c && (this.$modelValue = c, g(a, c), t(this.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                }))
            };
            var m = this;
            a.$watch(function () {
                var c = f(a);
                if (m.$modelValue !== c) {
                    var d = m.$formatters, e = d.length;
                    m.$modelValue = c;
                    while (e--) c = d[e](c);
                    m.$viewValue !== c && (m.$viewValue = c, m.$render())
                }
            })
        }], ce = function () {
            return {
                require: ["ngModel", "^?form"], controller: be, link: function (a, b, c, d) {
                    var e = d[0], f = d[1] || Id;
                    f.$addControl(e), b.bind("$destroy", function () {
                        f.$removeControl(e)
                    })
                }
            }
        }, de = D({
            require: "ngModel", link: function (a, b, c, d) {
                d.$viewChangeListeners.push(function () {
                    a.$eval(c.ngChange)
                })
            }
        }), ee = function () {
            return {
                require: "?ngModel", link: function (a, b, c, d) {
                    if (!d) return;
                    c.required = !0;
                    var e = function (a) {
                        if (c.required && (Rd(a) || a === !1)) {
                            d.$setValidity("required", !1);
                            return
                        }
                        return d.$setValidity("required", !0), a
                    };
                    d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function () {
                        e(d.$viewValue)
                    })
                }
            }
        }, fe = function () {
            return {
                require: "ngModel", link: function (a, b, d, e) {
                    var f = /\/(.*)\//.exec(d.ngList), g = f && new RegExp(f[1]) || d.ngList || ",", h = function (a) {
                        var b = [];
                        return a && t(a.split(g), function (a) {
                            a && b.push(Q(a))
                        }), b
                    };
                    e.$parsers.push(h), e.$formatters.push(function (a) {
                        return K(a) ? a.join(", ") : c
                    })
                }
            }
        }, ge = /^(true|false|\d+)$/, he = function () {
            return {
                priority: 100, compile: function (a, b) {
                    return ge.test(b.ngValue) ? function (a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function (a, b, c) {
                        a.$watch(c.ngValue, function (b) {
                            c.$set("value", b, !1)
                        })
                    }
                }
            }
        }, ie = Fd(function (a, b, d) {
            b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function (d) {
                b.text(d == c ? "" : d)
            })
        }), je = ["$interpolate", function (a) {
            return function (b, c, d) {
                var e = a(c.attr(d.$attr.ngBindTemplate));
                c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function (a) {
                    c.text(a)
                })
            }
        }], ke = [function () {
            return function (a, b, c) {
                b.addClass("ng-binding").data("$binding", c.ngBindHtmlUnsafe), a.$watch(c.ngBindHtmlUnsafe, function (c) {
                    b.html(c || "")
                })
            }
        }], me = le("", !0), ne = le("Odd", 0), oe = le("Even", 1), pe = Fd({
            compile: function (a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }), qe = [function () {
            return {scope: !0, controller: "@"}
        }], re = ["$sniffer", function (a) {
            return {
                priority: 1e3, compile: function () {
                    a.csp = !0
                }
            }
        }], se = {};
    t("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function (a) {
        var b = nc("ng-" + a);
        se[b] = ["$parse", function (c) {
            return function (e, f, g) {
                var h = c(g[b]);
                f.bind(d(a), function (a) {
                    e.$apply(function () {
                        h(e, {$event: a})
                    })
                })
            }
        }]
    });
    var te = Fd(function (a, b, c) {
            b.bind("submit", function () {
                a.$apply(c.ngSubmit)
            })
        }), ue = ["$http", "$templateCache", "$anchorScroll", "$compile", function (a, b, c, d) {
            return {
                restrict: "ECA", terminal: !0, compile: function (e, f) {
                    var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                    return function (e, f) {
                        var j = 0, k, l = function () {
                            k && (k.$destroy(), k = null), f.html("")
                        };
                        e.$watch(g, function (m) {
                            var n = ++j;
                            m ? a.get(m, {cache: b}).success(function (a) {
                                if (n !== j) return;
                                k && k.$destroy(), k = e.$new(), f.html(a), d(f.contents())(k), F(i) && (!i || e.$eval(i)) && c(), k.$emit("$includeContentLoaded"), e.$eval(h)
                            }).error(function () {
                                n === j && l()
                            }) : l()
                        })
                    }
                }
            }
        }], ve = Fd({
            compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }), we = Fd({terminal: !0, priority: 1e3}), xe = ["$locale", "$interpolate", function (a, b) {
            var c = /{}/g;
            return {
                restrict: "EA", link: function (d, e, f) {
                    var g = f.count, h = e.attr(f.$attr.when), i = f.offset || 0, j = d.$eval(h), k = {},
                        l = b.startSymbol(), m = b.endSymbol();
                    t(j, function (a, d) {
                        k[d] = b(a.replace(c, l + g + "-" + i + m))
                    }), d.$watch(function () {
                        var c = parseFloat(d.$eval(g));
                        return isNaN(c) ? "" : (j[c] || (c = a.pluralCat(c - i)), k[c](d, e, !0))
                    }, function (b) {
                        e.text(b)
                    })
                }
            }
        }], ye = Fd({
            transclude: "element", priority: 1e3, terminal: !0, compile: function (a, b, c) {
                return function (a, b, d) {
                    var e = d.ngRepeat, f = e.match(/^\s*(.+)\s+in\s+(.*)\s*$/), g, h, j, k;
                    if (!f) throw i("Expected ngRepeat in form of '_item_ in _collection_' but got '" + e + "'.");
                    g = f[1], h = f[2], f = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!f) throw i("'item' in 'item in collection' should be identifier or (key, value) but got '" + g + "'.");
                    j = f[3] || f[1], k = f[2];
                    var l = new $b;
                    a.$watch(function (d) {
                        var e, f, g = d.$eval(h), i = b, m = new $b, n, o, p, q, r, s;
                        if (!K(g)) {
                            r = [];
                            for (p in g) g.hasOwnProperty(p) && p.charAt(0) != "$" && r.push(p);
                            r.sort()
                        } else r = g || [];
                        n = r.length;
                        for (e = 0, f = r.length; e < f; e++) p = g === r ? e : r[e], q = g[p], s = l.shift(q), s ? (o = s.scope, m.push(q, s), e === s.index ? i = s.element : (s.index = e, i.after(s.element), i = s.element)) : o = d.$new(), o[j] = q, k && (o[k] = p), o.$index = e, o.$first = e === 0, o.$last = e === n - 1, o.$middle = !o.$first && !o.$last, s || c(o, function (a) {
                            i.after(a), s = {scope: o, element: i = a, index: e}, m.push(q, s)
                        });
                        for (p in l) if (l.hasOwnProperty(p)) {
                            r = l[p];
                            while (r.length) q = r.pop(), q.element.remove(), q.scope.$destroy()
                        }
                        l = m
                    })
                }
            }
        }), ze = Fd(function (a, b, c) {
            a.$watch(c.ngShow, function (c) {
                b.css("display", gb(c) ? "" : "none")
            })
        }), Ae = Fd(function (a, b, c) {
            a.$watch(c.ngHide, function (c) {
                b.css("display", gb(c) ? "none" : "")
            })
        }), Be = Fd(function (a, b, c) {
            a.$watch(c.ngStyle, function (c, d) {
                d && c !== d && t(d, function (a, c) {
                    b.css(c, "")
                }), c && b.css(c)
            }, !0)
        }), Ce = "ng-switch", De = D({
            restrict: "EA", require: "ngSwitch", controller: function () {
                this.cases = {}
            }, link: function (a, b, c, d) {
                var e = c.ngSwitch || c.on, f, g, h;
                a.$watch(e, function (i) {
                    g && (h.$destroy(), g.remove(), g = h = null);
                    if (f = d.cases["!" + i] || d.cases["?"]) a.$eval(c.change), h = a.$new(), f(h, function (a) {
                        g = a, b.append(a)
                    })
                })
            }
        }), Ee = Fd({
            transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, b, c) {
                return function (a, d, e, f) {
                    f.cases["!" + b.ngSwitchWhen] = c
                }
            }
        }), Fe = Fd({
            transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, b, c) {
                return function (a, b, d, e) {
                    e.cases["?"] = c
                }
            }
        }), Ge = Fd({
            controller: ["$transclude", "$element", function (a, b) {
                a(function (a) {
                    b.append(a)
                })
            }]
        }),
        He = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function (a, b, c, d, e, f) {
            return {
                restrict: "ECA", terminal: !0, link: function (a, b, g) {
                    function j() {
                        h && (h.$destroy(), h = null)
                    }

                    function k() {
                        b.html(""), j()
                    }

                    function l() {
                        var g = c.current && c.current.locals, l = g && g.$template;
                        if (l) {
                            b.html(l), j();
                            var m = e(b.contents()), n = c.current, o;
                            h = n.scope = a.$new(), n.controller && (g.$scope = h, o = f(n.controller, g), b.contents().data("$ngControllerController", o)), m(h), h.$emit("$viewContentLoaded"), h.$eval(i), d()
                        } else k()
                    }

                    var h, i = g.onload || "";
                    a.$on("$routeChangeSuccess", l), l()
                }
            }
        }], Ie = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, c) {
                    if (c.type == "text/ng-template") {
                        var d = c.id, e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }], Je = D({terminal: !0}), Ke = ["$compile", "$parse", function (a, d) {
            var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                f = {$setViewValue: B};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, b, c) {
                    var d = this, e = {}, g = f, h, i;
                    d.databound = c.ngModel, d.init = function (a, b, c) {
                        g = a, h = b, i = c
                    }, d.addOption = function (b) {
                        e[b] = !0, g.$viewValue == b && (a.val(b), i.parent() && i.remove())
                    }, d.removeOption = function (a) {
                        this.hasOption(a) && (delete e[a], g.$viewValue == a && this.renderUnknownOption(a))
                    }, d.renderUnknownOption = function (b) {
                        var c = "? " + Yb(b) + " ?";
                        i.val(c), a.prepend(i), a.val(c), i.prop("selected", !0)
                    }, d.hasOption = function (a) {
                        return e.hasOwnProperty(a)
                    }, b.$on("$destroy", function () {
                        d.renderUnknownOption = B
                    })
                }],
                link: function (f, g, h, j) {
                    function A(a, b, c, d) {
                        c.$render = function () {
                            var a = c.$viewValue;
                            d.hasOption(a) ? (v.parent() && v.remove(), b.val(a), a === "" && q.prop("selected", !0)) : E(a) && q ? b.val("") : d.renderUnknownOption(a)
                        }, b.bind("change", function () {
                            a.$apply(function () {
                                v.parent() && v.remove(), c.$setViewValue(b.val())
                            })
                        })
                    }

                    function B(a, b, c) {
                        var d;
                        c.$render = function () {
                            var a = new Zb(c.$viewValue);
                            t(b.find("option"), function (b) {
                                b.selected = F(a.get(b.value))
                            })
                        }, a.$watch(function () {
                            _(d, c.$viewValue) || (d = Z(c.$viewValue), c.$render())
                        }), b.bind("change", function () {
                            a.$apply(function () {
                                var a = [];
                                t(b.find("option"), function (b) {
                                    b.selected && a.push(b.value)
                                }), c.$setViewValue(a)
                            })
                        })
                    }

                    function C(b, f, g) {
                        function w() {
                            var a = {"": []}, d = [""], e, h, i, o, w, x, y = g.$modelValue, z = t(b) || [],
                                A = l ? u(z) : z, B, C, D, E, F = {}, G, H = !1, I, J, K;
                            if (n) H = new Zb(y); else if (y === null || p) a[""].push({
                                selected: y === null,
                                id: "",
                                label: ""
                            }), H = !0;
                            for (E = 0; C = A.length, E < C; E++) F[k] = z[l ? F[l] = A[E] : E], e = m(b, F) || "", (h = a[e]) || (h = a[e] = [], d.push(e)), n ? G = H.remove(q(b, F)) != c : (G = y === q(b, F), H = H || G), K = j(b, F), K = K === c ? "" : K, h.push({
                                id: l ? A[E] : E,
                                label: K,
                                selected: G
                            });
                            !n && !H && a[""].unshift({id: "?", label: "", selected: !0});
                            for (D = 0, B = d.length; D < B; D++) {
                                e = d[D], h = a[e], v.length <= D ? (o = {
                                    element: s.clone().attr("label", e),
                                    label: h.label
                                }, w = [o], v.push(w), f.append(o.element)) : (w = v[D], o = w[0], o.label != e && o.element.attr("label", o.label = e)), I = null;
                                for (E = 0, C = h.length; E < C; E++) i = h[E], (x = w[E + 1]) ? (I = x.element, x.label !== i.label && I.text(x.label = i.label), x.id !== i.id && I.val(x.id = i.id), x.element.selected !== i.selected && I.prop("selected", x.selected = i.selected)) : (i.id === "" && p ? J = p : (J = r.clone()).val(i.id).attr("selected", i.selected).text(i.label), w.push(x = {
                                    element: J,
                                    label: i.label,
                                    id: i.id,
                                    selected: i.selected
                                }), I ? I.after(J) : o.element.append(J), I = J);
                                E++;
                                while (w.length > E) w.pop().element.remove()
                            }
                            while (v.length > D) v.pop()[0].element.remove()
                        }

                        var h;
                        if (!(h = o.match(e))) throw i("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + o + "'.");
                        var j = d(h[2] || h[1]), k = h[4] || h[6], l = h[5], m = d(h[3] || ""), q = d(h[2] ? h[1] : k),
                            t = d(h[7]), v = [[{element: f, label: ""}]];
                        p && (a(p)(b), p.removeClass("ng-scope"), p.remove()), f.html(""), f.bind("change", function () {
                            b.$apply(function () {
                                var a, d = t(b) || [], e = {}, h, i, j, m, o, p, r;
                                if (n) {
                                    i = [];
                                    for (o = 0, r = v.length; o < r; o++) {
                                        a = v[o];
                                        for (m = 1, p = a.length; m < p; m++) (j = a[m].element)[0].selected && (h = j.val(), l && (e[l] = h), e[k] = d[h], i.push(q(b, e)))
                                    }
                                } else h = f.val(), h == "?" ? i = c : h == "" ? i = null : (e[k] = d[h], l && (e[l] = h), i = q(b, e));
                                g.$setViewValue(i)
                            })
                        }), g.$render = w, b.$watch(w)
                    }

                    if (!j[1]) return;
                    var l = j[0], m = j[1], n = h.multiple, o = h.ngOptions, p = !1, q, r = k(b.createElement("option")),
                        s = k(b.createElement("optgroup")), v = r.clone();
                    for (var w = 0, x = g.children(), y = x.length; w < y; w++) if (x[w].value == "") {
                        q = p = x.eq(w);
                        break
                    }
                    l.init(m, p, v);
                    if (n && (h.required || h.ngRequired)) {
                        var z = function (a) {
                            return m.$setValidity("required", !h.required || a && a.length), a
                        };
                        m.$parsers.push(z), m.$formatters.unshift(z), h.$observe("required", function () {
                            z(m.$viewValue)
                        })
                    }
                    o ? C(f, g, m) : n ? B(f, g, m) : A(f, g, m, l)
                }
            }
        }], Le = ["$interpolate", function (a) {
            var b = {addOption: B, removeOption: B};
            return {
                restrict: "E", priority: 100, compile: function (c, d) {
                    if (E(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function (a, c, d) {
                        var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                        h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function (b, c) {
                            d.$set("value", b), b !== c && h.removeOption(c), h.addOption(b)
                        }) : h.addOption(d.value), c.bind("$destroy", function () {
                            h.removeOption(d.value)
                        })
                    }
                }
            }
        }], Me = D({restrict: "E", terminal: !0});
    qb(), vb(p), k(b).ready(function () {
        mb(b, nb)
    })
})(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>'), "use strict";
var quizApp = angular.module("angularQuizcatApp", ["quizcatServices"]).config(["$routeProvider", function (a) {
    a.when('/quizes', {
        templateUrl: 'views/quiz-list.html',
        controller: 'QuizListCtrl'
    })
        .when('/quiz/:quizId', {
            templateUrl: 'views/quiz.html',
            controller: 'QuizCtrl'
        })
        .when('/results', {
            templateUrl: 'views/quiz-result.html',
            controller: 'ResultCtrl'
        })
        .when("/feedback", {
            templateUrl: "pages/feedback.html"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html"
        })
        .when("/info", {
            templateUrl: "pages/info_user.html"
        })
        .when("/faq", {
            templateUrl: "pages/faq.html"
        })
        .when("/infomation", {
            templateUrl: "pages/introduction.html"
        })
        .when("/logout", {
            templateUrl: "pages/login.html"
        })
        .when("/login", {
            templateUrl: 'views/quiz-list.html',
            controller: 'QuizListCtrl'
        })
        .otherwise({redirectTo: "/quizes"})
}]);
"use strict", quizApp.factory("questionModel", function () {
    return {
        create: function (a, b) {
            var c = {text: a.question, options: a.answers, correctAnswer: a.correctAnswer, id: a.id};
            return c
        }
    }
}), "use strict", quizApp.factory("quizModel", ["questionModel", function (a) {
    return {
        initialize: function (b) {
            var c = {name: b.name, snippet: b.snippet, currentPage: 0, created: moment(b.created), questions: []};
            return angular.forEach(b.questions, function (b, d) {
                c.questions.push(a.create(b, d + 1))
            }), c
        }
    }
}]), "use strict";
var QuizCtrl = function (a, b, c, d, e, f) {
    b.lastScore = a.lastScore, b.quiz = e.get({quizId: d.quizId}, function (c) {
        b.quiz = f.initialize(c), a.quizSize = b.quiz.questions.length, a.correct = 0, a.currentQuiz = d.quizId, b.currentPosition = -1, b.nextQuestion()
    }), b.hasNext = function () {
        return !(b.currentPosition >= a.quizSize - 1)
    }, b.nextQuestion = function () {
        b.currentQuestion = b.quiz.questions[++b.currentPosition]
    }, b.submitAns = function () {
        b.currentResponse == b.currentQuestion.correctAnswer && ++a.correct, b.next()
    }, b.isAnswered = function () {
        return b.currentResponse !== "" && b.currentResponse !== undefined
    }, b.next = function () {
        b.hasNext() ? (b.currentResponse = "", b.nextQuestion()) : c.path("/results")
    }, b.isReplay = function () {
        return a.lastScore !== undefined
    }
};
QuizCtrl.$inject = ["$rootScope", "$scope", "$location", "$routeParams", "Quiz", "quizModel"], "use strict";
var QuizListCtrl = function (a, b) {
    a.quizes = b.query(function (a) {
        angular.forEach(a, function (a) {
            a.created = moment(a.created)
        })
    }), a.orderProp = "created"
};
QuizListCtrl.$inject = ["$scope", "Quiz"], "use strict";
var ResultCtrl = function (a, b, c) {
    b.currentQuiz = a.currentQuiz, b.quizSize = a.quizSize, b.correct = a.lastScore = a.correct
};
ResultCtrl.$inject = ["$rootScope", "$scope", "$location"], "use strict", angular.module("quizcatServices", ["ngResource"]).factory("Quiz", ["$resource", function (a) {
    return a("quizes/:quizId.json", {}, {query: {method: "GET", params: {quizId: "quizes"}, isArray: !0}})
}]), function (a, b, c) {
    "use strict", b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function (a, d) {
        function l(a) {
            return m(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function m(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(b ? null : /%20/g, "+")
        }

        function n(a, b) {
            this.template = a += "#", this.defaults = b || {};
            var c = this.urlParams = {};
            g(a.split(/\W/), function (b) {
                b && a.match(new RegExp("[^\\\\]:" + b + "\\W")) && (c[b] = !0)
            }), this.template = a.replace(/\\:/g, ":")
        }

        function o(d, l, m) {
            function q(a, b) {
                var c = {};
                return b = h({}, l, b), g(b, function (b, d) {
                    c[d] = b.charAt && b.charAt(0) == "@" ? k(a, b.substr(1)) : b
                }), c
            }

            function r(a) {
                i(a || {}, this)
            }

            var p = new n(d);
            return m = h({}, e, m), g(m, function (d, e) {
                d.method = b.uppercase(d.method);
                var k = d.method == "POST" || d.method == "PUT" || d.method == "PATCH";
                r[e] = function (b, c, e, l) {
                    var m = {}, n, o = f, s = null;
                    switch (arguments.length) {
                        case 4:
                            s = l, o = e;
                        case 3:
                        case 2:
                            if (!j(c)) {
                                m = b, n = c, o = e;
                                break
                            }
                            if (j(b)) {
                                o = b, s = c;
                                break
                            }
                            o = c, s = e;
                        case 1:
                            j(b) ? o = b : k ? n = b : m = b;
                            break;
                        case 0:
                            break;
                        default:
                            throw"Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments."
                    }
                    var t = this instanceof r ? this : d.isArray ? [] : new r(n);
                    return a({
                        method: d.method,
                        url: p.url(h({}, q(n, d.params || {}), m)),
                        data: n
                    }).then(function (a) {
                        var b = a.data;
                        b && (d.isArray ? (t.length = 0, g(b, function (a) {
                            t.push(new r(a))
                        })) : i(b, t)), (o || f)(t, a.headers)
                    }, s), t
                }, r.prototype["$" + e] = function (a, b, d) {
                    var g = q(this), h = f, i;
                    switch (arguments.length) {
                        case 3:
                            g = a, h = b, i = d;
                            break;
                        case 2:
                        case 1:
                            j(a) ? (h = a, i = b) : (g = a, h = b || f);
                        case 0:
                            break;
                        default:
                            throw"Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments."
                    }
                    var l = k ? this : c;
                    r[e].call(this, g, l, h, i)
                }
            }), r.bind = function (a) {
                return o(d, h({}, l, a), m)
            }, r
        }

        var e = {
            get: {method: "GET"},
            save: {method: "POST"},
            query: {method: "GET", isArray: !0},
            remove: {method: "DELETE"},
            "delete": {method: "DELETE"}
        }, f = b.noop, g = b.forEach, h = b.extend, i = b.copy, j = b.isFunction, k = function (a, b) {
            return d(b)(a)
        };
        return n.prototype = {
            url: function (a) {
                var c = this, d = this.template, e, f;
                a = a || {}, g(this.urlParams, function (g, h) {
                    e = a.hasOwnProperty(h) ? a[h] : c.defaults[h], b.isDefined(e) && e !== null ? (f = l(e), d = d.replace(new RegExp(":" + h + "(\\W)", "g"), f + "$1")) : d = d.replace(new RegExp("(/?):" + h + "(\\W)", "g"), function (a, b, c) {
                        return c.charAt(0) == "/" ? c : b + c
                    })
                }), d = d.replace(/\/?#$/, "");
                var h = [];
                return g(a, function (a, b) {
                    c.urlParams[b] || h.push(m(b) + "=" + m(a))
                }), h.sort(), d = d.replace(/\/*$/, ""), d + (h.length ? "?" + h.join("&") : "")
            }
        }, o
    }])
}(window, window.angular), function (a) {
    function E(a, b) {
        return function (c) {
            return L(a.call(this, c), b)
        }
    }

    function F(a) {
        return function (b) {
            return this.lang().ordinal(a.call(this, b))
        }
    }

    function G() {
    }

    function H(a) {
        J(this, a)
    }

    function I(a) {
        var b = this._data = {}, c = a.years || a.year || a.y || 0, d = a.months || a.month || a.M || 0,
            e = a.weeks || a.week || a.w || 0, f = a.days || a.day || a.d || 0, g = a.hours || a.hour || a.h || 0,
            h = a.minutes || a.minute || a.m || 0, i = a.seconds || a.second || a.s || 0,
            j = a.milliseconds || a.millisecond || a.ms || 0;
        this._milliseconds = j + i * 1e3 + h * 6e4 + g * 36e5, this._days = f + e * 7, this._months = d + c * 12, b.milliseconds = j % 1e3, i += K(j / 1e3), b.seconds = i % 60, h += K(i / 60), b.minutes = h % 60, g += K(h / 60), b.hours = g % 24, f += K(g / 24), f += e * 7, b.days = f % 30, d += K(f / 30), b.months = d % 12, c += K(d / 12), b.years = c
    }

    function J(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function K(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }

    function L(a, b) {
        var c = a + "";
        while (c.length < b) c = "0" + c;
        return c
    }

    function M(a, b, c) {
        var d = b._milliseconds, e = b._days, f = b._months, g;
        d && a._d.setTime(+a + d * c), e && a.date(a.date() + e * c), f && (g = a.date(), a.date(1).month(a.month() + f * c).date(Math.min(g, a.daysInMonth())))
    }

    function N(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function O(a, b) {
        var c = Math.min(a.length, b.length), d = Math.abs(a.length - b.length), e = 0, f;
        for (f = 0; f < c; f++) ~~a[f] !== ~~b[f] && e++;
        return e + d
    }

    function P(a, b) {
        return b.abbr = a, f[a] || (f[a] = new G), f[a].set(b), f[a]
    }

    function Q(a) {
        return a ? (!f[a] && g && require("./lang/" + a), f[a]) : b.fn._lang
    }

    function R(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function S(a) {
        var b = a.match(i), c, d;
        for (c = 0, d = b.length; c < d; c++) D[b[c]] ? b[c] = D[b[c]] : b[c] = R(b[c]);
        return function (e) {
            var f = "";
            for (c = 0; c < d; c++) f += typeof b[c].call == "function" ? b[c].call(e, a) : b[c];
            return f
        }
    }

    function T(a, b) {
        function d(b) {
            return a.lang().longDateFormat(b) || b
        }

        var c = 5;
        while (c-- && j.test(b)) b = b.replace(j, d);
        return A[b] || (A[b] = S(b)), A[b](a)
    }

    function U(a) {
        switch (a) {
            case"DDDD":
                return n;
            case"YYYY":
                return o;
            case"YYYYY":
                return p;
            case"S":
            case"SS":
            case"SSS":
            case"DDD":
                return m;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
            case"a":
            case"A":
                return q;
            case"X":
                return t;
            case"Z":
            case"ZZ":
                return r;
            case"T":
                return s;
            case"MM":
            case"DD":
            case"YY":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
                return l;
            default:
                return new RegExp(a.replace("\\", ""))
        }
    }

    function V(a, b, c) {
        var d, e, f = c._a;
        switch (a) {
            case"M":
            case"MM":
                f[1] = b == null ? 0 : ~~b - 1;
                break;
            case"MMM":
            case"MMMM":
                d = Q(c._l).monthsParse(b), d != null ? f[1] = d : c._isValid = !1;
                break;
            case"D":
            case"DD":
            case"DDD":
            case"DDDD":
                b != null && (f[2] = ~~b);
                break;
            case"YY":
                f[0] = ~~b + (~~b > 68 ? 1900 : 2e3);
                break;
            case"YYYY":
            case"YYYYY":
                f[0] = ~~b;
                break;
            case"a":
            case"A":
                c._isPm = (b + "").toLowerCase() === "pm";
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                f[3] = ~~b;
                break;
            case"m":
            case"mm":
                f[4] = ~~b;
                break;
            case"s":
            case"ss":
                f[5] = ~~b;
                break;
            case"S":
            case"SS":
            case"SSS":
                f[6] = ~~(("0." + b) * 1e3);
                break;
            case"X":
                c._d = new Date(parseFloat(b) * 1e3);
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, d = (b + "").match(x), d && d[1] && (c._tzh = ~~d[1]), d && d[2] && (c._tzm = ~~d[2]), d && d[0] === "+" && (c._tzh = -c._tzh, c._tzm = -c._tzm)
        }
        b == null && (c._isValid = !1)
    }

    function W(a) {
        var b, c, d = [];
        if (a._d) return;
        for (b = 0; b < 7; b++) a._a[b] = d[b] = a._a[b] == null ? b === 2 ? 1 : 0 : a._a[b];
        d[3] += a._tzh || 0, d[4] += a._tzm || 0, c = new Date(0), a._useUTC ? (c.setUTCFullYear(d[0], d[1], d[2]), c.setUTCHours(d[3], d[4], d[5], d[6])) : (c.setFullYear(d[0], d[1], d[2]), c.setHours(d[3], d[4], d[5], d[6])), a._d = c
    }

    function X(a) {
        var b = a._f.match(i), c = a._i, d, e;
        a._a = [];
        for (d = 0; d < b.length; d++) e = (U(b[d]).exec(c) || [])[0], e && (c = c.slice(c.indexOf(e) + e.length)), D[b[d]] && V(b[d], e, a);
        a._isPm && a._a[3] < 12 && (a._a[3] += 12), a._isPm === !1 && a._a[3] === 12 && (a._a[3] = 0), W(a)
    }

    function Y(a) {
        var b, c, d, e = 99, f, g, h;
        while (a._f.length) {
            b = J({}, a), b._f = a._f.pop(), X(b), c = new H(b);
            if (c.isValid()) {
                d = c;
                break
            }
            h = O(b._a, c.toArray()), h < e && (e = h, d = c)
        }
        J(a, d)
    }

    function Z(a) {
        var b, c = a._i;
        if (u.exec(c)) {
            a._f = "YYYY-MM-DDT";
            for (b = 0; b < 4; b++) if (w[b][1].exec(c)) {
                a._f += w[b][0];
                break
            }
            r.exec(c) && (a._f += " Z"), X(a)
        } else a._d = new Date(c)
    }

    function $(b) {
        var c = b._i, d = h.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : typeof c == "string" ? Z(b) : N(c) ? (b._a = c.slice(0), W(b)) : b._d = c instanceof Date ? new Date(+c) : new Date(c)
    }

    function _(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function ab(a, b, c) {
        var e = d(Math.abs(a) / 1e3), f = d(e / 60), g = d(f / 60), h = d(g / 24), i = d(h / 365),
            j = e < 45 && ["s", e] || f === 1 && ["m"] || f < 45 && ["mm", f] || g === 1 && ["h"] || g < 22 && ["hh", g] || h === 1 && ["d"] || h <= 25 && ["dd", h] || h <= 45 && ["M"] || h < 345 && ["MM", d(h / 30)] || i === 1 && ["y"] || ["yy", i];
        return j[2] = b, j[3] = a > 0, j[4] = c, _.apply({}, j)
    }

    function bb(a, c, d) {
        var e = d - c, f = d - a.day();
        return f > e && (f -= 7), f < e - 7 && (f += 7), Math.ceil(b(a).add("d", f).dayOfYear() / 7)
    }

    function cb(a) {
        var c = a._i, d = a._f;
        return c === null || c === "" ? null : (typeof c == "string" && (a._i = c = Q().preparse(c)), b.isMoment(c) ? (a = J({}, c), a._d = new Date(+c._d)) : d ? N(d) ? Y(a) : X(a) : $(a), new H(a))
    }

    function db(a, c) {
        b.fn[a] = b.fn[a + "s"] = function (a) {
            var b = this._isUTC ? "UTC" : "";
            return a != null ? (this._d["set" + b + c](a), this) : this._d["get" + b + c]()
        }
    }

    function eb(a) {
        b.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function fb(a, c) {
        b.duration.fn["as" + a] = function () {
            return +this / c
        }
    }

    var b, c = "2.0.0", d = Math.round, e, f = {}, g = typeof module != "undefined" && module.exports,
        h = /^\/?Date\((\-?\d+)/i,
        i = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        j = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, k = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
        l = /\d\d?/, m = /\d{1,3}/, n = /\d{3}/, o = /\d{1,4}/, p = /[+\-]?\d{1,6}/,
        q = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,
        r = /Z|[\+\-]\d\d:?\d\d/i, s = /T/i, t = /[\+\-]?\d+(\.\d{1,3})?/,
        u = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        v = "YYYY-MM-DDTHH:mm:ssZ",
        w = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
        x = /([\+\-]|\d\d)/gi, y = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        z = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6},
        A = {}, B = "DDD w W M D d".split(" "), C = "M D H h m s w W".split(" "), D = {
            M: function () {
                return this.month() + 1
            }, MMM: function (a) {
                return this.lang().monthsShort(this, a)
            }, MMMM: function (a) {
                return this.lang().months(this, a)
            }, D: function () {
                return this.date()
            }, DDD: function () {
                return this.dayOfYear()
            }, d: function () {
                return this.day()
            }, dd: function (a) {
                return this.lang().weekdaysMin(this, a)
            }, ddd: function (a) {
                return this.lang().weekdaysShort(this, a)
            }, dddd: function (a) {
                return this.lang().weekdays(this, a)
            }, w: function () {
                return this.week()
            }, W: function () {
                return this.isoWeek()
            }, YY: function () {
                return L(this.year() % 100, 2)
            }, YYYY: function () {
                return L(this.year(), 4)
            }, YYYYY: function () {
                return L(this.year(), 5)
            }, a: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            }, A: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            }, H: function () {
                return this.hours()
            }, h: function () {
                return this.hours() % 12 || 12
            }, m: function () {
                return this.minutes()
            }, s: function () {
                return this.seconds()
            }, S: function () {
                return ~~(this.milliseconds() / 100)
            }, SS: function () {
                return L(~~(this.milliseconds() / 10), 2)
            }, SSS: function () {
                return L(this.milliseconds(), 3)
            }, Z: function () {
                var a = -this.zone(), b = "+";
                return a < 0 && (a = -a, b = "-"), b + L(~~(a / 60), 2) + ":" + L(~~a % 60, 2)
            }, ZZ: function () {
                var a = -this.zone(), b = "+";
                return a < 0 && (a = -a, b = "-"), b + L(~~(10 * a / 6), 4)
            }, X: function () {
                return this.unix()
            }
        };
    while (B.length) e = B.pop(), D[e + "o"] = F(D[e]);
    while (C.length) e = C.pop(), D[e + e] = E(D[e], 2);
    D.DDDD = E(D.DDD, 3), G.prototype = {
        set: function (a) {
            var b, c;
            for (c in a) b = a[c], typeof b == "function" ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function (a) {
            var c, d, e, f;
            this._monthsParse || (this._monthsParse = []);
            for (c = 0; c < 12; c++) {
                this._monthsParse[c] || (d = b([2e3, c]), e = "^" + this.months(d, "") + "|^" + this.monthsShort(d, ""), this._monthsParse[c] = new RegExp(e.replace(".", ""), "i"));
                if (this._monthsParse[c].test(a)) return c
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (a) {
            return this._weekdaysMin[a.day()]
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        meridiem: function (a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (a, b) {
            var c = this._calendar[a];
            return typeof c == "function" ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (a, b, c, d) {
            var e = this._relativeTime[c];
            return typeof e == "function" ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function (a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return typeof c == "function" ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function (a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function (a) {
            return a
        },
        postformat: function (a) {
            return a
        },
        week: function (a) {
            return bb(a, this._week.dow, this._week.doy)
        },
        _week: {dow: 0, doy: 6}
    }, b = function (a, b, c) {
        return cb({_i: a, _f: b, _l: c, _isUTC: !1})
    }, b.utc = function (a, b, c) {
        return cb({_useUTC: !0, _isUTC: !0, _l: c, _i: a, _f: b})
    }, b.unix = function (a) {
        return b(a * 1e3)
    }, b.duration = function (a, c) {
        var d = b.isDuration(a), e = typeof a == "number", f = d ? a._data : e ? {} : a, g;
        return e && (c ? f[c] = a : f.milliseconds = a), g = new I(f), d && a.hasOwnProperty("_lang") && (g._lang = a._lang), g
    }, b.version = c, b.defaultFormat = v, b.lang = function (a, c) {
        var d;
        if (!a) return b.fn._lang._abbr;
        c ? P(a, c) : f[a] || Q(a), b.duration.fn._lang = b.fn._lang = Q(a)
    }, b.langData = function (a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), Q(a)
    }, b.isMoment = function (a) {
        return a instanceof H
    }, b.isDuration = function (a) {
        return a instanceof I
    }, b.fn = H.prototype = {
        clone: function () {
            return b(this)
        }, valueOf: function () {
            return +this._d
        }, unix: function () {
            return Math.floor(+this._d / 1e3)
        }, toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, toDate: function () {
            return this._d
        }, toJSON: function () {
            return b.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, toArray: function () {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        }, isValid: function () {
            return this._isValid == null && (this._a ? this._isValid = !O(this._a, (this._isUTC ? b.utc(this._a) : b(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid
        }, utc: function () {
            return this._isUTC = !0, this
        }, local: function () {
            return this._isUTC = !1, this
        }, format: function (a) {
            var c = T(this, a || b.defaultFormat);
            return this.lang().postformat(c)
        }, add: function (a, c) {
            var d;
            return typeof a == "string" ? d = b.duration(+c, a) : d = b.duration(a, c), M(this, d, 1), this
        }, subtract: function (a, c) {
            var d;
            return typeof a == "string" ? d = b.duration(+c, a) : d = b.duration(a, c), M(this, d, -1), this
        }, diff: function (a, c, d) {
            var e = this._isUTC ? b(a).utc() : b(a).local(), f = (this.zone() - e.zone()) * 6e4, g, h;
            return c && (c = c.replace(/s$/, "")), c === "year" || c === "month" ? (g = (this.daysInMonth() + e.daysInMonth()) * 432e5, h = (this.year() - e.year()) * 12 + (this.month() - e.month()), h += (this - b(this).startOf("month") - (e - b(e).startOf("month"))) / g, c === "year" && (h /= 12)) : (g = this - e - f, h = c === "second" ? g / 1e3 : c === "minute" ? g / 6e4 : c === "hour" ? g / 36e5 : c === "day" ? g / 864e5 : c === "week" ? g / 6048e5 : g), d ? h : K(h)
        }, from: function (a, c) {
            return b.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!c)
        }, fromNow: function (a) {
            return this.from(b(), a)
        }, calendar: function () {
            var a = this.diff(b().startOf("day"), "days", !0),
                c = a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this))
        }, isLeapYear: function () {
            var a = this.year();
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }, isDST: function () {
            return this.zone() < b([this.year()]).zone() || this.zone() < b([this.year(), 5]).zone()
        }, day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return a == null ? b : this.add({d: a - b})
        }, startOf: function (a) {
            a = a.replace(/s$/, "");
            switch (a) {
                case"year":
                    this.month(0);
                case"month":
                    this.date(1);
                case"week":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return a === "week" && this.day(0), this
        }, endOf: function (a) {
            return this.startOf(a).add(a.replace(/s?$/, "s"), 1).subtract("ms", 1)
        }, isAfter: function (a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) > +b(a).startOf(c)
        }, isBefore: function (a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) < +b(a).startOf(c)
        }, isSame: function (a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) === +b(a).startOf(c)
        }, zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        }, daysInMonth: function () {
            return b.utc([this.year(), this.month() + 1, 0]).date()
        }, dayOfYear: function (a) {
            var c = d((b(this).startOf("day") - b(this).startOf("year")) / 864e5) + 1;
            return a == null ? c : this.add("d", a - c)
        }, isoWeek: function (a) {
            var b = bb(this, 1, 4);
            return a == null ? b : this.add("d", (a - b) * 7)
        }, week: function (a) {
            var b = this.lang().week(this);
            return a == null ? b : this.add("d", (a - b) * 7)
        }, lang: function (b) {
            return b === a ? this._lang : (this._lang = Q(b), this)
        }
    };
    for (e = 0; e < y.length; e++) db(y[e].toLowerCase().replace(/s$/, ""), y[e]);
    db("year", "FullYear"), b.fn.days = b.fn.day, b.fn.weeks = b.fn.week, b.fn.isoWeeks = b.fn.isoWeek, b.duration.fn = I.prototype = {
        weeks: function () {
            return K(this.days() / 7)
        }, valueOf: function () {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        }, humanize: function (a) {
            var b = +this, c = ab(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        }, lang: b.fn.lang
    };
    for (e in z) z.hasOwnProperty(e) && (fb(e, z[e]), eb(e.toLowerCase()));
    fb("Weeks", 6048e5), b.lang("en", {
        ordinal: function (a) {
            var b = a % 10, c = ~~(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return a + c
        }
    }), g && (module.exports = b), typeof ender == "undefined" && (this.moment = b), typeof define == "function" && define.amd && define("moment", [], function () {
        return b
    })
}.call(this);