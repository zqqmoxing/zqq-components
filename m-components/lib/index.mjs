import { openBlock as l, createElementBlock as s, createElementVNode as c, createStaticVNode as k1, readonly as _a, shallowRef as n0, watchEffect as pa, getCurrentScope as P1, onScopeDispose as ha, ref as V, unref as _, watch as W, warn as I1, computed as S, getCurrentInstance as Fe, inject as re, provide as Le, onMounted as we, onBeforeUnmount as m2, toRef as q2, onUnmounted as va, isRef as ga, onBeforeMount as N1, defineComponent as ne, mergeProps as F2, renderSlot as X, useAttrs as F1, useSlots as A0, nextTick as ce, onUpdated as Tn, withDirectives as Ne, createCommentVNode as j, Fragment as be, normalizeClass as O, createBlock as K, withCtx as N, resolveDynamicComponent as Ie, withModifiers as ke, createVNode as D, toDisplayString as se, normalizeStyle as fe, vShow as u2, Transition as U2, reactive as G2, cloneVNode as R1, Text as D1, Comment as q1, toRefs as W0, resolveComponent as pe, Teleport as wa, h as j1, createSlots as $a, toRaw as ba, triggerRef as h0, resolveDirective as W1, renderList as $2, withKeys as Je, vModelText as K1, createTextVNode as ya, isVNode as w0, render as ao } from "vue";
/*! Element Plus Icons Vue v2.0.6 */
var f = (e, n) => {
  let o = e.__vccOpts || e;
  for (let [a, t] of n)
    o[a] = t;
  return o;
}, U1 = {
  name: "AddLocation"
}, G1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y1 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), X1 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Z1 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1), J1 = [
  Y1,
  X1,
  Z1
];
function Q1(e, n, o, a, t, r) {
  return l(), s("svg", G1, J1);
}
var et = /* @__PURE__ */ f(U1, [["render", Q1], ["__file", "add-location.vue"]]), nt = {
  name: "Aim"
}, ot = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, at = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), tt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1), rt = [
  at,
  tt
];
function ct(e, n, o, a, t, r) {
  return l(), s("svg", ot, rt);
}
var lt = /* @__PURE__ */ f(nt, [["render", ct], ["__file", "aim.vue"]]), dt = {
  name: "AlarmClock"
}, st = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, it = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), mt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1), ut = [
  it,
  mt
];
function ft(e, n, o, a, t, r) {
  return l(), s("svg", st, ut);
}
var _t = /* @__PURE__ */ f(dt, [["render", ft], ["__file", "alarm-clock.vue"]]), pt = {
  name: "Apple"
}, ht = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1), gt = [
  vt
];
function wt(e, n, o, a, t, r) {
  return l(), s("svg", ht, gt);
}
var $t = /* @__PURE__ */ f(pt, [["render", wt], ["__file", "apple.vue"]]), bt = {
  name: "ArrowDownBold"
}, yt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), Ct = [
  zt
];
function xt(e, n, o, a, t, r) {
  return l(), s("svg", yt, Ct);
}
var Mt = /* @__PURE__ */ f(bt, [["render", xt], ["__file", "arrow-down-bold.vue"]]), Ht = {
  name: "ArrowDown"
}, St = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Lt = [
  Vt
];
function At(e, n, o, a, t, r) {
  return l(), s("svg", St, Lt);
}
var Bt = /* @__PURE__ */ f(Ht, [["render", At], ["__file", "arrow-down.vue"]]), Et = {
  name: "ArrowLeftBold"
}, Tt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ot = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1), kt = [
  Ot
];
function Pt(e, n, o, a, t, r) {
  return l(), s("svg", Tt, kt);
}
var It = /* @__PURE__ */ f(Et, [["render", Pt], ["__file", "arrow-left-bold.vue"]]), Nt = {
  name: "ArrowLeft"
}, Ft = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Dt = [
  Rt
];
function qt(e, n, o, a, t, r) {
  return l(), s("svg", Ft, Dt);
}
var za = /* @__PURE__ */ f(Nt, [["render", qt], ["__file", "arrow-left.vue"]]), jt = {
  name: "ArrowRightBold"
}, Wt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1), Ut = [
  Kt
];
function Gt(e, n, o, a, t, r) {
  return l(), s("svg", Wt, Ut);
}
var Yt = /* @__PURE__ */ f(jt, [["render", Gt], ["__file", "arrow-right-bold.vue"]]), Xt = {
  name: "ArrowRight"
}, Zt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jt = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Qt = [
  Jt
];
function e4(e, n, o, a, t, r) {
  return l(), s("svg", Zt, Qt);
}
var Ca = /* @__PURE__ */ f(Xt, [["render", e4], ["__file", "arrow-right.vue"]]), n4 = {
  name: "ArrowUpBold"
}, o4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, a4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), t4 = [
  a4
];
function r4(e, n, o, a, t, r) {
  return l(), s("svg", o4, t4);
}
var c4 = /* @__PURE__ */ f(n4, [["render", r4], ["__file", "arrow-up-bold.vue"]]), l4 = {
  name: "ArrowUp"
}, d4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), i4 = [
  s4
];
function m4(e, n, o, a, t, r) {
  return l(), s("svg", d4, i4);
}
var xa = /* @__PURE__ */ f(l4, [["render", m4], ["__file", "arrow-up.vue"]]), u4 = {
  name: "Avatar"
}, f4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1), p4 = [
  _4
];
function h4(e, n, o, a, t, r) {
  return l(), s("svg", f4, p4);
}
var v4 = /* @__PURE__ */ f(u4, [["render", h4], ["__file", "avatar.vue"]]), g4 = {
  name: "Back"
}, w4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), b4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1), y4 = [
  $4,
  b4
];
function z4(e, n, o, a, t, r) {
  return l(), s("svg", w4, y4);
}
var C4 = /* @__PURE__ */ f(g4, [["render", z4], ["__file", "back.vue"]]), x4 = {
  name: "Baseball"
}, M4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, H4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), S4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1), V4 = [
  H4,
  S4
];
function L4(e, n, o, a, t, r) {
  return l(), s("svg", M4, V4);
}
var A4 = /* @__PURE__ */ f(x4, [["render", L4], ["__file", "baseball.vue"]]), B4 = {
  name: "Basketball"
}, E4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1), O4 = [
  T4
];
function k4(e, n, o, a, t, r) {
  return l(), s("svg", E4, O4);
}
var P4 = /* @__PURE__ */ f(B4, [["render", k4], ["__file", "basketball.vue"]]), I4 = {
  name: "BellFilled"
}, N4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1), R4 = [
  F4
];
function D4(e, n, o, a, t, r) {
  return l(), s("svg", N4, R4);
}
var q4 = /* @__PURE__ */ f(I4, [["render", D4], ["__file", "bell-filled.vue"]]), j4 = {
  name: "Bell"
}, W4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), U4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), G4 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), Y4 = [
  K4,
  U4,
  G4
];
function X4(e, n, o, a, t, r) {
  return l(), s("svg", W4, Y4);
}
var Z4 = /* @__PURE__ */ f(j4, [["render", X4], ["__file", "bell.vue"]]), J4 = {
  name: "Bicycle"
}, Q4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, er = /* @__PURE__ */ k1('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), nr = [
  er
];
function or(e, n, o, a, t, r) {
  return l(), s("svg", Q4, nr);
}
var ar = /* @__PURE__ */ f(J4, [["render", or], ["__file", "bicycle.vue"]]), tr = {
  name: "BottomLeft"
}, rr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), lr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1), dr = [
  cr,
  lr
];
function sr(e, n, o, a, t, r) {
  return l(), s("svg", rr, dr);
}
var ir = /* @__PURE__ */ f(tr, [["render", sr], ["__file", "bottom-left.vue"]]), mr = {
  name: "BottomRight"
}, ur = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), _r = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1), pr = [
  fr,
  _r
];
function hr(e, n, o, a, t, r) {
  return l(), s("svg", ur, pr);
}
var vr = /* @__PURE__ */ f(mr, [["render", hr], ["__file", "bottom-right.vue"]]), gr = {
  name: "Bottom"
}, wr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $r = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1), br = [
  $r
];
function yr(e, n, o, a, t, r) {
  return l(), s("svg", wr, br);
}
var zr = /* @__PURE__ */ f(gr, [["render", yr], ["__file", "bottom.vue"]]), Cr = {
  name: "Bowl"
}, xr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1), Hr = [
  Mr
];
function Sr(e, n, o, a, t, r) {
  return l(), s("svg", xr, Hr);
}
var Vr = /* @__PURE__ */ f(Cr, [["render", Sr], ["__file", "bowl.vue"]]), Lr = {
  name: "Box"
}, Ar = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Br = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), Er = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), Tr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1), Or = [
  Br,
  Er,
  Tr
];
function kr(e, n, o, a, t, r) {
  return l(), s("svg", Ar, Or);
}
var Pr = /* @__PURE__ */ f(Lr, [["render", kr], ["__file", "box.vue"]]), Ir = {
  name: "Briefcase"
}, Nr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1), Rr = [
  Fr
];
function Dr(e, n, o, a, t, r) {
  return l(), s("svg", Nr, Rr);
}
var qr = /* @__PURE__ */ f(Ir, [["render", Dr], ["__file", "briefcase.vue"]]), jr = {
  name: "BrushFilled"
}, Wr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1), Ur = [
  Kr
];
function Gr(e, n, o, a, t, r) {
  return l(), s("svg", Wr, Ur);
}
var Yr = /* @__PURE__ */ f(jr, [["render", Gr], ["__file", "brush-filled.vue"]]), Xr = {
  name: "Brush"
}, Zr = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jr = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1), Qr = [
  Jr
];
function e3(e, n, o, a, t, r) {
  return l(), s("svg", Zr, Qr);
}
var n3 = /* @__PURE__ */ f(Xr, [["render", e3], ["__file", "brush.vue"]]), o3 = {
  name: "Burger"
}, a3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, t3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1), r3 = [
  t3
];
function c3(e, n, o, a, t, r) {
  return l(), s("svg", a3, r3);
}
var l3 = /* @__PURE__ */ f(o3, [["render", c3], ["__file", "burger.vue"]]), d3 = {
  name: "Calendar"
}, s3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), m3 = [
  i3
];
function u3(e, n, o, a, t, r) {
  return l(), s("svg", s3, m3);
}
var f3 = /* @__PURE__ */ f(d3, [["render", u3], ["__file", "calendar.vue"]]), _3 = {
  name: "CameraFilled"
}, p3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), v3 = [
  h3
];
function g3(e, n, o, a, t, r) {
  return l(), s("svg", p3, v3);
}
var w3 = /* @__PURE__ */ f(_3, [["render", g3], ["__file", "camera-filled.vue"]]), $3 = {
  name: "Camera"
}, b3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), z3 = [
  y3
];
function C3(e, n, o, a, t, r) {
  return l(), s("svg", b3, z3);
}
var x3 = /* @__PURE__ */ f($3, [["render", C3], ["__file", "camera.vue"]]), M3 = {
  name: "CaretBottom"
}, H3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1), V3 = [
  S3
];
function L3(e, n, o, a, t, r) {
  return l(), s("svg", H3, V3);
}
var A3 = /* @__PURE__ */ f(M3, [["render", L3], ["__file", "caret-bottom.vue"]]), B3 = {
  name: "CaretLeft"
}, E3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), O3 = [
  T3
];
function k3(e, n, o, a, t, r) {
  return l(), s("svg", E3, O3);
}
var P3 = /* @__PURE__ */ f(B3, [["render", k3], ["__file", "caret-left.vue"]]), I3 = {
  name: "CaretRight"
}, N3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), R3 = [
  F3
];
function D3(e, n, o, a, t, r) {
  return l(), s("svg", N3, R3);
}
var q3 = /* @__PURE__ */ f(I3, [["render", D3], ["__file", "caret-right.vue"]]), j3 = {
  name: "CaretTop"
}, W3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1), U3 = [
  K3
];
function G3(e, n, o, a, t, r) {
  return l(), s("svg", W3, U3);
}
var Y3 = /* @__PURE__ */ f(j3, [["render", G3], ["__file", "caret-top.vue"]]), X3 = {
  name: "Cellphone"
}, Z3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J3 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), Q3 = [
  J3
];
function ec(e, n, o, a, t, r) {
  return l(), s("svg", Z3, Q3);
}
var nc = /* @__PURE__ */ f(X3, [["render", ec], ["__file", "cellphone.vue"]]), oc = {
  name: "ChatDotRound"
}, ac = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), rc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), cc = [
  tc,
  rc
];
function lc(e, n, o, a, t, r) {
  return l(), s("svg", ac, cc);
}
var dc = /* @__PURE__ */ f(oc, [["render", lc], ["__file", "chat-dot-round.vue"]]), sc = {
  name: "ChatDotSquare"
}, ic = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), uc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), fc = [
  mc,
  uc
];
function _c(e, n, o, a, t, r) {
  return l(), s("svg", ic, fc);
}
var pc = /* @__PURE__ */ f(sc, [["render", _c], ["__file", "chat-dot-square.vue"]]), hc = {
  name: "ChatLineRound"
}, vc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), wc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), $c = [
  gc,
  wc
];
function bc(e, n, o, a, t, r) {
  return l(), s("svg", vc, $c);
}
var yc = /* @__PURE__ */ f(hc, [["render", bc], ["__file", "chat-line-round.vue"]]), zc = {
  name: "ChatLineSquare"
}, Cc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), Mc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), Hc = [
  xc,
  Mc
];
function Sc(e, n, o, a, t, r) {
  return l(), s("svg", Cc, Hc);
}
var Vc = /* @__PURE__ */ f(zc, [["render", Sc], ["__file", "chat-line-square.vue"]]), Lc = {
  name: "ChatRound"
}, Ac = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), Ec = [
  Bc
];
function Tc(e, n, o, a, t, r) {
  return l(), s("svg", Ac, Ec);
}
var Oc = /* @__PURE__ */ f(Lc, [["render", Tc], ["__file", "chat-round.vue"]]), kc = {
  name: "ChatSquare"
}, Pc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ic = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), Nc = [
  Ic
];
function Fc(e, n, o, a, t, r) {
  return l(), s("svg", Pc, Nc);
}
var Rc = /* @__PURE__ */ f(kc, [["render", Fc], ["__file", "chat-square.vue"]]), Dc = {
  name: "Check"
}, qc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), Wc = [
  jc
];
function Kc(e, n, o, a, t, r) {
  return l(), s("svg", qc, Wc);
}
var Uc = /* @__PURE__ */ f(Dc, [["render", Kc], ["__file", "check.vue"]]), Gc = {
  name: "Checked"
}, Yc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xc = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1), Zc = [
  Xc
];
function Jc(e, n, o, a, t, r) {
  return l(), s("svg", Yc, Zc);
}
var Qc = /* @__PURE__ */ f(Gc, [["render", Jc], ["__file", "checked.vue"]]), el = {
  name: "Cherry"
}, nl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ol = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1), al = [
  ol
];
function tl(e, n, o, a, t, r) {
  return l(), s("svg", nl, al);
}
var rl = /* @__PURE__ */ f(el, [["render", tl], ["__file", "cherry.vue"]]), cl = {
  name: "Chicken"
}, ll = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1), sl = [
  dl
];
function il(e, n, o, a, t, r) {
  return l(), s("svg", ll, sl);
}
var ml = /* @__PURE__ */ f(cl, [["render", il], ["__file", "chicken.vue"]]), ul = {
  name: "CircleCheckFilled"
}, fl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _l = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), pl = [
  _l
];
function hl(e, n, o, a, t, r) {
  return l(), s("svg", fl, pl);
}
var vl = /* @__PURE__ */ f(ul, [["render", hl], ["__file", "circle-check-filled.vue"]]), gl = {
  name: "CircleCheck"
}, wl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $l = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), bl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), yl = [
  $l,
  bl
];
function zl(e, n, o, a, t, r) {
  return l(), s("svg", wl, yl);
}
var Ma = /* @__PURE__ */ f(gl, [["render", zl], ["__file", "circle-check.vue"]]), Cl = {
  name: "CircleCloseFilled"
}, xl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ml = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), Hl = [
  Ml
];
function Sl(e, n, o, a, t, r) {
  return l(), s("svg", xl, Hl);
}
var On = /* @__PURE__ */ f(Cl, [["render", Sl], ["__file", "circle-close-filled.vue"]]), Vl = {
  name: "CircleClose"
}, Ll = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Al = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Bl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), El = [
  Al,
  Bl
];
function Tl(e, n, o, a, t, r) {
  return l(), s("svg", Ll, El);
}
var K0 = /* @__PURE__ */ f(Vl, [["render", Tl], ["__file", "circle-close.vue"]]), Ol = {
  name: "CirclePlusFilled"
}, kl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1), Il = [
  Pl
];
function Nl(e, n, o, a, t, r) {
  return l(), s("svg", kl, Il);
}
var Fl = /* @__PURE__ */ f(Ol, [["render", Nl], ["__file", "circle-plus-filled.vue"]]), Rl = {
  name: "CirclePlus"
}, Dl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ql = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), jl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), Wl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Kl = [
  ql,
  jl,
  Wl
];
function Ul(e, n, o, a, t, r) {
  return l(), s("svg", Dl, Kl);
}
var Gl = /* @__PURE__ */ f(Rl, [["render", Ul], ["__file", "circle-plus.vue"]]), Yl = {
  name: "Clock"
}, Xl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Jl = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), Ql = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), ed = [
  Zl,
  Jl,
  Ql
];
function nd(e, n, o, a, t, r) {
  return l(), s("svg", Xl, ed);
}
var od = /* @__PURE__ */ f(Yl, [["render", nd], ["__file", "clock.vue"]]), ad = {
  name: "CloseBold"
}, td = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1), cd = [
  rd
];
function ld(e, n, o, a, t, r) {
  return l(), s("svg", td, cd);
}
var dd = /* @__PURE__ */ f(ad, [["render", ld], ["__file", "close-bold.vue"]]), sd = {
  name: "Close"
}, id = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, md = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), ud = [
  md
];
function fd(e, n, o, a, t, r) {
  return l(), s("svg", id, ud);
}
var o0 = /* @__PURE__ */ f(sd, [["render", fd], ["__file", "close.vue"]]), _d = {
  name: "Cloudy"
}, pd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), vd = [
  hd
];
function gd(e, n, o, a, t, r) {
  return l(), s("svg", pd, vd);
}
var wd = /* @__PURE__ */ f(_d, [["render", gd], ["__file", "cloudy.vue"]]), $d = {
  name: "CoffeeCup"
}, bd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1), zd = [
  yd
];
function Cd(e, n, o, a, t, r) {
  return l(), s("svg", bd, zd);
}
var xd = /* @__PURE__ */ f($d, [["render", Cd], ["__file", "coffee-cup.vue"]]), Md = {
  name: "Coffee"
}, Hd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1), Vd = [
  Sd
];
function Ld(e, n, o, a, t, r) {
  return l(), s("svg", Hd, Vd);
}
var Ad = /* @__PURE__ */ f(Md, [["render", Ld], ["__file", "coffee.vue"]]), Bd = {
  name: "Coin"
}, Ed = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Td = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), Od = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), kd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1), Pd = [
  Td,
  Od,
  kd
];
function Id(e, n, o, a, t, r) {
  return l(), s("svg", Ed, Pd);
}
var Nd = /* @__PURE__ */ f(Bd, [["render", Id], ["__file", "coin.vue"]]), Fd = {
  name: "ColdDrink"
}, Rd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1), qd = [
  Dd
];
function jd(e, n, o, a, t, r) {
  return l(), s("svg", Rd, qd);
}
var Wd = /* @__PURE__ */ f(Fd, [["render", jd], ["__file", "cold-drink.vue"]]), Kd = {
  name: "CollectionTag"
}, Ud = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gd = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1), Yd = [
  Gd
];
function Xd(e, n, o, a, t, r) {
  return l(), s("svg", Ud, Yd);
}
var Zd = /* @__PURE__ */ f(Kd, [["render", Xd], ["__file", "collection-tag.vue"]]), Jd = {
  name: "Collection"
}, Qd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, es = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), ns = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1), os = [
  es,
  ns
];
function as(e, n, o, a, t, r) {
  return l(), s("svg", Qd, os);
}
var ts = /* @__PURE__ */ f(Jd, [["render", as], ["__file", "collection.vue"]]), rs = {
  name: "Comment"
}, cs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ls = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1), ds = [
  ls
];
function ss(e, n, o, a, t, r) {
  return l(), s("svg", cs, ds);
}
var is = /* @__PURE__ */ f(rs, [["render", ss], ["__file", "comment.vue"]]), ms = {
  name: "Compass"
}, us = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fs = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _s = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1), ps = [
  fs,
  _s
];
function hs(e, n, o, a, t, r) {
  return l(), s("svg", us, ps);
}
var vs = /* @__PURE__ */ f(ms, [["render", hs], ["__file", "compass.vue"]]), gs = {
  name: "Connection"
}, ws = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $s = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), bs = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1), ys = [
  $s,
  bs
];
function zs(e, n, o, a, t, r) {
  return l(), s("svg", ws, ys);
}
var Cs = /* @__PURE__ */ f(gs, [["render", zs], ["__file", "connection.vue"]]), xs = {
  name: "Coordinate"
}, Ms = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hs = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), Ss = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), Vs = [
  Hs,
  Ss
];
function Ls(e, n, o, a, t, r) {
  return l(), s("svg", Ms, Vs);
}
var As = /* @__PURE__ */ f(xs, [["render", Ls], ["__file", "coordinate.vue"]]), Bs = {
  name: "CopyDocument"
}, Es = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ts = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), Os = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1), ks = [
  Ts,
  Os
];
function Ps(e, n, o, a, t, r) {
  return l(), s("svg", Es, ks);
}
var Is = /* @__PURE__ */ f(Bs, [["render", Ps], ["__file", "copy-document.vue"]]), Ns = {
  name: "Cpu"
}, Fs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rs = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), Ds = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1), qs = [
  Rs,
  Ds
];
function js(e, n, o, a, t, r) {
  return l(), s("svg", Fs, qs);
}
var Ws = /* @__PURE__ */ f(Ns, [["render", js], ["__file", "cpu.vue"]]), Ks = {
  name: "CreditCard"
}, Us = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gs = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), Ys = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1), Xs = [
  Gs,
  Ys
];
function Zs(e, n, o, a, t, r) {
  return l(), s("svg", Us, Xs);
}
var Js = /* @__PURE__ */ f(Ks, [["render", Zs], ["__file", "credit-card.vue"]]), Qs = {
  name: "Crop"
}, e6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), o6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1), a6 = [
  n6,
  o6
];
function t6(e, n, o, a, t, r) {
  return l(), s("svg", e6, a6);
}
var r6 = /* @__PURE__ */ f(Qs, [["render", t6], ["__file", "crop.vue"]]), c6 = {
  name: "DArrowLeft"
}, l6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, d6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), s6 = [
  d6
];
function i6(e, n, o, a, t, r) {
  return l(), s("svg", l6, s6);
}
var m6 = /* @__PURE__ */ f(c6, [["render", i6], ["__file", "d-arrow-left.vue"]]), u6 = {
  name: "DArrowRight"
}, f6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), p6 = [
  _6
];
function h6(e, n, o, a, t, r) {
  return l(), s("svg", f6, p6);
}
var v6 = /* @__PURE__ */ f(u6, [["render", h6], ["__file", "d-arrow-right.vue"]]), g6 = {
  name: "DCaret"
}, w6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1), b6 = [
  $6
];
function y6(e, n, o, a, t, r) {
  return l(), s("svg", w6, b6);
}
var z6 = /* @__PURE__ */ f(g6, [["render", y6], ["__file", "d-caret.vue"]]), C6 = {
  name: "DataAnalysis"
}, x6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1), H6 = [
  M6
];
function S6(e, n, o, a, t, r) {
  return l(), s("svg", x6, H6);
}
var V6 = /* @__PURE__ */ f(C6, [["render", S6], ["__file", "data-analysis.vue"]]), L6 = {
  name: "DataBoard"
}, A6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), E6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), T6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1), O6 = [
  B6,
  E6,
  T6
];
function k6(e, n, o, a, t, r) {
  return l(), s("svg", A6, O6);
}
var P6 = /* @__PURE__ */ f(L6, [["render", k6], ["__file", "data-board.vue"]]), I6 = {
  name: "DataLine"
}, N6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1), R6 = [
  F6
];
function D6(e, n, o, a, t, r) {
  return l(), s("svg", N6, R6);
}
var q6 = /* @__PURE__ */ f(I6, [["render", D6], ["__file", "data-line.vue"]]), j6 = {
  name: "DeleteFilled"
}, W6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1), U6 = [
  K6
];
function G6(e, n, o, a, t, r) {
  return l(), s("svg", W6, U6);
}
var Y6 = /* @__PURE__ */ f(j6, [["render", G6], ["__file", "delete-filled.vue"]]), X6 = {
  name: "DeleteLocation"
}, Z6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Q6 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), ei = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), ni = [
  J6,
  Q6,
  ei
];
function oi(e, n, o, a, t, r) {
  return l(), s("svg", Z6, ni);
}
var ai = /* @__PURE__ */ f(X6, [["render", oi], ["__file", "delete-location.vue"]]), ti = {
  name: "Delete"
}, ri = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ci = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), li = [
  ci
];
function di(e, n, o, a, t, r) {
  return l(), s("svg", ri, li);
}
var si = /* @__PURE__ */ f(ti, [["render", di], ["__file", "delete.vue"]]), ii = {
  name: "Dessert"
}, mi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ui = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1), fi = [
  ui
];
function _i(e, n, o, a, t, r) {
  return l(), s("svg", mi, fi);
}
var pi = /* @__PURE__ */ f(ii, [["render", _i], ["__file", "dessert.vue"]]), hi = {
  name: "Discount"
}, vi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), wi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), $i = [
  gi,
  wi
];
function bi(e, n, o, a, t, r) {
  return l(), s("svg", vi, $i);
}
var yi = /* @__PURE__ */ f(hi, [["render", bi], ["__file", "discount.vue"]]), zi = {
  name: "DishDot"
}, Ci = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1), Mi = [
  xi
];
function Hi(e, n, o, a, t, r) {
  return l(), s("svg", Ci, Mi);
}
var Si = /* @__PURE__ */ f(zi, [["render", Hi], ["__file", "dish-dot.vue"]]), Vi = {
  name: "Dish"
}, Li = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ai = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1), Bi = [
  Ai
];
function Ei(e, n, o, a, t, r) {
  return l(), s("svg", Li, Bi);
}
var Ti = /* @__PURE__ */ f(Vi, [["render", Ei], ["__file", "dish.vue"]]), Oi = {
  name: "DocumentAdd"
}, ki = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), Ii = [
  Pi
];
function Ni(e, n, o, a, t, r) {
  return l(), s("svg", ki, Ii);
}
var Fi = /* @__PURE__ */ f(Oi, [["render", Ni], ["__file", "document-add.vue"]]), Ri = {
  name: "DocumentChecked"
}, Di = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1), ji = [
  qi
];
function Wi(e, n, o, a, t, r) {
  return l(), s("svg", Di, ji);
}
var Ki = /* @__PURE__ */ f(Ri, [["render", Wi], ["__file", "document-checked.vue"]]), Ui = {
  name: "DocumentCopy"
}, Gi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yi = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1), Xi = [
  Yi
];
function Zi(e, n, o, a, t, r) {
  return l(), s("svg", Gi, Xi);
}
var Ji = /* @__PURE__ */ f(Ui, [["render", Zi], ["__file", "document-copy.vue"]]), Qi = {
  name: "DocumentDelete"
}, e8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1), o8 = [
  n8
];
function a8(e, n, o, a, t, r) {
  return l(), s("svg", e8, o8);
}
var t8 = /* @__PURE__ */ f(Qi, [["render", a8], ["__file", "document-delete.vue"]]), r8 = {
  name: "DocumentRemove"
}, c8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1), d8 = [
  l8
];
function s8(e, n, o, a, t, r) {
  return l(), s("svg", c8, d8);
}
var i8 = /* @__PURE__ */ f(r8, [["render", s8], ["__file", "document-remove.vue"]]), m8 = {
  name: "Document"
}, u8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, f8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), _8 = [
  f8
];
function p8(e, n, o, a, t, r) {
  return l(), s("svg", u8, _8);
}
var h8 = /* @__PURE__ */ f(m8, [["render", p8], ["__file", "document.vue"]]), v8 = {
  name: "Download"
}, g8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), $8 = [
  w8
];
function b8(e, n, o, a, t, r) {
  return l(), s("svg", g8, $8);
}
var y8 = /* @__PURE__ */ f(v8, [["render", b8], ["__file", "download.vue"]]), z8 = {
  name: "Drizzling"
}, C8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1), M8 = [
  x8
];
function H8(e, n, o, a, t, r) {
  return l(), s("svg", C8, M8);
}
var S8 = /* @__PURE__ */ f(z8, [["render", H8], ["__file", "drizzling.vue"]]), V8 = {
  name: "EditPen"
}, L8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A8 = /* @__PURE__ */ c("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), B8 = [
  A8
];
function E8(e, n, o, a, t, r) {
  return l(), s("svg", L8, B8);
}
var T8 = /* @__PURE__ */ f(V8, [["render", E8], ["__file", "edit-pen.vue"]]), O8 = {
  name: "Edit"
}, k8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), I8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), N8 = [
  P8,
  I8
];
function F8(e, n, o, a, t, r) {
  return l(), s("svg", k8, N8);
}
var R8 = /* @__PURE__ */ f(O8, [["render", F8], ["__file", "edit.vue"]]), D8 = {
  name: "ElemeFilled"
}, q8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1), W8 = [
  j8
];
function K8(e, n, o, a, t, r) {
  return l(), s("svg", q8, W8);
}
var U8 = /* @__PURE__ */ f(D8, [["render", K8], ["__file", "eleme-filled.vue"]]), G8 = {
  name: "Eleme"
}, Y8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, X8 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1), Z8 = [
  X8
];
function J8(e, n, o, a, t, r) {
  return l(), s("svg", Y8, Z8);
}
var Q8 = /* @__PURE__ */ f(G8, [["render", J8], ["__file", "eleme.vue"]]), em = {
  name: "ElementPlus"
}, nm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, om = /* @__PURE__ */ c("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1), am = [
  om
];
function tm(e, n, o, a, t, r) {
  return l(), s("svg", nm, am);
}
var rm = /* @__PURE__ */ f(em, [["render", tm], ["__file", "element-plus.vue"]]), cm = {
  name: "Expand"
}, lm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), sm = [
  dm
];
function im(e, n, o, a, t, r) {
  return l(), s("svg", lm, sm);
}
var mm = /* @__PURE__ */ f(cm, [["render", im], ["__file", "expand.vue"]]), um = {
  name: "Failed"
}, fm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _m = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1), pm = [
  _m
];
function hm(e, n, o, a, t, r) {
  return l(), s("svg", fm, pm);
}
var vm = /* @__PURE__ */ f(um, [["render", hm], ["__file", "failed.vue"]]), gm = {
  name: "Female"
}, wm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $m = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), bm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), ym = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), zm = [
  $m,
  bm,
  ym
];
function Cm(e, n, o, a, t, r) {
  return l(), s("svg", wm, zm);
}
var xm = /* @__PURE__ */ f(gm, [["render", Cm], ["__file", "female.vue"]]), Mm = {
  name: "Files"
}, Hm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1), Vm = [
  Sm
];
function Lm(e, n, o, a, t, r) {
  return l(), s("svg", Hm, Vm);
}
var Am = /* @__PURE__ */ f(Mm, [["render", Lm], ["__file", "files.vue"]]), Bm = {
  name: "Film"
}, Em = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), Om = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1), km = [
  Tm,
  Om
];
function Pm(e, n, o, a, t, r) {
  return l(), s("svg", Em, km);
}
var Im = /* @__PURE__ */ f(Bm, [["render", Pm], ["__file", "film.vue"]]), Nm = {
  name: "Filter"
}, Fm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), Dm = [
  Rm
];
function qm(e, n, o, a, t, r) {
  return l(), s("svg", Fm, Dm);
}
var jm = /* @__PURE__ */ f(Nm, [["render", qm], ["__file", "filter.vue"]]), Wm = {
  name: "Finished"
}, Km = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Um = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1), Gm = [
  Um
];
function Ym(e, n, o, a, t, r) {
  return l(), s("svg", Km, Gm);
}
var Xm = /* @__PURE__ */ f(Wm, [["render", Ym], ["__file", "finished.vue"]]), Zm = {
  name: "FirstAidKit"
}, Jm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qm = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), eu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), nu = [
  Qm,
  eu
];
function ou(e, n, o, a, t, r) {
  return l(), s("svg", Jm, nu);
}
var au = /* @__PURE__ */ f(Zm, [["render", ou], ["__file", "first-aid-kit.vue"]]), tu = {
  name: "Flag"
}, ru = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1), lu = [
  cu
];
function du(e, n, o, a, t, r) {
  return l(), s("svg", ru, lu);
}
var su = /* @__PURE__ */ f(tu, [["render", du], ["__file", "flag.vue"]]), iu = {
  name: "Fold"
}, mu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1), fu = [
  uu
];
function _u(e, n, o, a, t, r) {
  return l(), s("svg", mu, fu);
}
var pu = /* @__PURE__ */ f(iu, [["render", _u], ["__file", "fold.vue"]]), hu = {
  name: "FolderAdd"
}, vu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1), wu = [
  gu
];
function $u(e, n, o, a, t, r) {
  return l(), s("svg", vu, wu);
}
var bu = /* @__PURE__ */ f(hu, [["render", $u], ["__file", "folder-add.vue"]]), yu = {
  name: "FolderChecked"
}, zu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1), xu = [
  Cu
];
function Mu(e, n, o, a, t, r) {
  return l(), s("svg", zu, xu);
}
var Hu = /* @__PURE__ */ f(yu, [["render", Mu], ["__file", "folder-checked.vue"]]), Su = {
  name: "FolderDelete"
}, Vu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1), Au = [
  Lu
];
function Bu(e, n, o, a, t, r) {
  return l(), s("svg", Vu, Au);
}
var Eu = /* @__PURE__ */ f(Su, [["render", Bu], ["__file", "folder-delete.vue"]]), Tu = {
  name: "FolderOpened"
}, Ou = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ku = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1), Pu = [
  ku
];
function Iu(e, n, o, a, t, r) {
  return l(), s("svg", Ou, Pu);
}
var Nu = /* @__PURE__ */ f(Tu, [["render", Iu], ["__file", "folder-opened.vue"]]), Fu = {
  name: "FolderRemove"
}, Ru = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Du = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1), qu = [
  Du
];
function ju(e, n, o, a, t, r) {
  return l(), s("svg", Ru, qu);
}
var Wu = /* @__PURE__ */ f(Fu, [["render", ju], ["__file", "folder-remove.vue"]]), Ku = {
  name: "Folder"
}, Uu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gu = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1), Yu = [
  Gu
];
function Xu(e, n, o, a, t, r) {
  return l(), s("svg", Uu, Yu);
}
var Zu = /* @__PURE__ */ f(Ku, [["render", Xu], ["__file", "folder.vue"]]), Ju = {
  name: "Food"
}, Qu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1), n5 = [
  e5
];
function o5(e, n, o, a, t, r) {
  return l(), s("svg", Qu, n5);
}
var a5 = /* @__PURE__ */ f(Ju, [["render", o5], ["__file", "food.vue"]]), t5 = {
  name: "Football"
}, r5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, c5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), l5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1), d5 = [
  c5,
  l5
];
function s5(e, n, o, a, t, r) {
  return l(), s("svg", r5, d5);
}
var i5 = /* @__PURE__ */ f(t5, [["render", s5], ["__file", "football.vue"]]), m5 = {
  name: "ForkSpoon"
}, u5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, f5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), _5 = [
  f5
];
function p5(e, n, o, a, t, r) {
  return l(), s("svg", u5, _5);
}
var h5 = /* @__PURE__ */ f(m5, [["render", p5], ["__file", "fork-spoon.vue"]]), v5 = {
  name: "Fries"
}, g5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1), $5 = [
  w5
];
function b5(e, n, o, a, t, r) {
  return l(), s("svg", g5, $5);
}
var y5 = /* @__PURE__ */ f(v5, [["render", b5], ["__file", "fries.vue"]]), z5 = {
  name: "FullScreen"
}, C5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), M5 = [
  x5
];
function H5(e, n, o, a, t, r) {
  return l(), s("svg", C5, M5);
}
var S5 = /* @__PURE__ */ f(z5, [["render", H5], ["__file", "full-screen.vue"]]), V5 = {
  name: "GobletFull"
}, L5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1), B5 = [
  A5
];
function E5(e, n, o, a, t, r) {
  return l(), s("svg", L5, B5);
}
var T5 = /* @__PURE__ */ f(V5, [["render", E5], ["__file", "goblet-full.vue"]]), O5 = {
  name: "GobletSquareFull"
}, k5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1), I5 = [
  P5
];
function N5(e, n, o, a, t, r) {
  return l(), s("svg", k5, I5);
}
var F5 = /* @__PURE__ */ f(O5, [["render", N5], ["__file", "goblet-square-full.vue"]]), R5 = {
  name: "GobletSquare"
}, D5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1), j5 = [
  q5
];
function W5(e, n, o, a, t, r) {
  return l(), s("svg", D5, j5);
}
var K5 = /* @__PURE__ */ f(R5, [["render", W5], ["__file", "goblet-square.vue"]]), U5 = {
  name: "Goblet"
}, G5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y5 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1), X5 = [
  Y5
];
function Z5(e, n, o, a, t, r) {
  return l(), s("svg", G5, X5);
}
var J5 = /* @__PURE__ */ f(U5, [["render", Z5], ["__file", "goblet.vue"]]), Q5 = {
  name: "GoodsFilled"
}, ef = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1), of = [
  nf
];
function af(e, n, o, a, t, r) {
  return l(), s("svg", ef, of);
}
var tf = /* @__PURE__ */ f(Q5, [["render", af], ["__file", "goods-filled.vue"]]), rf = {
  name: "Goods"
}, cf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1), df = [
  lf
];
function sf(e, n, o, a, t, r) {
  return l(), s("svg", cf, df);
}
var mf = /* @__PURE__ */ f(rf, [["render", sf], ["__file", "goods.vue"]]), uf = {
  name: "Grape"
}, ff = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _f = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), pf = [
  _f
];
function hf(e, n, o, a, t, r) {
  return l(), s("svg", ff, pf);
}
var vf = /* @__PURE__ */ f(uf, [["render", hf], ["__file", "grape.vue"]]), gf = {
  name: "Grid"
}, wf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $f = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1), bf = [
  $f
];
function yf(e, n, o, a, t, r) {
  return l(), s("svg", wf, bf);
}
var zf = /* @__PURE__ */ f(gf, [["render", yf], ["__file", "grid.vue"]]), Cf = {
  name: "Guide"
}, xf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), Hf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1), Sf = [
  Mf,
  Hf
];
function Vf(e, n, o, a, t, r) {
  return l(), s("svg", xf, Sf);
}
var Lf = /* @__PURE__ */ f(Cf, [["render", Vf], ["__file", "guide.vue"]]), Af = {
  name: "Headset"
}, Bf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ef = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1), Tf = [
  Ef
];
function Of(e, n, o, a, t, r) {
  return l(), s("svg", Bf, Tf);
}
var kf = /* @__PURE__ */ f(Af, [["render", Of], ["__file", "headset.vue"]]), Pf = {
  name: "HelpFilled"
}, If = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1), Ff = [
  Nf
];
function Rf(e, n, o, a, t, r) {
  return l(), s("svg", If, Ff);
}
var Df = /* @__PURE__ */ f(Pf, [["render", Rf], ["__file", "help-filled.vue"]]), qf = {
  name: "Help"
}, jf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wf = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Kf = [
  Wf
];
function Uf(e, n, o, a, t, r) {
  return l(), s("svg", jf, Kf);
}
var Gf = /* @__PURE__ */ f(qf, [["render", Uf], ["__file", "help.vue"]]), Yf = {
  name: "Hide"
}, Xf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zf = /* @__PURE__ */ c("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Jf = /* @__PURE__ */ c("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Qf = [
  Zf,
  Jf
];
function e_(e, n, o, a, t, r) {
  return l(), s("svg", Xf, Qf);
}
var Ha = /* @__PURE__ */ f(Yf, [["render", e_], ["__file", "hide.vue"]]), n_ = {
  name: "Histogram"
}, o_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, a_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1), t_ = [
  a_
];
function r_(e, n, o, a, t, r) {
  return l(), s("svg", o_, t_);
}
var c_ = /* @__PURE__ */ f(n_, [["render", r_], ["__file", "histogram.vue"]]), l_ = {
  name: "HomeFilled"
}, d_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), i_ = [
  s_
];
function m_(e, n, o, a, t, r) {
  return l(), s("svg", d_, i_);
}
var u_ = /* @__PURE__ */ f(l_, [["render", m_], ["__file", "home-filled.vue"]]), f_ = {
  name: "HotWater"
}, __ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1), h_ = [
  p_
];
function v_(e, n, o, a, t, r) {
  return l(), s("svg", __, h_);
}
var g_ = /* @__PURE__ */ f(f_, [["render", v_], ["__file", "hot-water.vue"]]), w_ = {
  name: "House"
}, $_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1), y_ = [
  b_
];
function z_(e, n, o, a, t, r) {
  return l(), s("svg", $_, y_);
}
var C_ = /* @__PURE__ */ f(w_, [["render", z_], ["__file", "house.vue"]]), x_ = {
  name: "IceCreamRound"
}, M_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, H_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1), S_ = [
  H_
];
function V_(e, n, o, a, t, r) {
  return l(), s("svg", M_, S_);
}
var L_ = /* @__PURE__ */ f(x_, [["render", V_], ["__file", "ice-cream-round.vue"]]), A_ = {
  name: "IceCreamSquare"
}, B_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, E_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), T_ = [
  E_
];
function O_(e, n, o, a, t, r) {
  return l(), s("svg", B_, T_);
}
var k_ = /* @__PURE__ */ f(A_, [["render", O_], ["__file", "ice-cream-square.vue"]]), P_ = {
  name: "IceCream"
}, I_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1), F_ = [
  N_
];
function R_(e, n, o, a, t, r) {
  return l(), s("svg", I_, F_);
}
var D_ = /* @__PURE__ */ f(P_, [["render", R_], ["__file", "ice-cream.vue"]]), q_ = {
  name: "IceDrink"
}, j_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, W_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1), K_ = [
  W_
];
function U_(e, n, o, a, t, r) {
  return l(), s("svg", j_, K_);
}
var G_ = /* @__PURE__ */ f(q_, [["render", U_], ["__file", "ice-drink.vue"]]), Y_ = {
  name: "IceTea"
}, X_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z_ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1), J_ = [
  Z_
];
function Q_(e, n, o, a, t, r) {
  return l(), s("svg", X_, J_);
}
var ep = /* @__PURE__ */ f(Y_, [["render", Q_], ["__file", "ice-tea.vue"]]), np = {
  name: "InfoFilled"
}, op = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ap = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), tp = [
  ap
];
function rp(e, n, o, a, t, r) {
  return l(), s("svg", op, tp);
}
var kn = /* @__PURE__ */ f(np, [["render", rp], ["__file", "info-filled.vue"]]), cp = {
  name: "Iphone"
}, lp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dp = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1), sp = [
  dp
];
function ip(e, n, o, a, t, r) {
  return l(), s("svg", lp, sp);
}
var mp = /* @__PURE__ */ f(cp, [["render", ip], ["__file", "iphone.vue"]]), up = {
  name: "Key"
}, fp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _p = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1), pp = [
  _p
];
function hp(e, n, o, a, t, r) {
  return l(), s("svg", fp, pp);
}
var vp = /* @__PURE__ */ f(up, [["render", hp], ["__file", "key.vue"]]), gp = {
  name: "KnifeFork"
}, wp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $p = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1), bp = [
  $p
];
function yp(e, n, o, a, t, r) {
  return l(), s("svg", wp, bp);
}
var zp = /* @__PURE__ */ f(gp, [["render", yp], ["__file", "knife-fork.vue"]]), Cp = {
  name: "Lightning"
}, xp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mp = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), Hp = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1), Sp = [
  Mp,
  Hp
];
function Vp(e, n, o, a, t, r) {
  return l(), s("svg", xp, Sp);
}
var Lp = /* @__PURE__ */ f(Cp, [["render", Vp], ["__file", "lightning.vue"]]), Ap = {
  name: "Link"
}, Bp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ep = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1), Tp = [
  Ep
];
function Op(e, n, o, a, t, r) {
  return l(), s("svg", Bp, Tp);
}
var kp = /* @__PURE__ */ f(Ap, [["render", Op], ["__file", "link.vue"]]), Pp = {
  name: "List"
}, Ip = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Np = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1), Fp = [
  Np
];
function Rp(e, n, o, a, t, r) {
  return l(), s("svg", Ip, Fp);
}
var Dp = /* @__PURE__ */ f(Pp, [["render", Rp], ["__file", "list.vue"]]), qp = {
  name: "Loading"
}, jp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wp = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Kp = [
  Wp
];
function Up(e, n, o, a, t, r) {
  return l(), s("svg", jp, Kp);
}
var Sa = /* @__PURE__ */ f(qp, [["render", Up], ["__file", "loading.vue"]]), Gp = {
  name: "LocationFilled"
}, Yp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xp = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1), Zp = [
  Xp
];
function Jp(e, n, o, a, t, r) {
  return l(), s("svg", Yp, Zp);
}
var Qp = /* @__PURE__ */ f(Gp, [["render", Jp], ["__file", "location-filled.vue"]]), eh = {
  name: "LocationInformation"
}, nh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), ah = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), th = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), rh = [
  oh,
  ah,
  th
];
function ch(e, n, o, a, t, r) {
  return l(), s("svg", nh, rh);
}
var lh = /* @__PURE__ */ f(eh, [["render", ch], ["__file", "location-information.vue"]]), dh = {
  name: "Location"
}, sh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ih = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), mh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), uh = [
  ih,
  mh
];
function fh(e, n, o, a, t, r) {
  return l(), s("svg", sh, uh);
}
var _h = /* @__PURE__ */ f(dh, [["render", fh], ["__file", "location.vue"]]), ph = {
  name: "Lock"
}, hh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), gh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1), wh = [
  vh,
  gh
];
function $h(e, n, o, a, t, r) {
  return l(), s("svg", hh, wh);
}
var bh = /* @__PURE__ */ f(ph, [["render", $h], ["__file", "lock.vue"]]), yh = {
  name: "Lollipop"
}, zh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ch = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1), xh = [
  Ch
];
function Mh(e, n, o, a, t, r) {
  return l(), s("svg", zh, xh);
}
var Hh = /* @__PURE__ */ f(yh, [["render", Mh], ["__file", "lollipop.vue"]]), Sh = {
  name: "MagicStick"
}, Vh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), Ah = [
  Lh
];
function Bh(e, n, o, a, t, r) {
  return l(), s("svg", Vh, Ah);
}
var Eh = /* @__PURE__ */ f(Sh, [["render", Bh], ["__file", "magic-stick.vue"]]), Th = {
  name: "Magnet"
}, Oh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1), Ph = [
  kh
];
function Ih(e, n, o, a, t, r) {
  return l(), s("svg", Oh, Ph);
}
var Nh = /* @__PURE__ */ f(Th, [["render", Ih], ["__file", "magnet.vue"]]), Fh = {
  name: "Male"
}, Rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), qh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), jh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1), Wh = [
  Dh,
  qh,
  jh
];
function Kh(e, n, o, a, t, r) {
  return l(), s("svg", Rh, Wh);
}
var Uh = /* @__PURE__ */ f(Fh, [["render", Kh], ["__file", "male.vue"]]), Gh = {
  name: "Management"
}, Yh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xh = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1), Zh = [
  Xh
];
function Jh(e, n, o, a, t, r) {
  return l(), s("svg", Yh, Zh);
}
var Qh = /* @__PURE__ */ f(Gh, [["render", Jh], ["__file", "management.vue"]]), ev = {
  name: "MapLocation"
}, nv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ov = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), av = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1), tv = [
  ov,
  av
];
function rv(e, n, o, a, t, r) {
  return l(), s("svg", nv, tv);
}
var cv = /* @__PURE__ */ f(ev, [["render", rv], ["__file", "map-location.vue"]]), lv = {
  name: "Medal"
}, dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), iv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1), mv = [
  sv,
  iv
];
function uv(e, n, o, a, t, r) {
  return l(), s("svg", dv, mv);
}
var fv = /* @__PURE__ */ f(lv, [["render", uv], ["__file", "medal.vue"]]), _v = {
  name: "Menu"
}, pv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1), vv = [
  hv
];
function gv(e, n, o, a, t, r) {
  return l(), s("svg", pv, vv);
}
var wv = /* @__PURE__ */ f(_v, [["render", gv], ["__file", "menu.vue"]]), $v = {
  name: "MessageBox"
}, bv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1), zv = [
  yv
];
function Cv(e, n, o, a, t, r) {
  return l(), s("svg", bv, zv);
}
var xv = /* @__PURE__ */ f($v, [["render", Cv], ["__file", "message-box.vue"]]), Mv = {
  name: "Message"
}, Hv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), Vv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), Lv = [
  Sv,
  Vv
];
function Av(e, n, o, a, t, r) {
  return l(), s("svg", Hv, Lv);
}
var Bv = /* @__PURE__ */ f(Mv, [["render", Av], ["__file", "message.vue"]]), Ev = {
  name: "Mic"
}, Tv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ov = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1), kv = [
  Ov
];
function Pv(e, n, o, a, t, r) {
  return l(), s("svg", Tv, kv);
}
var Iv = /* @__PURE__ */ f(Ev, [["render", Pv], ["__file", "mic.vue"]]), Nv = {
  name: "Microphone"
}, Fv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1), Dv = [
  Rv
];
function qv(e, n, o, a, t, r) {
  return l(), s("svg", Fv, Dv);
}
var jv = /* @__PURE__ */ f(Nv, [["render", qv], ["__file", "microphone.vue"]]), Wv = {
  name: "MilkTea"
}, Kv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1), Gv = [
  Uv
];
function Yv(e, n, o, a, t, r) {
  return l(), s("svg", Kv, Gv);
}
var Xv = /* @__PURE__ */ f(Wv, [["render", Yv], ["__file", "milk-tea.vue"]]), Zv = {
  name: "Minus"
}, Jv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qv = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), e9 = [
  Qv
];
function n9(e, n, o, a, t, r) {
  return l(), s("svg", Jv, e9);
}
var o9 = /* @__PURE__ */ f(Zv, [["render", n9], ["__file", "minus.vue"]]), a9 = {
  name: "Money"
}, t9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, r9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), c9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), l9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), d9 = [
  r9,
  c9,
  l9
];
function s9(e, n, o, a, t, r) {
  return l(), s("svg", t9, d9);
}
var i9 = /* @__PURE__ */ f(a9, [["render", s9], ["__file", "money.vue"]]), m9 = {
  name: "Monitor"
}, u9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, f9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1), _9 = [
  f9
];
function p9(e, n, o, a, t, r) {
  return l(), s("svg", u9, _9);
}
var h9 = /* @__PURE__ */ f(m9, [["render", p9], ["__file", "monitor.vue"]]), v9 = {
  name: "MoonNight"
}, g9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), $9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1), b9 = [
  w9,
  $9
];
function y9(e, n, o, a, t, r) {
  return l(), s("svg", g9, b9);
}
var z9 = /* @__PURE__ */ f(v9, [["render", y9], ["__file", "moon-night.vue"]]), C9 = {
  name: "Moon"
}, x9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), H9 = [
  M9
];
function S9(e, n, o, a, t, r) {
  return l(), s("svg", x9, H9);
}
var V9 = /* @__PURE__ */ f(C9, [["render", S9], ["__file", "moon.vue"]]), L9 = {
  name: "MoreFilled"
}, A9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), E9 = [
  B9
];
function T9(e, n, o, a, t, r) {
  return l(), s("svg", A9, E9);
}
var O9 = /* @__PURE__ */ f(L9, [["render", T9], ["__file", "more-filled.vue"]]), k9 = {
  name: "More"
}, P9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, I9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), N9 = [
  I9
];
function F9(e, n, o, a, t, r) {
  return l(), s("svg", P9, N9);
}
var R9 = /* @__PURE__ */ f(k9, [["render", F9], ["__file", "more.vue"]]), D9 = {
  name: "MostlyCloudy"
}, q9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1), W9 = [
  j9
];
function K9(e, n, o, a, t, r) {
  return l(), s("svg", q9, W9);
}
var U9 = /* @__PURE__ */ f(D9, [["render", K9], ["__file", "mostly-cloudy.vue"]]), G9 = {
  name: "Mouse"
}, Y9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, X9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), Z9 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1), J9 = [
  X9,
  Z9
];
function Q9(e, n, o, a, t, r) {
  return l(), s("svg", Y9, J9);
}
var e7 = /* @__PURE__ */ f(G9, [["render", Q9], ["__file", "mouse.vue"]]), n7 = {
  name: "Mug"
}, o7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, a7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1), t7 = [
  a7
];
function r7(e, n, o, a, t, r) {
  return l(), s("svg", o7, t7);
}
var c7 = /* @__PURE__ */ f(n7, [["render", r7], ["__file", "mug.vue"]]), l7 = {
  name: "MuteNotification"
}, d7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), i7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), m7 = [
  s7,
  i7
];
function u7(e, n, o, a, t, r) {
  return l(), s("svg", d7, m7);
}
var f7 = /* @__PURE__ */ f(l7, [["render", u7], ["__file", "mute-notification.vue"]]), _7 = {
  name: "Mute"
}, p7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), v7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), g7 = [
  h7,
  v7
];
function w7(e, n, o, a, t, r) {
  return l(), s("svg", p7, g7);
}
var $7 = /* @__PURE__ */ f(_7, [["render", w7], ["__file", "mute.vue"]]), b7 = {
  name: "NoSmoking"
}, y7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), C7 = [
  z7
];
function x7(e, n, o, a, t, r) {
  return l(), s("svg", y7, C7);
}
var M7 = /* @__PURE__ */ f(b7, [["render", x7], ["__file", "no-smoking.vue"]]), H7 = {
  name: "Notebook"
}, S7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, V7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), L7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), A7 = [
  V7,
  L7
];
function B7(e, n, o, a, t, r) {
  return l(), s("svg", S7, A7);
}
var E7 = /* @__PURE__ */ f(H7, [["render", B7], ["__file", "notebook.vue"]]), T7 = {
  name: "Notification"
}, O7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), P7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), I7 = [
  k7,
  P7
];
function N7(e, n, o, a, t, r) {
  return l(), s("svg", O7, I7);
}
var F7 = /* @__PURE__ */ f(T7, [["render", N7], ["__file", "notification.vue"]]), R7 = {
  name: "Odometer"
}, D7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), j7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), W7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1), K7 = [
  q7,
  j7,
  W7
];
function U7(e, n, o, a, t, r) {
  return l(), s("svg", D7, K7);
}
var G7 = /* @__PURE__ */ f(R7, [["render", U7], ["__file", "odometer.vue"]]), Y7 = {
  name: "OfficeBuilding"
}, X7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), J7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), Q7 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1), eg = [
  Z7,
  J7,
  Q7
];
function ng(e, n, o, a, t, r) {
  return l(), s("svg", X7, eg);
}
var og = /* @__PURE__ */ f(Y7, [["render", ng], ["__file", "office-building.vue"]]), ag = {
  name: "Open"
}, tg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), cg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), lg = [
  rg,
  cg
];
function dg(e, n, o, a, t, r) {
  return l(), s("svg", tg, lg);
}
var sg = /* @__PURE__ */ f(ag, [["render", dg], ["__file", "open.vue"]]), ig = {
  name: "Operation"
}, mg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ug = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), fg = [
  ug
];
function _g(e, n, o, a, t, r) {
  return l(), s("svg", mg, fg);
}
var pg = /* @__PURE__ */ f(ig, [["render", _g], ["__file", "operation.vue"]]), hg = {
  name: "Opportunity"
}, vg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1), wg = [
  gg
];
function $g(e, n, o, a, t, r) {
  return l(), s("svg", vg, wg);
}
var bg = /* @__PURE__ */ f(hg, [["render", $g], ["__file", "opportunity.vue"]]), yg = {
  name: "Orange"
}, zg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1), xg = [
  Cg
];
function Mg(e, n, o, a, t, r) {
  return l(), s("svg", zg, xg);
}
var Hg = /* @__PURE__ */ f(yg, [["render", Mg], ["__file", "orange.vue"]]), Sg = {
  name: "Paperclip"
}, Vg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), Ag = [
  Lg
];
function Bg(e, n, o, a, t, r) {
  return l(), s("svg", Vg, Ag);
}
var Eg = /* @__PURE__ */ f(Sg, [["render", Bg], ["__file", "paperclip.vue"]]), Tg = {
  name: "PartlyCloudy"
}, Og = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), Pg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1), Ig = [
  kg,
  Pg
];
function Ng(e, n, o, a, t, r) {
  return l(), s("svg", Og, Ig);
}
var Fg = /* @__PURE__ */ f(Tg, [["render", Ng], ["__file", "partly-cloudy.vue"]]), Rg = {
  name: "Pear"
}, Dg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1), jg = [
  qg
];
function Wg(e, n, o, a, t, r) {
  return l(), s("svg", Dg, jg);
}
var Kg = /* @__PURE__ */ f(Rg, [["render", Wg], ["__file", "pear.vue"]]), Ug = {
  name: "PhoneFilled"
}, Gg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yg = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1), Xg = [
  Yg
];
function Zg(e, n, o, a, t, r) {
  return l(), s("svg", Gg, Xg);
}
var Jg = /* @__PURE__ */ f(Ug, [["render", Zg], ["__file", "phone-filled.vue"]]), Qg = {
  name: "Phone"
}, ew = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1), ow = [
  nw
];
function aw(e, n, o, a, t, r) {
  return l(), s("svg", ew, ow);
}
var tw = /* @__PURE__ */ f(Qg, [["render", aw], ["__file", "phone.vue"]]), rw = {
  name: "PictureFilled"
}, cw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1), dw = [
  lw
];
function sw(e, n, o, a, t, r) {
  return l(), s("svg", cw, dw);
}
var iw = /* @__PURE__ */ f(rw, [["render", sw], ["__file", "picture-filled.vue"]]), mw = {
  name: "PictureRounded"
}, uw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), _w = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1), pw = [
  fw,
  _w
];
function hw(e, n, o, a, t, r) {
  return l(), s("svg", uw, pw);
}
var vw = /* @__PURE__ */ f(mw, [["render", hw], ["__file", "picture-rounded.vue"]]), gw = {
  name: "Picture"
}, ww = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $w = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), bw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), yw = [
  $w,
  bw
];
function zw(e, n, o, a, t, r) {
  return l(), s("svg", ww, yw);
}
var Cw = /* @__PURE__ */ f(gw, [["render", zw], ["__file", "picture.vue"]]), xw = {
  name: "PieChart"
}, Mw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), Sw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1), Vw = [
  Hw,
  Sw
];
function Lw(e, n, o, a, t, r) {
  return l(), s("svg", Mw, Vw);
}
var Aw = /* @__PURE__ */ f(xw, [["render", Lw], ["__file", "pie-chart.vue"]]), Bw = {
  name: "Place"
}, Ew = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), Ow = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), kw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1), Pw = [
  Tw,
  Ow,
  kw
];
function Iw(e, n, o, a, t, r) {
  return l(), s("svg", Ew, Pw);
}
var Nw = /* @__PURE__ */ f(Bw, [["render", Iw], ["__file", "place.vue"]]), Fw = {
  name: "Platform"
}, Rw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1), qw = [
  Dw
];
function jw(e, n, o, a, t, r) {
  return l(), s("svg", Rw, qw);
}
var Ww = /* @__PURE__ */ f(Fw, [["render", jw], ["__file", "platform.vue"]]), Kw = {
  name: "Plus"
}, Uw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Yw = [
  Gw
];
function Xw(e, n, o, a, t, r) {
  return l(), s("svg", Uw, Yw);
}
var Va = /* @__PURE__ */ f(Kw, [["render", Xw], ["__file", "plus.vue"]]), Zw = {
  name: "Pointer"
}, Jw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qw = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1), e$ = [
  Qw
];
function n$(e, n, o, a, t, r) {
  return l(), s("svg", Jw, e$);
}
var o$ = /* @__PURE__ */ f(Zw, [["render", n$], ["__file", "pointer.vue"]]), a$ = {
  name: "Position"
}, t$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, r$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1), c$ = [
  r$
];
function l$(e, n, o, a, t, r) {
  return l(), s("svg", t$, c$);
}
var d$ = /* @__PURE__ */ f(a$, [["render", l$], ["__file", "position.vue"]]), s$ = {
  name: "Postcard"
}, i$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, m$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), u$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), f$ = [
  m$,
  u$
];
function _$(e, n, o, a, t, r) {
  return l(), s("svg", i$, f$);
}
var p$ = /* @__PURE__ */ f(s$, [["render", _$], ["__file", "postcard.vue"]]), h$ = {
  name: "Pouring"
}, v$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, g$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1), w$ = [
  g$
];
function $$(e, n, o, a, t, r) {
  return l(), s("svg", v$, w$);
}
var b$ = /* @__PURE__ */ f(h$, [["render", $$], ["__file", "pouring.vue"]]), y$ = {
  name: "Present"
}, z$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, C$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), x$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), M$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), H$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), S$ = [
  C$,
  x$,
  M$,
  H$
];
function V$(e, n, o, a, t, r) {
  return l(), s("svg", z$, S$);
}
var L$ = /* @__PURE__ */ f(y$, [["render", V$], ["__file", "present.vue"]]), A$ = {
  name: "PriceTag"
}, B$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, E$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), T$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), O$ = [
  E$,
  T$
];
function k$(e, n, o, a, t, r) {
  return l(), s("svg", B$, O$);
}
var P$ = /* @__PURE__ */ f(A$, [["render", k$], ["__file", "price-tag.vue"]]), I$ = {
  name: "Printer"
}, N$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1), R$ = [
  F$
];
function D$(e, n, o, a, t, r) {
  return l(), s("svg", N$, R$);
}
var q$ = /* @__PURE__ */ f(I$, [["render", D$], ["__file", "printer.vue"]]), j$ = {
  name: "Promotion"
}, W$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1), U$ = [
  K$
];
function G$(e, n, o, a, t, r) {
  return l(), s("svg", W$, U$);
}
var Y$ = /* @__PURE__ */ f(j$, [["render", G$], ["__file", "promotion.vue"]]), X$ = {
  name: "QuestionFilled"
}, Z$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J$ = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1), Q$ = [
  J$
];
function eb(e, n, o, a, t, r) {
  return l(), s("svg", Z$, Q$);
}
var nb = /* @__PURE__ */ f(X$, [["render", eb], ["__file", "question-filled.vue"]]), ob = {
  name: "Rank"
}, ab = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1), rb = [
  tb
];
function cb(e, n, o, a, t, r) {
  return l(), s("svg", ab, rb);
}
var lb = /* @__PURE__ */ f(ob, [["render", cb], ["__file", "rank.vue"]]), db = {
  name: "ReadingLamp"
}, sb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ib = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), mb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1), ub = [
  ib,
  mb
];
function fb(e, n, o, a, t, r) {
  return l(), s("svg", sb, ub);
}
var _b = /* @__PURE__ */ f(db, [["render", fb], ["__file", "reading-lamp.vue"]]), pb = {
  name: "Reading"
}, hb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), gb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1), wb = [
  vb,
  gb
];
function $b(e, n, o, a, t, r) {
  return l(), s("svg", hb, wb);
}
var bb = /* @__PURE__ */ f(pb, [["render", $b], ["__file", "reading.vue"]]), yb = {
  name: "RefreshLeft"
}, zb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), xb = [
  Cb
];
function Mb(e, n, o, a, t, r) {
  return l(), s("svg", zb, xb);
}
var Hb = /* @__PURE__ */ f(yb, [["render", Mb], ["__file", "refresh-left.vue"]]), Sb = {
  name: "RefreshRight"
}, Vb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), Ab = [
  Lb
];
function Bb(e, n, o, a, t, r) {
  return l(), s("svg", Vb, Ab);
}
var Eb = /* @__PURE__ */ f(Sb, [["render", Bb], ["__file", "refresh-right.vue"]]), Tb = {
  name: "Refresh"
}, Ob = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), Pb = [
  kb
];
function Ib(e, n, o, a, t, r) {
  return l(), s("svg", Ob, Pb);
}
var Nb = /* @__PURE__ */ f(Tb, [["render", Ib], ["__file", "refresh.vue"]]), Fb = {
  name: "Refrigerator"
}, Rb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Db = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1), qb = [
  Db
];
function jb(e, n, o, a, t, r) {
  return l(), s("svg", Rb, qb);
}
var Wb = /* @__PURE__ */ f(Fb, [["render", jb], ["__file", "refrigerator.vue"]]), Kb = {
  name: "RemoveFilled"
}, Ub = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gb = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1), Yb = [
  Gb
];
function Xb(e, n, o, a, t, r) {
  return l(), s("svg", Ub, Yb);
}
var Zb = /* @__PURE__ */ f(Kb, [["render", Xb], ["__file", "remove-filled.vue"]]), Jb = {
  name: "Remove"
}, Qb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ey = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), ny = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), oy = [
  ey,
  ny
];
function ay(e, n, o, a, t, r) {
  return l(), s("svg", Qb, oy);
}
var ty = /* @__PURE__ */ f(Jb, [["render", ay], ["__file", "remove.vue"]]), ry = {
  name: "Right"
}, cy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ly = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1), dy = [
  ly
];
function sy(e, n, o, a, t, r) {
  return l(), s("svg", cy, dy);
}
var iy = /* @__PURE__ */ f(ry, [["render", sy], ["__file", "right.vue"]]), my = {
  name: "ScaleToOriginal"
}, uy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fy = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), _y = [
  fy
];
function py(e, n, o, a, t, r) {
  return l(), s("svg", uy, _y);
}
var hy = /* @__PURE__ */ f(my, [["render", py], ["__file", "scale-to-original.vue"]]), vy = {
  name: "School"
}, gy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wy = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), $y = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), by = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1), yy = [
  wy,
  $y,
  by
];
function zy(e, n, o, a, t, r) {
  return l(), s("svg", gy, yy);
}
var Cy = /* @__PURE__ */ f(vy, [["render", zy], ["__file", "school.vue"]]), xy = {
  name: "Scissor"
}, My = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hy = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1), Sy = [
  Hy
];
function Vy(e, n, o, a, t, r) {
  return l(), s("svg", My, Sy);
}
var Ly = /* @__PURE__ */ f(xy, [["render", Vy], ["__file", "scissor.vue"]]), Ay = {
  name: "Search"
}, By = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ey = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), Ty = [
  Ey
];
function Oy(e, n, o, a, t, r) {
  return l(), s("svg", By, Ty);
}
var ky = /* @__PURE__ */ f(Ay, [["render", Oy], ["__file", "search.vue"]]), Py = {
  name: "Select"
}, Iy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ny = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1), Fy = [
  Ny
];
function Ry(e, n, o, a, t, r) {
  return l(), s("svg", Iy, Fy);
}
var Dy = /* @__PURE__ */ f(Py, [["render", Ry], ["__file", "select.vue"]]), qy = {
  name: "Sell"
}, jy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wy = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1), Ky = [
  Wy
];
function Uy(e, n, o, a, t, r) {
  return l(), s("svg", jy, Ky);
}
var Gy = /* @__PURE__ */ f(qy, [["render", Uy], ["__file", "sell.vue"]]), Yy = {
  name: "SemiSelect"
}, Xy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zy = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1), Jy = [
  Zy
];
function Qy(e, n, o, a, t, r) {
  return l(), s("svg", Xy, Jy);
}
var ez = /* @__PURE__ */ f(Yy, [["render", Qy], ["__file", "semi-select.vue"]]), nz = {
  name: "Service"
}, oz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, az = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1), tz = [
  az
];
function rz(e, n, o, a, t, r) {
  return l(), s("svg", oz, tz);
}
var cz = /* @__PURE__ */ f(nz, [["render", rz], ["__file", "service.vue"]]), lz = {
  name: "SetUp"
}, dz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), iz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), mz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), uz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), fz = [
  sz,
  iz,
  mz,
  uz
];
function _z(e, n, o, a, t, r) {
  return l(), s("svg", dz, fz);
}
var pz = /* @__PURE__ */ f(lz, [["render", _z], ["__file", "set-up.vue"]]), hz = {
  name: "Setting"
}, vz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), wz = [
  gz
];
function $z(e, n, o, a, t, r) {
  return l(), s("svg", vz, wz);
}
var bz = /* @__PURE__ */ f(hz, [["render", $z], ["__file", "setting.vue"]]), yz = {
  name: "Share"
}, zz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1), xz = [
  Cz
];
function Mz(e, n, o, a, t, r) {
  return l(), s("svg", zz, xz);
}
var Hz = /* @__PURE__ */ f(yz, [["render", Mz], ["__file", "share.vue"]]), Sz = {
  name: "Ship"
}, Vz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1), Az = [
  Lz
];
function Bz(e, n, o, a, t, r) {
  return l(), s("svg", Vz, Az);
}
var Ez = /* @__PURE__ */ f(Sz, [["render", Bz], ["__file", "ship.vue"]]), Tz = {
  name: "Shop"
}, Oz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1), Pz = [
  kz
];
function Iz(e, n, o, a, t, r) {
  return l(), s("svg", Oz, Pz);
}
var Nz = /* @__PURE__ */ f(Tz, [["render", Iz], ["__file", "shop.vue"]]), Fz = {
  name: "ShoppingBag"
}, Rz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), qz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1), jz = [
  Dz,
  qz
];
function Wz(e, n, o, a, t, r) {
  return l(), s("svg", Rz, jz);
}
var Kz = /* @__PURE__ */ f(Fz, [["render", Wz], ["__file", "shopping-bag.vue"]]), Uz = {
  name: "ShoppingCartFull"
}, Gz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), Xz = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1), Zz = [
  Yz,
  Xz
];
function Jz(e, n, o, a, t, r) {
  return l(), s("svg", Gz, Zz);
}
var Qz = /* @__PURE__ */ f(Uz, [["render", Jz], ["__file", "shopping-cart-full.vue"]]), eC = {
  name: "ShoppingCart"
}, nC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), aC = [
  oC
];
function tC(e, n, o, a, t, r) {
  return l(), s("svg", nC, aC);
}
var rC = /* @__PURE__ */ f(eC, [["render", tC], ["__file", "shopping-cart.vue"]]), cC = {
  name: "Smoking"
}, lC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), sC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), iC = [
  dC,
  sC
];
function mC(e, n, o, a, t, r) {
  return l(), s("svg", lC, iC);
}
var uC = /* @__PURE__ */ f(cC, [["render", mC], ["__file", "smoking.vue"]]), fC = {
  name: "Soccer"
}, _C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1), hC = [
  pC
];
function vC(e, n, o, a, t, r) {
  return l(), s("svg", _C, hC);
}
var gC = /* @__PURE__ */ f(fC, [["render", vC], ["__file", "soccer.vue"]]), wC = {
  name: "SoldOut"
}, $C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1), yC = [
  bC
];
function zC(e, n, o, a, t, r) {
  return l(), s("svg", $C, yC);
}
var CC = /* @__PURE__ */ f(wC, [["render", zC], ["__file", "sold-out.vue"]]), xC = {
  name: "SortDown"
}, MC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, HC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1), SC = [
  HC
];
function VC(e, n, o, a, t, r) {
  return l(), s("svg", MC, SC);
}
var LC = /* @__PURE__ */ f(xC, [["render", VC], ["__file", "sort-down.vue"]]), AC = {
  name: "SortUp"
}, BC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, EC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1), TC = [
  EC
];
function OC(e, n, o, a, t, r) {
  return l(), s("svg", BC, TC);
}
var kC = /* @__PURE__ */ f(AC, [["render", OC], ["__file", "sort-up.vue"]]), PC = {
  name: "Sort"
}, IC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1), FC = [
  NC
];
function RC(e, n, o, a, t, r) {
  return l(), s("svg", IC, FC);
}
var DC = /* @__PURE__ */ f(PC, [["render", RC], ["__file", "sort.vue"]]), qC = {
  name: "Stamp"
}, jC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, WC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1), KC = [
  WC
];
function UC(e, n, o, a, t, r) {
  return l(), s("svg", jC, KC);
}
var GC = /* @__PURE__ */ f(qC, [["render", UC], ["__file", "stamp.vue"]]), YC = {
  name: "StarFilled"
}, XC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ZC = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), JC = [
  ZC
];
function QC(e, n, o, a, t, r) {
  return l(), s("svg", XC, JC);
}
var ex = /* @__PURE__ */ f(YC, [["render", QC], ["__file", "star-filled.vue"]]), nx = {
  name: "Star"
}, ox = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ax = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), tx = [
  ax
];
function rx(e, n, o, a, t, r) {
  return l(), s("svg", ox, tx);
}
var cx = /* @__PURE__ */ f(nx, [["render", rx], ["__file", "star.vue"]]), lx = {
  name: "Stopwatch"
}, dx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), ix = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1), mx = [
  sx,
  ix
];
function ux(e, n, o, a, t, r) {
  return l(), s("svg", dx, mx);
}
var fx = /* @__PURE__ */ f(lx, [["render", ux], ["__file", "stopwatch.vue"]]), _x = {
  name: "SuccessFilled"
}, px = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), vx = [
  hx
];
function gx(e, n, o, a, t, r) {
  return l(), s("svg", px, vx);
}
var Pn = /* @__PURE__ */ f(_x, [["render", gx], ["__file", "success-filled.vue"]]), wx = {
  name: "Sugar"
}, $x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1), yx = [
  bx
];
function zx(e, n, o, a, t, r) {
  return l(), s("svg", $x, yx);
}
var Cx = /* @__PURE__ */ f(wx, [["render", zx], ["__file", "sugar.vue"]]), xx = {
  name: "Suitcase"
}, Mx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), Sx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1), Vx = [
  Hx,
  Sx
];
function Lx(e, n, o, a, t, r) {
  return l(), s("svg", Mx, Vx);
}
var Ax = /* @__PURE__ */ f(xx, [["render", Lx], ["__file", "suitcase.vue"]]), Bx = {
  name: "Sunny"
}, Ex = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), Ox = [
  Tx
];
function kx(e, n, o, a, t, r) {
  return l(), s("svg", Ex, Ox);
}
var Px = /* @__PURE__ */ f(Bx, [["render", kx], ["__file", "sunny.vue"]]), Ix = {
  name: "Sunrise"
}, Nx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1), Rx = [
  Fx
];
function Dx(e, n, o, a, t, r) {
  return l(), s("svg", Nx, Rx);
}
var qx = /* @__PURE__ */ f(Ix, [["render", Dx], ["__file", "sunrise.vue"]]), jx = {
  name: "Sunset"
}, Wx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Ux = [
  Kx
];
function Gx(e, n, o, a, t, r) {
  return l(), s("svg", Wx, Ux);
}
var Yx = /* @__PURE__ */ f(jx, [["render", Gx], ["__file", "sunset.vue"]]), Xx = {
  name: "SwitchButton"
}, Zx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), Qx = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), eM = [
  Jx,
  Qx
];
function nM(e, n, o, a, t, r) {
  return l(), s("svg", Zx, eM);
}
var oM = /* @__PURE__ */ f(Xx, [["render", nM], ["__file", "switch-button.vue"]]), aM = {
  name: "Switch"
}, tM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), cM = [
  rM
];
function lM(e, n, o, a, t, r) {
  return l(), s("svg", tM, cM);
}
var dM = /* @__PURE__ */ f(aM, [["render", lM], ["__file", "switch.vue"]]), sM = {
  name: "TakeawayBox"
}, iM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1), uM = [
  mM
];
function fM(e, n, o, a, t, r) {
  return l(), s("svg", iM, uM);
}
var _M = /* @__PURE__ */ f(sM, [["render", fM], ["__file", "takeaway-box.vue"]]), pM = {
  name: "Ticket"
}, hM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1), gM = [
  vM
];
function wM(e, n, o, a, t, r) {
  return l(), s("svg", hM, gM);
}
var $M = /* @__PURE__ */ f(pM, [["render", wM], ["__file", "ticket.vue"]]), bM = {
  name: "Tickets"
}, yM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), CM = [
  zM
];
function xM(e, n, o, a, t, r) {
  return l(), s("svg", yM, CM);
}
var MM = /* @__PURE__ */ f(bM, [["render", xM], ["__file", "tickets.vue"]]), HM = {
  name: "Timer"
}, SM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, VM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), LM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), AM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), BM = [
  VM,
  LM,
  AM
];
function EM(e, n, o, a, t, r) {
  return l(), s("svg", SM, BM);
}
var TM = /* @__PURE__ */ f(HM, [["render", EM], ["__file", "timer.vue"]]), OM = {
  name: "ToiletPaper"
}, kM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, PM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), IM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1), NM = [
  PM,
  IM
];
function FM(e, n, o, a, t, r) {
  return l(), s("svg", kM, NM);
}
var RM = /* @__PURE__ */ f(OM, [["render", FM], ["__file", "toilet-paper.vue"]]), DM = {
  name: "Tools"
}, qM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1), WM = [
  jM
];
function KM(e, n, o, a, t, r) {
  return l(), s("svg", qM, WM);
}
var UM = /* @__PURE__ */ f(DM, [["render", KM], ["__file", "tools.vue"]]), GM = {
  name: "TopLeft"
}, YM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, XM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), ZM = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1), JM = [
  XM,
  ZM
];
function QM(e, n, o, a, t, r) {
  return l(), s("svg", YM, JM);
}
var eH = /* @__PURE__ */ f(GM, [["render", QM], ["__file", "top-left.vue"]]), nH = {
  name: "TopRight"
}, oH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, aH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), tH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1), rH = [
  aH,
  tH
];
function cH(e, n, o, a, t, r) {
  return l(), s("svg", oH, rH);
}
var lH = /* @__PURE__ */ f(nH, [["render", cH], ["__file", "top-right.vue"]]), dH = {
  name: "Top"
}, sH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, iH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1), mH = [
  iH
];
function uH(e, n, o, a, t, r) {
  return l(), s("svg", sH, mH);
}
var fH = /* @__PURE__ */ f(dH, [["render", uH], ["__file", "top.vue"]]), _H = {
  name: "TrendCharts"
}, pH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1), vH = [
  hH
];
function gH(e, n, o, a, t, r) {
  return l(), s("svg", pH, vH);
}
var wH = /* @__PURE__ */ f(_H, [["render", gH], ["__file", "trend-charts.vue"]]), $H = {
  name: "Trophy"
}, bH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1), zH = [
  yH
];
function CH(e, n, o, a, t, r) {
  return l(), s("svg", bH, zH);
}
var xH = /* @__PURE__ */ f($H, [["render", CH], ["__file", "trophy.vue"]]), MH = {
  name: "TurnOff"
}, HH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, SH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), VH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), LH = [
  SH,
  VH
];
function AH(e, n, o, a, t, r) {
  return l(), s("svg", HH, LH);
}
var BH = /* @__PURE__ */ f(MH, [["render", AH], ["__file", "turn-off.vue"]]), EH = {
  name: "Umbrella"
}, TH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, OH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1), kH = [
  OH
];
function PH(e, n, o, a, t, r) {
  return l(), s("svg", TH, kH);
}
var IH = /* @__PURE__ */ f(EH, [["render", PH], ["__file", "umbrella.vue"]]), NH = {
  name: "Unlock"
}, FH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, RH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), DH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1), qH = [
  RH,
  DH
];
function jH(e, n, o, a, t, r) {
  return l(), s("svg", FH, qH);
}
var WH = /* @__PURE__ */ f(NH, [["render", jH], ["__file", "unlock.vue"]]), KH = {
  name: "UploadFilled"
}, UH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GH = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1), YH = [
  GH
];
function XH(e, n, o, a, t, r) {
  return l(), s("svg", UH, YH);
}
var ZH = /* @__PURE__ */ f(KH, [["render", XH], ["__file", "upload-filled.vue"]]), JH = {
  name: "Upload"
}, QH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1), nS = [
  eS
];
function oS(e, n, o, a, t, r) {
  return l(), s("svg", QH, nS);
}
var aS = /* @__PURE__ */ f(JH, [["render", oS], ["__file", "upload.vue"]]), tS = {
  name: "UserFilled"
}, rS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1), lS = [
  cS
];
function dS(e, n, o, a, t, r) {
  return l(), s("svg", rS, lS);
}
var sS = /* @__PURE__ */ f(tS, [["render", dS], ["__file", "user-filled.vue"]]), iS = {
  name: "User"
}, mS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), fS = [
  uS
];
function _S(e, n, o, a, t, r) {
  return l(), s("svg", mS, fS);
}
var pS = /* @__PURE__ */ f(iS, [["render", _S], ["__file", "user.vue"]]), hS = {
  name: "Van"
}, vS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1), wS = [
  gS
];
function $S(e, n, o, a, t, r) {
  return l(), s("svg", vS, wS);
}
var bS = /* @__PURE__ */ f(hS, [["render", $S], ["__file", "van.vue"]]), yS = {
  name: "VideoCameraFilled"
}, zS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, CS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1), xS = [
  CS
];
function MS(e, n, o, a, t, r) {
  return l(), s("svg", zS, xS);
}
var HS = /* @__PURE__ */ f(yS, [["render", MS], ["__file", "video-camera-filled.vue"]]), SS = {
  name: "VideoCamera"
}, VS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, LS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1), AS = [
  LS
];
function BS(e, n, o, a, t, r) {
  return l(), s("svg", VS, AS);
}
var ES = /* @__PURE__ */ f(SS, [["render", BS], ["__file", "video-camera.vue"]]), TS = {
  name: "VideoPause"
}, OS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1), PS = [
  kS
];
function IS(e, n, o, a, t, r) {
  return l(), s("svg", OS, PS);
}
var NS = /* @__PURE__ */ f(TS, [["render", IS], ["__file", "video-pause.vue"]]), FS = {
  name: "VideoPlay"
}, RS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, DS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1), qS = [
  DS
];
function jS(e, n, o, a, t, r) {
  return l(), s("svg", RS, qS);
}
var WS = /* @__PURE__ */ f(FS, [["render", jS], ["__file", "video-play.vue"]]), KS = {
  name: "View"
}, US = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), YS = [
  GS
];
function XS(e, n, o, a, t, r) {
  return l(), s("svg", US, YS);
}
var La = /* @__PURE__ */ f(KS, [["render", XS], ["__file", "view.vue"]]), ZS = {
  name: "WalletFilled"
}, JS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, QS = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1), eV = [
  QS
];
function nV(e, n, o, a, t, r) {
  return l(), s("svg", JS, eV);
}
var oV = /* @__PURE__ */ f(ZS, [["render", nV], ["__file", "wallet-filled.vue"]]), aV = {
  name: "Wallet"
}, tV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), cV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), lV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), dV = [
  rV,
  cV,
  lV
];
function sV(e, n, o, a, t, r) {
  return l(), s("svg", tV, dV);
}
var iV = /* @__PURE__ */ f(aV, [["render", sV], ["__file", "wallet.vue"]]), mV = {
  name: "WarningFilled"
}, uV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), _V = [
  fV
];
function pV(e, n, o, a, t, r) {
  return l(), s("svg", uV, _V);
}
var In = /* @__PURE__ */ f(mV, [["render", pV], ["__file", "warning-filled.vue"]]), hV = {
  name: "Warning"
}, vV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), wV = [
  gV
];
function $V(e, n, o, a, t, r) {
  return l(), s("svg", vV, wV);
}
var bV = /* @__PURE__ */ f(hV, [["render", $V], ["__file", "warning.vue"]]), yV = {
  name: "Watch"
}, zV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, CV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), xV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), MV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1), HV = [
  CV,
  xV,
  MV
];
function SV(e, n, o, a, t, r) {
  return l(), s("svg", zV, HV);
}
var VV = /* @__PURE__ */ f(yV, [["render", SV], ["__file", "watch.vue"]]), LV = {
  name: "Watermelon"
}, AV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, BV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1), EV = [
  BV
];
function TV(e, n, o, a, t, r) {
  return l(), s("svg", AV, EV);
}
var OV = /* @__PURE__ */ f(LV, [["render", TV], ["__file", "watermelon.vue"]]), kV = {
  name: "WindPower"
}, PV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, IV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), NV = [
  IV
];
function FV(e, n, o, a, t, r) {
  return l(), s("svg", PV, NV);
}
var RV = /* @__PURE__ */ f(kV, [["render", FV], ["__file", "wind-power.vue"]]), DV = {
  name: "ZoomIn"
}, qV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), WV = [
  jV
];
function KV(e, n, o, a, t, r) {
  return l(), s("svg", qV, WV);
}
var UV = /* @__PURE__ */ f(DV, [["render", KV], ["__file", "zoom-in.vue"]]), GV = {
  name: "ZoomOut"
}, YV = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, XV = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), ZV = [
  XV
];
function JV(e, n, o, a, t, r) {
  return l(), s("svg", YV, ZV);
}
var QV = /* @__PURE__ */ f(GV, [["render", JV], ["__file", "zoom-out.vue"]]);
const eL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: et,
  Aim: lt,
  AlarmClock: _t,
  Apple: $t,
  ArrowDown: Bt,
  ArrowDownBold: Mt,
  ArrowLeft: za,
  ArrowLeftBold: It,
  ArrowRight: Ca,
  ArrowRightBold: Yt,
  ArrowUp: xa,
  ArrowUpBold: c4,
  Avatar: v4,
  Back: C4,
  Baseball: A4,
  Basketball: P4,
  Bell: Z4,
  BellFilled: q4,
  Bicycle: ar,
  Bottom: zr,
  BottomLeft: ir,
  BottomRight: vr,
  Bowl: Vr,
  Box: Pr,
  Briefcase: qr,
  Brush: n3,
  BrushFilled: Yr,
  Burger: l3,
  Calendar: f3,
  Camera: x3,
  CameraFilled: w3,
  CaretBottom: A3,
  CaretLeft: P3,
  CaretRight: q3,
  CaretTop: Y3,
  Cellphone: nc,
  ChatDotRound: dc,
  ChatDotSquare: pc,
  ChatLineRound: yc,
  ChatLineSquare: Vc,
  ChatRound: Oc,
  ChatSquare: Rc,
  Check: Uc,
  Checked: Qc,
  Cherry: rl,
  Chicken: ml,
  CircleCheck: Ma,
  CircleCheckFilled: vl,
  CircleClose: K0,
  CircleCloseFilled: On,
  CirclePlus: Gl,
  CirclePlusFilled: Fl,
  Clock: od,
  Close: o0,
  CloseBold: dd,
  Cloudy: wd,
  Coffee: Ad,
  CoffeeCup: xd,
  Coin: Nd,
  ColdDrink: Wd,
  Collection: ts,
  CollectionTag: Zd,
  Comment: is,
  Compass: vs,
  Connection: Cs,
  Coordinate: As,
  CopyDocument: Is,
  Cpu: Ws,
  CreditCard: Js,
  Crop: r6,
  DArrowLeft: m6,
  DArrowRight: v6,
  DCaret: z6,
  DataAnalysis: V6,
  DataBoard: P6,
  DataLine: q6,
  Delete: si,
  DeleteFilled: Y6,
  DeleteLocation: ai,
  Dessert: pi,
  Discount: yi,
  Dish: Ti,
  DishDot: Si,
  Document: h8,
  DocumentAdd: Fi,
  DocumentChecked: Ki,
  DocumentCopy: Ji,
  DocumentDelete: t8,
  DocumentRemove: i8,
  Download: y8,
  Drizzling: S8,
  Edit: R8,
  EditPen: T8,
  Eleme: Q8,
  ElemeFilled: U8,
  ElementPlus: rm,
  Expand: mm,
  Failed: vm,
  Female: xm,
  Files: Am,
  Film: Im,
  Filter: jm,
  Finished: Xm,
  FirstAidKit: au,
  Flag: su,
  Fold: pu,
  Folder: Zu,
  FolderAdd: bu,
  FolderChecked: Hu,
  FolderDelete: Eu,
  FolderOpened: Nu,
  FolderRemove: Wu,
  Food: a5,
  Football: i5,
  ForkSpoon: h5,
  Fries: y5,
  FullScreen: S5,
  Goblet: J5,
  GobletFull: T5,
  GobletSquare: K5,
  GobletSquareFull: F5,
  Goods: mf,
  GoodsFilled: tf,
  Grape: vf,
  Grid: zf,
  Guide: Lf,
  Headset: kf,
  Help: Gf,
  HelpFilled: Df,
  Hide: Ha,
  Histogram: c_,
  HomeFilled: u_,
  HotWater: g_,
  House: C_,
  IceCream: D_,
  IceCreamRound: L_,
  IceCreamSquare: k_,
  IceDrink: G_,
  IceTea: ep,
  InfoFilled: kn,
  Iphone: mp,
  Key: vp,
  KnifeFork: zp,
  Lightning: Lp,
  Link: kp,
  List: Dp,
  Loading: Sa,
  Location: _h,
  LocationFilled: Qp,
  LocationInformation: lh,
  Lock: bh,
  Lollipop: Hh,
  MagicStick: Eh,
  Magnet: Nh,
  Male: Uh,
  Management: Qh,
  MapLocation: cv,
  Medal: fv,
  Menu: wv,
  Message: Bv,
  MessageBox: xv,
  Mic: Iv,
  Microphone: jv,
  MilkTea: Xv,
  Minus: o9,
  Money: i9,
  Monitor: h9,
  Moon: V9,
  MoonNight: z9,
  More: R9,
  MoreFilled: O9,
  MostlyCloudy: U9,
  Mouse: e7,
  Mug: c7,
  Mute: $7,
  MuteNotification: f7,
  NoSmoking: M7,
  Notebook: E7,
  Notification: F7,
  Odometer: G7,
  OfficeBuilding: og,
  Open: sg,
  Operation: pg,
  Opportunity: bg,
  Orange: Hg,
  Paperclip: Eg,
  PartlyCloudy: Fg,
  Pear: Kg,
  Phone: tw,
  PhoneFilled: Jg,
  Picture: Cw,
  PictureFilled: iw,
  PictureRounded: vw,
  PieChart: Aw,
  Place: Nw,
  Platform: Ww,
  Plus: Va,
  Pointer: o$,
  Position: d$,
  Postcard: p$,
  Pouring: b$,
  Present: L$,
  PriceTag: P$,
  Printer: q$,
  Promotion: Y$,
  QuestionFilled: nb,
  Rank: lb,
  Reading: bb,
  ReadingLamp: _b,
  Refresh: Nb,
  RefreshLeft: Hb,
  RefreshRight: Eb,
  Refrigerator: Wb,
  Remove: ty,
  RemoveFilled: Zb,
  Right: iy,
  ScaleToOriginal: hy,
  School: Cy,
  Scissor: Ly,
  Search: ky,
  Select: Dy,
  Sell: Gy,
  SemiSelect: ez,
  Service: cz,
  SetUp: pz,
  Setting: bz,
  Share: Hz,
  Ship: Ez,
  Shop: Nz,
  ShoppingBag: Kz,
  ShoppingCart: rC,
  ShoppingCartFull: Qz,
  Smoking: uC,
  Soccer: gC,
  SoldOut: CC,
  Sort: DC,
  SortDown: LC,
  SortUp: kC,
  Stamp: GC,
  Star: cx,
  StarFilled: ex,
  Stopwatch: fx,
  SuccessFilled: Pn,
  Sugar: Cx,
  Suitcase: Ax,
  Sunny: Px,
  Sunrise: qx,
  Sunset: Yx,
  Switch: dM,
  SwitchButton: oM,
  TakeawayBox: _M,
  Ticket: $M,
  Tickets: MM,
  Timer: TM,
  ToiletPaper: RM,
  Tools: UM,
  Top: fH,
  TopLeft: eH,
  TopRight: lH,
  TrendCharts: wH,
  Trophy: xH,
  TurnOff: BH,
  Umbrella: IH,
  Unlock: WH,
  Upload: aS,
  UploadFilled: ZH,
  User: pS,
  UserFilled: sS,
  Van: bS,
  VideoCamera: ES,
  VideoCameraFilled: HS,
  VideoPause: NS,
  VideoPlay: WS,
  View: La,
  Wallet: iV,
  WalletFilled: oV,
  Warning: bV,
  WarningFilled: In,
  Watch: VV,
  Watermelon: OV,
  WindPower: RV,
  ZoomIn: UV,
  ZoomOut: QV
}, Symbol.toStringTag, { value: "Module" }));
var nL = typeof global == "object" && global && global.Object === Object && global;
const Aa = nL;
var oL = typeof self == "object" && self && self.Object === Object && self, aL = Aa || oL || Function("return this")();
const f2 = aL;
var tL = f2.Symbol;
const B2 = tL;
var Ba = Object.prototype, rL = Ba.hasOwnProperty, cL = Ba.toString, v0 = B2 ? B2.toStringTag : void 0;
function lL(e) {
  var n = rL.call(e, v0), o = e[v0];
  try {
    e[v0] = void 0;
    var a = !0;
  } catch {
  }
  var t = cL.call(e);
  return a && (n ? e[v0] = o : delete e[v0]), t;
}
var dL = Object.prototype, sL = dL.toString;
function iL(e) {
  return sL.call(e);
}
var mL = "[object Null]", uL = "[object Undefined]", to = B2 ? B2.toStringTag : void 0;
function u0(e) {
  return e == null ? e === void 0 ? uL : mL : to && to in Object(e) ? lL(e) : iL(e);
}
function a0(e) {
  return e != null && typeof e == "object";
}
var fL = "[object Symbol]";
function U0(e) {
  return typeof e == "symbol" || a0(e) && u0(e) == fL;
}
function _L(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length, t = Array(a); ++o < a; )
    t[o] = n(e[o], o, e);
  return t;
}
var pL = Array.isArray;
const j2 = pL;
var hL = 1 / 0, ro = B2 ? B2.prototype : void 0, co = ro ? ro.toString : void 0;
function Ea(e) {
  if (typeof e == "string")
    return e;
  if (j2(e))
    return _L(e, Ea) + "";
  if (U0(e))
    return co ? co.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -hL ? "-0" : n;
}
var vL = /\s/;
function gL(e) {
  for (var n = e.length; n-- && vL.test(e.charAt(n)); )
    ;
  return n;
}
var wL = /^\s+/;
function $L(e) {
  return e && e.slice(0, gL(e) + 1).replace(wL, "");
}
function C0(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var lo = 0 / 0, bL = /^[-+]0x[0-9a-f]+$/i, yL = /^0b[01]+$/i, zL = /^0o[0-7]+$/i, CL = parseInt;
function so(e) {
  if (typeof e == "number")
    return e;
  if (U0(e))
    return lo;
  if (C0(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = C0(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = $L(e);
  var o = yL.test(e);
  return o || zL.test(e) ? CL(e.slice(2), o ? 2 : 8) : bL.test(e) ? lo : +e;
}
var xL = "[object AsyncFunction]", ML = "[object Function]", HL = "[object GeneratorFunction]", SL = "[object Proxy]";
function Ta(e) {
  if (!C0(e))
    return !1;
  var n = u0(e);
  return n == ML || n == HL || n == xL || n == SL;
}
var VL = f2["__core-js_shared__"];
const cn = VL;
var io = function() {
  var e = /[^.]+$/.exec(cn && cn.keys && cn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function LL(e) {
  return !!io && io in e;
}
var AL = Function.prototype, BL = AL.toString;
function Y2(e) {
  if (e != null) {
    try {
      return BL.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var EL = /[\\^$.*+?()[\]{}|]/g, TL = /^\[object .+?Constructor\]$/, OL = Function.prototype, kL = Object.prototype, PL = OL.toString, IL = kL.hasOwnProperty, NL = RegExp("^" + PL.call(IL).replace(EL, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function FL(e) {
  if (!C0(e) || LL(e))
    return !1;
  var n = Ta(e) ? NL : TL;
  return n.test(Y2(e));
}
function RL(e, n) {
  return e == null ? void 0 : e[n];
}
function f0(e, n) {
  var o = RL(e, n);
  return FL(o) ? o : void 0;
}
var DL = f0(f2, "WeakMap");
const yn = DL;
var qL = 9007199254740991, jL = /^(?:0|[1-9]\d*)$/;
function WL(e, n) {
  var o = typeof e;
  return n = n == null ? qL : n, !!n && (o == "number" || o != "symbol" && jL.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Oa(e, n) {
  return e === n || e !== e && n !== n;
}
var KL = 9007199254740991;
function ka(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= KL;
}
function UL(e) {
  return e != null && ka(e.length) && !Ta(e);
}
var GL = Object.prototype;
function YL(e) {
  var n = e && e.constructor, o = typeof n == "function" && n.prototype || GL;
  return e === o;
}
function XL(e, n) {
  for (var o = -1, a = Array(e); ++o < e; )
    a[o] = n(o);
  return a;
}
var ZL = "[object Arguments]";
function mo(e) {
  return a0(e) && u0(e) == ZL;
}
var Pa = Object.prototype, JL = Pa.hasOwnProperty, QL = Pa.propertyIsEnumerable, eA = mo(function() {
  return arguments;
}()) ? mo : function(e) {
  return a0(e) && JL.call(e, "callee") && !QL.call(e, "callee");
};
const nA = eA;
function oA() {
  return !1;
}
var Ia = typeof exports == "object" && exports && !exports.nodeType && exports, uo = Ia && typeof module == "object" && module && !module.nodeType && module, aA = uo && uo.exports === Ia, fo = aA ? f2.Buffer : void 0, tA = fo ? fo.isBuffer : void 0, rA = tA || oA;
const zn = rA;
var cA = "[object Arguments]", lA = "[object Array]", dA = "[object Boolean]", sA = "[object Date]", iA = "[object Error]", mA = "[object Function]", uA = "[object Map]", fA = "[object Number]", _A = "[object Object]", pA = "[object RegExp]", hA = "[object Set]", vA = "[object String]", gA = "[object WeakMap]", wA = "[object ArrayBuffer]", $A = "[object DataView]", bA = "[object Float32Array]", yA = "[object Float64Array]", zA = "[object Int8Array]", CA = "[object Int16Array]", xA = "[object Int32Array]", MA = "[object Uint8Array]", HA = "[object Uint8ClampedArray]", SA = "[object Uint16Array]", VA = "[object Uint32Array]", de = {};
de[bA] = de[yA] = de[zA] = de[CA] = de[xA] = de[MA] = de[HA] = de[SA] = de[VA] = !0;
de[cA] = de[lA] = de[wA] = de[dA] = de[$A] = de[sA] = de[iA] = de[mA] = de[uA] = de[fA] = de[_A] = de[pA] = de[hA] = de[vA] = de[gA] = !1;
function LA(e) {
  return a0(e) && ka(e.length) && !!de[u0(e)];
}
function AA(e) {
  return function(n) {
    return e(n);
  };
}
var Na = typeof exports == "object" && exports && !exports.nodeType && exports, $0 = Na && typeof module == "object" && module && !module.nodeType && module, BA = $0 && $0.exports === Na, ln = BA && Aa.process, EA = function() {
  try {
    var e = $0 && $0.require && $0.require("util").types;
    return e || ln && ln.binding && ln.binding("util");
  } catch {
  }
}();
const _o = EA;
var po = _o && _o.isTypedArray, TA = po ? AA(po) : LA;
const Fa = TA;
var OA = Object.prototype, kA = OA.hasOwnProperty;
function PA(e, n) {
  var o = j2(e), a = !o && nA(e), t = !o && !a && zn(e), r = !o && !a && !t && Fa(e), d = o || a || t || r, m = d ? XL(e.length, String) : [], i = m.length;
  for (var u in e)
    (n || kA.call(e, u)) && !(d && (u == "length" || t && (u == "offset" || u == "parent") || r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || WL(u, i))) && m.push(u);
  return m;
}
function IA(e, n) {
  return function(o) {
    return e(n(o));
  };
}
var NA = IA(Object.keys, Object);
const FA = NA;
var RA = Object.prototype, DA = RA.hasOwnProperty;
function qA(e) {
  if (!YL(e))
    return FA(e);
  var n = [];
  for (var o in Object(e))
    DA.call(e, o) && o != "constructor" && n.push(o);
  return n;
}
function jA(e) {
  return UL(e) ? PA(e) : qA(e);
}
var WA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KA = /^\w*$/;
function UA(e, n) {
  if (j2(e))
    return !1;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || U0(e) ? !0 : KA.test(e) || !WA.test(e) || n != null && e in Object(n);
}
var GA = f0(Object, "create");
const x0 = GA;
function YA() {
  this.__data__ = x0 ? x0(null) : {}, this.size = 0;
}
function XA(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var ZA = "__lodash_hash_undefined__", JA = Object.prototype, QA = JA.hasOwnProperty;
function eB(e) {
  var n = this.__data__;
  if (x0) {
    var o = n[e];
    return o === ZA ? void 0 : o;
  }
  return QA.call(n, e) ? n[e] : void 0;
}
var nB = Object.prototype, oB = nB.hasOwnProperty;
function aB(e) {
  var n = this.__data__;
  return x0 ? n[e] !== void 0 : oB.call(n, e);
}
var tB = "__lodash_hash_undefined__";
function rB(e, n) {
  var o = this.__data__;
  return this.size += this.has(e) ? 0 : 1, o[e] = x0 && n === void 0 ? tB : n, this;
}
function W2(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
W2.prototype.clear = YA;
W2.prototype.delete = XA;
W2.prototype.get = eB;
W2.prototype.has = aB;
W2.prototype.set = rB;
function cB() {
  this.__data__ = [], this.size = 0;
}
function G0(e, n) {
  for (var o = e.length; o--; )
    if (Oa(e[o][0], n))
      return o;
  return -1;
}
var lB = Array.prototype, dB = lB.splice;
function sB(e) {
  var n = this.__data__, o = G0(n, e);
  if (o < 0)
    return !1;
  var a = n.length - 1;
  return o == a ? n.pop() : dB.call(n, o, 1), --this.size, !0;
}
function iB(e) {
  var n = this.__data__, o = G0(n, e);
  return o < 0 ? void 0 : n[o][1];
}
function mB(e) {
  return G0(this.__data__, e) > -1;
}
function uB(e, n) {
  var o = this.__data__, a = G0(o, e);
  return a < 0 ? (++this.size, o.push([e, n])) : o[a][1] = n, this;
}
function z2(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
z2.prototype.clear = cB;
z2.prototype.delete = sB;
z2.prototype.get = iB;
z2.prototype.has = mB;
z2.prototype.set = uB;
var fB = f0(f2, "Map");
const M0 = fB;
function _B() {
  this.size = 0, this.__data__ = {
    hash: new W2(),
    map: new (M0 || z2)(),
    string: new W2()
  };
}
function pB(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Y0(e, n) {
  var o = e.__data__;
  return pB(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
}
function hB(e) {
  var n = Y0(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function vB(e) {
  return Y0(this, e).get(e);
}
function gB(e) {
  return Y0(this, e).has(e);
}
function wB(e, n) {
  var o = Y0(this, e), a = o.size;
  return o.set(e, n), this.size += o.size == a ? 0 : 1, this;
}
function C2(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
C2.prototype.clear = _B;
C2.prototype.delete = hB;
C2.prototype.get = vB;
C2.prototype.has = gB;
C2.prototype.set = wB;
var $B = "Expected a function";
function Nn(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError($B);
  var o = function() {
    var a = arguments, t = n ? n.apply(this, a) : a[0], r = o.cache;
    if (r.has(t))
      return r.get(t);
    var d = e.apply(this, a);
    return o.cache = r.set(t, d) || r, d;
  };
  return o.cache = new (Nn.Cache || C2)(), o;
}
Nn.Cache = C2;
var bB = 500;
function yB(e) {
  var n = Nn(e, function(a) {
    return o.size === bB && o.clear(), a;
  }), o = n.cache;
  return n;
}
var zB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, CB = /\\(\\)?/g, xB = yB(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(zB, function(o, a, t, r) {
    n.push(t ? r.replace(CB, "$1") : a || o);
  }), n;
});
const MB = xB;
function HB(e) {
  return e == null ? "" : Ea(e);
}
function SB(e, n) {
  return j2(e) ? e : UA(e, n) ? [e] : MB(HB(e));
}
var VB = 1 / 0;
function LB(e) {
  if (typeof e == "string" || U0(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -VB ? "-0" : n;
}
function AB(e, n) {
  n = SB(n, e);
  for (var o = 0, a = n.length; e != null && o < a; )
    e = e[LB(n[o++])];
  return o && o == a ? e : void 0;
}
function We(e, n, o) {
  var a = e == null ? void 0 : AB(e, n);
  return a === void 0 ? o : a;
}
function BB(e, n) {
  for (var o = -1, a = n.length, t = e.length; ++o < a; )
    e[t + o] = n[o];
  return e;
}
function EB() {
  this.__data__ = new z2(), this.size = 0;
}
function TB(e) {
  var n = this.__data__, o = n.delete(e);
  return this.size = n.size, o;
}
function OB(e) {
  return this.__data__.get(e);
}
function kB(e) {
  return this.__data__.has(e);
}
var PB = 200;
function IB(e, n) {
  var o = this.__data__;
  if (o instanceof z2) {
    var a = o.__data__;
    if (!M0 || a.length < PB - 1)
      return a.push([e, n]), this.size = ++o.size, this;
    o = this.__data__ = new C2(a);
  }
  return o.set(e, n), this.size = o.size, this;
}
function A2(e) {
  var n = this.__data__ = new z2(e);
  this.size = n.size;
}
A2.prototype.clear = EB;
A2.prototype.delete = TB;
A2.prototype.get = OB;
A2.prototype.has = kB;
A2.prototype.set = IB;
function NB(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length, t = 0, r = []; ++o < a; ) {
    var d = e[o];
    n(d, o, e) && (r[t++] = d);
  }
  return r;
}
function FB() {
  return [];
}
var RB = Object.prototype, DB = RB.propertyIsEnumerable, ho = Object.getOwnPropertySymbols, qB = ho ? function(e) {
  return e == null ? [] : (e = Object(e), NB(ho(e), function(n) {
    return DB.call(e, n);
  }));
} : FB;
const jB = qB;
function WB(e, n, o) {
  var a = n(e);
  return j2(e) ? a : BB(a, o(e));
}
function vo(e) {
  return WB(e, jA, jB);
}
var KB = f0(f2, "DataView");
const Cn = KB;
var UB = f0(f2, "Promise");
const xn = UB;
var GB = f0(f2, "Set");
const Mn = GB;
var go = "[object Map]", YB = "[object Object]", wo = "[object Promise]", $o = "[object Set]", bo = "[object WeakMap]", yo = "[object DataView]", XB = Y2(Cn), ZB = Y2(M0), JB = Y2(xn), QB = Y2(Mn), eE = Y2(yn), I2 = u0;
(Cn && I2(new Cn(new ArrayBuffer(1))) != yo || M0 && I2(new M0()) != go || xn && I2(xn.resolve()) != wo || Mn && I2(new Mn()) != $o || yn && I2(new yn()) != bo) && (I2 = function(e) {
  var n = u0(e), o = n == YB ? e.constructor : void 0, a = o ? Y2(o) : "";
  if (a)
    switch (a) {
      case XB:
        return yo;
      case ZB:
        return go;
      case JB:
        return wo;
      case QB:
        return $o;
      case eE:
        return bo;
    }
  return n;
});
const zo = I2;
var nE = f2.Uint8Array;
const Co = nE;
var oE = "__lodash_hash_undefined__";
function aE(e) {
  return this.__data__.set(e, oE), this;
}
function tE(e) {
  return this.__data__.has(e);
}
function F0(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new C2(); ++n < o; )
    this.add(e[n]);
}
F0.prototype.add = F0.prototype.push = aE;
F0.prototype.has = tE;
function rE(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length; ++o < a; )
    if (n(e[o], o, e))
      return !0;
  return !1;
}
function cE(e, n) {
  return e.has(n);
}
var lE = 1, dE = 2;
function Ra(e, n, o, a, t, r) {
  var d = o & lE, m = e.length, i = n.length;
  if (m != i && !(d && i > m))
    return !1;
  var u = r.get(e), v = r.get(n);
  if (u && v)
    return u == n && v == e;
  var g = -1, w = !0, $ = o & dE ? new F0() : void 0;
  for (r.set(e, n), r.set(n, e); ++g < m; ) {
    var h = e[g], p = n[g];
    if (a)
      var b = d ? a(p, h, g, n, e, r) : a(h, p, g, e, n, r);
    if (b !== void 0) {
      if (b)
        continue;
      w = !1;
      break;
    }
    if ($) {
      if (!rE(n, function(x, L) {
        if (!cE($, L) && (h === x || t(h, x, o, a, r)))
          return $.push(L);
      })) {
        w = !1;
        break;
      }
    } else if (!(h === p || t(h, p, o, a, r))) {
      w = !1;
      break;
    }
  }
  return r.delete(e), r.delete(n), w;
}
function sE(e) {
  var n = -1, o = Array(e.size);
  return e.forEach(function(a, t) {
    o[++n] = [t, a];
  }), o;
}
function iE(e) {
  var n = -1, o = Array(e.size);
  return e.forEach(function(a) {
    o[++n] = a;
  }), o;
}
var mE = 1, uE = 2, fE = "[object Boolean]", _E = "[object Date]", pE = "[object Error]", hE = "[object Map]", vE = "[object Number]", gE = "[object RegExp]", wE = "[object Set]", $E = "[object String]", bE = "[object Symbol]", yE = "[object ArrayBuffer]", zE = "[object DataView]", xo = B2 ? B2.prototype : void 0, dn = xo ? xo.valueOf : void 0;
function CE(e, n, o, a, t, r, d) {
  switch (o) {
    case zE:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case yE:
      return !(e.byteLength != n.byteLength || !r(new Co(e), new Co(n)));
    case fE:
    case _E:
    case vE:
      return Oa(+e, +n);
    case pE:
      return e.name == n.name && e.message == n.message;
    case gE:
    case $E:
      return e == n + "";
    case hE:
      var m = sE;
    case wE:
      var i = a & mE;
      if (m || (m = iE), e.size != n.size && !i)
        return !1;
      var u = d.get(e);
      if (u)
        return u == n;
      a |= uE, d.set(e, n);
      var v = Ra(m(e), m(n), a, t, r, d);
      return d.delete(e), v;
    case bE:
      if (dn)
        return dn.call(e) == dn.call(n);
  }
  return !1;
}
var xE = 1, ME = Object.prototype, HE = ME.hasOwnProperty;
function SE(e, n, o, a, t, r) {
  var d = o & xE, m = vo(e), i = m.length, u = vo(n), v = u.length;
  if (i != v && !d)
    return !1;
  for (var g = i; g--; ) {
    var w = m[g];
    if (!(d ? w in n : HE.call(n, w)))
      return !1;
  }
  var $ = r.get(e), h = r.get(n);
  if ($ && h)
    return $ == n && h == e;
  var p = !0;
  r.set(e, n), r.set(n, e);
  for (var b = d; ++g < i; ) {
    w = m[g];
    var x = e[w], L = n[w];
    if (a)
      var k = d ? a(L, x, w, n, e, r) : a(x, L, w, e, n, r);
    if (!(k === void 0 ? x === L || t(x, L, o, a, r) : k)) {
      p = !1;
      break;
    }
    b || (b = w == "constructor");
  }
  if (p && !b) {
    var T = e.constructor, E = n.constructor;
    T != E && "constructor" in e && "constructor" in n && !(typeof T == "function" && T instanceof T && typeof E == "function" && E instanceof E) && (p = !1);
  }
  return r.delete(e), r.delete(n), p;
}
var VE = 1, Mo = "[object Arguments]", Ho = "[object Array]", O0 = "[object Object]", LE = Object.prototype, So = LE.hasOwnProperty;
function AE(e, n, o, a, t, r) {
  var d = j2(e), m = j2(n), i = d ? Ho : zo(e), u = m ? Ho : zo(n);
  i = i == Mo ? O0 : i, u = u == Mo ? O0 : u;
  var v = i == O0, g = u == O0, w = i == u;
  if (w && zn(e)) {
    if (!zn(n))
      return !1;
    d = !0, v = !1;
  }
  if (w && !v)
    return r || (r = new A2()), d || Fa(e) ? Ra(e, n, o, a, t, r) : CE(e, n, i, o, a, t, r);
  if (!(o & VE)) {
    var $ = v && So.call(e, "__wrapped__"), h = g && So.call(n, "__wrapped__");
    if ($ || h) {
      var p = $ ? e.value() : e, b = h ? n.value() : n;
      return r || (r = new A2()), t(p, b, o, a, r);
    }
  }
  return w ? (r || (r = new A2()), SE(e, n, o, a, t, r)) : !1;
}
function Da(e, n, o, a, t) {
  return e === n ? !0 : e == null || n == null || !a0(e) && !a0(n) ? e !== e && n !== n : AE(e, n, o, a, Da, t);
}
var BE = function() {
  return f2.Date.now();
};
const sn = BE;
var EE = "Expected a function", TE = Math.max, OE = Math.min;
function Vo(e, n, o) {
  var a, t, r, d, m, i, u = 0, v = !1, g = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(EE);
  n = so(n) || 0, C0(o) && (v = !!o.leading, g = "maxWait" in o, r = g ? TE(so(o.maxWait) || 0, n) : r, w = "trailing" in o ? !!o.trailing : w);
  function $(C) {
    var y = a, M = t;
    return a = t = void 0, u = C, d = e.apply(M, y), d;
  }
  function h(C) {
    return u = C, m = setTimeout(x, n), v ? $(C) : d;
  }
  function p(C) {
    var y = C - i, M = C - u, A = n - y;
    return g ? OE(A, r - M) : A;
  }
  function b(C) {
    var y = C - i, M = C - u;
    return i === void 0 || y >= n || y < 0 || g && M >= r;
  }
  function x() {
    var C = sn();
    if (b(C))
      return L(C);
    m = setTimeout(x, p(C));
  }
  function L(C) {
    return m = void 0, w && a ? $(C) : (a = t = void 0, d);
  }
  function k() {
    m !== void 0 && clearTimeout(m), u = 0, a = i = t = m = void 0;
  }
  function T() {
    return m === void 0 ? d : L(sn());
  }
  function E() {
    var C = sn(), y = b(C);
    if (a = arguments, t = this, i = C, y) {
      if (m === void 0)
        return h(i);
      if (g)
        return clearTimeout(m), m = setTimeout(x, n), $(i);
    }
    return m === void 0 && (m = setTimeout(x, n)), d;
  }
  return E.cancel = k, E.flush = T, E;
}
function qa(e) {
  for (var n = -1, o = e == null ? 0 : e.length, a = {}; ++n < o; ) {
    var t = e[n];
    a[t[0]] = t[1];
  }
  return a;
}
function Lo(e, n) {
  return Da(e, n);
}
function X0(e) {
  return e == null;
}
const w2 = (e, n, { checkForDefaultPrevented: o = !0 } = {}) => (t) => {
  const r = e == null ? void 0 : e(t);
  if (o === !1 || !r)
    return n == null ? void 0 : n(t);
};
var kE = Object.defineProperty, PE = Object.defineProperties, IE = Object.getOwnPropertyDescriptors, Ao = Object.getOwnPropertySymbols, NE = Object.prototype.hasOwnProperty, FE = Object.prototype.propertyIsEnumerable, Bo = (e, n, o) => n in e ? kE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, RE = (e, n) => {
  for (var o in n || (n = {}))
    NE.call(n, o) && Bo(e, o, n[o]);
  if (Ao)
    for (var o of Ao(n))
      FE.call(n, o) && Bo(e, o, n[o]);
  return e;
}, DE = (e, n) => PE(e, IE(n));
function Eo(e, n) {
  var o;
  const a = n0();
  return pa(() => {
    a.value = e();
  }, DE(RE({}, n), {
    flush: (o = n == null ? void 0 : n.flush) != null ? o : "sync"
  })), _a(a);
}
function Z0(e) {
  return P1() ? (ha(e), !0) : !1;
}
var To;
const ue = typeof window < "u", R0 = (e) => typeof e == "boolean", Ce = (e) => typeof e == "number", qE = (e) => typeof e == "string", mn = () => {
};
ue && ((To = window == null ? void 0 : window.navigator) == null ? void 0 : To.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Hn(e, n, o = {}) {
  const {
    immediate: a = !0
  } = o, t = V(!1);
  let r = null;
  function d() {
    r && (clearTimeout(r), r = null);
  }
  function m() {
    t.value = !1, d();
  }
  function i(...u) {
    d(), t.value = !0, r = setTimeout(() => {
      t.value = !1, r = null, e(...u);
    }, _(n));
  }
  return a && (t.value = !0, ue && i()), Z0(m), {
    isPending: t,
    start: i,
    stop: m
  };
}
function R2(e) {
  var n;
  const o = _(e);
  return (n = o == null ? void 0 : o.$el) != null ? n : o;
}
const J0 = ue ? window : void 0, jE = ue ? window.document : void 0;
function c2(...e) {
  let n, o, a, t;
  if (qE(e[0]) ? ([o, a, t] = e, n = J0) : [n, o, a, t] = e, !n)
    return mn;
  let r = mn;
  const d = W(() => R2(n), (i) => {
    r(), i && (i.addEventListener(o, a, t), r = () => {
      i.removeEventListener(o, a, t), r = mn;
    });
  }, { immediate: !0, flush: "post" }), m = () => {
    d(), r();
  };
  return Z0(m), m;
}
function WE(e, n, o = {}) {
  const { window: a = J0, ignore: t, capture: r = !0 } = o;
  if (!a)
    return;
  const d = V(!0);
  let m;
  const i = (g) => {
    a.clearTimeout(m);
    const w = R2(e), $ = g.composedPath();
    !w || w === g.target || $.includes(w) || !d.value || t && t.length > 0 && t.some((h) => {
      const p = R2(h);
      return p && (g.target === p || $.includes(p));
    }) || n(g);
  }, u = [
    c2(a, "click", i, { passive: !0, capture: r }),
    c2(a, "pointerdown", (g) => {
      const w = R2(e);
      d.value = !!w && !g.composedPath().includes(w);
    }, { passive: !0 }),
    c2(a, "pointerup", (g) => {
      if (g.button === 0) {
        const w = g.composedPath();
        g.composedPath = () => w, m = a.setTimeout(() => i(g), 50);
      }
    }, { passive: !0 })
  ];
  return () => u.forEach((g) => g());
}
const Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vn = "__vueuse_ssr_handlers__";
Sn[Vn] = Sn[Vn] || {};
Sn[Vn];
function KE({ document: e = jE } = {}) {
  if (!e)
    return V("visible");
  const n = V(e.visibilityState);
  return c2(e, "visibilitychange", () => {
    n.value = e.visibilityState;
  }), n;
}
var Oo = Object.getOwnPropertySymbols, UE = Object.prototype.hasOwnProperty, GE = Object.prototype.propertyIsEnumerable, YE = (e, n) => {
  var o = {};
  for (var a in e)
    UE.call(e, a) && n.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && Oo)
    for (var a of Oo(e))
      n.indexOf(a) < 0 && GE.call(e, a) && (o[a] = e[a]);
  return o;
};
function _0(e, n, o = {}) {
  const a = o, { window: t = J0 } = a, r = YE(a, ["window"]);
  let d;
  const m = t && "ResizeObserver" in t, i = () => {
    d && (d.disconnect(), d = void 0);
  }, u = W(() => R2(e), (g) => {
    i(), m && t && g && (d = new ResizeObserver(n), d.observe(g, r));
  }, { immediate: !0, flush: "post" }), v = () => {
    i(), u();
  };
  return Z0(v), {
    isSupported: m,
    stop: v
  };
}
var ko;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ko || (ko = {}));
function XE({ window: e = J0 } = {}) {
  if (!e)
    return V(!1);
  const n = V(e.document.hasFocus());
  return c2(e, "blur", () => {
    n.value = !1;
  }), c2(e, "focus", () => {
    n.value = !0;
  }), n;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const l2 = () => {
}, ZE = Object.prototype.hasOwnProperty, Po = (e, n) => ZE.call(e, n), JE = Array.isArray, Q2 = (e) => typeof e == "function", Ke = (e) => typeof e == "string", b2 = (e) => e !== null && typeof e == "object", QE = Object.prototype.toString, eT = (e) => QE.call(e), un = (e) => eT(e).slice(8, -1), ja = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, nT = /-(\w)/g, oT = ja((e) => e.replace(nT, (n, o) => o ? o.toUpperCase() : "")), N2 = ja((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ln = (e) => e === void 0, K2 = (e) => typeof Element > "u" ? !1 : e instanceof Element, aT = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Io = (e) => Object.keys(e);
class Wa extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function B0(e, n) {
  throw new Wa(`[${e}] ${n}`);
}
function ye(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const o = Ke(e) ? new Wa(`[${e}] ${n}`) : e;
    console.warn(o);
  }
}
const tT = "utils/dom/style", Ka = (e = "") => e.split(" ").filter((n) => !!n.trim()), No = (e, n) => {
  if (!e || !n)
    return !1;
  if (n.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(n);
}, rT = (e, n) => {
  !e || !n.trim() || e.classList.add(...Ka(n));
}, cT = (e, n) => {
  !e || !n.trim() || e.classList.remove(...Ka(n));
}, Fo = (e, n) => {
  var o;
  if (!ue || !e || !n)
    return "";
  let a = oT(n);
  a === "float" && (a = "cssFloat");
  try {
    const t = e.style[a];
    if (t)
      return t;
    const r = (o = document.defaultView) == null ? void 0 : o.getComputedStyle(e, "");
    return r ? r[a] : "";
  } catch {
    return e.style[a];
  }
};
function t0(e, n = "px") {
  if (!e)
    return "";
  if (Ke(e))
    return e;
  if (Ce(e))
    return `${e}${n}`;
  ye(tT, "binding value must be a string or number");
}
let k0;
const lT = () => {
  var e;
  if (!ue)
    return 0;
  if (k0 !== void 0)
    return k0;
  const n = document.createElement("div");
  n.className = "el-scrollbar__wrap", n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const a = document.createElement("div");
  a.style.width = "100%", n.appendChild(a);
  const t = a.offsetWidth;
  return (e = n.parentNode) == null || e.removeChild(n), k0 = o - t, k0;
};
function dT(e, n) {
  if (!ue)
    return;
  if (!n) {
    e.scrollTop = 0;
    return;
  }
  const o = [];
  let a = n.offsetParent;
  for (; a !== null && e !== a && e.contains(a); )
    o.push(a), a = a.offsetParent;
  const t = n.offsetTop + o.reduce((i, u) => i + u.offsetTop, 0), r = t + n.offsetHeight, d = e.scrollTop, m = d + e.clientHeight;
  t < d ? e.scrollTop = t : r > m && (e.scrollTop = r - e.clientHeight);
}
const Ua = "__epPropKey", Y = (e) => e, sT = (e) => b2(e) && !!e[Ua], Q0 = (e, n) => {
  if (!b2(e) || sT(e))
    return e;
  const { values: o, required: a, default: t, type: r, validator: d } = e, i = {
    type: r,
    required: !!a,
    validator: o || d ? (u) => {
      let v = !1, g = [];
      if (o && (g = Array.from(o), Po(e, "default") && g.push(t), v || (v = g.includes(u))), d && (v || (v = d(u))), !v && g.length > 0) {
        const w = [...new Set(g)].map(($) => JSON.stringify($)).join(", ");
        I1(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(u)}.`);
      }
      return v;
    } : void 0,
    [Ua]: !0
  };
  return Po(e, "default") && (i.default = t), i;
}, oe = (e) => qa(Object.entries(e).map(([n, o]) => [
  n,
  Q0(o, n)
])), r0 = Y([
  String,
  Object,
  Function
]), iT = {
  Close: o0
}, mT = {
  Close: o0,
  SuccessFilled: Pn,
  InfoFilled: kn,
  WarningFilled: In,
  CircleCloseFilled: On
}, Ro = {
  success: Pn,
  warning: In,
  error: On,
  info: kn
}, uT = {
  validating: Sa,
  success: Ma,
  error: K0
}, e2 = (e, n) => {
  if (e.install = (o) => {
    for (const a of [e, ...Object.values(n != null ? n : {})])
      o.component(a.name, a);
  }, n)
    for (const [o, a] of Object.entries(n))
      e[o] = a;
  return e;
}, fT = (e, n) => (e.install = (o) => {
  e._context = o._context, o.config.globalProperties[n] = e;
}, e), Fn = (e) => (e.install = l2, e), _T = (...e) => (n) => {
  e.forEach((o) => {
    Q2(o) ? o(n) : o.value = n;
  });
}, d2 = {
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
}, ze = "update:modelValue", Ga = "change", en = ["", "default", "small", "large"], pT = {
  large: 40,
  default: 32,
  small: 24
}, hT = (e) => pT[e || "default"], vT = (e) => ["", ...en].includes(e);
var I0 = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(I0 || {});
const Ya = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), gT = () => Math.floor(Math.random() * 1e4), Rn = (e) => e, wT = ["class", "style"], $T = /^on[A-Z]/, bT = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: o } = e, a = S(() => ((o == null ? void 0 : o.value) || []).concat(wT)), t = Fe();
  return t ? S(() => {
    var r;
    return qa(Object.entries((r = t.proxy) == null ? void 0 : r.$attrs).filter(([d]) => !a.value.includes(d) && !(n && $T.test(d))));
  }) : (ye("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), S(() => ({})));
}, Xa = Symbol(), Za = Symbol("dialogInjectionKey"), nn = Symbol("formContextKey"), H0 = Symbol("formItemContextKey"), Ja = Symbol("scrollbarContextKey"), on = Symbol("tabsRootContextKey"), Dn = Symbol("popper"), Qa = Symbol("popperContent"), e1 = (e) => {
  const n = Fe();
  return S(() => {
    var o, a;
    return (a = ((o = n.proxy) == null ? void 0 : o.$props)[e]) != null ? a : void 0;
  });
}, D0 = V();
function p0(e, n = void 0) {
  const o = Fe() ? re(Xa, D0) : D0;
  return e ? S(() => {
    var a, t;
    return (t = (a = o.value) == null ? void 0 : a[e]) != null ? t : n;
  }) : o;
}
const yT = (e, n, o = !1) => {
  var a;
  const t = !!Fe(), r = t ? p0() : void 0, d = (a = n == null ? void 0 : n.provide) != null ? a : t ? Le : void 0;
  if (!d) {
    ye("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const m = S(() => {
    const i = _(e);
    return r != null && r.value ? zT(r.value, i) : i;
  });
  return d(Xa, m), (o || !D0.value) && (D0.value = m.value), m;
}, zT = (e, n) => {
  var o;
  const a = [.../* @__PURE__ */ new Set([...Io(e), ...Io(n)])], t = {};
  for (const r of a)
    t[r] = (o = n[r]) != null ? o : e[r];
  return t;
}, n1 = Q0({
  type: String,
  values: en,
  required: !1
}), qn = (e, n = {}) => {
  const o = V(void 0), a = n.prop ? o : e1("size"), t = n.global ? o : p0("size"), r = n.form ? { size: void 0 } : re(nn, void 0), d = n.formItem ? { size: void 0 } : re(H0, void 0);
  return S(() => a.value || _(e) || (d == null ? void 0 : d.size) || (r == null ? void 0 : r.size) || t.value || "");
}, CT = (e) => {
  const n = e1("disabled"), o = re(nn, void 0);
  return S(() => n.value || _(e) || (o == null ? void 0 : o.disabled) || !1);
}, xT = ({ from: e, replacement: n, scope: o, version: a, ref: t, type: r = "API" }, d) => {
  W(() => _(d), (m) => {
    m && ye(o, `${r} ${e} is about to be deprecated in version ${a}, please use ${n} instead.
For more detail, please visit: ${t}
`);
  }, {
    immediate: !0
  });
}, MT = (e, n, o) => {
  let a = {
    offsetX: 0,
    offsetY: 0
  };
  const t = (m) => {
    const i = m.clientX, u = m.clientY, { offsetX: v, offsetY: g } = a, w = e.value.getBoundingClientRect(), $ = w.left, h = w.top, p = w.width, b = w.height, x = document.documentElement.clientWidth, L = document.documentElement.clientHeight, k = -$ + v, T = -h + g, E = x - $ - p + v, C = L - h - b + g, y = (A) => {
      const I = Math.min(Math.max(v + A.clientX - i, k), E), F = Math.min(Math.max(g + A.clientY - u, T), C);
      a = {
        offsetX: I,
        offsetY: F
      }, e.value.style.transform = `translate(${t0(I)}, ${t0(F)})`;
    }, M = () => {
      document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", M);
    };
    document.addEventListener("mousemove", y), document.addEventListener("mouseup", M);
  }, r = () => {
    n.value && e.value && n.value.addEventListener("mousedown", t);
  }, d = () => {
    n.value && e.value && n.value.removeEventListener("mousedown", t);
  };
  we(() => {
    pa(() => {
      o.value ? r() : d();
    });
  }), m2(() => {
    d();
  });
}, HT = (e) => ({
  focus: () => {
    var n, o;
    (o = (n = e.value) == null ? void 0 : n.focus) == null || o.call(n);
  }
}), Do = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ST = Symbol("elIdInjection"), q0 = (e) => {
  const n = re(ST, Do);
  return !ue && n === Do && ye("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`), S(() => _(e) || `el-id-${n.prefix}-${n.current++}`);
}, VT = () => {
  const e = re(nn, void 0), n = re(H0, void 0);
  return {
    form: e,
    formItem: n
  };
}, LT = (e, {
  formItemContext: n,
  disableIdGeneration: o,
  disableIdManagement: a
}) => {
  o || (o = V(!1)), a || (a = V(!1));
  const t = V();
  let r;
  const d = S(() => {
    var m;
    return !!(!e.label && n && n.inputIds && ((m = n.inputIds) == null ? void 0 : m.length) <= 1);
  });
  return we(() => {
    r = W([q2(e, "id"), o], ([m, i]) => {
      const u = m != null ? m : i ? void 0 : q0().value;
      u !== t.value && (n != null && n.removeInputId && (t.value && n.removeInputId(t.value), !(a != null && a.value) && !i && u && n.addInputId(u)), t.value = u);
    }, { immediate: !0 });
  }), va(() => {
    r && r(), n != null && n.removeInputId && t.value && n.removeInputId(t.value);
  }), {
    isLabeledByFormItem: d,
    inputId: t
  };
};
var AT = {
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
const BT = (e) => (n, o) => ET(n, o, _(e)), ET = (e, n, o) => We(o, e, e).replace(/\{(\w+)\}/g, (a, t) => {
  var r;
  return `${(r = n == null ? void 0 : n[t]) != null ? r : `{${t}}`}`;
}), TT = (e) => {
  const n = S(() => _(e).name), o = ga(e) ? e : V(e);
  return {
    lang: n,
    locale: o,
    t: BT(e)
  };
}, an = () => {
  const e = p0("locale");
  return TT(S(() => e.value || AT));
}, OT = (e) => {
  if (ga(e) || B0("[useLockscreen]", "You need to pass a ref param to this function"), !ue || No(document.body, "el-popup-parent--hidden"))
    return;
  let n = 0, o = !1, a = "0", t = 0;
  const r = () => {
    cT(document.body, "el-popup-parent--hidden"), o && (document.body.style.paddingRight = a);
  };
  W(e, (d) => {
    if (!d) {
      r();
      return;
    }
    o = !No(document.body, "el-popup-parent--hidden"), o && (a = document.body.style.paddingRight, t = Number.parseInt(Fo(document.body, "paddingRight"), 10)), n = lT();
    const m = document.documentElement.clientHeight < document.body.scrollHeight, i = Fo(document.body, "overflowY");
    n > 0 && (m || i === "scroll") && o && (document.body.style.paddingRight = `${t + n}px`), rT(document.body, "el-popup-parent--hidden");
  }), ha(() => r());
}, kT = Q0({
  type: Y(Boolean),
  default: null
}), PT = Q0({
  type: Y(Function)
}), IT = (e) => {
  const n = `update:${e}`, o = `onUpdate:${e}`, a = [n], t = {
    [e]: kT,
    [o]: PT
  };
  return {
    useModelToggle: ({
      indicator: d,
      toggleReason: m,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: v,
      onHide: g
    }) => {
      const w = Fe(), { emit: $ } = w, h = w.props, p = S(() => Q2(h[o])), b = S(() => h[e] === null), x = (y) => {
        d.value !== !0 && (d.value = !0, m && (m.value = y), Q2(v) && v(y));
      }, L = (y) => {
        d.value !== !1 && (d.value = !1, m && (m.value = y), Q2(g) && g(y));
      }, k = (y) => {
        if (h.disabled === !0 || Q2(u) && !u())
          return;
        const M = p.value && ue;
        M && $(n, !0), (b.value || !M) && x(y);
      }, T = (y) => {
        if (h.disabled === !0 || !ue)
          return;
        const M = p.value && ue;
        M && $(n, !1), (b.value || !M) && L(y);
      }, E = (y) => {
        !R0(y) || (h.disabled && y ? p.value && $(n, !1) : d.value !== y && (y ? x() : L()));
      }, C = () => {
        d.value ? T() : k();
      };
      return W(() => h[e], E), i && w.appContext.config.globalProperties.$route !== void 0 && W(() => ({
        ...w.proxy.$route
      }), () => {
        i.value && d.value && T();
      }), we(() => {
        E(h[e]);
      }), {
        hide: T,
        show: k,
        toggle: C
      };
    },
    useModelToggleProps: t,
    useModelToggleEmits: a
  };
}, o1 = (e) => {
  if (!e)
    return { onClick: l2, onMousedown: l2, onMouseup: l2 };
  let n = !1, o = !1;
  return { onClick: (d) => {
    n && o && e(d), n = o = !1;
  }, onMousedown: (d) => {
    n = d.target === d.currentTarget;
  }, onMouseup: (d) => {
    o = d.target === d.currentTarget;
  } };
};
function NT() {
  let e;
  const n = (a, t) => {
    o(), e = window.setTimeout(a, t);
  }, o = () => window.clearTimeout(e);
  return Z0(() => o()), {
    registerTimeout: n,
    cancelTimeout: o
  };
}
let Z2 = [];
const FT = (e) => {
  const n = (o) => {
    const a = o;
    a.key === d2.esc && Z2.forEach((t) => t(a));
  };
  we(() => {
    Z2.length === 0 && document.addEventListener("keydown", n), ue && Z2.push(e);
  }), m2(() => {
    Z2 = Z2.filter((o) => o !== e), Z2.length === 0 && ue && document.removeEventListener("keydown", n);
  });
};
let qo;
const a1 = `el-popper-container-${gT()}`, t1 = `#${a1}`, RT = () => {
  const e = document.createElement("div");
  return e.id = a1, document.body.appendChild(e), e;
}, DT = () => {
  N1(() => {
    !ue || (process.env.NODE_ENV === "test" || !qo || !document.body.querySelector(t1)) && (qo = RT());
  });
}, qT = oe({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), jT = ({
  showAfter: e,
  hideAfter: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: t } = NT();
  return {
    onOpen: (m) => {
      t(() => {
        o(m);
      }, _(e));
    },
    onClose: (m) => {
      t(() => {
        a(m);
      }, _(n));
    }
  };
}, r1 = Symbol("elForwardRef"), WT = (e) => {
  Le(r1, {
    setForwardRef: (o) => {
      e.value = o;
    }
  });
}, KT = (e) => ({
  mounted(n) {
    e(n);
  },
  updated(n) {
    e(n);
  },
  unmounted() {
    e(null);
  }
}), c1 = "el", UT = "is-", P2 = (e, n, o, a, t) => {
  let r = `${e}-${n}`;
  return o && (r += `-${o}`), a && (r += `__${a}`), t && (r += `--${t}`), r;
}, le = (e) => {
  const n = p0("namespace"), o = S(() => n.value || c1);
  return {
    namespace: o,
    b: (p = "") => P2(_(o), e, p, "", ""),
    e: (p) => p ? P2(_(o), e, "", p, "") : "",
    m: (p) => p ? P2(_(o), e, "", "", p) : "",
    be: (p, b) => p && b ? P2(_(o), e, p, b, "") : "",
    em: (p, b) => p && b ? P2(_(o), e, "", p, b) : "",
    bm: (p, b) => p && b ? P2(_(o), e, p, "", b) : "",
    bem: (p, b, x) => p && b && x ? P2(_(o), e, p, b, x) : "",
    is: (p, ...b) => {
      const x = b.length >= 1 ? b[0] : !0;
      return p && x ? `${UT}${p}` : "";
    },
    cssVar: (p) => {
      const b = {};
      for (const x in p)
        b[`--${o.value}-${x}`] = p[x];
      return b;
    },
    cssVarName: (p) => `--${o.value}-${p}`,
    cssVarBlock: (p) => {
      const b = {};
      for (const x in p)
        b[`--${o.value}-${e}-${x}`] = p[x];
      return b;
    },
    cssVarBlockName: (p) => `--${o.value}-${e}-${p}`
  };
}, jo = V(0), jn = () => {
  const e = p0("zIndex", 2e3), n = S(() => e.value + jo.value);
  return {
    initialZIndex: e,
    currentZIndex: n,
    nextZIndex: () => (jo.value++, n.value)
  };
};
function GT(e) {
  const n = V();
  function o() {
    if (e.value == null)
      return;
    const { selectionStart: t, selectionEnd: r, value: d } = e.value;
    if (t == null || r == null)
      return;
    const m = d.slice(0, Math.max(0, t)), i = d.slice(Math.max(0, r));
    n.value = {
      selectionStart: t,
      selectionEnd: r,
      value: d,
      beforeTxt: m,
      afterTxt: i
    };
  }
  function a() {
    if (e.value == null || n.value == null)
      return;
    const { value: t } = e.value, { beforeTxt: r, afterTxt: d, selectionStart: m } = n.value;
    if (r == null || d == null || m == null)
      return;
    let i = t.length;
    if (t.endsWith(d))
      i = t.length - d.length;
    else if (t.startsWith(r))
      i = r.length;
    else {
      const u = r[m - 1], v = t.indexOf(u, m - 1);
      v !== -1 && (i = v + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [o, a];
}
var ae = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [a, t] of n)
    o[a] = t;
  return o;
};
const YT = oe({
  size: {
    type: Y([Number, String])
  },
  color: {
    type: String
  }
}), XT = {
  name: "ElIcon",
  inheritAttrs: !1
}, ZT = /* @__PURE__ */ ne({
  ...XT,
  props: YT,
  setup(e) {
    const n = e, o = le("icon"), a = S(() => !n.size && !n.color ? {} : {
      fontSize: Ln(n.size) ? void 0 : t0(n.size),
      "--color": n.color
    });
    return (t, r) => (l(), s("i", F2({
      class: _(o).b(),
      style: _(a)
    }, t.$attrs), [
      X(t.$slots, "default")
    ], 16));
  }
});
var JT = /* @__PURE__ */ ae(ZT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const _e = e2(JT);
let Qe;
const QT = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, eO = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function nO(e) {
  const n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing"), a = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), t = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: eO.map((d) => `${d}:${n.getPropertyValue(d)}`).join(";"), paddingSize: a, borderSize: t, boxSizing: o };
}
function Wo(e, n = 1, o) {
  var a;
  Qe || (Qe = document.createElement("textarea"), document.body.appendChild(Qe));
  const { paddingSize: t, borderSize: r, boxSizing: d, contextStyle: m } = nO(e);
  Qe.setAttribute("style", `${m};${QT}`), Qe.value = e.value || e.placeholder || "";
  let i = Qe.scrollHeight;
  const u = {};
  d === "border-box" ? i = i + r : d === "content-box" && (i = i - t), Qe.value = "";
  const v = Qe.scrollHeight - t;
  if (Ce(n)) {
    let g = v * n;
    d === "border-box" && (g = g + t + r), i = Math.max(g, i), u.minHeight = `${g}px`;
  }
  if (Ce(o)) {
    let g = v * o;
    d === "border-box" && (g = g + t + r), i = Math.min(g, i);
  }
  return u.height = `${i}px`, (a = Qe.parentNode) == null || a.removeChild(Qe), Qe = void 0, u;
}
const oO = oe({
  id: {
    type: String,
    default: void 0
  },
  size: n1,
  disabled: Boolean,
  modelValue: {
    type: Y([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Y([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: r0,
    default: ""
  },
  prefixIcon: {
    type: r0,
    default: ""
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Y([Object, Array, String]),
    default: () => Rn({})
  }
}), aO = {
  [ze]: (e) => Ke(e),
  input: (e) => Ke(e),
  change: (e) => Ke(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, tO = ["role"], rO = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], cO = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], lO = {
  name: "ElInput",
  inheritAttrs: !1
}, dO = /* @__PURE__ */ ne({
  ...lO,
  props: oO,
  emits: aO,
  setup(e, { expose: n, emit: o }) {
    const a = e, t = {
      suffix: "append",
      prefix: "prepend"
    }, r = Fe(), d = F1(), m = A0(), i = S(() => {
      const H = {};
      return a.containerRole === "combobox" && (H["aria-haspopup"] = d["aria-haspopup"], H["aria-owns"] = d["aria-owns"], H["aria-expanded"] = d["aria-expanded"]), H;
    }), u = bT({
      excludeKeys: S(() => Object.keys(i.value))
    }), { form: v, formItem: g } = VT(), { inputId: w } = LT(a, {
      formItemContext: g
    }), $ = qn(), h = CT(), p = le("input"), b = le("textarea"), x = n0(), L = n0(), k = V(!1), T = V(!1), E = V(!1), C = V(!1), y = V(), M = n0(a.inputStyle), A = S(() => x.value || L.value), I = S(() => {
      var H;
      return (H = v == null ? void 0 : v.statusIcon) != null ? H : !1;
    }), F = S(() => (g == null ? void 0 : g.validateState) || ""), Z = S(() => F.value && uT[F.value]), q = S(() => C.value ? La : Ha), P = S(() => [
      d.style,
      a.inputStyle
    ]), R = S(() => [
      a.inputStyle,
      M.value,
      { resize: a.resize }
    ]), G = S(() => X0(a.modelValue) ? "" : String(a.modelValue)), ee = S(() => a.clearable && !h.value && !a.readonly && !!G.value && (k.value || T.value)), te = S(() => a.showPassword && !h.value && !a.readonly && !!G.value && (!!G.value || k.value)), ie = S(() => a.showWordLimit && !!u.value.maxlength && (a.type === "text" || a.type === "textarea") && !h.value && !a.readonly && !a.showPassword), xe = S(() => Array.from(G.value).length), Re = S(() => !!ie.value && xe.value > Number(u.value.maxlength)), Me = S(() => !!m.suffix || !!a.suffixIcon || ee.value || a.showPassword || ie.value || !!F.value && I.value), [Ae, Be] = GT(x);
    _0(L, (H) => {
      if (!ie.value || a.resize !== "both")
        return;
      const J = H[0], { width: $e } = J.contentRect;
      y.value = {
        right: `calc(100% - ${$e + 15 + 6}px)`
      };
    });
    const me = () => {
      const { type: H, autosize: J } = a;
      if (!(!ue || H !== "textarea"))
        if (J) {
          const $e = b2(J) ? J.minRows : void 0, ve = b2(J) ? J.maxRows : void 0;
          M.value = {
            ...Wo(L.value, $e, ve)
          };
        } else
          M.value = {
            minHeight: Wo(L.value).minHeight
          };
    }, Ee = () => {
      const H = A.value;
      !H || H.value === G.value || (H.value = G.value);
    }, De = (H) => {
      const { el: J } = r.vnode;
      if (!J)
        return;
      const ve = Array.from(J.querySelectorAll(`.${p.e(H)}`)).find((X2) => X2.parentNode === J);
      if (!ve)
        return;
      const v2 = t[H];
      m[v2] ? ve.style.transform = `translateX(${H === "suffix" ? "-" : ""}${J.querySelector(`.${p.be("group", v2)}`).offsetWidth}px)` : ve.removeAttribute("style");
    }, he = () => {
      De("prefix"), De("suffix");
    }, o2 = async (H) => {
      Ae();
      let { value: J } = H.target;
      a.formatter && (J = a.parser ? a.parser(J) : J, J = a.formatter(J)), !E.value && J !== G.value && (o(ze, J), o("input", J), await ce(), Ee(), Be());
    }, a2 = (H) => {
      o("change", H.target.value);
    }, t2 = (H) => {
      o("compositionstart", H), E.value = !0;
    }, Te = (H) => {
      var J;
      o("compositionupdate", H);
      const $e = (J = H.target) == null ? void 0 : J.value, ve = $e[$e.length - 1] || "";
      E.value = !Ya(ve);
    }, _2 = (H) => {
      o("compositionend", H), E.value && (E.value = !1, o2(H));
    }, T2 = () => {
      C.value = !C.value, x2();
    }, x2 = async () => {
      var H;
      await ce(), (H = A.value) == null || H.focus();
    }, r2 = () => {
      var H;
      return (H = A.value) == null ? void 0 : H.blur();
    }, Xe = (H) => {
      k.value = !0, o("focus", H);
    }, p2 = (H) => {
      var J;
      k.value = !1, o("blur", H), a.validateEvent && ((J = g == null ? void 0 : g.validate) == null || J.call(g, "blur").catch(($e) => ye($e)));
    }, O2 = (H) => {
      T.value = !1, o("mouseleave", H);
    }, He = (H) => {
      T.value = !0, o("mouseenter", H);
    }, Ze = (H) => {
      o("keydown", H);
    }, M2 = () => {
      var H;
      (H = A.value) == null || H.select();
    }, h2 = () => {
      o(ze, ""), o("change", ""), o("clear"), o("input", "");
    };
    return W(() => a.modelValue, () => {
      var H;
      ce(() => me()), a.validateEvent && ((H = g == null ? void 0 : g.validate) == null || H.call(g, "change").catch((J) => ye(J)));
    }), W(G, () => Ee()), W(() => a.type, async () => {
      await ce(), Ee(), me(), he();
    }), we(async () => {
      !a.formatter && a.parser && ye("ElInput", "If you set the parser, you also need to set the formatter."), Ee(), he(), await ce(), me();
    }), Tn(async () => {
      await ce(), he();
    }), n({
      input: x,
      textarea: L,
      ref: A,
      textareaStyle: R,
      autosize: q2(a, "autosize"),
      focus: x2,
      blur: r2,
      select: M2,
      clear: h2,
      resizeTextarea: me
    }), (H, J) => Ne((l(), s("div", F2(_(i), {
      class: [
        H.type === "textarea" ? _(b).b() : _(p).b(),
        _(p).m(_($)),
        _(p).is("disabled", _(h)),
        _(p).is("exceed", _(Re)),
        {
          [_(p).b("group")]: H.$slots.prepend || H.$slots.append,
          [_(p).bm("group", "append")]: H.$slots.append,
          [_(p).bm("group", "prepend")]: H.$slots.prepend,
          [_(p).m("prefix")]: H.$slots.prefix || H.prefixIcon,
          [_(p).m("suffix")]: H.$slots.suffix || H.suffixIcon || H.clearable || H.showPassword,
          [_(p).bm("suffix", "password-clear")]: _(ee) && _(te)
        },
        H.$attrs.class
      ],
      style: _(P),
      role: H.containerRole,
      onMouseenter: He,
      onMouseleave: O2
    }), [
      j(" input "),
      H.type !== "textarea" ? (l(), s(be, { key: 0 }, [
        j(" prepend slot "),
        H.$slots.prepend ? (l(), s("div", {
          key: 0,
          class: O(_(p).be("group", "prepend"))
        }, [
          X(H.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        c("div", {
          class: O([_(p).e("wrapper"), _(p).is("focus", k.value)])
        }, [
          j(" prefix slot "),
          H.$slots.prefix || H.prefixIcon ? (l(), s("span", {
            key: 0,
            class: O(_(p).e("prefix"))
          }, [
            c("span", {
              class: O(_(p).e("prefix-inner"))
            }, [
              X(H.$slots, "prefix"),
              H.prefixIcon ? (l(), K(_(_e), {
                key: 0,
                class: O(_(p).e("icon"))
              }, {
                default: N(() => [
                  (l(), K(Ie(H.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          c("input", F2({
            id: _(w),
            ref_key: "input",
            ref: x,
            class: _(p).e("inner")
          }, _(u), {
            type: H.showPassword ? C.value ? "text" : "password" : H.type,
            disabled: _(h),
            formatter: H.formatter,
            parser: H.parser,
            readonly: H.readonly,
            autocomplete: H.autocomplete,
            tabindex: H.tabindex,
            "aria-label": H.label,
            placeholder: H.placeholder,
            style: H.inputStyle,
            onCompositionstart: t2,
            onCompositionupdate: Te,
            onCompositionend: _2,
            onInput: o2,
            onFocus: Xe,
            onBlur: p2,
            onChange: a2,
            onKeydown: Ze
          }), null, 16, rO),
          j(" suffix slot "),
          _(Me) ? (l(), s("span", {
            key: 1,
            class: O(_(p).e("suffix"))
          }, [
            c("span", {
              class: O(_(p).e("suffix-inner"))
            }, [
              !_(ee) || !_(te) || !_(ie) ? (l(), s(be, { key: 0 }, [
                X(H.$slots, "suffix"),
                H.suffixIcon ? (l(), K(_(_e), {
                  key: 0,
                  class: O(_(p).e("icon"))
                }, {
                  default: N(() => [
                    (l(), K(Ie(H.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              _(ee) ? (l(), K(_(_e), {
                key: 1,
                class: O([_(p).e("icon"), _(p).e("clear")]),
                onMousedown: ke(_(l2), ["prevent"]),
                onClick: h2
              }, {
                default: N(() => [
                  D(_(K0))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              _(te) ? (l(), K(_(_e), {
                key: 2,
                class: O([_(p).e("icon"), _(p).e("password")]),
                onClick: T2
              }, {
                default: N(() => [
                  (l(), K(Ie(_(q))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              _(ie) ? (l(), s("span", {
                key: 3,
                class: O(_(p).e("count"))
              }, [
                c("span", {
                  class: O(_(p).e("count-inner"))
                }, se(_(xe)) + " / " + se(_(u).maxlength), 3)
              ], 2)) : j("v-if", !0),
              _(F) && _(Z) && _(I) ? (l(), K(_(_e), {
                key: 4,
                class: O([
                  _(p).e("icon"),
                  _(p).e("validateIcon"),
                  _(p).is("loading", _(F) === "validating")
                ])
              }, {
                default: N(() => [
                  (l(), K(Ie(_(Z))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        H.$slots.append ? (l(), s("div", {
          key: 1,
          class: O(_(p).be("group", "append"))
        }, [
          X(H.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (l(), s(be, { key: 1 }, [
        j(" textarea "),
        c("textarea", F2({
          id: _(w),
          ref_key: "textarea",
          ref: L,
          class: _(b).e("inner")
        }, _(u), {
          tabindex: H.tabindex,
          disabled: _(h),
          readonly: H.readonly,
          autocomplete: H.autocomplete,
          style: _(R),
          "aria-label": H.label,
          placeholder: H.placeholder,
          onCompositionstart: t2,
          onCompositionupdate: Te,
          onCompositionend: _2,
          onInput: o2,
          onFocus: Xe,
          onBlur: p2,
          onChange: a2,
          onKeydown: Ze
        }), null, 16, cO),
        _(ie) ? (l(), s("span", {
          key: 0,
          style: fe(y.value),
          class: O(_(p).e("count"))
        }, se(_(xe)) + " / " + se(_(u).maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 16, tO)), [
      [u2, H.type !== "hidden"]
    ]);
  }
});
var sO = /* @__PURE__ */ ae(dO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const iO = e2(sO), e0 = 4, mO = {
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
}, uO = ({
  move: e,
  size: n,
  bar: o
}) => ({
  [o.size]: n,
  transform: `translate${o.axis}(${e}%)`
}), fO = oe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), _O = /* @__PURE__ */ ne({
  __name: "thumb",
  props: fO,
  setup(e) {
    const n = e, o = "Thumb", a = re(Ja), t = le("scrollbar");
    a || B0(o, "can not inject scrollbar context");
    const r = V(), d = V(), m = V({}), i = V(!1);
    let u = !1, v = !1, g = ue ? document.onselectstart : null;
    const w = S(() => mO[n.vertical ? "vertical" : "horizontal"]), $ = S(() => uO({
      size: n.size,
      move: n.move,
      bar: w.value
    })), h = S(() => r.value[w.value.offset] ** 2 / a.wrapElement[w.value.scrollSize] / n.ratio / d.value[w.value.offset]), p = (y) => {
      var M;
      if (y.stopPropagation(), y.ctrlKey || [1, 2].includes(y.button))
        return;
      (M = window.getSelection()) == null || M.removeAllRanges(), x(y);
      const A = y.currentTarget;
      !A || (m.value[w.value.axis] = A[w.value.offset] - (y[w.value.client] - A.getBoundingClientRect()[w.value.direction]));
    }, b = (y) => {
      if (!d.value || !r.value || !a.wrapElement)
        return;
      const M = Math.abs(y.target.getBoundingClientRect()[w.value.direction] - y[w.value.client]), A = d.value[w.value.offset] / 2, I = (M - A) * 100 * h.value / r.value[w.value.offset];
      a.wrapElement[w.value.scroll] = I * a.wrapElement[w.value.scrollSize] / 100;
    }, x = (y) => {
      y.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", L), document.addEventListener("mouseup", k), g = document.onselectstart, document.onselectstart = () => !1;
    }, L = (y) => {
      if (!r.value || !d.value || u === !1)
        return;
      const M = m.value[w.value.axis];
      if (!M)
        return;
      const A = (r.value.getBoundingClientRect()[w.value.direction] - y[w.value.client]) * -1, I = d.value[w.value.offset] - M, F = (A - I) * 100 * h.value / r.value[w.value.offset];
      a.wrapElement[w.value.scroll] = F * a.wrapElement[w.value.scrollSize] / 100;
    }, k = () => {
      u = !1, m.value[w.value.axis] = 0, document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", k), C(), v && (i.value = !1);
    }, T = () => {
      v = !1, i.value = !!n.size;
    }, E = () => {
      v = !0, i.value = u;
    };
    m2(() => {
      C(), document.removeEventListener("mouseup", k);
    });
    const C = () => {
      document.onselectstart !== g && (document.onselectstart = g);
    };
    return c2(q2(a, "scrollbarElement"), "mousemove", T), c2(q2(a, "scrollbarElement"), "mouseleave", E), (y, M) => (l(), K(U2, {
      name: _(t).b("fade"),
      persisted: ""
    }, {
      default: N(() => [
        Ne(c("div", {
          ref_key: "instance",
          ref: r,
          class: O([_(t).e("bar"), _(t).is(_(w).key)]),
          onMousedown: b
        }, [
          c("div", {
            ref_key: "thumb",
            ref: d,
            class: O(_(t).e("thumb")),
            style: fe(_($)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [u2, y.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ko = /* @__PURE__ */ ae(_O, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const pO = oe({
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
}), hO = /* @__PURE__ */ ne({
  __name: "bar",
  props: pO,
  setup(e, { expose: n }) {
    const o = e, a = V(0), t = V(0);
    return n({
      handleScroll: (d) => {
        if (d) {
          const m = d.offsetHeight - e0, i = d.offsetWidth - e0;
          t.value = d.scrollTop * 100 / m * o.ratioY, a.value = d.scrollLeft * 100 / i * o.ratioX;
        }
      }
    }), (d, m) => (l(), s(be, null, [
      D(Ko, {
        move: a.value,
        ratio: d.ratioX,
        size: d.width,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      D(Ko, {
        move: t.value,
        ratio: d.ratioY,
        size: d.height,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var vO = /* @__PURE__ */ ae(hO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const gO = oe({
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
    type: Y([String, Object, Array]),
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
}), wO = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(Ce)
}, $O = {
  name: "ElScrollbar"
}, bO = /* @__PURE__ */ ne({
  ...$O,
  props: gO,
  emits: wO,
  setup(e, { expose: n, emit: o }) {
    const a = e, t = le("scrollbar");
    let r, d;
    const m = V(), i = V(), u = V(), v = V("0"), g = V("0"), w = V(), $ = V(1), h = V(1), p = "ElScrollbar", b = S(() => {
      const C = {};
      return a.height && (C.height = t0(a.height)), a.maxHeight && (C.maxHeight = t0(a.maxHeight)), [a.wrapStyle, C];
    }), x = () => {
      var C;
      i.value && ((C = w.value) == null || C.handleScroll(i.value), o("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function L(C, y) {
      b2(C) ? i.value.scrollTo(C) : Ce(C) && Ce(y) && i.value.scrollTo(C, y);
    }
    const k = (C) => {
      if (!Ce(C)) {
        ye(p, "value must be a number");
        return;
      }
      i.value.scrollTop = C;
    }, T = (C) => {
      if (!Ce(C)) {
        ye(p, "value must be a number");
        return;
      }
      i.value.scrollLeft = C;
    }, E = () => {
      if (!i.value)
        return;
      const C = i.value.offsetHeight - e0, y = i.value.offsetWidth - e0, M = C ** 2 / i.value.scrollHeight, A = y ** 2 / i.value.scrollWidth, I = Math.max(M, a.minSize), F = Math.max(A, a.minSize);
      $.value = M / (C - M) / (I / (C - I)), h.value = A / (y - A) / (F / (y - F)), g.value = I + e0 < C ? `${I}px` : "", v.value = F + e0 < y ? `${F}px` : "";
    };
    return W(() => a.noresize, (C) => {
      C ? (r == null || r(), d == null || d()) : ({ stop: r } = _0(u, E), d = c2("resize", E));
    }, { immediate: !0 }), W(() => [a.maxHeight, a.height], () => {
      a.native || ce(() => {
        var C;
        E(), i.value && ((C = w.value) == null || C.handleScroll(i.value));
      });
    }), Le(Ja, G2({
      scrollbarElement: m,
      wrapElement: i
    })), we(() => {
      a.native || ce(() => E());
    }), Tn(() => E()), n({
      wrap$: i,
      update: E,
      scrollTo: L,
      setScrollTop: k,
      setScrollLeft: T,
      handleScroll: x
    }), (C, y) => (l(), s("div", {
      ref_key: "scrollbar$",
      ref: m,
      class: O(_(t).b())
    }, [
      c("div", {
        ref_key: "wrap$",
        ref: i,
        class: O([
          C.wrapClass,
          _(t).e("wrap"),
          { [_(t).em("wrap", "hidden-default")]: !C.native }
        ]),
        style: fe(_(b)),
        onScroll: x
      }, [
        (l(), K(Ie(C.tag), {
          ref_key: "resize$",
          ref: u,
          class: O([_(t).e("view"), C.viewClass]),
          style: fe(C.viewStyle)
        }, {
          default: N(() => [
            X(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      C.native ? j("v-if", !0) : (l(), K(vO, {
        key: 0,
        ref_key: "barRef",
        ref: w,
        height: g.value,
        width: v.value,
        always: C.always,
        "ratio-x": h.value,
        "ratio-y": $.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var yO = /* @__PURE__ */ ae(bO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const l1 = e2(yO), d1 = oe({
  role: {
    type: String,
    default: "tooltip"
  }
}), zO = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, CO = /* @__PURE__ */ ne({
  ...zO,
  props: d1,
  setup(e, { expose: n }) {
    const o = e, a = V(), t = V(), r = V(), d = V(), m = S(() => o.role), i = {
      triggerRef: a,
      popperInstanceRef: t,
      contentRef: r,
      referenceRef: d,
      role: m
    };
    return n(i), Le(Dn, i), (u, v) => X(u.$slots, "default");
  }
});
var xO = /* @__PURE__ */ ae(CO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const s1 = oe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), MO = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, HO = /* @__PURE__ */ ne({
  ...MO,
  props: s1,
  setup(e, { expose: n }) {
    const o = e, a = le("popper"), { arrowOffset: t, arrowRef: r } = re(Qa, void 0);
    return W(() => o.arrowOffset, (d) => {
      t.value = d;
    }), m2(() => {
      r.value = void 0;
    }), n({
      arrowRef: r
    }), (d, m) => (l(), s("span", {
      ref_key: "arrowRef",
      ref: r,
      class: O(_(a).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var SO = /* @__PURE__ */ ae(HO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const fn = "ElOnlyChild", VO = ne({
  name: fn,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    var a;
    const t = re(r1), r = KT((a = t == null ? void 0 : t.setForwardRef) != null ? a : l2);
    return () => {
      var d;
      const m = (d = n.default) == null ? void 0 : d.call(n, o);
      if (!m)
        return null;
      if (m.length > 1)
        return ye(fn, "requires exact only one valid child."), null;
      const i = i1(m);
      return i ? Ne(R1(i, o), [[r]]) : (ye(fn, "no valid child node found"), null);
    };
  }
});
function i1(e) {
  if (!e)
    return null;
  const n = e;
  for (const o of n) {
    if (b2(o))
      switch (o.type) {
        case q1:
          continue;
        case D1:
          return _n(o);
        case "svg":
          return _n(o);
        case be:
          return i1(o.children);
        default:
          return o;
      }
    return _n(o);
  }
  return null;
}
function _n(e) {
  return D("span", {
    class: "el-only-child__content"
  }, [e]);
}
const m1 = oe({
  virtualRef: {
    type: Y(Object)
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
}), LO = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, AO = /* @__PURE__ */ ne({
  ...LO,
  props: m1,
  setup(e, { expose: n }) {
    const o = e, { role: a, triggerRef: t } = re(Dn, void 0);
    WT(t);
    const r = S(() => m.value ? o.id : void 0), d = S(() => {
      if (a && a.value === "tooltip")
        return o.open && o.id ? o.id : void 0;
    }), m = S(() => {
      if (a && a.value !== "tooltip")
        return a.value;
    }), i = S(() => m.value ? `${o.open}` : void 0);
    let u;
    return we(() => {
      W(() => o.virtualRef, (v) => {
        v && (t.value = R2(v));
      }, {
        immediate: !0
      }), W(() => t.value, (v, g) => {
        u == null || u(), u = void 0, K2(v) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((w) => {
          var $;
          const h = o[w];
          h && (v.addEventListener(w.slice(2).toLowerCase(), h), ($ = g == null ? void 0 : g.removeEventListener) == null || $.call(g, w.slice(2).toLowerCase(), h));
        }), u = W([r, d, m, i], (w) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach(($, h) => {
            X0(w[h]) ? v.removeAttribute($) : v.setAttribute($, w[h]);
          });
        }, { immediate: !0 })), K2(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((w) => g.removeAttribute(w));
      }, {
        immediate: !0
      });
    }), m2(() => {
      u == null || u(), u = void 0;
    }), n({
      triggerRef: t
    }), (v, g) => v.virtualTriggering ? j("v-if", !0) : (l(), K(_(VO), F2({ key: 0 }, v.$attrs, {
      "aria-controls": _(r),
      "aria-describedby": _(d),
      "aria-expanded": _(i),
      "aria-haspopup": _(m)
    }), {
      default: N(() => [
        X(v.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var BO = /* @__PURE__ */ ae(AO, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), Se = "top", Ge = "bottom", Ye = "right", Ve = "left", Wn = "auto", E0 = [Se, Ge, Ye, Ve], c0 = "start", S0 = "end", EO = "clippingParents", u1 = "viewport", g0 = "popper", TO = "reference", Uo = E0.reduce(function(e, n) {
  return e.concat([n + "-" + c0, n + "-" + S0]);
}, []), Kn = [].concat(E0, [Wn]).reduce(function(e, n) {
  return e.concat([n, n + "-" + c0, n + "-" + S0]);
}, []), OO = "beforeRead", kO = "read", PO = "afterRead", IO = "beforeMain", NO = "main", FO = "afterMain", RO = "beforeWrite", DO = "write", qO = "afterWrite", jO = [OO, kO, PO, IO, NO, FO, RO, DO, qO];
function i2(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function n2(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function l0(e) {
  var n = n2(e).Element;
  return e instanceof n || e instanceof Element;
}
function Ue(e) {
  var n = n2(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Un(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = n2(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function WO(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var a = n.styles[o] || {}, t = n.attributes[o] || {}, r = n.elements[o];
    !Ue(r) || !i2(r) || (Object.assign(r.style, a), Object.keys(t).forEach(function(d) {
      var m = t[d];
      m === !1 ? r.removeAttribute(d) : r.setAttribute(d, m === !0 ? "" : m);
    }));
  });
}
function KO(e) {
  var n = e.state, o = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], r = n.attributes[a] || {}, d = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : o[a]), m = d.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !Ue(t) || !i2(t) || (Object.assign(t.style, m), Object.keys(r).forEach(function(i) {
        t.removeAttribute(i);
      }));
    });
  };
}
var f1 = { name: "applyStyles", enabled: !0, phase: "write", fn: WO, effect: KO, requires: ["computeStyles"] };
function s2(e) {
  return e.split("-")[0];
}
var D2 = Math.max, j0 = Math.min, d0 = Math.round;
function s0(e, n) {
  n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, t = 1;
  if (Ue(e) && n) {
    var r = e.offsetHeight, d = e.offsetWidth;
    d > 0 && (a = d0(o.width) / d || 1), r > 0 && (t = d0(o.height) / r || 1);
  }
  return { width: o.width / a, height: o.height / t, top: o.top / t, right: o.right / a, bottom: o.bottom / t, left: o.left / a, x: o.left / a, y: o.top / t };
}
function Gn(e) {
  var n = s0(e), o = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: a };
}
function _1(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Un(o)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function y2(e) {
  return n2(e).getComputedStyle(e);
}
function UO(e) {
  return ["table", "td", "th"].indexOf(i2(e)) >= 0;
}
function E2(e) {
  return ((l0(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tn(e) {
  return i2(e) === "html" ? e : e.assignedSlot || e.parentNode || (Un(e) ? e.host : null) || E2(e);
}
function Go(e) {
  return !Ue(e) || y2(e).position === "fixed" ? null : e.offsetParent;
}
function GO(e) {
  var n = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, o = navigator.userAgent.indexOf("Trident") !== -1;
  if (o && Ue(e)) {
    var a = y2(e);
    if (a.position === "fixed")
      return null;
  }
  var t = tn(e);
  for (Un(t) && (t = t.host); Ue(t) && ["html", "body"].indexOf(i2(t)) < 0; ) {
    var r = y2(t);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || n && r.willChange === "filter" || n && r.filter && r.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function T0(e) {
  for (var n = n2(e), o = Go(e); o && UO(o) && y2(o).position === "static"; )
    o = Go(o);
  return o && (i2(o) === "html" || i2(o) === "body" && y2(o).position === "static") ? n : o || GO(e) || n;
}
function Yn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function b0(e, n, o) {
  return D2(e, j0(n, o));
}
function YO(e, n, o) {
  var a = b0(e, n, o);
  return a > o ? o : a;
}
function p1() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function h1(e) {
  return Object.assign({}, p1(), e);
}
function v1(e, n) {
  return n.reduce(function(o, a) {
    return o[a] = e, o;
  }, {});
}
var XO = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, { placement: n.placement })) : e, h1(typeof e != "number" ? e : v1(e, E0));
};
function ZO(e) {
  var n, o = e.state, a = e.name, t = e.options, r = o.elements.arrow, d = o.modifiersData.popperOffsets, m = s2(o.placement), i = Yn(m), u = [Ve, Ye].indexOf(m) >= 0, v = u ? "height" : "width";
  if (!(!r || !d)) {
    var g = XO(t.padding, o), w = Gn(r), $ = i === "y" ? Se : Ve, h = i === "y" ? Ge : Ye, p = o.rects.reference[v] + o.rects.reference[i] - d[i] - o.rects.popper[v], b = d[i] - o.rects.reference[i], x = T0(r), L = x ? i === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, k = p / 2 - b / 2, T = g[$], E = L - w[v] - g[h], C = L / 2 - w[v] / 2 + k, y = b0(T, C, E), M = i;
    o.modifiersData[a] = (n = {}, n[M] = y, n.centerOffset = y - C, n);
  }
}
function JO(e) {
  var n = e.state, o = e.options, a = o.element, t = a === void 0 ? "[data-popper-arrow]" : a;
  t != null && (typeof t == "string" && (t = n.elements.popper.querySelector(t), !t) || !_1(n.elements.popper, t) || (n.elements.arrow = t));
}
var QO = { name: "arrow", enabled: !0, phase: "main", fn: ZO, effect: JO, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function i0(e) {
  return e.split("-")[1];
}
var ek = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nk(e) {
  var n = e.x, o = e.y, a = window, t = a.devicePixelRatio || 1;
  return { x: d0(n * t) / t || 0, y: d0(o * t) / t || 0 };
}
function Yo(e) {
  var n, o = e.popper, a = e.popperRect, t = e.placement, r = e.variation, d = e.offsets, m = e.position, i = e.gpuAcceleration, u = e.adaptive, v = e.roundOffsets, g = e.isFixed, w = d.x, $ = w === void 0 ? 0 : w, h = d.y, p = h === void 0 ? 0 : h, b = typeof v == "function" ? v({ x: $, y: p }) : { x: $, y: p };
  $ = b.x, p = b.y;
  var x = d.hasOwnProperty("x"), L = d.hasOwnProperty("y"), k = Ve, T = Se, E = window;
  if (u) {
    var C = T0(o), y = "clientHeight", M = "clientWidth";
    if (C === n2(o) && (C = E2(o), y2(C).position !== "static" && m === "absolute" && (y = "scrollHeight", M = "scrollWidth")), C = C, t === Se || (t === Ve || t === Ye) && r === S0) {
      T = Ge;
      var A = g && C === E && E.visualViewport ? E.visualViewport.height : C[y];
      p -= A - a.height, p *= i ? 1 : -1;
    }
    if (t === Ve || (t === Se || t === Ge) && r === S0) {
      k = Ye;
      var I = g && C === E && E.visualViewport ? E.visualViewport.width : C[M];
      $ -= I - a.width, $ *= i ? 1 : -1;
    }
  }
  var F = Object.assign({ position: m }, u && ek), Z = v === !0 ? nk({ x: $, y: p }) : { x: $, y: p };
  if ($ = Z.x, p = Z.y, i) {
    var q;
    return Object.assign({}, F, (q = {}, q[T] = L ? "0" : "", q[k] = x ? "0" : "", q.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + $ + "px, " + p + "px)" : "translate3d(" + $ + "px, " + p + "px, 0)", q));
  }
  return Object.assign({}, F, (n = {}, n[T] = L ? p + "px" : "", n[k] = x ? $ + "px" : "", n.transform = "", n));
}
function ok(e) {
  var n = e.state, o = e.options, a = o.gpuAcceleration, t = a === void 0 ? !0 : a, r = o.adaptive, d = r === void 0 ? !0 : r, m = o.roundOffsets, i = m === void 0 ? !0 : m, u = { placement: s2(n.placement), variation: i0(n.placement), popper: n.elements.popper, popperRect: n.rects.popper, gpuAcceleration: t, isFixed: n.options.strategy === "fixed" };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Yo(Object.assign({}, u, { offsets: n.modifiersData.popperOffsets, position: n.options.strategy, adaptive: d, roundOffsets: i })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Yo(Object.assign({}, u, { offsets: n.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var g1 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ok, data: {} }, P0 = { passive: !0 };
function ak(e) {
  var n = e.state, o = e.instance, a = e.options, t = a.scroll, r = t === void 0 ? !0 : t, d = a.resize, m = d === void 0 ? !0 : d, i = n2(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return r && u.forEach(function(v) {
    v.addEventListener("scroll", o.update, P0);
  }), m && i.addEventListener("resize", o.update, P0), function() {
    r && u.forEach(function(v) {
      v.removeEventListener("scroll", o.update, P0);
    }), m && i.removeEventListener("resize", o.update, P0);
  };
}
var w1 = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ak, data: {} }, tk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function N0(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return tk[n];
  });
}
var rk = { start: "end", end: "start" };
function Xo(e) {
  return e.replace(/start|end/g, function(n) {
    return rk[n];
  });
}
function Xn(e) {
  var n = n2(e), o = n.pageXOffset, a = n.pageYOffset;
  return { scrollLeft: o, scrollTop: a };
}
function Zn(e) {
  return s0(E2(e)).left + Xn(e).scrollLeft;
}
function ck(e) {
  var n = n2(e), o = E2(e), a = n.visualViewport, t = o.clientWidth, r = o.clientHeight, d = 0, m = 0;
  return a && (t = a.width, r = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = a.offsetLeft, m = a.offsetTop)), { width: t, height: r, x: d + Zn(e), y: m };
}
function lk(e) {
  var n, o = E2(e), a = Xn(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, r = D2(o.scrollWidth, o.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), d = D2(o.scrollHeight, o.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), m = -a.scrollLeft + Zn(e), i = -a.scrollTop;
  return y2(t || o).direction === "rtl" && (m += D2(o.clientWidth, t ? t.clientWidth : 0) - r), { width: r, height: d, x: m, y: i };
}
function Jn(e) {
  var n = y2(e), o = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + t + a);
}
function $1(e) {
  return ["html", "body", "#document"].indexOf(i2(e)) >= 0 ? e.ownerDocument.body : Ue(e) && Jn(e) ? e : $1(tn(e));
}
function y0(e, n) {
  var o;
  n === void 0 && (n = []);
  var a = $1(e), t = a === ((o = e.ownerDocument) == null ? void 0 : o.body), r = n2(a), d = t ? [r].concat(r.visualViewport || [], Jn(a) ? a : []) : a, m = n.concat(d);
  return t ? m : m.concat(y0(tn(d)));
}
function An(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function dk(e) {
  var n = s0(e);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Zo(e, n) {
  return n === u1 ? An(ck(e)) : l0(n) ? dk(n) : An(lk(E2(e)));
}
function sk(e) {
  var n = y0(tn(e)), o = ["absolute", "fixed"].indexOf(y2(e).position) >= 0, a = o && Ue(e) ? T0(e) : e;
  return l0(a) ? n.filter(function(t) {
    return l0(t) && _1(t, a) && i2(t) !== "body";
  }) : [];
}
function ik(e, n, o) {
  var a = n === "clippingParents" ? sk(e) : [].concat(n), t = [].concat(a, [o]), r = t[0], d = t.reduce(function(m, i) {
    var u = Zo(e, i);
    return m.top = D2(u.top, m.top), m.right = j0(u.right, m.right), m.bottom = j0(u.bottom, m.bottom), m.left = D2(u.left, m.left), m;
  }, Zo(e, r));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function b1(e) {
  var n = e.reference, o = e.element, a = e.placement, t = a ? s2(a) : null, r = a ? i0(a) : null, d = n.x + n.width / 2 - o.width / 2, m = n.y + n.height / 2 - o.height / 2, i;
  switch (t) {
    case Se:
      i = { x: d, y: n.y - o.height };
      break;
    case Ge:
      i = { x: d, y: n.y + n.height };
      break;
    case Ye:
      i = { x: n.x + n.width, y: m };
      break;
    case Ve:
      i = { x: n.x - o.width, y: m };
      break;
    default:
      i = { x: n.x, y: n.y };
  }
  var u = t ? Yn(t) : null;
  if (u != null) {
    var v = u === "y" ? "height" : "width";
    switch (r) {
      case c0:
        i[u] = i[u] - (n[v] / 2 - o[v] / 2);
        break;
      case S0:
        i[u] = i[u] + (n[v] / 2 - o[v] / 2);
        break;
    }
  }
  return i;
}
function V0(e, n) {
  n === void 0 && (n = {});
  var o = n, a = o.placement, t = a === void 0 ? e.placement : a, r = o.boundary, d = r === void 0 ? EO : r, m = o.rootBoundary, i = m === void 0 ? u1 : m, u = o.elementContext, v = u === void 0 ? g0 : u, g = o.altBoundary, w = g === void 0 ? !1 : g, $ = o.padding, h = $ === void 0 ? 0 : $, p = h1(typeof h != "number" ? h : v1(h, E0)), b = v === g0 ? TO : g0, x = e.rects.popper, L = e.elements[w ? b : v], k = ik(l0(L) ? L : L.contextElement || E2(e.elements.popper), d, i), T = s0(e.elements.reference), E = b1({ reference: T, element: x, strategy: "absolute", placement: t }), C = An(Object.assign({}, x, E)), y = v === g0 ? C : T, M = { top: k.top - y.top + p.top, bottom: y.bottom - k.bottom + p.bottom, left: k.left - y.left + p.left, right: y.right - k.right + p.right }, A = e.modifiersData.offset;
  if (v === g0 && A) {
    var I = A[t];
    Object.keys(M).forEach(function(F) {
      var Z = [Ye, Ge].indexOf(F) >= 0 ? 1 : -1, q = [Se, Ge].indexOf(F) >= 0 ? "y" : "x";
      M[F] += I[q] * Z;
    });
  }
  return M;
}
function mk(e, n) {
  n === void 0 && (n = {});
  var o = n, a = o.placement, t = o.boundary, r = o.rootBoundary, d = o.padding, m = o.flipVariations, i = o.allowedAutoPlacements, u = i === void 0 ? Kn : i, v = i0(a), g = v ? m ? Uo : Uo.filter(function(h) {
    return i0(h) === v;
  }) : E0, w = g.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  w.length === 0 && (w = g);
  var $ = w.reduce(function(h, p) {
    return h[p] = V0(e, { placement: p, boundary: t, rootBoundary: r, padding: d })[s2(p)], h;
  }, {});
  return Object.keys($).sort(function(h, p) {
    return $[h] - $[p];
  });
}
function uk(e) {
  if (s2(e) === Wn)
    return [];
  var n = N0(e);
  return [Xo(e), n, Xo(n)];
}
function fk(e) {
  var n = e.state, o = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = o.mainAxis, r = t === void 0 ? !0 : t, d = o.altAxis, m = d === void 0 ? !0 : d, i = o.fallbackPlacements, u = o.padding, v = o.boundary, g = o.rootBoundary, w = o.altBoundary, $ = o.flipVariations, h = $ === void 0 ? !0 : $, p = o.allowedAutoPlacements, b = n.options.placement, x = s2(b), L = x === b, k = i || (L || !h ? [N0(b)] : uk(b)), T = [b].concat(k).reduce(function(Be, me) {
      return Be.concat(s2(me) === Wn ? mk(n, { placement: me, boundary: v, rootBoundary: g, padding: u, flipVariations: h, allowedAutoPlacements: p }) : me);
    }, []), E = n.rects.reference, C = n.rects.popper, y = /* @__PURE__ */ new Map(), M = !0, A = T[0], I = 0; I < T.length; I++) {
      var F = T[I], Z = s2(F), q = i0(F) === c0, P = [Se, Ge].indexOf(Z) >= 0, R = P ? "width" : "height", G = V0(n, { placement: F, boundary: v, rootBoundary: g, altBoundary: w, padding: u }), ee = P ? q ? Ye : Ve : q ? Ge : Se;
      E[R] > C[R] && (ee = N0(ee));
      var te = N0(ee), ie = [];
      if (r && ie.push(G[Z] <= 0), m && ie.push(G[ee] <= 0, G[te] <= 0), ie.every(function(Be) {
        return Be;
      })) {
        A = F, M = !1;
        break;
      }
      y.set(F, ie);
    }
    if (M)
      for (var xe = h ? 3 : 1, Re = function(Be) {
        var me = T.find(function(Ee) {
          var De = y.get(Ee);
          if (De)
            return De.slice(0, Be).every(function(he) {
              return he;
            });
        });
        if (me)
          return A = me, "break";
      }, Me = xe; Me > 0; Me--) {
        var Ae = Re(Me);
        if (Ae === "break")
          break;
      }
    n.placement !== A && (n.modifiersData[a]._skip = !0, n.placement = A, n.reset = !0);
  }
}
var _k = { name: "flip", enabled: !0, phase: "main", fn: fk, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Jo(e, n, o) {
  return o === void 0 && (o = { x: 0, y: 0 }), { top: e.top - n.height - o.y, right: e.right - n.width + o.x, bottom: e.bottom - n.height + o.y, left: e.left - n.width - o.x };
}
function Qo(e) {
  return [Se, Ye, Ge, Ve].some(function(n) {
    return e[n] >= 0;
  });
}
function pk(e) {
  var n = e.state, o = e.name, a = n.rects.reference, t = n.rects.popper, r = n.modifiersData.preventOverflow, d = V0(n, { elementContext: "reference" }), m = V0(n, { altBoundary: !0 }), i = Jo(d, a), u = Jo(m, t, r), v = Qo(i), g = Qo(u);
  n.modifiersData[o] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: v, hasPopperEscaped: g }, n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": g });
}
var hk = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: pk };
function vk(e, n, o) {
  var a = s2(e), t = [Ve, Se].indexOf(a) >= 0 ? -1 : 1, r = typeof o == "function" ? o(Object.assign({}, n, { placement: e })) : o, d = r[0], m = r[1];
  return d = d || 0, m = (m || 0) * t, [Ve, Ye].indexOf(a) >= 0 ? { x: m, y: d } : { x: d, y: m };
}
function gk(e) {
  var n = e.state, o = e.options, a = e.name, t = o.offset, r = t === void 0 ? [0, 0] : t, d = Kn.reduce(function(v, g) {
    return v[g] = vk(g, n.rects, r), v;
  }, {}), m = d[n.placement], i = m.x, u = m.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += i, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = d;
}
var wk = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: gk };
function $k(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = b1({ reference: n.rects.reference, element: n.rects.popper, strategy: "absolute", placement: n.placement });
}
var y1 = { name: "popperOffsets", enabled: !0, phase: "read", fn: $k, data: {} };
function bk(e) {
  return e === "x" ? "y" : "x";
}
function yk(e) {
  var n = e.state, o = e.options, a = e.name, t = o.mainAxis, r = t === void 0 ? !0 : t, d = o.altAxis, m = d === void 0 ? !1 : d, i = o.boundary, u = o.rootBoundary, v = o.altBoundary, g = o.padding, w = o.tether, $ = w === void 0 ? !0 : w, h = o.tetherOffset, p = h === void 0 ? 0 : h, b = V0(n, { boundary: i, rootBoundary: u, padding: g, altBoundary: v }), x = s2(n.placement), L = i0(n.placement), k = !L, T = Yn(x), E = bk(T), C = n.modifiersData.popperOffsets, y = n.rects.reference, M = n.rects.popper, A = typeof p == "function" ? p(Object.assign({}, n.rects, { placement: n.placement })) : p, I = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), F = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, Z = { x: 0, y: 0 };
  if (C) {
    if (r) {
      var q, P = T === "y" ? Se : Ve, R = T === "y" ? Ge : Ye, G = T === "y" ? "height" : "width", ee = C[T], te = ee + b[P], ie = ee - b[R], xe = $ ? -M[G] / 2 : 0, Re = L === c0 ? y[G] : M[G], Me = L === c0 ? -M[G] : -y[G], Ae = n.elements.arrow, Be = $ && Ae ? Gn(Ae) : { width: 0, height: 0 }, me = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : p1(), Ee = me[P], De = me[R], he = b0(0, y[G], Be[G]), o2 = k ? y[G] / 2 - xe - he - Ee - I.mainAxis : Re - he - Ee - I.mainAxis, a2 = k ? -y[G] / 2 + xe + he + De + I.mainAxis : Me + he + De + I.mainAxis, t2 = n.elements.arrow && T0(n.elements.arrow), Te = t2 ? T === "y" ? t2.clientTop || 0 : t2.clientLeft || 0 : 0, _2 = (q = F == null ? void 0 : F[T]) != null ? q : 0, T2 = ee + o2 - _2 - Te, x2 = ee + a2 - _2, r2 = b0($ ? j0(te, T2) : te, ee, $ ? D2(ie, x2) : ie);
      C[T] = r2, Z[T] = r2 - ee;
    }
    if (m) {
      var Xe, p2 = T === "x" ? Se : Ve, O2 = T === "x" ? Ge : Ye, He = C[E], Ze = E === "y" ? "height" : "width", M2 = He + b[p2], h2 = He - b[O2], H = [Se, Ve].indexOf(x) !== -1, J = (Xe = F == null ? void 0 : F[E]) != null ? Xe : 0, $e = H ? M2 : He - y[Ze] - M[Ze] - J + I.altAxis, ve = H ? He + y[Ze] + M[Ze] - J - I.altAxis : h2, v2 = $ && H ? YO($e, He, ve) : b0($ ? $e : M2, He, $ ? ve : h2);
      C[E] = v2, Z[E] = v2 - He;
    }
    n.modifiersData[a] = Z;
  }
}
var zk = { name: "preventOverflow", enabled: !0, phase: "main", fn: yk, requiresIfExists: ["offset"] };
function Ck(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function xk(e) {
  return e === n2(e) || !Ue(e) ? Xn(e) : Ck(e);
}
function Mk(e) {
  var n = e.getBoundingClientRect(), o = d0(n.width) / e.offsetWidth || 1, a = d0(n.height) / e.offsetHeight || 1;
  return o !== 1 || a !== 1;
}
function Hk(e, n, o) {
  o === void 0 && (o = !1);
  var a = Ue(n), t = Ue(n) && Mk(n), r = E2(n), d = s0(e, t), m = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (a || !a && !o) && ((i2(n) !== "body" || Jn(r)) && (m = xk(n)), Ue(n) ? (i = s0(n, !0), i.x += n.clientLeft, i.y += n.clientTop) : r && (i.x = Zn(r))), { x: d.left + m.scrollLeft - i.x, y: d.top + m.scrollTop - i.y, width: d.width, height: d.height };
}
function Sk(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(r) {
    n.set(r.name, r);
  });
  function t(r) {
    o.add(r.name);
    var d = [].concat(r.requires || [], r.requiresIfExists || []);
    d.forEach(function(m) {
      if (!o.has(m)) {
        var i = n.get(m);
        i && t(i);
      }
    }), a.push(r);
  }
  return e.forEach(function(r) {
    o.has(r.name) || t(r);
  }), a;
}
function Vk(e) {
  var n = Sk(e);
  return jO.reduce(function(o, a) {
    return o.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Lk(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Ak(e) {
  var n = e.reduce(function(o, a) {
    var t = o[a.name];
    return o[a.name] = t ? Object.assign({}, t, a, { options: Object.assign({}, t.options, a.options), data: Object.assign({}, t.data, a.data) }) : a, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var ea = { placement: "bottom", modifiers: [], strategy: "absolute" };
function na() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Qn(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, a = o === void 0 ? [] : o, t = n.defaultOptions, r = t === void 0 ? ea : t;
  return function(d, m, i) {
    i === void 0 && (i = r);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ea, r), modifiersData: {}, elements: { reference: d, popper: m }, attributes: {}, styles: {} }, v = [], g = !1, w = { state: u, setOptions: function(p) {
      var b = typeof p == "function" ? p(u.options) : p;
      h(), u.options = Object.assign({}, r, u.options, b), u.scrollParents = { reference: l0(d) ? y0(d) : d.contextElement ? y0(d.contextElement) : [], popper: y0(m) };
      var x = Vk(Ak([].concat(a, u.options.modifiers)));
      return u.orderedModifiers = x.filter(function(L) {
        return L.enabled;
      }), $(), w.update();
    }, forceUpdate: function() {
      if (!g) {
        var p = u.elements, b = p.reference, x = p.popper;
        if (na(b, x)) {
          u.rects = { reference: Hk(b, T0(x), u.options.strategy === "fixed"), popper: Gn(x) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var L = 0; L < u.orderedModifiers.length; L++) {
            if (u.reset === !0) {
              u.reset = !1, L = -1;
              continue;
            }
            var k = u.orderedModifiers[L], T = k.fn, E = k.options, C = E === void 0 ? {} : E, y = k.name;
            typeof T == "function" && (u = T({ state: u, options: C, name: y, instance: w }) || u);
          }
        }
      }
    }, update: Lk(function() {
      return new Promise(function(p) {
        w.forceUpdate(), p(u);
      });
    }), destroy: function() {
      h(), g = !0;
    } };
    if (!na(d, m))
      return w;
    w.setOptions(i).then(function(p) {
      !g && i.onFirstUpdate && i.onFirstUpdate(p);
    });
    function $() {
      u.orderedModifiers.forEach(function(p) {
        var b = p.name, x = p.options, L = x === void 0 ? {} : x, k = p.effect;
        if (typeof k == "function") {
          var T = k({ state: u, name: b, instance: w, options: L }), E = function() {
          };
          v.push(T || E);
        }
      });
    }
    function h() {
      v.forEach(function(p) {
        return p();
      }), v = [];
    }
    return w;
  };
}
Qn();
var Bk = [w1, y1, g1, f1];
Qn({ defaultModifiers: Bk });
var Ek = [w1, y1, g1, f1, wk, _k, zk, QO, hk], Tk = Qn({ defaultModifiers: Ek });
const z1 = (e) => {
  const n = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const t = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || t ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 || a === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); )
    n.push(o.currentNode);
  return n;
}, oa = (e, n) => {
  for (const o of e)
    if (!Ok(o, n))
      return o;
}, Ok = (e, n) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, kk = (e) => {
  const n = z1(e), o = oa(n, e), a = oa(n.reverse(), e);
  return [o, a];
}, Pk = (e) => e instanceof HTMLInputElement && "select" in e, V2 = (e, n) => {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && Pk(e) && n && e.select();
  }
};
function aa(e, n) {
  const o = [...e], a = e.indexOf(n);
  return a !== -1 && o.splice(a, 1), o;
}
const Ik = () => {
  let e = [];
  return {
    push: (a) => {
      const t = e[0];
      t && a !== t && t.pause(), e = aa(e, a), e.unshift(a);
    },
    remove: (a) => {
      var t, r;
      e = aa(e, a), (r = (t = e[0]) == null ? void 0 : t.resume) == null || r.call(t);
    }
  };
}, Nk = (e, n = !1) => {
  const o = document.activeElement;
  for (const a of e)
    if (V2(a, n), document.activeElement !== o)
      return;
}, ta = Ik(), pn = "focus-trap.focus-after-trapped", hn = "focus-trap.focus-after-released", ra = {
  cancelable: !0,
  bubbles: !1
}, ca = "focusAfterTrapped", la = "focusAfterReleased", C1 = Symbol("elFocusTrap"), Fk = ne({
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
    ca,
    la,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const o = V();
    let a, t;
    FT(($) => {
      e.trapped && !r.paused && n("release-requested", $);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, d = ($) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const { key: h, altKey: p, ctrlKey: b, metaKey: x, currentTarget: L, shiftKey: k } = $, { loop: T } = e, E = h === d2.tab && !p && !b && !x, C = document.activeElement;
      if (E && C) {
        const y = L, [M, A] = kk(y);
        M && A ? !k && C === A ? ($.preventDefault(), T && V2(M, !0), n("focusout-prevented")) : k && [M, y].includes(C) && ($.preventDefault(), T && V2(A, !0), n("focusout-prevented")) : C === y && ($.preventDefault(), n("focusout-prevented"));
      }
    };
    Le(C1, {
      focusTrapRef: o,
      onKeydown: d
    }), W(() => e.focusTrapEl, ($) => {
      $ && (o.value = $);
    }, { immediate: !0 }), W([o], ([$], [h]) => {
      $ && ($.addEventListener("keydown", d), $.addEventListener("focusin", u), $.addEventListener("focusout", v)), h && (h.removeEventListener("keydown", d), h.removeEventListener("focusin", u), h.removeEventListener("focusout", v));
    });
    const m = ($) => {
      n(ca, $);
    }, i = ($) => n(la, $), u = ($) => {
      const h = _(o);
      if (!h)
        return;
      const p = $.target, b = p && h.contains(p);
      b && n("focusin", $), !r.paused && e.trapped && (b ? t = p : V2(t, !0));
    }, v = ($) => {
      const h = _(o);
      if (!(r.paused || !h))
        if (e.trapped) {
          const p = $.relatedTarget;
          !X0(p) && !h.contains(p) && setTimeout(() => {
            !r.paused && e.trapped && V2(t, !0);
          }, 0);
        } else {
          const p = $.target;
          p && h.contains(p) || n("focusout", $);
        }
    };
    async function g() {
      await ce();
      const $ = _(o);
      if ($) {
        ta.push(r);
        const h = document.activeElement;
        if (a = h, !$.contains(h)) {
          const b = new Event(pn, ra);
          $.addEventListener(pn, m), $.dispatchEvent(b), b.defaultPrevented || ce(() => {
            let x = e.focusStartEl;
            Ke(x) || (V2(x), document.activeElement !== x && (x = "first")), x === "first" && Nk(z1($), !0), (document.activeElement === h || x === "container") && V2($);
          });
        }
      }
    }
    function w() {
      const $ = _(o);
      if ($) {
        $.removeEventListener(pn, m);
        const h = new Event(hn, ra);
        $.addEventListener(hn, i), $.dispatchEvent(h), h.defaultPrevented || V2(a != null ? a : document.body, !0), $.removeEventListener(hn, m), ta.remove(r);
      }
    }
    return we(() => {
      e.trapped && g(), W(() => e.trapped, ($) => {
        $ ? g() : w();
      });
    }), m2(() => {
      e.trapped && w();
    }), {
      onKeydown: d
    };
  }
});
function Rk(e, n, o, a, t, r) {
  return X(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var x1 = /* @__PURE__ */ ae(Fk, [["render", Rk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Dk = ["fixed", "absolute"], qk = oe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Y(Array),
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
    values: Kn,
    default: "bottom"
  },
  popperOptions: {
    type: Y(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Dk,
    default: "absolute"
  }
}), M1 = oe({
  ...qk,
  id: String,
  style: { type: Y([String, Array, Object]) },
  className: { type: Y([String, Array, Object]) },
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
    type: Y([String, Array, Object])
  },
  popperStyle: {
    type: Y([String, Array, Object])
  },
  referenceEl: {
    type: Y(Object)
  },
  triggerTargetEl: {
    type: Y(Object)
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
}), jk = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], da = (e, n) => {
  const { placement: o, strategy: a, popperOptions: t } = e, r = {
    placement: o,
    strategy: a,
    ...t,
    modifiers: Kk(e)
  };
  return Uk(r, n), Gk(r, t == null ? void 0 : t.modifiers), r;
}, Wk = (e) => {
  if (!!ue)
    return R2(e);
};
function Kk(e) {
  const { offset: n, gpuAcceleration: o, fallbackPlacements: a } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, n != null ? n : 12]
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
        fallbackPlacements: a != null ? a : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: o,
        adaptive: o
      }
    }
  ];
}
function Uk(e, { arrowEl: n, arrowOffset: o }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: n,
      padding: o != null ? o : 5
    }
  });
}
function Gk(e, n) {
  n && (e.modifiers = [...e.modifiers, ...n != null ? n : []]);
}
const Yk = {
  name: "ElPopperContent"
}, Xk = /* @__PURE__ */ ne({
  ...Yk,
  props: M1,
  emits: jk,
  setup(e, { expose: n, emit: o }) {
    const a = e, { popperInstanceRef: t, contentRef: r, triggerRef: d, role: m } = re(Dn, void 0), i = re(H0, void 0), { nextZIndex: u } = jn(), v = le("popper"), g = V(), w = V("first"), $ = V(), h = V();
    Le(Qa, {
      arrowRef: $,
      arrowOffset: h
    }), i && (i.addInputId || i.removeInputId) && Le(H0, {
      ...i,
      addInputId: l2,
      removeInputId: l2
    });
    const p = V(a.zIndex || u()), b = V(!1);
    let x;
    const L = S(() => Wk(a.referenceEl) || _(d)), k = S(() => [{ zIndex: _(p) }, a.popperStyle]), T = S(() => [
      v.b(),
      v.is("pure", a.pure),
      v.is(a.effect),
      a.popperClass
    ]), E = S(() => m && m.value === "dialog" ? "false" : void 0), C = ({ referenceEl: P, popperContentEl: R, arrowEl: G }) => {
      const ee = da(a, {
        arrowEl: G,
        arrowOffset: _(h)
      });
      return Tk(P, R, ee);
    }, y = (P = !0) => {
      var R;
      (R = _(t)) == null || R.update(), P && (p.value = a.zIndex || u());
    }, M = () => {
      var P, R;
      const G = { name: "eventListeners", enabled: a.visible };
      (R = (P = _(t)) == null ? void 0 : P.setOptions) == null || R.call(P, (ee) => ({
        ...ee,
        modifiers: [...ee.modifiers || [], G]
      })), y(!1), a.visible && a.focusOnShow ? b.value = !0 : a.visible === !1 && (b.value = !1);
    }, A = () => {
      o("focus");
    }, I = () => {
      w.value = "first", o("blur");
    }, F = (P) => {
      var R;
      a.visible && !b.value && (P.relatedTarget && ((R = P.relatedTarget) == null || R.focus()), P.target && (w.value = P.target), b.value = !0);
    }, Z = () => {
      a.trapping || (b.value = !1);
    }, q = () => {
      b.value = !1, o("close");
    };
    return we(() => {
      let P;
      W(L, (R) => {
        var G;
        P == null || P();
        const ee = _(t);
        if ((G = ee == null ? void 0 : ee.destroy) == null || G.call(ee), R) {
          const te = _(g);
          r.value = te, t.value = C({
            referenceEl: R,
            popperContentEl: te,
            arrowEl: _($)
          }), P = W(() => R.getBoundingClientRect(), () => y(), {
            immediate: !0
          });
        } else
          t.value = void 0;
      }, {
        immediate: !0
      }), W(() => a.triggerTargetEl, (R, G) => {
        x == null || x(), x = void 0;
        const ee = _(R || g.value), te = _(G || g.value);
        if (K2(ee)) {
          const { ariaLabel: ie, id: xe } = W0(a);
          x = W([m, ie, E, xe], (Re) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((Me, Ae) => {
              X0(Re[Ae]) ? ee.removeAttribute(Me) : ee.setAttribute(Me, Re[Ae]);
            });
          }, { immediate: !0 });
        }
        K2(te) && ["role", "aria-label", "aria-modal", "id"].forEach((ie) => {
          te.removeAttribute(ie);
        });
      }, { immediate: !0 }), W(() => a.visible, M, { immediate: !0 }), W(() => da(a, {
        arrowEl: _($),
        arrowOffset: _(h)
      }), (R) => {
        var G;
        return (G = t.value) == null ? void 0 : G.setOptions(R);
      });
    }), m2(() => {
      x == null || x(), x = void 0;
    }), n({
      popperContentRef: g,
      popperInstanceRef: t,
      updatePopper: y,
      contentStyle: k
    }), (P, R) => (l(), s("div", {
      ref_key: "popperContentRef",
      ref: g,
      style: fe(_(k)),
      class: O(_(T)),
      tabindex: "-1",
      onMouseenter: R[0] || (R[0] = (G) => P.$emit("mouseenter", G)),
      onMouseleave: R[1] || (R[1] = (G) => P.$emit("mouseleave", G))
    }, [
      D(_(x1), {
        trapped: b.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": g.value,
        "focus-start-el": w.value,
        onFocusAfterTrapped: A,
        onFocusAfterReleased: I,
        onFocusin: F,
        onFocusoutPrevented: Z,
        onReleaseRequested: q
      }, {
        default: N(() => [
          X(P.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var Zk = /* @__PURE__ */ ae(Xk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const Jk = e2(xO), Qk = le("tooltip"), je = oe({
  ...qT,
  ...M1,
  appendTo: {
    type: Y([String, Object]),
    default: t1
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
    type: Y(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Qk.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), L0 = oe({
  ...m1,
  disabled: Boolean,
  trigger: {
    type: Y([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Y(Array),
    default: () => [d2.enter, d2.space]
  }
}), eP = oe({
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
}), eo = Symbol("elTooltip"), nP = ne({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: Zk
  },
  inheritAttrs: !1,
  props: je,
  setup(e) {
    const n = V(null), o = V(!1), a = V(!1), t = V(!1), r = V(!1), {
      controlled: d,
      id: m,
      open: i,
      trigger: u,
      onClose: v,
      onOpen: g,
      onShow: w,
      onHide: $,
      onBeforeShow: h,
      onBeforeHide: p
    } = re(eo, void 0), b = S(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    m2(() => {
      r.value = !0;
    });
    const x = S(() => _(b) ? !0 : _(i)), L = S(() => e.disabled ? !1 : _(i)), k = S(() => {
      var P;
      return (P = e.style) != null ? P : {};
    }), T = S(() => !_(i)), E = () => {
      $();
    }, C = () => {
      if (_(d))
        return !0;
    }, y = w2(C, () => {
      e.enterable && _(u) === "hover" && g();
    }), M = w2(C, () => {
      _(u) === "hover" && v();
    }), A = () => {
      var P, R;
      (R = (P = n.value) == null ? void 0 : P.updatePopper) == null || R.call(P), h == null || h();
    }, I = () => {
      p == null || p();
    }, F = () => {
      w(), q = WE(S(() => {
        var P;
        return (P = n.value) == null ? void 0 : P.popperContentRef;
      }), () => {
        if (_(d))
          return;
        _(u) !== "hover" && v();
      });
    }, Z = () => {
      e.virtualTriggering || v();
    };
    let q;
    return W(() => _(i), (P) => {
      P || q == null || q();
    }, {
      flush: "post"
    }), {
      ariaHidden: T,
      entering: a,
      leaving: t,
      id: m,
      intermediateOpen: o,
      contentStyle: k,
      contentRef: n,
      destroyed: r,
      shouldRender: x,
      shouldShow: L,
      onClose: v,
      open: i,
      onAfterShow: F,
      onBeforeEnter: A,
      onBeforeLeave: I,
      onContentEnter: y,
      onContentLeave: M,
      onTransitionLeave: E,
      onBlur: Z
    };
  }
});
function oP(e, n, o, a, t, r) {
  const d = pe("el-popper-content");
  return l(), K(wa, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    D(U2, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: N(() => [
        e.shouldRender ? Ne((l(), K(d, F2({
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
          default: N(() => [
            j(" Workaround bug #6378 "),
            e.destroyed ? j("v-if", !0) : X(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [u2, e.shouldShow]
        ]) : j("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var aP = /* @__PURE__ */ ae(nP, [["render", oP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const tP = (e, n) => JE(e) ? e.includes(n) : e === n, J2 = (e, n, o) => (a) => {
  tP(_(e), n) && o(a);
}, rP = ne({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: BO
  },
  props: L0,
  setup(e) {
    const n = le("tooltip"), { controlled: o, id: a, open: t, onOpen: r, onClose: d, onToggle: m } = re(eo, void 0), i = V(null), u = () => {
      if (_(o) || e.disabled)
        return !0;
    }, v = q2(e, "trigger"), g = w2(u, J2(v, "hover", r)), w = w2(u, J2(v, "hover", d)), $ = w2(u, J2(v, "click", (L) => {
      L.button === 0 && m(L);
    })), h = w2(u, J2(v, "focus", r)), p = w2(u, J2(v, "focus", d)), b = w2(u, J2(v, "contextmenu", (L) => {
      L.preventDefault(), m(L);
    })), x = w2(u, (L) => {
      const { code: k } = L;
      e.triggerKeys.includes(k) && (L.preventDefault(), m(L));
    });
    return {
      onBlur: p,
      onContextMenu: b,
      onFocus: h,
      onMouseenter: g,
      onMouseleave: w,
      onClick: $,
      onKeydown: x,
      open: t,
      id: a,
      triggerRef: i,
      ns: n
    };
  }
});
function cP(e, n, o, a, t, r) {
  const d = pe("el-popper-trigger");
  return l(), K(d, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: O(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: N(() => [
      X(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var lP = /* @__PURE__ */ ae(rP, [["render", cP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: dP, useModelToggle: sP, useModelToggleEmits: iP } = IT("visible"), mP = ne({
  name: "ElTooltip",
  components: {
    ElPopper: Jk,
    ElPopperArrow: SO,
    ElTooltipContent: aP,
    ElTooltipTrigger: lP
  },
  props: {
    ...d1,
    ...dP,
    ...je,
    ...L0,
    ...s1,
    ...eP
  },
  emits: [
    ...iP,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: n }) {
    DT();
    const o = S(() => (Ln(e.openDelay) || ye("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), a = S(() => (Ln(e.visibleArrow) || ye("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), R0(e.visibleArrow) ? e.visibleArrow : e.showArrow)), t = q0(), r = V(null), d = V(null), m = () => {
      var b;
      const x = _(r);
      x && ((b = x.popperInstanceRef) == null || b.update());
    }, i = V(!1), u = V(void 0), { show: v, hide: g } = sP({
      indicator: i,
      toggleReason: u
    }), { onOpen: w, onClose: $ } = jT({
      showAfter: o,
      hideAfter: q2(e, "hideAfter"),
      open: v,
      close: g
    }), h = S(() => R0(e.visible));
    return Le(eo, {
      controlled: h,
      id: t,
      open: _a(i),
      trigger: q2(e, "trigger"),
      onOpen: (b) => {
        w(b);
      },
      onClose: (b) => {
        $(b);
      },
      onToggle: (b) => {
        _(i) ? $(b) : w(b);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: m
    }), W(() => e.disabled, (b) => {
      b && i.value && (i.value = !1);
    }), {
      compatShowAfter: o,
      compatShowArrow: a,
      popperRef: r,
      contentRef: d,
      open: i,
      hide: g,
      isFocusInsideContent: () => {
        var b, x;
        const L = (x = (b = d.value) == null ? void 0 : b.contentRef) == null ? void 0 : x.popperContentRef;
        return L && L.contains(document.activeElement);
      },
      updatePopper: m,
      onOpen: w,
      onClose: $
    };
  }
}), uP = ["innerHTML"], fP = { key: 1 };
function _P(e, n, o, a, t, r) {
  const d = pe("el-tooltip-trigger"), m = pe("el-popper-arrow"), i = pe("el-tooltip-content"), u = pe("el-popper");
  return l(), K(u, {
    ref: "popperRef",
    role: e.role
  }, {
    default: N(() => [
      D(d, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: N(() => [
          e.$slots.default ? X(e.$slots, "default", { key: 0 }) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      D(i, {
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
        default: N(() => [
          X(e.$slots, "content", {}, () => [
            e.rawContent ? (l(), s("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, uP)) : (l(), s("span", fP, se(e.content), 1))
          ]),
          e.compatShowArrow ? (l(), K(m, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : j("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var pP = /* @__PURE__ */ ae(mP, [["render", _P], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const H1 = e2(pP), hP = oe({
  size: {
    type: [Number, String],
    values: en,
    default: "",
    validator: (e) => Ce(e)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: r0
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: Y(String),
    default: "cover"
  }
}), vP = {
  error: (e) => e instanceof Event
}, gP = ["src", "alt", "srcset"], wP = {
  name: "ElAvatar"
}, $P = /* @__PURE__ */ ne({
  ...wP,
  props: hP,
  emits: vP,
  setup(e, { emit: n }) {
    const o = e, a = le("avatar"), t = V(!1), r = S(() => {
      const { size: u, icon: v, shape: g } = o, w = [a.b()];
      return Ke(u) && w.push(a.m(u)), v && w.push(a.m("icon")), g && w.push(a.m(g)), w;
    }), d = S(() => {
      const { size: u } = o;
      return Ce(u) ? a.cssVarBlock({
        size: t0(u) || ""
      }) : void 0;
    }), m = S(() => ({
      objectFit: o.fit
    }));
    W(() => o.src, () => t.value = !1);
    function i(u) {
      t.value = !0, n("error", u);
    }
    return (u, v) => (l(), s("span", {
      class: O(_(r)),
      style: fe(_(d))
    }, [
      (u.src || u.srcSet) && !t.value ? (l(), s("img", {
        key: 0,
        src: u.src,
        alt: u.alt,
        srcset: u.srcSet,
        style: fe(_(m)),
        onError: i
      }, null, 44, gP)) : u.icon ? (l(), K(_(_e), { key: 1 }, {
        default: N(() => [
          (l(), K(Ie(u.icon)))
        ]),
        _: 1
      })) : X(u.$slots, "default", { key: 2 })
    ], 6));
  }
});
var bP = /* @__PURE__ */ ae($P, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const yP = e2(bP), zP = oe({
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
}), CP = ["textContent"], xP = {
  name: "ElBadge"
}, MP = /* @__PURE__ */ ne({
  ...xP,
  props: zP,
  setup(e, { expose: n }) {
    const o = e, a = le("badge"), t = S(() => o.isDot ? "" : Ce(o.value) && Ce(o.max) ? o.max < o.value ? `${o.max}+` : `${o.value}` : `${o.value}`);
    return n({
      content: t
    }), (r, d) => (l(), s("div", {
      class: O(_(a).b())
    }, [
      X(r.$slots, "default"),
      D(U2, {
        name: `${_(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: N(() => [
          Ne(c("sup", {
            class: O([
              _(a).e("content"),
              _(a).em("content", r.type),
              _(a).is("fixed", !!r.$slots.default),
              _(a).is("dot", r.isDot)
            ]),
            textContent: se(_(t))
          }, null, 10, CP), [
            [u2, !r.hidden && (_(t) || r.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var HP = /* @__PURE__ */ ae(MP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const S1 = e2(HP), L2 = /* @__PURE__ */ new Map();
let sa;
ue && (document.addEventListener("mousedown", (e) => sa = e), document.addEventListener("mouseup", (e) => {
  for (const n of L2.values())
    for (const { documentHandler: o } of n)
      o(e, sa);
}));
function ia(e, n) {
  let o = [];
  return Array.isArray(n.arg) ? o = n.arg : K2(n.arg) && o.push(n.arg), function(a, t) {
    const r = n.instance.popperRef, d = a.target, m = t == null ? void 0 : t.target, i = !n || !n.instance, u = !d || !m, v = e.contains(d) || e.contains(m), g = e === d, w = o.length && o.some((h) => h == null ? void 0 : h.contains(d)) || o.length && o.includes(m), $ = r && (r.contains(d) || r.contains(m));
    i || u || v || g || w || $ || n.value(a, t);
  };
}
const SP = {
  beforeMount(e, n) {
    L2.has(e) || L2.set(e, []), L2.get(e).push({
      documentHandler: ia(e, n),
      bindingFn: n.value
    });
  },
  updated(e, n) {
    L2.has(e) || L2.set(e, []);
    const o = L2.get(e), a = o.findIndex((r) => r.bindingFn === n.oldValue), t = {
      documentHandler: ia(e, n),
      bindingFn: n.value
    };
    a >= 0 ? o.splice(a, 1, t) : o.push(t);
  },
  unmounted(e) {
    L2.delete(e);
  }
}, V1 = oe({
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
    values: en,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), VP = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, LP = {
  name: "ElTag"
}, AP = /* @__PURE__ */ ne({
  ...LP,
  props: V1,
  emits: VP,
  setup(e, { emit: n }) {
    const o = e, a = qn(), t = le("tag"), r = S(() => {
      const { type: i, hit: u, effect: v, closable: g, round: w } = o;
      return [
        t.b(),
        t.is("closable", g),
        t.m(i),
        t.m(a.value),
        t.m(v),
        t.is("hit", u),
        t.is("round", w)
      ];
    }), d = (i) => {
      n("close", i);
    }, m = (i) => {
      n("click", i);
    };
    return (i, u) => i.disableTransitions ? (l(), s("span", {
      key: 0,
      class: O(_(r)),
      style: fe({ backgroundColor: i.color }),
      onClick: m
    }, [
      c("span", {
        class: O(_(t).e("content"))
      }, [
        X(i.$slots, "default")
      ], 2),
      i.closable ? (l(), K(_(_e), {
        key: 0,
        class: O(_(t).e("close")),
        onClick: ke(d, ["stop"])
      }, {
        default: N(() => [
          D(_(o0))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (l(), K(U2, {
      key: 1,
      name: `${_(t).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: N(() => [
        c("span", {
          class: O(_(r)),
          style: fe({ backgroundColor: i.color }),
          onClick: m
        }, [
          c("span", {
            class: O(_(t).e("content"))
          }, [
            X(i.$slots, "default")
          ], 2),
          i.closable ? (l(), K(_(_e), {
            key: 0,
            class: O(_(t).e("close")),
            onClick: ke(d, ["stop"])
          }, {
            default: N(() => [
              D(_(o0))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var BP = /* @__PURE__ */ ae(AP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const L1 = e2(BP), Bn = {}, EP = oe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Y(Object)
  },
  size: n1,
  button: {
    type: Y(Object)
  },
  experimentalFeatures: {
    type: Y(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Y(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
ne({
  name: "ElConfigProvider",
  props: EP,
  setup(e, { slots: n }) {
    W(() => e.message, (a) => {
      Object.assign(Bn, a != null ? a : {});
    }, { immediate: !0, deep: !0 });
    const o = yT(e);
    return () => X(n, "default", { config: o == null ? void 0 : o.value });
  }
});
const TP = oe({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: Y([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Y([String, Number])
  }
}), OP = {
  click: (e) => e instanceof MouseEvent
};
var kP = ne({
  name: "ElOverlay",
  props: TP,
  emits: OP,
  setup(e, { slots: n, emit: o }) {
    const a = le("overlay"), t = (i) => {
      o("click", i);
    }, { onClick: r, onMousedown: d, onMouseup: m } = o1(e.customMaskEvent ? void 0 : t);
    return () => e.mask ? D("div", {
      class: [a.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: r,
      onMousedown: d,
      onMouseup: m
    }, [X(n, "default")], I0.STYLE | I0.CLASS | I0.PROPS, ["onClick", "onMouseup", "onMousedown"]) : j1("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [X(n, "default")]);
  }
});
const PP = kP, A1 = oe({
  center: {
    type: Boolean,
    default: !1
  },
  closeIcon: {
    type: r0,
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
}), IP = {
  close: () => !0
}, NP = ["aria-label"], FP = ["id"], RP = { name: "ElDialogContent" }, DP = /* @__PURE__ */ ne({
  ...RP,
  props: A1,
  emits: IP,
  setup(e) {
    const n = e, { t: o } = an(), { Close: a } = iT, { dialogRef: t, headerRef: r, bodyId: d, ns: m, style: i } = re(Za), { focusTrapRef: u } = re(C1), v = _T(u, t), g = S(() => n.draggable);
    return MT(t, r, g), (w, $) => (l(), s("div", {
      ref: _(v),
      class: O([
        _(m).b(),
        _(m).is("fullscreen", w.fullscreen),
        _(m).is("draggable", _(g)),
        { [_(m).m("center")]: w.center },
        w.customClass
      ]),
      style: fe(_(i)),
      tabindex: "-1",
      onClick: $[1] || ($[1] = ke(() => {
      }, ["stop"]))
    }, [
      c("header", {
        ref_key: "headerRef",
        ref: r,
        class: O(_(m).e("header"))
      }, [
        X(w.$slots, "header", {}, () => [
          c("span", {
            role: "heading",
            class: O(_(m).e("title"))
          }, se(w.title), 3)
        ]),
        w.showClose ? (l(), s("button", {
          key: 0,
          "aria-label": _(o)("el.dialog.close"),
          class: O(_(m).e("headerbtn")),
          type: "button",
          onClick: $[0] || ($[0] = (h) => w.$emit("close"))
        }, [
          D(_(_e), {
            class: O(_(m).e("close"))
          }, {
            default: N(() => [
              (l(), K(Ie(w.closeIcon || _(a))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, NP)) : j("v-if", !0)
      ], 2),
      c("div", {
        id: _(d),
        class: O(_(m).e("body"))
      }, [
        X(w.$slots, "default")
      ], 10, FP),
      w.$slots.footer ? (l(), s("footer", {
        key: 0,
        class: O(_(m).e("footer"))
      }, [
        X(w.$slots, "footer")
      ], 2)) : j("v-if", !0)
    ], 6));
  }
});
var qP = /* @__PURE__ */ ae(DP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const jP = oe({
  ...A1,
  appendToBody: {
    type: Boolean,
    default: !1
  },
  beforeClose: {
    type: Y(Function)
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
}), WP = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ze]: (e) => R0(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, KP = (e, n) => {
  const a = Fe().emit, { nextZIndex: t } = jn();
  let r = "";
  const d = q0(), m = q0(), i = V(!1), u = V(!1), v = V(!1), g = V(e.zIndex || t());
  let w, $;
  const h = S(() => Ce(e.width) ? `${e.width}px` : e.width), p = p0("namespace", c1), b = S(() => {
    const q = {}, P = `--${p.value}-dialog`;
    return e.fullscreen || (e.top && (q[`${P}-margin-top`] = e.top), e.width && (q[`${P}-width`] = h.value)), q;
  });
  function x() {
    a("opened");
  }
  function L() {
    a("closed"), a(ze, !1), e.destroyOnClose && (v.value = !1);
  }
  function k() {
    a("close");
  }
  function T() {
    $ == null || $(), w == null || w(), e.openDelay && e.openDelay > 0 ? { stop: w } = Hn(() => M(), e.openDelay) : M();
  }
  function E() {
    w == null || w(), $ == null || $(), e.closeDelay && e.closeDelay > 0 ? { stop: $ } = Hn(() => A(), e.closeDelay) : A();
  }
  function C() {
    function q(P) {
      P || (u.value = !0, i.value = !1);
    }
    e.beforeClose ? e.beforeClose(q) : E();
  }
  function y() {
    e.closeOnClickModal && C();
  }
  function M() {
    !ue || (i.value = !0);
  }
  function A() {
    i.value = !1;
  }
  function I() {
    a("openAutoFocus");
  }
  function F() {
    a("closeAutoFocus");
  }
  e.lockScroll && OT(i);
  function Z() {
    e.closeOnPressEscape && C();
  }
  return W(() => e.modelValue, (q) => {
    q ? (u.value = !1, T(), v.value = !0, a("open"), g.value = e.zIndex ? g.value++ : t(), ce(() => {
      n.value && (n.value.scrollTop = 0);
    })) : i.value && E();
  }), W(() => e.fullscreen, (q) => {
    !n.value || (q ? (r = n.value.style.transform, n.value.style.transform = "") : n.value.style.transform = r);
  }), we(() => {
    e.modelValue && (i.value = !0, v.value = !0, T());
  }), {
    afterEnter: x,
    afterLeave: L,
    beforeLeave: k,
    handleClose: C,
    onModalClick: y,
    close: E,
    doClose: A,
    onOpenAutoFocus: I,
    onCloseAutoFocus: F,
    onCloseRequested: Z,
    titleId: d,
    bodyId: m,
    closed: u,
    style: b,
    rendered: v,
    visible: i,
    zIndex: g
  };
}, UP = ["aria-label", "aria-labelledby", "aria-describedby"], GP = {
  name: "ElDialog"
}, YP = /* @__PURE__ */ ne({
  ...GP,
  props: jP,
  emits: WP,
  setup(e, { expose: n }) {
    const o = e, a = A0();
    xT({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, S(() => !!a.title));
    const t = le("dialog"), r = V(), d = V(), m = V(), {
      visible: i,
      titleId: u,
      bodyId: v,
      style: g,
      rendered: w,
      zIndex: $,
      afterEnter: h,
      afterLeave: p,
      beforeLeave: b,
      handleClose: x,
      onModalClick: L,
      onOpenAutoFocus: k,
      onCloseAutoFocus: T,
      onCloseRequested: E
    } = KP(o, r);
    Le(Za, {
      dialogRef: r,
      headerRef: d,
      bodyId: v,
      ns: t,
      rendered: w,
      style: g
    });
    const C = o1(L), y = S(() => o.draggable && !o.fullscreen);
    return n({
      visible: i,
      dialogContentRef: m
    }), (M, A) => (l(), K(wa, {
      to: "body",
      disabled: !M.appendToBody
    }, [
      D(U2, {
        name: "dialog-fade",
        onAfterEnter: _(h),
        onAfterLeave: _(p),
        onBeforeLeave: _(b),
        persisted: ""
      }, {
        default: N(() => [
          Ne(D(_(PP), {
            "custom-mask-event": "",
            mask: M.modal,
            "overlay-class": M.modalClass,
            "z-index": _($)
          }, {
            default: N(() => [
              c("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": M.title || void 0,
                "aria-labelledby": M.title ? void 0 : _(u),
                "aria-describedby": _(v),
                class: O(`${_(t).namespace.value}-overlay-dialog`),
                onClick: A[0] || (A[0] = (...I) => _(C).onClick && _(C).onClick(...I)),
                onMousedown: A[1] || (A[1] = (...I) => _(C).onMousedown && _(C).onMousedown(...I)),
                onMouseup: A[2] || (A[2] = (...I) => _(C).onMouseup && _(C).onMouseup(...I))
              }, [
                D(_(x1), {
                  loop: "",
                  trapped: _(i),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: _(k),
                  onFocusAfterReleased: _(T),
                  onReleaseRequested: _(E)
                }, {
                  default: N(() => [
                    _(w) ? (l(), K(qP, {
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: m,
                      "custom-class": M.customClass,
                      center: M.center,
                      "close-icon": M.closeIcon,
                      draggable: _(y),
                      fullscreen: M.fullscreen,
                      "show-close": M.showClose,
                      style: fe(_(g)),
                      title: M.title,
                      onClose: _(x)
                    }, $a({
                      header: N(() => [
                        M.$slots.title ? X(M.$slots, "title", { key: 1 }) : X(M.$slots, "header", {
                          key: 0,
                          close: _(x),
                          titleId: _(u),
                          titleClass: _(t).e("title")
                        })
                      ]),
                      default: N(() => [
                        X(M.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      M.$slots.footer ? {
                        name: "footer",
                        fn: N(() => [
                          X(M.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1032, ["custom-class", "center", "close-icon", "draggable", "fullscreen", "show-close", "style", "title", "onClose"])) : j("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onReleaseRequested"])
              ], 42, UP)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [u2, _(i)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var XP = /* @__PURE__ */ ae(YP, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ZP = e2(XP), JP = {
  inheritAttrs: !1
};
function QP(e, n, o, a, t, r) {
  return X(e.$slots, "default");
}
var eI = /* @__PURE__ */ ae(JP, [["render", QP], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const nI = {
  name: "ElCollectionItem",
  inheritAttrs: !1
};
function oI(e, n, o, a, t, r) {
  return X(e.$slots, "default");
}
var aI = /* @__PURE__ */ ae(nI, [["render", oI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const tI = "data-el-collection-item", rI = (e) => {
  const n = `El${e}Collection`, o = `${n}Item`, a = Symbol(n), t = Symbol(o), r = {
    ...eI,
    name: n,
    setup() {
      const m = V(null), i = /* @__PURE__ */ new Map();
      Le(a, {
        itemMap: i,
        getItems: () => {
          const v = _(m);
          if (!v)
            return [];
          const g = Array.from(v.querySelectorAll(`[${tI}]`));
          return [...i.values()].sort(($, h) => g.indexOf($.ref) - g.indexOf(h.ref));
        },
        collectionRef: m
      });
    }
  }, d = {
    ...aI,
    name: o,
    setup(m, { attrs: i }) {
      const u = V(null), v = re(a, void 0);
      Le(t, {
        collectionItemRef: u
      }), we(() => {
        const g = _(u);
        g && v.itemMap.set(g, {
          ref: g,
          ...i
        });
      }), m2(() => {
        const g = _(u);
        v.itemMap.delete(g);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: a,
    COLLECTION_ITEM_INJECTION_KEY: t,
    ElCollection: r,
    ElCollectionItem: d
  };
}, vn = oe({
  trigger: L0.trigger,
  effect: {
    ...je.effect,
    default: "light"
  },
  type: {
    type: Y(String)
  },
  placement: {
    type: Y(String),
    default: "bottom"
  },
  popperOptions: {
    type: Y(Object),
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
    type: Y([Number, String]),
    default: 0
  },
  maxHeight: {
    type: Y([Number, String]),
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
    type: Y(Object)
  }
});
oe({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: r0
  }
});
oe({
  onKeydown: { type: Y(Function) }
});
rI("Dropdown");
const B1 = "ElSelectGroup", rn = "ElSelect";
function cI(e, n) {
  const o = re(rn), a = re(B1, { disabled: !1 }), t = S(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), r = S(() => o.props.multiple ? g(o.props.modelValue, e.value) : w(e.value, o.props.modelValue)), d = S(() => {
    if (o.props.multiple) {
      const p = o.props.modelValue || [];
      return !r.value && p.length >= o.props.multipleLimit && o.props.multipleLimit > 0;
    } else
      return !1;
  }), m = S(() => e.label || (t.value ? "" : e.value)), i = S(() => e.value || e.label || ""), u = S(() => e.disabled || n.groupDisabled || d.value), v = Fe(), g = (p = [], b) => {
    if (t.value) {
      const x = o.props.valueKey;
      return p && p.some((L) => We(L, x) === We(b, x));
    } else
      return p && p.includes(b);
  }, w = (p, b) => {
    if (t.value) {
      const { valueKey: x } = o.props;
      return We(p, x) === We(b, x);
    } else
      return p === b;
  }, $ = () => {
    !e.disabled && !a.disabled && (o.hoverIndex = o.optionsArray.indexOf(v.proxy));
  };
  W(() => m.value, () => {
    !e.created && !o.props.remote && o.setSelected();
  }), W(() => e.value, (p, b) => {
    const { remote: x, valueKey: L } = o.props;
    if (!e.created && !x) {
      if (L && typeof p == "object" && typeof b == "object" && p[L] === b[L])
        return;
      o.setSelected();
    }
  }), W(() => a.disabled, () => {
    n.groupDisabled = a.disabled;
  }, { immediate: !0 });
  const { queryChange: h } = ba(o);
  return W(h, (p) => {
    const { query: b } = _(p), x = new RegExp(aT(b), "i");
    n.visible = x.test(m.value) || e.created, n.visible || o.filteredOptionsCount--;
  }), {
    select: o,
    currentLabel: m,
    currentValue: i,
    itemSelected: r,
    isDisabled: u,
    hoverItem: $
  };
}
const lI = ne({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = le("select"), o = G2({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: a, itemSelected: t, isDisabled: r, select: d, hoverItem: m } = cI(e, o), { visible: i, hover: u } = W0(o), v = Fe().proxy, g = v.value;
    d.onOptionCreate(v), m2(() => {
      const { selected: $ } = d, p = (d.props.multiple ? $ : [$]).some((b) => b.value === v.value);
      d.cachedOptions.get(g) === v && !p && ce(() => {
        d.cachedOptions.delete(g);
      }), d.onOptionDestroy(g, v);
    });
    function w() {
      e.disabled !== !0 && o.groupDisabled !== !0 && d.handleOptionSelect(v, !0);
    }
    return {
      ns: n,
      currentLabel: a,
      itemSelected: t,
      isDisabled: r,
      select: d,
      hoverItem: m,
      visible: i,
      hover: u,
      selectOptionClick: w,
      states: o
    };
  }
});
function dI(e, n, o, a, t, r) {
  return Ne((l(), s("li", {
    class: O([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: n[0] || (n[0] = (...d) => e.hoverItem && e.hoverItem(...d)),
    onClick: n[1] || (n[1] = ke((...d) => e.selectOptionClick && e.selectOptionClick(...d), ["stop"]))
  }, [
    X(e.$slots, "default", {}, () => [
      c("span", null, se(e.currentLabel), 1)
    ])
  ], 34)), [
    [u2, e.visible]
  ]);
}
var no = /* @__PURE__ */ ae(lI, [["render", dI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const sI = ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = re(rn), n = le("select"), o = S(() => e.props.popperClass), a = S(() => e.props.multiple), t = S(() => e.props.fitInputWidth), r = V("");
    function d() {
      var m;
      r.value = `${(m = e.selectWrapper) == null ? void 0 : m.getBoundingClientRect().width}px`;
    }
    return we(() => {
      d(), _0(e.selectWrapper, d);
    }), {
      ns: n,
      minWidth: r,
      popperClass: o,
      isMultiple: a,
      isFitInputWidth: t
    };
  }
});
function iI(e, n, o, a, t, r) {
  return l(), s("div", {
    class: O([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: fe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    X(e.$slots, "default")
  ], 6);
}
var mI = /* @__PURE__ */ ae(sI, [["render", iI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function uI(e) {
  const { t: n } = an();
  return G2({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: n("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1
  });
}
const fI = (e, n, o) => {
  const { t: a } = an(), t = le("select"), r = V(null), d = V(null), m = V(null), i = V(null), u = V(null), v = V(null), g = V(-1), w = n0({ query: "" }), $ = n0(""), h = re(nn, {}), p = re(H0, {}), b = S(() => !e.filterable || e.multiple || !n.visible), x = S(() => e.disabled || h.disabled), L = S(() => {
    const z = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !x.value && n.inputHovering && z;
  }), k = S(() => e.remote && e.filterable ? "" : e.suffixIcon), T = S(() => t.is("reverse", k.value && n.visible)), E = S(() => e.remote ? 300 : 0), C = S(() => e.loading ? e.loadingText || a("el.select.loading") : e.remote && n.query === "" && n.options.size === 0 ? !1 : e.filterable && n.query && n.options.size > 0 && n.filteredOptionsCount === 0 ? e.noMatchText || a("el.select.noMatch") : n.options.size === 0 ? e.noDataText || a("el.select.noData") : null), y = S(() => Array.from(n.options.values())), M = S(() => Array.from(n.cachedOptions.values())), A = S(() => {
    const z = y.value.filter((B) => !B.created).some((B) => B.currentLabel === n.query);
    return e.filterable && e.allowCreate && n.query !== "" && !z;
  }), I = qn(), F = S(() => ["small"].includes(I.value) ? "small" : "default"), Z = S({
    get() {
      return n.visible && C.value !== !1;
    },
    set(z) {
      n.visible = z;
    }
  });
  W([() => x.value, () => I.value, () => h.size], () => {
    ce(() => {
      q();
    });
  }), W(() => e.placeholder, (z) => {
    n.cachedPlaceHolder = n.currentPlaceholder = z;
  }), W(() => e.modelValue, (z, B) => {
    var U;
    e.multiple && (q(), z && z.length > 0 || d.value && n.query !== "" ? n.currentPlaceholder = "" : n.currentPlaceholder = n.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (n.query = "", P(n.query))), ee(), e.filterable && !e.multiple && (n.inputLength = 20), Lo(z, B) || (U = p.validate) == null || U.call(p, "change").catch((Q) => ye(Q));
  }, {
    flush: "post",
    deep: !0
  }), W(() => n.visible, (z) => {
    var B, U, Q;
    z ? ((U = (B = m.value) == null ? void 0 : B.updatePopper) == null || U.call(B), e.filterable && (n.filteredOptionsCount = n.optionsCount, n.query = e.remote ? "" : n.selectedLabel, e.multiple ? (Q = d.value) == null || Q.focus() : n.selectedLabel && (n.currentPlaceholder = `${n.selectedLabel}`, n.selectedLabel = ""), P(n.query), !e.multiple && !e.remote && (w.value.query = "", h0(w), h0($)))) : (d.value && d.value.blur(), n.query = "", n.previousQuery = null, n.selectedLabel = "", n.inputLength = 20, n.menuVisibleOnFocus = !1, ie(), ce(() => {
      d.value && d.value.value === "" && n.selected.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
    }), e.multiple || (n.selected && (e.filterable && e.allowCreate && n.createdSelected && n.createdLabel ? n.selectedLabel = n.createdLabel : n.selectedLabel = n.selected.currentLabel, e.filterable && (n.query = n.selectedLabel)), e.filterable && (n.currentPlaceholder = n.cachedPlaceHolder))), o.emit("visible-change", z);
  }), W(() => n.options.entries(), () => {
    var z, B, U;
    if (!ue)
      return;
    (B = (z = m.value) == null ? void 0 : z.updatePopper) == null || B.call(z), e.multiple && q();
    const Q = ((U = u.value) == null ? void 0 : U.querySelectorAll("input")) || [];
    Array.from(Q).includes(document.activeElement) || ee(), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && G();
  }, {
    flush: "post"
  }), W(() => n.hoverIndex, (z) => {
    typeof z == "number" && z > -1 && (g.value = y.value[z] || {}), y.value.forEach((B) => {
      B.hover = g.value === B;
    });
  });
  const q = () => {
    e.collapseTags && !e.filterable || ce(() => {
      var z, B;
      if (!r.value)
        return;
      const U = r.value.$el.querySelector("input"), Q = i.value, ge = hT(I.value || h.size);
      U.style.height = `${n.selected.length === 0 ? ge : Math.max(Q ? Q.clientHeight + (Q.clientHeight > ge ? 6 : 0) : 0, ge) - 2}px`, n.tagInMultiLine = Number.parseFloat(U.style.height) >= ge, n.visible && C.value !== !1 && ((B = (z = m.value) == null ? void 0 : z.updatePopper) == null || B.call(z));
    });
  }, P = (z) => {
    if (!(n.previousQuery === z || n.isOnComposition)) {
      if (n.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        n.previousQuery = z;
        return;
      }
      n.previousQuery = z, ce(() => {
        var B, U;
        n.visible && ((U = (B = m.value) == null ? void 0 : B.updatePopper) == null || U.call(B));
      }), n.hoverIndex = -1, e.multiple && e.filterable && ce(() => {
        const B = d.value.value.length * 15 + 20;
        n.inputLength = e.collapseTags ? Math.min(50, B) : B, R(), q();
      }), e.remote && typeof e.remoteMethod == "function" ? (n.hoverIndex = -1, e.remoteMethod(z)) : typeof e.filterMethod == "function" ? (e.filterMethod(z), h0($)) : (n.filteredOptionsCount = n.optionsCount, w.value.query = z, h0(w), h0($)), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && G();
    }
  }, R = () => {
    n.currentPlaceholder !== "" && (n.currentPlaceholder = d.value.value ? "" : n.cachedPlaceHolder);
  }, G = () => {
    const z = y.value.filter((Q) => Q.visible && !Q.disabled && !Q.states.groupDisabled), B = z.find((Q) => Q.created), U = z[0];
    n.hoverIndex = a2(y.value, B || U);
  }, ee = () => {
    var z;
    if (e.multiple)
      n.selectedLabel = "";
    else {
      const U = te(e.modelValue);
      (z = U.props) != null && z.created ? (n.createdLabel = U.props.value, n.createdSelected = !0) : n.createdSelected = !1, n.selectedLabel = U.currentLabel, n.selected = U, e.filterable && (n.query = n.selectedLabel);
      return;
    }
    const B = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((U) => {
      B.push(te(U));
    }), n.selected = B, ce(() => {
      q();
    });
  }, te = (z) => {
    let B;
    const U = un(z).toLowerCase() === "object", Q = un(z).toLowerCase() === "null", ge = un(z).toLowerCase() === "undefined";
    for (let g2 = n.cachedOptions.size - 1; g2 >= 0; g2--) {
      const qe = M.value[g2];
      if (U ? We(qe.value, e.valueKey) === We(z, e.valueKey) : qe.value === z) {
        B = {
          value: z,
          currentLabel: qe.currentLabel,
          isDisabled: qe.isDisabled
        };
        break;
      }
    }
    if (B)
      return B;
    const H2 = U ? z.label : !Q && !ge ? z : "", S2 = {
      value: z,
      currentLabel: H2
    };
    return e.multiple && (S2.hitState = !1), S2;
  }, ie = () => {
    setTimeout(() => {
      const z = e.valueKey;
      e.multiple ? n.selected.length > 0 ? n.hoverIndex = Math.min.apply(null, n.selected.map((B) => y.value.findIndex((U) => We(U, z) === We(B, z)))) : n.hoverIndex = -1 : n.hoverIndex = y.value.findIndex((B) => ve(B) === ve(n.selected));
    }, 300);
  }, xe = () => {
    var z, B;
    Re(), (B = (z = m.value) == null ? void 0 : z.updatePopper) == null || B.call(z), e.multiple && !e.filterable && q();
  }, Re = () => {
    var z;
    n.inputWidth = (z = r.value) == null ? void 0 : z.$el.getBoundingClientRect().width;
  }, Me = () => {
    e.filterable && n.query !== n.selectedLabel && (n.query = n.selectedLabel, P(n.query));
  }, Ae = Vo(() => {
    Me();
  }, E.value), Be = Vo((z) => {
    P(z.target.value);
  }, E.value), me = (z) => {
    Lo(e.modelValue, z) || o.emit(Ga, z);
  }, Ee = (z) => {
    if (z.target.value.length <= 0 && !r2()) {
      const B = e.modelValue.slice();
      B.pop(), o.emit(ze, B), me(B);
    }
    z.target.value.length === 1 && e.modelValue.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
  }, De = (z, B) => {
    const U = n.selected.indexOf(B);
    if (U > -1 && !x.value) {
      const Q = e.modelValue.slice();
      Q.splice(U, 1), o.emit(ze, Q), me(Q), o.emit("remove-tag", B.value);
    }
    z.stopPropagation();
  }, he = (z) => {
    z.stopPropagation();
    const B = e.multiple ? [] : "";
    if (typeof B != "string")
      for (const U of n.selected)
        U.isDisabled && B.push(U.value);
    o.emit(ze, B), me(B), n.visible = !1, o.emit("clear");
  }, o2 = (z, B) => {
    var U;
    if (e.multiple) {
      const Q = (e.modelValue || []).slice(), ge = a2(Q, z.value);
      ge > -1 ? Q.splice(ge, 1) : (e.multipleLimit <= 0 || Q.length < e.multipleLimit) && Q.push(z.value), o.emit(ze, Q), me(Q), z.created && (n.query = "", P(""), n.inputLength = 20), e.filterable && ((U = d.value) == null || U.focus());
    } else
      o.emit(ze, z.value), me(z.value), n.visible = !1;
    n.isSilentBlur = B, t2(), !n.visible && ce(() => {
      Te(z);
    });
  }, a2 = (z = [], B) => {
    if (!b2(B))
      return z.indexOf(B);
    const U = e.valueKey;
    let Q = -1;
    return z.some((ge, H2) => We(ge, U) === We(B, U) ? (Q = H2, !0) : !1), Q;
  }, t2 = () => {
    n.softFocus = !0;
    const z = d.value || r.value;
    z && (z == null || z.focus());
  }, Te = (z) => {
    var B, U, Q, ge, H2;
    const S2 = Array.isArray(z) ? z[0] : z;
    let g2 = null;
    if (S2 != null && S2.value) {
      const qe = y.value.filter((Oe) => Oe.value === S2.value);
      qe.length > 0 && (g2 = qe[0].$el);
    }
    if (m.value && g2) {
      const qe = (ge = (Q = (U = (B = m.value) == null ? void 0 : B.popperRef) == null ? void 0 : U.contentRef) == null ? void 0 : Q.querySelector) == null ? void 0 : ge.call(Q, `.${t.be("dropdown", "wrap")}`);
      qe && dT(qe, g2);
    }
    (H2 = v.value) == null || H2.handleScroll();
  }, _2 = (z) => {
    n.optionsCount++, n.filteredOptionsCount++, n.options.set(z.value, z), n.cachedOptions.set(z.value, z);
  }, T2 = (z, B) => {
    n.options.get(z) === B && (n.optionsCount--, n.filteredOptionsCount--, n.options.delete(z));
  }, x2 = (z) => {
    z.code !== d2.backspace && r2(!1), n.inputLength = d.value.value.length * 15 + 20, q();
  }, r2 = (z) => {
    if (!Array.isArray(n.selected))
      return;
    const B = n.selected[n.selected.length - 1];
    if (!!B)
      return z === !0 || z === !1 ? (B.hitState = z, z) : (B.hitState = !B.hitState, B.hitState);
  }, Xe = (z) => {
    const B = z.target.value;
    if (z.type === "compositionend")
      n.isOnComposition = !1, ce(() => P(B));
    else {
      const U = B[B.length - 1] || "";
      n.isOnComposition = !Ya(U);
    }
  }, p2 = () => {
    ce(() => Te(n.selected));
  }, O2 = (z) => {
    n.softFocus ? n.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !n.visible && (n.menuVisibleOnFocus = !0), n.visible = !0), o.emit("focus", z));
  }, He = () => {
    var z;
    n.visible = !1, (z = r.value) == null || z.blur();
  }, Ze = (z) => {
    ce(() => {
      n.isSilentBlur ? n.isSilentBlur = !1 : o.emit("blur", z);
    }), n.softFocus = !1;
  }, M2 = (z) => {
    he(z);
  }, h2 = () => {
    n.visible = !1;
  }, H = (z) => {
    n.visible && (z.preventDefault(), z.stopPropagation(), n.visible = !1);
  }, J = () => {
    var z;
    e.automaticDropdown || x.value || (n.menuVisibleOnFocus ? n.menuVisibleOnFocus = !1 : n.visible = !n.visible, n.visible && ((z = d.value || r.value) == null || z.focus()));
  }, $e = () => {
    n.visible ? y.value[n.hoverIndex] && o2(y.value[n.hoverIndex], void 0) : J();
  }, ve = (z) => b2(z.value) ? We(z.value, e.valueKey) : z.value, v2 = S(() => y.value.filter((z) => z.visible).every((z) => z.disabled)), X2 = (z) => {
    if (!n.visible) {
      n.visible = !0;
      return;
    }
    if (!(n.options.size === 0 || n.filteredOptionsCount === 0) && !n.isOnComposition && !v2.value) {
      z === "next" ? (n.hoverIndex++, n.hoverIndex === n.options.size && (n.hoverIndex = 0)) : z === "prev" && (n.hoverIndex--, n.hoverIndex < 0 && (n.hoverIndex = n.options.size - 1));
      const B = y.value[n.hoverIndex];
      (B.disabled === !0 || B.states.groupDisabled === !0 || !B.visible) && X2(z), ce(() => Te(g.value));
    }
  };
  return {
    optionsArray: y,
    selectSize: I,
    handleResize: xe,
    debouncedOnInputChange: Ae,
    debouncedQueryChange: Be,
    deletePrevTag: Ee,
    deleteTag: De,
    deleteSelected: he,
    handleOptionSelect: o2,
    scrollToOption: Te,
    readonly: b,
    resetInputHeight: q,
    showClose: L,
    iconComponent: k,
    iconReverse: T,
    showNewOption: A,
    collapseTagSize: F,
    setSelected: ee,
    managePlaceholder: R,
    selectDisabled: x,
    emptyText: C,
    toggleLastOptionHitState: r2,
    resetInputState: x2,
    handleComposition: Xe,
    onOptionCreate: _2,
    onOptionDestroy: T2,
    handleMenuEnter: p2,
    handleFocus: O2,
    blur: He,
    handleBlur: Ze,
    handleClearClick: M2,
    handleClose: h2,
    handleKeydownEscape: H,
    toggleMenu: J,
    selectOption: $e,
    getValueKey: ve,
    navigateOptions: X2,
    dropMenuVisible: Z,
    queryChange: w,
    groupQueryChange: $,
    reference: r,
    input: d,
    tooltipRef: m,
    tags: i,
    selectWrapper: u,
    scrollbar: v
  };
}, ma = "ElSelect", _I = ne({
  name: ma,
  componentName: ma,
  components: {
    ElInput: iO,
    ElSelectMenu: mI,
    ElOption: no,
    ElTag: L1,
    ElScrollbar: l1,
    ElTooltip: H1,
    ElIcon: _e
  },
  directives: { ClickOutside: SP },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: vT
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: je.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: [String, Object],
      default: K0
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: [String, Object],
      default: xa
    },
    tagType: { ...V1.type, default: "info" }
  },
  emits: [
    ze,
    Ga,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, n) {
    const o = le("select"), a = le("input"), { t } = an(), r = uI(e), {
      optionsArray: d,
      selectSize: m,
      readonly: i,
      handleResize: u,
      collapseTagSize: v,
      debouncedOnInputChange: g,
      debouncedQueryChange: w,
      deletePrevTag: $,
      deleteTag: h,
      deleteSelected: p,
      handleOptionSelect: b,
      scrollToOption: x,
      setSelected: L,
      resetInputHeight: k,
      managePlaceholder: T,
      showClose: E,
      selectDisabled: C,
      iconComponent: y,
      iconReverse: M,
      showNewOption: A,
      emptyText: I,
      toggleLastOptionHitState: F,
      resetInputState: Z,
      handleComposition: q,
      onOptionCreate: P,
      onOptionDestroy: R,
      handleMenuEnter: G,
      handleFocus: ee,
      blur: te,
      handleBlur: ie,
      handleClearClick: xe,
      handleClose: Re,
      handleKeydownEscape: Me,
      toggleMenu: Ae,
      selectOption: Be,
      getValueKey: me,
      navigateOptions: Ee,
      dropMenuVisible: De,
      reference: he,
      input: o2,
      tooltipRef: a2,
      tags: t2,
      selectWrapper: Te,
      scrollbar: _2,
      queryChange: T2,
      groupQueryChange: x2
    } = fI(e, r, n), { focus: r2 } = HT(he), {
      inputWidth: Xe,
      selected: p2,
      inputLength: O2,
      filteredOptionsCount: He,
      visible: Ze,
      softFocus: M2,
      selectedLabel: h2,
      hoverIndex: H,
      query: J,
      inputHovering: $e,
      currentPlaceholder: ve,
      menuVisibleOnFocus: v2,
      isOnComposition: X2,
      isSilentBlur: z,
      options: B,
      cachedOptions: U,
      optionsCount: Q,
      prefixWidth: ge,
      tagInMultiLine: H2
    } = W0(r), S2 = S(() => {
      const Oe = [o.b()], k2 = _(m);
      return k2 && Oe.push(o.m(k2)), e.disabled && Oe.push(o.m("disabled")), Oe;
    }), g2 = S(() => ({
      maxWidth: `${_(Xe) - 32}px`,
      width: "100%"
    }));
    Le(rn, G2({
      props: e,
      options: B,
      optionsArray: d,
      cachedOptions: U,
      optionsCount: Q,
      filteredOptionsCount: He,
      hoverIndex: H,
      handleOptionSelect: b,
      onOptionCreate: P,
      onOptionDestroy: R,
      selectWrapper: Te,
      selected: p2,
      setSelected: L,
      queryChange: T2,
      groupQueryChange: x2
    })), we(() => {
      r.cachedPlaceHolder = ve.value = e.placeholder || t("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (ve.value = ""), _0(Te, u), e.remote && e.multiple && k(), ce(() => {
        const Oe = he.value && he.value.$el;
        if (!!Oe && (Xe.value = Oe.getBoundingClientRect().width, n.slots.prefix)) {
          const k2 = Oe.querySelector(`.${a.e("prefix")}`);
          ge.value = Math.max(k2.getBoundingClientRect().width + 5, 30);
        }
      }), L();
    }), e.multiple && !Array.isArray(e.modelValue) && n.emit(ze, []), !e.multiple && Array.isArray(e.modelValue) && n.emit(ze, "");
    const qe = S(() => {
      var Oe, k2;
      return (k2 = (Oe = a2.value) == null ? void 0 : Oe.popperRef) == null ? void 0 : k2.contentRef;
    });
    return {
      tagInMultiLine: H2,
      prefixWidth: ge,
      selectSize: m,
      readonly: i,
      handleResize: u,
      collapseTagSize: v,
      debouncedOnInputChange: g,
      debouncedQueryChange: w,
      deletePrevTag: $,
      deleteTag: h,
      deleteSelected: p,
      handleOptionSelect: b,
      scrollToOption: x,
      inputWidth: Xe,
      selected: p2,
      inputLength: O2,
      filteredOptionsCount: He,
      visible: Ze,
      softFocus: M2,
      selectedLabel: h2,
      hoverIndex: H,
      query: J,
      inputHovering: $e,
      currentPlaceholder: ve,
      menuVisibleOnFocus: v2,
      isOnComposition: X2,
      isSilentBlur: z,
      options: B,
      resetInputHeight: k,
      managePlaceholder: T,
      showClose: E,
      selectDisabled: C,
      iconComponent: y,
      iconReverse: M,
      showNewOption: A,
      emptyText: I,
      toggleLastOptionHitState: F,
      resetInputState: Z,
      handleComposition: q,
      handleMenuEnter: G,
      handleFocus: ee,
      blur: te,
      handleBlur: ie,
      handleClearClick: xe,
      handleClose: Re,
      handleKeydownEscape: Me,
      toggleMenu: Ae,
      selectOption: Be,
      getValueKey: me,
      navigateOptions: Ee,
      dropMenuVisible: De,
      focus: r2,
      reference: he,
      input: o2,
      tooltipRef: a2,
      popperPaneRef: qe,
      tags: t2,
      selectWrapper: Te,
      scrollbar: _2,
      wrapperKls: S2,
      selectTagsStyle: g2,
      nsSelect: o
    };
  }
}), pI = { class: "select-trigger" }, hI = ["disabled", "autocomplete"], vI = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function gI(e, n, o, a, t, r) {
  const d = pe("el-tag"), m = pe("el-tooltip"), i = pe("el-icon"), u = pe("el-input"), v = pe("el-option"), g = pe("el-scrollbar"), w = pe("el-select-menu"), $ = W1("click-outside");
  return Ne((l(), s("div", {
    ref: "selectWrapper",
    class: O(e.wrapperKls),
    onClick: n[23] || (n[23] = ke((...h) => e.toggleMenu && e.toggleMenu(...h), ["stop"]))
  }, [
    D(m, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      "onUpdate:visible": n[22] || (n[22] = (h) => e.dropMenuVisible = h),
      placement: "bottom-start",
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: N(() => [
        c("div", pI, [
          e.multiple ? (l(), s("div", {
            key: 0,
            ref: "tags",
            class: O(e.nsSelect.e("tags")),
            style: fe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (l(), s("span", {
              key: 0,
              class: O([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              D(d, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: n[0] || (n[0] = (h) => e.deleteTag(h, e.selected[0]))
              }, {
                default: N(() => [
                  c("span", {
                    class: O(e.nsSelect.e("tags-text")),
                    style: fe({ maxWidth: e.inputWidth - 123 + "px" })
                  }, se(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (l(), K(d, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: N(() => [
                  e.collapseTagsTooltip ? (l(), K(m, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: !1
                  }, {
                    default: N(() => [
                      c("span", {
                        class: O(e.nsSelect.e("tags-text"))
                      }, "+ " + se(e.selected.length - 1), 3)
                    ]),
                    content: N(() => [
                      c("div", {
                        class: O(e.nsSelect.e("collapse-tags"))
                      }, [
                        (l(!0), s(be, null, $2(e.selected, (h, p) => (l(), s("div", {
                          key: p,
                          class: O(e.nsSelect.e("collapse-tag"))
                        }, [
                          (l(), K(d, {
                            key: e.getValueKey(h),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !h.isDisabled,
                            size: e.collapseTagSize,
                            hit: h.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (b) => e.deleteTag(b, h)
                          }, {
                            default: N(() => [
                              c("span", {
                                class: O(e.nsSelect.e("tags-text")),
                                style: fe({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, se(h.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect"])) : (l(), s("span", {
                    key: 1,
                    class: O(e.nsSelect.e("tags-text"))
                  }, "+ " + se(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : j("v-if", !0)
            ], 2)) : j("v-if", !0),
            j(" <div> "),
            e.collapseTags ? j("v-if", !0) : (l(), K(U2, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: N(() => [
                c("span", {
                  class: O([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (l(!0), s(be, null, $2(e.selected, (h) => (l(), K(d, {
                    key: e.getValueKey(h),
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    hit: h.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (p) => e.deleteTag(p, h)
                  }, {
                    default: N(() => [
                      c("span", {
                        class: O(e.nsSelect.e("tags-text")),
                        style: fe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, se(h.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            j(" </div> "),
            e.filterable ? Ne((l(), s("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": n[1] || (n[1] = (h) => e.query = h),
              type: "text",
              class: O([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: fe({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: n[2] || (n[2] = (...h) => e.handleFocus && e.handleFocus(...h)),
              onBlur: n[3] || (n[3] = (...h) => e.handleBlur && e.handleBlur(...h)),
              onKeyup: n[4] || (n[4] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
              onKeydown: [
                n[5] || (n[5] = (...h) => e.resetInputState && e.resetInputState(...h)),
                n[6] || (n[6] = Je(ke((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                n[7] || (n[7] = Je(ke((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                n[8] || (n[8] = Je((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                n[9] || (n[9] = Je(ke((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                n[10] || (n[10] = Je((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                n[11] || (n[11] = Je((h) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: n[12] || (n[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onCompositionupdate: n[13] || (n[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onCompositionend: n[14] || (n[14] = (...h) => e.handleComposition && e.handleComposition(...h)),
              onInput: n[15] || (n[15] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
            }, null, 46, hI)), [
              [K1, e.query]
            ]) : j("v-if", !0)
          ], 6)) : j("v-if", !0),
          D(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": n[16] || (n[16] = (h) => e.selectedLabel = h),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: O([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              n[17] || (n[17] = Je(ke((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              n[18] || (n[18] = Je(ke((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Je(ke(e.selectOption, ["stop", "prevent"]), ["enter"]),
              Je(e.handleKeydownEscape, ["esc"]),
              n[19] || (n[19] = Je((h) => e.visible = !1, ["tab"]))
            ],
            onMouseenter: n[20] || (n[20] = (h) => e.inputHovering = !0),
            onMouseleave: n[21] || (n[21] = (h) => e.inputHovering = !1)
          }, $a({
            suffix: N(() => [
              e.iconComponent && !e.showClose ? (l(), K(i, {
                key: 0,
                class: O([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: N(() => [
                  (l(), K(Ie(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (l(), K(i, {
                key: 1,
                class: O([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: N(() => [
                  (l(), K(Ie(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: N(() => [
                c("div", vI, [
                  X(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: N(() => [
        D(w, null, {
          default: N(() => [
            Ne(D(g, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: O([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: N(() => [
                e.showNewOption ? (l(), K(v, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                X(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [u2, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (l(), s(be, { key: 0 }, [
              e.$slots.empty ? X(e.$slots, "empty", { key: 0 }) : (l(), s("p", {
                key: 1,
                class: O(e.nsSelect.be("dropdown", "empty"))
              }, se(e.emptyText), 3))
            ], 64)) : j("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [$, e.handleClose, e.popperPaneRef]
  ]);
}
var wI = /* @__PURE__ */ ae(_I, [["render", gI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const $I = ne({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = le("select"), o = V(!0), a = Fe(), t = V([]);
    Le(B1, G2({
      ...W0(e)
    }));
    const r = re(rn);
    we(() => {
      t.value = d(a.subTree);
    });
    const d = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((v) => {
        var g;
        v.type && v.type.name === "ElOption" && v.component && v.component.proxy ? u.push(v.component.proxy) : (g = v.children) != null && g.length && u.push(...d(v));
      }), u;
    }, { groupQueryChange: m } = ba(r);
    return W(m, () => {
      o.value = t.value.some((i) => i.visible === !0);
    }), {
      visible: o,
      ns: n
    };
  }
});
function bI(e, n, o, a, t, r) {
  return Ne((l(), s("ul", {
    class: O(e.ns.be("group", "wrap"))
  }, [
    c("li", {
      class: O(e.ns.be("group", "title"))
    }, se(e.label), 3),
    c("li", null, [
      c("ul", {
        class: O(e.ns.b("group"))
      }, [
        X(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [u2, e.visible]
  ]);
}
var E1 = /* @__PURE__ */ ae($I, [["render", bI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const gn = e2(wI, {
  Option: no,
  OptionGroup: E1
}), wn = Fn(no);
Fn(E1);
const yI = oe({
  trigger: L0.trigger,
  placement: vn.placement,
  disabled: L0.disabled,
  visible: je.visible,
  transition: je.transition,
  popperOptions: vn.popperOptions,
  tabindex: vn.tabindex,
  content: je.content,
  popperStyle: je.popperStyle,
  popperClass: je.popperClass,
  enterable: {
    ...je.enterable,
    default: !0
  },
  effect: {
    ...je.effect,
    default: "light"
  },
  teleported: je.teleported,
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
}), zI = [
  "update:visible",
  "before-enter",
  "before-leave",
  "after-enter",
  "after-leave"
], CI = "ElPopover", xI = ne({
  name: CI,
  components: {
    ElTooltip: H1
  },
  props: yI,
  emits: zI,
  setup(e, { emit: n }) {
    const o = le("popover"), a = V(null), t = S(() => {
      var h;
      return (h = _(a)) == null ? void 0 : h.popperRef;
    }), r = S(() => Ke(e.width) ? e.width : `${e.width}px`), d = S(() => [
      {
        width: r.value
      },
      e.popperStyle
    ]), m = S(() => [o.b(), e.popperClass, { [o.m("plain")]: !!e.content }]), i = S(() => e.transition === "el-fade-in-linear");
    return {
      ns: o,
      kls: m,
      gpuAcceleration: i,
      style: d,
      tooltipRef: a,
      popperRef: t,
      hide: () => {
        var h;
        (h = a.value) == null || h.hide();
      },
      beforeEnter: () => {
        n("before-enter");
      },
      beforeLeave: () => {
        n("before-leave");
      },
      afterEnter: () => {
        n("after-enter");
      },
      afterLeave: () => {
        n("update:visible", !1), n("after-leave");
      }
    };
  }
});
function MI(e, n, o, a, t, r) {
  const d = pe("el-tooltip");
  return l(), K(d, F2({ ref: "tooltipRef" }, e.$attrs, {
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
    content: N(() => [
      e.title ? (l(), s("div", {
        key: 0,
        class: O(e.ns.e("title")),
        role: "title"
      }, se(e.title), 3)) : j("v-if", !0),
      X(e.$slots, "default", {}, () => [
        ya(se(e.content), 1)
      ])
    ]),
    default: N(() => [
      e.$slots.reference ? X(e.$slots, "reference", { key: 0 }) : j("v-if", !0)
    ]),
    _: 3
  }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onBeforeShow", "onBeforeHide", "onShow", "onHide"]);
}
var z0 = /* @__PURE__ */ ae(xI, [["render", MI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);
const ua = (e, n) => {
  const o = n.arg || n.value, a = o == null ? void 0 : o.popperRef;
  a && (a.triggerRef = e);
};
var En = {
  mounted(e, n) {
    ua(e, n);
  },
  updated(e, n) {
    ua(e, n);
  }
};
const HI = "popover";
z0.install = (e) => {
  e.component(z0.name, z0);
};
En.install = (e) => {
  e.directive(HI, En);
};
const SI = En;
z0.directive = SI;
const VI = z0, LI = VI, AI = oe({
  tabs: {
    type: Y(Array),
    default: () => Rn([])
  }
}), BI = {
  name: "ElTabBar"
}, EI = /* @__PURE__ */ ne({
  ...BI,
  props: AI,
  setup(e, { expose: n }) {
    const o = e, a = "ElTabBar", t = Fe(), r = re(on);
    r || B0(a, "<el-tabs><el-tab-bar /></el-tabs>");
    const d = le("tabs"), m = V(), i = V(), u = () => {
      let g = 0, w = 0;
      const $ = ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height", h = $ === "width" ? "x" : "y";
      return o.tabs.every((p) => {
        var b, x, L, k;
        const T = (x = (b = t.parent) == null ? void 0 : b.refs) == null ? void 0 : x[`tab-${p.paneName}`];
        if (!T)
          return !1;
        if (!p.active)
          return !0;
        w = T[`client${N2($)}`];
        const E = h === "x" ? "left" : "top";
        g = T.getBoundingClientRect()[E] - ((k = (L = T.parentElement) == null ? void 0 : L.getBoundingClientRect()[E]) != null ? k : 0);
        const C = window.getComputedStyle(T);
        return $ === "width" && (o.tabs.length > 1 && (w -= Number.parseFloat(C.paddingLeft) + Number.parseFloat(C.paddingRight)), g += Number.parseFloat(C.paddingLeft)), !1;
      }), {
        [$]: `${w}px`,
        transform: `translate${N2(h)}(${g}px)`
      };
    }, v = () => i.value = u();
    return W(() => o.tabs, async () => {
      await ce(), v();
    }, { immediate: !0 }), _0(m, () => v()), n({
      ref: m,
      update: v
    }), (g, w) => (l(), s("div", {
      ref_key: "barRef",
      ref: m,
      class: O([_(d).e("active-bar"), _(d).is(_(r).props.tabPosition)]),
      style: fe(i.value)
    }, null, 6));
  }
});
var TI = /* @__PURE__ */ ae(EI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
const OI = oe({
  panes: {
    type: Y(Array),
    default: () => Rn([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  onTabClick: {
    type: Y(Function),
    default: l2
  },
  onTabRemove: {
    type: Y(Function),
    default: l2
  },
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
}), fa = "ElTabNav", kI = ne({
  name: fa,
  props: OI,
  setup(e, {
    expose: n
  }) {
    const o = Fe(), a = re(on);
    a || B0(fa, "<el-tabs><tab-nav /></el-tabs>");
    const t = le("tabs"), r = KE(), d = XE(), m = V(), i = V(), u = V(), v = V(!1), g = V(0), w = V(!1), $ = V(!0), h = S(() => ["top", "bottom"].includes(a.props.tabPosition) ? "width" : "height"), p = S(() => ({
      transform: `translate${h.value === "width" ? "X" : "Y"}(-${g.value}px)`
    })), b = () => {
      if (!m.value)
        return;
      const y = m.value[`offset${N2(h.value)}`], M = g.value;
      if (!M)
        return;
      const A = M > y ? M - y : 0;
      g.value = A;
    }, x = () => {
      if (!m.value || !i.value)
        return;
      const y = i.value[`offset${N2(h.value)}`], M = m.value[`offset${N2(h.value)}`], A = g.value;
      if (y - A <= M)
        return;
      const I = y - A > M * 2 ? A + M : y - M;
      g.value = I;
    }, L = async () => {
      const y = i.value;
      if (!v.value || !u.value || !m.value || !y)
        return;
      await ce();
      const M = u.value.querySelector(".is-active");
      if (!M)
        return;
      const A = m.value, I = ["top", "bottom"].includes(a.props.tabPosition), F = M.getBoundingClientRect(), Z = A.getBoundingClientRect(), q = I ? y.offsetWidth - Z.width : y.offsetHeight - Z.height, P = g.value;
      let R = P;
      I ? (F.left < Z.left && (R = P - (Z.left - F.left)), F.right > Z.right && (R = P + F.right - Z.right)) : (F.top < Z.top && (R = P - (Z.top - F.top)), F.bottom > Z.bottom && (R = P + (F.bottom - Z.bottom))), R = Math.max(R, 0), g.value = Math.min(R, q);
    }, k = () => {
      if (!i.value || !m.value)
        return;
      const y = i.value[`offset${N2(h.value)}`], M = m.value[`offset${N2(h.value)}`], A = g.value;
      if (M < y) {
        const I = g.value;
        v.value = v.value || {}, v.value.prev = I, v.value.next = I + M < y, y - I < M && (g.value = y - M);
      } else
        v.value = !1, A > 0 && (g.value = 0);
    }, T = (y) => {
      const M = y.code, {
        up: A,
        down: I,
        left: F,
        right: Z
      } = d2;
      if (![A, I, F, Z].includes(M))
        return;
      const q = Array.from(y.currentTarget.querySelectorAll("[role=tab]")), P = q.indexOf(y.target);
      let R;
      M === F || M === A ? P === 0 ? R = q.length - 1 : R = P - 1 : P < q.length - 1 ? R = P + 1 : R = 0, q[R].focus(), q[R].click(), E();
    }, E = () => {
      $.value && (w.value = !0);
    }, C = () => w.value = !1;
    return W(r, (y) => {
      y === "hidden" ? $.value = !1 : y === "visible" && setTimeout(() => $.value = !0, 50);
    }), W(d, (y) => {
      y ? setTimeout(() => $.value = !0, 50) : $.value = !1;
    }), _0(u, k), we(() => setTimeout(() => L(), 0)), Tn(() => k()), n({
      scrollToActiveTab: L,
      removeFocus: C
    }), W(() => e.panes, () => o.update(), {
      flush: "post"
    }), () => {
      const y = v.value ? [D("span", {
        class: [t.e("nav-prev"), t.is("disabled", !v.value.prev)],
        onClick: b
      }, [D(_e, null, {
        default: () => [D(za, null, null)]
      })]), D("span", {
        class: [t.e("nav-next"), t.is("disabled", !v.value.next)],
        onClick: x
      }, [D(_e, null, {
        default: () => [D(Ca, null, null)]
      })])] : null, M = e.panes.map((A, I) => {
        var F, Z;
        const q = A.props.name || A.index || `${I}`, P = A.isClosable || e.editable;
        A.index = `${I}`;
        const R = P ? D(_e, {
          class: "is-icon-close",
          onClick: (te) => e.onTabRemove(A, te)
        }, {
          default: () => [D(o0, null, null)]
        }) : null, G = ((Z = (F = A.slots).label) == null ? void 0 : Z.call(F)) || A.props.label, ee = A.active ? 0 : -1;
        return D("div", {
          ref: `tab-${q}`,
          class: [t.e("item"), t.is(a.props.tabPosition), t.is("active", A.active), t.is("disabled", A.props.disabled), t.is("closable", P), t.is("focus", w.value)],
          id: `tab-${q}`,
          key: `tab-${q}`,
          "aria-controls": `pane-${q}`,
          role: "tab",
          "aria-selected": A.active,
          tabindex: ee,
          onFocus: () => E(),
          onBlur: () => C(),
          onClick: (te) => {
            C(), e.onTabClick(A, q, te);
          },
          onKeydown: (te) => {
            P && (te.code === d2.delete || te.code === d2.backspace) && e.onTabRemove(A, te);
          }
        }, [G, R]);
      });
      return D("div", {
        ref: u,
        class: [t.e("nav-wrap"), t.is("scrollable", !!v.value), t.is(a.props.tabPosition)]
      }, [y, D("div", {
        class: t.e("nav-scroll"),
        ref: m
      }, [D("div", {
        class: [t.e("nav"), t.is(a.props.tabPosition), t.is("stretch", e.stretch && ["top", "bottom"].includes(a.props.tabPosition))],
        ref: i,
        style: p.value,
        role: "tablist",
        onKeydown: T
      }, [e.type ? null : D(TI, {
        tabs: [...e.panes]
      }, null), M])])]);
    };
  }
}), PI = oe({
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
    type: Y(Function),
    default: () => !0
  },
  stretch: Boolean
}), $n = (e) => Ke(e) || Ce(e), II = {
  [ze]: (e) => $n(e),
  "tab-click": (e, n) => n instanceof Event,
  "tab-change": (e) => $n(e),
  edit: (e, n) => ["remove", "add"].includes(n),
  "tab-remove": (e) => $n(e),
  "tab-add": () => !0
};
var NI = ne({
  name: "ElTabs",
  props: PI,
  emits: II,
  setup(e, {
    emit: n,
    slots: o,
    expose: a
  }) {
    const t = le("tabs"), r = V(), d = G2({}), m = V(e.modelValue || e.activeName || "0"), i = ($) => {
      m.value = $, n(ze, $), n("tab-change", $);
    }, u = async ($) => {
      var h, p, b;
      if (m.value !== $)
        try {
          await ((h = e.beforeLeave) == null ? void 0 : h.call(e, $, m.value)) !== !1 && (i($), (b = (p = r.value) == null ? void 0 : p.removeFocus) == null || b.call(p));
        } catch {
        }
    }, v = ($, h, p) => {
      $.props.disabled || (u(h), n("tab-click", $, p));
    }, g = ($, h) => {
      $.props.disabled || (h.stopPropagation(), n("edit", $.props.name, "remove"), n("tab-remove", $.props.name));
    }, w = () => {
      n("edit", void 0, "add"), n("tab-add");
    };
    return W(() => e.activeName, ($) => u($)), W(() => e.modelValue, ($) => u($)), W(m, async () => {
      var $;
      ($ = r.value) == null || $.scrollToActiveTab();
    }), Le(on, {
      props: e,
      currentName: m,
      registerPane: (p) => d[p.uid] = p,
      unregisterPane: (p) => delete d[p]
    }), a({
      currentName: m
    }), () => {
      const $ = e.editable || e.addable ? D("span", {
        class: t.e("new-tab"),
        tabindex: "0",
        onClick: w,
        onKeydown: (b) => {
          b.code === d2.enter && w();
        }
      }, [D(_e, {
        class: t.is("icon-plus")
      }, {
        default: () => [D(Va, null, null)]
      })]) : null, h = D("div", {
        class: [t.e("header"), t.is(e.tabPosition)]
      }, [$, D(kI, {
        ref: r,
        currentName: m.value,
        editable: e.editable,
        type: e.type,
        panes: Object.values(d),
        stretch: e.stretch,
        onTabClick: v,
        onTabRemove: g
      }, null)]), p = D("div", {
        class: t.e("content")
      }, [X(o, "default")]);
      return D("div", {
        class: [t.b(), t.m(e.tabPosition), {
          [t.m("card")]: e.type === "card",
          [t.m("border-card")]: e.type === "border-card"
        }]
      }, [...e.tabPosition !== "bottom" ? [h, p] : [p, h]]);
    };
  }
});
const FI = oe({
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
}), RI = ["id", "aria-hidden", "aria-labelledby"], DI = {
  name: "ElTabPane"
}, qI = /* @__PURE__ */ ne({
  ...DI,
  props: FI,
  setup(e) {
    const n = e, o = "ElTabPane", a = Fe(), t = A0(), r = re(on);
    r || B0(o, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const d = le("tab-pane"), m = V(), i = S(() => n.closable || r.props.closable), u = Eo(() => r.currentName.value === (n.name || m.value)), v = V(u.value), g = S(() => n.name || m.value), w = Eo(() => !n.lazy || v.value || u.value);
    W(u, (h) => {
      h && (v.value = !0);
    });
    const $ = G2({
      uid: a.uid,
      slots: t,
      props: n,
      paneName: g,
      active: u,
      index: m,
      isClosable: i
    });
    return we(() => {
      r.registerPane($);
    }), va(() => {
      r.unregisterPane($.uid);
    }), (h, p) => _(w) ? Ne((l(), s("div", {
      key: 0,
      id: `pane-${_(g)}`,
      class: O(_(d).b()),
      role: "tabpanel",
      "aria-hidden": !_(u),
      "aria-labelledby": `tab-${_(g)}`
    }, [
      X(h.$slots, "default")
    ], 10, RI)), [
      [u2, _(u)]
    ]) : j("v-if", !0);
  }
});
var T1 = /* @__PURE__ */ ae(qI, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
const jI = e2(NI, {
  TabPane: T1
}), WI = Fn(T1), O1 = ["success", "info", "warning", "error"], KI = oe({
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
    type: r0,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Y([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: Y(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    values: O1,
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
}), UI = {
  destroy: () => !0
}, GI = ne({
  name: "ElMessage",
  components: {
    ElBadge: S1,
    ElIcon: _e,
    ...mT
  },
  props: KI,
  emits: UI,
  setup(e) {
    const n = le("message"), o = V(!1), a = V(e.type ? e.type === "error" ? "danger" : e.type : "info");
    let t;
    const r = S(() => {
      const w = e.type;
      return { [n.bm("icon", w)]: w && Ro[w] };
    }), d = S(() => e.icon || Ro[e.type] || ""), m = S(() => ({
      top: `${e.offset}px`,
      zIndex: e.zIndex
    }));
    function i() {
      e.duration > 0 && ({ stop: t } = Hn(() => {
        o.value && v();
      }, e.duration));
    }
    function u() {
      t == null || t();
    }
    function v() {
      o.value = !1;
    }
    function g({ code: w }) {
      w === d2.esc ? o.value && v() : i();
    }
    return we(() => {
      i(), o.value = !0;
    }), W(() => e.repeatNum, () => {
      u(), i();
    }), c2(document, "keydown", g), {
      ns: n,
      typeClass: r,
      iconComponent: d,
      customStyle: m,
      visible: o,
      badgeType: a,
      close: v,
      clearTimer: u,
      startTimer: i
    };
  }
}), YI = ["id"], XI = ["innerHTML"];
function ZI(e, n, o, a, t, r) {
  const d = pe("el-badge"), m = pe("el-icon"), i = pe("close");
  return l(), K(U2, {
    name: e.ns.b("fade"),
    onBeforeLeave: e.onClose,
    onAfterLeave: n[2] || (n[2] = (u) => e.$emit("destroy")),
    persisted: ""
  }, {
    default: N(() => [
      Ne(c("div", {
        id: e.id,
        class: O([
          e.ns.b(),
          { [e.ns.m(e.type)]: e.type && !e.icon },
          e.ns.is("center", e.center),
          e.ns.is("closable", e.showClose),
          e.customClass
        ]),
        style: fe(e.customStyle),
        role: "alert",
        onMouseenter: n[0] || (n[0] = (...u) => e.clearTimer && e.clearTimer(...u)),
        onMouseleave: n[1] || (n[1] = (...u) => e.startTimer && e.startTimer(...u))
      }, [
        e.repeatNum > 1 ? (l(), K(d, {
          key: 0,
          value: e.repeatNum,
          type: e.badgeType,
          class: O(e.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
        e.iconComponent ? (l(), K(m, {
          key: 1,
          class: O([e.ns.e("icon"), e.typeClass])
        }, {
          default: N(() => [
            (l(), K(Ie(e.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : j("v-if", !0),
        X(e.$slots, "default", {}, () => [
          e.dangerouslyUseHTMLString ? (l(), s(be, { key: 1 }, [
            j(" Caution here, message could've been compromised, never use user's input as message "),
            c("p", {
              class: O(e.ns.e("content")),
              innerHTML: e.message
            }, null, 10, XI)
          ], 2112)) : (l(), s("p", {
            key: 0,
            class: O(e.ns.e("content"))
          }, se(e.message), 3))
        ]),
        e.showClose ? (l(), K(m, {
          key: 2,
          class: O(e.ns.e("closeBtn")),
          onClick: ke(e.close, ["stop"])
        }, {
          default: N(() => [
            D(i)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : j("v-if", !0)
      ], 46, YI), [
        [u2, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var JI = /* @__PURE__ */ ae(GI, [["render", ZI], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
const Pe = [];
let QI = 1;
const m0 = function(e = {}, n) {
  if (!ue)
    return { close: () => {
    } };
  if (Ce(Bn.max) && Pe.length >= Bn.max)
    return { close: () => {
    } };
  if (!w0(e) && b2(e) && e.grouping && !w0(e.message) && Pe.length) {
    const g = Pe.find((w) => {
      var $, h, p;
      return `${(h = ($ = w.vm.props) == null ? void 0 : $.message) != null ? h : ""}` == `${(p = e.message) != null ? p : ""}`;
    });
    if (g)
      return g.vm.component.props.repeatNum += 1, g.vm.component.props.type = (e == null ? void 0 : e.type) || "info", {
        close: () => v.component.proxy.visible = !1
      };
  }
  (Ke(e) || w0(e)) && (e = { message: e });
  let o = e.offset || 20;
  Pe.forEach(({ vm: g }) => {
    var w;
    o += (((w = g.el) == null ? void 0 : w.offsetHeight) || 0) + 16;
  }), o += 16;
  const { nextZIndex: a } = jn(), t = `message_${QI++}`, r = e.onClose, d = {
    zIndex: a(),
    ...e,
    offset: o,
    id: t,
    onClose: () => {
      eN(t, r);
    }
  };
  let m = document.body;
  K2(e.appendTo) ? m = e.appendTo : Ke(e.appendTo) && (m = document.querySelector(e.appendTo)), K2(m) || (ye("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), m = document.body);
  const i = document.createElement("div");
  i.className = `container_${t}`;
  const u = d.message, v = D(JI, d, Q2(u) ? { default: u } : w0(u) ? { default: () => u } : null);
  return v.appContext = n || m0._context, v.props.onDestroy = () => {
    ao(null, i);
  }, ao(v, i), Pe.push({ vm: v }), m.appendChild(i.firstElementChild), {
    close: () => v.component.proxy.visible = !1
  };
};
O1.forEach((e) => {
  m0[e] = (n = {}, o) => ((Ke(n) || w0(n)) && (n = {
    message: n
  }), m0({
    ...n,
    type: e
  }, o));
});
function eN(e, n) {
  const o = Pe.findIndex(({ vm: d }) => e === d.component.props.id);
  if (o === -1)
    return;
  const { vm: a } = Pe[o];
  if (!a)
    return;
  n == null || n(a);
  const t = a.el.offsetHeight;
  Pe.splice(o, 1);
  const r = Pe.length;
  if (!(r < 1))
    for (let d = o; d < r; d++) {
      const m = Number.parseInt(Pe[d].vm.el.style.top, 10) - t - 16;
      Pe[d].vm.component.props.offset = m;
    }
}
function nN() {
  var e;
  for (let n = Pe.length - 1; n >= 0; n--) {
    const o = Pe[n].vm.component;
    (e = o == null ? void 0 : o.proxy) == null || e.close();
  }
}
m0.closeAll = nN;
m0._context = null;
const oN = fT(m0, "$message");
function aN(e) {
  const n = document.createElement("input");
  n.value = e, document.body.appendChild(n), n.select(), document.execCommand("Copy"), document.body.removeChild(n), oN({
    message: "\u590D\u5236\u6210\u529F",
    type: "success"
  });
}
const tN = { class: "chooseIcon" }, rN = { class: "container" }, cN = { class: "demo-icon-list" }, lN = ["onClick"], dN = { class: "text" }, sN = /* @__PURE__ */ ne({
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
  setup(e, { emit: n }) {
    const o = e, a = V(o.visible);
    W(() => o.visible, (d, m) => {
      a.value = d;
    });
    function t() {
      n("update:visible", !1);
    }
    function r(d) {
      aN(`<el-icon><${d}/></el-icon>`);
    }
    return (d, m) => (l(), s("div", tN, [
      D(_(ZP), {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (i) => a.value = i),
        title: e.title,
        onClose: t
      }, {
        default: N(() => [
          c("div", rN, [
            c("ul", cN, [
              (l(), s(be, null, $2(eL, (i, u) => c("li", {
                class: "icon-item",
                key: u,
                onClick: (v) => r(u)
              }, [
                D(_(_e), { style: { "font-size": "20px" } }, {
                  default: N(() => [
                    (l(), K(Ie(u)))
                  ]),
                  _: 2
                }, 1024),
                c("div", dN, se(u), 1)
              ], 8, lN)), 64))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"])
    ]));
  }
});
const oo = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [a, t] of n)
    o[a] = t;
  return o;
}, iN = /* @__PURE__ */ oo(sN, [["__scopeId", "data-v-03692b90"]]), mN = {
  install(e) {
    e.component("ChooseIcon", iN);
  }
}, bn = [
  {
    code: "11",
    name: "\u5317\u4EAC\u5E02",
    children: [
      {
        code: "1101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "110101",
            name: "\u4E1C\u57CE\u533A"
          },
          {
            code: "110102",
            name: "\u897F\u57CE\u533A"
          },
          {
            code: "110105",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "110106",
            name: "\u4E30\u53F0\u533A"
          },
          {
            code: "110107",
            name: "\u77F3\u666F\u5C71\u533A"
          },
          {
            code: "110108",
            name: "\u6D77\u6DC0\u533A"
          },
          {
            code: "110109",
            name: "\u95E8\u5934\u6C9F\u533A"
          },
          {
            code: "110111",
            name: "\u623F\u5C71\u533A"
          },
          {
            code: "110112",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "110113",
            name: "\u987A\u4E49\u533A"
          },
          {
            code: "110114",
            name: "\u660C\u5E73\u533A"
          },
          {
            code: "110115",
            name: "\u5927\u5174\u533A"
          },
          {
            code: "110116",
            name: "\u6000\u67D4\u533A"
          },
          {
            code: "110117",
            name: "\u5E73\u8C37\u533A"
          },
          {
            code: "110118",
            name: "\u5BC6\u4E91\u533A"
          },
          {
            code: "110119",
            name: "\u5EF6\u5E86\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "\u5929\u6D25\u5E02",
    children: [
      {
        code: "1201",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "120101",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "120102",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "120103",
            name: "\u6CB3\u897F\u533A"
          },
          {
            code: "120104",
            name: "\u5357\u5F00\u533A"
          },
          {
            code: "120105",
            name: "\u6CB3\u5317\u533A"
          },
          {
            code: "120106",
            name: "\u7EA2\u6865\u533A"
          },
          {
            code: "120110",
            name: "\u4E1C\u4E3D\u533A"
          },
          {
            code: "120111",
            name: "\u897F\u9752\u533A"
          },
          {
            code: "120112",
            name: "\u6D25\u5357\u533A"
          },
          {
            code: "120113",
            name: "\u5317\u8FB0\u533A"
          },
          {
            code: "120114",
            name: "\u6B66\u6E05\u533A"
          },
          {
            code: "120115",
            name: "\u5B9D\u577B\u533A"
          },
          {
            code: "120116",
            name: "\u6EE8\u6D77\u65B0\u533A"
          },
          {
            code: "120117",
            name: "\u5B81\u6CB3\u533A"
          },
          {
            code: "120118",
            name: "\u9759\u6D77\u533A"
          },
          {
            code: "120119",
            name: "\u84DF\u5DDE\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "\u6CB3\u5317\u7701",
    children: [
      {
        code: "1301",
        name: "\u77F3\u5BB6\u5E84\u5E02",
        children: [
          {
            code: "130102",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "130104",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130105",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130107",
            name: "\u4E95\u9649\u77FF\u533A"
          },
          {
            code: "130108",
            name: "\u88D5\u534E\u533A"
          },
          {
            code: "130109",
            name: "\u85C1\u57CE\u533A"
          },
          {
            code: "130110",
            name: "\u9E7F\u6CC9\u533A"
          },
          {
            code: "130111",
            name: "\u683E\u57CE\u533A"
          },
          {
            code: "130121",
            name: "\u4E95\u9649\u53BF"
          },
          {
            code: "130123",
            name: "\u6B63\u5B9A\u53BF"
          },
          {
            code: "130125",
            name: "\u884C\u5510\u53BF"
          },
          {
            code: "130126",
            name: "\u7075\u5BFF\u53BF"
          },
          {
            code: "130127",
            name: "\u9AD8\u9091\u53BF"
          },
          {
            code: "130128",
            name: "\u6DF1\u6CFD\u53BF"
          },
          {
            code: "130129",
            name: "\u8D5E\u7687\u53BF"
          },
          {
            code: "130130",
            name: "\u65E0\u6781\u53BF"
          },
          {
            code: "130131",
            name: "\u5E73\u5C71\u53BF"
          },
          {
            code: "130132",
            name: "\u5143\u6C0F\u53BF"
          },
          {
            code: "130133",
            name: "\u8D75\u53BF"
          },
          {
            code: "130171",
            name: "\u77F3\u5BB6\u5E84\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130172",
            name: "\u77F3\u5BB6\u5E84\u5FAA\u73AF\u5316\u5DE5\u56ED\u533A"
          },
          {
            code: "130181",
            name: "\u8F9B\u96C6\u5E02"
          },
          {
            code: "130183",
            name: "\u664B\u5DDE\u5E02"
          },
          {
            code: "130184",
            name: "\u65B0\u4E50\u5E02"
          }
        ]
      },
      {
        code: "1302",
        name: "\u5510\u5C71\u5E02",
        children: [
          {
            code: "130202",
            name: "\u8DEF\u5357\u533A"
          },
          {
            code: "130203",
            name: "\u8DEF\u5317\u533A"
          },
          {
            code: "130204",
            name: "\u53E4\u51B6\u533A"
          },
          {
            code: "130205",
            name: "\u5F00\u5E73\u533A"
          },
          {
            code: "130207",
            name: "\u4E30\u5357\u533A"
          },
          {
            code: "130208",
            name: "\u4E30\u6DA6\u533A"
          },
          {
            code: "130209",
            name: "\u66F9\u5983\u7538\u533A"
          },
          {
            code: "130224",
            name: "\u6EE6\u5357\u53BF"
          },
          {
            code: "130225",
            name: "\u4E50\u4EAD\u53BF"
          },
          {
            code: "130227",
            name: "\u8FC1\u897F\u53BF"
          },
          {
            code: "130229",
            name: "\u7389\u7530\u53BF"
          },
          {
            code: "130271",
            name: "\u6CB3\u5317\u5510\u5C71\u82A6\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130272",
            name: "\u5510\u5C71\u5E02\u6C49\u6CBD\u7BA1\u7406\u533A"
          },
          {
            code: "130273",
            name: "\u5510\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130274",
            name: "\u6CB3\u5317\u5510\u5C71\u6D77\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130281",
            name: "\u9075\u5316\u5E02"
          },
          {
            code: "130283",
            name: "\u8FC1\u5B89\u5E02"
          },
          {
            code: "130284",
            name: "\u6EE6\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1303",
        name: "\u79E6\u7687\u5C9B\u5E02",
        children: [
          {
            code: "130302",
            name: "\u6D77\u6E2F\u533A"
          },
          {
            code: "130303",
            name: "\u5C71\u6D77\u5173\u533A"
          },
          {
            code: "130304",
            name: "\u5317\u6234\u6CB3\u533A"
          },
          {
            code: "130306",
            name: "\u629A\u5B81\u533A"
          },
          {
            code: "130321",
            name: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130322",
            name: "\u660C\u9ECE\u53BF"
          },
          {
            code: "130324",
            name: "\u5362\u9F99\u53BF"
          },
          {
            code: "130371",
            name: "\u79E6\u7687\u5C9B\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130372",
            name: "\u5317\u6234\u6CB3\u65B0\u533A"
          }
        ]
      },
      {
        code: "1304",
        name: "\u90AF\u90F8\u5E02",
        children: [
          {
            code: "130402",
            name: "\u90AF\u5C71\u533A"
          },
          {
            code: "130403",
            name: "\u4E1B\u53F0\u533A"
          },
          {
            code: "130404",
            name: "\u590D\u5174\u533A"
          },
          {
            code: "130406",
            name: "\u5CF0\u5CF0\u77FF\u533A"
          },
          {
            code: "130407",
            name: "\u80A5\u4E61\u533A"
          },
          {
            code: "130408",
            name: "\u6C38\u5E74\u533A"
          },
          {
            code: "130423",
            name: "\u4E34\u6F33\u53BF"
          },
          {
            code: "130424",
            name: "\u6210\u5B89\u53BF"
          },
          {
            code: "130425",
            name: "\u5927\u540D\u53BF"
          },
          {
            code: "130426",
            name: "\u6D89\u53BF"
          },
          {
            code: "130427",
            name: "\u78C1\u53BF"
          },
          {
            code: "130430",
            name: "\u90B1\u53BF"
          },
          {
            code: "130431",
            name: "\u9E21\u6CFD\u53BF"
          },
          {
            code: "130432",
            name: "\u5E7F\u5E73\u53BF"
          },
          {
            code: "130433",
            name: "\u9986\u9676\u53BF"
          },
          {
            code: "130434",
            name: "\u9B4F\u53BF"
          },
          {
            code: "130435",
            name: "\u66F2\u5468\u53BF"
          },
          {
            code: "130471",
            name: "\u90AF\u90F8\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130473",
            name: "\u90AF\u90F8\u5180\u5357\u65B0\u533A"
          },
          {
            code: "130481",
            name: "\u6B66\u5B89\u5E02"
          }
        ]
      },
      {
        code: "1305",
        name: "\u90A2\u53F0\u5E02",
        children: [
          {
            code: "130502",
            name: "\u8944\u90FD\u533A"
          },
          {
            code: "130503",
            name: "\u4FE1\u90FD\u533A"
          },
          {
            code: "130505",
            name: "\u4EFB\u6CFD\u533A"
          },
          {
            code: "130506",
            name: "\u5357\u548C\u533A"
          },
          {
            code: "130522",
            name: "\u4E34\u57CE\u53BF"
          },
          {
            code: "130523",
            name: "\u5185\u4E18\u53BF"
          },
          {
            code: "130524",
            name: "\u67CF\u4E61\u53BF"
          },
          {
            code: "130525",
            name: "\u9686\u5C27\u53BF"
          },
          {
            code: "130528",
            name: "\u5B81\u664B\u53BF"
          },
          {
            code: "130529",
            name: "\u5DE8\u9E7F\u53BF"
          },
          {
            code: "130530",
            name: "\u65B0\u6CB3\u53BF"
          },
          {
            code: "130531",
            name: "\u5E7F\u5B97\u53BF"
          },
          {
            code: "130532",
            name: "\u5E73\u4E61\u53BF"
          },
          {
            code: "130533",
            name: "\u5A01\u53BF"
          },
          {
            code: "130534",
            name: "\u6E05\u6CB3\u53BF"
          },
          {
            code: "130535",
            name: "\u4E34\u897F\u53BF"
          },
          {
            code: "130571",
            name: "\u6CB3\u5317\u90A2\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130581",
            name: "\u5357\u5BAB\u5E02"
          },
          {
            code: "130582",
            name: "\u6C99\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1306",
        name: "\u4FDD\u5B9A\u5E02",
        children: [
          {
            code: "130602",
            name: "\u7ADE\u79C0\u533A"
          },
          {
            code: "130606",
            name: "\u83B2\u6C60\u533A"
          },
          {
            code: "130607",
            name: "\u6EE1\u57CE\u533A"
          },
          {
            code: "130608",
            name: "\u6E05\u82D1\u533A"
          },
          {
            code: "130609",
            name: "\u5F90\u6C34\u533A"
          },
          {
            code: "130623",
            name: "\u6D9E\u6C34\u53BF"
          },
          {
            code: "130624",
            name: "\u961C\u5E73\u53BF"
          },
          {
            code: "130626",
            name: "\u5B9A\u5174\u53BF"
          },
          {
            code: "130627",
            name: "\u5510\u53BF"
          },
          {
            code: "130628",
            name: "\u9AD8\u9633\u53BF"
          },
          {
            code: "130629",
            name: "\u5BB9\u57CE\u53BF"
          },
          {
            code: "130630",
            name: "\u6D9E\u6E90\u53BF"
          },
          {
            code: "130631",
            name: "\u671B\u90FD\u53BF"
          },
          {
            code: "130632",
            name: "\u5B89\u65B0\u53BF"
          },
          {
            code: "130633",
            name: "\u6613\u53BF"
          },
          {
            code: "130634",
            name: "\u66F2\u9633\u53BF"
          },
          {
            code: "130635",
            name: "\u8821\u53BF"
          },
          {
            code: "130636",
            name: "\u987A\u5E73\u53BF"
          },
          {
            code: "130637",
            name: "\u535A\u91CE\u53BF"
          },
          {
            code: "130638",
            name: "\u96C4\u53BF"
          },
          {
            code: "130671",
            name: "\u4FDD\u5B9A\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130672",
            name: "\u4FDD\u5B9A\u767D\u6C9F\u65B0\u57CE"
          },
          {
            code: "130681",
            name: "\u6DBF\u5DDE\u5E02"
          },
          {
            code: "130682",
            name: "\u5B9A\u5DDE\u5E02"
          },
          {
            code: "130683",
            name: "\u5B89\u56FD\u5E02"
          },
          {
            code: "130684",
            name: "\u9AD8\u7891\u5E97\u5E02"
          }
        ]
      },
      {
        code: "1307",
        name: "\u5F20\u5BB6\u53E3\u5E02",
        children: [
          {
            code: "130702",
            name: "\u6865\u4E1C\u533A"
          },
          {
            code: "130703",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130705",
            name: "\u5BA3\u5316\u533A"
          },
          {
            code: "130706",
            name: "\u4E0B\u82B1\u56ED\u533A"
          },
          {
            code: "130708",
            name: "\u4E07\u5168\u533A"
          },
          {
            code: "130709",
            name: "\u5D07\u793C\u533A"
          },
          {
            code: "130722",
            name: "\u5F20\u5317\u53BF"
          },
          {
            code: "130723",
            name: "\u5EB7\u4FDD\u53BF"
          },
          {
            code: "130724",
            name: "\u6CBD\u6E90\u53BF"
          },
          {
            code: "130725",
            name: "\u5C1A\u4E49\u53BF"
          },
          {
            code: "130726",
            name: "\u851A\u53BF"
          },
          {
            code: "130727",
            name: "\u9633\u539F\u53BF"
          },
          {
            code: "130728",
            name: "\u6000\u5B89\u53BF"
          },
          {
            code: "130730",
            name: "\u6000\u6765\u53BF"
          },
          {
            code: "130731",
            name: "\u6DBF\u9E7F\u53BF"
          },
          {
            code: "130732",
            name: "\u8D64\u57CE\u53BF"
          },
          {
            code: "130771",
            name: "\u5F20\u5BB6\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130772",
            name: "\u5F20\u5BB6\u53E3\u5E02\u5BDF\u5317\u7BA1\u7406\u533A"
          },
          {
            code: "130773",
            name: "\u5F20\u5BB6\u53E3\u5E02\u585E\u5317\u7BA1\u7406\u533A"
          }
        ]
      },
      {
        code: "1308",
        name: "\u627F\u5FB7\u5E02",
        children: [
          {
            code: "130802",
            name: "\u53CC\u6865\u533A"
          },
          {
            code: "130803",
            name: "\u53CC\u6EE6\u533A"
          },
          {
            code: "130804",
            name: "\u9E70\u624B\u8425\u5B50\u77FF\u533A"
          },
          {
            code: "130821",
            name: "\u627F\u5FB7\u53BF"
          },
          {
            code: "130822",
            name: "\u5174\u9686\u53BF"
          },
          {
            code: "130824",
            name: "\u6EE6\u5E73\u53BF"
          },
          {
            code: "130825",
            name: "\u9686\u5316\u53BF"
          },
          {
            code: "130826",
            name: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130827",
            name: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130828",
            name: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130871",
            name: "\u627F\u5FB7\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130881",
            name: "\u5E73\u6CC9\u5E02"
          }
        ]
      },
      {
        code: "1309",
        name: "\u6CA7\u5DDE\u5E02",
        children: [
          {
            code: "130902",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130903",
            name: "\u8FD0\u6CB3\u533A"
          },
          {
            code: "130921",
            name: "\u6CA7\u53BF"
          },
          {
            code: "130922",
            name: "\u9752\u53BF"
          },
          {
            code: "130923",
            name: "\u4E1C\u5149\u53BF"
          },
          {
            code: "130924",
            name: "\u6D77\u5174\u53BF"
          },
          {
            code: "130925",
            name: "\u76D0\u5C71\u53BF"
          },
          {
            code: "130926",
            name: "\u8083\u5B81\u53BF"
          },
          {
            code: "130927",
            name: "\u5357\u76AE\u53BF"
          },
          {
            code: "130928",
            name: "\u5434\u6865\u53BF"
          },
          {
            code: "130929",
            name: "\u732E\u53BF"
          },
          {
            code: "130930",
            name: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130971",
            name: "\u6CB3\u5317\u6CA7\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130972",
            name: "\u6CA7\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130973",
            name: "\u6CA7\u5DDE\u6E24\u6D77\u65B0\u533A"
          },
          {
            code: "130981",
            name: "\u6CCA\u5934\u5E02"
          },
          {
            code: "130982",
            name: "\u4EFB\u4E18\u5E02"
          },
          {
            code: "130983",
            name: "\u9EC4\u9A85\u5E02"
          },
          {
            code: "130984",
            name: "\u6CB3\u95F4\u5E02"
          }
        ]
      },
      {
        code: "1310",
        name: "\u5ECA\u574A\u5E02",
        children: [
          {
            code: "131002",
            name: "\u5B89\u6B21\u533A"
          },
          {
            code: "131003",
            name: "\u5E7F\u9633\u533A"
          },
          {
            code: "131022",
            name: "\u56FA\u5B89\u53BF"
          },
          {
            code: "131023",
            name: "\u6C38\u6E05\u53BF"
          },
          {
            code: "131024",
            name: "\u9999\u6CB3\u53BF"
          },
          {
            code: "131025",
            name: "\u5927\u57CE\u53BF"
          },
          {
            code: "131026",
            name: "\u6587\u5B89\u53BF"
          },
          {
            code: "131028",
            name: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "131071",
            name: "\u5ECA\u574A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "131081",
            name: "\u9738\u5DDE\u5E02"
          },
          {
            code: "131082",
            name: "\u4E09\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1311",
        name: "\u8861\u6C34\u5E02",
        children: [
          {
            code: "131102",
            name: "\u6843\u57CE\u533A"
          },
          {
            code: "131103",
            name: "\u5180\u5DDE\u533A"
          },
          {
            code: "131121",
            name: "\u67A3\u5F3A\u53BF"
          },
          {
            code: "131122",
            name: "\u6B66\u9091\u53BF"
          },
          {
            code: "131123",
            name: "\u6B66\u5F3A\u53BF"
          },
          {
            code: "131124",
            name: "\u9976\u9633\u53BF"
          },
          {
            code: "131125",
            name: "\u5B89\u5E73\u53BF"
          },
          {
            code: "131126",
            name: "\u6545\u57CE\u53BF"
          },
          {
            code: "131127",
            name: "\u666F\u53BF"
          },
          {
            code: "131128",
            name: "\u961C\u57CE\u53BF"
          },
          {
            code: "131171",
            name: "\u6CB3\u5317\u8861\u6C34\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "131172",
            name: "\u8861\u6C34\u6EE8\u6E56\u65B0\u533A"
          },
          {
            code: "131182",
            name: "\u6DF1\u5DDE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "\u5C71\u897F\u7701",
    children: [
      {
        code: "1401",
        name: "\u592A\u539F\u5E02",
        children: [
          {
            code: "140105",
            name: "\u5C0F\u5E97\u533A"
          },
          {
            code: "140106",
            name: "\u8FCE\u6CFD\u533A"
          },
          {
            code: "140107",
            name: "\u674F\u82B1\u5CAD\u533A"
          },
          {
            code: "140108",
            name: "\u5C16\u8349\u576A\u533A"
          },
          {
            code: "140109",
            name: "\u4E07\u67CF\u6797\u533A"
          },
          {
            code: "140110",
            name: "\u664B\u6E90\u533A"
          },
          {
            code: "140121",
            name: "\u6E05\u5F90\u53BF"
          },
          {
            code: "140122",
            name: "\u9633\u66F2\u53BF"
          },
          {
            code: "140123",
            name: "\u5A04\u70E6\u53BF"
          },
          {
            code: "140171",
            name: "\u5C71\u897F\u8F6C\u578B\u7EFC\u5408\u6539\u9769\u793A\u8303\u533A"
          },
          {
            code: "140181",
            name: "\u53E4\u4EA4\u5E02"
          }
        ]
      },
      {
        code: "1402",
        name: "\u5927\u540C\u5E02",
        children: [
          {
            code: "140212",
            name: "\u65B0\u8363\u533A"
          },
          {
            code: "140213",
            name: "\u5E73\u57CE\u533A"
          },
          {
            code: "140214",
            name: "\u4E91\u5188\u533A"
          },
          {
            code: "140215",
            name: "\u4E91\u5DDE\u533A"
          },
          {
            code: "140221",
            name: "\u9633\u9AD8\u53BF"
          },
          {
            code: "140222",
            name: "\u5929\u9547\u53BF"
          },
          {
            code: "140223",
            name: "\u5E7F\u7075\u53BF"
          },
          {
            code: "140224",
            name: "\u7075\u4E18\u53BF"
          },
          {
            code: "140225",
            name: "\u6D51\u6E90\u53BF"
          },
          {
            code: "140226",
            name: "\u5DE6\u4E91\u53BF"
          },
          {
            code: "140271",
            name: "\u5C71\u897F\u5927\u540C\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1403",
        name: "\u9633\u6CC9\u5E02",
        children: [
          {
            code: "140302",
            name: "\u57CE\u533A"
          },
          {
            code: "140303",
            name: "\u77FF\u533A"
          },
          {
            code: "140311",
            name: "\u90CA\u533A"
          },
          {
            code: "140321",
            name: "\u5E73\u5B9A\u53BF"
          },
          {
            code: "140322",
            name: "\u76C2\u53BF"
          }
        ]
      },
      {
        code: "1404",
        name: "\u957F\u6CBB\u5E02",
        children: [
          {
            code: "140403",
            name: "\u6F5E\u5DDE\u533A"
          },
          {
            code: "140404",
            name: "\u4E0A\u515A\u533A"
          },
          {
            code: "140405",
            name: "\u5C6F\u7559\u533A"
          },
          {
            code: "140406",
            name: "\u6F5E\u57CE\u533A"
          },
          {
            code: "140423",
            name: "\u8944\u57A3\u53BF"
          },
          {
            code: "140425",
            name: "\u5E73\u987A\u53BF"
          },
          {
            code: "140426",
            name: "\u9ECE\u57CE\u53BF"
          },
          {
            code: "140427",
            name: "\u58F6\u5173\u53BF"
          },
          {
            code: "140428",
            name: "\u957F\u5B50\u53BF"
          },
          {
            code: "140429",
            name: "\u6B66\u4E61\u53BF"
          },
          {
            code: "140430",
            name: "\u6C81\u53BF"
          },
          {
            code: "140431",
            name: "\u6C81\u6E90\u53BF"
          },
          {
            code: "140471",
            name: "\u5C71\u897F\u957F\u6CBB\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "1405",
        name: "\u664B\u57CE\u5E02",
        children: [
          {
            code: "140502",
            name: "\u57CE\u533A"
          },
          {
            code: "140521",
            name: "\u6C81\u6C34\u53BF"
          },
          {
            code: "140522",
            name: "\u9633\u57CE\u53BF"
          },
          {
            code: "140524",
            name: "\u9675\u5DDD\u53BF"
          },
          {
            code: "140525",
            name: "\u6CFD\u5DDE\u53BF"
          },
          {
            code: "140581",
            name: "\u9AD8\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1406",
        name: "\u6714\u5DDE\u5E02",
        children: [
          {
            code: "140602",
            name: "\u6714\u57CE\u533A"
          },
          {
            code: "140603",
            name: "\u5E73\u9C81\u533A"
          },
          {
            code: "140621",
            name: "\u5C71\u9634\u53BF"
          },
          {
            code: "140622",
            name: "\u5E94\u53BF"
          },
          {
            code: "140623",
            name: "\u53F3\u7389\u53BF"
          },
          {
            code: "140671",
            name: "\u5C71\u897F\u6714\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "140681",
            name: "\u6000\u4EC1\u5E02"
          }
        ]
      },
      {
        code: "1407",
        name: "\u664B\u4E2D\u5E02",
        children: [
          {
            code: "140702",
            name: "\u6986\u6B21\u533A"
          },
          {
            code: "140703",
            name: "\u592A\u8C37\u533A"
          },
          {
            code: "140721",
            name: "\u6986\u793E\u53BF"
          },
          {
            code: "140722",
            name: "\u5DE6\u6743\u53BF"
          },
          {
            code: "140723",
            name: "\u548C\u987A\u53BF"
          },
          {
            code: "140724",
            name: "\u6614\u9633\u53BF"
          },
          {
            code: "140725",
            name: "\u5BFF\u9633\u53BF"
          },
          {
            code: "140727",
            name: "\u7941\u53BF"
          },
          {
            code: "140728",
            name: "\u5E73\u9065\u53BF"
          },
          {
            code: "140729",
            name: "\u7075\u77F3\u53BF"
          },
          {
            code: "140781",
            name: "\u4ECB\u4F11\u5E02"
          }
        ]
      },
      {
        code: "1408",
        name: "\u8FD0\u57CE\u5E02",
        children: [
          {
            code: "140802",
            name: "\u76D0\u6E56\u533A"
          },
          {
            code: "140821",
            name: "\u4E34\u7317\u53BF"
          },
          {
            code: "140822",
            name: "\u4E07\u8363\u53BF"
          },
          {
            code: "140823",
            name: "\u95FB\u559C\u53BF"
          },
          {
            code: "140824",
            name: "\u7A37\u5C71\u53BF"
          },
          {
            code: "140825",
            name: "\u65B0\u7EDB\u53BF"
          },
          {
            code: "140826",
            name: "\u7EDB\u53BF"
          },
          {
            code: "140827",
            name: "\u57A3\u66F2\u53BF"
          },
          {
            code: "140828",
            name: "\u590F\u53BF"
          },
          {
            code: "140829",
            name: "\u5E73\u9646\u53BF"
          },
          {
            code: "140830",
            name: "\u82AE\u57CE\u53BF"
          },
          {
            code: "140881",
            name: "\u6C38\u6D4E\u5E02"
          },
          {
            code: "140882",
            name: "\u6CB3\u6D25\u5E02"
          }
        ]
      },
      {
        code: "1409",
        name: "\u5FFB\u5DDE\u5E02",
        children: [
          {
            code: "140902",
            name: "\u5FFB\u5E9C\u533A"
          },
          {
            code: "140921",
            name: "\u5B9A\u8944\u53BF"
          },
          {
            code: "140922",
            name: "\u4E94\u53F0\u53BF"
          },
          {
            code: "140923",
            name: "\u4EE3\u53BF"
          },
          {
            code: "140924",
            name: "\u7E41\u5CD9\u53BF"
          },
          {
            code: "140925",
            name: "\u5B81\u6B66\u53BF"
          },
          {
            code: "140926",
            name: "\u9759\u4E50\u53BF"
          },
          {
            code: "140927",
            name: "\u795E\u6C60\u53BF"
          },
          {
            code: "140928",
            name: "\u4E94\u5BE8\u53BF"
          },
          {
            code: "140929",
            name: "\u5CA2\u5C9A\u53BF"
          },
          {
            code: "140930",
            name: "\u6CB3\u66F2\u53BF"
          },
          {
            code: "140931",
            name: "\u4FDD\u5FB7\u53BF"
          },
          {
            code: "140932",
            name: "\u504F\u5173\u53BF"
          },
          {
            code: "140971",
            name: "\u4E94\u53F0\u5C71\u98CE\u666F\u540D\u80DC\u533A"
          },
          {
            code: "140981",
            name: "\u539F\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1410",
        name: "\u4E34\u6C7E\u5E02",
        children: [
          {
            code: "141002",
            name: "\u5C27\u90FD\u533A"
          },
          {
            code: "141021",
            name: "\u66F2\u6C83\u53BF"
          },
          {
            code: "141022",
            name: "\u7FFC\u57CE\u53BF"
          },
          {
            code: "141023",
            name: "\u8944\u6C7E\u53BF"
          },
          {
            code: "141024",
            name: "\u6D2A\u6D1E\u53BF"
          },
          {
            code: "141025",
            name: "\u53E4\u53BF"
          },
          {
            code: "141026",
            name: "\u5B89\u6CFD\u53BF"
          },
          {
            code: "141027",
            name: "\u6D6E\u5C71\u53BF"
          },
          {
            code: "141028",
            name: "\u5409\u53BF"
          },
          {
            code: "141029",
            name: "\u4E61\u5B81\u53BF"
          },
          {
            code: "141030",
            name: "\u5927\u5B81\u53BF"
          },
          {
            code: "141031",
            name: "\u96B0\u53BF"
          },
          {
            code: "141032",
            name: "\u6C38\u548C\u53BF"
          },
          {
            code: "141033",
            name: "\u84B2\u53BF"
          },
          {
            code: "141034",
            name: "\u6C7E\u897F\u53BF"
          },
          {
            code: "141081",
            name: "\u4FAF\u9A6C\u5E02"
          },
          {
            code: "141082",
            name: "\u970D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1411",
        name: "\u5415\u6881\u5E02",
        children: [
          {
            code: "141102",
            name: "\u79BB\u77F3\u533A"
          },
          {
            code: "141121",
            name: "\u6587\u6C34\u53BF"
          },
          {
            code: "141122",
            name: "\u4EA4\u57CE\u53BF"
          },
          {
            code: "141123",
            name: "\u5174\u53BF"
          },
          {
            code: "141124",
            name: "\u4E34\u53BF"
          },
          {
            code: "141125",
            name: "\u67F3\u6797\u53BF"
          },
          {
            code: "141126",
            name: "\u77F3\u697C\u53BF"
          },
          {
            code: "141127",
            name: "\u5C9A\u53BF"
          },
          {
            code: "141128",
            name: "\u65B9\u5C71\u53BF"
          },
          {
            code: "141129",
            name: "\u4E2D\u9633\u53BF"
          },
          {
            code: "141130",
            name: "\u4EA4\u53E3\u53BF"
          },
          {
            code: "141181",
            name: "\u5B5D\u4E49\u5E02"
          },
          {
            code: "141182",
            name: "\u6C7E\u9633\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
    children: [
      {
        code: "1501",
        name: "\u547C\u548C\u6D69\u7279\u5E02",
        children: [
          {
            code: "150102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "150103",
            name: "\u56DE\u6C11\u533A"
          },
          {
            code: "150104",
            name: "\u7389\u6CC9\u533A"
          },
          {
            code: "150105",
            name: "\u8D5B\u7F55\u533A"
          },
          {
            code: "150121",
            name: "\u571F\u9ED8\u7279\u5DE6\u65D7"
          },
          {
            code: "150122",
            name: "\u6258\u514B\u6258\u53BF"
          },
          {
            code: "150123",
            name: "\u548C\u6797\u683C\u5C14\u53BF"
          },
          {
            code: "150124",
            name: "\u6E05\u6C34\u6CB3\u53BF"
          },
          {
            code: "150125",
            name: "\u6B66\u5DDD\u53BF"
          },
          {
            code: "150172",
            name: "\u547C\u548C\u6D69\u7279\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1502",
        name: "\u5305\u5934\u5E02",
        children: [
          {
            code: "150202",
            name: "\u4E1C\u6CB3\u533A"
          },
          {
            code: "150203",
            name: "\u6606\u90FD\u4ED1\u533A"
          },
          {
            code: "150204",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "150205",
            name: "\u77F3\u62D0\u533A"
          },
          {
            code: "150206",
            name: "\u767D\u4E91\u9102\u535A\u77FF\u533A"
          },
          {
            code: "150207",
            name: "\u4E5D\u539F\u533A"
          },
          {
            code: "150221",
            name: "\u571F\u9ED8\u7279\u53F3\u65D7"
          },
          {
            code: "150222",
            name: "\u56FA\u9633\u53BF"
          },
          {
            code: "150223",
            name: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7"
          },
          {
            code: "150271",
            name: "\u5305\u5934\u7A00\u571F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1503",
        name: "\u4E4C\u6D77\u5E02",
        children: [
          {
            code: "150302",
            name: "\u6D77\u52C3\u6E7E\u533A"
          },
          {
            code: "150303",
            name: "\u6D77\u5357\u533A"
          },
          {
            code: "150304",
            name: "\u4E4C\u8FBE\u533A"
          }
        ]
      },
      {
        code: "1504",
        name: "\u8D64\u5CF0\u5E02",
        children: [
          {
            code: "150402",
            name: "\u7EA2\u5C71\u533A"
          },
          {
            code: "150403",
            name: "\u5143\u5B9D\u5C71\u533A"
          },
          {
            code: "150404",
            name: "\u677E\u5C71\u533A"
          },
          {
            code: "150421",
            name: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7"
          },
          {
            code: "150422",
            name: "\u5DF4\u6797\u5DE6\u65D7"
          },
          {
            code: "150423",
            name: "\u5DF4\u6797\u53F3\u65D7"
          },
          {
            code: "150424",
            name: "\u6797\u897F\u53BF"
          },
          {
            code: "150425",
            name: "\u514B\u4EC0\u514B\u817E\u65D7"
          },
          {
            code: "150426",
            name: "\u7FC1\u725B\u7279\u65D7"
          },
          {
            code: "150428",
            name: "\u5580\u5587\u6C81\u65D7"
          },
          {
            code: "150429",
            name: "\u5B81\u57CE\u53BF"
          },
          {
            code: "150430",
            name: "\u6556\u6C49\u65D7"
          }
        ]
      },
      {
        code: "1505",
        name: "\u901A\u8FBD\u5E02",
        children: [
          {
            code: "150502",
            name: "\u79D1\u5C14\u6C81\u533A"
          },
          {
            code: "150521",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150522",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7"
          },
          {
            code: "150523",
            name: "\u5F00\u9C81\u53BF"
          },
          {
            code: "150524",
            name: "\u5E93\u4F26\u65D7"
          },
          {
            code: "150525",
            name: "\u5948\u66FC\u65D7"
          },
          {
            code: "150526",
            name: "\u624E\u9C81\u7279\u65D7"
          },
          {
            code: "150571",
            name: "\u901A\u8FBD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "150581",
            name: "\u970D\u6797\u90ED\u52D2\u5E02"
          }
        ]
      },
      {
        code: "1506",
        name: "\u9102\u5C14\u591A\u65AF\u5E02",
        children: [
          {
            code: "150602",
            name: "\u4E1C\u80DC\u533A"
          },
          {
            code: "150603",
            name: "\u5EB7\u5DF4\u4EC0\u533A"
          },
          {
            code: "150621",
            name: "\u8FBE\u62C9\u7279\u65D7"
          },
          {
            code: "150622",
            name: "\u51C6\u683C\u5C14\u65D7"
          },
          {
            code: "150623",
            name: "\u9102\u6258\u514B\u524D\u65D7"
          },
          {
            code: "150624",
            name: "\u9102\u6258\u514B\u65D7"
          },
          {
            code: "150625",
            name: "\u676D\u9526\u65D7"
          },
          {
            code: "150626",
            name: "\u4E4C\u5BA1\u65D7"
          },
          {
            code: "150627",
            name: "\u4F0A\u91D1\u970D\u6D1B\u65D7"
          }
        ]
      },
      {
        code: "1507",
        name: "\u547C\u4F26\u8D1D\u5C14\u5E02",
        children: [
          {
            code: "150702",
            name: "\u6D77\u62C9\u5C14\u533A"
          },
          {
            code: "150703",
            name: "\u624E\u8D49\u8BFA\u5C14\u533A"
          },
          {
            code: "150721",
            name: "\u963F\u8363\u65D7"
          },
          {
            code: "150722",
            name: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150723",
            name: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7"
          },
          {
            code: "150724",
            name: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150725",
            name: "\u9648\u5DF4\u5C14\u864E\u65D7"
          },
          {
            code: "150726",
            name: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7"
          },
          {
            code: "150727",
            name: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7"
          },
          {
            code: "150781",
            name: "\u6EE1\u6D32\u91CC\u5E02"
          },
          {
            code: "150782",
            name: "\u7259\u514B\u77F3\u5E02"
          },
          {
            code: "150783",
            name: "\u624E\u5170\u5C6F\u5E02"
          },
          {
            code: "150784",
            name: "\u989D\u5C14\u53E4\u7EB3\u5E02"
          },
          {
            code: "150785",
            name: "\u6839\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1508",
        name: "\u5DF4\u5F66\u6DD6\u5C14\u5E02",
        children: [
          {
            code: "150802",
            name: "\u4E34\u6CB3\u533A"
          },
          {
            code: "150821",
            name: "\u4E94\u539F\u53BF"
          },
          {
            code: "150822",
            name: "\u78F4\u53E3\u53BF"
          },
          {
            code: "150823",
            name: "\u4E4C\u62C9\u7279\u524D\u65D7"
          },
          {
            code: "150824",
            name: "\u4E4C\u62C9\u7279\u4E2D\u65D7"
          },
          {
            code: "150825",
            name: "\u4E4C\u62C9\u7279\u540E\u65D7"
          },
          {
            code: "150826",
            name: "\u676D\u9526\u540E\u65D7"
          }
        ]
      },
      {
        code: "1509",
        name: "\u4E4C\u5170\u5BDF\u5E03\u5E02",
        children: [
          {
            code: "150902",
            name: "\u96C6\u5B81\u533A"
          },
          {
            code: "150921",
            name: "\u5353\u8D44\u53BF"
          },
          {
            code: "150922",
            name: "\u5316\u5FB7\u53BF"
          },
          {
            code: "150923",
            name: "\u5546\u90FD\u53BF"
          },
          {
            code: "150924",
            name: "\u5174\u548C\u53BF"
          },
          {
            code: "150925",
            name: "\u51C9\u57CE\u53BF"
          },
          {
            code: "150926",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "150927",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150928",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7"
          },
          {
            code: "150929",
            name: "\u56DB\u5B50\u738B\u65D7"
          },
          {
            code: "150981",
            name: "\u4E30\u9547\u5E02"
          }
        ]
      },
      {
        code: "1522",
        name: "\u5174\u5B89\u76DF",
        children: [
          {
            code: "152201",
            name: "\u4E4C\u5170\u6D69\u7279\u5E02"
          },
          {
            code: "152202",
            name: "\u963F\u5C14\u5C71\u5E02"
          },
          {
            code: "152221",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "152222",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "152223",
            name: "\u624E\u8D49\u7279\u65D7"
          },
          {
            code: "152224",
            name: "\u7A81\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "1525",
        name: "\u9521\u6797\u90ED\u52D2\u76DF",
        children: [
          {
            code: "152501",
            name: "\u4E8C\u8FDE\u6D69\u7279\u5E02"
          },
          {
            code: "152502",
            name: "\u9521\u6797\u6D69\u7279\u5E02"
          },
          {
            code: "152522",
            name: "\u963F\u5DF4\u560E\u65D7"
          },
          {
            code: "152523",
            name: "\u82CF\u5C3C\u7279\u5DE6\u65D7"
          },
          {
            code: "152524",
            name: "\u82CF\u5C3C\u7279\u53F3\u65D7"
          },
          {
            code: "152525",
            name: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152526",
            name: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152527",
            name: "\u592A\u4EC6\u5BFA\u65D7"
          },
          {
            code: "152528",
            name: "\u9576\u9EC4\u65D7"
          },
          {
            code: "152529",
            name: "\u6B63\u9576\u767D\u65D7"
          },
          {
            code: "152530",
            name: "\u6B63\u84DD\u65D7"
          },
          {
            code: "152531",
            name: "\u591A\u4F26\u53BF"
          },
          {
            code: "152571",
            name: "\u4E4C\u62C9\u76D6\u7BA1\u59D4\u4F1A"
          }
        ]
      },
      {
        code: "1529",
        name: "\u963F\u62C9\u5584\u76DF",
        children: [
          {
            code: "152921",
            name: "\u963F\u62C9\u5584\u5DE6\u65D7"
          },
          {
            code: "152922",
            name: "\u963F\u62C9\u5584\u53F3\u65D7"
          },
          {
            code: "152923",
            name: "\u989D\u6D4E\u7EB3\u65D7"
          },
          {
            code: "152971",
            name: "\u5185\u8499\u53E4\u963F\u62C9\u5584\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "\u8FBD\u5B81\u7701",
    children: [
      {
        code: "2101",
        name: "\u6C88\u9633\u5E02",
        children: [
          {
            code: "210102",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "210103",
            name: "\u6C88\u6CB3\u533A"
          },
          {
            code: "210104",
            name: "\u5927\u4E1C\u533A"
          },
          {
            code: "210105",
            name: "\u7687\u59D1\u533A"
          },
          {
            code: "210106",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210111",
            name: "\u82CF\u5BB6\u5C6F\u533A"
          },
          {
            code: "210112",
            name: "\u6D51\u5357\u533A"
          },
          {
            code: "210113",
            name: "\u6C88\u5317\u65B0\u533A"
          },
          {
            code: "210114",
            name: "\u4E8E\u6D2A\u533A"
          },
          {
            code: "210115",
            name: "\u8FBD\u4E2D\u533A"
          },
          {
            code: "210123",
            name: "\u5EB7\u5E73\u53BF"
          },
          {
            code: "210124",
            name: "\u6CD5\u5E93\u53BF"
          },
          {
            code: "210181",
            name: "\u65B0\u6C11\u5E02"
          }
        ]
      },
      {
        code: "2102",
        name: "\u5927\u8FDE\u5E02",
        children: [
          {
            code: "210202",
            name: "\u4E2D\u5C71\u533A"
          },
          {
            code: "210203",
            name: "\u897F\u5C97\u533A"
          },
          {
            code: "210204",
            name: "\u6C99\u6CB3\u53E3\u533A"
          },
          {
            code: "210211",
            name: "\u7518\u4E95\u5B50\u533A"
          },
          {
            code: "210212",
            name: "\u65C5\u987A\u53E3\u533A"
          },
          {
            code: "210213",
            name: "\u91D1\u5DDE\u533A"
          },
          {
            code: "210214",
            name: "\u666E\u5170\u5E97\u533A"
          },
          {
            code: "210224",
            name: "\u957F\u6D77\u53BF"
          },
          {
            code: "210281",
            name: "\u74E6\u623F\u5E97\u5E02"
          },
          {
            code: "210283",
            name: "\u5E84\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2103",
        name: "\u978D\u5C71\u5E02",
        children: [
          {
            code: "210302",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "210303",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210304",
            name: "\u7ACB\u5C71\u533A"
          },
          {
            code: "210311",
            name: "\u5343\u5C71\u533A"
          },
          {
            code: "210321",
            name: "\u53F0\u5B89\u53BF"
          },
          {
            code: "210323",
            name: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210381",
            name: "\u6D77\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2104",
        name: "\u629A\u987A\u5E02",
        children: [
          {
            code: "210402",
            name: "\u65B0\u629A\u533A"
          },
          {
            code: "210403",
            name: "\u4E1C\u6D32\u533A"
          },
          {
            code: "210404",
            name: "\u671B\u82B1\u533A"
          },
          {
            code: "210411",
            name: "\u987A\u57CE\u533A"
          },
          {
            code: "210421",
            name: "\u629A\u987A\u53BF"
          },
          {
            code: "210422",
            name: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210423",
            name: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2105",
        name: "\u672C\u6EAA\u5E02",
        children: [
          {
            code: "210502",
            name: "\u5E73\u5C71\u533A"
          },
          {
            code: "210503",
            name: "\u6EAA\u6E56\u533A"
          },
          {
            code: "210504",
            name: "\u660E\u5C71\u533A"
          },
          {
            code: "210505",
            name: "\u5357\u82AC\u533A"
          },
          {
            code: "210521",
            name: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210522",
            name: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2106",
        name: "\u4E39\u4E1C\u5E02",
        children: [
          {
            code: "210602",
            name: "\u5143\u5B9D\u533A"
          },
          {
            code: "210603",
            name: "\u632F\u5174\u533A"
          },
          {
            code: "210604",
            name: "\u632F\u5B89\u533A"
          },
          {
            code: "210624",
            name: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210681",
            name: "\u4E1C\u6E2F\u5E02"
          },
          {
            code: "210682",
            name: "\u51E4\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2107",
        name: "\u9526\u5DDE\u5E02",
        children: [
          {
            code: "210702",
            name: "\u53E4\u5854\u533A"
          },
          {
            code: "210703",
            name: "\u51CC\u6CB3\u533A"
          },
          {
            code: "210711",
            name: "\u592A\u548C\u533A"
          },
          {
            code: "210726",
            name: "\u9ED1\u5C71\u53BF"
          },
          {
            code: "210727",
            name: "\u4E49\u53BF"
          },
          {
            code: "210781",
            name: "\u51CC\u6D77\u5E02"
          },
          {
            code: "210782",
            name: "\u5317\u9547\u5E02"
          }
        ]
      },
      {
        code: "2108",
        name: "\u8425\u53E3\u5E02",
        children: [
          {
            code: "210802",
            name: "\u7AD9\u524D\u533A"
          },
          {
            code: "210803",
            name: "\u897F\u5E02\u533A"
          },
          {
            code: "210804",
            name: "\u9C85\u9C7C\u5708\u533A"
          },
          {
            code: "210811",
            name: "\u8001\u8FB9\u533A"
          },
          {
            code: "210881",
            name: "\u76D6\u5DDE\u5E02"
          },
          {
            code: "210882",
            name: "\u5927\u77F3\u6865\u5E02"
          }
        ]
      },
      {
        code: "2109",
        name: "\u961C\u65B0\u5E02",
        children: [
          {
            code: "210902",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "210903",
            name: "\u65B0\u90B1\u533A"
          },
          {
            code: "210904",
            name: "\u592A\u5E73\u533A"
          },
          {
            code: "210905",
            name: "\u6E05\u6CB3\u95E8\u533A"
          },
          {
            code: "210911",
            name: "\u7EC6\u6CB3\u533A"
          },
          {
            code: "210921",
            name: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210922",
            name: "\u5F70\u6B66\u53BF"
          }
        ]
      },
      {
        code: "2110",
        name: "\u8FBD\u9633\u5E02",
        children: [
          {
            code: "211002",
            name: "\u767D\u5854\u533A"
          },
          {
            code: "211003",
            name: "\u6587\u5723\u533A"
          },
          {
            code: "211004",
            name: "\u5B8F\u4F1F\u533A"
          },
          {
            code: "211005",
            name: "\u5F13\u957F\u5CAD\u533A"
          },
          {
            code: "211011",
            name: "\u592A\u5B50\u6CB3\u533A"
          },
          {
            code: "211021",
            name: "\u8FBD\u9633\u53BF"
          },
          {
            code: "211081",
            name: "\u706F\u5854\u5E02"
          }
        ]
      },
      {
        code: "2111",
        name: "\u76D8\u9526\u5E02",
        children: [
          {
            code: "211102",
            name: "\u53CC\u53F0\u5B50\u533A"
          },
          {
            code: "211103",
            name: "\u5174\u9686\u53F0\u533A"
          },
          {
            code: "211104",
            name: "\u5927\u6D3C\u533A"
          },
          {
            code: "211122",
            name: "\u76D8\u5C71\u53BF"
          }
        ]
      },
      {
        code: "2112",
        name: "\u94C1\u5CAD\u5E02",
        children: [
          {
            code: "211202",
            name: "\u94F6\u5DDE\u533A"
          },
          {
            code: "211204",
            name: "\u6E05\u6CB3\u533A"
          },
          {
            code: "211221",
            name: "\u94C1\u5CAD\u53BF"
          },
          {
            code: "211223",
            name: "\u897F\u4E30\u53BF"
          },
          {
            code: "211224",
            name: "\u660C\u56FE\u53BF"
          },
          {
            code: "211281",
            name: "\u8C03\u5175\u5C71\u5E02"
          },
          {
            code: "211282",
            name: "\u5F00\u539F\u5E02"
          }
        ]
      },
      {
        code: "2113",
        name: "\u671D\u9633\u5E02",
        children: [
          {
            code: "211302",
            name: "\u53CC\u5854\u533A"
          },
          {
            code: "211303",
            name: "\u9F99\u57CE\u533A"
          },
          {
            code: "211321",
            name: "\u671D\u9633\u53BF"
          },
          {
            code: "211322",
            name: "\u5EFA\u5E73\u53BF"
          },
          {
            code: "211324",
            name: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "211381",
            name: "\u5317\u7968\u5E02"
          },
          {
            code: "211382",
            name: "\u51CC\u6E90\u5E02"
          }
        ]
      },
      {
        code: "2114",
        name: "\u846B\u82A6\u5C9B\u5E02",
        children: [
          {
            code: "211402",
            name: "\u8FDE\u5C71\u533A"
          },
          {
            code: "211403",
            name: "\u9F99\u6E2F\u533A"
          },
          {
            code: "211404",
            name: "\u5357\u7968\u533A"
          },
          {
            code: "211421",
            name: "\u7EE5\u4E2D\u53BF"
          },
          {
            code: "211422",
            name: "\u5EFA\u660C\u53BF"
          },
          {
            code: "211481",
            name: "\u5174\u57CE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "\u5409\u6797\u7701",
    children: [
      {
        code: "2201",
        name: "\u957F\u6625\u5E02",
        children: [
          {
            code: "220102",
            name: "\u5357\u5173\u533A"
          },
          {
            code: "220103",
            name: "\u5BBD\u57CE\u533A"
          },
          {
            code: "220104",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "220105",
            name: "\u4E8C\u9053\u533A"
          },
          {
            code: "220106",
            name: "\u7EFF\u56ED\u533A"
          },
          {
            code: "220112",
            name: "\u53CC\u9633\u533A"
          },
          {
            code: "220113",
            name: "\u4E5D\u53F0\u533A"
          },
          {
            code: "220122",
            name: "\u519C\u5B89\u53BF"
          },
          {
            code: "220171",
            name: "\u957F\u6625\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220172",
            name: "\u957F\u6625\u51C0\u6708\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220173",
            name: "\u957F\u6625\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220174",
            name: "\u957F\u6625\u6C7D\u8F66\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220182",
            name: "\u6986\u6811\u5E02"
          },
          {
            code: "220183",
            name: "\u5FB7\u60E0\u5E02"
          },
          {
            code: "220184",
            name: "\u516C\u4E3B\u5CAD\u5E02"
          }
        ]
      },
      {
        code: "2202",
        name: "\u5409\u6797\u5E02",
        children: [
          {
            code: "220202",
            name: "\u660C\u9091\u533A"
          },
          {
            code: "220203",
            name: "\u9F99\u6F6D\u533A"
          },
          {
            code: "220204",
            name: "\u8239\u8425\u533A"
          },
          {
            code: "220211",
            name: "\u4E30\u6EE1\u533A"
          },
          {
            code: "220221",
            name: "\u6C38\u5409\u53BF"
          },
          {
            code: "220271",
            name: "\u5409\u6797\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220272",
            name: "\u5409\u6797\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220273",
            name: "\u5409\u6797\u4E2D\u56FD\u65B0\u52A0\u5761\u98DF\u54C1\u533A"
          },
          {
            code: "220281",
            name: "\u86DF\u6CB3\u5E02"
          },
          {
            code: "220282",
            name: "\u6866\u7538\u5E02"
          },
          {
            code: "220283",
            name: "\u8212\u5170\u5E02"
          },
          {
            code: "220284",
            name: "\u78D0\u77F3\u5E02"
          }
        ]
      },
      {
        code: "2203",
        name: "\u56DB\u5E73\u5E02",
        children: [
          {
            code: "220302",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "220303",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "220322",
            name: "\u68A8\u6811\u53BF"
          },
          {
            code: "220323",
            name: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220382",
            name: "\u53CC\u8FBD\u5E02"
          }
        ]
      },
      {
        code: "2204",
        name: "\u8FBD\u6E90\u5E02",
        children: [
          {
            code: "220402",
            name: "\u9F99\u5C71\u533A"
          },
          {
            code: "220403",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "220421",
            name: "\u4E1C\u4E30\u53BF"
          },
          {
            code: "220422",
            name: "\u4E1C\u8FBD\u53BF"
          }
        ]
      },
      {
        code: "2205",
        name: "\u901A\u5316\u5E02",
        children: [
          {
            code: "220502",
            name: "\u4E1C\u660C\u533A"
          },
          {
            code: "220503",
            name: "\u4E8C\u9053\u6C5F\u533A"
          },
          {
            code: "220521",
            name: "\u901A\u5316\u53BF"
          },
          {
            code: "220523",
            name: "\u8F89\u5357\u53BF"
          },
          {
            code: "220524",
            name: "\u67F3\u6CB3\u53BF"
          },
          {
            code: "220581",
            name: "\u6885\u6CB3\u53E3\u5E02"
          },
          {
            code: "220582",
            name: "\u96C6\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2206",
        name: "\u767D\u5C71\u5E02",
        children: [
          {
            code: "220602",
            name: "\u6D51\u6C5F\u533A"
          },
          {
            code: "220605",
            name: "\u6C5F\u6E90\u533A"
          },
          {
            code: "220621",
            name: "\u629A\u677E\u53BF"
          },
          {
            code: "220622",
            name: "\u9756\u5B87\u53BF"
          },
          {
            code: "220623",
            name: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220681",
            name: "\u4E34\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2207",
        name: "\u677E\u539F\u5E02",
        children: [
          {
            code: "220702",
            name: "\u5B81\u6C5F\u533A"
          },
          {
            code: "220721",
            name: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220722",
            name: "\u957F\u5CAD\u53BF"
          },
          {
            code: "220723",
            name: "\u4E7E\u5B89\u53BF"
          },
          {
            code: "220771",
            name: "\u5409\u6797\u677E\u539F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220781",
            name: "\u6276\u4F59\u5E02"
          }
        ]
      },
      {
        code: "2208",
        name: "\u767D\u57CE\u5E02",
        children: [
          {
            code: "220802",
            name: "\u6D2E\u5317\u533A"
          },
          {
            code: "220821",
            name: "\u9547\u8D49\u53BF"
          },
          {
            code: "220822",
            name: "\u901A\u6986\u53BF"
          },
          {
            code: "220871",
            name: "\u5409\u6797\u767D\u57CE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220881",
            name: "\u6D2E\u5357\u5E02"
          },
          {
            code: "220882",
            name: "\u5927\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2224",
        name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "222401",
            name: "\u5EF6\u5409\u5E02"
          },
          {
            code: "222402",
            name: "\u56FE\u4EEC\u5E02"
          },
          {
            code: "222403",
            name: "\u6566\u5316\u5E02"
          },
          {
            code: "222404",
            name: "\u73F2\u6625\u5E02"
          },
          {
            code: "222405",
            name: "\u9F99\u4E95\u5E02"
          },
          {
            code: "222406",
            name: "\u548C\u9F99\u5E02"
          },
          {
            code: "222424",
            name: "\u6C6A\u6E05\u53BF"
          },
          {
            code: "222426",
            name: "\u5B89\u56FE\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "\u9ED1\u9F99\u6C5F\u7701",
    children: [
      {
        code: "2301",
        name: "\u54C8\u5C14\u6EE8\u5E02",
        children: [
          {
            code: "230102",
            name: "\u9053\u91CC\u533A"
          },
          {
            code: "230103",
            name: "\u5357\u5C97\u533A"
          },
          {
            code: "230104",
            name: "\u9053\u5916\u533A"
          },
          {
            code: "230108",
            name: "\u5E73\u623F\u533A"
          },
          {
            code: "230109",
            name: "\u677E\u5317\u533A"
          },
          {
            code: "230110",
            name: "\u9999\u574A\u533A"
          },
          {
            code: "230111",
            name: "\u547C\u5170\u533A"
          },
          {
            code: "230112",
            name: "\u963F\u57CE\u533A"
          },
          {
            code: "230113",
            name: "\u53CC\u57CE\u533A"
          },
          {
            code: "230123",
            name: "\u4F9D\u5170\u53BF"
          },
          {
            code: "230124",
            name: "\u65B9\u6B63\u53BF"
          },
          {
            code: "230125",
            name: "\u5BBE\u53BF"
          },
          {
            code: "230126",
            name: "\u5DF4\u5F66\u53BF"
          },
          {
            code: "230127",
            name: "\u6728\u5170\u53BF"
          },
          {
            code: "230128",
            name: "\u901A\u6CB3\u53BF"
          },
          {
            code: "230129",
            name: "\u5EF6\u5BFF\u53BF"
          },
          {
            code: "230183",
            name: "\u5C1A\u5FD7\u5E02"
          },
          {
            code: "230184",
            name: "\u4E94\u5E38\u5E02"
          }
        ]
      },
      {
        code: "2302",
        name: "\u9F50\u9F50\u54C8\u5C14\u5E02",
        children: [
          {
            code: "230202",
            name: "\u9F99\u6C99\u533A"
          },
          {
            code: "230203",
            name: "\u5EFA\u534E\u533A"
          },
          {
            code: "230204",
            name: "\u94C1\u950B\u533A"
          },
          {
            code: "230205",
            name: "\u6602\u6602\u6EAA\u533A"
          },
          {
            code: "230206",
            name: "\u5BCC\u62C9\u5C14\u57FA\u533A"
          },
          {
            code: "230207",
            name: "\u78BE\u5B50\u5C71\u533A"
          },
          {
            code: "230208",
            name: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A"
          },
          {
            code: "230221",
            name: "\u9F99\u6C5F\u53BF"
          },
          {
            code: "230223",
            name: "\u4F9D\u5B89\u53BF"
          },
          {
            code: "230224",
            name: "\u6CF0\u6765\u53BF"
          },
          {
            code: "230225",
            name: "\u7518\u5357\u53BF"
          },
          {
            code: "230227",
            name: "\u5BCC\u88D5\u53BF"
          },
          {
            code: "230229",
            name: "\u514B\u5C71\u53BF"
          },
          {
            code: "230230",
            name: "\u514B\u4E1C\u53BF"
          },
          {
            code: "230231",
            name: "\u62DC\u6CC9\u53BF"
          },
          {
            code: "230281",
            name: "\u8BB7\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2303",
        name: "\u9E21\u897F\u5E02",
        children: [
          {
            code: "230302",
            name: "\u9E21\u51A0\u533A"
          },
          {
            code: "230303",
            name: "\u6052\u5C71\u533A"
          },
          {
            code: "230304",
            name: "\u6EF4\u9053\u533A"
          },
          {
            code: "230305",
            name: "\u68A8\u6811\u533A"
          },
          {
            code: "230306",
            name: "\u57CE\u5B50\u6CB3\u533A"
          },
          {
            code: "230307",
            name: "\u9EBB\u5C71\u533A"
          },
          {
            code: "230321",
            name: "\u9E21\u4E1C\u53BF"
          },
          {
            code: "230381",
            name: "\u864E\u6797\u5E02"
          },
          {
            code: "230382",
            name: "\u5BC6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "2304",
        name: "\u9E64\u5C97\u5E02",
        children: [
          {
            code: "230402",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230403",
            name: "\u5DE5\u519C\u533A"
          },
          {
            code: "230404",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "230405",
            name: "\u5174\u5B89\u533A"
          },
          {
            code: "230406",
            name: "\u4E1C\u5C71\u533A"
          },
          {
            code: "230407",
            name: "\u5174\u5C71\u533A"
          },
          {
            code: "230421",
            name: "\u841D\u5317\u53BF"
          },
          {
            code: "230422",
            name: "\u7EE5\u6EE8\u53BF"
          }
        ]
      },
      {
        code: "2305",
        name: "\u53CC\u9E2D\u5C71\u5E02",
        children: [
          {
            code: "230502",
            name: "\u5C16\u5C71\u533A"
          },
          {
            code: "230503",
            name: "\u5CAD\u4E1C\u533A"
          },
          {
            code: "230505",
            name: "\u56DB\u65B9\u53F0\u533A"
          },
          {
            code: "230506",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "230521",
            name: "\u96C6\u8D24\u53BF"
          },
          {
            code: "230522",
            name: "\u53CB\u8C0A\u53BF"
          },
          {
            code: "230523",
            name: "\u5B9D\u6E05\u53BF"
          },
          {
            code: "230524",
            name: "\u9976\u6CB3\u53BF"
          }
        ]
      },
      {
        code: "2306",
        name: "\u5927\u5E86\u5E02",
        children: [
          {
            code: "230602",
            name: "\u8428\u5C14\u56FE\u533A"
          },
          {
            code: "230603",
            name: "\u9F99\u51E4\u533A"
          },
          {
            code: "230604",
            name: "\u8BA9\u80E1\u8DEF\u533A"
          },
          {
            code: "230605",
            name: "\u7EA2\u5C97\u533A"
          },
          {
            code: "230606",
            name: "\u5927\u540C\u533A"
          },
          {
            code: "230621",
            name: "\u8087\u5DDE\u53BF"
          },
          {
            code: "230622",
            name: "\u8087\u6E90\u53BF"
          },
          {
            code: "230623",
            name: "\u6797\u7538\u53BF"
          },
          {
            code: "230624",
            name: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "230671",
            name: "\u5927\u5E86\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "2307",
        name: "\u4F0A\u6625\u5E02",
        children: [
          {
            code: "230717",
            name: "\u4F0A\u7F8E\u533A"
          },
          {
            code: "230718",
            name: "\u4E4C\u7FE0\u533A"
          },
          {
            code: "230719",
            name: "\u53CB\u597D\u533A"
          },
          {
            code: "230722",
            name: "\u5609\u836B\u53BF"
          },
          {
            code: "230723",
            name: "\u6C64\u65FA\u53BF"
          },
          {
            code: "230724",
            name: "\u4E30\u6797\u53BF"
          },
          {
            code: "230725",
            name: "\u5927\u7B90\u5C71\u53BF"
          },
          {
            code: "230726",
            name: "\u5357\u5C94\u53BF"
          },
          {
            code: "230751",
            name: "\u91D1\u6797\u533A"
          },
          {
            code: "230781",
            name: "\u94C1\u529B\u5E02"
          }
        ]
      },
      {
        code: "2308",
        name: "\u4F73\u6728\u65AF\u5E02",
        children: [
          {
            code: "230803",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230804",
            name: "\u524D\u8FDB\u533A"
          },
          {
            code: "230805",
            name: "\u4E1C\u98CE\u533A"
          },
          {
            code: "230811",
            name: "\u90CA\u533A"
          },
          {
            code: "230822",
            name: "\u6866\u5357\u53BF"
          },
          {
            code: "230826",
            name: "\u6866\u5DDD\u53BF"
          },
          {
            code: "230828",
            name: "\u6C64\u539F\u53BF"
          },
          {
            code: "230881",
            name: "\u540C\u6C5F\u5E02"
          },
          {
            code: "230882",
            name: "\u5BCC\u9526\u5E02"
          },
          {
            code: "230883",
            name: "\u629A\u8FDC\u5E02"
          }
        ]
      },
      {
        code: "2309",
        name: "\u4E03\u53F0\u6CB3\u5E02",
        children: [
          {
            code: "230902",
            name: "\u65B0\u5174\u533A"
          },
          {
            code: "230903",
            name: "\u6843\u5C71\u533A"
          },
          {
            code: "230904",
            name: "\u8304\u5B50\u6CB3\u533A"
          },
          {
            code: "230921",
            name: "\u52C3\u5229\u53BF"
          }
        ]
      },
      {
        code: "2310",
        name: "\u7261\u4E39\u6C5F\u5E02",
        children: [
          {
            code: "231002",
            name: "\u4E1C\u5B89\u533A"
          },
          {
            code: "231003",
            name: "\u9633\u660E\u533A"
          },
          {
            code: "231004",
            name: "\u7231\u6C11\u533A"
          },
          {
            code: "231005",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "231025",
            name: "\u6797\u53E3\u53BF"
          },
          {
            code: "231071",
            name: "\u7261\u4E39\u6C5F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "231081",
            name: "\u7EE5\u82AC\u6CB3\u5E02"
          },
          {
            code: "231083",
            name: "\u6D77\u6797\u5E02"
          },
          {
            code: "231084",
            name: "\u5B81\u5B89\u5E02"
          },
          {
            code: "231085",
            name: "\u7A46\u68F1\u5E02"
          },
          {
            code: "231086",
            name: "\u4E1C\u5B81\u5E02"
          }
        ]
      },
      {
        code: "2311",
        name: "\u9ED1\u6CB3\u5E02",
        children: [
          {
            code: "231102",
            name: "\u7231\u8F89\u533A"
          },
          {
            code: "231123",
            name: "\u900A\u514B\u53BF"
          },
          {
            code: "231124",
            name: "\u5B59\u5434\u53BF"
          },
          {
            code: "231181",
            name: "\u5317\u5B89\u5E02"
          },
          {
            code: "231182",
            name: "\u4E94\u5927\u8FDE\u6C60\u5E02"
          },
          {
            code: "231183",
            name: "\u5AE9\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2312",
        name: "\u7EE5\u5316\u5E02",
        children: [
          {
            code: "231202",
            name: "\u5317\u6797\u533A"
          },
          {
            code: "231221",
            name: "\u671B\u594E\u53BF"
          },
          {
            code: "231222",
            name: "\u5170\u897F\u53BF"
          },
          {
            code: "231223",
            name: "\u9752\u5188\u53BF"
          },
          {
            code: "231224",
            name: "\u5E86\u5B89\u53BF"
          },
          {
            code: "231225",
            name: "\u660E\u6C34\u53BF"
          },
          {
            code: "231226",
            name: "\u7EE5\u68F1\u53BF"
          },
          {
            code: "231281",
            name: "\u5B89\u8FBE\u5E02"
          },
          {
            code: "231282",
            name: "\u8087\u4E1C\u5E02"
          },
          {
            code: "231283",
            name: "\u6D77\u4F26\u5E02"
          }
        ]
      },
      {
        code: "2327",
        name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A",
        children: [
          {
            code: "232701",
            name: "\u6F20\u6CB3\u5E02"
          },
          {
            code: "232721",
            name: "\u547C\u739B\u53BF"
          },
          {
            code: "232722",
            name: "\u5854\u6CB3\u53BF"
          },
          {
            code: "232761",
            name: "\u52A0\u683C\u8FBE\u5947\u533A"
          },
          {
            code: "232762",
            name: "\u677E\u5CAD\u533A"
          },
          {
            code: "232763",
            name: "\u65B0\u6797\u533A"
          },
          {
            code: "232764",
            name: "\u547C\u4E2D\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "\u4E0A\u6D77\u5E02",
    children: [
      {
        code: "3101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "310101",
            name: "\u9EC4\u6D66\u533A"
          },
          {
            code: "310104",
            name: "\u5F90\u6C47\u533A"
          },
          {
            code: "310105",
            name: "\u957F\u5B81\u533A"
          },
          {
            code: "310106",
            name: "\u9759\u5B89\u533A"
          },
          {
            code: "310107",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "310109",
            name: "\u8679\u53E3\u533A"
          },
          {
            code: "310110",
            name: "\u6768\u6D66\u533A"
          },
          {
            code: "310112",
            name: "\u95F5\u884C\u533A"
          },
          {
            code: "310113",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "310114",
            name: "\u5609\u5B9A\u533A"
          },
          {
            code: "310115",
            name: "\u6D66\u4E1C\u65B0\u533A"
          },
          {
            code: "310116",
            name: "\u91D1\u5C71\u533A"
          },
          {
            code: "310117",
            name: "\u677E\u6C5F\u533A"
          },
          {
            code: "310118",
            name: "\u9752\u6D66\u533A"
          },
          {
            code: "310120",
            name: "\u5949\u8D24\u533A"
          },
          {
            code: "310151",
            name: "\u5D07\u660E\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "\u6C5F\u82CF\u7701",
    children: [
      {
        code: "3201",
        name: "\u5357\u4EAC\u5E02",
        children: [
          {
            code: "320102",
            name: "\u7384\u6B66\u533A"
          },
          {
            code: "320104",
            name: "\u79E6\u6DEE\u533A"
          },
          {
            code: "320105",
            name: "\u5EFA\u90BA\u533A"
          },
          {
            code: "320106",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320111",
            name: "\u6D66\u53E3\u533A"
          },
          {
            code: "320113",
            name: "\u6816\u971E\u533A"
          },
          {
            code: "320114",
            name: "\u96E8\u82B1\u53F0\u533A"
          },
          {
            code: "320115",
            name: "\u6C5F\u5B81\u533A"
          },
          {
            code: "320116",
            name: "\u516D\u5408\u533A"
          },
          {
            code: "320117",
            name: "\u6EA7\u6C34\u533A"
          },
          {
            code: "320118",
            name: "\u9AD8\u6DF3\u533A"
          }
        ]
      },
      {
        code: "3202",
        name: "\u65E0\u9521\u5E02",
        children: [
          {
            code: "320205",
            name: "\u9521\u5C71\u533A"
          },
          {
            code: "320206",
            name: "\u60E0\u5C71\u533A"
          },
          {
            code: "320211",
            name: "\u6EE8\u6E56\u533A"
          },
          {
            code: "320213",
            name: "\u6881\u6EAA\u533A"
          },
          {
            code: "320214",
            name: "\u65B0\u5434\u533A"
          },
          {
            code: "320281",
            name: "\u6C5F\u9634\u5E02"
          },
          {
            code: "320282",
            name: "\u5B9C\u5174\u5E02"
          }
        ]
      },
      {
        code: "3203",
        name: "\u5F90\u5DDE\u5E02",
        children: [
          {
            code: "320302",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320303",
            name: "\u4E91\u9F99\u533A"
          },
          {
            code: "320305",
            name: "\u8D3E\u6C6A\u533A"
          },
          {
            code: "320311",
            name: "\u6CC9\u5C71\u533A"
          },
          {
            code: "320312",
            name: "\u94DC\u5C71\u533A"
          },
          {
            code: "320321",
            name: "\u4E30\u53BF"
          },
          {
            code: "320322",
            name: "\u6C9B\u53BF"
          },
          {
            code: "320324",
            name: "\u7762\u5B81\u53BF"
          },
          {
            code: "320371",
            name: "\u5F90\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320381",
            name: "\u65B0\u6C82\u5E02"
          },
          {
            code: "320382",
            name: "\u90B3\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3204",
        name: "\u5E38\u5DDE\u5E02",
        children: [
          {
            code: "320402",
            name: "\u5929\u5B81\u533A"
          },
          {
            code: "320404",
            name: "\u949F\u697C\u533A"
          },
          {
            code: "320411",
            name: "\u65B0\u5317\u533A"
          },
          {
            code: "320412",
            name: "\u6B66\u8FDB\u533A"
          },
          {
            code: "320413",
            name: "\u91D1\u575B\u533A"
          },
          {
            code: "320481",
            name: "\u6EA7\u9633\u5E02"
          }
        ]
      },
      {
        code: "3205",
        name: "\u82CF\u5DDE\u5E02",
        children: [
          {
            code: "320505",
            name: "\u864E\u4E18\u533A"
          },
          {
            code: "320506",
            name: "\u5434\u4E2D\u533A"
          },
          {
            code: "320507",
            name: "\u76F8\u57CE\u533A"
          },
          {
            code: "320508",
            name: "\u59D1\u82CF\u533A"
          },
          {
            code: "320509",
            name: "\u5434\u6C5F\u533A"
          },
          {
            code: "320571",
            name: "\u82CF\u5DDE\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "320581",
            name: "\u5E38\u719F\u5E02"
          },
          {
            code: "320582",
            name: "\u5F20\u5BB6\u6E2F\u5E02"
          },
          {
            code: "320583",
            name: "\u6606\u5C71\u5E02"
          },
          {
            code: "320585",
            name: "\u592A\u4ED3\u5E02"
          }
        ]
      },
      {
        code: "3206",
        name: "\u5357\u901A\u5E02",
        children: [
          {
            code: "320602",
            name: "\u5D07\u5DDD\u533A"
          },
          {
            code: "320611",
            name: "\u6E2F\u95F8\u533A"
          },
          {
            code: "320612",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "320623",
            name: "\u5982\u4E1C\u53BF"
          },
          {
            code: "320671",
            name: "\u5357\u901A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320681",
            name: "\u542F\u4E1C\u5E02"
          },
          {
            code: "320682",
            name: "\u5982\u768B\u5E02"
          },
          {
            code: "320684",
            name: "\u6D77\u95E8\u5E02"
          },
          {
            code: "320685",
            name: "\u6D77\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3207",
        name: "\u8FDE\u4E91\u6E2F\u5E02",
        children: [
          {
            code: "320703",
            name: "\u8FDE\u4E91\u533A"
          },
          {
            code: "320706",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "320707",
            name: "\u8D63\u6986\u533A"
          },
          {
            code: "320722",
            name: "\u4E1C\u6D77\u53BF"
          },
          {
            code: "320723",
            name: "\u704C\u4E91\u53BF"
          },
          {
            code: "320724",
            name: "\u704C\u5357\u53BF"
          },
          {
            code: "320771",
            name: "\u8FDE\u4E91\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320772",
            name: "\u8FDE\u4E91\u6E2F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3208",
        name: "\u6DEE\u5B89\u5E02",
        children: [
          {
            code: "320803",
            name: "\u6DEE\u5B89\u533A"
          },
          {
            code: "320804",
            name: "\u6DEE\u9634\u533A"
          },
          {
            code: "320812",
            name: "\u6E05\u6C5F\u6D66\u533A"
          },
          {
            code: "320813",
            name: "\u6D2A\u6CFD\u533A"
          },
          {
            code: "320826",
            name: "\u6D9F\u6C34\u53BF"
          },
          {
            code: "320830",
            name: "\u76F1\u7719\u53BF"
          },
          {
            code: "320831",
            name: "\u91D1\u6E56\u53BF"
          },
          {
            code: "320871",
            name: "\u6DEE\u5B89\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3209",
        name: "\u76D0\u57CE\u5E02",
        children: [
          {
            code: "320902",
            name: "\u4EAD\u6E56\u533A"
          },
          {
            code: "320903",
            name: "\u76D0\u90FD\u533A"
          },
          {
            code: "320904",
            name: "\u5927\u4E30\u533A"
          },
          {
            code: "320921",
            name: "\u54CD\u6C34\u53BF"
          },
          {
            code: "320922",
            name: "\u6EE8\u6D77\u53BF"
          },
          {
            code: "320923",
            name: "\u961C\u5B81\u53BF"
          },
          {
            code: "320924",
            name: "\u5C04\u9633\u53BF"
          },
          {
            code: "320925",
            name: "\u5EFA\u6E56\u53BF"
          },
          {
            code: "320971",
            name: "\u76D0\u57CE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320981",
            name: "\u4E1C\u53F0\u5E02"
          }
        ]
      },
      {
        code: "3210",
        name: "\u626C\u5DDE\u5E02",
        children: [
          {
            code: "321002",
            name: "\u5E7F\u9675\u533A"
          },
          {
            code: "321003",
            name: "\u9097\u6C5F\u533A"
          },
          {
            code: "321012",
            name: "\u6C5F\u90FD\u533A"
          },
          {
            code: "321023",
            name: "\u5B9D\u5E94\u53BF"
          },
          {
            code: "321071",
            name: "\u626C\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "321081",
            name: "\u4EEA\u5F81\u5E02"
          },
          {
            code: "321084",
            name: "\u9AD8\u90AE\u5E02"
          }
        ]
      },
      {
        code: "3211",
        name: "\u9547\u6C5F\u5E02",
        children: [
          {
            code: "321102",
            name: "\u4EAC\u53E3\u533A"
          },
          {
            code: "321111",
            name: "\u6DA6\u5DDE\u533A"
          },
          {
            code: "321112",
            name: "\u4E39\u5F92\u533A"
          },
          {
            code: "321171",
            name: "\u9547\u6C5F\u65B0\u533A"
          },
          {
            code: "321181",
            name: "\u4E39\u9633\u5E02"
          },
          {
            code: "321182",
            name: "\u626C\u4E2D\u5E02"
          },
          {
            code: "321183",
            name: "\u53E5\u5BB9\u5E02"
          }
        ]
      },
      {
        code: "3212",
        name: "\u6CF0\u5DDE\u5E02",
        children: [
          {
            code: "321202",
            name: "\u6D77\u9675\u533A"
          },
          {
            code: "321203",
            name: "\u9AD8\u6E2F\u533A"
          },
          {
            code: "321204",
            name: "\u59DC\u5830\u533A"
          },
          {
            code: "321271",
            name: "\u6CF0\u5DDE\u533B\u836F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "321281",
            name: "\u5174\u5316\u5E02"
          },
          {
            code: "321282",
            name: "\u9756\u6C5F\u5E02"
          },
          {
            code: "321283",
            name: "\u6CF0\u5174\u5E02"
          }
        ]
      },
      {
        code: "3213",
        name: "\u5BBF\u8FC1\u5E02",
        children: [
          {
            code: "321302",
            name: "\u5BBF\u57CE\u533A"
          },
          {
            code: "321311",
            name: "\u5BBF\u8C6B\u533A"
          },
          {
            code: "321322",
            name: "\u6CAD\u9633\u53BF"
          },
          {
            code: "321323",
            name: "\u6CD7\u9633\u53BF"
          },
          {
            code: "321324",
            name: "\u6CD7\u6D2A\u53BF"
          },
          {
            code: "321371",
            name: "\u5BBF\u8FC1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "\u6D59\u6C5F\u7701",
    children: [
      {
        code: "3301",
        name: "\u676D\u5DDE\u5E02",
        children: [
          {
            code: "330102",
            name: "\u4E0A\u57CE\u533A"
          },
          {
            code: "330103",
            name: "\u4E0B\u57CE\u533A"
          },
          {
            code: "330104",
            name: "\u6C5F\u5E72\u533A"
          },
          {
            code: "330105",
            name: "\u62F1\u5885\u533A"
          },
          {
            code: "330106",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "330108",
            name: "\u6EE8\u6C5F\u533A"
          },
          {
            code: "330109",
            name: "\u8427\u5C71\u533A"
          },
          {
            code: "330110",
            name: "\u4F59\u676D\u533A"
          },
          {
            code: "330111",
            name: "\u5BCC\u9633\u533A"
          },
          {
            code: "330112",
            name: "\u4E34\u5B89\u533A"
          },
          {
            code: "330122",
            name: "\u6850\u5E90\u53BF"
          },
          {
            code: "330127",
            name: "\u6DF3\u5B89\u53BF"
          },
          {
            code: "330182",
            name: "\u5EFA\u5FB7\u5E02"
          }
        ]
      },
      {
        code: "3302",
        name: "\u5B81\u6CE2\u5E02",
        children: [
          {
            code: "330203",
            name: "\u6D77\u66D9\u533A"
          },
          {
            code: "330205",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "330206",
            name: "\u5317\u4ED1\u533A"
          },
          {
            code: "330211",
            name: "\u9547\u6D77\u533A"
          },
          {
            code: "330212",
            name: "\u911E\u5DDE\u533A"
          },
          {
            code: "330213",
            name: "\u5949\u5316\u533A"
          },
          {
            code: "330225",
            name: "\u8C61\u5C71\u53BF"
          },
          {
            code: "330226",
            name: "\u5B81\u6D77\u53BF"
          },
          {
            code: "330281",
            name: "\u4F59\u59DA\u5E02"
          },
          {
            code: "330282",
            name: "\u6148\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3303",
        name: "\u6E29\u5DDE\u5E02",
        children: [
          {
            code: "330302",
            name: "\u9E7F\u57CE\u533A"
          },
          {
            code: "330303",
            name: "\u9F99\u6E7E\u533A"
          },
          {
            code: "330304",
            name: "\u74EF\u6D77\u533A"
          },
          {
            code: "330305",
            name: "\u6D1E\u5934\u533A"
          },
          {
            code: "330324",
            name: "\u6C38\u5609\u53BF"
          },
          {
            code: "330326",
            name: "\u5E73\u9633\u53BF"
          },
          {
            code: "330327",
            name: "\u82CD\u5357\u53BF"
          },
          {
            code: "330328",
            name: "\u6587\u6210\u53BF"
          },
          {
            code: "330329",
            name: "\u6CF0\u987A\u53BF"
          },
          {
            code: "330371",
            name: "\u6E29\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "330381",
            name: "\u745E\u5B89\u5E02"
          },
          {
            code: "330382",
            name: "\u4E50\u6E05\u5E02"
          },
          {
            code: "330383",
            name: "\u9F99\u6E2F\u5E02"
          }
        ]
      },
      {
        code: "3304",
        name: "\u5609\u5174\u5E02",
        children: [
          {
            code: "330402",
            name: "\u5357\u6E56\u533A"
          },
          {
            code: "330411",
            name: "\u79C0\u6D32\u533A"
          },
          {
            code: "330421",
            name: "\u5609\u5584\u53BF"
          },
          {
            code: "330424",
            name: "\u6D77\u76D0\u53BF"
          },
          {
            code: "330481",
            name: "\u6D77\u5B81\u5E02"
          },
          {
            code: "330482",
            name: "\u5E73\u6E56\u5E02"
          },
          {
            code: "330483",
            name: "\u6850\u4E61\u5E02"
          }
        ]
      },
      {
        code: "3305",
        name: "\u6E56\u5DDE\u5E02",
        children: [
          {
            code: "330502",
            name: "\u5434\u5174\u533A"
          },
          {
            code: "330503",
            name: "\u5357\u6D54\u533A"
          },
          {
            code: "330521",
            name: "\u5FB7\u6E05\u53BF"
          },
          {
            code: "330522",
            name: "\u957F\u5174\u53BF"
          },
          {
            code: "330523",
            name: "\u5B89\u5409\u53BF"
          }
        ]
      },
      {
        code: "3306",
        name: "\u7ECD\u5174\u5E02",
        children: [
          {
            code: "330602",
            name: "\u8D8A\u57CE\u533A"
          },
          {
            code: "330603",
            name: "\u67EF\u6865\u533A"
          },
          {
            code: "330604",
            name: "\u4E0A\u865E\u533A"
          },
          {
            code: "330624",
            name: "\u65B0\u660C\u53BF"
          },
          {
            code: "330681",
            name: "\u8BF8\u66A8\u5E02"
          },
          {
            code: "330683",
            name: "\u5D4A\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3307",
        name: "\u91D1\u534E\u5E02",
        children: [
          {
            code: "330702",
            name: "\u5A7A\u57CE\u533A"
          },
          {
            code: "330703",
            name: "\u91D1\u4E1C\u533A"
          },
          {
            code: "330723",
            name: "\u6B66\u4E49\u53BF"
          },
          {
            code: "330726",
            name: "\u6D66\u6C5F\u53BF"
          },
          {
            code: "330727",
            name: "\u78D0\u5B89\u53BF"
          },
          {
            code: "330781",
            name: "\u5170\u6EAA\u5E02"
          },
          {
            code: "330782",
            name: "\u4E49\u4E4C\u5E02"
          },
          {
            code: "330783",
            name: "\u4E1C\u9633\u5E02"
          },
          {
            code: "330784",
            name: "\u6C38\u5EB7\u5E02"
          }
        ]
      },
      {
        code: "3308",
        name: "\u8862\u5DDE\u5E02",
        children: [
          {
            code: "330802",
            name: "\u67EF\u57CE\u533A"
          },
          {
            code: "330803",
            name: "\u8862\u6C5F\u533A"
          },
          {
            code: "330822",
            name: "\u5E38\u5C71\u53BF"
          },
          {
            code: "330824",
            name: "\u5F00\u5316\u53BF"
          },
          {
            code: "330825",
            name: "\u9F99\u6E38\u53BF"
          },
          {
            code: "330881",
            name: "\u6C5F\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3309",
        name: "\u821F\u5C71\u5E02",
        children: [
          {
            code: "330902",
            name: "\u5B9A\u6D77\u533A"
          },
          {
            code: "330903",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "330921",
            name: "\u5CB1\u5C71\u53BF"
          },
          {
            code: "330922",
            name: "\u5D4A\u6CD7\u53BF"
          }
        ]
      },
      {
        code: "3310",
        name: "\u53F0\u5DDE\u5E02",
        children: [
          {
            code: "331002",
            name: "\u6912\u6C5F\u533A"
          },
          {
            code: "331003",
            name: "\u9EC4\u5CA9\u533A"
          },
          {
            code: "331004",
            name: "\u8DEF\u6865\u533A"
          },
          {
            code: "331022",
            name: "\u4E09\u95E8\u53BF"
          },
          {
            code: "331023",
            name: "\u5929\u53F0\u53BF"
          },
          {
            code: "331024",
            name: "\u4ED9\u5C45\u53BF"
          },
          {
            code: "331081",
            name: "\u6E29\u5CAD\u5E02"
          },
          {
            code: "331082",
            name: "\u4E34\u6D77\u5E02"
          },
          {
            code: "331083",
            name: "\u7389\u73AF\u5E02"
          }
        ]
      },
      {
        code: "3311",
        name: "\u4E3D\u6C34\u5E02",
        children: [
          {
            code: "331102",
            name: "\u83B2\u90FD\u533A"
          },
          {
            code: "331121",
            name: "\u9752\u7530\u53BF"
          },
          {
            code: "331122",
            name: "\u7F19\u4E91\u53BF"
          },
          {
            code: "331123",
            name: "\u9042\u660C\u53BF"
          },
          {
            code: "331124",
            name: "\u677E\u9633\u53BF"
          },
          {
            code: "331125",
            name: "\u4E91\u548C\u53BF"
          },
          {
            code: "331126",
            name: "\u5E86\u5143\u53BF"
          },
          {
            code: "331127",
            name: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "331181",
            name: "\u9F99\u6CC9\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "\u5B89\u5FBD\u7701",
    children: [
      {
        code: "3401",
        name: "\u5408\u80A5\u5E02",
        children: [
          {
            code: "340102",
            name: "\u7476\u6D77\u533A"
          },
          {
            code: "340103",
            name: "\u5E90\u9633\u533A"
          },
          {
            code: "340104",
            name: "\u8700\u5C71\u533A"
          },
          {
            code: "340111",
            name: "\u5305\u6CB3\u533A"
          },
          {
            code: "340121",
            name: "\u957F\u4E30\u53BF"
          },
          {
            code: "340122",
            name: "\u80A5\u4E1C\u53BF"
          },
          {
            code: "340123",
            name: "\u80A5\u897F\u53BF"
          },
          {
            code: "340124",
            name: "\u5E90\u6C5F\u53BF"
          },
          {
            code: "340171",
            name: "\u5408\u80A5\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340172",
            name: "\u5408\u80A5\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340173",
            name: "\u5408\u80A5\u65B0\u7AD9\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340181",
            name: "\u5DE2\u6E56\u5E02"
          }
        ]
      },
      {
        code: "3402",
        name: "\u829C\u6E56\u5E02",
        children: [
          {
            code: "340202",
            name: "\u955C\u6E56\u533A"
          },
          {
            code: "340203",
            name: "\u5F0B\u6C5F\u533A"
          },
          {
            code: "340207",
            name: "\u9E20\u6C5F\u533A"
          },
          {
            code: "340208",
            name: "\u4E09\u5C71\u533A"
          },
          {
            code: "340221",
            name: "\u829C\u6E56\u53BF"
          },
          {
            code: "340222",
            name: "\u7E41\u660C\u53BF"
          },
          {
            code: "340223",
            name: "\u5357\u9675\u53BF"
          },
          {
            code: "340271",
            name: "\u829C\u6E56\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340272",
            name: "\u5B89\u5FBD\u829C\u6E56\u957F\u6C5F\u5927\u6865\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340281",
            name: "\u65E0\u4E3A\u5E02"
          }
        ]
      },
      {
        code: "3403",
        name: "\u868C\u57E0\u5E02",
        children: [
          {
            code: "340302",
            name: "\u9F99\u5B50\u6E56\u533A"
          },
          {
            code: "340303",
            name: "\u868C\u5C71\u533A"
          },
          {
            code: "340304",
            name: "\u79B9\u4F1A\u533A"
          },
          {
            code: "340311",
            name: "\u6DEE\u4E0A\u533A"
          },
          {
            code: "340321",
            name: "\u6000\u8FDC\u53BF"
          },
          {
            code: "340322",
            name: "\u4E94\u6CB3\u53BF"
          },
          {
            code: "340323",
            name: "\u56FA\u9547\u53BF"
          },
          {
            code: "340371",
            name: "\u868C\u57E0\u5E02\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340372",
            name: "\u868C\u57E0\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3404",
        name: "\u6DEE\u5357\u5E02",
        children: [
          {
            code: "340402",
            name: "\u5927\u901A\u533A"
          },
          {
            code: "340403",
            name: "\u7530\u5BB6\u5EB5\u533A"
          },
          {
            code: "340404",
            name: "\u8C22\u5BB6\u96C6\u533A"
          },
          {
            code: "340405",
            name: "\u516B\u516C\u5C71\u533A"
          },
          {
            code: "340406",
            name: "\u6F58\u96C6\u533A"
          },
          {
            code: "340421",
            name: "\u51E4\u53F0\u53BF"
          },
          {
            code: "340422",
            name: "\u5BFF\u53BF"
          }
        ]
      },
      {
        code: "3405",
        name: "\u9A6C\u978D\u5C71\u5E02",
        children: [
          {
            code: "340503",
            name: "\u82B1\u5C71\u533A"
          },
          {
            code: "340504",
            name: "\u96E8\u5C71\u533A"
          },
          {
            code: "340506",
            name: "\u535A\u671B\u533A"
          },
          {
            code: "340521",
            name: "\u5F53\u6D82\u53BF"
          },
          {
            code: "340522",
            name: "\u542B\u5C71\u53BF"
          },
          {
            code: "340523",
            name: "\u548C\u53BF"
          }
        ]
      },
      {
        code: "3406",
        name: "\u6DEE\u5317\u5E02",
        children: [
          {
            code: "340602",
            name: "\u675C\u96C6\u533A"
          },
          {
            code: "340603",
            name: "\u76F8\u5C71\u533A"
          },
          {
            code: "340604",
            name: "\u70C8\u5C71\u533A"
          },
          {
            code: "340621",
            name: "\u6FC9\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3407",
        name: "\u94DC\u9675\u5E02",
        children: [
          {
            code: "340705",
            name: "\u94DC\u5B98\u533A"
          },
          {
            code: "340706",
            name: "\u4E49\u5B89\u533A"
          },
          {
            code: "340711",
            name: "\u90CA\u533A"
          },
          {
            code: "340722",
            name: "\u679E\u9633\u53BF"
          }
        ]
      },
      {
        code: "3408",
        name: "\u5B89\u5E86\u5E02",
        children: [
          {
            code: "340802",
            name: "\u8FCE\u6C5F\u533A"
          },
          {
            code: "340803",
            name: "\u5927\u89C2\u533A"
          },
          {
            code: "340811",
            name: "\u5B9C\u79C0\u533A"
          },
          {
            code: "340822",
            name: "\u6000\u5B81\u53BF"
          },
          {
            code: "340825",
            name: "\u592A\u6E56\u53BF"
          },
          {
            code: "340826",
            name: "\u5BBF\u677E\u53BF"
          },
          {
            code: "340827",
            name: "\u671B\u6C5F\u53BF"
          },
          {
            code: "340828",
            name: "\u5CB3\u897F\u53BF"
          },
          {
            code: "340871",
            name: "\u5B89\u5FBD\u5B89\u5E86\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340881",
            name: "\u6850\u57CE\u5E02"
          },
          {
            code: "340882",
            name: "\u6F5C\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3410",
        name: "\u9EC4\u5C71\u5E02",
        children: [
          {
            code: "341002",
            name: "\u5C6F\u6EAA\u533A"
          },
          {
            code: "341003",
            name: "\u9EC4\u5C71\u533A"
          },
          {
            code: "341004",
            name: "\u5FBD\u5DDE\u533A"
          },
          {
            code: "341021",
            name: "\u6B59\u53BF"
          },
          {
            code: "341022",
            name: "\u4F11\u5B81\u53BF"
          },
          {
            code: "341023",
            name: "\u9EDF\u53BF"
          },
          {
            code: "341024",
            name: "\u7941\u95E8\u53BF"
          }
        ]
      },
      {
        code: "3411",
        name: "\u6EC1\u5DDE\u5E02",
        children: [
          {
            code: "341102",
            name: "\u7405\u740A\u533A"
          },
          {
            code: "341103",
            name: "\u5357\u8C2F\u533A"
          },
          {
            code: "341122",
            name: "\u6765\u5B89\u53BF"
          },
          {
            code: "341124",
            name: "\u5168\u6912\u53BF"
          },
          {
            code: "341125",
            name: "\u5B9A\u8FDC\u53BF"
          },
          {
            code: "341126",
            name: "\u51E4\u9633\u53BF"
          },
          {
            code: "341171",
            name: "\u82CF\u6EC1\u73B0\u4EE3\u4EA7\u4E1A\u56ED"
          },
          {
            code: "341172",
            name: "\u6EC1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341181",
            name: "\u5929\u957F\u5E02"
          },
          {
            code: "341182",
            name: "\u660E\u5149\u5E02"
          }
        ]
      },
      {
        code: "3412",
        name: "\u961C\u9633\u5E02",
        children: [
          {
            code: "341202",
            name: "\u988D\u5DDE\u533A"
          },
          {
            code: "341203",
            name: "\u988D\u4E1C\u533A"
          },
          {
            code: "341204",
            name: "\u988D\u6CC9\u533A"
          },
          {
            code: "341221",
            name: "\u4E34\u6CC9\u53BF"
          },
          {
            code: "341222",
            name: "\u592A\u548C\u53BF"
          },
          {
            code: "341225",
            name: "\u961C\u5357\u53BF"
          },
          {
            code: "341226",
            name: "\u988D\u4E0A\u53BF"
          },
          {
            code: "341271",
            name: "\u961C\u9633\u5408\u80A5\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341272",
            name: "\u961C\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341282",
            name: "\u754C\u9996\u5E02"
          }
        ]
      },
      {
        code: "3413",
        name: "\u5BBF\u5DDE\u5E02",
        children: [
          {
            code: "341302",
            name: "\u57C7\u6865\u533A"
          },
          {
            code: "341321",
            name: "\u7800\u5C71\u53BF"
          },
          {
            code: "341322",
            name: "\u8427\u53BF"
          },
          {
            code: "341323",
            name: "\u7075\u74A7\u53BF"
          },
          {
            code: "341324",
            name: "\u6CD7\u53BF"
          },
          {
            code: "341371",
            name: "\u5BBF\u5DDE\u9A6C\u978D\u5C71\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341372",
            name: "\u5BBF\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3415",
        name: "\u516D\u5B89\u5E02",
        children: [
          {
            code: "341502",
            name: "\u91D1\u5B89\u533A"
          },
          {
            code: "341503",
            name: "\u88D5\u5B89\u533A"
          },
          {
            code: "341504",
            name: "\u53F6\u96C6\u533A"
          },
          {
            code: "341522",
            name: "\u970D\u90B1\u53BF"
          },
          {
            code: "341523",
            name: "\u8212\u57CE\u53BF"
          },
          {
            code: "341524",
            name: "\u91D1\u5BE8\u53BF"
          },
          {
            code: "341525",
            name: "\u970D\u5C71\u53BF"
          }
        ]
      },
      {
        code: "3416",
        name: "\u4EB3\u5DDE\u5E02",
        children: [
          {
            code: "341602",
            name: "\u8C2F\u57CE\u533A"
          },
          {
            code: "341621",
            name: "\u6DA1\u9633\u53BF"
          },
          {
            code: "341622",
            name: "\u8499\u57CE\u53BF"
          },
          {
            code: "341623",
            name: "\u5229\u8F9B\u53BF"
          }
        ]
      },
      {
        code: "3417",
        name: "\u6C60\u5DDE\u5E02",
        children: [
          {
            code: "341702",
            name: "\u8D35\u6C60\u533A"
          },
          {
            code: "341721",
            name: "\u4E1C\u81F3\u53BF"
          },
          {
            code: "341722",
            name: "\u77F3\u53F0\u53BF"
          },
          {
            code: "341723",
            name: "\u9752\u9633\u53BF"
          }
        ]
      },
      {
        code: "3418",
        name: "\u5BA3\u57CE\u5E02",
        children: [
          {
            code: "341802",
            name: "\u5BA3\u5DDE\u533A"
          },
          {
            code: "341821",
            name: "\u90CE\u6EAA\u53BF"
          },
          {
            code: "341823",
            name: "\u6CFE\u53BF"
          },
          {
            code: "341824",
            name: "\u7EE9\u6EAA\u53BF"
          },
          {
            code: "341825",
            name: "\u65CC\u5FB7\u53BF"
          },
          {
            code: "341871",
            name: "\u5BA3\u57CE\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "341881",
            name: "\u5B81\u56FD\u5E02"
          },
          {
            code: "341882",
            name: "\u5E7F\u5FB7\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "\u798F\u5EFA\u7701",
    children: [
      {
        code: "3501",
        name: "\u798F\u5DDE\u5E02",
        children: [
          {
            code: "350102",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "350103",
            name: "\u53F0\u6C5F\u533A"
          },
          {
            code: "350104",
            name: "\u4ED3\u5C71\u533A"
          },
          {
            code: "350105",
            name: "\u9A6C\u5C3E\u533A"
          },
          {
            code: "350111",
            name: "\u664B\u5B89\u533A"
          },
          {
            code: "350112",
            name: "\u957F\u4E50\u533A"
          },
          {
            code: "350121",
            name: "\u95FD\u4FAF\u53BF"
          },
          {
            code: "350122",
            name: "\u8FDE\u6C5F\u53BF"
          },
          {
            code: "350123",
            name: "\u7F57\u6E90\u53BF"
          },
          {
            code: "350124",
            name: "\u95FD\u6E05\u53BF"
          },
          {
            code: "350125",
            name: "\u6C38\u6CF0\u53BF"
          },
          {
            code: "350128",
            name: "\u5E73\u6F6D\u53BF"
          },
          {
            code: "350181",
            name: "\u798F\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3502",
        name: "\u53A6\u95E8\u5E02",
        children: [
          {
            code: "350203",
            name: "\u601D\u660E\u533A"
          },
          {
            code: "350205",
            name: "\u6D77\u6CA7\u533A"
          },
          {
            code: "350206",
            name: "\u6E56\u91CC\u533A"
          },
          {
            code: "350211",
            name: "\u96C6\u7F8E\u533A"
          },
          {
            code: "350212",
            name: "\u540C\u5B89\u533A"
          },
          {
            code: "350213",
            name: "\u7FD4\u5B89\u533A"
          }
        ]
      },
      {
        code: "3503",
        name: "\u8386\u7530\u5E02",
        children: [
          {
            code: "350302",
            name: "\u57CE\u53A2\u533A"
          },
          {
            code: "350303",
            name: "\u6DB5\u6C5F\u533A"
          },
          {
            code: "350304",
            name: "\u8354\u57CE\u533A"
          },
          {
            code: "350305",
            name: "\u79C0\u5C7F\u533A"
          },
          {
            code: "350322",
            name: "\u4ED9\u6E38\u53BF"
          }
        ]
      },
      {
        code: "3504",
        name: "\u4E09\u660E\u5E02",
        children: [
          {
            code: "350402",
            name: "\u6885\u5217\u533A"
          },
          {
            code: "350403",
            name: "\u4E09\u5143\u533A"
          },
          {
            code: "350421",
            name: "\u660E\u6EAA\u53BF"
          },
          {
            code: "350423",
            name: "\u6E05\u6D41\u53BF"
          },
          {
            code: "350424",
            name: "\u5B81\u5316\u53BF"
          },
          {
            code: "350425",
            name: "\u5927\u7530\u53BF"
          },
          {
            code: "350426",
            name: "\u5C24\u6EAA\u53BF"
          },
          {
            code: "350427",
            name: "\u6C99\u53BF"
          },
          {
            code: "350428",
            name: "\u5C06\u4E50\u53BF"
          },
          {
            code: "350429",
            name: "\u6CF0\u5B81\u53BF"
          },
          {
            code: "350430",
            name: "\u5EFA\u5B81\u53BF"
          },
          {
            code: "350481",
            name: "\u6C38\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3505",
        name: "\u6CC9\u5DDE\u5E02",
        children: [
          {
            code: "350502",
            name: "\u9CA4\u57CE\u533A"
          },
          {
            code: "350503",
            name: "\u4E30\u6CFD\u533A"
          },
          {
            code: "350504",
            name: "\u6D1B\u6C5F\u533A"
          },
          {
            code: "350505",
            name: "\u6CC9\u6E2F\u533A"
          },
          {
            code: "350521",
            name: "\u60E0\u5B89\u53BF"
          },
          {
            code: "350524",
            name: "\u5B89\u6EAA\u53BF"
          },
          {
            code: "350525",
            name: "\u6C38\u6625\u53BF"
          },
          {
            code: "350526",
            name: "\u5FB7\u5316\u53BF"
          },
          {
            code: "350527",
            name: "\u91D1\u95E8\u53BF"
          },
          {
            code: "350581",
            name: "\u77F3\u72EE\u5E02"
          },
          {
            code: "350582",
            name: "\u664B\u6C5F\u5E02"
          },
          {
            code: "350583",
            name: "\u5357\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3506",
        name: "\u6F33\u5DDE\u5E02",
        children: [
          {
            code: "350602",
            name: "\u8297\u57CE\u533A"
          },
          {
            code: "350603",
            name: "\u9F99\u6587\u533A"
          },
          {
            code: "350622",
            name: "\u4E91\u9704\u53BF"
          },
          {
            code: "350623",
            name: "\u6F33\u6D66\u53BF"
          },
          {
            code: "350624",
            name: "\u8BCF\u5B89\u53BF"
          },
          {
            code: "350625",
            name: "\u957F\u6CF0\u53BF"
          },
          {
            code: "350626",
            name: "\u4E1C\u5C71\u53BF"
          },
          {
            code: "350627",
            name: "\u5357\u9756\u53BF"
          },
          {
            code: "350628",
            name: "\u5E73\u548C\u53BF"
          },
          {
            code: "350629",
            name: "\u534E\u5B89\u53BF"
          },
          {
            code: "350681",
            name: "\u9F99\u6D77\u5E02"
          }
        ]
      },
      {
        code: "3507",
        name: "\u5357\u5E73\u5E02",
        children: [
          {
            code: "350702",
            name: "\u5EF6\u5E73\u533A"
          },
          {
            code: "350703",
            name: "\u5EFA\u9633\u533A"
          },
          {
            code: "350721",
            name: "\u987A\u660C\u53BF"
          },
          {
            code: "350722",
            name: "\u6D66\u57CE\u53BF"
          },
          {
            code: "350723",
            name: "\u5149\u6CFD\u53BF"
          },
          {
            code: "350724",
            name: "\u677E\u6EAA\u53BF"
          },
          {
            code: "350725",
            name: "\u653F\u548C\u53BF"
          },
          {
            code: "350781",
            name: "\u90B5\u6B66\u5E02"
          },
          {
            code: "350782",
            name: "\u6B66\u5937\u5C71\u5E02"
          },
          {
            code: "350783",
            name: "\u5EFA\u74EF\u5E02"
          }
        ]
      },
      {
        code: "3508",
        name: "\u9F99\u5CA9\u5E02",
        children: [
          {
            code: "350802",
            name: "\u65B0\u7F57\u533A"
          },
          {
            code: "350803",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "350821",
            name: "\u957F\u6C40\u53BF"
          },
          {
            code: "350823",
            name: "\u4E0A\u676D\u53BF"
          },
          {
            code: "350824",
            name: "\u6B66\u5E73\u53BF"
          },
          {
            code: "350825",
            name: "\u8FDE\u57CE\u53BF"
          },
          {
            code: "350881",
            name: "\u6F33\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3509",
        name: "\u5B81\u5FB7\u5E02",
        children: [
          {
            code: "350902",
            name: "\u8549\u57CE\u533A"
          },
          {
            code: "350921",
            name: "\u971E\u6D66\u53BF"
          },
          {
            code: "350922",
            name: "\u53E4\u7530\u53BF"
          },
          {
            code: "350923",
            name: "\u5C4F\u5357\u53BF"
          },
          {
            code: "350924",
            name: "\u5BFF\u5B81\u53BF"
          },
          {
            code: "350925",
            name: "\u5468\u5B81\u53BF"
          },
          {
            code: "350926",
            name: "\u67D8\u8363\u53BF"
          },
          {
            code: "350981",
            name: "\u798F\u5B89\u5E02"
          },
          {
            code: "350982",
            name: "\u798F\u9F0E\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "\u6C5F\u897F\u7701",
    children: [
      {
        code: "3601",
        name: "\u5357\u660C\u5E02",
        children: [
          {
            code: "360102",
            name: "\u4E1C\u6E56\u533A"
          },
          {
            code: "360103",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "360104",
            name: "\u9752\u4E91\u8C31\u533A"
          },
          {
            code: "360111",
            name: "\u9752\u5C71\u6E56\u533A"
          },
          {
            code: "360112",
            name: "\u65B0\u5EFA\u533A"
          },
          {
            code: "360113",
            name: "\u7EA2\u8C37\u6EE9\u533A"
          },
          {
            code: "360121",
            name: "\u5357\u660C\u53BF"
          },
          {
            code: "360123",
            name: "\u5B89\u4E49\u53BF"
          },
          {
            code: "360124",
            name: "\u8FDB\u8D24\u53BF"
          }
        ]
      },
      {
        code: "3602",
        name: "\u666F\u5FB7\u9547\u5E02",
        children: [
          {
            code: "360202",
            name: "\u660C\u6C5F\u533A"
          },
          {
            code: "360203",
            name: "\u73E0\u5C71\u533A"
          },
          {
            code: "360222",
            name: "\u6D6E\u6881\u53BF"
          },
          {
            code: "360281",
            name: "\u4E50\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3603",
        name: "\u840D\u4E61\u5E02",
        children: [
          {
            code: "360302",
            name: "\u5B89\u6E90\u533A"
          },
          {
            code: "360313",
            name: "\u6E58\u4E1C\u533A"
          },
          {
            code: "360321",
            name: "\u83B2\u82B1\u53BF"
          },
          {
            code: "360322",
            name: "\u4E0A\u6817\u53BF"
          },
          {
            code: "360323",
            name: "\u82A6\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3604",
        name: "\u4E5D\u6C5F\u5E02",
        children: [
          {
            code: "360402",
            name: "\u6FC2\u6EAA\u533A"
          },
          {
            code: "360403",
            name: "\u6D54\u9633\u533A"
          },
          {
            code: "360404",
            name: "\u67F4\u6851\u533A"
          },
          {
            code: "360423",
            name: "\u6B66\u5B81\u53BF"
          },
          {
            code: "360424",
            name: "\u4FEE\u6C34\u53BF"
          },
          {
            code: "360425",
            name: "\u6C38\u4FEE\u53BF"
          },
          {
            code: "360426",
            name: "\u5FB7\u5B89\u53BF"
          },
          {
            code: "360428",
            name: "\u90FD\u660C\u53BF"
          },
          {
            code: "360429",
            name: "\u6E56\u53E3\u53BF"
          },
          {
            code: "360430",
            name: "\u5F6D\u6CFD\u53BF"
          },
          {
            code: "360481",
            name: "\u745E\u660C\u5E02"
          },
          {
            code: "360482",
            name: "\u5171\u9752\u57CE\u5E02"
          },
          {
            code: "360483",
            name: "\u5E90\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3605",
        name: "\u65B0\u4F59\u5E02",
        children: [
          {
            code: "360502",
            name: "\u6E1D\u6C34\u533A"
          },
          {
            code: "360521",
            name: "\u5206\u5B9C\u53BF"
          }
        ]
      },
      {
        code: "3606",
        name: "\u9E70\u6F6D\u5E02",
        children: [
          {
            code: "360602",
            name: "\u6708\u6E56\u533A"
          },
          {
            code: "360603",
            name: "\u4F59\u6C5F\u533A"
          },
          {
            code: "360681",
            name: "\u8D35\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3607",
        name: "\u8D63\u5DDE\u5E02",
        children: [
          {
            code: "360702",
            name: "\u7AE0\u8D21\u533A"
          },
          {
            code: "360703",
            name: "\u5357\u5EB7\u533A"
          },
          {
            code: "360704",
            name: "\u8D63\u53BF\u533A"
          },
          {
            code: "360722",
            name: "\u4FE1\u4E30\u53BF"
          },
          {
            code: "360723",
            name: "\u5927\u4F59\u53BF"
          },
          {
            code: "360724",
            name: "\u4E0A\u72B9\u53BF"
          },
          {
            code: "360725",
            name: "\u5D07\u4E49\u53BF"
          },
          {
            code: "360726",
            name: "\u5B89\u8FDC\u53BF"
          },
          {
            code: "360728",
            name: "\u5B9A\u5357\u53BF"
          },
          {
            code: "360729",
            name: "\u5168\u5357\u53BF"
          },
          {
            code: "360730",
            name: "\u5B81\u90FD\u53BF"
          },
          {
            code: "360731",
            name: "\u4E8E\u90FD\u53BF"
          },
          {
            code: "360732",
            name: "\u5174\u56FD\u53BF"
          },
          {
            code: "360733",
            name: "\u4F1A\u660C\u53BF"
          },
          {
            code: "360734",
            name: "\u5BFB\u4E4C\u53BF"
          },
          {
            code: "360735",
            name: "\u77F3\u57CE\u53BF"
          },
          {
            code: "360781",
            name: "\u745E\u91D1\u5E02"
          },
          {
            code: "360783",
            name: "\u9F99\u5357\u5E02"
          }
        ]
      },
      {
        code: "3608",
        name: "\u5409\u5B89\u5E02",
        children: [
          {
            code: "360802",
            name: "\u5409\u5DDE\u533A"
          },
          {
            code: "360803",
            name: "\u9752\u539F\u533A"
          },
          {
            code: "360821",
            name: "\u5409\u5B89\u53BF"
          },
          {
            code: "360822",
            name: "\u5409\u6C34\u53BF"
          },
          {
            code: "360823",
            name: "\u5CE1\u6C5F\u53BF"
          },
          {
            code: "360824",
            name: "\u65B0\u5E72\u53BF"
          },
          {
            code: "360825",
            name: "\u6C38\u4E30\u53BF"
          },
          {
            code: "360826",
            name: "\u6CF0\u548C\u53BF"
          },
          {
            code: "360827",
            name: "\u9042\u5DDD\u53BF"
          },
          {
            code: "360828",
            name: "\u4E07\u5B89\u53BF"
          },
          {
            code: "360829",
            name: "\u5B89\u798F\u53BF"
          },
          {
            code: "360830",
            name: "\u6C38\u65B0\u53BF"
          },
          {
            code: "360881",
            name: "\u4E95\u5188\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3609",
        name: "\u5B9C\u6625\u5E02",
        children: [
          {
            code: "360902",
            name: "\u8881\u5DDE\u533A"
          },
          {
            code: "360921",
            name: "\u5949\u65B0\u53BF"
          },
          {
            code: "360922",
            name: "\u4E07\u8F7D\u53BF"
          },
          {
            code: "360923",
            name: "\u4E0A\u9AD8\u53BF"
          },
          {
            code: "360924",
            name: "\u5B9C\u4E30\u53BF"
          },
          {
            code: "360925",
            name: "\u9756\u5B89\u53BF"
          },
          {
            code: "360926",
            name: "\u94DC\u9F13\u53BF"
          },
          {
            code: "360981",
            name: "\u4E30\u57CE\u5E02"
          },
          {
            code: "360982",
            name: "\u6A1F\u6811\u5E02"
          },
          {
            code: "360983",
            name: "\u9AD8\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3610",
        name: "\u629A\u5DDE\u5E02",
        children: [
          {
            code: "361002",
            name: "\u4E34\u5DDD\u533A"
          },
          {
            code: "361003",
            name: "\u4E1C\u4E61\u533A"
          },
          {
            code: "361021",
            name: "\u5357\u57CE\u53BF"
          },
          {
            code: "361022",
            name: "\u9ECE\u5DDD\u53BF"
          },
          {
            code: "361023",
            name: "\u5357\u4E30\u53BF"
          },
          {
            code: "361024",
            name: "\u5D07\u4EC1\u53BF"
          },
          {
            code: "361025",
            name: "\u4E50\u5B89\u53BF"
          },
          {
            code: "361026",
            name: "\u5B9C\u9EC4\u53BF"
          },
          {
            code: "361027",
            name: "\u91D1\u6EAA\u53BF"
          },
          {
            code: "361028",
            name: "\u8D44\u6EAA\u53BF"
          },
          {
            code: "361030",
            name: "\u5E7F\u660C\u53BF"
          }
        ]
      },
      {
        code: "3611",
        name: "\u4E0A\u9976\u5E02",
        children: [
          {
            code: "361102",
            name: "\u4FE1\u5DDE\u533A"
          },
          {
            code: "361103",
            name: "\u5E7F\u4E30\u533A"
          },
          {
            code: "361104",
            name: "\u5E7F\u4FE1\u533A"
          },
          {
            code: "361123",
            name: "\u7389\u5C71\u53BF"
          },
          {
            code: "361124",
            name: "\u94C5\u5C71\u53BF"
          },
          {
            code: "361125",
            name: "\u6A2A\u5CF0\u53BF"
          },
          {
            code: "361126",
            name: "\u5F0B\u9633\u53BF"
          },
          {
            code: "361127",
            name: "\u4F59\u5E72\u53BF"
          },
          {
            code: "361128",
            name: "\u9131\u9633\u53BF"
          },
          {
            code: "361129",
            name: "\u4E07\u5E74\u53BF"
          },
          {
            code: "361130",
            name: "\u5A7A\u6E90\u53BF"
          },
          {
            code: "361181",
            name: "\u5FB7\u5174\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "\u5C71\u4E1C\u7701",
    children: [
      {
        code: "3701",
        name: "\u6D4E\u5357\u5E02",
        children: [
          {
            code: "370102",
            name: "\u5386\u4E0B\u533A"
          },
          {
            code: "370103",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370104",
            name: "\u69D0\u836B\u533A"
          },
          {
            code: "370105",
            name: "\u5929\u6865\u533A"
          },
          {
            code: "370112",
            name: "\u5386\u57CE\u533A"
          },
          {
            code: "370113",
            name: "\u957F\u6E05\u533A"
          },
          {
            code: "370114",
            name: "\u7AE0\u4E18\u533A"
          },
          {
            code: "370115",
            name: "\u6D4E\u9633\u533A"
          },
          {
            code: "370116",
            name: "\u83B1\u829C\u533A"
          },
          {
            code: "370117",
            name: "\u94A2\u57CE\u533A"
          },
          {
            code: "370124",
            name: "\u5E73\u9634\u53BF"
          },
          {
            code: "370126",
            name: "\u5546\u6CB3\u53BF"
          },
          {
            code: "370171",
            name: "\u6D4E\u5357\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3702",
        name: "\u9752\u5C9B\u5E02",
        children: [
          {
            code: "370202",
            name: "\u5E02\u5357\u533A"
          },
          {
            code: "370203",
            name: "\u5E02\u5317\u533A"
          },
          {
            code: "370211",
            name: "\u9EC4\u5C9B\u533A"
          },
          {
            code: "370212",
            name: "\u5D02\u5C71\u533A"
          },
          {
            code: "370213",
            name: "\u674E\u6CA7\u533A"
          },
          {
            code: "370214",
            name: "\u57CE\u9633\u533A"
          },
          {
            code: "370215",
            name: "\u5373\u58A8\u533A"
          },
          {
            code: "370271",
            name: "\u9752\u5C9B\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370281",
            name: "\u80F6\u5DDE\u5E02"
          },
          {
            code: "370283",
            name: "\u5E73\u5EA6\u5E02"
          },
          {
            code: "370285",
            name: "\u83B1\u897F\u5E02"
          }
        ]
      },
      {
        code: "3703",
        name: "\u6DC4\u535A\u5E02",
        children: [
          {
            code: "370302",
            name: "\u6DC4\u5DDD\u533A"
          },
          {
            code: "370303",
            name: "\u5F20\u5E97\u533A"
          },
          {
            code: "370304",
            name: "\u535A\u5C71\u533A"
          },
          {
            code: "370305",
            name: "\u4E34\u6DC4\u533A"
          },
          {
            code: "370306",
            name: "\u5468\u6751\u533A"
          },
          {
            code: "370321",
            name: "\u6853\u53F0\u53BF"
          },
          {
            code: "370322",
            name: "\u9AD8\u9752\u53BF"
          },
          {
            code: "370323",
            name: "\u6C82\u6E90\u53BF"
          }
        ]
      },
      {
        code: "3704",
        name: "\u67A3\u5E84\u5E02",
        children: [
          {
            code: "370402",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370403",
            name: "\u859B\u57CE\u533A"
          },
          {
            code: "370404",
            name: "\u5CC4\u57CE\u533A"
          },
          {
            code: "370405",
            name: "\u53F0\u513F\u5E84\u533A"
          },
          {
            code: "370406",
            name: "\u5C71\u4EAD\u533A"
          },
          {
            code: "370481",
            name: "\u6ED5\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3705",
        name: "\u4E1C\u8425\u5E02",
        children: [
          {
            code: "370502",
            name: "\u4E1C\u8425\u533A"
          },
          {
            code: "370503",
            name: "\u6CB3\u53E3\u533A"
          },
          {
            code: "370505",
            name: "\u57A6\u5229\u533A"
          },
          {
            code: "370522",
            name: "\u5229\u6D25\u53BF"
          },
          {
            code: "370523",
            name: "\u5E7F\u9976\u53BF"
          },
          {
            code: "370571",
            name: "\u4E1C\u8425\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370572",
            name: "\u4E1C\u8425\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3706",
        name: "\u70DF\u53F0\u5E02",
        children: [
          {
            code: "370602",
            name: "\u829D\u7F58\u533A"
          },
          {
            code: "370611",
            name: "\u798F\u5C71\u533A"
          },
          {
            code: "370612",
            name: "\u725F\u5E73\u533A"
          },
          {
            code: "370613",
            name: "\u83B1\u5C71\u533A"
          },
          {
            code: "370614",
            name: "\u84EC\u83B1\u533A"
          },
          {
            code: "370671",
            name: "\u70DF\u53F0\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370672",
            name: "\u70DF\u53F0\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370681",
            name: "\u9F99\u53E3\u5E02"
          },
          {
            code: "370682",
            name: "\u83B1\u9633\u5E02"
          },
          {
            code: "370683",
            name: "\u83B1\u5DDE\u5E02"
          },
          {
            code: "370685",
            name: "\u62DB\u8FDC\u5E02"
          },
          {
            code: "370686",
            name: "\u6816\u971E\u5E02"
          },
          {
            code: "370687",
            name: "\u6D77\u9633\u5E02"
          }
        ]
      },
      {
        code: "3707",
        name: "\u6F4D\u574A\u5E02",
        children: [
          {
            code: "370702",
            name: "\u6F4D\u57CE\u533A"
          },
          {
            code: "370703",
            name: "\u5BD2\u4EAD\u533A"
          },
          {
            code: "370704",
            name: "\u574A\u5B50\u533A"
          },
          {
            code: "370705",
            name: "\u594E\u6587\u533A"
          },
          {
            code: "370724",
            name: "\u4E34\u6710\u53BF"
          },
          {
            code: "370725",
            name: "\u660C\u4E50\u53BF"
          },
          {
            code: "370772",
            name: "\u6F4D\u574A\u6EE8\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370781",
            name: "\u9752\u5DDE\u5E02"
          },
          {
            code: "370782",
            name: "\u8BF8\u57CE\u5E02"
          },
          {
            code: "370783",
            name: "\u5BFF\u5149\u5E02"
          },
          {
            code: "370784",
            name: "\u5B89\u4E18\u5E02"
          },
          {
            code: "370785",
            name: "\u9AD8\u5BC6\u5E02"
          },
          {
            code: "370786",
            name: "\u660C\u9091\u5E02"
          }
        ]
      },
      {
        code: "3708",
        name: "\u6D4E\u5B81\u5E02",
        children: [
          {
            code: "370811",
            name: "\u4EFB\u57CE\u533A"
          },
          {
            code: "370812",
            name: "\u5156\u5DDE\u533A"
          },
          {
            code: "370826",
            name: "\u5FAE\u5C71\u53BF"
          },
          {
            code: "370827",
            name: "\u9C7C\u53F0\u53BF"
          },
          {
            code: "370828",
            name: "\u91D1\u4E61\u53BF"
          },
          {
            code: "370829",
            name: "\u5609\u7965\u53BF"
          },
          {
            code: "370830",
            name: "\u6C76\u4E0A\u53BF"
          },
          {
            code: "370831",
            name: "\u6CD7\u6C34\u53BF"
          },
          {
            code: "370832",
            name: "\u6881\u5C71\u53BF"
          },
          {
            code: "370871",
            name: "\u6D4E\u5B81\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370881",
            name: "\u66F2\u961C\u5E02"
          },
          {
            code: "370883",
            name: "\u90B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3709",
        name: "\u6CF0\u5B89\u5E02",
        children: [
          {
            code: "370902",
            name: "\u6CF0\u5C71\u533A"
          },
          {
            code: "370911",
            name: "\u5CB1\u5CB3\u533A"
          },
          {
            code: "370921",
            name: "\u5B81\u9633\u53BF"
          },
          {
            code: "370923",
            name: "\u4E1C\u5E73\u53BF"
          },
          {
            code: "370982",
            name: "\u65B0\u6CF0\u5E02"
          },
          {
            code: "370983",
            name: "\u80A5\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3710",
        name: "\u5A01\u6D77\u5E02",
        children: [
          {
            code: "371002",
            name: "\u73AF\u7FE0\u533A"
          },
          {
            code: "371003",
            name: "\u6587\u767B\u533A"
          },
          {
            code: "371071",
            name: "\u5A01\u6D77\u706B\u70AC\u9AD8\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "371072",
            name: "\u5A01\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371073",
            name: "\u5A01\u6D77\u4E34\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371082",
            name: "\u8363\u6210\u5E02"
          },
          {
            code: "371083",
            name: "\u4E73\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3711",
        name: "\u65E5\u7167\u5E02",
        children: [
          {
            code: "371102",
            name: "\u4E1C\u6E2F\u533A"
          },
          {
            code: "371103",
            name: "\u5C9A\u5C71\u533A"
          },
          {
            code: "371121",
            name: "\u4E94\u83B2\u53BF"
          },
          {
            code: "371122",
            name: "\u8392\u53BF"
          },
          {
            code: "371171",
            name: "\u65E5\u7167\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3713",
        name: "\u4E34\u6C82\u5E02",
        children: [
          {
            code: "371302",
            name: "\u5170\u5C71\u533A"
          },
          {
            code: "371311",
            name: "\u7F57\u5E84\u533A"
          },
          {
            code: "371312",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "371321",
            name: "\u6C82\u5357\u53BF"
          },
          {
            code: "371322",
            name: "\u90EF\u57CE\u53BF"
          },
          {
            code: "371323",
            name: "\u6C82\u6C34\u53BF"
          },
          {
            code: "371324",
            name: "\u5170\u9675\u53BF"
          },
          {
            code: "371325",
            name: "\u8D39\u53BF"
          },
          {
            code: "371326",
            name: "\u5E73\u9091\u53BF"
          },
          {
            code: "371327",
            name: "\u8392\u5357\u53BF"
          },
          {
            code: "371328",
            name: "\u8499\u9634\u53BF"
          },
          {
            code: "371329",
            name: "\u4E34\u6CAD\u53BF"
          },
          {
            code: "371371",
            name: "\u4E34\u6C82\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3714",
        name: "\u5FB7\u5DDE\u5E02",
        children: [
          {
            code: "371402",
            name: "\u5FB7\u57CE\u533A"
          },
          {
            code: "371403",
            name: "\u9675\u57CE\u533A"
          },
          {
            code: "371422",
            name: "\u5B81\u6D25\u53BF"
          },
          {
            code: "371423",
            name: "\u5E86\u4E91\u53BF"
          },
          {
            code: "371424",
            name: "\u4E34\u9091\u53BF"
          },
          {
            code: "371425",
            name: "\u9F50\u6CB3\u53BF"
          },
          {
            code: "371426",
            name: "\u5E73\u539F\u53BF"
          },
          {
            code: "371427",
            name: "\u590F\u6D25\u53BF"
          },
          {
            code: "371428",
            name: "\u6B66\u57CE\u53BF"
          },
          {
            code: "371471",
            name: "\u5FB7\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371472",
            name: "\u5FB7\u5DDE\u8FD0\u6CB3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "371481",
            name: "\u4E50\u9675\u5E02"
          },
          {
            code: "371482",
            name: "\u79B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3715",
        name: "\u804A\u57CE\u5E02",
        children: [
          {
            code: "371502",
            name: "\u4E1C\u660C\u5E9C\u533A"
          },
          {
            code: "371503",
            name: "\u830C\u5E73\u533A"
          },
          {
            code: "371521",
            name: "\u9633\u8C37\u53BF"
          },
          {
            code: "371522",
            name: "\u8398\u53BF"
          },
          {
            code: "371524",
            name: "\u4E1C\u963F\u53BF"
          },
          {
            code: "371525",
            name: "\u51A0\u53BF"
          },
          {
            code: "371526",
            name: "\u9AD8\u5510\u53BF"
          },
          {
            code: "371581",
            name: "\u4E34\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3716",
        name: "\u6EE8\u5DDE\u5E02",
        children: [
          {
            code: "371602",
            name: "\u6EE8\u57CE\u533A"
          },
          {
            code: "371603",
            name: "\u6CBE\u5316\u533A"
          },
          {
            code: "371621",
            name: "\u60E0\u6C11\u53BF"
          },
          {
            code: "371622",
            name: "\u9633\u4FE1\u53BF"
          },
          {
            code: "371623",
            name: "\u65E0\u68E3\u53BF"
          },
          {
            code: "371625",
            name: "\u535A\u5174\u53BF"
          },
          {
            code: "371681",
            name: "\u90B9\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3717",
        name: "\u83CF\u6CFD\u5E02",
        children: [
          {
            code: "371702",
            name: "\u7261\u4E39\u533A"
          },
          {
            code: "371703",
            name: "\u5B9A\u9676\u533A"
          },
          {
            code: "371721",
            name: "\u66F9\u53BF"
          },
          {
            code: "371722",
            name: "\u5355\u53BF"
          },
          {
            code: "371723",
            name: "\u6210\u6B66\u53BF"
          },
          {
            code: "371724",
            name: "\u5DE8\u91CE\u53BF"
          },
          {
            code: "371725",
            name: "\u90D3\u57CE\u53BF"
          },
          {
            code: "371726",
            name: "\u9104\u57CE\u53BF"
          },
          {
            code: "371728",
            name: "\u4E1C\u660E\u53BF"
          },
          {
            code: "371771",
            name: "\u83CF\u6CFD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371772",
            name: "\u83CF\u6CFD\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "\u6CB3\u5357\u7701",
    children: [
      {
        code: "4101",
        name: "\u90D1\u5DDE\u5E02",
        children: [
          {
            code: "410102",
            name: "\u4E2D\u539F\u533A"
          },
          {
            code: "410103",
            name: "\u4E8C\u4E03\u533A"
          },
          {
            code: "410104",
            name: "\u7BA1\u57CE\u56DE\u65CF\u533A"
          },
          {
            code: "410105",
            name: "\u91D1\u6C34\u533A"
          },
          {
            code: "410106",
            name: "\u4E0A\u8857\u533A"
          },
          {
            code: "410108",
            name: "\u60E0\u6D4E\u533A"
          },
          {
            code: "410122",
            name: "\u4E2D\u725F\u53BF"
          },
          {
            code: "410171",
            name: "\u90D1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410172",
            name: "\u90D1\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410173",
            name: "\u90D1\u5DDE\u822A\u7A7A\u6E2F\u7ECF\u6D4E\u7EFC\u5408\u5B9E\u9A8C\u533A"
          },
          {
            code: "410181",
            name: "\u5DE9\u4E49\u5E02"
          },
          {
            code: "410182",
            name: "\u8365\u9633\u5E02"
          },
          {
            code: "410183",
            name: "\u65B0\u5BC6\u5E02"
          },
          {
            code: "410184",
            name: "\u65B0\u90D1\u5E02"
          },
          {
            code: "410185",
            name: "\u767B\u5C01\u5E02"
          }
        ]
      },
      {
        code: "4102",
        name: "\u5F00\u5C01\u5E02",
        children: [
          {
            code: "410202",
            name: "\u9F99\u4EAD\u533A"
          },
          {
            code: "410203",
            name: "\u987A\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410204",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "410205",
            name: "\u79B9\u738B\u53F0\u533A"
          },
          {
            code: "410212",
            name: "\u7965\u7B26\u533A"
          },
          {
            code: "410221",
            name: "\u675E\u53BF"
          },
          {
            code: "410222",
            name: "\u901A\u8BB8\u53BF"
          },
          {
            code: "410223",
            name: "\u5C09\u6C0F\u53BF"
          },
          {
            code: "410225",
            name: "\u5170\u8003\u53BF"
          }
        ]
      },
      {
        code: "4103",
        name: "\u6D1B\u9633\u5E02",
        children: [
          {
            code: "410302",
            name: "\u8001\u57CE\u533A"
          },
          {
            code: "410303",
            name: "\u897F\u5DE5\u533A"
          },
          {
            code: "410304",
            name: "\u700D\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410305",
            name: "\u6DA7\u897F\u533A"
          },
          {
            code: "410306",
            name: "\u5409\u5229\u533A"
          },
          {
            code: "410311",
            name: "\u6D1B\u9F99\u533A"
          },
          {
            code: "410322",
            name: "\u5B5F\u6D25\u53BF"
          },
          {
            code: "410323",
            name: "\u65B0\u5B89\u53BF"
          },
          {
            code: "410324",
            name: "\u683E\u5DDD\u53BF"
          },
          {
            code: "410325",
            name: "\u5D69\u53BF"
          },
          {
            code: "410326",
            name: "\u6C5D\u9633\u53BF"
          },
          {
            code: "410327",
            name: "\u5B9C\u9633\u53BF"
          },
          {
            code: "410328",
            name: "\u6D1B\u5B81\u53BF"
          },
          {
            code: "410329",
            name: "\u4F0A\u5DDD\u53BF"
          },
          {
            code: "410371",
            name: "\u6D1B\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410381",
            name: "\u5043\u5E08\u5E02"
          }
        ]
      },
      {
        code: "4104",
        name: "\u5E73\u9876\u5C71\u5E02",
        children: [
          {
            code: "410402",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "410403",
            name: "\u536B\u4E1C\u533A"
          },
          {
            code: "410404",
            name: "\u77F3\u9F99\u533A"
          },
          {
            code: "410411",
            name: "\u6E5B\u6CB3\u533A"
          },
          {
            code: "410421",
            name: "\u5B9D\u4E30\u53BF"
          },
          {
            code: "410422",
            name: "\u53F6\u53BF"
          },
          {
            code: "410423",
            name: "\u9C81\u5C71\u53BF"
          },
          {
            code: "410425",
            name: "\u90CF\u53BF"
          },
          {
            code: "410471",
            name: "\u5E73\u9876\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410472",
            name: "\u5E73\u9876\u5C71\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410481",
            name: "\u821E\u94A2\u5E02"
          },
          {
            code: "410482",
            name: "\u6C5D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4105",
        name: "\u5B89\u9633\u5E02",
        children: [
          {
            code: "410502",
            name: "\u6587\u5CF0\u533A"
          },
          {
            code: "410503",
            name: "\u5317\u5173\u533A"
          },
          {
            code: "410505",
            name: "\u6BB7\u90FD\u533A"
          },
          {
            code: "410506",
            name: "\u9F99\u5B89\u533A"
          },
          {
            code: "410522",
            name: "\u5B89\u9633\u53BF"
          },
          {
            code: "410523",
            name: "\u6C64\u9634\u53BF"
          },
          {
            code: "410526",
            name: "\u6ED1\u53BF"
          },
          {
            code: "410527",
            name: "\u5185\u9EC4\u53BF"
          },
          {
            code: "410571",
            name: "\u5B89\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410581",
            name: "\u6797\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4106",
        name: "\u9E64\u58C1\u5E02",
        children: [
          {
            code: "410602",
            name: "\u9E64\u5C71\u533A"
          },
          {
            code: "410603",
            name: "\u5C71\u57CE\u533A"
          },
          {
            code: "410611",
            name: "\u6DC7\u6EE8\u533A"
          },
          {
            code: "410621",
            name: "\u6D5A\u53BF"
          },
          {
            code: "410622",
            name: "\u6DC7\u53BF"
          },
          {
            code: "410671",
            name: "\u9E64\u58C1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4107",
        name: "\u65B0\u4E61\u5E02",
        children: [
          {
            code: "410702",
            name: "\u7EA2\u65D7\u533A"
          },
          {
            code: "410703",
            name: "\u536B\u6EE8\u533A"
          },
          {
            code: "410704",
            name: "\u51E4\u6CC9\u533A"
          },
          {
            code: "410711",
            name: "\u7267\u91CE\u533A"
          },
          {
            code: "410721",
            name: "\u65B0\u4E61\u53BF"
          },
          {
            code: "410724",
            name: "\u83B7\u5609\u53BF"
          },
          {
            code: "410725",
            name: "\u539F\u9633\u53BF"
          },
          {
            code: "410726",
            name: "\u5EF6\u6D25\u53BF"
          },
          {
            code: "410727",
            name: "\u5C01\u4E18\u53BF"
          },
          {
            code: "410771",
            name: "\u65B0\u4E61\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410772",
            name: "\u65B0\u4E61\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410773",
            name: "\u65B0\u4E61\u5E02\u5E73\u539F\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410781",
            name: "\u536B\u8F89\u5E02"
          },
          {
            code: "410782",
            name: "\u8F89\u53BF\u5E02"
          },
          {
            code: "410783",
            name: "\u957F\u57A3\u5E02"
          }
        ]
      },
      {
        code: "4108",
        name: "\u7126\u4F5C\u5E02",
        children: [
          {
            code: "410802",
            name: "\u89E3\u653E\u533A"
          },
          {
            code: "410803",
            name: "\u4E2D\u7AD9\u533A"
          },
          {
            code: "410804",
            name: "\u9A6C\u6751\u533A"
          },
          {
            code: "410811",
            name: "\u5C71\u9633\u533A"
          },
          {
            code: "410821",
            name: "\u4FEE\u6B66\u53BF"
          },
          {
            code: "410822",
            name: "\u535A\u7231\u53BF"
          },
          {
            code: "410823",
            name: "\u6B66\u965F\u53BF"
          },
          {
            code: "410825",
            name: "\u6E29\u53BF"
          },
          {
            code: "410871",
            name: "\u7126\u4F5C\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410882",
            name: "\u6C81\u9633\u5E02"
          },
          {
            code: "410883",
            name: "\u5B5F\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4109",
        name: "\u6FEE\u9633\u5E02",
        children: [
          {
            code: "410902",
            name: "\u534E\u9F99\u533A"
          },
          {
            code: "410922",
            name: "\u6E05\u4E30\u53BF"
          },
          {
            code: "410923",
            name: "\u5357\u4E50\u53BF"
          },
          {
            code: "410926",
            name: "\u8303\u53BF"
          },
          {
            code: "410927",
            name: "\u53F0\u524D\u53BF"
          },
          {
            code: "410928",
            name: "\u6FEE\u9633\u53BF"
          },
          {
            code: "410971",
            name: "\u6CB3\u5357\u6FEE\u9633\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "410972",
            name: "\u6FEE\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4110",
        name: "\u8BB8\u660C\u5E02",
        children: [
          {
            code: "411002",
            name: "\u9B4F\u90FD\u533A"
          },
          {
            code: "411003",
            name: "\u5EFA\u5B89\u533A"
          },
          {
            code: "411024",
            name: "\u9122\u9675\u53BF"
          },
          {
            code: "411025",
            name: "\u8944\u57CE\u53BF"
          },
          {
            code: "411071",
            name: "\u8BB8\u660C\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "411081",
            name: "\u79B9\u5DDE\u5E02"
          },
          {
            code: "411082",
            name: "\u957F\u845B\u5E02"
          }
        ]
      },
      {
        code: "4111",
        name: "\u6F2F\u6CB3\u5E02",
        children: [
          {
            code: "411102",
            name: "\u6E90\u6C47\u533A"
          },
          {
            code: "411103",
            name: "\u90FE\u57CE\u533A"
          },
          {
            code: "411104",
            name: "\u53EC\u9675\u533A"
          },
          {
            code: "411121",
            name: "\u821E\u9633\u53BF"
          },
          {
            code: "411122",
            name: "\u4E34\u988D\u53BF"
          },
          {
            code: "411171",
            name: "\u6F2F\u6CB3\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4112",
        name: "\u4E09\u95E8\u5CE1\u5E02",
        children: [
          {
            code: "411202",
            name: "\u6E56\u6EE8\u533A"
          },
          {
            code: "411203",
            name: "\u9655\u5DDE\u533A"
          },
          {
            code: "411221",
            name: "\u6E11\u6C60\u53BF"
          },
          {
            code: "411224",
            name: "\u5362\u6C0F\u53BF"
          },
          {
            code: "411271",
            name: "\u6CB3\u5357\u4E09\u95E8\u5CE1\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411281",
            name: "\u4E49\u9A6C\u5E02"
          },
          {
            code: "411282",
            name: "\u7075\u5B9D\u5E02"
          }
        ]
      },
      {
        code: "4113",
        name: "\u5357\u9633\u5E02",
        children: [
          {
            code: "411302",
            name: "\u5B9B\u57CE\u533A"
          },
          {
            code: "411303",
            name: "\u5367\u9F99\u533A"
          },
          {
            code: "411321",
            name: "\u5357\u53EC\u53BF"
          },
          {
            code: "411322",
            name: "\u65B9\u57CE\u53BF"
          },
          {
            code: "411323",
            name: "\u897F\u5CE1\u53BF"
          },
          {
            code: "411324",
            name: "\u9547\u5E73\u53BF"
          },
          {
            code: "411325",
            name: "\u5185\u4E61\u53BF"
          },
          {
            code: "411326",
            name: "\u6DC5\u5DDD\u53BF"
          },
          {
            code: "411327",
            name: "\u793E\u65D7\u53BF"
          },
          {
            code: "411328",
            name: "\u5510\u6CB3\u53BF"
          },
          {
            code: "411329",
            name: "\u65B0\u91CE\u53BF"
          },
          {
            code: "411330",
            name: "\u6850\u67CF\u53BF"
          },
          {
            code: "411371",
            name: "\u5357\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "411372",
            name: "\u5357\u9633\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "411381",
            name: "\u9093\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4114",
        name: "\u5546\u4E18\u5E02",
        children: [
          {
            code: "411402",
            name: "\u6881\u56ED\u533A"
          },
          {
            code: "411403",
            name: "\u7762\u9633\u533A"
          },
          {
            code: "411421",
            name: "\u6C11\u6743\u53BF"
          },
          {
            code: "411422",
            name: "\u7762\u53BF"
          },
          {
            code: "411423",
            name: "\u5B81\u9675\u53BF"
          },
          {
            code: "411424",
            name: "\u67D8\u57CE\u53BF"
          },
          {
            code: "411425",
            name: "\u865E\u57CE\u53BF"
          },
          {
            code: "411426",
            name: "\u590F\u9091\u53BF"
          },
          {
            code: "411471",
            name: "\u8C6B\u4E1C\u7EFC\u5408\u7269\u6D41\u4EA7\u4E1A\u805A\u96C6\u533A"
          },
          {
            code: "411472",
            name: "\u6CB3\u5357\u5546\u4E18\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411481",
            name: "\u6C38\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4115",
        name: "\u4FE1\u9633\u5E02",
        children: [
          {
            code: "411502",
            name: "\u6D49\u6CB3\u533A"
          },
          {
            code: "411503",
            name: "\u5E73\u6865\u533A"
          },
          {
            code: "411521",
            name: "\u7F57\u5C71\u53BF"
          },
          {
            code: "411522",
            name: "\u5149\u5C71\u53BF"
          },
          {
            code: "411523",
            name: "\u65B0\u53BF"
          },
          {
            code: "411524",
            name: "\u5546\u57CE\u53BF"
          },
          {
            code: "411525",
            name: "\u56FA\u59CB\u53BF"
          },
          {
            code: "411526",
            name: "\u6F62\u5DDD\u53BF"
          },
          {
            code: "411527",
            name: "\u6DEE\u6EE8\u53BF"
          },
          {
            code: "411528",
            name: "\u606F\u53BF"
          },
          {
            code: "411571",
            name: "\u4FE1\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4116",
        name: "\u5468\u53E3\u5E02",
        children: [
          {
            code: "411602",
            name: "\u5DDD\u6C47\u533A"
          },
          {
            code: "411603",
            name: "\u6DEE\u9633\u533A"
          },
          {
            code: "411621",
            name: "\u6276\u6C9F\u53BF"
          },
          {
            code: "411622",
            name: "\u897F\u534E\u53BF"
          },
          {
            code: "411623",
            name: "\u5546\u6C34\u53BF"
          },
          {
            code: "411624",
            name: "\u6C88\u4E18\u53BF"
          },
          {
            code: "411625",
            name: "\u90F8\u57CE\u53BF"
          },
          {
            code: "411627",
            name: "\u592A\u5EB7\u53BF"
          },
          {
            code: "411628",
            name: "\u9E7F\u9091\u53BF"
          },
          {
            code: "411671",
            name: "\u6CB3\u5357\u5468\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411681",
            name: "\u9879\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4117",
        name: "\u9A7B\u9A6C\u5E97\u5E02",
        children: [
          {
            code: "411702",
            name: "\u9A7F\u57CE\u533A"
          },
          {
            code: "411721",
            name: "\u897F\u5E73\u53BF"
          },
          {
            code: "411722",
            name: "\u4E0A\u8521\u53BF"
          },
          {
            code: "411723",
            name: "\u5E73\u8206\u53BF"
          },
          {
            code: "411724",
            name: "\u6B63\u9633\u53BF"
          },
          {
            code: "411725",
            name: "\u786E\u5C71\u53BF"
          },
          {
            code: "411726",
            name: "\u6CCC\u9633\u53BF"
          },
          {
            code: "411727",
            name: "\u6C5D\u5357\u53BF"
          },
          {
            code: "411728",
            name: "\u9042\u5E73\u53BF"
          },
          {
            code: "411729",
            name: "\u65B0\u8521\u53BF"
          },
          {
            code: "411771",
            name: "\u6CB3\u5357\u9A7B\u9A6C\u5E97\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4190",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "419001",
            name: "\u6D4E\u6E90\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "\u6E56\u5317\u7701",
    children: [
      {
        code: "4201",
        name: "\u6B66\u6C49\u5E02",
        children: [
          {
            code: "420102",
            name: "\u6C5F\u5CB8\u533A"
          },
          {
            code: "420103",
            name: "\u6C5F\u6C49\u533A"
          },
          {
            code: "420104",
            name: "\u785A\u53E3\u533A"
          },
          {
            code: "420105",
            name: "\u6C49\u9633\u533A"
          },
          {
            code: "420106",
            name: "\u6B66\u660C\u533A"
          },
          {
            code: "420107",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "420111",
            name: "\u6D2A\u5C71\u533A"
          },
          {
            code: "420112",
            name: "\u4E1C\u897F\u6E56\u533A"
          },
          {
            code: "420113",
            name: "\u6C49\u5357\u533A"
          },
          {
            code: "420114",
            name: "\u8521\u7538\u533A"
          },
          {
            code: "420115",
            name: "\u6C5F\u590F\u533A"
          },
          {
            code: "420116",
            name: "\u9EC4\u9642\u533A"
          },
          {
            code: "420117",
            name: "\u65B0\u6D32\u533A"
          }
        ]
      },
      {
        code: "4202",
        name: "\u9EC4\u77F3\u5E02",
        children: [
          {
            code: "420202",
            name: "\u9EC4\u77F3\u6E2F\u533A"
          },
          {
            code: "420203",
            name: "\u897F\u585E\u5C71\u533A"
          },
          {
            code: "420204",
            name: "\u4E0B\u9646\u533A"
          },
          {
            code: "420205",
            name: "\u94C1\u5C71\u533A"
          },
          {
            code: "420222",
            name: "\u9633\u65B0\u53BF"
          },
          {
            code: "420281",
            name: "\u5927\u51B6\u5E02"
          }
        ]
      },
      {
        code: "4203",
        name: "\u5341\u5830\u5E02",
        children: [
          {
            code: "420302",
            name: "\u8305\u7BAD\u533A"
          },
          {
            code: "420303",
            name: "\u5F20\u6E7E\u533A"
          },
          {
            code: "420304",
            name: "\u90E7\u9633\u533A"
          },
          {
            code: "420322",
            name: "\u90E7\u897F\u53BF"
          },
          {
            code: "420323",
            name: "\u7AF9\u5C71\u53BF"
          },
          {
            code: "420324",
            name: "\u7AF9\u6EAA\u53BF"
          },
          {
            code: "420325",
            name: "\u623F\u53BF"
          },
          {
            code: "420381",
            name: "\u4E39\u6C5F\u53E3\u5E02"
          }
        ]
      },
      {
        code: "4205",
        name: "\u5B9C\u660C\u5E02",
        children: [
          {
            code: "420502",
            name: "\u897F\u9675\u533A"
          },
          {
            code: "420503",
            name: "\u4F0D\u5BB6\u5C97\u533A"
          },
          {
            code: "420504",
            name: "\u70B9\u519B\u533A"
          },
          {
            code: "420505",
            name: "\u7307\u4EAD\u533A"
          },
          {
            code: "420506",
            name: "\u5937\u9675\u533A"
          },
          {
            code: "420525",
            name: "\u8FDC\u5B89\u53BF"
          },
          {
            code: "420526",
            name: "\u5174\u5C71\u53BF"
          },
          {
            code: "420527",
            name: "\u79ED\u5F52\u53BF"
          },
          {
            code: "420528",
            name: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420529",
            name: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420581",
            name: "\u5B9C\u90FD\u5E02"
          },
          {
            code: "420582",
            name: "\u5F53\u9633\u5E02"
          },
          {
            code: "420583",
            name: "\u679D\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4206",
        name: "\u8944\u9633\u5E02",
        children: [
          {
            code: "420602",
            name: "\u8944\u57CE\u533A"
          },
          {
            code: "420606",
            name: "\u6A0A\u57CE\u533A"
          },
          {
            code: "420607",
            name: "\u8944\u5DDE\u533A"
          },
          {
            code: "420624",
            name: "\u5357\u6F33\u53BF"
          },
          {
            code: "420625",
            name: "\u8C37\u57CE\u53BF"
          },
          {
            code: "420626",
            name: "\u4FDD\u5EB7\u53BF"
          },
          {
            code: "420682",
            name: "\u8001\u6CB3\u53E3\u5E02"
          },
          {
            code: "420683",
            name: "\u67A3\u9633\u5E02"
          },
          {
            code: "420684",
            name: "\u5B9C\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4207",
        name: "\u9102\u5DDE\u5E02",
        children: [
          {
            code: "420702",
            name: "\u6881\u5B50\u6E56\u533A"
          },
          {
            code: "420703",
            name: "\u534E\u5BB9\u533A"
          },
          {
            code: "420704",
            name: "\u9102\u57CE\u533A"
          }
        ]
      },
      {
        code: "4208",
        name: "\u8346\u95E8\u5E02",
        children: [
          {
            code: "420802",
            name: "\u4E1C\u5B9D\u533A"
          },
          {
            code: "420804",
            name: "\u6387\u5200\u533A"
          },
          {
            code: "420822",
            name: "\u6C99\u6D0B\u53BF"
          },
          {
            code: "420881",
            name: "\u949F\u7965\u5E02"
          },
          {
            code: "420882",
            name: "\u4EAC\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4209",
        name: "\u5B5D\u611F\u5E02",
        children: [
          {
            code: "420902",
            name: "\u5B5D\u5357\u533A"
          },
          {
            code: "420921",
            name: "\u5B5D\u660C\u53BF"
          },
          {
            code: "420922",
            name: "\u5927\u609F\u53BF"
          },
          {
            code: "420923",
            name: "\u4E91\u68A6\u53BF"
          },
          {
            code: "420981",
            name: "\u5E94\u57CE\u5E02"
          },
          {
            code: "420982",
            name: "\u5B89\u9646\u5E02"
          },
          {
            code: "420984",
            name: "\u6C49\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4210",
        name: "\u8346\u5DDE\u5E02",
        children: [
          {
            code: "421002",
            name: "\u6C99\u5E02\u533A"
          },
          {
            code: "421003",
            name: "\u8346\u5DDE\u533A"
          },
          {
            code: "421022",
            name: "\u516C\u5B89\u53BF"
          },
          {
            code: "421023",
            name: "\u76D1\u5229\u53BF"
          },
          {
            code: "421024",
            name: "\u6C5F\u9675\u53BF"
          },
          {
            code: "421071",
            name: "\u8346\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "421081",
            name: "\u77F3\u9996\u5E02"
          },
          {
            code: "421083",
            name: "\u6D2A\u6E56\u5E02"
          },
          {
            code: "421087",
            name: "\u677E\u6ECB\u5E02"
          }
        ]
      },
      {
        code: "4211",
        name: "\u9EC4\u5188\u5E02",
        children: [
          {
            code: "421102",
            name: "\u9EC4\u5DDE\u533A"
          },
          {
            code: "421121",
            name: "\u56E2\u98CE\u53BF"
          },
          {
            code: "421122",
            name: "\u7EA2\u5B89\u53BF"
          },
          {
            code: "421123",
            name: "\u7F57\u7530\u53BF"
          },
          {
            code: "421124",
            name: "\u82F1\u5C71\u53BF"
          },
          {
            code: "421125",
            name: "\u6D60\u6C34\u53BF"
          },
          {
            code: "421126",
            name: "\u8572\u6625\u53BF"
          },
          {
            code: "421127",
            name: "\u9EC4\u6885\u53BF"
          },
          {
            code: "421171",
            name: "\u9F99\u611F\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "421181",
            name: "\u9EBB\u57CE\u5E02"
          },
          {
            code: "421182",
            name: "\u6B66\u7A74\u5E02"
          }
        ]
      },
      {
        code: "4212",
        name: "\u54B8\u5B81\u5E02",
        children: [
          {
            code: "421202",
            name: "\u54B8\u5B89\u533A"
          },
          {
            code: "421221",
            name: "\u5609\u9C7C\u53BF"
          },
          {
            code: "421222",
            name: "\u901A\u57CE\u53BF"
          },
          {
            code: "421223",
            name: "\u5D07\u9633\u53BF"
          },
          {
            code: "421224",
            name: "\u901A\u5C71\u53BF"
          },
          {
            code: "421281",
            name: "\u8D64\u58C1\u5E02"
          }
        ]
      },
      {
        code: "4213",
        name: "\u968F\u5DDE\u5E02",
        children: [
          {
            code: "421303",
            name: "\u66FE\u90FD\u533A"
          },
          {
            code: "421321",
            name: "\u968F\u53BF"
          },
          {
            code: "421381",
            name: "\u5E7F\u6C34\u5E02"
          }
        ]
      },
      {
        code: "4228",
        name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "422801",
            name: "\u6069\u65BD\u5E02"
          },
          {
            code: "422802",
            name: "\u5229\u5DDD\u5E02"
          },
          {
            code: "422822",
            name: "\u5EFA\u59CB\u53BF"
          },
          {
            code: "422823",
            name: "\u5DF4\u4E1C\u53BF"
          },
          {
            code: "422825",
            name: "\u5BA3\u6069\u53BF"
          },
          {
            code: "422826",
            name: "\u54B8\u4E30\u53BF"
          },
          {
            code: "422827",
            name: "\u6765\u51E4\u53BF"
          },
          {
            code: "422828",
            name: "\u9E64\u5CF0\u53BF"
          }
        ]
      },
      {
        code: "4290",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "429004",
            name: "\u4ED9\u6843\u5E02"
          },
          {
            code: "429005",
            name: "\u6F5C\u6C5F\u5E02"
          },
          {
            code: "429006",
            name: "\u5929\u95E8\u5E02"
          },
          {
            code: "429021",
            name: "\u795E\u519C\u67B6\u6797\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "\u6E56\u5357\u7701",
    children: [
      {
        code: "4301",
        name: "\u957F\u6C99\u5E02",
        children: [
          {
            code: "430102",
            name: "\u8299\u84C9\u533A"
          },
          {
            code: "430103",
            name: "\u5929\u5FC3\u533A"
          },
          {
            code: "430104",
            name: "\u5CB3\u9E93\u533A"
          },
          {
            code: "430105",
            name: "\u5F00\u798F\u533A"
          },
          {
            code: "430111",
            name: "\u96E8\u82B1\u533A"
          },
          {
            code: "430112",
            name: "\u671B\u57CE\u533A"
          },
          {
            code: "430121",
            name: "\u957F\u6C99\u53BF"
          },
          {
            code: "430181",
            name: "\u6D4F\u9633\u5E02"
          },
          {
            code: "430182",
            name: "\u5B81\u4E61\u5E02"
          }
        ]
      },
      {
        code: "4302",
        name: "\u682A\u6D32\u5E02",
        children: [
          {
            code: "430202",
            name: "\u8377\u5858\u533A"
          },
          {
            code: "430203",
            name: "\u82A6\u6DDE\u533A"
          },
          {
            code: "430204",
            name: "\u77F3\u5CF0\u533A"
          },
          {
            code: "430211",
            name: "\u5929\u5143\u533A"
          },
          {
            code: "430212",
            name: "\u6E0C\u53E3\u533A"
          },
          {
            code: "430223",
            name: "\u6538\u53BF"
          },
          {
            code: "430224",
            name: "\u8336\u9675\u53BF"
          },
          {
            code: "430225",
            name: "\u708E\u9675\u53BF"
          },
          {
            code: "430271",
            name: "\u4E91\u9F99\u793A\u8303\u533A"
          },
          {
            code: "430281",
            name: "\u91B4\u9675\u5E02"
          }
        ]
      },
      {
        code: "4303",
        name: "\u6E58\u6F6D\u5E02",
        children: [
          {
            code: "430302",
            name: "\u96E8\u6E56\u533A"
          },
          {
            code: "430304",
            name: "\u5CB3\u5858\u533A"
          },
          {
            code: "430321",
            name: "\u6E58\u6F6D\u53BF"
          },
          {
            code: "430371",
            name: "\u6E56\u5357\u6E58\u6F6D\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430372",
            name: "\u6E58\u6F6D\u662D\u5C71\u793A\u8303\u533A"
          },
          {
            code: "430373",
            name: "\u6E58\u6F6D\u4E5D\u534E\u793A\u8303\u533A"
          },
          {
            code: "430381",
            name: "\u6E58\u4E61\u5E02"
          },
          {
            code: "430382",
            name: "\u97F6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4304",
        name: "\u8861\u9633\u5E02",
        children: [
          {
            code: "430405",
            name: "\u73E0\u6656\u533A"
          },
          {
            code: "430406",
            name: "\u96C1\u5CF0\u533A"
          },
          {
            code: "430407",
            name: "\u77F3\u9F13\u533A"
          },
          {
            code: "430408",
            name: "\u84B8\u6E58\u533A"
          },
          {
            code: "430412",
            name: "\u5357\u5CB3\u533A"
          },
          {
            code: "430421",
            name: "\u8861\u9633\u53BF"
          },
          {
            code: "430422",
            name: "\u8861\u5357\u53BF"
          },
          {
            code: "430423",
            name: "\u8861\u5C71\u53BF"
          },
          {
            code: "430424",
            name: "\u8861\u4E1C\u53BF"
          },
          {
            code: "430426",
            name: "\u7941\u4E1C\u53BF"
          },
          {
            code: "430471",
            name: "\u8861\u9633\u7EFC\u5408\u4FDD\u7A0E\u533A"
          },
          {
            code: "430472",
            name: "\u6E56\u5357\u8861\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430473",
            name: "\u6E56\u5357\u8861\u9633\u677E\u6728\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "430481",
            name: "\u8012\u9633\u5E02"
          },
          {
            code: "430482",
            name: "\u5E38\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4305",
        name: "\u90B5\u9633\u5E02",
        children: [
          {
            code: "430502",
            name: "\u53CC\u6E05\u533A"
          },
          {
            code: "430503",
            name: "\u5927\u7965\u533A"
          },
          {
            code: "430511",
            name: "\u5317\u5854\u533A"
          },
          {
            code: "430522",
            name: "\u65B0\u90B5\u53BF"
          },
          {
            code: "430523",
            name: "\u90B5\u9633\u53BF"
          },
          {
            code: "430524",
            name: "\u9686\u56DE\u53BF"
          },
          {
            code: "430525",
            name: "\u6D1E\u53E3\u53BF"
          },
          {
            code: "430527",
            name: "\u7EE5\u5B81\u53BF"
          },
          {
            code: "430528",
            name: "\u65B0\u5B81\u53BF"
          },
          {
            code: "430529",
            name: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "430581",
            name: "\u6B66\u5188\u5E02"
          },
          {
            code: "430582",
            name: "\u90B5\u4E1C\u5E02"
          }
        ]
      },
      {
        code: "4306",
        name: "\u5CB3\u9633\u5E02",
        children: [
          {
            code: "430602",
            name: "\u5CB3\u9633\u697C\u533A"
          },
          {
            code: "430603",
            name: "\u4E91\u6EAA\u533A"
          },
          {
            code: "430611",
            name: "\u541B\u5C71\u533A"
          },
          {
            code: "430621",
            name: "\u5CB3\u9633\u53BF"
          },
          {
            code: "430623",
            name: "\u534E\u5BB9\u53BF"
          },
          {
            code: "430624",
            name: "\u6E58\u9634\u53BF"
          },
          {
            code: "430626",
            name: "\u5E73\u6C5F\u53BF"
          },
          {
            code: "430671",
            name: "\u5CB3\u9633\u5E02\u5C48\u539F\u7BA1\u7406\u533A"
          },
          {
            code: "430681",
            name: "\u6C68\u7F57\u5E02"
          },
          {
            code: "430682",
            name: "\u4E34\u6E58\u5E02"
          }
        ]
      },
      {
        code: "4307",
        name: "\u5E38\u5FB7\u5E02",
        children: [
          {
            code: "430702",
            name: "\u6B66\u9675\u533A"
          },
          {
            code: "430703",
            name: "\u9F0E\u57CE\u533A"
          },
          {
            code: "430721",
            name: "\u5B89\u4E61\u53BF"
          },
          {
            code: "430722",
            name: "\u6C49\u5BFF\u53BF"
          },
          {
            code: "430723",
            name: "\u6FA7\u53BF"
          },
          {
            code: "430724",
            name: "\u4E34\u6FA7\u53BF"
          },
          {
            code: "430725",
            name: "\u6843\u6E90\u53BF"
          },
          {
            code: "430726",
            name: "\u77F3\u95E8\u53BF"
          },
          {
            code: "430771",
            name: "\u5E38\u5FB7\u5E02\u897F\u6D1E\u5EAD\u7BA1\u7406\u533A"
          },
          {
            code: "430781",
            name: "\u6D25\u5E02\u5E02"
          }
        ]
      },
      {
        code: "4308",
        name: "\u5F20\u5BB6\u754C\u5E02",
        children: [
          {
            code: "430802",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "430811",
            name: "\u6B66\u9675\u6E90\u533A"
          },
          {
            code: "430821",
            name: "\u6148\u5229\u53BF"
          },
          {
            code: "430822",
            name: "\u6851\u690D\u53BF"
          }
        ]
      },
      {
        code: "4309",
        name: "\u76CA\u9633\u5E02",
        children: [
          {
            code: "430902",
            name: "\u8D44\u9633\u533A"
          },
          {
            code: "430903",
            name: "\u8D6B\u5C71\u533A"
          },
          {
            code: "430921",
            name: "\u5357\u53BF"
          },
          {
            code: "430922",
            name: "\u6843\u6C5F\u53BF"
          },
          {
            code: "430923",
            name: "\u5B89\u5316\u53BF"
          },
          {
            code: "430971",
            name: "\u76CA\u9633\u5E02\u5927\u901A\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "430972",
            name: "\u6E56\u5357\u76CA\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430981",
            name: "\u6C85\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4310",
        name: "\u90F4\u5DDE\u5E02",
        children: [
          {
            code: "431002",
            name: "\u5317\u6E56\u533A"
          },
          {
            code: "431003",
            name: "\u82CF\u4ED9\u533A"
          },
          {
            code: "431021",
            name: "\u6842\u9633\u53BF"
          },
          {
            code: "431022",
            name: "\u5B9C\u7AE0\u53BF"
          },
          {
            code: "431023",
            name: "\u6C38\u5174\u53BF"
          },
          {
            code: "431024",
            name: "\u5609\u79BE\u53BF"
          },
          {
            code: "431025",
            name: "\u4E34\u6B66\u53BF"
          },
          {
            code: "431026",
            name: "\u6C5D\u57CE\u53BF"
          },
          {
            code: "431027",
            name: "\u6842\u4E1C\u53BF"
          },
          {
            code: "431028",
            name: "\u5B89\u4EC1\u53BF"
          },
          {
            code: "431081",
            name: "\u8D44\u5174\u5E02"
          }
        ]
      },
      {
        code: "4311",
        name: "\u6C38\u5DDE\u5E02",
        children: [
          {
            code: "431102",
            name: "\u96F6\u9675\u533A"
          },
          {
            code: "431103",
            name: "\u51B7\u6C34\u6EE9\u533A"
          },
          {
            code: "431121",
            name: "\u7941\u9633\u53BF"
          },
          {
            code: "431122",
            name: "\u4E1C\u5B89\u53BF"
          },
          {
            code: "431123",
            name: "\u53CC\u724C\u53BF"
          },
          {
            code: "431124",
            name: "\u9053\u53BF"
          },
          {
            code: "431125",
            name: "\u6C5F\u6C38\u53BF"
          },
          {
            code: "431126",
            name: "\u5B81\u8FDC\u53BF"
          },
          {
            code: "431127",
            name: "\u84DD\u5C71\u53BF"
          },
          {
            code: "431128",
            name: "\u65B0\u7530\u53BF"
          },
          {
            code: "431129",
            name: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431171",
            name: "\u6C38\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "431172",
            name: "\u6C38\u5DDE\u5E02\u91D1\u6D1E\u7BA1\u7406\u533A"
          },
          {
            code: "431173",
            name: "\u6C38\u5DDE\u5E02\u56DE\u9F99\u5729\u7BA1\u7406\u533A"
          }
        ]
      },
      {
        code: "4312",
        name: "\u6000\u5316\u5E02",
        children: [
          {
            code: "431202",
            name: "\u9E64\u57CE\u533A"
          },
          {
            code: "431221",
            name: "\u4E2D\u65B9\u53BF"
          },
          {
            code: "431222",
            name: "\u6C85\u9675\u53BF"
          },
          {
            code: "431223",
            name: "\u8FB0\u6EAA\u53BF"
          },
          {
            code: "431224",
            name: "\u6E86\u6D66\u53BF"
          },
          {
            code: "431225",
            name: "\u4F1A\u540C\u53BF"
          },
          {
            code: "431226",
            name: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431227",
            name: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431228",
            name: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431229",
            name: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431230",
            name: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431271",
            name: "\u6000\u5316\u5E02\u6D2A\u6C5F\u7BA1\u7406\u533A"
          },
          {
            code: "431281",
            name: "\u6D2A\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4313",
        name: "\u5A04\u5E95\u5E02",
        children: [
          {
            code: "431302",
            name: "\u5A04\u661F\u533A"
          },
          {
            code: "431321",
            name: "\u53CC\u5CF0\u53BF"
          },
          {
            code: "431322",
            name: "\u65B0\u5316\u53BF"
          },
          {
            code: "431381",
            name: "\u51B7\u6C34\u6C5F\u5E02"
          },
          {
            code: "431382",
            name: "\u6D9F\u6E90\u5E02"
          }
        ]
      },
      {
        code: "4331",
        name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "433101",
            name: "\u5409\u9996\u5E02"
          },
          {
            code: "433122",
            name: "\u6CF8\u6EAA\u53BF"
          },
          {
            code: "433123",
            name: "\u51E4\u51F0\u53BF"
          },
          {
            code: "433124",
            name: "\u82B1\u57A3\u53BF"
          },
          {
            code: "433125",
            name: "\u4FDD\u9756\u53BF"
          },
          {
            code: "433126",
            name: "\u53E4\u4E08\u53BF"
          },
          {
            code: "433127",
            name: "\u6C38\u987A\u53BF"
          },
          {
            code: "433130",
            name: "\u9F99\u5C71\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "\u5E7F\u4E1C\u7701",
    children: [
      {
        code: "4401",
        name: "\u5E7F\u5DDE\u5E02",
        children: [
          {
            code: "440103",
            name: "\u8354\u6E7E\u533A"
          },
          {
            code: "440104",
            name: "\u8D8A\u79C0\u533A"
          },
          {
            code: "440105",
            name: "\u6D77\u73E0\u533A"
          },
          {
            code: "440106",
            name: "\u5929\u6CB3\u533A"
          },
          {
            code: "440111",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "440112",
            name: "\u9EC4\u57D4\u533A"
          },
          {
            code: "440113",
            name: "\u756A\u79BA\u533A"
          },
          {
            code: "440114",
            name: "\u82B1\u90FD\u533A"
          },
          {
            code: "440115",
            name: "\u5357\u6C99\u533A"
          },
          {
            code: "440117",
            name: "\u4ECE\u5316\u533A"
          },
          {
            code: "440118",
            name: "\u589E\u57CE\u533A"
          }
        ]
      },
      {
        code: "4402",
        name: "\u97F6\u5173\u5E02",
        children: [
          {
            code: "440203",
            name: "\u6B66\u6C5F\u533A"
          },
          {
            code: "440204",
            name: "\u6D48\u6C5F\u533A"
          },
          {
            code: "440205",
            name: "\u66F2\u6C5F\u533A"
          },
          {
            code: "440222",
            name: "\u59CB\u5174\u53BF"
          },
          {
            code: "440224",
            name: "\u4EC1\u5316\u53BF"
          },
          {
            code: "440229",
            name: "\u7FC1\u6E90\u53BF"
          },
          {
            code: "440232",
            name: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "440233",
            name: "\u65B0\u4E30\u53BF"
          },
          {
            code: "440281",
            name: "\u4E50\u660C\u5E02"
          },
          {
            code: "440282",
            name: "\u5357\u96C4\u5E02"
          }
        ]
      },
      {
        code: "4403",
        name: "\u6DF1\u5733\u5E02",
        children: [
          {
            code: "440303",
            name: "\u7F57\u6E56\u533A"
          },
          {
            code: "440304",
            name: "\u798F\u7530\u533A"
          },
          {
            code: "440305",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "440306",
            name: "\u5B9D\u5B89\u533A"
          },
          {
            code: "440307",
            name: "\u9F99\u5C97\u533A"
          },
          {
            code: "440308",
            name: "\u76D0\u7530\u533A"
          },
          {
            code: "440309",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "440310",
            name: "\u576A\u5C71\u533A"
          },
          {
            code: "440311",
            name: "\u5149\u660E\u533A"
          }
        ]
      },
      {
        code: "4404",
        name: "\u73E0\u6D77\u5E02",
        children: [
          {
            code: "440402",
            name: "\u9999\u6D32\u533A"
          },
          {
            code: "440403",
            name: "\u6597\u95E8\u533A"
          },
          {
            code: "440404",
            name: "\u91D1\u6E7E\u533A"
          }
        ]
      },
      {
        code: "4405",
        name: "\u6C55\u5934\u5E02",
        children: [
          {
            code: "440507",
            name: "\u9F99\u6E56\u533A"
          },
          {
            code: "440511",
            name: "\u91D1\u5E73\u533A"
          },
          {
            code: "440512",
            name: "\u6FE0\u6C5F\u533A"
          },
          {
            code: "440513",
            name: "\u6F6E\u9633\u533A"
          },
          {
            code: "440514",
            name: "\u6F6E\u5357\u533A"
          },
          {
            code: "440515",
            name: "\u6F84\u6D77\u533A"
          },
          {
            code: "440523",
            name: "\u5357\u6FB3\u53BF"
          }
        ]
      },
      {
        code: "4406",
        name: "\u4F5B\u5C71\u5E02",
        children: [
          {
            code: "440604",
            name: "\u7985\u57CE\u533A"
          },
          {
            code: "440605",
            name: "\u5357\u6D77\u533A"
          },
          {
            code: "440606",
            name: "\u987A\u5FB7\u533A"
          },
          {
            code: "440607",
            name: "\u4E09\u6C34\u533A"
          },
          {
            code: "440608",
            name: "\u9AD8\u660E\u533A"
          }
        ]
      },
      {
        code: "4407",
        name: "\u6C5F\u95E8\u5E02",
        children: [
          {
            code: "440703",
            name: "\u84EC\u6C5F\u533A"
          },
          {
            code: "440704",
            name: "\u6C5F\u6D77\u533A"
          },
          {
            code: "440705",
            name: "\u65B0\u4F1A\u533A"
          },
          {
            code: "440781",
            name: "\u53F0\u5C71\u5E02"
          },
          {
            code: "440783",
            name: "\u5F00\u5E73\u5E02"
          },
          {
            code: "440784",
            name: "\u9E64\u5C71\u5E02"
          },
          {
            code: "440785",
            name: "\u6069\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4408",
        name: "\u6E5B\u6C5F\u5E02",
        children: [
          {
            code: "440802",
            name: "\u8D64\u574E\u533A"
          },
          {
            code: "440803",
            name: "\u971E\u5C71\u533A"
          },
          {
            code: "440804",
            name: "\u5761\u5934\u533A"
          },
          {
            code: "440811",
            name: "\u9EBB\u7AE0\u533A"
          },
          {
            code: "440823",
            name: "\u9042\u6EAA\u53BF"
          },
          {
            code: "440825",
            name: "\u5F90\u95FB\u53BF"
          },
          {
            code: "440881",
            name: "\u5EC9\u6C5F\u5E02"
          },
          {
            code: "440882",
            name: "\u96F7\u5DDE\u5E02"
          },
          {
            code: "440883",
            name: "\u5434\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4409",
        name: "\u8302\u540D\u5E02",
        children: [
          {
            code: "440902",
            name: "\u8302\u5357\u533A"
          },
          {
            code: "440904",
            name: "\u7535\u767D\u533A"
          },
          {
            code: "440981",
            name: "\u9AD8\u5DDE\u5E02"
          },
          {
            code: "440982",
            name: "\u5316\u5DDE\u5E02"
          },
          {
            code: "440983",
            name: "\u4FE1\u5B9C\u5E02"
          }
        ]
      },
      {
        code: "4412",
        name: "\u8087\u5E86\u5E02",
        children: [
          {
            code: "441202",
            name: "\u7AEF\u5DDE\u533A"
          },
          {
            code: "441203",
            name: "\u9F0E\u6E56\u533A"
          },
          {
            code: "441204",
            name: "\u9AD8\u8981\u533A"
          },
          {
            code: "441223",
            name: "\u5E7F\u5B81\u53BF"
          },
          {
            code: "441224",
            name: "\u6000\u96C6\u53BF"
          },
          {
            code: "441225",
            name: "\u5C01\u5F00\u53BF"
          },
          {
            code: "441226",
            name: "\u5FB7\u5E86\u53BF"
          },
          {
            code: "441284",
            name: "\u56DB\u4F1A\u5E02"
          }
        ]
      },
      {
        code: "4413",
        name: "\u60E0\u5DDE\u5E02",
        children: [
          {
            code: "441302",
            name: "\u60E0\u57CE\u533A"
          },
          {
            code: "441303",
            name: "\u60E0\u9633\u533A"
          },
          {
            code: "441322",
            name: "\u535A\u7F57\u53BF"
          },
          {
            code: "441323",
            name: "\u60E0\u4E1C\u53BF"
          },
          {
            code: "441324",
            name: "\u9F99\u95E8\u53BF"
          }
        ]
      },
      {
        code: "4414",
        name: "\u6885\u5DDE\u5E02",
        children: [
          {
            code: "441402",
            name: "\u6885\u6C5F\u533A"
          },
          {
            code: "441403",
            name: "\u6885\u53BF\u533A"
          },
          {
            code: "441422",
            name: "\u5927\u57D4\u53BF"
          },
          {
            code: "441423",
            name: "\u4E30\u987A\u53BF"
          },
          {
            code: "441424",
            name: "\u4E94\u534E\u53BF"
          },
          {
            code: "441426",
            name: "\u5E73\u8FDC\u53BF"
          },
          {
            code: "441427",
            name: "\u8549\u5CAD\u53BF"
          },
          {
            code: "441481",
            name: "\u5174\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4415",
        name: "\u6C55\u5C3E\u5E02",
        children: [
          {
            code: "441502",
            name: "\u57CE\u533A"
          },
          {
            code: "441521",
            name: "\u6D77\u4E30\u53BF"
          },
          {
            code: "441523",
            name: "\u9646\u6CB3\u53BF"
          },
          {
            code: "441581",
            name: "\u9646\u4E30\u5E02"
          }
        ]
      },
      {
        code: "4416",
        name: "\u6CB3\u6E90\u5E02",
        children: [
          {
            code: "441602",
            name: "\u6E90\u57CE\u533A"
          },
          {
            code: "441621",
            name: "\u7D2B\u91D1\u53BF"
          },
          {
            code: "441622",
            name: "\u9F99\u5DDD\u53BF"
          },
          {
            code: "441623",
            name: "\u8FDE\u5E73\u53BF"
          },
          {
            code: "441624",
            name: "\u548C\u5E73\u53BF"
          },
          {
            code: "441625",
            name: "\u4E1C\u6E90\u53BF"
          }
        ]
      },
      {
        code: "4417",
        name: "\u9633\u6C5F\u5E02",
        children: [
          {
            code: "441702",
            name: "\u6C5F\u57CE\u533A"
          },
          {
            code: "441704",
            name: "\u9633\u4E1C\u533A"
          },
          {
            code: "441721",
            name: "\u9633\u897F\u53BF"
          },
          {
            code: "441781",
            name: "\u9633\u6625\u5E02"
          }
        ]
      },
      {
        code: "4418",
        name: "\u6E05\u8FDC\u5E02",
        children: [
          {
            code: "441802",
            name: "\u6E05\u57CE\u533A"
          },
          {
            code: "441803",
            name: "\u6E05\u65B0\u533A"
          },
          {
            code: "441821",
            name: "\u4F5B\u5188\u53BF"
          },
          {
            code: "441823",
            name: "\u9633\u5C71\u53BF"
          },
          {
            code: "441825",
            name: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441826",
            name: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441881",
            name: "\u82F1\u5FB7\u5E02"
          },
          {
            code: "441882",
            name: "\u8FDE\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4419",
        name: "\u4E1C\u839E\u5E02",
        children: [
          {
            code: "441900003",
            name: "\u4E1C\u57CE\u8857\u9053"
          },
          {
            code: "441900004",
            name: "\u5357\u57CE\u8857\u9053"
          },
          {
            code: "441900005",
            name: "\u4E07\u6C5F\u8857\u9053"
          },
          {
            code: "441900006",
            name: "\u839E\u57CE\u8857\u9053"
          },
          {
            code: "441900101",
            name: "\u77F3\u78A3\u9547"
          },
          {
            code: "441900102",
            name: "\u77F3\u9F99\u9547"
          },
          {
            code: "441900103",
            name: "\u8336\u5C71\u9547"
          },
          {
            code: "441900104",
            name: "\u77F3\u6392\u9547"
          },
          {
            code: "441900105",
            name: "\u4F01\u77F3\u9547"
          },
          {
            code: "441900106",
            name: "\u6A2A\u6CA5\u9547"
          },
          {
            code: "441900107",
            name: "\u6865\u5934\u9547"
          },
          {
            code: "441900108",
            name: "\u8C22\u5C97\u9547"
          },
          {
            code: "441900109",
            name: "\u4E1C\u5751\u9547"
          },
          {
            code: "441900110",
            name: "\u5E38\u5E73\u9547"
          },
          {
            code: "441900111",
            name: "\u5BEE\u6B65\u9547"
          },
          {
            code: "441900112",
            name: "\u6A1F\u6728\u5934\u9547"
          },
          {
            code: "441900113",
            name: "\u5927\u6717\u9547"
          },
          {
            code: "441900114",
            name: "\u9EC4\u6C5F\u9547"
          },
          {
            code: "441900115",
            name: "\u6E05\u6EAA\u9547"
          },
          {
            code: "441900116",
            name: "\u5858\u53A6\u9547"
          },
          {
            code: "441900117",
            name: "\u51E4\u5C97\u9547"
          },
          {
            code: "441900118",
            name: "\u5927\u5CAD\u5C71\u9547"
          },
          {
            code: "441900119",
            name: "\u957F\u5B89\u9547"
          },
          {
            code: "441900121",
            name: "\u864E\u95E8\u9547"
          },
          {
            code: "441900122",
            name: "\u539A\u8857\u9547"
          },
          {
            code: "441900123",
            name: "\u6C99\u7530\u9547"
          },
          {
            code: "441900124",
            name: "\u9053\u6ED8\u9547"
          },
          {
            code: "441900125",
            name: "\u6D2A\u6885\u9547"
          },
          {
            code: "441900126",
            name: "\u9EBB\u6D8C\u9547"
          },
          {
            code: "441900127",
            name: "\u671B\u725B\u58A9\u9547"
          },
          {
            code: "441900128",
            name: "\u4E2D\u5802\u9547"
          },
          {
            code: "441900129",
            name: "\u9AD8\u57D7\u9547"
          },
          {
            code: "441900401",
            name: "\u677E\u5C71\u6E56"
          },
          {
            code: "441900402",
            name: "\u4E1C\u839E\u6E2F"
          },
          {
            code: "441900403",
            name: "\u4E1C\u839E\u751F\u6001\u56ED"
          }
        ]
      },
      {
        code: "4420",
        name: "\u4E2D\u5C71\u5E02",
        children: [
          {
            code: "442000001",
            name: "\u77F3\u5C90\u8857\u9053"
          },
          {
            code: "442000002",
            name: "\u4E1C\u533A\u8857\u9053"
          },
          {
            code: "442000003",
            name: "\u4E2D\u5C71\u6E2F\u8857\u9053"
          },
          {
            code: "442000004",
            name: "\u897F\u533A\u8857\u9053"
          },
          {
            code: "442000005",
            name: "\u5357\u533A\u8857\u9053"
          },
          {
            code: "442000006",
            name: "\u4E94\u6842\u5C71\u8857\u9053"
          },
          {
            code: "442000100",
            name: "\u5C0F\u6984\u9547"
          },
          {
            code: "442000101",
            name: "\u9EC4\u5703\u9547"
          },
          {
            code: "442000102",
            name: "\u6C11\u4F17\u9547"
          },
          {
            code: "442000103",
            name: "\u4E1C\u51E4\u9547"
          },
          {
            code: "442000104",
            name: "\u4E1C\u5347\u9547"
          },
          {
            code: "442000105",
            name: "\u53E4\u9547\u9547"
          },
          {
            code: "442000106",
            name: "\u6C99\u6EAA\u9547"
          },
          {
            code: "442000107",
            name: "\u5766\u6D32\u9547"
          },
          {
            code: "442000108",
            name: "\u6E2F\u53E3\u9547"
          },
          {
            code: "442000109",
            name: "\u4E09\u89D2\u9547"
          },
          {
            code: "442000110",
            name: "\u6A2A\u680F\u9547"
          },
          {
            code: "442000111",
            name: "\u5357\u5934\u9547"
          },
          {
            code: "442000112",
            name: "\u961C\u6C99\u9547"
          },
          {
            code: "442000113",
            name: "\u5357\u6717\u9547"
          },
          {
            code: "442000114",
            name: "\u4E09\u4E61\u9547"
          },
          {
            code: "442000115",
            name: "\u677F\u8299\u9547"
          },
          {
            code: "442000116",
            name: "\u5927\u6D8C\u9547"
          },
          {
            code: "442000117",
            name: "\u795E\u6E7E\u9547"
          }
        ]
      },
      {
        code: "4451",
        name: "\u6F6E\u5DDE\u5E02",
        children: [
          {
            code: "445102",
            name: "\u6E58\u6865\u533A"
          },
          {
            code: "445103",
            name: "\u6F6E\u5B89\u533A"
          },
          {
            code: "445122",
            name: "\u9976\u5E73\u53BF"
          }
        ]
      },
      {
        code: "4452",
        name: "\u63ED\u9633\u5E02",
        children: [
          {
            code: "445202",
            name: "\u6995\u57CE\u533A"
          },
          {
            code: "445203",
            name: "\u63ED\u4E1C\u533A"
          },
          {
            code: "445222",
            name: "\u63ED\u897F\u53BF"
          },
          {
            code: "445224",
            name: "\u60E0\u6765\u53BF"
          },
          {
            code: "445281",
            name: "\u666E\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4453",
        name: "\u4E91\u6D6E\u5E02",
        children: [
          {
            code: "445302",
            name: "\u4E91\u57CE\u533A"
          },
          {
            code: "445303",
            name: "\u4E91\u5B89\u533A"
          },
          {
            code: "445321",
            name: "\u65B0\u5174\u53BF"
          },
          {
            code: "445322",
            name: "\u90C1\u5357\u53BF"
          },
          {
            code: "445381",
            name: "\u7F57\u5B9A\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "4501",
        name: "\u5357\u5B81\u5E02",
        children: [
          {
            code: "450102",
            name: "\u5174\u5B81\u533A"
          },
          {
            code: "450103",
            name: "\u9752\u79C0\u533A"
          },
          {
            code: "450105",
            name: "\u6C5F\u5357\u533A"
          },
          {
            code: "450107",
            name: "\u897F\u4E61\u5858\u533A"
          },
          {
            code: "450108",
            name: "\u826F\u5E86\u533A"
          },
          {
            code: "450109",
            name: "\u9095\u5B81\u533A"
          },
          {
            code: "450110",
            name: "\u6B66\u9E23\u533A"
          },
          {
            code: "450123",
            name: "\u9686\u5B89\u53BF"
          },
          {
            code: "450124",
            name: "\u9A6C\u5C71\u53BF"
          },
          {
            code: "450125",
            name: "\u4E0A\u6797\u53BF"
          },
          {
            code: "450126",
            name: "\u5BBE\u9633\u53BF"
          },
          {
            code: "450127",
            name: "\u6A2A\u53BF"
          }
        ]
      },
      {
        code: "4502",
        name: "\u67F3\u5DDE\u5E02",
        children: [
          {
            code: "450202",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "450203",
            name: "\u9C7C\u5CF0\u533A"
          },
          {
            code: "450204",
            name: "\u67F3\u5357\u533A"
          },
          {
            code: "450205",
            name: "\u67F3\u5317\u533A"
          },
          {
            code: "450206",
            name: "\u67F3\u6C5F\u533A"
          },
          {
            code: "450222",
            name: "\u67F3\u57CE\u53BF"
          },
          {
            code: "450223",
            name: "\u9E7F\u5BE8\u53BF"
          },
          {
            code: "450224",
            name: "\u878D\u5B89\u53BF"
          },
          {
            code: "450225",
            name: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450226",
            name: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4503",
        name: "\u6842\u6797\u5E02",
        children: [
          {
            code: "450302",
            name: "\u79C0\u5CF0\u533A"
          },
          {
            code: "450303",
            name: "\u53E0\u5F69\u533A"
          },
          {
            code: "450304",
            name: "\u8C61\u5C71\u533A"
          },
          {
            code: "450305",
            name: "\u4E03\u661F\u533A"
          },
          {
            code: "450311",
            name: "\u96C1\u5C71\u533A"
          },
          {
            code: "450312",
            name: "\u4E34\u6842\u533A"
          },
          {
            code: "450321",
            name: "\u9633\u6714\u53BF"
          },
          {
            code: "450323",
            name: "\u7075\u5DDD\u53BF"
          },
          {
            code: "450324",
            name: "\u5168\u5DDE\u53BF"
          },
          {
            code: "450325",
            name: "\u5174\u5B89\u53BF"
          },
          {
            code: "450326",
            name: "\u6C38\u798F\u53BF"
          },
          {
            code: "450327",
            name: "\u704C\u9633\u53BF"
          },
          {
            code: "450328",
            name: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450329",
            name: "\u8D44\u6E90\u53BF"
          },
          {
            code: "450330",
            name: "\u5E73\u4E50\u53BF"
          },
          {
            code: "450332",
            name: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450381",
            name: "\u8354\u6D66\u5E02"
          }
        ]
      },
      {
        code: "4504",
        name: "\u68A7\u5DDE\u5E02",
        children: [
          {
            code: "450403",
            name: "\u4E07\u79C0\u533A"
          },
          {
            code: "450405",
            name: "\u957F\u6D32\u533A"
          },
          {
            code: "450406",
            name: "\u9F99\u5729\u533A"
          },
          {
            code: "450421",
            name: "\u82CD\u68A7\u53BF"
          },
          {
            code: "450422",
            name: "\u85E4\u53BF"
          },
          {
            code: "450423",
            name: "\u8499\u5C71\u53BF"
          },
          {
            code: "450481",
            name: "\u5C91\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "4505",
        name: "\u5317\u6D77\u5E02",
        children: [
          {
            code: "450502",
            name: "\u6D77\u57CE\u533A"
          },
          {
            code: "450503",
            name: "\u94F6\u6D77\u533A"
          },
          {
            code: "450512",
            name: "\u94C1\u5C71\u6E2F\u533A"
          },
          {
            code: "450521",
            name: "\u5408\u6D66\u53BF"
          }
        ]
      },
      {
        code: "4506",
        name: "\u9632\u57CE\u6E2F\u5E02",
        children: [
          {
            code: "450602",
            name: "\u6E2F\u53E3\u533A"
          },
          {
            code: "450603",
            name: "\u9632\u57CE\u533A"
          },
          {
            code: "450621",
            name: "\u4E0A\u601D\u53BF"
          },
          {
            code: "450681",
            name: "\u4E1C\u5174\u5E02"
          }
        ]
      },
      {
        code: "4507",
        name: "\u94A6\u5DDE\u5E02",
        children: [
          {
            code: "450702",
            name: "\u94A6\u5357\u533A"
          },
          {
            code: "450703",
            name: "\u94A6\u5317\u533A"
          },
          {
            code: "450721",
            name: "\u7075\u5C71\u53BF"
          },
          {
            code: "450722",
            name: "\u6D66\u5317\u53BF"
          }
        ]
      },
      {
        code: "4508",
        name: "\u8D35\u6E2F\u5E02",
        children: [
          {
            code: "450802",
            name: "\u6E2F\u5317\u533A"
          },
          {
            code: "450803",
            name: "\u6E2F\u5357\u533A"
          },
          {
            code: "450804",
            name: "\u8983\u5858\u533A"
          },
          {
            code: "450821",
            name: "\u5E73\u5357\u53BF"
          },
          {
            code: "450881",
            name: "\u6842\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4509",
        name: "\u7389\u6797\u5E02",
        children: [
          {
            code: "450902",
            name: "\u7389\u5DDE\u533A"
          },
          {
            code: "450903",
            name: "\u798F\u7EF5\u533A"
          },
          {
            code: "450921",
            name: "\u5BB9\u53BF"
          },
          {
            code: "450922",
            name: "\u9646\u5DDD\u53BF"
          },
          {
            code: "450923",
            name: "\u535A\u767D\u53BF"
          },
          {
            code: "450924",
            name: "\u5174\u4E1A\u53BF"
          },
          {
            code: "450981",
            name: "\u5317\u6D41\u5E02"
          }
        ]
      },
      {
        code: "4510",
        name: "\u767E\u8272\u5E02",
        children: [
          {
            code: "451002",
            name: "\u53F3\u6C5F\u533A"
          },
          {
            code: "451003",
            name: "\u7530\u9633\u533A"
          },
          {
            code: "451022",
            name: "\u7530\u4E1C\u53BF"
          },
          {
            code: "451024",
            name: "\u5FB7\u4FDD\u53BF"
          },
          {
            code: "451026",
            name: "\u90A3\u5761\u53BF"
          },
          {
            code: "451027",
            name: "\u51CC\u4E91\u53BF"
          },
          {
            code: "451028",
            name: "\u4E50\u4E1A\u53BF"
          },
          {
            code: "451029",
            name: "\u7530\u6797\u53BF"
          },
          {
            code: "451030",
            name: "\u897F\u6797\u53BF"
          },
          {
            code: "451031",
            name: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451081",
            name: "\u9756\u897F\u5E02"
          },
          {
            code: "451082",
            name: "\u5E73\u679C\u5E02"
          }
        ]
      },
      {
        code: "4511",
        name: "\u8D3A\u5DDE\u5E02",
        children: [
          {
            code: "451102",
            name: "\u516B\u6B65\u533A"
          },
          {
            code: "451103",
            name: "\u5E73\u6842\u533A"
          },
          {
            code: "451121",
            name: "\u662D\u5E73\u53BF"
          },
          {
            code: "451122",
            name: "\u949F\u5C71\u53BF"
          },
          {
            code: "451123",
            name: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4512",
        name: "\u6CB3\u6C60\u5E02",
        children: [
          {
            code: "451202",
            name: "\u91D1\u57CE\u6C5F\u533A"
          },
          {
            code: "451203",
            name: "\u5B9C\u5DDE\u533A"
          },
          {
            code: "451221",
            name: "\u5357\u4E39\u53BF"
          },
          {
            code: "451222",
            name: "\u5929\u5CE8\u53BF"
          },
          {
            code: "451223",
            name: "\u51E4\u5C71\u53BF"
          },
          {
            code: "451224",
            name: "\u4E1C\u5170\u53BF"
          },
          {
            code: "451225",
            name: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451226",
            name: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451227",
            name: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451228",
            name: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451229",
            name: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4513",
        name: "\u6765\u5BBE\u5E02",
        children: [
          {
            code: "451302",
            name: "\u5174\u5BBE\u533A"
          },
          {
            code: "451321",
            name: "\u5FFB\u57CE\u53BF"
          },
          {
            code: "451322",
            name: "\u8C61\u5DDE\u53BF"
          },
          {
            code: "451323",
            name: "\u6B66\u5BA3\u53BF"
          },
          {
            code: "451324",
            name: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451381",
            name: "\u5408\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4514",
        name: "\u5D07\u5DE6\u5E02",
        children: [
          {
            code: "451402",
            name: "\u6C5F\u5DDE\u533A"
          },
          {
            code: "451421",
            name: "\u6276\u7EE5\u53BF"
          },
          {
            code: "451422",
            name: "\u5B81\u660E\u53BF"
          },
          {
            code: "451423",
            name: "\u9F99\u5DDE\u53BF"
          },
          {
            code: "451424",
            name: "\u5927\u65B0\u53BF"
          },
          {
            code: "451425",
            name: "\u5929\u7B49\u53BF"
          },
          {
            code: "451481",
            name: "\u51ED\u7965\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "\u6D77\u5357\u7701",
    children: [
      {
        code: "4601",
        name: "\u6D77\u53E3\u5E02",
        children: [
          {
            code: "460105",
            name: "\u79C0\u82F1\u533A"
          },
          {
            code: "460106",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "460107",
            name: "\u743C\u5C71\u533A"
          },
          {
            code: "460108",
            name: "\u7F8E\u5170\u533A"
          }
        ]
      },
      {
        code: "4602",
        name: "\u4E09\u4E9A\u5E02",
        children: [
          {
            code: "460202",
            name: "\u6D77\u68E0\u533A"
          },
          {
            code: "460203",
            name: "\u5409\u9633\u533A"
          },
          {
            code: "460204",
            name: "\u5929\u6DAF\u533A"
          },
          {
            code: "460205",
            name: "\u5D16\u5DDE\u533A"
          }
        ]
      },
      {
        code: "4603",
        name: "\u4E09\u6C99\u5E02",
        children: [
          {
            code: "460321",
            name: "\u897F\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460322",
            name: "\u5357\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460323",
            name: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF"
          }
        ]
      },
      {
        code: "4604",
        name: "\u510B\u5DDE\u5E02",
        children: [
          {
            code: "460400100",
            name: "\u90A3\u5927\u9547"
          },
          {
            code: "460400101",
            name: "\u548C\u5E86\u9547"
          },
          {
            code: "460400102",
            name: "\u5357\u4E30\u9547"
          },
          {
            code: "460400103",
            name: "\u5927\u6210\u9547"
          },
          {
            code: "460400104",
            name: "\u96C5\u661F\u9547"
          },
          {
            code: "460400105",
            name: "\u5170\u6D0B\u9547"
          },
          {
            code: "460400106",
            name: "\u5149\u6751\u9547"
          },
          {
            code: "460400107",
            name: "\u6728\u68E0\u9547"
          },
          {
            code: "460400108",
            name: "\u6D77\u5934\u9547"
          },
          {
            code: "460400109",
            name: "\u5CE8\u8513\u9547"
          },
          {
            code: "460400111",
            name: "\u738B\u4E94\u9547"
          },
          {
            code: "460400112",
            name: "\u767D\u9A6C\u4E95\u9547"
          },
          {
            code: "460400113",
            name: "\u4E2D\u548C\u9547"
          },
          {
            code: "460400114",
            name: "\u6392\u6D66\u9547"
          },
          {
            code: "460400115",
            name: "\u4E1C\u6210\u9547"
          },
          {
            code: "460400116",
            name: "\u65B0\u5DDE\u9547"
          },
          {
            code: "460400499",
            name: "\u6D0B\u6D66\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "460400500",
            name: "\u534E\u5357\u70ED\u4F5C\u5B66\u9662"
          }
        ]
      },
      {
        code: "4690",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "469001",
            name: "\u4E94\u6307\u5C71\u5E02"
          },
          {
            code: "469002",
            name: "\u743C\u6D77\u5E02"
          },
          {
            code: "469005",
            name: "\u6587\u660C\u5E02"
          },
          {
            code: "469006",
            name: "\u4E07\u5B81\u5E02"
          },
          {
            code: "469007",
            name: "\u4E1C\u65B9\u5E02"
          },
          {
            code: "469021",
            name: "\u5B9A\u5B89\u53BF"
          },
          {
            code: "469022",
            name: "\u5C6F\u660C\u53BF"
          },
          {
            code: "469023",
            name: "\u6F84\u8FC8\u53BF"
          },
          {
            code: "469024",
            name: "\u4E34\u9AD8\u53BF"
          },
          {
            code: "469025",
            name: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469026",
            name: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469027",
            name: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469028",
            name: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469029",
            name: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469030",
            name: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "\u91CD\u5E86\u5E02",
    children: [
      {
        code: "5001",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "500101",
            name: "\u4E07\u5DDE\u533A"
          },
          {
            code: "500102",
            name: "\u6DAA\u9675\u533A"
          },
          {
            code: "500103",
            name: "\u6E1D\u4E2D\u533A"
          },
          {
            code: "500104",
            name: "\u5927\u6E21\u53E3\u533A"
          },
          {
            code: "500105",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "500106",
            name: "\u6C99\u576A\u575D\u533A"
          },
          {
            code: "500107",
            name: "\u4E5D\u9F99\u5761\u533A"
          },
          {
            code: "500108",
            name: "\u5357\u5CB8\u533A"
          },
          {
            code: "500109",
            name: "\u5317\u789A\u533A"
          },
          {
            code: "500110",
            name: "\u7DA6\u6C5F\u533A"
          },
          {
            code: "500111",
            name: "\u5927\u8DB3\u533A"
          },
          {
            code: "500112",
            name: "\u6E1D\u5317\u533A"
          },
          {
            code: "500113",
            name: "\u5DF4\u5357\u533A"
          },
          {
            code: "500114",
            name: "\u9ED4\u6C5F\u533A"
          },
          {
            code: "500115",
            name: "\u957F\u5BFF\u533A"
          },
          {
            code: "500116",
            name: "\u6C5F\u6D25\u533A"
          },
          {
            code: "500117",
            name: "\u5408\u5DDD\u533A"
          },
          {
            code: "500118",
            name: "\u6C38\u5DDD\u533A"
          },
          {
            code: "500119",
            name: "\u5357\u5DDD\u533A"
          },
          {
            code: "500120",
            name: "\u74A7\u5C71\u533A"
          },
          {
            code: "500151",
            name: "\u94DC\u6881\u533A"
          },
          {
            code: "500152",
            name: "\u6F7C\u5357\u533A"
          },
          {
            code: "500153",
            name: "\u8363\u660C\u533A"
          },
          {
            code: "500154",
            name: "\u5F00\u5DDE\u533A"
          },
          {
            code: "500155",
            name: "\u6881\u5E73\u533A"
          },
          {
            code: "500156",
            name: "\u6B66\u9686\u533A"
          }
        ]
      },
      {
        code: "5002",
        name: "\u53BF",
        children: [
          {
            code: "500229",
            name: "\u57CE\u53E3\u53BF"
          },
          {
            code: "500230",
            name: "\u4E30\u90FD\u53BF"
          },
          {
            code: "500231",
            name: "\u57AB\u6C5F\u53BF"
          },
          {
            code: "500233",
            name: "\u5FE0\u53BF"
          },
          {
            code: "500235",
            name: "\u4E91\u9633\u53BF"
          },
          {
            code: "500236",
            name: "\u5949\u8282\u53BF"
          },
          {
            code: "500237",
            name: "\u5DEB\u5C71\u53BF"
          },
          {
            code: "500238",
            name: "\u5DEB\u6EAA\u53BF"
          },
          {
            code: "500240",
            name: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500241",
            name: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500242",
            name: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500243",
            name: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "\u56DB\u5DDD\u7701",
    children: [
      {
        code: "5101",
        name: "\u6210\u90FD\u5E02",
        children: [
          {
            code: "510104",
            name: "\u9526\u6C5F\u533A"
          },
          {
            code: "510105",
            name: "\u9752\u7F8A\u533A"
          },
          {
            code: "510106",
            name: "\u91D1\u725B\u533A"
          },
          {
            code: "510107",
            name: "\u6B66\u4FAF\u533A"
          },
          {
            code: "510108",
            name: "\u6210\u534E\u533A"
          },
          {
            code: "510112",
            name: "\u9F99\u6CC9\u9A7F\u533A"
          },
          {
            code: "510113",
            name: "\u9752\u767D\u6C5F\u533A"
          },
          {
            code: "510114",
            name: "\u65B0\u90FD\u533A"
          },
          {
            code: "510115",
            name: "\u6E29\u6C5F\u533A"
          },
          {
            code: "510116",
            name: "\u53CC\u6D41\u533A"
          },
          {
            code: "510117",
            name: "\u90EB\u90FD\u533A"
          },
          {
            code: "510118",
            name: "\u65B0\u6D25\u533A"
          },
          {
            code: "510121",
            name: "\u91D1\u5802\u53BF"
          },
          {
            code: "510129",
            name: "\u5927\u9091\u53BF"
          },
          {
            code: "510131",
            name: "\u84B2\u6C5F\u53BF"
          },
          {
            code: "510181",
            name: "\u90FD\u6C5F\u5830\u5E02"
          },
          {
            code: "510182",
            name: "\u5F6D\u5DDE\u5E02"
          },
          {
            code: "510183",
            name: "\u909B\u5D03\u5E02"
          },
          {
            code: "510184",
            name: "\u5D07\u5DDE\u5E02"
          },
          {
            code: "510185",
            name: "\u7B80\u9633\u5E02"
          }
        ]
      },
      {
        code: "5103",
        name: "\u81EA\u8D21\u5E02",
        children: [
          {
            code: "510302",
            name: "\u81EA\u6D41\u4E95\u533A"
          },
          {
            code: "510303",
            name: "\u8D21\u4E95\u533A"
          },
          {
            code: "510304",
            name: "\u5927\u5B89\u533A"
          },
          {
            code: "510311",
            name: "\u6CBF\u6EE9\u533A"
          },
          {
            code: "510321",
            name: "\u8363\u53BF"
          },
          {
            code: "510322",
            name: "\u5BCC\u987A\u53BF"
          }
        ]
      },
      {
        code: "5104",
        name: "\u6500\u679D\u82B1\u5E02",
        children: [
          {
            code: "510402",
            name: "\u4E1C\u533A"
          },
          {
            code: "510403",
            name: "\u897F\u533A"
          },
          {
            code: "510411",
            name: "\u4EC1\u548C\u533A"
          },
          {
            code: "510421",
            name: "\u7C73\u6613\u53BF"
          },
          {
            code: "510422",
            name: "\u76D0\u8FB9\u53BF"
          }
        ]
      },
      {
        code: "5105",
        name: "\u6CF8\u5DDE\u5E02",
        children: [
          {
            code: "510502",
            name: "\u6C5F\u9633\u533A"
          },
          {
            code: "510503",
            name: "\u7EB3\u6EAA\u533A"
          },
          {
            code: "510504",
            name: "\u9F99\u9A6C\u6F6D\u533A"
          },
          {
            code: "510521",
            name: "\u6CF8\u53BF"
          },
          {
            code: "510522",
            name: "\u5408\u6C5F\u53BF"
          },
          {
            code: "510524",
            name: "\u53D9\u6C38\u53BF"
          },
          {
            code: "510525",
            name: "\u53E4\u853A\u53BF"
          }
        ]
      },
      {
        code: "5106",
        name: "\u5FB7\u9633\u5E02",
        children: [
          {
            code: "510603",
            name: "\u65CC\u9633\u533A"
          },
          {
            code: "510604",
            name: "\u7F57\u6C5F\u533A"
          },
          {
            code: "510623",
            name: "\u4E2D\u6C5F\u53BF"
          },
          {
            code: "510681",
            name: "\u5E7F\u6C49\u5E02"
          },
          {
            code: "510682",
            name: "\u4EC0\u90A1\u5E02"
          },
          {
            code: "510683",
            name: "\u7EF5\u7AF9\u5E02"
          }
        ]
      },
      {
        code: "5107",
        name: "\u7EF5\u9633\u5E02",
        children: [
          {
            code: "510703",
            name: "\u6DAA\u57CE\u533A"
          },
          {
            code: "510704",
            name: "\u6E38\u4ED9\u533A"
          },
          {
            code: "510705",
            name: "\u5B89\u5DDE\u533A"
          },
          {
            code: "510722",
            name: "\u4E09\u53F0\u53BF"
          },
          {
            code: "510723",
            name: "\u76D0\u4EAD\u53BF"
          },
          {
            code: "510725",
            name: "\u6893\u6F7C\u53BF"
          },
          {
            code: "510726",
            name: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "510727",
            name: "\u5E73\u6B66\u53BF"
          },
          {
            code: "510781",
            name: "\u6C5F\u6CB9\u5E02"
          }
        ]
      },
      {
        code: "5108",
        name: "\u5E7F\u5143\u5E02",
        children: [
          {
            code: "510802",
            name: "\u5229\u5DDE\u533A"
          },
          {
            code: "510811",
            name: "\u662D\u5316\u533A"
          },
          {
            code: "510812",
            name: "\u671D\u5929\u533A"
          },
          {
            code: "510821",
            name: "\u65FA\u82CD\u53BF"
          },
          {
            code: "510822",
            name: "\u9752\u5DDD\u53BF"
          },
          {
            code: "510823",
            name: "\u5251\u9601\u53BF"
          },
          {
            code: "510824",
            name: "\u82CD\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "5109",
        name: "\u9042\u5B81\u5E02",
        children: [
          {
            code: "510903",
            name: "\u8239\u5C71\u533A"
          },
          {
            code: "510904",
            name: "\u5B89\u5C45\u533A"
          },
          {
            code: "510921",
            name: "\u84EC\u6EAA\u53BF"
          },
          {
            code: "510923",
            name: "\u5927\u82F1\u53BF"
          },
          {
            code: "510981",
            name: "\u5C04\u6D2A\u5E02"
          }
        ]
      },
      {
        code: "5110",
        name: "\u5185\u6C5F\u5E02",
        children: [
          {
            code: "511002",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511011",
            name: "\u4E1C\u5174\u533A"
          },
          {
            code: "511024",
            name: "\u5A01\u8FDC\u53BF"
          },
          {
            code: "511025",
            name: "\u8D44\u4E2D\u53BF"
          },
          {
            code: "511071",
            name: "\u5185\u6C5F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511083",
            name: "\u9686\u660C\u5E02"
          }
        ]
      },
      {
        code: "5111",
        name: "\u4E50\u5C71\u5E02",
        children: [
          {
            code: "511102",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511111",
            name: "\u6C99\u6E7E\u533A"
          },
          {
            code: "511112",
            name: "\u4E94\u901A\u6865\u533A"
          },
          {
            code: "511113",
            name: "\u91D1\u53E3\u6CB3\u533A"
          },
          {
            code: "511123",
            name: "\u728D\u4E3A\u53BF"
          },
          {
            code: "511124",
            name: "\u4E95\u7814\u53BF"
          },
          {
            code: "511126",
            name: "\u5939\u6C5F\u53BF"
          },
          {
            code: "511129",
            name: "\u6C90\u5DDD\u53BF"
          },
          {
            code: "511132",
            name: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511133",
            name: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511181",
            name: "\u5CE8\u7709\u5C71\u5E02"
          }
        ]
      },
      {
        code: "5113",
        name: "\u5357\u5145\u5E02",
        children: [
          {
            code: "511302",
            name: "\u987A\u5E86\u533A"
          },
          {
            code: "511303",
            name: "\u9AD8\u576A\u533A"
          },
          {
            code: "511304",
            name: "\u5609\u9675\u533A"
          },
          {
            code: "511321",
            name: "\u5357\u90E8\u53BF"
          },
          {
            code: "511322",
            name: "\u8425\u5C71\u53BF"
          },
          {
            code: "511323",
            name: "\u84EC\u5B89\u53BF"
          },
          {
            code: "511324",
            name: "\u4EEA\u9647\u53BF"
          },
          {
            code: "511325",
            name: "\u897F\u5145\u53BF"
          },
          {
            code: "511381",
            name: "\u9606\u4E2D\u5E02"
          }
        ]
      },
      {
        code: "5114",
        name: "\u7709\u5C71\u5E02",
        children: [
          {
            code: "511402",
            name: "\u4E1C\u5761\u533A"
          },
          {
            code: "511403",
            name: "\u5F6D\u5C71\u533A"
          },
          {
            code: "511421",
            name: "\u4EC1\u5BFF\u53BF"
          },
          {
            code: "511423",
            name: "\u6D2A\u96C5\u53BF"
          },
          {
            code: "511424",
            name: "\u4E39\u68F1\u53BF"
          },
          {
            code: "511425",
            name: "\u9752\u795E\u53BF"
          }
        ]
      },
      {
        code: "5115",
        name: "\u5B9C\u5BBE\u5E02",
        children: [
          {
            code: "511502",
            name: "\u7FE0\u5C4F\u533A"
          },
          {
            code: "511503",
            name: "\u5357\u6EAA\u533A"
          },
          {
            code: "511504",
            name: "\u53D9\u5DDE\u533A"
          },
          {
            code: "511523",
            name: "\u6C5F\u5B89\u53BF"
          },
          {
            code: "511524",
            name: "\u957F\u5B81\u53BF"
          },
          {
            code: "511525",
            name: "\u9AD8\u53BF"
          },
          {
            code: "511526",
            name: "\u73D9\u53BF"
          },
          {
            code: "511527",
            name: "\u7B60\u8FDE\u53BF"
          },
          {
            code: "511528",
            name: "\u5174\u6587\u53BF"
          },
          {
            code: "511529",
            name: "\u5C4F\u5C71\u53BF"
          }
        ]
      },
      {
        code: "5116",
        name: "\u5E7F\u5B89\u5E02",
        children: [
          {
            code: "511602",
            name: "\u5E7F\u5B89\u533A"
          },
          {
            code: "511603",
            name: "\u524D\u950B\u533A"
          },
          {
            code: "511621",
            name: "\u5CB3\u6C60\u53BF"
          },
          {
            code: "511622",
            name: "\u6B66\u80DC\u53BF"
          },
          {
            code: "511623",
            name: "\u90BB\u6C34\u53BF"
          },
          {
            code: "511681",
            name: "\u534E\u84E5\u5E02"
          }
        ]
      },
      {
        code: "5117",
        name: "\u8FBE\u5DDE\u5E02",
        children: [
          {
            code: "511702",
            name: "\u901A\u5DDD\u533A"
          },
          {
            code: "511703",
            name: "\u8FBE\u5DDD\u533A"
          },
          {
            code: "511722",
            name: "\u5BA3\u6C49\u53BF"
          },
          {
            code: "511723",
            name: "\u5F00\u6C5F\u53BF"
          },
          {
            code: "511724",
            name: "\u5927\u7AF9\u53BF"
          },
          {
            code: "511725",
            name: "\u6E20\u53BF"
          },
          {
            code: "511771",
            name: "\u8FBE\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511781",
            name: "\u4E07\u6E90\u5E02"
          }
        ]
      },
      {
        code: "5118",
        name: "\u96C5\u5B89\u5E02",
        children: [
          {
            code: "511802",
            name: "\u96E8\u57CE\u533A"
          },
          {
            code: "511803",
            name: "\u540D\u5C71\u533A"
          },
          {
            code: "511822",
            name: "\u8365\u7ECF\u53BF"
          },
          {
            code: "511823",
            name: "\u6C49\u6E90\u53BF"
          },
          {
            code: "511824",
            name: "\u77F3\u68C9\u53BF"
          },
          {
            code: "511825",
            name: "\u5929\u5168\u53BF"
          },
          {
            code: "511826",
            name: "\u82A6\u5C71\u53BF"
          },
          {
            code: "511827",
            name: "\u5B9D\u5174\u53BF"
          }
        ]
      },
      {
        code: "5119",
        name: "\u5DF4\u4E2D\u5E02",
        children: [
          {
            code: "511902",
            name: "\u5DF4\u5DDE\u533A"
          },
          {
            code: "511903",
            name: "\u6069\u9633\u533A"
          },
          {
            code: "511921",
            name: "\u901A\u6C5F\u53BF"
          },
          {
            code: "511922",
            name: "\u5357\u6C5F\u53BF"
          },
          {
            code: "511923",
            name: "\u5E73\u660C\u53BF"
          },
          {
            code: "511971",
            name: "\u5DF4\u4E2D\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "5120",
        name: "\u8D44\u9633\u5E02",
        children: [
          {
            code: "512002",
            name: "\u96C1\u6C5F\u533A"
          },
          {
            code: "512021",
            name: "\u5B89\u5CB3\u53BF"
          },
          {
            code: "512022",
            name: "\u4E50\u81F3\u53BF"
          }
        ]
      },
      {
        code: "5132",
        name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513201",
            name: "\u9A6C\u5C14\u5EB7\u5E02"
          },
          {
            code: "513221",
            name: "\u6C76\u5DDD\u53BF"
          },
          {
            code: "513222",
            name: "\u7406\u53BF"
          },
          {
            code: "513223",
            name: "\u8302\u53BF"
          },
          {
            code: "513224",
            name: "\u677E\u6F58\u53BF"
          },
          {
            code: "513225",
            name: "\u4E5D\u5BE8\u6C9F\u53BF"
          },
          {
            code: "513226",
            name: "\u91D1\u5DDD\u53BF"
          },
          {
            code: "513227",
            name: "\u5C0F\u91D1\u53BF"
          },
          {
            code: "513228",
            name: "\u9ED1\u6C34\u53BF"
          },
          {
            code: "513230",
            name: "\u58E4\u5858\u53BF"
          },
          {
            code: "513231",
            name: "\u963F\u575D\u53BF"
          },
          {
            code: "513232",
            name: "\u82E5\u5C14\u76D6\u53BF"
          },
          {
            code: "513233",
            name: "\u7EA2\u539F\u53BF"
          }
        ]
      },
      {
        code: "5133",
        name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513301",
            name: "\u5EB7\u5B9A\u5E02"
          },
          {
            code: "513322",
            name: "\u6CF8\u5B9A\u53BF"
          },
          {
            code: "513323",
            name: "\u4E39\u5DF4\u53BF"
          },
          {
            code: "513324",
            name: "\u4E5D\u9F99\u53BF"
          },
          {
            code: "513325",
            name: "\u96C5\u6C5F\u53BF"
          },
          {
            code: "513326",
            name: "\u9053\u5B5A\u53BF"
          },
          {
            code: "513327",
            name: "\u7089\u970D\u53BF"
          },
          {
            code: "513328",
            name: "\u7518\u5B5C\u53BF"
          },
          {
            code: "513329",
            name: "\u65B0\u9F99\u53BF"
          },
          {
            code: "513330",
            name: "\u5FB7\u683C\u53BF"
          },
          {
            code: "513331",
            name: "\u767D\u7389\u53BF"
          },
          {
            code: "513332",
            name: "\u77F3\u6E20\u53BF"
          },
          {
            code: "513333",
            name: "\u8272\u8FBE\u53BF"
          },
          {
            code: "513334",
            name: "\u7406\u5858\u53BF"
          },
          {
            code: "513335",
            name: "\u5DF4\u5858\u53BF"
          },
          {
            code: "513336",
            name: "\u4E61\u57CE\u53BF"
          },
          {
            code: "513337",
            name: "\u7A3B\u57CE\u53BF"
          },
          {
            code: "513338",
            name: "\u5F97\u8363\u53BF"
          }
        ]
      },
      {
        code: "5134",
        name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513401",
            name: "\u897F\u660C\u5E02"
          },
          {
            code: "513422",
            name: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "513423",
            name: "\u76D0\u6E90\u53BF"
          },
          {
            code: "513424",
            name: "\u5FB7\u660C\u53BF"
          },
          {
            code: "513425",
            name: "\u4F1A\u7406\u53BF"
          },
          {
            code: "513426",
            name: "\u4F1A\u4E1C\u53BF"
          },
          {
            code: "513427",
            name: "\u5B81\u5357\u53BF"
          },
          {
            code: "513428",
            name: "\u666E\u683C\u53BF"
          },
          {
            code: "513429",
            name: "\u5E03\u62D6\u53BF"
          },
          {
            code: "513430",
            name: "\u91D1\u9633\u53BF"
          },
          {
            code: "513431",
            name: "\u662D\u89C9\u53BF"
          },
          {
            code: "513432",
            name: "\u559C\u5FB7\u53BF"
          },
          {
            code: "513433",
            name: "\u5195\u5B81\u53BF"
          },
          {
            code: "513434",
            name: "\u8D8A\u897F\u53BF"
          },
          {
            code: "513435",
            name: "\u7518\u6D1B\u53BF"
          },
          {
            code: "513436",
            name: "\u7F8E\u59D1\u53BF"
          },
          {
            code: "513437",
            name: "\u96F7\u6CE2\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "\u8D35\u5DDE\u7701",
    children: [
      {
        code: "5201",
        name: "\u8D35\u9633\u5E02",
        children: [
          {
            code: "520102",
            name: "\u5357\u660E\u533A"
          },
          {
            code: "520103",
            name: "\u4E91\u5CA9\u533A"
          },
          {
            code: "520111",
            name: "\u82B1\u6EAA\u533A"
          },
          {
            code: "520112",
            name: "\u4E4C\u5F53\u533A"
          },
          {
            code: "520113",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "520115",
            name: "\u89C2\u5C71\u6E56\u533A"
          },
          {
            code: "520121",
            name: "\u5F00\u9633\u53BF"
          },
          {
            code: "520122",
            name: "\u606F\u70FD\u53BF"
          },
          {
            code: "520123",
            name: "\u4FEE\u6587\u53BF"
          },
          {
            code: "520181",
            name: "\u6E05\u9547\u5E02"
          }
        ]
      },
      {
        code: "5202",
        name: "\u516D\u76D8\u6C34\u5E02",
        children: [
          {
            code: "520201",
            name: "\u949F\u5C71\u533A"
          },
          {
            code: "520203",
            name: "\u516D\u679D\u7279\u533A"
          },
          {
            code: "520221",
            name: "\u6C34\u57CE\u53BF"
          },
          {
            code: "520281",
            name: "\u76D8\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "5203",
        name: "\u9075\u4E49\u5E02",
        children: [
          {
            code: "520302",
            name: "\u7EA2\u82B1\u5C97\u533A"
          },
          {
            code: "520303",
            name: "\u6C47\u5DDD\u533A"
          },
          {
            code: "520304",
            name: "\u64AD\u5DDE\u533A"
          },
          {
            code: "520322",
            name: "\u6850\u6893\u53BF"
          },
          {
            code: "520323",
            name: "\u7EE5\u9633\u53BF"
          },
          {
            code: "520324",
            name: "\u6B63\u5B89\u53BF"
          },
          {
            code: "520325",
            name: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520326",
            name: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520327",
            name: "\u51E4\u5188\u53BF"
          },
          {
            code: "520328",
            name: "\u6E44\u6F6D\u53BF"
          },
          {
            code: "520329",
            name: "\u4F59\u5E86\u53BF"
          },
          {
            code: "520330",
            name: "\u4E60\u6C34\u53BF"
          },
          {
            code: "520381",
            name: "\u8D64\u6C34\u5E02"
          },
          {
            code: "520382",
            name: "\u4EC1\u6000\u5E02"
          }
        ]
      },
      {
        code: "5204",
        name: "\u5B89\u987A\u5E02",
        children: [
          {
            code: "520402",
            name: "\u897F\u79C0\u533A"
          },
          {
            code: "520403",
            name: "\u5E73\u575D\u533A"
          },
          {
            code: "520422",
            name: "\u666E\u5B9A\u53BF"
          },
          {
            code: "520423",
            name: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520424",
            name: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520425",
            name: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5205",
        name: "\u6BD5\u8282\u5E02",
        children: [
          {
            code: "520502",
            name: "\u4E03\u661F\u5173\u533A"
          },
          {
            code: "520521",
            name: "\u5927\u65B9\u53BF"
          },
          {
            code: "520522",
            name: "\u9ED4\u897F\u53BF"
          },
          {
            code: "520523",
            name: "\u91D1\u6C99\u53BF"
          },
          {
            code: "520524",
            name: "\u7EC7\u91D1\u53BF"
          },
          {
            code: "520525",
            name: "\u7EB3\u96CD\u53BF"
          },
          {
            code: "520526",
            name: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520527",
            name: "\u8D6B\u7AE0\u53BF"
          }
        ]
      },
      {
        code: "5206",
        name: "\u94DC\u4EC1\u5E02",
        children: [
          {
            code: "520602",
            name: "\u78A7\u6C5F\u533A"
          },
          {
            code: "520603",
            name: "\u4E07\u5C71\u533A"
          },
          {
            code: "520621",
            name: "\u6C5F\u53E3\u53BF"
          },
          {
            code: "520622",
            name: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520623",
            name: "\u77F3\u9621\u53BF"
          },
          {
            code: "520624",
            name: "\u601D\u5357\u53BF"
          },
          {
            code: "520625",
            name: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520626",
            name: "\u5FB7\u6C5F\u53BF"
          },
          {
            code: "520627",
            name: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520628",
            name: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5223",
        name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522301",
            name: "\u5174\u4E49\u5E02"
          },
          {
            code: "522302",
            name: "\u5174\u4EC1\u5E02"
          },
          {
            code: "522323",
            name: "\u666E\u5B89\u53BF"
          },
          {
            code: "522324",
            name: "\u6674\u9686\u53BF"
          },
          {
            code: "522325",
            name: "\u8D1E\u4E30\u53BF"
          },
          {
            code: "522326",
            name: "\u671B\u8C1F\u53BF"
          },
          {
            code: "522327",
            name: "\u518C\u4EA8\u53BF"
          },
          {
            code: "522328",
            name: "\u5B89\u9F99\u53BF"
          }
        ]
      },
      {
        code: "5226",
        name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522601",
            name: "\u51EF\u91CC\u5E02"
          },
          {
            code: "522622",
            name: "\u9EC4\u5E73\u53BF"
          },
          {
            code: "522623",
            name: "\u65BD\u79C9\u53BF"
          },
          {
            code: "522624",
            name: "\u4E09\u7A57\u53BF"
          },
          {
            code: "522625",
            name: "\u9547\u8FDC\u53BF"
          },
          {
            code: "522626",
            name: "\u5C91\u5DE9\u53BF"
          },
          {
            code: "522627",
            name: "\u5929\u67F1\u53BF"
          },
          {
            code: "522628",
            name: "\u9526\u5C4F\u53BF"
          },
          {
            code: "522629",
            name: "\u5251\u6CB3\u53BF"
          },
          {
            code: "522630",
            name: "\u53F0\u6C5F\u53BF"
          },
          {
            code: "522631",
            name: "\u9ECE\u5E73\u53BF"
          },
          {
            code: "522632",
            name: "\u6995\u6C5F\u53BF"
          },
          {
            code: "522633",
            name: "\u4ECE\u6C5F\u53BF"
          },
          {
            code: "522634",
            name: "\u96F7\u5C71\u53BF"
          },
          {
            code: "522635",
            name: "\u9EBB\u6C5F\u53BF"
          },
          {
            code: "522636",
            name: "\u4E39\u5BE8\u53BF"
          }
        ]
      },
      {
        code: "5227",
        name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522701",
            name: "\u90FD\u5300\u5E02"
          },
          {
            code: "522702",
            name: "\u798F\u6CC9\u5E02"
          },
          {
            code: "522722",
            name: "\u8354\u6CE2\u53BF"
          },
          {
            code: "522723",
            name: "\u8D35\u5B9A\u53BF"
          },
          {
            code: "522725",
            name: "\u74EE\u5B89\u53BF"
          },
          {
            code: "522726",
            name: "\u72EC\u5C71\u53BF"
          },
          {
            code: "522727",
            name: "\u5E73\u5858\u53BF"
          },
          {
            code: "522728",
            name: "\u7F57\u7538\u53BF"
          },
          {
            code: "522729",
            name: "\u957F\u987A\u53BF"
          },
          {
            code: "522730",
            name: "\u9F99\u91CC\u53BF"
          },
          {
            code: "522731",
            name: "\u60E0\u6C34\u53BF"
          },
          {
            code: "522732",
            name: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "\u4E91\u5357\u7701",
    children: [
      {
        code: "5301",
        name: "\u6606\u660E\u5E02",
        children: [
          {
            code: "530102",
            name: "\u4E94\u534E\u533A"
          },
          {
            code: "530103",
            name: "\u76D8\u9F99\u533A"
          },
          {
            code: "530111",
            name: "\u5B98\u6E21\u533A"
          },
          {
            code: "530112",
            name: "\u897F\u5C71\u533A"
          },
          {
            code: "530113",
            name: "\u4E1C\u5DDD\u533A"
          },
          {
            code: "530114",
            name: "\u5448\u8D21\u533A"
          },
          {
            code: "530115",
            name: "\u664B\u5B81\u533A"
          },
          {
            code: "530124",
            name: "\u5BCC\u6C11\u53BF"
          },
          {
            code: "530125",
            name: "\u5B9C\u826F\u53BF"
          },
          {
            code: "530126",
            name: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530127",
            name: "\u5D69\u660E\u53BF"
          },
          {
            code: "530128",
            name: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530129",
            name: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530181",
            name: "\u5B89\u5B81\u5E02"
          }
        ]
      },
      {
        code: "5303",
        name: "\u66F2\u9756\u5E02",
        children: [
          {
            code: "530302",
            name: "\u9E92\u9E9F\u533A"
          },
          {
            code: "530303",
            name: "\u6CBE\u76CA\u533A"
          },
          {
            code: "530304",
            name: "\u9A6C\u9F99\u533A"
          },
          {
            code: "530322",
            name: "\u9646\u826F\u53BF"
          },
          {
            code: "530323",
            name: "\u5E08\u5B97\u53BF"
          },
          {
            code: "530324",
            name: "\u7F57\u5E73\u53BF"
          },
          {
            code: "530325",
            name: "\u5BCC\u6E90\u53BF"
          },
          {
            code: "530326",
            name: "\u4F1A\u6CFD\u53BF"
          },
          {
            code: "530381",
            name: "\u5BA3\u5A01\u5E02"
          }
        ]
      },
      {
        code: "5304",
        name: "\u7389\u6EAA\u5E02",
        children: [
          {
            code: "530402",
            name: "\u7EA2\u5854\u533A"
          },
          {
            code: "530403",
            name: "\u6C5F\u5DDD\u533A"
          },
          {
            code: "530423",
            name: "\u901A\u6D77\u53BF"
          },
          {
            code: "530424",
            name: "\u534E\u5B81\u53BF"
          },
          {
            code: "530425",
            name: "\u6613\u95E8\u53BF"
          },
          {
            code: "530426",
            name: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530427",
            name: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530428",
            name: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530481",
            name: "\u6F84\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "5305",
        name: "\u4FDD\u5C71\u5E02",
        children: [
          {
            code: "530502",
            name: "\u9686\u9633\u533A"
          },
          {
            code: "530521",
            name: "\u65BD\u7538\u53BF"
          },
          {
            code: "530523",
            name: "\u9F99\u9675\u53BF"
          },
          {
            code: "530524",
            name: "\u660C\u5B81\u53BF"
          },
          {
            code: "530581",
            name: "\u817E\u51B2\u5E02"
          }
        ]
      },
      {
        code: "5306",
        name: "\u662D\u901A\u5E02",
        children: [
          {
            code: "530602",
            name: "\u662D\u9633\u533A"
          },
          {
            code: "530621",
            name: "\u9C81\u7538\u53BF"
          },
          {
            code: "530622",
            name: "\u5DE7\u5BB6\u53BF"
          },
          {
            code: "530623",
            name: "\u76D0\u6D25\u53BF"
          },
          {
            code: "530624",
            name: "\u5927\u5173\u53BF"
          },
          {
            code: "530625",
            name: "\u6C38\u5584\u53BF"
          },
          {
            code: "530626",
            name: "\u7EE5\u6C5F\u53BF"
          },
          {
            code: "530627",
            name: "\u9547\u96C4\u53BF"
          },
          {
            code: "530628",
            name: "\u5F5D\u826F\u53BF"
          },
          {
            code: "530629",
            name: "\u5A01\u4FE1\u53BF"
          },
          {
            code: "530681",
            name: "\u6C34\u5BCC\u5E02"
          }
        ]
      },
      {
        code: "5307",
        name: "\u4E3D\u6C5F\u5E02",
        children: [
          {
            code: "530702",
            name: "\u53E4\u57CE\u533A"
          },
          {
            code: "530721",
            name: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530722",
            name: "\u6C38\u80DC\u53BF"
          },
          {
            code: "530723",
            name: "\u534E\u576A\u53BF"
          },
          {
            code: "530724",
            name: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5308",
        name: "\u666E\u6D31\u5E02",
        children: [
          {
            code: "530802",
            name: "\u601D\u8305\u533A"
          },
          {
            code: "530821",
            name: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530822",
            name: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530823",
            name: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530824",
            name: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530825",
            name: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530826",
            name: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530827",
            name: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530828",
            name: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530829",
            name: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5309",
        name: "\u4E34\u6CA7\u5E02",
        children: [
          {
            code: "530902",
            name: "\u4E34\u7FD4\u533A"
          },
          {
            code: "530921",
            name: "\u51E4\u5E86\u53BF"
          },
          {
            code: "530922",
            name: "\u4E91\u53BF"
          },
          {
            code: "530923",
            name: "\u6C38\u5FB7\u53BF"
          },
          {
            code: "530924",
            name: "\u9547\u5EB7\u53BF"
          },
          {
            code: "530925",
            name: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530926",
            name: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530927",
            name: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5323",
        name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532301",
            name: "\u695A\u96C4\u5E02"
          },
          {
            code: "532322",
            name: "\u53CC\u67CF\u53BF"
          },
          {
            code: "532323",
            name: "\u725F\u5B9A\u53BF"
          },
          {
            code: "532324",
            name: "\u5357\u534E\u53BF"
          },
          {
            code: "532325",
            name: "\u59DA\u5B89\u53BF"
          },
          {
            code: "532326",
            name: "\u5927\u59DA\u53BF"
          },
          {
            code: "532327",
            name: "\u6C38\u4EC1\u53BF"
          },
          {
            code: "532328",
            name: "\u5143\u8C0B\u53BF"
          },
          {
            code: "532329",
            name: "\u6B66\u5B9A\u53BF"
          },
          {
            code: "532331",
            name: "\u7984\u4E30\u53BF"
          }
        ]
      },
      {
        code: "5325",
        name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532501",
            name: "\u4E2A\u65E7\u5E02"
          },
          {
            code: "532502",
            name: "\u5F00\u8FDC\u5E02"
          },
          {
            code: "532503",
            name: "\u8499\u81EA\u5E02"
          },
          {
            code: "532504",
            name: "\u5F25\u52D2\u5E02"
          },
          {
            code: "532523",
            name: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532524",
            name: "\u5EFA\u6C34\u53BF"
          },
          {
            code: "532525",
            name: "\u77F3\u5C4F\u53BF"
          },
          {
            code: "532527",
            name: "\u6CF8\u897F\u53BF"
          },
          {
            code: "532528",
            name: "\u5143\u9633\u53BF"
          },
          {
            code: "532529",
            name: "\u7EA2\u6CB3\u53BF"
          },
          {
            code: "532530",
            name: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532531",
            name: "\u7EFF\u6625\u53BF"
          },
          {
            code: "532532",
            name: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5326",
        name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532601",
            name: "\u6587\u5C71\u5E02"
          },
          {
            code: "532622",
            name: "\u781A\u5C71\u53BF"
          },
          {
            code: "532623",
            name: "\u897F\u7574\u53BF"
          },
          {
            code: "532624",
            name: "\u9EBB\u6817\u5761\u53BF"
          },
          {
            code: "532625",
            name: "\u9A6C\u5173\u53BF"
          },
          {
            code: "532626",
            name: "\u4E18\u5317\u53BF"
          },
          {
            code: "532627",
            name: "\u5E7F\u5357\u53BF"
          },
          {
            code: "532628",
            name: "\u5BCC\u5B81\u53BF"
          }
        ]
      },
      {
        code: "5328",
        name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532801",
            name: "\u666F\u6D2A\u5E02"
          },
          {
            code: "532822",
            name: "\u52D0\u6D77\u53BF"
          },
          {
            code: "532823",
            name: "\u52D0\u814A\u53BF"
          }
        ]
      },
      {
        code: "5329",
        name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532901",
            name: "\u5927\u7406\u5E02"
          },
          {
            code: "532922",
            name: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532923",
            name: "\u7965\u4E91\u53BF"
          },
          {
            code: "532924",
            name: "\u5BBE\u5DDD\u53BF"
          },
          {
            code: "532925",
            name: "\u5F25\u6E21\u53BF"
          },
          {
            code: "532926",
            name: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532927",
            name: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532928",
            name: "\u6C38\u5E73\u53BF"
          },
          {
            code: "532929",
            name: "\u4E91\u9F99\u53BF"
          },
          {
            code: "532930",
            name: "\u6D31\u6E90\u53BF"
          },
          {
            code: "532931",
            name: "\u5251\u5DDD\u53BF"
          },
          {
            code: "532932",
            name: "\u9E64\u5E86\u53BF"
          }
        ]
      },
      {
        code: "5331",
        name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533102",
            name: "\u745E\u4E3D\u5E02"
          },
          {
            code: "533103",
            name: "\u8292\u5E02"
          },
          {
            code: "533122",
            name: "\u6881\u6CB3\u53BF"
          },
          {
            code: "533123",
            name: "\u76C8\u6C5F\u53BF"
          },
          {
            code: "533124",
            name: "\u9647\u5DDD\u53BF"
          }
        ]
      },
      {
        code: "5333",
        name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533301",
            name: "\u6CF8\u6C34\u5E02"
          },
          {
            code: "533323",
            name: "\u798F\u8D21\u53BF"
          },
          {
            code: "533324",
            name: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "533325",
            name: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5334",
        name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533401",
            name: "\u9999\u683C\u91CC\u62C9\u5E02"
          },
          {
            code: "533422",
            name: "\u5FB7\u94A6\u53BF"
          },
          {
            code: "533423",
            name: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "\u897F\u85CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "5401",
        name: "\u62C9\u8428\u5E02",
        children: [
          {
            code: "540102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "540103",
            name: "\u5806\u9F99\u5FB7\u5E86\u533A"
          },
          {
            code: "540104",
            name: "\u8FBE\u5B5C\u533A"
          },
          {
            code: "540121",
            name: "\u6797\u5468\u53BF"
          },
          {
            code: "540122",
            name: "\u5F53\u96C4\u53BF"
          },
          {
            code: "540123",
            name: "\u5C3C\u6728\u53BF"
          },
          {
            code: "540124",
            name: "\u66F2\u6C34\u53BF"
          },
          {
            code: "540127",
            name: "\u58A8\u7AF9\u5DE5\u5361\u53BF"
          },
          {
            code: "540171",
            name: "\u683C\u5C14\u6728\u85CF\u9752\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "540172",
            name: "\u62C9\u8428\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "540173",
            name: "\u897F\u85CF\u6587\u5316\u65C5\u6E38\u521B\u610F\u56ED\u533A"
          },
          {
            code: "540174",
            name: "\u8FBE\u5B5C\u5DE5\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "5402",
        name: "\u65E5\u5580\u5219\u5E02",
        children: [
          {
            code: "540202",
            name: "\u6851\u73E0\u5B5C\u533A"
          },
          {
            code: "540221",
            name: "\u5357\u6728\u6797\u53BF"
          },
          {
            code: "540222",
            name: "\u6C5F\u5B5C\u53BF"
          },
          {
            code: "540223",
            name: "\u5B9A\u65E5\u53BF"
          },
          {
            code: "540224",
            name: "\u8428\u8FE6\u53BF"
          },
          {
            code: "540225",
            name: "\u62C9\u5B5C\u53BF"
          },
          {
            code: "540226",
            name: "\u6602\u4EC1\u53BF"
          },
          {
            code: "540227",
            name: "\u8C22\u901A\u95E8\u53BF"
          },
          {
            code: "540228",
            name: "\u767D\u6717\u53BF"
          },
          {
            code: "540229",
            name: "\u4EC1\u5E03\u53BF"
          },
          {
            code: "540230",
            name: "\u5EB7\u9A6C\u53BF"
          },
          {
            code: "540231",
            name: "\u5B9A\u7ED3\u53BF"
          },
          {
            code: "540232",
            name: "\u4EF2\u5DF4\u53BF"
          },
          {
            code: "540233",
            name: "\u4E9A\u4E1C\u53BF"
          },
          {
            code: "540234",
            name: "\u5409\u9686\u53BF"
          },
          {
            code: "540235",
            name: "\u8042\u62C9\u6728\u53BF"
          },
          {
            code: "540236",
            name: "\u8428\u560E\u53BF"
          },
          {
            code: "540237",
            name: "\u5C97\u5DF4\u53BF"
          }
        ]
      },
      {
        code: "5403",
        name: "\u660C\u90FD\u5E02",
        children: [
          {
            code: "540302",
            name: "\u5361\u82E5\u533A"
          },
          {
            code: "540321",
            name: "\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540322",
            name: "\u8D21\u89C9\u53BF"
          },
          {
            code: "540323",
            name: "\u7C7B\u4E4C\u9F50\u53BF"
          },
          {
            code: "540324",
            name: "\u4E01\u9752\u53BF"
          },
          {
            code: "540325",
            name: "\u5BDF\u96C5\u53BF"
          },
          {
            code: "540326",
            name: "\u516B\u5BBF\u53BF"
          },
          {
            code: "540327",
            name: "\u5DE6\u8D21\u53BF"
          },
          {
            code: "540328",
            name: "\u8292\u5EB7\u53BF"
          },
          {
            code: "540329",
            name: "\u6D1B\u9686\u53BF"
          },
          {
            code: "540330",
            name: "\u8FB9\u575D\u53BF"
          }
        ]
      },
      {
        code: "5404",
        name: "\u6797\u829D\u5E02",
        children: [
          {
            code: "540402",
            name: "\u5DF4\u5B9C\u533A"
          },
          {
            code: "540421",
            name: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540422",
            name: "\u7C73\u6797\u53BF"
          },
          {
            code: "540423",
            name: "\u58A8\u8131\u53BF"
          },
          {
            code: "540424",
            name: "\u6CE2\u5BC6\u53BF"
          },
          {
            code: "540425",
            name: "\u5BDF\u9685\u53BF"
          },
          {
            code: "540426",
            name: "\u6717\u53BF"
          }
        ]
      },
      {
        code: "5405",
        name: "\u5C71\u5357\u5E02",
        children: [
          {
            code: "540502",
            name: "\u4E43\u4E1C\u533A"
          },
          {
            code: "540521",
            name: "\u624E\u56CA\u53BF"
          },
          {
            code: "540522",
            name: "\u8D21\u560E\u53BF"
          },
          {
            code: "540523",
            name: "\u6851\u65E5\u53BF"
          },
          {
            code: "540524",
            name: "\u743C\u7ED3\u53BF"
          },
          {
            code: "540525",
            name: "\u66F2\u677E\u53BF"
          },
          {
            code: "540526",
            name: "\u63AA\u7F8E\u53BF"
          },
          {
            code: "540527",
            name: "\u6D1B\u624E\u53BF"
          },
          {
            code: "540528",
            name: "\u52A0\u67E5\u53BF"
          },
          {
            code: "540529",
            name: "\u9686\u5B50\u53BF"
          },
          {
            code: "540530",
            name: "\u9519\u90A3\u53BF"
          },
          {
            code: "540531",
            name: "\u6D6A\u5361\u5B50\u53BF"
          }
        ]
      },
      {
        code: "5406",
        name: "\u90A3\u66F2\u5E02",
        children: [
          {
            code: "540602",
            name: "\u8272\u5C3C\u533A"
          },
          {
            code: "540621",
            name: "\u5609\u9ECE\u53BF"
          },
          {
            code: "540622",
            name: "\u6BD4\u5982\u53BF"
          },
          {
            code: "540623",
            name: "\u8042\u8363\u53BF"
          },
          {
            code: "540624",
            name: "\u5B89\u591A\u53BF"
          },
          {
            code: "540625",
            name: "\u7533\u624E\u53BF"
          },
          {
            code: "540626",
            name: "\u7D22\u53BF"
          },
          {
            code: "540627",
            name: "\u73ED\u6208\u53BF"
          },
          {
            code: "540628",
            name: "\u5DF4\u9752\u53BF"
          },
          {
            code: "540629",
            name: "\u5C3C\u739B\u53BF"
          },
          {
            code: "540630",
            name: "\u53CC\u6E56\u53BF"
          }
        ]
      },
      {
        code: "5425",
        name: "\u963F\u91CC\u5730\u533A",
        children: [
          {
            code: "542521",
            name: "\u666E\u5170\u53BF"
          },
          {
            code: "542522",
            name: "\u672D\u8FBE\u53BF"
          },
          {
            code: "542523",
            name: "\u5676\u5C14\u53BF"
          },
          {
            code: "542524",
            name: "\u65E5\u571F\u53BF"
          },
          {
            code: "542525",
            name: "\u9769\u5409\u53BF"
          },
          {
            code: "542526",
            name: "\u6539\u5219\u53BF"
          },
          {
            code: "542527",
            name: "\u63AA\u52E4\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "\u9655\u897F\u7701",
    children: [
      {
        code: "6101",
        name: "\u897F\u5B89\u5E02",
        children: [
          {
            code: "610102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "610103",
            name: "\u7891\u6797\u533A"
          },
          {
            code: "610104",
            name: "\u83B2\u6E56\u533A"
          },
          {
            code: "610111",
            name: "\u705E\u6865\u533A"
          },
          {
            code: "610112",
            name: "\u672A\u592E\u533A"
          },
          {
            code: "610113",
            name: "\u96C1\u5854\u533A"
          },
          {
            code: "610114",
            name: "\u960E\u826F\u533A"
          },
          {
            code: "610115",
            name: "\u4E34\u6F7C\u533A"
          },
          {
            code: "610116",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "610117",
            name: "\u9AD8\u9675\u533A"
          },
          {
            code: "610118",
            name: "\u9120\u9091\u533A"
          },
          {
            code: "610122",
            name: "\u84DD\u7530\u53BF"
          },
          {
            code: "610124",
            name: "\u5468\u81F3\u53BF"
          }
        ]
      },
      {
        code: "6102",
        name: "\u94DC\u5DDD\u5E02",
        children: [
          {
            code: "610202",
            name: "\u738B\u76CA\u533A"
          },
          {
            code: "610203",
            name: "\u5370\u53F0\u533A"
          },
          {
            code: "610204",
            name: "\u8000\u5DDE\u533A"
          },
          {
            code: "610222",
            name: "\u5B9C\u541B\u53BF"
          }
        ]
      },
      {
        code: "6103",
        name: "\u5B9D\u9E21\u5E02",
        children: [
          {
            code: "610302",
            name: "\u6E2D\u6EE8\u533A"
          },
          {
            code: "610303",
            name: "\u91D1\u53F0\u533A"
          },
          {
            code: "610304",
            name: "\u9648\u4ED3\u533A"
          },
          {
            code: "610322",
            name: "\u51E4\u7FD4\u53BF"
          },
          {
            code: "610323",
            name: "\u5C90\u5C71\u53BF"
          },
          {
            code: "610324",
            name: "\u6276\u98CE\u53BF"
          },
          {
            code: "610326",
            name: "\u7709\u53BF"
          },
          {
            code: "610327",
            name: "\u9647\u53BF"
          },
          {
            code: "610328",
            name: "\u5343\u9633\u53BF"
          },
          {
            code: "610329",
            name: "\u9E9F\u6E38\u53BF"
          },
          {
            code: "610330",
            name: "\u51E4\u53BF"
          },
          {
            code: "610331",
            name: "\u592A\u767D\u53BF"
          }
        ]
      },
      {
        code: "6104",
        name: "\u54B8\u9633\u5E02",
        children: [
          {
            code: "610402",
            name: "\u79E6\u90FD\u533A"
          },
          {
            code: "610403",
            name: "\u6768\u9675\u533A"
          },
          {
            code: "610404",
            name: "\u6E2D\u57CE\u533A"
          },
          {
            code: "610422",
            name: "\u4E09\u539F\u53BF"
          },
          {
            code: "610423",
            name: "\u6CFE\u9633\u53BF"
          },
          {
            code: "610424",
            name: "\u4E7E\u53BF"
          },
          {
            code: "610425",
            name: "\u793C\u6CC9\u53BF"
          },
          {
            code: "610426",
            name: "\u6C38\u5BFF\u53BF"
          },
          {
            code: "610428",
            name: "\u957F\u6B66\u53BF"
          },
          {
            code: "610429",
            name: "\u65EC\u9091\u53BF"
          },
          {
            code: "610430",
            name: "\u6DF3\u5316\u53BF"
          },
          {
            code: "610431",
            name: "\u6B66\u529F\u53BF"
          },
          {
            code: "610481",
            name: "\u5174\u5E73\u5E02"
          },
          {
            code: "610482",
            name: "\u5F6C\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "6105",
        name: "\u6E2D\u5357\u5E02",
        children: [
          {
            code: "610502",
            name: "\u4E34\u6E2D\u533A"
          },
          {
            code: "610503",
            name: "\u534E\u5DDE\u533A"
          },
          {
            code: "610522",
            name: "\u6F7C\u5173\u53BF"
          },
          {
            code: "610523",
            name: "\u5927\u8354\u53BF"
          },
          {
            code: "610524",
            name: "\u5408\u9633\u53BF"
          },
          {
            code: "610525",
            name: "\u6F84\u57CE\u53BF"
          },
          {
            code: "610526",
            name: "\u84B2\u57CE\u53BF"
          },
          {
            code: "610527",
            name: "\u767D\u6C34\u53BF"
          },
          {
            code: "610528",
            name: "\u5BCC\u5E73\u53BF"
          },
          {
            code: "610581",
            name: "\u97E9\u57CE\u5E02"
          },
          {
            code: "610582",
            name: "\u534E\u9634\u5E02"
          }
        ]
      },
      {
        code: "6106",
        name: "\u5EF6\u5B89\u5E02",
        children: [
          {
            code: "610602",
            name: "\u5B9D\u5854\u533A"
          },
          {
            code: "610603",
            name: "\u5B89\u585E\u533A"
          },
          {
            code: "610621",
            name: "\u5EF6\u957F\u53BF"
          },
          {
            code: "610622",
            name: "\u5EF6\u5DDD\u53BF"
          },
          {
            code: "610625",
            name: "\u5FD7\u4E39\u53BF"
          },
          {
            code: "610626",
            name: "\u5434\u8D77\u53BF"
          },
          {
            code: "610627",
            name: "\u7518\u6CC9\u53BF"
          },
          {
            code: "610628",
            name: "\u5BCC\u53BF"
          },
          {
            code: "610629",
            name: "\u6D1B\u5DDD\u53BF"
          },
          {
            code: "610630",
            name: "\u5B9C\u5DDD\u53BF"
          },
          {
            code: "610631",
            name: "\u9EC4\u9F99\u53BF"
          },
          {
            code: "610632",
            name: "\u9EC4\u9675\u53BF"
          },
          {
            code: "610681",
            name: "\u5B50\u957F\u5E02"
          }
        ]
      },
      {
        code: "6107",
        name: "\u6C49\u4E2D\u5E02",
        children: [
          {
            code: "610702",
            name: "\u6C49\u53F0\u533A"
          },
          {
            code: "610703",
            name: "\u5357\u90D1\u533A"
          },
          {
            code: "610722",
            name: "\u57CE\u56FA\u53BF"
          },
          {
            code: "610723",
            name: "\u6D0B\u53BF"
          },
          {
            code: "610724",
            name: "\u897F\u4E61\u53BF"
          },
          {
            code: "610725",
            name: "\u52C9\u53BF"
          },
          {
            code: "610726",
            name: "\u5B81\u5F3A\u53BF"
          },
          {
            code: "610727",
            name: "\u7565\u9633\u53BF"
          },
          {
            code: "610728",
            name: "\u9547\u5DF4\u53BF"
          },
          {
            code: "610729",
            name: "\u7559\u575D\u53BF"
          },
          {
            code: "610730",
            name: "\u4F5B\u576A\u53BF"
          }
        ]
      },
      {
        code: "6108",
        name: "\u6986\u6797\u5E02",
        children: [
          {
            code: "610802",
            name: "\u6986\u9633\u533A"
          },
          {
            code: "610803",
            name: "\u6A2A\u5C71\u533A"
          },
          {
            code: "610822",
            name: "\u5E9C\u8C37\u53BF"
          },
          {
            code: "610824",
            name: "\u9756\u8FB9\u53BF"
          },
          {
            code: "610825",
            name: "\u5B9A\u8FB9\u53BF"
          },
          {
            code: "610826",
            name: "\u7EE5\u5FB7\u53BF"
          },
          {
            code: "610827",
            name: "\u7C73\u8102\u53BF"
          },
          {
            code: "610828",
            name: "\u4F73\u53BF"
          },
          {
            code: "610829",
            name: "\u5434\u5821\u53BF"
          },
          {
            code: "610830",
            name: "\u6E05\u6DA7\u53BF"
          },
          {
            code: "610831",
            name: "\u5B50\u6D32\u53BF"
          },
          {
            code: "610881",
            name: "\u795E\u6728\u5E02"
          }
        ]
      },
      {
        code: "6109",
        name: "\u5B89\u5EB7\u5E02",
        children: [
          {
            code: "610902",
            name: "\u6C49\u6EE8\u533A"
          },
          {
            code: "610921",
            name: "\u6C49\u9634\u53BF"
          },
          {
            code: "610922",
            name: "\u77F3\u6CC9\u53BF"
          },
          {
            code: "610923",
            name: "\u5B81\u9655\u53BF"
          },
          {
            code: "610924",
            name: "\u7D2B\u9633\u53BF"
          },
          {
            code: "610925",
            name: "\u5C9A\u768B\u53BF"
          },
          {
            code: "610926",
            name: "\u5E73\u5229\u53BF"
          },
          {
            code: "610927",
            name: "\u9547\u576A\u53BF"
          },
          {
            code: "610928",
            name: "\u65EC\u9633\u53BF"
          },
          {
            code: "610929",
            name: "\u767D\u6CB3\u53BF"
          }
        ]
      },
      {
        code: "6110",
        name: "\u5546\u6D1B\u5E02",
        children: [
          {
            code: "611002",
            name: "\u5546\u5DDE\u533A"
          },
          {
            code: "611021",
            name: "\u6D1B\u5357\u53BF"
          },
          {
            code: "611022",
            name: "\u4E39\u51E4\u53BF"
          },
          {
            code: "611023",
            name: "\u5546\u5357\u53BF"
          },
          {
            code: "611024",
            name: "\u5C71\u9633\u53BF"
          },
          {
            code: "611025",
            name: "\u9547\u5B89\u53BF"
          },
          {
            code: "611026",
            name: "\u67DE\u6C34\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "\u7518\u8083\u7701",
    children: [
      {
        code: "6201",
        name: "\u5170\u5DDE\u5E02",
        children: [
          {
            code: "620102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "620103",
            name: "\u4E03\u91CC\u6CB3\u533A"
          },
          {
            code: "620104",
            name: "\u897F\u56FA\u533A"
          },
          {
            code: "620105",
            name: "\u5B89\u5B81\u533A"
          },
          {
            code: "620111",
            name: "\u7EA2\u53E4\u533A"
          },
          {
            code: "620121",
            name: "\u6C38\u767B\u53BF"
          },
          {
            code: "620122",
            name: "\u768B\u5170\u53BF"
          },
          {
            code: "620123",
            name: "\u6986\u4E2D\u53BF"
          },
          {
            code: "620171",
            name: "\u5170\u5DDE\u65B0\u533A"
          }
        ]
      },
      {
        code: "6202",
        name: "\u5609\u5CEA\u5173\u5E02",
        children: [
          {
            code: "620201001",
            name: "\u96C4\u5173\u8857\u9053"
          },
          {
            code: "620201002",
            name: "\u94A2\u57CE\u8857\u9053"
          },
          {
            code: "620201100",
            name: "\u65B0\u57CE\u9547"
          },
          {
            code: "620201101",
            name: "\u5CEA\u6CC9\u9547"
          },
          {
            code: "620201102",
            name: "\u6587\u6B8A\u9547"
          }
        ]
      },
      {
        code: "6203",
        name: "\u91D1\u660C\u5E02",
        children: [
          {
            code: "620302",
            name: "\u91D1\u5DDD\u533A"
          },
          {
            code: "620321",
            name: "\u6C38\u660C\u53BF"
          }
        ]
      },
      {
        code: "6204",
        name: "\u767D\u94F6\u5E02",
        children: [
          {
            code: "620402",
            name: "\u767D\u94F6\u533A"
          },
          {
            code: "620403",
            name: "\u5E73\u5DDD\u533A"
          },
          {
            code: "620421",
            name: "\u9756\u8FDC\u53BF"
          },
          {
            code: "620422",
            name: "\u4F1A\u5B81\u53BF"
          },
          {
            code: "620423",
            name: "\u666F\u6CF0\u53BF"
          }
        ]
      },
      {
        code: "6205",
        name: "\u5929\u6C34\u5E02",
        children: [
          {
            code: "620502",
            name: "\u79E6\u5DDE\u533A"
          },
          {
            code: "620503",
            name: "\u9EA6\u79EF\u533A"
          },
          {
            code: "620521",
            name: "\u6E05\u6C34\u53BF"
          },
          {
            code: "620522",
            name: "\u79E6\u5B89\u53BF"
          },
          {
            code: "620523",
            name: "\u7518\u8C37\u53BF"
          },
          {
            code: "620524",
            name: "\u6B66\u5C71\u53BF"
          },
          {
            code: "620525",
            name: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6206",
        name: "\u6B66\u5A01\u5E02",
        children: [
          {
            code: "620602",
            name: "\u51C9\u5DDE\u533A"
          },
          {
            code: "620621",
            name: "\u6C11\u52E4\u53BF"
          },
          {
            code: "620622",
            name: "\u53E4\u6D6A\u53BF"
          },
          {
            code: "620623",
            name: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6207",
        name: "\u5F20\u6396\u5E02",
        children: [
          {
            code: "620702",
            name: "\u7518\u5DDE\u533A"
          },
          {
            code: "620721",
            name: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620722",
            name: "\u6C11\u4E50\u53BF"
          },
          {
            code: "620723",
            name: "\u4E34\u6CFD\u53BF"
          },
          {
            code: "620724",
            name: "\u9AD8\u53F0\u53BF"
          },
          {
            code: "620725",
            name: "\u5C71\u4E39\u53BF"
          }
        ]
      },
      {
        code: "6208",
        name: "\u5E73\u51C9\u5E02",
        children: [
          {
            code: "620802",
            name: "\u5D06\u5CD2\u533A"
          },
          {
            code: "620821",
            name: "\u6CFE\u5DDD\u53BF"
          },
          {
            code: "620822",
            name: "\u7075\u53F0\u53BF"
          },
          {
            code: "620823",
            name: "\u5D07\u4FE1\u53BF"
          },
          {
            code: "620825",
            name: "\u5E84\u6D6A\u53BF"
          },
          {
            code: "620826",
            name: "\u9759\u5B81\u53BF"
          },
          {
            code: "620881",
            name: "\u534E\u4EAD\u5E02"
          }
        ]
      },
      {
        code: "6209",
        name: "\u9152\u6CC9\u5E02",
        children: [
          {
            code: "620902",
            name: "\u8083\u5DDE\u533A"
          },
          {
            code: "620921",
            name: "\u91D1\u5854\u53BF"
          },
          {
            code: "620922",
            name: "\u74DC\u5DDE\u53BF"
          },
          {
            code: "620923",
            name: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620924",
            name: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620981",
            name: "\u7389\u95E8\u5E02"
          },
          {
            code: "620982",
            name: "\u6566\u714C\u5E02"
          }
        ]
      },
      {
        code: "6210",
        name: "\u5E86\u9633\u5E02",
        children: [
          {
            code: "621002",
            name: "\u897F\u5CF0\u533A"
          },
          {
            code: "621021",
            name: "\u5E86\u57CE\u53BF"
          },
          {
            code: "621022",
            name: "\u73AF\u53BF"
          },
          {
            code: "621023",
            name: "\u534E\u6C60\u53BF"
          },
          {
            code: "621024",
            name: "\u5408\u6C34\u53BF"
          },
          {
            code: "621025",
            name: "\u6B63\u5B81\u53BF"
          },
          {
            code: "621026",
            name: "\u5B81\u53BF"
          },
          {
            code: "621027",
            name: "\u9547\u539F\u53BF"
          }
        ]
      },
      {
        code: "6211",
        name: "\u5B9A\u897F\u5E02",
        children: [
          {
            code: "621102",
            name: "\u5B89\u5B9A\u533A"
          },
          {
            code: "621121",
            name: "\u901A\u6E2D\u53BF"
          },
          {
            code: "621122",
            name: "\u9647\u897F\u53BF"
          },
          {
            code: "621123",
            name: "\u6E2D\u6E90\u53BF"
          },
          {
            code: "621124",
            name: "\u4E34\u6D2E\u53BF"
          },
          {
            code: "621125",
            name: "\u6F33\u53BF"
          },
          {
            code: "621126",
            name: "\u5CB7\u53BF"
          }
        ]
      },
      {
        code: "6212",
        name: "\u9647\u5357\u5E02",
        children: [
          {
            code: "621202",
            name: "\u6B66\u90FD\u533A"
          },
          {
            code: "621221",
            name: "\u6210\u53BF"
          },
          {
            code: "621222",
            name: "\u6587\u53BF"
          },
          {
            code: "621223",
            name: "\u5B95\u660C\u53BF"
          },
          {
            code: "621224",
            name: "\u5EB7\u53BF"
          },
          {
            code: "621225",
            name: "\u897F\u548C\u53BF"
          },
          {
            code: "621226",
            name: "\u793C\u53BF"
          },
          {
            code: "621227",
            name: "\u5FBD\u53BF"
          },
          {
            code: "621228",
            name: "\u4E24\u5F53\u53BF"
          }
        ]
      },
      {
        code: "6229",
        name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "622901",
            name: "\u4E34\u590F\u5E02"
          },
          {
            code: "622921",
            name: "\u4E34\u590F\u53BF"
          },
          {
            code: "622922",
            name: "\u5EB7\u4E50\u53BF"
          },
          {
            code: "622923",
            name: "\u6C38\u9756\u53BF"
          },
          {
            code: "622924",
            name: "\u5E7F\u6CB3\u53BF"
          },
          {
            code: "622925",
            name: "\u548C\u653F\u53BF"
          },
          {
            code: "622926",
            name: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "622927",
            name: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6230",
        name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "623001",
            name: "\u5408\u4F5C\u5E02"
          },
          {
            code: "623021",
            name: "\u4E34\u6F6D\u53BF"
          },
          {
            code: "623022",
            name: "\u5353\u5C3C\u53BF"
          },
          {
            code: "623023",
            name: "\u821F\u66F2\u53BF"
          },
          {
            code: "623024",
            name: "\u8FED\u90E8\u53BF"
          },
          {
            code: "623025",
            name: "\u739B\u66F2\u53BF"
          },
          {
            code: "623026",
            name: "\u788C\u66F2\u53BF"
          },
          {
            code: "623027",
            name: "\u590F\u6CB3\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "\u9752\u6D77\u7701",
    children: [
      {
        code: "6301",
        name: "\u897F\u5B81\u5E02",
        children: [
          {
            code: "630102",
            name: "\u57CE\u4E1C\u533A"
          },
          {
            code: "630103",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "630104",
            name: "\u57CE\u897F\u533A"
          },
          {
            code: "630105",
            name: "\u57CE\u5317\u533A"
          },
          {
            code: "630106",
            name: "\u6E5F\u4E2D\u533A"
          },
          {
            code: "630121",
            name: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630123",
            name: "\u6E5F\u6E90\u53BF"
          }
        ]
      },
      {
        code: "6302",
        name: "\u6D77\u4E1C\u5E02",
        children: [
          {
            code: "630202",
            name: "\u4E50\u90FD\u533A"
          },
          {
            code: "630203",
            name: "\u5E73\u5B89\u533A"
          },
          {
            code: "630222",
            name: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630223",
            name: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630224",
            name: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630225",
            name: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6322",
        name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632221",
            name: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "632222",
            name: "\u7941\u8FDE\u53BF"
          },
          {
            code: "632223",
            name: "\u6D77\u664F\u53BF"
          },
          {
            code: "632224",
            name: "\u521A\u5BDF\u53BF"
          }
        ]
      },
      {
        code: "6323",
        name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632321",
            name: "\u540C\u4EC1\u53BF"
          },
          {
            code: "632322",
            name: "\u5C16\u624E\u53BF"
          },
          {
            code: "632323",
            name: "\u6CFD\u5E93\u53BF"
          },
          {
            code: "632324",
            name: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6325",
        name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632521",
            name: "\u5171\u548C\u53BF"
          },
          {
            code: "632522",
            name: "\u540C\u5FB7\u53BF"
          },
          {
            code: "632523",
            name: "\u8D35\u5FB7\u53BF"
          },
          {
            code: "632524",
            name: "\u5174\u6D77\u53BF"
          },
          {
            code: "632525",
            name: "\u8D35\u5357\u53BF"
          }
        ]
      },
      {
        code: "6326",
        name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632621",
            name: "\u739B\u6C81\u53BF"
          },
          {
            code: "632622",
            name: "\u73ED\u739B\u53BF"
          },
          {
            code: "632623",
            name: "\u7518\u5FB7\u53BF"
          },
          {
            code: "632624",
            name: "\u8FBE\u65E5\u53BF"
          },
          {
            code: "632625",
            name: "\u4E45\u6CBB\u53BF"
          },
          {
            code: "632626",
            name: "\u739B\u591A\u53BF"
          }
        ]
      },
      {
        code: "6327",
        name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632701",
            name: "\u7389\u6811\u5E02"
          },
          {
            code: "632722",
            name: "\u6742\u591A\u53BF"
          },
          {
            code: "632723",
            name: "\u79F0\u591A\u53BF"
          },
          {
            code: "632724",
            name: "\u6CBB\u591A\u53BF"
          },
          {
            code: "632725",
            name: "\u56CA\u8C26\u53BF"
          },
          {
            code: "632726",
            name: "\u66F2\u9EBB\u83B1\u53BF"
          }
        ]
      },
      {
        code: "6328",
        name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632801",
            name: "\u683C\u5C14\u6728\u5E02"
          },
          {
            code: "632802",
            name: "\u5FB7\u4EE4\u54C8\u5E02"
          },
          {
            code: "632803",
            name: "\u832B\u5D16\u5E02"
          },
          {
            code: "632821",
            name: "\u4E4C\u5170\u53BF"
          },
          {
            code: "632822",
            name: "\u90FD\u5170\u53BF"
          },
          {
            code: "632823",
            name: "\u5929\u5CFB\u53BF"
          },
          {
            code: "632857",
            name: "\u5927\u67F4\u65E6\u884C\u653F\u59D4\u5458\u4F1A"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6401",
        name: "\u94F6\u5DDD\u5E02",
        children: [
          {
            code: "640104",
            name: "\u5174\u5E86\u533A"
          },
          {
            code: "640105",
            name: "\u897F\u590F\u533A"
          },
          {
            code: "640106",
            name: "\u91D1\u51E4\u533A"
          },
          {
            code: "640121",
            name: "\u6C38\u5B81\u53BF"
          },
          {
            code: "640122",
            name: "\u8D3A\u5170\u53BF"
          },
          {
            code: "640181",
            name: "\u7075\u6B66\u5E02"
          }
        ]
      },
      {
        code: "6402",
        name: "\u77F3\u5634\u5C71\u5E02",
        children: [
          {
            code: "640202",
            name: "\u5927\u6B66\u53E3\u533A"
          },
          {
            code: "640205",
            name: "\u60E0\u519C\u533A"
          },
          {
            code: "640221",
            name: "\u5E73\u7F57\u53BF"
          }
        ]
      },
      {
        code: "6403",
        name: "\u5434\u5FE0\u5E02",
        children: [
          {
            code: "640302",
            name: "\u5229\u901A\u533A"
          },
          {
            code: "640303",
            name: "\u7EA2\u5BFA\u5821\u533A"
          },
          {
            code: "640323",
            name: "\u76D0\u6C60\u53BF"
          },
          {
            code: "640324",
            name: "\u540C\u5FC3\u53BF"
          },
          {
            code: "640381",
            name: "\u9752\u94DC\u5CE1\u5E02"
          }
        ]
      },
      {
        code: "6404",
        name: "\u56FA\u539F\u5E02",
        children: [
          {
            code: "640402",
            name: "\u539F\u5DDE\u533A"
          },
          {
            code: "640422",
            name: "\u897F\u5409\u53BF"
          },
          {
            code: "640423",
            name: "\u9686\u5FB7\u53BF"
          },
          {
            code: "640424",
            name: "\u6CFE\u6E90\u53BF"
          },
          {
            code: "640425",
            name: "\u5F6D\u9633\u53BF"
          }
        ]
      },
      {
        code: "6405",
        name: "\u4E2D\u536B\u5E02",
        children: [
          {
            code: "640502",
            name: "\u6C99\u5761\u5934\u533A"
          },
          {
            code: "640521",
            name: "\u4E2D\u5B81\u53BF"
          },
          {
            code: "640522",
            name: "\u6D77\u539F\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6501",
        name: "\u4E4C\u9C81\u6728\u9F50\u5E02",
        children: [
          {
            code: "650102",
            name: "\u5929\u5C71\u533A"
          },
          {
            code: "650103",
            name: "\u6C99\u4F9D\u5DF4\u514B\u533A"
          },
          {
            code: "650104",
            name: "\u65B0\u5E02\u533A"
          },
          {
            code: "650105",
            name: "\u6C34\u78E8\u6C9F\u533A"
          },
          {
            code: "650106",
            name: "\u5934\u5C6F\u6CB3\u533A"
          },
          {
            code: "650107",
            name: "\u8FBE\u5742\u57CE\u533A"
          },
          {
            code: "650109",
            name: "\u7C73\u4E1C\u533A"
          },
          {
            code: "650121",
            name: "\u4E4C\u9C81\u6728\u9F50\u53BF"
          }
        ]
      },
      {
        code: "6502",
        name: "\u514B\u62C9\u739B\u4F9D\u5E02",
        children: [
          {
            code: "650202",
            name: "\u72EC\u5C71\u5B50\u533A"
          },
          {
            code: "650203",
            name: "\u514B\u62C9\u739B\u4F9D\u533A"
          },
          {
            code: "650204",
            name: "\u767D\u78B1\u6EE9\u533A"
          },
          {
            code: "650205",
            name: "\u4E4C\u5C14\u79BE\u533A"
          }
        ]
      },
      {
        code: "6504",
        name: "\u5410\u9C81\u756A\u5E02",
        children: [
          {
            code: "650402",
            name: "\u9AD8\u660C\u533A"
          },
          {
            code: "650421",
            name: "\u912F\u5584\u53BF"
          },
          {
            code: "650422",
            name: "\u6258\u514B\u900A\u53BF"
          }
        ]
      },
      {
        code: "6505",
        name: "\u54C8\u5BC6\u5E02",
        children: [
          {
            code: "650502",
            name: "\u4F0A\u5DDE\u533A"
          },
          {
            code: "650521",
            name: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          },
          {
            code: "650522",
            name: "\u4F0A\u543E\u53BF"
          }
        ]
      },
      {
        code: "6523",
        name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652301",
            name: "\u660C\u5409\u5E02"
          },
          {
            code: "652302",
            name: "\u961C\u5EB7\u5E02"
          },
          {
            code: "652323",
            name: "\u547C\u56FE\u58C1\u53BF"
          },
          {
            code: "652324",
            name: "\u739B\u7EB3\u65AF\u53BF"
          },
          {
            code: "652325",
            name: "\u5947\u53F0\u53BF"
          },
          {
            code: "652327",
            name: "\u5409\u6728\u8428\u5C14\u53BF"
          },
          {
            code: "652328",
            name: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6527",
        name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652701",
            name: "\u535A\u4E50\u5E02"
          },
          {
            code: "652702",
            name: "\u963F\u62C9\u5C71\u53E3\u5E02"
          },
          {
            code: "652722",
            name: "\u7CBE\u6CB3\u53BF"
          },
          {
            code: "652723",
            name: "\u6E29\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "6528",
        name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652801",
            name: "\u5E93\u5C14\u52D2\u5E02"
          },
          {
            code: "652822",
            name: "\u8F6E\u53F0\u53BF"
          },
          {
            code: "652823",
            name: "\u5C09\u7281\u53BF"
          },
          {
            code: "652824",
            name: "\u82E5\u7F8C\u53BF"
          },
          {
            code: "652825",
            name: "\u4E14\u672B\u53BF"
          },
          {
            code: "652826",
            name: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "652827",
            name: "\u548C\u9759\u53BF"
          },
          {
            code: "652828",
            name: "\u548C\u7855\u53BF"
          },
          {
            code: "652829",
            name: "\u535A\u6E56\u53BF"
          },
          {
            code: "652871",
            name: "\u5E93\u5C14\u52D2\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "6529",
        name: "\u963F\u514B\u82CF\u5730\u533A",
        children: [
          {
            code: "652901",
            name: "\u963F\u514B\u82CF\u5E02"
          },
          {
            code: "652902",
            name: "\u5E93\u8F66\u5E02"
          },
          {
            code: "652922",
            name: "\u6E29\u5BBF\u53BF"
          },
          {
            code: "652924",
            name: "\u6C99\u96C5\u53BF"
          },
          {
            code: "652925",
            name: "\u65B0\u548C\u53BF"
          },
          {
            code: "652926",
            name: "\u62DC\u57CE\u53BF"
          },
          {
            code: "652927",
            name: "\u4E4C\u4EC0\u53BF"
          },
          {
            code: "652928",
            name: "\u963F\u74E6\u63D0\u53BF"
          },
          {
            code: "652929",
            name: "\u67EF\u576A\u53BF"
          }
        ]
      },
      {
        code: "6530",
        name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "653001",
            name: "\u963F\u56FE\u4EC0\u5E02"
          },
          {
            code: "653022",
            name: "\u963F\u514B\u9676\u53BF"
          },
          {
            code: "653023",
            name: "\u963F\u5408\u5947\u53BF"
          },
          {
            code: "653024",
            name: "\u4E4C\u6070\u53BF"
          }
        ]
      },
      {
        code: "6531",
        name: "\u5580\u4EC0\u5730\u533A",
        children: [
          {
            code: "653101",
            name: "\u5580\u4EC0\u5E02"
          },
          {
            code: "653121",
            name: "\u758F\u9644\u53BF"
          },
          {
            code: "653122",
            name: "\u758F\u52D2\u53BF"
          },
          {
            code: "653123",
            name: "\u82F1\u5409\u6C99\u53BF"
          },
          {
            code: "653124",
            name: "\u6CFD\u666E\u53BF"
          },
          {
            code: "653125",
            name: "\u838E\u8F66\u53BF"
          },
          {
            code: "653126",
            name: "\u53F6\u57CE\u53BF"
          },
          {
            code: "653127",
            name: "\u9EA6\u76D6\u63D0\u53BF"
          },
          {
            code: "653128",
            name: "\u5CB3\u666E\u6E56\u53BF"
          },
          {
            code: "653129",
            name: "\u4F3D\u5E08\u53BF"
          },
          {
            code: "653130",
            name: "\u5DF4\u695A\u53BF"
          },
          {
            code: "653131",
            name: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6532",
        name: "\u548C\u7530\u5730\u533A",
        children: [
          {
            code: "653201",
            name: "\u548C\u7530\u5E02"
          },
          {
            code: "653221",
            name: "\u548C\u7530\u53BF"
          },
          {
            code: "653222",
            name: "\u58A8\u7389\u53BF"
          },
          {
            code: "653223",
            name: "\u76AE\u5C71\u53BF"
          },
          {
            code: "653224",
            name: "\u6D1B\u6D66\u53BF"
          },
          {
            code: "653225",
            name: "\u7B56\u52D2\u53BF"
          },
          {
            code: "653226",
            name: "\u4E8E\u7530\u53BF"
          },
          {
            code: "653227",
            name: "\u6C11\u4E30\u53BF"
          }
        ]
      },
      {
        code: "6540",
        name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "654002",
            name: "\u4F0A\u5B81\u5E02"
          },
          {
            code: "654003",
            name: "\u594E\u5C6F\u5E02"
          },
          {
            code: "654004",
            name: "\u970D\u5C14\u679C\u65AF\u5E02"
          },
          {
            code: "654021",
            name: "\u4F0A\u5B81\u53BF"
          },
          {
            code: "654022",
            name: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF"
          },
          {
            code: "654023",
            name: "\u970D\u57CE\u53BF"
          },
          {
            code: "654024",
            name: "\u5DE9\u7559\u53BF"
          },
          {
            code: "654025",
            name: "\u65B0\u6E90\u53BF"
          },
          {
            code: "654026",
            name: "\u662D\u82CF\u53BF"
          },
          {
            code: "654027",
            name: "\u7279\u514B\u65AF\u53BF"
          },
          {
            code: "654028",
            name: "\u5C3C\u52D2\u514B\u53BF"
          }
        ]
      },
      {
        code: "6542",
        name: "\u5854\u57CE\u5730\u533A",
        children: [
          {
            code: "654201",
            name: "\u5854\u57CE\u5E02"
          },
          {
            code: "654202",
            name: "\u4E4C\u82CF\u5E02"
          },
          {
            code: "654221",
            name: "\u989D\u654F\u53BF"
          },
          {
            code: "654223",
            name: "\u6C99\u6E7E\u53BF"
          },
          {
            code: "654224",
            name: "\u6258\u91CC\u53BF"
          },
          {
            code: "654225",
            name: "\u88D5\u6C11\u53BF"
          },
          {
            code: "654226",
            name: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6543",
        name: "\u963F\u52D2\u6CF0\u5730\u533A",
        children: [
          {
            code: "654301",
            name: "\u963F\u52D2\u6CF0\u5E02"
          },
          {
            code: "654321",
            name: "\u5E03\u5C14\u6D25\u53BF"
          },
          {
            code: "654322",
            name: "\u5BCC\u8574\u53BF"
          },
          {
            code: "654323",
            name: "\u798F\u6D77\u53BF"
          },
          {
            code: "654324",
            name: "\u54C8\u5DF4\u6CB3\u53BF"
          },
          {
            code: "654325",
            name: "\u9752\u6CB3\u53BF"
          },
          {
            code: "654326",
            name: "\u5409\u6728\u4E43\u53BF"
          }
        ]
      },
      {
        code: "6590",
        name: "\u81EA\u6CBB\u533A\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "659001",
            name: "\u77F3\u6CB3\u5B50\u5E02"
          },
          {
            code: "659002",
            name: "\u963F\u62C9\u5C14\u5E02"
          },
          {
            code: "659003",
            name: "\u56FE\u6728\u8212\u514B\u5E02"
          },
          {
            code: "659004",
            name: "\u4E94\u5BB6\u6E20\u5E02"
          },
          {
            code: "659005",
            name: "\u5317\u5C6F\u5E02"
          },
          {
            code: "659006",
            name: "\u94C1\u95E8\u5173\u5E02"
          },
          {
            code: "659007",
            name: "\u53CC\u6CB3\u5E02"
          },
          {
            code: "659008",
            name: "\u53EF\u514B\u8FBE\u62C9\u5E02"
          },
          {
            code: "659009",
            name: "\u6606\u7389\u5E02"
          },
          {
            code: "659010",
            name: "\u80E1\u6768\u6CB3\u5E02"
          }
        ]
      }
    ]
  }
], uN = /* @__PURE__ */ ne({
  __name: "index",
  emits: ["change"],
  setup(e, { emit: n }) {
    const o = V(""), a = V(""), t = V(""), r = S(() => {
      a.value = "";
      let m = bn.find((i) => i.code === o.value);
      return m ? m.children : [];
    }), d = S(() => {
      t.value = "";
      let m = r.value.find((i) => i.code === a.value);
      return m ? m.children : [];
    });
    return W(t, (m) => {
      let i = "", u = "", v = "";
      o.value && (i = bn.find((w) => w.code === o.value).name), a.value && (u = r.value.find((w) => w.code === a.value).name), t.value && (v = d.value.find((w) => w.code === t.value).name);
      const g = {
        provice: {
          name: i,
          code: o.value
        },
        city: {
          name: u,
          code: a.value
        },
        area: {
          name: v,
          code: t.value
        }
      };
      n("change", g);
    }), (m, i) => (l(), s("div", null, [
      D(_(gn), {
        modelValue: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (u) => o.value = u),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u7701\u4EFD",
        clearable: !0
      }, {
        default: N(() => [
          (l(!0), s(be, null, $2(_(bn), (u) => (l(), K(_(wn), {
            key: u.code,
            label: u.name,
            value: u.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      D(_(gn), {
        clearable: !0,
        modelValue: a.value,
        "onUpdate:modelValue": i[1] || (i[1] = (u) => a.value = u),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u57CE\u5E02",
        disabled: !o.value,
        style: { margin: "0 10px" }
      }, {
        default: N(() => [
          (l(!0), s(be, null, $2(_(r), (u) => (l(), K(_(wn), {
            key: u.code,
            label: u.name,
            value: u.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"]),
      D(_(gn), {
        modelValue: t.value,
        "onUpdate:modelValue": i[2] || (i[2] = (u) => t.value = u),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
        disabled: !a.value,
        clearable: !0
      }, {
        default: N(() => [
          (l(!0), s(be, null, $2(_(d), (u) => (l(), K(_(wn), {
            key: u.code,
            label: u.name,
            value: u.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), fN = {
  install(e) {
    e.component("ChooseArea", uN);
  }
}, _N = { class: "trend" }, pN = { class: "text" }, hN = { key: 1 }, vN = { class: "icon" }, gN = /* @__PURE__ */ ne({
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
    const n = A0();
    return console.log(n), (o, a) => {
      const t = pe("ArrowUp"), r = pe("ArrowDown");
      return l(), s("div", _N, [
        c("div", pN, [
          _(n).text ? X(o.$slots, "text", { key: 0 }, void 0, !0) : (l(), s("div", hN, se(e.text), 1))
        ]),
        c("div", vN, [
          e.type === "up" ? (l(), K(_(_e), {
            key: 0,
            style: fe({ color: e.upColor })
          }, {
            default: N(() => [
              D(t)
            ]),
            _: 1
          }, 8, ["style"])) : (l(), K(_(_e), {
            key: 1,
            style: fe({ color: e.downColor })
          }, {
            default: N(() => [
              D(r)
            ]),
            _: 1
          }, 8, ["style"]))
        ])
      ]);
    };
  }
});
const wN = /* @__PURE__ */ oo(gN, [["__scopeId", "data-v-cc0f8158"]]), $N = {
  install(e) {
    e.component("Trend", wN);
  }
}, bN = /* @__PURE__ */ ne({
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
    const n = e;
    return A0(), console.log(n), (o, a) => (l(), s("div", null, [
      D(_(LI), {
        placement: "bottom",
        width: 400,
        trigger: "click"
      }, {
        reference: N(() => [
          D(_(S1), {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot,
            style: { cursor: "pointer" }
          }, {
            default: N(() => [
              D(_(_e), null, {
                default: N(() => [
                  (l(), K(Ie(e.icon)))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: N(() => [
          X(o.$slots, "default")
        ]),
        _: 3
      })
    ]));
  }
}), yN = {
  install(e) {
    e.component("NotificationMenu", bN);
  }
}, zN = { class: "tab-list" }, CN = ["onClick"], xN = {
  key: 0,
  class: "avatar"
}, MN = { class: "content" }, HN = {
  key: 0,
  class: "title"
}, SN = {
  key: 1,
  class: "time"
}, VN = {
  key: 2,
  class: "time"
}, LN = {
  key: 0,
  class: "actions"
}, AN = ["onClick"], BN = {
  key: 0,
  class: "a-icon"
}, EN = { class: "a-text" }, TN = /* @__PURE__ */ ne({
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
  setup(e, { emit: n }) {
    function o(t) {
      n("clickItem", t);
    }
    function a(t) {
      n("clickBtn", t);
    }
    return (t, r) => (l(), s("div", zN, [
      D(_(jI), null, {
        default: N(() => [
          (l(!0), s(be, null, $2(e.list, (d, m) => (l(), K(_(WI), {
            label: d.title
          }, {
            default: N(() => [
              D(_(l1), { "max-height": "300px" }, {
                default: N(() => [
                  (l(!0), s(be, null, $2(d.content, (i, u) => (l(), s("div", {
                    class: "container",
                    key: u,
                    onClick: (v) => o(i)
                  }, [
                    i.avatar ? (l(), s("div", xN, [
                      D(_(yP), {
                        size: "small",
                        src: i.avatar
                      }, null, 8, ["src"])
                    ])) : j("", !0),
                    c("div", MN, [
                      i.title ? (l(), s("div", HN, [
                        c("div", null, se(i.title), 1),
                        i.tag ? (l(), K(_(L1), {
                          key: 0,
                          type: i.tagType
                        }, {
                          default: N(() => [
                            ya(se(i.tag), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])) : j("", !0)
                      ])) : j("", !0),
                      i.desc ? (l(), s("div", SN, se(i.desc), 1)) : j("", !0),
                      i.time ? (l(), s("div", VN, se(i.time), 1)) : j("", !0)
                    ])
                  ], 8, CN))), 128))
                ]),
                _: 2
              }, 1024),
              e.actions ? (l(), s("div", LN, [
                (l(!0), s(be, null, $2(e.actions, (i, u) => (l(), s("div", {
                  class: O(["a-item", { border: u !== e.actions.length }]),
                  onClick: (v) => a(i),
                  key: u
                }, [
                  i.icon ? (l(), s("div", BN, [
                    D(_(_e), null, {
                      default: N(() => [
                        (l(), K(Ie(i.icon)))
                      ]),
                      _: 2
                    }, 1024)
                  ])) : j("", !0),
                  c("div", EN, se(i.text), 1)
                ], 10, AN))), 128))
              ])) : j("", !0)
            ]),
            _: 2
          }, 1032, ["label"]))), 256))
        ]),
        _: 1
      })
    ]));
  }
});
const ON = /* @__PURE__ */ oo(TN, [["__scopeId", "data-v-a86f737b"]]), kN = {
  install(e) {
    e.component("TabList", ON);
  }
}, PN = [mN, fN, $N, yN, kN], NN = {
  install(e) {
    PN.map((n) => {
      e.use(n);
    });
  }
};
export {
  NN as default
};
