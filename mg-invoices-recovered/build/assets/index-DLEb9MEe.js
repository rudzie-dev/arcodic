(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lc = { exports: {} },
  Oi = {},
  Dc = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ps = Symbol.for("react.element"),
  bf = Symbol.for("react.portal"),
  Ef = Symbol.for("react.fragment"),
  jf = Symbol.for("react.strict_mode"),
  Cf = Symbol.for("react.profiler"),
  Nf = Symbol.for("react.provider"),
  Tf = Symbol.for("react.context"),
  Rf = Symbol.for("react.forward_ref"),
  Pf = Symbol.for("react.suspense"),
  Of = Symbol.for("react.memo"),
  If = Symbol.for("react.lazy"),
  Yl = Symbol.iterator;
function Af(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yl && e[Yl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zc = Object.assign,
  Mc = {};
function ur(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Uc));
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bc() {}
Bc.prototype = ur.prototype;
function Wo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Mc),
    (this.updater = n || Uc));
}
var Ho = (Wo.prototype = new Bc());
Ho.constructor = Wo;
zc(Ho, ur.prototype);
Ho.isPureReactComponent = !0;
var Xl = Array.isArray,
  Fc = Object.prototype.hasOwnProperty,
  Ko = { current: null },
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Fc.call(t, r) && !Vc.hasOwnProperty(r) && (s[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
  return {
    $$typeof: ps,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: Ko.current,
  };
}
function $f(e, t) {
  return {
    $$typeof: ps,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Go(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ps;
}
function Lf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zl = /\/+/g;
function ta(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lf("" + e.key)
    : t.toString(36);
}
function Ks(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ps:
          case bf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + ta(a, 0) : r),
      Xl(s)
        ? ((n = ""),
          e != null && (n = e.replace(Zl, "$&/") + "/"),
          Ks(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Go(s) &&
            (s = $f(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Zl, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Xl(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var l = r + ta(i, o);
      a += Ks(i, t, n, l, s);
    }
  else if (((l = Af(e)), typeof l == "function"))
    for (e = l.call(e), o = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + ta(i, o++)), (a += Ks(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function xs(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Ks(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function Df(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  Gs = { transition: null },
  Uf = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: Ko,
  };
function Wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: xs,
  forEach: function (e, t, n) {
    xs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Go(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = ur;
z.Fragment = Ef;
z.Profiler = Cf;
z.PureComponent = Wo;
z.StrictMode = jf;
z.Suspense = Pf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
z.act = Wc;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = zc({}, e.props),
    s = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ko.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      Fc.call(t, l) &&
        !Vc.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: ps, type: e.type, key: s, ref: i, props: r, _owner: a };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nf, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = qc;
z.createFactory = function (e) {
  var t = qc.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Rf, render: e };
};
z.isValidElement = Go;
z.lazy = function (e) {
  return { $$typeof: If, _payload: { _status: -1, _result: e }, _init: Df };
};
z.memo = function (e, t) {
  return { $$typeof: Of, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Gs.transition;
  Gs.transition = {};
  try {
    e();
  } finally {
    Gs.transition = t;
  }
};
z.unstable_act = Wc;
z.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Se.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
z.useId = function () {
  return Se.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Se.current.useRef(e);
};
z.useState = function (e) {
  return Se.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Se.current.useTransition();
};
z.version = "18.3.1";
Dc.exports = z;
var D = Dc.exports;
const zf = Sf(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = D,
  Bf = Symbol.for("react.element"),
  Ff = Symbol.for("react.fragment"),
  Vf = Object.prototype.hasOwnProperty,
  qf = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hc(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Vf.call(t, r) && !Wf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Bf,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: qf.current,
  };
}
Oi.Fragment = Ff;
Oi.jsx = Hc;
Oi.jsxs = Hc;
Lc.exports = Oi;
var c = Lc.exports,
  Ba = {},
  Kc = { exports: {} },
  De = {},
  Gc = { exports: {} },
  Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, $) {
    var E = N.length;
    N.push($);
    e: for (; 0 < E; ) {
      var Y = (E - 1) >>> 1,
        re = N[Y];
      if (0 < s(re, $)) ((N[Y] = $), (N[E] = re), (E = Y));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var $ = N[0],
      E = N.pop();
    if (E !== $) {
      N[0] = E;
      e: for (var Y = 0, re = N.length, Qt = re >>> 1; Y < Qt; ) {
        var rt = 2 * (Y + 1) - 1,
          mr = N[rt],
          st = rt + 1,
          Yt = N[st];
        if (0 > s(mr, E))
          st < re && 0 > s(Yt, mr)
            ? ((N[Y] = Yt), (N[st] = E), (Y = st))
            : ((N[Y] = mr), (N[rt] = E), (Y = rt));
        else if (st < re && 0 > s(Yt, E)) ((N[Y] = Yt), (N[st] = E), (Y = st));
        else break e;
      }
    }
    return $;
  }
  function s(N, $) {
    var E = N.sortIndex - $.sortIndex;
    return E !== 0 ? E : N.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    u = [],
    d = 1,
    g = null,
    f = 3,
    v = !1,
    y = !1,
    _ = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= N)
        (r(u), ($.sortIndex = $.expirationTime), t(l, $));
      else break;
      $ = n(u);
    }
  }
  function x(N) {
    if (((_ = !1), p(N), !y))
      if (n(l) !== null) ((y = !0), xn(j));
      else {
        var $ = n(u);
        $ !== null && kn(x, $.startTime - N);
      }
  }
  function j(N, $) {
    ((y = !1), _ && ((_ = !1), m(T), (T = -1)), (v = !0));
    var E = f;
    try {
      for (
        p($), g = n(l);
        g !== null && (!(g.expirationTime > $) || (N && !Ee()));
      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          ((g.callback = null), (f = g.priorityLevel));
          var re = Y(g.expirationTime <= $);
          (($ = e.unstable_now()),
            typeof re == "function" ? (g.callback = re) : g === n(l) && r(l),
            p($));
        } else r(l);
        g = n(l);
      }
      if (g !== null) var Qt = !0;
      else {
        var rt = n(u);
        (rt !== null && kn(x, rt.startTime - $), (Qt = !1));
      }
      return Qt;
    } finally {
      ((g = null), (f = E), (v = !1));
    }
  }
  var b = !1,
    C = null,
    T = -1,
    B = 5,
    U = -1;
  function Ee() {
    return !(e.unstable_now() - U < B);
  }
  function He() {
    if (C !== null) {
      var N = e.unstable_now();
      U = N;
      var $ = !0;
      try {
        $ = C(!0, N);
      } finally {
        $ ? Jt() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var Jt;
  if (typeof h == "function")
    Jt = function () {
      h(He);
    };
  else if (typeof MessageChannel < "u") {
    var fr = new MessageChannel(),
      pr = fr.port2;
    ((fr.port1.onmessage = He),
      (Jt = function () {
        pr.postMessage(null);
      }));
  } else
    Jt = function () {
      k(He, 0);
    };
  function xn(N) {
    ((C = N), b || ((b = !0), Jt()));
  }
  function kn(N, $) {
    T = k(function () {
      N(e.unstable_now());
    }, $);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), xn(j));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = f;
      }
      var E = f;
      f = $;
      try {
        return N();
      } finally {
        f = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, $) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var E = f;
      f = N;
      try {
        return $();
      } finally {
        f = E;
      }
    }),
    (e.unstable_scheduleCallback = function (N, $, E) {
      var Y = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? Y + E : Y))
          : (E = Y),
        N)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = E + re),
        (N = {
          id: d++,
          callback: $,
          priorityLevel: N,
          startTime: E,
          expirationTime: re,
          sortIndex: -1,
        }),
        E > Y
          ? ((N.sortIndex = E),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (_ ? (m(T), (T = -1)) : (_ = !0), kn(x, E - Y)))
          : ((N.sortIndex = re), t(l, N), y || v || ((y = !0), xn(j))),
        N
      );
    }),
    (e.unstable_shouldYield = Ee),
    (e.unstable_wrapCallback = function (N) {
      var $ = f;
      return function () {
        var E = f;
        f = $;
        try {
          return N.apply(this, arguments);
        } finally {
          f = E;
        }
      };
    }));
})(Jc);
Gc.exports = Jc;
var Hf = Gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kf = D,
  Le = Hf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qc = new Set(),
  qr = {};
function wn(e, t) {
  (nr(e, t), nr(e + "Capture", t));
}
function nr(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) Qc.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fa = Object.prototype.hasOwnProperty,
  Gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function Jf(e) {
  return Fa.call(tu, e)
    ? !0
    : Fa.call(eu, e)
      ? !1
      : Gf.test(e)
        ? (tu[e] = !0)
        : ((eu[e] = !0), !1);
}
function Qf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Yf(e, t, n, r) {
  if (t === null || typeof t > "u" || Qf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, s, i, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jo = /[\-:]([a-z])/g;
function Qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jo, Qo);
    ge[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jo, Qo);
    ge[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Jo, Qo);
  ge[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, t, n, r) {
  var s = ge.hasOwnProperty(t) ? ge[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yf(t, n, s, r) && (n = null),
    r || s === null
      ? Jf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ks = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Xo = Symbol.for("react.strict_mode"),
  Va = Symbol.for("react.profiler"),
  Yc = Symbol.for("react.provider"),
  Xc = Symbol.for("react.context"),
  Zo = Symbol.for("react.forward_ref"),
  qa = Symbol.for("react.suspense"),
  Wa = Symbol.for("react.suspense_list"),
  el = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Zc = Symbol.for("react.offscreen"),
  nu = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  na;
function Nr(e) {
  if (na === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      na = (t && t[1]) || "";
    }
  return (
    `
` +
    na +
    e
  );
}
var ra = !1;
function sa(e, t) {
  if (!e || ra) return "";
  ra = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = s.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && s[a] !== i[o];
      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (s[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || s[a] !== i[o])) {
                var l =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((ra = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function Xf(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = sa(e.type, !1)), e);
    case 11:
      return ((e = sa(e.type.render, !1)), e);
    case 1:
      return ((e = sa(e.type, !0)), e);
    default:
      return "";
  }
}
function Ha(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Ln:
      return "Portal";
    case Va:
      return "Profiler";
    case Xo:
      return "StrictMode";
    case qa:
      return "Suspense";
    case Wa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xc:
        return (e.displayName || "Context") + ".Consumer";
      case Yc:
        return (e._context.displayName || "Context") + ".Provider";
      case Zo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case el:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ha(e.type) || "Memo"
        );
      case Nt:
        ((t = e._payload), (e = e._init));
        try {
          return Ha(e(t));
        } catch {}
    }
  return null;
}
function Zf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ha(t);
    case 8:
      return t === Xo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ep(e) {
  var t = ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ss(e) {
  e._valueTracker || (e._valueTracker = ep(e));
}
function td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ka(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function nd(e, t) {
  ((t = t.checked), t != null && Yo(e, "checked", t, !1));
}
function Ga(e, t) {
  nd(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ja(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ja(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ja(e, t, n) {
  (t !== "number" || ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tr = Array.isArray;
function Jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + qt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Tr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: qt(n) };
}
function rd(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ya(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var bs,
  id = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        bs = bs || document.createElement("div"),
          bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = bs.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function (e) {
  tp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]));
  });
});
function ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
      ? ("" + t).trim()
      : t + "px";
}
function od(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = ad(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var np = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Xa(e, t) {
  if (t) {
    if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Za(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var eo = null;
function tl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var to = null,
  Qn = null,
  Yn = null;
function ou(e) {
  if ((e = vs(e))) {
    if (typeof to != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Di(t)), to(e.stateNode, e.type, t));
  }
}
function ld(e) {
  Qn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Qn = e);
}
function ud() {
  if (Qn) {
    var e = Qn,
      t = Yn;
    if (((Yn = Qn = null), ou(e), t)) for (e = 0; e < t.length; e++) ou(t[e]);
  }
}
function cd(e, t) {
  return e(t);
}
function dd() {}
var ia = !1;
function hd(e, t, n) {
  if (ia) return e(t, n);
  ia = !0;
  try {
    return cd(e, t, n);
  } finally {
    ((ia = !1), (Qn !== null || Yn !== null) && (dd(), ud()));
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Di(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var no = !1;
if (wt)
  try {
    var _r = {};
    (Object.defineProperty(_r, "passive", {
      get: function () {
        no = !0;
      },
    }),
      window.addEventListener("test", _r, _r),
      window.removeEventListener("test", _r, _r));
  } catch {
    no = !1;
  }
function rp(e, t, n, r, s, i, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ar = !1,
  ai = null,
  oi = !1,
  ro = null,
  sp = {
    onError: function (e) {
      ((Ar = !0), (ai = e));
    },
  };
function ip(e, t, n, r, s, i, a, o, l) {
  ((Ar = !1), (ai = null), rp.apply(sp, arguments));
}
function ap(e, t, n, r, s, i, a, o, l) {
  if ((ip.apply(this, arguments), Ar)) {
    if (Ar) {
      var u = ai;
      ((Ar = !1), (ai = null));
    } else throw Error(S(198));
    oi || ((oi = !0), (ro = u));
  }
}
function _n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function lu(e) {
  if (_n(e) !== e) throw Error(S(188));
}
function op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (lu(s), e);
        if (i === r) return (lu(s), t);
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var a = !1, o = s.child; o; ) {
        if (o === n) {
          ((a = !0), (n = s), (r = i));
          break;
        }
        if (o === r) {
          ((a = !0), (r = s), (n = i));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            ((a = !0), (n = i), (r = s));
            break;
          }
          if (o === r) {
            ((a = !0), (r = i), (n = s));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function pd(e) {
  return ((e = op(e)), e !== null ? md(e) : null);
}
function md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gd = Le.unstable_scheduleCallback,
  uu = Le.unstable_cancelCallback,
  lp = Le.unstable_shouldYield,
  up = Le.unstable_requestPaint,
  se = Le.unstable_now,
  cp = Le.unstable_getCurrentPriorityLevel,
  nl = Le.unstable_ImmediatePriority,
  vd = Le.unstable_UserBlockingPriority,
  li = Le.unstable_NormalPriority,
  dp = Le.unstable_LowPriority,
  yd = Le.unstable_IdlePriority,
  Ii = null,
  ut = null;
function hp(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(Ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : mp,
  fp = Math.log,
  pp = Math.LN2;
function mp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((fp(e) / pp) | 0)) | 0);
}
var Es = 64,
  js = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ui(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~s;
    o !== 0 ? (r = Rr(o)) : ((i &= a), i !== 0 && (r = Rr(i)));
  } else ((a = n & ~s), a !== 0 ? (r = Rr(a)) : i !== 0 && (r = Rr(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - et(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function gp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var a = 31 - et(i),
      o = 1 << a,
      l = s[a];
    (l === -1
      ? (!(o & n) || o & r) && (s[a] = gp(o, t))
      : l <= t && (e.expiredLanes |= o),
      (i &= ~o));
  }
}
function so(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wd() {
  var e = Es;
  return ((Es <<= 1), !(Es & 4194240) && (Es = 64), e);
}
function aa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ms(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n));
}
function yp(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - et(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function rl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var W = 0;
function _d(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var xd,
  sl,
  kd,
  Sd,
  bd,
  io = !1,
  Cs = [],
  Lt = null,
  Dt = null,
  Ut = null,
  Kr = new Map(),
  Gr = new Map(),
  Pt = [],
  wp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = vs(t)), t !== null && sl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function _p(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Lt = xr(Lt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Dt = xr(Dt, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Ut = xr(Ut, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Kr.set(i, xr(Kr.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Gr.set(i, xr(Gr.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Ed(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fd(n)), t !== null)) {
          ((e.blockedOn = t),
            bd(e.priority, function () {
              kd(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Js(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((eo = r), n.target.dispatchEvent(r), (eo = null));
    } else return ((t = vs(n)), t !== null && sl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Js(e) && n.delete(t);
}
function xp() {
  ((io = !1),
    Lt !== null && Js(Lt) && (Lt = null),
    Dt !== null && Js(Dt) && (Dt = null),
    Ut !== null && Js(Ut) && (Ut = null),
    Kr.forEach(du),
    Gr.forEach(du));
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    io ||
      ((io = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, xp)));
}
function Jr(e) {
  function t(s) {
    return kr(s, e);
  }
  if (0 < Cs.length) {
    kr(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lt !== null && kr(Lt, e),
      Dt !== null && kr(Dt, e),
      Ut !== null && kr(Ut, e),
      Kr.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    ((r = Pt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    (Ed(n), n.blockedOn === null && Pt.shift());
}
var Xn = St.ReactCurrentBatchConfig,
  ci = !0;
function kp(e, t, n, r) {
  var s = W,
    i = Xn.transition;
  Xn.transition = null;
  try {
    ((W = 1), il(e, t, n, r));
  } finally {
    ((W = s), (Xn.transition = i));
  }
}
function Sp(e, t, n, r) {
  var s = W,
    i = Xn.transition;
  Xn.transition = null;
  try {
    ((W = 4), il(e, t, n, r));
  } finally {
    ((W = s), (Xn.transition = i));
  }
}
function il(e, t, n, r) {
  if (ci) {
    var s = ao(e, t, n, r);
    if (s === null) (ga(e, t, r, di, n), cu(e, r));
    else if (_p(s, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < wp.indexOf(e))) {
      for (; s !== null; ) {
        var i = vs(s);
        if (
          (i !== null && xd(i),
          (i = ao(e, t, n, r)),
          i === null && ga(e, t, r, di, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else ga(e, t, r, null, n);
  }
}
var di = null;
function ao(e, t, n, r) {
  if (((di = null), (e = tl(r)), (e = ln(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((di = e), null);
}
function jd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cp()) {
        case nl:
          return 1;
        case vd:
          return 4;
        case li:
        case dp:
          return 16;
        case yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  al = null,
  Qs = null;
function Cd() {
  if (Qs) return Qs;
  var e,
    t = al,
    n = t.length,
    r,
    s = "value" in At ? At.value : At.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[i - r]; r++);
  return (Qs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ns() {
  return !0;
}
function hu() {
  return !1;
}
function Ue(e) {
  function t(n, r, s, i, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ns
        : hu),
      (this.isPropagationStopped = hu),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ns));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ns));
      },
      persist: function () {},
      isPersistent: Ns,
    }),
    t
  );
}
var cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ol = Ue(cr),
  gs = ee({}, cr, { view: 0, detail: 0 }),
  bp = Ue(gs),
  oa,
  la,
  Sr,
  Ai = ee({}, gs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ll,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((oa = e.screenX - Sr.screenX), (la = e.screenY - Sr.screenY))
              : (la = oa = 0),
            (Sr = e)),
          oa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : la;
    },
  }),
  fu = Ue(Ai),
  Ep = ee({}, Ai, { dataTransfer: 0 }),
  jp = Ue(Ep),
  Cp = ee({}, gs, { relatedTarget: 0 }),
  ua = Ue(Cp),
  Np = ee({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tp = Ue(Np),
  Rp = ee({}, cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pp = Ue(Rp),
  Op = ee({}, cr, { data: 0 }),
  pu = Ue(Op),
  Ip = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ap = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $p = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $p[e]) ? !!t[e] : !1;
}
function ll() {
  return Lp;
}
var Dp = ee({}, gs, {
    key: function (e) {
      if (e.key) {
        var t = Ip[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Ap[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ll,
    charCode: function (e) {
      return e.type === "keypress" ? Ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ys(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Up = Ue(Dp),
  zp = ee({}, Ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mu = Ue(zp),
  Mp = ee({}, gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ll,
  }),
  Bp = Ue(Mp),
  Fp = ee({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vp = Ue(Fp),
  qp = ee({}, Ai, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wp = Ue(qp),
  Hp = [9, 13, 27, 32],
  ul = wt && "CompositionEvent" in window,
  $r = null;
wt && "documentMode" in document && ($r = document.documentMode);
var Kp = wt && "TextEvent" in window && !$r,
  Nd = wt && (!ul || ($r && 8 < $r && 11 >= $r)),
  gu = " ",
  vu = !1;
function Td(e, t) {
  switch (e) {
    case "keyup":
      return Hp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rd(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Un = !1;
function Gp(e, t) {
  switch (e) {
    case "compositionend":
      return Rd(t);
    case "keypress":
      return t.which !== 32 ? null : ((vu = !0), gu);
    case "textInput":
      return ((e = t.data), e === gu && vu ? null : e);
    default:
      return null;
  }
}
function Jp(e, t) {
  if (Un)
    return e === "compositionend" || (!ul && Td(e, t))
      ? ((e = Cd()), (Qs = al = At = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qp[e.type] : t === "textarea";
}
function Pd(e, t, n, r) {
  (ld(r),
    (t = hi(t, "onChange")),
    0 < t.length &&
      ((n = new ol("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Lr = null,
  Qr = null;
function Yp(e) {
  Fd(e, 0);
}
function $i(e) {
  var t = Bn(e);
  if (td(t)) return e;
}
function Xp(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (wt) {
  var ca;
  if (wt) {
    var da = "oninput" in document;
    if (!da) {
      var wu = document.createElement("div");
      (wu.setAttribute("oninput", "return;"),
        (da = typeof wu.oninput == "function"));
    }
    ca = da;
  } else ca = !1;
  Od = ca && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Lr && (Lr.detachEvent("onpropertychange", Id), (Qr = Lr = null));
}
function Id(e) {
  if (e.propertyName === "value" && $i(Qr)) {
    var t = [];
    (Pd(t, Qr, e, tl(e)), hd(Yp, t));
  }
}
function Zp(e, t, n) {
  e === "focusin"
    ? (_u(), (Lr = t), (Qr = n), Lr.attachEvent("onpropertychange", Id))
    : e === "focusout" && _u();
}
function em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $i(Qr);
}
function tm(e, t) {
  if (e === "click") return $i(t);
}
function nm(e, t) {
  if (e === "input" || e === "change") return $i(t);
}
function rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : rm;
function Yr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Fa.call(t, s) || !nt(e[s], t[s])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function Ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ad(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $d() {
  for (var e = window, t = ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ii(e.document);
  }
  return t;
}
function cl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sm(e) {
  var t = $d(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ad(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = ku(n, i)));
        var a = ku(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var im = wt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  oo = null,
  Dr = null,
  lo = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lo ||
    zn == null ||
    zn !== ii(r) ||
    ((r = zn),
    "selectionStart" in r && cl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Yr(Dr, r)) ||
      ((Dr = r),
      (r = hi(oo, "onSelect")),
      0 < r.length &&
        ((t = new ol("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Ts(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mn = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd"),
  },
  ha = {},
  Ld = {};
wt &&
  ((Ld = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mn.animationend.animation,
    delete Mn.animationiteration.animation,
    delete Mn.animationstart.animation),
  "TransitionEvent" in window || delete Mn.transitionend.transition);
function Li(e) {
  if (ha[e]) return ha[e];
  if (!Mn[e]) return e;
  var t = Mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ld) return (ha[e] = t[n]);
  return e;
}
var Dd = Li("animationend"),
  Ud = Li("animationiteration"),
  zd = Li("animationstart"),
  Md = Li("transitionend"),
  Bd = new Map(),
  bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ht(e, t) {
  (Bd.set(e, t), wn(t, [e]));
}
for (var fa = 0; fa < bu.length; fa++) {
  var pa = bu[fa],
    am = pa.toLowerCase(),
    om = pa[0].toUpperCase() + pa.slice(1);
  Ht(am, "on" + om);
}
Ht(Dd, "onAnimationEnd");
Ht(Ud, "onAnimationIteration");
Ht(zd, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Md, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function Eu(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), ap(r, t, void 0, e), (e.currentTarget = null));
}
function Fd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            l = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), l !== i && s.isPropagationStopped())) break e;
          (Eu(s, o, u), (i = l));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (l = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Eu(s, o, u), (i = l));
        }
    }
  }
  if (oi) throw ((e = ro), (oi = !1), (ro = null), e);
}
function G(e, t) {
  var n = t[po];
  n === void 0 && (n = t[po] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vd(t, e, 2, !1), n.add(r));
}
function ma(e, t, n) {
  var r = 0;
  (t && (r |= 4), Vd(n, e, r, t));
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[Rs]) {
    ((e[Rs] = !0),
      Qc.forEach(function (n) {
        n !== "selectionchange" && (lm.has(n) || ma(n, !1, e), ma(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rs] || ((t[Rs] = !0), ma("selectionchange", !1, t));
  }
}
function Vd(e, t, n, r) {
  switch (jd(t)) {
    case 1:
      var s = kp;
      break;
    case 4:
      s = Sp;
      break;
    default:
      s = il;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !no ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function ga(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = ln(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  hd(function () {
    var u = i,
      d = tl(n),
      g = [];
    e: {
      var f = Bd.get(e);
      if (f !== void 0) {
        var v = ol,
          y = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Up;
            break;
          case "focusin":
            ((y = "focus"), (v = ua));
            break;
          case "focusout":
            ((y = "blur"), (v = ua));
            break;
          case "beforeblur":
          case "afterblur":
            v = ua;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Bp;
            break;
          case Dd:
          case Ud:
          case zd:
            v = Tp;
            break;
          case Md:
            v = Vp;
            break;
          case "scroll":
            v = bp;
            break;
          case "wheel":
            v = Wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Pp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = mu;
        }
        var _ = (t & 4) !== 0,
          k = !_ && e === "scroll",
          m = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              m !== null && ((x = Hr(h, m)), x != null && _.push(Zr(h, x, p)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < _.length &&
          ((f = new v(f, y, null, n, d)), g.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== eo &&
            (y = n.relatedTarget || n.fromElement) &&
            (ln(y) || y[_t]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? ln(y) : null),
              y !== null &&
                ((k = _n(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((_ = fu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = mu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (k = v == null ? f : Bn(v)),
            (p = y == null ? f : Bn(y)),
            (f = new _(x, h + "leave", v, n, d)),
            (f.target = k),
            (f.relatedTarget = p),
            (x = null),
            ln(d) === u &&
              ((_ = new _(m, h + "enter", y, n, d)),
              (_.target = p),
              (_.relatedTarget = k),
              (x = _)),
            (k = x),
            v && y)
          )
            t: {
              for (_ = v, m = y, h = 0, p = _; p; p = En(p)) h++;
              for (p = 0, x = m; x; x = En(x)) p++;
              for (; 0 < h - p; ) ((_ = En(_)), h--);
              for (; 0 < p - h; ) ((m = En(m)), p--);
              for (; h--; ) {
                if (_ === m || (m !== null && _ === m.alternate)) break t;
                ((_ = En(_)), (m = En(m)));
              }
              _ = null;
            }
          else _ = null;
          (v !== null && ju(g, f, v, _, !1),
            y !== null && k !== null && ju(g, k, y, _, !0));
        }
      }
      e: {
        if (
          ((f = u ? Bn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var j = Xp;
        else if (yu(f))
          if (Od) j = nm;
          else {
            j = em;
            var b = Zp;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (j = tm);
        if (j && (j = j(e, u))) {
          Pd(g, j, n, d);
          break e;
        }
        (b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            Ja(f, "number", f.value));
      }
      switch (((b = u ? Bn(u) : window), e)) {
        case "focusin":
          (yu(b) || b.contentEditable === "true") &&
            ((zn = b), (oo = u), (Dr = null));
          break;
        case "focusout":
          Dr = oo = zn = null;
          break;
        case "mousedown":
          lo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((lo = !1), Su(g, n, d));
          break;
        case "selectionchange":
          if (im) break;
        case "keydown":
        case "keyup":
          Su(g, n, d);
      }
      var C;
      if (ul)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Un
          ? Td(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (Nd &&
          n.locale !== "ko" &&
          (Un || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Un && (C = Cd())
            : ((At = d),
              (al = "value" in At ? At.value : At.textContent),
              (Un = !0))),
        (b = hi(u, T)),
        0 < b.length &&
          ((T = new pu(T, e, null, n, d)),
          g.push({ event: T, listeners: b }),
          C ? (T.data = C) : ((C = Rd(n)), C !== null && (T.data = C)))),
        (C = Kp ? Gp(e, n) : Jp(e, n)) &&
          ((u = hi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new pu("onBeforeInput", "beforeinput", null, n, d)),
            g.push({ event: d, listeners: u }),
            (d.data = C))));
    }
    Fd(g, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Hr(e, n)),
      i != null && r.unshift(Zr(e, i, s)),
      (i = Hr(e, t)),
      i != null && r.push(Zr(e, i, s))),
      (e = e.return));
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, s) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      l = o.alternate,
      u = o.stateNode;
    if (l !== null && l === r) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      s
        ? ((l = Hr(n, i)), l != null && a.unshift(Zr(n, l, o)))
        : s || ((l = Hr(n, i)), l != null && a.push(Zr(n, l, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var um = /\r\n?/g,
  cm = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      um,
      `
`,
    )
    .replace(cm, "");
}
function Ps(e, t, n) {
  if (((t = Cu(t)), Cu(e) !== t && n)) throw Error(S(425));
}
function fi() {}
var uo = null,
  co = null;
function ho(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var fo = typeof setTimeout == "function" ? setTimeout : void 0,
  dm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  hm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
        ? function (e) {
            return Nu.resolve(null).then(e).catch(fm);
          }
        : fo;
function fm(e) {
  setTimeout(function () {
    throw e;
  });
}
function va(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Jr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Jr(t);
}
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  lt = "__reactFiber$" + dr,
  es = "__reactProps$" + dr,
  _t = "__reactContainer$" + dr,
  po = "__reactEvents$" + dr,
  pm = "__reactListeners$" + dr,
  mm = "__reactHandles$" + dr;
function ln(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tu(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = Tu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function vs(e) {
  return (
    (e = e[lt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Di(e) {
  return e[es] || null;
}
var mo = [],
  Fn = -1;
function Kt(e) {
  return { current: e };
}
function J(e) {
  0 > Fn || ((e.current = mo[Fn]), (mo[Fn] = null), Fn--);
}
function K(e, t) {
  (Fn++, (mo[Fn] = e.current), (e.current = t));
}
var Wt = {},
  _e = Kt(Wt),
  Ne = Kt(!1),
  pn = Wt;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Te(e) {
  return ((e = e.childContextTypes), e != null);
}
function pi() {
  (J(Ne), J(_e));
}
function Ru(e, t, n) {
  if (_e.current !== Wt) throw Error(S(168));
  (K(_e, t), K(Ne, n));
}
function qd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(S(108, Zf(e) || "Unknown", s));
  return ee({}, n, r);
}
function mi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wt),
    (pn = _e.current),
    K(_e, e),
    K(Ne, Ne.current),
    !0
  );
}
function Pu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = qd(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Ne),
      J(_e),
      K(_e, e))
    : J(Ne),
    K(Ne, n));
}
var mt = null,
  Ui = !1,
  ya = !1;
function Wd(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function gm(e) {
  ((Ui = !0), Wd(e));
}
function Gt() {
  if (!ya && mt !== null) {
    ya = !0;
    var e = 0,
      t = W;
    try {
      var n = mt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((mt = null), (Ui = !1));
    } catch (s) {
      throw (mt !== null && (mt = mt.slice(e + 1)), gd(nl, Gt), s);
    } finally {
      ((W = t), (ya = !1));
    }
  }
  return null;
}
var Vn = [],
  qn = 0,
  gi = null,
  vi = 0,
  Me = [],
  Be = 0,
  mn = null,
  gt = 1,
  vt = "";
function nn(e, t) {
  ((Vn[qn++] = vi), (Vn[qn++] = gi), (gi = e), (vi = t));
}
function Hd(e, t, n) {
  ((Me[Be++] = gt), (Me[Be++] = vt), (Me[Be++] = mn), (mn = e));
  var r = gt;
  e = vt;
  var s = 32 - et(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - et(t) + s;
  if (30 < i) {
    var a = s - (s % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (gt = (1 << (32 - et(t) + s)) | (n << s) | r),
      (vt = i + e));
  } else ((gt = (1 << i) | (n << s) | r), (vt = e));
}
function dl(e) {
  e.return !== null && (nn(e, 1), Hd(e, 1, 0));
}
function hl(e) {
  for (; e === gi; )
    ((gi = Vn[--qn]), (Vn[qn] = null), (vi = Vn[--qn]), (Vn[qn] = null));
  for (; e === mn; )
    ((mn = Me[--Be]),
      (Me[Be] = null),
      (vt = Me[--Be]),
      (Me[Be] = null),
      (gt = Me[--Be]),
      (Me[Be] = null));
}
var $e = null,
  Ae = null,
  Q = !1,
  Ze = null;
function Kd(e, t) {
  var n = Fe(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Ae = zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: gt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vo(e) {
  if (Q) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (go(e)) throw Error(S(418));
        t = zt(n.nextSibling);
        var r = $e;
        t && Ou(e, t)
          ? Kd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), ($e = e));
      }
    } else {
      if (go(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (Q = !1), ($e = e));
    }
  }
}
function Iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Os(e) {
  if (e !== $e) return !1;
  if (!Q) return (Iu(e), (Q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ho(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (go(e)) throw (Gd(), Error(S(418)));
    for (; t; ) (Kd(e, t), (t = zt(t.nextSibling)));
  }
  if ((Iu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = $e ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = Ae; e; ) e = zt(e.nextSibling);
}
function sr() {
  ((Ae = $e = null), (Q = !1));
}
function fl(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var vm = St.ReactCurrentBatchConfig;
function br(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var o = s.refs;
            a === null ? delete o[i] : (o[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Is(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function Jd(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) (t(m, h), (h = h.sibling));
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      (h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling));
    return m;
  }
  function s(m, h) {
    return ((m = Vt(m, h)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, h, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function a(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function o(m, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = Ea(p, m.mode, x)), (h.return = m), h)
      : ((h = s(h, p)), (h.return = m), h);
  }
  function l(m, h, p, x) {
    var j = p.type;
    return j === Dn
      ? d(m, h, p.props.children, x, p.key)
      : h !== null &&
          (h.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Nt &&
              Au(j) === h.type))
        ? ((x = s(h, p.props)), (x.ref = br(m, h, p)), (x.return = m), x)
        : ((x = si(p.type, p.key, p.props, null, m.mode, x)),
          (x.ref = br(m, h, p)),
          (x.return = m),
          x);
  }
  function u(m, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = ja(p, m.mode, x)), (h.return = m), h)
      : ((h = s(h, p.children || [])), (h.return = m), h);
  }
  function d(m, h, p, x, j) {
    return h === null || h.tag !== 7
      ? ((h = fn(p, m.mode, x, j)), (h.return = m), h)
      : ((h = s(h, p)), (h.return = m), h);
  }
  function g(m, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Ea("" + h, m.mode, p)), (h.return = m), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ks:
          return (
            (p = si(h.type, h.key, h.props, null, m.mode, p)),
            (p.ref = br(m, null, h)),
            (p.return = m),
            p
          );
        case Ln:
          return ((h = ja(h, m.mode, p)), (h.return = m), h);
        case Nt:
          var x = h._init;
          return g(m, x(h._payload), p);
      }
      if (Tr(h) || wr(h))
        return ((h = fn(h, m.mode, p, null)), (h.return = m), h);
      Is(m, h);
    }
    return null;
  }
  function f(m, h, p, x) {
    var j = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : o(m, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ks:
          return p.key === j ? l(m, h, p, x) : null;
        case Ln:
          return p.key === j ? u(m, h, p, x) : null;
        case Nt:
          return ((j = p._init), f(m, h, j(p._payload), x));
      }
      if (Tr(p) || wr(p)) return j !== null ? null : d(m, h, p, x, null);
      Is(m, p);
    }
    return null;
  }
  function v(m, h, p, x, j) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(p) || null), o(h, m, "" + x, j));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ks:
          return (
            (m = m.get(x.key === null ? p : x.key) || null),
            l(h, m, x, j)
          );
        case Ln:
          return (
            (m = m.get(x.key === null ? p : x.key) || null),
            u(h, m, x, j)
          );
        case Nt:
          var b = x._init;
          return v(m, h, p, b(x._payload), j);
      }
      if (Tr(x) || wr(x)) return ((m = m.get(p) || null), d(h, m, x, j, null));
      Is(h, x);
    }
    return null;
  }
  function y(m, h, p, x) {
    for (
      var j = null, b = null, C = h, T = (h = 0), B = null;
      C !== null && T < p.length;
      T++
    ) {
      C.index > T ? ((B = C), (C = null)) : (B = C.sibling);
      var U = f(m, C, p[T], x);
      if (U === null) {
        C === null && (C = B);
        break;
      }
      (e && C && U.alternate === null && t(m, C),
        (h = i(U, h, T)),
        b === null ? (j = U) : (b.sibling = U),
        (b = U),
        (C = B));
    }
    if (T === p.length) return (n(m, C), Q && nn(m, T), j);
    if (C === null) {
      for (; T < p.length; T++)
        ((C = g(m, p[T], x)),
          C !== null &&
            ((h = i(C, h, T)),
            b === null ? (j = C) : (b.sibling = C),
            (b = C)));
      return (Q && nn(m, T), j);
    }
    for (C = r(m, C); T < p.length; T++)
      ((B = v(C, m, T, p[T], x)),
        B !== null &&
          (e && B.alternate !== null && C.delete(B.key === null ? T : B.key),
          (h = i(B, h, T)),
          b === null ? (j = B) : (b.sibling = B),
          (b = B)));
    return (
      e &&
        C.forEach(function (Ee) {
          return t(m, Ee);
        }),
      Q && nn(m, T),
      j
    );
  }
  function _(m, h, p, x) {
    var j = wr(p);
    if (typeof j != "function") throw Error(S(150));
    if (((p = j.call(p)), p == null)) throw Error(S(151));
    for (
      var b = (j = null), C = h, T = (h = 0), B = null, U = p.next();
      C !== null && !U.done;
      T++, U = p.next()
    ) {
      C.index > T ? ((B = C), (C = null)) : (B = C.sibling);
      var Ee = f(m, C, U.value, x);
      if (Ee === null) {
        C === null && (C = B);
        break;
      }
      (e && C && Ee.alternate === null && t(m, C),
        (h = i(Ee, h, T)),
        b === null ? (j = Ee) : (b.sibling = Ee),
        (b = Ee),
        (C = B));
    }
    if (U.done) return (n(m, C), Q && nn(m, T), j);
    if (C === null) {
      for (; !U.done; T++, U = p.next())
        ((U = g(m, U.value, x)),
          U !== null &&
            ((h = i(U, h, T)),
            b === null ? (j = U) : (b.sibling = U),
            (b = U)));
      return (Q && nn(m, T), j);
    }
    for (C = r(m, C); !U.done; T++, U = p.next())
      ((U = v(C, m, T, U.value, x)),
        U !== null &&
          (e && U.alternate !== null && C.delete(U.key === null ? T : U.key),
          (h = i(U, h, T)),
          b === null ? (j = U) : (b.sibling = U),
          (b = U)));
    return (
      e &&
        C.forEach(function (He) {
          return t(m, He);
        }),
      Q && nn(m, T),
      j
    );
  }
  function k(m, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ks:
          e: {
            for (var j = p.key, b = h; b !== null; ) {
              if (b.key === j) {
                if (((j = p.type), j === Dn)) {
                  if (b.tag === 7) {
                    (n(m, b.sibling),
                      (h = s(b, p.props.children)),
                      (h.return = m),
                      (m = h));
                    break e;
                  }
                } else if (
                  b.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Nt &&
                    Au(j) === b.type)
                ) {
                  (n(m, b.sibling),
                    (h = s(b, p.props)),
                    (h.ref = br(m, b, p)),
                    (h.return = m),
                    (m = h));
                  break e;
                }
                n(m, b);
                break;
              } else t(m, b);
              b = b.sibling;
            }
            p.type === Dn
              ? ((h = fn(p.props.children, m.mode, x, p.key)),
                (h.return = m),
                (m = h))
              : ((x = si(p.type, p.key, p.props, null, m.mode, x)),
                (x.ref = br(m, h, p)),
                (x.return = m),
                (m = x));
          }
          return a(m);
        case Ln:
          e: {
            for (b = p.key; h !== null; ) {
              if (h.key === b)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  (n(m, h.sibling),
                    (h = s(h, p.children || [])),
                    (h.return = m),
                    (m = h));
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            ((h = ja(p, m.mode, x)), (h.return = m), (m = h));
          }
          return a(m);
        case Nt:
          return ((b = p._init), k(m, h, b(p._payload), x));
      }
      if (Tr(p)) return y(m, h, p, x);
      if (wr(p)) return _(m, h, p, x);
      Is(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = s(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = Ea(p, m.mode, x)), (h.return = m), (m = h)),
        a(m))
      : n(m, h);
  }
  return k;
}
var ir = Jd(!0),
  Qd = Jd(!1),
  yi = Kt(null),
  wi = null,
  Wn = null,
  pl = null;
function ml() {
  pl = Wn = wi = null;
}
function gl(e) {
  var t = yi.current;
  (J(yi), (e._currentValue = t));
}
function yo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  ((wi = e),
    (pl = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null)));
}
function qe(e) {
  var t = e._currentValue;
  if (pl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (wi === null) throw Error(S(308));
      ((Wn = e), (wi.dependencies = { lanes: 0, firstContext: e }));
    } else Wn = Wn.next = e;
  return t;
}
var un = null;
function vl(e) {
  un === null ? (un = [e]) : un.push(e);
}
function Yd(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), vl(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function yl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), vl(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Xs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), rl(e, n));
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function _i(e, t, n, r) {
  var s = e.updateQueue;
  Tt = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var l = o,
      u = l.next;
    ((l.next = null), a === null ? (i = u) : (a.next = u), (a = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== a &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var g = s.baseState;
    ((a = 0), (d = u = l = null), (o = i));
    do {
      var f = o.lane,
        v = o.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            _ = o;
          switch (((f = t), (v = n), _.tag)) {
            case 1:
              if (((y = _.payload), typeof y == "function")) {
                g = y.call(v, g, f);
                break e;
              }
              g = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = _.payload),
                (f = typeof y == "function" ? y.call(v, g, f) : y),
                f == null)
              )
                break e;
              g = ee({}, g, f);
              break e;
            case 2:
              Tt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [o]) : f.push(o));
      } else
        ((v = {
          eventTime: v,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (l = g)) : (d = d.next = v),
          (a |= f));
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        ((f = o),
          (o = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = g),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((a |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((vn |= a), (e.lanes = a), (e.memoizedState = g));
  }
}
function Lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(S(191, s));
        s.call(r);
      }
    }
}
var ys = {},
  ct = Kt(ys),
  ts = Kt(ys),
  ns = Kt(ys);
function cn(e) {
  if (e === ys) throw Error(S(174));
  return e;
}
function wl(e, t) {
  switch ((K(ns, t), K(ts, e), K(ct, ys), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ya(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ya(t, e)));
  }
  (J(ct), K(ct, t));
}
function ar() {
  (J(ct), J(ts), J(ns));
}
function Zd(e) {
  cn(ns.current);
  var t = cn(ct.current),
    n = Ya(t, e.type);
  t !== n && (K(ts, e), K(ct, n));
}
function _l(e) {
  ts.current === e && (J(ct), J(ts));
}
var X = Kt(0);
function xi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var wa = [];
function xl() {
  for (var e = 0; e < wa.length; e++)
    wa[e]._workInProgressVersionPrimary = null;
  wa.length = 0;
}
var Zs = St.ReactCurrentDispatcher,
  _a = St.ReactCurrentBatchConfig,
  gn = 0,
  Z = null,
  le = null,
  ce = null,
  ki = !1,
  Ur = !1,
  rs = 0,
  ym = 0;
function ve() {
  throw Error(S(321));
}
function kl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Sl(e, t, n, r, s, i) {
  if (
    ((gn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zs.current = e === null || e.memoizedState === null ? km : Sm),
    (e = n(r, s)),
    Ur)
  ) {
    i = 0;
    do {
      if (((Ur = !1), (rs = 0), 25 <= i)) throw Error(S(301));
      ((i += 1),
        (ce = le = null),
        (t.updateQueue = null),
        (Zs.current = bm),
        (e = n(r, s)));
    } while (Ur);
  }
  if (
    ((Zs.current = Si),
    (t = le !== null && le.next !== null),
    (gn = 0),
    (ce = le = Z = null),
    (ki = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function bl() {
  var e = rs !== 0;
  return ((rs = 0), e);
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ce === null ? (Z.memoizedState = ce = e) : (ce = ce.next = e), ce);
}
function We() {
  if (le === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ce === null ? Z.memoizedState : ce.next;
  if (t !== null) ((ce = t), (le = e));
  else {
    if (e === null) throw Error(S(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ce === null ? (Z.memoizedState = ce = e) : (ce = ce.next = e));
  }
  return ce;
}
function ss(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xa(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = le,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = i.next), (i.next = a));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var o = (a = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((gn & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var g = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((o = l = g), (a = r)) : (l = l.next = g),
          (Z.lanes |= d),
          (vn |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (a = r) : (l.next = o),
      nt(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (Z.lanes |= i), (vn |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ka(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((i = e(i, a.action)), (a = a.next));
    while (a !== s);
    (nt(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function eh() {}
function th(e, t) {
  var n = Z,
    r = We(),
    s = t(),
    i = !nt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ce = !0)),
    (r = r.queue),
    El(sh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      is(9, rh.bind(null, n, r, s, t), void 0, null),
      de === null)
    )
      throw Error(S(349));
    gn & 30 || nh(n, t, s);
  }
  return s;
}
function nh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function rh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ih(t) && ah(e));
}
function sh(e, t, n) {
  return n(function () {
    ih(t) && ah(e);
  });
}
function ih(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function ah(e) {
  var t = xt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Du(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ss,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xm.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function is(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oh() {
  return We().memoizedState;
}
function ei(e, t, n, r) {
  var s = ot();
  ((Z.flags |= e),
    (s.memoizedState = is(1 | t, n, void 0, r === void 0 ? null : r)));
}
function zi(e, t, n, r) {
  var s = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var a = le.memoizedState;
    if (((i = a.destroy), r !== null && kl(r, a.deps))) {
      s.memoizedState = is(t, n, i, r);
      return;
    }
  }
  ((Z.flags |= e), (s.memoizedState = is(1 | t, n, i, r)));
}
function Uu(e, t) {
  return ei(8390656, 8, e, t);
}
function El(e, t) {
  return zi(2048, 8, e, t);
}
function lh(e, t) {
  return zi(4, 2, e, t);
}
function uh(e, t) {
  return zi(4, 4, e, t);
}
function ch(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    zi(4, 4, ch.bind(null, t, e), n)
  );
}
function jl() {}
function hh(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fh(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ph(e, t, n) {
  return gn & 21
    ? (nt(n, t) || ((n = wd()), (Z.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function wm(e, t) {
  var n = W;
  ((W = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = _a.transition;
  _a.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((W = n), (_a.transition = r));
  }
}
function mh() {
  return We().memoizedState;
}
function _m(e, t, n) {
  var r = Ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gh(e))
  )
    vh(t, n);
  else if (((n = Yd(e, t, n, r)), n !== null)) {
    var s = ke();
    (tt(n, e, r, s), yh(n, t, r));
  }
}
function xm(e, t, n) {
  var r = Ft(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gh(e)) vh(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = o), nt(o, a))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), vl(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Yd(e, t, s, r)),
      n !== null && ((s = ke()), tt(n, e, r, s), yh(n, t, r)));
  }
}
function gh(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function vh(e, t) {
  Ur = ki = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function yh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), rl(e, n));
  }
}
var Si = {
    readContext: qe,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: qe,
    useCallback: function (e, t) {
      return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: qe,
    useEffect: Uu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ei(4194308, 4, ch.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ei(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ei(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _m.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Du,
    useDebugValue: jl,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Du(!1),
        t = e[0];
      return ((e = wm.bind(null, e[1])), (ot().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        s = ot();
      if (Q) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(S(349));
        gn & 30 || nh(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Uu(sh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        is(9, rh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = de.identifierPrefix;
      if (Q) {
        var n = vt,
          r = gt;
        ((n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ym++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: qe,
    useCallback: hh,
    useContext: qe,
    useEffect: El,
    useImperativeHandle: dh,
    useInsertionEffect: lh,
    useLayoutEffect: uh,
    useMemo: fh,
    useReducer: xa,
    useRef: oh,
    useState: function () {
      return xa(ss);
    },
    useDebugValue: jl,
    useDeferredValue: function (e) {
      var t = We();
      return ph(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = xa(ss)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: qe,
    useCallback: hh,
    useContext: qe,
    useEffect: El,
    useImperativeHandle: dh,
    useInsertionEffect: lh,
    useLayoutEffect: uh,
    useMemo: fh,
    useReducer: ka,
    useRef: oh,
    useState: function () {
      return ka(ss);
    },
    useDebugValue: jl,
    useDeferredValue: function (e) {
      var t = We();
      return le === null ? (t.memoizedState = e) : ph(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = ka(ss)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,
    unstable_isNewReconciler: !1,
  };
function Je(e, t) {
  if (e && e.defaultProps) {
    ((t = ee({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Mi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      s = Ft(e),
      i = yt(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Mt(e, i, s)),
      t !== null && (tt(t, e, s, r), Xs(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      s = Ft(e),
      i = yt(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Mt(e, i, s)),
      t !== null && (tt(t, e, s, r), Xs(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Ft(e),
      s = yt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Mt(e, s, r)),
      t !== null && (tt(t, e, r, n), Xs(t, e, r)));
  },
};
function zu(e, t, n, r, s, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Yr(n, r) || !Yr(s, i)
        : !0
  );
}
function wh(e, t, n) {
  var r = !1,
    s = Wt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qe(i))
      : ((s = Te(t) ? pn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rr(e, s) : Wt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Mu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mi.enqueueReplaceState(t, t.state, null));
}
function _o(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), yl(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = qe(i))
    : ((i = Te(t) ? pn : _e.current), (s.context = rr(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (wo(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Mi.enqueueReplaceState(s, s.state, null),
      _i(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function or(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Xf(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;
function _h(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ei || ((Ei = !0), (Po = r)), xo(e, t));
    }),
    n
  );
}
function xh(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        xo(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (xo(e, t),
          typeof r != "function" &&
            (Bt === null ? (Bt = new Set([this])) : Bt.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Em();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = zm.bind(null, e, t, n)), t.then(e, e));
}
function Fu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jm = St.ReactCurrentOwner,
  Ce = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Qd(t, null, n, r) : ir(t, e.child, n, r);
}
function qu(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Zn(t, s),
    (r = Sl(e, t, n, r, i, s)),
    (n = bl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        kt(e, t, s))
      : (Q && n && dl(t), (t.flags |= 1), xe(e, t, r, s), t.child)
  );
}
function Wu(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Al(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), kh(e, t, i, r, s))
      : ((e = si(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yr), n(a, r) && e.ref === t.ref)
    )
      return kt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kh(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Yr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return ((t.lanes = e.lanes), kt(e, t, s));
  }
  return ko(e, t, n, r, s);
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Kn, Oe),
        (Oe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Kn, Oe),
          (Oe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        K(Kn, Oe),
        (Oe |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Kn, Oe),
      (Oe |= r));
  return (xe(e, t, s, n), t.child);
}
function bh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ko(e, t, n, r, s) {
  var i = Te(n) ? pn : _e.current;
  return (
    (i = rr(t, i)),
    Zn(t, s),
    (n = Sl(e, t, n, r, i, s)),
    (r = bl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        kt(e, t, s))
      : (Q && r && dl(t), (t.flags |= 1), xe(e, t, n, s), t.child)
  );
}
function Hu(e, t, n, r, s) {
  if (Te(n)) {
    var i = !0;
    mi(t);
  } else i = !1;
  if ((Zn(t, s), t.stateNode === null))
    (ti(e, t), wh(t, n, r), _o(t, n, r, s), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qe(u))
      : ((u = Te(n) ? pn : _e.current), (u = rr(t, u)));
    var d = n.getDerivedStateFromProps,
      g =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || l !== u) && Mu(t, a, r, u)),
      (Tt = !1));
    var f = t.memoizedState;
    ((a.state = f),
      _i(t, r, a, s),
      (l = t.memoizedState),
      o !== r || f !== l || Ne.current || Tt
        ? (typeof d == "function" && (wo(t, n, d, r), (l = t.memoizedState)),
          (o = Tt || zu(t, n, o, r, f, l, u))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      Xd(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Je(t.type, o)),
      (a.props = u),
      (g = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = qe(l))
        : ((l = Te(n) ? pn : _e.current), (l = rr(t, l))));
    var v = n.getDerivedStateFromProps;
    ((d =
      typeof v == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== g || f !== l) && Mu(t, a, r, l)),
      (Tt = !1),
      (f = t.memoizedState),
      (a.state = f),
      _i(t, r, a, s));
    var y = t.memoizedState;
    o !== g || f !== y || Ne.current || Tt
      ? (typeof v == "function" && (wo(t, n, v, r), (y = t.memoizedState)),
        (u = Tt || zu(t, n, u, r, f, y, l) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return So(e, t, n, r, i, s);
}
function So(e, t, n, r, s, i) {
  bh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (s && Pu(t, n, !1), kt(e, t, i));
  ((r = t.stateNode), (jm.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ir(t, e.child, null, i)), (t.child = ir(t, null, o, i)))
      : xe(e, t, o, i),
    (t.memoizedState = r.state),
    s && Pu(t, n, !0),
    t.child
  );
}
function Eh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ru(e, t.context, !1),
    wl(e, t.containerInfo));
}
function Ku(e, t, n, r, s) {
  return (sr(), fl(s), (t.flags |= 256), xe(e, t, n, r), t.child);
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jh(e, t, n) {
  var r = t.pendingProps,
    s = X.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    K(X, s & 1),
    e === null)
  )
    return (
      vo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Vi(a, r, 0, null)),
              (e = fn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Eo(n)),
              (t.memoizedState = bo),
              e)
            : Cl(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return Cm(e, t, a, r, o, s, n);
  if (i) {
    ((i = r.fallback), (a = t.mode), (s = e.child), (o = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Vt(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (i = Vt(o, i)) : ((i = fn(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Eo(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cl(e, t) {
  return (
    (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function As(e, t, n, r) {
  return (
    r !== null && fl(r),
    ir(t, e.child, null, n),
    (e = Cl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cm(e, t, n, r, s, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sa(Error(S(422)))), As(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Vi({ mode: "visible", children: r.children }, s, 0, null)),
          (i = fn(i, s, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ir(t, e.child, null, a),
          (t.child.memoizedState = Eo(a)),
          (t.memoizedState = bo),
          i);
  if (!(t.mode & 1)) return As(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (i = Error(S(419))),
      (r = Sa(i, r, void 0)),
      As(e, t, a, r)
    );
  }
  if (((o = (a & e.childLanes) !== 0), Ce || o)) {
    if (((r = de), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), xt(e, s), tt(r, e, s, -1)));
    }
    return (Il(), (r = Sa(Error(S(421)))), As(e, t, a, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mm.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ae = zt(s.nextSibling)),
      ($e = t),
      (Q = !0),
      (Ze = null),
      e !== null &&
        ((Me[Be++] = gt),
        (Me[Be++] = vt),
        (Me[Be++] = mn),
        (gt = e.id),
        (vt = e.overflow),
        (mn = t)),
      (t = Cl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), yo(e.return, t, n));
}
function ba(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Ch(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = X.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
        else if (e.tag === 19) Gu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((K(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && xi(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ba(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && xi(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        ba(t, !0, n, null, i);
        break;
      case "together":
        ba(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ti(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Vt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Nm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Eh(t), sr());
      break;
    case 5:
      Zd(t);
      break;
    case 1:
      Te(t.type) && mi(t);
      break;
    case 4:
      wl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (K(yi, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? jh(e, t, n)
            : (K(X, X.current & 1),
              (e = kt(e, t, n)),
              e !== null ? e.sibling : null);
      K(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ch(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        K(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Sh(e, t, n));
  }
  return kt(e, t, n);
}
var Nh, jo, Th, Rh;
Nh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
jo = function () {};
Th = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), cn(ct.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Ka(e, s)), (r = Ka(e, r)), (i = []));
        break;
      case "select":
        ((s = ee({}, s, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Qa(e, s)), (r = Qa(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fi);
    }
    Xa(n, r);
    var a;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var o = s[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((o = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== o && (l != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                o[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (qr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && G("scroll", e),
                    i || o === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Rh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Tm(e, t, n) {
  var r = t.pendingProps;
  switch ((hl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ye(t), null);
    case 1:
      return (Te(t.type) && pi(), ye(t), null);
    case 3:
      return (
        (r = t.stateNode),
        ar(),
        J(Ne),
        J(_e),
        xl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Os(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Ao(Ze), (Ze = null)))),
        jo(e, t),
        ye(t),
        null
      );
    case 5:
      _l(t);
      var s = cn(ns.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Th(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (ye(t), null);
        }
        if (((e = cn(ct.current)), Os(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[lt] = t), (r[es] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (G("cancel", r), G("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Pr.length; s++) G(Pr[s], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (G("error", r), G("load", r));
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              (ru(r, i), G("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                G("invalid", r));
              break;
            case "textarea":
              (iu(r, i), G("invalid", r));
          }
          (Xa(n, i), (s = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, o, e),
                    (s = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, o, e),
                    (s = ["children", "" + o]))
                : qr.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              (Ss(r), su(r, i, !0));
              break;
            case "textarea":
              (Ss(r), au(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = fi);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[lt] = t),
            (e[es] = r),
            Nh(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = Za(n, r)), n)) {
              case "dialog":
                (G("cancel", e), G("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (G("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Pr.length; s++) G(Pr[s], e);
                s = r;
                break;
              case "source":
                (G("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (G("error", e), G("load", e), (s = r));
                break;
              case "details":
                (G("toggle", e), (s = r));
                break;
              case "input":
                (ru(e, r), (s = Ka(e, r)), G("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ee({}, r, { value: void 0 })),
                  G("invalid", e));
                break;
              case "textarea":
                (iu(e, r), (s = Qa(e, r)), G("invalid", e));
                break;
              default:
                s = r;
            }
            (Xa(n, s), (o = s));
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var l = o[i];
                i === "style"
                  ? od(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && id(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Wr(e, l)
                        : typeof l == "number" && Wr(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (qr.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && G("scroll", e)
                          : l != null && Yo(e, i, l, a));
              }
            switch (n) {
              case "input":
                (Ss(e), su(e, r, !1));
                break;
              case "textarea":
                (Ss(e), au(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = fi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ye(t), null);
    case 6:
      if (e && t.stateNode != null) Rh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = cn(ns.current)), cn(ct.current), Os(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lt] = t),
            (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lt] = t),
            (t.stateNode = r));
      }
      return (ye(t), null);
    case 13:
      if (
        (J(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ae !== null && t.mode & 1 && !(t.flags & 128))
          (Gd(), sr(), (t.flags |= 98560), (i = !1));
        else if (((i = Os(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[lt] = t;
          } else
            (sr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ye(t), (i = !1));
        } else (Ze !== null && (Ao(Ze), (Ze = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ue === 0 && (ue = 3) : Il())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        ar(),
        jo(e, t),
        e === null && Xr(t.stateNode.containerInfo),
        ye(t),
        null
      );
    case 10:
      return (gl(t.type._context), ye(t), null);
    case 17:
      return (Te(t.type) && pi(), ye(t), null);
    case 19:
      if ((J(X), (i = t.memoizedState), i === null)) return (ye(t), null);
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Er(i, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = xi(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Er(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (K(X, (X.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > lr &&
            ((t.flags |= 128), (r = !0), Er(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xi(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Q)
            )
              return (ye(t), null);
          } else
            2 * se() - i.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = X.current),
          K(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Ol(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Rm(e, t) {
  switch ((hl(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && pi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ar(),
        J(Ne),
        J(_e),
        xl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (_l(t), null);
    case 13:
      if ((J(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        sr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (J(X), null);
    case 4:
      return (ar(), null);
    case 10:
      return (gl(t.type._context), null);
    case 22:
    case 23:
      return (Ol(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var $s = !1,
  we = !1,
  Pm = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function Co(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Ju = !1;
function Om(e, t) {
  if (((uo = ci), (e = $d()), cl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            u = 0,
            d = 0,
            g = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              g !== n || (s !== 0 && g.nodeType !== 3) || (o = a + s),
                g !== i || (r !== 0 && g.nodeType !== 3) || (l = a + r),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (v = g.firstChild) !== null;
            )
              ((f = g), (g = v));
            for (;;) {
              if (g === e) break t;
              if (
                (f === n && ++u === s && (o = a),
                f === i && ++d === r && (l = a),
                (v = g.nextSibling) !== null)
              )
                break;
              ((g = f), (f = g.parentNode));
            }
            g = v;
          }
          n = o === -1 || l === -1 ? null : { start: o, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (co = { focusedElem: e, selectionRange: n }, ci = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (R = e));
    else
      for (; R !== null; ) {
        t = R;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var _ = y.memoizedProps,
                    k = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Je(t.type, _),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (x) {
          ne(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (R = e));
          break;
        }
        R = t.return;
      }
  return ((y = Ju), (Ju = !1), y);
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Co(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Bi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function No(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ph(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ph(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[es], delete t[po], delete t[pm], delete t[mm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Oh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function To(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fi)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (To(e, t, n), e = e.sibling; e !== null; )
      (To(e, t, n), (e = e.sibling));
}
function Ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ro(e, t, n), e = e.sibling; e !== null; )
      (Ro(e, t, n), (e = e.sibling));
}
var pe = null,
  Ye = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) (Ih(e, t, n), (n = n.sibling));
}
function Ih(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(Ii, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Hn(n, t);
    case 6:
      var r = pe,
        s = Ye;
      ((pe = null),
        Ct(e, t, n),
        (pe = r),
        (Ye = s),
        pe !== null &&
          (Ye
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode)));
      break;
    case 18:
      pe !== null &&
        (Ye
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? va(e.parentNode, n)
              : e.nodeType === 1 && va(e, n),
            Jr(e))
          : va(pe, n.stateNode));
      break;
    case 4:
      ((r = pe),
        (s = Ye),
        (pe = n.stateNode.containerInfo),
        (Ye = !0),
        Ct(e, t, n),
        (pe = r),
        (Ye = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            a = i.destroy;
          ((i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Co(n, t, a),
            (s = s.next));
        } while (s !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          ne(n, t, o);
        }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Ct(e, t, n), (we = r))
        : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Pm()),
      t.forEach(function (r) {
        var s = Bm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((pe = o.stateNode), (Ye = !1));
              break e;
            case 3:
              ((pe = o.stateNode.containerInfo), (Ye = !0));
              break e;
            case 4:
              ((pe = o.stateNode.containerInfo), (Ye = !0));
              break e;
          }
          o = o.return;
        }
        if (pe === null) throw Error(S(160));
        (Ih(i, a, s), (pe = null), (Ye = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        ne(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Ah(t, e), (t = t.sibling));
}
function Ah(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), at(e), r & 4)) {
        try {
          (zr(3, e, e.return), Bi(3, e));
        } catch (_) {
          ne(e, e.return, _);
        }
        try {
          zr(5, e, e.return);
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 1:
      (Ke(t, e), at(e), r & 512 && n !== null && Hn(n, n.return));
      break;
    case 5:
      if (
        (Ke(t, e),
        at(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Wr(s, "");
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (o === "input" && i.type === "radio" && i.name != null && nd(s, i),
              Za(o, a));
            var u = Za(o, i);
            for (a = 0; a < l.length; a += 2) {
              var d = l[a],
                g = l[a + 1];
              d === "style"
                ? od(s, g)
                : d === "dangerouslySetInnerHTML"
                  ? id(s, g)
                  : d === "children"
                    ? Wr(s, g)
                    : Yo(s, d, g, u);
            }
            switch (o) {
              case "input":
                Ga(s, i);
                break;
              case "textarea":
                rd(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Jn(s, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jn(s, !!i.multiple, i.defaultValue, !0)
                      : Jn(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[es] = i;
          } catch (_) {
            ne(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (_) {
          ne(e, e.return, _);
        }
      break;
    case 4:
      (Ke(t, e), at(e));
      break;
    case 13:
      (Ke(t, e),
        at(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Rl = se())),
        r & 4 && Yu(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || d), Ke(t, e), (we = u)) : Ke(t, e),
        at(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (g = R = d; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, f, f.return);
                  break;
                case 1:
                  Hn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (_) {
                      ne(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Hn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Zu(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : Zu(g);
            }
            d = d.sibling;
          }
        e: for (d = null, g = e; ; ) {
          if (g.tag === 5) {
            if (d === null) {
              d = g;
              try {
                ((s = g.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = g.stateNode),
                      (l = g.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = ad("display", a))));
              } catch (_) {
                ne(e, e.return, _);
              }
            }
          } else if (g.tag === 6) {
            if (d === null)
              try {
                g.stateNode.nodeValue = u ? "" : g.memoizedProps;
              } catch (_) {
                ne(e, e.return, _);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            (d === g && (d = null), (g = g.return));
          }
          (d === g && (d = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (Ke(t, e), at(e), r & 4 && Yu(e));
      break;
    case 21:
      break;
    default:
      (Ke(t, e), at(e));
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Wr(s, ""), (r.flags &= -33));
          var i = Qu(e);
          Ro(e, i, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Qu(e);
          To(e, o, a);
          break;
        default:
          throw Error(S(161));
      }
    } catch (l) {
      ne(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Im(e, t, n) {
  ((R = e), $h(e));
}
function $h(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var s = R,
      i = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || $s;
      if (!a) {
        var o = s.alternate,
          l = (o !== null && o.memoizedState !== null) || we;
        o = $s;
        var u = we;
        if ((($s = a), (we = l) && !u))
          for (R = s; R !== null; )
            ((a = R),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? ec(s)
                : l !== null
                  ? ((l.return = a), (R = l))
                  : ec(s));
        for (; i !== null; ) ((R = i), $h(i), (i = i.sibling));
        ((R = s), ($s = o), (we = u));
      }
      Xu(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (R = i)) : Xu(e);
  }
}
function Xu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Bi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Lu(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lu(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var g = d.dehydrated;
                    g !== null && Jr(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        we || (t.flags & 512 && No(t));
      } catch (f) {
        ne(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (R = n));
      break;
    }
    R = t.return;
  }
}
function Zu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (R = n));
      break;
    }
    R = t.return;
  }
}
function ec(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bi(4, t);
          } catch (l) {
            ne(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ne(t, s, l);
            }
          }
          var i = t.return;
          try {
            No(t);
          } catch (l) {
            ne(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            No(t);
          } catch (l) {
            ne(t, a, l);
          }
      }
    } catch (l) {
      ne(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (R = o));
      break;
    }
    R = t.return;
  }
}
var Am = Math.ceil,
  bi = St.ReactCurrentDispatcher,
  Nl = St.ReactCurrentOwner,
  Ve = St.ReactCurrentBatchConfig,
  F = 0,
  de = null,
  ae = null,
  me = 0,
  Oe = 0,
  Kn = Kt(0),
  ue = 0,
  as = null,
  vn = 0,
  Fi = 0,
  Tl = 0,
  Mr = null,
  je = null,
  Rl = 0,
  lr = 1 / 0,
  ft = null,
  Ei = !1,
  Po = null,
  Bt = null,
  Ls = !1,
  $t = null,
  ji = 0,
  Br = 0,
  Oo = null,
  ni = -1,
  ri = 0;
function ke() {
  return F & 6 ? se() : ni !== -1 ? ni : (ni = se());
}
function Ft(e) {
  return e.mode & 1
    ? F & 2 && me !== 0
      ? me & -me
      : vm.transition !== null
        ? (ri === 0 && (ri = wd()), ri)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
          e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (Oo = null), Error(S(185)));
  (ms(e, n, r),
    (!(F & 2) || e !== de) &&
      (e === de && (!(F & 2) && (Fi |= n), ue === 4 && Ot(e, me)),
      Re(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((lr = se() + 500), Ui && Gt())));
}
function Re(e, t) {
  var n = e.callbackNode;
  vp(e, t);
  var r = ui(e, e === de ? me : 0);
  if (r === 0)
    (n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uu(n), t === 1))
      (e.tag === 0 ? gm(tc.bind(null, e)) : Wd(tc.bind(null, e)),
        hm(function () {
          !(F & 6) && Gt();
        }),
        (n = null));
    else {
      switch (_d(r)) {
        case 1:
          n = nl;
          break;
        case 4:
          n = vd;
          break;
        case 16:
          n = li;
          break;
        case 536870912:
          n = yd;
          break;
        default:
          n = li;
      }
      n = Vh(n, Lh.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Lh(e, t) {
  if (((ni = -1), (ri = 0), F & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = ui(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
  else {
    t = r;
    var s = F;
    F |= 2;
    var i = Uh();
    (de !== e || me !== t) && ((ft = null), (lr = se() + 500), hn(e, t));
    do
      try {
        Dm();
        break;
      } catch (o) {
        Dh(e, o);
      }
    while (!0);
    (ml(),
      (bi.current = i),
      (F = s),
      ae !== null ? (t = 0) : ((de = null), (me = 0), (t = ue)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = so(e)), s !== 0 && ((r = s), (t = Io(e, s)))), t === 1)
    )
      throw ((n = as), hn(e, 0), Ot(e, r), Re(e, se()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !$m(s) &&
          ((t = Ci(e, r)),
          t === 2 && ((i = so(e)), i !== 0 && ((r = i), (t = Io(e, i)))),
          t === 1))
      )
        throw ((n = as), hn(e, 0), Ot(e, r), Re(e, se()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          rn(e, je, ft);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = Rl + 500 - se()), 10 < t))
          ) {
            if (ui(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (ke(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = fo(rn.bind(null, e, je, ft), t);
            break;
          }
          rn(e, je, ft);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - et(r);
            ((i = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~i));
          }
          if (
            ((r = s),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Am(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fo(rn.bind(null, e, je, ft), r);
            break;
          }
          rn(e, je, ft);
          break;
        case 5:
          rn(e, je, ft);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (Re(e, se()), e.callbackNode === n ? Lh.bind(null, e) : null);
}
function Io(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = Ci(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && Ao(t)),
    e
  );
}
function Ao(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function $m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!nt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~Tl,
      t &= ~Fi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - et(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function tc(e) {
  if (F & 6) throw Error(S(327));
  er();
  var t = ui(e, 0);
  if (!(t & 1)) return (Re(e, se()), null);
  var n = Ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = so(e);
    r !== 0 && ((t = r), (n = Io(e, r)));
  }
  if (n === 1) throw ((n = as), hn(e, 0), Ot(e, t), Re(e, se()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, je, ft),
    Re(e, se()),
    null
  );
}
function Pl(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    ((F = n), F === 0 && ((lr = se() + 500), Ui && Gt()));
  }
}
function yn(e) {
  $t !== null && $t.tag === 0 && !(F & 6) && er();
  var t = F;
  F |= 1;
  var n = Ve.transition,
    r = W;
  try {
    if (((Ve.transition = null), (W = 1), e)) return e();
  } finally {
    ((W = r), (Ve.transition = n), (F = t), !(F & 6) && Gt());
  }
}
function Ol() {
  ((Oe = Kn.current), J(Kn));
}
function hn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dm(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((hl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && pi());
          break;
        case 3:
          (ar(), J(Ne), J(_e), xl());
          break;
        case 5:
          _l(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          J(X);
          break;
        case 19:
          J(X);
          break;
        case 10:
          gl(r.type._context);
          break;
        case 22:
        case 23:
          Ol();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ae = e = Vt(e.current, null)),
    (me = Oe = t),
    (ue = 0),
    (as = null),
    (Tl = Fi = vn = 0),
    (je = Mr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = s), (r.next = a));
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Dh(e, t) {
  do {
    var n = ae;
    try {
      if ((ml(), (Zs.current = Si), ki)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        ki = !1;
      }
      if (
        ((gn = 0),
        (ce = le = Z = null),
        (Ur = !1),
        (rs = 0),
        (Nl.current = null),
        n === null || n.return === null)
      ) {
        ((ue = 1), (as = t), (ae = null));
        break;
      }
      e: {
        var i = e,
          a = n.return,
          o = n,
          l = t;
        if (
          ((t = me),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = o,
            g = d.tag;
          if (!(d.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Fu(a);
          if (v !== null) {
            ((v.flags &= -257),
              Vu(v, a, o, i, t),
              v.mode & 1 && Bu(i, u, t),
              (t = v),
              (l = u));
            var y = t.updateQueue;
            if (y === null) {
              var _ = new Set();
              (_.add(l), (t.updateQueue = _));
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Bu(i, u, t), Il());
              break e;
            }
            l = Error(S(426));
          }
        } else if (Q && o.mode & 1) {
          var k = Fu(a);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              Vu(k, a, o, i, t),
              fl(or(l, o)));
            break e;
          }
        }
        ((i = l = or(l, o)),
          ue !== 4 && (ue = 2),
          Mr === null ? (Mr = [i]) : Mr.push(i),
          (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = _h(i, l, t);
              $u(i, m);
              break e;
            case 1:
              o = l;
              var h = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Bt === null || !Bt.has(p))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = xh(i, o, t);
                $u(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Mh(n);
    } catch (j) {
      ((t = j), ae === n && n !== null && (ae = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Uh() {
  var e = bi.current;
  return ((bi.current = Si), e === null ? Si : e);
}
function Il() {
  ((ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(vn & 268435455) && !(Fi & 268435455)) || Ot(de, me));
}
function Ci(e, t) {
  var n = F;
  F |= 2;
  var r = Uh();
  (de !== e || me !== t) && ((ft = null), hn(e, t));
  do
    try {
      Lm();
      break;
    } catch (s) {
      Dh(e, s);
    }
  while (!0);
  if ((ml(), (F = n), (bi.current = r), ae !== null)) throw Error(S(261));
  return ((de = null), (me = 0), ue);
}
function Lm() {
  for (; ae !== null; ) zh(ae);
}
function Dm() {
  for (; ae !== null && !lp(); ) zh(ae);
}
function zh(e) {
  var t = Fh(e.alternate, e, Oe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Mh(e) : (ae = t),
    (Nl.current = null));
}
function Mh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rm(n, t)), n !== null)) {
        ((n.flags &= 32767), (ae = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ue = 6), (ae = null));
        return;
      }
    } else if (((n = Tm(n, t, Oe)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function rn(e, t, n) {
  var r = W,
    s = Ve.transition;
  try {
    ((Ve.transition = null), (W = 1), Um(e, t, n, r));
  } finally {
    ((Ve.transition = s), (W = r));
  }
  return null;
}
function Um(e, t, n, r) {
  do er();
  while ($t !== null);
  if (F & 6) throw Error(S(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (yp(e, i),
    e === de && ((ae = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ls ||
      ((Ls = !0),
      Vh(li, function () {
        return (er(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Ve.transition), (Ve.transition = null));
    var a = W;
    W = 1;
    var o = F;
    ((F |= 4),
      (Nl.current = null),
      Om(e, n),
      Ah(n, e),
      sm(co),
      (ci = !!uo),
      (co = uo = null),
      (e.current = n),
      Im(n),
      up(),
      (F = o),
      (W = a),
      (Ve.transition = i));
  } else e.current = n;
  if (
    (Ls && ((Ls = !1), ($t = e), (ji = s)),
    (i = e.pendingLanes),
    i === 0 && (Bt = null),
    hp(n.stateNode),
    Re(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ei) throw ((Ei = !1), (e = Po), (Po = null), e);
  return (
    ji & 1 && e.tag !== 0 && er(),
    (i = e.pendingLanes),
    i & 1 ? (e === Oo ? Br++ : ((Br = 0), (Oo = e))) : (Br = 0),
    Gt(),
    null
  );
}
function er() {
  if ($t !== null) {
    var e = _d(ji),
      t = Ve.transition,
      n = W;
    try {
      if (((Ve.transition = null), (W = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (ji = 0), F & 6)) throw Error(S(331));
        var s = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var i = R,
            a = i.child;
          if (R.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (R = u; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, d, i);
                  }
                  var g = d.child;
                  if (g !== null) ((g.return = d), (R = g));
                  else
                    for (; R !== null; ) {
                      d = R;
                      var f = d.sibling,
                        v = d.return;
                      if ((Ph(d), d === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = v), (R = f));
                        break;
                      }
                      R = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var k = _.sibling;
                    ((_.sibling = null), (_ = k));
                  } while (_ !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (R = a));
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (R = m));
                break e;
              }
              R = i.return;
            }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          a = R;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) ((p.return = a), (R = p));
          else
            e: for (a = h; R !== null; ) {
              if (((o = R), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, o);
                  }
                } catch (j) {
                  ne(o, o.return, j);
                }
              if (o === a) {
                R = null;
                break e;
              }
              var x = o.sibling;
              if (x !== null) {
                ((x.return = o.return), (R = x));
                break e;
              }
              R = o.return;
            }
        }
        if (
          ((F = s), Gt(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(Ii, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((W = n), (Ve.transition = t));
    }
  }
  return !1;
}
function nc(e, t, n) {
  ((t = or(n, t)),
    (t = _h(e, t, 1)),
    (e = Mt(e, t, 1)),
    (t = ke()),
    e !== null && (ms(e, 1, t), Re(e, t)));
}
function ne(e, t, n) {
  if (e.tag === 3) nc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Bt === null || !Bt.has(r)))
        ) {
          ((e = or(n, e)),
            (e = xh(t, e, 1)),
            (t = Mt(t, e, 1)),
            (e = ke()),
            t !== null && (ms(t, 1, e), Re(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function zm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ue === 4 || (ue === 3 && (me & 130023424) === me && 500 > se() - Rl)
        ? hn(e, 0)
        : (Tl |= n)),
    Re(e, t));
}
function Bh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = js), (js <<= 1), !(js & 130023424) && (js = 4194304))
      : (t = 1));
  var n = ke();
  ((e = xt(e, t)), e !== null && (ms(e, t, n), Re(e, n)));
}
function Mm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Bh(e, n));
}
function Bm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  (r !== null && r.delete(t), Bh(e, n));
}
var Fh;
Fh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ce = !1), Nm(e, t, n));
      Ce = !!(e.flags & 131072);
    }
  else ((Ce = !1), Q && t.flags & 1048576 && Hd(t, vi, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ti(e, t), (e = t.pendingProps));
      var s = rr(t, _e.current);
      (Zn(t, n), (s = Sl(null, t, r, e, s, n)));
      var i = bl();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((i = !0), mi(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            yl(t),
            (s.updater = Mi),
            (t.stateNode = s),
            (s._reactInternals = t),
            _o(t, r, e, n),
            (t = So(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && dl(t), xe(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ti(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Vm(r)),
          (e = Je(r, e)),
          s)
        ) {
          case 0:
            t = ko(null, t, r, e, n);
            break e;
          case 1:
            t = Hu(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Je(r, s)),
        ko(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Je(r, s)),
        Hu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Eh(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Xd(e, t),
          _i(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = or(Error(S(423)), t)), (t = Ku(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = or(Error(S(424)), t)), (t = Ku(e, t, r, n, s)));
            break e;
          } else
            for (
              Ae = zt(t.stateNode.containerInfo.firstChild),
                $e = t,
                Q = !0,
                Ze = null,
                n = Qd(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((sr(), r === s)) {
            t = kt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zd(t),
        e === null && vo(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = s.children),
        ho(r, s) ? (a = null) : i !== null && ho(r, i) && (t.flags |= 32),
        bh(e, t),
        xe(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && vo(t), null);
    case 13:
      return jh(e, t, n);
    case 4:
      return (
        wl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Je(r, s)),
        qu(e, t, r, s, n)
      );
    case 7:
      return (xe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (xe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (xe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (a = s.value),
          K(yi, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (nt(i.value, a)) {
            if (i.children === s.children && !Ne.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = yt(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      yo(i.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(S(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  yo(a, n, t),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (xe(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (s = qe(s)),
        (r = r(s)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Je(r, t.pendingProps)),
        (s = Je(r.type, s)),
        Wu(e, t, r, s, n)
      );
    case 15:
      return kh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Je(r, s)),
        ti(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), mi(t)) : (e = !1),
        Zn(t, n),
        wh(t, r, s),
        _o(t, r, s, n),
        So(null, t, r, !0, e, n)
      );
    case 19:
      return Ch(e, t, n);
    case 22:
      return Sh(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Vh(e, t) {
  return gd(e, t);
}
function Fm(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Fe(e, t, n, r) {
  return new Fm(e, t, n, r);
}
function Al(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Vm(e) {
  if (typeof e == "function") return Al(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zo)) return 11;
    if (e === el) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function si(e, t, n, r, s, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Al(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Dn:
        return fn(n.children, s, i, t);
      case Xo:
        ((a = 8), (s |= 8));
        break;
      case Va:
        return (
          (e = Fe(12, n, t, s | 2)),
          (e.elementType = Va),
          (e.lanes = i),
          e
        );
      case qa:
        return ((e = Fe(13, n, t, s)), (e.elementType = qa), (e.lanes = i), e);
      case Wa:
        return ((e = Fe(19, n, t, s)), (e.elementType = Wa), (e.lanes = i), e);
      case Zc:
        return Vi(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yc:
              a = 10;
              break e;
            case Xc:
              a = 9;
              break e;
            case Zo:
              a = 11;
              break e;
            case el:
              a = 14;
              break e;
            case Nt:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(a, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function fn(e, t, n, r) {
  return ((e = Fe(7, e, r, t)), (e.lanes = n), e);
}
function Vi(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Zc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ea(e, t, n) {
  return ((e = Fe(6, e, null, t)), (e.lanes = n), e);
}
function ja(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qm(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = aa(0)),
    (this.expirationTimes = aa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = aa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function $l(e, t, n, r, s, i, a, o, l) {
  return (
    (e = new qm(e, t, n, o, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Fe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yl(i),
    e
  );
}
function Wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qh(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return qd(e, n, t);
  }
  return t;
}
function Wh(e, t, n, r, s, i, a, o, l) {
  return (
    (e = $l(n, r, !0, e, s, i, a, o, l)),
    (e.context = qh(null)),
    (n = e.current),
    (r = ke()),
    (s = Ft(n)),
    (i = yt(r, s)),
    (i.callback = t ?? null),
    Mt(n, i, s),
    (e.current.lanes = s),
    ms(e, s, r),
    Re(e, r),
    e
  );
}
function qi(e, t, n, r) {
  var s = t.current,
    i = ke(),
    a = Ft(s);
  return (
    (n = qh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mt(s, t, a)),
    e !== null && (tt(e, s, a, i), Xs(e, s, a)),
    a
  );
}
function Ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ll(e, t) {
  (rc(e, t), (e = e.alternate) && rc(e, t));
}
function Hm() {
  return null;
}
var Hh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dl(e) {
  this._internalRoot = e;
}
Wi.prototype.render = Dl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  qi(e, t, null, null);
};
Wi.prototype.unmount = Dl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (yn(function () {
      qi(null, e, null, null);
    }),
      (t[_t] = null));
  }
};
function Wi(e) {
  this._internalRoot = e;
}
Wi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    (Pt.splice(n, 0, e), n === 0 && Ed(e));
  }
};
function Ul(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sc() {}
function Km(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ni(a);
        i.call(u);
      };
    }
    var a = Wh(t, r, e, 0, null, !1, !1, "", sc);
    return (
      (e._reactRootContainer = a),
      (e[_t] = a.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = Ni(l);
      o.call(u);
    };
  }
  var l = $l(e, 0, !1, null, null, !1, !1, "", sc);
  return (
    (e._reactRootContainer = l),
    (e[_t] = l.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      qi(t, l, n, r);
    }),
    l
  );
}
function Ki(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var o = s;
      s = function () {
        var l = Ni(a);
        o.call(l);
      };
    }
    qi(t, a, e, s);
  } else a = Km(n, t, e, s, r);
  return Ni(a);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (rl(t, n | 1), Re(t, se()), !(F & 6) && ((lr = se() + 500), Gt()));
      }
      break;
    case 13:
      (yn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var s = ke();
          tt(r, e, 1, s);
        }
      }),
        Ll(e, 1));
  }
};
sl = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = ke();
      tt(t, e, 134217728, n);
    }
    Ll(e, 134217728);
  }
};
kd = function (e) {
  if (e.tag === 13) {
    var t = Ft(e),
      n = xt(e, t);
    if (n !== null) {
      var r = ke();
      tt(n, e, t, r);
    }
    Ll(e, t);
  }
};
Sd = function () {
  return W;
};
bd = function (e, t) {
  var n = W;
  try {
    return ((W = e), t());
  } finally {
    W = n;
  }
};
to = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ga(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Di(r);
            if (!s) throw Error(S(90));
            (td(r), Ga(r, s));
          }
        }
      }
      break;
    case "textarea":
      rd(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Jn(e, !!n.multiple, t, !1));
  }
};
cd = Pl;
dd = yn;
var Gm = { usingClientEntryPoint: !1, Events: [vs, Bn, Di, ld, ud, Pl] },
  jr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jm = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = pd(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || Hm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ds.isDisabled && Ds.supportsFiber)
    try {
      ((Ii = Ds.inject(Jm)), (ut = Ds));
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ul(t)) throw Error(S(200));
  return Wm(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!Ul(e)) throw Error(S(299));
  var n = !1,
    r = "",
    s = Hh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = $l(e, 1, !1, null, null, n, !1, r, s)),
    (e[_t] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new Dl(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return ((e = pd(t)), (e = e === null ? null : e.stateNode), e);
};
De.flushSync = function (e) {
  return yn(e);
};
De.hydrate = function (e, t, n) {
  if (!Hi(t)) throw Error(S(200));
  return Ki(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!Ul(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = Hh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Wh(t, null, e, 1, n ?? null, s, !1, i, a)),
    (e[_t] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Wi(t);
};
De.render = function (e, t, n) {
  if (!Hi(t)) throw Error(S(200));
  return Ki(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!Hi(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (yn(function () {
        Ki(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[_t] = null));
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Pl;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hi(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ki(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Kh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh);
    } catch (e) {
      console.error(e);
    }
}
(Kh(), (Kc.exports = De));
var Qm = Kc.exports,
  ic = Qm;
((Ba.createRoot = ic.createRoot), (Ba.hydrateRoot = ic.hydrateRoot));
var Ym = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Xm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Zm = (e, t) => {
    const n = D.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          children: o,
          ...l
        },
        u,
      ) =>
        D.createElement(
          "svg",
          {
            ref: u,
            ...Ym,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: a ? (Number(i) * 24) / Number(s) : i,
            className: `lucide lucide-${Xm(e)}`,
            ...l,
          },
          [
            ...t.map(([d, g]) => D.createElement(d, g)),
            ...((Array.isArray(o) ? o : [o]) || []),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
var q = Zm;
const Ca = q("Activity", [
    ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
  ]),
  ac = q("AlertCircle", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ]),
  eg = q("ArrowDownRight", [
    ["path", { d: "m7 7 10 10", key: "1fmybs" }],
    ["path", { d: "M17 7v10H7", key: "6fjiku" }],
  ]),
  oc = q("ArrowUpRight", [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ]),
  Us = q("CheckCircle2", [
    [
      "path",
      {
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
        key: "14v8dr",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]),
  tg = q("Check", [["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]]),
  Na = q("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ]),
  ng = q("CreditCard", [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ]),
  rg = q("Database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ]),
  sg = q("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ]),
  ig = q("Eye", [
    [
      "path",
      { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  Ta = q("FileText", [
    [
      "path",
      {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        key: "1nnpy2",
      },
    ],
    ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
    ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
    ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
    ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }],
  ]),
  ag = q("Layers", [
    ["polygon", { points: "12 2 2 7 12 12 22 7 12 2", key: "1b0ttc" }],
    ["polyline", { points: "2 17 12 22 22 17", key: "imjtdl" }],
    ["polyline", { points: "2 12 12 17 22 12", key: "5dexcv" }],
  ]),
  og = q("LayoutDashboard", [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ]),
  Ra = q("Loader2", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]),
  lg = q("Lock", [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ]),
  ug = q("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ]),
  cg = q("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ]),
  dg = q("Palette", [
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", key: "1xcu5" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", key: "736e4u" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", key: "clrty" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", key: "1s4xz9" }],
    [
      "path",
      {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8",
      },
    ],
  ]),
  hg = q("PenLine", [
    ["path", { d: "M12 20h9", key: "t2du7b" }],
    [
      "path",
      { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" },
    ],
  ]),
  lc = q("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]),
  uc = q("Printer", [
    ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd",
      },
    ],
    ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }],
  ]),
  fg = q("RefreshCw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ]),
  pg = q("Save", [
    [
      "path",
      {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        key: "1owoqh",
      },
    ],
    ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
    ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
  ]),
  mg = q("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  gg = q("ShieldCheck", [
    [
      "path",
      { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", key: "3xmgem" },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]),
  vg = q("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]),
  yg = q("TrendingUp", [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
  ]),
  wg = q("Unlock", [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
  ]),
  _g = q("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  Pa = q("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  cc = q("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]);
function Gi(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function xg(e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function o(d) {
      try {
        u(r.next(d));
      } catch (g) {
        a(g);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (g) {
        a(g);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
const kg = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class zl extends Error {
  constructor(t, n = "FunctionsError", r) {
    (super(t), (this.name = n), (this.context = r));
  }
}
class Sg extends zl {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t,
    );
  }
}
class dc extends zl {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class hc extends zl {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t,
    );
  }
}
var $o;
(function (e) {
  ((e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2"));
})($o || ($o = {}));
class bg {
  constructor(t, { headers: n = {}, customFetch: r, region: s = $o.Any } = {}) {
    ((this.url = t),
      (this.headers = n),
      (this.region = s),
      (this.fetch = kg(r)));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return xg(this, arguments, void 0, function* (n, r = {}) {
      var s;
      let i, a;
      try {
        const { headers: o, method: l, body: u, signal: d, timeout: g } = r;
        let f = {},
          { region: v } = r;
        v || (v = this.region);
        const y = new URL(`${this.url}/${n}`);
        v &&
          v !== "any" &&
          ((f["x-region"] = v), y.searchParams.set("forceFunctionRegion", v));
        let _;
        u &&
        ((o && !Object.prototype.hasOwnProperty.call(o, "Content-Type")) || !o)
          ? (typeof Blob < "u" && u instanceof Blob) || u instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (_ = u))
            : typeof u == "string"
              ? ((f["Content-Type"] = "text/plain"), (_ = u))
              : typeof FormData < "u" && u instanceof FormData
                ? (_ = u)
                : ((f["Content-Type"] = "application/json"),
                  (_ = JSON.stringify(u)))
          : u &&
              typeof u != "string" &&
              !(typeof Blob < "u" && u instanceof Blob) &&
              !(u instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && u instanceof FormData)
            ? (_ = JSON.stringify(u))
            : (_ = u);
        let k = d;
        g &&
          ((a = new AbortController()),
          (i = setTimeout(() => a.abort(), g)),
          d
            ? ((k = a.signal), d.addEventListener("abort", () => a.abort()))
            : (k = a.signal));
        const m = yield this.fetch(y.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              o,
            ),
            body: _,
            signal: k,
          }).catch((j) => {
            throw new Sg(j);
          }),
          h = m.headers.get("x-relay-error");
        if (h && h === "true") throw new dc(m);
        if (!m.ok) throw new hc(m);
        let p = (
            (s = m.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          x;
        return (
          p === "application/json"
            ? (x = yield m.json())
            : p === "application/octet-stream" || p === "application/pdf"
              ? (x = yield m.blob())
              : p === "text/event-stream"
                ? (x = m)
                : p === "multipart/form-data"
                  ? (x = yield m.formData())
                  : (x = yield m.text()),
          { data: x, error: null, response: m }
        );
      } catch (o) {
        return {
          data: null,
          error: o,
          response: o instanceof hc || o instanceof dc ? o.context : void 0,
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
var Eg = class extends Error {
    constructor(e) {
      (super(e.message),
        (this.name = "PostgrestError"),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code));
    }
  },
  jg = class {
    constructor(e) {
      var t, n, r;
      ((this.shouldThrowOnError = !1),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError =
          (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle =
          (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1),
        (this.urlLengthLimit =
          (r = e.urlLengthLimit) !== null && r !== void 0 ? r : 8e3),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    then(e, t) {
      var n = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const r = this.fetch;
      let s = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (i) => {
        let a = null,
          o = null,
          l = null,
          u = i.status,
          d = i.statusText;
        if (i.ok) {
          var g, f;
          if (n.method !== "HEAD") {
            var v;
            const m = await i.text();
            m === "" ||
              (n.headers.get("Accept") === "text/csv" ||
              (n.headers.get("Accept") &&
                !((v = n.headers.get("Accept")) === null || v === void 0) &&
                v.includes("application/vnd.pgrst.plan+text"))
                ? (o = m)
                : (o = JSON.parse(m)));
          }
          const _ =
              (g = n.headers.get("Prefer")) === null || g === void 0
                ? void 0
                : g.match(/count=(exact|planned|estimated)/),
            k =
              (f = i.headers.get("content-range")) === null || f === void 0
                ? void 0
                : f.split("/");
          (_ && k && k.length > 1 && (l = parseInt(k[1])),
            n.isMaybeSingle &&
              n.method === "GET" &&
              Array.isArray(o) &&
              (o.length > 1
                ? ((a = {
                    code: "PGRST116",
                    details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (o = null),
                  (l = null),
                  (u = 406),
                  (d = "Not Acceptable"))
                : o.length === 1
                  ? (o = o[0])
                  : (o = null)));
        } else {
          var y;
          const _ = await i.text();
          try {
            ((a = JSON.parse(_)),
              Array.isArray(a) &&
                i.status === 404 &&
                ((o = []), (a = null), (u = 200), (d = "OK")));
          } catch {
            i.status === 404 && _ === ""
              ? ((u = 204), (d = "No Content"))
              : (a = { message: _ });
          }
          if (
            (a &&
              n.isMaybeSingle &&
              !(a == null || (y = a.details) === null || y === void 0) &&
              y.includes("0 rows") &&
              ((a = null), (u = 200), (d = "OK")),
            a && n.shouldThrowOnError)
          )
            throw new Eg(a);
        }
        return { error: a, data: o, count: l, status: u, statusText: d };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((i) => {
            var a;
            let o = "",
              l = "",
              u = "";
            const d = i == null ? void 0 : i.cause;
            if (d) {
              var g, f, v, y;
              const m =
                  (g = d == null ? void 0 : d.message) !== null && g !== void 0
                    ? g
                    : "",
                h =
                  (f = d == null ? void 0 : d.code) !== null && f !== void 0
                    ? f
                    : "";
              ((o = `${(v = i == null ? void 0 : i.name) !== null && v !== void 0 ? v : "FetchError"}: ${i == null ? void 0 : i.message}`),
                (o += `

Caused by: ${(y = d == null ? void 0 : d.name) !== null && y !== void 0 ? y : "Error"}: ${m}`),
                h && (o += ` (${h})`),
                d != null &&
                  d.stack &&
                  (o += `
${d.stack}`));
            } else {
              var _;
              o =
                (_ = i == null ? void 0 : i.stack) !== null && _ !== void 0
                  ? _
                  : "";
            }
            const k = this.url.toString().length;
            return (
              (i == null ? void 0 : i.name) === "AbortError" ||
              (i == null ? void 0 : i.code) === "ABORT_ERR"
                ? ((u = ""),
                  (l = "Request was aborted (timeout or manual cancellation)"),
                  k > this.urlLengthLimit &&
                    (l += `. Note: Your request URL is ${k} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((d == null ? void 0 : d.name) === "HeadersOverflowError" ||
                    (d == null ? void 0 : d.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((u = ""),
                  (l = "HTTP headers exceeded server limits (typically 16KB)"),
                  k > this.urlLengthLimit &&
                    (l += `. Your request URL is ${k} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${(a = i == null ? void 0 : i.name) !== null && a !== void 0 ? a : "FetchError"}: ${i == null ? void 0 : i.message}`,
                  details: o,
                  hint: l,
                  code: u,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        s.then(e, t)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  Cg = class extends jg {
    select(e) {
      let t = !1;
      const n = (e ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !t ? "" : (r === '"' && (t = !t), r)))
        .join("");
      return (
        this.url.searchParams.set("select", n),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: s = r,
      } = {},
    ) {
      const i = s ? `${s}.order` : "order",
        a = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
      const r = typeof n > "u" ? "limit" : `${n}.limit`;
      return (this.url.searchParams.set(r, `${e}`), this);
    }
    range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = typeof r > "u" ? "offset" : `${r}.offset`,
        i = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(i, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var a;
      const o = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          n ? "settings" : null,
          r ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (a = this.headers.get("Accept")) !== null && a !== void 0
            ? a
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`,
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const fc = new RegExp("[,()]");
var In = class extends Cg {
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      const n = Array.from(new Set(t))
        .map((r) => (typeof r == "string" && fc.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(e, `in.(${n})`), this);
    }
    notIn(e, t) {
      const n = Array.from(new Set(t))
        .map((r) => (typeof r == "string" && fc.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(e, `not.in.(${n})`), this);
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: n, type: r } = {}) {
      let s = "";
      r === "plain"
        ? (s = "pl")
        : r === "phrase"
          ? (s = "ph")
          : r === "websearch" && (s = "w");
      const i = n === void 0 ? "" : `(${n})`;
      return (this.url.searchParams.append(e, `${s}fts${i}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e).forEach(([t, n]) => {
          this.url.searchParams.append(t, `eq.${n}`);
        }),
        this
      );
    }
    not(e, t, n) {
      return (this.url.searchParams.append(e, `not.${t}.${n}`), this);
    }
    or(e, { foreignTable: t, referencedTable: n = t } = {}) {
      const r = n ? `${n}.or` : "or";
      return (this.url.searchParams.append(r, `(${e})`), this);
    }
    filter(e, t, n) {
      return (this.url.searchParams.append(e, `${t}.${n}`), this);
    }
  },
  Ng = class {
    constructor(
      e,
      { headers: t = {}, schema: n, fetch: r, urlLengthLimit: s = 8e3 },
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = s));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      const { head: n = !1, count: r } = t ?? {},
        s = n ? "HEAD" : "GET";
      let i = !1;
      const a = (e ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)))
          .join(""),
        { url: o, headers: l } = this.cloneRequestState();
      return (
        o.searchParams.set("select", a),
        r && l.append("Prefer", `count=${r}`),
        new In({
          method: s,
          url: o,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(e, { count: t, defaultToNull: n = !0 } = {}) {
      var r;
      const s = "POST",
        { url: i, headers: a } = this.cloneRequestState();
      if (
        (t && a.append("Prefer", `count=${t}`),
        n || a.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const o = e.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (o.length > 0) {
          const l = [...new Set(o)].map((u) => `"${u}"`);
          i.searchParams.set("columns", l.join(","));
        }
      }
      return new In({
        method: s,
        url: i,
        headers: a,
        schema: this.schema,
        body: e,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: s = !0,
      } = {},
    ) {
      var i;
      const a = "POST",
        { url: o, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && o.searchParams.set("on_conflict", t),
        r && l.append("Prefer", `count=${r}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const u = e.reduce((d, g) => d.concat(Object.keys(g)), []);
        if (u.length > 0) {
          const d = [...new Set(u)].map((g) => `"${g}"`);
          o.searchParams.set("columns", d.join(","));
        }
      }
      return new In({
        method: a,
        url: o,
        headers: l,
        schema: this.schema,
        body: e,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(e, { count: t } = {}) {
      var n;
      const r = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        t && i.append("Prefer", `count=${t}`),
        new In({
          method: r,
          url: s,
          headers: i,
          schema: this.schema,
          body: e,
          fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const n = "DELETE",
        { url: r, headers: s } = this.cloneRequestState();
      return (
        e && s.append("Prefer", `count=${e}`),
        new In({
          method: n,
          url: r,
          headers: s,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function os(e) {
  "@babel/helpers - typeof";
  return (
    (os =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    os(e)
  );
}
function Tg(e, t) {
  if (os(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (os(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rg(e) {
  var t = Tg(e, "string");
  return os(t) == "symbol" ? t : t + "";
}
function Pg(e, t, n) {
  return (
    (t = Rg(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function pc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pc(Object(n), !0).forEach(function (r) {
          Pg(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var Og = class Gh {
  constructor(
    t,
    {
      headers: n = {},
      schema: r,
      fetch: s,
      timeout: i,
      urlLengthLimit: a = 8e3,
    } = {},
  ) {
    ((this.url = t),
      (this.headers = new Headers(n)),
      (this.schemaName = r),
      (this.urlLengthLimit = a));
    const o = s ?? globalThis.fetch;
    i !== void 0 && i > 0
      ? (this.fetch = (l, u) => {
          const d = new AbortController(),
            g = setTimeout(() => d.abort(), i),
            f = u == null ? void 0 : u.signal;
          if (f) {
            if (f.aborted) return (clearTimeout(g), o(l, u));
            const v = () => {
              (clearTimeout(g), d.abort());
            };
            return (
              f.addEventListener("abort", v, { once: !0 }),
              o(l, zs(zs({}, u), {}, { signal: d.signal })).finally(() => {
                (clearTimeout(g), f.removeEventListener("abort", v));
              })
            );
          }
          return o(l, zs(zs({}, u), {}, { signal: d.signal })).finally(() =>
            clearTimeout(g),
          );
        })
      : (this.fetch = o);
  }
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new Ng(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(t) {
    return new Gh(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(t, n = {}, { head: r = !1, get: s = !1, count: i } = {}) {
    var a;
    let o;
    const l = new URL(`${this.url}/rpc/${t}`);
    let u;
    const d = (v) =>
        v !== null && typeof v == "object" && (!Array.isArray(v) || v.some(d)),
      g = r && Object.values(n).some(d);
    g
      ? ((o = "POST"), (u = n))
      : r || s
        ? ((o = r ? "HEAD" : "GET"),
          Object.entries(n)
            .filter(([v, y]) => y !== void 0)
            .map(([v, y]) => [
              v,
              Array.isArray(y) ? `{${y.join(",")}}` : `${y}`,
            ])
            .forEach(([v, y]) => {
              l.searchParams.append(v, y);
            }))
        : ((o = "POST"), (u = n));
    const f = new Headers(this.headers);
    return (
      g
        ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
        : i && f.set("Prefer", `count=${i}`),
      new In({
        method: o,
        url: l,
        headers: f,
        schema: this.schemaName,
        body: u,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class Ig {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const n = globalThis.process;
    if (n) {
      const r = n.versions;
      if (r && r.node) {
        const s = r.node,
          i = parseInt(s.replace(/^v/, "").split(".")[0]);
        return i >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${i} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${i} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor) return t.constructor;
    let n = t.error || "WebSocket not supported in this environment.";
    throw (
      t.workaround &&
        (n += `

Suggested solution: ${t.workaround}`),
      new Error(n)
    );
  }
  static createWebSocket(t, n) {
    const r = this.getWebSocketConstructor();
    return new r(t, n);
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const Ag = "2.95.3",
  $g = `realtime-js/${Ag}`,
  Lg = "1.0.0",
  Jh = "2.0.0",
  mc = Jh,
  Lo = 1e4,
  Dg = 1e3,
  Ug = 100;
var Rt;
(function (e) {
  ((e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed"));
})(Rt || (Rt = {}));
var oe;
(function (e) {
  ((e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving"));
})(oe || (oe = {}));
var Xe;
(function (e) {
  ((e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token"));
})(Xe || (Xe = {}));
var Do;
(function (e) {
  e.websocket = "websocket";
})(Do || (Do = {}));
var an;
(function (e) {
  ((e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed"));
})(an || (an = {}));
class zg {
  constructor(t) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []));
  }
  encode(t, n) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return n(this._binaryEncodeUserBroadcastPush(t));
    let r = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return n(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var n;
    return this._isArrayBuffer(
      (n = t.payload) === null || n === void 0 ? void 0 : n.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var n, r;
    const s =
      (r = (n = t.payload) === null || n === void 0 ? void 0 : n.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(t) {
    var n, r;
    const s =
        (r = (n = t.payload) === null || n === void 0 ? void 0 : n.payload) !==
          null && r !== void 0
          ? r
          : {},
      a = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, a);
  }
  _encodeUserBroadcastPush(t, n, r) {
    var s, i;
    const a = t.topic,
      o = (s = t.ref) !== null && s !== void 0 ? s : "",
      l = (i = t.join_ref) !== null && i !== void 0 ? i : "",
      u = t.payload.event,
      d = this.allowedMetadataKeys
        ? this._pick(t.payload, this.allowedMetadataKeys)
        : {},
      g = Object.keys(d).length === 0 ? "" : JSON.stringify(d);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`ref length ${o.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`topic length ${a.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (g.length > 255)
      throw new Error(`metadata length ${g.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        o.length +
        a.length +
        u.length +
        g.length,
      v = new ArrayBuffer(this.HEADER_LENGTH + f);
    let y = new DataView(v),
      _ = 0;
    (y.setUint8(_++, this.KINDS.userBroadcastPush),
      y.setUint8(_++, l.length),
      y.setUint8(_++, o.length),
      y.setUint8(_++, a.length),
      y.setUint8(_++, u.length),
      y.setUint8(_++, g.length),
      y.setUint8(_++, n),
      Array.from(l, (m) => y.setUint8(_++, m.charCodeAt(0))),
      Array.from(o, (m) => y.setUint8(_++, m.charCodeAt(0))),
      Array.from(a, (m) => y.setUint8(_++, m.charCodeAt(0))),
      Array.from(u, (m) => y.setUint8(_++, m.charCodeAt(0))),
      Array.from(g, (m) => y.setUint8(_++, m.charCodeAt(0))));
    var k = new Uint8Array(v.byteLength + r.byteLength);
    return (
      k.set(new Uint8Array(v), 0),
      k.set(new Uint8Array(r), v.byteLength),
      k.buffer
    );
  }
  decode(t, n) {
    if (this._isArrayBuffer(t)) {
      let r = this._binaryDecode(t);
      return n(r);
    }
    if (typeof t == "string") {
      const r = JSON.parse(t),
        [s, i, a, o, l] = r;
      return n({ join_ref: s, ref: i, topic: a, event: o, payload: l });
    }
    return n({});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = n.getUint8(0),
      s = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, n, s);
    }
  }
  _decodeUserBroadcast(t, n, r) {
    const s = n.getUint8(1),
      i = n.getUint8(2),
      a = n.getUint8(3),
      o = n.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = r.decode(t.slice(l, l + s));
    l = l + s;
    const d = r.decode(t.slice(l, l + i));
    l = l + i;
    const g = r.decode(t.slice(l, l + a));
    l = l + a;
    const f = t.slice(l, t.byteLength),
      v = o === this.JSON_ENCODING ? JSON.parse(r.decode(f)) : f,
      y = { type: this.BROADCAST_EVENT, event: d, payload: v };
    return (
      a > 0 && (y.meta = JSON.parse(g)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: y,
      }
    );
  }
  _isArrayBuffer(t) {
    var n;
    return (
      t instanceof ArrayBuffer ||
      ((n = t == null ? void 0 : t.constructor) === null || n === void 0
        ? void 0
        : n.name) === "ArrayBuffer"
    );
  }
  _pick(t, n) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([r]) => n.includes(r)));
  }
}
class Qh {
  constructor(t, n) {
    ((this.callback = t),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = n));
  }
  reset() {
    ((this.tries = 0), clearTimeout(this.timer), (this.timer = void 0));
  }
  scheduleTimeout() {
    (clearTimeout(this.timer),
      (this.timer = setTimeout(
        () => {
          ((this.tries = this.tries + 1), this.callback());
        },
        this.timerCalc(this.tries + 1),
      )));
  }
}
var H;
(function (e) {
  ((e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange"));
})(H || (H = {}));
const gc = (e, t, n = {}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return t
      ? Object.keys(t).reduce((i, a) => ((i[a] = Mg(a, e, t, s)), i), {})
      : {};
  },
  Mg = (e, t, n, r) => {
    const s = t.find((o) => o.name === e),
      i = s == null ? void 0 : s.type,
      a = n[e];
    return i && !r.includes(i) ? Yh(i, a) : Uo(a);
  },
  Yh = (e, t) => {
    if (e.charAt(0) === "_") {
      const n = e.slice(1, e.length);
      return qg(t, n);
    }
    switch (e) {
      case H.bool:
        return Bg(t);
      case H.float4:
      case H.float8:
      case H.int2:
      case H.int4:
      case H.int8:
      case H.numeric:
      case H.oid:
        return Fg(t);
      case H.json:
      case H.jsonb:
        return Vg(t);
      case H.timestamp:
        return Wg(t);
      case H.abstime:
      case H.date:
      case H.daterange:
      case H.int4range:
      case H.int8range:
      case H.money:
      case H.reltime:
      case H.text:
      case H.time:
      case H.timestamptz:
      case H.timetz:
      case H.tsrange:
      case H.tstzrange:
        return Uo(t);
      default:
        return Uo(t);
    }
  },
  Uo = (e) => e,
  Bg = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  Fg = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  Vg = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  qg = (e, t) => {
    if (typeof e != "string") return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === "{" && r === "}") {
      let i;
      const a = e.slice(1, n);
      try {
        i = JSON.parse("[" + a + "]");
      } catch {
        i = a ? a.split(",") : [];
      }
      return i.map((o) => Yh(t, o));
    }
    return e;
  },
  Wg = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  Xh = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
class Oa {
  constructor(t, n, r = {}, s = Lo) {
    ((this.channel = t),
      (this.event = n),
      (this.payload = r),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null));
  }
  resend(t) {
    ((this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send());
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, n) {
    var r;
    return (
      this._hasReceived(t) &&
        n(
          (r = this.receivedResp) === null || r === void 0
            ? void 0
            : r.response,
        ),
      this.recHooks.push({ status: t, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const t = (n) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n));
    };
    (this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(t, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: n });
  }
  destroy() {
    (this._cancelRefEvent(), this._cancelTimeout());
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    (clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0));
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var vc;
(function (e) {
  ((e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave"));
})(vc || (vc = {}));
class Fr {
  constructor(t, n) {
    ((this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = {
        onJoin: () => {},
        onLeave: () => {},
        onSync: () => {},
      }));
    const r = (n == null ? void 0 : n.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(r.state, {}, (s) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = Fr.syncState(this.state, s, i, a)),
        this.pendingDiffs.forEach((l) => {
          this.state = Fr.syncDiff(this.state, l, i, a);
        }),
        (this.pendingDiffs = []),
        o());
    }),
      this.channel._on(r.diff, {}, (s) => {
        const { onJoin: i, onLeave: a, onSync: o } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = Fr.syncDiff(this.state, s, i, a)), o());
      }),
      this.onJoin((s, i, a) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: i,
          newPresences: a,
        });
      }),
      this.onLeave((s, i, a) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: i,
          leftPresences: a,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(t, n, r, s) {
    const i = this.cloneDeep(t),
      a = this.transformState(n),
      o = {},
      l = {};
    return (
      this.map(i, (u, d) => {
        a[u] || (l[u] = d);
      }),
      this.map(a, (u, d) => {
        const g = i[u];
        if (g) {
          const f = d.map((k) => k.presence_ref),
            v = g.map((k) => k.presence_ref),
            y = d.filter((k) => v.indexOf(k.presence_ref) < 0),
            _ = g.filter((k) => f.indexOf(k.presence_ref) < 0);
          (y.length > 0 && (o[u] = y), _.length > 0 && (l[u] = _));
        } else o[u] = d;
      }),
      this.syncDiff(i, { joins: o, leaves: l }, r, s)
    );
  }
  static syncDiff(t, n, r, s) {
    const { joins: i, leaves: a } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      s || (s = () => {}),
      this.map(i, (o, l) => {
        var u;
        const d = (u = t[o]) !== null && u !== void 0 ? u : [];
        if (((t[o] = this.cloneDeep(l)), d.length > 0)) {
          const g = t[o].map((v) => v.presence_ref),
            f = d.filter((v) => g.indexOf(v.presence_ref) < 0);
          t[o].unshift(...f);
        }
        r(o, d, l);
      }),
      this.map(a, (o, l) => {
        let u = t[o];
        if (!u) return;
        const d = l.map((g) => g.presence_ref);
        ((u = u.filter((g) => d.indexOf(g.presence_ref) < 0)),
          (t[o] = u),
          s(o, u, l),
          u.length === 0 && delete t[o]);
      }),
      t
    );
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const s = t[r];
        return (
          "metas" in s
            ? (n[r] = s.metas.map(
                (i) => (
                  (i.presence_ref = i.phx_ref),
                  delete i.phx_ref,
                  delete i.phx_ref_prev,
                  i
                ),
              ))
            : (n[r] = s),
          n
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var yc;
(function (e) {
  ((e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE"));
})(yc || (yc = {}));
var Vr;
(function (e) {
  ((e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system"));
})(Vr || (Vr = {}));
var pt;
(function (e) {
  ((e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(pt || (pt = {}));
class Gn {
  constructor(t, n = { config: {} }, r) {
    var s, i;
    if (
      ((this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = oe.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        n.config,
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Oa(this, Xe.join, this.params, this.timeout)),
      (this.rejoinTimer = new Qh(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs,
      )),
      this.joinPush.receive("ok", () => {
        ((this.state = oe.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((a) => a.send()),
          (this.pushBuffer = []));
      }),
      this._onClose(() => {
        (this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = oe.closed),
          this.socket._remove(this));
      }),
      this._onError((a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = oe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout,
          ),
          (this.state = oe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = oe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Xe.reply, {}, (a, o) => {
        this._trigger(this._replyEventName(o), a);
      }),
      (this.presence = new Fr(this)),
      (this.broadcastEndpointURL = Xh(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(t, n = this.timeout) {
    var r, s, i;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == oe.closed)
    ) {
      const {
          config: { broadcast: a, presence: o, private: l },
        } = this.params,
        u =
          (s =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((v) => v.filter)) !== null && s !== void 0
            ? s
            : [],
        d =
          (!!this.bindings[Vr.PRESENCE] &&
            this.bindings[Vr.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        g = {},
        f = {
          broadcast: a,
          presence: Object.assign(Object.assign({}, o), { enabled: d }),
          postgres_changes: u,
          private: l,
        };
      (this.socket.accessTokenValue &&
        (g.access_token = this.socket.accessTokenValue),
        this._onError((v) => (t == null ? void 0 : t(pt.CHANNEL_ERROR, v))),
        this._onClose(() => (t == null ? void 0 : t(pt.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, g)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive("ok", async ({ postgres_changes: v }) => {
            var y;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              v === void 0)
            ) {
              t == null || t(pt.SUBSCRIBED);
              return;
            } else {
              const _ = this.bindings.postgres_changes,
                k =
                  (y = _ == null ? void 0 : _.length) !== null && y !== void 0
                    ? y
                    : 0,
                m = [];
              for (let h = 0; h < k; h++) {
                const p = _[h],
                  {
                    filter: { event: x, schema: j, table: b, filter: C },
                  } = p,
                  T = v && v[h];
                if (
                  T &&
                  T.event === x &&
                  Gn.isFilterValueEqual(T.schema, j) &&
                  Gn.isFilterValueEqual(T.table, b) &&
                  Gn.isFilterValueEqual(T.filter, C)
                )
                  m.push(Object.assign(Object.assign({}, p), { id: T.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = oe.errored),
                    t == null ||
                      t(
                        pt.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes",
                        ),
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = m), t && t(pt.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (v) => {
            ((this.state = oe.errored),
              t == null ||
                t(
                  pt.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(v).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            t == null || t(pt.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      n.timeout || this.timeout,
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, n, r) {
    return (
      this.state === oe.joined &&
        t === Vr.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`,
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(t, n, r)
    );
  }
  async httpSend(t, n, r = {}) {
    var s;
    if (n == null) return Promise.reject("Payload is required for httpSend()");
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const a = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: t,
              payload: n,
              private: this.private,
            },
          ],
        }),
      },
      o = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        a,
        (s = r.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (o.status === 202) return { success: !0 };
    let l = o.statusText;
    try {
      const u = await o.json();
      l = u.error || u.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(t, n = {}) {
    var r, s;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: i, payload: a } = t,
        o = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (o.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: o,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: a,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const u = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (r = n.timeout) !== null && r !== void 0 ? r : this.timeout,
        );
        return (
          await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
          u.ok ? "ok" : "error"
        );
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var a, o, l;
        const u = this._push(t.type, t, n.timeout || this.timeout);
        (t.type === "broadcast" &&
          !(
            !(
              (l =
                (o =
                  (a = this.params) === null || a === void 0
                    ? void 0
                    : a.config) === null || o === void 0
                  ? void 0
                  : o.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          i("ok"),
          u.receive("ok", () => i("ok")),
          u.receive("error", () => i("error")),
          u.receive("timeout", () => i("timed out")));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = oe.leaving;
    const n = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Xe.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((s) => {
      ((r = new Oa(this, Xe.leave, {}, t)),
        r
          .receive("ok", () => {
            (n(), s("ok"));
          })
          .receive("timeout", () => {
            (n(), s("timed out"));
          })
          .receive("error", () => {
            s("error");
          }),
        r.send(),
        this._canPush() || r.trigger("ok", {}));
    }).finally(() => {
      r == null || r.destroy();
    });
  }
  teardown() {
    (this.pushBuffer.forEach((t) => t.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = oe.closed),
      (this.bindings = {}));
  }
  async _fetchWithTimeout(t, n, r) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), r),
      a = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: s.signal }),
      );
    return (clearTimeout(i), a);
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new Oa(this, t, n, r);
    return (this._canPush() ? s.send() : this._addToPushBuffer(s), s);
  }
  _addToPushBuffer(t) {
    if (
      (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > Ug)
    ) {
      const n = this.pushBuffer.shift();
      n &&
        (n.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${n.event}`,
          n.payload,
        ));
    }
  }
  _onMessage(t, n, r) {
    return n;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, n, r) {
    var s, i;
    const a = t.toLocaleLowerCase(),
      { close: o, error: l, leave: u, join: d } = Xe;
    if (r && [o, l, u, d].indexOf(a) >= 0 && r !== this._joinRef()) return;
    let f = this._onMessage(a, n, r);
    if (n && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((v) => {
            var y, _, k;
            return (
              ((y = v.filter) === null || y === void 0 ? void 0 : y.event) ===
                "*" ||
              ((k =
                (_ = v.filter) === null || _ === void 0 ? void 0 : _.event) ===
                null || k === void 0
                ? void 0
                : k.toLocaleLowerCase()) === a
            );
          })
          .map((v) => v.callback(f, r))
      : (i = this.bindings[a]) === null ||
        i === void 0 ||
        i
          .filter((v) => {
            var y, _, k, m, h, p;
            if (["broadcast", "presence", "postgres_changes"].includes(a))
              if ("id" in v) {
                const x = v.id,
                  j =
                    (y = v.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  x &&
                  ((_ = n.ids) === null || _ === void 0
                    ? void 0
                    : _.includes(x)) &&
                  (j === "*" ||
                    (j == null ? void 0 : j.toLocaleLowerCase()) ===
                      ((k = n.data) === null || k === void 0
                        ? void 0
                        : k.type.toLocaleLowerCase()))
                );
              } else {
                const x =
                  (h =
                    (m = v == null ? void 0 : v.filter) === null || m === void 0
                      ? void 0
                      : m.event) === null || h === void 0
                    ? void 0
                    : h.toLocaleLowerCase();
                return (
                  x === "*" ||
                  x ===
                    ((p = n == null ? void 0 : n.event) === null || p === void 0
                      ? void 0
                      : p.toLocaleLowerCase())
                );
              }
            else return v.type.toLocaleLowerCase() === a;
          })
          .map((v) => {
            if (typeof f == "object" && "ids" in f) {
              const y = f.data,
                {
                  schema: _,
                  table: k,
                  commit_timestamp: m,
                  type: h,
                  errors: p,
                } = y;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: _,
                    table: k,
                    commit_timestamp: m,
                    eventType: h,
                    new: {},
                    old: {},
                    errors: p,
                  },
                ),
                this._getPayloadRecords(y),
              );
            }
            v.callback(f, r);
          });
  }
  _isClosed() {
    return this.state === oe.closed;
  }
  _isJoined() {
    return this.state === oe.joined;
  }
  _isJoining() {
    return this.state === oe.joining;
  }
  _isLeaving() {
    return this.state === oe.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, n, r) {
    const s = t.toLocaleLowerCase(),
      i = { type: s, filter: n, callback: r };
    return (
      this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
      this
    );
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase();
    return (
      this.bindings[r] &&
        (this.bindings[r] = this.bindings[r].filter((s) => {
          var i;
          return !(
            ((i = s.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === r && Gn.isEqual(s.filter, n)
          );
        })),
      this
    );
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1;
    for (const r in t) if (t[r] !== n[r]) return !1;
    return !0;
  }
  static isFilterValueEqual(t, n) {
    return (t ?? void 0) === (n ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(t) {
    this._on(Xe.close, {}, t);
  }
  _onError(t) {
    this._on(Xe.error, {}, (n) => t(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = oe.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (n.new = gc(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (n.old = gc(t.columns, t.old_record)),
      n
    );
  }
}
const Ia = () => {},
  Ms = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  Hg = [1e3, 2e3, 5e3, 1e4],
  Kg = 1e4,
  Gg = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Jg {
  constructor(t, n) {
    var r;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = Lo),
      (this.transport = null),
      (this.heartbeatIntervalMs = Ms.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = Ia),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = mc),
      (this.logger = Ia),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new zg()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (s) =>
        s ? (...i) => s(...i) : (...i) => fetch(...i)),
      !(
        !((r = n == null ? void 0 : n.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = n.params.apikey),
      (this.endPoint = `${t}/${Do.websocket}`),
      (this.httpEndpoint = Xh(t)),
      this._initializeOptions(n),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = Ig.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const n = t.message;
          throw n.includes("Node.js")
            ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${n}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn }),
    );
  }
  disconnect(t, n) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(r), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (t ? this.conn.close(t, n ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return (
      n === "ok" && this._remove(t),
      this.channels.length === 0 && this.disconnect(),
      n
    );
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return ((this.channels = []), this.disconnect(), t);
  }
  log(t, n, r) {
    this.logger(t, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Rt.connecting:
        return an.Connecting;
      case Rt.open:
        return an.Open;
      case Rt.closing:
        return an.Closing;
      default:
        return an.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === an.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(t, n = { config: {} }) {
    const r = `realtime:${t}`,
      s = this.getChannels().find((i) => i.topic === r);
    if (s) return s;
    {
      const i = new Gn(`realtime:${t}`, n, this);
      return (this.channels.push(i), i);
    }
  }
  push(t) {
    const { topic: n, event: r, payload: s, ref: i } = t,
      a = () => {
        this.encode(t, (o) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(o);
        });
      };
    (this.log("push", `${n} ${r} (${i})`, s),
      this.isConnected() ? a() : this.sendBuffer.push(a));
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      ((this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection",
        ));
      try {
        this.heartbeatCallback("timeout");
      } catch (n) {
        this.log("error", "error in heartbeat callback", n);
      }
      ((this._wasManualDisconnect = !1),
        (t = this.conn) === null ||
          t === void 0 ||
          t.close(Dg, "heartbeat timeout"),
        setTimeout(() => {
          var n;
          this.isConnected() ||
            (n = this.reconnectTimer) === null ||
            n === void 0 ||
            n.scheduleTimeout();
        }, Ms.HEARTBEAT_TIMEOUT_FALLBACK));
      return;
    }
    ((this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }));
    try {
      this.heartbeatCallback("sent");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t),
      this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find(
      (r) => r.topic === t && (r._isJoined() || r._isJoining()),
    );
    n &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      n.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n.topic !== t.topic);
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      if (
        n.topic === "phoenix" &&
        n.event === "phx_reply" &&
        n.ref &&
        n.ref === this.pendingHeartbeatRef
      ) {
        const u = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error", u);
        } catch (d) {
          this.log("error", "error in heartbeat callback", d);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: r, event: s, payload: i, ref: a } = n,
        o = a ? `(${a})` : "",
        l = i.status || "";
      (this.log("receive", `${l} ${r} ${s} ${o}`.trim(), i),
        this.channels
          .filter((u) => u._isMember(r))
          .forEach((u) => u._trigger(s, i, a)),
        this._triggerStateCallbacks("message", n));
    });
  }
  _clearTimer(t) {
    var n;
    t === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : t === "reconnect" &&
        ((n = this.reconnectTimer) === null || n === void 0 || n.reset());
  }
  _clearAllTimers() {
    (this._clearTimer("heartbeat"), this._clearTimer("reconnect"));
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)),
      this.conn.readyState === Rt.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Rt.open ||
        this.conn.readyState === Rt.connecting
      )
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      ((this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null));
    }
    (this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((t) => t.teardown()));
  }
  _onConnOpen() {
    (this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          this.flushSendBuffer();
        })
        .catch((n) => {
          (this.log("error", "error waiting for auth on connect", n),
            this.flushSendBuffer());
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open"));
  }
  _startHeartbeat() {
    (this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs,
      )));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (n) => {
        (this.log("worker", "worker error", n.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (n) => {
        n.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(t) {
    var n;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", t),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (n = this.reconnectTimer) === null ||
        n === void 0 ||
        n.scheduleTimeout(),
      this._triggerStateCallbacks("close", t));
  }
  _onConnError(t) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${t}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", t));
    try {
      this.heartbeatCallback("error");
    } catch (n) {
      this.log("error", "error in heartbeat callback", n);
    }
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(Xe.error));
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t;
    const r = t.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(n);
    return `${t}${r}${s}`;
  }
  _workerObjectUrl(t) {
    let n;
    if (t) n = t;
    else {
      const r = new Blob([Gg], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
  _setConnectionState(t, n = !1) {
    ((this._connectionState = t),
      t === "connecting"
        ? (this._wasManualDisconnect = !1)
        : t === "disconnecting" && (this._wasManualDisconnect = n));
  }
  async _performAuth(t = null) {
    let n,
      r = !1;
    if (t) ((n = t), (r = !0));
    else if (this.accessToken)
      try {
        n = await this.accessToken();
      } catch (s) {
        (this.log("error", "Error fetching access token from callback", s),
          (n = this.accessTokenValue));
      }
    else n = this.accessTokenValue;
    (r
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != n &&
        ((this.accessTokenValue = n),
        this.channels.forEach((s) => {
          const i = { access_token: n, version: $g };
          (n && s.updateJoinPayload(i),
            s.joinedOnce &&
              s._isJoined() &&
              s._push(Xe.access_token, { access_token: n }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((n) => {
        this.log("error", `Error setting auth in ${t}`, n);
      });
  }
  _triggerStateCallbacks(t, n) {
    try {
      this.stateChangeCallbacks[t].forEach((r) => {
        try {
          r(n);
        } catch (s) {
          this.log("error", `error in ${t} callback`, s);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${t} callbacks`, r);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new Qh(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, Ms.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(t) {
    var n, r, s, i, a, o, l, u, d, g, f, v;
    switch (
      ((this.transport =
        (n = t == null ? void 0 : t.transport) !== null && n !== void 0
          ? n
          : null),
      (this.timeout =
        (r = t == null ? void 0 : t.timeout) !== null && r !== void 0 ? r : Lo),
      (this.heartbeatIntervalMs =
        (s = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
        s !== void 0
          ? s
          : Ms.HEARTBEAT_INTERVAL),
      (this.worker =
        (i = t == null ? void 0 : t.worker) !== null && i !== void 0 ? i : !1),
      (this.accessToken =
        (a = t == null ? void 0 : t.accessToken) !== null && a !== void 0
          ? a
          : null),
      (this.heartbeatCallback =
        (o = t == null ? void 0 : t.heartbeatCallback) !== null && o !== void 0
          ? o
          : Ia),
      (this.vsn =
        (l = t == null ? void 0 : t.vsn) !== null && l !== void 0 ? l : mc),
      t != null && t.params && (this.params = t.params),
      t != null && t.logger && (this.logger = t.logger),
      ((t != null && t.logLevel) || (t != null && t.log_level)) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (u = t == null ? void 0 : t.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (y) => Hg[y - 1] || Kg),
      this.vsn)
    ) {
      case Lg:
        ((this.encode =
          (d = t == null ? void 0 : t.encode) !== null && d !== void 0
            ? d
            : (y, _) => _(JSON.stringify(y))),
          (this.decode =
            (g = t == null ? void 0 : t.decode) !== null && g !== void 0
              ? g
              : (y, _) => _(JSON.parse(y))));
        break;
      case Jh:
        ((this.encode =
          (f = t == null ? void 0 : t.encode) !== null && f !== void 0
            ? f
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (v = t == null ? void 0 : t.decode) !== null && v !== void 0
              ? v
              : this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
  }
}
var ls = class extends Error {
  constructor(e, t) {
    var n;
    (super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) &&
          ((n = t.icebergType) == null ? void 0 : n.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Qg(e, t, n) {
  const r = new URL(t, e);
  if (n)
    for (const [s, i] of Object.entries(n))
      i !== void 0 && r.searchParams.set(s, i);
  return r.toString();
}
async function Yg(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === "header"
        ? { [e.name]: e.value }
        : e.type === "custom"
          ? await e.getHeaders()
          : {};
}
function Xg(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: s, body: i, headers: a }) {
      const o = Qg(e.baseUrl, r, s),
        l = await Yg(e.auth),
        u = await t(o, {
          method: n,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...a,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        d = await u.text(),
        g = (u.headers.get("content-type") || "").includes("application/json"),
        f = g && d ? JSON.parse(d) : d;
      if (!u.ok) {
        const v = g ? f : void 0,
          y = v == null ? void 0 : v.error;
        throw new ls(
          (y == null ? void 0 : y.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: y == null ? void 0 : y.type,
            icebergCode: y == null ? void 0 : y.code,
            details: v,
          },
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    },
  };
}
function Bs(e) {
  return e.join("");
}
var Zg = class {
  constructor(e, t = "") {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    const t = e ? { parent: Bs(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(e, t) {
    const n = {
      namespace: e.namespace,
      properties: t == null ? void 0 : t.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Bs(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Bs(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Bs(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof ls && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (n) {
      if (n instanceof ls && n.status === 409) return;
      throw n;
    }
  }
};
function jn(e) {
  return e.join("");
}
var ev = class {
    constructor(e, t = "", n) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = n));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const n = {};
      return (
        this.accessDelegation &&
          (n["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables`,
            body: t,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const n = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": n.data["metadata-location"],
        metadata: n.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String((t == null ? void 0 : t.purge) ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation &&
        (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (n) {
        if (n instanceof ls && n.status === 404) return !1;
        throw n;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (n) {
        if (n instanceof ls && n.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw n;
      }
    }
  },
  tv = class {
    constructor(e) {
      var r;
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const n = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = Xg({ baseUrl: n, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation =
          (r = e.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new Zg(this.client, t)),
        (this.tableOps = new ev(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  },
  Ji = class extends Error {
    constructor(e, t = "storage", n, r) {
      (super(e),
        (this.__isStorageError = !0),
        (this.namespace = t),
        (this.name = t === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = n),
        (this.statusCode = r));
    }
  };
function Qi(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var Fs = class extends Ji {
    constructor(e, t, n, r = "storage") {
      (super(e, r, t, n),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = t),
        (this.statusCode = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  Zh = class extends Ji {
    constructor(e, t, n = "storage") {
      (super(e, n),
        (this.name =
          n === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = t));
    }
  };
const nv = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  rv = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  zo = (e) => {
    if (Array.isArray(e)) return e.map((n) => zo(n));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([n, r]) => {
        const s = n.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, ""),
        );
        t[s] = zo(r);
      }),
      t
    );
  },
  sv = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function us(e) {
  "@babel/helpers - typeof";
  return (
    (us =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    us(e)
  );
}
function iv(e, t) {
  if (us(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (us(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function av(e) {
  var t = iv(e, "string");
  return us(t) == "symbol" ? t : t + "";
}
function ov(e, t, n) {
  return (
    (t = av(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wc(Object(n), !0).forEach(function (r) {
          ov(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
const _c = (e) => {
    var t;
    return (
      e.msg ||
      e.message ||
      e.error_description ||
      (typeof e.error == "string"
        ? e.error
        : (t = e.error) === null || t === void 0
          ? void 0
          : t.message) ||
      JSON.stringify(e)
    );
  },
  lv = async (e, t, n, r) => {
    if (
      e &&
      typeof e == "object" &&
      "status" in e &&
      "ok" in e &&
      typeof e.status == "number" &&
      !(n != null && n.noResolveJson)
    ) {
      const s = e,
        i = s.status || 500;
      if (typeof s.json == "function")
        s.json()
          .then((a) => {
            const o =
              (a == null ? void 0 : a.statusCode) ||
              (a == null ? void 0 : a.code) ||
              i + "";
            t(new Fs(_c(a), i, o, r));
          })
          .catch(() => {
            if (r === "vectors") {
              const a = i + "";
              t(new Fs(s.statusText || `HTTP ${i} error`, i, a, r));
            } else {
              const a = i + "";
              t(new Fs(s.statusText || `HTTP ${i} error`, i, a, r));
            }
          });
      else {
        const a = i + "";
        t(new Fs(s.statusText || `HTTP ${i} error`, i, a, r));
      }
    } else t(new Zh(_c(e), e, r));
  },
  uv = (e, t, n, r) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET" || e === "HEAD" || !r
      ? I(I({}, s), n)
      : (rv(r)
          ? ((s.headers = I(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers,
            )),
            (s.body = JSON.stringify(r)))
          : (s.body = r),
        t != null && t.duplex && (s.duplex = t.duplex),
        I(I({}, s), n));
  };
async function Cr(e, t, n, r, s, i, a) {
  return new Promise((o, l) => {
    e(n, uv(t, r, s, i))
      .then((u) => {
        if (!u.ok) throw u;
        if (r != null && r.noResolveJson) return u;
        if (a === "vectors") {
          const d = u.headers.get("content-type");
          if (u.headers.get("content-length") === "0" || u.status === 204)
            return {};
          if (!d || !d.includes("application/json")) return {};
        }
        return u.json();
      })
      .then((u) => o(u))
      .catch((u) => lv(u, l, r, a));
  });
}
function ef(e = "storage") {
  return {
    get: async (t, n, r, s) => Cr(t, "GET", n, r, s, void 0, e),
    post: async (t, n, r, s, i) => Cr(t, "POST", n, s, i, r, e),
    put: async (t, n, r, s, i) => Cr(t, "PUT", n, s, i, r, e),
    head: async (t, n, r, s) =>
      Cr(t, "HEAD", n, I(I({}, r), {}, { noResolveJson: !0 }), s, void 0, e),
    remove: async (t, n, r, s, i) => Cr(t, "DELETE", n, s, i, r, e),
  };
}
const cv = ef("storage"),
  { get: cs, post: Qe, put: Mo, head: dv, remove: Ml } = cv,
  Ie = ef("vectors");
var hr = class {
    constructor(e, t = {}, n, r = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = e),
        (this.headers = t),
        (this.fetch = nv(n)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async handleOperation(e) {
      var t = this;
      try {
        return { data: await e(), error: null };
      } catch (n) {
        if (t.shouldThrowOnError) throw n;
        if (Qi(n)) return { data: null, error: n };
        throw n;
      }
    }
  },
  hv = class {
    constructor(e, t) {
      ((this.downloadFn = e), (this.shouldThrowOnError = t));
    }
    then(e, t) {
      return this.execute().then(e, t);
    }
    async execute() {
      var e = this;
      try {
        return { data: (await e.downloadFn()).body, error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (Qi(t)) return { data: null, error: t };
        throw t;
      }
    }
  };
let tf;
tf = Symbol.toStringTag;
var fv = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[tf] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new hv(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (Qi(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const pv = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  xc = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var mv = class extends hr {
  constructor(e, t = {}, n, r) {
    (super(e, t, r, "storage"), (this.bucketId = n));
  }
  async uploadOrUpdate(e, t, n, r) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const a = I(I({}, xc), r);
      let o = I(
        I({}, s.headers),
        e === "POST" && { "x-upsert": String(a.upsert) },
      );
      const l = a.metadata;
      (typeof Blob < "u" && n instanceof Blob
        ? ((i = new FormData()),
          i.append("cacheControl", a.cacheControl),
          l && i.append("metadata", s.encodeMetadata(l)),
          i.append("", n))
        : typeof FormData < "u" && n instanceof FormData
          ? ((i = n),
            i.has("cacheControl") || i.append("cacheControl", a.cacheControl),
            l &&
              !i.has("metadata") &&
              i.append("metadata", s.encodeMetadata(l)))
          : ((i = n),
            (o["cache-control"] = `max-age=${a.cacheControl}`),
            (o["content-type"] = a.contentType),
            l && (o["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
            ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
              (i &&
                typeof i == "object" &&
                "pipe" in i &&
                typeof i.pipe == "function")) &&
              !a.duplex &&
              (a.duplex = "half")),
        r != null && r.headers && (o = I(I({}, o), r.headers)));
      const u = s._removeEmptyFolders(t),
        d = s._getFinalPath(u),
        g = await (e == "PUT" ? Mo : Qe)(
          s.fetch,
          `${s.url}/object/${d}`,
          i,
          I({ headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {}),
        );
      return { path: u, id: g.Id, fullPath: g.Key };
    });
  }
  async upload(e, t, n) {
    return this.uploadOrUpdate("POST", e, t, n);
  }
  async uploadToSignedUrl(e, t, n, r) {
    var s = this;
    const i = s._removeEmptyFolders(e),
      a = s._getFinalPath(i),
      o = new URL(s.url + `/object/upload/sign/${a}`);
    return (
      o.searchParams.set("token", t),
      s.handleOperation(async () => {
        let l;
        const u = I({ upsert: xc.upsert }, r),
          d = I(I({}, s.headers), { "x-upsert": String(u.upsert) });
        return (
          typeof Blob < "u" && n instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", u.cacheControl),
              l.append("", n))
            : typeof FormData < "u" && n instanceof FormData
              ? ((l = n), l.append("cacheControl", u.cacheControl))
              : ((l = n),
                (d["cache-control"] = `max-age=${u.cacheControl}`),
                (d["content-type"] = u.contentType)),
          {
            path: i,
            fullPath: (await Mo(s.fetch, o.toString(), l, { headers: d })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(e, t) {
    var n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(e);
      const s = I({}, n.headers);
      t != null && t.upsert && (s["x-upsert"] = "true");
      const i = await Qe(
          n.fetch,
          `${n.url}/object/upload/sign/${r}`,
          {},
          { headers: s },
        ),
        a = new URL(n.url + i.url),
        o = a.searchParams.get("token");
      if (!o) throw new Ji("No token returned by API");
      return { signedUrl: a.toString(), path: e, token: o };
    });
  }
  async update(e, t, n) {
    return this.uploadOrUpdate("PUT", e, t, n);
  }
  async move(e, t, n) {
    var r = this;
    return r.handleOperation(
      async () =>
        await Qe(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        ),
    );
  }
  async copy(e, t, n) {
    var r = this;
    return r.handleOperation(async () => ({
      path: (
        await Qe(
          r.fetch,
          `${r.url}/object/copy`,
          {
            bucketId: r.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(e),
        i = await Qe(
          r.fetch,
          `${r.url}/object/sign/${s}`,
          I(
            { expiresIn: t },
            n != null && n.transform ? { transform: n.transform } : {},
          ),
          { headers: r.headers },
        );
      const a =
        n != null && n.download
          ? `&download=${n.download === !0 ? "" : n.download}`
          : "";
      return { signedUrl: encodeURI(`${r.url}${i.signedURL}${a}`) };
    });
  }
  async createSignedUrls(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = await Qe(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: r.headers },
        ),
        i =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "";
      return s.map((a) =>
        I(
          I({}, a),
          {},
          {
            signedUrl: a.signedURL
              ? encodeURI(`${r.url}${a.signedURL}${i}`)
              : null,
          },
        ),
      );
    });
  }
  download(e, t, n) {
    const r =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      s = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      ),
      i = s ? `?${s}` : "",
      a = this._getFinalPath(e),
      o = () =>
        cs(
          this.fetch,
          `${this.url}/${r}/${a}${i}`,
          { headers: this.headers, noResolveJson: !0 },
          n,
        );
    return new fv(o, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const n = t._getFinalPath(e);
    return t.handleOperation(async () =>
      zo(
        await cs(t.fetch, `${t.url}/object/info/${n}`, { headers: t.headers }),
      ),
    );
  }
  async exists(e) {
    var t = this;
    const n = t._getFinalPath(e);
    try {
      return (
        await dv(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (r) {
      if (t.shouldThrowOnError) throw r;
      if (Qi(r) && r instanceof Zh) {
        const s = r.originalError;
        if ([400, 404].includes(s == null ? void 0 : s.status))
          return { data: !1, error: r };
      }
      throw r;
    }
  }
  getPublicUrl(e, t) {
    const n = this._getFinalPath(e),
      r = [],
      s =
        t != null && t.download
          ? `download=${t.download === !0 ? "" : t.download}`
          : "";
    s !== "" && r.push(s);
    const i =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image"
          : "object",
      a = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      );
    a !== "" && r.push(a);
    let o = r.join("&");
    return (
      o !== "" && (o = `?${o}`),
      { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${n}${o}`) } }
    );
  }
  async remove(e) {
    var t = this;
    return t.handleOperation(
      async () =>
        await Ml(
          t.fetch,
          `${t.url}/object/${t.bucketId}`,
          { prefixes: e },
          { headers: t.headers },
        ),
    );
  }
  async list(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = I(I(I({}, pv), t), {}, { prefix: e || "" });
      return await Qe(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        s,
        { headers: r.headers },
        n,
      );
    });
  }
  async listV2(e, t) {
    var n = this;
    return n.handleOperation(async () => {
      const r = I({}, e);
      return await Qe(
        n.fetch,
        `${n.url}/object/list-v2/${n.bucketId}`,
        r,
        { headers: n.headers },
        t,
      );
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return (
      e.width && t.push(`width=${e.width}`),
      e.height && t.push(`height=${e.height}`),
      e.resize && t.push(`resize=${e.resize}`),
      e.format && t.push(`format=${e.format}`),
      e.quality && t.push(`quality=${e.quality}`),
      t.join("&")
    );
  }
};
const gv = "2.95.3",
  ws = { "X-Client-Info": `storage-js/${gv}` };
var vv = class extends hr {
    constructor(e, t = {}, n, r) {
      const s = new URL(e);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const i = s.href.replace(/\/$/, ""),
        a = I(I({}, ws), t);
      super(i, a, n, "storage");
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const n = t.listBucketOptionsToQueryString(e);
        return await cs(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await cs(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Qe(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Mo(
            n.fetch,
            `${n.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Qe(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ml(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  yv = class extends hr {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = I(I({}, ws), t);
      super(r, s, n, "storage");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Qe(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const n = new URLSearchParams();
        ((e == null ? void 0 : e.limit) !== void 0 &&
          n.set("limit", e.limit.toString()),
          (e == null ? void 0 : e.offset) !== void 0 &&
            n.set("offset", e.offset.toString()),
          e != null && e.sortColumn && n.set("sortColumn", e.sortColumn),
          e != null && e.sortOrder && n.set("sortOrder", e.sortOrder),
          e != null && e.search && n.set("search", e.search));
        const r = n.toString(),
          s = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
        return await cs(t.fetch, s, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ml(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!sv(e))
        throw new Ji(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const n = new tv({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(s, i) {
          const a = s[i];
          return typeof a != "function"
            ? a
            : async (...o) => {
                try {
                  return { data: await a.apply(s, o), error: null };
                } catch (l) {
                  if (r) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  },
  wv = class extends hr {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = I(I({}, ws), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ie.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Ie.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ie.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await Ie.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  _v = class extends hr {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = I(I({}, ws), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await Ie.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ie.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          e.segmentIndex !== void 0 &&
          (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
          );
      }
      return t.handleOperation(
        async () =>
          await Ie.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ie.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await Ie.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
  },
  xv = class extends hr {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = I(I({}, ws), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ie.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ie.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ie.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ie.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  kv = class extends xv {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new Sv(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        n = this;
      return t().call(n, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        n = this;
      return t().call(n, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        n = this;
      return t().call(n, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        n = this;
      return t().call(n, e);
    }
  },
  Sv = class extends wv {
    constructor(e, t, n, r) {
      (super(e, t, r), (this.vectorBucketName = n));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        n = this;
      return t().call(
        n,
        I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        n = this;
      return t().call(
        n,
        I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    index(e) {
      return new bv(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  bv = class extends _v {
    constructor(e, t, n, r, s) {
      (super(e, t, s), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  Ev = class extends vv {
    constructor(e, t = {}, n, r) {
      super(e, t, n, r);
    }
    from(e) {
      return new mv(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new kv(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new yv(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const nf = "2.95.3",
  An = 30 * 1e3,
  Bo = 3,
  Aa = Bo * An,
  jv = "http://localhost:9999",
  Cv = "supabase.auth.token",
  Nv = { "X-Client-Info": `gotrue-js/${nf}` },
  Fo = "X-Supabase-Api-Version",
  rf = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  Tv = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Rv = 10 * 60 * 1e3;
class ds extends Error {
  constructor(t, n, r) {
    (super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n),
      (this.code = r));
  }
}
function P(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class Pv extends ds {
  constructor(t, n, r) {
    (super(t, n, r),
      (this.name = "AuthApiError"),
      (this.status = n),
      (this.code = r));
  }
}
function Ov(e) {
  return P(e) && e.name === "AuthApiError";
}
class on extends ds {
  constructor(t, n) {
    (super(t), (this.name = "AuthUnknownError"), (this.originalError = n));
  }
}
class bt extends ds {
  constructor(t, n, r, s) {
    (super(t, r, s), (this.name = n), (this.status = r));
  }
}
class Pe extends bt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function $a(e) {
  return P(e) && e.name === "AuthSessionMissingError";
}
class Cn extends bt {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Vs extends bt {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class qs extends bt {
  constructor(t, n = null) {
    (super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function Iv(e) {
  return P(e) && e.name === "AuthImplicitGrantRedirectError";
}
class kc extends bt {
  constructor(t, n = null) {
    (super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Av extends bt {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Vo extends bt {
  constructor(t, n) {
    super(t, "AuthRetryableFetchError", n, void 0);
  }
}
function La(e) {
  return P(e) && e.name === "AuthRetryableFetchError";
}
class Sc extends bt {
  constructor(t, n, r) {
    (super(t, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r));
  }
}
class qo extends bt {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ti =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  bc = ` 	
\r=`.split(""),
  $v = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < bc.length; t += 1) e[bc[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Ti.length; t += 1) e[Ti[t].charCodeAt(0)] = t;
    return e;
  })();
function Ec(e, t, n) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const r = (t.queue >> (t.queuedBits - 6)) & 63;
      (n(Ti[r]), (t.queuedBits -= 6));
    }
  else if (t.queuedBits > 0)
    for (
      t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6;
      t.queuedBits >= 6;
    ) {
      const r = (t.queue >> (t.queuedBits - 6)) & 63;
      (n(Ti[r]), (t.queuedBits -= 6));
    }
}
function sf(e, t, n) {
  const r = $v[e];
  if (r > -1)
    for (t.queue = (t.queue << 6) | r, t.queuedBits += 6; t.queuedBits >= 8; )
      (n((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function jc(e) {
  const t = [],
    n = (a) => {
      t.push(String.fromCodePoint(a));
    },
    r = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (a) => {
      Uv(a, r, n);
    };
  for (let a = 0; a < e.length; a += 1) sf(e.charCodeAt(a), s, i);
  return t.join("");
}
function Lv(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function Dv(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const s = ((r - 55296) * 1024) & 65535;
      ((r = (((e.charCodeAt(n + 1) - 56320) & 65535) | s) + 65536), (n += 1));
    }
    Lv(r, t);
  }
}
function Uv(e, t, n) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      n(e);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!((e >> (7 - r)) & 1)) {
        t.utf8seq = r;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && n(t.codepoint));
  }
}
function tr(e) {
  const t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      t.push(s);
    };
  for (let s = 0; s < e.length; s += 1) sf(e.charCodeAt(s), n, r);
  return new Uint8Array(t);
}
function zv(e) {
  const t = [];
  return (Dv(e, (n) => t.push(n)), new Uint8Array(t));
}
function dn(e) {
  const t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      t.push(s);
    };
  return (e.forEach((s) => Ec(s, n, r)), Ec(null, n, r), t.join(""));
}
function Mv(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function Bv() {
  return Symbol("auth-callback");
}
const fe = () => typeof window < "u" && typeof document < "u",
  en = { tested: !1, writable: !1 },
  af = () => {
    if (!fe()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (en.tested) return en.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (en.tested = !0),
        (en.writable = !0));
    } catch {
      ((en.tested = !0), (en.writable = !1));
    }
    return en.writable;
  };
function Fv(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
        t[i] = s;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, s) => {
      t[s] = r;
    }),
    t
  );
}
const of = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  Vv = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  $n = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  tn = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  he = async (e, t) => {
    await e.removeItem(t);
  };
class Yi {
  constructor() {
    this.promise = new Yi.promiseConstructor((t, n) => {
      ((this.resolve = t), (this.reject = n));
    });
  }
}
Yi.promiseConstructor = Promise;
function Ws(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new qo("Invalid JWT structure");
  for (let r = 0; r < t.length; r++)
    if (!Tv.test(t[r])) throw new qo("JWT not in base64url format");
  return {
    header: JSON.parse(jc(t[0])),
    payload: JSON.parse(jc(t[1])),
    signature: tr(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function qv(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function Wv(e, t) {
  return new Promise((r, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const a = await e(i);
          if (!t(i, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!t(i, a)) {
            s(a);
            return;
          }
        }
    })();
  });
}
function Hv(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function Kv() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return (crypto.getRandomValues(t), Array.from(t, Hv).join(""));
}
async function Gv(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest("SHA-256", n),
    s = new Uint8Array(r);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function Jv(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      e
    );
  const n = await Gv(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Nn(e, t, n = !1) {
  const r = Kv();
  let s = r;
  (n && (s += "/PASSWORD_RECOVERY"), await $n(e, `${t}-code-verifier`, s));
  const i = await Jv(r);
  return [i, r === i ? "plain" : "s256"];
}
const Qv = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Yv(e) {
  const t = e.headers.get(Fo);
  if (!t || !t.match(Qv)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Xv(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function Zv(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const e0 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Tn(e) {
  if (!e0.test(e))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function Da() {
  const e = {};
  return new Proxy(e, {
    get: (t, n) => {
      if (n === "__isUserNotAvailableProxy") return !0;
      if (typeof n == "symbol") {
        const r = n.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (t, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (t, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function t0(e, t) {
  return new Proxy(e, {
    get: (n, r, s) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(n, r, s);
      }
      return (
        !t.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (t.value = !0)),
        Reflect.get(n, r, s)
      );
    },
  });
}
function Cc(e) {
  return JSON.parse(JSON.stringify(e));
}
const sn = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  n0 = [502, 503, 504];
async function Nc(e) {
  var t;
  if (!Vv(e)) throw new Vo(sn(e), 0);
  if (n0.includes(e.status)) throw new Vo(sn(e), e.status);
  let n;
  try {
    n = await e.json();
  } catch (i) {
    throw new on(sn(i), i);
  }
  let r;
  const s = Yv(e);
  if (
    (s &&
    s.getTime() >= rf["2024-01-01"].timestamp &&
    typeof n == "object" &&
    n &&
    typeof n.code == "string"
      ? (r = n.code)
      : typeof n == "object" &&
        n &&
        typeof n.error_code == "string" &&
        (r = n.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new Sc(
        sn(n),
        e.status,
        ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          [],
      );
    if (r === "session_not_found") throw new Pe();
  } else if (
    typeof n == "object" &&
    n &&
    typeof n.weak_password == "object" &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0)
  )
    throw new Sc(sn(n), e.status, n.weak_password.reasons);
  throw new Pv(sn(n), e.status || 500, r);
}
const r0 = (e, t, n, r) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers,
      )),
      (s.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, s), n));
};
async function O(e, t, n, r) {
  var s;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  (i[Fo] || (i[Fo] = rf["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`));
  const a =
    (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length
      ? "?" + new URLSearchParams(a).toString()
      : "",
    l = await s0(
      e,
      t,
      n + o,
      { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body,
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function s0(e, t, n, r, s, i) {
  const a = r0(t, r, s, i);
  let o;
  try {
    o = await e(n, Object.assign({}, a));
  } catch (l) {
    throw (console.error(l), new Vo(sn(l), 0));
  }
  if ((o.ok || (await Nc(o)), r != null && r.noResolveJson)) return o;
  try {
    return await o.json();
  } catch (l) {
    await Nc(l);
  }
}
function Ge(e) {
  var t;
  let n = null;
  o0(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = Mv(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function Tc(e) {
  const t = Ge(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function It(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function i0(e) {
  return { data: e, error: null };
}
function a0(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    } = e,
    a = Gi(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    o = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    },
    l = Object.assign({}, a);
  return { data: { properties: o, user: l }, error: null };
}
function Rc(e) {
  return e;
}
function o0(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const Ua = ["global", "local", "others"];
class l0 {
  constructor({ url: t = "", headers: n = {}, fetch: r }) {
    ((this.url = t),
      (this.headers = n),
      (this.fetch = of(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }));
  }
  async signOut(t, n = Ua[0]) {
    if (Ua.indexOf(n) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Ua.join(", ")}`,
      );
    try {
      return (
        await O(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (P(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await O(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: It,
      });
    } catch (r) {
      if (P(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = Gi(t, ["options"]),
        s = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
        await O(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: a0,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (P(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await O(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: It,
      });
    } catch (n) {
      if (P(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, s, i, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        d = await O(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Rc,
        });
      if (d.error) throw d.error;
      const g = await d.json(),
        f =
          (a = d.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        v =
          (l =
            (o = d.headers.get("link")) === null || o === void 0
              ? void 0
              : o.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        v.length > 0 &&
          (v.forEach((y) => {
            const _ = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
              k = JSON.parse(y.split(";")[1].split("=")[1]);
            u[`${k}Page`] = _;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, g), u), error: null }
      );
    } catch (u) {
      if (P(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    Tn(t);
    try {
      return await O(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: It,
      });
    } catch (n) {
      if (P(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    Tn(t);
    try {
      return await O(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: It,
      });
    } catch (r) {
      if (P(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    Tn(t);
    try {
      return await O(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: It,
      });
    } catch (r) {
      if (P(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    Tn(t.userId);
    try {
      const { data: n, error: r } = await O(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: n, error: r };
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    (Tn(t.userId), Tn(t.id));
    try {
      return {
        data: await O(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listOAuthClients(t) {
    var n, r, s, i, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        d = await O(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Rc,
        });
      if (d.error) throw d.error;
      const g = await d.json(),
        f =
          (a = d.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        v =
          (l =
            (o = d.headers.get("link")) === null || o === void 0
              ? void 0
              : o.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        v.length > 0 &&
          (v.forEach((y) => {
            const _ = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
              k = JSON.parse(y.split(";")[1].split("=")[1]);
            u[`${k}Page`] = _;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, g), u), error: null }
      );
    } catch (u) {
      if (P(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await O(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await O(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${t}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateOAuthClient(t, n) {
    try {
      return await O(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${t}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (P(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await O(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await O(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (P(n)) return { data: null, error: n };
      throw n;
    }
  }
}
function Pc(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
const Rn = {
  debug: !!(
    globalThis &&
    af() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class lf extends Error {
  constructor(t) {
    (super(t), (this.isAcquireTimeout = !0));
  }
}
class u0 extends lf {}
async function c0(e, t, n) {
  Rn.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const r = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        (r.abort(),
          Rn.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              e,
            ));
      }, t),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        e,
        t === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: r.signal },
        async (s) => {
          if (s) {
            Rn.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                e,
                s.name,
              );
            try {
              return await n();
            } finally {
              Rn.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  e,
                  s.name,
                );
            }
          } else {
            if (t === 0)
              throw (
                Rn.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    e,
                  ),
                new u0(
                  `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`,
                )
              );
            if (Rn.debug)
              try {
                const i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  "),
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i,
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
              ),
              await n()
            );
          }
        },
      ),
    )
  );
}
function d0() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function uf(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function h0(e) {
  return parseInt(e, 16);
}
function f0(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (r) => r.toString(16).padStart(2, "0")).join("");
}
function p0(e) {
  var t;
  const {
    chainId: n,
    domain: r,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: a,
    notBefore: o,
    requestId: l,
    resources: u,
    scheme: d,
    uri: g,
    version: f,
  } = e;
  {
    if (!Number.isInteger(n))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`,
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (a && a.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`,
      );
    if (!g)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`,
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
      );
  }
  const v = uf(e.address),
    y = d ? `${d}://${r}` : r,
    _ = e.statement
      ? `${e.statement}
`
      : "",
    k = `${y} wants you to sign in with your Ethereum account:
${v}

${_}`;
  let m = `URI: ${g}
Version: ${f}
Chain ID: ${n}${
    a
      ? `
Nonce: ${a}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (m += `
Expiration Time: ${s.toISOString()}`),
    o &&
      (m += `
Not Before: ${o.toISOString()}`),
    l &&
      (m += `
Request ID: ${l}`),
    u)
  ) {
    let h = `
Resources:`;
    for (const p of u) {
      if (!p || typeof p != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${p}`,
        );
      h += `
- ${p}`;
    }
    m += h;
  }
  return `${k}
${m}`;
}
class ie extends Error {
  constructor({ message: t, code: n, cause: r, name: s }) {
    var i;
    (super(t, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (r instanceof Error ? r.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = n));
  }
}
class Ri extends ie {
  constructor(t, n) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: t,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = n));
  }
}
function m0({ error: e, options: t }) {
  var n, r, s;
  const { publicKey: i } = t;
  if (!i) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new ie({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.requireResidentKey) === !0
    )
      return new ie({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new ie({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new ie({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new ie({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new ie({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((o) => o.type === "public-key")
        .length === 0
        ? new ie({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new ie({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const a = window.location.hostname;
      if (cf(a)) {
        if (i.rp.id !== a)
          return new ie({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new ie({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new ie({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new ie({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new ie({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function g0({ error: e, options: t }) {
  const { publicKey: n } = t;
  if (!n) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new ie({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new ie({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "SecurityError") {
      const r = window.location.hostname;
      if (cf(r)) {
        if (n.rpId !== r)
          return new ie({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new ie({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new ie({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new ie({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class v0 {
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      ((n.name = "AbortError"), this.controller.abort(n));
    }
    const t = new AbortController();
    return ((this.controller = t), t.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      ((t.name = "AbortError"),
        this.controller.abort(t),
        (this.controller = void 0));
    }
  }
}
const y0 = new v0();
function w0(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: n, excludeCredentials: r } = e,
    s = Gi(e, ["challenge", "user", "excludeCredentials"]),
    i = tr(t).buffer,
    a = Object.assign(Object.assign({}, n), { id: tr(n.id).buffer }),
    o = Object.assign(Object.assign({}, s), { challenge: i, user: a });
  if (r && r.length > 0) {
    o.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: tr(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return o;
}
function _0(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: n } = e,
    r = Gi(e, ["challenge", "allowCredentials"]),
    s = tr(t).buffer,
    i = Object.assign(Object.assign({}, r), { challenge: s });
  if (n && n.length > 0) {
    i.allowCredentials = new Array(n.length);
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      i.allowCredentials[a] = Object.assign(Object.assign({}, o), {
        id: tr(o.id).buffer,
        type: o.type || "public-key",
        transports: o.transports,
      });
    }
  }
  return i;
}
function x0(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const n = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: dn(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: dn(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment:
      (t = n.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function k0(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const n = e,
    r = e.getClientExtensionResults(),
    s = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: dn(new Uint8Array(s.authenticatorData)),
      clientDataJSON: dn(new Uint8Array(s.clientDataJSON)),
      signature: dn(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? dn(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (t = n.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function cf(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function Oc() {
  var e, t;
  return !!(
    fe() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.create) == "function" &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.get) == "function"
  );
}
async function S0(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ri("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ri("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: m0({ error: t, options: e }) };
  }
}
async function b0(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ri("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ri("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: g0({ error: t, options: e }) };
  }
}
const E0 = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  j0 = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Pi(...e) {
  const t = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    n = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    r = {};
  for (const s of e)
    if (s)
      for (const i in s) {
        const a = s[i];
        if (a !== void 0)
          if (Array.isArray(a)) r[i] = a;
          else if (n(a)) r[i] = a;
          else if (t(a)) {
            const o = r[i];
            t(o) ? (r[i] = Pi(o, a)) : (r[i] = Pi(a));
          } else r[i] = a;
      }
  return r;
}
function C0(e, t) {
  return Pi(E0, e, t || {});
}
function N0(e, t) {
  return Pi(j0, e, t || {});
}
class T0 {
  constructor(t) {
    ((this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, t), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: t, webauthn: n, friendlyName: r, signal: s },
    i,
  ) {
    var a;
    try {
      const { data: o, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: n,
      });
      if (!o) return { data: null, error: l };
      const u = s ?? y0.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: d } = o.webauthn.credential_options.publicKey;
        if (!d.name) {
          const g = r;
          if (g) d.name = `${d.id}:${g}`;
          else {
            const v = (await this.client.getUser()).data.user,
              y =
                ((a = v == null ? void 0 : v.user_metadata) === null ||
                a === void 0
                  ? void 0
                  : a.name) ||
                (v == null ? void 0 : v.email) ||
                (v == null ? void 0 : v.id) ||
                "User";
            d.name = `${d.id}:${y}`;
          }
        }
        d.displayName || (d.displayName = d.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const d = C0(
              o.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create,
            ),
            { data: g, error: f } = await S0({ publicKey: d, signal: u });
          return g
            ? {
                data: {
                  factorId: t,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: g },
                },
                error: null,
              }
            : { data: null, error: f };
        }
        case "request": {
          const d = N0(
              o.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request,
            ),
            { data: g, error: f } = await b0(
              Object.assign(Object.assign({}, o.webauthn.credential_options), {
                publicKey: d,
                signal: u,
              }),
            );
          return g
            ? {
                data: {
                  factorId: t,
                  challengeId: o.id,
                  webauthn: { type: o.webauthn.type, credential_response: g },
                },
                error: null,
              }
            : { data: null, error: f };
        }
      }
    } catch (o) {
      return P(o)
        ? { data: null, error: o }
        : { data: null, error: new on("Unexpected error in challenge", o) };
    }
  }
  async _verify({ challengeId: t, factorId: n, webauthn: r }) {
    return this.client.mfa.verify({ factorId: n, challengeId: t, webauthn: r });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new ds("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Oc())
        return {
          data: null,
          error: new on("Browser does not support WebAuthn", null),
        };
      const { data: a, error: o } = await this.challenge(
        { factorId: t, webauthn: { rpId: n, rpOrigins: r }, signal: s },
        { request: i },
      );
      if (!a) return { data: null, error: o };
      const { webauthn: l } = a;
      return this._verify({
        factorId: t,
        challengeId: a.challengeId,
        webauthn: {
          type: l.type,
          rpId: n,
          rpOrigins: r,
          credential_response: l.credential_response,
        },
      });
    } catch (a) {
      return P(a)
        ? { data: null, error: a }
        : { data: null, error: new on("Unexpected error in authenticate", a) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new ds("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Oc())
        return {
          data: null,
          error: new on("Browser does not support WebAuthn", null),
        };
      const { data: a, error: o } = await this._enroll({ friendlyName: t });
      if (!a)
        return (
          await this.client.mfa
            .listFactors()
            .then((d) => {
              var g;
              return (g = d.data) === null || g === void 0
                ? void 0
                : g.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === t &&
                      f.status !== "unverified",
                  );
            })
            .then((d) =>
              d
                ? this.client.mfa.unenroll({
                    factorId: d == null ? void 0 : d.id,
                  })
                : void 0,
            ),
          { data: null, error: o }
        );
      const { data: l, error: u } = await this._challenge(
        {
          factorId: a.id,
          friendlyName: a.friendly_name,
          webauthn: { rpId: n, rpOrigins: r },
          signal: s,
        },
        { create: i },
      );
      return l
        ? this._verify({
            factorId: a.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: n,
              rpOrigins: r,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (a) {
      return P(a)
        ? { data: null, error: a }
        : { data: null, error: new on("Unexpected error in register", a) };
    }
  }
}
d0();
const R0 = {
  url: jv,
  storageKey: Cv,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Nv,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4,
};
async function Ic(e, t, n) {
  return await n();
}
const Pn = {};
class hs {
  get jwks() {
    var t, n;
    return (n =
      (t = Pn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !==
      null && n !== void 0
      ? n
      : { keys: [] };
  }
  set jwks(t) {
    Pn[this.storageKey] = Object.assign(
      Object.assign({}, Pn[this.storageKey]),
      { jwks: t },
    );
  }
  get jwks_cached_at() {
    var t, n;
    return (n =
      (t = Pn[this.storageKey]) === null || t === void 0
        ? void 0
        : t.cachedAt) !== null && n !== void 0
      ? n
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Pn[this.storageKey] = Object.assign(
      Object.assign({}, Pn[this.storageKey]),
      { cachedAt: t },
    );
  }
  constructor(t) {
    var n, r, s;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const i = Object.assign(Object.assign({}, R0), t);
    if (
      ((this.storageKey = i.storageKey),
      (this.instanceID =
        (n = hs.nextInstanceID[this.storageKey]) !== null && n !== void 0
          ? n
          : 0),
      (hs.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      this.instanceID > 0 && fe())
    ) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(a), this.logDebugMessages && console.trace(a));
    }
    if (
      ((this.persistSession = i.persistSession),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new l0({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = of(i.fetch)),
      (this.lock = i.lock || Ic),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      (this.throwOnError = i.throwOnError),
      (this.lockAcquireTimeout = i.lockAcquireTimeout),
      i.lock
        ? (this.lock = i.lock)
        : this.persistSession &&
            fe() &&
            !(
              (r = globalThis == null ? void 0 : globalThis.navigator) ===
                null || r === void 0
            ) &&
            r.locks
          ? (this.lock = c0)
          : (this.lock = Ic),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new T0(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (i.storage
            ? (this.storage = i.storage)
            : af()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = Pc(this.memoryStorage))),
          i.userStorage && (this.userStorage = i.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Pc(this.memoryStorage))),
      fe() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (a) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          a,
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (a) => {
          this._debug(
            "received broadcast notification from other tab or client",
            a,
          );
          try {
            await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
          } catch (o) {
            this._debug("#broadcastChannel", "error", o);
          }
        });
    }
    this.initialize().catch((a) => {
      this._debug("#initialize()", "error", a);
    });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${nf}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...t),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize(),
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let n = {},
        r = "none";
      if (
        (fe() &&
          ((n = Fv(window.location.href)),
          this._isImplicitGrantCallback(n)
            ? (r = "implicit")
            : (await this._isPKCECallback(n)) && (r = "pkce")),
        fe() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(n, r);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i,
            ),
            Iv(i))
          ) {
            const l =
              (t = i.details) === null || t === void 0 ? void 0 : t.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: a, redirectType: o } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            a,
            "redirect type",
            o,
          ),
          await this._saveSession(a),
          setTimeout(async () => {
            o === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a)
              : await this._notifyAllSubscribers("SIGNED_IN", a);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (n) {
      return P(n)
        ? this._returnResult({ error: n })
        : this._returnResult({
            error: new on("Unexpected error during initialization", n),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(t) {
    var n, r, s;
    try {
      const i = await O(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = t == null ? void 0 : t.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Ge,
        }),
        { data: a, error: o } = i;
      if (o || !a)
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if (P(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(t) {
    var n, r, s;
    try {
      let i;
      if ("email" in t) {
        const { email: d, password: g, options: f } = t;
        let v = null,
          y = null;
        (this.flowType === "pkce" &&
          ([v, y] = await Nn(this.storage, this.storageKey)),
          (i = await O(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: d,
              password: g,
              data:
                (n = f == null ? void 0 : f.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: v,
              code_challenge_method: y,
            },
            xform: Ge,
          })));
      } else if ("phone" in t) {
        const { phone: d, password: g, options: f } = t;
        i = await O(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: d,
            password: g,
            data:
              (r = f == null ? void 0 : f.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: Ge,
        });
      } else
        throw new Vs(
          "You must provide either an email or phone number and a password",
        );
      const { data: a, error: o } = i;
      if (o || !a)
        return (
          await he(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: o })
        );
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithPassword(t) {
    try {
      let n;
      if ("email" in t) {
        const { email: i, password: a, options: o } = t;
        n = await O(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Tc,
          },
        );
      } else if ("phone" in t) {
        const { phone: i, password: a, options: o } = t;
        n = await O(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Tc,
          },
        );
      } else
        throw new Vs(
          "You must provide either an email or phone number and a password",
        );
      const { data: r, error: s } = n;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!r || !r.session || !r.user) {
        const i = new Cn();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        r.session &&
          (await this._saveSession(r.session),
          await this._notifyAllSubscribers("SIGNED_IN", r.session)),
        this._returnResult({
          data: Object.assign(
            { user: r.user, session: r.session },
            r.weak_password ? { weakPassword: r.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (n) {
      if (P(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, s, i;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = t.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(t),
      )
    );
  }
  async signInWithWeb3(t) {
    const { chain: n } = t;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(t) {
    var n, r, s, i, a, o, l, u, d, g, f;
    let v, y;
    if ("message" in t) ((v = t.message), (y = t.signature));
    else {
      const { chain: _, wallet: k, statement: m, options: h } = t;
      let p;
      if (fe())
        if (typeof k == "object") p = k;
        else {
          const B = window;
          if (
            "ethereum" in B &&
            typeof B.ethereum == "object" &&
            "request" in B.ethereum &&
            typeof B.ethereum.request == "function"
          )
            p = B.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof k != "object" || !(h != null && h.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        p = k;
      }
      const x = new URL(
          (n = h == null ? void 0 : h.url) !== null && n !== void 0
            ? n
            : window.location.href,
        ),
        j = await p
          .request({ method: "eth_requestAccounts" })
          .then((B) => B)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!j || j.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const b = uf(j[0]);
      let C =
        (r = h == null ? void 0 : h.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!C) {
        const B = await p.request({ method: "eth_chainId" });
        C = h0(B);
      }
      const T = {
        domain: x.host,
        address: b,
        statement: m,
        uri: x.href,
        version: "1",
        chainId: C,
        nonce:
          (s = h == null ? void 0 : h.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (a =
            (i = h == null ? void 0 : h.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && a !== void 0
            ? a
            : new Date(),
        expirationTime:
          (o = h == null ? void 0 : h.signInWithEthereum) === null ||
          o === void 0
            ? void 0
            : o.expirationTime,
        notBefore:
          (l = h == null ? void 0 : h.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (u = h == null ? void 0 : h.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (d = h == null ? void 0 : h.signInWithEthereum) === null ||
          d === void 0
            ? void 0
            : d.resources,
      };
      ((v = p0(T)),
        (y = await p.request({ method: "personal_sign", params: [f0(v), b] })));
    }
    try {
      const { data: _, error: k } = await O(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: v, signature: y },
            !((g = t.options) === null || g === void 0) && g.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = t.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null,
          ),
          xform: Ge,
        },
      );
      if (k) throw k;
      if (!_ || !_.session || !_.user) {
        const m = new Cn();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        _.session &&
          (await this._saveSession(_.session),
          await this._notifyAllSubscribers("SIGNED_IN", _.session)),
        this._returnResult({ data: Object.assign({}, _), error: k })
      );
    } catch (_) {
      if (P(_))
        return this._returnResult({
          data: { user: null, session: null },
          error: _,
        });
      throw _;
    }
  }
  async signInWithSolana(t) {
    var n, r, s, i, a, o, l, u, d, g, f, v;
    let y, _;
    if ("message" in t) ((y = t.message), (_ = t.signature));
    else {
      const { chain: k, wallet: m, statement: h, options: p } = t;
      let x;
      if (fe())
        if (typeof m == "object") x = m;
        else {
          const b = window;
          if (
            "solana" in b &&
            typeof b.solana == "object" &&
            (("signIn" in b.solana && typeof b.solana.signIn == "function") ||
              ("signMessage" in b.solana &&
                typeof b.solana.signMessage == "function"))
          )
            x = b.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof m != "object" || !(p != null && p.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        x = m;
      }
      const j = new URL(
        (n = p == null ? void 0 : p.url) !== null && n !== void 0
          ? n
          : window.location.href,
      );
      if ("signIn" in x && x.signIn) {
        const b = await x.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                p == null ? void 0 : p.signInWithSolana,
              ),
              { version: "1", domain: j.host, uri: j.href },
            ),
            h ? { statement: h } : null,
          ),
        );
        let C;
        if (Array.isArray(b) && b[0] && typeof b[0] == "object") C = b[0];
        else if (
          b &&
          typeof b == "object" &&
          "signedMessage" in b &&
          "signature" in b
        )
          C = b;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in C &&
          "signature" in C &&
          (typeof C.signedMessage == "string" ||
            C.signedMessage instanceof Uint8Array) &&
          C.signature instanceof Uint8Array
        )
          ((y =
            typeof C.signedMessage == "string"
              ? C.signedMessage
              : new TextDecoder().decode(C.signedMessage)),
            (_ = C.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in x) ||
          typeof x.signMessage != "function" ||
          !("publicKey" in x) ||
          typeof x != "object" ||
          !x.publicKey ||
          !("toBase58" in x.publicKey) ||
          typeof x.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        y = [
          `${j.host} wants you to sign in with your Solana account:`,
          x.publicKey.toBase58(),
          ...(h ? ["", h, ""] : [""]),
          "Version: 1",
          `URI: ${j.href}`,
          `Issued At: ${(s = (r = p == null ? void 0 : p.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (i = p == null ? void 0 : p.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${p.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (a = p == null ? void 0 : p.signInWithSolana) === null ||
            a === void 0
          ) && a.expirationTime
            ? [`Expiration Time: ${p.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (o = p == null ? void 0 : p.signInWithSolana) === null ||
            o === void 0
          ) && o.chainId
            ? [`Chain ID: ${p.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = p == null ? void 0 : p.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${p.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = p == null ? void 0 : p.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${p.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (g =
              (d = p == null ? void 0 : p.signInWithSolana) === null ||
              d === void 0
                ? void 0
                : d.resources) === null || g === void 0
          ) && g.length
            ? [
                "Resources",
                ...p.signInWithSolana.resources.map((C) => `- ${C}`),
              ]
            : []),
        ].join(`
`);
        const b = await x.signMessage(new TextEncoder().encode(y), "utf8");
        if (!b || !(b instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        _ = b;
      }
    }
    try {
      const { data: k, error: m } = await O(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: y, signature: dn(_) },
            !((f = t.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (v = t.options) === null || v === void 0
                        ? void 0
                        : v.captchaToken,
                  },
                }
              : null,
          ),
          xform: Ge,
        },
      );
      if (m) throw m;
      if (!k || !k.session || !k.user) {
        const h = new Cn();
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      return (
        k.session &&
          (await this._saveSession(k.session),
          await this._notifyAllSubscribers("SIGNED_IN", k.session)),
        this._returnResult({ data: Object.assign({}, k), error: m })
      );
    } catch (k) {
      if (P(k))
        return this._returnResult({
          data: { user: null, session: null },
          error: k,
        });
      throw k;
    }
  }
  async _exchangeCodeForSession(t) {
    const n = await tn(this.storage, `${this.storageKey}-code-verifier`),
      [r, s] = (n ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") throw new Av();
      const { data: i, error: a } = await O(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: r },
          xform: Ge,
        },
      );
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), a))
        throw a;
      if (!i || !i.session || !i.user) {
        const o = new Cn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: o,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", i.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, i), {
            redirectType: s ?? null,
          }),
          error: a,
        })
      );
    } catch (i) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(i)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: n,
          provider: r,
          token: s,
          access_token: i,
          nonce: a,
        } = t,
        o = await O(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: s,
              access_token: i,
              nonce: a,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: Ge,
          },
        ),
        { data: l, error: u } = o;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!l || !l.session || !l.user) {
        const d = new Cn();
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: u })
      );
    } catch (n) {
      if (P(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, s, i, a;
    try {
      if ("email" in t) {
        const { email: o, options: l } = t;
        let u = null,
          d = null;
        this.flowType === "pkce" &&
          ([u, d] = await Nn(this.storage, this.storageKey));
        const { error: g } = await O(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data:
              (n = l == null ? void 0 : l.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: d,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      if ("phone" in t) {
        const { phone: o, options: l } = t,
          { data: u, error: d } = await O(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: o,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (a = l == null ? void 0 : l.channel) !== null && a !== void 0
                    ? a
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: d,
        });
      }
      throw new Vs("You must provide either an email or phone number.");
    } catch (o) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(o)))
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      throw o;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      let s, i;
      "options" in t &&
        ((s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (i =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: a, error: o } = await O(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: Ge,
        },
      );
      if (o) throw o;
      if (!a) throw new Error("An error occurred on token verification.");
      const l = a.session,
        u = a.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l,
          )),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (s) {
      if (P(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(t) {
    var n, r, s, i, a;
    try {
      let o = null,
        l = null;
      this.flowType === "pkce" &&
        ([o, l] = await Nn(this.storage, this.storageKey));
      const u = await O(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null,
                ),
                "domain" in t ? { domain: t.domain } : null,
              ),
              {
                redirect_to:
                  (r =
                    (n = t.options) === null || n === void 0
                      ? void 0
                      : n.redirectTo) !== null && r !== void 0
                    ? r
                    : void 0,
              },
            ),
            !((s = t == null ? void 0 : t.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: o,
            code_challenge_method: l,
          },
        ),
        headers: this.headers,
        xform: i0,
      });
      return (
        !((i = u.data) === null || i === void 0) &&
          i.url &&
          fe() &&
          !(
            !((a = t.options) === null || a === void 0) && a.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (o) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(o)))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate(),
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new Pe();
        const { error: s } = await O(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (t) {
      if (P(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async resend(t) {
    try {
      const n = `${this.url}/resend`;
      if ("email" in t) {
        const { email: r, type: s, options: i } = t,
          { error: a } = await O(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              email: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      } else if ("phone" in t) {
        const { phone: r, type: s, options: i } = t,
          { data: a, error: o } = await O(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              phone: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: a == null ? void 0 : a.message_id,
          },
          error: o,
        });
      }
      throw new Vs(
        "You must provide either an email or phone number and a type",
      );
    } catch (n) {
      if (P(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (n) => n),
      )
    );
  }
  async _acquireLock(t, n) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })(),
            ),
              await r;
            this.pendingInLock.length;
          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await r;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let t = null;
      const n = await tn(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < Aa : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          t.expires_at,
        ),
        !r)
      ) {
        if (this.userStorage) {
          const a = await tn(this.userStorage, this.storageKey + "-user");
          a != null && a.user ? (t.user = a.user) : (t.user = Da());
        }
        if (
          this.storage.isServer &&
          t.user &&
          !t.user.__isUserNotAvailableProxy
        ) {
          const a = { value: this.suppressGetSessionWarning };
          ((t.user = t0(t.user, a)),
            a.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: t }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(
        t.refresh_token,
      );
      return i
        ? this._returnResult({ data: { session: null }, error: i })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const n = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (n.data.user && (this.suppressGetSessionWarning = !0), n);
  }
  async _getUser(t) {
    try {
      return t
        ? await O(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: It,
          })
        : await this._useSession(async (n) => {
            var r, s, i;
            const { data: a, error: o } = n;
            if (o) throw o;
            return !(
              !((r = a.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Pe() }
              : await O(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = a.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: It,
                });
          });
    } catch (n) {
      if (P(n))
        return (
          $a(n) &&
            (await this._removeSession(),
            await he(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: n })
        );
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(t, n),
      )
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: s, error: i } = r;
        if (i) throw i;
        if (!s.session) throw new Pe();
        const a = s.session;
        let o = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([o, l] = await Nn(this.storage, this.storageKey));
        const { data: u, error: d } = await O(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: o,
              code_challenge_method: l,
            }),
            jwt: a.access_token,
            xform: It,
          },
        );
        if (d) throw d;
        return (
          (a.user = u.user),
          await this._saveSession(a),
          await this._notifyAllSubscribers("USER_UPDATED", a),
          this._returnResult({ data: { user: a.user }, error: null })
        );
      });
    } catch (r) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(r)))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(t),
      )
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Pe();
      const n = Date.now() / 1e3;
      let r = n,
        s = !0,
        i = null;
      const { payload: a } = Ws(t.access_token);
      if ((a.exp && ((r = a.exp), (s = r <= n)), s)) {
        const { data: o, error: l } = await this._callRefreshToken(
          t.refresh_token,
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!o) return { data: { user: null, session: null }, error: null };
        i = o;
      } else {
        const { data: o, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        ((i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i));
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (n) {
      if (P(n))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(t),
      )
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: a, error: o } = n;
          if (o) throw o;
          t = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Pe();
        const { data: s, error: i } = await this._callRefreshToken(
          t.refresh_token,
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (n) {
      if (P(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async _getSessionFromURL(t, n) {
    try {
      if (!fe()) throw new qs("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new qs(
          t.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: t.error || "unspecified_error",
            code: t.error_code || "unspecified_code",
          },
        );
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new kc("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new qs("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
        )
          throw new kc("No code detected.");
        const { data: h, error: p } = await this._exchangeCodeForSession(
          t.code,
        );
        if (p) throw p;
        const x = new URL(window.location.href);
        return (
          x.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", x.toString()),
          { data: { session: h.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        refresh_token: a,
        expires_in: o,
        expires_at: l,
        token_type: u,
      } = t;
      if (!i || !o || !a || !u) throw new qs("No session defined in URL");
      const d = Math.round(Date.now() / 1e3),
        g = parseInt(o);
      let f = d + g;
      l && (f = parseInt(l));
      const v = f - d;
      v * 1e3 <= An &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${g}s`,
        );
      const y = f - g;
      d - y >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            y,
            f,
            d,
          )
        : d - y < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            y,
            f,
            d,
          );
      const { data: _, error: k } = await this._getUser(i);
      if (k) throw k;
      const m = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        expires_in: g,
        expires_at: f,
        refresh_token: a,
        token_type: u,
        user: _.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: m, redirectType: t.type },
          error: null,
        })
      );
    } catch (r) {
      if (P(r))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: r,
        });
      throw r;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error_description);
  }
  async _isPKCECallback(t) {
    const n = await tn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(t),
      )
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: s, error: i } = n;
      if (i && !$a(i)) return this._returnResult({ error: i });
      const a =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, t);
        if (
          o &&
          !(
            (Ov(o) &&
              (o.status === 404 || o.status === 401 || o.status === 403)) ||
            $a(o)
          )
        )
          return this._returnResult({ error: o });
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await he(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const n = Bv(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n,
          ),
            this.stateChangeEmitters.delete(n));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, s;
      try {
        const {
          data: { session: i },
          error: a,
        } = n;
        if (a) throw a;
        (await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", i));
      } catch (i) {
        (await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", i),
          console.error(i));
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      s = null;
    this.flowType === "pkce" &&
      ([r, s] = await Nn(this.storage, this.storageKey, !0));
    try {
      return await O(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (i) {
      if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async linkIdentity(t) {
    return "token" in t
      ? this.linkIdentityIdToken(t)
      : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var n;
    try {
      const { data: r, error: s } = await this._useSession(async (i) => {
        var a, o, l, u, d;
        const { data: g, error: f } = i;
        if (f) throw f;
        const v = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
            scopes:
              (o = t.options) === null || o === void 0 ? void 0 : o.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await O(this.fetch, "GET", v, {
          headers: this.headers,
          jwt:
            (d =
              (u = g.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && d !== void 0
              ? d
              : void 0,
        });
      });
      if (s) throw s;
      return (
        fe() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        this._returnResult({
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        })
      );
    } catch (r) {
      if (P(r))
        return this._returnResult({
          data: { provider: t.provider, url: null },
          error: r,
        });
      throw r;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (n) => {
      var r;
      try {
        const {
          error: s,
          data: { session: i },
        } = n;
        if (s) throw s;
        const {
            options: a,
            provider: o,
            token: l,
            access_token: u,
            nonce: d,
          } = t,
          g = await O(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: o,
                id_token: l,
                access_token: u,
                nonce: d,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: Ge,
            },
          ),
          { data: f, error: v } = g;
        return v
          ? this._returnResult({
              data: { user: null, session: null },
              error: v,
            })
          : !f || !f.session || !f.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Cn(),
              })
            : (f.session &&
                (await this._saveSession(f.session),
                await this._notifyAllSubscribers("USER_UPDATED", f.session)),
              this._returnResult({ data: f, error: v }));
      } catch (s) {
        if ((await he(this.storage, `${this.storageKey}-code-verifier`), P(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: a } = n;
        if (a) throw a;
        return await O(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (r = i.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await Wv(
        async (s) => (
          s > 0 && (await qv(200 * Math.pow(2, s - 1))),
          this._debug(n, "refreshing attempt", s),
          await O(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Ge },
          )
        ),
        (s, i) => {
          const a = 200 * Math.pow(2, s);
          return i && La(i) && Date.now() + a - r < An;
        },
      );
    } catch (r) {
      if ((this._debug(n, "error", r), P(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        n,
        "url",
        r,
      ),
      fe() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const s = await tn(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let a = await tn(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !a &&
          ((a = { user: s.user }),
          await $n(this.userStorage, this.storageKey + "-user", a)),
          (s.user =
            (t = a == null ? void 0 : a.user) !== null && t !== void 0
              ? t
              : Da()));
      } else if (s && !s.user && !s.user) {
        const a = await tn(this.storage, this.storageKey + "-user");
        a && a != null && a.user
          ? ((s.user = a.user),
            await he(this.storage, this.storageKey + "-user"),
            await $n(this.storage, this.storageKey, s))
          : (s.user = Da());
      }
      if (
        (this._debug(r, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(r, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const i =
        ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 -
          Date.now() <
        Aa;
      if (
        (this._debug(
          r,
          `session has${i ? "" : " not"} expired with margin of ${Aa}s`,
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: a } = await this._callRefreshToken(s.refresh_token);
          a &&
            (console.error(a),
            La(a) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                a,
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: o } = await this._getUser(s.access_token);
          !o && a != null && a.user
            ? ((s.user = a.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (a) {
          (console.error("Error getting user data:", a),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              a,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(r, "error", s), console.error(s));
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new Pe();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Yi();
      const { data: i, error: a } = await this._refreshAccessToken(t);
      if (a) throw a;
      if (!i.session) throw new Pe();
      (await this._saveSession(i.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session));
      const o = { data: i.session, error: null };
      return (this.refreshingDeferred.resolve(o), o);
    } catch (i) {
      if ((this._debug(s, "error", i), P(i))) {
        const a = { data: null, error: i };
        return (
          La(i) || (await this._removeSession()),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(a),
          a
        );
      }
      throw (
        (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
        i
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const i = [],
        a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
          try {
            await o.callback(t, n);
          } catch (l) {
            i.push(l);
          }
        });
      if ((await Promise.all(a), i.length > 0)) {
        for (let o = 0; o < i.length; o += 1) console.error(i[o]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(t) {
    (this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await he(this.storage, `${this.storageKey}-code-verifier`));
    const n = Object.assign({}, t),
      r = n.user && n.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        n.user &&
        (await $n(this.userStorage, this.storageKey + "-user", {
          user: n.user,
        }));
      const s = Object.assign({}, n);
      delete s.user;
      const i = Cc(s);
      await $n(this.storage, this.storageKey, i);
    } else {
      const s = Cc(n);
      await $n(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await he(this.storage, this.storageKey),
      await he(this.storage, this.storageKey + "-code-verifier"),
      await he(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await he(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        fe() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const t = setInterval(() => this._autoRefreshTokenTick(), An);
    ((this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t));
    const n = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = n),
      n && typeof n == "object" && typeof n.unref == "function"
        ? n.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(n));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), t && clearInterval(t));
    const n = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), n && clearTimeout(n));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((r.expires_at * 1e3 - t) / An);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${An}ms, refresh threshold is ${Bo} ticks`,
              ),
                s <= Bo && (await this._callRefreshToken(r.refresh_token)));
            });
          } catch (n) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              n,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof lf)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !fe() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    (this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  n,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(t, n, r) {
    const s = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [i, a] = await Nn(this.storage, this.storageKey),
        o = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(a)}`,
        });
      s.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      s.push(i.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${s.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        return i
          ? this._returnResult({ data: null, error: i })
          : await O(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: a } = n;
        if (a) return this._returnResult({ data: null, error: a });
        const o = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
                ? { issuer: t.issuer }
                : {},
          ),
          { data: l, error: u } = await O(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: o,
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (t.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          if (i) return this._returnResult({ data: null, error: i });
          const a = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? x0(t.webauthn.credential_response)
                          : k0(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code },
            ),
            { data: o, error: l } = await O(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: a,
                headers: this.headers,
                jwt:
                  (r = s == null ? void 0 : s.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                  o,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
              this._returnResult({ data: o, error: l }));
        });
      } catch (n) {
        if (P(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          if (i) return this._returnResult({ data: null, error: i });
          const a = await O(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/challenge`,
            {
              body: t,
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
          if (a.error) return a;
          const { data: o } = a;
          if (o.type !== "webauthn") return { data: o, error: null };
          switch (o.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, o), {
                  webauthn: Object.assign(Object.assign({}, o.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, o.webauthn.credential_options),
                      {
                        publicKey: w0(o.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, o), {
                  webauthn: Object.assign(Object.assign({}, o.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, o.webauthn.credential_options),
                      {
                        publicKey: _0(o.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (n) {
        if (P(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: n },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const i of (t = n == null ? void 0 : n.factors) !== null &&
    t !== void 0
      ? t
      : [])
      (s.all.push(i), i.status === "verified" && s[i.factor_type].push(i));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(t) {
    var n, r, s, i;
    if (t)
      try {
        const { payload: v } = Ws(t);
        let y = null;
        v.aal && (y = v.aal);
        let _ = y;
        const {
          data: { user: k },
          error: m,
        } = await this.getUser(t);
        if (m) return this._returnResult({ data: null, error: m });
        ((r =
          (n = k == null ? void 0 : k.factors) === null || n === void 0
            ? void 0
            : n.filter((x) => x.status === "verified")) !== null && r !== void 0
          ? r
          : []
        ).length > 0 && (_ = "aal2");
        const p = v.amr || [];
        return {
          data: {
            currentLevel: y,
            nextLevel: _,
            currentAuthenticationMethods: p,
          },
          error: null,
        };
      } catch (v) {
        if (P(v)) return this._returnResult({ data: null, error: v });
        throw v;
      }
    const {
      data: { session: a },
      error: o,
    } = await this.getSession();
    if (o) return this._returnResult({ data: null, error: o });
    if (!a)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: l } = Ws(a.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let d = u;
    ((i =
      (s = a.user.factors) === null || s === void 0
        ? void 0
        : s.filter((v) => v.status === "verified")) !== null && i !== void 0
      ? i
      : []
    ).length > 0 && (d = "aal2");
    const f = l.amr || [];
    return {
      data: { currentLevel: u, nextLevel: d, currentAuthenticationMethods: f },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? await O(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${t}`,
                {
                  headers: this.headers,
                  jwt: r.access_token,
                  xform: (i) => ({ data: i, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new Pe() });
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _approveAuthorization(t, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new Pe() });
        const a = await O(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (o) => ({ data: o, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            fe() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (P(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(t, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new Pe() });
        const a = await O(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (o) => ({ data: o, error: null }),
          },
        );
        return (
          a.data &&
            a.data.redirect_url &&
            fe() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(a.data.redirect_url),
          a
        );
      });
    } catch (r) {
      if (P(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        return r
          ? this._returnResult({ data: null, error: r })
          : n
            ? await O(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new Pe() });
      });
    } catch (t) {
      if (P(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? (await O(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                query: { client_id: t.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new Pe() });
      });
    } catch (n) {
      if (P(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async fetchJwk(t, n = { keys: [] }) {
    let r = n.keys.find((o) => o.kid === t);
    if (r) return r;
    const s = Date.now();
    if (
      ((r = this.jwks.keys.find((o) => o.kid === t)),
      r && this.jwks_cached_at + Rv > s)
    )
      return r;
    const { data: i, error: a } = await O(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (a) throw a;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (r = i.keys.find((o) => o.kid === t)),
      !r)
      ? null
      : r;
  }
  async getClaims(t, n = {}) {
    try {
      let r = t;
      if (!r) {
        const { data: v, error: y } = await this.getSession();
        if (y || !v.session)
          return this._returnResult({ data: null, error: y });
        r = v.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: a,
        raw: { header: o, payload: l },
      } = Ws(r);
      (n != null && n.allowExpired) || Xv(i.exp);
      const u =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              n != null && n.keys
                ? { keys: n.keys }
                : n == null
                  ? void 0
                  : n.jwks,
            );
      if (!u) {
        const { error: v } = await this.getUser(r);
        if (v) throw v;
        return { data: { claims: i, header: s, signature: a }, error: null };
      }
      const d = Zv(s.alg),
        g = await crypto.subtle.importKey("jwk", u, d, !0, ["verify"]);
      if (!(await crypto.subtle.verify(d, g, a, zv(`${o}.${l}`))))
        throw new qo("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: a }, error: null };
    } catch (r) {
      if (P(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
hs.nextInstanceID = {};
const P0 = hs,
  O0 = "2.95.3";
let Or = "";
typeof Deno < "u"
  ? (Or = "deno")
  : typeof document < "u"
    ? (Or = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (Or = "react-native")
      : (Or = "node");
const I0 = { "X-Client-Info": `supabase-js-${Or}/${O0}` },
  A0 = { headers: I0 },
  $0 = { schema: "public" },
  L0 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  D0 = {};
function fs(e) {
  "@babel/helpers - typeof";
  return (
    (fs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fs(e)
  );
}
function U0(e, t) {
  if (fs(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (fs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z0(e) {
  var t = U0(e, "string");
  return fs(t) == "symbol" ? t : t + "";
}
function M0(e, t, n) {
  return (
    (t = z0(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ac(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ac(Object(n), !0).forEach(function (r) {
          M0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ac(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
const B0 = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  F0 = () => Headers,
  V0 = (e, t, n) => {
    const r = B0(n),
      s = F0();
    return async (i, a) => {
      var o;
      const l = (o = await t()) !== null && o !== void 0 ? o : e;
      let u = new s(a == null ? void 0 : a.headers);
      return (
        u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        r(i, te(te({}, a), {}, { headers: u }))
      );
    };
  };
function q0(e) {
  return e.endsWith("/") ? e : e + "/";
}
function W0(e, t) {
  var n, r;
  const { db: s, auth: i, realtime: a, global: o } = e,
    { db: l, auth: u, realtime: d, global: g } = t,
    f = {
      db: te(te({}, l), s),
      auth: te(te({}, u), i),
      realtime: te(te({}, d), a),
      storage: {},
      global: te(
        te(te({}, g), o),
        {},
        {
          headers: te(
            te(
              {},
              (n = g == null ? void 0 : g.headers) !== null && n !== void 0
                ? n
                : {},
            ),
            (r = o == null ? void 0 : o.headers) !== null && r !== void 0
              ? r
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function H0(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(q0(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var K0 = class extends P0 {
    constructor(e) {
      super(e);
    }
  },
  G0 = class {
    constructor(e, t, n) {
      var r, s;
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      const i = H0(e);
      if (!t) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i)));
      const a = `sb-${i.hostname.split(".")[0]}-auth-token`,
        o = {
          db: $0,
          realtime: D0,
          auth: te(te({}, L0), {}, { storageKey: a }),
          global: A0,
        },
        l = W0(n ?? {}, o);
      if (
        ((this.storageKey =
          (r = l.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        ((this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (d, g) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(g)} is not possible`,
                );
              },
            },
          )));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = l.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          l.global.fetch,
        );
      }
      ((this.fetch = V0(t, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          te(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((d) => this.realtime.setAuth(d))
            .catch((d) =>
              console.warn("Failed to set initial Realtime auth token:", d),
            ),
        (this.rest = new Og(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
          timeout: l.db.timeout,
          urlLengthLimit: l.db.urlLengthLimit,
        })),
        (this.storage = new Ev(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n == null ? void 0 : n.storage,
        )),
        l.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new bg(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, n);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        n;
      if (e.accessToken) return await e.accessToken();
      const { data: r } = await e.auth.getSession();
      return (t =
        (n = r.session) === null || n === void 0 ? void 0 : n.access_token) !==
        null && t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        storageKey: i,
        flowType: a,
        lock: o,
        debug: l,
        throwOnError: u,
      },
      d,
      g,
    ) {
      const f = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new K0({
        url: this.authUrl.href,
        headers: te(te({}, f), d),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        flowType: a,
        lock: o,
        debug: l,
        throwOnError: u,
        fetch: g,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (v) => v.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(e) {
      return new Jg(
        this.realtimeUrl.href,
        te(
          te({}, e),
          {},
          {
            params: te(
              te({}, { apikey: this.supabaseKey }),
              e == null ? void 0 : e.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(
          e,
          "CLIENT",
          t == null ? void 0 : t.access_token,
        );
      });
    }
    _handleTokenChanged(e, t, n) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const J0 = (e, t, n) => new G0(e, t, n);
function Q0() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const n = t.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 18 : !1;
}
Q0() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
const Y0 = "https://rxtaludvbiyfevqhmkus.supabase.co",
  X0 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dGFsdWR2Yml5ZmV2cWhta3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMDA5OTIsImV4cCI6MjA4NjY3Njk5Mn0.yEPTaf59v_kpdjR53uJee8zcZLwbDX6qeYytK3X1DQo",
  ht = J0(Y0, X0),
  On = {
    async getInvoices() {
      const { data: e, error: t } = await ht
        .from("invoices")
        .select(
          `
        *,
        invoice_items(*)
      `,
        )
        .order("created_at", { ascending: !1 });
      if (t) throw t;
      return e;
    },
    async getInvoice(e) {
      const { data: t, error: n } = await ht
        .from("invoices")
        .select(
          `
        *,
        invoice_items(*)
      `,
        )
        .eq("id", e)
        .single();
      if (n) throw n;
      return t;
    },
    async createInvoice(e) {
      const { items: t, ...n } = e,
        { data: r, error: s } = await ht
          .from("invoices")
          .insert([n])
          .select()
          .single();
      if (s) throw s;
      if (t && t.length > 0) {
        const i = t.map((o) => ({
            invoice_id: r.id,
            description: o.description,
            quantity: o.qty,
            rate: o.rate,
          })),
          { error: a } = await ht.from("invoice_items").insert(i);
        if (a) throw a;
      }
      return r;
    },
    async updateInvoice(e, t) {
      const { items: n, ...r } = t,
        { data: s, error: i } = await ht
          .from("invoices")
          .update(r)
          .eq("id", e)
          .select()
          .single();
      if (i) throw i;
      if (n) {
        await ht.from("invoice_items").delete().eq("invoice_id", e);
        const a = n.map((l) => ({
            invoice_id: e,
            description: l.description,
            quantity: l.qty,
            rate: l.rate,
          })),
          { error: o } = await ht.from("invoice_items").insert(a);
        if (o) throw o;
      }
      return s;
    },
    async deleteInvoice(e) {
      const { error: t } = await ht.from("invoices").delete().eq("id", e);
      if (t) throw t;
    },
    async getStats() {
      const { data: e, error: t } = await ht
        .from("invoices")
        .select("total_amount, is_paid");
      if (t) throw t;
      const n = e.reduce((i, a) => i + (a.total_amount || 0), 0),
        r = e
          .filter((i) => !i.is_paid)
          .reduce((i, a) => i + (a.total_amount || 0), 0),
        s = e
          .filter((i) => i.is_paid)
          .reduce((i, a) => i + (a.total_amount || 0), 0);
      return {
        totalRevenue: n,
        unpaidTotal: r,
        paidTotal: s,
        totalInvoices: e.length,
        paidInvoices: e.filter((i) => i.is_paid).length,
        unpaidInvoices: e.filter((i) => !i.is_paid).length,
      };
    },
  },
  Z0 = "URfavraut1",
  $c = "2.0.0-elegant",
  Hs = {
    companyInfo: {
      name: "MG Installations",
      address: "21 King Street, 19 Kingsgate Centre",
      email: "matchlessgifts888@gmail.com",
    },
    clientInfo: { name: "", idNumber: "", address: "" },
    invoiceDetails: {
      number: "INV-2026-0001",
      date: new Date().toISOString().split("T")[0],
      currency: "ZAR",
    },
    items: [
      {
        id: crypto.randomUUID(),
        description: "Gate Motor Installation (Centurion D5)",
        qty: 1,
        rate: 6500,
      },
    ],
    discountAmount: 0,
    bankDetails: {
      bankName: "FNB",
      accountName: "Renata Raut",
      accountNumber: "63172829823",
      branchCode: "250655",
      reference: "INV-2026-0001",
    },
  },
  za = {
    fnb: {
      name: "FNB",
      bankName: "FNB",
      accountName: "Renata Raut",
      accountNumber: "63172829823",
      branchCode: "250655",
    },
    capitec: {
      name: "Capitec",
      bankName: "Capitec",
      accountName: "Renata Raut",
      accountNumber: "1141284691",
      branchCode: "",
    },
  },
  Ma = {
    cctv: {
      name: "CCTV System",
      options: [
        { value: 4, label: "4 Camera System" },
        { value: 8, label: "8 Camera System" },
        { value: 16, label: "16 Camera System" },
        { value: 32, label: "32 Camera System" },
      ],
      getItems: (e) => [
        {
          description: `${e} Channel DVR/NVR (H.265+ Video Compression, Network Remote Viewing)`,
          qty: 1,
          rate: e === 4 ? 2500 : e === 8 ? 3500 : e === 16 ? 5500 : 8500,
        },
        {
          description: `${e}x HD Security Cameras (1080P/2MP, Night Vision IR, Weatherproof)`,
          qty: e,
          rate: 450,
        },
        {
          description: `Power Supply (12V DC, ${e} Channel Distribution Box)`,
          qty: 1,
          rate: e === 4 ? 800 : e === 8 ? 1200 : e === 16 ? 1800 : 2500,
        },
        {
          description:
            "Cat5e/Cat6 Network Cable (Installation per camera, avg 20m per camera)",
          qty: e * 20,
          rate: 8,
        },
        {
          description:
            "RG59 Coaxial Cable (Alternative for analog cameras if required)",
          qty: e * 20,
          rate: 6,
        },
        {
          description: "Cable Clips, Cable Ties, Glue & Consumables",
          qty: 1,
          rate: e === 4 ? 300 : e === 8 ? 450 : e === 16 ? 700 : 1e3,
        },
        {
          description:
            "Professional Installation & Configuration (System setup, camera positioning, recording setup, remote viewing)",
          qty: 1,
          rate: e === 4 ? 1500 : e === 8 ? 2500 : e === 16 ? 4e3 : 6e3,
        },
      ],
    },
    dstv: {
      name: "DSTV Installation",
      options: [
        { value: "standard", label: "Standard Package (R1,900)" },
        { value: "custom", label: "Custom Installation" },
      ],
      getItems: (e, t = 0) =>
        e === "standard"
          ? [
              {
                description: "DSTV Decoder (HD/Explora, Full Setup)",
                qty: 1,
                rate: 799,
              },
              {
                description:
                  "Satellite Dish (80cm/90cm, with LNB & Mounting Bracket)",
                qty: 1,
                rate: 700,
              },
              {
                description: "Professional Installation & Signal Alignment",
                qty: 1,
                rate: 400,
              },
              {
                description:
                  "RG6 Coaxial Cable (Standard 20m included in package)",
                qty: 1,
                rate: 0,
              },
            ]
          : [
              { description: "DSTV Decoder", qty: 1, rate: 799 },
              { description: "Satellite Dish with LNB", qty: 1, rate: 700 },
              { description: "Installation Labour", qty: 1, rate: 400 },
              {
                description: "RG6 Coaxial Cable (R6 per meter)",
                qty: t || 20,
                rate: 6,
              },
            ],
    },
  },
  A = {
    classic: {
      name: "Classic Black",
      pageColor: "bg-white",
      textColor: "text-slate-900",
      lineColor: "border-slate-900",
      accentColor: "text-slate-900",
    },
    elegant: {
      name: "Elegant Gray",
      pageColor: "bg-white",
      textColor: "text-slate-600",
      lineColor: "border-slate-400",
      accentColor: "text-slate-700",
    },
    minimal: {
      name: "Minimal Light",
      pageColor: "bg-slate-50",
      textColor: "text-slate-800",
      lineColor: "border-slate-300",
      accentColor: "text-slate-600",
    },
    professional: {
      name: "Professional Navy",
      pageColor: "bg-white",
      textColor: "text-slate-700",
      lineColor: "border-slate-800",
      accentColor: "text-blue-900",
    },
  },
  ey = () => {
    const [e, t] = D.useState(Hs),
      [n, r] = D.useState([]),
      [s, i] = D.useState(!0),
      [a, o] = D.useState("invoice"),
      [l, u] = D.useState(!1),
      [d, g] = D.useState(!1),
      [f, v] = D.useState(!1),
      [y, _] = D.useState(null),
      [k, m] = D.useState({
        totalRevenue: 0,
        unpaidTotal: 0,
        paidTotal: 0,
        totalInvoices: 0,
        paidInvoices: 0,
        unpaidInvoices: 0,
      }),
      [h, p] = D.useState({ show: !1, message: "", type: "success" }),
      [x, j] = D.useState(""),
      [b, C] = D.useState("all"),
      [T, B] = D.useState(!1),
      [U, Ee] = D.useState(!1),
      [He, Jt] = D.useState("1"),
      [fr, pr] = D.useState(""),
      [xn, kn] = D.useState(!1),
      [N, $] = D.useState(!0),
      [E, Y] = D.useState("classic"),
      [re, Qt] = D.useState(!1),
      [rt, mr] = D.useState("fnb"),
      [st, Yt] = D.useState(!1),
      [gr, df] = D.useState("invoice"),
      [hf, Xi] = D.useState(!1),
      [dt, _s] = D.useState(""),
      [Xt, Sn] = D.useState(""),
      [Bl, Fl] = D.useState(20),
      [vr, Vl] = D.useState(!0),
      [Et, ql] = D.useState(!1),
      [Wl, ff] = D.useState(0),
      it = (w, L = "success") => {
        (p({ show: !0, message: w, type: L }),
          setTimeout(() => p({ show: !1, message: "", type: "success" }), 3e3));
      },
      yr = async () => {
        try {
          g(!0);
          const L = (await On.getInvoices()).map((M) => ({
            id: M.id,
            number: M.invoice_number,
            client: M.client_name,
            amount: M.total_amount,
            isPaid: M.is_paid,
            date: M.invoice_date,
            data: {
              companyInfo: {
                name: M.company_name,
                address: M.company_address,
                email: M.company_email,
              },
              clientInfo: {
                name: M.client_name,
                idNumber: M.client_id_number,
                address: M.client_address,
              },
              invoiceDetails: {
                number: M.invoice_number,
                date: M.invoice_date,
                currency: M.currency,
              },
              items: M.invoice_items.map((ze) => ({
                id: ze.id,
                description: ze.description,
                qty: ze.quantity,
                rate: ze.rate,
              })),
              discountAmount: M.discount_amount,
              bankDetails: {
                bankName: M.bank_name,
                accountName: M.account_name,
                accountNumber: M.account_number,
                branchCode: M.branch_code,
                reference: M.payment_reference,
              },
            },
          }));
          r(L);
          const V = await On.getStats();
          m(V);
        } catch (w) {
          (console.error("Error loading invoices:", w),
            it("Failed to load invoices from database", "error"));
        } finally {
          g(!1);
        }
      };
    (D.useEffect(() => {
      T && yr();
    }, [T]),
      D.useEffect(() => {
        if (vr && !Et) {
          const w = setTimeout(() => {
            (ql(!0), setTimeout(() => Vl(!1), 1500));
          }, 2e3);
          return () => clearTimeout(w);
        }
      }, [vr, Et]),
      D.useEffect(() => {
        const w = (L) => {
          if (L.code === "Space" && vr) {
            L.preventDefault();
            const V = Date.now();
            (V - Wl < 300 && (ql(!0), setTimeout(() => Vl(!1), 300)), ff(V));
          }
        };
        return (
          window.addEventListener("keydown", w),
          () => window.removeEventListener("keydown", w)
        );
      }, [vr, Wl]));
    const Hl = D.useCallback(
        (w) => {
          let L = parseInt(w || He) || 1;
          if (n.length > 0) {
            const ze = n[0].number.split("-"),
              bn = parseInt(ze[ze.length - 1]);
            isNaN(bn) || (L = bn + 1);
          }
          return `INV-2026-${L.toString().padStart(4, "0")}`;
        },
        [He, n],
      ),
      pf = () => {
        const w = Hl();
        (t({
          ...Hs,
          invoiceDetails: {
            ...Hs.invoiceDetails,
            number: w,
            date: new Date().toISOString().split("T")[0],
          },
          bankDetails: { ...Hs.bankDetails, reference: w },
        }),
          v(!1),
          _(null),
          o("invoice"),
          i(!0));
      },
      mf = (w) => {
        (w.preventDefault(),
          fr === Z0 ? Ee(!0) : (kn(!0), setTimeout(() => kn(!1), 500), pr("")));
      },
      gf = (w) => {
        w.preventDefault();
        const L = Hl(He);
        (t((V) => ({
          ...V,
          invoiceDetails: { ...V.invoiceDetails, number: L },
          bankDetails: { ...V.bankDetails, reference: L },
        })),
          B(!0));
      },
      vf = async (w, L) => {
        if (window.confirm(`Permanently delete record ${L}?`))
          try {
            (await On.deleteInvoice(w),
              await yr(),
              it("Invoice deleted successfully", "success"));
          } catch (V) {
            (console.error("Error deleting invoice:", V),
              it("Failed to delete invoice", "error"));
          }
      },
      yf = async (w) => {
        try {
          const L = !w.isPaid,
            V = {
              invoice_number: w.data.invoiceDetails.number,
              invoice_date: w.data.invoiceDetails.date,
              company_name: w.data.companyInfo.name,
              company_address: w.data.companyInfo.address,
              company_email: w.data.companyInfo.email,
              client_name: w.data.clientInfo.name,
              client_id_number: w.data.clientInfo.idNumber,
              client_address: w.data.clientInfo.address,
              subtotal: w.data.items.reduce((M, ze) => M + ze.qty * ze.rate, 0),
              discount_amount: w.data.discountAmount,
              total_amount: w.amount,
              currency: w.data.invoiceDetails.currency,
              bank_name: w.data.bankDetails.bankName,
              account_name: w.data.bankDetails.accountName,
              account_number: w.data.bankDetails.accountNumber,
              branch_code: w.data.bankDetails.branchCode,
              payment_reference: w.data.bankDetails.reference,
              is_paid: L,
              paid_date: L ? new Date().toISOString().split("T")[0] : null,
              items: w.data.items,
            };
          (await On.updateInvoice(w.id, V),
            await yr(),
            it(`Invoice marked as ${L ? "paid" : "unpaid"}`, "success"));
        } catch (L) {
          (console.error("Error updating payment status:", L),
            it("Failed to update payment status", "error"));
        }
      },
      wf = () => {
        const w = ["Number", "Client", "Amount", "Status", "Date"],
          L = n.map((Zt) => [
            Zt.number,
            Zt.client,
            Zt.amount,
            Zt.isPaid ? "Paid" : "Unpaid",
            Zt.date,
          ]),
          V = [w, ...L].map((Zt) => Zt.join(",")).join(`
`),
          M = new Blob([V], { type: "text/csv" }),
          ze = window.URL.createObjectURL(M),
          bn = document.createElement("a");
        ((bn.href = ze),
          (bn.download = `MG_Vault_Export_${new Date().toISOString().split("T")[0]}.csv`),
          bn.click(),
          it("Export completed", "success"));
      },
      Kl = e.items.reduce((w, L) => w + L.qty * L.rate, 0),
      Gl = Kl - e.discountAmount,
      jt = (w) =>
        new Intl.NumberFormat("en-ZA", {
          style: "currency",
          currency: "ZAR",
        }).format(w),
      Jl = async () => {
        try {
          u(!0);
          const w = {
            invoice_number: e.invoiceDetails.number,
            invoice_date: e.invoiceDetails.date,
            company_name: e.companyInfo.name,
            company_address: e.companyInfo.address,
            company_email: e.companyInfo.email,
            client_name: e.clientInfo.name,
            client_id_number: e.clientInfo.idNumber,
            client_address: e.clientInfo.address,
            subtotal: Kl,
            discount_amount: e.discountAmount,
            total_amount: Gl,
            currency: e.invoiceDetails.currency,
            bank_name: e.bankDetails.bankName,
            account_name: e.bankDetails.accountName,
            account_number: e.bankDetails.accountNumber,
            branch_code: e.bankDetails.branchCode,
            payment_reference: e.bankDetails.reference,
            is_paid: f,
            paid_date: f ? new Date().toISOString().split("T")[0] : null,
            items: e.items,
          };
          if (y)
            (await On.updateInvoice(y, w),
              it("Invoice updated successfully", "success"));
          else {
            const L = await On.createInvoice(w);
            (_(L.id), it("Invoice saved to database", "success"));
          }
          await yr();
        } catch (w) {
          (console.error("Error saving invoice:", w),
            it("Failed to save invoice", "error"));
        } finally {
          u(!1);
        }
      },
      _f = async () => {
        (await Jl(), setTimeout(() => window.print(), 500));
      },
      Zi = (w, L, V) => {
        t({
          ...e,
          items: e.items.map((M) => (M.id === w ? { ...M, [L]: V } : M)),
        });
      },
      Ql = (w) => {
        (t(w.data), v(w.isPaid), _(w.id), o("invoice"), i(!0));
      },
      xf = (w) => {
        const L = za[w];
        (mr(w),
          t((V) => ({
            ...V,
            bankDetails: { ...L, reference: V.invoiceDetails.number },
          })),
          Yt(!1));
      },
      kf = () => {
        if (!dt || !Xt) return;
        const w = Ma[dt];
        let L;
        dt === "cctv"
          ? (L = w.getItems(parseInt(Xt)))
          : dt === "dstv" && (L = w.getItems(Xt, Bl));
        const V = L.map((M) => ({ ...M, id: crypto.randomUUID() }));
        (t((M) => ({ ...M, items: [...V] })),
          Xi(!1),
          _s(""),
          Sn(""),
          Fl(20),
          it("Package applied successfully", "success"));
      },
      ea = n.filter((w) => {
        const L =
            w.client.toLowerCase().includes(x.toLowerCase()) ||
            w.number.toLowerCase().includes(x.toLowerCase()),
          V =
            b === "all" ||
            (b === "paid" && w.isPaid) ||
            (b === "unpaid" && !w.isPaid);
        return L && V;
      });
    return vr
      ? c.jsxs("div", {
          className: "fixed inset-0 bg-black overflow-hidden",
          children: [
            c.jsx("div", {
              className: "absolute inset-0 z-10",
              children: [0, 1, 2, 3, 4].map((w) =>
                c.jsx(
                  "div",
                  {
                    className: `absolute left-0 right-0 bg-gradient-to-r from-slate-900 to-slate-800 transition-all duration-1000 ${Et ? (w % 2 === 0 ? "-translate-y-full" : "translate-y-full") : ""}`,
                    style: {
                      height: "20%",
                      top: `${w * 20}%`,
                      transitionDelay: `${w * 100}ms`,
                    },
                  },
                  `h-${w}`,
                ),
              ),
            }),
            c.jsx("div", {
              className: "absolute inset-0 z-20",
              children: [0, 1, 2, 3, 4, 5, 6].map((w) =>
                c.jsx(
                  "div",
                  {
                    className: `absolute top-0 bottom-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 transition-all duration-1000 ${Et ? (w % 2 === 0 ? "-translate-x-full" : "translate-x-full") : ""}`,
                    style: {
                      width: "14.28%",
                      left: `${w * 14.28}%`,
                      transitionDelay: `${200 + w * 80}ms`,
                    },
                  },
                  `v-${w}`,
                ),
              ),
            }),
            c.jsx("div", {
              className: "absolute inset-0 z-30",
              children: [0, 1, 2, 3, 4, 5, 6, 7].map((w) =>
                c.jsx(
                  "div",
                  {
                    className: `absolute bg-gradient-to-br from-slate-700/90 to-slate-600/90 transition-all duration-1000 ${Et ? (w % 2 === 0 ? "-translate-x-full -translate-y-full" : "translate-x-full translate-y-full") : ""}`,
                    style: {
                      width: "300%",
                      height: "15%",
                      top: `${w * 12.5}%`,
                      left: "-100%",
                      transform: "rotate(-15deg)",
                      transitionDelay: `${400 + w * 60}ms`,
                    },
                  },
                  `d-${w}`,
                ),
              ),
            }),
            c.jsx("div", {
              className: "absolute inset-0 z-40",
              children: [0, 1, 2, 3, 4, 5].map((w) =>
                c.jsx(
                  "div",
                  {
                    className: `absolute bg-gradient-radial from-blue-900/70 via-indigo-900/50 to-transparent rounded-full transition-all duration-1000 ${Et ? "scale-[3] opacity-0" : "scale-100 opacity-100"}`,
                    style: {
                      width: "30vw",
                      height: "30vw",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transitionDelay: `${600 + w * 100}ms`,
                    },
                  },
                  `c-${w}`,
                ),
              ),
            }),
            c.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center z-50 pointer-events-none",
              children: c.jsx("div", {
                className: `transition-all duration-700 ${Et ? "opacity-0 scale-150 blur-xl" : "opacity-100 scale-100 blur-0"}`,
                children: c.jsxs("div", {
                  className: "relative",
                  children: [
                    c.jsx("div", {
                      className:
                        "absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse",
                    }),
                    c.jsxs("div", {
                      className: "relative",
                      children: [
                        c.jsx("h1", {
                          className:
                            "text-9xl font-extralight text-white tracking-tight mb-2 drop-shadow-2xl",
                          children: "Welcome",
                        }),
                        c.jsxs("div", {
                          className: "flex items-center justify-center gap-4",
                          children: [
                            c.jsx("div", {
                              className:
                                "h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent",
                            }),
                            c.jsx("p", {
                              className:
                                "text-5xl font-light text-white/90 tracking-[0.3em] uppercase",
                              children: "Rudz",
                            }),
                            c.jsx("div", {
                              className:
                                "h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            c.jsx("div", {
              className: "absolute bottom-12 left-1/2 -translate-x-1/2 z-50",
              children: c.jsx("div", {
                className: `transition-opacity duration-500 ${Et ? "opacity-0" : "opacity-100"}`,
                children: c.jsx("p", {
                  className:
                    "text-xs text-white/30 uppercase tracking-[0.3em] text-center animate-pulse",
                  children: "Double tap spacebar to skip",
                }),
              }),
            }),
            c.jsx("style", {
              jsx: !0,
              children: `
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `,
            }),
          ],
        })
      : T
        ? c.jsxs("div", {
            className: "min-h-screen bg-slate-50 flex",
            children: [
              h.show &&
                c.jsx("div", {
                  className: `fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl transform transition-all duration-300 ${h.type === "success" ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"}`,
                  children: c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      h.type === "success"
                        ? c.jsx(Us, { size: 20 })
                        : c.jsx(ac, { size: 20 }),
                      c.jsx("span", {
                        className: "font-semibold",
                        children: h.message,
                      }),
                    ],
                  }),
                }),
              c.jsxs("aside", {
                className: `${N ? "w-72" : "w-20"} bg-white border-r border-slate-200 min-h-screen transition-all duration-300 fixed left-0 top-0 z-30 flex flex-col`,
                children: [
                  c.jsx("div", {
                    className: "p-6 border-b border-slate-200",
                    children: c.jsx("div", {
                      className: "flex items-center justify-between",
                      children: N
                        ? c.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              c.jsx("div", {
                                className:
                                  "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                children: c.jsx(cc, {
                                  size: 20,
                                  className: "text-white",
                                }),
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("h1", {
                                    className:
                                      "text-slate-900 font-medium text-lg tracking-tight",
                                    children: "MG Elegant",
                                  }),
                                  c.jsxs("p", {
                                    className:
                                      "text-slate-500 text-xs font-normal",
                                    children: ["v", $c],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : c.jsx("div", {
                            className:
                              "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mx-auto",
                            children: c.jsx(cc, {
                              size: 20,
                              className: "text-white",
                            }),
                          }),
                    }),
                  }),
                  c.jsxs("nav", {
                    className: "flex-1 p-4 space-y-2",
                    children: [
                      c.jsxs("button", {
                        onClick: () => o("invoice"),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${a === "invoice" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`,
                        children: [
                          c.jsx(Ta, { size: 20 }),
                          N &&
                            c.jsx("span", {
                              className: "font-medium",
                              children: "Invoice",
                            }),
                        ],
                      }),
                      c.jsxs("button", {
                        onClick: () => o("dashboard"),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${a === "dashboard" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`,
                        children: [
                          c.jsx(og, { size: 20 }),
                          N &&
                            c.jsx("span", {
                              className: "font-medium",
                              children: "Dashboard",
                            }),
                        ],
                      }),
                      c.jsxs("button", {
                        onClick: () => o("vault"),
                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${a === "vault" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`,
                        children: [
                          c.jsx(rg, { size: 20 }),
                          N &&
                            c.jsx("span", {
                              className: "font-medium",
                              children: "Vault",
                            }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "p-4 border-t border-slate-200 space-y-2",
                    children: [
                      c.jsxs("button", {
                        onClick: () => $(!N),
                        className:
                          "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 transition-all",
                        children: [
                          c.jsx(cg, { size: 20 }),
                          N &&
                            c.jsx("span", {
                              className: "font-medium",
                              children: "Collapse",
                            }),
                        ],
                      }),
                      c.jsxs("button", {
                        onClick: () => {
                          window.confirm("Logout from system?") &&
                            (B(!1), pr(""), Ee(!1));
                        },
                        className:
                          "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all",
                        children: [
                          c.jsx(ug, { size: 20 }),
                          N &&
                            c.jsx("span", {
                              className: "font-medium",
                              children: "Logout",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: `flex-1 ${N ? "ml-72" : "ml-20"} transition-all duration-300 p-8`,
                children: [
                  a === "dashboard" &&
                    c.jsxs("div", {
                      className: "space-y-6 animate-fadeIn",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("h2", {
                                  className:
                                    "text-3xl font-light text-slate-900 tracking-tight",
                                  children: "Analytics Dashboard",
                                }),
                                c.jsx("p", {
                                  className: "text-slate-500 font-normal mt-1",
                                  children: "Real-time business metrics",
                                }),
                              ],
                            }),
                            c.jsxs("button", {
                              onClick: yr,
                              disabled: d,
                              className:
                                "px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2",
                              children: [
                                d
                                  ? c.jsx(Ra, {
                                      size: 16,
                                      className: "animate-spin",
                                    })
                                  : c.jsx(fg, { size: 16 }),
                                "Refresh Data",
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                          children: [
                            c.jsxs("div", {
                              className:
                                "bg-white border-2 border-slate-900 rounded-lg p-6 hover:shadow-lg transition-all",
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-4",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                      children: c.jsx(yg, {
                                        size: 20,
                                        className: "text-white",
                                      }),
                                    }),
                                    c.jsx(oc, {
                                      className: "text-slate-400",
                                      size: 16,
                                    }),
                                  ],
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-slate-500 text-xs font-medium uppercase tracking-wide mb-1",
                                  children: "Total Revenue",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-3xl font-light text-slate-900",
                                  children: jt(k.totalRevenue),
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className:
                                "bg-white border-2 border-slate-900 rounded-lg p-6 hover:shadow-lg transition-all",
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-4",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                      children: c.jsx(Us, {
                                        size: 20,
                                        className: "text-white",
                                      }),
                                    }),
                                    c.jsx(oc, {
                                      className: "text-slate-400",
                                      size: 16,
                                    }),
                                  ],
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-slate-500 text-xs font-medium uppercase tracking-wide mb-1",
                                  children: "Paid Total",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-3xl font-light text-slate-900",
                                  children: jt(k.paidTotal),
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className:
                                "bg-white border-2 border-slate-900 rounded-lg p-6 hover:shadow-lg transition-all",
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-4",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                      children: c.jsx(Na, {
                                        size: 20,
                                        className: "text-white",
                                      }),
                                    }),
                                    c.jsx(eg, {
                                      className: "text-slate-400",
                                      size: 16,
                                    }),
                                  ],
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-slate-500 text-xs font-medium uppercase tracking-wide mb-1",
                                  children: "Unpaid Total",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-3xl font-light text-slate-900",
                                  children: jt(k.unpaidTotal),
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className:
                                "bg-white border-2 border-slate-900 rounded-lg p-6 hover:shadow-lg transition-all",
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-4",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center",
                                      children: c.jsx(Ta, {
                                        size: 20,
                                        className: "text-white",
                                      }),
                                    }),
                                    c.jsx(Ca, {
                                      className: "text-slate-400",
                                      size: 16,
                                    }),
                                  ],
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-slate-500 text-xs font-medium uppercase tracking-wide mb-1",
                                  children: "Total Invoices",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-3xl font-light text-slate-900",
                                  children: k.totalInvoices,
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            c.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 rounded-lg p-6",
                              children: [
                                c.jsxs("h3", {
                                  className:
                                    "text-lg font-medium text-slate-900 mb-6 flex items-center gap-2",
                                  children: [
                                    c.jsx(_g, {
                                      className: "text-slate-900",
                                      size: 20,
                                    }),
                                    "Payment Status Breakdown",
                                  ],
                                }),
                                c.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center justify-between pb-3 border-b border-slate-100",
                                      children: [
                                        c.jsx("span", {
                                          className:
                                            "text-slate-600 font-normal",
                                          children: "Paid Invoices",
                                        }),
                                        c.jsx("span", {
                                          className:
                                            "text-2xl font-light text-slate-900",
                                          children: k.paidInvoices,
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center justify-between pb-3 border-b border-slate-100",
                                      children: [
                                        c.jsx("span", {
                                          className:
                                            "text-slate-600 font-normal",
                                          children: "Unpaid Invoices",
                                        }),
                                        c.jsx("span", {
                                          className:
                                            "text-2xl font-light text-slate-900",
                                          children: k.unpaidInvoices,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 rounded-lg p-6",
                              children: [
                                c.jsxs("h3", {
                                  className:
                                    "text-lg font-medium text-slate-900 mb-6 flex items-center gap-2",
                                  children: [
                                    c.jsx(Ca, {
                                      className: "text-slate-900",
                                      size: 20,
                                    }),
                                    "Collection Rate",
                                  ],
                                }),
                                c.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "flex items-center justify-between pb-3 border-b border-slate-100",
                                      children: [
                                        c.jsx("span", {
                                          className:
                                            "text-slate-600 font-normal",
                                          children: "Success Rate",
                                        }),
                                        c.jsxs("span", {
                                          className:
                                            "text-2xl font-light text-slate-900",
                                          children: [
                                            k.totalInvoices > 0
                                              ? Math.round(
                                                  (k.paidInvoices /
                                                    k.totalInvoices) *
                                                    100,
                                                )
                                              : 0,
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    c.jsx("div", {
                                      className:
                                        "w-full bg-slate-100 rounded-full h-2 overflow-hidden",
                                      children: c.jsx("div", {
                                        className:
                                          "h-full bg-slate-900 transition-all duration-1000",
                                        style: {
                                          width: `${k.totalInvoices > 0 ? (k.paidInvoices / k.totalInvoices) * 100 : 0}%`,
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className:
                            "bg-white border border-slate-200 rounded-lg p-6",
                          children: [
                            c.jsxs("h3", {
                              className:
                                "text-lg font-medium text-slate-900 mb-6 flex items-center gap-2",
                              children: [
                                c.jsx(Na, {
                                  className: "text-slate-900",
                                  size: 20,
                                }),
                                "Recent Invoices",
                              ],
                            }),
                            c.jsx("div", {
                              className: "space-y-2",
                              children: n
                                .slice(0, 5)
                                .map((w) =>
                                  c.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:border-slate-200 hover:shadow-sm transition-all",
                                      children: [
                                        c.jsxs("div", {
                                          className: "flex items-center gap-4",
                                          children: [
                                            c.jsx("div", {
                                              className: `w-2 h-2 rounded-full ${w.isPaid ? "bg-slate-900" : "bg-slate-400"}`,
                                            }),
                                            c.jsxs("div", {
                                              children: [
                                                c.jsx("p", {
                                                  className:
                                                    "font-medium text-slate-900",
                                                  children: w.number,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "text-sm text-slate-500",
                                                  children: w.client,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        c.jsxs("div", {
                                          className: "text-right",
                                          children: [
                                            c.jsx("p", {
                                              className:
                                                "font-medium text-slate-900",
                                              children: jt(w.amount),
                                            }),
                                            c.jsx("p", {
                                              className: `text-xs font-medium ${w.isPaid ? "text-slate-900" : "text-slate-500"}`,
                                              children: w.isPaid
                                                ? "Paid"
                                                : "Pending",
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    w.id,
                                  ),
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  a === "vault" &&
                    c.jsxs("div", {
                      className: "space-y-6 animate-fadeIn",
                      children: [
                        c.jsxs("div", {
                          className:
                            "flex items-center justify-between flex-wrap gap-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("h2", {
                                  className:
                                    "text-3xl font-black text-slate-900 tracking-tight",
                                  children: "Invoice Vault",
                                }),
                                c.jsxs("p", {
                                  className: "text-slate-500 font-medium mt-1",
                                  children: [ea.length, " records found"],
                                }),
                              ],
                            }),
                            c.jsx("div", {
                              className: "flex items-center gap-3",
                              children: c.jsxs("button", {
                                onClick: wf,
                                className:
                                  "px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30",
                                children: [
                                  c.jsx(sg, { size: 16 }),
                                  "Export CSV",
                                ],
                              }),
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          className:
                            "bg-white rounded-2xl p-4 shadow-lg border border-slate-200",
                          children: c.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                              c.jsxs("div", {
                                className: "relative",
                                children: [
                                  c.jsx(mg, {
                                    className:
                                      "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                    size: 20,
                                  }),
                                  c.jsx("input", {
                                    type: "text",
                                    placeholder:
                                      "Search by client or invoice number...",
                                    value: x,
                                    onChange: (w) => j(w.target.value),
                                    className:
                                      "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  c.jsx("button", {
                                    onClick: () => C("all"),
                                    className: `flex-1 py-3 rounded-xl font-bold text-sm transition-all ${b === "all" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                    children: "All",
                                  }),
                                  c.jsx("button", {
                                    onClick: () => C("paid"),
                                    className: `flex-1 py-3 rounded-xl font-bold text-sm transition-all ${b === "paid" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                    children: "Paid",
                                  }),
                                  c.jsx("button", {
                                    onClick: () => C("unpaid"),
                                    className: `flex-1 py-3 rounded-xl font-bold text-sm transition-all ${b === "unpaid" ? "bg-amber-600 text-white shadow-lg shadow-amber-500/30" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                                    children: "Unpaid",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        c.jsx("div", {
                          className:
                            "bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden",
                          children: c.jsx("div", {
                            className: "overflow-x-auto",
                            children: c.jsxs("table", {
                              className: "w-full",
                              children: [
                                c.jsx("thead", {
                                  children: c.jsxs("tr", {
                                    className:
                                      "bg-gradient-to-r from-slate-800 to-slate-900 text-white",
                                    children: [
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-left text-sm font-black uppercase tracking-wider",
                                        children: "Invoice #",
                                      }),
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-left text-sm font-black uppercase tracking-wider",
                                        children: "Client",
                                      }),
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-left text-sm font-black uppercase tracking-wider",
                                        children: "Date",
                                      }),
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-right text-sm font-black uppercase tracking-wider",
                                        children: "Amount",
                                      }),
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-center text-sm font-black uppercase tracking-wider",
                                        children: "Status",
                                      }),
                                      c.jsx("th", {
                                        className:
                                          "px-6 py-4 text-center text-sm font-black uppercase tracking-wider",
                                        children: "Actions",
                                      }),
                                    ],
                                  }),
                                }),
                                c.jsx("tbody", {
                                  className: "divide-y divide-slate-200",
                                  children: d
                                    ? c.jsx("tr", {
                                        children: c.jsxs("td", {
                                          colSpan: "6",
                                          className: "px-6 py-12 text-center",
                                          children: [
                                            c.jsx(Ra, {
                                              size: 32,
                                              className:
                                                "animate-spin mx-auto text-indigo-600",
                                            }),
                                            c.jsx("p", {
                                              className:
                                                "text-slate-500 font-semibold mt-2",
                                              children: "Loading records...",
                                            }),
                                          ],
                                        }),
                                      })
                                    : ea.length === 0
                                      ? c.jsx("tr", {
                                          children: c.jsx("td", {
                                            colSpan: "6",
                                            className:
                                              "px-6 py-12 text-center text-slate-500 font-semibold",
                                            children: "No records found",
                                          }),
                                        })
                                      : ea.map((w) =>
                                          c.jsxs(
                                            "tr",
                                            {
                                              className:
                                                "hover:bg-slate-50 transition-all",
                                              children: [
                                                c.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: c.jsx("span", {
                                                    className:
                                                      "font-black text-indigo-600",
                                                    children: w.number,
                                                  }),
                                                }),
                                                c.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: c.jsx("span", {
                                                    className:
                                                      "font-bold text-slate-900",
                                                    children: w.client,
                                                  }),
                                                }),
                                                c.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: c.jsx("span", {
                                                    className:
                                                      "text-slate-600 font-medium",
                                                    children: w.date,
                                                  }),
                                                }),
                                                c.jsx("td", {
                                                  className:
                                                    "px-6 py-4 text-right",
                                                  children: c.jsx("span", {
                                                    className:
                                                      "font-black text-slate-900",
                                                    children: jt(w.amount),
                                                  }),
                                                }),
                                                c.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: c.jsx("div", {
                                                    className:
                                                      "flex justify-center",
                                                    children: c.jsx("span", {
                                                      className: `px-3 py-1 rounded-full text-xs font-black ${w.isPaid ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                                      children: w.isPaid
                                                        ? "PAID"
                                                        : "UNPAID",
                                                    }),
                                                  }),
                                                }),
                                                c.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: c.jsxs("div", {
                                                    className:
                                                      "flex items-center justify-center gap-2",
                                                    children: [
                                                      c.jsx("button", {
                                                        onClick: () => yf(w),
                                                        className: `p-2 rounded-lg transition-all ${w.isPaid ? "bg-slate-100 text-slate-600 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"}`,
                                                        title: w.isPaid
                                                          ? "Mark as unpaid"
                                                          : "Mark as paid",
                                                        children: w.isPaid
                                                          ? c.jsx(Pa, {
                                                              size: 16,
                                                            })
                                                          : c.jsx(Us, {
                                                              size: 16,
                                                            }),
                                                      }),
                                                      c.jsx("button", {
                                                        onClick: () => Ql(w),
                                                        className:
                                                          "p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-all",
                                                        title: "Edit",
                                                        children: c.jsx(hg, {
                                                          size: 16,
                                                        }),
                                                      }),
                                                      c.jsx("button", {
                                                        onClick: () => {
                                                          (Ql(w),
                                                            setTimeout(
                                                              () =>
                                                                window.print(),
                                                              300,
                                                            ));
                                                        },
                                                        className:
                                                          "p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-all",
                                                        title: "Print",
                                                        children: c.jsx(uc, {
                                                          size: 16,
                                                        }),
                                                      }),
                                                      c.jsx("button", {
                                                        onClick: () =>
                                                          vf(w.id, w.number),
                                                        className:
                                                          "p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all",
                                                        title: "Delete",
                                                        children: c.jsx(vg, {
                                                          size: 16,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            },
                                            w.id,
                                          ),
                                        ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  a === "invoice" &&
                    c.jsxs("div", {
                      className: "animate-fadeIn",
                      children: [
                        c.jsx("div", {
                          className:
                            "no-print action-bar bg-white rounded-lg p-4 shadow-sm border border-slate-200 mb-6",
                          children: c.jsxs("div", {
                            className:
                              "flex items-center justify-between flex-wrap gap-4",
                            children: [
                              c.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  c.jsxs("button", {
                                    onClick: () => i(!s),
                                    className: `px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${s ? "bg-slate-900 text-white" : "bg-white border border-slate-300 text-slate-700 hover:border-slate-900"}`,
                                    children: [
                                      s
                                        ? c.jsx(wg, { size: 16 })
                                        : c.jsx(lg, { size: 16 }),
                                      s ? "Editing" : "Locked",
                                    ],
                                  }),
                                  c.jsxs("button", {
                                    onClick: () => v(!f),
                                    className: `px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${f ? "bg-slate-900 text-white" : "bg-white border border-slate-300 text-slate-700 hover:border-slate-900"}`,
                                    children: [
                                      f
                                        ? c.jsx(Us, { size: 16 })
                                        : c.jsx(Na, { size: 16 }),
                                      f ? "Paid" : "Unpaid",
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      c.jsxs("button", {
                                        onClick: () => Qt(!re),
                                        className:
                                          "px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:border-slate-900 font-medium text-sm transition-all flex items-center gap-2",
                                        children: [
                                          c.jsx(dg, { size: 16 }),
                                          "Theme",
                                        ],
                                      }),
                                      re &&
                                        c.jsx("div", {
                                          className:
                                            "absolute top-full mt-2 left-0 bg-white rounded-lg shadow-xl border border-slate-200 p-2 min-w-[200px] z-50",
                                          children: Object.entries(A).map(
                                            ([w, L]) =>
                                              c.jsx(
                                                "button",
                                                {
                                                  onClick: () => {
                                                    (Y(w), Qt(!1));
                                                  },
                                                  className: `w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${E === w ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-50"}`,
                                                  children: L.name,
                                                },
                                                w,
                                              ),
                                          ),
                                        }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      c.jsxs("button", {
                                        className:
                                          "px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:border-slate-900 font-medium text-sm transition-all flex items-center gap-2",
                                        children: [
                                          c.jsx(Ta, { size: 16 }),
                                          gr === "quote"
                                            ? "Quote"
                                            : gr === "both"
                                              ? "Quote & Invoice"
                                              : "Invoice",
                                        ],
                                      }),
                                      c.jsxs("select", {
                                        value: gr,
                                        onChange: (w) => df(w.target.value),
                                        className:
                                          "absolute inset-0 opacity-0 cursor-pointer w-full",
                                        children: [
                                          c.jsx("option", {
                                            value: "quote",
                                            children: "Quote",
                                          }),
                                          c.jsx("option", {
                                            value: "both",
                                            children: "Quote & Invoice",
                                          }),
                                          c.jsx("option", {
                                            value: "invoice",
                                            children: "Invoice",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      c.jsxs("button", {
                                        onClick: () => Yt(!st),
                                        className:
                                          "px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:border-slate-900 font-medium text-sm transition-all flex items-center gap-2",
                                        children: [
                                          c.jsx(ng, { size: 16 }),
                                          za[rt].name,
                                        ],
                                      }),
                                      st &&
                                        c.jsx("div", {
                                          className:
                                            "absolute top-full mt-2 left-0 bg-white rounded-lg shadow-xl border border-slate-200 p-2 min-w-[200px] z-50",
                                          children: Object.entries(za).map(
                                            ([w, L]) =>
                                              c.jsx(
                                                "button",
                                                {
                                                  onClick: () => xf(w),
                                                  className: `w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${rt === w ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-50"}`,
                                                  children: L.name,
                                                },
                                                w,
                                              ),
                                          ),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  c.jsxs("button", {
                                    onClick: () => Xi(!0),
                                    className:
                                      "px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2",
                                    children: [
                                      c.jsx(ag, { size: 16 }),
                                      "Quick Package",
                                    ],
                                  }),
                                  c.jsxs("button", {
                                    onClick: Jl,
                                    disabled: l,
                                    className:
                                      "px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50",
                                    children: [
                                      l
                                        ? c.jsx(Ra, {
                                            size: 16,
                                            className: "animate-spin",
                                          })
                                        : c.jsx(pg, { size: 16 }),
                                      l ? "Saving..." : "Save",
                                    ],
                                  }),
                                  c.jsxs("button", {
                                    onClick: _f,
                                    className:
                                      "px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2",
                                    children: [
                                      c.jsx(uc, { size: 16 }),
                                      "Print",
                                    ],
                                  }),
                                  c.jsxs("button", {
                                    onClick: pf,
                                    className:
                                      "px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:border-slate-900 rounded-lg font-medium transition-all flex items-center gap-2",
                                    children: [c.jsx(lc, { size: 16 }), "New"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        hf &&
                          c.jsx("div", {
                            className:
                              "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                            children: c.jsxs("div", {
                              className:
                                "bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 border border-slate-200",
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-8",
                                  children: [
                                    c.jsx("h3", {
                                      className:
                                        "text-2xl font-light text-slate-900 tracking-tight",
                                      children: "Quick Package",
                                    }),
                                    c.jsx("button", {
                                      onClick: () => {
                                        (Xi(!1), _s(""), Sn(""));
                                      },
                                      className:
                                        "text-slate-400 hover:text-slate-900 transition-all",
                                      children: c.jsx(Pa, { size: 24 }),
                                    }),
                                  ],
                                }),
                                c.jsxs("div", {
                                  className: "space-y-6",
                                  children: [
                                    c.jsxs("div", {
                                      children: [
                                        c.jsx("label", {
                                          className:
                                            "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-3",
                                          children: "Installation Type",
                                        }),
                                        c.jsxs("div", {
                                          className: "grid grid-cols-2 gap-3",
                                          children: [
                                            c.jsxs("button", {
                                              onClick: () => {
                                                (_s("cctv"), Sn(""));
                                              },
                                              className: `p-4 rounded-lg border transition-all ${dt === "cctv" ? "border-2 border-slate-900 bg-slate-50" : "border border-slate-200 hover:border-slate-400"}`,
                                              children: [
                                                c.jsx(ig, {
                                                  className:
                                                    "mx-auto mb-2 text-slate-900",
                                                  size: 24,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "font-medium text-slate-900",
                                                  children: "CCTV System",
                                                }),
                                              ],
                                            }),
                                            c.jsxs("button", {
                                              onClick: () => {
                                                (_s("dstv"), Sn(""));
                                              },
                                              className: `p-4 rounded-lg border transition-all ${dt === "dstv" ? "border-2 border-slate-900 bg-slate-50" : "border border-slate-200 hover:border-slate-400"}`,
                                              children: [
                                                c.jsx(Ca, {
                                                  className:
                                                    "mx-auto mb-2 text-slate-900",
                                                  size: 24,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "font-medium text-slate-900",
                                                  children: "DSTV",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    dt === "cctv" &&
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("label", {
                                            className:
                                              "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-3",
                                            children: "Camera Count",
                                          }),
                                          c.jsx("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: Ma.cctv.options.map((w) =>
                                              c.jsxs(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    Sn(w.value.toString()),
                                                  className: `p-4 rounded-lg border transition-all ${Xt === w.value.toString() ? "border-2 border-slate-900 bg-slate-50" : "border border-slate-200 hover:border-slate-400"}`,
                                                  children: [
                                                    c.jsx("p", {
                                                      className:
                                                        "text-3xl font-light text-slate-900 mb-1",
                                                      children: w.value,
                                                    }),
                                                    c.jsx("p", {
                                                      className:
                                                        "text-xs text-slate-500 uppercase tracking-wide",
                                                      children: "Cameras",
                                                    }),
                                                  ],
                                                },
                                                w.value,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                    dt === "dstv" &&
                                      c.jsxs("div", {
                                        children: [
                                          c.jsx("label", {
                                            className:
                                              "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-3",
                                            children: "Package Type",
                                          }),
                                          c.jsx("div", {
                                            className: "space-y-3",
                                            children: Ma.dstv.options.map((w) =>
                                              c.jsx(
                                                "button",
                                                {
                                                  onClick: () => Sn(w.value),
                                                  className: `w-full p-4 rounded-lg border transition-all text-left ${Xt === w.value ? "border-2 border-slate-900 bg-slate-50" : "border border-slate-200 hover:border-slate-400"}`,
                                                  children: c.jsx("p", {
                                                    className:
                                                      "font-medium text-slate-900",
                                                    children: w.label,
                                                  }),
                                                },
                                                w.value,
                                              ),
                                            ),
                                          }),
                                          Xt === "custom" &&
                                            c.jsxs("div", {
                                              className: "mt-4",
                                              children: [
                                                c.jsx("label", {
                                                  className:
                                                    "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-2",
                                                  children:
                                                    "Cable Length (meters) - R6 per meter",
                                                }),
                                                c.jsx("input", {
                                                  type: "number",
                                                  value: Bl,
                                                  onChange: (w) =>
                                                    Fl(
                                                      parseInt(
                                                        w.target.value,
                                                      ) || 0,
                                                    ),
                                                  className:
                                                    "w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none text-slate-900",
                                                  placeholder:
                                                    "Enter cable length",
                                                  min: "0",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    dt &&
                                      Xt &&
                                      c.jsx("button", {
                                        onClick: kf,
                                        className:
                                          "w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all",
                                        children: "Apply Package",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        c.jsx("div", {
                          className: `invoice-print-wrapper ${A[E].pageColor} shadow-2xl max-w-[210mm] mx-auto`,
                          children: c.jsxs("div", {
                            className: "invoice-inner p-16 relative",
                            children: [
                              f &&
                                c.jsx("div", {
                                  className:
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] pointer-events-none z-10 opacity-10",
                                  children: c.jsx("div", {
                                    className: `border-4 ${A[E].lineColor} rounded-full px-20 py-10`,
                                    children: c.jsx("p", {
                                      className: `text-8xl font-light tracking-[0.2em] uppercase ${A[E].textColor}`,
                                      children: "Paid",
                                    }),
                                  }),
                                }),
                              c.jsxs("div", {
                                className:
                                  "invoice-header flex justify-between items-start mb-20 pb-8 border-b-2 border-double",
                                style: { borderColor: "currentColor" },
                                children: [
                                  c.jsxs("div", {
                                    children: [
                                      s
                                        ? c.jsx("input", {
                                            className: `text-2xl font-light tracking-wide bg-transparent border-b ${A[E].lineColor} px-2 py-1 ${A[E].textColor}`,
                                            value: e.companyInfo.name,
                                            onChange: (w) =>
                                              t({
                                                ...e,
                                                companyInfo: {
                                                  ...e.companyInfo,
                                                  name: w.target.value,
                                                },
                                              }),
                                          })
                                        : c.jsx("h1", {
                                            className: `text-2xl font-light tracking-wide ${A[E].textColor}`,
                                            children: e.companyInfo.name,
                                          }),
                                      c.jsxs("div", {
                                        className: `mt-4 text-xs ${A[E].textColor} opacity-70 leading-relaxed`,
                                        children: [
                                          c.jsx("p", {
                                            children: e.companyInfo.address,
                                          }),
                                          c.jsx("p", {
                                            children: e.companyInfo.email,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      c.jsx("p", {
                                        className: `text-xs font-light uppercase tracking-[0.2em] mb-3 ${A[E].textColor} opacity-50`,
                                        children:
                                          gr === "quote"
                                            ? "Quote"
                                            : gr === "both"
                                              ? "Quote & Invoice"
                                              : "Invoice",
                                      }),
                                      c.jsx("p", {
                                        className: `text-3xl font-extralight tracking-tight ${A[E].accentColor}`,
                                        children: e.invoiceDetails.number,
                                      }),
                                      c.jsx("p", {
                                        className: `text-xs mt-2 ${A[E].textColor} opacity-70`,
                                        children: e.invoiceDetails.date,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "invoice-bill-to mb-16",
                                children: [
                                  c.jsx("p", {
                                    className: `text-xs font-light uppercase tracking-[0.2em] mb-4 ${A[E].textColor} opacity-50`,
                                    children: "Bill To",
                                  }),
                                  s
                                    ? c.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          c.jsx("input", {
                                            className: `w-full text-base font-normal bg-transparent border-b ${A[E].lineColor} px-2 py-1 ${A[E].textColor}`,
                                            placeholder: "Client Name",
                                            value: e.clientInfo.name,
                                            onChange: (w) =>
                                              t({
                                                ...e,
                                                clientInfo: {
                                                  ...e.clientInfo,
                                                  name: w.target.value,
                                                },
                                              }),
                                          }),
                                          c.jsx("textarea", {
                                            className: `w-full text-sm bg-transparent border ${A[E].lineColor} px-3 py-2 rounded h-20 ${A[E].textColor} opacity-70`,
                                            placeholder: "Client Address",
                                            value: e.clientInfo.address,
                                            onChange: (w) =>
                                              t({
                                                ...e,
                                                clientInfo: {
                                                  ...e.clientInfo,
                                                  address: w.target.value,
                                                },
                                              }),
                                          }),
                                        ],
                                      })
                                    : c.jsxs(c.Fragment, {
                                        children: [
                                          c.jsx("p", {
                                            className: `text-base font-normal mb-2 ${A[E].textColor}`,
                                            children: e.clientInfo.name || "—",
                                          }),
                                          c.jsx("p", {
                                            className: `text-sm whitespace-pre-wrap ${A[E].textColor} opacity-70 leading-relaxed`,
                                            children:
                                              e.clientInfo.address || "—",
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-20",
                                children: [
                                  c.jsxs("table", {
                                    className: "w-full",
                                    children: [
                                      c.jsx("thead", {
                                        children: c.jsxs("tr", {
                                          className: `border-b ${A[E].lineColor}`,
                                          children: [
                                            c.jsx("th", {
                                              className: `text-left py-3 text-xs font-light uppercase tracking-[0.15em] ${A[E].textColor} opacity-50`,
                                              children: "Description",
                                            }),
                                            c.jsx("th", {
                                              className: `text-center py-3 text-xs font-light uppercase tracking-[0.15em] ${A[E].textColor} opacity-50 w-20`,
                                              children: "Qty",
                                            }),
                                            c.jsx("th", {
                                              className: `text-right py-3 text-xs font-light uppercase tracking-[0.15em] ${A[E].textColor} opacity-50 w-28`,
                                              children: "Rate",
                                            }),
                                            c.jsx("th", {
                                              className: `text-right py-3 text-xs font-light uppercase tracking-[0.15em] ${A[E].textColor} opacity-50 w-32`,
                                              children: "Amount",
                                            }),
                                            s &&
                                              c.jsx("th", {
                                                className: "w-10",
                                              }),
                                          ],
                                        }),
                                      }),
                                      c.jsx("tbody", {
                                        children: e.items.map((w, L) =>
                                          c.jsxs(
                                            "tr",
                                            {
                                              className: `border-b ${A[E].lineColor} border-opacity-30`,
                                              children: [
                                                c.jsx("td", {
                                                  className: "py-5 pr-8",
                                                  children: s
                                                    ? c.jsx("textarea", {
                                                        className: `w-full text-sm font-normal bg-transparent border ${A[E].lineColor} rounded px-2 py-1 ${A[E].textColor}`,
                                                        rows: "2",
                                                        value: w.description,
                                                        onChange: (V) =>
                                                          Zi(
                                                            w.id,
                                                            "description",
                                                            V.target.value,
                                                          ),
                                                      })
                                                    : c.jsx("p", {
                                                        className: `text-sm font-normal leading-relaxed ${A[E].textColor}`,
                                                        children: w.description,
                                                      }),
                                                }),
                                                c.jsx("td", {
                                                  className: "py-5 text-center",
                                                  children: s
                                                    ? c.jsx("input", {
                                                        type: "number",
                                                        className: `w-14 text-center bg-transparent border ${A[E].lineColor} rounded py-1 text-sm ${A[E].textColor}`,
                                                        value: w.qty,
                                                        onChange: (V) =>
                                                          Zi(
                                                            w.id,
                                                            "qty",
                                                            parseFloat(
                                                              V.target.value,
                                                            ),
                                                          ),
                                                      })
                                                    : c.jsx("span", {
                                                        className: `text-sm ${A[E].textColor} opacity-70`,
                                                        children: w.qty,
                                                      }),
                                                }),
                                                c.jsx("td", {
                                                  className: "py-5 text-right",
                                                  children: s
                                                    ? c.jsx("input", {
                                                        type: "number",
                                                        className: `w-24 text-right bg-transparent border ${A[E].lineColor} rounded py-1 px-2 text-sm ${A[E].textColor}`,
                                                        value: w.rate,
                                                        onChange: (V) =>
                                                          Zi(
                                                            w.id,
                                                            "rate",
                                                            parseFloat(
                                                              V.target.value,
                                                            ),
                                                          ),
                                                      })
                                                    : c.jsx("span", {
                                                        className: `text-sm ${A[E].textColor} opacity-70`,
                                                        children: jt(w.rate),
                                                      }),
                                                }),
                                                c.jsx("td", {
                                                  className: "py-5 text-right",
                                                  children: c.jsx("span", {
                                                    className: `text-sm font-medium ${A[E].textColor}`,
                                                    children: jt(
                                                      w.qty * w.rate,
                                                    ),
                                                  }),
                                                }),
                                                s &&
                                                  c.jsx("td", {
                                                    className:
                                                      "py-5 text-right",
                                                    children: c.jsx("button", {
                                                      onClick: () =>
                                                        t({
                                                          ...e,
                                                          items: e.items.filter(
                                                            (V) =>
                                                              V.id !== w.id,
                                                          ),
                                                        }),
                                                      className: `${A[E].textColor} opacity-30 hover:opacity-100 transition-all`,
                                                      children: c.jsx(Pa, {
                                                        size: 16,
                                                      }),
                                                    }),
                                                  }),
                                              ],
                                            },
                                            w.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  s &&
                                    c.jsxs("button", {
                                      onClick: () =>
                                        t({
                                          ...e,
                                          items: [
                                            ...e.items,
                                            {
                                              id: crypto.randomUUID(),
                                              description: "",
                                              qty: 1,
                                              rate: 0,
                                            },
                                          ],
                                        }),
                                      className: `mt-4 text-xs uppercase tracking-wide ${A[E].accentColor} opacity-50 hover:opacity-100 transition-all flex items-center gap-2`,
                                      children: [
                                        c.jsx(lc, { size: 14 }),
                                        "Add Item",
                                      ],
                                    }),
                                ],
                              }),
                              c.jsxs("div", {
                                className:
                                  "invoice-totals-section flex justify-between items-end pt-8",
                                children: [
                                  c.jsxs("div", {
                                    children: [
                                      c.jsx("p", {
                                        className: `text-xs font-light uppercase tracking-[0.2em] mb-4 ${A[E].textColor} opacity-50`,
                                        children: "Payment Instructions (EFT)",
                                      }),
                                      c.jsxs("div", {
                                        className: `space-y-1.5 text-xs ${A[E].textColor} opacity-70`,
                                        children: [
                                          c.jsxs("div", {
                                            className: "flex gap-6",
                                            children: [
                                              c.jsx("span", {
                                                className:
                                                  "font-light uppercase tracking-wide w-20",
                                                children: "Bank",
                                              }),
                                              c.jsx("span", {
                                                className: "font-normal",
                                                children:
                                                  e.bankDetails.bankName,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className: "flex gap-6",
                                            children: [
                                              c.jsx("span", {
                                                className:
                                                  "font-light uppercase tracking-wide w-20",
                                                children: "Name",
                                              }),
                                              c.jsx("span", {
                                                className: "font-normal",
                                                children:
                                                  e.bankDetails.accountName,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className: "flex gap-6",
                                            children: [
                                              c.jsx("span", {
                                                className:
                                                  "font-light uppercase tracking-wide w-20",
                                                children: "Account",
                                              }),
                                              c.jsx("span", {
                                                className: "font-normal",
                                                children:
                                                  e.bankDetails.accountNumber,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className: "flex gap-6",
                                            children: [
                                              c.jsx("span", {
                                                className:
                                                  "font-light uppercase tracking-wide w-20",
                                                children: "Reference",
                                              }),
                                              c.jsx("span", {
                                                className: `font-medium ${A[E].accentColor}`,
                                                children:
                                                  e.invoiceDetails.number,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      s &&
                                        e.discountAmount > 0 &&
                                        c.jsxs("div", {
                                          className:
                                            "mb-3 flex items-center justify-end gap-6",
                                          children: [
                                            c.jsx("span", {
                                              className: `text-xs font-light uppercase tracking-wide ${A[E].textColor} opacity-50`,
                                              children: "Discount",
                                            }),
                                            c.jsx("input", {
                                              type: "number",
                                              className: `w-28 text-right bg-transparent border ${A[E].lineColor} rounded py-1 px-2 text-sm ${A[E].textColor}`,
                                              value: e.discountAmount,
                                              onChange: (w) =>
                                                t({
                                                  ...e,
                                                  discountAmount:
                                                    parseFloat(
                                                      w.target.value,
                                                    ) || 0,
                                                }),
                                            }),
                                          ],
                                        }),
                                      c.jsxs("div", {
                                        className: `pt-4 border-t ${A[E].lineColor}`,
                                        children: [
                                          c.jsx("p", {
                                            className: `text-xs font-light uppercase tracking-[0.2em] mb-2 ${A[E].textColor} opacity-50`,
                                            children: "Total Amount",
                                          }),
                                          c.jsx("p", {
                                            className: `text-4xl font-extralight tracking-tight ${A[E].accentColor}`,
                                            children: jt(Gl),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: `invoice-footer mt-20 pt-6 border-t ${A[E].lineColor} flex justify-between items-center`,
                                children: [
                                  c.jsx("p", {
                                    className: `text-[9px] uppercase tracking-[0.2em] ${A[E].textColor} opacity-30`,
                                    children:
                                      "Professional Installation Services",
                                  }),
                                  c.jsx("p", {
                                    className: `text-xs italic ${A[E].textColor} opacity-50`,
                                    children: f
                                      ? "Paid in full"
                                      : "Payment due upon receipt",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              c.jsx("style", {
                children: `
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            width: 100% !important;
          }

          /* Hide everything except the invoice */
          aside,
          nav,
          button,
          .no-print,
          .action-bar {
            display: none !important;
          }

          /* Reset layout shifts from sidebar */
          .ml-72, .ml-20 {
            margin-left: 0 !important;
          }

          /* Remove all decorative shadows/backgrounds */
          .shadow-2xl,
          .shadow-xl,
          .shadow-lg,
          .shadow-sm,
          .shadow {
            box-shadow: none !important;
          }

          /* Remove page padding */
          .p-8 {
            padding: 0 !important;
          }

          /* The invoice container becomes the page */
          .invoice-print-wrapper {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }

          /* Invoice inner padding */
          .invoice-inner {
            padding: 16mm 20mm !important;
          }

          /* Table: never cut a row in half */
          table {
            width: 100% !important;
            border-collapse: collapse !important;
            page-break-inside: auto !important;
          }

          thead {
            display: table-header-group !important;
          }

          tfoot {
            display: table-footer-group !important;
          }

          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          td, th {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Never split these sections across pages */
          .invoice-header {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .invoice-bill-to {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .invoice-totals {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-before: auto !important;
          }

          .invoice-footer {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* If totals section needs to go to next page, do it cleanly */
          .invoice-totals-section {
            break-before: auto;
            break-inside: avoid;
          }

          /* Page setup */
          @page {
            size: A4 portrait;
            margin: 0mm;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `,
              }),
            ],
          })
        : c.jsx("div", {
            className:
              "min-h-screen bg-slate-50 flex items-center justify-center p-4",
            children: c.jsx("div", {
              className: "w-full max-w-md",
              children: U
                ? c.jsxs("div", {
                    className:
                      "bg-white border border-slate-200 rounded-lg p-8 shadow-lg",
                    children: [
                      c.jsxs("div", {
                        className: "text-center mb-8",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-14 h-14 mx-auto mb-4 bg-slate-900 rounded-lg flex items-center justify-center",
                            children: c.jsx(tg, {
                              size: 28,
                              className: "text-white",
                            }),
                          }),
                          c.jsx("h2", {
                            className:
                              "text-2xl font-light text-slate-900 mb-2",
                            children: "Configure System",
                          }),
                          c.jsx("p", {
                            className: "text-slate-500 text-sm",
                            children: "Set your starting invoice number",
                          }),
                        ],
                      }),
                      c.jsxs("form", {
                        onSubmit: gf,
                        className: "space-y-6",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-2",
                                children: "Starting Number",
                              }),
                              c.jsx("input", {
                                type: "number",
                                value: He,
                                onChange: (w) => Jt(w.target.value),
                                className:
                                  "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900",
                                min: "1",
                              }),
                              c.jsxs("p", {
                                className: "text-xs text-slate-500 mt-2",
                                children: [
                                  "Your first invoice will be: INV-2026-",
                                  He.padStart(4, "0"),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("button", {
                            type: "submit",
                            className:
                              "w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all",
                            children: "Initialize System",
                          }),
                        ],
                      }),
                    ],
                  })
                : c.jsxs("div", {
                    className:
                      "bg-white border border-slate-200 rounded-lg p-8 shadow-lg",
                    children: [
                      c.jsxs("div", {
                        className: "text-center mb-8",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-lg flex items-center justify-center",
                            children: c.jsx(gg, {
                              size: 32,
                              className: "text-white",
                            }),
                          }),
                          c.jsx("h1", {
                            className:
                              "text-3xl font-light text-slate-900 mb-2 tracking-tight",
                            children: "MG Elegant",
                          }),
                          c.jsx("p", {
                            className: "text-slate-500 text-sm font-normal",
                            children: "Invoice Management System",
                          }),
                        ],
                      }),
                      c.jsxs("form", {
                        onSubmit: mf,
                        className: "space-y-6",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-xs font-medium uppercase tracking-wide text-slate-500 mb-2",
                                children: "Access Code",
                              }),
                              c.jsx("input", {
                                type: "password",
                                value: fr,
                                onChange: (w) => pr(w.target.value),
                                className: `w-full px-4 py-3 bg-white border ${xn ? "border-red-500" : "border-slate-300"} rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-all`,
                                placeholder: "Enter password",
                                autoFocus: !0,
                              }),
                              xn &&
                                c.jsxs("p", {
                                  className:
                                    "text-red-500 text-xs mt-2 flex items-center gap-1",
                                  children: [
                                    c.jsx(ac, { size: 12 }),
                                    " Invalid access code",
                                  ],
                                }),
                            ],
                          }),
                          c.jsx("button", {
                            type: "submit",
                            className:
                              "w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all",
                            children: "Access System",
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className:
                          "mt-6 pt-6 border-t border-slate-200 text-center",
                        children: c.jsxs("p", {
                          className: "text-xs text-slate-400",
                          children: ["v", $c, " • Secured with Supabase"],
                        }),
                      }),
                    ],
                  }),
            }),
          });
  };
Ba.createRoot(document.getElementById("root")).render(
  c.jsx(zf.StrictMode, { children: c.jsx(ey, {}) }),
);
