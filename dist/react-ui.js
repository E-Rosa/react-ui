import Ue, { createContext as Ve, useState as W, useRef as Le, useEffect as ae, useContext as Rr } from "react";
import { motion as A, AnimatePresence as J } from "framer-motion";
var ie = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function _r() {
  if (Fe)
    return V;
  Fe = 1;
  var n = Ue, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, C = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(h, m, y) {
    var p, s = {}, u = null, R = null;
    y !== void 0 && (u = "" + y), m.key !== void 0 && (u = "" + m.key), m.ref !== void 0 && (R = m.ref);
    for (p in m)
      v.call(m, p) && !w.hasOwnProperty(p) && (s[p] = m[p]);
    if (h && h.defaultProps)
      for (p in m = h.defaultProps, m)
        s[p] === void 0 && (s[p] = m[p]);
    return { $$typeof: a, type: h, key: u, ref: R, props: s, _owner: C.current };
  }
  return V.Fragment = d, V.jsx = S, V.jsxs = S, V;
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
var Ne;
function wr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ue, a = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), x = Symbol.iterator, N = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[N];
      return typeof r == "function" ? r : null;
    }
    var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Ye("error", e, t);
      }
    }
    function Ye(e, r, t) {
      {
        var i = D.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var g = t.map(function(l) {
          return String(l);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var ze = !1, qe = !1, Ke = !1, Je = !1, Ge = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === w || Ge || e === C || e === y || e === p || Je || e === R || ze || qe || Ke || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === s || e.$$typeof === S || e.$$typeof === h || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ze(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case w:
          return "Profiler";
        case C:
          return "StrictMode";
        case y:
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
          case m:
            return Ze(e, e.render, "ForwardRef");
          case s:
            var i = e.displayName || null;
            return i !== null ? i : O(e.type) || "Memo";
          case u: {
            var f = e, g = f._payload, l = f._init;
            try {
              return O(l(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, ve, me, ge, he, pe, be, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Xe() {
      {
        if (M === 0) {
          ve = console.log, me = console.info, ge = console.warn, he = console.error, pe = console.group, be = console.groupCollapsed, ye = console.groupEnd;
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
    function Qe() {
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
              value: be
            }),
            groupEnd: I({}, e, {
              value: ye
            })
          });
        }
        M < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = D.ReactCurrentDispatcher, H;
    function B(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            H = i && i[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, Y;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new er();
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
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = G.current, G.current = null, Xe();
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
`), P = i.stack.split(`
`), b = c.length - 1, E = P.length - 1; b >= 1 && E >= 0 && c[b] !== P[E]; )
            E--;
          for (; b >= 1 && E >= 0; b--, E--)
            if (c[b] !== P[E]) {
              if (b !== 1 || E !== 1)
                do
                  if (b--, E--, E < 0 || c[b] !== P[E]) {
                    var T = `
` + c[b].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, T), T;
                  }
                while (b >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = g, Qe(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", De = F ? B(F) : "";
      return typeof e == "function" && Y.set(e, De), De;
    }
    function rr(e, r, t) {
      return xe(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, tr(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case y:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return rr(e.render);
          case s:
            return z(e.type, r, t);
          case u: {
            var i = e, f = i._payload, g = i._init;
            try {
              return z(g(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Ce = {}, Re = D.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function nr(e, r, t, i, f) {
      {
        var g = Function.call.bind(q);
        for (var l in e)
          if (g(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var P = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              c = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              c = b;
            }
            c && !(c instanceof Error) && (K(f), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof c), K(null)), c instanceof Error && !(c.message in Ce) && (Ce[c.message] = !0, K(f), j("Failed %s type: %s", t, c.message), K(null));
          }
      }
    }
    var ar = Array.isArray;
    function X(e) {
      return ar(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
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
      if (or(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), _e(e);
    }
    var U = D.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Pe, Q;
    Q = {};
    function cr(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = O(U.current.type);
        Q[t] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(U.current.type), e.ref), Q[t] = !0);
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          je || (je = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var vr = function(e, r, t, i, f, g, l) {
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
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function mr(e, r, t, i, f) {
      {
        var g, l = {}, c = null, P = null;
        t !== void 0 && (we(t), c = "" + t), lr(r) && (we(r.key), c = "" + r.key), cr(r) && (P = r.ref, ur(r, f));
        for (g in r)
          q.call(r, g) && !sr.hasOwnProperty(g) && (l[g] = r[g]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (g in b)
            l[g] === void 0 && (l[g] = b[g]);
        }
        if (c || P) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && fr(l, E), P && dr(l, E);
        }
        return vr(e, c, P, f, i, U.current, l);
      }
    }
    var ee = D.ReactCurrentOwner, Te = D.ReactDebugCurrentFrame;
    function L(e) {
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
    function gr(e) {
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
    function hr(e) {
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
        var t = hr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var i = "";
        e && e._owner && e._owner !== ee.current && (i = " It was passed a child from " + O(e._owner.type) + "."), L(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), L(null);
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
          var f = Be(e);
          if (typeof f == "function" && f !== e.entries)
            for (var g = f.call(e), l; !(l = g.next()).done; )
              te(l.value) && ke(l.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === s))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = O(r);
          nr(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var f = O(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            L(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ae(e, r, t, i, f, g) {
      {
        var l = He(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = gr(f);
          P ? c += P : c += Se();
          var b;
          e === null ? b = "null" : X(e) ? b = "array" : e !== void 0 && e.$$typeof === a ? (b = "<" + (O(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, c);
        }
        var E = mr(e, r, t, f, g);
        if (E == null)
          return E;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (X(T)) {
                for (var F = 0; F < T.length; F++)
                  Ie(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(T, e);
        }
        return e === v ? br(E) : pr(E), E;
      }
    }
    function yr(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var xr = Er, Cr = yr;
    $.Fragment = v, $.jsx = xr, $.jsxs = Cr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ie.exports = _r() : ie.exports = wr();
var o = ie.exports;
const jr = Ve({
  nextPage: () => {
  },
  previousPage: () => {
  },
  goToPage: (n) => {
  },
  addPage: (n) => {
  }
});
function Lr({ children: n }) {
  const [a, d] = W(), [v, C] = W(0), w = () => {
    const h = n.map((m, y) => /* @__PURE__ */ o.jsx(o.Fragment, { children: v == y && /* @__PURE__ */ o.jsx(
      A.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        children: m
      },
      y
    ) }));
    if (a) {
      const m = a.map((y, p) => {
        const s = p + n.length;
        return /* @__PURE__ */ o.jsx(o.Fragment, { children: v == s && /* @__PURE__ */ o.jsx(
          A.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            children: y
          },
          s
        ) });
      });
      return h.concat(m);
    }
    return h;
  }, S = () => {
    const h = n.map((m, y) => {
      const p = v == y;
      return /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "cButton " + p ? "paginationButtonHighlighted" : "paginationButton",
          onClick: () => {
            C(y);
          },
          children: y + 1
        },
        y
      );
    });
    if (a) {
      const m = a.map((y, p) => {
        const s = p + n.length, u = v == s;
        return /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "cButton " + u ? "paginationButtonHighlighted" : "paginationButton",
            onClick: () => {
              C(s);
            },
            children: s + 1
          },
          s
        );
      });
      return h.concat(m);
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
          jr.Provider,
          {
            value: {
              nextPage: () => {
                C((h) => h + 1);
              },
              previousPage: () => {
                C((h) => h - 1);
              },
              goToPage: (h) => {
                C(h - 1);
              },
              addPage: (h) => {
                a == null ? d([h]) : d((m) => {
                  if (m)
                    return [...m, h];
                });
              }
            },
            children: w()
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "paginationButtonsContainer", children: S() })
      ]
    }
  );
}
function Fr(n) {
  const a = Le(null), d = Le(null);
  return ae(() => {
    a.current ? (a.current.focus(), a.current.scrollIntoView()) : d.current && (d.current.focus(), d.current.scrollIntoView());
  }, []), ae(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "visible";
  }), []), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: d,
      onClick: (v) => {
        if (n.onOutsideClick) {
          const C = v.target, w = v.currentTarget;
          C == w && n.onOutsideClick(v);
        }
      },
      className: `hide-scrollbar overflow-scroll h-screen fixed inset-0 flex flex-col items-center w-screen bg-black bg-opacity-[95%] z-[49] ${n.className}`,
      children: /* @__PURE__ */ o.jsxs("div", { className: n.containerClassName, children: [
        !n.hideCloseButton && /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => {
              var v;
              (v = n.onOutsideClick) == null || v.call(n);
            },
            className: n.closeButtonClassName || "self-end",
            children: $e
          }
        ),
        n.children
      ] })
    }
  );
}
const $e = /* @__PURE__ */ o.jsxs(
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
function Pr(n, a = 0) {
  return (_[n[a + 0]] + _[n[a + 1]] + _[n[a + 2]] + _[n[a + 3]] + "-" + _[n[a + 4]] + _[n[a + 5]] + "-" + _[n[a + 6]] + _[n[a + 7]] + "-" + _[n[a + 8]] + _[n[a + 9]] + "-" + _[n[a + 10]] + _[n[a + 11]] + _[n[a + 12]] + _[n[a + 13]] + _[n[a + 14]] + _[n[a + 15]]).toLowerCase();
}
let ne;
const Tr = new Uint8Array(16);
function Sr() {
  if (!ne) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ne = crypto.getRandomValues.bind(crypto);
  }
  return ne(Tr);
}
const Or = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Me = { randomUUID: Or };
function oe(n, a, d) {
  var C;
  if (Me.randomUUID && !a && !n)
    return Me.randomUUID();
  n = n || {};
  const v = n.random ?? ((C = n.rng) == null ? void 0 : C.call(n)) ?? Sr();
  if (v.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (v[6] = v[6] & 15 | 64, v[8] = v[8] & 63 | 128, a) {
    if (d = d || 0, d < 0 || d + 16 > a.length)
      throw new RangeError(`UUID byte range ${d}:${d + 15} is out of buffer bounds`);
    for (let w = 0; w < 16; ++w)
      a[d + w] = v[w];
    return a;
  }
  return Pr(v);
}
class ue {
  constructor() {
    this.listeners = [];
  }
  addListener(a) {
    if (a.listenerId)
      return this.listeners.push(a), a.listenerId;
    const d = oe();
    return this.listeners.push(Object.assign(Object.assign({}, a), { listenerId: d })), d;
  }
  removeListener(a) {
    this.listeners = this.listeners.filter((d) => d.listenerId != a);
  }
  emit(a) {
    this.listeners.forEach((d) => {
      d.callback(a.payload);
    });
  }
}
const kr = /* @__PURE__ */ o.jsxs(
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
), Ir = /* @__PURE__ */ o.jsxs(
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
), se = new ue(), ce = new ue(), le = new ue(), Nr = (n) => {
  se.emit({
    payload: n
  });
}, Mr = (n) => {
  ce.emit({ payload: n });
}, Ur = (n) => {
  le.emit({ payload: n });
}, We = Ve({
  setError: (n) => {
  },
  setSuccess: (n, a) => {
  },
  setLoading: (n) => {
  }
});
function Vr() {
  return Rr(We);
}
function $r({ children: n }) {
  const [a, d] = W([]), [v, C] = W(!1), [w, S] = W([]);
  ae(() => {
    const s = ce.addListener({
      callback: (x) => {
        m(x.message);
      }
    }), u = se.addListener({
      callback: (x) => {
        h(
          x.message ? x.message : "Success!",
          x.opts ? x.opts : {
            durationMilliseconds: 4e3,
            isPermanent: !1
          }
        );
      }
    }), R = le.addListener({
      callback: (x) => {
        y(x.isLoading);
      }
    });
    return () => {
      ce.removeListener(s), se.removeListener(u), le.removeListener(R);
    };
  }, []);
  const h = (s, u) => {
    const R = oe();
    S((x) => [...x, { id: R, message: s, opts: u }]), u != null && u.isPermanent || setTimeout(
      () => {
        S((x) => x.filter(
          (N) => N.id != R
        ));
      },
      u != null && u.durationMilliseconds ? u.durationMilliseconds : 4e3
    );
  }, m = (s) => {
    const u = oe();
    d((R) => s ? [...R, { message: s, id: u }] : [...R, { message: "Error!", id: u }]), setTimeout(() => {
      d((R) => R.filter((x) => x.id != u));
    }, 4e3);
  }, y = (s) => {
    C(s);
  }, p = /* @__PURE__ */ o.jsxs("div", { className: "loader", children: [
    /* @__PURE__ */ o.jsx("div", {}),
    /* @__PURE__ */ o.jsx("div", {}),
    /* @__PURE__ */ o.jsx("div", {})
  ] });
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(A.div, { className: "floatingParentContainer", children: [
      /* @__PURE__ */ o.jsx(J, { children: a.length > 0 && a.map((s, u) => /* @__PURE__ */ o.jsxs(
        A.div,
        {
          className: "floatingChildContainer errorContainer",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 },
          exit: { opacity: 0 },
          children: [
            kr,
            /* @__PURE__ */ o.jsx("span", { className: "break-all", children: s.message })
          ]
        },
        u
      )) }),
      /* @__PURE__ */ o.jsx(J, { children: /* @__PURE__ */ o.jsx(J, { children: w.map((s, u) => {
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
              Ir,
              s.message != "" && /* @__PURE__ */ o.jsx("div", { className: "break-all", children: s.message }),
              ((R = s.opts) == null ? void 0 : R.isPermanent) && /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "closeButtonContainer",
                  onClick: () => {
                    S(
                      w.filter((x, N) => N != u)
                    );
                  },
                  children: $e
                }
              )
            ]
          },
          u
        );
      }) }) }),
      /* @__PURE__ */ o.jsx(J, { children: v && /* @__PURE__ */ o.jsx(
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
      We.Provider,
      {
        value: {
          setError: (s) => {
            m(s);
          },
          setSuccess: (s, u) => {
            h(s, u);
          },
          setLoading: (s) => {
            y(s);
          }
        },
        children: n
      }
    )
  ] });
}
export {
  Lr as Carousel,
  jr as CarouselContext,
  $r as FeedbackProvider,
  We as FeedbackProviderContext,
  Fr as Modal,
  Mr as emitError,
  Ur as emitLoading,
  Nr as emitSuccess,
  Vr as useFeedback
};
