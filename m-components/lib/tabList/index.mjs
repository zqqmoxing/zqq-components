import { readonly as rt, shallowRef as ct, watchEffect as it, getCurrentScope as ut, onScopeDispose as dt, watch as A, unref as d, ref as $, openBlock as g, createElementBlock as P, createElementVNode as V, warn as ft, getCurrentInstance as le, computed as z, inject as te, defineComponent as F, mergeProps as vt, renderSlot as ne, onBeforeUnmount as pt, toRef as Be, createBlock as D, Transition as We, withCtx as j, withDirectives as Ke, normalizeClass as B, normalizeStyle as G, vShow as Ue, Fragment as ce, createVNode as E, nextTick as ue, provide as Xe, reactive as Pe, onMounted as ke, onUpdated as Ye, resolveDynamicComponent as Oe, createCommentVNode as I, withModifiers as xe, useSlots as mt, onUnmounted as bt, renderList as he, toDisplayString as ae, createTextVNode as ht } from "vue";
function _t(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
var yt = Object.defineProperty, gt = Object.defineProperties, wt = Object.getOwnPropertyDescriptors, Le = Object.getOwnPropertySymbols, $t = Object.prototype.hasOwnProperty, St = Object.prototype.propertyIsEnumerable, Re = (e, t, n) => t in e ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Et = (e, t) => {
  for (var n in t || (t = {}))
    $t.call(t, n) && Re(e, n, t[n]);
  if (Le)
    for (var n of Le(t))
      St.call(t, n) && Re(e, n, t[n]);
  return e;
}, Pt = (e, t) => gt(e, wt(t));
function Ae(e, t) {
  var n;
  const s = ct();
  return it(() => {
    s.value = e();
  }, Pt(Et({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), rt(s);
}
function qe(e) {
  return ut() ? (dt(e), !0) : !1;
}
var Ve;
const fe = typeof window < "u", U = (e) => typeof e == "number", kt = (e) => typeof e == "string", _e = () => {
};
fe && ((Ve = window == null ? void 0 : window.navigator) == null ? void 0 : Ve.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ge(e) {
  var t;
  const n = d(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ne = fe ? window : void 0, Ot = fe ? window.document : void 0;
function oe(...e) {
  let t, n, s, o;
  if (kt(e[0]) ? ([n, s, o] = e, t = Ne) : [t, n, s, o] = e, !t)
    return _e;
  let r = _e;
  const l = A(() => Ge(t), (a) => {
    r(), a && (a.addEventListener(n, s, o), r = () => {
      a.removeEventListener(n, s, o), r = _e;
    });
  }, { immediate: !0, flush: "post" }), v = () => {
    l(), r();
  };
  return qe(v), v;
}
const ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = "__vueuse_ssr_handlers__";
ge[we] = ge[we] || {};
ge[we];
function Nt({ document: e = Ot } = {}) {
  if (!e)
    return $("visible");
  const t = $(e.visibilityState);
  return oe(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var He = Object.getOwnPropertySymbols, zt = Object.prototype.hasOwnProperty, Tt = Object.prototype.propertyIsEnumerable, Ct = (e, t) => {
  var n = {};
  for (var s in e)
    zt.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && He)
    for (var s of He(e))
      t.indexOf(s) < 0 && Tt.call(e, s) && (n[s] = e[s]);
  return n;
};
function ze(e, t, n = {}) {
  const s = n, { window: o = Ne } = s, r = Ct(s, ["window"]);
  let l;
  const v = o && "ResizeObserver" in o, a = () => {
    l && (l.disconnect(), l = void 0);
  }, c = A(() => Ge(e), (h) => {
    a(), v && o && h && (l = new ResizeObserver(t), l.observe(h, r));
  }, { immediate: !0, flush: "post" }), b = () => {
    a(), c();
  };
  return qe(b), {
    isSupported: v,
    stop: b
  };
}
var Me;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Me || (Me = {}));
function Bt({ window: e = Ne } = {}) {
  if (!e)
    return $(!1);
  const t = $(e.document.hasFocus());
  return oe(e, "blur", () => {
    t.value = !1;
  }), oe(e, "focus", () => {
    t.value = !0;
  }), t;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $e = () => {
}, xt = Object.prototype.hasOwnProperty, Ie = (e, t) => xt.call(e, t), ve = (e) => typeof e == "string", Te = (e) => e !== null && typeof e == "object", Lt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ee = Lt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rt = (e) => e === void 0;
class Je extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function pe(e, t) {
  throw new Je(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ve(e) ? new Je(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const At = "utils/dom/style";
function de(e, t = "px") {
  if (!e)
    return "";
  if (ve(e))
    return e;
  if (U(e))
    return `${e}${t}`;
  Se(At, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.6 */
var me = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [s, o] of t)
    n[s] = o;
  return n;
}, Vt = {
  name: "ArrowLeft"
}, Ht = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mt = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), It = [
  Mt
];
function jt(e, t, n, s, o, r) {
  return g(), P("svg", Ht, It);
}
var Dt = /* @__PURE__ */ me(Vt, [["render", jt], ["__file", "arrow-left.vue"]]), Ft = {
  name: "ArrowRight"
}, Wt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Ut = [
  Kt
];
function Xt(e, t, n, s, o, r) {
  return g(), P("svg", Wt, Ut);
}
var Yt = /* @__PURE__ */ me(Ft, [["render", Xt], ["__file", "arrow-right.vue"]]), qt = {
  name: "Close"
}, Gt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jt = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Qt = [
  Jt
];
function Zt(e, t, n, s, o, r) {
  return g(), P("svg", Gt, Qt);
}
var Ee = /* @__PURE__ */ me(qt, [["render", Zt], ["__file", "close.vue"]]), en = {
  name: "Plus"
}, tn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nn = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), sn = [
  nn
];
function on(e, t, n, s, o, r) {
  return g(), P("svg", tn, sn);
}
var an = /* @__PURE__ */ me(en, [["render", on], ["__file", "plus.vue"]]);
const Qe = "__epPropKey", X = (e) => e, ln = (e) => Te(e) && !!e[Qe], Ze = (e, t) => {
  if (!Te(e) || ln(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: l } = e, a = {
    type: r,
    required: !!s,
    validator: n || l ? (c) => {
      let b = !1, h = [];
      if (n && (h = Array.from(n), Ie(e, "default") && h.push(o), b || (b = h.includes(c))), l && (b || (b = l(c))), !b && h.length > 0) {
        const f = [...new Set(h)].map((m) => JSON.stringify(m)).join(", ");
        ft(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`);
      }
      return b;
    } : void 0,
    [Qe]: !0
  };
  return Ie(e, "default") && (a.default = o), a;
}, K = (e) => _t(Object.entries(e).map(([t, n]) => [
  t,
  Ze(n, t)
])), rn = X([
  String,
  Object,
  Function
]), re = (e, t) => {
  if (e.install = (n) => {
    for (const s of [e, ...Object.values(t != null ? t : {})])
      n.component(s.name, s);
  }, t)
    for (const [n, s] of Object.entries(t))
      e[n] = s;
  return e;
}, cn = (e) => (e.install = $e, e), ie = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, et = "update:modelValue", Ce = ["", "default", "small", "large"], tt = (e) => e, un = Symbol(), dn = Symbol("formContextKey"), fn = Symbol("formItemContextKey"), nt = Symbol("scrollbarContextKey"), be = Symbol("tabsRootContextKey"), vn = (e) => {
  const t = le();
  return z(() => {
    var n, s;
    return (s = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? s : void 0;
  });
}, je = $();
function st(e, t = void 0) {
  const n = le() ? te(un, je) : je;
  return e ? z(() => {
    var s, o;
    return (o = (s = n.value) == null ? void 0 : s[e]) != null ? o : t;
  }) : n;
}
Ze({
  type: String,
  values: Ce,
  required: !1
});
const pn = (e, t = {}) => {
  const n = $(void 0), s = t.prop ? n : vn("size"), o = t.global ? n : st("size"), r = t.form ? { size: void 0 } : te(dn, void 0), l = t.formItem ? { size: void 0 } : te(fn, void 0);
  return z(() => s.value || d(e) || (l == null ? void 0 : l.size) || (r == null ? void 0 : r.size) || o.value || "");
}, mn = "el", bn = "is-", Z = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, Y = (e) => {
  const t = st("namespace"), n = z(() => t.value || mn);
  return {
    namespace: n,
    b: (i = "") => Z(d(n), e, i, "", ""),
    e: (i) => i ? Z(d(n), e, "", i, "") : "",
    m: (i) => i ? Z(d(n), e, "", "", i) : "",
    be: (i, w) => i && w ? Z(d(n), e, i, w, "") : "",
    em: (i, w) => i && w ? Z(d(n), e, "", i, w) : "",
    bm: (i, w) => i && w ? Z(d(n), e, i, "", w) : "",
    bem: (i, w, k) => i && w && k ? Z(d(n), e, i, w, k) : "",
    is: (i, ...w) => {
      const k = w.length >= 1 ? w[0] : !0;
      return i && k ? `${bn}${i}` : "";
    },
    cssVar: (i) => {
      const w = {};
      for (const k in i)
        w[`--${n.value}-${k}`] = i[k];
      return w;
    },
    cssVarName: (i) => `--${n.value}-${i}`,
    cssVarBlock: (i) => {
      const w = {};
      for (const k in i)
        w[`--${n.value}-${e}-${k}`] = i[k];
      return w;
    },
    cssVarBlockName: (i) => `--${n.value}-${e}-${i}`
  };
};
var J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
const hn = K({
  size: {
    type: X([Number, String])
  },
  color: {
    type: String
  }
}), _n = {
  name: "ElIcon",
  inheritAttrs: !1
}, yn = /* @__PURE__ */ F({
  ..._n,
  props: hn,
  setup(e) {
    const t = e, n = Y("icon"), s = z(() => !t.size && !t.color ? {} : {
      fontSize: Rt(t.size) ? void 0 : de(t.size),
      "--color": t.color
    });
    return (o, r) => (g(), P("i", vt({
      class: d(n).b(),
      style: d(s)
    }, o.$attrs), [
      ne(o.$slots, "default")
    ], 16));
  }
});
var gn = /* @__PURE__ */ J(yn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const q = re(gn), se = 4, wn = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, $n = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Sn = K({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), En = /* @__PURE__ */ F({
  __name: "thumb",
  props: Sn,
  setup(e) {
    const t = e, n = "Thumb", s = te(nt), o = Y("scrollbar");
    s || pe(n, "can not inject scrollbar context");
    const r = $(), l = $(), v = $({}), a = $(!1);
    let c = !1, b = !1, h = fe ? document.onselectstart : null;
    const f = z(() => wn[t.vertical ? "vertical" : "horizontal"]), m = z(() => $n({
      size: t.size,
      move: t.move,
      bar: f.value
    })), S = z(() => r.value[f.value.offset] ** 2 / s.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), i = (u) => {
      var y;
      if (u.stopPropagation(), u.ctrlKey || [1, 2].includes(u.button))
        return;
      (y = window.getSelection()) == null || y.removeAllRanges(), k(u);
      const _ = u.currentTarget;
      !_ || (v.value[f.value.axis] = _[f.value.offset] - (u[f.value.client] - _.getBoundingClientRect()[f.value.direction]));
    }, w = (u) => {
      if (!l.value || !r.value || !s.wrapElement)
        return;
      const y = Math.abs(u.target.getBoundingClientRect()[f.value.direction] - u[f.value.client]), _ = l.value[f.value.offset] / 2, O = (y - _) * 100 * S.value / r.value[f.value.offset];
      s.wrapElement[f.value.scroll] = O * s.wrapElement[f.value.scrollSize] / 100;
    }, k = (u) => {
      u.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", W), document.addEventListener("mouseup", H), h = document.onselectstart, document.onselectstart = () => !1;
    }, W = (u) => {
      if (!r.value || !l.value || c === !1)
        return;
      const y = v.value[f.value.axis];
      if (!y)
        return;
      const _ = (r.value.getBoundingClientRect()[f.value.direction] - u[f.value.client]) * -1, O = l.value[f.value.offset] - y, N = (_ - O) * 100 * S.value / r.value[f.value.offset];
      s.wrapElement[f.value.scroll] = N * s.wrapElement[f.value.scrollSize] / 100;
    }, H = () => {
      c = !1, v.value[f.value.axis] = 0, document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", H), p(), b && (a.value = !1);
    }, M = () => {
      b = !1, a.value = !!t.size;
    }, x = () => {
      b = !0, a.value = c;
    };
    pt(() => {
      p(), document.removeEventListener("mouseup", H);
    });
    const p = () => {
      document.onselectstart !== h && (document.onselectstart = h);
    };
    return oe(Be(s, "scrollbarElement"), "mousemove", M), oe(Be(s, "scrollbarElement"), "mouseleave", x), (u, y) => (g(), D(We, {
      name: d(o).b("fade"),
      persisted: ""
    }, {
      default: j(() => [
        Ke(V("div", {
          ref_key: "instance",
          ref: r,
          class: B([d(o).e("bar"), d(o).is(d(f).key)]),
          onMousedown: w
        }, [
          V("div", {
            ref_key: "thumb",
            ref: l,
            class: B(d(o).e("thumb")),
            style: G(d(m)),
            onMousedown: i
          }, null, 38)
        ], 34), [
          [Ue, u.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var De = /* @__PURE__ */ J(En, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Pn = K({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), kn = /* @__PURE__ */ F({
  __name: "bar",
  props: Pn,
  setup(e, { expose: t }) {
    const n = e, s = $(0), o = $(0);
    return t({
      handleScroll: (l) => {
        if (l) {
          const v = l.offsetHeight - se, a = l.offsetWidth - se;
          o.value = l.scrollTop * 100 / v * n.ratioY, s.value = l.scrollLeft * 100 / a * n.ratioX;
        }
      }
    }), (l, v) => (g(), P(ce, null, [
      E(De, {
        move: s.value,
        ratio: l.ratioX,
        size: l.width,
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      E(De, {
        move: o.value,
        ratio: l.ratioY,
        size: l.height,
        vertical: "",
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var On = /* @__PURE__ */ J(kn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Nn = K({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapStyle: {
    type: X([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), zn = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(U)
}, Tn = {
  name: "ElScrollbar"
}, Cn = /* @__PURE__ */ F({
  ...Tn,
  props: Nn,
  emits: zn,
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Y("scrollbar");
    let r, l;
    const v = $(), a = $(), c = $(), b = $("0"), h = $("0"), f = $(), m = $(1), S = $(1), i = "ElScrollbar", w = z(() => {
      const p = {};
      return s.height && (p.height = de(s.height)), s.maxHeight && (p.maxHeight = de(s.maxHeight)), [s.wrapStyle, p];
    }), k = () => {
      var p;
      a.value && ((p = f.value) == null || p.handleScroll(a.value), n("scroll", {
        scrollTop: a.value.scrollTop,
        scrollLeft: a.value.scrollLeft
      }));
    };
    function W(p, u) {
      Te(p) ? a.value.scrollTo(p) : U(p) && U(u) && a.value.scrollTo(p, u);
    }
    const H = (p) => {
      if (!U(p)) {
        Se(i, "value must be a number");
        return;
      }
      a.value.scrollTop = p;
    }, M = (p) => {
      if (!U(p)) {
        Se(i, "value must be a number");
        return;
      }
      a.value.scrollLeft = p;
    }, x = () => {
      if (!a.value)
        return;
      const p = a.value.offsetHeight - se, u = a.value.offsetWidth - se, y = p ** 2 / a.value.scrollHeight, _ = u ** 2 / a.value.scrollWidth, O = Math.max(y, s.minSize), N = Math.max(_, s.minSize);
      m.value = y / (p - y) / (O / (p - O)), S.value = _ / (u - _) / (N / (u - N)), h.value = O + se < p ? `${O}px` : "", b.value = N + se < u ? `${N}px` : "";
    };
    return A(() => s.noresize, (p) => {
      p ? (r == null || r(), l == null || l()) : ({ stop: r } = ze(c, x), l = oe("resize", x));
    }, { immediate: !0 }), A(() => [s.maxHeight, s.height], () => {
      s.native || ue(() => {
        var p;
        x(), a.value && ((p = f.value) == null || p.handleScroll(a.value));
      });
    }), Xe(nt, Pe({
      scrollbarElement: v,
      wrapElement: a
    })), ke(() => {
      s.native || ue(() => x());
    }), Ye(() => x()), t({
      wrap$: a,
      update: x,
      scrollTo: W,
      setScrollTop: H,
      setScrollLeft: M,
      handleScroll: k
    }), (p, u) => (g(), P("div", {
      ref_key: "scrollbar$",
      ref: v,
      class: B(d(o).b())
    }, [
      V("div", {
        ref_key: "wrap$",
        ref: a,
        class: B([
          p.wrapClass,
          d(o).e("wrap"),
          { [d(o).em("wrap", "hidden-default")]: !p.native }
        ]),
        style: G(d(w)),
        onScroll: k
      }, [
        (g(), D(Oe(p.tag), {
          ref_key: "resize$",
          ref: c,
          class: B([d(o).e("view"), p.viewClass]),
          style: G(p.viewStyle)
        }, {
          default: j(() => [
            ne(p.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      p.native ? I("v-if", !0) : (g(), D(On, {
        key: 0,
        ref_key: "barRef",
        ref: f,
        height: h.value,
        width: b.value,
        always: p.always,
        "ratio-x": S.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Bn = /* @__PURE__ */ J(Cn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const xn = re(Bn), Ln = K({
  size: {
    type: [Number, String],
    values: Ce,
    default: "",
    validator: (e) => U(e)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: rn
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: X(String),
    default: "cover"
  }
}), Rn = {
  error: (e) => e instanceof Event
}, An = ["src", "alt", "srcset"], Vn = {
  name: "ElAvatar"
}, Hn = /* @__PURE__ */ F({
  ...Vn,
  props: Ln,
  emits: Rn,
  setup(e, { emit: t }) {
    const n = e, s = Y("avatar"), o = $(!1), r = z(() => {
      const { size: c, icon: b, shape: h } = n, f = [s.b()];
      return ve(c) && f.push(s.m(c)), b && f.push(s.m("icon")), h && f.push(s.m(h)), f;
    }), l = z(() => {
      const { size: c } = n;
      return U(c) ? s.cssVarBlock({
        size: de(c) || ""
      }) : void 0;
    }), v = z(() => ({
      objectFit: n.fit
    }));
    A(() => n.src, () => o.value = !1);
    function a(c) {
      o.value = !0, t("error", c);
    }
    return (c, b) => (g(), P("span", {
      class: B(d(r)),
      style: G(d(l))
    }, [
      (c.src || c.srcSet) && !o.value ? (g(), P("img", {
        key: 0,
        src: c.src,
        alt: c.alt,
        srcset: c.srcSet,
        style: G(d(v)),
        onError: a
      }, null, 44, An)) : c.icon ? (g(), D(d(q), { key: 1 }, {
        default: j(() => [
          (g(), D(Oe(c.icon)))
        ]),
        _: 1
      })) : ne(c.$slots, "default", { key: 2 })
    ], 6));
  }
});
var Mn = /* @__PURE__ */ J(Hn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const In = re(Mn), jn = K({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: Ce,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Dn = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Fn = {
  name: "ElTag"
}, Wn = /* @__PURE__ */ F({
  ...Fn,
  props: jn,
  emits: Dn,
  setup(e, { emit: t }) {
    const n = e, s = pn(), o = Y("tag"), r = z(() => {
      const { type: a, hit: c, effect: b, closable: h, round: f } = n;
      return [
        o.b(),
        o.is("closable", h),
        o.m(a),
        o.m(s.value),
        o.m(b),
        o.is("hit", c),
        o.is("round", f)
      ];
    }), l = (a) => {
      t("close", a);
    }, v = (a) => {
      t("click", a);
    };
    return (a, c) => a.disableTransitions ? (g(), P("span", {
      key: 0,
      class: B(d(r)),
      style: G({ backgroundColor: a.color }),
      onClick: v
    }, [
      V("span", {
        class: B(d(o).e("content"))
      }, [
        ne(a.$slots, "default")
      ], 2),
      a.closable ? (g(), D(d(q), {
        key: 0,
        class: B(d(o).e("close")),
        onClick: xe(l, ["stop"])
      }, {
        default: j(() => [
          E(d(Ee))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : I("v-if", !0)
    ], 6)) : (g(), D(We, {
      key: 1,
      name: `${d(o).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: j(() => [
        V("span", {
          class: B(d(r)),
          style: G({ backgroundColor: a.color }),
          onClick: v
        }, [
          V("span", {
            class: B(d(o).e("content"))
          }, [
            ne(a.$slots, "default")
          ], 2),
          a.closable ? (g(), D(d(q), {
            key: 0,
            class: B(d(o).e("close")),
            onClick: xe(l, ["stop"])
          }, {
            default: j(() => [
              E(d(Ee))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : I("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Kn = /* @__PURE__ */ J(Wn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Un = re(Kn), Xn = K({
  tabs: {
    type: X(Array),
    default: () => tt([])
  }
}), Yn = {
  name: "ElTabBar"
}, qn = /* @__PURE__ */ F({
  ...Yn,
  props: Xn,
  setup(e, { expose: t }) {
    const n = e, s = "ElTabBar", o = le(), r = te(be);
    r || pe(s, "<el-tabs><el-tab-bar /></el-tabs>");
    const l = Y("tabs"), v = $(), a = $(), c = () => {
      let h = 0, f = 0;
      const m = ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height", S = m === "width" ? "x" : "y";
      return n.tabs.every((i) => {
        var w, k, W, H;
        const M = (k = (w = o.parent) == null ? void 0 : w.refs) == null ? void 0 : k[`tab-${i.paneName}`];
        if (!M)
          return !1;
        if (!i.active)
          return !0;
        f = M[`client${ee(m)}`];
        const x = S === "x" ? "left" : "top";
        h = M.getBoundingClientRect()[x] - ((H = (W = M.parentElement) == null ? void 0 : W.getBoundingClientRect()[x]) != null ? H : 0);
        const p = window.getComputedStyle(M);
        return m === "width" && (n.tabs.length > 1 && (f -= Number.parseFloat(p.paddingLeft) + Number.parseFloat(p.paddingRight)), h += Number.parseFloat(p.paddingLeft)), !1;
      }), {
        [m]: `${f}px`,
        transform: `translate${ee(S)}(${h}px)`
      };
    }, b = () => a.value = c();
    return A(() => n.tabs, async () => {
      await ue(), b();
    }, { immediate: !0 }), ze(v, () => b()), t({
      ref: v,
      update: b
    }), (h, f) => (g(), P("div", {
      ref_key: "barRef",
      ref: v,
      class: B([d(l).e("active-bar"), d(l).is(d(r).props.tabPosition)]),
      style: G(a.value)
    }, null, 6));
  }
});
var Gn = /* @__PURE__ */ J(qn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const Jn = K({
  panes: {
    type: X(Array),
    default: () => tt([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  onTabClick: {
    type: X(Function),
    default: $e
  },
  onTabRemove: {
    type: X(Function),
    default: $e
  },
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
}), Fe = "ElTabNav", Qn = F({
  name: Fe,
  props: Jn,
  setup(e, {
    expose: t
  }) {
    const n = le(), s = te(be);
    s || pe(Fe, "<el-tabs><tab-nav /></el-tabs>");
    const o = Y("tabs"), r = Nt(), l = Bt(), v = $(), a = $(), c = $(), b = $(!1), h = $(0), f = $(!1), m = $(!0), S = z(() => ["top", "bottom"].includes(s.props.tabPosition) ? "width" : "height"), i = z(() => ({
      transform: `translate${S.value === "width" ? "X" : "Y"}(-${h.value}px)`
    })), w = () => {
      if (!v.value)
        return;
      const u = v.value[`offset${ee(S.value)}`], y = h.value;
      if (!y)
        return;
      const _ = y > u ? y - u : 0;
      h.value = _;
    }, k = () => {
      if (!v.value || !a.value)
        return;
      const u = a.value[`offset${ee(S.value)}`], y = v.value[`offset${ee(S.value)}`], _ = h.value;
      if (u - _ <= y)
        return;
      const O = u - _ > y * 2 ? _ + y : u - y;
      h.value = O;
    }, W = async () => {
      const u = a.value;
      if (!b.value || !c.value || !v.value || !u)
        return;
      await ue();
      const y = c.value.querySelector(".is-active");
      if (!y)
        return;
      const _ = v.value, O = ["top", "bottom"].includes(s.props.tabPosition), N = y.getBoundingClientRect(), C = _.getBoundingClientRect(), R = O ? u.offsetWidth - C.width : u.offsetHeight - C.height, L = h.value;
      let T = L;
      O ? (N.left < C.left && (T = L - (C.left - N.left)), N.right > C.right && (T = L + N.right - C.right)) : (N.top < C.top && (T = L - (C.top - N.top)), N.bottom > C.bottom && (T = L + (N.bottom - C.bottom))), T = Math.max(T, 0), h.value = Math.min(T, R);
    }, H = () => {
      if (!a.value || !v.value)
        return;
      const u = a.value[`offset${ee(S.value)}`], y = v.value[`offset${ee(S.value)}`], _ = h.value;
      if (y < u) {
        const O = h.value;
        b.value = b.value || {}, b.value.prev = O, b.value.next = O + y < u, u - O < y && (h.value = u - y);
      } else
        b.value = !1, _ > 0 && (h.value = 0);
    }, M = (u) => {
      const y = u.code, {
        up: _,
        down: O,
        left: N,
        right: C
      } = ie;
      if (![_, O, N, C].includes(y))
        return;
      const R = Array.from(u.currentTarget.querySelectorAll("[role=tab]")), L = R.indexOf(u.target);
      let T;
      y === N || y === _ ? L === 0 ? T = R.length - 1 : T = L - 1 : L < R.length - 1 ? T = L + 1 : T = 0, R[T].focus(), R[T].click(), x();
    }, x = () => {
      m.value && (f.value = !0);
    }, p = () => f.value = !1;
    return A(r, (u) => {
      u === "hidden" ? m.value = !1 : u === "visible" && setTimeout(() => m.value = !0, 50);
    }), A(l, (u) => {
      u ? setTimeout(() => m.value = !0, 50) : m.value = !1;
    }), ze(c, H), ke(() => setTimeout(() => W(), 0)), Ye(() => H()), t({
      scrollToActiveTab: W,
      removeFocus: p
    }), A(() => e.panes, () => n.update(), {
      flush: "post"
    }), () => {
      const u = b.value ? [E("span", {
        class: [o.e("nav-prev"), o.is("disabled", !b.value.prev)],
        onClick: w
      }, [E(q, null, {
        default: () => [E(Dt, null, null)]
      })]), E("span", {
        class: [o.e("nav-next"), o.is("disabled", !b.value.next)],
        onClick: k
      }, [E(q, null, {
        default: () => [E(Yt, null, null)]
      })])] : null, y = e.panes.map((_, O) => {
        var N, C;
        const R = _.props.name || _.index || `${O}`, L = _.isClosable || e.editable;
        _.index = `${O}`;
        const T = L ? E(q, {
          class: "is-icon-close",
          onClick: (Q) => e.onTabRemove(_, Q)
        }, {
          default: () => [E(Ee, null, null)]
        }) : null, at = ((C = (N = _.slots).label) == null ? void 0 : C.call(N)) || _.props.label, lt = _.active ? 0 : -1;
        return E("div", {
          ref: `tab-${R}`,
          class: [o.e("item"), o.is(s.props.tabPosition), o.is("active", _.active), o.is("disabled", _.props.disabled), o.is("closable", L), o.is("focus", f.value)],
          id: `tab-${R}`,
          key: `tab-${R}`,
          "aria-controls": `pane-${R}`,
          role: "tab",
          "aria-selected": _.active,
          tabindex: lt,
          onFocus: () => x(),
          onBlur: () => p(),
          onClick: (Q) => {
            p(), e.onTabClick(_, R, Q);
          },
          onKeydown: (Q) => {
            L && (Q.code === ie.delete || Q.code === ie.backspace) && e.onTabRemove(_, Q);
          }
        }, [at, T]);
      });
      return E("div", {
        ref: c,
        class: [o.e("nav-wrap"), o.is("scrollable", !!b.value), o.is(s.props.tabPosition)]
      }, [u, E("div", {
        class: o.e("nav-scroll"),
        ref: v
      }, [E("div", {
        class: [o.e("nav"), o.is(s.props.tabPosition), o.is("stretch", e.stretch && ["top", "bottom"].includes(s.props.tabPosition))],
        ref: a,
        style: i.value,
        role: "tablist",
        onKeydown: M
      }, [e.type ? null : E(Gn, {
        tabs: [...e.panes]
      }, null), y])])]);
    };
  }
}), Zn = K({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number],
    default: ""
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: X(Function),
    default: () => !0
  },
  stretch: Boolean
}), ye = (e) => ve(e) || U(e), es = {
  [et]: (e) => ye(e),
  "tab-click": (e, t) => t instanceof Event,
  "tab-change": (e) => ye(e),
  edit: (e, t) => ["remove", "add"].includes(t),
  "tab-remove": (e) => ye(e),
  "tab-add": () => !0
};
var ts = F({
  name: "ElTabs",
  props: Zn,
  emits: es,
  setup(e, {
    emit: t,
    slots: n,
    expose: s
  }) {
    const o = Y("tabs"), r = $(), l = Pe({}), v = $(e.modelValue || e.activeName || "0"), a = (m) => {
      v.value = m, t(et, m), t("tab-change", m);
    }, c = async (m) => {
      var S, i, w;
      if (v.value !== m)
        try {
          await ((S = e.beforeLeave) == null ? void 0 : S.call(e, m, v.value)) !== !1 && (a(m), (w = (i = r.value) == null ? void 0 : i.removeFocus) == null || w.call(i));
        } catch {
        }
    }, b = (m, S, i) => {
      m.props.disabled || (c(S), t("tab-click", m, i));
    }, h = (m, S) => {
      m.props.disabled || (S.stopPropagation(), t("edit", m.props.name, "remove"), t("tab-remove", m.props.name));
    }, f = () => {
      t("edit", void 0, "add"), t("tab-add");
    };
    return A(() => e.activeName, (m) => c(m)), A(() => e.modelValue, (m) => c(m)), A(v, async () => {
      var m;
      (m = r.value) == null || m.scrollToActiveTab();
    }), Xe(be, {
      props: e,
      currentName: v,
      registerPane: (i) => l[i.uid] = i,
      unregisterPane: (i) => delete l[i]
    }), s({
      currentName: v
    }), () => {
      const m = e.editable || e.addable ? E("span", {
        class: o.e("new-tab"),
        tabindex: "0",
        onClick: f,
        onKeydown: (w) => {
          w.code === ie.enter && f();
        }
      }, [E(q, {
        class: o.is("icon-plus")
      }, {
        default: () => [E(an, null, null)]
      })]) : null, S = E("div", {
        class: [o.e("header"), o.is(e.tabPosition)]
      }, [m, E(Qn, {
        ref: r,
        currentName: v.value,
        editable: e.editable,
        type: e.type,
        panes: Object.values(l),
        stretch: e.stretch,
        onTabClick: b,
        onTabRemove: h
      }, null)]), i = E("div", {
        class: o.e("content")
      }, [ne(n, "default")]);
      return E("div", {
        class: [o.b(), o.m(e.tabPosition), {
          [o.m("card")]: e.type === "card",
          [o.m("border-card")]: e.type === "border-card"
        }]
      }, [...e.tabPosition !== "bottom" ? [S, i] : [i, S]]);
    };
  }
});
const ns = K({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number],
    default: ""
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
}), ss = ["id", "aria-hidden", "aria-labelledby"], os = {
  name: "ElTabPane"
}, as = /* @__PURE__ */ F({
  ...os,
  props: ns,
  setup(e) {
    const t = e, n = "ElTabPane", s = le(), o = mt(), r = te(be);
    r || pe(n, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const l = Y("tab-pane"), v = $(), a = z(() => t.closable || r.props.closable), c = Ae(() => r.currentName.value === (t.name || v.value)), b = $(c.value), h = z(() => t.name || v.value), f = Ae(() => !t.lazy || b.value || c.value);
    A(c, (S) => {
      S && (b.value = !0);
    });
    const m = Pe({
      uid: s.uid,
      slots: o,
      props: t,
      paneName: h,
      active: c,
      index: v,
      isClosable: a
    });
    return ke(() => {
      r.registerPane(m);
    }), bt(() => {
      r.unregisterPane(m.uid);
    }), (S, i) => d(f) ? Ke((g(), P("div", {
      key: 0,
      id: `pane-${d(h)}`,
      class: B(d(l).b()),
      role: "tabpanel",
      "aria-hidden": !d(c),
      "aria-labelledby": `tab-${d(h)}`
    }, [
      ne(S.$slots, "default")
    ], 10, ss)), [
      [Ue, d(c)]
    ]) : I("v-if", !0);
  }
});
var ot = /* @__PURE__ */ J(as, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const ls = re(ts, {
  TabPane: ot
}), rs = cn(ot), cs = { class: "tab-list" }, is = ["onClick"], us = {
  key: 0,
  class: "avatar"
}, ds = { class: "content" }, fs = {
  key: 0,
  class: "title"
}, vs = {
  key: 1,
  class: "time"
}, ps = {
  key: 2,
  class: "time"
}, ms = {
  key: 0,
  class: "actions"
}, bs = ["onClick"], hs = {
  key: 0,
  class: "a-icon"
}, _s = { class: "a-text" }, ys = /* @__PURE__ */ F({
  __name: "index",
  props: {
    list: {
      type: Array
    },
    actions: {
      type: Array
    }
  },
  emits: ["clickItem", "clickBtn"],
  setup(e, { emit: t }) {
    function n(o) {
      t("clickItem", o);
    }
    function s(o) {
      t("clickBtn", o);
    }
    return (o, r) => (g(), P("div", cs, [
      E(d(ls), null, {
        default: j(() => [
          (g(!0), P(ce, null, he(e.list, (l, v) => (g(), D(d(rs), {
            label: l.title
          }, {
            default: j(() => [
              E(d(xn), { "max-height": "300px" }, {
                default: j(() => [
                  (g(!0), P(ce, null, he(l.content, (a, c) => (g(), P("div", {
                    class: "container",
                    key: c,
                    onClick: (b) => n(a)
                  }, [
                    a.avatar ? (g(), P("div", us, [
                      E(d(In), {
                        size: "small",
                        src: a.avatar
                      }, null, 8, ["src"])
                    ])) : I("", !0),
                    V("div", ds, [
                      a.title ? (g(), P("div", fs, [
                        V("div", null, ae(a.title), 1),
                        a.tag ? (g(), D(d(Un), {
                          key: 0,
                          type: a.tagType
                        }, {
                          default: j(() => [
                            ht(ae(a.tag), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])) : I("", !0)
                      ])) : I("", !0),
                      a.desc ? (g(), P("div", vs, ae(a.desc), 1)) : I("", !0),
                      a.time ? (g(), P("div", ps, ae(a.time), 1)) : I("", !0)
                    ])
                  ], 8, is))), 128))
                ]),
                _: 2
              }, 1024),
              e.actions ? (g(), P("div", ms, [
                (g(!0), P(ce, null, he(e.actions, (a, c) => (g(), P("div", {
                  class: B(["a-item", { border: c !== e.actions.length }]),
                  onClick: (b) => s(a),
                  key: c
                }, [
                  a.icon ? (g(), P("div", hs, [
                    E(d(q), null, {
                      default: j(() => [
                        (g(), D(Oe(a.icon)))
                      ]),
                      _: 2
                    }, 1024)
                  ])) : I("", !0),
                  V("div", _s, ae(a.text), 1)
                ], 10, bs))), 128))
              ])) : I("", !0)
            ]),
            _: 2
          }, 1032, ["label"]))), 256))
        ]),
        _: 1
      })
    ]));
  }
});
const gs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ws = /* @__PURE__ */ gs(ys, [["__scopeId", "data-v-a86f737b"]]), Ss = {
  install(e) {
    e.component("TabList", ws);
  }
};
export {
  ws as TabList,
  Ss as default
};
