import { readonly as tt, shallowRef as nt, watchEffect as st, getCurrentScope as at, onScopeDispose as ot, watch as A, unref as h, ref as w, openBlock as S, createElementBlock as P, createElementVNode as M, warn as lt, getCurrentInstance as ue, inject as ae, computed as B, defineComponent as j, mergeProps as rt, renderSlot as oe, onBeforeUnmount as it, toRef as ke, createBlock as X, Transition as ct, withCtx as K, withDirectives as De, normalizeClass as F, normalizeStyle as te, vShow as Ie, Fragment as le, createVNode as E, nextTick as ie, provide as Fe, reactive as Ee, onMounted as Pe, onUpdated as We, resolveDynamicComponent as Oe, createCommentVNode as D, useSlots as ut, onUnmounted as dt, resolveComponent as ft, renderList as he, toDisplayString as se, createTextVNode as vt } from "vue";
function pt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var a = e[t];
    s[a[0]] = a[1];
  }
  return s;
}
var bt = Object.defineProperty, mt = Object.defineProperties, ht = Object.getOwnPropertyDescriptors, Ce = Object.getOwnPropertySymbols, _t = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable, xe = (e, t, n) => t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yt = (e, t) => {
  for (var n in t || (t = {}))
    _t.call(t, n) && xe(e, n, t[n]);
  if (Ce)
    for (var n of Ce(t))
      gt.call(t, n) && xe(e, n, t[n]);
  return e;
}, wt = (e, t) => mt(e, ht(t));
function Be(e, t) {
  var n;
  const s = nt();
  return st(() => {
    s.value = e();
  }, wt(yt({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), tt(s);
}
function Ue(e) {
  return at() ? (ot(e), !0) : !1;
}
var Le;
const de = typeof window < "u", I = (e) => typeof e == "number", $t = (e) => typeof e == "string", _e = () => {
};
de && ((Le = window == null ? void 0 : window.navigator) == null ? void 0 : Le.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ke(e) {
  var t;
  const n = h(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ne = de ? window : void 0, St = de ? window.document : void 0;
function ne(...e) {
  let t, n, s, a;
  if ($t(e[0]) ? ([n, s, a] = e, t = Ne) : [t, n, s, a] = e, !t)
    return _e;
  let c = _e;
  const u = A(() => Ke(t), (r) => {
    c(), r && (r.addEventListener(n, s, a), c = () => {
      r.removeEventListener(n, s, a), c = _e;
    });
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return Ue(f), f;
}
const ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = "__vueuse_ssr_handlers__";
ye[we] = ye[we] || {};
ye[we];
function Et({ document: e = St } = {}) {
  if (!e)
    return w("visible");
  const t = w(e.visibilityState);
  return ne(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var Ae = Object.getOwnPropertySymbols, Pt = Object.prototype.hasOwnProperty, Ot = Object.prototype.propertyIsEnumerable, Nt = (e, t) => {
  var n = {};
  for (var s in e)
    Pt.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Ae)
    for (var s of Ae(e))
      t.indexOf(s) < 0 && Ot.call(e, s) && (n[s] = e[s]);
  return n;
};
function Te(e, t, n = {}) {
  const s = n, { window: a = Ne } = s, c = Nt(s, ["window"]);
  let u;
  const f = a && "ResizeObserver" in a, r = () => {
    u && (u.disconnect(), u = void 0);
  }, o = A(() => Ke(e), (m) => {
    r(), f && a && m && (u = new ResizeObserver(t), u.observe(m, c));
  }, { immediate: !0, flush: "post" }), b = () => {
    r(), o();
  };
  return Ue(b), {
    isSupported: f,
    stop: b
  };
}
var Re;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Re || (Re = {}));
function Tt({ window: e = Ne } = {}) {
  if (!e)
    return w(!1);
  const t = w(e.document.hasFocus());
  return ne(e, "blur", () => {
    t.value = !1;
  }), ne(e, "focus", () => {
    t.value = !0;
  }), t;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $e = () => {
}, zt = Object.prototype.hasOwnProperty, Ve = (e, t) => zt.call(e, t), fe = (e) => typeof e == "string", ze = (e) => e !== null && typeof e == "object", kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, J = kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ct = (e) => e === void 0;
class Xe extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ve(e, t) {
  throw new Xe(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = fe(e) ? new Xe(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const xt = "utils/dom/style";
function ce(e, t = "px") {
  if (!e)
    return "";
  if (fe(e))
    return e;
  if (I(e))
    return `${e}${t}`;
  Se(xt, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.6 */
var pe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [s, a] of t)
    n[s] = a;
  return n;
}, Bt = {
  name: "ArrowLeft"
}, Lt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, At = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Rt = [
  At
];
function Vt(e, t, n, s, a, c) {
  return S(), P("svg", Lt, Rt);
}
var Ht = /* @__PURE__ */ pe(Bt, [["render", Vt], ["__file", "arrow-left.vue"]]), Mt = {
  name: "ArrowRight"
}, jt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dt = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), It = [
  Dt
];
function Ft(e, t, n, s, a, c) {
  return S(), P("svg", jt, It);
}
var Wt = /* @__PURE__ */ pe(Mt, [["render", Ft], ["__file", "arrow-right.vue"]]), Ut = {
  name: "Close"
}, Kt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xt = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), Yt = [
  Xt
];
function qt(e, t, n, s, a, c) {
  return S(), P("svg", Kt, Yt);
}
var Gt = /* @__PURE__ */ pe(Ut, [["render", qt], ["__file", "close.vue"]]), Jt = {
  name: "Plus"
}, Qt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zt = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), en = [
  Zt
];
function tn(e, t, n, s, a, c) {
  return S(), P("svg", Qt, en);
}
var nn = /* @__PURE__ */ pe(Jt, [["render", tn], ["__file", "plus.vue"]]);
const Ye = "__epPropKey", W = (e) => e, sn = (e) => ze(e) && !!e[Ye], an = (e, t) => {
  if (!ze(e) || sn(e))
    return e;
  const { values: n, required: s, default: a, type: c, validator: u } = e, r = {
    type: c,
    required: !!s,
    validator: n || u ? (o) => {
      let b = !1, m = [];
      if (n && (m = Array.from(n), Ve(e, "default") && m.push(a), b || (b = m.includes(o))), u && (b || (b = u(o))), !b && m.length > 0) {
        const d = [...new Set(m)].map((p) => JSON.stringify(p)).join(", ");
        lt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(o)}.`);
      }
      return b;
    } : void 0,
    [Ye]: !0
  };
  return Ve(e, "default") && (r.default = a), r;
}, U = (e) => pt(Object.entries(e).map(([t, n]) => [
  t,
  an(n, t)
])), on = W([
  String,
  Object,
  Function
]), be = (e, t) => {
  if (e.install = (n) => {
    for (const s of [e, ...Object.values(t != null ? t : {})])
      n.component(s.name, s);
  }, t)
    for (const [n, s] of Object.entries(t))
      e[n] = s;
  return e;
}, ln = (e) => (e.install = $e, e), re = {
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
}, qe = "update:modelValue", rn = ["", "default", "small", "large"], Ge = (e) => e, cn = Symbol(), Je = Symbol("scrollbarContextKey"), me = Symbol("tabsRootContextKey"), He = w();
function un(e, t = void 0) {
  const n = ue() ? ae(cn, He) : He;
  return e ? B(() => {
    var s, a;
    return (a = (s = n.value) == null ? void 0 : s[e]) != null ? a : t;
  }) : n;
}
const dn = "el", fn = "is-", G = (e, t, n, s, a) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), s && (c += `__${s}`), a && (c += `--${a}`), c;
}, Y = (e) => {
  const t = un("namespace"), n = B(() => t.value || dn);
  return {
    namespace: n,
    b: (l = "") => G(h(n), e, l, "", ""),
    e: (l) => l ? G(h(n), e, "", l, "") : "",
    m: (l) => l ? G(h(n), e, "", "", l) : "",
    be: (l, y) => l && y ? G(h(n), e, l, y, "") : "",
    em: (l, y) => l && y ? G(h(n), e, "", l, y) : "",
    bm: (l, y) => l && y ? G(h(n), e, l, "", y) : "",
    bem: (l, y, O) => l && y && O ? G(h(n), e, l, y, O) : "",
    is: (l, ...y) => {
      const O = y.length >= 1 ? y[0] : !0;
      return l && O ? `${fn}${l}` : "";
    },
    cssVar: (l) => {
      const y = {};
      for (const O in l)
        y[`--${n.value}-${O}`] = l[O];
      return y;
    },
    cssVarName: (l) => `--${n.value}-${l}`,
    cssVarBlock: (l) => {
      const y = {};
      for (const O in l)
        y[`--${n.value}-${e}-${O}`] = l[O];
      return y;
    },
    cssVarBlockName: (l) => `--${n.value}-${e}-${l}`
  };
};
var Q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
};
const vn = U({
  size: {
    type: W([Number, String])
  },
  color: {
    type: String
  }
}), pn = {
  name: "ElIcon",
  inheritAttrs: !1
}, bn = /* @__PURE__ */ j({
  ...pn,
  props: vn,
  setup(e) {
    const t = e, n = Y("icon"), s = B(() => !t.size && !t.color ? {} : {
      fontSize: Ct(t.size) ? void 0 : ce(t.size),
      "--color": t.color
    });
    return (a, c) => (S(), P("i", rt({
      class: h(n).b(),
      style: h(s)
    }, a.$attrs), [
      oe(a.$slots, "default")
    ], 16));
  }
});
var mn = /* @__PURE__ */ Q(bn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ee = be(mn), Z = 4, hn = {
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
}, _n = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), gn = U({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), yn = /* @__PURE__ */ j({
  __name: "thumb",
  props: gn,
  setup(e) {
    const t = e, n = "Thumb", s = ae(Je), a = Y("scrollbar");
    s || ve(n, "can not inject scrollbar context");
    const c = w(), u = w(), f = w({}), r = w(!1);
    let o = !1, b = !1, m = de ? document.onselectstart : null;
    const d = B(() => hn[t.vertical ? "vertical" : "horizontal"]), p = B(() => _n({
      size: t.size,
      move: t.move,
      bar: d.value
    })), $ = B(() => c.value[d.value.offset] ** 2 / s.wrapElement[d.value.scrollSize] / t.ratio / u.value[d.value.offset]), l = (i) => {
      var g;
      if (i.stopPropagation(), i.ctrlKey || [1, 2].includes(i.button))
        return;
      (g = window.getSelection()) == null || g.removeAllRanges(), O(i);
      const _ = i.currentTarget;
      !_ || (f.value[d.value.axis] = _[d.value.offset] - (i[d.value.client] - _.getBoundingClientRect()[d.value.direction]));
    }, y = (i) => {
      if (!u.value || !c.value || !s.wrapElement)
        return;
      const g = Math.abs(i.target.getBoundingClientRect()[d.value.direction] - i[d.value.client]), _ = u.value[d.value.offset] / 2, N = (g - _) * 100 * $.value / c.value[d.value.offset];
      s.wrapElement[d.value.scroll] = N * s.wrapElement[d.value.scrollSize] / 100;
    }, O = (i) => {
      i.stopImmediatePropagation(), o = !0, document.addEventListener("mousemove", H), document.addEventListener("mouseup", R), m = document.onselectstart, document.onselectstart = () => !1;
    }, H = (i) => {
      if (!c.value || !u.value || o === !1)
        return;
      const g = f.value[d.value.axis];
      if (!g)
        return;
      const _ = (c.value.getBoundingClientRect()[d.value.direction] - i[d.value.client]) * -1, N = u.value[d.value.offset] - g, T = (_ - N) * 100 * $.value / c.value[d.value.offset];
      s.wrapElement[d.value.scroll] = T * s.wrapElement[d.value.scrollSize] / 100;
    }, R = () => {
      o = !1, f.value[d.value.axis] = 0, document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", R), v(), b && (r.value = !1);
    }, V = () => {
      b = !1, r.value = !!t.size;
    }, C = () => {
      b = !0, r.value = o;
    };
    it(() => {
      v(), document.removeEventListener("mouseup", R);
    });
    const v = () => {
      document.onselectstart !== m && (document.onselectstart = m);
    };
    return ne(ke(s, "scrollbarElement"), "mousemove", V), ne(ke(s, "scrollbarElement"), "mouseleave", C), (i, g) => (S(), X(ct, {
      name: h(a).b("fade"),
      persisted: ""
    }, {
      default: K(() => [
        De(M("div", {
          ref_key: "instance",
          ref: c,
          class: F([h(a).e("bar"), h(a).is(h(d).key)]),
          onMousedown: y
        }, [
          M("div", {
            ref_key: "thumb",
            ref: u,
            class: F(h(a).e("thumb")),
            style: te(h(p)),
            onMousedown: l
          }, null, 38)
        ], 34), [
          [Ie, i.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Me = /* @__PURE__ */ Q(yn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const wn = U({
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
}), $n = /* @__PURE__ */ j({
  __name: "bar",
  props: wn,
  setup(e, { expose: t }) {
    const n = e, s = w(0), a = w(0);
    return t({
      handleScroll: (u) => {
        if (u) {
          const f = u.offsetHeight - Z, r = u.offsetWidth - Z;
          a.value = u.scrollTop * 100 / f * n.ratioY, s.value = u.scrollLeft * 100 / r * n.ratioX;
        }
      }
    }), (u, f) => (S(), P(le, null, [
      E(Me, {
        move: s.value,
        ratio: u.ratioX,
        size: u.width,
        always: u.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      E(Me, {
        move: a.value,
        ratio: u.ratioY,
        size: u.height,
        vertical: "",
        always: u.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Sn = /* @__PURE__ */ Q($n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const En = U({
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
    type: W([String, Object, Array]),
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
}), Pn = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(I)
}, On = {
  name: "ElScrollbar"
}, Nn = /* @__PURE__ */ j({
  ...On,
  props: En,
  emits: Pn,
  setup(e, { expose: t, emit: n }) {
    const s = e, a = Y("scrollbar");
    let c, u;
    const f = w(), r = w(), o = w(), b = w("0"), m = w("0"), d = w(), p = w(1), $ = w(1), l = "ElScrollbar", y = B(() => {
      const v = {};
      return s.height && (v.height = ce(s.height)), s.maxHeight && (v.maxHeight = ce(s.maxHeight)), [s.wrapStyle, v];
    }), O = () => {
      var v;
      r.value && ((v = d.value) == null || v.handleScroll(r.value), n("scroll", {
        scrollTop: r.value.scrollTop,
        scrollLeft: r.value.scrollLeft
      }));
    };
    function H(v, i) {
      ze(v) ? r.value.scrollTo(v) : I(v) && I(i) && r.value.scrollTo(v, i);
    }
    const R = (v) => {
      if (!I(v)) {
        Se(l, "value must be a number");
        return;
      }
      r.value.scrollTop = v;
    }, V = (v) => {
      if (!I(v)) {
        Se(l, "value must be a number");
        return;
      }
      r.value.scrollLeft = v;
    }, C = () => {
      if (!r.value)
        return;
      const v = r.value.offsetHeight - Z, i = r.value.offsetWidth - Z, g = v ** 2 / r.value.scrollHeight, _ = i ** 2 / r.value.scrollWidth, N = Math.max(g, s.minSize), T = Math.max(_, s.minSize);
      p.value = g / (v - g) / (N / (v - N)), $.value = _ / (i - _) / (T / (i - T)), m.value = N + Z < v ? `${N}px` : "", b.value = T + Z < i ? `${T}px` : "";
    };
    return A(() => s.noresize, (v) => {
      v ? (c == null || c(), u == null || u()) : ({ stop: c } = Te(o, C), u = ne("resize", C));
    }, { immediate: !0 }), A(() => [s.maxHeight, s.height], () => {
      s.native || ie(() => {
        var v;
        C(), r.value && ((v = d.value) == null || v.handleScroll(r.value));
      });
    }), Fe(Je, Ee({
      scrollbarElement: f,
      wrapElement: r
    })), Pe(() => {
      s.native || ie(() => C());
    }), We(() => C()), t({
      wrap$: r,
      update: C,
      scrollTo: H,
      setScrollTop: R,
      setScrollLeft: V,
      handleScroll: O
    }), (v, i) => (S(), P("div", {
      ref_key: "scrollbar$",
      ref: f,
      class: F(h(a).b())
    }, [
      M("div", {
        ref_key: "wrap$",
        ref: r,
        class: F([
          v.wrapClass,
          h(a).e("wrap"),
          { [h(a).em("wrap", "hidden-default")]: !v.native }
        ]),
        style: te(h(y)),
        onScroll: O
      }, [
        (S(), X(Oe(v.tag), {
          ref_key: "resize$",
          ref: o,
          class: F([h(a).e("view"), v.viewClass]),
          style: te(v.viewStyle)
        }, {
          default: K(() => [
            oe(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      v.native ? D("v-if", !0) : (S(), X(Sn, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        height: m.value,
        width: b.value,
        always: v.always,
        "ratio-x": $.value,
        "ratio-y": p.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Tn = /* @__PURE__ */ Q(Nn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const zn = be(Tn), kn = U({
  size: {
    type: [Number, String],
    values: rn,
    default: "",
    validator: (e) => I(e)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: on
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: W(String),
    default: "cover"
  }
}), Cn = {
  error: (e) => e instanceof Event
}, xn = ["src", "alt", "srcset"], Bn = {
  name: "ElAvatar"
}, Ln = /* @__PURE__ */ j({
  ...Bn,
  props: kn,
  emits: Cn,
  setup(e, { emit: t }) {
    const n = e, s = Y("avatar"), a = w(!1), c = B(() => {
      const { size: o, icon: b, shape: m } = n, d = [s.b()];
      return fe(o) && d.push(s.m(o)), b && d.push(s.m("icon")), m && d.push(s.m(m)), d;
    }), u = B(() => {
      const { size: o } = n;
      return I(o) ? s.cssVarBlock({
        size: ce(o) || ""
      }) : void 0;
    }), f = B(() => ({
      objectFit: n.fit
    }));
    A(() => n.src, () => a.value = !1);
    function r(o) {
      a.value = !0, t("error", o);
    }
    return (o, b) => (S(), P("span", {
      class: F(h(c)),
      style: te(h(u))
    }, [
      (o.src || o.srcSet) && !a.value ? (S(), P("img", {
        key: 0,
        src: o.src,
        alt: o.alt,
        srcset: o.srcSet,
        style: te(h(f)),
        onError: r
      }, null, 44, xn)) : o.icon ? (S(), X(h(ee), { key: 1 }, {
        default: K(() => [
          (S(), X(Oe(o.icon)))
        ]),
        _: 1
      })) : oe(o.$slots, "default", { key: 2 })
    ], 6));
  }
});
var An = /* @__PURE__ */ Q(Ln, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const Rn = be(An), Vn = U({
  tabs: {
    type: W(Array),
    default: () => Ge([])
  }
}), Hn = {
  name: "ElTabBar"
}, Mn = /* @__PURE__ */ j({
  ...Hn,
  props: Vn,
  setup(e, { expose: t }) {
    const n = e, s = "ElTabBar", a = ue(), c = ae(me);
    c || ve(s, "<el-tabs><el-tab-bar /></el-tabs>");
    const u = Y("tabs"), f = w(), r = w(), o = () => {
      let m = 0, d = 0;
      const p = ["top", "bottom"].includes(c.props.tabPosition) ? "width" : "height", $ = p === "width" ? "x" : "y";
      return n.tabs.every((l) => {
        var y, O, H, R;
        const V = (O = (y = a.parent) == null ? void 0 : y.refs) == null ? void 0 : O[`tab-${l.paneName}`];
        if (!V)
          return !1;
        if (!l.active)
          return !0;
        d = V[`client${J(p)}`];
        const C = $ === "x" ? "left" : "top";
        m = V.getBoundingClientRect()[C] - ((R = (H = V.parentElement) == null ? void 0 : H.getBoundingClientRect()[C]) != null ? R : 0);
        const v = window.getComputedStyle(V);
        return p === "width" && (n.tabs.length > 1 && (d -= Number.parseFloat(v.paddingLeft) + Number.parseFloat(v.paddingRight)), m += Number.parseFloat(v.paddingLeft)), !1;
      }), {
        [p]: `${d}px`,
        transform: `translate${J($)}(${m}px)`
      };
    }, b = () => r.value = o();
    return A(() => n.tabs, async () => {
      await ie(), b();
    }, { immediate: !0 }), Te(f, () => b()), t({
      ref: f,
      update: b
    }), (m, d) => (S(), P("div", {
      ref_key: "barRef",
      ref: f,
      class: F([h(u).e("active-bar"), h(u).is(h(c).props.tabPosition)]),
      style: te(r.value)
    }, null, 6));
  }
});
var jn = /* @__PURE__ */ Q(Mn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const Dn = U({
  panes: {
    type: W(Array),
    default: () => Ge([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  onTabClick: {
    type: W(Function),
    default: $e
  },
  onTabRemove: {
    type: W(Function),
    default: $e
  },
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
}), je = "ElTabNav", In = j({
  name: je,
  props: Dn,
  setup(e, {
    expose: t
  }) {
    const n = ue(), s = ae(me);
    s || ve(je, "<el-tabs><tab-nav /></el-tabs>");
    const a = Y("tabs"), c = Et(), u = Tt(), f = w(), r = w(), o = w(), b = w(!1), m = w(0), d = w(!1), p = w(!0), $ = B(() => ["top", "bottom"].includes(s.props.tabPosition) ? "width" : "height"), l = B(() => ({
      transform: `translate${$.value === "width" ? "X" : "Y"}(-${m.value}px)`
    })), y = () => {
      if (!f.value)
        return;
      const i = f.value[`offset${J($.value)}`], g = m.value;
      if (!g)
        return;
      const _ = g > i ? g - i : 0;
      m.value = _;
    }, O = () => {
      if (!f.value || !r.value)
        return;
      const i = r.value[`offset${J($.value)}`], g = f.value[`offset${J($.value)}`], _ = m.value;
      if (i - _ <= g)
        return;
      const N = i - _ > g * 2 ? _ + g : i - g;
      m.value = N;
    }, H = async () => {
      const i = r.value;
      if (!b.value || !o.value || !f.value || !i)
        return;
      await ie();
      const g = o.value.querySelector(".is-active");
      if (!g)
        return;
      const _ = f.value, N = ["top", "bottom"].includes(s.props.tabPosition), T = g.getBoundingClientRect(), k = _.getBoundingClientRect(), L = N ? i.offsetWidth - k.width : i.offsetHeight - k.height, x = m.value;
      let z = x;
      N ? (T.left < k.left && (z = x - (k.left - T.left)), T.right > k.right && (z = x + T.right - k.right)) : (T.top < k.top && (z = x - (k.top - T.top)), T.bottom > k.bottom && (z = x + (T.bottom - k.bottom))), z = Math.max(z, 0), m.value = Math.min(z, L);
    }, R = () => {
      if (!r.value || !f.value)
        return;
      const i = r.value[`offset${J($.value)}`], g = f.value[`offset${J($.value)}`], _ = m.value;
      if (g < i) {
        const N = m.value;
        b.value = b.value || {}, b.value.prev = N, b.value.next = N + g < i, i - N < g && (m.value = i - g);
      } else
        b.value = !1, _ > 0 && (m.value = 0);
    }, V = (i) => {
      const g = i.code, {
        up: _,
        down: N,
        left: T,
        right: k
      } = re;
      if (![_, N, T, k].includes(g))
        return;
      const L = Array.from(i.currentTarget.querySelectorAll("[role=tab]")), x = L.indexOf(i.target);
      let z;
      g === T || g === _ ? x === 0 ? z = L.length - 1 : z = x - 1 : x < L.length - 1 ? z = x + 1 : z = 0, L[z].focus(), L[z].click(), C();
    }, C = () => {
      p.value && (d.value = !0);
    }, v = () => d.value = !1;
    return A(c, (i) => {
      i === "hidden" ? p.value = !1 : i === "visible" && setTimeout(() => p.value = !0, 50);
    }), A(u, (i) => {
      i ? setTimeout(() => p.value = !0, 50) : p.value = !1;
    }), Te(o, R), Pe(() => setTimeout(() => H(), 0)), We(() => R()), t({
      scrollToActiveTab: H,
      removeFocus: v
    }), A(() => e.panes, () => n.update(), {
      flush: "post"
    }), () => {
      const i = b.value ? [E("span", {
        class: [a.e("nav-prev"), a.is("disabled", !b.value.prev)],
        onClick: y
      }, [E(ee, null, {
        default: () => [E(Ht, null, null)]
      })]), E("span", {
        class: [a.e("nav-next"), a.is("disabled", !b.value.next)],
        onClick: O
      }, [E(ee, null, {
        default: () => [E(Wt, null, null)]
      })])] : null, g = e.panes.map((_, N) => {
        var T, k;
        const L = _.props.name || _.index || `${N}`, x = _.isClosable || e.editable;
        _.index = `${N}`;
        const z = x ? E(ee, {
          class: "is-icon-close",
          onClick: (q) => e.onTabRemove(_, q)
        }, {
          default: () => [E(Gt, null, null)]
        }) : null, Ze = ((k = (T = _.slots).label) == null ? void 0 : k.call(T)) || _.props.label, et = _.active ? 0 : -1;
        return E("div", {
          ref: `tab-${L}`,
          class: [a.e("item"), a.is(s.props.tabPosition), a.is("active", _.active), a.is("disabled", _.props.disabled), a.is("closable", x), a.is("focus", d.value)],
          id: `tab-${L}`,
          key: `tab-${L}`,
          "aria-controls": `pane-${L}`,
          role: "tab",
          "aria-selected": _.active,
          tabindex: et,
          onFocus: () => C(),
          onBlur: () => v(),
          onClick: (q) => {
            v(), e.onTabClick(_, L, q);
          },
          onKeydown: (q) => {
            x && (q.code === re.delete || q.code === re.backspace) && e.onTabRemove(_, q);
          }
        }, [Ze, z]);
      });
      return E("div", {
        ref: o,
        class: [a.e("nav-wrap"), a.is("scrollable", !!b.value), a.is(s.props.tabPosition)]
      }, [i, E("div", {
        class: a.e("nav-scroll"),
        ref: f
      }, [E("div", {
        class: [a.e("nav"), a.is(s.props.tabPosition), a.is("stretch", e.stretch && ["top", "bottom"].includes(s.props.tabPosition))],
        ref: r,
        style: l.value,
        role: "tablist",
        onKeydown: V
      }, [e.type ? null : E(jn, {
        tabs: [...e.panes]
      }, null), g])])]);
    };
  }
}), Fn = U({
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
    type: W(Function),
    default: () => !0
  },
  stretch: Boolean
}), ge = (e) => fe(e) || I(e), Wn = {
  [qe]: (e) => ge(e),
  "tab-click": (e, t) => t instanceof Event,
  "tab-change": (e) => ge(e),
  edit: (e, t) => ["remove", "add"].includes(t),
  "tab-remove": (e) => ge(e),
  "tab-add": () => !0
};
var Un = j({
  name: "ElTabs",
  props: Fn,
  emits: Wn,
  setup(e, {
    emit: t,
    slots: n,
    expose: s
  }) {
    const a = Y("tabs"), c = w(), u = Ee({}), f = w(e.modelValue || e.activeName || "0"), r = (p) => {
      f.value = p, t(qe, p), t("tab-change", p);
    }, o = async (p) => {
      var $, l, y;
      if (f.value !== p)
        try {
          await (($ = e.beforeLeave) == null ? void 0 : $.call(e, p, f.value)) !== !1 && (r(p), (y = (l = c.value) == null ? void 0 : l.removeFocus) == null || y.call(l));
        } catch {
        }
    }, b = (p, $, l) => {
      p.props.disabled || (o($), t("tab-click", p, l));
    }, m = (p, $) => {
      p.props.disabled || ($.stopPropagation(), t("edit", p.props.name, "remove"), t("tab-remove", p.props.name));
    }, d = () => {
      t("edit", void 0, "add"), t("tab-add");
    };
    return A(() => e.activeName, (p) => o(p)), A(() => e.modelValue, (p) => o(p)), A(f, async () => {
      var p;
      (p = c.value) == null || p.scrollToActiveTab();
    }), Fe(me, {
      props: e,
      currentName: f,
      registerPane: (l) => u[l.uid] = l,
      unregisterPane: (l) => delete u[l]
    }), s({
      currentName: f
    }), () => {
      const p = e.editable || e.addable ? E("span", {
        class: a.e("new-tab"),
        tabindex: "0",
        onClick: d,
        onKeydown: (y) => {
          y.code === re.enter && d();
        }
      }, [E(ee, {
        class: a.is("icon-plus")
      }, {
        default: () => [E(nn, null, null)]
      })]) : null, $ = E("div", {
        class: [a.e("header"), a.is(e.tabPosition)]
      }, [p, E(In, {
        ref: c,
        currentName: f.value,
        editable: e.editable,
        type: e.type,
        panes: Object.values(u),
        stretch: e.stretch,
        onTabClick: b,
        onTabRemove: m
      }, null)]), l = E("div", {
        class: a.e("content")
      }, [oe(n, "default")]);
      return E("div", {
        class: [a.b(), a.m(e.tabPosition), {
          [a.m("card")]: e.type === "card",
          [a.m("border-card")]: e.type === "border-card"
        }]
      }, [...e.tabPosition !== "bottom" ? [$, l] : [l, $]]);
    };
  }
});
const Kn = U({
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
}), Xn = ["id", "aria-hidden", "aria-labelledby"], Yn = {
  name: "ElTabPane"
}, qn = /* @__PURE__ */ j({
  ...Yn,
  props: Kn,
  setup(e) {
    const t = e, n = "ElTabPane", s = ue(), a = ut(), c = ae(me);
    c || ve(n, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const u = Y("tab-pane"), f = w(), r = B(() => t.closable || c.props.closable), o = Be(() => c.currentName.value === (t.name || f.value)), b = w(o.value), m = B(() => t.name || f.value), d = Be(() => !t.lazy || b.value || o.value);
    A(o, ($) => {
      $ && (b.value = !0);
    });
    const p = Ee({
      uid: s.uid,
      slots: a,
      props: t,
      paneName: m,
      active: o,
      index: f,
      isClosable: r
    });
    return Pe(() => {
      c.registerPane(p);
    }), dt(() => {
      c.unregisterPane(p.uid);
    }), ($, l) => h(d) ? De((S(), P("div", {
      key: 0,
      id: `pane-${h(m)}`,
      class: F(h(u).b()),
      role: "tabpanel",
      "aria-hidden": !h(o),
      "aria-labelledby": `tab-${h(m)}`
    }, [
      oe($.$slots, "default")
    ], 10, Xn)), [
      [Ie, h(o)]
    ]) : D("v-if", !0);
  }
});
var Qe = /* @__PURE__ */ Q(qn, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const Gn = be(Un, {
  TabPane: Qe
}), Jn = ln(Qe), Qn = { class: "tab-list" }, Zn = ["onClick"], es = {
  key: 0,
  class: "avatar"
}, ts = { class: "content" }, ns = {
  key: 0,
  class: "title"
}, ss = {
  key: 1,
  class: "time"
}, as = {
  key: 2,
  class: "time"
}, os = {
  key: 0,
  class: "actions"
}, ls = ["onClick"], rs = {
  key: 0,
  class: "a-icon"
}, is = { class: "a-text" }, cs = /* @__PURE__ */ j({
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
    function n(a) {
      t("clickItem", a);
    }
    function s(a) {
      t("clickBtn", a);
    }
    return (a, c) => {
      const u = ft("el-tag");
      return S(), P("div", Qn, [
        E(h(Gn), null, {
          default: K(() => [
            (S(!0), P(le, null, he(e.list, (f, r) => (S(), X(h(Jn), {
              label: f.title
            }, {
              default: K(() => [
                E(h(zn), { "max-height": "300px" }, {
                  default: K(() => [
                    (S(!0), P(le, null, he(f.content, (o, b) => (S(), P("div", {
                      class: "container",
                      key: b,
                      onClick: (m) => n(o)
                    }, [
                      o.avatar ? (S(), P("div", es, [
                        E(h(Rn), {
                          size: "small",
                          src: o.avatar
                        }, null, 8, ["src"])
                      ])) : D("", !0),
                      M("div", ts, [
                        o.title ? (S(), P("div", ns, [
                          M("div", null, se(o.title), 1),
                          o.tag ? (S(), X(u, {
                            key: 0,
                            type: o.tagType
                          }, {
                            default: K(() => [
                              vt(se(o.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : D("", !0)
                        ])) : D("", !0),
                        o.desc ? (S(), P("div", ss, se(o.desc), 1)) : D("", !0),
                        o.time ? (S(), P("div", as, se(o.time), 1)) : D("", !0)
                      ])
                    ], 8, Zn))), 128))
                  ]),
                  _: 2
                }, 1024),
                e.actions ? (S(), P("div", os, [
                  (S(!0), P(le, null, he(e.actions, (o, b) => (S(), P("div", {
                    class: F(["a-item", { border: b !== e.actions.length }]),
                    onClick: (m) => s(o),
                    key: b
                  }, [
                    o.icon ? (S(), P("div", rs, [
                      E(h(ee), null, {
                        default: K(() => [
                          (S(), X(Oe(o.icon)))
                        ]),
                        _: 2
                      }, 1024)
                    ])) : D("", !0),
                    M("div", is, se(o.text), 1)
                  ], 10, ls))), 128))
                ])) : D("", !0)
              ]),
              _: 2
            }, 1032, ["label"]))), 256))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const us = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, ds = /* @__PURE__ */ us(cs, [["__scopeId", "data-v-fe2a0996"]]), vs = {
  install(e) {
    e.component("TabList", ds);
  }
};
export {
  vs as default
};
