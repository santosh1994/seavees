/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function (t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function () {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function (t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
                v(e).hide()
            }), h.done(function () {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function (e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function (e, t) {
            return (t + "").toUpperCase()
        },
        A = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function (e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return l.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function (e, t) {
            return v.each(this, e, t)
        },
        ready: function (e) {
            return v.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("﻿ ") ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), v.ready.promise = function (t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function (t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && v.each(arguments, function (e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return v.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return v.Deferred(function (n) {
                            v.each(t, function (t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function (e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function () {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function (t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function () {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function (e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
            add: function (e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, m, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                    return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = v.trim(Z(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function (e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                if (!g || !(h = g.events)) return;
                t = v.trim(Z(t || "")).split(" ");
                for (s = 0; s < t.length; s++) {
                    o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                    if (!u) {
                        for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                        continue
                    }
                    p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                    d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                }
                v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (n, r, s, o) {
                if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                    var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                        b = [];
                    if (Y.test(y + v.event.triggered)) return;
                    y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                    if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                    n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s) {
                        u = v.cache;
                        for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                        return
                    }
                    n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                    if (p.trigger && p.trigger.apply(s, r) === !1) return;
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!o && !p.noBubble && !v.isWindow(s)) {
                        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                        for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                    }
                    for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                    return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                }
                return
            },
            dispatch: function (n) {
                n = v.event.fix(n || e.event);
                var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                    m = d.delegateCount,
                    g = l.call(arguments),
                    y = !n.exclusive && !n.namespace,
                    b = v.event.special[n.type] || {},
                    w = [];
                g[0] = n, n.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                if (m && (!n.button || n.type !== "click"))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || n.type !== "click") {
                            u = {}, f = [];
                            for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                            f.length && w.push({
                                elem: s,
                                matches: f
                            })
                        }
                d.length > m && w.push({
                    elem: this,
                    matches: d.slice(m)
                });
                for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                    a = w[r], n.currentTarget = a.elem;
                    for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                        c = a.matches[i];
                        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return b.postDispatch && b.postDispatch.call(this, n), n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[v.expando]) return e;
                var t, n, r = e,
                    s = v.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = v.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (e, t, n) {
                        v.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function (e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, v.Event = function (e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function () {
                this.isPropagationStopped = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = tt, this.stopPropagation()
            },
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj,
                        o = s.selector;
                    if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), v.support.submitBubbles || (v.event.special.submit = {
            setup: function () {
                if (v.nodeName(this, "form")) return !1;
                v.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target,
                        r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), v._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                if (v.nodeName(this, "form")) return !1;
                v.event.remove(this, "._submit")
            }
        }), v.support.changeBubbles || (v.event.special.change = {
            setup: function () {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                v.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                    }), v._data(t, "_change_attached", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return v.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), v.support.focusinBubbles || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0,
                r = function (e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
            v.event.special[t] = {
                setup: function () {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function () {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), v.fn.extend({
            on: function (e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = et;
                else if (!i) return this;
                return s === 1 && (o = i, i = function (e) {
                    return v().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                    v.event.add(this, e, i, r, n)
                })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = et), this.each(function () {
                    v.event.remove(this, e, r, n)
                })
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            live: function (e, t, n) {
                return v(this.context).on(e, this.selector, t, n), this
            },
            die: function (e, t) {
                return v(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function (e, t) {
                return this.each(function () {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                if (this[0]) return v.event.trigger(e, t, this[0], !0)
            },
            toggle: function (e) {
                var t = arguments,
                    n = e.guid || v.guid++,
                    r = 0,
                    i = function (n) {
                        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i)
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            v.fn[t] = function (e, n) {
                return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
        }),
        function (e, t) {
            function nt(e, t, n, r) {
                n = n || [], t = t || g;
                var i, s, a, f, l = t.nodeType;
                if (!e || typeof e != "string") return n;
                if (l !== 1 && l !== 9) return [];
                a = o(t);
                if (!a && !r)
                    if (i = R.exec(e))
                        if (f = i[1]) {
                            if (l === 9) {
                                s = t.getElementById(f);
                                if (!s || !s.parentNode) return n;
                                if (s.id === f) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                        } else {
                            if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                            if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                        }
                return vt(e.replace(j, "$1"), t, n, r, a)
            }

            function rt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function it(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function st(e) {
                return N(function (t) {
                    return t = +t, N(function (n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ot(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ut(e, t) {
                var n, r, s, o, u, a, f, l = L[d][e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                    for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                    if (!n) break
                }
                return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
            }

            function at(e, t, r) {
                var i = t.dir,
                    s = r && t.dir === "parentNode",
                    o = w++;
                return t.first ? function (t, n, r) {
                    while (t = t[i])
                        if (s || t.nodeType === 1) return e(t, n, r)
                } : function (t, r, u) {
                    if (!u) {
                        var a, f = b + " " + o + " ",
                            l = f + n;
                        while (t = t[i])
                            if (s || t.nodeType === 1) {
                                if ((a = t[d]) === l) return t.sizset;
                                if (typeof a == "string" && a.indexOf(f) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = l;
                                    if (e(t, r, u)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    } else
                        while (t = t[i])
                            if (s || t.nodeType === 1)
                                if (e(t, r, u)) return t
                }
            }

            function ft(e) {
                return e.length > 1 ? function (t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function lt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function ct(e, t, n, r, i, s) {
                return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = lt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
                })
            }

            function ht(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    f = at(function (e) {
                        return e === t
                    }, u, !0),
                    l = at(function (e) {
                        return T.call(t, e) > -1
                    }, u, !0),
                    h = [
                        function (e, n, r) {
                            return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                        }
                    ];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[d]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                        }
                        h.push(n)
                    }
                return ft(h)
            }

            function pt(e, t) {
                var r = t.length > 0,
                    s = e.length > 0,
                    o = function (u, a, f, l, h) {
                        var p, d, v, m = [],
                            y = 0,
                            w = "0",
                            x = u && [],
                            T = h != null,
                            N = c,
                            C = u || s && i.find.TAG("*", h && a.parentNode || a),
                            k = b += N == null ? 1 : Math.E;
                        T && (c = a !== g && a, n = o.el);
                        for (;
                            (p = C[w]) != null; w++) {
                            if (s && p) {
                                for (d = 0; v = e[d]; d++)
                                    if (v(p, a, f)) {
                                        l.push(p);
                                        break
                                    }
                                T && (b = k, n = ++o.el)
                            }
                            r && ((p = !v && p) && y--, u && x.push(p))
                        }
                        y += w;
                        if (r && w !== y) {
                            for (d = 0; v = t[d]; d++) v(x, m, a, f);
                            if (u) {
                                if (y > 0)
                                    while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                                m = lt(m)
                            }
                            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                        }
                        return T && (b = k, c = N), x
                    };
                return o.el = 0, r ? N(o) : o
            }

            function dt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) nt(e, t[r], n);
                return n
            }

            function vt(e, t, n, r, s) {
                var o, u, f, l, c, h = ut(e),
                    p = h.length;
                if (!r && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                        t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                        if (!t) return n;
                        e = e.slice(u.shift().length)
                    }
                    for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                        f = u[o];
                        if (i.relative[l = f.type]) break;
                        if (c = i.find[l])
                            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                u.splice(o, 1), e = r.length && u.join("");
                                if (!e) return S.apply(n, x.call(r, 0)), n;
                                break
                            }
                    }
                }
                return a(e, h)(r, t, s, n, z.test(e)), n
            }

            function mt() {}
            var n, r, i, s, o, u, a, f, l, c, h = !0,
                p = "undefined",
                d = ("sizcache" + Math.random()).replace(".", ""),
                m = String,
                g = e.document,
                y = g.documentElement,
                b = 0,
                w = 0,
                E = [].pop,
                S = [].push,
                x = [].slice,
                T = [].indexOf || function (e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                N = function (e, t) {
                    return e[d] = t == null || t, e
                },
                C = function () {
                    var e = {},
                        t = [];
                    return N(function (n, r) {
                        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }, e)
                },
                k = C(),
                L = C(),
                A = C(),
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                D = "([*^$|!~]?=)",
                P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                F = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                q = new RegExp(H),
                R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                U = /^:not/,
                z = /[\x20\t\r\n\f]*[+~]/,
                W = /:not\($/,
                X = /h\d/i,
                V = /input|select|textarea|button/i,
                $ = /\\(?!\\)/g,
                J = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + H),
                    POS: new RegExp(B, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                },
                K = function (e) {
                    var t = g.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                Q = K(function (e) {
                    return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
                }),
                G = K(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                }),
                Y = K(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                Z = K(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }),
                et = K(function (e) {
                    e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                    var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                    return r = !g.getElementById(d), y.removeChild(e), t
                });
            try {
                x.call(y.childNodes, 0)[0].nodeType
            } catch (tt) {
                x = function (e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            nt.matches = function (e, t) {
                return nt(e, null, null, t)
            }, nt.matchesSelector = function (e, t) {
                return nt(t, null, null, [e]).length > 0
            }, s = nt.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, o = nt.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, u = nt.contains = y.contains ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
            } : y.compareDocumentPosition ? function (e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function (e, t) {
                while (t = t.parentNode)
                    if (t === e) return !0;
                return !1
            }, nt.attr = function (e, t) {
                var n, r = o(e);
                return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, i = nt.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: J,
                attrHandle: G ? {} : {
                    href: function (e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: r ? function (e, t, n) {
                        if (typeof t.getElementById !== p && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function (e, n, r) {
                        if (typeof n.getElementById !== p && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: Q ? function (e, t) {
                        if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                    } : function (e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var r, i = [],
                                s = 0;
                            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: et && function (e, t) {
                        if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                    },
                    CLASS: Z && function (e, t, n) {
                        if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                    }
                },
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n;
                        if (J.CHILD.test(e[0])) return null;
                        if (e[3]) e[2] = e[3];
                        else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: r ? function (e) {
                        return e = e.replace($, ""),
                            function (t) {
                                return t.getAttribute("id") === e
                            }
                    } : function (e) {
                        return e = e.replace($, ""),
                            function (t) {
                                var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function (e) {
                        return e === "*" ? function () {
                            return !0
                        } : (e = e.replace($, "").toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function (e) {
                        var t = k[d][e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r, i) {
                            var s = nt.attr(r, e);
                            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r) {
                        return e === "nth" ? function (e) {
                            var t, i, s = e.parentNode;
                            if (n === 1 && r === 0) return !0;
                            if (s) {
                                i = 0;
                                for (t = s.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1) {
                                        i++;
                                        if (e === t) break
                                    }
                            }
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function (t) {
                            var n = t;
                            switch (e) {
                            case "only":
                            case "first":
                                while (n = n.previousSibling)
                                    if (n.nodeType === 1) return !1;
                                if (e === "first") return !0;
                                n = t;
                            case "last":
                                while (n = n.nextSibling)
                                    if (n.nodeType === 1) return !1;
                                return !0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: N(function (e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(j, "$1"));
                        return r[d] ? N(function (e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function (e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: N(function (e) {
                        return function (t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: N(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    empty: function (e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function (e) {
                        return X.test(e.nodeName)
                    },
                    text: function (e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: rt("radio"),
                    checkbox: rt("checkbox"),
                    file: rt("file"),
                    password: rt("password"),
                    image: rt("image"),
                    submit: it("submit"),
                    reset: it("reset"),
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function (e) {
                        return V.test(e.nodeName)
                    },
                    focus: function (e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function (e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: st(function () {
                        return [0]
                    }),
                    last: st(function (e, t) {
                        return [t - 1]
                    }),
                    eq: st(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: st(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: st(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: st(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: st(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, f = y.compareDocumentPosition ? function (e, t) {
                return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    o = e.parentNode,
                    u = t.parentNode,
                    a = o;
                if (o === u) return ot(e, t);
                if (!o) return -1;
                if (!u) return 1;
                while (a) i.unshift(a), a = a.parentNode;
                a = u;
                while (a) s.unshift(a), a = a.parentNode;
                n = i.length, r = s.length;
                for (var f = 0; f < n && f < r; f++)
                    if (i[f] !== s[f]) return ot(i[f], s[f]);
                return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
            }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                l = h, e.sort(f);
                if (l) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, nt.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, a = nt.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    s = A[d][e + " "];
                if (!s) {
                    t || (t = ut(e)), n = t.length;
                    while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                    s = A(e, pt(i, r))
                }
                return s
            }, g.querySelectorAll && function () {
                var e, t = vt,
                    n = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    i = [":focus"],
                    s = [":active"],
                    u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                K(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                }), K(function (e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
                    if (!o && !u && !i.test(e)) {
                        var a, f, l = !0,
                            c = d,
                            h = r,
                            p = r.nodeType === 9 && e;
                        if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                            while (f--) a[f] = c + a[f].join("");
                            h = z.test(e) && r.parentNode || r, p = a.join(",")
                        }
                        if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                    return t(e, r, s, o, u)
                }, u && (K(function (t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                    } catch (n) {}
                }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
                    n = n.replace(r, "='$1']");
                    if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                    } catch (f) {}
                    return nt(n, null, null, [t]).length > 0
                })
            }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
        }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function () {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function (e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function (e) {
            return at(e, "nextSibling")
        },
        prev: function (e) {
            return at(e, "previousSibling")
        },
        nextAll: function (e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return v.sibling(e.firstChild)
        },
        contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
            text: function (e) {
                return v.access(this, function (e) {
                    return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function (e) {
                if (v.isFunction(e)) return this.each(function (t) {
                    v(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return v.isFunction(e) ? this.each(function (t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = v.isFunction(e);
                return this.each(function (n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function () {
                if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(e, this), "before", this.selector)
                }
            },
            after: function () {
                if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(this, e), "after", this.selector)
                }
            },
            remove: function (e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function () {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function (e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                    return v.clone(this, e, t)
                })
            },
            html: function (e) {
                return v.access(this, function (e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                    if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(dt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function (e) {
                return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                    var n = v(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                }))
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, n, r) {
                e = [].concat.apply([], e);
                var i, s, o, u, a = 0,
                    f = e[0],
                    l = [],
                    c = this.length;
                if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
                    v(this).domManip(e, n, r)
                });
                if (v.isFunction(f)) return this.each(function (i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
                if (this[0]) {
                    i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                    if (s) {
                        n = n && v.nodeName(s, "tr");
                        for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                    }
                    o = s = null, l.length && v.each(l, function (e, t) {
                        t.src ? v.ajax ? v.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), v.buildFragment = function (e, n, r) {
            var s, o, u, a = e[0];
            return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
            }
        }, v.fragments = {}, v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            v.fn[e] = function (n) {
                var r, i = 0,
                    s = [],
                    o = v(n),
                    u = o.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                return this.pushStack(s, e, o.selector)
            }
        }), v.extend({
            clone: function (e, t, n) {
                var r, i, s, o;
                v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                    Ot(e, o), r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                }
                if (t) {
                    At(e, o);
                    if (n) {
                        r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) At(r[s], i[s])
                    }
                }
                return r = i = null, o
            },
            clean: function (e, t, n, r) {
                var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                    b = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                for (s = 0;
                    (u = e[s]) != null; s++) {
                    typeof u == "number" && (u += "");
                    if (!u) continue;
                    if (typeof u == "string")
                        if (!gt.test(u)) u = t.createTextNode(u);
                        else {
                            y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                            while (l--) c = c.lastChild;
                            if (!v.support.tbody) {
                                h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                            }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                        }
                    u.nodeType ? b.push(u) : v.merge(b, u)
                }
                c && (u = c = y = null);
                if (!v.support.appendChecked)
                    for (s = 0;
                        (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                if (n) {
                    m = function (e) {
                        if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (s = 0;
                        (u = b[s]) != null; s++)
                        if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                }
                return b
            },
            cleanData: function (e, t) {
                var n, r, i, s, o = 0,
                    u = v.expando,
                    a = v.cache,
                    f = v.support.deleteExpando,
                    l = v.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || v.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                        }
                    }
            }
        }),
        function () {
            var e, t;
            v.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                    return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(i);
                return e
            }
        }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return Yt(this, !0)
        },
        hide: function () {
            return Yt(this)
        },
        toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
                (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function (e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function () {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function (e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });

    jQuery('#page_header nav li.cart').hover(function(){
            jQuery('.cart-popup').stop(true,true).fadeIn();
        },function(){
            jQuery('.cart-popup').stop(true,true).fadeOut();
        }
    );
    /*
    var Hn, Bn = e.ActiveXObject ? function () {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && Fn() || In()
        } : Fn,
        function (e) {
            v.extend(v.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
            if (!n.crossDomain || v.support.cors) {
                var r;
                return {
                    send: function (i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function (e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                        try {
                                            c.text = a.responseText
                                        } catch (p) {}
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function () {
                        r && r(0, 1)
                    }
                }
            }
        });
    */
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = zn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = v.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    v.Animation = v.extend(Kn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function () {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function () {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++)
                if (t.call(r, e[o[i]], o[i], e) === n) return
        }
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    x.contains = x.include = function (e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t, n) {
        return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function (e, t) {
        return x.where(e, t, !0)
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity,
            value: -Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o > r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function (e, t, n) {
        return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var L = function (e) {
        return function (t, n, r) {
            var i = {},
                s = n == null ? x.identity : k(n);
            return T(t, function (n, o) {
                var u = s.call(r, n, o, t);
                e(i, u, n)
            }), i
        }
    };
    x.groupBy = L(function (e, t, n) {
        (x.has(e, t) ? e[t] : e[t] = []).push(n)
    }), x.indexBy = L(function (e, t, n) {
        e[t] = n
    }), x.countBy = L(function (e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function (e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        var e = x.max(x.pluck(arguments, "length").concat(0)),
            t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function (e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () {};
    x.bind = function (e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        if (t.length === 0) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
            function () {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
        };
        return function () {
            var f = new Date;
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i, s, o, u;
        return function () {
            s = this, i = arguments, o = new Date;
            var a = function () {
                    var f = new Date - o;
                    f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
                },
                f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
        }
    }, x.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, x.pairs = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function (e) {
        var t = {},
            n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var a = 0,
            l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r))) break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !!x.has(e, "callee")
    }), typeof / . / != "function" && (x.isFunction = function (e) {
        return typeof e == "function"
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function (e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function (e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var F = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this);
var docCookies = {
    getItem: function (e) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    },
    setItem: function (e, t, n, r, i, s) {
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
        var o = "";
        if (n) switch (n.constructor) {
        case Number:
            o = n === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
            break;
        case String:
            o = "; expires=" + n;
            break;
        case Date:
            o = "; expires=" + n.toUTCString()
        }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + (i ? "; domain=" + i : "") + (r ? "; path=" + r : "") + (s ? "; secure" : ""), !0
    },
    removeItem: function (e, t, n) {
        return !e || !this.hasItem(e) ? !1 : (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""), !0)
    },
    hasItem: function (e) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
    },
    keys: function () {
        var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var t = 0; t < e.length; t++) e[t] = decodeURIComponent(e[t]);
        return e
    }
};
(function (e, t, n, r) {
    e.fn.accordion = function (t) {
        var n = e(this),
            i = (new Date).getTime(),
            s = [],
            o = arguments[0],
            u = typeof o == "string",
            a = [].slice.call(arguments, 1),
            f;
        return n.each(function () {
            var l = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.accordion.settings, t) : e.extend({}, e.fn.accordion.settings),
                c = l.className,
                h = l.namespace,
                p = l.selector,
                d = l.error,
                v = "." + h,
                m = "module-" + h,
                g = n.selector || "",
                y = e(this),
                b = y.find(p.title),
                w = y.find(p.content),
                E = this,
                S = y.data(m),
                x;
            x = {
                initialize: function () {
                    x.debug("Initializing accordion with bound events", y), b.on("click" + v, x.event.click), x.instantiate()
                },
                instantiate: function () {
                    S = x, y.data(m, x)
                },
                destroy: function () {
                    x.debug("Destroying previous accordion for", y), y.removeData(m), b.off(v)
                },
                event: {
                    click: function () {
                        x.verbose("Title clicked", this);
                        var t = e(this),
                            n = b.index(t);
                        x.toggle(n)
                    },
                    resetDisplay: function () {
                        e(this).css("display", ""), e(this).attr("style") == "" && e(this).attr("style", "").removeAttr("style")
                    },
                    resetOpacity: function () {
                        e(this).css("opacity", ""), e(this).attr("style") == "" && e(this).attr("style", "").removeAttr("style")
                    }
                },
                toggle: function (e) {
                    x.debug("Toggling content content at index", e);
                    var t = b.eq(e),
                        n = t.next(w),
                        r = n.is(":visible");
                    r ? l.collapsible ? x.close(e) : x.debug("Cannot close accordion content collapsing is disabled") : x.open(e)
                },
                open: function (t) {
                    var n = b.eq(t),
                        r = n.next(w),
                        i = n.siblings(p.title).filter("." + c.active),
                        s = i.next(b),
                        o = i.size() > 0;
                    r.is(":animated") || (x.debug("Opening accordion content", n), l.exclusive && o && (i.removeClass(c.active), s.stop().children().stop().animate({
                        opacity: 0
                    }, l.duration, x.event.resetOpacity).end().slideUp(l.duration, l.easing, function () {
                        s.removeClass(c.active).children(), e.proxy(x.event.resetDisplay, this)()
                    })), n.addClass(c.active), r.stop().children().stop().animate({
                        opacity: 1
                    }, l.duration).end().slideDown(l.duration, l.easing, function () {
                        r.addClass(c.active), e.proxy(x.event.resetDisplay, this)(), e.proxy(l.onOpen, r)(), e.proxy(l.onChange, r)()
                    }))
                },
                close: function (t) {
                    var n = b.eq(t),
                        r = n.next(w);
                    x.debug("Closing accordion content", r), n.removeClass(c.active), r.removeClass(c.active).show().stop().children().stop().animate({
                        opacity: 0
                    }, l.duration, x.event.resetOpacity).end().slideUp(l.duration, l.easing, function () {
                        e.proxy(x.event.resetDisplay, this)(), e.proxy(l.onClose, r)(), e.proxy(l.onChange, r)()
                    })
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, l, t);
                    else {
                        if (n === r) return l[t];
                        l[t] = n
                    }
                },
                internal: function (t, n) {
                    x.debug("Changing internal", t, n);
                    if (n === r) return x[t];
                    e.isPlainObject(t) ? e.extend(!0, x, t) : x[t] = n
                },
                debug: function () {
                    l.debug && (l.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, l.name + ":"), x.debug.apply(console, arguments)))
                },
                verbose: function () {
                    l.verbose && l.debug && (l.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, l.name + ":"), x.verbose.apply(console, arguments)))
                },
                error: function () {
                    x.error = Function.prototype.bind.call(console.error, console, l.name + ":"), x.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        l.performance && (t = (new Date).getTime(), r = i || t, n = t - r, i = t, s.push({
                            Element: E,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 100)
                    },
                    display: function () {
                        var t = l.name + ":",
                            n = 0;
                        i = !1, clearTimeout(x.performance.timer), e.each(s, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", g && (t += " '" + g + "'"), (console.group !== r || console.table !== r) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), s = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = S,
                        o, u, l;
                    return n = n || a, i = E || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? l = u.apply(i, n) : u !== r && (l = u), e.isArray(f) ? f.push(l) : f !== r ? f = [f, l] : l !== r && (f = l), u
                }
            }, u ? (S === r && x.initialize(), x.invoke(o)) : (S !== r && x.destroy(), x.initialize())
        }), f !== r ? f : this
    }, e.fn.accordion.settings = {
        name: "Accordion",
        namespace: "accordion",
        debug: !1,
        verbose: !0,
        performance: !0,
        exclusive: !0,
        collapsible: !0,
        duration: 500,
        easing: "easeInOutQuint",
        onOpen: function () {},
        onClose: function () {},
        onChange: function () {},
        error: {
            method: "The method you called is not defined"
        },
        className: {
            active: "active"
        },
        selector: {
            title: ".title",
            content: ".content"
        }
    }, e.extend(e.easing, {
        easeInOutQuint: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        }
    })
})(jQuery, window, document),
function (e, t, n, r) {
    e.api = e.fn.api = function (n) {
        var i = e.extend(!0, {}, e.api.settings, n),
            s = typeof this != "function" ? this : e("<div/>"),
            o = i.stateContext ? e(i.stateContext) : e(s),
            u = typeof this == "object" ? e(s) : o,
            a = this,
            f = (new Date).getTime(),
            l = [],
            c = u.selector || "",
            h = i.namespace + "-module",
            p = i.className,
            d = i.metadata,
            v = i.error,
            m = u.data(h),
            g = arguments[0],
            y = m !== r && typeof g == "string",
            b = [].slice.call(arguments, 1),
            w, E;
        return w = {
            initialize: function () {
                var n, s = (new Date).getTime(),
                    a, f, l, c = {},
                    h, m = {},
                    g;
                i.serializeForm && e(this).toJSON() !== r && (c = w.get.formData(), w.debug("Adding form data to API Request", c), e.extend(!0, i.data, c)), n = e.proxy(i.beforeSend, u)(i);
                if (n !== r && !n) {
                    w.error(v.beforeSend), w.reset();
                    return
                }
                l = w.get.url(w.get.templateURL());
                if (!l) {
                    w.error(v.missingURL), w.reset();
                    return
                }
                f = e.Deferred().always(function () {
                    i.stateContext && o.removeClass(p.loading), e.proxy(i.complete, u)()
                }).done(function (t) {
                    w.debug("API request successful"), i.dataType == "json" ? t.error !== r ? e.proxy(i.failure, o)(t.error, i, u) : e.isArray(t.errors) ? e.proxy(i.failure, o)(t.errors[0], i, u) : e.proxy(i.success, o)(t, i, u) : e.proxy(i.success, o)(t, i, u)
                }).fail(function (t, n, s) {
                    var u = i.error[n] !== r ? i.error[n] : s,
                        a;
                    if (t !== r)
                        if (t.readyState !== r && t.readyState == 4) {
                            if (t.status != 200 && s !== r && s !== "") w.error(f.statusMessage + s);
                            else if (n == "error" && i.dataType == "json") try {
                                a = e.parseJSON(t.responseText), a && a.error !== r && (u = a.error)
                            } catch (f) {
                                w.error(f.JSONParse)
                            }
                            o.removeClass(p.loading).addClass(p.error), i.errorLength > 0 && setTimeout(function () {
                                o.removeClass(p.error)
                            }, i.errorLength), w.debug("API Request error:", u), e.proxy(i.failure, o)(u, i, this)
                        } else w.debug("Request Aborted (Most likely caused by page change)")
                }), e.extend(!0, m, i, {
                    success: function () {},
                    failure: function () {},
                    complete: function () {},
                    type: i.method || i.type,
                    data: h,
                    url: l,
                    beforeSend: i.beforeXHR
                }), i.stateContext && o.addClass(p.loading), i.progress && (w.verbose("Adding progress events"), e.extend(!0, m, {
                    xhr: function () {
                        var n = new t.XMLHttpRequest;
                        return n.upload.addEventListener("progress", function (t) {
                            var n;
                            t.lengthComputable && (n = Math.round(t.loaded / t.total * 1e4) / 100 + "%", e.proxy(i.progress, o)(n, t))
                        }, !1), n.addEventListener("progress", function (t) {
                            var n;
                            t.lengthComputable && (n = Math.round(t.loaded / t.total * 1e4) / 100 + "%", e.proxy(i.progress, o)(n, t))
                        }, !1), n
                    }
                })), w.verbose("Creating AJAX request with settings: ", m), g = e.ajax(m).always(function () {
                    a = i.loadingLength - ((new Date).getTime() - s), i.loadingDelay = a < 0 ? 0 : a
                }).done(function (e) {
                    var t = this;
                    setTimeout(function () {
                        f.resolveWith(t, [e])
                    }, i.loadingDelay)
                }).fail(function (e, t, n) {
                    var r = this;
                    t != "abort" ? setTimeout(function () {
                        f.rejectWith(r, [e, t, n])
                    }, i.loadingDelay) : o.removeClass(p.error).removeClass(p.loading)
                }), i.stateContext && u.data(d.promise, f).data(d.xhr, g)
            },
            get: {
                formData: function () {
                    return u.closest("form").toJSON()
                },
                templateURL: function () {
                    var e = u.data(i.metadata.action) || i.action || !1,
                        t;
                    return e && (w.debug("Creating url for: ", e), i.api[e] !== r ? t = i.api[e] : w.error(v.missingAction)), i.url && (t = i.url, w.debug("Getting url", t)), t
                },
                url: function (t, n) {
                    var s;
                    return t && (s = t.match(i.regExpTemplate), n = n || i.urlData, s && (w.debug("Looking for URL variables", s), e.each(s, function (i, o) {
                        var a = o.substr(2, o.length - 3),
                            f = e.isPlainObject(n) && n[a] !== r ? n[a] : u.data(a) !== r ? u.data(a) : n[a];
                        w.verbose("Looking for variable", a, u, u.data(a), n[a]);
                        if (f === !1) w.debug("Removing variable from URL", s), t = t.replace("/" + o, "");
                        else {
                            if (f === r || !f) return w.error(v.missingParameter + a), t = !1, !1;
                            t = t.replace(o, f)
                        }
                    }))), t
                }
            },
            reset: function () {
                u.data(d.promise, !1).data(d.xhr, !1), o.removeClass(p.error).removeClass(p.loading)
            },
            setting: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, i, t);
                else {
                    if (n === r) return i[t];
                    i[t] = n
                }
            },
            internal: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, w, t);
                else {
                    if (n === r) return w[t];
                    w[t] = n
                }
            },
            debug: function () {
                i.debug && (i.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), w.debug.apply(console, arguments)))
            },
            verbose: function () {
                i.verbose && i.debug && (i.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), w.verbose.apply(console, arguments)))
            },
            error: function () {
                w.error = Function.prototype.bind.call(console.error, console, i.name + ":"), w.error.apply(console, arguments)
            },
            performance: {
                log: function (e) {
                    var t, n, r;
                    i.performance && (t = (new Date).getTime(), r = f || t, n = t - r, f = t, l.push({
                        Element: a,
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                    })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 100)
                },
                display: function () {
                    var t = i.name + ":",
                        n = 0;
                    f = !1, clearTimeout(w.performance.timer), e.each(l, function (e, t) {
                        n += t["Execution Time"]
                    }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== r || console.table !== r) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                        console.log(t.Name + ": " + t["Execution Time"] + "ms")
                    }), console.groupEnd()), l = []
                }
            },
            invoke: function (t, n, i) {
                var s = m,
                    o, u, f;
                return n = n || b, i = a || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                    var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                    if (e.isPlainObject(s[a]) && n != o) s = s[a];
                    else {
                        if (s[a] !== r) return u = s[a], !1;
                        if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                        s = s[i]
                    }
                })), e.isFunction(u) ? f = u.apply(i, n) : u !== r && (f = u), e.isArray(E) ? E.push(f) : E !== r ? E = [E, f] : f !== r && (E = f), u
            }
        }, y ? (m === r && w.initialize(), w.invoke(g)) : (m !== r && w.destroy(), w.initialize()), E !== r ? E : this
    }, e.fn.apiButton = function (t) {
        return e(this).each(function () {
            var n = e(this),
                r = e(this).selector || "",
                i = e.isFunction(t) ? e.extend(!0, {}, e.api.settings, e.fn.apiButton.settings, {
                    stateContext: this,
                    success: t
                }) : e.extend(!0, {}, e.api.settings, e.fn.apiButton.settings, {
                    stateContext: this
                }, t),
                s;
            s = {
                initialize: function () {
                    i.context && r !== "" ? e(i.context).on(r, "click." + i.namespace, s.click) : n.on("click." + i.namespace, s.click)
                },
                click: function () {
                    (!i.filter || e(this).filter(i.filter).size() === 0) && e.proxy(e.api, this)(i)
                }
            }, s.initialize()
        }), this
    }, e.api.settings = {
        name: "API",
        namespace: "api",
        debug: !0,
        verbose: !0,
        performance: !0,
        api: {},
        beforeSend: function (e) {
            return e
        },
        beforeXHR: function (e) {},
        success: function (e) {},
        complete: function (e) {},
        failure: function (e) {},
        progress: !1,
        error: {
            missingAction: "API action used but no url was defined",
            missingURL: "URL not specified for the API action",
            missingParameter: "Missing an essential URL parameter: ",
            timeout: "Your request timed out",
            error: "There was an error with your request",
            parseError: "There was an error parsing your request",
            JSONParse: "JSON could not be parsed during error handling",
            statusMessage: "Server gave an error: ",
            beforeSend: "The before send function has aborted the request",
            exitConditions: "API Request Aborted. Exit conditions met"
        },
        className: {
            loading: "loading",
            error: "error"
        },
        metadata: {
            action: "action",
            promise: "promise",
            xhr: "xhr"
        },
        regExpTemplate: /\{\$([A-z]+)\}/g,
        action: !1,
        url: !1,
        urlData: !1,
        serializeForm: !1,
        stateContext: !1,
        method: "get",
        data: {},
        dataType: "json",
        cache: !0,
        loadingLength: 200,
        errorLength: 2e3
    }, e.fn.apiButton.settings = {
        filter: ".disabled, .loading",
        context: !1,
        stateContext: !1
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.colorize = function (t) {
        var n = e.extend(!0, {}, e.fn.colorize.settings, t),
            i = arguments || !1;
        return e(this).each(function (t) {
            var s = e(this),
                o = e("<canvas />")[0],
                u = e("<canvas />")[0],
                a = e("<canvas />")[0],
                f = new Image,
                l, c, h, p, d, v, m, g = n.colors,
                y = n.paths,
                b = n.namespace,
                w = n.error,
                E = s.data("module-" + b),
                S;
            S = {
                checkPreconditions: function () {
                    return S.debug("Checking pre-conditions"), !e.isPlainObject(g) || e.isEmptyObject(g) ? (S.error(w.undefinedColors), !1) : !0
                },
                async: function (e) {
                    n.async ? setTimeout(e, 0) : e()
                },
                getMetadata: function () {
                    S.debug("Grabbing metadata"), p = s.data("image") || n.image || r, d = s.data("name") || n.name || t, v = n.width || s.width(), m = n.height || s.height(), (v === 0 || m === 0) && S.error(w.undefinedSize)
                },
                initialize: function () {
                    S.debug("Initializing with colors", g), S.checkPreconditions() && S.async(function () {
                        S.getMetadata(), S.canvas.create(), S.draw.image(function () {
                            S.draw.colors(), S.canvas.merge()
                        }), s.data("module-" + b, S)
                    })
                },
                redraw: function () {
                    S.debug("Redrawing image"), S.async(function () {
                        S.canvas.clear(), S.draw.colors(), S.canvas.merge()
                    })
                },
                change: {
                    color: function (e, t) {
                        S.debug("Changing color", e);
                        if (g[e] === r) return S.error(w.missingColor), !1;
                        g[e] = t, S.redraw()
                    }
                },
                canvas: {
                    create: function () {
                        S.debug("Creating canvases"), o.width = v, o.height = m, u.width = v, u.height = m, a.width = v, a.height = m, l = o.getContext("2d"), c = u.getContext("2d"), h = a.getContext("2d"), s.append(o), l = s.children("canvas")[0].getContext("2d")
                    },
                    clear: function (e) {
                        S.debug("Clearing canvas"), h.fillStyle = "#FFFFFF", h.fillRect(0, 0, v, m)
                    },
                    merge: function () {
                        if (!e.isFunction(l.blendOnto)) {
                            S.error(w.missingPlugin);
                            return
                        }
                        l.putImageData(c.getImageData(0, 0, v, m), 0, 0), h.blendOnto(l, "multiply")
                    }
                },
                draw: {
                    image: function (e) {
                        S.debug("Drawing image"), e = e || function () {}, p ? (f.src = p, f.onload = function () {
                            c.drawImage(f, 0, 0), e()
                        }) : (S.error(w.noImage), e())
                    },
                    colors: function () {
                        S.debug("Drawing color overlays", g), e.each(g, function (e, t) {
                            n.onDraw(h, d, e, t)
                        })
                    }
                },
                debug: function (e, t) {
                    n.debug && (t !== r ? console.info(n.name + ": " + e, t) : console.info(n.name + ": " + e))
                },
                error: function (e) {
                    console.warn(n.name + ": " + e)
                },
                invoke: function (t, i, s) {
                    var o;
                    return s = s || Array.prototype.slice.call(arguments, 2), typeof t == "string" && E !== r && (t = t.split("."), e.each(t, function (t, r) {
                        return e.isPlainObject(E[r]) ? (E = E[r], !0) : e.isFunction(E[r]) ? (o = E[r], !0) : (S.error(n.error.method), !1)
                    })), e.isFunction(o) ? o.apply(i, s) : !1
                }
            };
            if (E !== r && i) return i[0] == "invoke" && (i = Array.prototype.slice.call(i, 1)), S.invoke(i[0], this, Array.prototype.slice.call(i, 1));
            S.initialize()
        }), this
    }, e.fn.colorize.settings = {
        name: "Image Colorizer",
        debug: !0,
        namespace: "colorize",
        onDraw: function (e, t, n, r) {},
        async: !0,
        colors: {},
        metadata: {
            image: "image",
            name: "name"
        },
        error: {
            noImage: "No tracing image specified",
            undefinedColors: "No default colors specified.",
            missingColor: "Attempted to change color that does not exist",
            missingPlugin: "Blend onto plug-in must be included",
            undefinedHeight: "The width or height of image canvas could not be automatically determined. Please specify a height."
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.form = function (t, i) {
        var s = e(this),
            o = e.extend(!0, {}, e.fn.form.settings, i),
            u = e.extend({}, e.fn.form.settings.defaults, t),
            a = o.namespace,
            f = o.metadata,
            l = o.selector,
            c = o.className,
            h = o.error,
            p = "." + a,
            d = "module-" + a,
            v = s.selector || "",
            m = (new Date).getTime(),
            g = [],
            y = arguments[0],
            b = typeof y == "string",
            w = [].slice.call(arguments, 1),
            E;
        return s.each(function () {
            var t = e(this),
                i = e(this).find(l.field),
                a = e(this).find(l.group),
                h = e(this).find(l.message),
                S = e(this).find(l.prompt),
                x = e(this).find(l.submit),
                T = [],
                N = this,
                C = t.data(d),
                k;
            k = {
                initialize: function () {
                    k.verbose("Initializing form validation", t, u, o), k.bindEvents(), k.instantiate()
                },
                instantiate: function () {
                    k.verbose("Storing instance of module", k), C = k, t.data(d, k)
                },
                destroy: function () {
                    k.verbose("Destroying previous module", C), k.removeEvents(), t.removeData(d)
                },
                refresh: function () {
                    k.verbose("Refreshing selector cache"), i = t.find(l.field)
                },
                submit: function () {
                    k.verbose("Submitting form", t), t.submit()
                },
                bindEvents: function () {
                    o.keyboardShortcuts && i.on("keydown" + p, k.event.field.keydown), t.on("submit" + p, k.validate.form), i.on("blur" + p, k.event.field.blur), x.on("click" + p, k.submit), i.each(function () {
                        var t = e(this).prop("type"),
                            n = k.get.changeEvent(t);
                        e(this).on(n + p, k.event.field.change)
                    })
                },
                removeEvents: function () {
                    t.off(p), i.off(p), x.off(p), i.off(p)
                },
                event: {
                    field: {
                        keydown: function (t) {
                            var n = e(this),
                                r = t.which,
                                i = {
                                    enter: 13,
                                    escape: 27
                                };
                            r == i.escape && (k.verbose("Escape key pressed blurring field"), n.blur());
                            if (!t.ctrlKey && r == i.enter && n.is(l.input)) return k.debug("Enter key pressed, submitting form"), x.addClass(c.down), n.one("keyup" + p, k.event.field.keyup), t.preventDefault(), !1
                        },
                        keyup: function () {
                            k.verbose("Doing keyboard shortcut form submit"), x.removeClass(c.down), k.submit()
                        },
                        blur: function () {
                            var t = e(this),
                                n = t.closest(a);
                            n.hasClass(c.error) ? (k.debug("Revalidating field", t, k.get.validation(t)), k.validate.field(k.get.validation(t))) : (o.on == "blur" || o.on == "change") && k.validate.field(k.get.validation(t))
                        },
                        change: function () {
                            var t = e(this),
                                n = t.closest(a);
                            if (o.on == "change" || n.hasClass(c.error) && o.revalidate) clearTimeout(k.timer), k.timer = setTimeout(function () {
                                k.debug("Revalidating field", t, k.get.validation(t)), k.validate.field(k.get.validation(t))
                            }, o.delay)
                        }
                    }
                },
                get: {
                    changeEvent: function (e) {
                        return e == "checkbox" || e == "radio" || e == "hidden" ? "change" : n.createElement("input").oninput !== r ? "input" : n.createElement("input").onpropertychange !== r ? "propertychange" : "keyup"
                    },
                    field: function (t) {
                        return k.verbose("Finding field with identifier", t), i.filter("#" + t).size() > 0 ? i.filter("#" + t) : i.filter('[name="' + t + '"]').size() > 0 ? i.filter('[name="' + t + '"]') : i.filter("[data-" + f.validate + '="' + t + '"]').size() > 0 ? i.filter("[data-" + f.validate + '="' + t + '"]') : e("<input/>")
                    },
                    validation: function (t) {
                        var n;
                        return e.each(u, function (e, r) {
                            k.get.field(r.identifier).get(0) == t.get(0) && (n = r)
                        }), n || !1
                    }
                },
                has: {
                    field: function (e) {
                        return k.verbose("Checking for existence of a field with identifier", e), i.filter("#" + e).size() > 0 ? !0 : i.filter('[name="' + e + '"]').size() > 0 ? !0 : i.filter("[data-" + f.validate + '="' + e + '"]').size() > 0 ? !0 : !1
                    }
                },
                add: {
                    prompt: function (n, i) {
                        var s = k.get.field(n),
                            u = s.closest(a),
                            f = u.find(l.prompt),
                            h = f.size() !== 0;
                        i = typeof i == "string" ? [i] : i, k.verbose("Adding field error state", n), u.addClass(c.error), o.inline && (h || (f = o.templates.prompt(i), f.appendTo(u)), f.html(i[0]), h ? k.verbose("Inline errors are disabled, no inline error added", n) : o.transition && e.fn.transition !== r && t.transition("is supported") ? (k.verbose("Displaying error with css transition", o.transition), f.transition(o.transition + " in", o.duration)) : (k.verbose("Displaying error with fallback javascript animation"), f.fadeIn(o.duration)))
                    },
                    errors: function (e) {
                        k.debug("Adding form error messages", e), h.html(o.templates.error(e))
                    }
                },
                remove: {
                    prompt: function (n) {
                        var i = k.get.field(n.identifier),
                            s = i.closest(a),
                            u = s.find(l.prompt);
                        s.removeClass(c.error), o.inline && u.is(":visible") && (k.verbose("Removing prompt for field", n), o.transition && e.fn.transition !== r && t.transition("is supported") ? u.transition(o.transition + " out", o.duration, function () {
                            u.remove()
                        }) : u.fadeOut(o.duration, function () {
                            u.remove()
                        }))
                    }
                },
                validate: {
                    form: function (n) {
                        var r = !0;
                        return T = [], e.each(u, function (e, t) {
                            k.validate.field(t) || (r = !1)
                        }), r ? (k.debug("Form has no validation errors, submitting"), t.removeClass(c.error).addClass(c.success), e.proxy(o.onSuccess, this)(n)) : (k.debug("Form has errors"), t.addClass(c.error), o.inline || k.add.errors(T), e.proxy(o.onFailure, this)(T))
                    },
                    field: function (t) {
                        var n = k.get.field(t.identifier),
                            i = !0,
                            s = [];
                        return t.rules !== r && e.each(t.rules, function (e, n) {
                            k.has.field(t.identifier) && !k.validate.rule(t, n) && (k.debug("Field is invalid", t.identifier, n.type), s.push(n.prompt), i = !1)
                        }), i ? (k.remove.prompt(t, s), e.proxy(o.onValid, n)(), !0) : (T = T.concat(s), k.add.prompt(t.identifier, s), e.proxy(o.onInvalid, n)(s), !1)
                    },
                    rule: function (n, i) {
                        var s = k.get.field(n.identifier),
                            u = i.type,
                            a = e.trim(s.val() + ""),
                            f = /\[(.*)\]/i,
                            l = f.exec(u),
                            c = !0,
                            h, p;
                        return l !== r && l !== null ? (h = "" + l[1], p = u.replace(l[0], ""), c = e.proxy(o.rules[p], t)(a, h)) : c = e.proxy(o.rules[u], s)(a), c
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, o, t);
                    else {
                        if (n === r) return o[t];
                        o[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, k, t);
                    else {
                        if (n === r) return k[t];
                        k[t] = n
                    }
                },
                debug: function () {
                    o.debug && (o.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), k.debug.apply(console, arguments)))
                },
                verbose: function () {
                    o.verbose && o.debug && (o.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), k.verbose.apply(console, arguments)))
                },
                error: function () {
                    k.error = Function.prototype.bind.call(console.error, console, o.name + ":"), k.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        o.performance && (t = (new Date).getTime(), r = m || t, n = t - r, m = t, g.push({
                            Element: N,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 100)
                    },
                    display: function () {
                        var t = o.name + ":",
                            n = 0;
                        m = !1, clearTimeout(k.performance.timer), e.each(g, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", v && (t += " '" + v + "'"), s.size() > 1 && (t += " (" + s.size() + ")"), (console.group !== r || console.table !== r) && g.length > 0 && (console.groupCollapsed(t), console.table ? console.table(g) : e.each(g, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), g = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = C,
                        o, u, a;
                    return n = n || w, i = N || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(E) ? E.push(a) : E !== r ? E = [E, a] : a !== r && (E = a), u
                }
            }, b ? (C === r && k.initialize(), k.invoke(y)) : (C !== r && k.destroy(), k.initialize())
        }), E !== r ? E : this
    }, e.fn.form.settings = {
        name: "Form",
        namespace: "form",
        debug: !0,
        verbose: !0,
        performance: !0,
        keyboardShortcuts: !0,
        on: "submit",
        inline: !1,
        delay: 200,
        revalidate: !0,
        transition: "scale",
        duration: 150,
        onValid: function () {},
        onInvalid: function () {},
        onSuccess: function () {
            return !0
        },
        onFailure: function () {
            return !1
        },
        metadata: {
            validate: "validate"
        },
        selector: {
            message: ".error.message",
            field: "input, textarea, select",
            group: ".field",
            input: "input",
            prompt: ".prompt",
            submit: ".submit"
        },
        className: {
            error: "error",
            success: "success",
            down: "down",
            label: "ui label prompt"
        },
        error: {
            method: "The method you called is not defined."
        },
        templates: {
            error: function (t) {
                var n = '<ul class="list">';
                return e.each(t, function (e, t) {
                    n += "<li>" + t + "</li>"
                }), n += "</ul>", e(n)
            },
            prompt: function (t) {
                return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
            }
        },
        rules: {
            checked: function () {
                return e(this).filter(":checked").size() > 0
            },
            empty: function (e) {
                return e !== r && "" !== e
            },
            email: function (e) {
                var t = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i");
                return t.test(e)
            },
            length: function (e, t) {
                return e !== r ? e.length >= t : !1
            },
            not: function (e, t) {
                return e != t
            },
            contains: function (e, t) {
                return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), e.search(t) !== -1
            },
            is: function (e, t) {
                return e == t
            },
            maxLength: function (e, t) {
                return e !== r ? e.length <= t : !1
            },
            match: function (t, n) {
                var i = e(this),
                    s;
                return i.find("#" + n).size() > 0 ? s = i.find("#" + n).val() : i.find("[name=" + n + "]").size() > 0 ? s = i.find("[name=" + n + "]").val() : i.find('[data-validate="' + n + '"]').size() > 0 && (s = i.find('[data-validate="' + n + '"]').val()), s !== r ? t.toString() == s.toString() : !1
            },
            url: function (e) {
                var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                return t.test(e)
            }
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.state = function (t) {
        var n = e(this),
            i = e.extend(!0, {}, e.fn.state.settings, t),
            s = n.selector || "",
            o = (new Date).getTime(),
            u = [],
            a = arguments[0],
            f = typeof a == "string",
            l = [].slice.call(arguments, 1),
            c = i.error,
            h = i.metadata,
            p = i.className,
            d = i.namespace,
            v = i.states,
            m = i.text,
            g = "." + d,
            y = d + "-module",
            b;
        return n.each(function () {
            var c = e(this),
                d = this,
                w = c.data(y),
                E;
            E = {
                initialize: function () {
                    E.verbose("Initializing module"), i.automatic && E.add.defaults(), i.context && s !== "" ? (E.allows("hover") && e(d, i.context).on(s, "mouseenter" + g, E.enable.hover).on(s, "mouseleave" + g, E.disable.hover), E.allows("down") && e(d, i.context).on(s, "mousedown" + g, E.enable.down).on(s, "mouseup" + g, E.disable.down), E.allows("focus") && e(d, i.context).on(s, "focus" + g, E.enable.focus).on(s, "blur" + g, E.disable.focus), e(i.context).on(s, "mouseenter" + g, E.change.text).on(s, "mouseleave" + g, E.reset.text).on(s, "click" + g, E.toggle.state)) : (E.allows("hover") && c.on("mouseenter" + g, E.enable.hover).on("mouseleave" + g, E.disable.hover), E.allows("down") && c.on("mousedown" + g, E.enable.down).on("mouseup" + g, E.disable.down), E.allows("focus") && c.on("focus" + g, E.enable.focus).on("blur" + g, E.disable.focus), c.on("mouseenter" + g, E.change.text).on("mouseleave" + g, E.reset.text).on("click" + g, E.toggle.state)), E.instantiate()
                },
                instantiate: function () {
                    E.verbose("Storing instance of module", E), w = E, c.data(y, E)
                },
                destroy: function () {
                    E.verbose("Destroying previous module", w), c.off(g).removeData(y)
                },
                refresh: function () {
                    E.verbose("Refreshing selector cache"), c = e(d)
                },
                add: {
                    defaults: function () {
                        var n = t && e.isPlainObject(t.states) ? t.states : {};
                        e.each(i.defaults, function (t, s) {
                            E.is[t] !== r && E.is[t]() && (E.verbose("Adding default states", t, d), e.extend(i.states, s, n))
                        })
                    }
                },
                is: {
                    active: function () {
                        return c.hasClass(p.active)
                    },
                    loading: function () {
                        return c.hasClass(p.loading)
                    },
                    inactive: function () {
                        return !c.hasClass(p.active)
                    },
                    enabled: function () {
                        return !c.is(i.filter.active)
                    },
                    disabled: function () {
                        return c.is(i.filter.active)
                    },
                    textEnabled: function () {
                        return !c.is(i.filter.text)
                    },
                    button: function () {
                        return c.is(".button:not(a, .submit)")
                    },
                    input: function () {
                        return c.is("input")
                    }
                },
                allow: function (e) {
                    E.debug("Now allowing state", e), v[e] = !0
                },
                disallow: function (e) {
                    E.debug("No longer allowing", e), v[e] = !1
                },
                allows: function (e) {
                    return v[e] || !1
                },
                enable: {
                    state: function (e) {
                        E.allows(e) && c.addClass(p[e])
                    },
                    focus: function () {
                        c.addClass(p.focus)
                    },
                    hover: function () {
                        c.addClass(p.hover)
                    },
                    down: function () {
                        c.addClass(p.down)
                    }
                },
                disable: {
                    state: function (e) {
                        E.allows(e) && c.removeClass(p[e])
                    },
                    focus: function () {
                        c.removeClass(p.focus)
                    },
                    hover: function () {
                        c.removeClass(p.hover)
                    },
                    down: function () {
                        c.removeClass(p.down)
                    }
                },
                toggle: {
                    state: function () {
                        var e = c.data(h.promise);
                        E.allows("active") && E.is.enabled() && (E.refresh(), e !== r ? E.listenTo(e) : E.change.state())
                    }
                },
                listenTo: function (t) {
                    E.debug("API request detected, waiting for state signal", t), t ? (m.loading && E.update.text(m.loading), e.when(t).then(function () {
                        t.state() == "resolved" ? (E.debug("API request succeeded"), i.activateTest = function () {
                            return !0
                        }, i.deactivateTest = function () {
                            return !0
                        }) : (E.debug("API request failed"), i.activateTest = function () {
                            return !1
                        }, i.deactivateTest = function () {
                            return !1
                        }), E.change.state()
                    })) : (i.activateTest = function () {
                        return !1
                    }, i.deactivateTest = function () {
                        return !1
                    })
                },
                change: {
                    state: function () {
                        E.debug("Determining state change direction"), E.is.inactive() ? E.activate() : E.deactivate(), i.sync && E.sync(), e.proxy(i.onChange, d)()
                    },
                    text: function () {
                        E.is.textEnabled() && (E.is.active() ? m.hover ? (E.verbose("Changing text to hover text", m.hover), E.update.text(m.hover)) : m.disable && (E.verbose("Changing text to disable text", m.disable), E.update.text(m.disable)) : m.hover ? (E.verbose("Changing text to hover text", m.disable), E.update.text(m.hover)) : m.enable && (E.verbose("Changing text to enable text", m.enable), E.update.text(m.enable)))
                    }
                },
                activate: function () {
                    e.proxy(i.activateTest, d)() && (E.debug("Setting state to active"), c.addClass(p.active), E.update.text(m.active)), e.proxy(i.onActivate, d)()
                },
                deactivate: function () {
                    e.proxy(i.deactivateTest, d)() && (E.debug("Setting state to inactive"), c.removeClass(p.active), E.update.text(m.inactive)), e.proxy(i.onDeactivate, d)()
                },
                sync: function () {
                    E.verbose("Syncing other buttons to current state"), E.is.active() ? n.not(c).state("activate") : n.not(c).state("deactivate")
                },
                get: {
                    text: function () {
                        return i.selector.text ? c.find(i.selector.text).text() : c.html()
                    },
                    textFor: function (e) {
                        return m[e] || !1
                    }
                },
                flash: {
                    text: function (e, t) {
                        var n = E.get.text();
                        E.debug("Flashing text message", e, t), e = e || i.text.flash, t = t || i.flashDuration, E.update.text(e), setTimeout(function () {
                            E.update.text(n)
                        }, t)
                    }
                },
                reset: {
                    text: function () {
                        var e = m.active || c.data(h.storedText),
                            t = m.inactive || c.data(h.storedText);
                        E.is.textEnabled() && (E.is.active() && e ? (E.verbose("Resetting active text", e), E.update.text(e)) : t && (E.verbose("Resetting inactive text", e), E.update.text(t)))
                    }
                },
                update: {
                    text: function (e) {
                        var t = E.get.text();
                        e && e !== t ? (E.debug("Updating text", e), i.selector.text ? c.data(h.storedText, e).find(i.selector.text).text(e) : c.data(h.storedText, e).html(e)) : E.debug("Text is already sane, ignoring update", e)
                    }
                },
                setting: function (t, n) {
                    E.debug("Changing setting", t, n);
                    if (n === r) return i[t];
                    e.isPlainObject(t) ? e.extend(!0, i, t) : i[t] = n
                },
                internal: function (t, n) {
                    E.debug("Changing internal", t, n);
                    if (n === r) return E[t];
                    e.isPlainObject(t) ? e.extend(!0, E, t) : E[t] = n
                },
                debug: function () {
                    i.debug && (i.performance ? E.performance.log(arguments) : (E.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), E.debug.apply(console, arguments)))
                },
                verbose: function () {
                    i.verbose && i.debug && (i.performance ? E.performance.log(arguments) : (E.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), E.verbose.apply(console, arguments)))
                },
                error: function () {
                    E.error = Function.prototype.bind.call(console.error, console, i.name + ":"), E.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        i.performance && (t = (new Date).getTime(), r = o || t, n = t - r, o = t, u.push({
                            Element: d,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(E.performance.timer), E.performance.timer = setTimeout(E.performance.display, 100)
                    },
                    display: function () {
                        var t = i.name + ":",
                            a = 0;
                        o = !1, clearTimeout(E.performance.timer), e.each(u, function (e, t) {
                            a += t["Execution Time"]
                        }), t += " " + a + "ms", s && (t += " '" + s + "'"), n.size() > 1 && (t += " (" + n.size() + ")"), (console.group !== r || console.table !== r) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), u = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = w,
                        o, u, a;
                    return n = n || l, i = d || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(b) ? b.push(a) : b !== r ? b = [b, a] : a !== r && (b = a), u
                }
            }, f ? (w === r && E.initialize(), E.invoke(a)) : (w !== r && E.destroy(), E.initialize())
        }), b !== r ? b : this
    }, e.fn.state.settings = {
        name: "State",
        debug: !0,
        verbose: !0,
        namespace: "state",
        performance: !0,
        onActivate: function () {},
        onDeactivate: function () {},
        onChange: function () {},
        activateTest: function () {
            return !0
        },
        deactivateTest: function () {
            return !0
        },
        automatic: !0,
        sync: !1,
        flashDuration: 3e3,
        filter: {
            text: ".loading, .disabled",
            active: ".disabled"
        },
        context: !1,
        error: {
            method: "The method you called is not defined."
        },
        metadata: {
            promise: "promise",
            storedText: "stored-text"
        },
        className: {
            focus: "focus",
            hover: "hover",
            down: "down",
            active: "active",
            loading: "loading"
        },
        selector: {
            text: !1
        },
        defaults: {
            input: {
                hover: !0,
                focus: !0,
                down: !0,
                loading: !1,
                active: !1
            },
            button: {
                hover: !0,
                focus: !1,
                down: !0,
                active: !0,
                loading: !0
            }
        },
        states: {
            hover: !0,
            focus: !0,
            down: !0,
            loading: !1,
            active: !1
        },
        text: {
            flash: !1,
            hover: !1,
            active: !1,
            inactive: !1,
            enable: !1,
            disable: !1
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.chatroom = function (t) {
        var n = e(this),
            i = n.selector || "",
            s = (new Date).getTime(),
            o = [],
            u = arguments[0],
            a = typeof u == "string",
            f = [].slice.call(arguments, 1),
            l;
        return e(this).each(function () {
            var n = e.extend(!0, {}, e.fn.chatroom.settings, t),
                l = n.className,
                c = n.namespace,
                h = n.selector,
                p = n.error,
                d = e(this),
                v = d.find(h.expandButton),
                m = d.find(h.userListButton),
                g = d.find(h.userList),
                y = d.find(h.room),
                b = d.find(h.userCount),
                w = d.find(h.log),
                E = d.find(h.message),
                S = d.find(h.messageInput),
                x = d.find(h.messageButton),
                T = d.data("module"),
                N = this,
                C = "",
                k = {},
                L, A, O, M, _, D, P;
            P = {
                width: {
                    log: w.width(),
                    userList: g.outerWidth()
                },
                initialize: function () {
                    Pusher === r && P.error(p.pusher);
                    if (n.key === r || n.channelName === r) return P.error(p.key), !1;
                    if (!n.endpoint.message && !n.endpoint.authentication) return P.error(p.endpoint), !1;
                    D = new Pusher(n.key), Pusher.channel_auth_endpoint = n.endpoint.authentication, L = D.subscribe(n.channelName), L.bind("pusher:subscription_succeeded", P.user.list.create), L.bind("pusher:subscription_error", P.error), L.bind("pusher:member_added", P.user.joined), L.bind("pusher:member_removed", P.user.left), L.bind("update_messages", P.message.receive), e.each(n.customEvents, function (e, t) {
                        L.bind(e, t)
                    }), m.on("click." + c, P.event.toggleUserList), v.on("click." + c, P.event.toggleExpand), S.on("keydown." + c, P.event.input.keydown).on("keyup." + c, P.event.input.keyup), x.on("mouseenter." + c, P.event.hover).on("mouseleave." + c, P.event.hover).on("click." + c, P.event.submit), w.animate({
                        scrollTop: w.prop("scrollHeight")
                    }, 400), d.data("module", P).addClass(l.loading)
                },
                refresh: function () {
                    m.removeClass(l.active), P.width = {
                        log: w.width(),
                        userList: g.outerWidth()
                    }, m.hasClass(l.active) && P.user.list.hide(), d.data("module", P)
                },
                user: {
                    updateCount: function () {
                        n.userCount && (k = d.data("users"), M = 0, e.each(k, function () {
                            M++
                        }), b.html(n.templates.userCount(M)))
                    },
                    joined: function (t) {
                        k = d.data("users"), t.id != "anonymous" && k[t.id] === r && (k[t.id] = t.info, n.randomColor && t.info.color === r && (t.info.color = n.templates.color(t.id)), C = n.templates.userList(t.info), t.info.isAdmin ? e(C).prependTo(g) : e(C).appendTo(g), n.partingMessages && (w.append(n.templates.joined(t.info)), P.message.scroll.test()), P.user.updateCount())
                    },
                    left: function (e) {
                        k = d.data("users"), e !== r && e.id !== "anonymous" && (delete k[e.id], d.data("users", k), g.find("[data-id=" + e.id + "]").remove(), n.partingMessages && (w.append(n.templates.left(e.info)), P.message.scroll.test()), P.user.updateCount())
                    },
                    list: {
                        create: function (t) {
                            k = {}, t.each(function (e) {
                                e.id !== "anonymous" && e.id !== "undefined" && (n.randomColor && e.info.color === r && (e.info.color = n.templates.color(e.id)), C = e.info.isAdmin ? n.templates.userList(e.info) + C : C + n.templates.userList(e.info), k[e.id] = e.info)
                            }), d.data("users", k).data("user", k[t.me.id]).removeClass(l.loading), g.html(C), P.user.updateCount(), e.proxy(n.onJoin, g.children())()
                        },
                        show: function () {
                            w.animate({
                                width: P.width.log - P.width.userList
                            }, {
                                duration: n.speed,
                                easing: n.easing,
                                complete: P.message.scroll.move
                            })
                        },
                        hide: function () {
                            w.stop().animate({
                                width: P.width.log
                            }, {
                                duration: n.speed,
                                easing: n.easing,
                                complete: P.message.scroll.move
                            })
                        }
                    }
                },
                message: {
                    scroll: {
                        test: function () {
                            _ = w.prop("scrollHeight") - w.height(), Math.abs(w.scrollTop() - _) < n.scrollArea && P.message.scroll.move()
                        },
                        move: function () {
                            _ = w.prop("scrollHeight") - w.height(), w.scrollTop(_)
                        }
                    },
                    send: function (t) {
                        P.utils.emptyString(t) || e.api({
                            url: n.endpoint.message,
                            method: "POST",
                            data: {
                                message: {
                                    content: t,
                                    timestamp: (new Date).getTime()
                                }
                            }
                        })
                    },
                    receive: function (e) {
                        O = e.data, k = d.data("users"), A = d.data("user"), k[O.userID] !== r && (A === r || A.id != O.userID) && (O.user = k[O.userID], P.message.display(O))
                    },
                    display: function (t) {
                        w.append(n.templates.message(t)), P.message.scroll.test(), e.proxy(n.onMessage, w.children().last())()
                    }
                },
                expand: function () {
                    d.addClass(l.expand), e.proxy(n.onExpand, d)(), P.refresh()
                },
                contract: function () {
                    d.removeClass(l.expand), e.proxy(n.onContract, d)(), P.refresh()
                },
                event: {
                    input: {
                        keydown: function (e) {
                            e.which == 13 && x.addClass(l.down)
                        },
                        keyup: function (e) {
                            e.which == 13 && (x.removeClass(l.down), P.event.submit())
                        }
                    },
                    submit: function () {
                        var e = S.val(),
                            t = d.data("user");
                        t !== r && !P.utils.emptyString(e) && (P.message.send(e), P.message.display({
                            user: t,
                            text: e
                        }), P.message.scroll.move(), S.val(""))
                    },
                    toggleExpand: function () {
                        d.hasClass(l.expand) ? (v.removeClass(l.active), P.contract()) : (v.addClass(l.active), P.expand())
                    },
                    toggleUserList: function () {
                        w.is(":animated") || (m.hasClass(l.active) ? (m.removeClass("active"), P.user.list.hide()) : (m.addClass(l.active), P.user.list.show()))
                    }
                },
                utils: {
                    emptyString: function (e) {
                        return typeof e == "string" ? e.search(/\S/) == -1 : !1
                    }
                },
                setting: function (t, i) {
                    if (i === r) return n[t];
                    e.isPlainObject(t) ? e.extend(!0, n, t) : n[t] = i
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, P, t);
                    else {
                        if (n === r) return P[t];
                        P[t] = n
                    }
                },
                debug: function () {
                    n.debug && (n.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, n.name + ":"), P.debug.apply(console, arguments)))
                },
                verbose: function () {
                    n.verbose && n.debug && (n.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, n.name + ":"), P.verbose.apply(console, arguments)))
                },
                error: function () {
                    P.error = Function.prototype.bind.call(console.error, console, n.name + ":"), P.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, r, i;
                        n.performance && (t = (new Date).getTime(), i = s || t, r = t - i, s = t, o.push({
                            Element: N,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": r
                        })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 100)
                    },
                    display: function () {
                        var t = n.name + ":",
                            u = 0;
                        s = !1, clearTimeout(P.performance.timer), e.each(o, function (e, t) {
                            u += t["Execution Time"]
                        }), t += " " + u + "ms", i && (t += " '" + i + "'"), (console.group !== r || console.table !== r) && o.length > 0 && (console.groupCollapsed(t), console.table ? console.table(o) : e.each(o, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), o = []
                    }
                },
                invoke: function (t, n, i) {
                    var s, o;
                    return n = n || f, i = N || i, typeof t == "string" && T !== r && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, i) {
                        e.isPlainObject(T[i]) && n != s ? T = T[i] : T[i] !== r ? o = T[i] : P.error(p.method, t)
                    })), e.isFunction(o) ? o.apply(i, n) : o || !1
                }
            }, a ? (T === r && P.initialize(), P.invoke(u)) : (T !== r && P.destroy(), P.initialize())
        }), l !== r ? l : this
    }, e.fn.chatroom.settings = {
        name: "Chat",
        debug: !1,
        namespace: "chat",
        channel: "present-chat",
        onJoin: function () {},
        onMessage: function () {},
        onExpand: function () {},
        onContract: function () {},
        customEvents: {},
        partingMessages: !1,
        userCount: !0,
        randomColor: !0,
        speed: 300,
        easing: "easeOutQuint",
        scrollArea: 9999,
        endpoint: {
            message: !1,
            authentication: !1
        },
        error: {
            method: "The method you called is not defined",
            endpoint: "Please define a message and authentication endpoint.",
            key: "You must specify a pusher key and channel.",
            pusher: "You must include the Pusher library."
        },
        className: {
            expand: "expand",
            active: "active",
            hover: "hover",
            down: "down",
            loading: "loading"
        },
        selector: {
            userCount: ".actions .message",
            userListButton: ".actions .list.button",
            expandButton: ".actions .expand.button",
            room: ".room",
            userList: ".room .list",
            log: ".room .log",
            message: ".room .log .message",
            author: ".room log .message .author",
            messageInput: ".talk input",
            messageButton: ".talk .send.button"
        },
        templates: {
            userCount: function (e) {
                return e + " users in chat"
            },
            color: function (e) {
                var t = ["#000000", "#333333", "#666666", "#999999", "#CC9999", "#CC6666", "#CC3333", "#993333", "#663333", "#CC6633", "#CC9966", "#CC9933", "#999966", "#CCCC66", "#99CC66", "#669933", "#669966", "#33A3CC", "#336633", "#33CCCC", "#339999", "#336666", "#336699", "#6666CC", "#9966CC", "#333399", "#663366", "#996699", "#993366", "#CC6699"];
                return t[Math.floor(Math.random() * t.length)]
            },
            message: function (e) {
                var t = "";
                return e.user.isAdmin ? (e.user.color = "#55356A", t += '<div class="admin message">', t += '<span class="quirky ui flag team"></span>') : t += '<div class="message">', t += "<p>", e.user.color !== r ? t += '<span class="author" style="color: ' + e.user.color + ';">' + e.user.name + "</span>: " : t += '<span class="author">' + e.user.name + "</span>: ", t += "" + e.text + " </p>" + "</div>", t
            },
            joined: function (e) {
                return typeof e.name !== r ? '<div class="status">' + e.name + " has joined the chat.</div>" : !1
            },
            left: function (e) {
                return typeof e.name !== r ? '<div class="status">' + e.name + " has left the chat.</div>" : !1
            },
            userList: function (e) {
                var t = "";
                return e.isAdmin && (e.color = "#55356A"), t += '<div class="user" data-id="' + e.id + '">' + ' <div class="image">' + '   <img src="' + e.avatarURL + '">' + " </div>", e.color !== r ? t += ' <p><a href="/users/' + e.id + '" target="_blank" style="color: ' + e.color + ';">' + e.name + "</a></p>" : t += ' <p><a href="/users/' + e.id + '" target="_blank">' + e.name + "</a></p>", t += "</div>", t
            }
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.checkbox = function (t) {
        var n = e(this),
            i = n.selector || "",
            s = (new Date).getTime(),
            o = [],
            u = arguments[0],
            a = typeof u == "string",
            f = [].slice.call(arguments, 1),
            l;
        return n.each(function () {
            var n = e.extend(!0, {}, e.fn.checkbox.settings, t),
                c = n.className,
                h = n.namespace,
                p = n.error,
                d = "." + h,
                v = "module-" + h,
                m = e(this),
                g = e(this).next(n.selector.label).first(),
                y = e(this).find(n.selector.input),
                b = m.selector || "",
                w = m.data(v),
                E = this,
                S;
            S = {
                initialize: function () {
                    S.verbose("Initializing checkbox", n), n.context && b !== "" ? (S.verbose("Adding delegated events"), e(E, n.context).on(b, "click" + d, S.toggle).on(b + " + " + n.selector.label, "click" + d, S.toggle)) : (m.on("click" + d, S.toggle).data(v, S), g.on("click" + d, S.toggle)), S.instantiate()
                },
                instantiate: function () {
                    S.verbose("Storing instance of module", S), w = S, m.data(v, S)
                },
                destroy: function () {
                    S.verbose("Destroying previous module"), m.off(d).removeData(v)
                },
                is: {
                    radio: function () {
                        return m.hasClass(c.radio)
                    },
                    enabled: function () {
                        return y.prop("checked") !== r && y.prop("checked")
                    },
                    disabled: function () {
                        return !S.is.enabled()
                    }
                },
                can: {
                    disable: function () {
                        return typeof n.required == "boolean" ? n.required : !S.is.radio()
                    }
                },
                enable: function () {
                    S.debug("Enabling checkbox", y), y.prop("checked", !0).trigger("change"), e.proxy(n.onChange, y.get())(), e.proxy(n.onEnable, y.get())()
                },
                disable: function () {
                    S.debug("Disabling checkbox"), y.prop("checked", !1).trigger("change"), e.proxy(n.onChange, y.get())(), e.proxy(n.onDisable, y.get())()
                },
                toggle: function (e) {
                    S.verbose("Determining new checkbox state"), y.prop("disabled") || (S.is.disabled() ? S.enable() : S.is.enabled() && S.can.disable() && S.disable())
                },
                setting: function (t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, n, t);
                    else {
                        if (i === r) return n[t];
                        n[t] = i
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, S, t);
                    else {
                        if (n === r) return S[t];
                        S[t] = n
                    }
                },
                debug: function () {
                    n.debug && (n.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, n.name + ":"), S.debug.apply(console, arguments)))
                },
                verbose: function () {
                    n.verbose && n.debug && (n.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, n.name + ":"), S.verbose.apply(console, arguments)))
                },
                error: function () {
                    S.error = Function.prototype.bind.call(console.error, console, n.name + ":"), S.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, r, i;
                        n.performance && (t = (new Date).getTime(), i = s || t, r = t - i, s = t, o.push({
                            Element: E,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": r
                        })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 100)
                    },
                    display: function () {
                        var t = n.name + ":",
                            u = 0;
                        s = !1, clearTimeout(S.performance.timer), e.each(o, function (e, t) {
                            u += t["Execution Time"]
                        }), t += " " + u + "ms", i && (t += " '" + i + "'"), (console.group !== r || console.table !== r) && o.length > 0 && (console.groupCollapsed(t), console.table ? console.table(o) : e.each(o, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), o = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = w,
                        o, u, a;
                    return n = n || f, i = E || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(l) ? l.push(a) : l !== r ? l = [l, a] : a !== r && (l = a), u
                }
            }, a ? (w === r && S.initialize(), S.invoke(u)) : (w !== r && S.destroy(), S.initialize())
        }), l !== r ? l : this
    }, e.fn.checkbox.settings = {
        name: "Checkbox",
        namespace: "checkbox",
        debug: !1,
        verbose: !0,
        performance: !0,
        context: !1,
        required: "auto",
        onChange: function () {},
        onEnable: function () {},
        onDisable: function () {},
        error: {
            method: "The method you called is not defined."
        },
        selector: {
            input: "input[type=checkbox], input[type=radio]",
            label: "label"
        },
        className: {
            radio: "radio"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.dimmer = function (t) {
        var i = e(this),
            s = (new Date).getTime(),
            o = [],
            u = arguments[0],
            a = typeof u == "string",
            f = [].slice.call(arguments, 1),
            l;
        return i.each(function () {
            var c = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                h = c.selector,
                p = c.namespace,
                d = c.className,
                v = c.error,
                m = "." + p,
                g = "module-" + p,
                y = i.selector || "",
                b = "ontouchstart" in n.documentElement ? "touchstart" : "click",
                w = e(this),
                E, S, x = this,
                T = w.data(g),
                N;
            N = {
                preinitialize: function () {
                    N.is.dimmer() ? (S = w.parent(), E = w) : (S = w, N.has.dimmer() ? E = S.children(h.dimmer).first() : E = N.create())
                },
                initialize: function () {
                    N.debug("Initializing dimmer", c), c.on == "hover" ? S.on("mouseenter" + m, N.show).on("mouseleave" + m, N.hide) : c.on == "click" && S.on(b + m, N.toggle), N.is.page() && (N.debug("Setting as a page dimmer", S), N.set.pageDimmer()), c.closable && (N.verbose("Adding dimmer close event", E), E.on(b + m, N.event.click)), N.set.dimmable(), N.instantiate()
                },
                instantiate: function () {
                    N.verbose("Storing instance of module", N), T = N, w.data(g, T)
                },
                destroy: function () {
                    N.verbose("Destroying previous module", E), w.removeData(g), S.off(m), E.off(m)
                },
                event: {
                    click: function (t) {
                        N.verbose("Determining if event occured on dimmer", t);
                        if (E.find(t.target).size() === 0 || e(t.target).is(h.content)) N.hide(), t.stopImmediatePropagation()
                    }
                },
                addContent: function (t) {
                    var n = e(t);
                    N.debug("Add content to dimmer", n), n.parent()[0] !== E[0] && n.detach().appendTo(E)
                },
                create: function () {
                    return e(c.template.dimmer()).appendTo(S)
                },
                animate: {
                    show: function (t) {
                        t = e.isFunction(t) ? t : function () {}, N.set.dimmed(), c.on != "hover" && c.useCSS && e.fn.transition !== r && E.transition("is supported") ? E.transition({
                            animation: c.transition + " in",
                            queue: !0,
                            duration: N.get.duration(),
                            complete: function () {
                                N.set.active(), t()
                            }
                        }) : (N.verbose("Showing dimmer animation with javascript"), E.stop().css({
                            opacity: 0,
                            width: "100%",
                            height: "100%"
                        }).fadeTo(N.get.duration(), 1, function () {
                            E.removeAttr("style"), N.set.active(), t()
                        }))
                    },
                    hide: function (t) {
                        t = e.isFunction(t) ? t : function () {}, c.on != "hover" && c.useCSS && e.fn.transition !== r && E.transition("is supported") ? (N.verbose("Hiding dimmer with css"), E.transition({
                            animation: c.transition + " out",
                            duration: N.get.duration(),
                            queue: !0,
                            complete: function () {
                                N.remove.dimmed(), N.remove.active(), t()
                            }
                        })) : (N.verbose("Hiding dimmer with javascript"), E.stop().fadeOut(N.get.duration(), function () {
                            E.removeAttr("style"), N.remove.dimmed(), N.remove.active(), t()
                        }))
                    }
                },
                get: {
                    dimmer: function () {
                        return E
                    },
                    duration: function () {
                        return typeof c.duration == "object" ? N.is.active() ? c.duration.hide : c.duration.show : c.duration
                    }
                },
                has: {
                    dimmer: function () {
                        return w.children(h.dimmer).size() > 0
                    }
                },
                is: {
                    active: function () {
                        return E.hasClass(d.active)
                    },
                    animating: function () {
                        return E.is(":animated") || E.hasClass(d.transition)
                    },
                    dimmer: function () {
                        return w.is(h.dimmer)
                    },
                    dimmable: function () {
                        return w.is(h.dimmable)
                    },
                    dimmed: function () {
                        return S.hasClass(d.dimmed)
                    },
                    disabled: function () {
                        return S.hasClass(d.disabled)
                    },
                    enabled: function () {
                        return !N.is.disabled()
                    },
                    page: function () {
                        return S.is("body")
                    },
                    pageDimmer: function () {
                        return E.hasClass(d.pageDimmer)
                    }
                },
                can: {
                    show: function () {
                        return !E.hasClass(d.disabled)
                    }
                },
                set: {
                    active: function () {
                        N.set.dimmed(), E.removeClass(d.transition).addClass(d.active)
                    },
                    dimmable: function () {
                        S.addClass(d.dimmable)
                    },
                    dimmed: function () {
                        S.addClass(d.dimmed)
                    },
                    pageDimmer: function () {
                        E.addClass(d.pageDimmer)
                    },
                    disabled: function () {
                        E.addClass(d.disabled)
                    }
                },
                remove: {
                    active: function () {
                        E.removeClass(d.transition).removeClass(d.active)
                    },
                    dimmed: function () {
                        S.removeClass(d.dimmed)
                    },
                    disabled: function () {
                        E.removeClass(d.disabled)
                    }
                },
                show: function (t) {
                    t = e.isFunction(t) ? t : function () {}, N.debug("Showing dimmer", E, c), !N.is.active() && N.is.enabled() ? (N.animate.show(t), e.proxy(c.onShow, x)(), e.proxy(c.onChange, x)()) : N.debug("Dimmer is already shown or disabled")
                },
                hide: function (t) {
                    t = e.isFunction(t) ? t : function () {}, N.is.active() || N.is.animating() ? (N.debug("Hiding dimmer", E), N.animate.hide(t), e.proxy(c.onHide, x)(), e.proxy(c.onChange, x)()) : N.debug("Dimmer is not visible")
                },
                toggle: function () {
                    N.verbose("Toggling dimmer visibility", E), N.is.dimmed() ? N.hide() : N.show()
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, c, t);
                    else {
                        if (n === r) return c[t];
                        c[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, N, t);
                    else {
                        if (n === r) return N[t];
                        N[t] = n
                    }
                },
                debug: function () {
                    c.debug && (c.performance ? N.performance.log(arguments) : (N.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), N.debug.apply(console, arguments)))
                },
                verbose: function () {
                    c.verbose && c.debug && (c.performance ? N.performance.log(arguments) : (N.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), N.verbose.apply(console, arguments)))
                },
                error: function () {
                    N.error = Function.prototype.bind.call(console.error, console, c.name + ":"), N.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        c.performance && (t = (new Date).getTime(), r = s || t, n = t - r, s = t, o.push({
                            Element: x,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(N.performance.timer), N.performance.timer = setTimeout(N.performance.display, 100)
                    },
                    display: function () {
                        var t = c.name + ":",
                            n = 0;
                        s = !1, clearTimeout(N.performance.timer), e.each(o, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", y && (t += " '" + y + "'"), i.size() > 1 && (t += " (" + i.size() + ")"), (console.group !== r || console.table !== r) && o.length > 0 && (console.groupCollapsed(t), console.table ? console.table(o) : e.each(o, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), o = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = T,
                        o, u, a;
                    return n = n || f, i = x || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(l) ? l.push(a) : l !== r ? l = [l, a] : a !== r && (l = a), u
                }
            }, N.preinitialize(), a ? (T === r && N.initialize(), N.invoke(u)) : (T !== r && N.destroy(), N.initialize())
        }), l !== r ? l : this
    }, e.fn.dimmer.settings = {
        name: "Dimmer",
        namespace: "dimmer",
        debug: !1,
        verbose: !0,
        performance: !0,
        transition: "fade",
        useCSS: !0,
        on: !1,
        closable: !0,
        duration: {
            show: 500,
            hide: 500
        },
        onChange: function () {},
        onShow: function () {},
        onHide: function () {},
        error: {
            method: "The method you called is not defined."
        },
        selector: {
            dimmable: ".ui.dimmable",
            dimmer: ".ui.dimmer",
            content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
        },
        template: {
            dimmer: function () {
                return e("<div />").attr("class", "ui dimmer")
            }
        },
        className: {
            active: "active",
            dimmable: "ui dimmable",
            dimmed: "dimmed",
            disabled: "disabled",
            pageDimmer: "page",
            hide: "hide",
            show: "show",
            transition: "transition"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.dropdown = function (t) {
        var i = e(this),
            s = e(n),
            o = i.selector || "",
            u = "ontouchstart" in n.documentElement,
            a = (new Date).getTime(),
            f = [],
            l = arguments[0],
            c = typeof l == "string",
            h = [].slice.call(arguments, 1),
            p;
        return i.each(function () {
            var n = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dropdown.settings, t) : e.extend({}, e.fn.dropdown.settings),
                d = n.className,
                v = n.metadata,
                m = n.namespace,
                g = n.selector,
                y = n.error,
                b = "." + m,
                w = "module-" + m,
                E = e(this),
                S = E.find(g.item),
                x = E.find(g.text),
                T = E.find(g.input),
                N = E.children(g.menu),
                C = this,
                k = E.data(w),
                L;
            L = {
                initialize: function () {
                    L.debug("Initializing dropdown", n), L.save.defaults(), L.set.selected(), u && L.bind.touchEvents(), L.bind.mouseEvents(), L.instantiate()
                },
                instantiate: function () {
                    L.verbose("Storing instance of dropdown", L), k = L, E.data(w, L)
                },
                destroy: function () {
                    L.verbose("Destroying previous dropdown for", E), S.off(b), E.off(b).removeData(w)
                },
                bind: {
                    touchEvents: function () {
                        L.debug("Touch device detected binding touch events"), E.on("touchstart" + b, L.event.test.toggle), S.on("touchstart" + b, L.event.item.mouseenter).on("touchstart" + b, L.event.item.click)
                    },
                    mouseEvents: function () {
                        L.verbose("Mouse detected binding mouse events"), n.on == "click" ? E.on("click" + b, L.event.test.toggle) : n.on == "hover" ? E.on("mouseenter" + b, L.delay.show).on("mouseleave" + b, L.delay.hide) : E.on(n.on + b, L.toggle), S.on("mouseenter" + b, L.event.item.mouseenter).on("mouseleave" + b, L.event.item.mouseleave).on("click" + b, L.event.item.click)
                    },
                    intent: function () {
                        L.verbose("Binding hide intent event to document"), u && s.on("touchstart" + b, L.event.test.touch).on("touchmove" + b, L.event.test.touch), s.on("click" + b, L.event.test.hide)
                    }
                },
                unbind: {
                    intent: function () {
                        L.verbose("Removing hide intent event from document"), u && s.off("touchstart" + b).off("touchmove" + b), s.off("click" + b)
                    }
                },
                event: {
                    test: {
                        toggle: function (e) {
                            L.determine.intent(e, L.toggle) && e.preventDefault()
                        },
                        touch: function (e) {
                            L.determine.intent(e, function () {
                                e.type == "touchstart" ? L.timer = setTimeout(L.hide, n.delay.touch) : e.type == "touchmove" && clearTimeout(L.timer)
                            }), e.stopPropagation()
                        },
                        hide: function (e) {
                            L.determine.intent(e, L.hide)
                        }
                    },
                    item: {
                        mouseenter: function (t) {
                            var r = e(this).find(g.submenu),
                                i = e(this).siblings(g.item).children(g.menu);
                            if (r.length > 0 || i.length > 0) clearTimeout(L.itemTimer), L.itemTimer = setTimeout(function () {
                                i.length > 0 && L.animate.hide(!1, i.filter(":visible")), r.length > 0 && (L.verbose("Showing sub-menu", r), L.animate.show(!1, r))
                            }, n.delay.show * 2), t.preventDefault(), t.stopPropagation()
                        },
                        mouseleave: function (t) {
                            var r = e(this).find(g.menu);
                            r.size() > 0 && (clearTimeout(L.itemTimer), L.itemTimer = setTimeout(function () {
                                L.verbose("Hiding sub-menu", r), L.animate.hide(!1, r)
                            }, n.delay.hide))
                        },
                        click: function (t) {
                            var i = e(this),
                                s = i.data(v.text) !== r ? i.data(v.text) : i.text(),
                                o = i.data(v.value) !== r ? i.data(v.value) : typeof s == "string" ? s.toLowerCase() : s,
                                u = function () {
                                    L.determine.selectAction(s, o), e.proxy(n.onChange, C)(o, s)
                                };
                            i.find(g.menu).size() === 0 && (t.type == "touchstart" ? i.one("click", u) : u())
                        }
                    },
                    resetStyle: function () {
                        e(this).removeAttr("style")
                    }
                },
                determine: {
                    selectAction: function (t, r) {
                        L.verbose("Determining action", n.action), e.isFunction(L.action[n.action]) ? (L.verbose("Triggering preset action", n.action, t, r), L.action[n.action](t, r)) : e.isFunction(n.action) ? (L.verbose("Triggering user action", n.action, t, r), n.action(t, r)) : L.error(y.action, n.action)
                    },
                    intent: function (t, n) {
                        return L.debug("Determining whether event occurred in dropdown", t.target), n = n || function () {}, e(t.target).closest(N).size() === 0 ? (L.verbose("Triggering event", n), n(), !0) : (L.verbose("Event occurred in dropdown, canceling callback"), !1)
                    }
                },
                action: {
                    nothing: function () {},
                    hide: function () {
                        L.hide()
                    },
                    activate: function (e, t) {
                        t = t !== r ? t : e, L.set.selected(t), L.set.value(t), L.hide()
                    },
                    auto: function (e, t) {
                        t = t !== r ? t : e, L.set.selected(t), L.set.value(t), L.hide()
                    },
                    changeText: function (e, t) {
                        t = t !== r ? t : e, L.set.selected(t), L.hide()
                    },
                    updateForm: function (e, t) {
                        t = t !== r ? t : e, L.set.selected(t), L.set.value(t), L.hide()
                    }
                },
                get: {
                    text: function () {
                        return x.text()
                    },
                    value: function () {
                        return T.size() > 0 ? T.val() : E.data(v.value)
                    },
                    item: function (t, n) {
                        var i = !1;
                        return t = t !== r ? t : L.get.value() !== r ? L.get.value() : L.get.text(), n === r && t === "" ? (L.debug("Ambiguous dropdown value using strict type check", t), n = !0) : n = n || !1, t !== r ? S.each(function () {
                            var s = e(this),
                                o = s.data(v.text) !== r ? s.data(v.text) : s.text(),
                                u = s.data(v.value) !== r ? s.data(v.value) : typeof o == "string" ? o.toLowerCase() : o;
                            n ? u === t ? i = e(this) : !i && o === t && (i = e(this)) : u == t ? i = e(this) : !i && o == t && (i = e(this))
                        }) : t = L.get.text(), i || !1
                    }
                },
                restore: {
                    defaults: function () {
                        L.restore.defaultText(), L.restore.defaultValue()
                    },
                    defaultText: function () {
                        var e = E.data(v.defaultText);
                        L.debug("Restoring default text", e), L.set.text(e)
                    },
                    defaultValue: function () {
                        var e = E.data(v.defaultValue);
                        e !== r && (L.debug("Restoring default value", e), L.set.selected(e), L.set.value(e))
                    }
                },
                save: {
                    defaults: function () {
                        L.save.defaultText(), L.save.defaultValue()
                    },
                    defaultValue: function () {
                        E.data(v.defaultValue, L.get.value())
                    },
                    defaultText: function () {
                        E.data(v.defaultText, x.text())
                    }
                },
                set: {
                    text: function (e) {
                        L.debug("Changing text", e, x), x.removeClass(d.placeholder), x.text(e)
                    },
                    value: function (e) {
                        L.debug("Adding selected value to hidden input", e, T), T.size() > 0 ? T.val(e).trigger("change") : E.data(v.value, e)
                    },
                    active: function () {
                        E.addClass(d.active)
                    },
                    visible: function () {
                        E.addClass(d.visible)
                    },
                    selected: function (e) {
                        var t = L.get.item(e),
                            n;
                        t && (L.debug("Setting selected menu item to", t), n = t.data(v.text) !== r ? t.data(v.text) : t.text(), S.removeClass(d.active), t.addClass(d.active), L.set.text(n))
                    }
                },
                remove: {
                    active: function () {
                        E.removeClass(d.active)
                    },
                    visible: function () {
                        E.removeClass(d.visible)
                    }
                },
                is: {
                    selection: function () {
                        return E.hasClass(d.selection)
                    },
                    animated: function (e) {
                        return e ? e.is(":animated") || e.transition("is animating") : N.is(":animated") || N.transition("is animating")
                    },
                    visible: function (e) {
                        return e ? e.is(":visible") : N.is(":visible")
                    },
                    hidden: function (e) {
                        return e ? e.is(":not(:visible)") : N.is(":not(:visible)")
                    }
                },
                can: {
                    click: function () {
                        return u || n.on == "click"
                    },
                    show: function () {
                        return !E.hasClass(d.disabled)
                    }
                },
                animate: {
                    show: function (t, i) {
                        var s = i || N;
                        t = t || function () {}, L.is.hidden(s) && (L.verbose("Doing menu show animation", s), n.transition == "none" ? t() : e.fn.transition !== r && E.transition("is supported") ? s.transition({
                            animation: n.transition + " in",
                            duration: n.duration,
                            complete: t,
                            queue: !1
                        }) : n.transition == "slide down" ? s.hide().clearQueue().children().clearQueue().css("opacity", 0).delay(50).animate({
                            opacity: 1
                        }, n.duration, "easeOutQuad", L.event.resetStyle).end().slideDown(100, "easeOutQuad", function () {
                            e.proxy(L.event.resetStyle, this)(), t()
                        }) : n.transition == "fade" ? s.hide().clearQueue().fadeIn(n.duration, function () {
                            e.proxy(L.event.resetStyle, this)(), t()
                        }) : L.error(y.transition, n.transition))
                    },
                    hide: function (t, i) {
                        var s = i || N;
                        t = t || function () {}, L.is.visible(s) && (L.verbose("Doing menu hide animation", s), e.fn.transition !== r && E.transition("is supported") ? s.transition({
                            animation: n.transition + " out",
                            duration: n.duration,
                            complete: t,
                            queue: !1
                        }) : n.transition == "none" ? t() : n.transition == "slide down" ? s.show().clearQueue().children().clearQueue().css("opacity", 1).animate({
                            opacity: 0
                        }, 100, "easeOutQuad", L.event.resetStyle).end().delay(50).slideUp(100, "easeOutQuad", function () {
                            e.proxy(L.event.resetStyle, this)(), t()
                        }) : n.transition == "fade" ? s.show().clearQueue().fadeOut(150, function () {
                            e.proxy(L.event.resetStyle, this)(), t()
                        }) : L.error(y.transition))
                    }
                },
                show: function () {
                    L.debug("Checking if dropdown can show"), L.is.hidden() && (L.hideOthers(), L.set.active(), L.animate.show(function () {
                        L.can.click() && L.bind.intent(), L.set.visible()
                    }), e.proxy(n.onShow, C)())
                },
                hide: function () {
                    !L.is.animated() && L.is.visible() && (L.debug("Hiding dropdown"), L.can.click() && L.unbind.intent(), L.remove.active(), L.animate.hide(L.remove.visible), e.proxy(n.onHide, C)())
                },
                delay: {
                    show: function () {
                        L.verbose("Delaying show event to ensure user intent"), clearTimeout(L.timer), L.timer = setTimeout(L.show, n.delay.show)
                    },
                    hide: function () {
                        L.verbose("Delaying hide event to ensure user intent"), clearTimeout(L.timer), L.timer = setTimeout(L.hide, n.delay.hide)
                    }
                },
                hideOthers: function () {
                    L.verbose("Finding other dropdowns to hide"), i.not(E).has(g.menu + ":visible").dropdown("hide")
                },
                toggle: function () {
                    L.verbose("Toggling menu visibility"), L.is.hidden() ? L.show() : L.hide()
                },
                setting: function (t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, n, t);
                    else {
                        if (i === r) return n[t];
                        n[t] = i
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, L, t);
                    else {
                        if (n === r) return L[t];
                        L[t] = n
                    }
                },
                debug: function () {
                    n.debug && (n.performance ? L.performance.log(arguments) : (L.debug = Function.prototype.bind.call(console.info, console, n.name + ":"), L.debug.apply(console, arguments)))
                },
                verbose: function () {
                    n.verbose && n.debug && (n.performance ? L.performance.log(arguments) : (L.verbose = Function.prototype.bind.call(console.info, console, n.name + ":"), L.verbose.apply(console, arguments)))
                },
                error: function () {
                    L.error = Function.prototype.bind.call(console.error, console, n.name + ":"), L.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, r, i;
                        n.performance && (t = (new Date).getTime(), i = a || t, r = t - i, a = t, f.push({
                            Element: C,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": r
                        })), clearTimeout(L.performance.timer), L.performance.timer = setTimeout(L.performance.display, 100)
                    },
                    display: function () {
                        var t = n.name + ":",
                            i = 0;
                        a = !1, clearTimeout(L.performance.timer), e.each(f, function (e, t) {
                            i += t["Execution Time"]
                        }), t += " " + i + "ms", o && (t += " '" + o + "'"), (console.group !== r || console.table !== r) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), f = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = k,
                        o, u, a;
                    return n = n || h, i = C || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : (L.error(y.method, t), !1);
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(p) ? p.push(a) : p !== r ? p = [p, a] : a !== r && (p = a), u
                }
            }, c ? (k === r && L.initialize(), L.invoke(l)) : (k !== r && L.destroy(), L.initialize())
        }), p !== r ? p : this
    }, e.fn.dropdown.settings = {
        name: "Dropdown",
        namespace: "dropdown",
        debug: !1,
        verbose: !0,
        performance: !0,
        on: "click",
        action: "activate",
        delay: {
            show: 200,
            hide: 300,
            touch: 50
        },
        transition: "slide down",
        duration: 250,
        onChange: function (e, t) {},
        onShow: function () {},
        onHide: function () {},
        error: {
            action: "You called a dropdown action that was not defined",
            method: "The method you called is not defined.",
            transition: "The requested transition was not found"
        },
        metadata: {
            defaultText: "defaultText",
            defaultValue: "defaultValue",
            text: "text",
            value: "value"
        },
        selector: {
            menu: ".menu",
            submenu: "> .menu",
            item: ".menu > .item",
            text: "> .text",
            input: '> input[type="hidden"]'
        },
        className: {
            active: "active",
            placeholder: "default",
            disabled: "disabled",
            visible: "visible",
            selection: "selection"
        }
    }, e.extend(e.easing, {
        easeOutQuad: function (e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        }
    })
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.modal = function (i) {
        var s = e(this),
            o = e(t),
            u = e(n),
            a = e("body"),
            f = (new Date).getTime(),
            l = [],
            c = arguments[0],
            h = typeof c == "string",
            p = [].slice.call(arguments, 1),
            d = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            },
            v;
        return s.each(function () {
            var m = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.modal.settings, i) : e.extend({}, e.fn.modal.settings),
                g = m.selector,
                y = m.className,
                b = m.namespace,
                w = m.error,
                E = "." + b,
                S = "module-" + b,
                x = s.selector || "",
                T = e(this),
                N = e(m.context),
                C = T.find(g.close),
                k, L, A, O, M, _ = this,
                D = T.data(S),
                P;
            P = {
                initialize: function () {
                    P.verbose("Initializing dimmer", N);
                    if (e.fn.dimmer === r) {
                        P.error(w.dimmer);
                        return
                    }
                    O = N.dimmer({
                        closable: !1,
                        useCSS: !0,
                        duration: {
                            show: m.duration * .9,
                            hide: m.duration * 1.1
                        }
                    }), m.detachable && O.dimmer("add content", T), M = O.dimmer("get dimmer"), L = T.siblings(g.modal), k = L.add(T), P.verbose("Attaching close events", C), C.on("click" + E, P.event.close), o.on("resize" + E, P.event.resize), P.instantiate()
                },
                instantiate: function () {
                    P.verbose("Storing instance of modal"), D = P, T.data(S, D)
                },
                destroy: function () {
                    P.verbose("Destroying previous modal"), T.removeData(S).off(E), C.off(E), N.dimmer("destroy")
                },
                refresh: function () {
                    P.remove.scrolling(), P.cacheSizes(), P.set.screenHeight(), P.set.type(), P.set.position()
                },
                attachEvents: function (t, n) {
                    var r = e(t);
                    n = e.isFunction(P[n]) ? P[n] : P.toggle, r.size() > 0 ? (P.debug("Attaching modal events to element", t, n), r.off(E).on("click" + E, n)) : P.error(w.notFound)
                },
                event: {
                    close: function () {
                        P.verbose("Closing element pressed"), e(this).is(g.approve) ? e.proxy(m.onApprove, _)() !== !1 ? P.hide() : P.verbose("Approve callback returned false cancelling hide") : e(this).is(g.deny) ? e.proxy(m.onDeny, _)() !== !1 ? P.hide() : P.verbose("Deny callback returned false cancelling hide") : P.hide()
                    },
                    click: function (t) {
                        e(t.target).closest(g.modal).size() === 0 && (P.debug("Dimmer clicked, hiding all modals"), m.allowMultiple ? P.hide() : P.hideAll(), t.stopImmediatePropagation())
                    },
                    debounce: function (e, t) {
                        clearTimeout(P.timer), P.timer = setTimeout(e, t)
                    },
                    keyboard: function (e) {
                        var t = e.which,
                            n = 27;
                        t == n && (m.closable ? (P.debug("Escape key pressed hiding modal"), P.hide()) : P.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                    },
                    resize: function () {
                        O.dimmer("is active") && d(P.refresh)
                    }
                },
                toggle: function () {
                    P.is.active() ? P.hide() : P.show()
                },
                show: function (t) {
                    t = e.isFunction(t) ? t : function () {}, P.showDimmer(), P.showModal(t)
                },
                showModal: function (t) {
                    t = e.isFunction(t) ? t : function () {}, P.is.active() ? P.debug("Modal is already visible") : (P.cache === r && P.cacheSizes(), P.set.position(), P.set.screenHeight(), P.set.type(), L.filter(":visible").size() > 0 && !m.allowMultiple ? (P.debug("Other modals visible, queueing show animation"), P.hideOthers(P.showModal)) : (e.proxy(m.onShow, _)(), m.transition && e.fn.transition !== r && T.transition("is supported") ? (P.debug("Showing modal with css animations"), T.transition(m.transition + " in", m.duration, function () {
                        e.proxy(m.onVisible, _)(), P.set.active(), t()
                    })) : (P.debug("Showing modal with javascript"), T.fadeIn(m.duration, m.easing, function () {
                        e.proxy(m.onVisible, _)(), P.set.active(), t()
                    }))))
                },
                showDimmer: function () {
                    O.dimmer("is active") ? P.debug("Dimmer already visible") : (P.debug("Showing dimmer"), O.dimmer("show"))
                },
                hide: function (t) {
                    t = e.isFunction(t) ? t : function () {}, k.filter(":visible").size() <= 1 && P.hideDimmer(), P.hideModal(t)
                },
                hideDimmer: function () {
                    if (!P.is.active()) {
                        P.debug("Dimmer is not visible cannot hide");
                        return
                    }
                    P.debug("Hiding dimmer"), m.closable && M.off("click" + E), O.dimmer("hide", function () {
                        m.transition && e.fn.transition !== r && T.transition("is supported") && (T.transition("reset"), P.remove.screenHeight()), P.remove.active()
                    })
                },
                hideModal: function (t) {
                    t = e.isFunction(t) ? t : function () {};
                    if (!P.is.active()) {
                        P.debug("Cannot hide modal it is not active");
                        return
                    }
                    P.debug("Hiding modal"), P.remove.keyboardShortcuts(), e.proxy(m.onHide, _)(), m.transition && e.fn.transition !== r && T.transition("is supported") ? T.transition(m.transition + " out", m.duration, function () {
                        e.proxy(m.onHidden, _)(), P.remove.active(), P.restore.focus(), t()
                    }) : T.fadeOut(m.duration, m.easing, function () {
                        e.proxy(m.onHidden, _)(), P.remove.active(), P.restore.focus(), t()
                    })
                },
                hideAll: function (t) {
                    t = e.isFunction(t) ? t : function () {}, k.is(":visible") && (P.debug("Hiding all visible modals"), P.hideDimmer(), k.filter(":visible").modal("hide modal", t))
                },
                hideOthers: function (t) {
                    t = e.isFunction(t) ? t : function () {}, L.is(":visible") && (P.debug("Hiding other modals"), L.filter(":visible").modal("hide modal", t))
                },
                add: {
                    keyboardShortcuts: function () {
                        P.verbose("Adding keyboard shortcuts"), u.on("keyup" + E, P.event.keyboard)
                    }
                },
                save: {
                    focus: function () {
                        A = e(n.activeElement).blur()
                    }
                },
                restore: {
                    focus: function () {
                        A && A.size() > 0 && A.focus()
                    }
                },
                remove: {
                    active: function () {
                        T.removeClass(y.active)
                    },
                    screenHeight: function () {
                        P.cache.height > P.cache.pageHeight && (P.debug("Removing page height"), a.css("height", ""))
                    },
                    keyboardShortcuts: function () {
                        P.verbose("Removing keyboard shortcuts"), u.off("keyup" + E)
                    },
                    scrolling: function () {
                        O.removeClass(y.scrolling), T.removeClass(y.scrolling)
                    }
                },
                cacheSizes: function () {
                    P.cache = {
                        pageHeight: a.outerHeight(),
                        height: T.outerHeight() + m.offset,
                        contextHeight: m.context == "body" ? e(t).height() : O.height()
                    }, P.debug("Caching modal and container sizes", P.cache)
                },
                can: {
                    fit: function () {
                        return P.cache.height < P.cache.contextHeight
                    }
                },
                is: {
                    active: function () {
                        return T.hasClass(y.active)
                    },
                    modernBrowser: function () {
                        return !(t.ActiveXObject || "ActiveXObject" in t)
                    }
                },
                set: {
                    screenHeight: function () {
                        P.cache.height > P.cache.pageHeight && (P.debug("Modal is taller than page content, resizing page height"), a.css("height", P.cache.height + m.padding))
                    },
                    active: function () {
                        P.add.keyboardShortcuts(), P.save.focus(), T.addClass(y.active), m.closable && M.off("click" + E).on("click" + E, P.event.click)
                    },
                    scrolling: function () {
                        O.addClass(y.scrolling), T.addClass(y.scrolling)
                    },
                    type: function () {
                        P.can.fit() ? (P.verbose("Modal fits on screen"), P.remove.scrolling()) : (P.verbose("Modal cannot fit on screen setting to scrolling"), P.set.scrolling())
                    },
                    position: function () {
                        P.verbose("Centering modal on page", P.cache), P.can.fit() ? T.css({
                            top: "",
                            marginTop: -(P.cache.height / 2)
                        }) : T.css({
                            marginTop: "1em",
                            top: u.scrollTop()
                        })
                    }
                },
                setting: function (t, n) {
                    P.debug("Changing setting", t, n);
                    if (e.isPlainObject(t)) e.extend(!0, m, t);
                    else {
                        if (n === r) return m[t];
                        m[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, P, t);
                    else {
                        if (n === r) return P[t];
                        P[t] = n
                    }
                },
                debug: function () {
                    m.debug && (m.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), P.debug.apply(console, arguments)))
                },
                verbose: function () {
                    m.verbose && m.debug && (m.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), P.verbose.apply(console, arguments)))
                },
                error: function () {
                    P.error = Function.prototype.bind.call(console.error, console, m.name + ":"), P.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        m.performance && (t = (new Date).getTime(), r = f || t, n = t - r, f = t, l.push({
                            Element: _,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 100)
                    },
                    display: function () {
                        var t = m.name + ":",
                            n = 0;
                        f = !1, clearTimeout(P.performance.timer), e.each(l, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== r || console.table !== r) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), l = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = D,
                        o, u, a;
                    return n = n || p, i = _ || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(v) ? v.push(a) : v !== r ? v = [v, a] : a !== r && (v = a), u
                }
            }, h ? (D === r && P.initialize(), P.invoke(c)) : (D !== r && P.destroy(), P.initialize())
        }), v !== r ? v : this
    }, e.fn.modal.settings = {
        name: "Modal",
        namespace: "modal",
        debug: !1,
        verbose: !0,
        performance: !0,
        allowMultiple: !0,
        detachable: !0,
        closable: !0,
        context: "body",
        duration: 500,
        easing: "easeOutExpo",
        offset: 0,
        transition: "scale",
        padding: 30,
        onShow: function () {},
        onHide: function () {},
        onVisible: function () {},
        onHidden: function () {},
        onApprove: function () {
            return !0
        },
        onDeny: function () {
            return !0
        },
        selector: {
            close: ".close, .actions .button",
            approve: ".actions .positive, .actions .approve, .actions .ok",
            deny: ".actions .negative, .actions .deny, .actions .cancel",
            modal: ".ui.modal"
        },
        error: {
            dimmer: "UI Dimmer, a required component is not included in this page",
            method: "The method you called is not defined."
        },
        className: {
            active: "active",
            scrolling: "scrolling"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.nag = function (n) {
        var i = e(this),
            s = i.selector || "",
            o = (new Date).getTime(),
            u = [],
            a = arguments[0],
            f = typeof a == "string",
            l = [].slice.call(arguments, 1),
            c;
        return e(this).each(function () {
            var h = e.extend(!0, {}, e.fn.nag.settings, n),
                p = h.className,
                d = h.selector,
                v = h.error,
                m = h.namespace,
                g = "." + m,
                y = m + "-module",
                b = e(this),
                w = b.find(d.close),
                E = e(h.context),
                S = this,
                x = b.data(y),
                T, N, C, k, L, A, O, M, _, D = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 0)
                };
            _ = {
                initialize: function () {
                    _.verbose("Initializing element"), T = b.offset(), N = b.outerHeight(), C = E.outerWidth(), k = E.outerHeight(), L = E.offset(), b.data(y, _), w.on("click" + g, _.dismiss), h.context == t && h.position == "fixed" && b.addClass(p.fixed), h.sticky && (_.verbose("Adding scroll events"), h.position == "absolute" ? E.on("scroll" + g, _.event.scroll).on("resize" + g, _.event.scroll) : e(t).on("scroll" + g, _.event.scroll).on("resize" + g, _.event.scroll), e.proxy(_.event.scroll, this)()), h.displayTime > 0 && setTimeout(_.hide, h.displayTime), _.should.show() ? b.is(":visible") || _.show() : _.hide()
                },
                destroy: function () {
                    _.verbose("Destroying instance"), b.removeData(y).off(g), h.sticky && E.off(g)
                },
                refresh: function () {
                    _.debug("Refreshing cached calculations"), T = b.offset(), N = b.outerHeight(), C = E.outerWidth(), k = E.outerHeight(), L = E.offset()
                },
                show: function () {
                    _.debug("Showing nag", h.animation.show), h.animation.show == "fade" ? b.fadeIn(h.duration, h.easing) : b.slideDown(h.duration, h.easing)
                },
                hide: function () {
                    _.debug("Showing nag", h.animation.hide), h.animation.show == "fade" ? b.fadeIn(h.duration, h.easing) : b.slideUp(h.duration, h.easing)
                },
                onHide: function () {
                    _.debug("Removing nag", h.animation.hide), b.remove(), h.onHide && h.onHide()
                },
                stick: function () {
                    _.refresh();
                    if (h.position == "fixed") {
                        var n = e(t).prop("pageYOffset") || e(t).scrollTop(),
                            r = b.hasClass(p.bottom) ? L.top + (k - N) - n : L.top - n;
                        b.css({
                            position: "fixed",
                            top: r,
                            left: L.left,
                            width: C - h.scrollBarWidth
                        })
                    } else b.css({
                        top: O
                    })
                },
                unStick: function () {
                    b.css({
                        top: ""
                    })
                },
                dismiss: function (e) {
                    h.storageMethod && _.storage.set(h.storedKey, h.storedValue), _.hide(), e.stopImmediatePropagation(), e.preventDefault()
                },
                should: {
                    show: function () {
                        return h.persist ? (_.debug("Persistent nag is set, can show nag"), !0) : _.storage.get(h.storedKey) != h.storedValue ? (_.debug("Stored value is not set, can show nag", _.storage.get(h.storedKey)), !0) : (_.debug("Stored value is set, cannot show nag", _.storage.get(h.storedKey)), !1)
                    },
                    stick: function () {
                        return A = E.prop("pageYOffset") || E.scrollTop(), O = b.hasClass(p.bottom) ? k - b.outerHeight() + A : A, O > T.top ? !0 : h.position == "fixed" ? !0 : !1
                    }
                },
                storage: {
                    set: function (n, i) {
                        _.debug("Setting stored value", n, i, h.storageMethod), h.storageMethod == "local" && t.store !== r ? t.store.set(n, i) : e.cookie !== r ? e.cookie(n, i) : _.error(v.noStorage)
                    },
                    get: function (n) {
                        _.debug("Getting stored value", n, h.storageMethod);
                        if (h.storageMethod == "local" && t.store !== r) return t.store.get(n);
                        if (e.cookie !== r) return e.cookie(n);
                        _.error(v.noStorage)
                    }
                },
                event: {
                    scroll: function () {
                        M !== r && clearTimeout(M), M = setTimeout(function () {
                            _.should.stick() ? D(_.stick) : _.unStick()
                        }, h.lag)
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (n === r) return h[t];
                        h[t] = n
                    }
                },
                internal: function (t, n) {
                    _.debug("Changing internal", t, n);
                    if (n === r) return _[t];
                    e.isPlainObject(t) ? e.extend(!0, _, t) : _[t] = n
                },
                debug: function () {
                    h.debug && (h.performance ? _.performance.log(arguments) : (_.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), _.debug.apply(console, arguments)))
                },
                verbose: function () {
                    h.verbose && h.debug && (h.performance ? _.performance.log(arguments) : (_.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), _.verbose.apply(console, arguments)))
                },
                error: function () {
                    _.error = Function.prototype.bind.call(console.error, console, h.name + ":"), _.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        h.performance && (t = (new Date).getTime(), r = o || t, n = t - r, o = t, u.push({
                            Element: S,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(_.performance.timer), _.performance.timer = setTimeout(_.performance.display, 100)
                    },
                    display: function () {
                        var t = h.name + ":",
                            n = 0;
                        o = !1, clearTimeout(_.performance.timer), e.each(u, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", s && (t += " '" + s + "'"), i.size() > 1 && (t += " (" + i.size() + ")"), (console.group !== r || console.table !== r) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), u = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = x,
                        o, u, a;
                    return n = n || l, i = S || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(c) ? c.push(a) : c !== r ? c = [c, a] : a !== r && (c = a), u
                }
            }, f ? (x === r && _.initialize(), _.invoke(a)) : (x !== r && _.destroy(), _.initialize())
        }), c !== r ? c : this
    }, e.fn.nag.settings = {
        name: "Nag",
        debug: !1,
        verbose: !0,
        performance: !0,
        namespace: "Nag",
        persist: !1,
        displayTime: 0,
        animation: {
            show: "slide",
            hide: "slide"
        },
        position: "fixed",
        scrollBarWidth: 18,
        storageMethod: "cookie",
        storedKey: "nag",
        storedValue: "dismiss",
        sticky: !1,
        lag: 0,
        context: t,
        error: {
            noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
            method: "The method you called is not defined."
        },
        className: {
            bottom: "bottom",
            fixed: "fixed"
        },
        selector: {
            close: ".icon.close"
        },
        speed: 500,
        easing: "easeOutQuad",
        onHide: function () {}
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.popup = function (i) {
        var s = e(this),
            o = e(n),
            u = s.selector || "",
            a = (new Date).getTime(),
            f = [],
            l = arguments[0],
            c = typeof l == "string",
            h = [].slice.call(arguments, 1),
            p;
        return s.each(function () {
            var n = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.popup.settings, i) : e.extend({}, e.fn.popup.settings),
                s = n.selector,
                d = n.className,
                v = n.error,
                m = n.metadata,
                g = n.namespace,
                y = "." + n.namespace,
                b = "module-" + g,
                w = e(this),
                E = e(n.context),
                S = n.target ? e(n.target) : w,
                x = e(t),
                T = n.inline ? S.offsetParent() : x,
                N = n.inline ? S.next(n.selector.popup) : x.children(n.selector.popup).last(),
                C = 0,
                k = this,
                L = w.data(b),
                A;
            A = {
                initialize: function () {
                    A.debug("Initializing module", w), n.on == "click" ? w.on("click", A.toggle) : w.on(A.get.startEvent() + y, A.event.start).on(A.get.endEvent() + y, A.event.end), n.target && A.debug("Target set to element", S), x.on("resize" + y, A.event.resize), A.instantiate()
                },
                instantiate: function () {
                    A.verbose("Storing instance of module", A), L = A, w.data(b, L)
                },
                refresh: function () {
                    n.inline ? (N = S.next(s.popup), T = S.offsetParent()) : N = x.children(s.popup).last()
                },
                destroy: function () {
                    A.debug("Destroying previous module"), x.off(y), N.remove(), w.off(y).removeData(b)
                },
                event: {
                    start: function (e) {
                        A.timer = setTimeout(function () {
                            A.is.hidden() && A.show()
                        }, n.delay)
                    },
                    end: function () {
                        clearTimeout(A.timer), A.is.visible() && A.hide()
                    },
                    resize: function () {
                        A.is.visible() && A.set.position()
                    }
                },
                create: function () {
                    A.debug("Creating pop-up html");
                    var t = w.data(m.html) || n.html,
                        r = w.data(m.variation) || n.variation,
                        i = w.data(m.title) || n.title,
                        s = w.data(m.content) || w.attr("title") || n.content;
                    t || s || i ? (t || (t = n.template({
                        title: i,
                        content: s
                    })), N = e("<div/>").addClass(d.popup).addClass(r).html(t), n.inline ? (A.verbose("Inserting popup element inline", N), N.data(b, L).insertAfter(w)) : (A.verbose("Appending popup element to body", N), N.data(b, L).appendTo(E)), e.proxy(n.onCreate, N)()) : A.error(v.content)
                },
                toggle: function () {
                    A.debug("Toggling pop-up"), A.is.hidden() ? (A.debug("Popup is hidden, showing pop-up"), A.unbind.close(), A.hideAll(), A.show()) : (A.debug("Popup is visible, hiding pop-up"), A.hide())
                },
                show: function (e) {
                    e = e || function () {}, A.debug("Showing pop-up", n.transition), n.preserve || A.refresh(), A.exists() || A.create(), A.save.conditions(), A.set.position(), A.animate.show(e)
                },
                hide: function (e) {
                    e = e || function () {}, w.removeClass(d.visible), A.restore.conditions(), A.unbind.close(), A.is.visible() && A.animate.hide(e)
                },
                hideAll: function () {
                    e(s.popup).filter(":visible").popup("hide")
                },
                hideGracefully: function (t) {
                    t && e(t.target).closest(s.popup).size() === 0 ? (A.debug("Click occurred outside popup hiding popup"), A.hide()) : A.debug("Click was inside popup, keeping popup open")
                },
                exists: function () {
                    return n.inline ? N.size() !== 0 : N.parent(E).size()
                },
                remove: function () {
                    A.debug("Removing popup"), N.remove()
                },
                save: {
                    conditions: function () {
                        A.cache = {
                            title: w.attr("title")
                        }, A.cache.title && w.removeAttr("title"), A.verbose("Saving original attributes", A.cache.title)
                    }
                },
                restore: {
                    conditions: function () {
                        return A.cache && A.cache.title && (w.attr("title", A.cache.title), A.verbose("Restoring original attributes", A.cache.title)), !0
                    }
                },
                animate: {
                    show: function (t) {
                        t = t || function () {}, w.addClass(d.visible), n.transition && e.fn.transition !== r && w.transition("is supported") ? N.transition(n.transition + " in", n.duration, function () {
                            A.bind.close(), e.proxy(t, k)()
                        }) : N.stop().fadeIn(n.duration, n.easing, function () {
                            A.bind.close(), e.proxy(t, k)()
                        }), e.proxy(n.onShow, k)()
                    },
                    hide: function (t) {
                        t = t || function () {}, A.debug("Hiding pop-up"), n.transition && e.fn.transition !== r && w.transition("is supported") ? N.transition(n.transition + " out", n.duration, function () {
                            A.reset(), t()
                        }) : N.stop().fadeOut(n.duration, n.easing, function () {
                            A.reset(), t()
                        }), e.proxy(n.onHide, k)()
                    }
                },
                get: {
                    startEvent: function () {
                        if (n.on == "hover") return "mouseenter";
                        if (n.on == "focus") return "focus"
                    },
                    endEvent: function () {
                        if (n.on == "hover") return "mouseleave";
                        if (n.on == "focus") return "blur"
                    },
                    offstagePosition: function () {
                        var n = {
                                top: e(t).scrollTop(),
                                bottom: e(t).scrollTop() + e(t).height(),
                                left: 0,
                                right: e(t).width()
                            },
                            r = {
                                width: N.width(),
                                height: N.outerHeight(),
                                position: N.offset()
                            },
                            i = {},
                            s = [];
                        return r.position && (i = {
                            top: r.position.top < n.top,
                            bottom: r.position.top + r.height > n.bottom,
                            right: r.position.left + r.width > n.right,
                            left: r.position.left < n.left
                        }), A.verbose("Checking if outside viewable area", r.position), e.each(i, function (e, t) {
                            t && s.push(e)
                        }), s.length > 0 ? s.join(" ") : !1
                    },
                    nextPosition: function (e) {
                        switch (e) {
                        case "top left":
                            e = "bottom left";
                            break;
                        case "bottom left":
                            e = "top right";
                            break;
                        case "top right":
                            e = "bottom right";
                            break;
                        case "bottom right":
                            e = "top center";
                            break;
                        case "top center":
                            e = "bottom center";
                            break;
                        case "bottom center":
                            e = "right center";
                            break;
                        case "right center":
                            e = "left center";
                            break;
                        case "left center":
                            e = "top center"
                        }
                        return e
                    }
                },
                set: {
                    position: function (r, i) {
                        var s = e(t).width(),
                            o = e(t).height(),
                            u = S.outerWidth(),
                            a = S.outerHeight(),
                            f = N.width(),
                            l = N.outerHeight(),
                            c = T.outerWidth(),
                            h = T.outerHeight(),
                            p = n.distanceAway,
                            g = n.inline ? S.position() : S.offset(),
                            y, b;
                        r = r || w.data(m.position) || n.position, i = i || w.data(m.offset) || n.offset, n.inline && (r == "left center" || r == "right center" ? (i += parseInt(t.getComputedStyle(k).getPropertyValue("margin-top"), 10), p += -parseInt(t.getComputedStyle(k).getPropertyValue("margin-left"), 10)) : (i += parseInt(t.getComputedStyle(k).getPropertyValue("margin-left"), 10), p += parseInt(t.getComputedStyle(k).getPropertyValue("margin-top"), 10))), A.debug("Calculating offset for position", r);
                        switch (r) {
                        case "top left":
                            y = {
                                bottom: h - g.top + p,
                                right: c - g.left - i,
                                top: "auto",
                                left: "auto"
                            };
                            break;
                        case "top center":
                            y = {
                                bottom: h - g.top + p,
                                left: g.left + u / 2 - f / 2 + i,
                                top: "auto",
                                right: "auto"
                            };
                            break;
                        case "top right":
                            y = {
                                top: "auto",
                                bottom: h - g.top + p,
                                left: g.left + u + i,
                                right: "auto"
                            };
                            break;
                        case "left center":
                            y = {
                                top: g.top + a / 2 - l / 2 + i,
                                right: c - g.left + p,
                                left: "auto",
                                bottom: "auto"
                            };
                            break;
                        case "right center":
                            y = {
                                top: g.top + a / 2 - l / 2 + i,
                                left: g.left + u + p,
                                bottom: "auto",
                                right: "auto"
                            };
                            break;
                        case "bottom left":
                            y = {
                                top: g.top + a + p,
                                right: c - g.left - i,
                                left: "auto",
                                bottom: "auto"
                            };
                            break;
                        case "bottom center":
                            y = {
                                top: g.top + a + p,
                                left: g.left + u / 2 - f / 2 + i,
                                bottom: "auto",
                                right: "auto"
                            };
                            break;
                        case "bottom right":
                            y = {
                                top: g.top + a + p,
                                left: g.left + u + i,
                                bottom: "auto",
                                right: "auto"
                            }
                        }
                        return N.css(y).removeClass(d.position).addClass(r).addClass(d.loading), b = A.get.offstagePosition(), b ? (A.debug("Element is outside boundaries", b), C < n.maxSearchDepth ? (r = A.get.nextPosition(r), C++, A.debug("Trying new position", r), A.set.position(r)) : (A.error(v.recursion), C = 0, A.reset(), N.removeClass(d.loading), !1)) : (A.debug("Position is on stage", r), C = 0, N.removeClass(d.loading), !0)
                    }
                },
                bind: {
                    close: function () {
                        n.on == "click" && n.closable && (A.verbose("Binding popup close event to document"), o.on("click" + y, function (t) {
                            A.verbose("Pop-up clickaway intent detected"), e.proxy(A.hideGracefully, this)(t)
                        }))
                    }
                },
                unbind: {
                    close: function () {
                        n.on == "click" && n.closable && (A.verbose("Removing close event from document"), o.off("click" + y))
                    }
                },
                is: {
                    animating: function () {
                        return N.is(":animated") || N.hasClass(d.animating)
                    },
                    visible: function () {
                        return N.is(":visible")
                    },
                    hidden: function () {
                        return !A.is.visible()
                    }
                },
                reset: function () {
                    N.attr("style", "").removeAttr("style"), n.preserve || A.remove()
                },
                setting: function (t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, n, t);
                    else {
                        if (i === r) return n[t];
                        n[t] = i
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, A, t);
                    else {
                        if (n === r) return A[t];
                        A[t] = n
                    }
                },
                debug: function () {
                    n.debug && (n.performance ? A.performance.log(arguments) : (A.debug = Function.prototype.bind.call(console.info, console, n.name + ":"), A.debug.apply(console, arguments)))
                },
                verbose: function () {
                    n.verbose && n.debug && (n.performance ? A.performance.log(arguments) : (A.verbose = Function.prototype.bind.call(console.info, console, n.name + ":"), A.verbose.apply(console, arguments)))
                },
                error: function () {
                    A.error = Function.prototype.bind.call(console.error, console, n.name + ":"), A.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, r, i;
                        n.performance && (t = (new Date).getTime(), i = a || t, r = t - i, a = t, f.push({
                            Element: k,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": r
                        })), clearTimeout(A.performance.timer), A.performance.timer = setTimeout(A.performance.display, 100)
                    },
                    display: function () {
                        var t = n.name + ":",
                            i = 0;
                        a = !1, clearTimeout(A.performance.timer), e.each(f, function (e, t) {
                            i += t["Execution Time"]
                        }), t += " " + i + "ms", u && (t += " '" + u + "'"), (console.group !== r || console.table !== r) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), f = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = L,
                        o, u, a;
                    return n = n || h, i = k || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(p) ? p.push(a) : p !== r ? p = [p, a] : a !== r && (p = a), u
                }
            }, c ? (L === r && A.initialize(), A.invoke(l)) : (L !== r && A.destroy(), A.initialize())
        }), p !== r ? p : this
    }, e.fn.popup.settings = {
        name: "Popup",
        debug: !1,
        verbose: !0,
        performance: !0,
        namespace: "popup",
        onCreate: function () {},
        onShow: function () {},
        onHide: function () {},
        variation: "",
        content: !1,
        html: !1,
        title: !1,
        on: "hover",
        target: !1,
        closable: !0,
        context: "body",
        position: "top center",
        delay: 150,
        inline: !1,
        preserve: !1,
        duration: 250,
        easing: "easeOutQuint",
        transition: "scale",
        distanceAway: 0,
        offset: 0,
        maxSearchDepth: 10,
        error: {
            content: "Your popup has no content specified",
            method: "The method you called is not defined.",
            recursion: "Popup attempted to reposition element to fit, but could not find an adequate position."
        },
        metadata: {
            content: "content",
            html: "html",
            offset: "offset",
            position: "position",
            title: "title",
            variation: "variation"
        },
        className: {
            animating: "animating",
            loading: "loading",
            popup: "ui popup",
            position: "top left center bottom right",
            visible: "visible"
        },
        selector: {
            popup: ".ui.popup"
        },
        template: function (e) {
            var t = "";
            return typeof e !== r && (typeof e.title !== r && e.title && (t += '<div class="header">' + e.title + '</div class="header">'), typeof e.content !== r && e.content && (t += '<div class="content">' + e.content + "</div>")), t
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.rating = function (t) {
        var n = e(this),
            i = n.selector || "",
            s = (new Date).getTime(),
            o = [],
            u = arguments[0],
            a = typeof u == "string",
            f = [].slice.call(arguments, 1),
            l;
        return n.each(function () {
            var c = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                h = c.namespace,
                p = c.className,
                d = c.metadata,
                v = c.selector,
                m = c.error,
                g = "." + h,
                y = "module-" + h,
                b = this,
                w = e(this).data(y),
                E = e(this),
                S = E.find(v.icon),
                x;
            x = {
                initialize: function () {
                    x.verbose("Initializing rating module", c), c.interactive ? x.enable() : x.disable(), c.initialRating && (x.debug("Setting initial rating"), x.setRating(c.initialRating)), E.data(d.rating) && (x.debug("Rating found in metadata"), x.setRating(E.data(d.rating))), x.instantiate()
                },
                instantiate: function () {
                    x.verbose("Instantiating module", c), w = x, E.data(y, x)
                },
                destroy: function () {
                    x.verbose("Destroying previous instance", w), E.removeData(y), S.off(g)
                },
                event: {
                    mouseenter: function () {
                        var t = e(this);
                        t.nextAll().removeClass(p.hover), E.addClass(p.hover), t.addClass(p.hover).prevAll().addClass(p.hover)
                    },
                    mouseleave: function () {
                        E.removeClass(p.hover), S.removeClass(p.hover)
                    },
                    click: function () {
                        var t = e(this),
                            n = x.getRating(),
                            r = S.index(t) + 1;
                        c.clearable && n == r ? x.clearRating() : x.setRating(r)
                    }
                },
                clearRating: function () {
                    x.debug("Clearing current rating"), x.setRating(0)
                },
                getRating: function () {
                    var e = S.filter("." + p.active).size();
                    return x.verbose("Current rating retrieved", e), e
                },
                enable: function () {
                    x.debug("Setting rating to interactive mode"), S.on("mouseenter" + g, x.event.mouseenter).on("mouseleave" + g, x.event.mouseleave).on("click" + g, x.event.click), E.removeClass(p.disabled)
                },
                disable: function () {
                    x.debug("Setting rating to read-only mode"), S.off(g), E.addClass(p.disabled)
                },
                setRating: function (t) {
                    var n = t - 1 >= 0 ? t - 1 : 0,
                        r = S.eq(n);
                    E.removeClass(p.hover), S.removeClass(p.hover).removeClass(p.active), t > 0 && (x.verbose("Setting current rating to", t), r.addClass(p.active).prevAll().addClass(p.active)), e.proxy(c.onRate, b)(t)
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, c, t);
                    else {
                        if (n === r) return c[t];
                        c[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t);
                    else {
                        if (n === r) return x[t];
                        x[t] = n
                    }
                },
                debug: function () {
                    c.debug && (c.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), x.debug.apply(console, arguments)))
                },
                verbose: function () {
                    c.verbose && c.debug && (c.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), x.verbose.apply(console, arguments)))
                },
                error: function () {
                    x.error = Function.prototype.bind.call(console.error, console, c.name + ":"), x.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        c.performance && (t = (new Date).getTime(), r = s || t, n = t - r, s = t, o.push({
                            Element: b,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 100)
                    },
                    display: function () {
                        var t = c.name + ":",
                            u = 0;
                        s = !1, clearTimeout(x.performance.timer), e.each(o, function (e, t) {
                            u += t["Execution Time"]
                        }), t += " " + u + "ms", i && (t += " '" + i + "'"), n.size() > 1 && (t += " (" + n.size() + ")"), (console.group !== r || console.table !== r) && o.length > 0 && (console.groupCollapsed(t), console.table ? console.table(o) : e.each(o, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), o = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = w,
                        o, u, a;
                    return n = n || f, i = b || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(l) ? l.push(a) : l !== r ? l = [l, a] : a !== r && (l = a), u
                }
            }, a ? (w === r && x.initialize(), x.invoke(u)) : (w !== r && x.destroy(), x.initialize())
        }), l !== r ? l : this
    }, e.fn.rating.settings = {
        name: "Rating",
        namespace: "rating",
        verbose: !0,
        debug: !1,
        performance: !0,
        initialRating: 0,
        interactive: !0,
        clearable: !1,
        onRate: function (e) {},
        error: {
            method: "The method you called is not defined"
        },
        metadata: {
            rating: "rating"
        },
        className: {
            active: "active",
            disabled: "disabled",
            hover: "hover",
            loading: "loading"
        },
        selector: {
            icon: ".icon"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.search = function (n, i) {
        var s = e(this),
            o = s.selector || "",
            u = (new Date).getTime(),
            a = [],
            f = arguments[0],
            l = typeof f == "string",
            c = [].slice.call(arguments, 1),
            h;
        return e(this).each(function () {
            var p = e.extend(!0, {}, e.fn.search.settings, i),
                d = p.className,
                v = p.selector,
                m = p.error,
                g = p.namespace,
                y = "." + g,
                b = g + "-module",
                w = e(this),
                E = w.find(v.prompt),
                S = w.find(v.searchButton),
                x = w.find(v.results),
                T = w.find(v.result),
                N = w.find(v.category),
                C = this,
                k = w.data(b),
                L;
            L = {
                initialize: function () {
                    L.verbose("Initializing module");
                    var e = E[0],
                        t = e.oninput !== r ? "input" : e.onpropertychange !== r ? "propertychange" : "keyup";
                    E.on("focus" + y, L.event.focus).on("blur" + y, L.event.blur).on("keydown" + y, L.handleKeyboard), p.automatic && E.on(t + y, L.search.throttle), S.on("click" + y, L.search.query), x.on("click" + y, v.result, L.results.select), L.instantiate()
                },
                instantiate: function () {
                    L.verbose("Storing instance of module", L), k = L, w.data(b, L)
                },
                destroy: function () {
                    L.verbose("Destroying instance"), w.removeData(b)
                },
                event: {
                    focus: function () {
                        w.addClass(d.focus), L.results.show()
                    },
                    blur: function () {
                        L.search.cancel(), w.removeClass(d.focus), L.results.hide()
                    }
                },
                handleKeyboard: function (t) {
                    var n = w.find(v.result),
                        r = w.find(v.category),
                        i = t.which,
                        s = {
                            backspace: 8,
                            enter: 13,
                            escape: 27,
                            upArrow: 38,
                            downArrow: 40
                        },
                        o = d.active,
                        u = n.index(n.filter("." + o)),
                        a = n.size(),
                        f;
                    i == s.escape && (L.verbose("Escape key pressed, blurring search field"), E.trigger("blur"));
                    if (x.filter(":visible").size() > 0)
                        if (i == s.enter) {
                            L.verbose("Enter key pressed, selecting active result");
                            if (n.filter("." + o).exists()) return e.proxy(L.results.select, n.filter("." + o))(), t.preventDefault(), !1
                        } else i == s.upArrow ? (L.verbose("Up key pressed, changing active result"), f = u - 1 < 0 ? u : u - 1, r.removeClass(o), n.removeClass(o).eq(f).addClass(o).closest(r).addClass(o), t.preventDefault()) : i == s.downArrow && (L.verbose("Down key pressed, changing active result"), f = u + 1 >= a ? u : u + 1, r.removeClass(o), n.removeClass(o).eq(f).addClass(o).closest(r).addClass(o), t.preventDefault());
                    else i == s.enter && (L.verbose("Enter key pressed, executing query"), L.search.query(), S.addClass(d.down), E.one("keyup", function () {
                        S.removeClass(d.down)
                    }))
                },
                search: {
                    cancel: function () {
                        var e = w.data("xhr") || !1;
                        e && e.state() != "resolved" && (L.debug("Cancelling last search"), e.abort())
                    },
                    throttle: function () {
                        var e = E.val(),
                            t = e.length;
                        clearTimeout(L.timer), t >= p.minCharacters ? L.timer = setTimeout(L.search.query, p.searchThrottle) : L.results.hide()
                    },
                    query: function () {
                        var t = E.val(),
                            r = L.search.cache.read(t);
                        r ? (L.debug("Reading result for '" + t + "' from cache"), L.results.add(r)) : (L.debug("Querying for '" + t + "'"), typeof n == "object" ? L.search.local(t) : L.search.remote(t), e.proxy(p.onSearchQuery, w)(t))
                    },
                    local: function (t) {
                        var r = [],
                            i = [],
                            s = e.isArray(p.searchFields) ? p.searchFields : [p.searchFields],
                            o = new RegExp("(?:s|^)" + t, "i"),
                            u = new RegExp(t, "i"),
                            a;
                        w.addClass(d.loading), e.each(s, function (t, s) {
                            e.each(n, function (t, n) {
                                typeof n[s] == "string" && e.inArray(n, r) == -1 && e.inArray(n, i) == -1 && (o.test(n[s]) ? r.push(n) : u.test(n[s]) && i.push(n))
                            })
                        }), a = L.results.generate({
                            results: e.merge(r, i)
                        }), w.removeClass(d.loading), L.search.cache.write(t, a), L.results.add(a)
                    },
                    remote: function (t) {
                        var r = {
                                stateContext: w,
                                url: n,
                                urlData: {
                                    query: t
                                },
                                success: function (e) {
                                    i = L.results.generate(e), L.search.cache.write(t, i), L.results.add(i)
                                },
                                failure: L.error
                            },
                            i;
                        L.search.cancel(), L.debug("Executing search"), e.extend(!0, r, p.apiSettings), e.api(r)
                    },
                    cache: {
                        read: function (e) {
                            var t = w.data("cache");
                            return p.cache && typeof t == "object" && t[e] !== r ? t[e] : !1
                        },
                        write: function (e, t) {
                            var n = w.data("cache") !== r ? w.data("cache") : {};
                            n[e] = t, w.data("cache", n)
                        }
                    }
                },
                results: {
                    generate: function (t) {
                        L.debug("Generating html from response", t);
                        var n = p.templates[p.type],
                            r = "";
                        return e.isPlainObject(t.results) && !e.isEmptyObject(t.results) || e.isArray(t.results) && t.results.length > 0 ? (p.maxResults > 0 && (t.results = e.makeArray(t.results).slice(0, p.maxResults)), t.results.length > 0 && (e.isFunction(n) ? r = n(t) : L.error(m.noTemplate, !1))) : r = L.message(m.noResults, "empty"), e.proxy(p.onResults, w)(t), r
                    },
                    add: function (t) {
                        (p.onResultsAdd == "default" || e.proxy(p.onResultsAdd, x)(t) == "default") && x.html(t), L.results.show()
                    },
                    show: function () {
                        x.filter(":visible").size() === 0 && E.filter(":focus").size() > 0 && x.html() !== "" && (x.stop().fadeIn(200), e.proxy(p.onResultsOpen, x)())
                    },
                    hide: function () {
                        x.filter(":visible").size() > 0 && (x.stop().fadeOut(200), e.proxy(p.onResultsClose, x)())
                    },
                    select: function (n) {
                        L.debug("Search result selected");
                        var r = e(this),
                            i = r.find(".title"),
                            s = i.html();
                        if (p.onSelect == "default" || e.proxy(p.onSelect, this)(n) == "default") {
                            var o = r.find("a[href]").eq(0),
                                u = o.attr("href") || !1,
                                a = o.attr("target") || !1;
                            L.results.hide(), E.val(s), u && (a == "_blank" || n.ctrlKey ? t.open(u) : t.location.href = u)
                        }
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (n === r) return p[t];
                        p[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, L, t);
                    else {
                        if (n === r) return L[t];
                        L[t] = n
                    }
                },
                debug: function () {
                    p.debug && (p.performance ? L.performance.log(arguments) : (L.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), L.debug.apply(console, arguments)))
                },
                verbose: function () {
                    p.verbose && p.debug && (p.performance ? L.performance.log(arguments) : (L.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), L.verbose.apply(console, arguments)))
                },
                error: function () {
                    L.error = Function.prototype.bind.call(console.error, console, p.name + ":"), L.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        p.performance && (t = (new Date).getTime(), r = u || t, n = t - r, u = t, a.push({
                            Element: C,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(L.performance.timer), L.performance.timer = setTimeout(L.performance.display, 100)
                    },
                    display: function () {
                        var t = p.name + ":",
                            n = 0;
                        u = !1, clearTimeout(L.performance.timer), e.each(a, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", o && (t += " '" + o + "'"), s.size() > 1 && (t += " (" + s.size() + ")"), (console.group !== r || console.table !== r) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), a = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = k,
                        o, u, a;
                    return n = n || c, i = C || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(h) ? h.push(a) : h !== r ? h = [h, a] : a !== r && (h = a), u
                }
            }, l ? (k === r && L.initialize(), L.invoke(f)) : (k !== r && L.destroy(), L.initialize())
        }), h !== r ? h : this
    }, e.fn.search.settings = {
        name: "Search Module",
        namespace: "search",
        debug: !1,
        verbose: !0,
        performance: !0,
        onSelect: "default",
        onResultsAdd: "default",
        onSearchQuery: function () {},
        onResults: function (e) {},
        onResultsOpen: function () {},
        onResultsClose: function () {},
        automatic: "true",
        type: "simple",
        minCharacters: 3,
        searchThrottle: 300,
        maxResults: 7,
        cache: !0,
        searchFields: ["title", "description"],
        apiSettings: {},
        className: {
            active: "active",
            down: "down",
            focus: "focus",
            empty: "empty",
            loading: "loading"
        },
        error: {
            noResults: "Your search returned no results",
            logging: "Error in debug logging, exiting.",
            noTemplate: "A valid template name was not specified.",
            serverError: "There was an issue with querying the server.",
            method: "The method you called is not defined."
        },
        selector: {
            prompt: ".prompt",
            searchButton: ".search.button",
            results: ".results",
            category: ".category",
            result: ".result"
        },
        templates: {
            message: function (e, t) {
                var n = "";
                return e !== r && t !== r && (n += '<div class="message ' + t + '">', t == "empty" ? n += '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : n += ' <div class="description">' + e + "</div>", n += "</div>"), n
            },
            categories: function (t) {
                var n = "";
                return t.results !== r ? (e.each(t.results, function (t, i) {
                    i.results !== r && i.results.length > 0 && (n += '<div class="category"><div class="name">' + i.name + "</div>", e.each(i.results, function (e, t) {
                        n += '<div class="result">', n += '<a href="' + t.url + '"></a>', t.image !== r && (n += '<div class="image"> <img src="' + t.image + '">' + "</div>"), n += '<div class="info">', t.price !== r && (n += '<div class="price">' + t.price + "</div>"), t.title !== r && (n += '<div class="title">' + t.title + "</div>"), t.description !== r && (n += '<div class="description">' + t.description + "</div>"), n += "</div></div>"
                    }), n += "</div>")
                }), t.resultPage && (n += '<a href="' + t.resultPage.url + '" class="all">' + t.resultPage.text + "</a>"), n) : !1
            },
            simple: function (t) {
                var n = "";
                return t.results !== r ? (e.each(t.results, function (e, t) {
                    n += '<a class="result" href="' + t.url + '">', t.image !== r && (n += '<div class="image"> <img src="' + t.image + '">' + "</div>"), n += '<div class="info">', t.price !== r && (n += '<div class="price">' + t.price + "</div>"), t.title !== r && (n += '<div class="title">' + t.title + "</div>"), t.description !== r && (n += '<div class="description">' + t.description + "</div>"), n += "</div></a>"
                }), t.resultPage && (n += '<a href="' + t.resultPage.url + '" class="all">' + t.resultPage.text + "</a>"), n) : !1
            }
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.shape = function (t) {
        var i = e(this),
            s = e("body"),
            o = (new Date).getTime(),
            u = [],
            a = arguments[0],
            f = typeof a == "string",
            l = [].slice.call(arguments, 1),
            c;
        return i.each(function () {
            var h = i.selector || "",
                p = e.extend(!0, {}, e.fn.shape.settings, t),
                d = p.namespace,
                v = p.selector,
                m = p.error,
                g = p.className,
                y = "." + d,
                b = "module-" + d,
                w = e(this),
                E = w.find(v.sides),
                S = w.find(v.side),
                x = !1,
                T, N, C = this,
                k = w.data(b),
                L;
            L = {
                initialize: function () {
                    L.verbose("Initializing module for", C), L.set.defaultSide(), L.instantiate()
                },
                instantiate: function () {
                    L.verbose("Storing instance of module", L), k = L, w.data(b, k)
                },
                destroy: function () {
                    L.verbose("Destroying previous module for", C), w.removeData(b).off(y)
                },
                refresh: function () {
                    L.verbose("Refreshing selector cache for", C), w = e(C), E = e(this).find(v.shape), S = e(this).find(v.side)
                },
                repaint: function () {
                    L.verbose("Forcing repaint event");
                    var e = E.get(0) || n.createElement("div"),
                        t = e.offsetWidth
                },
                animate: function (t, n) {
                    L.verbose("Animating box with properties", t), n = n || function (e) {
                        L.verbose("Executing animation callback"), e !== r && e.stopPropagation(), L.reset(), L.set.active()
                    }, e.proxy(p.beforeChange, N[0])(), L.get.transitionEvent() ? (L.verbose("Starting CSS animation"), w.addClass(g.animating), L.repaint(), w.addClass(g.animating), T.addClass(g.hidden), E.css(t).one(L.get.transitionEvent(), n), L.set.duration(p.duration)) : n()
                },
                queue: function (e) {
                    L.debug("Queueing animation of", e), E.one(L.get.transitionEvent(), function () {
                        L.debug("Executing queued animation"), setTimeout(function () {
                            w.shape(e)
                        }, 0)
                    })
                },
                reset: function () {
                    L.verbose("Animating states reset"), w.removeClass(g.animating).attr("style", "").removeAttr("style"), E.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(g.hidden), N.removeClass(g.animating).attr("style", "").removeAttr("style")
                },
                is: {
                    animating: function () {
                        return w.hasClass(g.animating)
                    }
                },
                set: {
                    defaultSide: function () {
                        T = w.find("." + p.className.active), N = T.next(v.side).size() > 0 ? T.next(v.side) : w.find(v.side).first(), x = !1, L.verbose("Active side set to", T), L.verbose("Next side set to", N)
                    },
                    duration: function (e) {
                        e = e || p.duration, e = typeof e == "number" ? e + "ms" : e, L.verbose("Setting animation duration", e), E.add(S).css({
                            "-webkit-transition-duration": e,
                            "-moz-transition-duration": e,
                            "-ms-transition-duration": e,
                            "-o-transition-duration": e,
                            "transition-duration": e
                        })
                    },
                    stageSize: function () {
                        var e = w.clone().addClass(g.loading),
                            t = e.find("." + p.className.active),
                            n = x ? e.find(x) : t.next(v.side).size() > 0 ? t.next(v.side) : e.find(v.side).first(),
                            r = {};
                        t.removeClass(g.active), n.addClass(g.active), e.prependTo(s), r = {
                            width: n.outerWidth(),
                            height: n.outerHeight()
                        }, e.remove(), w.css(r), L.verbose("Resizing stage to fit new content", r)
                    },
                    nextSide: function (e) {
                        x = e, N = w.find(e), N.size() === 0 && L.error(m.side), L.verbose("Next side manually set to", N)
                    },
                    active: function () {
                        L.verbose("Setting new side to active", N), S.removeClass(g.active), N.addClass(g.active), e.proxy(p.onChange, N[0])(), L.set.defaultSide()
                    }
                },
                flip: {
                    up: function () {
                        L.debug("Flipping up", N), L.is.animating() ? L.queue("flip up") : (L.set.stageSize(), L.stage.above(), L.animate(L.get.transform.up()))
                    },
                    down: function () {
                        L.debug("Flipping down", N), L.is.animating() ? L.queue("flip down") : (L.set.stageSize(), L.stage.below(), L.animate(L.get.transform.down()))
                    },
                    left: function () {
                        L.debug("Flipping left", N), L.is.animating() ? L.queue("flip left") : (L.set.stageSize(), L.stage.left(), L.animate(L.get.transform.left()))
                    },
                    right: function () {
                        L.debug("Flipping right", N), L.is.animating() ? L.queue("flip right") : (L.set.stageSize(), L.stage.right(), L.animate(L.get.transform.right()))
                    },
                    over: function () {
                        L.debug("Flipping over", N), L.is.animating() ? L.queue("flip over") : (L.set.stageSize(), L.stage.behind(), L.animate(L.get.transform.over()))
                    },
                    back: function () {
                        L.debug("Flipping back", N), L.is.animating() ? L.queue("flip back") : (L.set.stageSize(), L.stage.behind(), L.animate(L.get.transform.back()))
                    }
                },
                get: {
                    transform: {
                        up: function () {
                            var e = {
                                y: -((T.outerHeight() - N.outerHeight()) / 2),
                                z: -(T.outerHeight() / 2)
                            };
                            return {
                                transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
                            }
                        },
                        down: function () {
                            var e = {
                                y: -((T.outerHeight() - N.outerHeight()) / 2),
                                z: -(T.outerHeight() / 2)
                            };
                            return {
                                transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
                            }
                        },
                        left: function () {
                            var e = {
                                x: -((T.outerWidth() - N.outerWidth()) / 2),
                                z: -(T.outerWidth() / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
                            }
                        },
                        right: function () {
                            var e = {
                                x: -((T.outerWidth() - N.outerWidth()) / 2),
                                z: -(T.outerWidth() / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
                            }
                        },
                        over: function () {
                            var e = {
                                x: -((T.outerWidth() - N.outerWidth()) / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) rotateY(180deg)"
                            }
                        },
                        back: function () {
                            var e = {
                                x: -((T.outerWidth() - N.outerWidth()) / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) rotateY(-180deg)"
                            }
                        }
                    },
                    transitionEvent: function () {
                        var e = n.createElement("element"),
                            t = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            },
                            i;
                        for (i in t)
                            if (e.style[i] !== r) return t[i]
                    },
                    nextSide: function () {
                        return T.next(v.side).size() > 0 ? T.next(v.side) : w.find(v.side).first()
                    }
                },
                stage: {
                    above: function () {
                        var e = {
                            origin: (T.outerHeight() - N.outerHeight()) / 2,
                            depth: {
                                active: N.outerHeight() / 2,
                                next: T.outerHeight() / 2
                            }
                        };
                        L.verbose("Setting the initial animation position as above", N, e), T.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }), N.addClass(g.animating).css({
                            display: "block",
                            top: e.origin + "px",
                            transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    below: function () {
                        var e = {
                            origin: (T.outerHeight() - N.outerHeight()) / 2,
                            depth: {
                                active: N.outerHeight() / 2,
                                next: T.outerHeight() / 2
                            }
                        };
                        L.verbose("Setting the initial animation position as below", N, e), T.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }), N.addClass(g.animating).css({
                            display: "block",
                            top: e.origin + "px",
                            transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    left: function () {
                        var e = {
                            origin: (T.outerWidth() - N.outerWidth()) / 2,
                            depth: {
                                active: N.outerWidth() / 2,
                                next: T.outerWidth() / 2
                            }
                        };
                        L.verbose("Setting the initial animation position as left", N, e), T.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }), N.addClass(g.animating).css({
                            display: "block",
                            left: e.origin + "px",
                            transform: "rotateY(-90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    right: function () {
                        var e = {
                            origin: (T.outerWidth() - N.outerWidth()) / 2,
                            depth: {
                                active: N.outerWidth() / 2,
                                next: T.outerWidth() / 2
                            }
                        };
                        L.verbose("Setting the initial animation position as left", N, e), T.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }), N.addClass(g.animating).css({
                            display: "block",
                            left: e.origin + "px",
                            transform: "rotateY(90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    behind: function () {
                        var e = {
                            origin: (T.outerWidth() - N.outerWidth()) / 2,
                            depth: {
                                active: N.outerWidth() / 2,
                                next: T.outerWidth() / 2
                            }
                        };
                        L.verbose("Setting the initial animation position as behind", N, e), T.css({
                            transform: "rotateY(0deg)"
                        }), N.addClass(g.animating).css({
                            display: "block",
                            left: e.origin + "px",
                            transform: "rotateY(-180deg)"
                        })
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (n === r) return p[t];
                        p[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, L, t);
                    else {
                        if (n === r) return L[t];
                        L[t] = n
                    }
                },
                debug: function () {
                    p.debug && (p.performance ? L.performance.log(arguments) : (L.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), L.debug.apply(console, arguments)))
                },
                verbose: function () {
                    p.verbose && p.debug && (p.performance ? L.performance.log(arguments) : (L.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), L.verbose.apply(console, arguments)))
                },
                error: function () {
                    L.error = Function.prototype.bind.call(console.error, console, p.name + ":"), L.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        p.performance && (t = (new Date).getTime(), r = o || t, n = t - r, o = t, u.push({
                            Element: C,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(L.performance.timer), L.performance.timer = setTimeout(L.performance.display, 100)
                    },
                    display: function () {
                        var t = p.name + ":",
                            n = 0;
                        o = !1, clearTimeout(L.performance.timer), e.each(u, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", h && (t += " '" + h + "'"), i.size() > 1 && (t += " (" + i.size() + ")"), (console.group !== r || console.table !== r) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), u = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = k,
                        o, u, a;
                    return n = n || l, i = C || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(c) ? c.push(a) : c !== r ? c = [c, a] : a !== r && (c = a), u
                }
            }, f ? (k === r && L.initialize(), L.invoke(a)) : (k !== r && L.destroy(), L.initialize())
        }), c !== r ? c : this
    }, e.fn.shape.settings = {
        name: "Shape",
        debug: !1,
        verbose: !0,
        performance: !0,
        namespace: "shape",
        beforeChange: function () {},
        onChange: function () {},
        duration: 700,
        error: {
            side: "You tried to switch to a side that does not exist.",
            method: "The method you called is not defined"
        },
        className: {
            animating: "animating",
            hidden: "hidden",
            loading: "loading",
            active: "active"
        },
        selector: {
            sides: ".sides",
            side: ".side"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.sidebar = function (t) {
        var i = e(this),
            s = e("body"),
            o = e("head"),
            u = i.selector || "",
            a = (new Date).getTime(),
            f = [],
            l = arguments[0],
            c = typeof l == "string",
            h = [].slice.call(arguments, 1),
            p;
        return i.each(function () {
            var d = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.sidebar.settings, t) : e.extend({}, e.fn.sidebar.settings),
                v = d.selector,
                m = d.className,
                g = d.namespace,
                y = d.error,
                b = "." + g,
                w = "module-" + g,
                E = e(this),
                S = e("style[title=" + g + "]"),
                x = this,
                T = E.data(w),
                N;
            N = {
                initialize: function () {
                    N.debug("Initializing sidebar", E), N.instantiate()
                },
                instantiate: function () {
                    N.verbose("Storing instance of module", N), T = N, E.data(w, N)
                },
                destroy: function () {
                    N.verbose("Destroying previous module for", E), E.off(b).removeData(w)
                },
                refresh: function () {
                    N.verbose("Refreshing selector cache"), S = e("style[title=" + g + "]")
                },
                attachEvents: function (t, n) {
                    var r = e(t);
                    n = e.isFunction(N[n]) ? N[n] : N.toggle, r.size() > 0 ? (N.debug("Attaching sidebar events to element", t, n), r.off(b).on("click" + b, n)) : N.error(y.notFound)
                },
                show: function (t) {
                    t = e.isFunction(t) ? t : function () {}, N.debug("Showing sidebar", t), N.is.closed() ? (d.overlay || (d.exclusive && N.hideAll(), N.pushPage()), N.set.active(), t(), e.proxy(d.onChange, x)(), e.proxy(d.onShow, x)()) : N.debug("Sidebar is already visible")
                },
                hide: function (t) {
                    t = e.isFunction(t) ? t : function () {}, N.debug("Hiding sidebar", t), N.is.open() && (d.overlay || (N.pullPage(), N.remove.pushed()), N.remove.active(), t(), e.proxy(d.onChange, x)(), e.proxy(d.onHide, x)())
                },
                hideAll: function () {
                    e(v.sidebar).filter(":visible").sidebar("hide")
                },
                toggle: function () {
                    N.is.closed() ? N.show() : N.hide()
                },
                pushPage: function () {
                    var e = N.get.direction(),
                        t = N.is.vertical() ? E.outerHeight() : E.outerWidth();
                    d.useCSS ? (N.debug("Using CSS to animate body"), N.add.bodyCSS(e, t), N.set.pushed()) : N.animatePage(e, t, N.set.pushed)
                },
                pullPage: function () {
                    var e = N.get.direction();
                    d.useCSS ? (N.debug("Resetting body position css"), N.remove.bodyCSS()) : (N.debug("Resetting body position using javascript"), N.animatePage(e, 0)), N.remove.pushed()
                },
                animatePage: function (e, t) {
                    var n = {};
                    n["padding-" + e] = t, N.debug("Using javascript to animate body", n), s.animate(n, d.duration, N.set.pushed)
                },
                add: {
                    bodyCSS: function (e, t) {
                        var n;
                        e !== m.bottom && (n = '<style title="' + g + '">' + "body.pushed {" + "  margin-" + e + ": " + t + "px !important;" + "}" + "</style>"), o.append(n), N.debug("Adding body css to head", S)
                    }
                },
                remove: {
                    bodyCSS: function () {
                        N.debug("Removing body css styles", S), N.refresh(), S.remove()
                    },
                    active: function () {
                        E.removeClass(m.active)
                    },
                    pushed: function () {
                        N.verbose("Removing body push state", N.get.direction()), s.removeClass(m[N.get.direction()]).removeClass(m.pushed)
                    }
                },
                set: {
                    active: function () {
                        E.addClass(m.active)
                    },
                    pushed: function () {
                        N.verbose("Adding body push state", N.get.direction()), s.addClass(m[N.get.direction()]).addClass(m.pushed)
                    }
                },
                get: {
                    direction: function () {
                        return E.hasClass(m.top) ? m.top : E.hasClass(m.right) ? m.right : E.hasClass(m.bottom) ? m.bottom : m.left
                    },
                    transitionEvent: function () {
                        var e = n.createElement("element"),
                            t = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            },
                            i;
                        for (i in t)
                            if (e.style[i] !== r) return t[i]
                    }
                },
                is: {
                    open: function () {
                        return E.is(":animated") || E.hasClass(m.active)
                    },
                    closed: function () {
                        return !N.is.open()
                    },
                    vertical: function () {
                        return E.hasClass(m.top)
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (n === r) return d[t];
                        d[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, N, t);
                    else {
                        if (n === r) return N[t];
                        N[t] = n
                    }
                },
                debug: function () {
                    d.debug && (d.performance ? N.performance.log(arguments) : (N.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), N.debug.apply(console, arguments)))
                },
                verbose: function () {
                    d.verbose && d.debug && (d.performance ? N.performance.log(arguments) : (N.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), N.verbose.apply(console, arguments)))
                },
                error: function () {
                    N.error = Function.prototype.bind.call(console.error, console, d.name + ":"), N.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        d.performance && (t = (new Date).getTime(), r = a || t, n = t - r, a = t, f.push({
                            Element: x,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(N.performance.timer), N.performance.timer = setTimeout(N.performance.display, 100)
                    },
                    display: function () {
                        var t = d.name + ":",
                            n = 0;
                        a = !1, clearTimeout(N.performance.timer), e.each(f, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", u && (t += " '" + u + "'"), i.size() > 1 && (t += " (" + i.size() + ")"), (console.group !== r || console.table !== r) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), f = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = T,
                        o, u, a;
                    return n = n || h, i = x || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(p) ? p.push(a) : p !== r ? p = [p, a] : a !== r && (p = a), u
                }
            }, c ? (T === r && N.initialize(), N.invoke(l)) : (T !== r && N.destroy(), N.initialize())
        }), p !== r ? p : this
    }, e.fn.sidebar.settings = {
        name: "Sidebar",
        namespace: "sidebar",
        debug: !1,
        verbose: !0,
        performance: !0,
        useCSS: !0,
        exclusive: !0,
        overlay: !1,
        duration: 300,
        onChange: function () {},
        onShow: function () {},
        onHide: function () {},
        className: {
            active: "active",
            pushed: "pushed",
            top: "top",
            left: "left",
            right: "right",
            bottom: "bottom"
        },
        selector: {
            sidebar: ".ui.sidebar"
        },
        error: {
            method: "The method you called is not defined.",
            notFound: "There were no elements that matched the specified selector"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.tab = function (n) {
        var i = e.extend(!0, {}, e.fn.tab.settings, n),
            s = e(this),
            o = e(i.context).find(i.selector.tabs),
            u = s.selector || "",
            a = {},
            f = !0,
            l = 0,
            c, h, p, d = this,
            v = (new Date).getTime(),
            m = [],
            g = i.className,
            y = i.metadata,
            b = i.error,
            w = "." + i.namespace,
            E = "module-" + i.namespace,
            S = s.data(E),
            x = arguments[0],
            T = S !== r && typeof x == "string",
            N = [].slice.call(arguments, 1),
            C, k;
        return C = {
            initialize: function () {
                C.debug("Initializing Tabs", s), i.auto && (C.verbose("Setting up automatic tab retrieval from server"), i.apiSettings = {
                    url: i.path + "/{$tab}"
                });
                if (i.history) {
                    C.debug("Initializing page state");
                    if (e.address === r) return C.error(b.state), !1;
                    i.historyType == "hash" && C.debug("Using hash state change to manage state");
                    if (i.historyType == "html5") {
                        C.debug("Using HTML5 to manage state");
                        if (
                            i.path === !1) return C.error(b.path), !1;
                        e.address.history(!0).state(i.path)
                    }
                    e.address.unbind("change").bind("change", C.event.history.change)
                }
                e.isWindow(d) || (C.debug("Attaching tab activation events to element", s), s.on("click" + w, C.event.click)), C.instantiate()
            },
            instantiate: function () {
                C.verbose("Storing instance of module", C), s.data(E, C)
            },
            destroy: function () {
                C.debug("Destroying tabs", s), s.removeData(E).off(w)
            },
            event: {
                click: function (t) {
                    var n = e(this).data(y.tab);
                    n !== r ? (i.history ? (C.verbose("Updating page state", t), e.address.value(n)) : (C.verbose("Changing tab without state management", t), C.changeTab(n)), t.preventDefault()) : C.debug("No tab specified")
                },
                history: {
                    change: function (t) {
                        var n = t.pathNames.join("/") || C.get.initialPath(),
                            s = i.templates.determineTitle(n) || !1;
                        C.debug("History change event", n, t), p = t, n !== r && C.changeTab(n), s && e.address.title(s)
                    }
                }
            },
            refresh: function () {
                c && (C.debug("Refreshing tab", c), C.changeTab(c))
            },
            cache: {
                read: function (e) {
                    return e !== r ? a[e] : !1
                },
                add: function (e, t) {
                    e = e || c, C.debug("Adding cached content for", e), a[e] = t
                },
                remove: function (e) {
                    e = e || c, C.debug("Removing cached content for", e), delete a[e]
                }
            },
            set: {
                state: function (t) {
                    e.address.value(t)
                }
            },
            changeTab: function (n) {
                var r = t.history && t.history.pushState,
                    s = r && i.ignoreFirstLoad && f,
                    o = i.auto || e.isPlainObject(i.apiSettings),
                    u = o && !s ? C.utilities.pathToArray(n) : C.get.defaultPathArray(n);
                n = C.utilities.arrayToPath(u), C.deactivate.all(), e.each(u, function (t, r) {
                    var a = u.slice(0, t + 1),
                        l = C.utilities.arrayToPath(a),
                        d = C.is.tab(l),
                        v = t + 1 == u.length,
                        m = C.get.tabElement(l),
                        g, y, w;
                    C.verbose("Looking for tab", r);
                    if (!d) return C.error(b.missingTab, r), !1;
                    C.verbose("Tab was found", r), c = l, h = C.utilities.filterArray(u, a), v ? w = !0 : (g = u.slice(0, t + 2), y = C.utilities.arrayToPath(g), w = !C.is.tab(y), w && C.verbose("Tab parameters found", g));
                    if (w && o) return s ? (C.debug("Ignoring remote content on first tab load", l), f = !1, C.cache.add(n, m.html()), C.activate.all(l), e.proxy(i.onTabInit, m)(l, h, p), e.proxy(i.onTabLoad, m)(l, h, p)) : (C.activate.navigation(l), C.content.fetch(l, n)), !1;
                    C.debug("Opened local tab", l), C.activate.all(l), C.cache.read(l) || (C.cache.add(l, !0), C.debug("First time tab loaded calling tab init"), e.proxy(i.onTabInit, m)(l, h, p)), e.proxy(i.onTabLoad, m)(l, h, p)
                })
            },
            content: {
                fetch: function (t, n) {
                    var s = C.get.tabElement(t),
                        o = {
                            dataType: "html",
                            stateContext: s,
                            success: function (r) {
                                C.cache.add(n, r), C.content.update(t, r), t == c ? (C.debug("Content loaded", t), C.activate.tab(t)) : C.debug("Content loaded in background", t), e.proxy(i.onTabInit, s)(t, h, p), e.proxy(i.onTabLoad, s)(t, h, p)
                            },
                            urlData: {
                                tab: n
                            }
                        },
                        u = s.data(y.promise) || !1,
                        a = u && u.state() === "pending",
                        f, l;
                    n = n || t, l = C.cache.read(n), i.cache && l ? (C.debug("Showing existing content", n), C.content.update(t, l), C.activate.tab(t), e.proxy(i.onTabLoad, s)(t, h, p)) : a ? (C.debug("Content is already loading", n), s.addClass(g.loading)) : e.api !== r ? (console.log(i.apiSettings), f = e.extend(!0, {
                        headers: {
                            "X-Remote": !0
                        }
                    }, i.apiSettings, o), C.debug("Retrieving remote content", n, f), e.api(f)) : C.error(b.api)
                },
                update: function (e, t) {
                    C.debug("Updating html for", e);
                    var n = C.get.tabElement(e);
                    n.html(t)
                }
            },
            activate: {
                all: function (e) {
                    C.activate.tab(e), C.activate.navigation(e)
                },
                tab: function (e) {
                    var t = C.get.tabElement(e);
                    C.verbose("Showing tab content for", t), t.addClass(g.active)
                },
                navigation: function (e) {
                    var t = C.get.navElement(e);
                    C.verbose("Activating tab navigation for", t, e), t.addClass(g.active)
                }
            },
            deactivate: {
                all: function () {
                    C.deactivate.navigation(), C.deactivate.tabs()
                },
                navigation: function () {
                    s.removeClass(g.active)
                },
                tabs: function () {
                    o.removeClass(g.active + " " + g.loading)
                }
            },
            is: {
                tab: function (e) {
                    return e !== r ? C.get.tabElement(e).size() > 0 : !1
                }
            },
            get: {
                initialPath: function () {
                    return s.eq(0).data(y.tab) || o.eq(0).data(y.tab)
                },
                path: function () {
                    return e.address.value()
                },
                defaultPathArray: function (e) {
                    return C.utilities.pathToArray(C.get.defaultPath(e))
                },
                defaultPath: function (e) {
                    var t = s.filter("[data-" + y.tab + '^="' + e + '/"]').eq(0),
                        n = t.data(y.tab) || !1;
                    if (n) {
                        C.debug("Found default tab", n);
                        if (l < i.maxDepth) return l++, C.get.defaultPath(n);
                        C.error(b.recursion)
                    } else C.debug("No default tabs found for", e, o);
                    return l = 0, e
                },
                navElement: function (e) {
                    return e = e || c, s.filter("[data-" + y.tab + '="' + e + '"]')
                },
                tabElement: function (e) {
                    var t, n, r, i;
                    return e = e || c, r = C.utilities.pathToArray(e), i = C.utilities.last(r), t = o.filter("[data-" + y.tab + '="' + i + '"]'), n = o.filter("[data-" + y.tab + '="' + e + '"]'), t.size() > 0 ? t : n
                },
                tab: function () {
                    return c
                }
            },
            utilities: {
                filterArray: function (t, n) {
                    return e.grep(t, function (t) {
                        return e.inArray(t, n) == -1
                    })
                },
                last: function (t) {
                    return e.isArray(t) ? t[t.length - 1] : !1
                },
                pathToArray: function (e) {
                    return e === r && (e = c), typeof e == "string" ? e.split("/") : [e]
                },
                arrayToPath: function (t) {
                    return e.isArray(t) ? t.join("/") : !1
                }
            },
            setting: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, i, t);
                else {
                    if (n === r) return i[t];
                    i[t] = n
                }
            },
            internal: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, C, t);
                else {
                    if (n === r) return C[t];
                    C[t] = n
                }
            },
            debug: function () {
                i.debug && (i.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), C.debug.apply(console, arguments)))
            },
            verbose: function () {
                i.verbose && i.debug && (i.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), C.verbose.apply(console, arguments)))
            },
            error: function () {
                C.error = Function.prototype.bind.call(console.error, console, i.name + ":"), C.error.apply(console, arguments)
            },
            performance: {
                log: function (e) {
                    var t, n, r;
                    i.performance && (t = (new Date).getTime(), r = v || t, n = t - r, v = t, m.push({
                        Element: d,
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                    })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 100)
                },
                display: function () {
                    var t = i.name + ":",
                        n = 0;
                    v = !1, clearTimeout(C.performance.timer), e.each(m, function (e, t) {
                        n += t["Execution Time"]
                    }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== r || console.table !== r) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
                        console.log(t.Name + ": " + t["Execution Time"] + "ms")
                    }), console.groupEnd()), m = []
                }
            },
            invoke: function (t, n, i) {
                var s = S,
                    o, u, a;
                return n = n || N, i = d || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                    var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                    if (e.isPlainObject(s[a]) && n != o) s = s[a];
                    else {
                        if (s[a] !== r) return u = s[a], !1;
                        if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                        s = s[i]
                    }
                })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(k) ? k.push(a) : k !== r ? k = [k, a] : a !== r && (k = a), u
            }
        }, T ? (S === r && C.initialize(), C.invoke(x)) : (S !== r && C.destroy(), C.initialize()), k !== r ? k : this
    }, e.tab = function (n) {
        e(t).tab(n)
    }, e.fn.tab.settings = {
        name: "Tab",
        debug: !1,
        verbose: !0,
        performance: !0,
        namespace: "tab",
        onTabInit: function (e, t, n) {},
        onTabLoad: function (e, t, n) {},
        templates: {
            determineTitle: function (e) {}
        },
        auto: !1,
        history: !0,
        historyType: "hash",
        path: !1,
        context: "body",
        maxDepth: 25,
        ignoreFirstLoad: !1,
        alwaysRefresh: !1,
        cache: !0,
        apiSettings: !1,
        error: {
            api: "You attempted to load content without API module",
            method: "The method you called is not defined",
            missingTab: "Tab cannot be found",
            noContent: "The tab you specified is missing a content url.",
            path: "History enabled, but no path was specified",
            recursion: "Max recursive depth reached",
            state: "The state library has not been initialized"
        },
        metadata: {
            tab: "tab",
            loaded: "loaded",
            promise: "promise"
        },
        className: {
            loading: "loading",
            active: "active"
        },
        selector: {
            tabs: ".ui.tab"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.transition = function () {
        var i = e(this),
            s = i.selector || "",
            o = (new Date).getTime(),
            u = [],
            a = arguments,
            f = a[0],
            l = [].slice.call(arguments, 1),
            c = typeof f == "string",
            h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            },
            p;
        return i.each(function () {
            var t = e(this),
                h = this,
                d, v, m, g, y, b, w, E, S, x;
            x = {
                initialize: function () {
                    d = x.get.settings.apply(h, a), x.verbose("Converted arguments into settings object", d), m = d.error, g = d.className, E = d.namespace, y = d.metadata, S = "module-" + E, b = x.get.animationEvent(), w = x.get.animationName(), v = t.data(S) || x, c && (c = x.invoke(f)), c === !1 && x.animate(), x.instantiate()
                },
                instantiate: function () {
                    x.verbose("Storing instance of module", x), t.data(S, v)
                },
                destroy: function () {
                    x.verbose("Destroying previous module for", h), t.removeData(S)
                },
                refresh: function () {
                    x.verbose("Refreshing display type on next animation"), delete v.displayType
                },
                forceRepaint: function () {
                    x.verbose("Forcing element repaint");
                    var e = t.parent(),
                        n = t.next();
                    n.size() === 0 ? t.detach().appendTo(e) : t.detach().insertBefore(n)
                },
                repaint: function () {
                    x.verbose("Repainting element");
                    var e = h.offsetWidth
                },
                animate: function (e) {
                    d = e || d;
                    if (!x.is.supported()) return x.error(m.support), !1;
                    x.debug("Preparing animation", d.animation);
                    if (x.is.animating() && d.queue) return !d.allowRepeats && x.has.direction() && x.is.occuring() && v.queuing !== !0 ? x.error(m.repeated) : x.queue(d.animation), !1;
                    x.can.animate ? x.set.animating(d.animation) : x.error(m.noAnimation, d.animation)
                },
                reset: function () {
                    x.debug("Resetting animation to beginning conditions"), t.off(b), x.restore.conditions(), x.hide(), x.remove.animating()
                },
                queue: function (e) {
                    x.debug("Queueing animation of", e), v.queuing = !0, t.one(b, function () {
                        v.queuing = !1, x.repaint(), x.animate.apply(this, d)
                    })
                },
                complete: function () {
                    x.verbose("CSS animation complete", d.animation), x.is.looping() || (x.is.outward() ? (x.verbose("Animation is outward, hiding element"), x.restore.conditions(), x.remove.display(), x.hide(), e.proxy(d.onHide, this)()) : x.is.inward() ? (x.verbose("Animation is outward, showing element"), x.restore.conditions(), x.show(), e.proxy(d.onShow, this)()) : x.restore.conditions(), x.remove.duration(), x.remove.animating()), e.proxy(d.complete, this)()
                },
                has: {
                    direction: function (e) {
                        return e = e || d.animation, e.search(g.inward) !== -1 || e.search(g.outward) !== -1 ? (x.debug("Direction already set in animation"), !0) : !1
                    }
                },
                set: {
                    animating: function (e) {
                        e = e || d.animation, x.save.conditions(), x.can.transition() && !x.has.direction() && x.set.direction(), x.remove.hidden(), x.set.display(), t.addClass(g.animating).addClass(g.transition).addClass(e).one(b, x.complete), x.set.duration(d.duration), x.debug("Starting tween", d.animation, t.attr("class"))
                    },
                    display: function () {
                        var e = x.get.displayType();
                        e !== "block" && e !== "none" && (x.verbose("Setting final visibility to", e), t.css({
                            display: e
                        }))
                    },
                    direction: function () {
                        t.is(":visible") ? (x.debug("Automatically determining the direction of animation", "Outward"), t.removeClass(g.inward).addClass(g.outward)) : (x.debug("Automatically determining the direction of animation", "Inward"), t.removeClass(g.outward).addClass(g.inward))
                    },
                    looping: function () {
                        x.debug("Transition set to loop"), t.addClass(g.looping)
                    },
                    duration: function (e) {
                        e = e || d.duration, e = typeof e == "number" ? e + "ms" : e, x.verbose("Setting animation duration", e), t.css({
                            "-webkit-animation-duration": e,
                            "-moz-animation-duration": e,
                            "-ms-animation-duration": e,
                            "-o-animation-duration": e,
                            "animation-duration": e
                        })
                    },
                    hidden: function () {
                        t.addClass(g.transition).addClass(g.hidden)
                    },
                    visible: function () {
                        t.addClass(g.transition).addClass(g.visible)
                    }
                },
                save: {
                    displayType: function (e) {
                        v.displayType = e
                    },
                    transitionExists: function (t, n) {
                        e.fn.transition.exists[t] = n, x.verbose("Saving existence of transition", t, n)
                    },
                    conditions: function () {
                        v.cache = {
                            className: t.attr("class"),
                            style: t.attr("style")
                        }, x.verbose("Saving original attributes", v.cache)
                    }
                },
                restore: {
                    conditions: function () {
                        if (v.cache === r) return !1;
                        v.cache.className ? t.attr("class", v.cache.className) : t.removeAttr("class"), v.cache.style ? t.attr("style", v.cache.style) : x.get.displayType() === "block" && t.removeAttr("style"), x.is.looping() && x.remove.looping(), x.verbose("Restoring original attributes", v.cache)
                    }
                },
                remove: {
                    animating: function () {
                        t.removeClass(g.animating)
                    },
                    display: function () {
                        v.displayType !== r && t.css("display", "")
                    },
                    duration: function () {
                        t.css({
                            "-webkit-animation-duration": "",
                            "-moz-animation-duration": "",
                            "-ms-animation-duration": "",
                            "-o-animation-duration": "",
                            "animation-duration": ""
                        })
                    },
                    hidden: function () {
                        t.removeClass(g.hidden)
                    },
                    visible: function () {
                        t.removeClass(g.visible)
                    },
                    looping: function () {
                        x.debug("Transitions are no longer looping"), t.removeClass(g.looping), x.forceRepaint()
                    }
                },
                get: {
                    settings: function (t, n, r) {
                        return typeof t == "object" ? e.extend(!0, {}, e.fn.transition.settings, t) : typeof r == "function" ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            complete: r,
                            duration: n
                        }) : typeof n == "string" || typeof n == "number" ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            duration: n
                        }) : typeof n == "object" ? e.extend({}, e.fn.transition.settings, n, {
                            animation: t
                        }) : typeof n == "function" ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            complete: n
                        }) : e.extend({}, e.fn.transition.settings, {
                            animation: t
                        })
                    },
                    displayType: function () {
                        return v.displayType === r && x.can.transition(), v.displayType
                    },
                    transitionExists: function (t) {
                        return e.fn.transition.exists[t]
                    },
                    animationName: function () {
                        var e = n.createElement("div"),
                            t = {
                                animation: "animationName",
                                OAnimation: "oAnimationName",
                                MozAnimation: "mozAnimationName",
                                WebkitAnimation: "webkitAnimationName"
                            },
                            i;
                        for (i in t)
                            if (e.style[i] !== r) return x.verbose("Determined animation vendor name property", t[i]), t[i];
                        return !1
                    },
                    animationEvent: function () {
                        var e = n.createElement("div"),
                            t = {
                                animation: "animationend",
                                OAnimation: "oAnimationEnd",
                                MozAnimation: "animationend",
                                WebkitAnimation: "webkitAnimationEnd"
                            },
                            i;
                        for (i in t)
                            if (e.style[i] !== r) return x.verbose("Determined animation vendor end event", t[i]), t[i];
                        return !1
                    }
                },
                can: {
                    animate: function () {
                        return t.css(d.animation) !== "none" ? (x.debug("CSS definition found", t.css(d.animation)), !0) : (x.debug("Unable to find css definition", t.attr("class")), !1)
                    },
                    transition: function () {
                        var n = t.attr("class"),
                            i = d.animation,
                            s = x.get.transitionExists(d.animation),
                            o, u, a, f;
                        if (s === r || v.displayType === r) x.verbose("Determining whether animation exists"), o = e("<div>").addClass(n).appendTo(e("body")), u = o.removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).addClass(i).css(w), a = o.addClass(g.inward).css(w), f = o.attr("class", n).show().css("display"), x.verbose("Determining final display state", f), u != a ? (x.debug("Transition exists for animation", i), s = !0) : (x.debug("Static animation found", i, f), s = !1), o.remove(), x.save.displayType(f), x.save.transitionExists(i, s);
                        return s
                    }
                },
                is: {
                    animating: function () {
                        return t.hasClass(g.animating)
                    },
                    inward: function () {
                        return t.hasClass(g.inward)
                    },
                    outward: function () {
                        return t.hasClass(g.outward)
                    },
                    looping: function () {
                        return t.hasClass(g.looping)
                    },
                    occuring: function (e) {
                        return e = e || d.animation, t.hasClass(e)
                    },
                    visible: function () {
                        return t.is(":visible")
                    },
                    supported: function () {
                        return w !== !1 && b !== !1
                    }
                },
                hide: function () {
                    x.verbose("Hiding element"), x.remove.visible(), x.set.hidden(), x.repaint()
                },
                show: function (e) {
                    x.verbose("Showing element", e), x.remove.hidden(), x.set.visible(), x.repaint()
                },
                start: function () {
                    x.verbose("Starting animation"), t.removeClass(g.disabled)
                },
                stop: function () {
                    x.debug("Stopping animation"), t.addClass(g.disabled)
                },
                toggle: function () {
                    x.debug("Toggling play status"), t.toggleClass(g.disabled)
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (n === r) return d[t];
                        d[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t);
                    else {
                        if (n === r) return x[t];
                        x[t] = n
                    }
                },
                debug: function () {
                    d.debug && (d.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), x.debug.apply(console, arguments)))
                },
                verbose: function () {
                    d.verbose && d.debug && (d.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), x.verbose.apply(console, arguments)))
                },
                error: function () {
                    x.error = Function.prototype.bind.call(console.error, console, d.name + ":"), x.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        d.performance && (t = (new Date).getTime(), r = o || t, n = t - r, o = t, u.push({
                            Element: h,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 100)
                    },
                    display: function () {
                        var t = d.name + ":",
                            n = 0;
                        o = !1, clearTimeout(x.performance.timer), e.each(u, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", s && (t += " '" + s + "'"), i.size() > 1 && (t += " (" + i.size() + ")"), (console.group !== r || console.table !== r) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), u = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = v,
                        o, u, a;
                    return n = n || l, i = h || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(p) ? p.push(a) : p !== r ? p = [p, a] : a !== r && (p = a), u || !1
                }
            }, x.initialize()
        }), p !== r ? p : this
    }, e.fn.transition.exists = {}, e.fn.transition.settings = {
        name: "Transition",
        debug: !1,
        verbose: !0,
        performance: !0,
        namespace: "transition",
        complete: function () {},
        onShow: function () {},
        onHide: function () {},
        allowRepeats: !1,
        animation: "fade",
        duration: "700ms",
        queue: !0,
        className: {
            animating: "animating",
            disabled: "disabled",
            hidden: "hidden",
            inward: "in",
            loading: "loading",
            looping: "looping",
            outward: "out",
            transition: "ui transition",
            visible: "visible"
        },
        error: {
            noAnimation: "There is no css animation matching the one you specified.",
            repeated: "That animation is already occurring, cancelling repeated animation",
            method: "The method you called is not defined",
            support: "This browser does not support CSS animations"
        }
    }
}(jQuery, window, document),
function (e, t, n, r) {
    e.fn.video = function (t) {
        var n = e(this),
            i = n.selector || "",
            s = (new Date).getTime(),
            o = [],
            u = arguments[0],
            a = typeof u == "string",
            f = [].slice.call(arguments, 1),
            l;
        return n.each(function () {
            var c = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.video.settings, t) : e.extend({}, e.fn.video.settings),
                h = c.selector,
                p = c.className,
                d = c.error,
                v = c.metadata,
                m = c.namespace,
                g = "." + m,
                y = "module-" + m,
                b = e(this),
                w = b.find(h.placeholder),
                E = b.find(h.playButton),
                S = b.find(h.embed),
                x = this,
                T = b.data(y),
                N;
            N = {
                initialize: function () {
                    N.debug("Initializing video"), w.on("click" + g, N.play), E.on("click" + g, N.play), N.instantiate()
                },
                instantiate: function () {
                    N.verbose("Storing instance of module", N), T = N, b.data(y, N)
                },
                destroy: function () {
                    N.verbose("Destroying previous instance of video"), b.removeData(y).off(g), w.off(g), E.off(g)
                },
                change: function (e, t, n) {
                    N.debug("Changing video to ", e, t, n), b.data(v.source, e).data(v.id, t).data(v.url, n), c.onChange()
                },
                reset: function () {
                    N.debug("Clearing video embed and showing placeholder"), b.removeClass(p.active), S.html(" "), w.show(), c.onReset()
                },
                play: function () {
                    N.debug("Playing video");
                    var e = b.data(v.source) || !1,
                        t = b.data(v.url) || !1,
                        n = b.data(v.id) || !1;
                    S.html(N.generate.html(e, n, t)), b.addClass(p.active), c.onPlay()
                },
                generate: {
                    html: function (e, t, n) {
                        N.debug("Generating embed html");
                        var r = c.width == "auto" ? b.width() : c.width,
                            i = c.height == "auto" ? b.height() : c.height,
                            s;
                        return e && t ? e == "vimeo" ? s = '<iframe src="http://player.vimeo.com/video/' + t + "?=" + N.generate.url(e) + '"' + ' width="' + r + '" height="' + i + '"' + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' : e == "youtube" && (s = '<iframe src="http://www.youtube.com/embed/' + t + "?=" + N.generate.url(e) + '"' + ' width="' + r + '" height="' + i + '"' + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : n ? s = '<iframe src="' + n + '"' + ' width="' + r + '" height="' + i + '"' + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' : N.error(d.noVideo), s
                    },
                    url: function (e) {
                        var t = c.api ? 1 : 0,
                            n = c.autoplay ? 1 : 0,
                            r = c.hd ? 1 : 0,
                            i = c.showUI ? 1 : 0,
                            s = c.showUI ? 0 : 1,
                            o = "";
                        return e == "vimeo" && (o = "api=" + t + "&amp;title=" + i + "&amp;byline=" + i + "&amp;portrait=" + i + "&amp;autoplay=" + n, c.color && (o += "&amp;color=" + c.color)), e == "ustream" ? (o = "autoplay=" + n, c.color && (o += "&amp;color=" + c.color)) : e == "youtube" && (o = "enablejsapi=" + t + "&amp;autoplay=" + n + "&amp;autohide=" + s + "&amp;hq=" + r + "&amp;modestbranding=1", c.color && (o += "&amp;color=" + c.color)), o
                    }
                },
                setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, c, t);
                    else {
                        if (n === r) return c[t];
                        c[t] = n
                    }
                },
                internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, N, t);
                    else {
                        if (n === r) return N[t];
                        N[t] = n
                    }
                },
                debug: function () {
                    c.debug && (c.performance ? N.performance.log(arguments) : (N.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), N.debug.apply(console, arguments)))
                },
                verbose: function () {
                    c.verbose && c.debug && (c.performance ? N.performance.log(arguments) : (N.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), N.verbose.apply(console, arguments)))
                },
                error: function () {
                    N.error = Function.prototype.bind.call(console.error, console, c.name + ":"), N.error.apply(console, arguments)
                },
                performance: {
                    log: function (e) {
                        var t, n, r;
                        c.performance && (t = (new Date).getTime(), r = s || t, n = t - r, s = t, o.push({
                            Element: x,
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(N.performance.timer), N.performance.timer = setTimeout(N.performance.display, 100)
                    },
                    display: function () {
                        var t = c.name + ":",
                            u = 0;
                        s = !1, clearTimeout(N.performance.timer), e.each(o, function (e, t) {
                            u += t["Execution Time"]
                        }), t += " " + u + "ms", i && (t += " '" + i + "'"), n.size() > 1 && (t += " (" + n.size() + ")"), (console.group !== r || console.table !== r) && o.length > 0 && (console.groupCollapsed(t), console.table ? console.table(o) : e.each(o, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), o = []
                    }
                },
                invoke: function (t, n, i) {
                    var s = T,
                        o, u, a;
                    return n = n || f, i = x || i, typeof t == "string" && s !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
                        var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(s[a]) && n != o) s = s[a];
                        else {
                            if (s[a] !== r) return u = s[a], !1;
                            if (!e.isPlainObject(s[i]) || n == o) return s[i] !== r ? (u = s[i], !1) : !1;
                            s = s[i]
                        }
                    })), e.isFunction(u) ? a = u.apply(i, n) : u !== r && (a = u), e.isArray(l) ? l.push(a) : l !== r ? l = [l, a] : a !== r && (l = a), u
                }
            }, a ? (T === r && N.initialize(), N.invoke(u)) : (T !== r && N.destroy(), N.initialize())
        }), l !== r ? l : this
    }, e.fn.video.settings = {
        name: "Video",
        namespace: "video",
        debug: !1,
        verbose: !0,
        performance: !0,
        metadata: {
            source: "source",
            id: "id",
            url: "url"
        },
        onPlay: function () {},
        onReset: function () {},
        onChange: function () {},
        onPause: function () {},
        onStop: function () {},
        width: "auto",
        height: "auto",
        autoplay: !1,
        color: "#442359",
        hd: !0,
        showUI: !1,
        api: !0,
        error: {
            noVideo: "No video specified",
            method: "The method you called is not defined"
        },
        className: {
            active: "active"
        },
        selector: {
            embed: ".embed",
            placeholder: ".placeholder",
            playButton: ".play"
        }
    }
}(jQuery, window, document), ! function (e) {
    e(function () {
        "use strict";
        e.support.transition = function () {
            var e = function () {
                var e = document.createElement("bootstrap"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    n;
                for (n in t)
                    if (e.style[n] !== undefined) return t[n]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)), this.$element = e(t), this.checkPosition()
    };
    t.prototype.checkPosition = function () {
        if (!this.$element.is(":visible")) return;
        var t = e(document).height(),
            n = this.$window.scrollTop(),
            r = this.$element.offset(),
            i = this.options.offset,
            s = i.bottom,
            o = i.top,
            u = "affix affix-top affix-bottom",
            a;
        typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
        if (this.affixed === a) return;
        this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
    }, e.fn.affix = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("affix"),
                s = typeof n == "object" && n;
            i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
        offset: 0
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function (n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function (t) {
        function s() {
            i.trigger("closed").remove()
        }
        var n = e(this),
            r = n.attr("data-target"),
            i;
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
        if (t.isDefaultPrevented()) return;
        i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
    }, e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this),
                i = r.data("alert");
            i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e(function () {
        e("body").on("click.alert.data-api", t, n.prototype.close)
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function (e) {
        var t = "disabled",
            n = this.$element,
            r = n.data(),
            i = n.is("input") ? "val" : "html";
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function () {
        var e = this.$element.parent('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    }, e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("button"),
                s = typeof n == "object" && n;
            i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e(function () {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function (t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = n, this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function (t) {
            return t || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        },
        to: function (t) {
            var n = this.$element.find(".item.active"),
                r = n.parent().children(),
                i = r.index(n),
                s = this;
            if (t > r.length - 1 || t < 0) return;
            return this.sliding ? this.$element.one("slid", function () {
                s.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(r[t]))
        },
        pause: function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle()), clearInterval(this.interval), this.interval = null, this
        },
        next: function () {
            if (this.sliding) return;
            return this.slide("next")
        },
        prev: function () {
            if (this.sliding) return;
            return this.slide("prev")
        },
        slide: function (t, n) {
            var r = this.$element.find(".item.active"),
                i = n || r[t](),
                s = this.interval,
                o = t == "next" ? "left" : "right",
                u = t == "next" ? "first" : "last",
                a = this,
                f = e.Event("slide", {
                    relatedTarget: i[0]
                });
            this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u]();
            if (i.hasClass("active")) return;
            if (e.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function () {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
                        a.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    }, e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("carousel"),
                s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n),
                o = typeof n == "string" ? n : s.slide;
            i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e(function () {
        e("body").on("click.carousel.data-api", "[data-slide]", function (t) {
            var n = e(this),
                r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = !i.data("modal") && e.extend({}, i.data(), n.data());
            i.carousel(s), t.preventDefault()
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function () {
            var t, n, r, i;
            if (this.transitioning) return;
            t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (r && r.length) {
                i = r.data("collapse");
                if (i && i.transitioning) return;
                r.collapse("hide"), i || r.data("collapse", null)
            }
            this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
        },
        hide: function () {
            var t;
            if (this.transitioning) return;
            t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
        },
        reset: function (e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function (t, n, r) {
            var i = this,
                s = function () {
                    n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
                };
            this.$element.trigger(n);
            if (n.isDefaultPrevented()) return;
            this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
        },
        toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("collapse"),
                s = typeof n == "object" && n;
            i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e(function () {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
            var n = e(this),
                r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
                s = e(i).data("collapse") ? "toggle" : n.data();
            n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";

    function r() {
        i(e(t)).removeClass("open")
    }

    function i(t) {
        var n = t.attr("data-target"),
            r;
        return n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), r = e(n), r.length || (r = t.parent()), r
    }
    var t = "[data-toggle=dropdown]",
        n = function (t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    n.prototype = {
        constructor: n,
        toggle: function (t) {
            var n = e(this),
                s, o;
            if (n.is(".disabled, :disabled")) return;
            return s = i(n), o = s.hasClass("open"), r(), o || (s.toggleClass("open"), n.focus()), !1
        },
        keydown: function (t) {
            var n, r, s, o, u, a;
            if (!/(38|40|27)/.test(t.keyCode)) return;
            n = e(this), t.preventDefault(), t.stopPropagation();
            if (n.is(".disabled, :disabled")) return;
            o = i(n), u = o.hasClass("open");
            if (!u || u && t.keyCode == 27) return n.click();
            r = e("[role=menu] li:not(.divider) a", o);
            if (!r.length) return;
            a = r.index(r.filter(":focus")), t.keyCode == 38 && a > 0 && a--, t.keyCode == 40 && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a).focus()
        }
    }, e.fn.dropdown = function (t) {
        return this.each(function () {
            var r = e(this),
                i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.dropdown.Constructor = n, e(function () {
        e("html").on("click.dropdown.data-api touchstart.dropdown.data-api", r), e("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function (e) {
            e.stopPropagation()
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var t = this,
                n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented()) return;
            e("body").addClass("modal-open"), this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1).focus(), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {
                    t.$element.trigger("shown")
                }) : t.$element.trigger("shown")
            })
        },
        hide: function (t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide"), this.$element
                .trigger(t);
            if (!this.isShown || t.isDefaultPrevented()) return;
            this.isShown = !1, e("body").removeClass("modal-open"), this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function () {
            var t = this;
            e(document).on("focusin.modal", function (e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        },
        escape: function () {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {
                t.which == 27 && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var t = this,
                n = setTimeout(function () {
                    t.$element.off(e.support.transition.end), t.hideModal()
                }, 500);
            this.$element.one(e.support.transition.end, function () {
                clearTimeout(n), t.hideModal()
            })
        },
        hideModal: function (e) {
            this.$element.hide().trigger("hidden"), this.backdrop()
        },
        removeBackdrop: function () {
            this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (t) {
            var n = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : t && t()
        }
    }, e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("modal"),
                s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e(function () {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
            var n = e(this),
                r = n.attr("href"),
                i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = i.data("modal") ? "toggle" : e.extend({
                    remote: !/#/.test(r) && r
                }, i.data(), n.data());
            t.preventDefault(), i.modal(s).one("hide", function () {
                n.focus()
            })
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";

    function t(t, n) {
        var r = e.proxy(this.process, this),
            i = e(t).is("body") ? e(window) : e(t),
            s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function () {
            var t = this,
                n;
            this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function () {
                var t = e(this),
                    n = t.data("target") || t.attr("href"),
                    r = /^#\w/.test(n) && e(n);
                return r && r.length && [
                    [r.position().top, n]
                ] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        },
        process: function () {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = t - this.$scrollElement.height(),
                r = this.offsets,
                i = this.targets,
                s = this.activeTarget,
                o;
            if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
        },
        activate: function (t) {
            var n, r;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    }, e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("scrollspy"),
                s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function () {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                r = t.attr("data-target"),
                i, s, o;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active")) return;
            i = n.find(".active a").last()[0], o = e.Event("show", {
                relatedTarget: i
            }), t.trigger(o);
            if (o.isDefaultPrevented()) return;
            s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                t.trigger({
                    type: "shown",
                    relatedTarget: i
                })
            })
        },
        activate: function (t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }
            var i = n.find("> .active"),
                s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
        }
    }, e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e(function () {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
            t.preventDefault(), e(this).tab("show")
        })
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function (t, n, r) {
            var i, s;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : this.options.trigger != "manual" && (i = this.options.trigger == "hover" ? "mouseenter" : "focus", s = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            if (!n.options.delay || !n.options.delay.show) return n.show();
            clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function () {
                n.hoverState == "in" && n.show()
            }, n.options.delay.show)
        },
        leave: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide) return n.hide();
            n.hoverState = "out", this.timeout = setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        },
        show: function () {
            var e, t, n, r, i, s, o;
            if (this.hasContent() && this.enabled) {
                e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                switch (t ? s.split(" ")[1] : s) {
                case "bottom":
                    o = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "top":
                    o = {
                        top: n.top - i,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "left":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left - r
                    };
                    break;
                case "right":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left + n.width
                    }
                }
                e.css(o).addClass(s).addClass("in")
            }
        },
        setContent: function () {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function r() {
                var t = setTimeout(function () {
                    n.off(e.support.transition.end).remove()
                }, 500);
                n.one(e.support.transition.end, function () {
                    clearTimeout(t), n.remove()
                })
            }
            var t = this,
                n = this.tip();
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r() : n.remove(), this
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (t) {
            return e.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        },
        tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }, e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tooltip"),
                s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    }
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function () {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content > *")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content), e
        },
        tip: function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    }), e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("popover"),
                s = typeof n == "object" && n;
            i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = e(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function () {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        },
        updater: function (e) {
            return e
        },
        show: function () {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }), this.$menu.show(), this.shown = !0, this
        },
        hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function (t) {
            var n;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
        },
        process: function (t) {
            var n = this;
            return t = e.grep(t, function (e) {
                return n.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function (e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (e) {
            var t = [],
                n = [],
                r = [],
                i;
            while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r)
        },
        highlighter: function (e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function (e, t) {
                return "<strong>" + t + "</strong>"
            })
        },
        render: function (t) {
            var n = this;
            return t = e(t).map(function (t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function (t) {
            var n = this.$menu.find(".active").removeClass("active"),
                r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
        },
        prev: function (e) {
            var t = this.$menu.find(".active").removeClass("active"),
                n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active")
        },
        listen: function () {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), (e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
        },
        move: function (e) {
            if (!this.shown) return;
            switch (e.keyCode) {
            case 9:
            case 13:
            case 27:
                e.preventDefault();
                break;
            case 38:
                e.preventDefault(), this.prev();
                break;
            case 40:
                e.preventDefault(), this.next()
            }
            e.stopPropagation()
        },
        keydown: function (t) {
            this.suppressKeyPressRepeat = !~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        },
        keypress: function (e) {
            if (this.suppressKeyPressRepeat) return;
            this.move(e)
        },
        keyup: function (e) {
            switch (e.keyCode) {
            case 40:
            case 38:
                break;
            case 9:
            case 13:
                if (!this.shown) return;
                this.select();
                break;
            case 27:
                if (!this.shown) return;
                this.hide();
                break;
            default:
                this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        },
        blur: function (e) {
            var t = this;
            setTimeout(function () {
                t.hide()
            }, 150)
        },
        click: function (e) {
            e.stopPropagation(), e.preventDefault(), this.select()
        },
        mouseenter: function (t) {
            this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        }
    }, e.fn.typeahead = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("typeahead"),
                s = typeof n == "object" && n;
            i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e(function () {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (t) {
            var n = e(this);
            if (n.data("typeahead")) return;
            t.preventDefault(), n.typeahead(n.data())
        })
    })
}(window.jQuery),
function (e) {
    function t(t, r, i) {
        var s = this;
        return this.on("click.pjax", t, function (t) {
            var o = e.extend({}, h(r, i));
            o.container || (o.container = e(this).attr("data-pjax") || s), n(t, o)
        })
    }

    function n(t, n, r) {
        r = h(n, r);
        var s = t.currentTarget;
        if (s.tagName.toUpperCase() !== "A") throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        if (location.protocol !== s.protocol || location.host !== s.host) return;
        if (s.hash && s.href.replace(s.hash, "") === location.href.replace(location.hash, "")) return;
        if (s.href === location.href + "#") return;
        var o = {
            url: s.href,
            container: e(s).attr("data-pjax"),
            target: s,
            fragment: null
        };
        i(e.extend({}, o, r)), t.preventDefault()
    }

    function r(t, n, r) {
        r = h(n, r);
        var s = t.currentTarget;
        if (s.tagName.toUpperCase() !== "FORM") throw "$.pjax.submit requires a form element";
        var o = {
            type: s.method,
            url: s.action,
            data: e(s).serializeArray(),
            container: e(s).attr("data-pjax"),
            target: s,
            fragment: null,
            timeout: 0
        };
        i(e.extend({}, o, r)), t.preventDefault()
    }

    function i(t) {
        function u(t, r) {
            var i = e.Event(t, {
                relatedTarget: n
            });
            return s.trigger(i, r), !i.isDefaultPrevented()
        }
        t = e.extend(!0, {}, e.ajaxSettings, i.defaults, t), e.isFunction(t.url) && (t.url = t.url());
        var n = t.target,
            r = c(t.url).hash,
            s = t.context = p(t.container);
        t.data || (t.data = {}), t.data._pjax = s.selector;
        var a;
        t.beforeSend = function (e, n) {
            n.type !== "GET" && (n.timeout = 0), n.timeout > 0 && (a = setTimeout(function () {
                u("pjax:timeout", [e, t]) && e.abort("timeout")
            }, n.timeout), n.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", s.selector);
            var r;
            if (!u("pjax:beforeSend", [e, n])) return !1;
            t.requestUrl = c(n.url).href
        }, t.complete = function (e, n) {
            a && clearTimeout(a), u("pjax:complete", [e, n, t]), u("pjax:end", [e, t])
        }, t.error = function (e, n, r) {
            var i = v("", e, t),
                s = u("pjax:error", [e, n, r, t]);
            t.type == "GET" && n !== "abort" && s && o(i.url)
        }, t.success = function (n, a, l) {
            var h = v(n, l, t);
            if (!h.contents) {
                o(h.url);
                return
            }
            i.state = {
                id: t.id || f(),
                url: h.url,
                title: h.title,
                container: s.selector,
                fragment: t.fragment,
                timeout: t.timeout
            }, (t.push || t.replace) && window.history.replaceState(i.state, h.title, h.url), h.title && (document.title = h.title), s.html(h.contents), typeof t.scrollTo == "number" && e(window).scrollTop(t.scrollTo), (t.replace || t.push) && window._gaq && _gaq.push(["_trackPageview"]);
            if (r !== "") {
                var p = c(h.url);
                p.hash = r, i.state.url = p.href, window.history.replaceState(i.state, h.title, p.href);
                var d = e(p.hash);
                d.length && e(window).scrollTop(d.offset().top)
            }
            u("pjax:success", [n, a, l, t])
        }, i.state || (i.state = {
            id: f(),
            url: window.location.href,
            title: document.title,
            container: s.selector,
            fragment: t.fragment,
            timeout: t.timeout
        }, window.history.replaceState(i.state, document.title));
        var h = i.xhr;
        h && h.readyState < 4 && (h.onreadystatechange = e.noop, h.abort()), i.options = t;
        var h = i.xhr = e.ajax(t);
        return h.readyState > 0 && (t.push && !t.replace && (b(i.state.id, s.clone().contents()), window.history.pushState(null, "", l(t.requestUrl))), u("pjax:start", [h, t]), u("pjax:send", [h, t])), i.xhr
    }

    function s(t, n) {
        var r = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return i(e.extend(r, h(t, n)))
    }

    function o(e) {
        window.history.replaceState(null, "", "#"), window.location.replace(e)
    }

    function u(t) {
        var n = t.state;
        if (n && n.container) {
            var r = e(n.container);
            if (r.length) {
                var s = m[n.id];
                if (i.state) {
                    var u = i.state.id < n.id ? "forward" : "back";
                    w(u, i.state.id, r.clone().contents())
                }
                var a = e.Event("pjax:popstate", {
                    state: n,
                    direction: u
                });
                r.trigger(a);
                var f = {
                    id: n.id,
                    url: n.url,
                    container: r,
                    push: !1,
                    fragment: n.fragment,
                    timeout: n.timeout,
                    scrollTo: !1
                };
                s ? (r.trigger("pjax:start", [null, f]), n.title && (document.title = n.title), r.html(s), i.state = n, r.trigger("pjax:end", [null, f])) : i(f), r[0].offsetHeight
            } else o(location.href)
        }
    }

    function a(t) {
        var n = e.isFunction(t.url) ? t.url() : t.url,
            r = t.type ? t.type.toUpperCase() : "GET",
            i = e("<form>", {
                method: r === "GET" ? "GET" : "POST",
                action: n,
                style: "display:none"
            });
        r !== "GET" && r !== "POST" && i.append(e("<input>", {
            type: "hidden",
            name: "_method",
            value: r.toLowerCase()
        }));
        var s = t.data;
        if (typeof s == "string") e.each(s.split("&"), function (t, n) {
            var r = n.split("=");
            i.append(e("<input>", {
                type: "hidden",
                name: r[0],
                value: r[1]
            }))
        });
        else if (typeof s == "object")
            for (key in s) i.append(e("<input>", {
                type: "hidden",
                name: key,
                value: s[key]
            }));
        e(document.body).append(i), i.submit()
    }

    function f() {
        return (new Date).getTime()
    }

    function l(e) {
        return e.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }

    function c(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }

    function h(t, n) {
        return t && n ? n.container = t : e.isPlainObject(t) ? n = t : n = {
            container: t
        }, n.container && (n.container = p(n.container)), n
    }

    function p(t) {
        t = e(t);
        if (!t.length) throw "no pjax container for " + t.selector;
        if (t.selector !== "" && t.context === document) return t;
        if (t.attr("id")) return e("#" + t.attr("id"));
        throw "cant get selector for pjax container!"
    }

    function d(e, t) {
        return e.filter(t).add(e.find(t))
    }

    function v(t, n, r) {
        var i = {};
        i.url = l(n.getResponseHeader("X-PJAX-URL") || r.requestUrl);
        if (/<html/i.test(t)) var s = e(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),
            o = e(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);
        else var s = o = e(t); if (o.length === 0) return i;
        i.title = d(s, "title").last().text();
        if (r.fragment) {
            if (r.fragment === "body") var u = o;
            else var u = d(o, r.fragment).first();
            u.length && (i.contents = u.contents(), i.title || (i.title = u.attr("title") || u.data("title")))
        } else /<html/i.test(t) || (i.contents = o);
        return i.contents && (i.contents = i.contents.not("title"), i.contents.find("title").remove()), i.title && (i.title = e.trim(i.title)), i
    }

    function b(e, t) {
        m[e] = t, y.push(e);
        while (g.length) delete m[g.shift()];
        while (y.length > i.defaults.maxCacheLength) delete m[y.shift()]
    }

    function w(e, t, n) {
        var r, i;
        m[t] = n, e === "forward" ? (r = y, i = g) : (r = g, i = y), r.push(t), (t = i.pop()) && delete m[t]
    }

    function E() {
        e.fn.pjax = t, e.pjax = i, e.pjax.enable = e.noop, e.pjax.disable = S, e.pjax.click = n, e.pjax.submit = r, e.pjax.reload = s, e.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20
        }, e(window).bind("popstate.pjax", u)
    }

    function S() {
        e.fn.pjax = function () {
            return this
        }, e.pjax = a, e.pjax.enable = E, e.pjax.disable = e.noop, e.pjax.click = e.noop, e.pjax.submit = e.noop, e.pjax.reload = function () {
            window.location.reload()
        }, e(window).unbind("popstate.pjax", u)
    }
    var m = {},
        g = [],
        y = [];
    e.inArray("state", e.event.props) < 0 && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), e.support.pjax ? E() : S()
}(jQuery),
function (e, t, n) {
    "use strict";
    var r = t.event,
        i;
    r.special.smartresize = {
        setup: function () {
            t(this).bind("resize", r.special.smartresize.handler)
        },
        teardown: function () {
            t(this).unbind("resize", r.special.smartresize.handler)
        },
        handler: function (e, n) {
            var r = this,
                s = arguments;
            e.type = "smartresize", i && clearTimeout(i), i = setTimeout(function () {
                t.event.handle.apply(r, s)
            }, n === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function (e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Mason = function (e, n) {
        this.element = t(n), this._create(e), this._init()
    }, t.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    }, t.Mason.prototype = {
        _filterFindBricks: function (e) {
            var t = this.options.itemSelector;
            return t ? e.filter(t).add(e.find(t)) : e
        },
        _getBricks: function (e) {
            var t = this._filterFindBricks(e).css({
                position: "absolute"
            }).addClass("masonry-brick");
            return t
        },
        _create: function (n) {
            this.options = t.extend(!0, {}, t.Mason.settings, n), this.styleQueue = [];
            var r = this.element[0].style;
            this.originalStyle = {
                height: r.height || ""
            };
            var i = this.options.containerStyle;
            for (var s in i) this.originalStyle[s] = r[s] || "";
            this.element.css(i), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                y: parseInt(this.element.css("padding-top"), 10)
            }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            var o = this;
            setTimeout(function () {
                o.element.addClass("masonry")
            }, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function () {
                o.resize()
            }), this.reloadItems()
        },
        _init: function (e) {
            this._getColumns(), this._reLayout(e)
        },
        option: function (e, n) {
            t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
        },
        layout: function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) this._placeBrick(e[n]);
            var i = {};
            i.height = Math.max.apply(Math, this.colYs);
            if (this.options.isFitWidth) {
                var s = 0;
                n = this.cols;
                while (--n) {
                    if (this.colYs[n] !== 0) break;
                    s++
                }
                i.width = (this.cols - s) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({
                $el: this.element,
                style: i
            });
            var o = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                u = this.options.animationOptions,
                a;
            for (n = 0, r = this.styleQueue.length; n < r; n++) a = this.styleQueue[n], a.$el[o](a.style, u);
            this.styleQueue = [], t && t.call(e), this.isLaidOut = !0
        },
        _getColumns: function () {
            var e = this.options.isFitWidth ? this.element.parent() : this.element,
                t = e.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(t) : this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function (e) {
            var n = t(e),
                r, i, s, o, u;
            r = Math.ceil(n.outerWidth(!0) / this.columnWidth), r = Math.min(r, this.cols);
            if (r === 1) s = this.colYs;
            else {
                i = this.cols + 1 - r, s = [];
                for (u = 0; u < i; u++) o = this.colYs.slice(u, u + r), s[u] = Math.max.apply(Math, o)
            }
            var a = Math.min.apply(Math, s),
                f = 0;
            for (var l = 0, c = s.length; l < c; l++)
                if (s[l] === a) {
                    f = l;
                    break
                }
            var h = {
                top: a + this.offset.y
            };
            h[this.horizontalDirection] = this.columnWidth * f + this.offset.x, this.styleQueue.push({
                $el: n,
                style: h
            });
            var p = a + n.outerHeight(!0),
                d = this.cols + 1 - c;
            for (l = 0; l < d; l++) this.colYs[f + l] = p
        },
        resize: function () {
            var e = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout()
        },
        _reLayout: function (e) {
            var t = this.cols;
            this.colYs = [];
            while (t--) this.colYs.push(0);
            this.layout(this.$bricks, e)
        },
        reloadItems: function () {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function (e) {
            this.reloadItems(), this._init(e)
        },
        appended: function (e, t, n) {
            if (t) {
                this._filterFindBricks(e).css({
                    top: this.element.height()
                });
                var r = this;
                setTimeout(function () {
                    r._appended(e, n)
                }, 1)
            } else this._appended(e, n)
        },
        _appended: function (e, t) {
            var n = this._getBricks(e);
            this.$bricks = this.$bricks.add(n), this.layout(n, t)
        },
        remove: function (e) {
            this.$bricks = this.$bricks.not(e), e.remove()
        },
        destroy: function () {
            this.$bricks.removeClass("masonry-brick").each(function () {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var n = this.element[0].style;
            for (var r in this.originalStyle) n[r] = this.originalStyle[r];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), t(e).unbind(".masonry")
        }
    }, t.fn.imagesLoaded = function (e) {
        function u() {
            e.call(n, r)
        }

        function a(e) {
            var n = e.target;
            n.src !== s && t.inArray(n, o) === -1 && (o.push(n), --i <= 0 && (setTimeout(u), r.unbind(".imagesLoaded", a)))
        }
        var n = this,
            r = n.find("img").add(n.filter("img")),
            i = r.length,
            s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            o = [];
        return i || u(), r.bind("load.imagesLoaded error.imagesLoaded", a).each(function () {
            var e = this.src;
            this.src = s, this.src = e
        }), n
    };
    var s = function (t) {
        e.console && e.console.error(t)
    };
    t.fn.masonry = function (e) {
        if (typeof e == "string") {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var r = t.data(this, "masonry");
                if (!r) {
                    s("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'");
                    return
                }
                if (!t.isFunction(r[e]) || e.charAt(0) === "_") {
                    s("no such method '" + e + "' for masonry instance");
                    return
                }
                r[e].apply(r, n)
            })
        } else this.each(function () {
            var n = t.data(this, "masonry");
            n ? (n.option(e || {}), n._init()) : t.data(this, "masonry", new t.Mason(e, this))
        });
        return this
    }
}(window, jQuery),
function (e, t) {
    var n, r, i;
    n = r = e.jQuery, i = r.ScrollTo = r.ScrollTo || {
        config: {
            duration: 400,
            easing: "swing",
            callback: t,
            durationMode: "each",
            offsetTop: 0,
            offsetLeft: 0
        },
        configure: function (e) {
            return r.extend(i.config, e || {}), this
        },
        scroll: function (t, n) {
            var s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S;
            return s = t.pop(), o = s.$container, u = o.get(0), a = s.$target, f = r("<span/>").css({
                position: "absolute",
                top: "0px",
                left: "0px"
            }), l = o.css("position"), o.css("position", "relative"), f.appendTo(o), v = f.offset().top, m = a.offset().top, g = m - v - parseInt(n.offsetTop, 10), y = f.offset().left, b = a.offset().left, w = b - y - parseInt(n.offsetLeft, 10), c = u.scrollTop, h = u.scrollLeft, f.remove(), o.css("position", l), E = {}, S = function (e) {
                return t.length === 0 ? typeof n.callback == "function" && n.callback.apply(this, [e]) : i.scroll(t, n), !0
            }, n.onlyIfOutside && (p = c + o.height(), d = h + o.width(), c < g && g < p && (g = c), h < w && w < d && (w = h)), g !== c && (E.scrollTop = g), w !== h && (E.scrollLeft = w), r.browser.safari && u === document.body ? (e.scrollTo(E.scrollLeft, E.scrollTop), S()) : E.scrollTop || E.scrollLeft ? o.animate(E, n.duration, n.easing, S) : S(), !0
        },
        fn: function (e) {
            var t, n, s, o;
            t = [];
            var u = r(this);
            if (u.length === 0) return this;
            n = r.extend({}, i.config, e), s = u.parent(), o = s.get(0);
            while (s.length === 1 && o !== document.body && o !== document) {
                var a, f;
                a = s.css("overflow-y") !== "visible" && o.scrollHeight !== o.clientHeight, f = s.css("overflow-x") !== "visible" && o.scrollWidth !== o.clientWidth;
                if (a || f) t.push({
                    $container: s,
                    $target: u
                }), u = s;
                s = s.parent(), o = s.get(0)
            }
            return t.push({
                $container: r(r.browser.msie || r.browser.mozilla ? "html" : "body"),
                $target: u
            }), n.durationMode === "all" && (n.duration /= t.length), i.scroll(t, n), this
        }
    }, r.fn.ScrollTo = r.ScrollTo.fn
}(window),
function (e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function (s) {
        function f() {
            var t = 0;
            o.each(function () {
                var n = e(this);
                if (a.skip_invisible && !n.is(":visible")) return;
                if (!e.abovethetop(this, a) && !e.leftofbegin(this, a))
                    if (!e.belowthefold(this, a) && !e.rightoffold(this, a)) n.trigger("appear"), t = 0;
                    else if (++t > a.failure_limit) return !1
            })
        }
        var o = this,
            u, a = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(a, s)), u = a.container === r || a.container === t ? i : e(a.container), 0 === a.event.indexOf("scroll") && u.bind(a.event, function () {
            return f()
        }), this.each(function () {
            var t = this,
                n = e(t);
            t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", a.placeholder), n.one("appear", function () {
                if (!this.loaded) {
                    if (a.appear) {
                        var r = o.length;
                        a.appear.call(t, r, a)
                    }
                    e("<img />").bind("load", function () {
                        var r = n.attr("data-" + a.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[a.effect](a.effect_speed), t.loaded = !0;
                        var i = e.grep(o, function (e) {
                            return !e.loaded
                        });
                        o = e(i);
                        if (a.load) {
                            var s = o.length;
                            a.load.call(t, s, a)
                        }
                    }).attr("src", n.attr("data-" + a.data_attribute))
                }
            }), 0 !== a.event.indexOf("scroll") && n.bind(a.event, function () {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function () {
            f()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function (t) {
            t.originalEvent && t.originalEvent.persisted && o.each(function () {
                e(this).trigger("appear")
            })
        }), e(n).ready(function () {
            f()
        }), this
    }, e.belowthefold = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : o = e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold
    }, e.rightoffold = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.width() + i.scrollLeft() : o = e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold
    }, e.abovethetop = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.scrollTop() : o = e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height()
    }, e.leftofbegin = function (n, s) {
        var o;
        return s.container === r || s.container === t ? o = i.scrollLeft() : o = e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width()
    }, e.inviewport = function (t, n) {
        return !e.rightoffold(t, n) && !e.leftofbegin(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
    }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function (t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function (t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function (t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function (t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function (t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function (t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function (t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
var Handlebars = function () {
    var e = function () {
            "use strict";

            function t(e) {
                this.string = e
            }
            var e;
            return t.prototype.toString = function () {
                return "" + this.string
            }, e = t, e
        }(),
        t = function (e) {
            "use strict";

            function o(e) {
                return r[e] || "&amp;"
            }

            function u(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }

            function c(e) {
                return e instanceof n ? e.toString() : !e && e !== 0 ? "" : (e = "" + e, s.test(e) ? e.replace(i, o) : e)
            }

            function h(e) {
                return !e && e !== 0 ? !0 : l(e) && e.length === 0 ? !0 : !1
            }
            var t = {},
                n = e,
                r = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                i = /[&<>"'`]/g,
                s = /[&<>"'`]/;
            t.extend = u;
            var a = Object.prototype.toString;
            t.toString = a;
            var f = function (e) {
                return typeof e == "function"
            };
            f(/x/) && (f = function (e) {
                return typeof e == "function" && a.call(e) === "[object Function]"
            });
            var f;
            t.isFunction = f;
            var l = Array.isArray || function (e) {
                return e && typeof e == "object" ? a.call(e) === "[object Array]" : !1
            };
            return t.isArray = l, t.escapeExpression = c, t.isEmpty = h, t
        }(e),
        n = function () {
            "use strict";

            function n() {
                var e = Error.prototype.constructor.apply(this, arguments);
                for (var n = 0; n < t.length; n++) this[t[n]] = e[t[n]]
            }
            var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return n.prototype = new Error, e = n, e
        }(),
        r = function (e, t) {
            "use strict";

            function h(e, t) {
                this.helpers = e || {}, this.partials = t || {}, p(this)
            }

            function p(e) {
                e.registerHelper("helperMissing", function (e) {
                    if (arguments.length === 2) return undefined;
                    throw new Error("Missing helper: '" +
                        e + "'")
                }), e.registerHelper("blockHelperMissing", function (t, n) {
                    var r = n.inverse || function () {},
                        i = n.fn;
                    return f(t) && (t = t.call(this)), t === !0 ? i(this) : t === !1 || t == null ? r(this) : a(t) ? t.length > 0 ? e.helpers.each(t, n) : r(this) : i(t)
                }), e.registerHelper("each", function (e, t) {
                    var n = t.fn,
                        r = t.inverse,
                        i = 0,
                        s = "",
                        o;
                    f(e) && (e = e.call(this)), t.data && (o = m(t.data));
                    if (e && typeof e == "object")
                        if (a(e))
                            for (var u = e.length; i < u; i++) o && (o.index = i, o.first = i === 0, o.last = i === e.length - 1), s += n(e[i], {
                                data: o
                            });
                        else
                            for (var l in e) e.hasOwnProperty(l) && (o && (o.key = l), s += n(e[l], {
                                data: o
                            }), i++);
                    return i === 0 && (s = r(this)), s
                }), e.registerHelper("if", function (e, t) {
                    return f(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
                }), e.registerHelper("unless", function (t, n) {
                    return e.helpers["if"].call(this, t, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                }), e.registerHelper("with", function (e, t) {
                    f(e) && (e = e.call(this));
                    if (!r.isEmpty(e)) return t.fn(e)
                }), e.registerHelper("log", function (t, n) {
                    var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
                    e.log(r, t)
                })
            }

            function v(e, t) {
                d.log(e, t)
            }
            var n = {},
                r = e,
                i = t,
                s = "1.1.2";
            n.VERSION = s;
            var o = 4;
            n.COMPILER_REVISION = o;
            var u = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            n.REVISION_CHANGES = u;
            var a = r.isArray,
                f = r.isFunction,
                l = r.toString,
                c = "[object Object]";
            n.HandlebarsEnvironment = h, h.prototype = {
                constructor: h,
                logger: d,
                log: v,
                registerHelper: function (e, t, n) {
                    if (l.call(e) === c) {
                        if (n || t) throw new i("Arg not supported with multiple helpers");
                        r.extend(this.helpers, e)
                    } else n && (t.not = n), this.helpers[e] = t
                },
                registerPartial: function (e, t) {
                    l.call(e) === c ? r.extend(this.partials, e) : this.partials[e] = t
                }
            };
            var d = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function (e, t) {
                    if (d.level <= e) {
                        var n = d.methodMap[e];
                        typeof console != "undefined" && console[n] && console[n].call(console, t)
                    }
                }
            };
            n.logger = d, n.log = v;
            var m = function (e) {
                var t = {};
                return r.extend(t, e), t
            };
            return n.createFrame = m, n
        }(t, n),
        i = function (e, t, n) {
            "use strict";

            function a(e) {
                var t = e && e[0] || 1,
                    n = o;
                if (t !== n) {
                    if (t < n) {
                        var r = u[n],
                            i = u[t];
                        throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                    }
                    throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                }
            }

            function f(e, t) {
                if (!t) throw new Error("No environment passed to template");
                var n;
                t.compile ? n = function (e, n, r, i, s, o) {
                    var u = h.apply(this, arguments);
                    if (u) return u;
                    var a = {
                        helpers: i,
                        partials: s,
                        data: o
                    };
                    return s[n] = t.compile(e, {
                        data: o !== undefined
                    }, t), s[n](r, a)
                } : n = function (e, t) {
                    var n = h.apply(this, arguments);
                    if (n) return n;
                    throw new s("The partial " + t + " could not be compiled when running in runtime-only mode")
                };
                var r = {
                    escapeExpression: i.escapeExpression,
                    invokePartial: n,
                    programs: [],
                    program: function (e, t, n) {
                        var r = this.programs[e];
                        return n ? r = c(e, t, n) : r || (r = this.programs[e] = c(e, t)), r
                    },
                    merge: function (e, t) {
                        var n = e || t;
                        return e && t && e !== t && (n = {}, i.extend(n, t), i.extend(n, e)), n
                    },
                    programWithDepth: l,
                    noop: p,
                    compilerInfo: null
                };
                return function (n, i) {
                    i = i || {};
                    var s = i.partial ? i : t,
                        o, u;
                    i.partial || (o = i.helpers, u = i.partials);
                    var f = e.call(r, s, n, o, u, i.data);
                    return i.partial || a(r.compilerInfo), f
                }
            }

            function l(e, t, n) {
                var r = Array.prototype.slice.call(arguments, 3),
                    i = function (e, i) {
                        return i = i || {}, t.apply(this, [e, i.data || n].concat(r))
                    };
                return i.program = e, i.depth = r.length, i
            }

            function c(e, t, n) {
                var r = function (e, r) {
                    return r = r || {}, t(e, r.data || n)
                };
                return r.program = e, r.depth = 0, r
            }

            function h(e, t, n, r, i, o) {
                var u = {
                    partial: !0,
                    helpers: r,
                    partials: i,
                    data: o
                };
                if (e === undefined) throw new s("The partial " + t + " could not be found");
                if (e instanceof Function) return e(n, u)
            }

            function p() {
                return ""
            }
            var r = {},
                i = e,
                s = t,
                o = n.COMPILER_REVISION,
                u = n.REVISION_CHANGES;
            return r.template = f, r.programWithDepth = l, r.program = c, r.invokePartial = h, r.noop = p, r
        }(t, n, r),
        s = function (e, t, n, r, i) {
            "use strict";
            var s, o = e,
                u = t,
                a = n,
                f = r,
                l = i,
                c = function () {
                    var e = new o.HandlebarsEnvironment;
                    return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.VM = l, e.template = function (t) {
                        return l.template(t, e)
                    }, e
                },
                h = c();
            return h.create = c, s = h, s
        }(r, e, n, t, i);
    return s
}();
$(function () {
        function e(e) {
            var t = e.closest("form");
            t.get(0).reset(), e.removeClass("editing").removeClass("new").hide()
        }
        $("body").on("change", ".country-select", function (e) {
            var t = $(this),
                n = t.val(),
                r = "214",
                i = t.closest("form");
            selectField = i.find("[rel=state-select-field]"), textField = i.find("[rel=state-text-field]"), n == r ? (selectField.show().attr("disabled", !1), textField.hide().attr("disabled", !0)) : (textField.show().attr("disabled", !1), selectField.hide().attr("disabled", !0))
        }), $("body").on("click", "a.add-address", function (e) {
            e.preventDefault();
            var t = $(this);
            t.closest(".tile").find("input[type=radio]").attr("checked", !0), $(".address-fields").addClass("new").removeClass("editing").show(function () {
                $(this).ScrollTo()
            })
        }), $("body").on("click", "a.edit-address", function (e) {
            e.preventDefault(), $(this).closest(".tile").find("input[type=radio]").attr("checked", !0), $(".address-fields").hide(), $(".address-fields.editing").addClass("editing").removeClass("new").show(function () {
                $(this).ScrollTo()
            })
        }), $("body").on("click", "a.new-shipping-address", function (e) {
            e.preventDefault(), $(this).closest(".radio-option-group").find("input[type=radio]").attr("checked", !1), $(".address-fields").hide(), $(".address-fields.add-new").addClass("new").removeClass("editing").show(function () {
                $(this).ScrollTo()
            })
        }), $(".address-fields").on("click", "a.close", function (t) {
            t.preventDefault(), $(".address-options input[type=radio][data-default=true]").attr("checked", !0), e($(this).closest(".address-fields"))
        })
    }),
    function () {
        function e(e, t, n, r) {
            try {
                _gaq.push(["_trackEvent", e, t, n, r])
            } catch (i) {}
        }
        window.SV = window.SV || {}, SV.Analytics = {
            events: {
                legends: function (t, n, r) {
                    e("Legend", t, n, r)
                }
            }
        }
    }(), ! function (e) {
        "use strict";
        var t = function (t, n) {
            this.$element = e(t), this.options = n, this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
        };
        t.prototype = {
            cycle: function (t) {
                return t || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
            },
            to: function (t) {
                var n = this.$element.find(".item.active"),
                    r = n.parent().children(),
                    i = r.index(n),
                    s = this;
                if (t > r.length - 1 || t < 0) return;
                return this.sliding ? this.$element.one("slid", function () {
                    s.to(t)
                }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(r[t]))
            },
            pause: function (e) {
                return e || (this.paused = !0), clearInterval(this.interval), this.interval = null, this
            },
            next: function () {
                if (this.sliding) return;
                return this.slide("next")
            },
            prev: function () {
                if (this.sliding) return;
                return this.slide("prev")
            },
            slide: function (t, n) {
                var r = this.$element.find(".item.active"),
                    i = n || r[t](),
                    s = this.interval,
                    o = t == "next" ? "left" : "right",
                    u = t == "next" ? "first" : "last",
                    a = this,
                    f;
                this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {
                    relatedTarget: i[0]
                });
                if (i.hasClass("active")) return;
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                return i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), r.fadeOut(1500), i.fadeIn(1500, function () {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
                        a.$element.trigger("slid")
                    }, 0)
                }), s && this.cycle(), this
            }
        }, e.fn.carouselFade = function (n) {
            return this.each(function () {
                var r = e(this),
                    i = r.data("carousel"),
                    s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n),
                    o = typeof n == "string" ? n : s.slide;
                i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.cycle()
            })
        }, e.fn.carouselFade.defaults = {
            interval: 9e3,
            pause: "hover"
        }, e.fn.carouselFade.Constructor = t, e(document).on("click.carousel.data-api", "[data-slide]", function (t) {
            var n = e(this),
                r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                s = e.extend({}, i.data(), n.data());
            i.carousel(s), t.preventDefault()
        })
    }(window.jQuery),
    function () {
        $("body").on("slid", ".carousel", function (e) {
            var t = $(e.target),
                n = t.find(".item.active"),
                r = n.data("index"),
                i = t.find(".nav a");
            targetNav = t.find(".nav [data-slide-to=" + r + "]"), t.find("div.caption").text(n.data("caption")), i.removeClass("active"), targetNav.addClass("active")
        }), $("body").on("click", ".carousel .nav a", function (e) {
            var t = $(this);
            t.siblings().removeClass("active"), t.addClass("active")
        }), $("body").on("hover", "#lookbook_carousel *", function () {
            $("#lookbook_carousel .carousel-control").show()
        }), $("body").on("mouseout", "#lookbook_carousel *", function () {
            $("#lookbook_carousel .carousel-control").hide()
        })
    }(), $(function () {
        $("body").on("click", "[data-update-checkout=true]", function (e) {
            e.preventDefault(), $("#checkout form").submit()
        }), $("body").on("change", ".cart-item-quantity select", function (e) {
            $(this).closest("form").submit()
        })
    }),
    
    /*
    function () {
        $(function () {
            $("#cart-form form").on("submit", function (e) {
                return $("#order_variant").val() == "Select size..." ? ($("#add-to-cart-button").before("<p id='size-error'><strong>Please select a size.</strong></p>"), !1) : ($("#size-error").remove(), !0)
            }), $("body").on("ajax:start", "#cart-form form", function (e) {
                $("#add-to-cart-button").text("Adding..."), $("#add-to-cart-button").attr("disabled", "disabled")
            }), $("body").on("ajax:success", "#cart-form form", function (e) {
                $("#add-to-cart-button").text("Add to Bag"), $("#add-to-cart-button").attr("disabled", !1)
            }), $("body").on("click", "a.cart_item_delete", function (e) {
                e.preventDefault(), $(this).siblings("input").val(1), $(this).closest("form").submit()
            })
        })
    }(),
    
    function () {
        var e = function (e, t) {
            this.$element = $(e), this.options = t, this.$element.on("mouseenter", $.proxy(this.mouseDidEnter, this)), $("body").on("ajax:success", "#cart-form form", $.proxy(this.updateCart, this)), $("body").on("click", ".close_cart", $.proxy(this.close, this)), this.render(), this.$content = $(".cart-popup-inner .content", this.$popUp), this.$cartCounter = $("#cart_link .cart-counter"), this.fetchCart()
        };
        e.init = function () {
            $("[data-provide=cartPopup]").cartPopup()
        }, e.prototype = {
            $: function (e) {
                return $(e, this.element)
            },
            mouseDidEnter: function () {
                this.state !== "open" && this.open()
            },
            updateCart: function (e, t, n, r) {
                this.updateCounterDisplay(t.order.item_count), this.open(), this.fetchCart()
            },
            fetchCart: function () {
                var e = this;
                $.ajax({
                    url: "/cart/popup",
                    dataType: "html",
                    beforeSend: function (e) {
                        e.setRequestHeader("X-PJAX", "true")
                    },
                    success: function (t) {
                        e.$content.html(t)
                    }
                })
            },
            updateCounterDisplay: function (e) {
                this.$cartCounter.text(e)
            },
            render: function () {
                var e = '<div class="cart-popup"> <div class="cart-popup-inner"> <div class="content"> </div> </div> </div>';
                this.$element.after(e), this.$popUp = this.$(".cart-popup").hide()
            },
            getPosition: function (e) {
                return $.extend({}, e ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            open: function () {
                var e = this.$popUp,
                    t = "bottom",
                    n = /in/.test(t);
                e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).insertAfter(this.$element);
                var r = this.getPosition(n),
                    i = e[0].offsetWidth,
                    s = e[0].offsetHeight,
                    o = {
                        top: r.top + r.height,
                        left: $(window).width() - i
                    };
                e.offset(o).addClass(t).addClass("in").hide().fadeIn(), this.state = "open", $("body").on("click", $.proxy(this.didClickSomewhere, this)), this.$element.trigger("cartPopup:didOpen")
            },
            close: function (e) {
                e.preventDefault(), this.state = "close", this.$popUp.hide(), $("body").off("click", $.proxy(this.didClickSomewhere, this)), this.$element.trigger("cartPopup:didClose")
            },
            didClickSomewhere: function (e) {
                var t = $(e.target),
                    n = t.data("provide") === "cartPopup",
                    r = t.closest(".cart-popup").length > 0;
                if (n || r) return;
                this.close(e)
            }
        }, $.fn.cartPopup = function (t) {
            return this.each(function () {
                var n = $(this),
                    r = n.data("cartPopup");
                r || n.data("cartPopup", new e(this, t))
            })
        }, $.fn.cartPopup.defaults = {}, $.fn.cartPopup.Constructor = e, $(e.init)
    }(), 
    */

    $(function () {
        var e = function () {},
            t = $("#cart-form"),
            n = e;
        $.extend(e, {
            selectedColor: function () {
                return $("#product-variants .swatches input[type=radio]:checked")
            },
            selectedSwatch: function () {
                return n.selectedColor().siblings(".color_swatch")
            },
            hover: function () {
                $("#selected_color").text($(this).attr("title"))
            },
            initializeDisplay: function () {
                this.updateDisplay(), this.selectedSwatch().addClass("selected")
            },
            updateDisplay: function () {
                var e = $("#selected_color"),
                    t = n.selectedColor().attr("title"),
                    r = t === undefined ? "&nbsp;" : t;
                e.html(r)
            },
            selectSwatch: function () {
                var e = $(this).closest("ul").find("li .color_swatch"),
                    n = $(this);
                e.removeClass("selected"), n.addClass("selected"), t.trigger("change:selectedColor", [n.data("styleId"), n.attr("title")])
            }
        });
        var r = "#product-variants .color_swatch";
        $("body").on("hover", r, e.hover).on("mouseout", r, e.updateDisplay).on("click", r, e.selectSwatch), e.initializeDisplay()
    }), $(function () {
        function e() {
            var e = $(".js-corner-shoe"),
                t = e.closest("[role=main]"),
                n = ($(window).width() - t.width()) / 2,
                r = "-" + n + "px";
            $(window).width() < 1225 ? e.hide() : (e.show(), e.css("right", r))
        }
        $(window).on("resize", e), e()
    }), $(function () {
        $("#order_gift_card_delivery_date").datepicker({
            dateFormat: "yy-mm-dd"
        })
    }),
    function () {
        function e() {
            var e = $(this).closest(".js-dropdown-trigger");
            e.data("hide-timeout") > 0 && clearTimeout(e.data("hide-timeout")), e.closest(".main-navigation").find(".dropdown-menu").hide(), e.find("> a").addClass("hover"), $(".dropdown-menu", e).show()
        }

        function t() {
            var e = $(this).closest(".js-dropdown-trigger");
            timeoutId = setTimeout(function () {
                $(".dropdown-menu", e).hide(), e.find("> a").removeClass("hover")
            }, 250), clearTimeout(e.data("hide-timeout")), e.data("hide-timeout", timeoutId)
        }
        $(function () {
            var n = $([".js-dropdown-trigger > a", ".js-dropdown-trigger .dropdown-menu", ".js-dropdown-trigger .dropdown-menu a"].join(", "));
            n.on("mouseover", e), n.on("mouseout", t)
        })
    }(), $(function () {
        var e = $(".callout-flag, .featured-flag");
        $.each(e, function (e, t) {
            var n = $(t).data("color");
            $(t).css("background-color", n), $(".arrow", $(t)).css("background-color", n)
        })
    }), 
    /*$(function () {
        function t(e) {
            var t = $("#home-slides").data("slides"),
                n = HandlebarsTemplates["seavees/templates/slide"](t[e]);
            $("#home-slides").data("current-index", e), $("#home-slides .slides .slide").fadeOut(function () {
                $("#home-slides .slides").prepend(n), $(this).remove(), $("#home-slides .slides .slide").fadeIn()
            })
        }
        if (window.HomeSlides === undefined) return;
        var e = $.map(window.HomeSlides, function (e, t) {
            return e.home_slide
        });
        $("#home-slides").data("current-index", 0), $("#home-slides").data("slides", e), $("#home-slides .prev").on("click", function (e) {
            e.preventDefault();
            var n = $("#home-slides").data("slides"),
                r = $("#home-slides").data("current-index"),
                i = r - 1 >= 0 ? r - 1 : n.length - 1;
            t(i)
        }), $("#home-slides .next").on("click", function (e) {
            e.preventDefault();
            var n = $("#home-slides").data("slides"),
                r = $("#home-slides").data("current-index"),
                i = r + 1 < n.length ? r + 1 : 0;
            t(i)
        })
    }),
*/
    function (e, t) {
        function i(t, n) {
            var r, i, o, u = t.nodeName.toLowerCase();
            return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
        }

        function s(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return e.css(this, "visibility") === "hidden"
            }).length
        }
        var n = 0,
            r = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function (t) {
                return function (n, r) {
                    return typeof n == "number" ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            e(t).focus(), r && r.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function () {
                var t;
                return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : t = this.parents().filter(function () {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function (n) {
                if (n !== t) return this.css("zIndex", n);
                if (this.length) {
                    var r = e(this[0]),
                        i, s;
                    while (r.length && r[0] !== document) {
                        i = r.css("position");
                        if (i === "absolute" || i === "relative" || i === "fixed") {
                            s = parseInt(r.css("zIndex"), 10);
                            if (!isNaN(s) && s !== 0) return s
                        }
                        r = r.parent()
                    }
                }
                return 0
            },
            uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            },
            removeUniqueId: function () {
                return this.each(function () {
                    r.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (n) {
                    return !!e.data(n, t)
                }
            }) : function (t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function (t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function (t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && i(t, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
            function u(t, n, r, s) {
                return e.each(i, function () {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function (n) {
                return n === t ? o["inner" + r].call(this) : this.each(function () {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function (t, n) {
                return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
            disableSelection: function () {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function (t, n, r) {
                    var i, s = e.ui[t].prototype;
                    for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
                },
                call: function (e, t, n) {
                    var r, i = e.plugins[t];
                    if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                    for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
                }
            },
            hasScroll: function (t, n) {
                if (e(t).css("overflow") === "hidden") return !1;
                var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            }
        })
    }(jQuery),
    function (e, t) {
        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function s(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(n, "mouseout", function () {
                e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
            }).delegate(n, "mouseover", function () {
                e.datepicker._isDisabledDatepicker(r.inline ? t.parent()[0] : r.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function o(t, n) {
            e.extend(t, n);
            for (var r in n) n[r] == null && (t[r] = n[r]);
            return t
        }
        e.extend(e.ui, {
            datepicker: {
                version: "1.10.3"
            }
        });
        var n = "datepicker",
            r;
        e.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (e) {
                return o(this._defaults, e || {}), this
            },
            _attachDatepicker: function (t, n) {
                var r, i, s;
                r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
            },
            _newInst: function (t, n) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, r) {
                var i = e(t);
                r.append = e([]), r.trigger = e([]);
                if (i.hasClass(this.markerClassName)) return;
                this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t)
            },
            _attachments: function (t, n) {
                var r, i, s, o = this._get(n, "appendText"),
                    u = this._get(n, "isRTL");
                n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
                if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: i,
                    title: i
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                    src: s,
                    alt: i,
                    title: i
                }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function () {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                })
            },
            _autoSize: function (e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, r, i, s = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function (e) {
                        n = 0, r = 0;
                        for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
                        return r
                    }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
                }
            },
            _inlineDatepicker: function (t, r) {
                var i = e(t);
                if (i.hasClass(this.markerClassName)) return;
                i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block")
            },
            _dialogDatepicker: function (t, r, i, s, u) {
                var a, f, l, c, h, p = this._dialogInst;
                return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], n, p)), o(p.settings, s || {}), r = r && r.constructor === Date ? this._formatDate(p, r) : r, this._dialogInput.val(r), this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], n, p), this
            },
            _destroyDatepicker: function (t) {
                var r, i = e(t),
                    s = e.data(t, n);
                if (!i.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase(), e.removeData(t, n), r === "input" ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && i.removeClass(this.markerClassName).empty()
            },
            _enableDatepicker: function (t) {
                var r, i, s = e(t),
                    o = e.data(t, n);
                if (!s.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase();
                if (r === "input") t.disabled = !1, o.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                })
            },
            _disableDatepicker: function (t) {
                var r, i, s = e(t),
                    o = e.data(t, n);
                if (!s.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase();
                if (r === "input") t.disabled = !0, o.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            },
            _isDisabledDatepicker: function (e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return e.data(t, n)
                } catch (r) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (n, r, i) {
                var s, u, a, f, l = this._getInst(n);
                if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
                s = r || {}, typeof r == "string" && (s = {}, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), u = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), o(l.settings, s), a !== null && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, u), this._updateAlternate(l), this._updateDatepicker(l))
            },
            _changeDatepicker: function (e, t, n) {
                this._optionDatepicker(e, t, n)
            },
            _refreshDatepicker: function (e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function (e, t) {
                var n = this._getInst(e);
                n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function (e, t) {
                var n = this._getInst(e);
                return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
            },
            _doKeyDown: function (t) {
                var n, r, i, s = e.datepicker._getInst(t.target),
                    o = !0,
                    u = s.dpDiv.is(".ui-datepicker-rtl");
                s._keyEvent = !0;
                if (e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
                } else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var n, r, i = e.datepicker._getInst(t.target);
                if (e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
            },
            _doKeyUp: function (t) {
                var n, r = e.datepicker._getInst(t.target);
                if (r.input.val() !== r.lastVal) try {
                    n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
                } catch (i) {}
                return !0
            },
            _showDatepicker: function (t) {
                t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
                if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
                var n, r, i, s, u, a, f;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {};
                if (i === !1) return;
                o(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function () {
                    return s |= e(this).css("position") === "fixed", !s
                }), u = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), u = e.datepicker._checkOffset(n, u, s), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                    display: "none",
                    left: u.left + "px",
                    top: u.top + "px"
                }), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), e.datepicker._shouldFocusInput(n) && n.input.focus(),
                    e.datepicker._curInst = n)
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4, r = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n, i = this._getNumberOfMonths(t),
                    s = i[1],
                    o = 17;
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function () {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function (t, n, r) {
                var i = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    u = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                    f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
            },
            _findPos: function (t) {
                var n, r = this._getInst(t),
                    i = this._get(r, "isRTL");
                while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
                return n = e(t).offset(), [n.left, n.top]
            },
            _hideDatepicker: function (t) {
                var r, i, s, o, u = this._curInst;
                if (!u || t && u !== e.data(t, n)) return;
                this._datepickerShowing && (r = this._get(u, "showAnim"), i = this._get(u, "duration"), s = function () {
                    e.datepicker._tidyDialog(u)
                }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if (!e.datepicker._curInst) return;
                var n = e(t.target),
                    r = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
            },
            _adjustDate: function (t, n, r) {
                var i = e(t),
                    s = this._getInst(i[0]);
                if (this._isDisabledDatepicker(i[0])) return;
                this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s)
            },
            _gotoToday: function (t) {
                var n, r = e(t),
                    i = this._getInst(r[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
            },
            _selectMonthYear: function (t, n, r) {
                var i = e(t),
                    s = this._getInst(i[0]);
                s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
            },
            _selectDay: function (t, n, r, i) {
                var s, o = e(t);
                if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
                s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
            },
            _clearDate: function (t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function (t, n) {
                var r, i = e(t),
                    s = this._getInst(i[0]);
                n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var n, r, i, s = this._get(t, "altField");
                s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function () {
                    e(this).val(i)
                }))
            },
            noWeekends: function (e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function (e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function (t, n, r) {
                if (t == null || n == null) throw "Invalid arguments";
                n = typeof n == "object" ? n.toString() : n + "";
                if (n === "") return null;
                var i, s, o, u = 0,
                    a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                    l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (r ? r.dayNames : null) || this._defaults.dayNames,
                    h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (r ? r.monthNames : null) || this._defaults.monthNames,
                    d = -1,
                    v = -1,
                    m = -1,
                    g = -1,
                    y = !1,
                    b, w = function (e) {
                        var n = i + 1 < t.length && t.charAt(i + 1) === e;
                        return n && i++, n
                    },
                    E = function (e) {
                        var t = w(e),
                            r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
                            i = new RegExp("^\\d{1," + r + "}"),
                            s = n.substring(u).match(i);
                        if (!s) throw "Missing number at position " + u;
                        return u += s[0].length, parseInt(s[0], 10)
                    },
                    S = function (t, r, i) {
                        var s = -1,
                            o = e.map(w(t) ? i : r, function (e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function (e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        e.each(o, function (e, t) {
                            var r = t[1];
                            if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1
                        });
                        if (s !== -1) return s + 1;
                        throw "Unknown name at position " + u
                    },
                    x = function () {
                        if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
                        u++
                    };
                for (i = 0; i < t.length; i++)
                    if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();
                    else switch (t.charAt(i)) {
                    case "d":
                        m = E("d");
                        break;
                    case "D":
                        S("D", l, c);
                        break;
                    case "o":
                        g = E("o");
                        break;
                    case "m":
                        v = E("m");
                        break;
                    case "M":
                        v = S("M", h, p);
                        break;
                    case "y":
                        d = E("y");
                        break;
                    case "@":
                        b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                        break;
                    case "!":
                        b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                        break;
                    case "'":
                        w("'") ? x() : y = !0;
                        break;
                    default:
                        x()
                    }
                    if (u < n.length) {
                        o = n.substr(u);
                        if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o
                    }
                d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
                if (g > -1) {
                    v = 1, m = g;
                    do {
                        s = this._getDaysInMonth(d, v - 1);
                        if (m <= s) break;
                        v++, m -= s
                    } while (!0)
                }
                b = this._daylightSavingAdjust(new Date(d, v - 1, m));
                if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
            formatDate: function (e, t, n) {
                if (!t) return "";
                var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (n ? n.dayNames : null) || this._defaults.dayNames,
                    o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    u = (n ? n.monthNames : null) || this._defaults.monthNames,
                    a = function (t) {
                        var n = r + 1 < e.length && e.charAt(r + 1) === t;
                        return n && r++, n
                    },
                    f = function (e, t, n) {
                        var r = "" + t;
                        if (a(e))
                            while (r.length < n) r = "0" + r;
                        return r
                    },
                    l = function (e, t, n, r) {
                        return a(e) ? r[t] : n[t]
                    },
                    c = "",
                    h = !1;
                if (t)
                    for (r = 0; r < e.length; r++)
                        if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
                        else switch (e.charAt(r)) {
                        case "d":
                            c += f("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += l("D", t.getDay(), i, s);
                            break;
                        case "o":
                            c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += f("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += l("M", t.getMonth(), o, u);
                            break;
                        case "y":
                            c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            a("'") ? c += "'" : h = !0;
                            break;
                        default:
                            c += e.charAt(r)
                        }
                        return c
            },
            _possibleChars: function (e) {
                var t, n = "",
                    r = !1,
                    i = function (n) {
                        var r = t + 1 < e.length && e.charAt(t + 1) === n;
                        return r && t++, r
                    };
                for (t = 0; t < e.length; t++)
                    if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
                    else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? n += "'" : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                    }
                    return n
            },
            _get: function (e, n) {
                return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
            },
            _setDateFromField: function (e, t) {
                if (e.input.val() === e.lastVal) return;
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i = this._getDefaultDate(e),
                    s = i,
                    o = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, r, o) || i
                } catch (u) {
                    r = t ? "" : r
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
            },
            _getDefaultDate: function (e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function (t, n, r) {
                var i = function (e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    s = function (n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (r) {}
                        var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
                            s = i.getFullYear(),
                            o = i.getMonth(),
                            u = i.getDate(),
                            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                            f = a.exec(n);
                        while (f) {
                            switch (f[2] || "d") {
                            case "d":
                            case "D":
                                u += parseInt(f[1], 10);
                                break;
                            case "w":
                            case "W":
                                u += parseInt(f[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                            }
                            f = a.exec(n)
                        }
                        return new Date(s, o, u)
                    },
                    o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
                return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function (e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function (e, t, n) {
                var r = !t,
                    i = e.selectedMonth,
                    s = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
            },
            _getDate: function (e) {
                var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function (t) {
                var n = this._get(t, "stepMonths"),
                    r = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            e.datepicker._adjustDate(r, -n, "M")
                        },
                        next: function () {
                            e.datepicker._adjustDate(r, +n, "M")
                        },
                        hide: function () {
                            e.datepicker._hideDatepicker()
                        },
                        today: function () {
                            e.datepicker._gotoToday(r)
                        },
                        selectDay: function () {
                            return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return e.datepicker._selectMonthYear(r, this, "M"), !1
                        },
                        selectYear: function () {
                            return e.datepicker._selectMonthYear(r, this, "Y"), !1
                        }
                    };
                    e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (e) {
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                    R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                    U = this._get(e, "isRTL"),
                    z = this._get(e, "showButtonPanel"),
                    W = this._get(e, "hideIfNoPrevNext"),
                    X = this._get(e, "navigationAsDateFormat"),
                    V = this._getNumberOfMonths(e),
                    $ = this._get(e, "showCurrentAtPos"),
                    J = this._get(e, "stepMonths"),
                    K = V[0] !== 1 || V[1] !== 1,
                    Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(e, "min"),
                    Y = this._getMinMaxDate(e, "max"),
                    Z = e.drawMonth - $,
                    et = e.drawYear;
                Z < 0 && (Z += 12, et--);
                if (Y) {
                    t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
                    while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--)
                }
                e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
                for (S = 0; S < V[0]; S++) {
                    x = "", this.maxRows = 4;
                    for (T = 0; T < V[1]; T++) {
                        N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
                        if (K) {
                            k += "<div class='ui-datepicker-group";
                            if (V[1] > 1) switch (T) {
                            case 0:
                                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                break;
                            case V[1] - 1:
                                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                break;
                            default:
                                k += " ui-datepicker-group-middle", C = ""
                            }
                            k += "'>"
                        }
                        k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
                        for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                        k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
                        for (H = 0; H < D; H++) {
                            k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
                            for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                            k += B + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                    }
                    w += x
                }
                return w += f, e._keyEvent = !1, w
            },
            _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
                var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                    g = this._get(e, "changeYear"),
                    y = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    w = "";
                if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                    for (l = 0; l < 12; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                    w += "</select>"
                }
                y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
                if (!e.yearshtml) {
                    e.yearshtml = "";
                    if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function (e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                        for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    }
                }
                return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b
            },
            _adjustInstDate: function (e, t, n) {
                var r = e.drawYear + (n === "Y" ? t : 0),
                    i = e.drawMonth + (n === "M" ? t : 0),
                    s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e)
            },
            _restrictMinMax: function (e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    r = this._getMinMaxDate(e, "max"),
                    i = n && t < n ? n : t;
                return r && i > r ? r : i
            },
            _notifyChange: function (e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function (e) {
                var t = this._get(e, "numberOfMonths");
                return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
            },
            _getMinMaxDate: function (e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function (e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function (e, t) {
                return (new Date(e, t, 1)).getDay()
            },
            _canAdjustMonth: function (e, t, n, r) {
                var i = this._getNumberOfMonths(e),
                    s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
                return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
            },
            _isInRange: function (e, t) {
                var n, r, i = this._getMinMaxDate(e, "min"),
                    s = this._getMinMaxDate(e, "max"),
                    o = null,
                    u = null,
                    a = this._get(e, "yearRange");
                return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
            },
            _getFormatConfig: function (e) {
                var t = this._get(e, "shortYearCutoff");
                return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function (e, t, n, r) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function (t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function () {
                typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
    }(jQuery),
    function () {
        if ($("#legend-series-play").length === 0) return;
        $("#legend-series-play").on("hide", function () {
            var e = $(this),
                t = $("#legend-series-play iframe"),
                n = t.attr("src").split("?")[0],
                r = {
                    method: "pause"
                };
            t[0].contentWindow.postMessage(JSON.stringify(r), n), SV.Analytics.events.legends("Video - Stop", "The SeaVees Legend")
        }), $("#legend-series-play").on("shown", function () {
            SV.Analytics.events.legends("Video - Play", "The SeaVees Legend")
        })
    }(), $(function () {
        function n(e) {
            clearTimeout(t), r(i(e))
        }

        function r(t) {
            $("body").append(t), $(e).modal(), $(e).ScrollTo({
                offsetTop: 500,
                onlyIfOutside: !0
            }), $(e).on("hidden", function () {
                $(this).remove(), docCookies.setItem("legendsPopupSeen", 1), SV.Analytics.events.legends("Popup - Closed")
            }), $(".modal-backdrop").addClass("open"), $(e).addClass("open")
        }

        function i(e) {
            var t, n = {
                logged_in: e.user.state == "logged_in",
                user: e.user,
                csrf_token: e.csrf_token,
                token: e.token
            };
            return e.legendsCompletedSignup ? (t = HandlebarsTemplates["seavees/templates/legends_popup_confirmed"], SV.Analytics.events.legends("Popup - Shown", "Confirmed")) : (t = HandlebarsTemplates["seavees/templates/legends_popup_logged_out"], SV.Analytics.events.legends("Popup - Shown", "Sign up")), t(n)
        }
        var e = "#legends-register-popup",
            t;
        $("a[href=#legends-enter-to-win], .js-legends-register").on("click", function (e) {
            e.preventDefault(), n(window.userSession)
        }), $("body").on("ajax:success", "#legends-register-popup form", function (t, n, i, s) {
            var o = HandlebarsTemplates["seavees/templates/legends_popup_thank_you"];
            $(e).modal("hide"), r(o(n)), SV.Analytics.events.legends("Popup - Shown", "Sign Up Success")
        }), $("body").on("click", 'a[href="#signup-form"]', function (e) {
            e.preventDefault(), $("#signup-form").ScrollTo({
                offsetTop: 200
            }), $("#signup-form #email").focus()
        }), $("#mc_embed_signup #signup-form").on("submit", function (e) {
            var t = $(this);
            t.closest("#mc_embed_signup").addClass("done"), $(".start", t).hide(), $(".completed", t).show()
        }), $(document).on("user.session.updated", function (e, t) {
            var r = t;
            (window.location.hash == "#legends-enter-to-win" || window.location.hash == "#join") && n(r), window.location.pathname == "/legends-thank-you" && (window.userSession.legendsCompletedSignup = !0, n(window.userSession))
        }), $(window).on("seavees.hashchange", function (e, t) {
            (t == "#legends-enter-to-win" || t == "#join") && n(window.userSession)
        })
    }), $(function () {
        $("body").on("click", ".location-selector a", function (e) {
            e.preventDefault();
            var t = $(this);
            $(".location-selector a").removeClass("active"), $(".locations").hide(), t.addClass("active"), $(".locations" + t.attr("href")).show()
        })
    }), $(function () {
        function n(t) {
            var n = $(t),
                r = e({
                    vimeoId: n.data("vimeo-id")
                });
            $("body").append(r), $("#product-preview-video").modal(), SV.Analytics.events.legends("Video - Play", "Legend Series"), $("#product-preview-video").on("hidden", function () {
                SV.Analytics.events.legends("Video - Stop", "Legend Series"), $(this).remove()
            })
        }
        var e = HandlebarsTemplates["seavees/templates/product_preview_video"],
            t = $(".preview-video a.thumb");
        t.on("click", function (t) {
            t.preventDefault();
            var n = $(this),
                r = e({
                    vimeoId: n.data("vimeo-id")
                });
            $("body").append(r), $("#product-preview-video").modal(), $("#product-preview-video").on("hidden", function () {
                $(this).remove()
            })
        }), $(".legend-series-video").on("click", function (e) {
            e.preventDefault(), n(this)
        }), window.location.hash == "#video" && ($("#legend-series-play").length !== 0 ? $("#legend-series-play").modal("show") : n($(".legend-series-video"))), $(window).on("seavees.hashchange", function (e, t) {
            t == "#video" && n($(".legend-series-video"))
        })
    }),
    function () {
        var e = function (e, t) {
            this.context = $(e), this.products = t, this._currentSlideIndex = 0, this.init()
        };
        e.prototype = {
            $: function (e) {
                return $(e, this.context)
            },
            init: function () {
                this.$(".prev").on("click", _.throttle(this.showPrevSlide.bind(this), 750)), this.$(".next").on("click", _.throttle(this.showNextSlide.bind(this), 750))
            },
            showPrevSlide: function (e) {
                e.preventDefault(), this.show(this.prevSlide(), "right")
            },
            showNextSlide: function (e) {
                e.preventDefault(), this.show(this.nextSlide(), "left")
            },
            show: function (e, t) {
                this.renderSlide(e, t);
                var n = this.$("a.product:not(.new)"),
                    r = this.$("a.product.new"),
                    i = t == "left" ? -1 : 1;
                n.animate({
                    left: 320 * i + "px"
                }, 500, function () {
                    n.remove()
                }), r.animate({
                    left: "0px"
                }, 500, function () {
                    r.removeClass("new")
                })
            },
            renderSlide: function (e, t) {
                var n = HandlebarsTemplates["seavees/templates/product_box_slide"](e),
                    r = this.$("a.product");
                t == "right" ? (r.before(n), this.$("a.product.new").css({
                    left: "-320px"
                })) : (r.after(n), this.$("a.product.new").css({
                    left: "320px"
                }))
            },
            prevSlide: function () {
                return this._currentSlideIndex - 1 >= 0 ? this._currentSlideIndex = this._currentSlideIndex - 1 : this._currentSlideIndex = this.products.length - 1, this.products[this._currentSlideIndex]
            },
            nextSlide: function () {
                return this._currentSlideIndex + 1 < this.products.length ? this._currentSlideIndex = this._currentSlideIndex + 1 : this._currentSlideIndex = 0, this.products[this._currentSlideIndex]
            }
        }, $.fn.productBoxSlider = function (t) {
            $(this).data("productBoxSlider", new e($(this), t))
        }, $(function () {
            var e = window.HomeProducts;
            $("#promo-boxes .box.product").productBoxSlider(e)
        })
    }(), $(function () {
        function e(e) {
            var t = $(".product-collection-section[rel=" + e + "]");
            e == "" || t.length === 0 ? $(".product-collection-section").show() : ($(".product-collection-section").hide(), t.show())
        }

        function t() {
            var t = $(this).val();
            e(t)
        }
        $("body").on("change", "form.product-sorter .price-sorter", function () {
            $(this).closest("form").submit()
        }), $("body").on("change", "form.product-sorter .filter", t), $.proxy(t, $("form.product-sorter .filter"))()
    }), $(function () {
        $(".radio-option-group").on("click", ".option", function () {
            var e = $(this);
            e.siblings(".option").removeClass("active"), e.addClass("active")
        })
    }), $(function () {
        $("body").on("click", ".reveal-container .reveal-trigger", function (e) {
            var t = $(this).attr("href"),
                n = $(t);
            e.preventDefault(), $(this).hide(), n.show()
        }), $("body").on("click", "[data-reveal=trigger]", function (e) {
            e.preventDefault();
            var t = $(this).attr("href");
            $(t).toggleClass("active")
        })
    }), $(function () {
        var e = "closed";
        $(".js-search-trigger").on("click", function (t) {
            var n = $(this);
            e == "closed" && (n.addClass("open"), $("input[type=search]", n).focus(), e = "open")
        }), $(".js-search-trigger input[type=search]").on("blur", function (t) {
            setTimeout(function () {
                e != "submitting" && ($(".js-search-trigger").removeClass("open"), e = "closed")
            }, 500)
        }), $(".search-form").on("submit", function () {
            e = "submitting", console.log("submit")
        })
    }),
    /*
    function () {
        function e(e) {
            window.userSession = e, e.user.state == "logged_in" ? ($(".js-session-logged-out").hide(), $(".js-session-logged-in").show()) : ($(".js-session-logged-out").show(), $(".js-session-logged-in").hide());
            var t = $("#cart_link");
            $(".cart-counter", t).length === 0 && t.append(' <span class="cart-counter">0</span>'), $(".cart-counter", t).text(e.user.item_count)
        }
        $(function () {
            $.getJSON("/session", function (t, n, r) {
                try {
                    e(t), $(document).trigger("user.session.updated", t), $("meta[name=csrf-token]").attr("content", t.csrf_token)
                } catch (i) {}
            })
        })
    }(),
    */
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/legends_popup_confirmed"] = Handlebars.template(function (e, t, n, r, i) {
            return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {}, '<div id="legends-register-popup" class="confirmed modal hide">\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n  </div>\n\n  <div class="modal-body">\n    <div class="legends-success">\n      <header>\n        <div class="content">\n          <h1>\n            You\'re in!\n          </h1>\n          <p> Thanks for signing up. </p>\n        </div>\n      </header>\n\n    </div>\n  </div>\n</div>\n'
        }), this.HandlebarsTemplates["seavees/templates/legends_popup_confirmed"]
    }.call(this),
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/legends_popup_logged_out"] = Handlebars.template(function (e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression;
            return s += '<div id="legends-register-popup" class="modal hide">\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n    <p>\n      Born in 1964, SeaVees celebrates its 50<sup>th</sup> Anniversary with\n      <strong>#thelegendseries</strong>\n    </p>\n  </div>\n\n  <div class="modal-body">\n    <header>\n      <div class="content">\n        <h1>\n          <span class="logo">\n            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="SeaVees">\n          </span>\n          Enter to Win!\n        </h1>\n        <p>\n          Sign up for <strong>#thelegendseries</strong> mailing list for a\n          chance to win a<br>restored 1964 VW Beetle! Get the latest updates,\n          promotions, and exclusive Legend Series releases as we celebrate 50\n          years of SeaVees.\n        </p>\n      </div>\n    </header>\n\n    <div class="main-content">\n      <form action="/account/legends" method="post" data-remote="true">\n        <div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="', (o = n.csrf_token) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.csrf_token, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '"></div>\n        <input class="required email" id="email" name="sign_up[email]" placeholder="Enter your email address" type="email" value="">\n\n        <button class="btn btn-primary">Sign up</button>\n\n        <div class="clear">\n          <div class="checkbox">\n            <label>\n              <input checked="" name="sign_up[group][1][2]" type="checkbox" value="2">\n              Enter to win &amp; subscribe for <strong>#THELEGENDSERIES</strong> updates\n            </label>\n          </div>\n          <div class="checkbox">\n            <label>\n              <input checked="" name="sign_up[group][1][1]" type="checkbox" value="1">\n              Send me style updates, new arrivals, promotions &amp; more\n            </label>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n', s
        }), this.HandlebarsTemplates["seavees/templates/legends_popup_logged_out"]
    }.call(this),
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/legends_popup_thank_you"] = Handlebars.template(function (e, t, n, r, i) {
            return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {}, '<div id="legends-register-popup" class="modal hide">\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n    <p>\n      Born in 1964, SeaVees celebrates its 50<sup>th</sup> Anniversary with\n      <strong>#thelegendseries</strong>\n    </p>\n  </div>\n\n  <div class="modal-body">\n    <div class="legends-success">\n      <header>\n        <div class="content">\n          <h1>\n            One more step\n          </h1>\n          <p>\n            We need to confirm your email address. To complete your entry, please click the link in the email we just sent you.\n          </p>\n        </div>\n      </header>\n\n      <div class="main-content">\n      </div>\n    </div>\n  </div>\n</div>\n'
        }), this.HandlebarsTemplates["seavees/templates/legends_popup_thank_you"]
    }.call(this),
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/product_box_slide"] = Handlebars.template(function (e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression;
            return s += '<a href="', (o = n.url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '" class="product new" style="background-image: url(', (o = n.image_url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.image_url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + ')">\n  <div class="name">\n    <span class="short_name">\n      ', (o = n.short_name) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.short_name, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '\n    </span>\n\n    <span class="long_name">\n      ', (o = n.long_name) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.long_name, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + "\n    </span>\n  </div>\n</a>\n", s
        }), this.HandlebarsTemplates["seavees/templates/product_box_slide"]
    }.call(this),
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/product_preview_video"] = Handlebars.template(function (e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression;
            return s += '<div class="modal" id="product-preview-video" tabindex="-1">\n  <div class="modal-body">\n    <iframe src="https://player.vimeo.com/video/', (o = n.vimeoId) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.vimeoId, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '?api=1" width="720" height="406" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n  </div>\n</div>\n', s
        }), this.HandlebarsTemplates["seavees/templates/product_preview_video"]
    }.call(this),
    function () {
        return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["seavees/templates/slide"] = Handlebars.template(function (e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression;
            return s += '<div class="slide hide">\n  <div class="left-slide">\n    <a href="', (o = n.left_image_url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.left_image_url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '">\n      <img src="', (o = n.left_image_asset_url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.left_image_asset_url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '" />\n    </a>\n  </div>\n\n  <div class="right-slide">\n    <a href="', (o = n.right_image_url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.right_image_url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '">\n      <img src="', (o = n.right_image_asset_url) ? o = o.call(t, {
                hash: {},
                data: i
            }) : (o = t && t.right_image_asset_url, o = typeof o === u ? o.call(t, {
                hash: {},
                data: i
            }) : o), s += a(o) + '" alt="" />\n    </a>\n  </div>\n</div>\n', s
        }), this.HandlebarsTemplates["seavees/templates/slide"]
    }.call(this), $(function () {
        $("img[data-original]").lazyload(), $(".carousel:not(.with-fade)").carousel(), $(".carousel.with-fade").carouselFade({
            interval: 5e3
        }), $("body").on("click", "[data-slide-to]", function (e) {
            var t = $(this),
                n, r = $(t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                i = parseInt(t.data("slideTo"), 10);
            r.carousel(i), e.preventDefault()
        }), $("body").on("change", "#static_page_main.retailers #region", function () {
            window.location = ["http://", window.location.host, "/retailers/", $(this).val()].join("")
        }), $("body").on("click", ".modal .modal-footer [data-submit]", function (e) {
            e.preventDefault();
            var t = $(this).closest(".modal"),
                n = t.find(".modal-footer .btn-large");
            if (n.hasClass("submitting")) return;
            t.find("form").submit(), n.addClass("submitting")
        }), $("body").on("ajax:error", ".modal form", function (e, t, n) {
            var r = JSON.parse(t.responseText),
                i = $(this),
                s = i.closest(".modal");
            $(".error_for_field", i).remove(), $.each(r, function (e, t) {
                var n = e + " " + t.join(", ");
                $("[rel=" + e + "]", i).append('<p class="error_for_field">' + n + "</p>")
            }), s.find(".modal-footer .btn-large").removeClass("submitting")
        }), $("body").on("change", "#order_use_shipping", function (e) {
            var t = $(this).attr("chttp://instagram.com/stevenonojahecked") !== undefined;
            $("#billing_address").toggle(!t)
        }), setTimeout(function () {
            $("#product .social, .js-social-media-actions").fadeIn()
        }, 1500), $(".ui.sidebar").sidebar(), $(".js-menu-mobile").on("click", function (e) {
            e.preventDefault(), $(".ui.sidebar").sidebar("toggle")
        }), $("#legends-placeholder-signup").on("submit", function () {
            $(this).hide(), $(".signup-thank-you").show()
        })
    }), window.onhashchange = function () {
        $(window).trigger("seavees.hashchange", window.location.hash)
    };



function isMobile(t,f,w){

    if(typeof w === 'undefined') { w = 767; }
    if(typeof t === 'undefined') { t = true; }
    if(typeof f === 'undefined') { f = false; }

    if($(window).width() < w ) {
        return t
    } else {
        return f;
    }

 }


$(document).ready(function(){ 


    if(isMobile()){

        $('.cart-feature .price').appendTo('.cart-feature .description');

        if( $('.thumbnails').length > 0 ){
            $('.product-main').prepend($('.thumbnails'));
        }

        ///prevent page scroll when scrolling on nav
        $( 'ul.nav.mobile-nav' ).height($(window).height()-$('.mobile-header').height());
        $( 'ul.nav.mobile-nav > li:last-child' ).css('margin-bottom',100);
        $( 'ul.nav.mobile-nav' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });




    } else {
        $(".rogue-lookbook .width-50").css({'height':($(".rogue-lookbook .width-50-img").height()+'px')});
        $(".rogue-lookbook .width-50-1").css({'height':($(".rogue-lookbook .width-50-1-img").height()+'px')});
        $(".rogue-lookbook .width-50-2").css({'height':($(".rogue-lookbook .width-50-2-img").height()+'px')});
        $(".rogue-lookbook .width-50-3").css({'height':($(".rogue-lookbook .width-50-3-img").height()+'px')});


        $('.template-product .header').height($('#product-image').height() - $('#page_header').height() -  $('#breadcrumb').height());
        $(window).resize(function(){
            $('.template-product .header').height($('#product-image').height() - $('#page_header').height() -  $('#breadcrumb').height());
        });


    }

    // $('.navbar-toggle').on('click',function(e){
    //     e.preventDefault();
    //     // $('body').toggleClass('nav-open');
    //     $('body').addClass('nav-open');
    //     console.log ( '.navbar-toggle was clicked' );
    //     return false;
    // });

    $('.navbar-toggle').toggle(function(e){
        e.preventDefault();
        $('body').addClass('nav-open');
        return false;
    }, function(e){
        e.preventDefault();
        $('body').removeClass('nav-open');
        return false;
    });

     $('.promo-collection-block').each(function(i,e){
        $this = $(this);
        var pos = $this.data('collection-position');
        $newEl = $this.clone().show();
        var layout = $this.data('layout');
        if (layout == 'bottom') {
            var productImage = $newEl.find('.product-image');
            $newEl.find('.product-info').after(productImage);
        }
        //console.log('newEl',$newEl);
        $('.product-collection .product-row li').eq(pos).before('<li>'+$newEl[0].outerHTML+'</li>');
    });


    // $("ul.nav.mobile-nav").touchwipe({
    //      wipeRight: function() { $('body').removeClass('nav-open'); },
    //      min_move_x: 20,
    //     preventDefaultEvents: false
    // });

    if($('#product-variants ul.swatches li').length < 2) {
        $('#product-variants').hide();
    }
    if($('#product-sizes select option').length < 2) {
        $('#product-sizes').hide();
    };

    if(document.location.hash == '#legends-enter-to-win'){
        $('#legends-register-popup').modal('show');
    }


    //$(".rogue-lookbook .width-50").css({'height':($(".rogue-lookbook .width-50-img").height()+'px')});
    
});

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch(er) {}
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                config.raw ? key : encodeURIComponent(key),
                '=',
                config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = converted(cookie);
                break;
            }

            if (!key) {
                result[name] = converted(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return true;
        }
        return false;
    };

}));

$(document).ready(function(){

    if($.cookie('block-fixed-refer') != 'hide') {
        $('.block-fixed-refer').show();
    } else {
         //$.cookie('block-fixed-refer', 'hide', { domain: '.seavees.com' });
    }

    $('.refer-x, .block-fixed-refer').on('click',function(){
        $.cookie('block-fixed-refer', 'hide', { domain: '.seavees.com', expires: 365 });
        $('.block-fixed-refer').hide();
    });

    $(".product-main .thumbnails .photo a").on("click", function(e){
        e.preventDefault();
        $(".product-main .thumbnails .photo").removeClass('active');
        $(this).parents('.photo').addClass('active');
        var img_src = $(this).attr('href');
        $("#product-image img").fadeOut(function () {
            $("#product-image img").attr("src", img_src).load(function(){
                $("#product-image img").fadeIn();
            });
        });

    });


});

/* ***********************
    Stickup Nav
*********************** */

// if(!isMobile()){

//     (function($) {
//       'use strict';

//       var _destroyFn;

//       $.scrollupbar = function($bar, options) {
//         // Default options
//         options = $.extend({
//           enterViewport: $.noop,
//           fullyEnterViewport: $.noop,
//           exitViewport: $.noop,
//           partiallyExitViewport: $.noop
//         }, options);

//         function isFullyInViewport() {
//           return $window.scrollTop() <= $bar.offset().top;
//         }

//         function isInViewport() {
//           return $window.scrollTop() < $bar.offset().top + $bar.outerHeight();
//         }

//         var $window = $(window),
//             $document = $(document),
//             minY = $bar.css('position') == 'fixed' ? 1 : $bar.offset().top,
//             //minY = 1,
//             lastY = $window.scrollTop(), // Use last Y to detect scroll direction.
//             //initialPosTop = $bar.position().top,
//             initialPosTop = 0,
//             iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
//             timeout;

//         $.scrollupbar.isInViewport = isInViewport();
//         $.scrollupbar.isFullyInViewport = isFullyInViewport();

//         // iOS can't handle momentum scroll properly (See discussion on
//         // http://stackoverflow.com/questions/2863547).
//         if (!iOS) {
//           $window.on('scroll.scrollupbar', function() {
//             var y = $window.scrollTop(),
//                 barHeight = $bar.outerHeight();

//             // Ignore elastic scrolling.
//             if (y < 0 || y > ($document.height() - $window.height())) {
//               return;
//             }

//             // Cancel the event fired by the previous scroll.
//             if (timeout) {
//               clearTimeout(timeout);
//             }

//             if (y < lastY) { // Scrolling up
//               // If the bar is hidden, place it right above the top frame.
//               if (!$.scrollupbar.isInViewport && lastY - barHeight >= minY) {
//                 $bar.css('top', lastY - barHeight);
//                 $.scrollupbar.isInViewport = true;
//                 options.enterViewport();
//               }

//               // Scrolls up bigger than the bar's height fixes the bar on top.
//               if (isFullyInViewport()) {
//                 if (y >= minY) {
//                   $bar.css({
//                     'position': 'fixed',
//                     'top': 0
//                   });
//                   $('.fixed-header').addClass('fixed-active');
//                 } else {
//                   $bar.css({
//                     'position': 'absolute',
//                     'top': initialPosTop
//                   });
//                   $('.fixed-header').removeClass('fixed-active');
//                 }

//                 if (!$.scrollupbar.isFullyInViewport) {
//                   $.scrollupbar.isFullyInViewport = true;
//                   options.fullyEnterViewport();
//                 }
//               }

//               // Fire an event to reveal the entire bar after 400ms if the scroll
//               // wasn't big enough.
//               timeout = setTimeout(function() {
//                 if (!isFullyInViewport()) {
//                   $bar.css({
//                     'position': 'fixed',
//                     'top': $bar.offset().top - y
//                   });

//                   $bar.animate({'top': 0}, 100, function() {
//                     $.scrollupbar.isFullyInViewport = true;
//                     options.fullyEnterViewport();
//                   });
//                 }
//               }, 400);
//             } else if (y > lastY) { // Scrolling down
//               // Unfix the bar allowing it to scroll with the page.
//               if ($.scrollupbar.isFullyInViewport) {
//                 $bar.css({
//                   'position': 'absolute',
//                   'top': lastY > minY ? lastY : initialPosTop
//                 });

//                 if (!isFullyInViewport()) {
//                   $.scrollupbar.isFullyInViewport = false;
//                   options.partiallyExitViewport();
//                 }
//               }

//               if ($.scrollupbar.isInViewport && !isInViewport()) {
//                 $.scrollupbar.isInViewport = false;
//                 options.exitViewport();
//               }

//               // Fire an event to hide the entire bar after 400ms if the scroll
//               // wasn't big enough.
//               timeout = setTimeout(function() {
//                 if (isInViewport() && y - barHeight >= minY) {
//                   $bar.animate({'top': y - barHeight}, 100, function() {
//                     $.scrollupbar.isInViewport = false;
//                     options.exitViewport();
//                   });
//                 }
//               }, 400);
//             }

//             lastY = y;
//           });
//         } else { // Fallback simplified behaviour for iOS.
//           $window.on('touchstart.scrollupbar', function () {
//             lastY = $window.scrollTop();
//           });

//           $window.on('touchend.scrollupbar', function () {
//             var y = $window.scrollTop();

//             if (y < lastY || y - $bar.outerHeight() < minY) { // Scrolling up
//               if (y <= minY) {
//                 // Restore original position.
//                 $bar.css({
//                   'position': 'absolute',
//                   'top': initialPosTop
//                 });

//                 $bar.show(function() {
//                   $.scrollupbar.isInViewport = true;
//                   $.scrollupbar.isFullyInViewport = true;
//                   options.enterViewport();
//                   options.fullyEnterViewport();
//                 });
//               } else {
//                 $bar.css({
//                   'position': 'fixed',
//                   'top': 0
//                 });

//                 $.scrollupbar.isInViewport = true;
//                 options.enterViewport();

//                 $bar.slideDown(function() {
//                   $.scrollupbar.isFullyInViewport = true;
//                   options.fullyEnterViewport();
//                 });
//               }
//             } else if (y > lastY) { // Scrolling down
//               $.scrollupbar.isFullyInViewport = false;
//               options.partiallyExitViewport();

//               $bar.slideUp(function() {
//                 $.scrollupbar.isInViewport = false;
//                 options.exitViewport();
//               });
//             }

//             lastY = y;
//           });
//         }

//         _destroyFn = function() {
//           // Unbind all listeners added by scrollupbar plugin
//           $window.off('.scrollupbar');

//           // Restore original bar position.
//           $bar.css({
//             'position': 'absolute',
//             'top': initialPosTop
//           });
//         };

//         return $bar;
//       };

//       $.scrollupbar.destroy = function() {
//         if (_destroyFn) {
//           return _destroyFn();
//         }
//       };

//       $.fn.scrollupbar = function(options) {
//         return $.scrollupbar(this, options);
//       };
//     })(jQuery);


//     $('#page_header').scrollupbar();

// }

