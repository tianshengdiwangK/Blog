!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var l = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var l in e) n.d(o, l, function (t) {
            return e[t]
        }.bind(null, l));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    (function (o) {
        var l, r, i, s;
        s = void 0 !== o ? o : this.window || this.global, r = [], l = function (e) {
            "use strict";
            var t, o, l, r = n(2), i = {}, s = {}, c = n(3), a = n(4), u = n(5),
                d = !!(e && e.document && e.document.querySelector && e.addEventListener);
            if ("undefined" != typeof window || d) {
                var f = Object.prototype.hasOwnProperty;
                return s.destroy = function () {
                    if (!i.skipRendering) try {
                        document.querySelector(i.tocSelector).innerHTML = ""
                    } catch (e) {
                        console.warn("Element not found: " + i.tocSelector)
                    }
                    i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).removeEventListener("resize", this._scrollListener, !1), t && document.querySelector(i.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), t && document.removeEventListener("click", this._clickListener, !1))
                }, s.init = function (e) {
                    if (d && (i = function () {
                        for (var e = {}, t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) f.call(n, o) && (e[o] = n[o])
                        }
                        return e
                    }(r, e || {}), this.options = i, this.state = {}, i.scrollSmooth && (i.duration = i.scrollSmoothDuration, i.offset = i.scrollSmoothOffset, s.scrollSmooth = n(6).initSmoothScrolling(i)), t = c(i), o = a(i), this._buildHtml = t, this._parseContent = o, s.destroy(), null !== (l = o.selectHeadings(i.contentSelector, i.headingSelector)))) {
                        var h = o.nestHeadingsArray(l).nest;
                        i.skipRendering || t.render(i.tocSelector, h), this._scrollListener = m((function (e) {
                            t.updateToc(l), !i.disableTocScrollSync && u(i);
                            var n = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
                            (e && (0 === e.eventPhase || null === e.currentTarget) || n) && (t.updateToc(l), i.scrollEndCallback && i.scrollEndCallback(e))
                        }), i.throttleTimeout), this._scrollListener(), i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
                        var p = null;
                        return this._clickListener = m((function (e) {
                            i.scrollSmooth && t.disableTocAnimation(e), t.updateToc(l), p && clearTimeout(p), p = setTimeout((function () {
                                t.enableTocAnimation()
                            }), i.scrollSmoothDuration)
                        }), i.throttleTimeout), i.scrollContainer && document.querySelector(i.scrollContainer) ? document.querySelector(i.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this
                    }
                }, s.refresh = function (e) {
                    s.destroy(), s.init(e || this.options)
                }, e.tocbot = s, s
            }

            function m(e, t, n) {
                var o, l;
                return t || (t = 250), function () {
                    var r = n || this, i = +new Date, s = arguments;
                    o && i < o + t ? (clearTimeout(l), l = setTimeout((function () {
                        o = i, e.apply(r, s)
                    }), t)) : (o = i, e.apply(r, s))
                }
            }
        }(s), void 0 === (i = "function" == typeof l ? l.apply(t, r) : l) || (e.exports = i)
    }).call(this, n(1))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    e.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {
        },
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        onClick: function (e) {
        },
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: "",
        disableTocScrollSync: !1
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [].forEach, n = [].some, o = document.body, l = !0;

        function r(n, o) {
            var l = o.appendChild(function (n) {
                var o = document.createElement("li"), l = document.createElement("a");
                e.listItemClass && o.setAttribute("class", e.listItemClass);
                e.onClick && (l.onclick = e.onClick);
                e.includeHtml && n.childNodes.length ? t.call(n.childNodes, (function (e) {
                    l.appendChild(e.cloneNode(!0))
                })) : l.textContent = n.textContent;
                return l.setAttribute("href", e.basePath + "#" + n.id), l.setAttribute("class", e.linkClass + " node-name--" + n.nodeName + " " + e.extraLinkClasses), o.appendChild(l), o
            }(n));
            if (n.children.length) {
                var s = i(n.isCollapsed);
                n.children.forEach((function (e) {
                    r(e, s)
                })), l.appendChild(s)
            }
        }

        function i(t) {
            var n = e.orderedList ? "ol" : "ul", o = document.createElement(n),
                l = e.listClass + " " + e.extraListClasses;
            return t && (l += " " + e.collapsibleClass, l += " " + e.isCollapsedClass), o.setAttribute("class", l), o
        }

        return {
            enableTocAnimation: function () {
                l = !0
            }, disableTocAnimation: function (t) {
                var n = t.target || t.srcElement;
                "string" == typeof n.className && -1 !== n.className.indexOf(e.linkClass) && (l = !1)
            }, render: function (e, t) {
                var n = i(!1);
                t.forEach((function (e) {
                    r(e, n)
                }));
                var o = document.querySelector(e);
                if (null !== o) return o.firstChild && o.removeChild(o.firstChild), 0 === t.length ? o : o.appendChild(n)
            }, updateToc: function (r) {
                var i;
                i = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop, e.positionFixedSelector && function () {
                    var t;
                    t = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop;
                    var n = document.querySelector(e.positionFixedSelector);
                    "auto" === e.fixedSidebarOffset && (e.fixedSidebarOffset = document.querySelector(e.tocSelector).offsetTop), t > e.fixedSidebarOffset ? -1 === n.className.indexOf(e.positionFixedClass) && (n.className += " " + e.positionFixedClass) : n.className = n.className.split(" " + e.positionFixedClass).join("")
                }();
                var s, c = r;
                if (l && null !== document.querySelector(e.tocSelector) && c.length > 0) {
                    n.call(c, (function (t, n) {
                        return function t(n) {
                            var o = 0;
                            return n !== document.querySelector(e.contentSelector && null != n) && (o = n.offsetTop, e.hasInnerContainers && (o += t(n.offsetParent))), o
                        }(t) > i + e.headingsOffset + 10 ? (s = c[0 === n ? n : n - 1], !0) : n === c.length - 1 ? (s = c[c.length - 1], !0) : void 0
                    }));
                    var a = document.querySelector(e.tocSelector).querySelectorAll("." + e.linkClass);
                    t.call(a, (function (t) {
                        t.className = t.className.split(" " + e.activeLinkClass).join("")
                    }));
                    var u = document.querySelector(e.tocSelector).querySelectorAll("." + e.listItemClass);
                    t.call(u, (function (t) {
                        t.className = t.className.split(" " + e.activeListItemClass).join("")
                    }));
                    var d = document.querySelector(e.tocSelector).querySelector("." + e.linkClass + ".node-name--" + s.nodeName + '[href="' + e.basePath + "#" + s.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1") + '"]');
                    -1 === d.className.indexOf(e.activeLinkClass) && (d.className += " " + e.activeLinkClass);
                    var f = d.parentNode;
                    f && -1 === f.className.indexOf(e.activeListItemClass) && (f.className += " " + e.activeListItemClass);
                    var m = document.querySelector(e.tocSelector).querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
                    t.call(m, (function (t) {
                        -1 === t.className.indexOf(e.isCollapsedClass) && (t.className += " " + e.isCollapsedClass)
                    })), d.nextSibling && -1 !== d.nextSibling.className.indexOf(e.isCollapsedClass) && (d.nextSibling.className = d.nextSibling.className.split(" " + e.isCollapsedClass).join("")), function t(n) {
                        if (-1 !== n.className.indexOf(e.collapsibleClass) && -1 !== n.className.indexOf(e.isCollapsedClass)) return n.className = n.className.split(" " + e.isCollapsedClass).join(""), t(n.parentNode.parentNode);
                        return n
                    }(d.parentNode.parentNode)
                }
            }
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [].reduce;

        function n(e) {
            return e[e.length - 1]
        }

        function o(e) {
            return +e.nodeName.split("H").join("")
        }

        function l(t) {
            if (!(t instanceof window.HTMLElement)) return t;
            if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent)) return null;
            var n = {
                id: t.id,
                children: [],
                nodeName: t.nodeName,
                headingLevel: o(t),
                textContent: e.headingLabelCallback ? String(e.headingLabelCallback(t.textContent)) : t.textContent.trim()
            };
            return e.includeHtml && (n.childNodes = t.childNodes), e.headingObjectCallback ? e.headingObjectCallback(n, t) : n
        }

        return {
            nestHeadingsArray: function (o) {
                return t.call(o, (function (t, o) {
                    var r = l(o);
                    return r && function (t, o) {
                        for (var r = l(t), i = r.headingLevel, s = o, c = n(s), a = i - (c ? c.headingLevel : 0); a > 0;) (c = n(s)) && void 0 !== c.children && (s = c.children), a--;
                        i >= e.collapseDepth && (r.isCollapsed = !0), s.push(r)
                    }(r, t.nest), t
                }), {nest: []})
            }, selectHeadings: function (t, n) {
                var o = n;
                e.ignoreSelector && (o = n.split(",").map((function (t) {
                    return t.trim() + ":not(" + e.ignoreSelector + ")"
                })));
                try {
                    return document.querySelector(t).querySelectorAll(o)
                } catch (e) {
                    return console.warn("Element not found: " + t), null
                }
            }
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = document.querySelector(e.tocSelector);
        if (t && t.scrollHeight > t.clientHeight) {
            var n = t.querySelector("." + e.activeListItemClass);
            n && (t.scrollTop = n.offsetTop)
        }
    }
}, function (e, t) {
    t.initSmoothScrolling = function (e) {
        document.documentElement.style;
        var t = e.duration, n = e.offset, o = location.hash ? l(location.href) : location.href;

        function l(e) {
            return e.slice(0, e.lastIndexOf("#"))
        }

        document.body.addEventListener("click", (function (r) {
            var i;
            "a" !== (i = r.target).tagName.toLowerCase() || !(i.hash.length > 0 || "#" === i.href.charAt(i.href.length - 1)) || l(i.href) !== o && l(i.href) + "#" !== o || r.target.className.indexOf("no-smooth-scroll") > -1 || "#" === r.target.href.charAt(r.target.href.length - 2) && "!" === r.target.href.charAt(r.target.href.length - 1) || -1 === r.target.className.indexOf(e.linkClass) || function (e, t) {
                var n, o, l = window.pageYOffset, r = {
                        duration: t.duration,
                        offset: t.offset || 0,
                        callback: t.callback,
                        easing: t.easing || function (e, t, n, o) {
                            return (e /= o / 2) < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t)
                        }
                    }, i = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]'),
                    s = "string" == typeof e ? r.offset + (e ? i && i.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e,
                    c = "function" == typeof r.duration ? r.duration(s) : r.duration;

                function a(e) {
                    o = e - n, window.scrollTo(0, r.easing(o, l, s, c)), o < c ? requestAnimationFrame(a) : (window.scrollTo(0, l + s), "function" == typeof r.callback && r.callback())
                }

                requestAnimationFrame((function (e) {
                    n = e, a(e)
                }))
            }(r.target.hash, {
                duration: t, offset: n, callback: function () {
                    var e, t;
                    e = r.target.hash, (t = document.getElementById(e.substring(1))) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
                }
            })
        }), !1)
    }
}]);