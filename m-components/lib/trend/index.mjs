import { warn as T, ref as U, getCurrentInstance as k, inject as K, computed as g, unref as l, defineComponent as j, openBlock as f, createElementBlock as m, mergeProps as q, renderSlot as z, useSlots as J, resolveComponent as h, createElementVNode as b, toDisplayString as G, createBlock as E, normalizeStyle as N, withCtx as O, createVNode as P } from "vue";
function W(e) {
  for (var n = -1, t = e == null ? 0 : e.length, s = {}; ++n < t; ) {
    var r = e[n];
    s[r[0]] = r[1];
  }
  return s;
}
var V;
const F = typeof window < "u", H = (e) => typeof e == "number";
F && ((V = window == null ? void 0 : window.navigator) == null ? void 0 : V.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const L = Object.prototype.hasOwnProperty, C = (e, n) => L.call(e, n), A = (e) => typeof e == "string", B = (e) => e !== null && typeof e == "object", M = (e) => e === void 0;
class Q extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function R(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const t = A(e) ? new Q(`[${e}] ${n}`) : e;
    console.warn(t);
  }
}
const X = "utils/dom/style";
function Y(e, n = "px") {
  if (!e)
    return "";
  if (A(e))
    return e;
  if (H(e))
    return `${e}${n}`;
  R(X, "binding value must be a string or number");
}
const I = "__epPropKey", Z = (e) => e, ee = (e) => B(e) && !!e[I], te = (e, n) => {
  if (!B(e) || ee(e))
    return e;
  const { values: t, required: s, default: r, type: i, validator: _ } = e, v = {
    type: i,
    required: !!s,
    validator: t || _ ? (y) => {
      let u = !1, p = [];
      if (t && (p = Array.from(t), C(e, "default") && p.push(r), u || (u = p.includes(y))), _ && (u || (u = _(y))), !u && p.length > 0) {
        const $ = [...new Set(p)].map((w) => JSON.stringify(w)).join(", ");
        T(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${$}], got value ${JSON.stringify(y)}.`);
      }
      return u;
    } : void 0,
    [I]: !0
  };
  return C(e, "default") && (v.default = r), v;
}, ne = (e) => W(Object.entries(e).map(([n, t]) => [
  n,
  te(t, n)
])), oe = (e, n) => {
  if (e.install = (t) => {
    for (const s of [e, ...Object.values(n != null ? n : {})])
      t.component(s.name, s);
  }, n)
    for (const [t, s] of Object.entries(n))
      e[t] = s;
  return e;
}, se = Symbol(), x = U();
function re(e, n = void 0) {
  const t = k() ? K(se, x) : x;
  return e ? g(() => {
    var s, r;
    return (r = (s = t.value) == null ? void 0 : s[e]) != null ? r : n;
  }) : t;
}
const ce = "el", le = "is-", d = (e, n, t, s, r) => {
  let i = `${e}-${n}`;
  return t && (i += `-${t}`), s && (i += `__${s}`), r && (i += `--${r}`), i;
}, ie = (e) => {
  const n = re("namespace"), t = g(() => n.value || ce);
  return {
    namespace: t,
    b: (o = "") => d(l(t), e, o, "", ""),
    e: (o) => o ? d(l(t), e, "", o, "") : "",
    m: (o) => o ? d(l(t), e, "", "", o) : "",
    be: (o, c) => o && c ? d(l(t), e, o, c, "") : "",
    em: (o, c) => o && c ? d(l(t), e, "", o, c) : "",
    bm: (o, c) => o && c ? d(l(t), e, o, "", c) : "",
    bem: (o, c, a) => o && c && a ? d(l(t), e, o, c, a) : "",
    is: (o, ...c) => {
      const a = c.length >= 1 ? c[0] : !0;
      return o && a ? `${le}${o}` : "";
    },
    cssVar: (o) => {
      const c = {};
      for (const a in o)
        c[`--${t.value}-${a}`] = o[a];
      return c;
    },
    cssVarName: (o) => `--${t.value}-${o}`,
    cssVarBlock: (o) => {
      const c = {};
      for (const a in o)
        c[`--${t.value}-${e}-${a}`] = o[a];
      return c;
    },
    cssVarBlockName: (o) => `--${t.value}-${e}-${o}`
  };
};
var ae = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of n)
    t[s] = r;
  return t;
};
const ue = ne({
  size: {
    type: Z([Number, String])
  },
  color: {
    type: String
  }
}), de = {
  name: "ElIcon",
  inheritAttrs: !1
}, pe = /* @__PURE__ */ j({
  ...de,
  props: ue,
  setup(e) {
    const n = e, t = ie("icon"), s = g(() => !n.size && !n.color ? {} : {
      fontSize: M(n.size) ? void 0 : Y(n.size),
      "--color": n.color
    });
    return (r, i) => (f(), m("i", q({
      class: l(t).b(),
      style: l(s)
    }, r.$attrs), [
      z(r.$slots, "default")
    ], 16));
  }
});
var fe = /* @__PURE__ */ ae(pe, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const S = oe(fe), _e = { class: "trend" }, ye = { class: "text" }, ve = { key: 1 }, me = { class: "icon" }, ge = /* @__PURE__ */ j({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "text"
    },
    upColor: {
      type: String,
      default: "#f5222d"
    },
    downColor: {
      type: String,
      default: "#52c41a"
    }
  },
  setup(e) {
    const n = J();
    return console.log(n), (t, s) => {
      const r = h("ArrowUp"), i = h("ArrowDown");
      return f(), m("div", _e, [
        b("div", ye, [
          l(n).text ? z(t.$slots, "text", { key: 0 }, void 0, !0) : (f(), m("div", ve, G(e.text), 1))
        ]),
        b("div", me, [
          e.type === "up" ? (f(), E(l(S), {
            key: 0,
            style: N({ color: e.upColor })
          }, {
            default: O(() => [
              P(r)
            ]),
            _: 1
          }, 8, ["style"])) : (f(), E(l(S), {
            key: 1,
            style: N({ color: e.downColor })
          }, {
            default: O(() => [
              P(i)
            ]),
            _: 1
          }, 8, ["style"]))
        ])
      ]);
    };
  }
});
const $e = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of n)
    t[s] = r;
  return t;
}, we = /* @__PURE__ */ $e(ge, [["__scopeId", "data-v-cc0f8158"]]), Ee = {
  install(e) {
    e.component("Trend", we);
  }
};
export {
  we as Trend,
  Ee as default
};
