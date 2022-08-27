import { openBlock as s, createElementBlock as _, createElementVNode as r, createStaticVNode as K0, getCurrentScope as Y0, onScopeDispose as z0, ref as L, unref as c, watch as T, warn as Z0, getCurrentInstance as S2, inject as f2, computed as V, provide as E2, onMounted as s2, watchEffect as J0, onBeforeUnmount as T2, isRef as x0, defineComponent as q, mergeProps as X0, renderSlot as B, nextTick as V2, normalizeClass as y, createVNode as D, Transition as k2, withCtx as b, withDirectives as F2, toDisplayString as m2, vShow as D2, h as Q0, normalizeStyle as O2, withModifiers as C0, createBlock as I, resolveDynamicComponent as P2, createCommentVNode as W, useSlots as e1, Teleport as t1, createSlots as a1, resolveComponent as $2, Fragment as M0, isVNode as r2, render as Q2, renderList as o1 } from "vue";
/*! Element Plus Icons Vue v2.0.6 */
var i = (e, t) => {
  let a = e.__vccOpts || e;
  for (let [o, n] of t)
    a[o] = n;
  return a;
}, r1 = {
  name: "AddLocation"
}, n1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), s1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1), i1 = [
  l1,
  s1,
  _1
];
function c1(e, t, a, o, n, l) {
  return s(), _("svg", n1, i1);
}
var d1 = /* @__PURE__ */ i(r1, [["render", c1], ["__file", "add-location.vue"]]), u1 = {
  name: "Aim"
}, h1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, v1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), f1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1), p1 = [
  v1,
  f1
];
function m1(e, t, a, o, n, l) {
  return s(), _("svg", h1, p1);
}
var w1 = /* @__PURE__ */ i(u1, [["render", m1], ["__file", "aim.vue"]]), g1 = {
  name: "AlarmClock"
}, $1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), x1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1), C1 = [
  z1,
  x1
];
function M1(e, t, a, o, n, l) {
  return s(), _("svg", $1, C1);
}
var H1 = /* @__PURE__ */ i(g1, [["render", M1], ["__file", "alarm-clock.vue"]]), V1 = {
  name: "Apple"
}, y1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1), B1 = [
  L1
];
function b1(e, t, a, o, n, l) {
  return s(), _("svg", y1, B1);
}
var A1 = /* @__PURE__ */ i(V1, [["render", b1], ["__file", "apple.vue"]]), S1 = {
  name: "ArrowDownBold"
}, E1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), k1 = [
  T1
];
function F1(e, t, a, o, n, l) {
  return s(), _("svg", E1, k1);
}
var D1 = /* @__PURE__ */ i(S1, [["render", F1], ["__file", "arrow-down-bold.vue"]]), O1 = {
  name: "ArrowDown"
}, P1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), I1 = [
  N1
];
function q1(e, t, a, o, n, l) {
  return s(), _("svg", P1, I1);
}
var R1 = /* @__PURE__ */ i(O1, [["render", q1], ["__file", "arrow-down.vue"]]), j1 = {
  name: "ArrowLeftBold"
}, U1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, G1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1), W1 = [
  G1
];
function K1(e, t, a, o, n, l) {
  return s(), _("svg", U1, W1);
}
var Y1 = /* @__PURE__ */ i(j1, [["render", K1], ["__file", "arrow-left-bold.vue"]]), Z1 = {
  name: "ArrowLeft"
}, J1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, X1 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Q1 = [
  X1
];
function e4(e, t, a, o, n, l) {
  return s(), _("svg", J1, Q1);
}
var t4 = /* @__PURE__ */ i(Z1, [["render", e4], ["__file", "arrow-left.vue"]]), a4 = {
  name: "ArrowRightBold"
}, o4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, r4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1), n4 = [
  r4
];
function l4(e, t, a, o, n, l) {
  return s(), _("svg", o4, n4);
}
var s4 = /* @__PURE__ */ i(a4, [["render", l4], ["__file", "arrow-right-bold.vue"]]), _4 = {
  name: "ArrowRight"
}, i4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, c4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), d4 = [
  c4
];
function u4(e, t, a, o, n, l) {
  return s(), _("svg", i4, d4);
}
var h4 = /* @__PURE__ */ i(_4, [["render", u4], ["__file", "arrow-right.vue"]]), v4 = {
  name: "ArrowUpBold"
}, f4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), m4 = [
  p4
];
function w4(e, t, a, o, n, l) {
  return s(), _("svg", f4, m4);
}
var g4 = /* @__PURE__ */ i(v4, [["render", w4], ["__file", "arrow-up-bold.vue"]]), $4 = {
  name: "ArrowUp"
}, z4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), C4 = [
  x4
];
function M4(e, t, a, o, n, l) {
  return s(), _("svg", z4, C4);
}
var H4 = /* @__PURE__ */ i($4, [["render", M4], ["__file", "arrow-up.vue"]]), V4 = {
  name: "Avatar"
}, y4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1), B4 = [
  L4
];
function b4(e, t, a, o, n, l) {
  return s(), _("svg", y4, B4);
}
var A4 = /* @__PURE__ */ i(V4, [["render", b4], ["__file", "avatar.vue"]]), S4 = {
  name: "Back"
}, E4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), k4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1), F4 = [
  T4,
  k4
];
function D4(e, t, a, o, n, l) {
  return s(), _("svg", E4, F4);
}
var O4 = /* @__PURE__ */ i(S4, [["render", D4], ["__file", "back.vue"]]), P4 = {
  name: "Baseball"
}, N4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, I4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), q4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1), R4 = [
  I4,
  q4
];
function j4(e, t, a, o, n, l) {
  return s(), _("svg", N4, R4);
}
var U4 = /* @__PURE__ */ i(P4, [["render", j4], ["__file", "baseball.vue"]]), G4 = {
  name: "Basketball"
}, W4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K4 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1), Y4 = [
  K4
];
function Z4(e, t, a, o, n, l) {
  return s(), _("svg", W4, Y4);
}
var J4 = /* @__PURE__ */ i(G4, [["render", Z4], ["__file", "basketball.vue"]]), X4 = {
  name: "BellFilled"
}, Q4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ee = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1), te = [
  ee
];
function ae(e, t, a, o, n, l) {
  return s(), _("svg", Q4, te);
}
var oe = /* @__PURE__ */ i(X4, [["render", ae], ["__file", "bell-filled.vue"]]), re = {
  name: "Bell"
}, ne = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, le = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), se = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), _e = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), ie = [
  le,
  se,
  _e
];
function ce(e, t, a, o, n, l) {
  return s(), _("svg", ne, ie);
}
var de = /* @__PURE__ */ i(re, [["render", ce], ["__file", "bell.vue"]]), ue = {
  name: "Bicycle"
}, he = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ve = /* @__PURE__ */ K0('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), fe = [
  ve
];
function pe(e, t, a, o, n, l) {
  return s(), _("svg", he, fe);
}
var me = /* @__PURE__ */ i(ue, [["render", pe], ["__file", "bicycle.vue"]]), we = {
  name: "BottomLeft"
}, ge = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $e = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), ze = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1), xe = [
  $e,
  ze
];
function Ce(e, t, a, o, n, l) {
  return s(), _("svg", ge, xe);
}
var Me = /* @__PURE__ */ i(we, [["render", Ce], ["__file", "bottom-left.vue"]]), He = {
  name: "BottomRight"
}, Ve = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ye = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), Le = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1), Be = [
  ye,
  Le
];
function be(e, t, a, o, n, l) {
  return s(), _("svg", Ve, Be);
}
var Ae = /* @__PURE__ */ i(He, [["render", be], ["__file", "bottom-right.vue"]]), Se = {
  name: "Bottom"
}, Ee = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Te = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1), ke = [
  Te
];
function Fe(e, t, a, o, n, l) {
  return s(), _("svg", Ee, ke);
}
var De = /* @__PURE__ */ i(Se, [["render", Fe], ["__file", "bottom.vue"]]), Oe = {
  name: "Bowl"
}, Pe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ne = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1), Ie = [
  Ne
];
function qe(e, t, a, o, n, l) {
  return s(), _("svg", Pe, Ie);
}
var Re = /* @__PURE__ */ i(Oe, [["render", qe], ["__file", "bowl.vue"]]), je = {
  name: "Box"
}, Ue = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ge = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), We = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), Ke = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1), Ye = [
  Ge,
  We,
  Ke
];
function Ze(e, t, a, o, n, l) {
  return s(), _("svg", Ue, Ye);
}
var Je = /* @__PURE__ */ i(je, [["render", Ze], ["__file", "box.vue"]]), Xe = {
  name: "Briefcase"
}, Qe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1), t6 = [
  e6
];
function a6(e, t, a, o, n, l) {
  return s(), _("svg", Qe, t6);
}
var o6 = /* @__PURE__ */ i(Xe, [["render", a6], ["__file", "briefcase.vue"]]), r6 = {
  name: "BrushFilled"
}, n6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1), s6 = [
  l6
];
function _6(e, t, a, o, n, l) {
  return s(), _("svg", n6, s6);
}
var i6 = /* @__PURE__ */ i(r6, [["render", _6], ["__file", "brush-filled.vue"]]), c6 = {
  name: "Brush"
}, d6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1), h6 = [
  u6
];
function v6(e, t, a, o, n, l) {
  return s(), _("svg", d6, h6);
}
var f6 = /* @__PURE__ */ i(c6, [["render", v6], ["__file", "brush.vue"]]), p6 = {
  name: "Burger"
}, m6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1), g6 = [
  w6
];
function $6(e, t, a, o, n, l) {
  return s(), _("svg", m6, g6);
}
var z6 = /* @__PURE__ */ i(p6, [["render", $6], ["__file", "burger.vue"]]), x6 = {
  name: "Calendar"
}, C6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), H6 = [
  M6
];
function V6(e, t, a, o, n, l) {
  return s(), _("svg", C6, H6);
}
var y6 = /* @__PURE__ */ i(x6, [["render", V6], ["__file", "calendar.vue"]]), L6 = {
  name: "CameraFilled"
}, B6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), A6 = [
  b6
];
function S6(e, t, a, o, n, l) {
  return s(), _("svg", B6, A6);
}
var E6 = /* @__PURE__ */ i(L6, [["render", S6], ["__file", "camera-filled.vue"]]), T6 = {
  name: "Camera"
}, k6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), D6 = [
  F6
];
function O6(e, t, a, o, n, l) {
  return s(), _("svg", k6, D6);
}
var P6 = /* @__PURE__ */ i(T6, [["render", O6], ["__file", "camera.vue"]]), N6 = {
  name: "CaretBottom"
}, I6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1), R6 = [
  q6
];
function j6(e, t, a, o, n, l) {
  return s(), _("svg", I6, R6);
}
var U6 = /* @__PURE__ */ i(N6, [["render", j6], ["__file", "caret-bottom.vue"]]), G6 = {
  name: "CaretLeft"
}, W6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K6 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), Y6 = [
  K6
];
function Z6(e, t, a, o, n, l) {
  return s(), _("svg", W6, Y6);
}
var J6 = /* @__PURE__ */ i(G6, [["render", Z6], ["__file", "caret-left.vue"]]), X6 = {
  name: "CaretRight"
}, Q6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), t3 = [
  e3
];
function a3(e, t, a, o, n, l) {
  return s(), _("svg", Q6, t3);
}
var o3 = /* @__PURE__ */ i(X6, [["render", a3], ["__file", "caret-right.vue"]]), r3 = {
  name: "CaretTop"
}, n3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1), s3 = [
  l3
];
function _3(e, t, a, o, n, l) {
  return s(), _("svg", n3, s3);
}
var i3 = /* @__PURE__ */ i(r3, [["render", _3], ["__file", "caret-top.vue"]]), c3 = {
  name: "Cellphone"
}, d3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), h3 = [
  u3
];
function v3(e, t, a, o, n, l) {
  return s(), _("svg", d3, h3);
}
var f3 = /* @__PURE__ */ i(c3, [["render", v3], ["__file", "cellphone.vue"]]), p3 = {
  name: "ChatDotRound"
}, m3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), g3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), $3 = [
  w3,
  g3
];
function z3(e, t, a, o, n, l) {
  return s(), _("svg", m3, $3);
}
var x3 = /* @__PURE__ */ i(p3, [["render", z3], ["__file", "chat-dot-round.vue"]]), C3 = {
  name: "ChatDotSquare"
}, M3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, H3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), V3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), y3 = [
  H3,
  V3
];
function L3(e, t, a, o, n, l) {
  return s(), _("svg", M3, y3);
}
var B3 = /* @__PURE__ */ i(C3, [["render", L3], ["__file", "chat-dot-square.vue"]]), b3 = {
  name: "ChatLineRound"
}, A3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), E3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), T3 = [
  S3,
  E3
];
function k3(e, t, a, o, n, l) {
  return s(), _("svg", A3, T3);
}
var F3 = /* @__PURE__ */ i(b3, [["render", k3], ["__file", "chat-line-round.vue"]]), D3 = {
  name: "ChatLineSquare"
}, O3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), N3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), I3 = [
  P3,
  N3
];
function q3(e, t, a, o, n, l) {
  return s(), _("svg", O3, I3);
}
var R3 = /* @__PURE__ */ i(D3, [["render", q3], ["__file", "chat-line-square.vue"]]), j3 = {
  name: "ChatRound"
}, U3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, G3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), W3 = [
  G3
];
function K3(e, t, a, o, n, l) {
  return s(), _("svg", U3, W3);
}
var Y3 = /* @__PURE__ */ i(j3, [["render", K3], ["__file", "chat-round.vue"]]), Z3 = {
  name: "ChatSquare"
}, J3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, X3 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), Q3 = [
  X3
];
function et(e, t, a, o, n, l) {
  return s(), _("svg", J3, Q3);
}
var tt = /* @__PURE__ */ i(Z3, [["render", et], ["__file", "chat-square.vue"]]), at = {
  name: "Check"
}, ot = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), nt = [
  rt
];
function lt(e, t, a, o, n, l) {
  return s(), _("svg", ot, nt);
}
var st = /* @__PURE__ */ i(at, [["render", lt], ["__file", "check.vue"]]), _t = {
  name: "Checked"
}, it = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ct = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1), dt = [
  ct
];
function ut(e, t, a, o, n, l) {
  return s(), _("svg", it, dt);
}
var ht = /* @__PURE__ */ i(_t, [["render", ut], ["__file", "checked.vue"]]), vt = {
  name: "Cherry"
}, ft = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1), mt = [
  pt
];
function wt(e, t, a, o, n, l) {
  return s(), _("svg", ft, mt);
}
var gt = /* @__PURE__ */ i(vt, [["render", wt], ["__file", "cherry.vue"]]), $t = {
  name: "Chicken"
}, zt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1), Ct = [
  xt
];
function Mt(e, t, a, o, n, l) {
  return s(), _("svg", zt, Ct);
}
var Ht = /* @__PURE__ */ i($t, [["render", Mt], ["__file", "chicken.vue"]]), Vt = {
  name: "CircleCheckFilled"
}, yt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), Bt = [
  Lt
];
function bt(e, t, a, o, n, l) {
  return s(), _("svg", yt, Bt);
}
var At = /* @__PURE__ */ i(Vt, [["render", bt], ["__file", "circle-check-filled.vue"]]), St = {
  name: "CircleCheck"
}, Et = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), kt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), Ft = [
  Tt,
  kt
];
function Dt(e, t, a, o, n, l) {
  return s(), _("svg", Et, Ft);
}
var Ot = /* @__PURE__ */ i(St, [["render", Dt], ["__file", "circle-check.vue"]]), Pt = {
  name: "CircleCloseFilled"
}, Nt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, It = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), qt = [
  It
];
function Rt(e, t, a, o, n, l) {
  return s(), _("svg", Nt, qt);
}
var N2 = /* @__PURE__ */ i(Pt, [["render", Rt], ["__file", "circle-close-filled.vue"]]), jt = {
  name: "CircleClose"
}, Ut = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Wt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Kt = [
  Gt,
  Wt
];
function Yt(e, t, a, o, n, l) {
  return s(), _("svg", Ut, Kt);
}
var Zt = /* @__PURE__ */ i(jt, [["render", Yt], ["__file", "circle-close.vue"]]), Jt = {
  name: "CirclePlusFilled"
}, Xt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qt = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1), e8 = [
  Qt
];
function t8(e, t, a, o, n, l) {
  return s(), _("svg", Xt, e8);
}
var a8 = /* @__PURE__ */ i(Jt, [["render", t8], ["__file", "circle-plus-filled.vue"]]), o8 = {
  name: "CirclePlus"
}, r8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), l8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), s8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _8 = [
  n8,
  l8,
  s8
];
function i8(e, t, a, o, n, l) {
  return s(), _("svg", r8, _8);
}
var c8 = /* @__PURE__ */ i(o8, [["render", i8], ["__file", "circle-plus.vue"]]), d8 = {
  name: "Clock"
}, u8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), v8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), f8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), p8 = [
  h8,
  v8,
  f8
];
function m8(e, t, a, o, n, l) {
  return s(), _("svg", u8, p8);
}
var w8 = /* @__PURE__ */ i(d8, [["render", m8], ["__file", "clock.vue"]]), g8 = {
  name: "CloseBold"
}, $8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1), x8 = [
  z8
];
function C8(e, t, a, o, n, l) {
  return s(), _("svg", $8, x8);
}
var M8 = /* @__PURE__ */ i(g8, [["render", C8], ["__file", "close-bold.vue"]]), H8 = {
  name: "Close"
}, V8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), L8 = [
  y8
];
function B8(e, t, a, o, n, l) {
  return s(), _("svg", V8, L8);
}
var I2 = /* @__PURE__ */ i(H8, [["render", B8], ["__file", "close.vue"]]), b8 = {
  name: "Cloudy"
}, A8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), E8 = [
  S8
];
function T8(e, t, a, o, n, l) {
  return s(), _("svg", A8, E8);
}
var k8 = /* @__PURE__ */ i(b8, [["render", T8], ["__file", "cloudy.vue"]]), F8 = {
  name: "CoffeeCup"
}, D8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, O8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1), P8 = [
  O8
];
function N8(e, t, a, o, n, l) {
  return s(), _("svg", D8, P8);
}
var I8 = /* @__PURE__ */ i(F8, [["render", N8], ["__file", "coffee-cup.vue"]]), q8 = {
  name: "Coffee"
}, R8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1), U8 = [
  j8
];
function G8(e, t, a, o, n, l) {
  return s(), _("svg", R8, U8);
}
var W8 = /* @__PURE__ */ i(q8, [["render", G8], ["__file", "coffee.vue"]]), K8 = {
  name: "Coin"
}, Y8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), J8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), X8 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1), Q8 = [
  Z8,
  J8,
  X8
];
function ea(e, t, a, o, n, l) {
  return s(), _("svg", Y8, Q8);
}
var ta = /* @__PURE__ */ i(K8, [["render", ea], ["__file", "coin.vue"]]), aa = {
  name: "ColdDrink"
}, oa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ra = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1), na = [
  ra
];
function la(e, t, a, o, n, l) {
  return s(), _("svg", oa, na);
}
var sa = /* @__PURE__ */ i(aa, [["render", la], ["__file", "cold-drink.vue"]]), _a = {
  name: "CollectionTag"
}, ia = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ca = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1), da = [
  ca
];
function ua(e, t, a, o, n, l) {
  return s(), _("svg", ia, da);
}
var ha = /* @__PURE__ */ i(_a, [["render", ua], ["__file", "collection-tag.vue"]]), va = {
  name: "Collection"
}, fa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pa = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), ma = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1), wa = [
  pa,
  ma
];
function ga(e, t, a, o, n, l) {
  return s(), _("svg", fa, wa);
}
var $a = /* @__PURE__ */ i(va, [["render", ga], ["__file", "collection.vue"]]), za = {
  name: "Comment"
}, xa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ca = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1), Ma = [
  Ca
];
function Ha(e, t, a, o, n, l) {
  return s(), _("svg", xa, Ma);
}
var Va = /* @__PURE__ */ i(za, [["render", Ha], ["__file", "comment.vue"]]), ya = {
  name: "Compass"
}, La = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ba = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ba = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1), Aa = [
  Ba,
  ba
];
function Sa(e, t, a, o, n, l) {
  return s(), _("svg", La, Aa);
}
var Ea = /* @__PURE__ */ i(ya, [["render", Sa], ["__file", "compass.vue"]]), Ta = {
  name: "Connection"
}, ka = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fa = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), Da = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1), Oa = [
  Fa,
  Da
];
function Pa(e, t, a, o, n, l) {
  return s(), _("svg", ka, Oa);
}
var Na = /* @__PURE__ */ i(Ta, [["render", Pa], ["__file", "connection.vue"]]), Ia = {
  name: "Coordinate"
}, qa = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ra = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), ja = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), Ua = [
  Ra,
  ja
];
function Ga(e, t, a, o, n, l) {
  return s(), _("svg", qa, Ua);
}
var Wa = /* @__PURE__ */ i(Ia, [["render", Ga], ["__file", "coordinate.vue"]]), Ka = {
  name: "CopyDocument"
}, Ya = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Za = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), Ja = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1), Xa = [
  Za,
  Ja
];
function Qa(e, t, a, o, n, l) {
  return s(), _("svg", Ya, Xa);
}
var eo = /* @__PURE__ */ i(Ka, [["render", Qa], ["__file", "copy-document.vue"]]), to = {
  name: "Cpu"
}, ao = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), ro = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1), no = [
  oo,
  ro
];
function lo(e, t, a, o, n, l) {
  return s(), _("svg", ao, no);
}
var so = /* @__PURE__ */ i(to, [["render", lo], ["__file", "cpu.vue"]]), _o = {
  name: "CreditCard"
}, io = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, co = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), uo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1), ho = [
  co,
  uo
];
function vo(e, t, a, o, n, l) {
  return s(), _("svg", io, ho);
}
var fo = /* @__PURE__ */ i(_o, [["render", vo], ["__file", "credit-card.vue"]]), po = {
  name: "Crop"
}, mo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), go = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1), $o = [
  wo,
  go
];
function zo(e, t, a, o, n, l) {
  return s(), _("svg", mo, $o);
}
var xo = /* @__PURE__ */ i(po, [["render", zo], ["__file", "crop.vue"]]), Co = {
  name: "DArrowLeft"
}, Mo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ho = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), Vo = [
  Ho
];
function yo(e, t, a, o, n, l) {
  return s(), _("svg", Mo, Vo);
}
var Lo = /* @__PURE__ */ i(Co, [["render", yo], ["__file", "d-arrow-left.vue"]]), Bo = {
  name: "DArrowRight"
}, bo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ao = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), So = [
  Ao
];
function Eo(e, t, a, o, n, l) {
  return s(), _("svg", bo, So);
}
var To = /* @__PURE__ */ i(Bo, [["render", Eo], ["__file", "d-arrow-right.vue"]]), ko = {
  name: "DCaret"
}, Fo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Do = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1), Oo = [
  Do
];
function Po(e, t, a, o, n, l) {
  return s(), _("svg", Fo, Oo);
}
var No = /* @__PURE__ */ i(ko, [["render", Po], ["__file", "d-caret.vue"]]), Io = {
  name: "DataAnalysis"
}, qo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ro = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1), jo = [
  Ro
];
function Uo(e, t, a, o, n, l) {
  return s(), _("svg", qo, jo);
}
var Go = /* @__PURE__ */ i(Io, [["render", Uo], ["__file", "data-analysis.vue"]]), Wo = {
  name: "DataBoard"
}, Ko = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), Zo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), Jo = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1), Xo = [
  Yo,
  Zo,
  Jo
];
function Qo(e, t, a, o, n, l) {
  return s(), _("svg", Ko, Xo);
}
var er = /* @__PURE__ */ i(Wo, [["render", Qo], ["__file", "data-board.vue"]]), tr = {
  name: "DataLine"
}, ar = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, or = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1), rr = [
  or
];
function nr(e, t, a, o, n, l) {
  return s(), _("svg", ar, rr);
}
var lr = /* @__PURE__ */ i(tr, [["render", nr], ["__file", "data-line.vue"]]), sr = {
  name: "DeleteFilled"
}, _r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ir = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1), cr = [
  ir
];
function dr(e, t, a, o, n, l) {
  return s(), _("svg", _r, cr);
}
var ur = /* @__PURE__ */ i(sr, [["render", dr], ["__file", "delete-filled.vue"]]), hr = {
  name: "DeleteLocation"
}, vr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), pr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), mr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), wr = [
  fr,
  pr,
  mr
];
function gr(e, t, a, o, n, l) {
  return s(), _("svg", vr, wr);
}
var $r = /* @__PURE__ */ i(hr, [["render", gr], ["__file", "delete-location.vue"]]), zr = {
  name: "Delete"
}, xr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), Mr = [
  Cr
];
function Hr(e, t, a, o, n, l) {
  return s(), _("svg", xr, Mr);
}
var Vr = /* @__PURE__ */ i(zr, [["render", Hr], ["__file", "delete.vue"]]), yr = {
  name: "Dessert"
}, Lr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Br = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1), br = [
  Br
];
function Ar(e, t, a, o, n, l) {
  return s(), _("svg", Lr, br);
}
var Sr = /* @__PURE__ */ i(yr, [["render", Ar], ["__file", "dessert.vue"]]), Er = {
  name: "Discount"
}, Tr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), Fr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Dr = [
  kr,
  Fr
];
function Or(e, t, a, o, n, l) {
  return s(), _("svg", Tr, Dr);
}
var Pr = /* @__PURE__ */ i(Er, [["render", Or], ["__file", "discount.vue"]]), Nr = {
  name: "DishDot"
}, Ir = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1), Rr = [
  qr
];
function jr(e, t, a, o, n, l) {
  return s(), _("svg", Ir, Rr);
}
var Ur = /* @__PURE__ */ i(Nr, [["render", jr], ["__file", "dish-dot.vue"]]), Gr = {
  name: "Dish"
}, Wr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kr = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1), Yr = [
  Kr
];
function Zr(e, t, a, o, n, l) {
  return s(), _("svg", Wr, Yr);
}
var Jr = /* @__PURE__ */ i(Gr, [["render", Zr], ["__file", "dish.vue"]]), Xr = {
  name: "DocumentAdd"
}, Qr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, en = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), tn = [
  en
];
function an(e, t, a, o, n, l) {
  return s(), _("svg", Qr, tn);
}
var on = /* @__PURE__ */ i(Xr, [["render", an], ["__file", "document-add.vue"]]), rn = {
  name: "DocumentChecked"
}, nn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ln = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1), sn = [
  ln
];
function _n(e, t, a, o, n, l) {
  return s(), _("svg", nn, sn);
}
var cn = /* @__PURE__ */ i(rn, [["render", _n], ["__file", "document-checked.vue"]]), dn = {
  name: "DocumentCopy"
}, un = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1), vn = [
  hn
];
function fn(e, t, a, o, n, l) {
  return s(), _("svg", un, vn);
}
var pn = /* @__PURE__ */ i(dn, [["render", fn], ["__file", "document-copy.vue"]]), mn = {
  name: "DocumentDelete"
}, wn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gn = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1), $n = [
  gn
];
function zn(e, t, a, o, n, l) {
  return s(), _("svg", wn, $n);
}
var xn = /* @__PURE__ */ i(mn, [["render", zn], ["__file", "document-delete.vue"]]), Cn = {
  name: "DocumentRemove"
}, Mn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hn = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1), Vn = [
  Hn
];
function yn(e, t, a, o, n, l) {
  return s(), _("svg", Mn, Vn);
}
var Ln = /* @__PURE__ */ i(Cn, [["render", yn], ["__file", "document-remove.vue"]]), Bn = {
  name: "Document"
}, bn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, An = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), Sn = [
  An
];
function En(e, t, a, o, n, l) {
  return s(), _("svg", bn, Sn);
}
var Tn = /* @__PURE__ */ i(Bn, [["render", En], ["__file", "document.vue"]]), kn = {
  name: "Download"
}, Fn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dn = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), On = [
  Dn
];
function Pn(e, t, a, o, n, l) {
  return s(), _("svg", Fn, On);
}
var Nn = /* @__PURE__ */ i(kn, [["render", Pn], ["__file", "download.vue"]]), In = {
  name: "Drizzling"
}, qn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rn = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1), jn = [
  Rn
];
function Un(e, t, a, o, n, l) {
  return s(), _("svg", qn, jn);
}
var Gn = /* @__PURE__ */ i(In, [["render", Un], ["__file", "drizzling.vue"]]), Wn = {
  name: "EditPen"
}, Kn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yn = /* @__PURE__ */ r("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), Zn = [
  Yn
];
function Jn(e, t, a, o, n, l) {
  return s(), _("svg", Kn, Zn);
}
var Xn = /* @__PURE__ */ i(Wn, [["render", Jn], ["__file", "edit-pen.vue"]]), Qn = {
  name: "Edit"
}, el = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), al = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), ol = [
  tl,
  al
];
function rl(e, t, a, o, n, l) {
  return s(), _("svg", el, ol);
}
var nl = /* @__PURE__ */ i(Qn, [["render", rl], ["__file", "edit.vue"]]), ll = {
  name: "ElemeFilled"
}, sl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _l = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1), il = [
  _l
];
function cl(e, t, a, o, n, l) {
  return s(), _("svg", sl, il);
}
var dl = /* @__PURE__ */ i(ll, [["render", cl], ["__file", "eleme-filled.vue"]]), ul = {
  name: "Eleme"
}, hl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1), fl = [
  vl
];
function pl(e, t, a, o, n, l) {
  return s(), _("svg", hl, fl);
}
var ml = /* @__PURE__ */ i(ul, [["render", pl], ["__file", "eleme.vue"]]), wl = {
  name: "ElementPlus"
}, gl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $l = /* @__PURE__ */ r("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1), zl = [
  $l
];
function xl(e, t, a, o, n, l) {
  return s(), _("svg", gl, zl);
}
var Cl = /* @__PURE__ */ i(wl, [["render", xl], ["__file", "element-plus.vue"]]), Ml = {
  name: "Expand"
}, Hl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), yl = [
  Vl
];
function Ll(e, t, a, o, n, l) {
  return s(), _("svg", Hl, yl);
}
var Bl = /* @__PURE__ */ i(Ml, [["render", Ll], ["__file", "expand.vue"]]), bl = {
  name: "Failed"
}, Al = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1), El = [
  Sl
];
function Tl(e, t, a, o, n, l) {
  return s(), _("svg", Al, El);
}
var kl = /* @__PURE__ */ i(bl, [["render", Tl], ["__file", "failed.vue"]]), Fl = {
  name: "Female"
}, Dl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ol = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), Pl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), Nl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), Il = [
  Ol,
  Pl,
  Nl
];
function ql(e, t, a, o, n, l) {
  return s(), _("svg", Dl, Il);
}
var Rl = /* @__PURE__ */ i(Fl, [["render", ql], ["__file", "female.vue"]]), jl = {
  name: "Files"
}, Ul = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1), Wl = [
  Gl
];
function Kl(e, t, a, o, n, l) {
  return s(), _("svg", Ul, Wl);
}
var Yl = /* @__PURE__ */ i(jl, [["render", Kl], ["__file", "files.vue"]]), Zl = {
  name: "Film"
}, Jl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xl = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), Ql = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1), es = [
  Xl,
  Ql
];
function ts(e, t, a, o, n, l) {
  return s(), _("svg", Jl, es);
}
var as = /* @__PURE__ */ i(Zl, [["render", ts], ["__file", "film.vue"]]), os = {
  name: "Filter"
}, rs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ns = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), ls = [
  ns
];
function ss(e, t, a, o, n, l) {
  return s(), _("svg", rs, ls);
}
var _s = /* @__PURE__ */ i(os, [["render", ss], ["__file", "filter.vue"]]), is = {
  name: "Finished"
}, cs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ds = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1), us = [
  ds
];
function hs(e, t, a, o, n, l) {
  return s(), _("svg", cs, us);
}
var vs = /* @__PURE__ */ i(is, [["render", hs], ["__file", "finished.vue"]]), fs = {
  name: "FirstAidKit"
}, ps = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ms = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), ws = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), gs = [
  ms,
  ws
];
function $s(e, t, a, o, n, l) {
  return s(), _("svg", ps, gs);
}
var zs = /* @__PURE__ */ i(fs, [["render", $s], ["__file", "first-aid-kit.vue"]]), xs = {
  name: "Flag"
}, Cs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ms = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1), Hs = [
  Ms
];
function Vs(e, t, a, o, n, l) {
  return s(), _("svg", Cs, Hs);
}
var ys = /* @__PURE__ */ i(xs, [["render", Vs], ["__file", "flag.vue"]]), Ls = {
  name: "Fold"
}, Bs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bs = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1), As = [
  bs
];
function Ss(e, t, a, o, n, l) {
  return s(), _("svg", Bs, As);
}
var Es = /* @__PURE__ */ i(Ls, [["render", Ss], ["__file", "fold.vue"]]), Ts = {
  name: "FolderAdd"
}, ks = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fs = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1), Ds = [
  Fs
];
function Os(e, t, a, o, n, l) {
  return s(), _("svg", ks, Ds);
}
var Ps = /* @__PURE__ */ i(Ts, [["render", Os], ["__file", "folder-add.vue"]]), Ns = {
  name: "FolderChecked"
}, Is = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qs = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1), Rs = [
  qs
];
function js(e, t, a, o, n, l) {
  return s(), _("svg", Is, Rs);
}
var Us = /* @__PURE__ */ i(Ns, [["render", js], ["__file", "folder-checked.vue"]]), Gs = {
  name: "FolderDelete"
}, Ws = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ks = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1), Ys = [
  Ks
];
function Zs(e, t, a, o, n, l) {
  return s(), _("svg", Ws, Ys);
}
var Js = /* @__PURE__ */ i(Gs, [["render", Zs], ["__file", "folder-delete.vue"]]), Xs = {
  name: "FolderOpened"
}, Qs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1), t_ = [
  e_
];
function a_(e, t, a, o, n, l) {
  return s(), _("svg", Qs, t_);
}
var o_ = /* @__PURE__ */ i(Xs, [["render", a_], ["__file", "folder-opened.vue"]]), r_ = {
  name: "FolderRemove"
}, n_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1), s_ = [
  l_
];
function __(e, t, a, o, n, l) {
  return s(), _("svg", n_, s_);
}
var i_ = /* @__PURE__ */ i(r_, [["render", __], ["__file", "folder-remove.vue"]]), c_ = {
  name: "Folder"
}, d_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1), h_ = [
  u_
];
function v_(e, t, a, o, n, l) {
  return s(), _("svg", d_, h_);
}
var f_ = /* @__PURE__ */ i(c_, [["render", v_], ["__file", "folder.vue"]]), p_ = {
  name: "Food"
}, m_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1), g_ = [
  w_
];
function $_(e, t, a, o, n, l) {
  return s(), _("svg", m_, g_);
}
var z_ = /* @__PURE__ */ i(p_, [["render", $_], ["__file", "food.vue"]]), x_ = {
  name: "Football"
}, C_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), H_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1), V_ = [
  M_,
  H_
];
function y_(e, t, a, o, n, l) {
  return s(), _("svg", C_, V_);
}
var L_ = /* @__PURE__ */ i(x_, [["render", y_], ["__file", "football.vue"]]), B_ = {
  name: "ForkSpoon"
}, b_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), S_ = [
  A_
];
function E_(e, t, a, o, n, l) {
  return s(), _("svg", b_, S_);
}
var T_ = /* @__PURE__ */ i(B_, [["render", E_], ["__file", "fork-spoon.vue"]]), k_ = {
  name: "Fries"
}, F_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1), O_ = [
  D_
];
function P_(e, t, a, o, n, l) {
  return s(), _("svg", F_, O_);
}
var N_ = /* @__PURE__ */ i(k_, [["render", P_], ["__file", "fries.vue"]]), I_ = {
  name: "FullScreen"
}, q_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), j_ = [
  R_
];
function U_(e, t, a, o, n, l) {
  return s(), _("svg", q_, j_);
}
var G_ = /* @__PURE__ */ i(I_, [["render", U_], ["__file", "full-screen.vue"]]), W_ = {
  name: "GobletFull"
}, K_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y_ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1), Z_ = [
  Y_
];
function J_(e, t, a, o, n, l) {
  return s(), _("svg", K_, Z_);
}
var X_ = /* @__PURE__ */ i(W_, [["render", J_], ["__file", "goblet-full.vue"]]), Q_ = {
  name: "GobletSquareFull"
}, ei = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ti = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1), ai = [
  ti
];
function oi(e, t, a, o, n, l) {
  return s(), _("svg", ei, ai);
}
var ri = /* @__PURE__ */ i(Q_, [["render", oi], ["__file", "goblet-square-full.vue"]]), ni = {
  name: "GobletSquare"
}, li = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, si = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1), _i = [
  si
];
function ii(e, t, a, o, n, l) {
  return s(), _("svg", li, _i);
}
var ci = /* @__PURE__ */ i(ni, [["render", ii], ["__file", "goblet-square.vue"]]), di = {
  name: "Goblet"
}, ui = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hi = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1), vi = [
  hi
];
function fi(e, t, a, o, n, l) {
  return s(), _("svg", ui, vi);
}
var pi = /* @__PURE__ */ i(di, [["render", fi], ["__file", "goblet.vue"]]), mi = {
  name: "GoodsFilled"
}, wi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gi = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1), $i = [
  gi
];
function zi(e, t, a, o, n, l) {
  return s(), _("svg", wi, $i);
}
var xi = /* @__PURE__ */ i(mi, [["render", zi], ["__file", "goods-filled.vue"]]), Ci = {
  name: "Goods"
}, Mi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hi = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1), Vi = [
  Hi
];
function yi(e, t, a, o, n, l) {
  return s(), _("svg", Mi, Vi);
}
var Li = /* @__PURE__ */ i(Ci, [["render", yi], ["__file", "goods.vue"]]), Bi = {
  name: "Grape"
}, bi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ai = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), Si = [
  Ai
];
function Ei(e, t, a, o, n, l) {
  return s(), _("svg", bi, Si);
}
var Ti = /* @__PURE__ */ i(Bi, [["render", Ei], ["__file", "grape.vue"]]), ki = {
  name: "Grid"
}, Fi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Di = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1), Oi = [
  Di
];
function Pi(e, t, a, o, n, l) {
  return s(), _("svg", Fi, Oi);
}
var Ni = /* @__PURE__ */ i(ki, [["render", Pi], ["__file", "grid.vue"]]), Ii = {
  name: "Guide"
}, qi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ri = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), ji = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1), Ui = [
  Ri,
  ji
];
function Gi(e, t, a, o, n, l) {
  return s(), _("svg", qi, Ui);
}
var Wi = /* @__PURE__ */ i(Ii, [["render", Gi], ["__file", "guide.vue"]]), Ki = {
  name: "Headset"
}, Yi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zi = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1), Ji = [
  Zi
];
function Xi(e, t, a, o, n, l) {
  return s(), _("svg", Yi, Ji);
}
var Qi = /* @__PURE__ */ i(Ki, [["render", Xi], ["__file", "headset.vue"]]), e5 = {
  name: "HelpFilled"
}, t5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, a5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1), o5 = [
  a5
];
function r5(e, t, a, o, n, l) {
  return s(), _("svg", t5, o5);
}
var n5 = /* @__PURE__ */ i(e5, [["render", r5], ["__file", "help-filled.vue"]]), l5 = {
  name: "Help"
}, s5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), i5 = [
  _5
];
function c5(e, t, a, o, n, l) {
  return s(), _("svg", s5, i5);
}
var d5 = /* @__PURE__ */ i(l5, [["render", c5], ["__file", "help.vue"]]), u5 = {
  name: "Hide"
}, h5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, v5 = /* @__PURE__ */ r("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), f5 = /* @__PURE__ */ r("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), p5 = [
  v5,
  f5
];
function m5(e, t, a, o, n, l) {
  return s(), _("svg", h5, p5);
}
var w5 = /* @__PURE__ */ i(u5, [["render", m5], ["__file", "hide.vue"]]), g5 = {
  name: "Histogram"
}, $5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1), x5 = [
  z5
];
function C5(e, t, a, o, n, l) {
  return s(), _("svg", $5, x5);
}
var M5 = /* @__PURE__ */ i(g5, [["render", C5], ["__file", "histogram.vue"]]), H5 = {
  name: "HomeFilled"
}, V5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), L5 = [
  y5
];
function B5(e, t, a, o, n, l) {
  return s(), _("svg", V5, L5);
}
var b5 = /* @__PURE__ */ i(H5, [["render", B5], ["__file", "home-filled.vue"]]), A5 = {
  name: "HotWater"
}, S5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, E5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1), T5 = [
  E5
];
function k5(e, t, a, o, n, l) {
  return s(), _("svg", S5, T5);
}
var F5 = /* @__PURE__ */ i(A5, [["render", k5], ["__file", "hot-water.vue"]]), D5 = {
  name: "House"
}, O5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1), N5 = [
  P5
];
function I5(e, t, a, o, n, l) {
  return s(), _("svg", O5, N5);
}
var q5 = /* @__PURE__ */ i(D5, [["render", I5], ["__file", "house.vue"]]), R5 = {
  name: "IceCreamRound"
}, j5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, U5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1), G5 = [
  U5
];
function W5(e, t, a, o, n, l) {
  return s(), _("svg", j5, G5);
}
var K5 = /* @__PURE__ */ i(R5, [["render", W5], ["__file", "ice-cream-round.vue"]]), Y5 = {
  name: "IceCreamSquare"
}, Z5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J5 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), X5 = [
  J5
];
function Q5(e, t, a, o, n, l) {
  return s(), _("svg", Z5, X5);
}
var e9 = /* @__PURE__ */ i(Y5, [["render", Q5], ["__file", "ice-cream-square.vue"]]), t9 = {
  name: "IceCream"
}, a9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, o9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1), r9 = [
  o9
];
function n9(e, t, a, o, n, l) {
  return s(), _("svg", a9, r9);
}
var l9 = /* @__PURE__ */ i(t9, [["render", n9], ["__file", "ice-cream.vue"]]), s9 = {
  name: "IceDrink"
}, _9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1), c9 = [
  i9
];
function d9(e, t, a, o, n, l) {
  return s(), _("svg", _9, c9);
}
var u9 = /* @__PURE__ */ i(s9, [["render", d9], ["__file", "ice-drink.vue"]]), h9 = {
  name: "IceTea"
}, v9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, f9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1), p9 = [
  f9
];
function m9(e, t, a, o, n, l) {
  return s(), _("svg", v9, p9);
}
var w9 = /* @__PURE__ */ i(h9, [["render", m9], ["__file", "ice-tea.vue"]]), g9 = {
  name: "InfoFilled"
}, $9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), x9 = [
  z9
];
function C9(e, t, a, o, n, l) {
  return s(), _("svg", $9, x9);
}
var q2 = /* @__PURE__ */ i(g9, [["render", C9], ["__file", "info-filled.vue"]]), M9 = {
  name: "Iphone"
}, H9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, V9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1), y9 = [
  V9
];
function L9(e, t, a, o, n, l) {
  return s(), _("svg", H9, y9);
}
var B9 = /* @__PURE__ */ i(M9, [["render", L9], ["__file", "iphone.vue"]]), b9 = {
  name: "Key"
}, A9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1), E9 = [
  S9
];
function T9(e, t, a, o, n, l) {
  return s(), _("svg", A9, E9);
}
var k9 = /* @__PURE__ */ i(b9, [["render", T9], ["__file", "key.vue"]]), F9 = {
  name: "KnifeFork"
}, D9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, O9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1), P9 = [
  O9
];
function N9(e, t, a, o, n, l) {
  return s(), _("svg", D9, P9);
}
var I9 = /* @__PURE__ */ i(F9, [["render", N9], ["__file", "knife-fork.vue"]]), q9 = {
  name: "Lightning"
}, R9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), U9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1), G9 = [
  j9,
  U9
];
function W9(e, t, a, o, n, l) {
  return s(), _("svg", R9, G9);
}
var K9 = /* @__PURE__ */ i(q9, [["render", W9], ["__file", "lightning.vue"]]), Y9 = {
  name: "Link"
}, Z9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J9 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1), X9 = [
  J9
];
function Q9(e, t, a, o, n, l) {
  return s(), _("svg", Z9, X9);
}
var ec = /* @__PURE__ */ i(Y9, [["render", Q9], ["__file", "link.vue"]]), tc = {
  name: "List"
}, ac = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1), rc = [
  oc
];
function nc(e, t, a, o, n, l) {
  return s(), _("svg", ac, rc);
}
var lc = /* @__PURE__ */ i(tc, [["render", nc], ["__file", "list.vue"]]), sc = {
  name: "Loading"
}, _c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ic = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), cc = [
  ic
];
function dc(e, t, a, o, n, l) {
  return s(), _("svg", _c, cc);
}
var uc = /* @__PURE__ */ i(sc, [["render", dc], ["__file", "loading.vue"]]), hc = {
  name: "LocationFilled"
}, vc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1), pc = [
  fc
];
function mc(e, t, a, o, n, l) {
  return s(), _("svg", vc, pc);
}
var wc = /* @__PURE__ */ i(hc, [["render", mc], ["__file", "location-filled.vue"]]), gc = {
  name: "LocationInformation"
}, $c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), xc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Cc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), Mc = [
  zc,
  xc,
  Cc
];
function Hc(e, t, a, o, n, l) {
  return s(), _("svg", $c, Mc);
}
var Vc = /* @__PURE__ */ i(gc, [["render", Hc], ["__file", "location-information.vue"]]), yc = {
  name: "Location"
}, Lc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), bc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), Ac = [
  Bc,
  bc
];
function Sc(e, t, a, o, n, l) {
  return s(), _("svg", Lc, Ac);
}
var Ec = /* @__PURE__ */ i(yc, [["render", Sc], ["__file", "location.vue"]]), Tc = {
  name: "Lock"
}, kc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), Dc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1), Oc = [
  Fc,
  Dc
];
function Pc(e, t, a, o, n, l) {
  return s(), _("svg", kc, Oc);
}
var Nc = /* @__PURE__ */ i(Tc, [["render", Pc], ["__file", "lock.vue"]]), Ic = {
  name: "Lollipop"
}, qc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1), jc = [
  Rc
];
function Uc(e, t, a, o, n, l) {
  return s(), _("svg", qc, jc);
}
var Gc = /* @__PURE__ */ i(Ic, [["render", Uc], ["__file", "lollipop.vue"]]), Wc = {
  name: "MagicStick"
}, Kc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yc = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), Zc = [
  Yc
];
function Jc(e, t, a, o, n, l) {
  return s(), _("svg", Kc, Zc);
}
var Xc = /* @__PURE__ */ i(Wc, [["render", Jc], ["__file", "magic-stick.vue"]]), Qc = {
  name: "Magnet"
}, ed = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, td = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1), ad = [
  td
];
function od(e, t, a, o, n, l) {
  return s(), _("svg", ed, ad);
}
var rd = /* @__PURE__ */ i(Qc, [["render", od], ["__file", "magnet.vue"]]), nd = {
  name: "Male"
}, ld = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), _d = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), id = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1), cd = [
  sd,
  _d,
  id
];
function dd(e, t, a, o, n, l) {
  return s(), _("svg", ld, cd);
}
var ud = /* @__PURE__ */ i(nd, [["render", dd], ["__file", "male.vue"]]), hd = {
  name: "Management"
}, vd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1), pd = [
  fd
];
function md(e, t, a, o, n, l) {
  return s(), _("svg", vd, pd);
}
var wd = /* @__PURE__ */ i(hd, [["render", md], ["__file", "management.vue"]]), gd = {
  name: "MapLocation"
}, $d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), xd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1), Cd = [
  zd,
  xd
];
function Md(e, t, a, o, n, l) {
  return s(), _("svg", $d, Cd);
}
var Hd = /* @__PURE__ */ i(gd, [["render", Md], ["__file", "map-location.vue"]]), Vd = {
  name: "Medal"
}, yd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ld = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), Bd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1), bd = [
  Ld,
  Bd
];
function Ad(e, t, a, o, n, l) {
  return s(), _("svg", yd, bd);
}
var Sd = /* @__PURE__ */ i(Vd, [["render", Ad], ["__file", "medal.vue"]]), Ed = {
  name: "Menu"
}, Td = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1), Fd = [
  kd
];
function Dd(e, t, a, o, n, l) {
  return s(), _("svg", Td, Fd);
}
var Od = /* @__PURE__ */ i(Ed, [["render", Dd], ["__file", "menu.vue"]]), Pd = {
  name: "MessageBox"
}, Nd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Id = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1), qd = [
  Id
];
function Rd(e, t, a, o, n, l) {
  return s(), _("svg", Nd, qd);
}
var jd = /* @__PURE__ */ i(Pd, [["render", Rd], ["__file", "message-box.vue"]]), Ud = {
  name: "Message"
}, Gd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), Kd = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), Yd = [
  Wd,
  Kd
];
function Zd(e, t, a, o, n, l) {
  return s(), _("svg", Gd, Yd);
}
var Jd = /* @__PURE__ */ i(Ud, [["render", Zd], ["__file", "message.vue"]]), Xd = {
  name: "Mic"
}, Qd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1), tu = [
  eu
];
function au(e, t, a, o, n, l) {
  return s(), _("svg", Qd, tu);
}
var ou = /* @__PURE__ */ i(Xd, [["render", au], ["__file", "mic.vue"]]), ru = {
  name: "Microphone"
}, nu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1), su = [
  lu
];
function _u(e, t, a, o, n, l) {
  return s(), _("svg", nu, su);
}
var iu = /* @__PURE__ */ i(ru, [["render", _u], ["__file", "microphone.vue"]]), cu = {
  name: "MilkTea"
}, du = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1), hu = [
  uu
];
function vu(e, t, a, o, n, l) {
  return s(), _("svg", du, hu);
}
var fu = /* @__PURE__ */ i(cu, [["render", vu], ["__file", "milk-tea.vue"]]), pu = {
  name: "Minus"
}, mu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), gu = [
  wu
];
function $u(e, t, a, o, n, l) {
  return s(), _("svg", mu, gu);
}
var zu = /* @__PURE__ */ i(pu, [["render", $u], ["__file", "minus.vue"]]), xu = {
  name: "Money"
}, Cu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), Hu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), Vu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), yu = [
  Mu,
  Hu,
  Vu
];
function Lu(e, t, a, o, n, l) {
  return s(), _("svg", Cu, yu);
}
var Bu = /* @__PURE__ */ i(xu, [["render", Lu], ["__file", "money.vue"]]), bu = {
  name: "Monitor"
}, Au = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Su = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1), Eu = [
  Su
];
function Tu(e, t, a, o, n, l) {
  return s(), _("svg", Au, Eu);
}
var ku = /* @__PURE__ */ i(bu, [["render", Tu], ["__file", "monitor.vue"]]), Fu = {
  name: "MoonNight"
}, Du = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ou = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), Pu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1), Nu = [
  Ou,
  Pu
];
function Iu(e, t, a, o, n, l) {
  return s(), _("svg", Du, Nu);
}
var qu = /* @__PURE__ */ i(Fu, [["render", Iu], ["__file", "moon-night.vue"]]), Ru = {
  name: "Moon"
}, ju = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uu = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), Gu = [
  Uu
];
function Wu(e, t, a, o, n, l) {
  return s(), _("svg", ju, Gu);
}
var Ku = /* @__PURE__ */ i(Ru, [["render", Wu], ["__file", "moon.vue"]]), Yu = {
  name: "MoreFilled"
}, Zu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ju = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), Xu = [
  Ju
];
function Qu(e, t, a, o, n, l) {
  return s(), _("svg", Zu, Xu);
}
var eh = /* @__PURE__ */ i(Yu, [["render", Qu], ["__file", "more-filled.vue"]]), th = {
  name: "More"
}, ah = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), rh = [
  oh
];
function nh(e, t, a, o, n, l) {
  return s(), _("svg", ah, rh);
}
var lh = /* @__PURE__ */ i(th, [["render", nh], ["__file", "more.vue"]]), sh = {
  name: "MostlyCloudy"
}, _h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ih = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1), ch = [
  ih
];
function dh(e, t, a, o, n, l) {
  return s(), _("svg", _h, ch);
}
var uh = /* @__PURE__ */ i(sh, [["render", dh], ["__file", "mostly-cloudy.vue"]]), hh = {
  name: "Mouse"
}, vh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), ph = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1), mh = [
  fh,
  ph
];
function wh(e, t, a, o, n, l) {
  return s(), _("svg", vh, mh);
}
var gh = /* @__PURE__ */ i(hh, [["render", wh], ["__file", "mouse.vue"]]), $h = {
  name: "Mug"
}, zh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1), Ch = [
  xh
];
function Mh(e, t, a, o, n, l) {
  return s(), _("svg", zh, Ch);
}
var Hh = /* @__PURE__ */ i($h, [["render", Mh], ["__file", "mug.vue"]]), Vh = {
  name: "MuteNotification"
}, yh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), Bh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), bh = [
  Lh,
  Bh
];
function Ah(e, t, a, o, n, l) {
  return s(), _("svg", yh, bh);
}
var Sh = /* @__PURE__ */ i(Vh, [["render", Ah], ["__file", "mute-notification.vue"]]), Eh = {
  name: "Mute"
}, Th = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), Fh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), Dh = [
  kh,
  Fh
];
function Oh(e, t, a, o, n, l) {
  return s(), _("svg", Th, Dh);
}
var Ph = /* @__PURE__ */ i(Eh, [["render", Oh], ["__file", "mute.vue"]]), Nh = {
  name: "NoSmoking"
}, Ih = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), Rh = [
  qh
];
function jh(e, t, a, o, n, l) {
  return s(), _("svg", Ih, Rh);
}
var Uh = /* @__PURE__ */ i(Nh, [["render", jh], ["__file", "no-smoking.vue"]]), Gh = {
  name: "Notebook"
}, Wh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), Yh = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), Zh = [
  Kh,
  Yh
];
function Jh(e, t, a, o, n, l) {
  return s(), _("svg", Wh, Zh);
}
var Xh = /* @__PURE__ */ i(Gh, [["render", Jh], ["__file", "notebook.vue"]]), Qh = {
  name: "Notification"
}, e7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, t7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), a7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), o7 = [
  t7,
  a7
];
function r7(e, t, a, o, n, l) {
  return s(), _("svg", e7, o7);
}
var n7 = /* @__PURE__ */ i(Qh, [["render", r7], ["__file", "notification.vue"]]), l7 = {
  name: "Odometer"
}, s7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), i7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), c7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1), d7 = [
  _7,
  i7,
  c7
];
function u7(e, t, a, o, n, l) {
  return s(), _("svg", s7, d7);
}
var h7 = /* @__PURE__ */ i(l7, [["render", u7], ["__file", "odometer.vue"]]), v7 = {
  name: "OfficeBuilding"
}, f7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), m7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), w7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1), g7 = [
  p7,
  m7,
  w7
];
function $7(e, t, a, o, n, l) {
  return s(), _("svg", f7, g7);
}
var z7 = /* @__PURE__ */ i(v7, [["render", $7], ["__file", "office-building.vue"]]), x7 = {
  name: "Open"
}, C7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), H7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), V7 = [
  M7,
  H7
];
function y7(e, t, a, o, n, l) {
  return s(), _("svg", C7, V7);
}
var L7 = /* @__PURE__ */ i(x7, [["render", y7], ["__file", "open.vue"]]), B7 = {
  name: "Operation"
}, b7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), S7 = [
  A7
];
function E7(e, t, a, o, n, l) {
  return s(), _("svg", b7, S7);
}
var T7 = /* @__PURE__ */ i(B7, [["render", E7], ["__file", "operation.vue"]]), k7 = {
  name: "Opportunity"
}, F7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1), O7 = [
  D7
];
function P7(e, t, a, o, n, l) {
  return s(), _("svg", F7, O7);
}
var N7 = /* @__PURE__ */ i(k7, [["render", P7], ["__file", "opportunity.vue"]]), I7 = {
  name: "Orange"
}, q7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1), j7 = [
  R7
];
function U7(e, t, a, o, n, l) {
  return s(), _("svg", q7, j7);
}
var G7 = /* @__PURE__ */ i(I7, [["render", U7], ["__file", "orange.vue"]]), W7 = {
  name: "Paperclip"
}, K7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y7 = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), Z7 = [
  Y7
];
function J7(e, t, a, o, n, l) {
  return s(), _("svg", K7, Z7);
}
var X7 = /* @__PURE__ */ i(W7, [["render", J7], ["__file", "paperclip.vue"]]), Q7 = {
  name: "PartlyCloudy"
}, ev = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), av = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1), ov = [
  tv,
  av
];
function rv(e, t, a, o, n, l) {
  return s(), _("svg", ev, ov);
}
var nv = /* @__PURE__ */ i(Q7, [["render", rv], ["__file", "partly-cloudy.vue"]]), lv = {
  name: "Pear"
}, sv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _v = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1), iv = [
  _v
];
function cv(e, t, a, o, n, l) {
  return s(), _("svg", sv, iv);
}
var dv = /* @__PURE__ */ i(lv, [["render", cv], ["__file", "pear.vue"]]), uv = {
  name: "PhoneFilled"
}, hv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1), fv = [
  vv
];
function pv(e, t, a, o, n, l) {
  return s(), _("svg", hv, fv);
}
var mv = /* @__PURE__ */ i(uv, [["render", pv], ["__file", "phone-filled.vue"]]), wv = {
  name: "Phone"
}, gv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $v = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1), zv = [
  $v
];
function xv(e, t, a, o, n, l) {
  return s(), _("svg", gv, zv);
}
var Cv = /* @__PURE__ */ i(wv, [["render", xv], ["__file", "phone.vue"]]), Mv = {
  name: "PictureFilled"
}, Hv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1), yv = [
  Vv
];
function Lv(e, t, a, o, n, l) {
  return s(), _("svg", Hv, yv);
}
var Bv = /* @__PURE__ */ i(Mv, [["render", Lv], ["__file", "picture-filled.vue"]]), bv = {
  name: "PictureRounded"
}, Av = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), Ev = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1), Tv = [
  Sv,
  Ev
];
function kv(e, t, a, o, n, l) {
  return s(), _("svg", Av, Tv);
}
var Fv = /* @__PURE__ */ i(bv, [["render", kv], ["__file", "picture-rounded.vue"]]), Dv = {
  name: "Picture"
}, Ov = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), Nv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), Iv = [
  Pv,
  Nv
];
function qv(e, t, a, o, n, l) {
  return s(), _("svg", Ov, Iv);
}
var Rv = /* @__PURE__ */ i(Dv, [["render", qv], ["__file", "picture.vue"]]), jv = {
  name: "PieChart"
}, Uv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), Wv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1), Kv = [
  Gv,
  Wv
];
function Yv(e, t, a, o, n, l) {
  return s(), _("svg", Uv, Kv);
}
var Zv = /* @__PURE__ */ i(jv, [["render", Yv], ["__file", "pie-chart.vue"]]), Jv = {
  name: "Place"
}, Xv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qv = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), ef = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), tf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1), af = [
  Qv,
  ef,
  tf
];
function of(e, t, a, o, n, l) {
  return s(), _("svg", Xv, af);
}
var rf = /* @__PURE__ */ i(Jv, [["render", of], ["__file", "place.vue"]]), nf = {
  name: "Platform"
}, lf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1), _f = [
  sf
];
function cf(e, t, a, o, n, l) {
  return s(), _("svg", lf, _f);
}
var df = /* @__PURE__ */ i(nf, [["render", cf], ["__file", "platform.vue"]]), uf = {
  name: "Plus"
}, hf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), ff = [
  vf
];
function pf(e, t, a, o, n, l) {
  return s(), _("svg", hf, ff);
}
var mf = /* @__PURE__ */ i(uf, [["render", pf], ["__file", "plus.vue"]]), wf = {
  name: "Pointer"
}, gf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $f = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1), zf = [
  $f
];
function xf(e, t, a, o, n, l) {
  return s(), _("svg", gf, zf);
}
var Cf = /* @__PURE__ */ i(wf, [["render", xf], ["__file", "pointer.vue"]]), Mf = {
  name: "Position"
}, Hf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1), yf = [
  Vf
];
function Lf(e, t, a, o, n, l) {
  return s(), _("svg", Hf, yf);
}
var Bf = /* @__PURE__ */ i(Mf, [["render", Lf], ["__file", "position.vue"]]), bf = {
  name: "Postcard"
}, Af = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), Ef = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Tf = [
  Sf,
  Ef
];
function kf(e, t, a, o, n, l) {
  return s(), _("svg", Af, Tf);
}
var Ff = /* @__PURE__ */ i(bf, [["render", kf], ["__file", "postcard.vue"]]), Df = {
  name: "Pouring"
}, Of = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1), Nf = [
  Pf
];
function If(e, t, a, o, n, l) {
  return s(), _("svg", Of, Nf);
}
var qf = /* @__PURE__ */ i(Df, [["render", If], ["__file", "pouring.vue"]]), Rf = {
  name: "Present"
}, jf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), Gf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), Wf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Kf = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Yf = [
  Uf,
  Gf,
  Wf,
  Kf
];
function Zf(e, t, a, o, n, l) {
  return s(), _("svg", jf, Yf);
}
var Jf = /* @__PURE__ */ i(Rf, [["render", Zf], ["__file", "present.vue"]]), Xf = {
  name: "PriceTag"
}, Qf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ep = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), tp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), ap = [
  ep,
  tp
];
function op(e, t, a, o, n, l) {
  return s(), _("svg", Qf, ap);
}
var rp = /* @__PURE__ */ i(Xf, [["render", op], ["__file", "price-tag.vue"]]), np = {
  name: "Printer"
}, lp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1), _p = [
  sp
];
function ip(e, t, a, o, n, l) {
  return s(), _("svg", lp, _p);
}
var cp = /* @__PURE__ */ i(np, [["render", ip], ["__file", "printer.vue"]]), dp = {
  name: "Promotion"
}, up = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1), vp = [
  hp
];
function fp(e, t, a, o, n, l) {
  return s(), _("svg", up, vp);
}
var pp = /* @__PURE__ */ i(dp, [["render", fp], ["__file", "promotion.vue"]]), mp = {
  name: "QuestionFilled"
}, wp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1), $p = [
  gp
];
function zp(e, t, a, o, n, l) {
  return s(), _("svg", wp, $p);
}
var xp = /* @__PURE__ */ i(mp, [["render", zp], ["__file", "question-filled.vue"]]), Cp = {
  name: "Rank"
}, Mp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1), Vp = [
  Hp
];
function yp(e, t, a, o, n, l) {
  return s(), _("svg", Mp, Vp);
}
var Lp = /* @__PURE__ */ i(Cp, [["render", yp], ["__file", "rank.vue"]]), Bp = {
  name: "ReadingLamp"
}, bp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ap = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), Sp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1), Ep = [
  Ap,
  Sp
];
function Tp(e, t, a, o, n, l) {
  return s(), _("svg", bp, Ep);
}
var kp = /* @__PURE__ */ i(Bp, [["render", Tp], ["__file", "reading-lamp.vue"]]), Fp = {
  name: "Reading"
}, Dp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Op = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), Pp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1), Np = [
  Op,
  Pp
];
function Ip(e, t, a, o, n, l) {
  return s(), _("svg", Dp, Np);
}
var qp = /* @__PURE__ */ i(Fp, [["render", Ip], ["__file", "reading.vue"]]), Rp = {
  name: "RefreshLeft"
}, jp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Up = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), Gp = [
  Up
];
function Wp(e, t, a, o, n, l) {
  return s(), _("svg", jp, Gp);
}
var Kp = /* @__PURE__ */ i(Rp, [["render", Wp], ["__file", "refresh-left.vue"]]), Yp = {
  name: "RefreshRight"
}, Zp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jp = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), Xp = [
  Jp
];
function Qp(e, t, a, o, n, l) {
  return s(), _("svg", Zp, Xp);
}
var em = /* @__PURE__ */ i(Yp, [["render", Qp], ["__file", "refresh-right.vue"]]), tm = {
  name: "Refresh"
}, am = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, om = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), rm = [
  om
];
function nm(e, t, a, o, n, l) {
  return s(), _("svg", am, rm);
}
var lm = /* @__PURE__ */ i(tm, [["render", nm], ["__file", "refresh.vue"]]), sm = {
  name: "Refrigerator"
}, _m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, im = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1), cm = [
  im
];
function dm(e, t, a, o, n, l) {
  return s(), _("svg", _m, cm);
}
var um = /* @__PURE__ */ i(sm, [["render", dm], ["__file", "refrigerator.vue"]]), hm = {
  name: "RemoveFilled"
}, vm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1), pm = [
  fm
];
function mm(e, t, a, o, n, l) {
  return s(), _("svg", vm, pm);
}
var wm = /* @__PURE__ */ i(hm, [["render", mm], ["__file", "remove-filled.vue"]]), gm = {
  name: "Remove"
}, $m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), xm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Cm = [
  zm,
  xm
];
function Mm(e, t, a, o, n, l) {
  return s(), _("svg", $m, Cm);
}
var Hm = /* @__PURE__ */ i(gm, [["render", Mm], ["__file", "remove.vue"]]), Vm = {
  name: "Right"
}, ym = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1), Bm = [
  Lm
];
function bm(e, t, a, o, n, l) {
  return s(), _("svg", ym, Bm);
}
var Am = /* @__PURE__ */ i(Vm, [["render", bm], ["__file", "right.vue"]]), Sm = {
  name: "ScaleToOriginal"
}, Em = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), km = [
  Tm
];
function Fm(e, t, a, o, n, l) {
  return s(), _("svg", Em, km);
}
var Dm = /* @__PURE__ */ i(Sm, [["render", Fm], ["__file", "scale-to-original.vue"]]), Om = {
  name: "School"
}, Pm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), Im = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), qm = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1), Rm = [
  Nm,
  Im,
  qm
];
function jm(e, t, a, o, n, l) {
  return s(), _("svg", Pm, Rm);
}
var Um = /* @__PURE__ */ i(Om, [["render", jm], ["__file", "school.vue"]]), Gm = {
  name: "Scissor"
}, Wm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Km = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1), Ym = [
  Km
];
function Zm(e, t, a, o, n, l) {
  return s(), _("svg", Wm, Ym);
}
var Jm = /* @__PURE__ */ i(Gm, [["render", Zm], ["__file", "scissor.vue"]]), Xm = {
  name: "Search"
}, Qm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ew = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), tw = [
  ew
];
function aw(e, t, a, o, n, l) {
  return s(), _("svg", Qm, tw);
}
var ow = /* @__PURE__ */ i(Xm, [["render", aw], ["__file", "search.vue"]]), rw = {
  name: "Select"
}, nw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1), sw = [
  lw
];
function _w(e, t, a, o, n, l) {
  return s(), _("svg", nw, sw);
}
var iw = /* @__PURE__ */ i(rw, [["render", _w], ["__file", "select.vue"]]), cw = {
  name: "Sell"
}, dw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1), hw = [
  uw
];
function vw(e, t, a, o, n, l) {
  return s(), _("svg", dw, hw);
}
var fw = /* @__PURE__ */ i(cw, [["render", vw], ["__file", "sell.vue"]]), pw = {
  name: "SemiSelect"
}, mw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ww = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1), gw = [
  ww
];
function $w(e, t, a, o, n, l) {
  return s(), _("svg", mw, gw);
}
var zw = /* @__PURE__ */ i(pw, [["render", $w], ["__file", "semi-select.vue"]]), xw = {
  name: "Service"
}, Cw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1), Hw = [
  Mw
];
function Vw(e, t, a, o, n, l) {
  return s(), _("svg", Cw, Hw);
}
var yw = /* @__PURE__ */ i(xw, [["render", Vw], ["__file", "service.vue"]]), Lw = {
  name: "SetUp"
}, Bw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), Aw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Sw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Ew = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Tw = [
  bw,
  Aw,
  Sw,
  Ew
];
function kw(e, t, a, o, n, l) {
  return s(), _("svg", Bw, Tw);
}
var Fw = /* @__PURE__ */ i(Lw, [["render", kw], ["__file", "set-up.vue"]]), Dw = {
  name: "Setting"
}, Ow = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), Nw = [
  Pw
];
function Iw(e, t, a, o, n, l) {
  return s(), _("svg", Ow, Nw);
}
var qw = /* @__PURE__ */ i(Dw, [["render", Iw], ["__file", "setting.vue"]]), Rw = {
  name: "Share"
}, jw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1), Gw = [
  Uw
];
function Ww(e, t, a, o, n, l) {
  return s(), _("svg", jw, Gw);
}
var Kw = /* @__PURE__ */ i(Rw, [["render", Ww], ["__file", "share.vue"]]), Yw = {
  name: "Ship"
}, Zw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jw = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1), Xw = [
  Jw
];
function Qw(e, t, a, o, n, l) {
  return s(), _("svg", Zw, Xw);
}
var eg = /* @__PURE__ */ i(Yw, [["render", Qw], ["__file", "ship.vue"]]), tg = {
  name: "Shop"
}, ag = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, og = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1), rg = [
  og
];
function ng(e, t, a, o, n, l) {
  return s(), _("svg", ag, rg);
}
var lg = /* @__PURE__ */ i(tg, [["render", ng], ["__file", "shop.vue"]]), sg = {
  name: "ShoppingBag"
}, _g = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ig = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), cg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1), dg = [
  ig,
  cg
];
function ug(e, t, a, o, n, l) {
  return s(), _("svg", _g, dg);
}
var hg = /* @__PURE__ */ i(sg, [["render", ug], ["__file", "shopping-bag.vue"]]), vg = {
  name: "ShoppingCartFull"
}, fg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), mg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1), wg = [
  pg,
  mg
];
function gg(e, t, a, o, n, l) {
  return s(), _("svg", fg, wg);
}
var $g = /* @__PURE__ */ i(vg, [["render", gg], ["__file", "shopping-cart-full.vue"]]), zg = {
  name: "ShoppingCart"
}, xg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), Mg = [
  Cg
];
function Hg(e, t, a, o, n, l) {
  return s(), _("svg", xg, Mg);
}
var Vg = /* @__PURE__ */ i(zg, [["render", Hg], ["__file", "shopping-cart.vue"]]), yg = {
  name: "Smoking"
}, Lg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), bg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), Ag = [
  Bg,
  bg
];
function Sg(e, t, a, o, n, l) {
  return s(), _("svg", Lg, Ag);
}
var Eg = /* @__PURE__ */ i(yg, [["render", Sg], ["__file", "smoking.vue"]]), Tg = {
  name: "Soccer"
}, kg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1), Dg = [
  Fg
];
function Og(e, t, a, o, n, l) {
  return s(), _("svg", kg, Dg);
}
var Pg = /* @__PURE__ */ i(Tg, [["render", Og], ["__file", "soccer.vue"]]), Ng = {
  name: "SoldOut"
}, Ig = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1), Rg = [
  qg
];
function jg(e, t, a, o, n, l) {
  return s(), _("svg", Ig, Rg);
}
var Ug = /* @__PURE__ */ i(Ng, [["render", jg], ["__file", "sold-out.vue"]]), Gg = {
  name: "SortDown"
}, Wg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kg = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1), Yg = [
  Kg
];
function Zg(e, t, a, o, n, l) {
  return s(), _("svg", Wg, Yg);
}
var Jg = /* @__PURE__ */ i(Gg, [["render", Zg], ["__file", "sort-down.vue"]]), Xg = {
  name: "SortUp"
}, Qg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1), t$ = [
  e$
];
function a$(e, t, a, o, n, l) {
  return s(), _("svg", Qg, t$);
}
var o$ = /* @__PURE__ */ i(Xg, [["render", a$], ["__file", "sort-up.vue"]]), r$ = {
  name: "Sort"
}, n$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1), s$ = [
  l$
];
function _$(e, t, a, o, n, l) {
  return s(), _("svg", n$, s$);
}
var i$ = /* @__PURE__ */ i(r$, [["render", _$], ["__file", "sort.vue"]]), c$ = {
  name: "Stamp"
}, d$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1), h$ = [
  u$
];
function v$(e, t, a, o, n, l) {
  return s(), _("svg", d$, h$);
}
var f$ = /* @__PURE__ */ i(c$, [["render", v$], ["__file", "stamp.vue"]]), p$ = {
  name: "StarFilled"
}, m$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), g$ = [
  w$
];
function $$(e, t, a, o, n, l) {
  return s(), _("svg", m$, g$);
}
var z$ = /* @__PURE__ */ i(p$, [["render", $$], ["__file", "star-filled.vue"]]), x$ = {
  name: "Star"
}, C$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), H$ = [
  M$
];
function V$(e, t, a, o, n, l) {
  return s(), _("svg", C$, H$);
}
var y$ = /* @__PURE__ */ i(x$, [["render", V$], ["__file", "star.vue"]]), L$ = {
  name: "Stopwatch"
}, B$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), A$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1), S$ = [
  b$,
  A$
];
function E$(e, t, a, o, n, l) {
  return s(), _("svg", B$, S$);
}
var T$ = /* @__PURE__ */ i(L$, [["render", E$], ["__file", "stopwatch.vue"]]), k$ = {
  name: "SuccessFilled"
}, F$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), O$ = [
  D$
];
function P$(e, t, a, o, n, l) {
  return s(), _("svg", F$, O$);
}
var R2 = /* @__PURE__ */ i(k$, [["render", P$], ["__file", "success-filled.vue"]]), N$ = {
  name: "Sugar"
}, I$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1), R$ = [
  q$
];
function j$(e, t, a, o, n, l) {
  return s(), _("svg", I$, R$);
}
var U$ = /* @__PURE__ */ i(N$, [["render", j$], ["__file", "sugar.vue"]]), G$ = {
  name: "Suitcase"
}, W$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), Y$ = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1), Z$ = [
  K$,
  Y$
];
function J$(e, t, a, o, n, l) {
  return s(), _("svg", W$, Z$);
}
var X$ = /* @__PURE__ */ i(G$, [["render", J$], ["__file", "suitcase.vue"]]), Q$ = {
  name: "Sunny"
}, ez = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), az = [
  tz
];
function oz(e, t, a, o, n, l) {
  return s(), _("svg", ez, az);
}
var rz = /* @__PURE__ */ i(Q$, [["render", oz], ["__file", "sunny.vue"]]), nz = {
  name: "Sunrise"
}, lz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1), _z = [
  sz
];
function iz(e, t, a, o, n, l) {
  return s(), _("svg", lz, _z);
}
var cz = /* @__PURE__ */ i(nz, [["render", iz], ["__file", "sunrise.vue"]]), dz = {
  name: "Sunset"
}, uz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), vz = [
  hz
];
function fz(e, t, a, o, n, l) {
  return s(), _("svg", uz, vz);
}
var pz = /* @__PURE__ */ i(dz, [["render", fz], ["__file", "sunset.vue"]]), mz = {
  name: "SwitchButton"
}, wz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), $z = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), zz = [
  gz,
  $z
];
function xz(e, t, a, o, n, l) {
  return s(), _("svg", wz, zz);
}
var Cz = /* @__PURE__ */ i(mz, [["render", xz], ["__file", "switch-button.vue"]]), Mz = {
  name: "Switch"
}, Hz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), yz = [
  Vz
];
function Lz(e, t, a, o, n, l) {
  return s(), _("svg", Hz, yz);
}
var Bz = /* @__PURE__ */ i(Mz, [["render", Lz], ["__file", "switch.vue"]]), bz = {
  name: "TakeawayBox"
}, Az = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1), Ez = [
  Sz
];
function Tz(e, t, a, o, n, l) {
  return s(), _("svg", Az, Ez);
}
var kz = /* @__PURE__ */ i(bz, [["render", Tz], ["__file", "takeaway-box.vue"]]), Fz = {
  name: "Ticket"
}, Dz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Oz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1), Pz = [
  Oz
];
function Nz(e, t, a, o, n, l) {
  return s(), _("svg", Dz, Pz);
}
var Iz = /* @__PURE__ */ i(Fz, [["render", Nz], ["__file", "ticket.vue"]]), qz = {
  name: "Tickets"
}, Rz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), Uz = [
  jz
];
function Gz(e, t, a, o, n, l) {
  return s(), _("svg", Rz, Uz);
}
var Wz = /* @__PURE__ */ i(qz, [["render", Gz], ["__file", "tickets.vue"]]), Kz = {
  name: "Timer"
}, Yz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), Jz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), Xz = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), Qz = [
  Zz,
  Jz,
  Xz
];
function ex(e, t, a, o, n, l) {
  return s(), _("svg", Yz, Qz);
}
var tx = /* @__PURE__ */ i(Kz, [["render", ex], ["__file", "timer.vue"]]), ax = {
  name: "ToiletPaper"
}, ox = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), nx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1), lx = [
  rx,
  nx
];
function sx(e, t, a, o, n, l) {
  return s(), _("svg", ox, lx);
}
var _x = /* @__PURE__ */ i(ax, [["render", sx], ["__file", "toilet-paper.vue"]]), ix = {
  name: "Tools"
}, cx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1), ux = [
  dx
];
function hx(e, t, a, o, n, l) {
  return s(), _("svg", cx, ux);
}
var vx = /* @__PURE__ */ i(ix, [["render", hx], ["__file", "tools.vue"]]), fx = {
  name: "TopLeft"
}, px = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), wx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1), gx = [
  mx,
  wx
];
function $x(e, t, a, o, n, l) {
  return s(), _("svg", px, gx);
}
var zx = /* @__PURE__ */ i(fx, [["render", $x], ["__file", "top-left.vue"]]), xx = {
  name: "TopRight"
}, Cx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), Hx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1), Vx = [
  Mx,
  Hx
];
function yx(e, t, a, o, n, l) {
  return s(), _("svg", Cx, Vx);
}
var Lx = /* @__PURE__ */ i(xx, [["render", yx], ["__file", "top-right.vue"]]), Bx = {
  name: "Top"
}, bx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ax = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1), Sx = [
  Ax
];
function Ex(e, t, a, o, n, l) {
  return s(), _("svg", bx, Sx);
}
var Tx = /* @__PURE__ */ i(Bx, [["render", Ex], ["__file", "top.vue"]]), kx = {
  name: "TrendCharts"
}, Fx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1), Ox = [
  Dx
];
function Px(e, t, a, o, n, l) {
  return s(), _("svg", Fx, Ox);
}
var Nx = /* @__PURE__ */ i(kx, [["render", Px], ["__file", "trend-charts.vue"]]), Ix = {
  name: "Trophy"
}, qx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1), jx = [
  Rx
];
function Ux(e, t, a, o, n, l) {
  return s(), _("svg", qx, jx);
}
var Gx = /* @__PURE__ */ i(Ix, [["render", Ux], ["__file", "trophy.vue"]]), Wx = {
  name: "TurnOff"
}, Kx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), Zx = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), Jx = [
  Yx,
  Zx
];
function Xx(e, t, a, o, n, l) {
  return s(), _("svg", Kx, Jx);
}
var Qx = /* @__PURE__ */ i(Wx, [["render", Xx], ["__file", "turn-off.vue"]]), eC = {
  name: "Umbrella"
}, tC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, aC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1), oC = [
  aC
];
function rC(e, t, a, o, n, l) {
  return s(), _("svg", tC, oC);
}
var nC = /* @__PURE__ */ i(eC, [["render", rC], ["__file", "umbrella.vue"]]), lC = {
  name: "Unlock"
}, sC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _C = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), iC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1), cC = [
  _C,
  iC
];
function dC(e, t, a, o, n, l) {
  return s(), _("svg", sC, cC);
}
var uC = /* @__PURE__ */ i(lC, [["render", dC], ["__file", "unlock.vue"]]), hC = {
  name: "UploadFilled"
}, vC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1), pC = [
  fC
];
function mC(e, t, a, o, n, l) {
  return s(), _("svg", vC, pC);
}
var wC = /* @__PURE__ */ i(hC, [["render", mC], ["__file", "upload-filled.vue"]]), gC = {
  name: "Upload"
}, $C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1), xC = [
  zC
];
function CC(e, t, a, o, n, l) {
  return s(), _("svg", $C, xC);
}
var MC = /* @__PURE__ */ i(gC, [["render", CC], ["__file", "upload.vue"]]), HC = {
  name: "UserFilled"
}, VC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1), LC = [
  yC
];
function BC(e, t, a, o, n, l) {
  return s(), _("svg", VC, LC);
}
var bC = /* @__PURE__ */ i(HC, [["render", BC], ["__file", "user-filled.vue"]]), AC = {
  name: "User"
}, SC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, EC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), TC = [
  EC
];
function kC(e, t, a, o, n, l) {
  return s(), _("svg", SC, TC);
}
var FC = /* @__PURE__ */ i(AC, [["render", kC], ["__file", "user.vue"]]), DC = {
  name: "Van"
}, OC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, PC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1), NC = [
  PC
];
function IC(e, t, a, o, n, l) {
  return s(), _("svg", OC, NC);
}
var qC = /* @__PURE__ */ i(DC, [["render", IC], ["__file", "van.vue"]]), RC = {
  name: "VideoCameraFilled"
}, jC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, UC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1), GC = [
  UC
];
function WC(e, t, a, o, n, l) {
  return s(), _("svg", jC, GC);
}
var KC = /* @__PURE__ */ i(RC, [["render", WC], ["__file", "video-camera-filled.vue"]]), YC = {
  name: "VideoCamera"
}, ZC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, JC = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1), XC = [
  JC
];
function QC(e, t, a, o, n, l) {
  return s(), _("svg", ZC, XC);
}
var eM = /* @__PURE__ */ i(YC, [["render", QC], ["__file", "video-camera.vue"]]), tM = {
  name: "VideoPause"
}, aM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1), rM = [
  oM
];
function nM(e, t, a, o, n, l) {
  return s(), _("svg", aM, rM);
}
var lM = /* @__PURE__ */ i(tM, [["render", nM], ["__file", "video-pause.vue"]]), sM = {
  name: "VideoPlay"
}, _M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, iM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1), cM = [
  iM
];
function dM(e, t, a, o, n, l) {
  return s(), _("svg", _M, cM);
}
var uM = /* @__PURE__ */ i(sM, [["render", dM], ["__file", "video-play.vue"]]), hM = {
  name: "View"
}, vM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), pM = [
  fM
];
function mM(e, t, a, o, n, l) {
  return s(), _("svg", vM, pM);
}
var wM = /* @__PURE__ */ i(hM, [["render", mM], ["__file", "view.vue"]]), gM = {
  name: "WalletFilled"
}, $M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1), xM = [
  zM
];
function CM(e, t, a, o, n, l) {
  return s(), _("svg", $M, xM);
}
var MM = /* @__PURE__ */ i(gM, [["render", CM], ["__file", "wallet-filled.vue"]]), HM = {
  name: "Wallet"
}, VM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), LM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), BM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), bM = [
  yM,
  LM,
  BM
];
function AM(e, t, a, o, n, l) {
  return s(), _("svg", VM, bM);
}
var SM = /* @__PURE__ */ i(HM, [["render", AM], ["__file", "wallet.vue"]]), EM = {
  name: "WarningFilled"
}, TM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), FM = [
  kM
];
function DM(e, t, a, o, n, l) {
  return s(), _("svg", TM, FM);
}
var j2 = /* @__PURE__ */ i(EM, [["render", DM], ["__file", "warning-filled.vue"]]), OM = {
  name: "Warning"
}, PM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), IM = [
  NM
];
function qM(e, t, a, o, n, l) {
  return s(), _("svg", PM, IM);
}
var RM = /* @__PURE__ */ i(OM, [["render", qM], ["__file", "warning.vue"]]), jM = {
  name: "Watch"
}, UM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), WM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), KM = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1), YM = [
  GM,
  WM,
  KM
];
function ZM(e, t, a, o, n, l) {
  return s(), _("svg", UM, YM);
}
var JM = /* @__PURE__ */ i(jM, [["render", ZM], ["__file", "watch.vue"]]), XM = {
  name: "Watermelon"
}, QM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eH = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1), tH = [
  eH
];
function aH(e, t, a, o, n, l) {
  return s(), _("svg", QM, tH);
}
var oH = /* @__PURE__ */ i(XM, [["render", aH], ["__file", "watermelon.vue"]]), rH = {
  name: "WindPower"
}, nH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lH = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), sH = [
  lH
];
function _H(e, t, a, o, n, l) {
  return s(), _("svg", nH, sH);
}
var iH = /* @__PURE__ */ i(rH, [["render", _H], ["__file", "wind-power.vue"]]), cH = {
  name: "ZoomIn"
}, dH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uH = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), hH = [
  uH
];
function vH(e, t, a, o, n, l) {
  return s(), _("svg", dH, hH);
}
var fH = /* @__PURE__ */ i(cH, [["render", vH], ["__file", "zoom-in.vue"]]), pH = {
  name: "ZoomOut"
}, mH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wH = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), gH = [
  wH
];
function $H(e, t, a, o, n, l) {
  return s(), _("svg", mH, gH);
}
var zH = /* @__PURE__ */ i(pH, [["render", $H], ["__file", "zoom-out.vue"]]);
const xH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: d1,
  Aim: w1,
  AlarmClock: H1,
  Apple: A1,
  ArrowDown: R1,
  ArrowDownBold: D1,
  ArrowLeft: t4,
  ArrowLeftBold: Y1,
  ArrowRight: h4,
  ArrowRightBold: s4,
  ArrowUp: H4,
  ArrowUpBold: g4,
  Avatar: A4,
  Back: O4,
  Baseball: U4,
  Basketball: J4,
  Bell: de,
  BellFilled: oe,
  Bicycle: me,
  Bottom: De,
  BottomLeft: Me,
  BottomRight: Ae,
  Bowl: Re,
  Box: Je,
  Briefcase: o6,
  Brush: f6,
  BrushFilled: i6,
  Burger: z6,
  Calendar: y6,
  Camera: P6,
  CameraFilled: E6,
  CaretBottom: U6,
  CaretLeft: J6,
  CaretRight: o3,
  CaretTop: i3,
  Cellphone: f3,
  ChatDotRound: x3,
  ChatDotSquare: B3,
  ChatLineRound: F3,
  ChatLineSquare: R3,
  ChatRound: Y3,
  ChatSquare: tt,
  Check: st,
  Checked: ht,
  Cherry: gt,
  Chicken: Ht,
  CircleCheck: Ot,
  CircleCheckFilled: At,
  CircleClose: Zt,
  CircleCloseFilled: N2,
  CirclePlus: c8,
  CirclePlusFilled: a8,
  Clock: w8,
  Close: I2,
  CloseBold: M8,
  Cloudy: k8,
  Coffee: W8,
  CoffeeCup: I8,
  Coin: ta,
  ColdDrink: sa,
  Collection: $a,
  CollectionTag: ha,
  Comment: Va,
  Compass: Ea,
  Connection: Na,
  Coordinate: Wa,
  CopyDocument: eo,
  Cpu: so,
  CreditCard: fo,
  Crop: xo,
  DArrowLeft: Lo,
  DArrowRight: To,
  DCaret: No,
  DataAnalysis: Go,
  DataBoard: er,
  DataLine: lr,
  Delete: Vr,
  DeleteFilled: ur,
  DeleteLocation: $r,
  Dessert: Sr,
  Discount: Pr,
  Dish: Jr,
  DishDot: Ur,
  Document: Tn,
  DocumentAdd: on,
  DocumentChecked: cn,
  DocumentCopy: pn,
  DocumentDelete: xn,
  DocumentRemove: Ln,
  Download: Nn,
  Drizzling: Gn,
  Edit: nl,
  EditPen: Xn,
  Eleme: ml,
  ElemeFilled: dl,
  ElementPlus: Cl,
  Expand: Bl,
  Failed: kl,
  Female: Rl,
  Files: Yl,
  Film: as,
  Filter: _s,
  Finished: vs,
  FirstAidKit: zs,
  Flag: ys,
  Fold: Es,
  Folder: f_,
  FolderAdd: Ps,
  FolderChecked: Us,
  FolderDelete: Js,
  FolderOpened: o_,
  FolderRemove: i_,
  Food: z_,
  Football: L_,
  ForkSpoon: T_,
  Fries: N_,
  FullScreen: G_,
  Goblet: pi,
  GobletFull: X_,
  GobletSquare: ci,
  GobletSquareFull: ri,
  Goods: Li,
  GoodsFilled: xi,
  Grape: Ti,
  Grid: Ni,
  Guide: Wi,
  Headset: Qi,
  Help: d5,
  HelpFilled: n5,
  Hide: w5,
  Histogram: M5,
  HomeFilled: b5,
  HotWater: F5,
  House: q5,
  IceCream: l9,
  IceCreamRound: K5,
  IceCreamSquare: e9,
  IceDrink: u9,
  IceTea: w9,
  InfoFilled: q2,
  Iphone: B9,
  Key: k9,
  KnifeFork: I9,
  Lightning: K9,
  Link: ec,
  List: lc,
  Loading: uc,
  Location: Ec,
  LocationFilled: wc,
  LocationInformation: Vc,
  Lock: Nc,
  Lollipop: Gc,
  MagicStick: Xc,
  Magnet: rd,
  Male: ud,
  Management: wd,
  MapLocation: Hd,
  Medal: Sd,
  Menu: Od,
  Message: Jd,
  MessageBox: jd,
  Mic: ou,
  Microphone: iu,
  MilkTea: fu,
  Minus: zu,
  Money: Bu,
  Monitor: ku,
  Moon: Ku,
  MoonNight: qu,
  More: lh,
  MoreFilled: eh,
  MostlyCloudy: uh,
  Mouse: gh,
  Mug: Hh,
  Mute: Ph,
  MuteNotification: Sh,
  NoSmoking: Uh,
  Notebook: Xh,
  Notification: n7,
  Odometer: h7,
  OfficeBuilding: z7,
  Open: L7,
  Operation: T7,
  Opportunity: N7,
  Orange: G7,
  Paperclip: X7,
  PartlyCloudy: nv,
  Pear: dv,
  Phone: Cv,
  PhoneFilled: mv,
  Picture: Rv,
  PictureFilled: Bv,
  PictureRounded: Fv,
  PieChart: Zv,
  Place: rf,
  Platform: df,
  Plus: mf,
  Pointer: Cf,
  Position: Bf,
  Postcard: Ff,
  Pouring: qf,
  Present: Jf,
  PriceTag: rp,
  Printer: cp,
  Promotion: pp,
  QuestionFilled: xp,
  Rank: Lp,
  Reading: qp,
  ReadingLamp: kp,
  Refresh: lm,
  RefreshLeft: Kp,
  RefreshRight: em,
  Refrigerator: um,
  Remove: Hm,
  RemoveFilled: wm,
  Right: Am,
  ScaleToOriginal: Dm,
  School: Um,
  Scissor: Jm,
  Search: ow,
  Select: iw,
  Sell: fw,
  SemiSelect: zw,
  Service: yw,
  SetUp: Fw,
  Setting: qw,
  Share: Kw,
  Ship: eg,
  Shop: lg,
  ShoppingBag: hg,
  ShoppingCart: Vg,
  ShoppingCartFull: $g,
  Smoking: Eg,
  Soccer: Pg,
  SoldOut: Ug,
  Sort: i$,
  SortDown: Jg,
  SortUp: o$,
  Stamp: f$,
  Star: y$,
  StarFilled: z$,
  Stopwatch: T$,
  SuccessFilled: R2,
  Sugar: U$,
  Suitcase: X$,
  Sunny: rz,
  Sunrise: cz,
  Sunset: pz,
  Switch: Bz,
  SwitchButton: Cz,
  TakeawayBox: kz,
  Ticket: Iz,
  Tickets: Wz,
  Timer: tx,
  ToiletPaper: _x,
  Tools: vx,
  Top: Tx,
  TopLeft: zx,
  TopRight: Lx,
  TrendCharts: Nx,
  Trophy: Gx,
  TurnOff: Qx,
  Umbrella: nC,
  Unlock: uC,
  Upload: MC,
  UploadFilled: wC,
  User: FC,
  UserFilled: bC,
  Van: qC,
  VideoCamera: eM,
  VideoCameraFilled: KC,
  VideoPause: lM,
  VideoPlay: uM,
  View: wM,
  Wallet: SM,
  WalletFilled: MM,
  Warning: RM,
  WarningFilled: j2,
  Watch: JM,
  Watermelon: oH,
  WindPower: iH,
  ZoomIn: fH,
  ZoomOut: zH
}, Symbol.toStringTag, { value: "Module" }));
var CH = typeof global == "object" && global && global.Object === Object && global;
const MH = CH;
var HH = typeof self == "object" && self && self.Object === Object && self, VH = MH || HH || Function("return this")();
const U2 = VH;
var yH = U2.Symbol;
const X = yH;
var H0 = Object.prototype, LH = H0.hasOwnProperty, BH = H0.toString, o2 = X ? X.toStringTag : void 0;
function bH(e) {
  var t = LH.call(e, o2), a = e[o2];
  try {
    e[o2] = void 0;
    var o = !0;
  } catch {
  }
  var n = BH.call(e);
  return o && (t ? e[o2] = a : delete e[o2]), n;
}
var AH = Object.prototype, SH = AH.toString;
function EH(e) {
  return SH.call(e);
}
var TH = "[object Null]", kH = "[object Undefined]", e0 = X ? X.toStringTag : void 0;
function V0(e) {
  return e == null ? e === void 0 ? kH : TH : e0 && e0 in Object(e) ? bH(e) : EH(e);
}
function FH(e) {
  return e != null && typeof e == "object";
}
var DH = "[object Symbol]";
function G2(e) {
  return typeof e == "symbol" || FH(e) && V0(e) == DH;
}
function OH(e, t) {
  for (var a = -1, o = e == null ? 0 : e.length, n = Array(o); ++a < o; )
    n[a] = t(e[a], a, e);
  return n;
}
var PH = Array.isArray;
const W2 = PH;
var NH = 1 / 0, t0 = X ? X.prototype : void 0, a0 = t0 ? t0.toString : void 0;
function y0(e) {
  if (typeof e == "string")
    return e;
  if (W2(e))
    return OH(e, y0) + "";
  if (G2(e))
    return a0 ? a0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -NH ? "-0" : t;
}
function L0(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var IH = "[object AsyncFunction]", qH = "[object Function]", RH = "[object GeneratorFunction]", jH = "[object Proxy]";
function UH(e) {
  if (!L0(e))
    return !1;
  var t = V0(e);
  return t == qH || t == RH || t == IH || t == jH;
}
var GH = U2["__core-js_shared__"];
const z2 = GH;
var o0 = function() {
  var e = /[^.]+$/.exec(z2 && z2.keys && z2.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function WH(e) {
  return !!o0 && o0 in e;
}
var KH = Function.prototype, YH = KH.toString;
function ZH(e) {
  if (e != null) {
    try {
      return YH.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var JH = /[\\^$.*+?()[\]{}|]/g, XH = /^\[object .+?Constructor\]$/, QH = Function.prototype, eV = Object.prototype, tV = QH.toString, aV = eV.hasOwnProperty, oV = RegExp("^" + tV.call(aV).replace(JH, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function rV(e) {
  if (!L0(e) || WH(e))
    return !1;
  var t = UH(e) ? oV : XH;
  return t.test(ZH(e));
}
function nV(e, t) {
  return e == null ? void 0 : e[t];
}
function B0(e, t) {
  var a = nV(e, t);
  return rV(a) ? a : void 0;
}
function lV(e, t) {
  return e === t || e !== e && t !== t;
}
var sV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _V = /^\w*$/;
function iV(e, t) {
  if (W2(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || G2(e) ? !0 : _V.test(e) || !sV.test(e) || t != null && e in Object(t);
}
var cV = B0(Object, "create");
const n2 = cV;
function dV() {
  this.__data__ = n2 ? n2(null) : {}, this.size = 0;
}
function uV(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hV = "__lodash_hash_undefined__", vV = Object.prototype, fV = vV.hasOwnProperty;
function pV(e) {
  var t = this.__data__;
  if (n2) {
    var a = t[e];
    return a === hV ? void 0 : a;
  }
  return fV.call(t, e) ? t[e] : void 0;
}
var mV = Object.prototype, wV = mV.hasOwnProperty;
function gV(e) {
  var t = this.__data__;
  return n2 ? t[e] !== void 0 : wV.call(t, e);
}
var $V = "__lodash_hash_undefined__";
function zV(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = n2 && t === void 0 ? $V : t, this;
}
function K(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
K.prototype.clear = dV;
K.prototype.delete = uV;
K.prototype.get = pV;
K.prototype.has = gV;
K.prototype.set = zV;
function xV() {
  this.__data__ = [], this.size = 0;
}
function w2(e, t) {
  for (var a = e.length; a--; )
    if (lV(e[a][0], t))
      return a;
  return -1;
}
var CV = Array.prototype, MV = CV.splice;
function HV(e) {
  var t = this.__data__, a = w2(t, e);
  if (a < 0)
    return !1;
  var o = t.length - 1;
  return a == o ? t.pop() : MV.call(t, a, 1), --this.size, !0;
}
function VV(e) {
  var t = this.__data__, a = w2(t, e);
  return a < 0 ? void 0 : t[a][1];
}
function yV(e) {
  return w2(this.__data__, e) > -1;
}
function LV(e, t) {
  var a = this.__data__, o = w2(a, e);
  return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this;
}
function t2(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
t2.prototype.clear = xV;
t2.prototype.delete = HV;
t2.prototype.get = VV;
t2.prototype.has = yV;
t2.prototype.set = LV;
var BV = B0(U2, "Map");
const bV = BV;
function AV() {
  this.size = 0, this.__data__ = {
    hash: new K(),
    map: new (bV || t2)(),
    string: new K()
  };
}
function SV(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function g2(e, t) {
  var a = e.__data__;
  return SV(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
function EV(e) {
  var t = g2(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function TV(e) {
  return g2(this, e).get(e);
}
function kV(e) {
  return g2(this, e).has(e);
}
function FV(e, t) {
  var a = g2(this, e), o = a.size;
  return a.set(e, t), this.size += a.size == o ? 0 : 1, this;
}
function Y(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Y.prototype.clear = AV;
Y.prototype.delete = EV;
Y.prototype.get = TV;
Y.prototype.has = kV;
Y.prototype.set = FV;
var DV = "Expected a function";
function K2(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(DV);
  var a = function() {
    var o = arguments, n = t ? t.apply(this, o) : o[0], l = a.cache;
    if (l.has(n))
      return l.get(n);
    var d = e.apply(this, o);
    return a.cache = l.set(n, d) || l, d;
  };
  return a.cache = new (K2.Cache || Y)(), a;
}
K2.Cache = Y;
var OV = 500;
function PV(e) {
  var t = K2(e, function(o) {
    return a.size === OV && a.clear(), o;
  }), a = t.cache;
  return t;
}
var NV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, IV = /\\(\\)?/g, qV = PV(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(NV, function(a, o, n, l) {
    t.push(n ? l.replace(IV, "$1") : o || a);
  }), t;
});
const RV = qV;
function jV(e) {
  return e == null ? "" : y0(e);
}
function UV(e, t) {
  return W2(e) ? e : iV(e, t) ? [e] : RV(jV(e));
}
var GV = 1 / 0;
function WV(e) {
  if (typeof e == "string" || G2(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -GV ? "-0" : t;
}
function KV(e, t) {
  t = UV(t, e);
  for (var a = 0, o = t.length; e != null && a < o; )
    e = e[WV(t[a++])];
  return a && a == o ? e : void 0;
}
function YV(e, t, a) {
  var o = e == null ? void 0 : KV(e, t);
  return o === void 0 ? a : o;
}
function ZV(e) {
  for (var t = -1, a = e == null ? 0 : e.length, o = {}; ++t < a; ) {
    var n = e[t];
    o[n[0]] = n[1];
  }
  return o;
}
function JV(e) {
  return e == null;
}
function b0(e) {
  return Y0() ? (z0(e), !0) : !1;
}
var r0;
const k = typeof window < "u", XV = (e) => typeof e == "boolean", l2 = (e) => typeof e == "number", QV = (e) => typeof e == "string", x2 = () => {
};
k && ((r0 = window == null ? void 0 : window.navigator) == null ? void 0 : r0.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function y2(e, t, a = {}) {
  const {
    immediate: o = !0
  } = a, n = L(!1);
  let l = null;
  function d() {
    l && (clearTimeout(l), l = null);
  }
  function h() {
    n.value = !1, d();
  }
  function f(...m) {
    d(), n.value = !0, l = setTimeout(() => {
      n.value = !1, l = null, e(...m);
    }, c(t));
  }
  return o && (n.value = !0, k && f()), b0(h), {
    isPending: n,
    start: f,
    stop: h
  };
}
function ey(e) {
  var t;
  const a = c(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const ty = k ? window : void 0;
function ay(...e) {
  let t, a, o, n;
  if (QV(e[0]) ? ([a, o, n] = e, t = ty) : [t, a, o, n] = e, !t)
    return x2;
  let l = x2;
  const d = T(() => ey(t), (f) => {
    l(), f && (f.addEventListener(a, o, n), l = () => {
      f.removeEventListener(a, o, n), l = x2;
    });
  }, { immediate: !0, flush: "post" }), h = () => {
    d(), l();
  };
  return b0(h), h;
}
const L2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B2 = "__vueuse_ssr_handlers__";
L2[B2] = L2[B2] || {};
L2[B2];
var n0;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(n0 || (n0 = {}));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const C2 = () => {
}, oy = Object.prototype.hasOwnProperty, l0 = (e, t) => oy.call(e, t), A0 = (e) => typeof e == "function", Q = (e) => typeof e == "string", Y2 = (e) => e !== null && typeof e == "object", ry = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (a) => t[a] || (t[a] = e(a));
}, ny = /-(\w)/g, ly = ry((e) => e.replace(ny, (t, a) => a ? a.toUpperCase() : "")), sy = (e) => e === void 0, s0 = (e) => typeof Element > "u" ? !1 : e instanceof Element, _0 = (e) => Object.keys(e);
class S0 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function _y(e, t) {
  throw new S0(`[${e}] ${t}`);
}
function _2(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const a = Q(e) ? new S0(`[${e}] ${t}`) : e;
    console.warn(a);
  }
}
const iy = "utils/dom/style", E0 = (e = "") => e.split(" ").filter((t) => !!t.trim()), i0 = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, cy = (e, t) => {
  !e || !t.trim() || e.classList.add(...E0(t));
}, dy = (e, t) => {
  !e || !t.trim() || e.classList.remove(...E0(t));
}, c0 = (e, t) => {
  var a;
  if (!k || !e || !t)
    return "";
  let o = ly(t);
  o === "float" && (o = "cssFloat");
  try {
    const n = e.style[o];
    if (n)
      return n;
    const l = (a = document.defaultView) == null ? void 0 : a.getComputedStyle(e, "");
    return l ? l[o] : "";
  } catch {
    return e.style[o];
  }
};
function b2(e, t = "px") {
  if (!e)
    return "";
  if (Q(e))
    return e;
  if (l2(e))
    return `${e}${t}`;
  _2(iy, "binding value must be a string or number");
}
let h2;
const uy = () => {
  var e;
  if (!k)
    return 0;
  if (h2 !== void 0)
    return h2;
  const t = document.createElement("div");
  t.className = "el-scrollbar__wrap", t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const a = t.offsetWidth;
  t.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", t.appendChild(o);
  const n = o.offsetWidth;
  return (e = t.parentNode) == null || e.removeChild(t), h2 = a - n, h2;
}, T0 = "__epPropKey", E = (e) => e, hy = (e) => Y2(e) && !!e[T0], k0 = (e, t) => {
  if (!Y2(e) || hy(e))
    return e;
  const { values: a, required: o, default: n, type: l, validator: d } = e, f = {
    type: l,
    required: !!o,
    validator: a || d ? (m) => {
      let w = !1, z = [];
      if (a && (z = Array.from(a), l0(e, "default") && z.push(n), w || (w = z.includes(m))), d && (w || (w = d(m))), !w && z.length > 0) {
        const p = [...new Set(z)].map((u) => JSON.stringify(u)).join(", ");
        Z0(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(m)}.`);
      }
      return w;
    } : void 0,
    [T0]: !0
  };
  return l0(e, "default") && (f.default = n), f;
}, Z = (e) => ZV(Object.entries(e).map(([t, a]) => [
  t,
  k0(a, t)
])), F0 = E([
  String,
  Object,
  Function
]), vy = {
  Close: I2
}, fy = {
  Close: I2,
  SuccessFilled: R2,
  InfoFilled: q2,
  WarningFilled: j2,
  CircleCloseFilled: N2
}, d0 = {
  success: R2,
  warning: j2,
  error: N2,
  info: q2
}, Z2 = (e, t) => {
  if (e.install = (a) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      a.component(o.name, o);
  }, t)
    for (const [a, o] of Object.entries(t))
      e[a] = o;
  return e;
}, py = (e, t) => (e.install = (a) => {
  e._context = a._context, a.config.globalProperties[t] = e;
}, e), my = (...e) => (t) => {
  e.forEach((a) => {
    A0(a) ? a(t) : a.value = t;
  });
}, J2 = {
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
}, D0 = "update:modelValue", wy = ["", "default", "small", "large"];
var v2 = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(v2 || {});
const O0 = Symbol(), P0 = Symbol("dialogInjectionKey"), p2 = L();
function i2(e, t = void 0) {
  const a = S2() ? f2(O0, p2) : p2;
  return e ? V(() => {
    var o, n;
    return (n = (o = a.value) == null ? void 0 : o[e]) != null ? n : t;
  }) : a;
}
const gy = (e, t, a = !1) => {
  var o;
  const n = !!S2(), l = n ? i2() : void 0, d = (o = t == null ? void 0 : t.provide) != null ? o : n ? E2 : void 0;
  if (!d) {
    _2("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const h = V(() => {
    const f = c(e);
    return l != null && l.value ? $y(l.value, f) : f;
  });
  return d(O0, h), (a || !p2.value) && (p2.value = h.value), h;
}, $y = (e, t) => {
  var a;
  const o = [.../* @__PURE__ */ new Set([..._0(e), ..._0(t)])], n = {};
  for (const l of o)
    n[l] = (a = t[l]) != null ? a : e[l];
  return n;
}, zy = k0({
  type: String,
  values: wy,
  required: !1
}), xy = ({ from: e, replacement: t, scope: a, version: o, ref: n, type: l = "API" }, d) => {
  T(() => c(d), (h) => {
    h && _2(a, `${l} ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${n}
`);
  }, {
    immediate: !0
  });
}, Cy = (e, t, a) => {
  let o = {
    offsetX: 0,
    offsetY: 0
  };
  const n = (h) => {
    const f = h.clientX, m = h.clientY, { offsetX: w, offsetY: z } = o, p = e.value.getBoundingClientRect(), u = p.left, $ = p.top, v = p.width, g = p.height, C = document.documentElement.clientWidth, U = document.documentElement.clientHeight, R = -u + w, O = -$ + z, P = C - u - v + w, M = U - $ - g + z, F = (H) => {
      const S = Math.min(Math.max(w + H.clientX - f, R), P), d2 = Math.min(Math.max(z + H.clientY - m, O), M);
      o = {
        offsetX: S,
        offsetY: d2
      }, e.value.style.transform = `translate(${b2(S)}, ${b2(d2)})`;
    }, x = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", x);
    };
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", x);
  }, l = () => {
    t.value && e.value && t.value.addEventListener("mousedown", n);
  }, d = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", n);
  };
  s2(() => {
    J0(() => {
      a.value ? l() : d();
    });
  }), T2(() => {
    d();
  });
}, u0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, My = Symbol("elIdInjection"), h0 = (e) => {
  const t = f2(My, u0);
  return !k && t === u0 && _2("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`), V(() => c(e) || `el-id-${t.prefix}-${t.current++}`);
};
var Hy = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const Vy = (e) => (t, a) => yy(t, a, c(e)), yy = (e, t, a) => YV(a, e, e).replace(/\{(\w+)\}/g, (o, n) => {
  var l;
  return `${(l = t == null ? void 0 : t[n]) != null ? l : `{${n}}`}`;
}), Ly = (e) => {
  const t = V(() => c(e).name), a = x0(e) ? e : L(e);
  return {
    lang: t,
    locale: a,
    t: Vy(e)
  };
}, By = () => {
  const e = i2("locale");
  return Ly(V(() => e.value || Hy));
}, by = (e) => {
  if (x0(e) || _y("[useLockscreen]", "You need to pass a ref param to this function"), !k || i0(document.body, "el-popup-parent--hidden"))
    return;
  let t = 0, a = !1, o = "0", n = 0;
  const l = () => {
    dy(document.body, "el-popup-parent--hidden"), a && (document.body.style.paddingRight = o);
  };
  T(e, (d) => {
    if (!d) {
      l();
      return;
    }
    a = !i0(document.body, "el-popup-parent--hidden"), a && (o = document.body.style.paddingRight, n = Number.parseInt(c0(document.body, "paddingRight"), 10)), t = uy();
    const h = document.documentElement.clientHeight < document.body.scrollHeight, f = c0(document.body, "overflowY");
    t > 0 && (h || f === "scroll") && a && (document.body.style.paddingRight = `${n + t}px`), cy(document.body, "el-popup-parent--hidden");
  }), z0(() => l());
}, N0 = (e) => {
  if (!e)
    return { onClick: C2, onMousedown: C2, onMouseup: C2 };
  let t = !1, a = !1;
  return { onClick: (d) => {
    t && a && e(d), t = a = !1;
  }, onMousedown: (d) => {
    t = d.target === d.currentTarget;
  }, onMouseup: (d) => {
    a = d.target === d.currentTarget;
  } };
};
let J = [];
const Ay = (e) => {
  const t = (a) => {
    const o = a;
    o.key === J2.esc && J.forEach((n) => n(o));
  };
  s2(() => {
    J.length === 0 && document.addEventListener("keydown", t), k && J.push(e);
  }), T2(() => {
    J = J.filter((a) => a !== e), J.length === 0 && k && document.removeEventListener("keydown", t);
  });
}, I0 = "el", Sy = "is-", G = (e, t, a, o, n) => {
  let l = `${e}-${t}`;
  return a && (l += `-${a}`), o && (l += `__${o}`), n && (l += `--${n}`), l;
}, c2 = (e) => {
  const t = i2("namespace"), a = V(() => t.value || I0);
  return {
    namespace: a,
    b: (v = "") => G(c(a), e, v, "", ""),
    e: (v) => v ? G(c(a), e, "", v, "") : "",
    m: (v) => v ? G(c(a), e, "", "", v) : "",
    be: (v, g) => v && g ? G(c(a), e, v, g, "") : "",
    em: (v, g) => v && g ? G(c(a), e, "", v, g) : "",
    bm: (v, g) => v && g ? G(c(a), e, v, "", g) : "",
    bem: (v, g, C) => v && g && C ? G(c(a), e, v, g, C) : "",
    is: (v, ...g) => {
      const C = g.length >= 1 ? g[0] : !0;
      return v && C ? `${Sy}${v}` : "";
    },
    cssVar: (v) => {
      const g = {};
      for (const C in v)
        g[`--${a.value}-${C}`] = v[C];
      return g;
    },
    cssVarName: (v) => `--${a.value}-${v}`,
    cssVarBlock: (v) => {
      const g = {};
      for (const C in v)
        g[`--${a.value}-${e}-${C}`] = v[C];
      return g;
    },
    cssVarBlockName: (v) => `--${a.value}-${e}-${v}`
  };
}, v0 = L(0), q0 = () => {
  const e = i2("zIndex", 2e3), t = V(() => e.value + v0.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (v0.value++, t.value)
  };
};
var a2 = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, n] of t)
    a[o] = n;
  return a;
};
const Ey = Z({
  size: {
    type: E([Number, String])
  },
  color: {
    type: String
  }
}), Ty = {
  name: "ElIcon",
  inheritAttrs: !1
}, ky = /* @__PURE__ */ q({
  ...Ty,
  props: Ey,
  setup(e) {
    const t = e, a = c2("icon"), o = V(() => !t.size && !t.color ? {} : {
      fontSize: sy(t.size) ? void 0 : b2(t.size),
      "--color": t.color
    });
    return (n, l) => (s(), _("i", X0({
      class: c(a).b(),
      style: c(o)
    }, n.$attrs), [
      B(n.$slots, "default")
    ], 16));
  }
});
var Fy = /* @__PURE__ */ a2(ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const X2 = Z2(Fy), R0 = (e) => {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const n = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || n ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); )
    t.push(a.currentNode);
  return t;
}, f0 = (e, t) => {
  for (const a of e)
    if (!Dy(a, t))
      return a;
}, Dy = (e, t) => {
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
}, Oy = (e) => {
  const t = R0(e), a = f0(t, e), o = f0(t.reverse(), e);
  return [a, o];
}, Py = (e) => e instanceof HTMLInputElement && "select" in e, j = (e, t) => {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Py(e) && t && e.select();
  }
};
function p0(e, t) {
  const a = [...e], o = e.indexOf(t);
  return o !== -1 && a.splice(o, 1), a;
}
const Ny = () => {
  let e = [];
  return {
    push: (o) => {
      const n = e[0];
      n && o !== n && n.pause(), e = p0(e, o), e.unshift(o);
    },
    remove: (o) => {
      var n, l;
      e = p0(e, o), (l = (n = e[0]) == null ? void 0 : n.resume) == null || l.call(n);
    }
  };
}, Iy = (e, t = !1) => {
  const a = document.activeElement;
  for (const o of e)
    if (j(o, t), document.activeElement !== a)
      return;
}, m0 = Ny(), M2 = "focus-trap.focus-after-trapped", H2 = "focus-trap.focus-after-released", w0 = {
  cancelable: !0,
  bubbles: !1
}, g0 = "focusAfterTrapped", $0 = "focusAfterReleased", j0 = Symbol("elFocusTrap"), qy = q({
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
    g0,
    $0,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const a = L();
    let o, n;
    Ay((u) => {
      e.trapped && !l.paused && t("release-requested", u);
    });
    const l = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, d = (u) => {
      if (!e.loop && !e.trapped || l.paused)
        return;
      const { key: $, altKey: v, ctrlKey: g, metaKey: C, currentTarget: U, shiftKey: R } = u, { loop: O } = e, P = $ === J2.tab && !v && !g && !C, M = document.activeElement;
      if (P && M) {
        const F = U, [x, H] = Oy(F);
        x && H ? !R && M === H ? (u.preventDefault(), O && j(x, !0), t("focusout-prevented")) : R && [x, F].includes(M) && (u.preventDefault(), O && j(H, !0), t("focusout-prevented")) : M === F && (u.preventDefault(), t("focusout-prevented"));
      }
    };
    E2(j0, {
      focusTrapRef: a,
      onKeydown: d
    }), T(() => e.focusTrapEl, (u) => {
      u && (a.value = u);
    }, { immediate: !0 }), T([a], ([u], [$]) => {
      u && (u.addEventListener("keydown", d), u.addEventListener("focusin", m), u.addEventListener("focusout", w)), $ && ($.removeEventListener("keydown", d), $.removeEventListener("focusin", m), $.removeEventListener("focusout", w));
    });
    const h = (u) => {
      t(g0, u);
    }, f = (u) => t($0, u), m = (u) => {
      const $ = c(a);
      if (!$)
        return;
      const v = u.target, g = v && $.contains(v);
      g && t("focusin", u), !l.paused && e.trapped && (g ? n = v : j(n, !0));
    }, w = (u) => {
      const $ = c(a);
      if (!(l.paused || !$))
        if (e.trapped) {
          const v = u.relatedTarget;
          !JV(v) && !$.contains(v) && setTimeout(() => {
            !l.paused && e.trapped && j(n, !0);
          }, 0);
        } else {
          const v = u.target;
          v && $.contains(v) || t("focusout", u);
        }
    };
    async function z() {
      await V2();
      const u = c(a);
      if (u) {
        m0.push(l);
        const $ = document.activeElement;
        if (o = $, !u.contains($)) {
          const g = new Event(M2, w0);
          u.addEventListener(M2, h), u.dispatchEvent(g), g.defaultPrevented || V2(() => {
            let C = e.focusStartEl;
            Q(C) || (j(C), document.activeElement !== C && (C = "first")), C === "first" && Iy(R0(u), !0), (document.activeElement === $ || C === "container") && j(u);
          });
        }
      }
    }
    function p() {
      const u = c(a);
      if (u) {
        u.removeEventListener(M2, h);
        const $ = new Event(H2, w0);
        u.addEventListener(H2, f), u.dispatchEvent($), $.defaultPrevented || j(o != null ? o : document.body, !0), u.removeEventListener(H2, h), m0.remove(l);
      }
    }
    return s2(() => {
      e.trapped && z(), T(() => e.trapped, (u) => {
        u ? z() : p();
      });
    }), T2(() => {
      e.trapped && p();
    }), {
      onKeydown: d
    };
  }
});
function Ry(e, t, a, o, n, l) {
  return B(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var jy = /* @__PURE__ */ a2(qy, [["render", Ry], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Uy = Z({
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
}), Gy = ["textContent"], Wy = {
  name: "ElBadge"
}, Ky = /* @__PURE__ */ q({
  ...Wy,
  props: Uy,
  setup(e, { expose: t }) {
    const a = e, o = c2("badge"), n = V(() => a.isDot ? "" : l2(a.value) && l2(a.max) ? a.max < a.value ? `${a.max}+` : `${a.value}` : `${a.value}`);
    return t({
      content: n
    }), (l, d) => (s(), _("div", {
      class: y(c(o).b())
    }, [
      B(l.$slots, "default"),
      D(k2, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: b(() => [
          F2(r("sup", {
            class: y([
              c(o).e("content"),
              c(o).em("content", l.type),
              c(o).is("fixed", !!l.$slots.default),
              c(o).is("dot", l.isDot)
            ]),
            textContent: m2(c(n))
          }, null, 10, Gy), [
            [D2, !l.hidden && (c(n) || l.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Yy = /* @__PURE__ */ a2(Ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Zy = Z2(Yy), A2 = {}, Jy = Z({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: E(Object)
  },
  size: zy,
  button: {
    type: E(Object)
  },
  experimentalFeatures: {
    type: E(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: E(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
q({
  name: "ElConfigProvider",
  props: Jy,
  setup(e, { slots: t }) {
    T(() => e.message, (o) => {
      Object.assign(A2, o != null ? o : {});
    }, { immediate: !0, deep: !0 });
    const a = gy(e);
    return () => B(t, "default", { config: a == null ? void 0 : a.value });
  }
});
const Xy = Z({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: E([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: E([String, Number])
  }
}), Qy = {
  click: (e) => e instanceof MouseEvent
};
var eL = q({
  name: "ElOverlay",
  props: Xy,
  emits: Qy,
  setup(e, { slots: t, emit: a }) {
    const o = c2("overlay"), n = (f) => {
      a("click", f);
    }, { onClick: l, onMousedown: d, onMouseup: h } = N0(e.customMaskEvent ? void 0 : n);
    return () => e.mask ? D("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: d,
      onMouseup: h
    }, [B(t, "default")], v2.STYLE | v2.CLASS | v2.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Q0("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [B(t, "default")]);
  }
});
const tL = eL, U0 = Z({
  center: {
    type: Boolean,
    default: !1
  },
  closeIcon: {
    type: F0,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  }
}), aL = {
  close: () => !0
}, oL = ["aria-label"], rL = ["id"], nL = { name: "ElDialogContent" }, lL = /* @__PURE__ */ q({
  ...nL,
  props: U0,
  emits: aL,
  setup(e) {
    const t = e, { t: a } = By(), { Close: o } = vy, { dialogRef: n, headerRef: l, bodyId: d, ns: h, style: f } = f2(P0), { focusTrapRef: m } = f2(j0), w = my(m, n), z = V(() => t.draggable);
    return Cy(n, l, z), (p, u) => (s(), _("div", {
      ref: c(w),
      class: y([
        c(h).b(),
        c(h).is("fullscreen", p.fullscreen),
        c(h).is("draggable", c(z)),
        { [c(h).m("center")]: p.center },
        p.customClass
      ]),
      style: O2(c(f)),
      tabindex: "-1",
      onClick: u[1] || (u[1] = C0(() => {
      }, ["stop"]))
    }, [
      r("header", {
        ref_key: "headerRef",
        ref: l,
        class: y(c(h).e("header"))
      }, [
        B(p.$slots, "header", {}, () => [
          r("span", {
            role: "heading",
            class: y(c(h).e("title"))
          }, m2(p.title), 3)
        ]),
        p.showClose ? (s(), _("button", {
          key: 0,
          "aria-label": c(a)("el.dialog.close"),
          class: y(c(h).e("headerbtn")),
          type: "button",
          onClick: u[0] || (u[0] = ($) => p.$emit("close"))
        }, [
          D(c(X2), {
            class: y(c(h).e("close"))
          }, {
            default: b(() => [
              (s(), I(P2(p.closeIcon || c(o))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, oL)) : W("v-if", !0)
      ], 2),
      r("div", {
        id: c(d),
        class: y(c(h).e("body"))
      }, [
        B(p.$slots, "default")
      ], 10, rL),
      p.$slots.footer ? (s(), _("footer", {
        key: 0,
        class: y(c(h).e("footer"))
      }, [
        B(p.$slots, "footer")
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var sL = /* @__PURE__ */ a2(lL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const _L = Z({
  ...U0,
  appendToBody: {
    type: Boolean,
    default: !1
  },
  beforeClose: {
    type: E(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: !1
  },
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    required: !0
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  }
}), iL = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [D0]: (e) => XV(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, cL = (e, t) => {
  const o = S2().emit, { nextZIndex: n } = q0();
  let l = "";
  const d = h0(), h = h0(), f = L(!1), m = L(!1), w = L(!1), z = L(e.zIndex || n());
  let p, u;
  const $ = V(() => l2(e.width) ? `${e.width}px` : e.width), v = i2("namespace", I0), g = V(() => {
    const N = {}, u2 = `--${v.value}-dialog`;
    return e.fullscreen || (e.top && (N[`${u2}-margin-top`] = e.top), e.width && (N[`${u2}-width`] = $.value)), N;
  });
  function C() {
    o("opened");
  }
  function U() {
    o("closed"), o(D0, !1), e.destroyOnClose && (w.value = !1);
  }
  function R() {
    o("close");
  }
  function O() {
    u == null || u(), p == null || p(), e.openDelay && e.openDelay > 0 ? { stop: p } = y2(() => x(), e.openDelay) : x();
  }
  function P() {
    p == null || p(), u == null || u(), e.closeDelay && e.closeDelay > 0 ? { stop: u } = y2(() => H(), e.closeDelay) : H();
  }
  function M() {
    function N(u2) {
      u2 || (m.value = !0, f.value = !1);
    }
    e.beforeClose ? e.beforeClose(N) : P();
  }
  function F() {
    e.closeOnClickModal && M();
  }
  function x() {
    !k || (f.value = !0);
  }
  function H() {
    f.value = !1;
  }
  function S() {
    o("openAutoFocus");
  }
  function d2() {
    o("closeAutoFocus");
  }
  e.lockScroll && by(f);
  function W0() {
    e.closeOnPressEscape && M();
  }
  return T(() => e.modelValue, (N) => {
    N ? (m.value = !1, O(), w.value = !0, o("open"), z.value = e.zIndex ? z.value++ : n(), V2(() => {
      t.value && (t.value.scrollTop = 0);
    })) : f.value && P();
  }), T(() => e.fullscreen, (N) => {
    !t.value || (N ? (l = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = l);
  }), s2(() => {
    e.modelValue && (f.value = !0, w.value = !0, O());
  }), {
    afterEnter: C,
    afterLeave: U,
    beforeLeave: R,
    handleClose: M,
    onModalClick: F,
    close: P,
    doClose: H,
    onOpenAutoFocus: S,
    onCloseAutoFocus: d2,
    onCloseRequested: W0,
    titleId: d,
    bodyId: h,
    closed: m,
    style: g,
    rendered: w,
    visible: f,
    zIndex: z
  };
}, dL = ["aria-label", "aria-labelledby", "aria-describedby"], uL = {
  name: "ElDialog"
}, hL = /* @__PURE__ */ q({
  ...uL,
  props: _L,
  emits: iL,
  setup(e, { expose: t }) {
    const a = e, o = e1();
    xy({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, V(() => !!o.title));
    const n = c2("dialog"), l = L(), d = L(), h = L(), {
      visible: f,
      titleId: m,
      bodyId: w,
      style: z,
      rendered: p,
      zIndex: u,
      afterEnter: $,
      afterLeave: v,
      beforeLeave: g,
      handleClose: C,
      onModalClick: U,
      onOpenAutoFocus: R,
      onCloseAutoFocus: O,
      onCloseRequested: P
    } = cL(a, l);
    E2(P0, {
      dialogRef: l,
      headerRef: d,
      bodyId: w,
      ns: n,
      rendered: p,
      style: z
    });
    const M = N0(U), F = V(() => a.draggable && !a.fullscreen);
    return t({
      visible: f,
      dialogContentRef: h
    }), (x, H) => (s(), I(t1, {
      to: "body",
      disabled: !x.appendToBody
    }, [
      D(k2, {
        name: "dialog-fade",
        onAfterEnter: c($),
        onAfterLeave: c(v),
        onBeforeLeave: c(g),
        persisted: ""
      }, {
        default: b(() => [
          F2(D(c(tL), {
            "custom-mask-event": "",
            mask: x.modal,
            "overlay-class": x.modalClass,
            "z-index": c(u)
          }, {
            default: b(() => [
              r("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": x.title || void 0,
                "aria-labelledby": x.title ? void 0 : c(m),
                "aria-describedby": c(w),
                class: y(`${c(n).namespace.value}-overlay-dialog`),
                onClick: H[0] || (H[0] = (...S) => c(M).onClick && c(M).onClick(...S)),
                onMousedown: H[1] || (H[1] = (...S) => c(M).onMousedown && c(M).onMousedown(...S)),
                onMouseup: H[2] || (H[2] = (...S) => c(M).onMouseup && c(M).onMouseup(...S))
              }, [
                D(c(jy), {
                  loop: "",
                  trapped: c(f),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: c(R),
                  onFocusAfterReleased: c(O),
                  onReleaseRequested: c(P)
                }, {
                  default: b(() => [
                    c(p) ? (s(), I(sL, {
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: h,
                      "custom-class": x.customClass,
                      center: x.center,
                      "close-icon": x.closeIcon,
                      draggable: c(F),
                      fullscreen: x.fullscreen,
                      "show-close": x.showClose,
                      style: O2(c(z)),
                      title: x.title,
                      onClose: c(C)
                    }, a1({
                      header: b(() => [
                        x.$slots.title ? B(x.$slots, "title", { key: 1 }) : B(x.$slots, "header", {
                          key: 0,
                          close: c(C),
                          titleId: c(m),
                          titleClass: c(n).e("title")
                        })
                      ]),
                      default: b(() => [
                        B(x.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      x.$slots.footer ? {
                        name: "footer",
                        fn: b(() => [
                          B(x.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1032, ["custom-class", "center", "close-icon", "draggable", "fullscreen", "show-close", "style", "title", "onClose"])) : W("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onReleaseRequested"])
              ], 42, dL)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [D2, c(f)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var vL = /* @__PURE__ */ a2(hL, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const fL = Z2(vL), G0 = ["success", "info", "warning", "error"], pL = Z({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: !1
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: F0,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: E([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: E(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    values: G0,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: !1
  },
  repeatNum: {
    type: Number,
    default: 1
  }
}), mL = {
  destroy: () => !0
}, wL = q({
  name: "ElMessage",
  components: {
    ElBadge: Zy,
    ElIcon: X2,
    ...fy
  },
  props: pL,
  emits: mL,
  setup(e) {
    const t = c2("message"), a = L(!1), o = L(e.type ? e.type === "error" ? "danger" : e.type : "info");
    let n;
    const l = V(() => {
      const p = e.type;
      return { [t.bm("icon", p)]: p && d0[p] };
    }), d = V(() => e.icon || d0[e.type] || ""), h = V(() => ({
      top: `${e.offset}px`,
      zIndex: e.zIndex
    }));
    function f() {
      e.duration > 0 && ({ stop: n } = y2(() => {
        a.value && w();
      }, e.duration));
    }
    function m() {
      n == null || n();
    }
    function w() {
      a.value = !1;
    }
    function z({ code: p }) {
      p === J2.esc ? a.value && w() : f();
    }
    return s2(() => {
      f(), a.value = !0;
    }), T(() => e.repeatNum, () => {
      m(), f();
    }), ay(document, "keydown", z), {
      ns: t,
      typeClass: l,
      iconComponent: d,
      customStyle: h,
      visible: a,
      badgeType: o,
      close: w,
      clearTimer: m,
      startTimer: f
    };
  }
}), gL = ["id"], $L = ["innerHTML"];
function zL(e, t, a, o, n, l) {
  const d = $2("el-badge"), h = $2("el-icon"), f = $2("close");
  return s(), I(k2, {
    name: e.ns.b("fade"),
    onBeforeLeave: e.onClose,
    onAfterLeave: t[2] || (t[2] = (m) => e.$emit("destroy")),
    persisted: ""
  }, {
    default: b(() => [
      F2(r("div", {
        id: e.id,
        class: y([
          e.ns.b(),
          { [e.ns.m(e.type)]: e.type && !e.icon },
          e.ns.is("center", e.center),
          e.ns.is("closable", e.showClose),
          e.customClass
        ]),
        style: O2(e.customStyle),
        role: "alert",
        onMouseenter: t[0] || (t[0] = (...m) => e.clearTimer && e.clearTimer(...m)),
        onMouseleave: t[1] || (t[1] = (...m) => e.startTimer && e.startTimer(...m))
      }, [
        e.repeatNum > 1 ? (s(), I(d, {
          key: 0,
          value: e.repeatNum,
          type: e.badgeType,
          class: y(e.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
        e.iconComponent ? (s(), I(h, {
          key: 1,
          class: y([e.ns.e("icon"), e.typeClass])
        }, {
          default: b(() => [
            (s(), I(P2(e.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : W("v-if", !0),
        B(e.$slots, "default", {}, () => [
          e.dangerouslyUseHTMLString ? (s(), _(M0, { key: 1 }, [
            W(" Caution here, message could've been compromised, never use user's input as message "),
            r("p", {
              class: y(e.ns.e("content")),
              innerHTML: e.message
            }, null, 10, $L)
          ], 2112)) : (s(), _("p", {
            key: 0,
            class: y(e.ns.e("content"))
          }, m2(e.message), 3))
        ]),
        e.showClose ? (s(), I(h, {
          key: 2,
          class: y(e.ns.e("closeBtn")),
          onClick: C0(e.close, ["stop"])
        }, {
          default: b(() => [
            D(f)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : W("v-if", !0)
      ], 46, gL), [
        [D2, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var xL = /* @__PURE__ */ a2(wL, [["render", zL], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
const A = [];
let CL = 1;
const e2 = function(e = {}, t) {
  if (!k)
    return { close: () => {
    } };
  if (l2(A2.max) && A.length >= A2.max)
    return { close: () => {
    } };
  if (!r2(e) && Y2(e) && e.grouping && !r2(e.message) && A.length) {
    const z = A.find((p) => {
      var u, $, v;
      return `${($ = (u = p.vm.props) == null ? void 0 : u.message) != null ? $ : ""}` == `${(v = e.message) != null ? v : ""}`;
    });
    if (z)
      return z.vm.component.props.repeatNum += 1, z.vm.component.props.type = (e == null ? void 0 : e.type) || "info", {
        close: () => w.component.proxy.visible = !1
      };
  }
  (Q(e) || r2(e)) && (e = { message: e });
  let a = e.offset || 20;
  A.forEach(({ vm: z }) => {
    var p;
    a += (((p = z.el) == null ? void 0 : p.offsetHeight) || 0) + 16;
  }), a += 16;
  const { nextZIndex: o } = q0(), n = `message_${CL++}`, l = e.onClose, d = {
    zIndex: o(),
    ...e,
    offset: a,
    id: n,
    onClose: () => {
      ML(n, l);
    }
  };
  let h = document.body;
  s0(e.appendTo) ? h = e.appendTo : Q(e.appendTo) && (h = document.querySelector(e.appendTo)), s0(h) || (_2("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), h = document.body);
  const f = document.createElement("div");
  f.className = `container_${n}`;
  const m = d.message, w = D(xL, d, A0(m) ? { default: m } : r2(m) ? { default: () => m } : null);
  return w.appContext = t || e2._context, w.props.onDestroy = () => {
    Q2(null, f);
  }, Q2(w, f), A.push({ vm: w }), h.appendChild(f.firstElementChild), {
    close: () => w.component.proxy.visible = !1
  };
};
G0.forEach((e) => {
  e2[e] = (t = {}, a) => ((Q(t) || r2(t)) && (t = {
    message: t
  }), e2({
    ...t,
    type: e
  }, a));
});
function ML(e, t) {
  const a = A.findIndex(({ vm: d }) => e === d.component.props.id);
  if (a === -1)
    return;
  const { vm: o } = A[a];
  if (!o)
    return;
  t == null || t(o);
  const n = o.el.offsetHeight;
  A.splice(a, 1);
  const l = A.length;
  if (!(l < 1))
    for (let d = a; d < l; d++) {
      const h = Number.parseInt(A[d].vm.el.style.top, 10) - n - 16;
      A[d].vm.component.props.offset = h;
    }
}
function HL() {
  var e;
  for (let t = A.length - 1; t >= 0; t--) {
    const a = A[t].vm.component;
    (e = a == null ? void 0 : a.proxy) == null || e.close();
  }
}
e2.closeAll = HL;
e2._context = null;
const VL = py(e2, "$message");
function yL(e) {
  const t = document.createElement("input");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("Copy"), document.body.removeChild(t), VL({
    message: "\u590D\u5236\u6210\u529F",
    type: "success"
  });
}
const LL = { class: "chooseIcon" }, BL = { class: "container" }, bL = { class: "demo-icon-list" }, AL = ["onClick"], SL = { class: "text" }, EL = /* @__PURE__ */ q({
  __name: "index",
  props: {
    title: {
      default: "\u9009\u62E9\u56FE\u6807",
      type: String
    },
    visible: {
      default: !1,
      type: Boolean
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const a = e, o = L(a.visible);
    T(() => a.visible, (d, h) => {
      o.value = d;
    });
    function n() {
      t("update:visible", !1);
    }
    function l(d) {
      yL(`<el-icon><${d}/></el-icon>`);
    }
    return (d, h) => (s(), _("div", LL, [
      D(c(fL), {
        modelValue: o.value,
        "onUpdate:modelValue": h[0] || (h[0] = (f) => o.value = f),
        title: e.title,
        onClose: n
      }, {
        default: b(() => [
          r("div", BL, [
            r("ul", bL, [
              (s(), _(M0, null, o1(xH, (f, m) => r("li", {
                class: "icon-item",
                key: m,
                onClick: (w) => l(m)
              }, [
                D(c(X2), { style: { "font-size": "20px" } }, {
                  default: b(() => [
                    (s(), I(P2(m)))
                  ]),
                  _: 2
                }, 1024),
                r("div", SL, m2(m), 1)
              ], 8, AL)), 64))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"])
    ]));
  }
});
const TL = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, n] of t)
    a[o] = n;
  return a;
}, kL = /* @__PURE__ */ TL(EL, [["__scopeId", "data-v-03692b90"]]), DL = {
  install(e) {
    e.component("ChooseIcon", kL);
  }
};
export {
  DL as default
};
