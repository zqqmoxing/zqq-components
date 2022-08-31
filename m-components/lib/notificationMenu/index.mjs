import { getCurrentScope as no, onScopeDispose as oo, ref as N, unref as h, watch as M, warn as ro, getCurrentInstance as En, inject as oe, computed as $, onMounted as Me, onBeforeUnmount as Oe, onBeforeMount as so, provide as fe, defineComponent as z, openBlock as F, createElementBlock as de, mergeProps as nt, renderSlot as H, normalizeClass as Ne, withDirectives as Ct, cloneVNode as io, Fragment as ao, createVNode as ae, Text as lo, Comment as uo, createBlock as ve, withCtx as x, createCommentVNode as pe, nextTick as Jt, toRefs as co, normalizeStyle as po, resolveComponent as we, Teleport as fo, Transition as On, vShow as Tn, toRef as mt, readonly as vo, toDisplayString as Qe, createElementVNode as mo, createTextVNode as go, useSlots as ho, resolveDynamicComponent as bo } from "vue";
function yo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Pt(e) {
  return e == null;
}
const ie = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e == null ? void 0 : e(r);
  if (n === !1 || !s)
    return t == null ? void 0 : t(r);
};
function Cn(e) {
  return no() ? (oo(e), !0) : !1;
}
var Yt;
const ee = typeof window < "u", gt = (e) => typeof e == "boolean", ht = (e) => typeof e == "number", wo = (e) => typeof e == "string", lt = () => {
};
ee && ((Yt = window == null ? void 0 : window.navigator) == null ? void 0 : Yt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _e(e) {
  var t;
  const n = h(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pn = ee ? window : void 0;
function ut(...e) {
  let t, n, o, r;
  if (wo(e[0]) ? ([n, o, r] = e, t = Pn) : [t, n, o, r] = e, !t)
    return lt;
  let s = lt;
  const i = M(() => _e(t), (l) => {
    s(), l && (l.addEventListener(n, o, r), s = () => {
      l.removeEventListener(n, o, r), s = lt;
    });
  }, { immediate: !0, flush: "post" }), a = () => {
    i(), s();
  };
  return Cn(a), a;
}
function Eo(e, t, n = {}) {
  const { window: o = Pn, ignore: r, capture: s = !0 } = n;
  if (!o)
    return;
  const i = N(!0);
  let a;
  const l = (v) => {
    o.clearTimeout(a);
    const g = _e(e), p = v.composedPath();
    !g || g === v.target || p.includes(g) || !i.value || r && r.length > 0 && r.some((d) => {
      const c = _e(d);
      return c && (v.target === c || p.includes(c));
    }) || t(v);
  }, u = [
    ut(o, "click", l, { passive: !0, capture: s }),
    ut(o, "pointerdown", (v) => {
      const g = _e(e);
      i.value = !!g && !v.composedPath().includes(g);
    }, { passive: !0 }),
    ut(o, "pointerup", (v) => {
      if (v.button === 0) {
        const g = v.composedPath();
        v.composedPath = () => g, a = o.setTimeout(() => l(v), 50);
      }
    }, { passive: !0 })
  ];
  return () => u.forEach((v) => v());
}
const bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yt = "__vueuse_ssr_handlers__";
bt[yt] = bt[yt] || {};
bt[yt];
var Zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Zt || (Zt = {}));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const wt = () => {
}, Oo = Object.prototype.hasOwnProperty, Gt = (e, t) => Oo.call(e, t), To = Array.isArray, Ze = (e) => typeof e == "function", ot = (e) => typeof e == "string", St = (e) => e !== null && typeof e == "object", Et = (e) => e === void 0, et = (e) => typeof Element > "u" ? !1 : e instanceof Element;
class Co extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ie(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ot(e) ? new Co(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Po = "utils/dom/style";
function So(e, t = "px") {
  if (!e)
    return "";
  if (ot(e))
    return e;
  if (ht(e))
    return `${e}${t}`;
  Ie(Po, "binding value must be a string or number");
}
const Sn = "__epPropKey", k = (e) => e, Ao = (e) => St(e) && !!e[Sn], At = (e, t) => {
  if (!St(e) || Ao(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: i } = e, l = {
    type: s,
    required: !!o,
    validator: n || i ? (u) => {
      let f = !1, v = [];
      if (n && (v = Array.from(n), Gt(e, "default") && v.push(r), f || (f = v.includes(u))), i && (f || (f = i(u))), !f && v.length > 0) {
        const g = [...new Set(v)].map((p) => JSON.stringify(p)).join(", ");
        ro(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Sn]: !0
  };
  return Gt(e, "default") && (l.default = r), l;
}, K = (e) => yo(Object.entries(e).map(([t, n]) => [
  t,
  At(n, t)
])), $o = k([
  String,
  Object,
  Function
]), rt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, te = {
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
}, _o = () => Math.floor(Math.random() * 1e4), No = Symbol(), Xt = Symbol("formItemContextKey"), $t = Symbol("popper"), An = Symbol("popperContent"), Qt = N();
function $n(e, t = void 0) {
  const n = En() ? oe(No, Qt) : Qt;
  return e ? $(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const en = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Io = Symbol("elIdInjection"), ko = (e) => {
  const t = oe(Io, en);
  return !ee && t === en && Ie("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`), $(() => h(e) || `el-id-${t.prefix}-${t.current++}`);
}, Bo = At({
  type: k(Boolean),
  default: null
}), Ro = At({
  type: k(Function)
}), Lo = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Bo,
    [n]: Ro
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: v
    }) => {
      const g = En(), { emit: p } = g, d = g.props, c = $(() => Ze(d[n])), m = $(() => d[e] === null), b = (y) => {
        i.value !== !0 && (i.value = !0, a && (a.value = y), Ze(f) && f(y));
      }, w = (y) => {
        i.value !== !1 && (i.value = !1, a && (a.value = y), Ze(v) && v(y));
      }, C = (y) => {
        if (d.disabled === !0 || Ze(u) && !u())
          return;
        const P = c.value && ee;
        P && p(t, !0), (m.value || !P) && b(y);
      }, E = (y) => {
        if (d.disabled === !0 || !ee)
          return;
        const P = c.value && ee;
        P && p(t, !1), (m.value || !P) && w(y);
      }, S = (y) => {
        !gt(y) || (d.disabled && y ? c.value && p(t, !1) : i.value !== y && (y ? b() : w()));
      }, T = () => {
        i.value ? E() : C();
      };
      return M(() => d[e], S), l && g.appContext.config.globalProperties.$route !== void 0 && M(() => ({
        ...g.proxy.$route
      }), () => {
        l.value && i.value && E();
      }), Me(() => {
        S(d[e]);
      }), {
        hide: E,
        show: C,
        toggle: T
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
function Do() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Cn(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Ae = [];
const Mo = (e) => {
  const t = (n) => {
    const o = n;
    o.key === te.esc && Ae.forEach((r) => r(o));
  };
  Me(() => {
    Ae.length === 0 && document.addEventListener("keydown", t), ee && Ae.push(e);
  }), Oe(() => {
    Ae = Ae.filter((n) => n !== e), Ae.length === 0 && ee && document.removeEventListener("keydown", t);
  });
};
let tn;
const _n = `el-popper-container-${_o()}`, Nn = `#${_n}`, Fo = () => {
  const e = document.createElement("div");
  return e.id = _n, document.body.appendChild(e), e;
}, jo = () => {
  so(() => {
    !ee || (process.env.NODE_ENV === "test" || !tn || !document.body.querySelector(Nn)) && (tn = Fo());
  });
}, xo = K({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), Ho = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Do();
  return {
    onOpen: (a) => {
      r(() => {
        n(a);
      }, h(e));
    },
    onClose: (a) => {
      r(() => {
        o(a);
      }, h(t));
    }
  };
}, In = Symbol("elForwardRef"), Ko = (e) => {
  fe(In, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Vo = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Wo = "el", zo = "is-", ye = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, Te = (e) => {
  const t = $n("namespace"), n = $(() => t.value || Wo);
  return {
    namespace: n,
    b: (c = "") => ye(h(n), e, c, "", ""),
    e: (c) => c ? ye(h(n), e, "", c, "") : "",
    m: (c) => c ? ye(h(n), e, "", "", c) : "",
    be: (c, m) => c && m ? ye(h(n), e, c, m, "") : "",
    em: (c, m) => c && m ? ye(h(n), e, "", c, m) : "",
    bm: (c, m) => c && m ? ye(h(n), e, c, "", m) : "",
    bem: (c, m, b) => c && m && b ? ye(h(n), e, c, m, b) : "",
    is: (c, ...m) => {
      const b = m.length >= 1 ? m[0] : !0;
      return c && b ? `${zo}${c}` : "";
    },
    cssVar: (c) => {
      const m = {};
      for (const b in c)
        m[`--${n.value}-${b}`] = c[b];
      return m;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const m = {};
      for (const b in c)
        m[`--${n.value}-${e}-${b}`] = c[b];
      return m;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
}, nn = N(0), Uo = () => {
  const e = $n("zIndex", 2e3), t = $(() => e.value + nn.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (nn.value++, t.value)
  };
};
var U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const qo = K({
  size: {
    type: k([Number, String])
  },
  color: {
    type: String
  }
}), Jo = {
  name: "ElIcon",
  inheritAttrs: !1
}, Yo = /* @__PURE__ */ z({
  ...Jo,
  props: qo,
  setup(e) {
    const t = e, n = Te("icon"), o = $(() => !t.size && !t.color ? {} : {
      fontSize: Et(t.size) ? void 0 : So(t.size),
      "--color": t.color
    });
    return (r, s) => (F(), de("i", nt({
      class: h(n).b(),
      style: h(o)
    }, r.$attrs), [
      H(r.$slots, "default")
    ], 16));
  }
});
var Zo = /* @__PURE__ */ U(Yo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Go = rt(Zo), kn = K({
  role: {
    type: String,
    default: "tooltip"
  }
}), Xo = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, Qo = /* @__PURE__ */ z({
  ...Xo,
  props: kn,
  setup(e, { expose: t }) {
    const n = e, o = N(), r = N(), s = N(), i = N(), a = $(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: i,
      role: a
    };
    return t(l), fe($t, l), (u, f) => H(u.$slots, "default");
  }
});
var er = /* @__PURE__ */ U(Qo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Bn = K({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), tr = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, nr = /* @__PURE__ */ z({
  ...tr,
  props: Bn,
  setup(e, { expose: t }) {
    const n = e, o = Te("popper"), { arrowOffset: r, arrowRef: s } = oe(An, void 0);
    return M(() => n.arrowOffset, (i) => {
      r.value = i;
    }), Oe(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, a) => (F(), de("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Ne(h(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var or = /* @__PURE__ */ U(nr, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const ct = "ElOnlyChild", rr = z({
  name: ct,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = oe(In), s = Vo((o = r == null ? void 0 : r.setForwardRef) != null ? o : wt);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return Ie(ct, "requires exact only one valid child."), null;
      const l = Rn(a);
      return l ? Ct(io(l, n), [[s]]) : (Ie(ct, "no valid child node found"), null);
    };
  }
});
function Rn(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (St(n))
      switch (n.type) {
        case uo:
          continue;
        case lo:
          return pt(n);
        case "svg":
          return pt(n);
        case ao:
          return Rn(n.children);
        default:
          return n;
      }
    return pt(n);
  }
  return null;
}
function pt(e) {
  return ae("span", {
    class: "el-only-child__content"
  }, [e]);
}
const Ln = K({
  virtualRef: {
    type: k(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), sr = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, ir = /* @__PURE__ */ z({
  ...sr,
  props: Ln,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = oe($t, void 0);
    Ko(r);
    const s = $(() => a.value ? n.id : void 0), i = $(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = $(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = $(() => a.value ? `${n.open}` : void 0);
    let u;
    return Me(() => {
      M(() => n.virtualRef, (f) => {
        f && (r.value = _e(f));
      }, {
        immediate: !0
      }), M(() => r.value, (f, v) => {
        u == null || u(), u = void 0, et(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((g) => {
          var p;
          const d = n[g];
          d && (f.addEventListener(g.slice(2).toLowerCase(), d), (p = v == null ? void 0 : v.removeEventListener) == null || p.call(v, g.slice(2).toLowerCase(), d));
        }), u = M([s, i, a, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, d) => {
            Pt(g[d]) ? f.removeAttribute(p) : f.setAttribute(p, g[d]);
          });
        }, { immediate: !0 })), et(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => v.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), Oe(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (f, v) => f.virtualTriggering ? pe("v-if", !0) : (F(), ve(h(rr), nt({ key: 0 }, f.$attrs, {
      "aria-controls": h(s),
      "aria-describedby": h(i),
      "aria-expanded": h(l),
      "aria-haspopup": h(a)
    }), {
      default: x(() => [
        H(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ar = /* @__PURE__ */ U(ir, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), V = "top", J = "bottom", Y = "right", W = "left", _t = "auto", Ue = [V, J, Y, W], ke = "start", Ve = "end", lr = "clippingParents", Dn = "viewport", je = "popper", ur = "reference", on = Ue.reduce(function(e, t) {
  return e.concat([t + "-" + ke, t + "-" + Ve]);
}, []), Nt = [].concat(Ue, [_t]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ke, t + "-" + Ve]);
}, []), cr = "beforeRead", pr = "read", fr = "afterRead", dr = "beforeMain", vr = "main", mr = "afterMain", gr = "beforeWrite", hr = "write", br = "afterWrite", yr = [cr, pr, fr, dr, vr, mr, gr, hr, br];
function re(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function X(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Be(e) {
  var t = X(e).Element;
  return e instanceof t || e instanceof Element;
}
function q(e) {
  var t = X(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function It(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = X(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !q(s) || !re(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function Er(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !q(r) || !re(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Mn = { name: "applyStyles", enabled: !0, phase: "write", fn: wr, effect: Er, requires: ["computeStyles"] };
function ne(e) {
  return e.split("-")[0];
}
var Ee = Math.max, tt = Math.min, Re = Math.round;
function Le(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (q(e) && t) {
    var s = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (o = Re(n.width) / i || 1), s > 0 && (r = Re(n.height) / s || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function kt(e) {
  var t = Le(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Fn(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && It(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function le(e) {
  return X(e).getComputedStyle(e);
}
function Or(e) {
  return ["table", "td", "th"].indexOf(re(e)) >= 0;
}
function me(e) {
  return ((Be(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function st(e) {
  return re(e) === "html" ? e : e.assignedSlot || e.parentNode || (It(e) ? e.host : null) || me(e);
}
function rn(e) {
  return !q(e) || le(e).position === "fixed" ? null : e.offsetParent;
}
function Tr(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && q(e)) {
    var o = le(e);
    if (o.position === "fixed")
      return null;
  }
  var r = st(e);
  for (It(r) && (r = r.host); q(r) && ["html", "body"].indexOf(re(r)) < 0; ) {
    var s = le(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function qe(e) {
  for (var t = X(e), n = rn(e); n && Or(n) && le(n).position === "static"; )
    n = rn(n);
  return n && (re(n) === "html" || re(n) === "body" && le(n).position === "static") ? t : n || Tr(e) || t;
}
function Bt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xe(e, t, n) {
  return Ee(e, tt(t, n));
}
function Cr(e, t, n) {
  var o = xe(e, t, n);
  return o > n ? n : o;
}
function jn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function xn(e) {
  return Object.assign({}, jn(), e);
}
function Hn(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Pr = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, xn(typeof e != "number" ? e : Hn(e, Ue));
};
function Sr(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = ne(n.placement), l = Bt(a), u = [W, Y].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!s || !i)) {
    var v = Pr(r.padding, n), g = kt(s), p = l === "y" ? V : W, d = l === "y" ? J : Y, c = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], m = i[l] - n.rects.reference[l], b = qe(s), w = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, C = c / 2 - m / 2, E = v[p], S = w - g[f] - v[d], T = w / 2 - g[f] / 2 + C, y = xe(E, T, S), P = l;
    n.modifiersData[o] = (t = {}, t[P] = y, t.centerOffset = y - T, t);
  }
}
function Ar(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Fn(t.elements.popper, r) || (t.elements.arrow = r));
}
var $r = { name: "arrow", enabled: !0, phase: "main", fn: Sr, effect: Ar, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function De(e) {
  return e.split("-")[1];
}
var _r = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Nr(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Re(t * r) / r || 0, y: Re(n * r) / r || 0 };
}
function sn(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, v = e.isFixed, g = i.x, p = g === void 0 ? 0 : g, d = i.y, c = d === void 0 ? 0 : d, m = typeof f == "function" ? f({ x: p, y: c }) : { x: p, y: c };
  p = m.x, c = m.y;
  var b = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), C = W, E = V, S = window;
  if (u) {
    var T = qe(n), y = "clientHeight", P = "clientWidth";
    if (T === X(n) && (T = me(n), le(T).position !== "static" && a === "absolute" && (y = "scrollHeight", P = "scrollWidth")), T = T, r === V || (r === W || r === Y) && s === Ve) {
      E = J;
      var B = v && T === S && S.visualViewport ? S.visualViewport.height : T[y];
      c -= B - o.height, c *= l ? 1 : -1;
    }
    if (r === W || (r === V || r === J) && s === Ve) {
      C = Y;
      var L = v && T === S && S.visualViewport ? S.visualViewport.width : T[P];
      p -= L - o.width, p *= l ? 1 : -1;
    }
  }
  var R = Object.assign({ position: a }, u && _r), j = f === !0 ? Nr({ x: p, y: c }) : { x: p, y: c };
  if (p = j.x, c = j.y, l) {
    var D;
    return Object.assign({}, R, (D = {}, D[E] = w ? "0" : "", D[C] = b ? "0" : "", D.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + c + "px)" : "translate3d(" + p + "px, " + c + "px, 0)", D));
  }
  return Object.assign({}, R, (t = {}, t[E] = w ? c + "px" : "", t[C] = b ? p + "px" : "", t.transform = "", t));
}
function Ir(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: ne(t.placement), variation: De(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sn(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sn(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Kn = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ir, data: {} }, Ge = { passive: !0 };
function kr(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, l = X(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ge);
  }), a && l.addEventListener("resize", n.update, Ge), function() {
    s && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ge);
    }), a && l.removeEventListener("resize", n.update, Ge);
  };
}
var Vn = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: kr, data: {} }, Br = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Br[t];
  });
}
var Rr = { start: "end", end: "start" };
function an(e) {
  return e.replace(/start|end/g, function(t) {
    return Rr[t];
  });
}
function Rt(e) {
  var t = X(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Lt(e) {
  return Le(me(e)).left + Rt(e).scrollLeft;
}
function Lr(e) {
  var t = X(e), n = me(e), o = t.visualViewport, r = n.clientWidth, s = n.clientHeight, i = 0, a = 0;
  return o && (r = o.width, s = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, a = o.offsetTop)), { width: r, height: s, x: i + Lt(e), y: a };
}
function Dr(e) {
  var t, n = me(e), o = Rt(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ee(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Ee(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Lt(e), l = -o.scrollTop;
  return le(r || n).direction === "rtl" && (a += Ee(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: i, x: a, y: l };
}
function Dt(e) {
  var t = le(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Wn(e) {
  return ["html", "body", "#document"].indexOf(re(e)) >= 0 ? e.ownerDocument.body : q(e) && Dt(e) ? e : Wn(st(e));
}
function He(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Wn(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = X(o), i = r ? [s].concat(s.visualViewport || [], Dt(o) ? o : []) : o, a = t.concat(i);
  return r ? a : a.concat(He(st(i)));
}
function Ot(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Mr(e) {
  var t = Le(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ln(e, t) {
  return t === Dn ? Ot(Lr(e)) : Be(t) ? Mr(t) : Ot(Dr(me(e)));
}
function Fr(e) {
  var t = He(st(e)), n = ["absolute", "fixed"].indexOf(le(e).position) >= 0, o = n && q(e) ? qe(e) : e;
  return Be(o) ? t.filter(function(r) {
    return Be(r) && Fn(r, o) && re(r) !== "body";
  }) : [];
}
function jr(e, t, n) {
  var o = t === "clippingParents" ? Fr(e) : [].concat(t), r = [].concat(o, [n]), s = r[0], i = r.reduce(function(a, l) {
    var u = ln(e, l);
    return a.top = Ee(u.top, a.top), a.right = tt(u.right, a.right), a.bottom = tt(u.bottom, a.bottom), a.left = Ee(u.left, a.left), a;
  }, ln(e, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zn(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? ne(o) : null, s = o ? De(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case V:
      l = { x: i, y: t.y - n.height };
      break;
    case J:
      l = { x: i, y: t.y + t.height };
      break;
    case Y:
      l = { x: t.x + t.width, y: a };
      break;
    case W:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? Bt(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (s) {
      case ke:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Ve:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function We(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.boundary, i = s === void 0 ? lr : s, a = n.rootBoundary, l = a === void 0 ? Dn : a, u = n.elementContext, f = u === void 0 ? je : u, v = n.altBoundary, g = v === void 0 ? !1 : v, p = n.padding, d = p === void 0 ? 0 : p, c = xn(typeof d != "number" ? d : Hn(d, Ue)), m = f === je ? ur : je, b = e.rects.popper, w = e.elements[g ? m : f], C = jr(Be(w) ? w : w.contextElement || me(e.elements.popper), i, l), E = Le(e.elements.reference), S = zn({ reference: E, element: b, strategy: "absolute", placement: r }), T = Ot(Object.assign({}, b, S)), y = f === je ? T : E, P = { top: C.top - y.top + c.top, bottom: y.bottom - C.bottom + c.bottom, left: C.left - y.left + c.left, right: y.right - C.right + c.right }, B = e.modifiersData.offset;
  if (f === je && B) {
    var L = B[r];
    Object.keys(P).forEach(function(R) {
      var j = [Y, J].indexOf(R) >= 0 ? 1 : -1, D = [V, J].indexOf(R) >= 0 ? "y" : "x";
      P[R] += L[D] * j;
    });
  }
  return P;
}
function xr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Nt : l, f = De(o), v = f ? a ? on : on.filter(function(d) {
    return De(d) === f;
  }) : Ue, g = v.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  g.length === 0 && (g = v);
  var p = g.reduce(function(d, c) {
    return d[c] = We(e, { placement: c, boundary: r, rootBoundary: s, padding: i })[ne(c)], d;
  }, {});
  return Object.keys(p).sort(function(d, c) {
    return p[d] - p[c];
  });
}
function Hr(e) {
  if (ne(e) === _t)
    return [];
  var t = Xe(e);
  return [an(e), t, an(t)];
}
function Kr(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, v = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, d = p === void 0 ? !0 : p, c = n.allowedAutoPlacements, m = t.options.placement, b = ne(m), w = b === m, C = l || (w || !d ? [Xe(m)] : Hr(m)), E = [m].concat(C).reduce(function(he, se) {
      return he.concat(ne(se) === _t ? xr(t, { placement: se, boundary: f, rootBoundary: v, padding: u, flipVariations: d, allowedAutoPlacements: c }) : se);
    }, []), S = t.rects.reference, T = t.rects.popper, y = /* @__PURE__ */ new Map(), P = !0, B = E[0], L = 0; L < E.length; L++) {
      var R = E[L], j = ne(R), D = De(R) === ke, O = [V, J].indexOf(j) >= 0, A = O ? "width" : "height", _ = We(t, { placement: R, boundary: f, rootBoundary: v, altBoundary: g, padding: u }), I = O ? D ? Y : W : D ? J : V;
      S[A] > T[A] && (I = Xe(I));
      var Q = Xe(I), Z = [];
      if (s && Z.push(_[j] <= 0), a && Z.push(_[I] <= 0, _[Q] <= 0), Z.every(function(he) {
        return he;
      })) {
        B = R, P = !1;
        break;
      }
      y.set(R, Z);
    }
    if (P)
      for (var Ce = d ? 3 : 1, Pe = function(he) {
        var se = E.find(function(Je) {
          var Fe = y.get(Je);
          if (Fe)
            return Fe.slice(0, he).every(function(Se) {
              return Se;
            });
        });
        if (se)
          return B = se, "break";
      }, ue = Ce; ue > 0; ue--) {
        var ge = Pe(ue);
        if (ge === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[o]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var Vr = { name: "flip", enabled: !0, phase: "main", fn: Kr, requiresIfExists: ["offset"], data: { _skip: !1 } };
function un(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function cn(e) {
  return [V, Y, J, W].some(function(t) {
    return e[t] >= 0;
  });
}
function Wr(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = We(t, { elementContext: "reference" }), a = We(t, { altBoundary: !0 }), l = un(i, o), u = un(a, r, s), f = cn(l), v = cn(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: v }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": v });
}
var zr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Wr };
function Ur(e, t, n) {
  var o = ne(e), r = [W, V].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [W, Y].indexOf(o) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function qr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = Nt.reduce(function(f, v) {
    return f[v] = Ur(v, t.rects, s), f;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = i;
}
var Jr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: qr };
function Yr(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zn({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Un = { name: "popperOffsets", enabled: !0, phase: "read", fn: Yr, data: {} };
function Zr(e) {
  return e === "x" ? "y" : "x";
}
function Gr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, v = n.padding, g = n.tether, p = g === void 0 ? !0 : g, d = n.tetherOffset, c = d === void 0 ? 0 : d, m = We(t, { boundary: l, rootBoundary: u, padding: v, altBoundary: f }), b = ne(t.placement), w = De(t.placement), C = !w, E = Bt(b), S = Zr(E), T = t.modifiersData.popperOffsets, y = t.rects.reference, P = t.rects.popper, B = typeof c == "function" ? c(Object.assign({}, t.rects, { placement: t.placement })) : c, L = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = { x: 0, y: 0 };
  if (T) {
    if (s) {
      var D, O = E === "y" ? V : W, A = E === "y" ? J : Y, _ = E === "y" ? "height" : "width", I = T[E], Q = I + m[O], Z = I - m[A], Ce = p ? -P[_] / 2 : 0, Pe = w === ke ? y[_] : P[_], ue = w === ke ? -P[_] : -y[_], ge = t.elements.arrow, he = p && ge ? kt(ge) : { width: 0, height: 0 }, se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jn(), Je = se[O], Fe = se[A], Se = xe(0, y[_], he[_]), Yn = C ? y[_] / 2 - Ce - Se - Je - L.mainAxis : Pe - Se - Je - L.mainAxis, Zn = C ? -y[_] / 2 + Ce + Se + Fe + L.mainAxis : ue + Se + Fe + L.mainAxis, it = t.elements.arrow && qe(t.elements.arrow), Gn = it ? E === "y" ? it.clientTop || 0 : it.clientLeft || 0 : 0, jt = (D = R == null ? void 0 : R[E]) != null ? D : 0, Xn = I + Yn - jt - Gn, Qn = I + Zn - jt, xt = xe(p ? tt(Q, Xn) : Q, I, p ? Ee(Z, Qn) : Z);
      T[E] = xt, j[E] = xt - I;
    }
    if (a) {
      var Ht, eo = E === "x" ? V : W, to = E === "x" ? J : Y, be = T[S], Ye = S === "y" ? "height" : "width", Kt = be + m[eo], Vt = be - m[to], at = [V, W].indexOf(b) !== -1, Wt = (Ht = R == null ? void 0 : R[S]) != null ? Ht : 0, zt = at ? Kt : be - y[Ye] - P[Ye] - Wt + L.altAxis, Ut = at ? be + y[Ye] + P[Ye] - Wt - L.altAxis : Vt, qt = p && at ? Cr(zt, be, Ut) : xe(p ? zt : Kt, be, p ? Ut : Vt);
      T[S] = qt, j[S] = qt - be;
    }
    t.modifiersData[o] = j;
  }
}
var Xr = { name: "preventOverflow", enabled: !0, phase: "main", fn: Gr, requiresIfExists: ["offset"] };
function Qr(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function es(e) {
  return e === X(e) || !q(e) ? Rt(e) : Qr(e);
}
function ts(e) {
  var t = e.getBoundingClientRect(), n = Re(t.width) / e.offsetWidth || 1, o = Re(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ns(e, t, n) {
  n === void 0 && (n = !1);
  var o = q(t), r = q(t) && ts(t), s = me(t), i = Le(e, r), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((re(t) !== "body" || Dt(s)) && (a = es(t)), q(t) ? (l = Le(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Lt(s))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function os(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function rs(e) {
  var t = os(e);
  return yr.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function ss(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function is(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var pn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Mt(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? pn : r;
  return function(i, a, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, pn, s), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, f = [], v = !1, g = { state: u, setOptions: function(c) {
      var m = typeof c == "function" ? c(u.options) : c;
      d(), u.options = Object.assign({}, s, u.options, m), u.scrollParents = { reference: Be(i) ? He(i) : i.contextElement ? He(i.contextElement) : [], popper: He(a) };
      var b = rs(is([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = b.filter(function(w) {
        return w.enabled;
      }), p(), g.update();
    }, forceUpdate: function() {
      if (!v) {
        var c = u.elements, m = c.reference, b = c.popper;
        if (fn(m, b)) {
          u.rects = { reference: ns(m, qe(b), u.options.strategy === "fixed"), popper: kt(b) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
            return u.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], E = C.fn, S = C.options, T = S === void 0 ? {} : S, y = C.name;
            typeof E == "function" && (u = E({ state: u, options: T, name: y, instance: g }) || u);
          }
        }
      }
    }, update: ss(function() {
      return new Promise(function(c) {
        g.forceUpdate(), c(u);
      });
    }), destroy: function() {
      d(), v = !0;
    } };
    if (!fn(i, a))
      return g;
    g.setOptions(l).then(function(c) {
      !v && l.onFirstUpdate && l.onFirstUpdate(c);
    });
    function p() {
      u.orderedModifiers.forEach(function(c) {
        var m = c.name, b = c.options, w = b === void 0 ? {} : b, C = c.effect;
        if (typeof C == "function") {
          var E = C({ state: u, name: m, instance: g, options: w }), S = function() {
          };
          f.push(E || S);
        }
      });
    }
    function d() {
      f.forEach(function(c) {
        return c();
      }), f = [];
    }
    return g;
  };
}
Mt();
var as = [Vn, Un, Kn, Mn];
Mt({ defaultModifiers: as });
var ls = [Vn, Un, Kn, Mn, Jr, Vr, Xr, $r, zr], us = Mt({ defaultModifiers: ls });
const qn = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, dn = (e, t) => {
  for (const n of e)
    if (!cs(n, t))
      return n;
}, cs = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, ps = (e) => {
  const t = qn(e), n = dn(t, e), o = dn(t.reverse(), e);
  return [n, o];
}, fs = (e) => e instanceof HTMLInputElement && "select" in e, ce = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && fs(e) && t && e.select();
  }
};
function vn(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const ds = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = vn(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = vn(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, vs = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (ce(o, t), document.activeElement !== n)
      return;
}, mn = ds(), ft = "focus-trap.focus-after-trapped", dt = "focus-trap.focus-after-released", gn = {
  cancelable: !0,
  bubbles: !1
}, hn = "focusAfterTrapped", bn = "focusAfterReleased", ms = Symbol("elFocusTrap"), gs = z({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    hn,
    bn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = N();
    let o, r;
    Mo((p) => {
      e.trapped && !s.paused && t("release-requested", p);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (p) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: d, altKey: c, ctrlKey: m, metaKey: b, currentTarget: w, shiftKey: C } = p, { loop: E } = e, S = d === te.tab && !c && !m && !b, T = document.activeElement;
      if (S && T) {
        const y = w, [P, B] = ps(y);
        P && B ? !C && T === B ? (p.preventDefault(), E && ce(P, !0), t("focusout-prevented")) : C && [P, y].includes(T) && (p.preventDefault(), E && ce(B, !0), t("focusout-prevented")) : T === y && (p.preventDefault(), t("focusout-prevented"));
      }
    };
    fe(ms, {
      focusTrapRef: n,
      onKeydown: i
    }), M(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), M([n], ([p], [d]) => {
      p && (p.addEventListener("keydown", i), p.addEventListener("focusin", u), p.addEventListener("focusout", f)), d && (d.removeEventListener("keydown", i), d.removeEventListener("focusin", u), d.removeEventListener("focusout", f));
    });
    const a = (p) => {
      t(hn, p);
    }, l = (p) => t(bn, p), u = (p) => {
      const d = h(n);
      if (!d)
        return;
      const c = p.target, m = c && d.contains(c);
      m && t("focusin", p), !s.paused && e.trapped && (m ? r = c : ce(r, !0));
    }, f = (p) => {
      const d = h(n);
      if (!(s.paused || !d))
        if (e.trapped) {
          const c = p.relatedTarget;
          !Pt(c) && !d.contains(c) && setTimeout(() => {
            !s.paused && e.trapped && ce(r, !0);
          }, 0);
        } else {
          const c = p.target;
          c && d.contains(c) || t("focusout", p);
        }
    };
    async function v() {
      await Jt();
      const p = h(n);
      if (p) {
        mn.push(s);
        const d = document.activeElement;
        if (o = d, !p.contains(d)) {
          const m = new Event(ft, gn);
          p.addEventListener(ft, a), p.dispatchEvent(m), m.defaultPrevented || Jt(() => {
            let b = e.focusStartEl;
            ot(b) || (ce(b), document.activeElement !== b && (b = "first")), b === "first" && vs(qn(p), !0), (document.activeElement === d || b === "container") && ce(p);
          });
        }
      }
    }
    function g() {
      const p = h(n);
      if (p) {
        p.removeEventListener(ft, a);
        const d = new Event(dt, gn);
        p.addEventListener(dt, l), p.dispatchEvent(d), d.defaultPrevented || ce(o != null ? o : document.body, !0), p.removeEventListener(dt, a), mn.remove(s);
      }
    }
    return Me(() => {
      e.trapped && v(), M(() => e.trapped, (p) => {
        p ? v() : g();
      });
    }), Oe(() => {
      e.trapped && g();
    }), {
      onKeydown: i
    };
  }
});
function hs(e, t, n, o, r, s) {
  return H(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var bs = /* @__PURE__ */ U(gs, [["render", hs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const ys = ["fixed", "absolute"], ws = K({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: k(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Nt,
    default: "bottom"
  },
  popperOptions: {
    type: k(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ys,
    default: "absolute"
  }
}), Jn = K({
  ...ws,
  id: String,
  style: { type: k([String, Array, Object]) },
  className: { type: k([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: k([String, Array, Object])
  },
  popperStyle: {
    type: k([String, Array, Object])
  },
  referenceEl: {
    type: k(Object)
  },
  triggerTargetEl: {
    type: k(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Es = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], yn = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: Ts(e)
  };
  return Cs(s, t), Ps(s, r == null ? void 0 : r.modifiers), s;
}, Os = (e) => {
  if (!!ee)
    return _e(e);
};
function Ts(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t != null ? t : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o != null ? o : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n,
        adaptive: n
      }
    }
  ];
}
function Cs(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n != null ? n : 5
    }
  });
}
function Ps(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t != null ? t : []]);
}
const Ss = {
  name: "ElPopperContent"
}, As = /* @__PURE__ */ z({
  ...Ss,
  props: Jn,
  emits: Es,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: s, triggerRef: i, role: a } = oe($t, void 0), l = oe(Xt, void 0), { nextZIndex: u } = Uo(), f = Te("popper"), v = N(), g = N("first"), p = N(), d = N();
    fe(An, {
      arrowRef: p,
      arrowOffset: d
    }), l && (l.addInputId || l.removeInputId) && fe(Xt, {
      ...l,
      addInputId: wt,
      removeInputId: wt
    });
    const c = N(o.zIndex || u()), m = N(!1);
    let b;
    const w = $(() => Os(o.referenceEl) || h(i)), C = $(() => [{ zIndex: h(c) }, o.popperStyle]), E = $(() => [
      f.b(),
      f.is("pure", o.pure),
      f.is(o.effect),
      o.popperClass
    ]), S = $(() => a && a.value === "dialog" ? "false" : void 0), T = ({ referenceEl: O, popperContentEl: A, arrowEl: _ }) => {
      const I = yn(o, {
        arrowEl: _,
        arrowOffset: h(d)
      });
      return us(O, A, I);
    }, y = (O = !0) => {
      var A;
      (A = h(r)) == null || A.update(), O && (c.value = o.zIndex || u());
    }, P = () => {
      var O, A;
      const _ = { name: "eventListeners", enabled: o.visible };
      (A = (O = h(r)) == null ? void 0 : O.setOptions) == null || A.call(O, (I) => ({
        ...I,
        modifiers: [...I.modifiers || [], _]
      })), y(!1), o.visible && o.focusOnShow ? m.value = !0 : o.visible === !1 && (m.value = !1);
    }, B = () => {
      n("focus");
    }, L = () => {
      g.value = "first", n("blur");
    }, R = (O) => {
      var A;
      o.visible && !m.value && (O.relatedTarget && ((A = O.relatedTarget) == null || A.focus()), O.target && (g.value = O.target), m.value = !0);
    }, j = () => {
      o.trapping || (m.value = !1);
    }, D = () => {
      m.value = !1, n("close");
    };
    return Me(() => {
      let O;
      M(w, (A) => {
        var _;
        O == null || O();
        const I = h(r);
        if ((_ = I == null ? void 0 : I.destroy) == null || _.call(I), A) {
          const Q = h(v);
          s.value = Q, r.value = T({
            referenceEl: A,
            popperContentEl: Q,
            arrowEl: h(p)
          }), O = M(() => A.getBoundingClientRect(), () => y(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), M(() => o.triggerTargetEl, (A, _) => {
        b == null || b(), b = void 0;
        const I = h(A || v.value), Q = h(_ || v.value);
        if (et(I)) {
          const { ariaLabel: Z, id: Ce } = co(o);
          b = M([a, Z, S, Ce], (Pe) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((ue, ge) => {
              Pt(Pe[ge]) ? I.removeAttribute(ue) : I.setAttribute(ue, Pe[ge]);
            });
          }, { immediate: !0 });
        }
        et(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((Z) => {
          Q.removeAttribute(Z);
        });
      }, { immediate: !0 }), M(() => o.visible, P, { immediate: !0 }), M(() => yn(o, {
        arrowEl: h(p),
        arrowOffset: h(d)
      }), (A) => {
        var _;
        return (_ = r.value) == null ? void 0 : _.setOptions(A);
      });
    }), Oe(() => {
      b == null || b(), b = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: r,
      updatePopper: y,
      contentStyle: C
    }), (O, A) => (F(), de("div", {
      ref_key: "popperContentRef",
      ref: v,
      style: po(h(C)),
      class: Ne(h(E)),
      tabindex: "-1",
      onMouseenter: A[0] || (A[0] = (_) => O.$emit("mouseenter", _)),
      onMouseleave: A[1] || (A[1] = (_) => O.$emit("mouseleave", _))
    }, [
      ae(h(bs), {
        trapped: m.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": v.value,
        "focus-start-el": g.value,
        onFocusAfterTrapped: B,
        onFocusAfterReleased: L,
        onFocusin: R,
        onFocusoutPrevented: j,
        onReleaseRequested: D
      }, {
        default: x(() => [
          H(O.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var $s = /* @__PURE__ */ U(As, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const _s = rt(er), Ns = Te("tooltip"), G = K({
  ...xo,
  ...Jn,
  appendTo: {
    type: k([String, Object]),
    default: Nn
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: k(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), ze = K({
  ...Ln,
  disabled: Boolean,
  trigger: {
    type: k([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: k(Array),
    default: () => [te.enter, te.space]
  }
}), Is = K({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Ft = Symbol("elTooltip"), ks = z({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: $s
  },
  inheritAttrs: !1,
  props: G,
  setup(e) {
    const t = N(null), n = N(!1), o = N(!1), r = N(!1), s = N(!1), {
      controlled: i,
      id: a,
      open: l,
      trigger: u,
      onClose: f,
      onOpen: v,
      onShow: g,
      onHide: p,
      onBeforeShow: d,
      onBeforeHide: c
    } = oe(Ft, void 0), m = $(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    Oe(() => {
      s.value = !0;
    });
    const b = $(() => h(m) ? !0 : h(l)), w = $(() => e.disabled ? !1 : h(l)), C = $(() => {
      var O;
      return (O = e.style) != null ? O : {};
    }), E = $(() => !h(l)), S = () => {
      p();
    }, T = () => {
      if (h(i))
        return !0;
    }, y = ie(T, () => {
      e.enterable && h(u) === "hover" && v();
    }), P = ie(T, () => {
      h(u) === "hover" && f();
    }), B = () => {
      var O, A;
      (A = (O = t.value) == null ? void 0 : O.updatePopper) == null || A.call(O), d == null || d();
    }, L = () => {
      c == null || c();
    }, R = () => {
      g(), D = Eo($(() => {
        var O;
        return (O = t.value) == null ? void 0 : O.popperContentRef;
      }), () => {
        if (h(i))
          return;
        h(u) !== "hover" && f();
      });
    }, j = () => {
      e.virtualTriggering || f();
    };
    let D;
    return M(() => h(l), (O) => {
      O || D == null || D();
    }, {
      flush: "post"
    }), {
      ariaHidden: E,
      entering: o,
      leaving: r,
      id: a,
      intermediateOpen: n,
      contentStyle: C,
      contentRef: t,
      destroyed: s,
      shouldRender: b,
      shouldShow: w,
      onClose: f,
      open: l,
      onAfterShow: R,
      onBeforeEnter: B,
      onBeforeLeave: L,
      onContentEnter: y,
      onContentLeave: P,
      onTransitionLeave: S,
      onBlur: j
    };
  }
});
function Bs(e, t, n, o, r, s) {
  const i = we("el-popper-content");
  return F(), ve(fo, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    ae(On, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: x(() => [
        e.shouldRender ? Ct((F(), ve(i, nt({
          key: 0,
          id: e.id,
          ref: "contentRef"
        }, e.$attrs, {
          "aria-label": e.ariaLabel,
          "aria-hidden": e.ariaHidden,
          "boundaries-padding": e.boundariesPadding,
          "fallback-placements": e.fallbackPlacements,
          "gpu-acceleration": e.gpuAcceleration,
          offset: e.offset,
          placement: e.placement,
          "popper-options": e.popperOptions,
          strategy: e.strategy,
          effect: e.effect,
          enterable: e.enterable,
          pure: e.pure,
          "popper-class": e.popperClass,
          "popper-style": [e.popperStyle, e.contentStyle],
          "reference-el": e.referenceEl,
          "trigger-target-el": e.triggerTargetEl,
          visible: e.shouldShow,
          "z-index": e.zIndex,
          onMouseenter: e.onContentEnter,
          onMouseleave: e.onContentLeave,
          onBlur: e.onBlur,
          onClose: e.onClose
        }), {
          default: x(() => [
            pe(" Workaround bug #6378 "),
            e.destroyed ? pe("v-if", !0) : H(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [Tn, e.shouldShow]
        ]) : pe("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var Rs = /* @__PURE__ */ U(ks, [["render", Bs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Ls = (e, t) => To(e) ? e.includes(t) : e === t, $e = (e, t, n) => (o) => {
  Ls(h(e), t) && n(o);
}, Ds = z({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ar
  },
  props: ze,
  setup(e) {
    const t = Te("tooltip"), { controlled: n, id: o, open: r, onOpen: s, onClose: i, onToggle: a } = oe(Ft, void 0), l = N(null), u = () => {
      if (h(n) || e.disabled)
        return !0;
    }, f = mt(e, "trigger"), v = ie(u, $e(f, "hover", s)), g = ie(u, $e(f, "hover", i)), p = ie(u, $e(f, "click", (w) => {
      w.button === 0 && a(w);
    })), d = ie(u, $e(f, "focus", s)), c = ie(u, $e(f, "focus", i)), m = ie(u, $e(f, "contextmenu", (w) => {
      w.preventDefault(), a(w);
    })), b = ie(u, (w) => {
      const { code: C } = w;
      e.triggerKeys.includes(C) && (w.preventDefault(), a(w));
    });
    return {
      onBlur: c,
      onContextMenu: m,
      onFocus: d,
      onMouseenter: v,
      onMouseleave: g,
      onClick: p,
      onKeydown: b,
      open: r,
      id: o,
      triggerRef: l,
      ns: t
    };
  }
});
function Ms(e, t, n, o, r, s) {
  const i = we("el-popper-trigger");
  return F(), ve(i, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: Ne(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: x(() => [
      H(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var Fs = /* @__PURE__ */ U(Ds, [["render", Ms], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: js, useModelToggle: xs, useModelToggleEmits: Hs } = Lo("visible"), Ks = z({
  name: "ElTooltip",
  components: {
    ElPopper: _s,
    ElPopperArrow: or,
    ElTooltipContent: Rs,
    ElTooltipTrigger: Fs
  },
  props: {
    ...kn,
    ...js,
    ...G,
    ...ze,
    ...Bn,
    ...Is
  },
  emits: [
    ...Hs,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: t }) {
    jo();
    const n = $(() => (Et(e.openDelay) || Ie("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), o = $(() => (Et(e.visibleArrow) || Ie("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), gt(e.visibleArrow) ? e.visibleArrow : e.showArrow)), r = ko(), s = N(null), i = N(null), a = () => {
      var m;
      const b = h(s);
      b && ((m = b.popperInstanceRef) == null || m.update());
    }, l = N(!1), u = N(void 0), { show: f, hide: v } = xs({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: p } = Ho({
      showAfter: n,
      hideAfter: mt(e, "hideAfter"),
      open: f,
      close: v
    }), d = $(() => gt(e.visible));
    return fe(Ft, {
      controlled: d,
      id: r,
      open: vo(l),
      trigger: mt(e, "trigger"),
      onOpen: (m) => {
        g(m);
      },
      onClose: (m) => {
        p(m);
      },
      onToggle: (m) => {
        h(l) ? p(m) : g(m);
      },
      onShow: () => {
        t("show", u.value);
      },
      onHide: () => {
        t("hide", u.value);
      },
      onBeforeShow: () => {
        t("before-show", u.value);
      },
      onBeforeHide: () => {
        t("before-hide", u.value);
      },
      updatePopper: a
    }), M(() => e.disabled, (m) => {
      m && l.value && (l.value = !1);
    }), {
      compatShowAfter: n,
      compatShowArrow: o,
      popperRef: s,
      contentRef: i,
      open: l,
      hide: v,
      isFocusInsideContent: () => {
        var m, b;
        const w = (b = (m = i.value) == null ? void 0 : m.contentRef) == null ? void 0 : b.popperContentRef;
        return w && w.contains(document.activeElement);
      },
      updatePopper: a,
      onOpen: g,
      onClose: p
    };
  }
}), Vs = ["innerHTML"], Ws = { key: 1 };
function zs(e, t, n, o, r, s) {
  const i = we("el-tooltip-trigger"), a = we("el-popper-arrow"), l = we("el-tooltip-content"), u = we("el-popper");
  return F(), ve(u, {
    ref: "popperRef",
    role: e.role
  }, {
    default: x(() => [
      ae(i, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: x(() => [
          e.$slots.default ? H(e.$slots, "default", { key: 0 }) : pe("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      ae(l, {
        ref: "contentRef",
        "aria-label": e.ariaLabel,
        "boundaries-padding": e.boundariesPadding,
        content: e.content,
        disabled: e.disabled,
        effect: e.effect,
        enterable: e.enterable,
        "fallback-placements": e.fallbackPlacements,
        "hide-after": e.hideAfter,
        "gpu-acceleration": e.gpuAcceleration,
        offset: e.offset,
        persistent: e.persistent,
        "popper-class": e.popperClass,
        "popper-style": e.popperStyle,
        placement: e.placement,
        "popper-options": e.popperOptions,
        pure: e.pure,
        "raw-content": e.rawContent,
        "reference-el": e.referenceEl,
        "trigger-target-el": e.triggerTargetEl,
        "show-after": e.compatShowAfter,
        strategy: e.strategy,
        teleported: e.teleported,
        transition: e.transition,
        "virtual-triggering": e.virtualTriggering,
        "z-index": e.zIndex,
        "append-to": e.appendTo
      }, {
        default: x(() => [
          H(e.$slots, "content", {}, () => [
            e.rawContent ? (F(), de("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, Vs)) : (F(), de("span", Ws, Qe(e.content), 1))
          ]),
          e.compatShowArrow ? (F(), ve(a, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : pe("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Us = /* @__PURE__ */ U(Ks, [["render", zs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const qs = rt(Us), Js = K({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), Ys = ["textContent"], Zs = {
  name: "ElBadge"
}, Gs = /* @__PURE__ */ z({
  ...Zs,
  props: Js,
  setup(e, { expose: t }) {
    const n = e, o = Te("badge"), r = $(() => n.isDot ? "" : ht(n.value) && ht(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: r
    }), (s, i) => (F(), de("div", {
      class: Ne(h(o).b())
    }, [
      H(s.$slots, "default"),
      ae(On, {
        name: `${h(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: x(() => [
          Ct(mo("sup", {
            class: Ne([
              h(o).e("content"),
              h(o).em("content", s.type),
              h(o).is("fixed", !!s.$slots.default),
              h(o).is("dot", s.isDot)
            ]),
            textContent: Qe(h(r))
          }, null, 10, Ys), [
            [Tn, !s.hidden && (h(r) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Xs = /* @__PURE__ */ U(Gs, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Qs = rt(Xs), ei = {
  inheritAttrs: !1
};
function ti(e, t, n, o, r, s) {
  return H(e.$slots, "default");
}
var ni = /* @__PURE__ */ U(ei, [["render", ti], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const oi = {
  name: "ElCollectionItem",
  inheritAttrs: !1
};
function ri(e, t, n, o, r, s) {
  return H(e.$slots, "default");
}
var si = /* @__PURE__ */ U(oi, [["render", ri], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const ii = "data-el-collection-item", ai = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), s = {
    ...ni,
    name: t,
    setup() {
      const a = N(null), l = /* @__PURE__ */ new Map();
      fe(o, {
        itemMap: l,
        getItems: () => {
          const f = h(a);
          if (!f)
            return [];
          const v = Array.from(f.querySelectorAll(`[${ii}]`));
          return [...l.values()].sort((p, d) => v.indexOf(p.ref) - v.indexOf(d.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...si,
    name: n,
    setup(a, { attrs: l }) {
      const u = N(null), f = oe(o, void 0);
      fe(r, {
        collectionItemRef: u
      }), Me(() => {
        const v = h(u);
        v && f.itemMap.set(v, {
          ref: v,
          ...l
        });
      }), Oe(() => {
        const v = h(u);
        f.itemMap.delete(v);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: s,
    ElCollectionItem: i
  };
}, vt = K({
  trigger: ze.trigger,
  effect: {
    ...G.effect,
    default: "light"
  },
  type: {
    type: k(String)
  },
  placement: {
    type: k(String),
    default: "bottom"
  },
  popperOptions: {
    type: k(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: k([Number, String]),
    default: 0
  },
  maxHeight: {
    type: k([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: k(Object)
  }
});
K({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: $o
  }
});
K({
  onKeydown: { type: k(Function) }
});
te.down, te.pageDown, te.home;
te.up, te.pageUp, te.end;
ai("Dropdown");
const li = K({
  trigger: ze.trigger,
  placement: vt.placement,
  disabled: ze.disabled,
  visible: G.visible,
  transition: G.transition,
  popperOptions: vt.popperOptions,
  tabindex: vt.tabindex,
  content: G.content,
  popperStyle: G.popperStyle,
  popperClass: G.popperClass,
  enterable: {
    ...G.enterable,
    default: !0
  },
  effect: {
    ...G.effect,
    default: "light"
  },
  teleported: G.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  }
}), ui = [
  "update:visible",
  "before-enter",
  "before-leave",
  "after-enter",
  "after-leave"
], ci = "ElPopover", pi = z({
  name: ci,
  components: {
    ElTooltip: qs
  },
  props: li,
  emits: ui,
  setup(e, { emit: t }) {
    const n = Te("popover"), o = N(null), r = $(() => {
      var d;
      return (d = h(o)) == null ? void 0 : d.popperRef;
    }), s = $(() => ot(e.width) ? e.width : `${e.width}px`), i = $(() => [
      {
        width: s.value
      },
      e.popperStyle
    ]), a = $(() => [n.b(), e.popperClass, { [n.m("plain")]: !!e.content }]), l = $(() => e.transition === "el-fade-in-linear");
    return {
      ns: n,
      kls: a,
      gpuAcceleration: l,
      style: i,
      tooltipRef: o,
      popperRef: r,
      hide: () => {
        var d;
        (d = o.value) == null || d.hide();
      },
      beforeEnter: () => {
        t("before-enter");
      },
      beforeLeave: () => {
        t("before-leave");
      },
      afterEnter: () => {
        t("after-enter");
      },
      afterLeave: () => {
        t("update:visible", !1), t("after-leave");
      }
    };
  }
});
function fi(e, t, n, o, r, s) {
  const i = we("el-tooltip");
  return F(), ve(i, nt({ ref: "tooltipRef" }, e.$attrs, {
    trigger: e.trigger,
    placement: e.placement,
    disabled: e.disabled,
    visible: e.visible,
    transition: e.transition,
    "popper-options": e.popperOptions,
    tabindex: e.tabindex,
    content: e.content,
    offset: e.offset,
    "show-after": e.showAfter,
    "hide-after": e.hideAfter,
    "auto-close": e.autoClose,
    "show-arrow": e.showArrow,
    "aria-label": e.title,
    effect: e.effect,
    enterable: e.enterable,
    "popper-class": e.kls,
    "popper-style": e.style,
    teleported: e.teleported,
    persistent: e.persistent,
    "gpu-acceleration": e.gpuAcceleration,
    onBeforeShow: e.beforeEnter,
    onBeforeHide: e.beforeLeave,
    onShow: e.afterEnter,
    onHide: e.afterLeave
  }), {
    content: x(() => [
      e.title ? (F(), de("div", {
        key: 0,
        class: Ne(e.ns.e("title")),
        role: "title"
      }, Qe(e.title), 3)) : pe("v-if", !0),
      H(e.$slots, "default", {}, () => [
        go(Qe(e.content), 1)
      ])
    ]),
    default: x(() => [
      e.$slots.reference ? H(e.$slots, "reference", { key: 0 }) : pe("v-if", !0)
    ]),
    _: 3
  }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onBeforeShow", "onBeforeHide", "onShow", "onHide"]);
}
var Ke = /* @__PURE__ */ U(pi, [["render", fi], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);
const wn = (e, t) => {
  const n = t.arg || t.value, o = n == null ? void 0 : n.popperRef;
  o && (o.triggerRef = e);
};
var Tt = {
  mounted(e, t) {
    wn(e, t);
  },
  updated(e, t) {
    wn(e, t);
  }
};
const di = "popover";
Ke.install = (e) => {
  e.component(Ke.name, Ke);
};
Tt.install = (e) => {
  e.directive(di, Tt);
};
const vi = Tt;
Ke.directive = vi;
const mi = Ke, gi = mi, hi = /* @__PURE__ */ z({
  __name: "index",
  props: {
    max: {
      type: Number
    },
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return ho(), console.log(t), (n, o) => (F(), de("div", null, [
      ae(h(gi), {
        placement: "bottom",
        width: 400,
        trigger: "click"
      }, {
        reference: x(() => [
          ae(h(Qs), {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot,
            style: { cursor: "pointer" }
          }, {
            default: x(() => [
              ae(h(Go), null, {
                default: x(() => [
                  (F(), ve(bo(e.icon)))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: x(() => [
          H(n.$slots, "default")
        ]),
        _: 3
      })
    ]));
  }
}), yi = {
  install(e) {
    e.component("NotificationMenu", hi);
  }
};
export {
  hi as NotificationMenu,
  yi as default
};
