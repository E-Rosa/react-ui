var _r = Object.defineProperty;
var wr = (n, a, u) => a in n ? _r(n, a, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[a] = u;
var De = (n, a, u) => (wr(n, typeof a != "symbol" ? a + "" : a, u), u);
import Ue, { createContext as $e, useState as W, useRef as Fe, useEffect as ae, useContext as jr } from "react";
import { motion as A, AnimatePresence as J } from "framer-motion";
var ie = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Pr() {
  if (Ne)
    return U;
  Ne = 1;
  var n = Ue, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(h, v, b) {
    var p, s = {}, f = null, R = null;
    b !== void 0 && (f = "" + b), v.key !== void 0 && (f = "" + v.key), v.ref !== void 0 && (R = v.ref);
    for (p in v)
      m.call(v, p) && !T.hasOwnProperty(p) && (s[p] = v[p]);
    if (h && h.defaultProps)
      for (p in v = h.defaultProps, v)
        s[p] === void 0 && (s[p] = v[p]);
    return { $$typeof: a, type: h, key: f, ref: R, props: s, _owner: x.current };
  }
  return U.Fragment = u, U.jsx = S, U.jsxs = S, U;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Tr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ue, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), C = Symbol.iterator, N = "@@iterator";
    function Ye(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[N];
      return typeof r == "function" ? r : null;
    }
    var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        ze("error", e, t);
      }
    }
    function ze(e, r, t) {
      {
        var i = L.ReactDebugCurrentFrame, d = i.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var g = t.map(function(l) {
          return String(l);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var qe = !1, Ke = !1, Je = !1, Ge = !1, He = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === T || He || e === x || e === b || e === p || Ge || e === R || qe || Ke || Je || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === s || e.$$typeof === S || e.$$typeof === h || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case u:
          return "Portal";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return de(r) + ".Consumer";
          case S:
            var t = e;
            return de(t._context) + ".Provider";
          case v:
            return Xe(e, e.render, "ForwardRef");
          case s:
            var i = e.displayName || null;
            return i !== null ? i : O(e.type) || "Memo";
          case f: {
            var d = e, g = d._payload, l = d._init;
            try {
              return O(l(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, ve, me, ge, he, pe, ye, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Qe() {
      {
        if (M === 0) {
          ve = console.log, me = console.info, ge = console.warn, he = console.error, pe = console.group, ye = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function er() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ve
            }),
            info: I({}, e, {
              value: me
            }),
            warn: I({}, e, {
              value: ge
            }),
            error: I({}, e, {
              value: he
            }),
            group: I({}, e, {
              value: pe
            }),
            groupCollapsed: I({}, e, {
              value: ye
            }),
            groupEnd: I({}, e, {
              value: be
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = L.ReactCurrentDispatcher, H;
    function B(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (d) {
            var i = d.stack.trim().match(/\n( *(at )?)/);
            H = i && i[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, Y;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new rr();
    }
    function xe(e, r) {
      if (!e || Z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      Z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = G.current, G.current = null, Qe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (k) {
              i = k;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (k) {
              i = k;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            i = k;
          }
          e();
        }
      } catch (k) {
        if (k && i && typeof k.stack == "string") {
          for (var c = k.stack.split(`
`), j = i.stack.split(`
`), y = c.length - 1, E = j.length - 1; y >= 1 && E >= 0 && c[y] !== j[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (c[y] !== j[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || c[y] !== j[E]) {
                    var P = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, P), P;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = g, er(), Error.prepareStackTrace = d;
      }
      var F = e ? e.displayName || e.name : "", Le = F ? B(F) : "";
      return typeof e == "function" && Y.set(e, Le), Le;
    }
    function tr(e, r, t) {
      return xe(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, nr(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case b:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return tr(e.render);
          case s:
            return z(e.type, r, t);
          case f: {
            var i = e, d = i._payload, g = i._init;
            try {
              return z(g(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Ce = {}, Re = L.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ar(e, r, t, i, d) {
      {
        var g = Function.call.bind(q);
        for (var l in e)
          if (g(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var j = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (K(d), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof c), K(null)), c instanceof Error && !(c.message in Ce) && (Ce[c.message] = !0, K(d), w("Failed %s type: %s", t, c.message), K(null));
          }
      }
    }
    var ir = Array.isArray;
    function X(e) {
      return ir(e);
    }
    function or(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function sr(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function we(e) {
      if (sr(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), _e(e);
    }
    var V = L.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Pe, Q;
    Q = {};
    function lr(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = O(V.current.type);
        Q[t] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(V.current.type), e.ref), Q[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          je || (je = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var mr = function(e, r, t, i, d, g, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function gr(e, r, t, i, d) {
      {
        var g, l = {}, c = null, j = null;
        t !== void 0 && (we(t), c = "" + t), ur(r) && (we(r.key), c = "" + r.key), lr(r) && (j = r.ref, fr(r, d));
        for (g in r)
          q.call(r, g) && !cr.hasOwnProperty(g) && (l[g] = r[g]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (g in y)
            l[g] === void 0 && (l[g] = y[g]);
        }
        if (c || j) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && dr(l, E), j && vr(l, E);
        }
        return mr(e, c, j, d, i, V.current, l);
      }
    }
    var ee = L.ReactCurrentOwner, Te = L.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Se() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function pr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var i = "";
        e && e._owner && e._owner !== ee.current && (i = " It was passed a child from " + O(e._owner.type) + "."), D(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), D(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            te(i) && ke(i, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = Ye(e);
          if (typeof d == "function" && d !== e.entries)
            for (var g = d.call(e), l; !(l = g.next()).done; )
              te(l.value) && ke(l.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === s))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = O(r);
          ar(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var d = O(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            D(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Ae(e, r, t, i, d, g) {
      {
        var l = Ze(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = hr(d);
          j ? c += j : c += Se();
          var y;
          e === null ? y = "null" : X(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (O(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var E = gr(e, r, t, d, g);
        if (E == null)
          return E;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (i)
              if (X(P)) {
                for (var F = 0; F < P.length; F++)
                  Ie(P[F], e);
                Object.freeze && Object.freeze(P);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(P, e);
        }
        return e === m ? br(E) : yr(E), E;
      }
    }
    function Er(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function xr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var Cr = xr, Rr = Er;
    $.Fragment = m, $.jsx = Cr, $.jsxs = Rr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ie.exports = Pr() : ie.exports = Tr();
var o = ie.exports;
const Sr = $e({
  nextPage: () => {
  },
  previousPage: () => {
  },
  goToPage: (n) => {
  },
  addPage: (n) => {
  }
});
function Vr({ children: n }) {
  const [a, u] = W(), [m, x] = W(0), T = () => {
    const h = n.map((v, b) => /* @__PURE__ */ o.jsx(o.Fragment, { children: m == b && /* @__PURE__ */ o.jsx(
      A.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        children: v
      },
      b
    ) }));
    if (a) {
      const v = a.map((b, p) => {
        const s = p + n.length;
        return /* @__PURE__ */ o.jsx(o.Fragment, { children: m == s && /* @__PURE__ */ o.jsx(
          A.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            children: b
          },
          s
        ) });
      });
      return h.concat(v);
    }
    return h;
  }, S = () => {
    const h = n.map((v, b) => {
      const p = m == b;
      return /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "cButton " + p ? "paginationButtonHighlighted" : "paginationButton",
          onClick: () => {
            x(b);
          },
          children: b + 1
        },
        b
      );
    });
    if (a) {
      const v = a.map((b, p) => {
        const s = p + n.length, f = m == s;
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "cButton " + f ? "paginationButtonHighlighted" : "paginationButton",
            onClick: () => {
              x(s);
            },
            children: s + 1
          },
          s
        );
      });
      return h.concat(v);
    }
    return h;
  };
  return /* @__PURE__ */ o.jsxs(
    A.div,
    {
      className: "carousel",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ o.jsx(
          Sr.Provider,
          {
            value: {
              nextPage: () => {
                x((h) => h + 1);
              },
              previousPage: () => {
                x((h) => h - 1);
              },
              goToPage: (h) => {
                x(h - 1);
              },
              addPage: (h) => {
                a == null ? u([h]) : u((v) => {
                  if (v)
                    return [...v, h];
                });
              }
            },
            children: T()
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "paginationButtonsContainer", children: S() })
      ]
    }
  );
}
function Ur(n) {
  const a = Fe(null), u = Fe(null);
  return ae(() => {
    a.current ? (a.current.focus(), a.current.scrollIntoView()) : u.current && (u.current.focus(), u.current.scrollIntoView());
  }, []), ae(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "visible";
  }), []), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: u,
      onClick: (m) => {
        if (n.onOutsideClick) {
          const x = m.target, T = m.currentTarget;
          x == T && n.onOutsideClick(m);
        }
      },
      className: `hide-scrollbar overflow-scroll h-screen fixed inset-0 flex flex-col items-center w-screen bg-black bg-opacity-[95%] z-[49] ${n.className}`,
      children: /* @__PURE__ */ o.jsxs("div", { className: n.containerClassName, children: [
        !n.hideCloseButton && /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => {
              var m;
              (m = n.onOutsideClick) == null || m.call(n);
            },
            className: n.closeButtonClassName || "self-end",
            children: We
          }
        ),
        n.children
      ] })
    }
  );
}
const We = /* @__PURE__ */ o.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ o.jsx(
        "path",
        {
          d: "M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
const _ = [];
for (let n = 0; n < 256; ++n)
  _.push((n + 256).toString(16).slice(1));
function Or(n, a = 0) {
  return (_[n[a + 0]] + _[n[a + 1]] + _[n[a + 2]] + _[n[a + 3]] + "-" + _[n[a + 4]] + _[n[a + 5]] + "-" + _[n[a + 6]] + _[n[a + 7]] + "-" + _[n[a + 8]] + _[n[a + 9]] + "-" + _[n[a + 10]] + _[n[a + 11]] + _[n[a + 12]] + _[n[a + 13]] + _[n[a + 14]] + _[n[a + 15]]).toLowerCase();
}
let ne;
const kr = new Uint8Array(16);
function Ir() {
  if (!ne) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ne = crypto.getRandomValues.bind(crypto);
  }
  return ne(kr);
}
const Ar = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ve = { randomUUID: Ar };
function oe(n, a, u) {
  if (Ve.randomUUID && !a && !n)
    return Ve.randomUUID();
  n = n || {};
  const m = n.random || (n.rng || Ir)();
  if (m[6] = m[6] & 15 | 64, m[8] = m[8] & 63 | 128, a) {
    u = u || 0;
    for (let x = 0; x < 16; ++x)
      a[u + x] = m[x];
    return a;
  }
  return Or(m);
}
class ue {
  constructor() {
    De(this, "listeners", []);
  }
  addListener(a) {
    if (a.listenerId)
      return this.listeners.push(a), a.listenerId;
    const u = oe();
    return this.listeners.push({ ...a, listenerId: u }), u;
  }
  removeListener(a) {
    this.listeners = this.listeners.filter((u) => u.listenerId != a);
  }
  emit(a) {
    this.listeners.forEach((u) => {
      u.callback(a.payload);
    });
  }
}
const Lr = /* @__PURE__ */ o.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-exclamation-circle",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ o.jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
      /* @__PURE__ */ o.jsx("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" })
    ]
  }
), Dr = /* @__PURE__ */ o.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-check-circle",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ o.jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
      /* @__PURE__ */ o.jsx("path", { d: "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" })
    ]
  }
), se = new ue(), ce = new ue(), le = new ue(), $r = (n) => {
  se.emit({
    payload: n
  });
}, Wr = (n) => {
  ce.emit({ payload: n });
}, Br = (n) => {
  le.emit({ payload: n });
}, Be = $e({
  setError: (n) => {
  },
  setSuccess: (n, a) => {
  },
  setLoading: (n) => {
  }
});
function Yr() {
  return jr(Be);
}
function zr({ children: n }) {
  const [a, u] = W([]), [m, x] = W(!1), [T, S] = W([]);
  ae(() => {
    const s = ce.addListener({
      callback: (C) => {
        v(C.message);
      }
    }), f = se.addListener({
      callback: (C) => {
        h(
          C.message ? C.message : "Success!",
          C.opts ? C.opts : {
            durationMilliseconds: 4e3,
            isPermanent: !1
          }
        );
      }
    }), R = le.addListener({
      callback: (C) => {
        b(C.isLoading);
      }
    });
    return () => {
      ce.removeListener(s), se.removeListener(f), le.removeListener(R);
    };
  }, []);
  const h = (s, f) => {
    const R = oe();
    S((C) => [...C, { id: R, message: s, opts: f }]), f != null && f.isPermanent || setTimeout(
      () => {
        S((C) => C.filter(
          (N) => N.id != R
        ));
      },
      f != null && f.durationMilliseconds ? f.durationMilliseconds : 4e3
    );
  }, v = (s) => {
    const f = oe();
    u((R) => s ? [...R, { message: s, id: f }] : [...R, { message: "Error!", id: f }]), setTimeout(() => {
      u((R) => R.filter((C) => C.id != f));
    }, 4e3);
  }, b = (s) => {
    x(s);
  }, p = /* @__PURE__ */ o.jsxs("div", { className: "loader", children: [
    /* @__PURE__ */ o.jsx("div", {}),
    /* @__PURE__ */ o.jsx("div", {}),
    /* @__PURE__ */ o.jsx("div", {})
  ] });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(A.div, { className: "floatingParentContainer", children: [
      /* @__PURE__ */ o.jsx(J, { children: a.length > 0 && a.map((s, f) => /* @__PURE__ */ o.jsxs(
        A.div,
        {
          className: "floatingChildContainer errorContainer",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 },
          exit: { opacity: 0 },
          children: [
            Lr,
            /* @__PURE__ */ o.jsx("span", { className: "break-all", children: s.message })
          ]
        },
        f
      )) }),
      /* @__PURE__ */ o.jsx(J, { children: /* @__PURE__ */ o.jsx(J, { children: T.map((s, f) => {
        var R;
        return /* @__PURE__ */ o.jsxs(
          A.div,
          {
            className: "floatingChildContainer successContainer",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            exit: { opacity: 0 },
            children: [
              Dr,
              s.message != "" && /* @__PURE__ */ o.jsx("div", { className: "break-all", children: s.message }),
              ((R = s.opts) == null ? void 0 : R.isPermanent) && /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "closeButtonContainer",
                  onClick: () => {
                    S(
                      T.filter((C, N) => N != f)
                    );
                  },
                  children: We
                }
              )
            ]
          },
          f
        );
      }) }) }),
      /* @__PURE__ */ o.jsx(J, { children: m && /* @__PURE__ */ o.jsx(
        A.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 },
          exit: { opacity: 0 },
          className: "floatingChildContainer loadingContainer",
          children: p
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Be.Provider,
      {
        value: {
          setError: (s) => {
            v(s);
          },
          setSuccess: (s, f) => {
            h(s, f);
          },
          setLoading: (s) => {
            b(s);
          }
        },
        children: n
      }
    )
  ] });
}
export {
  Vr as Carousel,
  Sr as CarouselContext,
  zr as FeedbackProvider,
  Be as FeedbackProviderContext,
  Ur as Modal,
  Wr as emitError,
  Br as emitLoading,
  $r as emitSuccess,
  Yr as useFeedback
};
