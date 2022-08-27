import { getCurrentScope as $t, onScopeDispose as _t, watch as K, unref as u, ref as P, openBlock as $, createElementBlock as z, createElementVNode as G, warn as Pt, computed as T, getCurrentInstance as Sn, inject as ae, onMounted as Ve, toRef as Mn, onUnmounted as At, isRef as It, onBeforeUnmount as En, onBeforeMount as Lt, provide as tn, defineComponent as ce, mergeProps as Hn, renderSlot as ne, useAttrs as Mt, useSlots as kt, shallowRef as ao, nextTick as J, onUpdated as Mc, withDirectives as cn, createCommentVNode as V, Fragment as He, normalizeClass as M, createBlock as U, withCtx as W, resolveDynamicComponent as An, withModifiers as je, createVNode as le, toDisplayString as $e, normalizeStyle as _e, vShow as Jn, Transition as _o, reactive as yo, cloneVNode as Rt, Text as Nt, Comment as Bt, toRefs as Po, resolveComponent as Ce, Teleport as zt, readonly as Dt, toRaw as kc, triggerRef as eo, resolveDirective as Ft, renderList as co, withKeys as De, vModelText as jt, createSlots as xt } from "vue";
const Fo = [
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
];
var Ht = typeof global == "object" && global && global.Object === Object && global;
const Rc = Ht;
var Vt = typeof self == "object" && self && self.Object === Object && self, Kt = Rc || Vt || Function("return this")();
const Je = Kt;
var Wt = Je.Symbol;
const bn = Wt;
var Nc = Object.prototype, qt = Nc.hasOwnProperty, Ut = Nc.toString, no = bn ? bn.toStringTag : void 0;
function Gt(e) {
  var n = qt.call(e, no), o = e[no];
  try {
    e[no] = void 0;
    var a = !0;
  } catch {
  }
  var c = Ut.call(e);
  return a && (n ? e[no] = o : delete e[no]), c;
}
var Yt = Object.prototype, Xt = Yt.toString;
function Jt(e) {
  return Xt.call(e);
}
var Zt = "[object Null]", Qt = "[object Undefined]", Aa = bn ? bn.toStringTag : void 0;
function Zn(e) {
  return e == null ? e === void 0 ? Qt : Zt : Aa && Aa in Object(e) ? Gt(e) : Jt(e);
}
function Wn(e) {
  return e != null && typeof e == "object";
}
var ed = "[object Symbol]";
function Ao(e) {
  return typeof e == "symbol" || Wn(e) && Zn(e) == ed;
}
function nd(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length, c = Array(a); ++o < a; )
    c[o] = n(e[o], o, e);
  return c;
}
var od = Array.isArray;
const kn = od;
var ad = 1 / 0, Ia = bn ? bn.prototype : void 0, La = Ia ? Ia.toString : void 0;
function Bc(e) {
  if (typeof e == "string")
    return e;
  if (kn(e))
    return nd(e, Bc) + "";
  if (Ao(e))
    return La ? La.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -ad ? "-0" : n;
}
var cd = /\s/;
function td(e) {
  for (var n = e.length; n-- && cd.test(e.charAt(n)); )
    ;
  return n;
}
var dd = /^\s+/;
function rd(e) {
  return e && e.slice(0, td(e) + 1).replace(dd, "");
}
function mo(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Ma = 0 / 0, ld = /^[-+]0x[0-9a-f]+$/i, md = /^0b[01]+$/i, id = /^0o[0-7]+$/i, sd = parseInt;
function ka(e) {
  if (typeof e == "number")
    return e;
  if (Ao(e))
    return Ma;
  if (mo(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mo(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = rd(e);
  var o = md.test(e);
  return o || id.test(e) ? sd(e.slice(2), o ? 2 : 8) : ld.test(e) ? Ma : +e;
}
var ud = "[object AsyncFunction]", fd = "[object Function]", pd = "[object GeneratorFunction]", hd = "[object Proxy]";
function zc(e) {
  if (!mo(e))
    return !1;
  var n = Zn(e);
  return n == fd || n == pd || n == ud || n == hd;
}
var vd = Je["__core-js_shared__"];
const jo = vd;
var Ra = function() {
  var e = /[^.]+$/.exec(jo && jo.keys && jo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gd(e) {
  return !!Ra && Ra in e;
}
var yd = Function.prototype, bd = yd.toString;
function Nn(e) {
  if (e != null) {
    try {
      return bd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wd = /[\\^$.*+?()[\]{}|]/g, Sd = /^\[object .+?Constructor\]$/, Ed = Function.prototype, Od = Object.prototype, Td = Ed.toString, Cd = Od.hasOwnProperty, $d = RegExp("^" + Td.call(Cd).replace(wd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function _d(e) {
  if (!mo(e) || gd(e))
    return !1;
  var n = zc(e) ? $d : Sd;
  return n.test(Nn(e));
}
function Pd(e, n) {
  return e == null ? void 0 : e[n];
}
function Qn(e, n) {
  var o = Pd(e, n);
  return _d(o) ? o : void 0;
}
var Ad = Qn(Je, "WeakMap");
const Zo = Ad;
var Id = 9007199254740991, Ld = /^(?:0|[1-9]\d*)$/;
function Md(e, n) {
  var o = typeof e;
  return n = n == null ? Id : n, !!n && (o == "number" || o != "symbol" && Ld.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Dc(e, n) {
  return e === n || e !== e && n !== n;
}
var kd = 9007199254740991;
function Fc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kd;
}
function Rd(e) {
  return e != null && Fc(e.length) && !zc(e);
}
var Nd = Object.prototype;
function Bd(e) {
  var n = e && e.constructor, o = typeof n == "function" && n.prototype || Nd;
  return e === o;
}
function zd(e, n) {
  for (var o = -1, a = Array(e); ++o < e; )
    a[o] = n(o);
  return a;
}
var Dd = "[object Arguments]";
function Na(e) {
  return Wn(e) && Zn(e) == Dd;
}
var jc = Object.prototype, Fd = jc.hasOwnProperty, jd = jc.propertyIsEnumerable, xd = Na(function() {
  return arguments;
}()) ? Na : function(e) {
  return Wn(e) && Fd.call(e, "callee") && !jd.call(e, "callee");
};
const Hd = xd;
function Vd() {
  return !1;
}
var xc = typeof exports == "object" && exports && !exports.nodeType && exports, Ba = xc && typeof module == "object" && module && !module.nodeType && module, Kd = Ba && Ba.exports === xc, za = Kd ? Je.Buffer : void 0, Wd = za ? za.isBuffer : void 0, qd = Wd || Vd;
const Qo = qd;
var Ud = "[object Arguments]", Gd = "[object Array]", Yd = "[object Boolean]", Xd = "[object Date]", Jd = "[object Error]", Zd = "[object Function]", Qd = "[object Map]", er = "[object Number]", nr = "[object Object]", or = "[object RegExp]", ar = "[object Set]", cr = "[object String]", tr = "[object WeakMap]", dr = "[object ArrayBuffer]", rr = "[object DataView]", lr = "[object Float32Array]", mr = "[object Float64Array]", ir = "[object Int8Array]", sr = "[object Int16Array]", ur = "[object Int32Array]", fr = "[object Uint8Array]", pr = "[object Uint8ClampedArray]", hr = "[object Uint16Array]", vr = "[object Uint32Array]", X = {};
X[lr] = X[mr] = X[ir] = X[sr] = X[ur] = X[fr] = X[pr] = X[hr] = X[vr] = !0;
X[Ud] = X[Gd] = X[dr] = X[Yd] = X[rr] = X[Xd] = X[Jd] = X[Zd] = X[Qd] = X[er] = X[nr] = X[or] = X[ar] = X[cr] = X[tr] = !1;
function gr(e) {
  return Wn(e) && Fc(e.length) && !!X[Zn(e)];
}
function yr(e) {
  return function(n) {
    return e(n);
  };
}
var Hc = typeof exports == "object" && exports && !exports.nodeType && exports, to = Hc && typeof module == "object" && module && !module.nodeType && module, br = to && to.exports === Hc, xo = br && Rc.process, wr = function() {
  try {
    var e = to && to.require && to.require("util").types;
    return e || xo && xo.binding && xo.binding("util");
  } catch {
  }
}();
const Da = wr;
var Fa = Da && Da.isTypedArray, Sr = Fa ? yr(Fa) : gr;
const Vc = Sr;
var Er = Object.prototype, Or = Er.hasOwnProperty;
function Tr(e, n) {
  var o = kn(e), a = !o && Hd(e), c = !o && !a && Qo(e), t = !o && !a && !c && Vc(e), d = o || a || c || t, l = d ? zd(e.length, String) : [], r = l.length;
  for (var m in e)
    (n || Or.call(e, m)) && !(d && (m == "length" || c && (m == "offset" || m == "parent") || t && (m == "buffer" || m == "byteLength" || m == "byteOffset") || Md(m, r))) && l.push(m);
  return l;
}
function Cr(e, n) {
  return function(o) {
    return e(n(o));
  };
}
var $r = Cr(Object.keys, Object);
const _r = $r;
var Pr = Object.prototype, Ar = Pr.hasOwnProperty;
function Ir(e) {
  if (!Bd(e))
    return _r(e);
  var n = [];
  for (var o in Object(e))
    Ar.call(e, o) && o != "constructor" && n.push(o);
  return n;
}
function Lr(e) {
  return Rd(e) ? Tr(e) : Ir(e);
}
var Mr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kr = /^\w*$/;
function Rr(e, n) {
  if (kn(e))
    return !1;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || Ao(e) ? !0 : kr.test(e) || !Mr.test(e) || n != null && e in Object(n);
}
var Nr = Qn(Object, "create");
const io = Nr;
function Br() {
  this.__data__ = io ? io(null) : {}, this.size = 0;
}
function zr(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Dr = "__lodash_hash_undefined__", Fr = Object.prototype, jr = Fr.hasOwnProperty;
function xr(e) {
  var n = this.__data__;
  if (io) {
    var o = n[e];
    return o === Dr ? void 0 : o;
  }
  return jr.call(n, e) ? n[e] : void 0;
}
var Hr = Object.prototype, Vr = Hr.hasOwnProperty;
function Kr(e) {
  var n = this.__data__;
  return io ? n[e] !== void 0 : Vr.call(n, e);
}
var Wr = "__lodash_hash_undefined__";
function qr(e, n) {
  var o = this.__data__;
  return this.size += this.has(e) ? 0 : 1, o[e] = io && n === void 0 ? Wr : n, this;
}
function Rn(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
Rn.prototype.clear = Br;
Rn.prototype.delete = zr;
Rn.prototype.get = xr;
Rn.prototype.has = Kr;
Rn.prototype.set = qr;
function Ur() {
  this.__data__ = [], this.size = 0;
}
function Io(e, n) {
  for (var o = e.length; o--; )
    if (Dc(e[o][0], n))
      return o;
  return -1;
}
var Gr = Array.prototype, Yr = Gr.splice;
function Xr(e) {
  var n = this.__data__, o = Io(n, e);
  if (o < 0)
    return !1;
  var a = n.length - 1;
  return o == a ? n.pop() : Yr.call(n, o, 1), --this.size, !0;
}
function Jr(e) {
  var n = this.__data__, o = Io(n, e);
  return o < 0 ? void 0 : n[o][1];
}
function Zr(e) {
  return Io(this.__data__, e) > -1;
}
function Qr(e, n) {
  var o = this.__data__, a = Io(o, e);
  return a < 0 ? (++this.size, o.push([e, n])) : o[a][1] = n, this;
}
function rn(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
rn.prototype.clear = Ur;
rn.prototype.delete = Xr;
rn.prototype.get = Jr;
rn.prototype.has = Zr;
rn.prototype.set = Qr;
var el = Qn(Je, "Map");
const so = el;
function nl() {
  this.size = 0, this.__data__ = {
    hash: new Rn(),
    map: new (so || rn)(),
    string: new Rn()
  };
}
function ol(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Lo(e, n) {
  var o = e.__data__;
  return ol(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
}
function al(e) {
  var n = Lo(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function cl(e) {
  return Lo(this, e).get(e);
}
function tl(e) {
  return Lo(this, e).has(e);
}
function dl(e, n) {
  var o = Lo(this, e), a = o.size;
  return o.set(e, n), this.size += o.size == a ? 0 : 1, this;
}
function ln(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++n < o; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
ln.prototype.clear = nl;
ln.prototype.delete = al;
ln.prototype.get = cl;
ln.prototype.has = tl;
ln.prototype.set = dl;
var rl = "Expected a function";
function ma(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(rl);
  var o = function() {
    var a = arguments, c = n ? n.apply(this, a) : a[0], t = o.cache;
    if (t.has(c))
      return t.get(c);
    var d = e.apply(this, a);
    return o.cache = t.set(c, d) || t, d;
  };
  return o.cache = new (ma.Cache || ln)(), o;
}
ma.Cache = ln;
var ll = 500;
function ml(e) {
  var n = ma(e, function(a) {
    return o.size === ll && o.clear(), a;
  }), o = n.cache;
  return n;
}
var il = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sl = /\\(\\)?/g, ul = ml(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(il, function(o, a, c, t) {
    n.push(c ? t.replace(sl, "$1") : a || o);
  }), n;
});
const fl = ul;
function pl(e) {
  return e == null ? "" : Bc(e);
}
function hl(e, n) {
  return kn(e) ? e : Rr(e, n) ? [e] : fl(pl(e));
}
var vl = 1 / 0;
function gl(e) {
  if (typeof e == "string" || Ao(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -vl ? "-0" : n;
}
function yl(e, n) {
  n = hl(n, e);
  for (var o = 0, a = n.length; e != null && o < a; )
    e = e[gl(n[o++])];
  return o && o == a ? e : void 0;
}
function Me(e, n, o) {
  var a = e == null ? void 0 : yl(e, n);
  return a === void 0 ? o : a;
}
function bl(e, n) {
  for (var o = -1, a = n.length, c = e.length; ++o < a; )
    e[c + o] = n[o];
  return e;
}
function wl() {
  this.__data__ = new rn(), this.size = 0;
}
function Sl(e) {
  var n = this.__data__, o = n.delete(e);
  return this.size = n.size, o;
}
function El(e) {
  return this.__data__.get(e);
}
function Ol(e) {
  return this.__data__.has(e);
}
var Tl = 200;
function Cl(e, n) {
  var o = this.__data__;
  if (o instanceof rn) {
    var a = o.__data__;
    if (!so || a.length < Tl - 1)
      return a.push([e, n]), this.size = ++o.size, this;
    o = this.__data__ = new ln(a);
  }
  return o.set(e, n), this.size = o.size, this;
}
function yn(e) {
  var n = this.__data__ = new rn(e);
  this.size = n.size;
}
yn.prototype.clear = wl;
yn.prototype.delete = Sl;
yn.prototype.get = El;
yn.prototype.has = Ol;
yn.prototype.set = Cl;
function $l(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length, c = 0, t = []; ++o < a; ) {
    var d = e[o];
    n(d, o, e) && (t[c++] = d);
  }
  return t;
}
function _l() {
  return [];
}
var Pl = Object.prototype, Al = Pl.propertyIsEnumerable, ja = Object.getOwnPropertySymbols, Il = ja ? function(e) {
  return e == null ? [] : (e = Object(e), $l(ja(e), function(n) {
    return Al.call(e, n);
  }));
} : _l;
const Ll = Il;
function Ml(e, n, o) {
  var a = n(e);
  return kn(e) ? a : bl(a, o(e));
}
function xa(e) {
  return Ml(e, Lr, Ll);
}
var kl = Qn(Je, "DataView");
const ea = kl;
var Rl = Qn(Je, "Promise");
const na = Rl;
var Nl = Qn(Je, "Set");
const oa = Nl;
var Ha = "[object Map]", Bl = "[object Object]", Va = "[object Promise]", Ka = "[object Set]", Wa = "[object WeakMap]", qa = "[object DataView]", zl = Nn(ea), Dl = Nn(so), Fl = Nn(na), jl = Nn(oa), xl = Nn(Zo), Pn = Zn;
(ea && Pn(new ea(new ArrayBuffer(1))) != qa || so && Pn(new so()) != Ha || na && Pn(na.resolve()) != Va || oa && Pn(new oa()) != Ka || Zo && Pn(new Zo()) != Wa) && (Pn = function(e) {
  var n = Zn(e), o = n == Bl ? e.constructor : void 0, a = o ? Nn(o) : "";
  if (a)
    switch (a) {
      case zl:
        return qa;
      case Dl:
        return Ha;
      case Fl:
        return Va;
      case jl:
        return Ka;
      case xl:
        return Wa;
    }
  return n;
});
const Ua = Pn;
var Hl = Je.Uint8Array;
const Ga = Hl;
var Vl = "__lodash_hash_undefined__";
function Kl(e) {
  return this.__data__.set(e, Vl), this;
}
function Wl(e) {
  return this.__data__.has(e);
}
function Co(e) {
  var n = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new ln(); ++n < o; )
    this.add(e[n]);
}
Co.prototype.add = Co.prototype.push = Kl;
Co.prototype.has = Wl;
function ql(e, n) {
  for (var o = -1, a = e == null ? 0 : e.length; ++o < a; )
    if (n(e[o], o, e))
      return !0;
  return !1;
}
function Ul(e, n) {
  return e.has(n);
}
var Gl = 1, Yl = 2;
function Kc(e, n, o, a, c, t) {
  var d = o & Gl, l = e.length, r = n.length;
  if (l != r && !(d && r > l))
    return !1;
  var m = t.get(e), f = t.get(n);
  if (m && f)
    return m == n && f == e;
  var p = -1, h = !0, v = o & Yl ? new Co() : void 0;
  for (t.set(e, n), t.set(n, e); ++p < l; ) {
    var s = e[p], i = n[p];
    if (a)
      var y = d ? a(i, s, p, n, e, t) : a(s, i, p, e, n, t);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (v) {
      if (!ql(n, function(w, C) {
        if (!Ul(v, C) && (s === w || c(s, w, o, a, t)))
          return v.push(C);
      })) {
        h = !1;
        break;
      }
    } else if (!(s === i || c(s, i, o, a, t))) {
      h = !1;
      break;
    }
  }
  return t.delete(e), t.delete(n), h;
}
function Xl(e) {
  var n = -1, o = Array(e.size);
  return e.forEach(function(a, c) {
    o[++n] = [c, a];
  }), o;
}
function Jl(e) {
  var n = -1, o = Array(e.size);
  return e.forEach(function(a) {
    o[++n] = a;
  }), o;
}
var Zl = 1, Ql = 2, em = "[object Boolean]", nm = "[object Date]", om = "[object Error]", am = "[object Map]", cm = "[object Number]", tm = "[object RegExp]", dm = "[object Set]", rm = "[object String]", lm = "[object Symbol]", mm = "[object ArrayBuffer]", im = "[object DataView]", Ya = bn ? bn.prototype : void 0, Ho = Ya ? Ya.valueOf : void 0;
function sm(e, n, o, a, c, t, d) {
  switch (o) {
    case im:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case mm:
      return !(e.byteLength != n.byteLength || !t(new Ga(e), new Ga(n)));
    case em:
    case nm:
    case cm:
      return Dc(+e, +n);
    case om:
      return e.name == n.name && e.message == n.message;
    case tm:
    case rm:
      return e == n + "";
    case am:
      var l = Xl;
    case dm:
      var r = a & Zl;
      if (l || (l = Jl), e.size != n.size && !r)
        return !1;
      var m = d.get(e);
      if (m)
        return m == n;
      a |= Ql, d.set(e, n);
      var f = Kc(l(e), l(n), a, c, t, d);
      return d.delete(e), f;
    case lm:
      if (Ho)
        return Ho.call(e) == Ho.call(n);
  }
  return !1;
}
var um = 1, fm = Object.prototype, pm = fm.hasOwnProperty;
function hm(e, n, o, a, c, t) {
  var d = o & um, l = xa(e), r = l.length, m = xa(n), f = m.length;
  if (r != f && !d)
    return !1;
  for (var p = r; p--; ) {
    var h = l[p];
    if (!(d ? h in n : pm.call(n, h)))
      return !1;
  }
  var v = t.get(e), s = t.get(n);
  if (v && s)
    return v == n && s == e;
  var i = !0;
  t.set(e, n), t.set(n, e);
  for (var y = d; ++p < r; ) {
    h = l[p];
    var w = e[h], C = n[h];
    if (a)
      var L = d ? a(C, w, h, n, e, t) : a(w, C, h, e, n, t);
    if (!(L === void 0 ? w === C || c(w, C, o, a, t) : L)) {
      i = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (i && !y) {
    var I = e.constructor, _ = n.constructor;
    I != _ && "constructor" in e && "constructor" in n && !(typeof I == "function" && I instanceof I && typeof _ == "function" && _ instanceof _) && (i = !1);
  }
  return t.delete(e), t.delete(n), i;
}
var vm = 1, Xa = "[object Arguments]", Ja = "[object Array]", So = "[object Object]", gm = Object.prototype, Za = gm.hasOwnProperty;
function ym(e, n, o, a, c, t) {
  var d = kn(e), l = kn(n), r = d ? Ja : Ua(e), m = l ? Ja : Ua(n);
  r = r == Xa ? So : r, m = m == Xa ? So : m;
  var f = r == So, p = m == So, h = r == m;
  if (h && Qo(e)) {
    if (!Qo(n))
      return !1;
    d = !0, f = !1;
  }
  if (h && !f)
    return t || (t = new yn()), d || Vc(e) ? Kc(e, n, o, a, c, t) : sm(e, n, r, o, a, c, t);
  if (!(o & vm)) {
    var v = f && Za.call(e, "__wrapped__"), s = p && Za.call(n, "__wrapped__");
    if (v || s) {
      var i = v ? e.value() : e, y = s ? n.value() : n;
      return t || (t = new yn()), c(i, y, o, a, t);
    }
  }
  return h ? (t || (t = new yn()), hm(e, n, o, a, c, t)) : !1;
}
function Wc(e, n, o, a, c) {
  return e === n ? !0 : e == null || n == null || !Wn(e) && !Wn(n) ? e !== e && n !== n : ym(e, n, o, a, Wc, c);
}
var bm = function() {
  return Je.Date.now();
};
const Vo = bm;
var wm = "Expected a function", Sm = Math.max, Em = Math.min;
function Qa(e, n, o) {
  var a, c, t, d, l, r, m = 0, f = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(wm);
  n = ka(n) || 0, mo(o) && (f = !!o.leading, p = "maxWait" in o, t = p ? Sm(ka(o.maxWait) || 0, n) : t, h = "trailing" in o ? !!o.trailing : h);
  function v(b) {
    var E = a, A = c;
    return a = c = void 0, m = b, d = e.apply(A, E), d;
  }
  function s(b) {
    return m = b, l = setTimeout(w, n), f ? v(b) : d;
  }
  function i(b) {
    var E = b - r, A = b - m, R = n - E;
    return p ? Em(R, t - A) : R;
  }
  function y(b) {
    var E = b - r, A = b - m;
    return r === void 0 || E >= n || E < 0 || p && A >= t;
  }
  function w() {
    var b = Vo();
    if (y(b))
      return C(b);
    l = setTimeout(w, i(b));
  }
  function C(b) {
    return l = void 0, h && a ? v(b) : (a = c = void 0, d);
  }
  function L() {
    l !== void 0 && clearTimeout(l), m = 0, a = r = c = l = void 0;
  }
  function I() {
    return l === void 0 ? d : C(Vo());
  }
  function _() {
    var b = Vo(), E = y(b);
    if (a = arguments, c = this, r = b, E) {
      if (l === void 0)
        return s(r);
      if (p)
        return clearTimeout(l), l = setTimeout(w, n), v(r);
    }
    return l === void 0 && (l = setTimeout(w, n)), d;
  }
  return _.cancel = L, _.flush = I, _;
}
function qc(e) {
  for (var n = -1, o = e == null ? 0 : e.length, a = {}; ++n < o; ) {
    var c = e[n];
    a[c[0]] = c[1];
  }
  return a;
}
function ec(e, n) {
  return Wc(e, n);
}
function Mo(e) {
  return e == null;
}
const an = (e, n, { checkForDefaultPrevented: o = !0 } = {}) => (c) => {
  const t = e == null ? void 0 : e(c);
  if (o === !1 || !t)
    return n == null ? void 0 : n(c);
};
function ia(e) {
  return $t() ? (_t(e), !0) : !1;
}
var nc;
const me = typeof window < "u", aa = (e) => typeof e == "boolean", gn = (e) => typeof e == "number", Om = (e) => typeof e == "string", Ko = () => {
};
me && ((nc = window == null ? void 0 : window.navigator) == null ? void 0 : nc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function In(e) {
  var n;
  const o = u(e);
  return (n = o == null ? void 0 : o.$el) != null ? n : o;
}
const sa = me ? window : void 0;
me && window.document;
me && window.navigator;
me && window.location;
function Vn(...e) {
  let n, o, a, c;
  if (Om(e[0]) ? ([o, a, c] = e, n = sa) : [n, o, a, c] = e, !n)
    return Ko;
  let t = Ko;
  const d = K(() => In(n), (r) => {
    t(), r && (r.addEventListener(o, a, c), t = () => {
      r.removeEventListener(o, a, c), t = Ko;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    d(), t();
  };
  return ia(l), l;
}
function Tm(e, n, o = {}) {
  const { window: a = sa, ignore: c, capture: t = !0 } = o;
  if (!a)
    return;
  const d = P(!0);
  let l;
  const r = (p) => {
    a.clearTimeout(l);
    const h = In(e), v = p.composedPath();
    !h || h === p.target || v.includes(h) || !d.value || c && c.length > 0 && c.some((s) => {
      const i = In(s);
      return i && (p.target === i || v.includes(i));
    }) || n(p);
  }, m = [
    Vn(a, "click", r, { passive: !0, capture: t }),
    Vn(a, "pointerdown", (p) => {
      const h = In(e);
      d.value = !!h && !p.composedPath().includes(h);
    }, { passive: !0 }),
    Vn(a, "pointerup", (p) => {
      if (p.button === 0) {
        const h = p.composedPath();
        p.composedPath = () => h, l = a.setTimeout(() => r(p), 50);
      }
    }, { passive: !0 })
  ];
  return () => m.forEach((p) => p());
}
const ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ta = "__vueuse_ssr_handlers__";
ca[ta] = ca[ta] || {};
ca[ta];
var oc = Object.getOwnPropertySymbols, Cm = Object.prototype.hasOwnProperty, $m = Object.prototype.propertyIsEnumerable, _m = (e, n) => {
  var o = {};
  for (var a in e)
    Cm.call(e, a) && n.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && oc)
    for (var a of oc(e))
      n.indexOf(a) < 0 && $m.call(e, a) && (o[a] = e[a]);
  return o;
};
function ko(e, n, o = {}) {
  const a = o, { window: c = sa } = a, t = _m(a, ["window"]);
  let d;
  const l = c && "ResizeObserver" in c, r = () => {
    d && (d.disconnect(), d = void 0);
  }, m = K(() => In(e), (p) => {
    r(), l && c && p && (d = new ResizeObserver(n), d.observe(p, t));
  }, { immediate: !0, flush: "post" }), f = () => {
    r(), m();
  };
  return ia(f), {
    isSupported: l,
    stop: f
  };
}
var ac;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ac || (ac = {}));
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const uo = () => {
}, Pm = Object.prototype.hasOwnProperty, cc = (e, n) => Pm.call(e, n), Am = Array.isArray, Eo = (e) => typeof e == "function", Kn = (e) => typeof e == "string", wn = (e) => e !== null && typeof e == "object", Im = Object.prototype.toString, Lm = (e) => Im.call(e), Wo = (e) => Lm(e).slice(8, -1), da = (e) => e === void 0, fo = (e) => typeof Element > "u" ? !1 : e instanceof Element, Mm = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class Uc extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function km(e, n) {
  throw new Uc(`[${e}] ${n}`);
}
function Pe(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const o = Kn(e) ? new Uc(`[${e}] ${n}`) : e;
    console.warn(o);
  }
}
const Rm = "utils/dom/style";
function ra(e, n = "px") {
  if (!e)
    return "";
  if (Kn(e))
    return e;
  if (gn(e))
    return `${e}${n}`;
  Pe(Rm, "binding value must be a string or number");
}
function Nm(e, n) {
  if (!me)
    return;
  if (!n) {
    e.scrollTop = 0;
    return;
  }
  const o = [];
  let a = n.offsetParent;
  for (; a !== null && e !== a && e.contains(a); )
    o.push(a), a = a.offsetParent;
  const c = n.offsetTop + o.reduce((r, m) => r + m.offsetTop, 0), t = c + n.offsetHeight, d = e.scrollTop, l = d + e.clientHeight;
  c < d ? e.scrollTop = c : t > l && (e.scrollTop = t - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.6 */
var Bn = (e, n) => {
  let o = e.__vccOpts || e;
  for (let [a, c] of n)
    o[a] = c;
  return o;
}, Bm = {
  name: "ArrowUp"
}, zm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Dm = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Fm = [
  Dm
];
function jm(e, n, o, a, c, t) {
  return $(), z("svg", zm, Fm);
}
var xm = /* @__PURE__ */ Bn(Bm, [["render", jm], ["__file", "arrow-up.vue"]]), Hm = {
  name: "CircleCheck"
}, Vm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Km = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Wm = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), qm = [
  Km,
  Wm
];
function Um(e, n, o, a, c, t) {
  return $(), z("svg", Vm, qm);
}
var Gm = /* @__PURE__ */ Bn(Hm, [["render", Um], ["__file", "circle-check.vue"]]), Ym = {
  name: "CircleClose"
}, Xm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Jm = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Zm = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Qm = [
  Jm,
  Zm
];
function ei(e, n, o, a, c, t) {
  return $(), z("svg", Xm, Qm);
}
var ua = /* @__PURE__ */ Bn(Ym, [["render", ei], ["__file", "circle-close.vue"]]), ni = {
  name: "Close"
}, oi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ai = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), ci = [
  ai
];
function ti(e, n, o, a, c, t) {
  return $(), z("svg", oi, ci);
}
var tc = /* @__PURE__ */ Bn(ni, [["render", ti], ["__file", "close.vue"]]), di = {
  name: "Hide"
}, ri = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, li = /* @__PURE__ */ G("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), mi = /* @__PURE__ */ G("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), ii = [
  li,
  mi
];
function si(e, n, o, a, c, t) {
  return $(), z("svg", ri, ii);
}
var ui = /* @__PURE__ */ Bn(di, [["render", si], ["__file", "hide.vue"]]), fi = {
  name: "Loading"
}, pi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hi = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), vi = [
  hi
];
function gi(e, n, o, a, c, t) {
  return $(), z("svg", pi, vi);
}
var yi = /* @__PURE__ */ Bn(fi, [["render", gi], ["__file", "loading.vue"]]), bi = {
  name: "View"
}, wi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Si = /* @__PURE__ */ G("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), Ei = [
  Si
];
function Oi(e, n, o, a, c, t) {
  return $(), z("svg", wi, Ei);
}
var Ti = /* @__PURE__ */ Bn(bi, [["render", Oi], ["__file", "view.vue"]]);
const Gc = "__epPropKey", oe = (e) => e, Ci = (e) => wn(e) && !!e[Gc], Ro = (e, n) => {
  if (!wn(e) || Ci(e))
    return e;
  const { values: o, required: a, default: c, type: t, validator: d } = e, r = {
    type: t,
    required: !!a,
    validator: o || d ? (m) => {
      let f = !1, p = [];
      if (o && (p = Array.from(o), cc(e, "default") && p.push(c), f || (f = p.includes(m))), d && (f || (f = d(m))), !f && p.length > 0) {
        const h = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        Pt(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(m)}.`);
      }
      return f;
    } : void 0,
    [Gc]: !0
  };
  return cc(e, "default") && (r.default = c), r;
}, pe = (e) => qc(Object.entries(e).map(([n, o]) => [
  n,
  Ro(o, n)
])), dc = oe([
  String,
  Object,
  Function
]), $i = {
  validating: yi,
  success: Gm,
  error: ua
}, zn = (e, n) => {
  if (e.install = (o) => {
    for (const a of [e, ...Object.values(n != null ? n : {})])
      o.component(a.name, a);
  }, n)
    for (const [o, a] of Object.entries(n))
      e[o] = a;
  return e;
}, Yc = (e) => (e.install = uo, e), po = {
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
}, xe = "update:modelValue", Xc = "change", fa = ["", "default", "small", "large"], _i = {
  large: 40,
  default: 32,
  small: 24
}, Pi = (e) => _i[e || "default"], Ai = (e) => ["", ...fa].includes(e), Jc = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), Ii = () => Math.floor(Math.random() * 1e4), Li = (e) => e, Mi = ["class", "style"], ki = /^on[A-Z]/, Ri = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: o } = e, a = T(() => ((o == null ? void 0 : o.value) || []).concat(Mi)), c = Sn();
  return c ? T(() => {
    var t;
    return qc(Object.entries((t = c.proxy) == null ? void 0 : t.$attrs).filter(([d]) => !a.value.includes(d) && !(n && ki.test(d))));
  }) : (Pe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), T(() => ({})));
}, Ni = Symbol(), No = Symbol("formContextKey"), ho = Symbol("formItemContextKey"), Zc = Symbol("scrollbarContextKey"), pa = Symbol("popper"), Qc = Symbol("popperContent"), et = (e) => {
  const n = Sn();
  return T(() => {
    var o, a;
    return (a = ((o = n.proxy) == null ? void 0 : o.$props)[e]) != null ? a : void 0;
  });
}, rc = P();
function Bo(e, n = void 0) {
  const o = Sn() ? ae(Ni, rc) : rc;
  return e ? T(() => {
    var a, c;
    return (c = (a = o.value) == null ? void 0 : a[e]) != null ? c : n;
  }) : o;
}
const Bi = Ro({
  type: String,
  values: fa,
  required: !1
}), ha = (e, n = {}) => {
  const o = P(void 0), a = n.prop ? o : et("size"), c = n.global ? o : Bo("size"), t = n.form ? { size: void 0 } : ae(No, void 0), d = n.formItem ? { size: void 0 } : ae(ho, void 0);
  return T(() => a.value || u(e) || (d == null ? void 0 : d.size) || (t == null ? void 0 : t.size) || c.value || "");
}, zi = (e) => {
  const n = et("disabled"), o = ae(No, void 0);
  return T(() => n.value || u(e) || (o == null ? void 0 : o.disabled) || !1);
}, Di = (e) => ({
  focus: () => {
    var n, o;
    (o = (n = e.value) == null ? void 0 : n.focus) == null || o.call(n);
  }
}), lc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Fi = Symbol("elIdInjection"), nt = (e) => {
  const n = ae(Fi, lc);
  return !me && n === lc && Pe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`), T(() => u(e) || `el-id-${n.prefix}-${n.current++}`);
}, ji = () => {
  const e = ae(No, void 0), n = ae(ho, void 0);
  return {
    form: e,
    formItem: n
  };
}, xi = (e, {
  formItemContext: n,
  disableIdGeneration: o,
  disableIdManagement: a
}) => {
  o || (o = P(!1)), a || (a = P(!1));
  const c = P();
  let t;
  const d = T(() => {
    var l;
    return !!(!e.label && n && n.inputIds && ((l = n.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Ve(() => {
    t = K([Mn(e, "id"), o], ([l, r]) => {
      const m = l != null ? l : r ? void 0 : nt().value;
      m !== c.value && (n != null && n.removeInputId && (c.value && n.removeInputId(c.value), !(a != null && a.value) && !r && m && n.addInputId(m)), c.value = m);
    }, { immediate: !0 });
  }), At(() => {
    t && t(), n != null && n.removeInputId && c.value && n.removeInputId(c.value);
  }), {
    isLabeledByFormItem: d,
    inputId: c
  };
};
var Hi = {
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
const Vi = (e) => (n, o) => Ki(n, o, u(e)), Ki = (e, n, o) => Me(o, e, e).replace(/\{(\w+)\}/g, (a, c) => {
  var t;
  return `${(t = n == null ? void 0 : n[c]) != null ? t : `{${c}}`}`;
}), Wi = (e) => {
  const n = T(() => u(e).name), o = It(e) ? e : P(e);
  return {
    lang: n,
    locale: o,
    t: Vi(e)
  };
}, va = () => {
  const e = Bo("locale");
  return Wi(T(() => e.value || Hi));
}, qi = Ro({
  type: oe(Boolean),
  default: null
}), Ui = Ro({
  type: oe(Function)
}), Gi = (e) => {
  const n = `update:${e}`, o = `onUpdate:${e}`, a = [n], c = {
    [e]: qi,
    [o]: Ui
  };
  return {
    useModelToggle: ({
      indicator: d,
      toggleReason: l,
      shouldHideWhenRouteChanges: r,
      shouldProceed: m,
      onShow: f,
      onHide: p
    }) => {
      const h = Sn(), { emit: v } = h, s = h.props, i = T(() => Eo(s[o])), y = T(() => s[e] === null), w = (E) => {
        d.value !== !0 && (d.value = !0, l && (l.value = E), Eo(f) && f(E));
      }, C = (E) => {
        d.value !== !1 && (d.value = !1, l && (l.value = E), Eo(p) && p(E));
      }, L = (E) => {
        if (s.disabled === !0 || Eo(m) && !m())
          return;
        const A = i.value && me;
        A && v(n, !0), (y.value || !A) && w(E);
      }, I = (E) => {
        if (s.disabled === !0 || !me)
          return;
        const A = i.value && me;
        A && v(n, !1), (y.value || !A) && C(E);
      }, _ = (E) => {
        !aa(E) || (s.disabled && E ? i.value && v(n, !1) : d.value !== E && (E ? w() : C()));
      }, b = () => {
        d.value ? I() : L();
      };
      return K(() => s[e], _), r && h.appContext.config.globalProperties.$route !== void 0 && K(() => ({
        ...h.proxy.$route
      }), () => {
        r.value && d.value && I();
      }), Ve(() => {
        _(s[e]);
      }), {
        hide: I,
        show: L,
        toggle: b
      };
    },
    useModelToggleProps: c,
    useModelToggleEmits: a
  };
};
function Yi() {
  let e;
  const n = (a, c) => {
    o(), e = window.setTimeout(a, c);
  }, o = () => window.clearTimeout(e);
  return ia(() => o()), {
    registerTimeout: n,
    cancelTimeout: o
  };
}
let Fn = [];
const Xi = (e) => {
  const n = (o) => {
    const a = o;
    a.key === po.esc && Fn.forEach((c) => c(a));
  };
  Ve(() => {
    Fn.length === 0 && document.addEventListener("keydown", n), me && Fn.push(e);
  }), En(() => {
    Fn = Fn.filter((o) => o !== e), Fn.length === 0 && me && document.removeEventListener("keydown", n);
  });
};
let mc;
const ot = `el-popper-container-${Ii()}`, at = `#${ot}`, Ji = () => {
  const e = document.createElement("div");
  return e.id = ot, document.body.appendChild(e), e;
}, Zi = () => {
  Lt(() => {
    !me || (process.env.NODE_ENV === "test" || !mc || !document.body.querySelector(at)) && (mc = Ji());
  });
}, Qi = pe({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), e0 = ({
  showAfter: e,
  hideAfter: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: c } = Yi();
  return {
    onOpen: (l) => {
      c(() => {
        o(l);
      }, u(e));
    },
    onClose: (l) => {
      c(() => {
        a(l);
      }, u(n));
    }
  };
}, ct = Symbol("elForwardRef"), n0 = (e) => {
  tn(ct, {
    setForwardRef: (o) => {
      e.value = o;
    }
  });
}, o0 = (e) => ({
  mounted(n) {
    e(n);
  },
  updated(n) {
    e(n);
  },
  unmounted() {
    e(null);
  }
}), a0 = "el", c0 = "is-", _n = (e, n, o, a, c) => {
  let t = `${e}-${n}`;
  return o && (t += `-${o}`), a && (t += `__${a}`), c && (t += `--${c}`), t;
}, fe = (e) => {
  const n = Bo("namespace"), o = T(() => n.value || a0);
  return {
    namespace: o,
    b: (i = "") => _n(u(o), e, i, "", ""),
    e: (i) => i ? _n(u(o), e, "", i, "") : "",
    m: (i) => i ? _n(u(o), e, "", "", i) : "",
    be: (i, y) => i && y ? _n(u(o), e, i, y, "") : "",
    em: (i, y) => i && y ? _n(u(o), e, "", i, y) : "",
    bm: (i, y) => i && y ? _n(u(o), e, i, "", y) : "",
    bem: (i, y, w) => i && y && w ? _n(u(o), e, i, y, w) : "",
    is: (i, ...y) => {
      const w = y.length >= 1 ? y[0] : !0;
      return i && w ? `${c0}${i}` : "";
    },
    cssVar: (i) => {
      const y = {};
      for (const w in i)
        y[`--${o.value}-${w}`] = i[w];
      return y;
    },
    cssVarName: (i) => `--${o.value}-${i}`,
    cssVarBlock: (i) => {
      const y = {};
      for (const w in i)
        y[`--${o.value}-${e}-${w}`] = i[w];
      return y;
    },
    cssVarBlockName: (i) => `--${o.value}-${e}-${i}`
  };
}, ic = P(0), t0 = () => {
  const e = Bo("zIndex", 2e3), n = T(() => e.value + ic.value);
  return {
    initialZIndex: e,
    currentZIndex: n,
    nextZIndex: () => (ic.value++, n.value)
  };
};
function d0(e) {
  const n = P();
  function o() {
    if (e.value == null)
      return;
    const { selectionStart: c, selectionEnd: t, value: d } = e.value;
    if (c == null || t == null)
      return;
    const l = d.slice(0, Math.max(0, c)), r = d.slice(Math.max(0, t));
    n.value = {
      selectionStart: c,
      selectionEnd: t,
      value: d,
      beforeTxt: l,
      afterTxt: r
    };
  }
  function a() {
    if (e.value == null || n.value == null)
      return;
    const { value: c } = e.value, { beforeTxt: t, afterTxt: d, selectionStart: l } = n.value;
    if (t == null || d == null || l == null)
      return;
    let r = c.length;
    if (c.endsWith(d))
      r = c.length - d.length;
    else if (c.startsWith(t))
      r = t.length;
    else {
      const m = t[l - 1], f = c.indexOf(m, l - 1);
      f !== -1 && (r = f + 1);
    }
    e.value.setSelectionRange(r, r);
  }
  return [o, a];
}
var ie = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [a, c] of n)
    o[a] = c;
  return o;
};
const r0 = pe({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), l0 = {
  name: "ElIcon",
  inheritAttrs: !1
}, m0 = /* @__PURE__ */ ce({
  ...l0,
  props: r0,
  setup(e) {
    const n = e, o = fe("icon"), a = T(() => !n.size && !n.color ? {} : {
      fontSize: da(n.size) ? void 0 : ra(n.size),
      "--color": n.color
    });
    return (c, t) => ($(), z("i", Hn({
      class: u(o).b(),
      style: u(a)
    }, c.$attrs), [
      ne(c.$slots, "default")
    ], 16));
  }
});
var i0 = /* @__PURE__ */ ie(m0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const vn = zn(i0);
let Fe;
const s0 = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, u0 = [
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
function f0(e) {
  const n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing"), a = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), c = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: u0.map((d) => `${d}:${n.getPropertyValue(d)}`).join(";"), paddingSize: a, borderSize: c, boxSizing: o };
}
function sc(e, n = 1, o) {
  var a;
  Fe || (Fe = document.createElement("textarea"), document.body.appendChild(Fe));
  const { paddingSize: c, borderSize: t, boxSizing: d, contextStyle: l } = f0(e);
  Fe.setAttribute("style", `${l};${s0}`), Fe.value = e.value || e.placeholder || "";
  let r = Fe.scrollHeight;
  const m = {};
  d === "border-box" ? r = r + t : d === "content-box" && (r = r - c), Fe.value = "";
  const f = Fe.scrollHeight - c;
  if (gn(n)) {
    let p = f * n;
    d === "border-box" && (p = p + c + t), r = Math.max(p, r), m.minHeight = `${p}px`;
  }
  if (gn(o)) {
    let p = f * o;
    d === "border-box" && (p = p + c + t), r = Math.min(p, r);
  }
  return m.height = `${r}px`, (a = Fe.parentNode) == null || a.removeChild(Fe), Fe = void 0, m;
}
const p0 = pe({
  id: {
    type: String,
    default: void 0
  },
  size: Bi,
  disabled: Boolean,
  modelValue: {
    type: oe([
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
    type: oe([Boolean, Object]),
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
    type: dc,
    default: ""
  },
  prefixIcon: {
    type: dc,
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
    type: oe([Object, Array, String]),
    default: () => Li({})
  }
}), h0 = {
  [xe]: (e) => Kn(e),
  input: (e) => Kn(e),
  change: (e) => Kn(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, v0 = ["role"], g0 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], y0 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], b0 = {
  name: "ElInput",
  inheritAttrs: !1
}, w0 = /* @__PURE__ */ ce({
  ...b0,
  props: p0,
  emits: h0,
  setup(e, { expose: n, emit: o }) {
    const a = e, c = {
      suffix: "append",
      prefix: "prepend"
    }, t = Sn(), d = Mt(), l = kt(), r = T(() => {
      const S = {};
      return a.containerRole === "combobox" && (S["aria-haspopup"] = d["aria-haspopup"], S["aria-owns"] = d["aria-owns"], S["aria-expanded"] = d["aria-expanded"]), S;
    }), m = Ri({
      excludeKeys: T(() => Object.keys(r.value))
    }), { form: f, formItem: p } = ji(), { inputId: h } = xi(a, {
      formItemContext: p
    }), v = ha(), s = zi(), i = fe("input"), y = fe("textarea"), w = ao(), C = ao(), L = P(!1), I = P(!1), _ = P(!1), b = P(!1), E = P(), A = ao(a.inputStyle), R = T(() => w.value || C.value), F = T(() => {
      var S;
      return (S = f == null ? void 0 : f.statusIcon) != null ? S : !1;
    }), j = T(() => (p == null ? void 0 : p.validateState) || ""), Z = T(() => j.value && $i[j.value]), Y = T(() => b.value ? Ti : ui), k = T(() => [
      d.style,
      a.inputStyle
    ]), D = T(() => [
      a.inputStyle,
      A.value,
      { resize: a.resize }
    ]), B = T(() => Mo(a.modelValue) ? "" : String(a.modelValue)), q = T(() => a.clearable && !s.value && !a.readonly && !!B.value && (L.value || I.value)), te = T(() => a.showPassword && !s.value && !a.readonly && !!B.value && (!!B.value || L.value)), Q = T(() => a.showWordLimit && !!m.value.maxlength && (a.type === "text" || a.type === "textarea") && !s.value && !a.readonly && !a.showPassword), he = T(() => Array.from(B.value).length), Ae = T(() => !!Q.value && he.value > Number(m.value.maxlength)), ve = T(() => !!l.suffix || !!a.suffixIcon || q.value || a.showPassword || Q.value || !!j.value && F.value), [we, Se] = d0(w);
    ko(C, (S) => {
      if (!Q.value || a.resize !== "both")
        return;
      const x = S[0], { width: ue } = x.contentRect;
      E.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const ee = () => {
      const { type: S, autosize: x } = a;
      if (!(!me || S !== "textarea"))
        if (x) {
          const ue = wn(x) ? x.minRows : void 0, re = wn(x) ? x.maxRows : void 0;
          A.value = {
            ...sc(C.value, ue, re)
          };
        } else
          A.value = {
            minHeight: sc(C.value).minHeight
          };
    }, Ee = () => {
      const S = R.value;
      !S || S.value === B.value || (S.value = B.value);
    }, Ie = (S) => {
      const { el: x } = t.vnode;
      if (!x)
        return;
      const re = Array.from(x.querySelectorAll(`.${i.e(S)}`)).find((Dn) => Dn.parentNode === x);
      if (!re)
        return;
      const nn = c[S];
      l[nn] ? re.style.transform = `translateX(${S === "suffix" ? "-" : ""}${x.querySelector(`.${i.be("group", nn)}`).offsetWidth}px)` : re.removeAttribute("style");
    }, de = () => {
      Ie("prefix"), Ie("suffix");
    }, We = async (S) => {
      we();
      let { value: x } = S.target;
      a.formatter && (x = a.parser ? a.parser(x) : x, x = a.formatter(x)), !_.value && x !== B.value && (o(xe, x), o("input", x), await J(), Ee(), Se());
    }, qe = (S) => {
      o("change", S.target.value);
    }, Ue = (S) => {
      o("compositionstart", S), _.value = !0;
    }, Oe = (S) => {
      var x;
      o("compositionupdate", S);
      const ue = (x = S.target) == null ? void 0 : x.value, re = ue[ue.length - 1] || "";
      _.value = !Jc(re);
    }, Ze = (S) => {
      o("compositionend", S), _.value && (_.value = !1, We(S));
    }, Tn = () => {
      b.value = !b.value, mn();
    }, mn = async () => {
      var S;
      await J(), (S = R.value) == null || S.focus();
    }, Ge = () => {
      var S;
      return (S = R.value) == null ? void 0 : S.blur();
    }, Be = (S) => {
      L.value = !0, o("focus", S);
    }, Qe = (S) => {
      var x;
      L.value = !1, o("blur", S), a.validateEvent && ((x = p == null ? void 0 : p.validate) == null || x.call(p, "blur").catch((ue) => Pe(ue)));
    }, Cn = (S) => {
      I.value = !1, o("mouseleave", S);
    }, ge = (S) => {
      I.value = !0, o("mouseenter", S);
    }, ze = (S) => {
      o("keydown", S);
    }, sn = () => {
      var S;
      (S = R.value) == null || S.select();
    }, en = () => {
      o(xe, ""), o("change", ""), o("clear"), o("input", "");
    };
    return K(() => a.modelValue, () => {
      var S;
      J(() => ee()), a.validateEvent && ((S = p == null ? void 0 : p.validate) == null || S.call(p, "change").catch((x) => Pe(x)));
    }), K(B, () => Ee()), K(() => a.type, async () => {
      await J(), Ee(), ee(), de();
    }), Ve(async () => {
      !a.formatter && a.parser && Pe("ElInput", "If you set the parser, you also need to set the formatter."), Ee(), de(), await J(), ee();
    }), Mc(async () => {
      await J(), de();
    }), n({
      input: w,
      textarea: C,
      ref: R,
      textareaStyle: D,
      autosize: Mn(a, "autosize"),
      focus: mn,
      blur: Ge,
      select: sn,
      clear: en,
      resizeTextarea: ee
    }), (S, x) => cn(($(), z("div", Hn(u(r), {
      class: [
        S.type === "textarea" ? u(y).b() : u(i).b(),
        u(i).m(u(v)),
        u(i).is("disabled", u(s)),
        u(i).is("exceed", u(Ae)),
        {
          [u(i).b("group")]: S.$slots.prepend || S.$slots.append,
          [u(i).bm("group", "append")]: S.$slots.append,
          [u(i).bm("group", "prepend")]: S.$slots.prepend,
          [u(i).m("prefix")]: S.$slots.prefix || S.prefixIcon,
          [u(i).m("suffix")]: S.$slots.suffix || S.suffixIcon || S.clearable || S.showPassword,
          [u(i).bm("suffix", "password-clear")]: u(q) && u(te)
        },
        S.$attrs.class
      ],
      style: u(k),
      role: S.containerRole,
      onMouseenter: ge,
      onMouseleave: Cn
    }), [
      V(" input "),
      S.type !== "textarea" ? ($(), z(He, { key: 0 }, [
        V(" prepend slot "),
        S.$slots.prepend ? ($(), z("div", {
          key: 0,
          class: M(u(i).be("group", "prepend"))
        }, [
          ne(S.$slots, "prepend")
        ], 2)) : V("v-if", !0),
        G("div", {
          class: M([u(i).e("wrapper"), u(i).is("focus", L.value)])
        }, [
          V(" prefix slot "),
          S.$slots.prefix || S.prefixIcon ? ($(), z("span", {
            key: 0,
            class: M(u(i).e("prefix"))
          }, [
            G("span", {
              class: M(u(i).e("prefix-inner"))
            }, [
              ne(S.$slots, "prefix"),
              S.prefixIcon ? ($(), U(u(vn), {
                key: 0,
                class: M(u(i).e("icon"))
              }, {
                default: W(() => [
                  ($(), U(An(S.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0),
          G("input", Hn({
            id: u(h),
            ref_key: "input",
            ref: w,
            class: u(i).e("inner")
          }, u(m), {
            type: S.showPassword ? b.value ? "text" : "password" : S.type,
            disabled: u(s),
            formatter: S.formatter,
            parser: S.parser,
            readonly: S.readonly,
            autocomplete: S.autocomplete,
            tabindex: S.tabindex,
            "aria-label": S.label,
            placeholder: S.placeholder,
            style: S.inputStyle,
            onCompositionstart: Ue,
            onCompositionupdate: Oe,
            onCompositionend: Ze,
            onInput: We,
            onFocus: Be,
            onBlur: Qe,
            onChange: qe,
            onKeydown: ze
          }), null, 16, g0),
          V(" suffix slot "),
          u(ve) ? ($(), z("span", {
            key: 1,
            class: M(u(i).e("suffix"))
          }, [
            G("span", {
              class: M(u(i).e("suffix-inner"))
            }, [
              !u(q) || !u(te) || !u(Q) ? ($(), z(He, { key: 0 }, [
                ne(S.$slots, "suffix"),
                S.suffixIcon ? ($(), U(u(vn), {
                  key: 0,
                  class: M(u(i).e("icon"))
                }, {
                  default: W(() => [
                    ($(), U(An(S.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : V("v-if", !0)
              ], 64)) : V("v-if", !0),
              u(q) ? ($(), U(u(vn), {
                key: 1,
                class: M([u(i).e("icon"), u(i).e("clear")]),
                onMousedown: je(u(uo), ["prevent"]),
                onClick: en
              }, {
                default: W(() => [
                  le(u(ua))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : V("v-if", !0),
              u(te) ? ($(), U(u(vn), {
                key: 2,
                class: M([u(i).e("icon"), u(i).e("password")]),
                onClick: Tn
              }, {
                default: W(() => [
                  ($(), U(An(u(Y))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0),
              u(Q) ? ($(), z("span", {
                key: 3,
                class: M(u(i).e("count"))
              }, [
                G("span", {
                  class: M(u(i).e("count-inner"))
                }, $e(u(he)) + " / " + $e(u(m).maxlength), 3)
              ], 2)) : V("v-if", !0),
              u(j) && u(Z) && u(F) ? ($(), U(u(vn), {
                key: 4,
                class: M([
                  u(i).e("icon"),
                  u(i).e("validateIcon"),
                  u(i).is("loading", u(j) === "validating")
                ])
              }, {
                default: W(() => [
                  ($(), U(An(u(Z))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0)
        ], 2),
        V(" append slot "),
        S.$slots.append ? ($(), z("div", {
          key: 1,
          class: M(u(i).be("group", "append"))
        }, [
          ne(S.$slots, "append")
        ], 2)) : V("v-if", !0)
      ], 64)) : ($(), z(He, { key: 1 }, [
        V(" textarea "),
        G("textarea", Hn({
          id: u(h),
          ref_key: "textarea",
          ref: C,
          class: u(y).e("inner")
        }, u(m), {
          tabindex: S.tabindex,
          disabled: u(s),
          readonly: S.readonly,
          autocomplete: S.autocomplete,
          style: u(D),
          "aria-label": S.label,
          placeholder: S.placeholder,
          onCompositionstart: Ue,
          onCompositionupdate: Oe,
          onCompositionend: Ze,
          onInput: We,
          onFocus: Be,
          onBlur: Qe,
          onChange: qe,
          onKeydown: ze
        }), null, 16, y0),
        u(Q) ? ($(), z("span", {
          key: 0,
          style: _e(E.value),
          class: M(u(i).e("count"))
        }, $e(u(he)) + " / " + $e(u(m).maxlength), 7)) : V("v-if", !0)
      ], 64))
    ], 16, v0)), [
      [Jn, S.type !== "hidden"]
    ]);
  }
});
var S0 = /* @__PURE__ */ ie(w0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const E0 = zn(S0), xn = 4, O0 = {
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
}, T0 = ({
  move: e,
  size: n,
  bar: o
}) => ({
  [o.size]: n,
  transform: `translate${o.axis}(${e}%)`
}), C0 = pe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), $0 = /* @__PURE__ */ ce({
  __name: "thumb",
  props: C0,
  setup(e) {
    const n = e, o = "Thumb", a = ae(Zc), c = fe("scrollbar");
    a || km(o, "can not inject scrollbar context");
    const t = P(), d = P(), l = P({}), r = P(!1);
    let m = !1, f = !1, p = me ? document.onselectstart : null;
    const h = T(() => O0[n.vertical ? "vertical" : "horizontal"]), v = T(() => T0({
      size: n.size,
      move: n.move,
      bar: h.value
    })), s = T(() => t.value[h.value.offset] ** 2 / a.wrapElement[h.value.scrollSize] / n.ratio / d.value[h.value.offset]), i = (E) => {
      var A;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (A = window.getSelection()) == null || A.removeAllRanges(), w(E);
      const R = E.currentTarget;
      !R || (l.value[h.value.axis] = R[h.value.offset] - (E[h.value.client] - R.getBoundingClientRect()[h.value.direction]));
    }, y = (E) => {
      if (!d.value || !t.value || !a.wrapElement)
        return;
      const A = Math.abs(E.target.getBoundingClientRect()[h.value.direction] - E[h.value.client]), R = d.value[h.value.offset] / 2, F = (A - R) * 100 * s.value / t.value[h.value.offset];
      a.wrapElement[h.value.scroll] = F * a.wrapElement[h.value.scrollSize] / 100;
    }, w = (E) => {
      E.stopImmediatePropagation(), m = !0, document.addEventListener("mousemove", C), document.addEventListener("mouseup", L), p = document.onselectstart, document.onselectstart = () => !1;
    }, C = (E) => {
      if (!t.value || !d.value || m === !1)
        return;
      const A = l.value[h.value.axis];
      if (!A)
        return;
      const R = (t.value.getBoundingClientRect()[h.value.direction] - E[h.value.client]) * -1, F = d.value[h.value.offset] - A, j = (R - F) * 100 * s.value / t.value[h.value.offset];
      a.wrapElement[h.value.scroll] = j * a.wrapElement[h.value.scrollSize] / 100;
    }, L = () => {
      m = !1, l.value[h.value.axis] = 0, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", L), b(), f && (r.value = !1);
    }, I = () => {
      f = !1, r.value = !!n.size;
    }, _ = () => {
      f = !0, r.value = m;
    };
    En(() => {
      b(), document.removeEventListener("mouseup", L);
    });
    const b = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return Vn(Mn(a, "scrollbarElement"), "mousemove", I), Vn(Mn(a, "scrollbarElement"), "mouseleave", _), (E, A) => ($(), U(_o, {
      name: u(c).b("fade"),
      persisted: ""
    }, {
      default: W(() => [
        cn(G("div", {
          ref_key: "instance",
          ref: t,
          class: M([u(c).e("bar"), u(c).is(u(h).key)]),
          onMousedown: y
        }, [
          G("div", {
            ref_key: "thumb",
            ref: d,
            class: M(u(c).e("thumb")),
            style: _e(u(v)),
            onMousedown: i
          }, null, 38)
        ], 34), [
          [Jn, E.always || r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var uc = /* @__PURE__ */ ie($0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const _0 = pe({
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
}), P0 = /* @__PURE__ */ ce({
  __name: "bar",
  props: _0,
  setup(e, { expose: n }) {
    const o = e, a = P(0), c = P(0);
    return n({
      handleScroll: (d) => {
        if (d) {
          const l = d.offsetHeight - xn, r = d.offsetWidth - xn;
          c.value = d.scrollTop * 100 / l * o.ratioY, a.value = d.scrollLeft * 100 / r * o.ratioX;
        }
      }
    }), (d, l) => ($(), z(He, null, [
      le(uc, {
        move: a.value,
        ratio: d.ratioX,
        size: d.width,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      le(uc, {
        move: c.value,
        ratio: d.ratioY,
        size: d.height,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var A0 = /* @__PURE__ */ ie(P0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const I0 = pe({
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
    type: oe([String, Object, Array]),
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
}), L0 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: n
  }) => [e, n].every(gn)
}, M0 = {
  name: "ElScrollbar"
}, k0 = /* @__PURE__ */ ce({
  ...M0,
  props: I0,
  emits: L0,
  setup(e, { expose: n, emit: o }) {
    const a = e, c = fe("scrollbar");
    let t, d;
    const l = P(), r = P(), m = P(), f = P("0"), p = P("0"), h = P(), v = P(1), s = P(1), i = "ElScrollbar", y = T(() => {
      const b = {};
      return a.height && (b.height = ra(a.height)), a.maxHeight && (b.maxHeight = ra(a.maxHeight)), [a.wrapStyle, b];
    }), w = () => {
      var b;
      r.value && ((b = h.value) == null || b.handleScroll(r.value), o("scroll", {
        scrollTop: r.value.scrollTop,
        scrollLeft: r.value.scrollLeft
      }));
    };
    function C(b, E) {
      wn(b) ? r.value.scrollTo(b) : gn(b) && gn(E) && r.value.scrollTo(b, E);
    }
    const L = (b) => {
      if (!gn(b)) {
        Pe(i, "value must be a number");
        return;
      }
      r.value.scrollTop = b;
    }, I = (b) => {
      if (!gn(b)) {
        Pe(i, "value must be a number");
        return;
      }
      r.value.scrollLeft = b;
    }, _ = () => {
      if (!r.value)
        return;
      const b = r.value.offsetHeight - xn, E = r.value.offsetWidth - xn, A = b ** 2 / r.value.scrollHeight, R = E ** 2 / r.value.scrollWidth, F = Math.max(A, a.minSize), j = Math.max(R, a.minSize);
      v.value = A / (b - A) / (F / (b - F)), s.value = R / (E - R) / (j / (E - j)), p.value = F + xn < b ? `${F}px` : "", f.value = j + xn < E ? `${j}px` : "";
    };
    return K(() => a.noresize, (b) => {
      b ? (t == null || t(), d == null || d()) : ({ stop: t } = ko(m, _), d = Vn("resize", _));
    }, { immediate: !0 }), K(() => [a.maxHeight, a.height], () => {
      a.native || J(() => {
        var b;
        _(), r.value && ((b = h.value) == null || b.handleScroll(r.value));
      });
    }), tn(Zc, yo({
      scrollbarElement: l,
      wrapElement: r
    })), Ve(() => {
      a.native || J(() => _());
    }), Mc(() => _()), n({
      wrap$: r,
      update: _,
      scrollTo: C,
      setScrollTop: L,
      setScrollLeft: I,
      handleScroll: w
    }), (b, E) => ($(), z("div", {
      ref_key: "scrollbar$",
      ref: l,
      class: M(u(c).b())
    }, [
      G("div", {
        ref_key: "wrap$",
        ref: r,
        class: M([
          b.wrapClass,
          u(c).e("wrap"),
          { [u(c).em("wrap", "hidden-default")]: !b.native }
        ]),
        style: _e(u(y)),
        onScroll: w
      }, [
        ($(), U(An(b.tag), {
          ref_key: "resize$",
          ref: m,
          class: M([u(c).e("view"), b.viewClass]),
          style: _e(b.viewStyle)
        }, {
          default: W(() => [
            ne(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      b.native ? V("v-if", !0) : ($(), U(A0, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        height: p.value,
        width: f.value,
        always: b.always,
        "ratio-x": s.value,
        "ratio-y": v.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var R0 = /* @__PURE__ */ ie(k0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const N0 = zn(R0), tt = pe({
  role: {
    type: String,
    default: "tooltip"
  }
}), B0 = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, z0 = /* @__PURE__ */ ce({
  ...B0,
  props: tt,
  setup(e, { expose: n }) {
    const o = e, a = P(), c = P(), t = P(), d = P(), l = T(() => o.role), r = {
      triggerRef: a,
      popperInstanceRef: c,
      contentRef: t,
      referenceRef: d,
      role: l
    };
    return n(r), tn(pa, r), (m, f) => ne(m.$slots, "default");
  }
});
var D0 = /* @__PURE__ */ ie(z0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const dt = pe({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), F0 = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, j0 = /* @__PURE__ */ ce({
  ...F0,
  props: dt,
  setup(e, { expose: n }) {
    const o = e, a = fe("popper"), { arrowOffset: c, arrowRef: t } = ae(Qc, void 0);
    return K(() => o.arrowOffset, (d) => {
      c.value = d;
    }), En(() => {
      t.value = void 0;
    }), n({
      arrowRef: t
    }), (d, l) => ($(), z("span", {
      ref_key: "arrowRef",
      ref: t,
      class: M(u(a).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var x0 = /* @__PURE__ */ ie(j0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const qo = "ElOnlyChild", H0 = ce({
  name: qo,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    var a;
    const c = ae(ct), t = o0((a = c == null ? void 0 : c.setForwardRef) != null ? a : uo);
    return () => {
      var d;
      const l = (d = n.default) == null ? void 0 : d.call(n, o);
      if (!l)
        return null;
      if (l.length > 1)
        return Pe(qo, "requires exact only one valid child."), null;
      const r = rt(l);
      return r ? cn(Rt(r, o), [[t]]) : (Pe(qo, "no valid child node found"), null);
    };
  }
});
function rt(e) {
  if (!e)
    return null;
  const n = e;
  for (const o of n) {
    if (wn(o))
      switch (o.type) {
        case Bt:
          continue;
        case Nt:
          return Uo(o);
        case "svg":
          return Uo(o);
        case He:
          return rt(o.children);
        default:
          return o;
      }
    return Uo(o);
  }
  return null;
}
function Uo(e) {
  return le("span", {
    class: "el-only-child__content"
  }, [e]);
}
const lt = pe({
  virtualRef: {
    type: oe(Object)
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
}), V0 = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, K0 = /* @__PURE__ */ ce({
  ...V0,
  props: lt,
  setup(e, { expose: n }) {
    const o = e, { role: a, triggerRef: c } = ae(pa, void 0);
    n0(c);
    const t = T(() => l.value ? o.id : void 0), d = T(() => {
      if (a && a.value === "tooltip")
        return o.open && o.id ? o.id : void 0;
    }), l = T(() => {
      if (a && a.value !== "tooltip")
        return a.value;
    }), r = T(() => l.value ? `${o.open}` : void 0);
    let m;
    return Ve(() => {
      K(() => o.virtualRef, (f) => {
        f && (c.value = In(f));
      }, {
        immediate: !0
      }), K(() => c.value, (f, p) => {
        m == null || m(), m = void 0, fo(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((h) => {
          var v;
          const s = o[h];
          s && (f.addEventListener(h.slice(2).toLowerCase(), s), (v = p == null ? void 0 : p.removeEventListener) == null || v.call(p, h.slice(2).toLowerCase(), s));
        }), m = K([t, d, l, r], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, s) => {
            Mo(h[s]) ? f.removeAttribute(v) : f.setAttribute(v, h[s]);
          });
        }, { immediate: !0 })), fo(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => p.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), En(() => {
      m == null || m(), m = void 0;
    }), n({
      triggerRef: c
    }), (f, p) => f.virtualTriggering ? V("v-if", !0) : ($(), U(u(H0), Hn({ key: 0 }, f.$attrs, {
      "aria-controls": u(t),
      "aria-describedby": u(d),
      "aria-expanded": u(r),
      "aria-haspopup": u(l)
    }), {
      default: W(() => [
        ne(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var W0 = /* @__PURE__ */ ie(K0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), ye = "top", Re = "bottom", Ne = "right", be = "left", ga = "auto", bo = [ye, Re, Ne, be], qn = "start", vo = "end", q0 = "clippingParents", mt = "viewport", oo = "popper", U0 = "reference", fc = bo.reduce(function(e, n) {
  return e.concat([n + "-" + qn, n + "-" + vo]);
}, []), ya = [].concat(bo, [ga]).reduce(function(e, n) {
  return e.concat([n, n + "-" + qn, n + "-" + vo]);
}, []), G0 = "beforeRead", Y0 = "read", X0 = "afterRead", J0 = "beforeMain", Z0 = "main", Q0 = "afterMain", e2 = "beforeWrite", n2 = "write", o2 = "afterWrite", a2 = [G0, Y0, X0, J0, Z0, Q0, e2, n2, o2];
function Xe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ke(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Un(e) {
  var n = Ke(e).Element;
  return e instanceof n || e instanceof Element;
}
function ke(e) {
  var n = Ke(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function ba(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Ke(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function c2(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var a = n.styles[o] || {}, c = n.attributes[o] || {}, t = n.elements[o];
    !ke(t) || !Xe(t) || (Object.assign(t.style, a), Object.keys(c).forEach(function(d) {
      var l = c[d];
      l === !1 ? t.removeAttribute(d) : t.setAttribute(d, l === !0 ? "" : l);
    }));
  });
}
function t2(e) {
  var n = e.state, o = { popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var c = n.elements[a], t = n.attributes[a] || {}, d = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : o[a]), l = d.reduce(function(r, m) {
        return r[m] = "", r;
      }, {});
      !ke(c) || !Xe(c) || (Object.assign(c.style, l), Object.keys(t).forEach(function(r) {
        c.removeAttribute(r);
      }));
    });
  };
}
var it = { name: "applyStyles", enabled: !0, phase: "write", fn: c2, effect: t2, requires: ["computeStyles"] };
function Ye(e) {
  return e.split("-")[0];
}
var Ln = Math.max, $o = Math.min, Gn = Math.round;
function Yn(e, n) {
  n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, c = 1;
  if (ke(e) && n) {
    var t = e.offsetHeight, d = e.offsetWidth;
    d > 0 && (a = Gn(o.width) / d || 1), t > 0 && (c = Gn(o.height) / t || 1);
  }
  return { width: o.width / a, height: o.height / c, top: o.top / c, right: o.right / a, bottom: o.bottom / c, left: o.left / a, x: o.left / a, y: o.top / c };
}
function wa(e) {
  var n = Yn(e), o = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: a };
}
function st(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && ba(o)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function dn(e) {
  return Ke(e).getComputedStyle(e);
}
function d2(e) {
  return ["table", "td", "th"].indexOf(Xe(e)) >= 0;
}
function On(e) {
  return ((Un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zo(e) {
  return Xe(e) === "html" ? e : e.assignedSlot || e.parentNode || (ba(e) ? e.host : null) || On(e);
}
function pc(e) {
  return !ke(e) || dn(e).position === "fixed" ? null : e.offsetParent;
}
function r2(e) {
  var n = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, o = navigator.userAgent.indexOf("Trident") !== -1;
  if (o && ke(e)) {
    var a = dn(e);
    if (a.position === "fixed")
      return null;
  }
  var c = zo(e);
  for (ba(c) && (c = c.host); ke(c) && ["html", "body"].indexOf(Xe(c)) < 0; ) {
    var t = dn(c);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || n && t.willChange === "filter" || n && t.filter && t.filter !== "none")
      return c;
    c = c.parentNode;
  }
  return null;
}
function wo(e) {
  for (var n = Ke(e), o = pc(e); o && d2(o) && dn(o).position === "static"; )
    o = pc(o);
  return o && (Xe(o) === "html" || Xe(o) === "body" && dn(o).position === "static") ? n : o || r2(e) || n;
}
function Sa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ro(e, n, o) {
  return Ln(e, $o(n, o));
}
function l2(e, n, o) {
  var a = ro(e, n, o);
  return a > o ? o : a;
}
function ut() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(e) {
  return Object.assign({}, ut(), e);
}
function pt(e, n) {
  return n.reduce(function(o, a) {
    return o[a] = e, o;
  }, {});
}
var m2 = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, { placement: n.placement })) : e, ft(typeof e != "number" ? e : pt(e, bo));
};
function i2(e) {
  var n, o = e.state, a = e.name, c = e.options, t = o.elements.arrow, d = o.modifiersData.popperOffsets, l = Ye(o.placement), r = Sa(l), m = [be, Ne].indexOf(l) >= 0, f = m ? "height" : "width";
  if (!(!t || !d)) {
    var p = m2(c.padding, o), h = wa(t), v = r === "y" ? ye : be, s = r === "y" ? Re : Ne, i = o.rects.reference[f] + o.rects.reference[r] - d[r] - o.rects.popper[f], y = d[r] - o.rects.reference[r], w = wo(t), C = w ? r === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, L = i / 2 - y / 2, I = p[v], _ = C - h[f] - p[s], b = C / 2 - h[f] / 2 + L, E = ro(I, b, _), A = r;
    o.modifiersData[a] = (n = {}, n[A] = E, n.centerOffset = E - b, n);
  }
}
function s2(e) {
  var n = e.state, o = e.options, a = o.element, c = a === void 0 ? "[data-popper-arrow]" : a;
  c != null && (typeof c == "string" && (c = n.elements.popper.querySelector(c), !c) || !st(n.elements.popper, c) || (n.elements.arrow = c));
}
var u2 = { name: "arrow", enabled: !0, phase: "main", fn: i2, effect: s2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Xn(e) {
  return e.split("-")[1];
}
var f2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function p2(e) {
  var n = e.x, o = e.y, a = window, c = a.devicePixelRatio || 1;
  return { x: Gn(n * c) / c || 0, y: Gn(o * c) / c || 0 };
}
function hc(e) {
  var n, o = e.popper, a = e.popperRect, c = e.placement, t = e.variation, d = e.offsets, l = e.position, r = e.gpuAcceleration, m = e.adaptive, f = e.roundOffsets, p = e.isFixed, h = d.x, v = h === void 0 ? 0 : h, s = d.y, i = s === void 0 ? 0 : s, y = typeof f == "function" ? f({ x: v, y: i }) : { x: v, y: i };
  v = y.x, i = y.y;
  var w = d.hasOwnProperty("x"), C = d.hasOwnProperty("y"), L = be, I = ye, _ = window;
  if (m) {
    var b = wo(o), E = "clientHeight", A = "clientWidth";
    if (b === Ke(o) && (b = On(o), dn(b).position !== "static" && l === "absolute" && (E = "scrollHeight", A = "scrollWidth")), b = b, c === ye || (c === be || c === Ne) && t === vo) {
      I = Re;
      var R = p && b === _ && _.visualViewport ? _.visualViewport.height : b[E];
      i -= R - a.height, i *= r ? 1 : -1;
    }
    if (c === be || (c === ye || c === Re) && t === vo) {
      L = Ne;
      var F = p && b === _ && _.visualViewport ? _.visualViewport.width : b[A];
      v -= F - a.width, v *= r ? 1 : -1;
    }
  }
  var j = Object.assign({ position: l }, m && f2), Z = f === !0 ? p2({ x: v, y: i }) : { x: v, y: i };
  if (v = Z.x, i = Z.y, r) {
    var Y;
    return Object.assign({}, j, (Y = {}, Y[I] = C ? "0" : "", Y[L] = w ? "0" : "", Y.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + i + "px)" : "translate3d(" + v + "px, " + i + "px, 0)", Y));
  }
  return Object.assign({}, j, (n = {}, n[I] = C ? i + "px" : "", n[L] = w ? v + "px" : "", n.transform = "", n));
}
function h2(e) {
  var n = e.state, o = e.options, a = o.gpuAcceleration, c = a === void 0 ? !0 : a, t = o.adaptive, d = t === void 0 ? !0 : t, l = o.roundOffsets, r = l === void 0 ? !0 : l, m = { placement: Ye(n.placement), variation: Xn(n.placement), popper: n.elements.popper, popperRect: n.rects.popper, gpuAcceleration: c, isFixed: n.options.strategy === "fixed" };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, hc(Object.assign({}, m, { offsets: n.modifiersData.popperOffsets, position: n.options.strategy, adaptive: d, roundOffsets: r })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, hc(Object.assign({}, m, { offsets: n.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: r })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var ht = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: h2, data: {} }, Oo = { passive: !0 };
function v2(e) {
  var n = e.state, o = e.instance, a = e.options, c = a.scroll, t = c === void 0 ? !0 : c, d = a.resize, l = d === void 0 ? !0 : d, r = Ke(n.elements.popper), m = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return t && m.forEach(function(f) {
    f.addEventListener("scroll", o.update, Oo);
  }), l && r.addEventListener("resize", o.update, Oo), function() {
    t && m.forEach(function(f) {
      f.removeEventListener("scroll", o.update, Oo);
    }), l && r.removeEventListener("resize", o.update, Oo);
  };
}
var vt = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: v2, data: {} }, g2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function To(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return g2[n];
  });
}
var y2 = { start: "end", end: "start" };
function vc(e) {
  return e.replace(/start|end/g, function(n) {
    return y2[n];
  });
}
function Ea(e) {
  var n = Ke(e), o = n.pageXOffset, a = n.pageYOffset;
  return { scrollLeft: o, scrollTop: a };
}
function Oa(e) {
  return Yn(On(e)).left + Ea(e).scrollLeft;
}
function b2(e) {
  var n = Ke(e), o = On(e), a = n.visualViewport, c = o.clientWidth, t = o.clientHeight, d = 0, l = 0;
  return a && (c = a.width, t = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = a.offsetLeft, l = a.offsetTop)), { width: c, height: t, x: d + Oa(e), y: l };
}
function w2(e) {
  var n, o = On(e), a = Ea(e), c = (n = e.ownerDocument) == null ? void 0 : n.body, t = Ln(o.scrollWidth, o.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = Ln(o.scrollHeight, o.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), l = -a.scrollLeft + Oa(e), r = -a.scrollTop;
  return dn(c || o).direction === "rtl" && (l += Ln(o.clientWidth, c ? c.clientWidth : 0) - t), { width: t, height: d, x: l, y: r };
}
function Ta(e) {
  var n = dn(e), o = n.overflow, a = n.overflowX, c = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + c + a);
}
function gt(e) {
  return ["html", "body", "#document"].indexOf(Xe(e)) >= 0 ? e.ownerDocument.body : ke(e) && Ta(e) ? e : gt(zo(e));
}
function lo(e, n) {
  var o;
  n === void 0 && (n = []);
  var a = gt(e), c = a === ((o = e.ownerDocument) == null ? void 0 : o.body), t = Ke(a), d = c ? [t].concat(t.visualViewport || [], Ta(a) ? a : []) : a, l = n.concat(d);
  return c ? l : l.concat(lo(zo(d)));
}
function la(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function S2(e) {
  var n = Yn(e);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gc(e, n) {
  return n === mt ? la(b2(e)) : Un(n) ? S2(n) : la(w2(On(e)));
}
function E2(e) {
  var n = lo(zo(e)), o = ["absolute", "fixed"].indexOf(dn(e).position) >= 0, a = o && ke(e) ? wo(e) : e;
  return Un(a) ? n.filter(function(c) {
    return Un(c) && st(c, a) && Xe(c) !== "body";
  }) : [];
}
function O2(e, n, o) {
  var a = n === "clippingParents" ? E2(e) : [].concat(n), c = [].concat(a, [o]), t = c[0], d = c.reduce(function(l, r) {
    var m = gc(e, r);
    return l.top = Ln(m.top, l.top), l.right = $o(m.right, l.right), l.bottom = $o(m.bottom, l.bottom), l.left = Ln(m.left, l.left), l;
  }, gc(e, t));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function yt(e) {
  var n = e.reference, o = e.element, a = e.placement, c = a ? Ye(a) : null, t = a ? Xn(a) : null, d = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, r;
  switch (c) {
    case ye:
      r = { x: d, y: n.y - o.height };
      break;
    case Re:
      r = { x: d, y: n.y + n.height };
      break;
    case Ne:
      r = { x: n.x + n.width, y: l };
      break;
    case be:
      r = { x: n.x - o.width, y: l };
      break;
    default:
      r = { x: n.x, y: n.y };
  }
  var m = c ? Sa(c) : null;
  if (m != null) {
    var f = m === "y" ? "height" : "width";
    switch (t) {
      case qn:
        r[m] = r[m] - (n[f] / 2 - o[f] / 2);
        break;
      case vo:
        r[m] = r[m] + (n[f] / 2 - o[f] / 2);
        break;
    }
  }
  return r;
}
function go(e, n) {
  n === void 0 && (n = {});
  var o = n, a = o.placement, c = a === void 0 ? e.placement : a, t = o.boundary, d = t === void 0 ? q0 : t, l = o.rootBoundary, r = l === void 0 ? mt : l, m = o.elementContext, f = m === void 0 ? oo : m, p = o.altBoundary, h = p === void 0 ? !1 : p, v = o.padding, s = v === void 0 ? 0 : v, i = ft(typeof s != "number" ? s : pt(s, bo)), y = f === oo ? U0 : oo, w = e.rects.popper, C = e.elements[h ? y : f], L = O2(Un(C) ? C : C.contextElement || On(e.elements.popper), d, r), I = Yn(e.elements.reference), _ = yt({ reference: I, element: w, strategy: "absolute", placement: c }), b = la(Object.assign({}, w, _)), E = f === oo ? b : I, A = { top: L.top - E.top + i.top, bottom: E.bottom - L.bottom + i.bottom, left: L.left - E.left + i.left, right: E.right - L.right + i.right }, R = e.modifiersData.offset;
  if (f === oo && R) {
    var F = R[c];
    Object.keys(A).forEach(function(j) {
      var Z = [Ne, Re].indexOf(j) >= 0 ? 1 : -1, Y = [ye, Re].indexOf(j) >= 0 ? "y" : "x";
      A[j] += F[Y] * Z;
    });
  }
  return A;
}
function T2(e, n) {
  n === void 0 && (n = {});
  var o = n, a = o.placement, c = o.boundary, t = o.rootBoundary, d = o.padding, l = o.flipVariations, r = o.allowedAutoPlacements, m = r === void 0 ? ya : r, f = Xn(a), p = f ? l ? fc : fc.filter(function(s) {
    return Xn(s) === f;
  }) : bo, h = p.filter(function(s) {
    return m.indexOf(s) >= 0;
  });
  h.length === 0 && (h = p);
  var v = h.reduce(function(s, i) {
    return s[i] = go(e, { placement: i, boundary: c, rootBoundary: t, padding: d })[Ye(i)], s;
  }, {});
  return Object.keys(v).sort(function(s, i) {
    return v[s] - v[i];
  });
}
function C2(e) {
  if (Ye(e) === ga)
    return [];
  var n = To(e);
  return [vc(e), n, vc(n)];
}
function $2(e) {
  var n = e.state, o = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var c = o.mainAxis, t = c === void 0 ? !0 : c, d = o.altAxis, l = d === void 0 ? !0 : d, r = o.fallbackPlacements, m = o.padding, f = o.boundary, p = o.rootBoundary, h = o.altBoundary, v = o.flipVariations, s = v === void 0 ? !0 : v, i = o.allowedAutoPlacements, y = n.options.placement, w = Ye(y), C = w === y, L = r || (C || !s ? [To(y)] : C2(y)), I = [y].concat(L).reduce(function(Se, ee) {
      return Se.concat(Ye(ee) === ga ? T2(n, { placement: ee, boundary: f, rootBoundary: p, padding: m, flipVariations: s, allowedAutoPlacements: i }) : ee);
    }, []), _ = n.rects.reference, b = n.rects.popper, E = /* @__PURE__ */ new Map(), A = !0, R = I[0], F = 0; F < I.length; F++) {
      var j = I[F], Z = Ye(j), Y = Xn(j) === qn, k = [ye, Re].indexOf(Z) >= 0, D = k ? "width" : "height", B = go(n, { placement: j, boundary: f, rootBoundary: p, altBoundary: h, padding: m }), q = k ? Y ? Ne : be : Y ? Re : ye;
      _[D] > b[D] && (q = To(q));
      var te = To(q), Q = [];
      if (t && Q.push(B[Z] <= 0), l && Q.push(B[q] <= 0, B[te] <= 0), Q.every(function(Se) {
        return Se;
      })) {
        R = j, A = !1;
        break;
      }
      E.set(j, Q);
    }
    if (A)
      for (var he = s ? 3 : 1, Ae = function(Se) {
        var ee = I.find(function(Ee) {
          var Ie = E.get(Ee);
          if (Ie)
            return Ie.slice(0, Se).every(function(de) {
              return de;
            });
        });
        if (ee)
          return R = ee, "break";
      }, ve = he; ve > 0; ve--) {
        var we = Ae(ve);
        if (we === "break")
          break;
      }
    n.placement !== R && (n.modifiersData[a]._skip = !0, n.placement = R, n.reset = !0);
  }
}
var _2 = { name: "flip", enabled: !0, phase: "main", fn: $2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function yc(e, n, o) {
  return o === void 0 && (o = { x: 0, y: 0 }), { top: e.top - n.height - o.y, right: e.right - n.width + o.x, bottom: e.bottom - n.height + o.y, left: e.left - n.width - o.x };
}
function bc(e) {
  return [ye, Ne, Re, be].some(function(n) {
    return e[n] >= 0;
  });
}
function P2(e) {
  var n = e.state, o = e.name, a = n.rects.reference, c = n.rects.popper, t = n.modifiersData.preventOverflow, d = go(n, { elementContext: "reference" }), l = go(n, { altBoundary: !0 }), r = yc(d, a), m = yc(l, c, t), f = bc(r), p = bc(m);
  n.modifiersData[o] = { referenceClippingOffsets: r, popperEscapeOffsets: m, isReferenceHidden: f, hasPopperEscaped: p }, n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var A2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: P2 };
function I2(e, n, o) {
  var a = Ye(e), c = [be, ye].indexOf(a) >= 0 ? -1 : 1, t = typeof o == "function" ? o(Object.assign({}, n, { placement: e })) : o, d = t[0], l = t[1];
  return d = d || 0, l = (l || 0) * c, [be, Ne].indexOf(a) >= 0 ? { x: l, y: d } : { x: d, y: l };
}
function L2(e) {
  var n = e.state, o = e.options, a = e.name, c = o.offset, t = c === void 0 ? [0, 0] : c, d = ya.reduce(function(f, p) {
    return f[p] = I2(p, n.rects, t), f;
  }, {}), l = d[n.placement], r = l.x, m = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += r, n.modifiersData.popperOffsets.y += m), n.modifiersData[a] = d;
}
var M2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: L2 };
function k2(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = yt({ reference: n.rects.reference, element: n.rects.popper, strategy: "absolute", placement: n.placement });
}
var bt = { name: "popperOffsets", enabled: !0, phase: "read", fn: k2, data: {} };
function R2(e) {
  return e === "x" ? "y" : "x";
}
function N2(e) {
  var n = e.state, o = e.options, a = e.name, c = o.mainAxis, t = c === void 0 ? !0 : c, d = o.altAxis, l = d === void 0 ? !1 : d, r = o.boundary, m = o.rootBoundary, f = o.altBoundary, p = o.padding, h = o.tether, v = h === void 0 ? !0 : h, s = o.tetherOffset, i = s === void 0 ? 0 : s, y = go(n, { boundary: r, rootBoundary: m, padding: p, altBoundary: f }), w = Ye(n.placement), C = Xn(n.placement), L = !C, I = Sa(w), _ = R2(I), b = n.modifiersData.popperOffsets, E = n.rects.reference, A = n.rects.popper, R = typeof i == "function" ? i(Object.assign({}, n.rects, { placement: n.placement })) : i, F = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), j = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, Z = { x: 0, y: 0 };
  if (b) {
    if (t) {
      var Y, k = I === "y" ? ye : be, D = I === "y" ? Re : Ne, B = I === "y" ? "height" : "width", q = b[I], te = q + y[k], Q = q - y[D], he = v ? -A[B] / 2 : 0, Ae = C === qn ? E[B] : A[B], ve = C === qn ? -A[B] : -E[B], we = n.elements.arrow, Se = v && we ? wa(we) : { width: 0, height: 0 }, ee = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : ut(), Ee = ee[k], Ie = ee[D], de = ro(0, E[B], Se[B]), We = L ? E[B] / 2 - he - de - Ee - F.mainAxis : Ae - de - Ee - F.mainAxis, qe = L ? -E[B] / 2 + he + de + Ie + F.mainAxis : ve + de + Ie + F.mainAxis, Ue = n.elements.arrow && wo(n.elements.arrow), Oe = Ue ? I === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, Ze = (Y = j == null ? void 0 : j[I]) != null ? Y : 0, Tn = q + We - Ze - Oe, mn = q + qe - Ze, Ge = ro(v ? $o(te, Tn) : te, q, v ? Ln(Q, mn) : Q);
      b[I] = Ge, Z[I] = Ge - q;
    }
    if (l) {
      var Be, Qe = I === "x" ? ye : be, Cn = I === "x" ? Re : Ne, ge = b[_], ze = _ === "y" ? "height" : "width", sn = ge + y[Qe], en = ge - y[Cn], S = [ye, be].indexOf(w) !== -1, x = (Be = j == null ? void 0 : j[_]) != null ? Be : 0, ue = S ? sn : ge - E[ze] - A[ze] - x + F.altAxis, re = S ? ge + E[ze] + A[ze] - x - F.altAxis : en, nn = v && S ? l2(ue, ge, re) : ro(v ? ue : sn, ge, v ? re : en);
      b[_] = nn, Z[_] = nn - ge;
    }
    n.modifiersData[a] = Z;
  }
}
var B2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: N2, requiresIfExists: ["offset"] };
function z2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function D2(e) {
  return e === Ke(e) || !ke(e) ? Ea(e) : z2(e);
}
function F2(e) {
  var n = e.getBoundingClientRect(), o = Gn(n.width) / e.offsetWidth || 1, a = Gn(n.height) / e.offsetHeight || 1;
  return o !== 1 || a !== 1;
}
function j2(e, n, o) {
  o === void 0 && (o = !1);
  var a = ke(n), c = ke(n) && F2(n), t = On(n), d = Yn(e, c), l = { scrollLeft: 0, scrollTop: 0 }, r = { x: 0, y: 0 };
  return (a || !a && !o) && ((Xe(n) !== "body" || Ta(t)) && (l = D2(n)), ke(n) ? (r = Yn(n, !0), r.x += n.clientLeft, r.y += n.clientTop) : t && (r.x = Oa(t))), { x: d.left + l.scrollLeft - r.x, y: d.top + l.scrollTop - r.y, width: d.width, height: d.height };
}
function x2(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(t) {
    n.set(t.name, t);
  });
  function c(t) {
    o.add(t.name);
    var d = [].concat(t.requires || [], t.requiresIfExists || []);
    d.forEach(function(l) {
      if (!o.has(l)) {
        var r = n.get(l);
        r && c(r);
      }
    }), a.push(t);
  }
  return e.forEach(function(t) {
    o.has(t.name) || c(t);
  }), a;
}
function H2(e) {
  var n = x2(e);
  return a2.reduce(function(o, a) {
    return o.concat(n.filter(function(c) {
      return c.phase === a;
    }));
  }, []);
}
function V2(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function K2(e) {
  var n = e.reduce(function(o, a) {
    var c = o[a.name];
    return o[a.name] = c ? Object.assign({}, c, a, { options: Object.assign({}, c.options, a.options), data: Object.assign({}, c.data, a.data) }) : a, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var wc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Sc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ca(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, a = o === void 0 ? [] : o, c = n.defaultOptions, t = c === void 0 ? wc : c;
  return function(d, l, r) {
    r === void 0 && (r = t);
    var m = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wc, t), modifiersData: {}, elements: { reference: d, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, h = { state: m, setOptions: function(i) {
      var y = typeof i == "function" ? i(m.options) : i;
      s(), m.options = Object.assign({}, t, m.options, y), m.scrollParents = { reference: Un(d) ? lo(d) : d.contextElement ? lo(d.contextElement) : [], popper: lo(l) };
      var w = H2(K2([].concat(a, m.options.modifiers)));
      return m.orderedModifiers = w.filter(function(C) {
        return C.enabled;
      }), v(), h.update();
    }, forceUpdate: function() {
      if (!p) {
        var i = m.elements, y = i.reference, w = i.popper;
        if (Sc(y, w)) {
          m.rects = { reference: j2(y, wo(w), m.options.strategy === "fixed"), popper: wa(w) }, m.reset = !1, m.placement = m.options.placement, m.orderedModifiers.forEach(function(A) {
            return m.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var C = 0; C < m.orderedModifiers.length; C++) {
            if (m.reset === !0) {
              m.reset = !1, C = -1;
              continue;
            }
            var L = m.orderedModifiers[C], I = L.fn, _ = L.options, b = _ === void 0 ? {} : _, E = L.name;
            typeof I == "function" && (m = I({ state: m, options: b, name: E, instance: h }) || m);
          }
        }
      }
    }, update: V2(function() {
      return new Promise(function(i) {
        h.forceUpdate(), i(m);
      });
    }), destroy: function() {
      s(), p = !0;
    } };
    if (!Sc(d, l))
      return h;
    h.setOptions(r).then(function(i) {
      !p && r.onFirstUpdate && r.onFirstUpdate(i);
    });
    function v() {
      m.orderedModifiers.forEach(function(i) {
        var y = i.name, w = i.options, C = w === void 0 ? {} : w, L = i.effect;
        if (typeof L == "function") {
          var I = L({ state: m, name: y, instance: h, options: C }), _ = function() {
          };
          f.push(I || _);
        }
      });
    }
    function s() {
      f.forEach(function(i) {
        return i();
      }), f = [];
    }
    return h;
  };
}
Ca();
var W2 = [vt, bt, ht, it];
Ca({ defaultModifiers: W2 });
var q2 = [vt, bt, ht, it, M2, _2, B2, u2, A2], U2 = Ca({ defaultModifiers: q2 });
const wt = (e) => {
  const n = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const c = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || c ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 || a === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); )
    n.push(o.currentNode);
  return n;
}, Ec = (e, n) => {
  for (const o of e)
    if (!G2(o, n))
      return o;
}, G2 = (e, n) => {
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
}, Y2 = (e) => {
  const n = wt(e), o = Ec(n, e), a = Ec(n.reverse(), e);
  return [o, a];
}, X2 = (e) => e instanceof HTMLInputElement && "select" in e, pn = (e, n) => {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && X2(e) && n && e.select();
  }
};
function Oc(e, n) {
  const o = [...e], a = e.indexOf(n);
  return a !== -1 && o.splice(a, 1), o;
}
const J2 = () => {
  let e = [];
  return {
    push: (a) => {
      const c = e[0];
      c && a !== c && c.pause(), e = Oc(e, a), e.unshift(a);
    },
    remove: (a) => {
      var c, t;
      e = Oc(e, a), (t = (c = e[0]) == null ? void 0 : c.resume) == null || t.call(c);
    }
  };
}, Z2 = (e, n = !1) => {
  const o = document.activeElement;
  for (const a of e)
    if (pn(a, n), document.activeElement !== o)
      return;
}, Tc = J2(), Go = "focus-trap.focus-after-trapped", Yo = "focus-trap.focus-after-released", Cc = {
  cancelable: !0,
  bubbles: !1
}, $c = "focusAfterTrapped", _c = "focusAfterReleased", Q2 = Symbol("elFocusTrap"), es = ce({
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
    $c,
    _c,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const o = P();
    let a, c;
    Xi((v) => {
      e.trapped && !t.paused && n("release-requested", v);
    });
    const t = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, d = (v) => {
      if (!e.loop && !e.trapped || t.paused)
        return;
      const { key: s, altKey: i, ctrlKey: y, metaKey: w, currentTarget: C, shiftKey: L } = v, { loop: I } = e, _ = s === po.tab && !i && !y && !w, b = document.activeElement;
      if (_ && b) {
        const E = C, [A, R] = Y2(E);
        A && R ? !L && b === R ? (v.preventDefault(), I && pn(A, !0), n("focusout-prevented")) : L && [A, E].includes(b) && (v.preventDefault(), I && pn(R, !0), n("focusout-prevented")) : b === E && (v.preventDefault(), n("focusout-prevented"));
      }
    };
    tn(Q2, {
      focusTrapRef: o,
      onKeydown: d
    }), K(() => e.focusTrapEl, (v) => {
      v && (o.value = v);
    }, { immediate: !0 }), K([o], ([v], [s]) => {
      v && (v.addEventListener("keydown", d), v.addEventListener("focusin", m), v.addEventListener("focusout", f)), s && (s.removeEventListener("keydown", d), s.removeEventListener("focusin", m), s.removeEventListener("focusout", f));
    });
    const l = (v) => {
      n($c, v);
    }, r = (v) => n(_c, v), m = (v) => {
      const s = u(o);
      if (!s)
        return;
      const i = v.target, y = i && s.contains(i);
      y && n("focusin", v), !t.paused && e.trapped && (y ? c = i : pn(c, !0));
    }, f = (v) => {
      const s = u(o);
      if (!(t.paused || !s))
        if (e.trapped) {
          const i = v.relatedTarget;
          !Mo(i) && !s.contains(i) && setTimeout(() => {
            !t.paused && e.trapped && pn(c, !0);
          }, 0);
        } else {
          const i = v.target;
          i && s.contains(i) || n("focusout", v);
        }
    };
    async function p() {
      await J();
      const v = u(o);
      if (v) {
        Tc.push(t);
        const s = document.activeElement;
        if (a = s, !v.contains(s)) {
          const y = new Event(Go, Cc);
          v.addEventListener(Go, l), v.dispatchEvent(y), y.defaultPrevented || J(() => {
            let w = e.focusStartEl;
            Kn(w) || (pn(w), document.activeElement !== w && (w = "first")), w === "first" && Z2(wt(v), !0), (document.activeElement === s || w === "container") && pn(v);
          });
        }
      }
    }
    function h() {
      const v = u(o);
      if (v) {
        v.removeEventListener(Go, l);
        const s = new Event(Yo, Cc);
        v.addEventListener(Yo, r), v.dispatchEvent(s), s.defaultPrevented || pn(a != null ? a : document.body, !0), v.removeEventListener(Yo, l), Tc.remove(t);
      }
    }
    return Ve(() => {
      e.trapped && p(), K(() => e.trapped, (v) => {
        v ? p() : h();
      });
    }), En(() => {
      e.trapped && h();
    }), {
      onKeydown: d
    };
  }
});
function ns(e, n, o, a, c, t) {
  return ne(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var os = /* @__PURE__ */ ie(es, [["render", ns], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const as = ["fixed", "absolute"], cs = pe({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: oe(Array),
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
    values: ya,
    default: "bottom"
  },
  popperOptions: {
    type: oe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: as,
    default: "absolute"
  }
}), St = pe({
  ...cs,
  id: String,
  style: { type: oe([String, Array, Object]) },
  className: { type: oe([String, Array, Object]) },
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
    type: oe([String, Array, Object])
  },
  popperStyle: {
    type: oe([String, Array, Object])
  },
  referenceEl: {
    type: oe(Object)
  },
  triggerTargetEl: {
    type: oe(Object)
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
}), ts = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], Pc = (e, n) => {
  const { placement: o, strategy: a, popperOptions: c } = e, t = {
    placement: o,
    strategy: a,
    ...c,
    modifiers: rs(e)
  };
  return ls(t, n), ms(t, c == null ? void 0 : c.modifiers), t;
}, ds = (e) => {
  if (!!me)
    return In(e);
};
function rs(e) {
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
function ls(e, { arrowEl: n, arrowOffset: o }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: n,
      padding: o != null ? o : 5
    }
  });
}
function ms(e, n) {
  n && (e.modifiers = [...e.modifiers, ...n != null ? n : []]);
}
const is = {
  name: "ElPopperContent"
}, ss = /* @__PURE__ */ ce({
  ...is,
  props: St,
  emits: ts,
  setup(e, { expose: n, emit: o }) {
    const a = e, { popperInstanceRef: c, contentRef: t, triggerRef: d, role: l } = ae(pa, void 0), r = ae(ho, void 0), { nextZIndex: m } = t0(), f = fe("popper"), p = P(), h = P("first"), v = P(), s = P();
    tn(Qc, {
      arrowRef: v,
      arrowOffset: s
    }), r && (r.addInputId || r.removeInputId) && tn(ho, {
      ...r,
      addInputId: uo,
      removeInputId: uo
    });
    const i = P(a.zIndex || m()), y = P(!1);
    let w;
    const C = T(() => ds(a.referenceEl) || u(d)), L = T(() => [{ zIndex: u(i) }, a.popperStyle]), I = T(() => [
      f.b(),
      f.is("pure", a.pure),
      f.is(a.effect),
      a.popperClass
    ]), _ = T(() => l && l.value === "dialog" ? "false" : void 0), b = ({ referenceEl: k, popperContentEl: D, arrowEl: B }) => {
      const q = Pc(a, {
        arrowEl: B,
        arrowOffset: u(s)
      });
      return U2(k, D, q);
    }, E = (k = !0) => {
      var D;
      (D = u(c)) == null || D.update(), k && (i.value = a.zIndex || m());
    }, A = () => {
      var k, D;
      const B = { name: "eventListeners", enabled: a.visible };
      (D = (k = u(c)) == null ? void 0 : k.setOptions) == null || D.call(k, (q) => ({
        ...q,
        modifiers: [...q.modifiers || [], B]
      })), E(!1), a.visible && a.focusOnShow ? y.value = !0 : a.visible === !1 && (y.value = !1);
    }, R = () => {
      o("focus");
    }, F = () => {
      h.value = "first", o("blur");
    }, j = (k) => {
      var D;
      a.visible && !y.value && (k.relatedTarget && ((D = k.relatedTarget) == null || D.focus()), k.target && (h.value = k.target), y.value = !0);
    }, Z = () => {
      a.trapping || (y.value = !1);
    }, Y = () => {
      y.value = !1, o("close");
    };
    return Ve(() => {
      let k;
      K(C, (D) => {
        var B;
        k == null || k();
        const q = u(c);
        if ((B = q == null ? void 0 : q.destroy) == null || B.call(q), D) {
          const te = u(p);
          t.value = te, c.value = b({
            referenceEl: D,
            popperContentEl: te,
            arrowEl: u(v)
          }), k = K(() => D.getBoundingClientRect(), () => E(), {
            immediate: !0
          });
        } else
          c.value = void 0;
      }, {
        immediate: !0
      }), K(() => a.triggerTargetEl, (D, B) => {
        w == null || w(), w = void 0;
        const q = u(D || p.value), te = u(B || p.value);
        if (fo(q)) {
          const { ariaLabel: Q, id: he } = Po(a);
          w = K([l, Q, _, he], (Ae) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((ve, we) => {
              Mo(Ae[we]) ? q.removeAttribute(ve) : q.setAttribute(ve, Ae[we]);
            });
          }, { immediate: !0 });
        }
        fo(te) && ["role", "aria-label", "aria-modal", "id"].forEach((Q) => {
          te.removeAttribute(Q);
        });
      }, { immediate: !0 }), K(() => a.visible, A, { immediate: !0 }), K(() => Pc(a, {
        arrowEl: u(v),
        arrowOffset: u(s)
      }), (D) => {
        var B;
        return (B = c.value) == null ? void 0 : B.setOptions(D);
      });
    }), En(() => {
      w == null || w(), w = void 0;
    }), n({
      popperContentRef: p,
      popperInstanceRef: c,
      updatePopper: E,
      contentStyle: L
    }), (k, D) => ($(), z("div", {
      ref_key: "popperContentRef",
      ref: p,
      style: _e(u(L)),
      class: M(u(I)),
      tabindex: "-1",
      onMouseenter: D[0] || (D[0] = (B) => k.$emit("mouseenter", B)),
      onMouseleave: D[1] || (D[1] = (B) => k.$emit("mouseleave", B))
    }, [
      le(u(os), {
        trapped: y.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": p.value,
        "focus-start-el": h.value,
        onFocusAfterTrapped: R,
        onFocusAfterReleased: F,
        onFocusin: j,
        onFocusoutPrevented: Z,
        onReleaseRequested: Y
      }, {
        default: W(() => [
          ne(k.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var us = /* @__PURE__ */ ie(ss, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const fs = zn(D0), ps = fe("tooltip"), $a = pe({
  ...Qi,
  ...St,
  appendTo: {
    type: oe([String, Object]),
    default: at
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
    type: oe(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ps.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Et = pe({
  ...lt,
  disabled: Boolean,
  trigger: {
    type: oe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: oe(Array),
    default: () => [po.enter, po.space]
  }
}), hs = pe({
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
}), _a = Symbol("elTooltip"), vs = ce({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: us
  },
  inheritAttrs: !1,
  props: $a,
  setup(e) {
    const n = P(null), o = P(!1), a = P(!1), c = P(!1), t = P(!1), {
      controlled: d,
      id: l,
      open: r,
      trigger: m,
      onClose: f,
      onOpen: p,
      onShow: h,
      onHide: v,
      onBeforeShow: s,
      onBeforeHide: i
    } = ae(_a, void 0), y = T(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    En(() => {
      t.value = !0;
    });
    const w = T(() => u(y) ? !0 : u(r)), C = T(() => e.disabled ? !1 : u(r)), L = T(() => {
      var k;
      return (k = e.style) != null ? k : {};
    }), I = T(() => !u(r)), _ = () => {
      v();
    }, b = () => {
      if (u(d))
        return !0;
    }, E = an(b, () => {
      e.enterable && u(m) === "hover" && p();
    }), A = an(b, () => {
      u(m) === "hover" && f();
    }), R = () => {
      var k, D;
      (D = (k = n.value) == null ? void 0 : k.updatePopper) == null || D.call(k), s == null || s();
    }, F = () => {
      i == null || i();
    }, j = () => {
      h(), Y = Tm(T(() => {
        var k;
        return (k = n.value) == null ? void 0 : k.popperContentRef;
      }), () => {
        if (u(d))
          return;
        u(m) !== "hover" && f();
      });
    }, Z = () => {
      e.virtualTriggering || f();
    };
    let Y;
    return K(() => u(r), (k) => {
      k || Y == null || Y();
    }, {
      flush: "post"
    }), {
      ariaHidden: I,
      entering: a,
      leaving: c,
      id: l,
      intermediateOpen: o,
      contentStyle: L,
      contentRef: n,
      destroyed: t,
      shouldRender: w,
      shouldShow: C,
      onClose: f,
      open: r,
      onAfterShow: j,
      onBeforeEnter: R,
      onBeforeLeave: F,
      onContentEnter: E,
      onContentLeave: A,
      onTransitionLeave: _,
      onBlur: Z
    };
  }
});
function gs(e, n, o, a, c, t) {
  const d = Ce("el-popper-content");
  return $(), U(zt, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    le(_o, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: W(() => [
        e.shouldRender ? cn(($(), U(d, Hn({
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
          default: W(() => [
            V(" Workaround bug #6378 "),
            e.destroyed ? V("v-if", !0) : ne(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [Jn, e.shouldShow]
        ]) : V("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ys = /* @__PURE__ */ ie(vs, [["render", gs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const bs = (e, n) => Am(e) ? e.includes(n) : e === n, jn = (e, n, o) => (a) => {
  bs(u(e), n) && o(a);
}, ws = ce({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: W0
  },
  props: Et,
  setup(e) {
    const n = fe("tooltip"), { controlled: o, id: a, open: c, onOpen: t, onClose: d, onToggle: l } = ae(_a, void 0), r = P(null), m = () => {
      if (u(o) || e.disabled)
        return !0;
    }, f = Mn(e, "trigger"), p = an(m, jn(f, "hover", t)), h = an(m, jn(f, "hover", d)), v = an(m, jn(f, "click", (C) => {
      C.button === 0 && l(C);
    })), s = an(m, jn(f, "focus", t)), i = an(m, jn(f, "focus", d)), y = an(m, jn(f, "contextmenu", (C) => {
      C.preventDefault(), l(C);
    })), w = an(m, (C) => {
      const { code: L } = C;
      e.triggerKeys.includes(L) && (C.preventDefault(), l(C));
    });
    return {
      onBlur: i,
      onContextMenu: y,
      onFocus: s,
      onMouseenter: p,
      onMouseleave: h,
      onClick: v,
      onKeydown: w,
      open: c,
      id: a,
      triggerRef: r,
      ns: n
    };
  }
});
function Ss(e, n, o, a, c, t) {
  const d = Ce("el-popper-trigger");
  return $(), U(d, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: M(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: W(() => [
      ne(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var Es = /* @__PURE__ */ ie(ws, [["render", Ss], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: Os, useModelToggle: Ts, useModelToggleEmits: Cs } = Gi("visible"), $s = ce({
  name: "ElTooltip",
  components: {
    ElPopper: fs,
    ElPopperArrow: x0,
    ElTooltipContent: ys,
    ElTooltipTrigger: Es
  },
  props: {
    ...tt,
    ...Os,
    ...$a,
    ...Et,
    ...dt,
    ...hs
  },
  emits: [
    ...Cs,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: n }) {
    Zi();
    const o = T(() => (da(e.openDelay) || Pe("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), a = T(() => (da(e.visibleArrow) || Pe("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), aa(e.visibleArrow) ? e.visibleArrow : e.showArrow)), c = nt(), t = P(null), d = P(null), l = () => {
      var y;
      const w = u(t);
      w && ((y = w.popperInstanceRef) == null || y.update());
    }, r = P(!1), m = P(void 0), { show: f, hide: p } = Ts({
      indicator: r,
      toggleReason: m
    }), { onOpen: h, onClose: v } = e0({
      showAfter: o,
      hideAfter: Mn(e, "hideAfter"),
      open: f,
      close: p
    }), s = T(() => aa(e.visible));
    return tn(_a, {
      controlled: s,
      id: c,
      open: Dt(r),
      trigger: Mn(e, "trigger"),
      onOpen: (y) => {
        h(y);
      },
      onClose: (y) => {
        v(y);
      },
      onToggle: (y) => {
        u(r) ? v(y) : h(y);
      },
      onShow: () => {
        n("show", m.value);
      },
      onHide: () => {
        n("hide", m.value);
      },
      onBeforeShow: () => {
        n("before-show", m.value);
      },
      onBeforeHide: () => {
        n("before-hide", m.value);
      },
      updatePopper: l
    }), K(() => e.disabled, (y) => {
      y && r.value && (r.value = !1);
    }), {
      compatShowAfter: o,
      compatShowArrow: a,
      popperRef: t,
      contentRef: d,
      open: r,
      hide: p,
      isFocusInsideContent: () => {
        var y, w;
        const C = (w = (y = d.value) == null ? void 0 : y.contentRef) == null ? void 0 : w.popperContentRef;
        return C && C.contains(document.activeElement);
      },
      updatePopper: l,
      onOpen: h,
      onClose: v
    };
  }
}), _s = ["innerHTML"], Ps = { key: 1 };
function As(e, n, o, a, c, t) {
  const d = Ce("el-tooltip-trigger"), l = Ce("el-popper-arrow"), r = Ce("el-tooltip-content"), m = Ce("el-popper");
  return $(), U(m, {
    ref: "popperRef",
    role: e.role
  }, {
    default: W(() => [
      le(d, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: W(() => [
          e.$slots.default ? ne(e.$slots, "default", { key: 0 }) : V("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      le(r, {
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
        default: W(() => [
          ne(e.$slots, "content", {}, () => [
            e.rawContent ? ($(), z("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, _s)) : ($(), z("span", Ps, $e(e.content), 1))
          ]),
          e.compatShowArrow ? ($(), U(l, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : V("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Is = /* @__PURE__ */ ie($s, [["render", As], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Ls = zn(Is), hn = /* @__PURE__ */ new Map();
let Ac;
me && (document.addEventListener("mousedown", (e) => Ac = e), document.addEventListener("mouseup", (e) => {
  for (const n of hn.values())
    for (const { documentHandler: o } of n)
      o(e, Ac);
}));
function Ic(e, n) {
  let o = [];
  return Array.isArray(n.arg) ? o = n.arg : fo(n.arg) && o.push(n.arg), function(a, c) {
    const t = n.instance.popperRef, d = a.target, l = c == null ? void 0 : c.target, r = !n || !n.instance, m = !d || !l, f = e.contains(d) || e.contains(l), p = e === d, h = o.length && o.some((s) => s == null ? void 0 : s.contains(d)) || o.length && o.includes(l), v = t && (t.contains(d) || t.contains(l));
    r || m || f || p || h || v || n.value(a, c);
  };
}
const Ms = {
  beforeMount(e, n) {
    hn.has(e) || hn.set(e, []), hn.get(e).push({
      documentHandler: Ic(e, n),
      bindingFn: n.value
    });
  },
  updated(e, n) {
    hn.has(e) || hn.set(e, []);
    const o = hn.get(e), a = o.findIndex((t) => t.bindingFn === n.oldValue), c = {
      documentHandler: Ic(e, n),
      bindingFn: n.value
    };
    a >= 0 ? o.splice(a, 1, c) : o.push(c);
  },
  unmounted(e) {
    hn.delete(e);
  }
}, Ot = pe({
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
    values: fa,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), ks = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Rs = {
  name: "ElTag"
}, Ns = /* @__PURE__ */ ce({
  ...Rs,
  props: Ot,
  emits: ks,
  setup(e, { emit: n }) {
    const o = e, a = ha(), c = fe("tag"), t = T(() => {
      const { type: r, hit: m, effect: f, closable: p, round: h } = o;
      return [
        c.b(),
        c.is("closable", p),
        c.m(r),
        c.m(a.value),
        c.m(f),
        c.is("hit", m),
        c.is("round", h)
      ];
    }), d = (r) => {
      n("close", r);
    }, l = (r) => {
      n("click", r);
    };
    return (r, m) => r.disableTransitions ? ($(), z("span", {
      key: 0,
      class: M(u(t)),
      style: _e({ backgroundColor: r.color }),
      onClick: l
    }, [
      G("span", {
        class: M(u(c).e("content"))
      }, [
        ne(r.$slots, "default")
      ], 2),
      r.closable ? ($(), U(u(vn), {
        key: 0,
        class: M(u(c).e("close")),
        onClick: je(d, ["stop"])
      }, {
        default: W(() => [
          le(u(tc))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : V("v-if", !0)
    ], 6)) : ($(), U(_o, {
      key: 1,
      name: `${u(c).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: W(() => [
        G("span", {
          class: M(u(t)),
          style: _e({ backgroundColor: r.color }),
          onClick: l
        }, [
          G("span", {
            class: M(u(c).e("content"))
          }, [
            ne(r.$slots, "default")
          ], 2),
          r.closable ? ($(), U(u(vn), {
            key: 0,
            class: M(u(c).e("close")),
            onClick: je(d, ["stop"])
          }, {
            default: W(() => [
              le(u(tc))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Bs = /* @__PURE__ */ ie(Ns, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const zs = zn(Bs), Tt = "ElSelectGroup", Do = "ElSelect";
function Ds(e, n) {
  const o = ae(Do), a = ae(Tt, { disabled: !1 }), c = T(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), t = T(() => o.props.multiple ? p(o.props.modelValue, e.value) : h(e.value, o.props.modelValue)), d = T(() => {
    if (o.props.multiple) {
      const i = o.props.modelValue || [];
      return !t.value && i.length >= o.props.multipleLimit && o.props.multipleLimit > 0;
    } else
      return !1;
  }), l = T(() => e.label || (c.value ? "" : e.value)), r = T(() => e.value || e.label || ""), m = T(() => e.disabled || n.groupDisabled || d.value), f = Sn(), p = (i = [], y) => {
    if (c.value) {
      const w = o.props.valueKey;
      return i && i.some((C) => Me(C, w) === Me(y, w));
    } else
      return i && i.includes(y);
  }, h = (i, y) => {
    if (c.value) {
      const { valueKey: w } = o.props;
      return Me(i, w) === Me(y, w);
    } else
      return i === y;
  }, v = () => {
    !e.disabled && !a.disabled && (o.hoverIndex = o.optionsArray.indexOf(f.proxy));
  };
  K(() => l.value, () => {
    !e.created && !o.props.remote && o.setSelected();
  }), K(() => e.value, (i, y) => {
    const { remote: w, valueKey: C } = o.props;
    if (!e.created && !w) {
      if (C && typeof i == "object" && typeof y == "object" && i[C] === y[C])
        return;
      o.setSelected();
    }
  }), K(() => a.disabled, () => {
    n.groupDisabled = a.disabled;
  }, { immediate: !0 });
  const { queryChange: s } = kc(o);
  return K(s, (i) => {
    const { query: y } = u(i), w = new RegExp(Mm(y), "i");
    n.visible = w.test(l.value) || e.created, n.visible || o.filteredOptionsCount--;
  }), {
    select: o,
    currentLabel: l,
    currentValue: r,
    itemSelected: t,
    isDisabled: m,
    hoverItem: v
  };
}
const Fs = ce({
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
    const n = fe("select"), o = yo({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: a, itemSelected: c, isDisabled: t, select: d, hoverItem: l } = Ds(e, o), { visible: r, hover: m } = Po(o), f = Sn().proxy, p = f.value;
    d.onOptionCreate(f), En(() => {
      const { selected: v } = d, i = (d.props.multiple ? v : [v]).some((y) => y.value === f.value);
      d.cachedOptions.get(p) === f && !i && J(() => {
        d.cachedOptions.delete(p);
      }), d.onOptionDestroy(p, f);
    });
    function h() {
      e.disabled !== !0 && o.groupDisabled !== !0 && d.handleOptionSelect(f, !0);
    }
    return {
      ns: n,
      currentLabel: a,
      itemSelected: c,
      isDisabled: t,
      select: d,
      hoverItem: l,
      visible: r,
      hover: m,
      selectOptionClick: h,
      states: o
    };
  }
});
function js(e, n, o, a, c, t) {
  return cn(($(), z("li", {
    class: M([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: n[0] || (n[0] = (...d) => e.hoverItem && e.hoverItem(...d)),
    onClick: n[1] || (n[1] = je((...d) => e.selectOptionClick && e.selectOptionClick(...d), ["stop"]))
  }, [
    ne(e.$slots, "default", {}, () => [
      G("span", null, $e(e.currentLabel), 1)
    ])
  ], 34)), [
    [Jn, e.visible]
  ]);
}
var Pa = /* @__PURE__ */ ie(Fs, [["render", js], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const xs = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ae(Do), n = fe("select"), o = T(() => e.props.popperClass), a = T(() => e.props.multiple), c = T(() => e.props.fitInputWidth), t = P("");
    function d() {
      var l;
      t.value = `${(l = e.selectWrapper) == null ? void 0 : l.getBoundingClientRect().width}px`;
    }
    return Ve(() => {
      d(), ko(e.selectWrapper, d);
    }), {
      ns: n,
      minWidth: t,
      popperClass: o,
      isMultiple: a,
      isFitInputWidth: c
    };
  }
});
function Hs(e, n, o, a, c, t) {
  return $(), z("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: _e({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    ne(e.$slots, "default")
  ], 6);
}
var Vs = /* @__PURE__ */ ie(xs, [["render", Hs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function Ks(e) {
  const { t: n } = va();
  return yo({
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
const Ws = (e, n, o) => {
  const { t: a } = va(), c = fe("select"), t = P(null), d = P(null), l = P(null), r = P(null), m = P(null), f = P(null), p = P(-1), h = ao({ query: "" }), v = ao(""), s = ae(No, {}), i = ae(ho, {}), y = T(() => !e.filterable || e.multiple || !n.visible), w = T(() => e.disabled || s.disabled), C = T(() => {
    const g = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !w.value && n.inputHovering && g;
  }), L = T(() => e.remote && e.filterable ? "" : e.suffixIcon), I = T(() => c.is("reverse", L.value && n.visible)), _ = T(() => e.remote ? 300 : 0), b = T(() => e.loading ? e.loadingText || a("el.select.loading") : e.remote && n.query === "" && n.options.size === 0 ? !1 : e.filterable && n.query && n.options.size > 0 && n.filteredOptionsCount === 0 ? e.noMatchText || a("el.select.noMatch") : n.options.size === 0 ? e.noDataText || a("el.select.noData") : null), E = T(() => Array.from(n.options.values())), A = T(() => Array.from(n.cachedOptions.values())), R = T(() => {
    const g = E.value.filter((O) => !O.created).some((O) => O.currentLabel === n.query);
    return e.filterable && e.allowCreate && n.query !== "" && !g;
  }), F = ha(), j = T(() => ["small"].includes(F.value) ? "small" : "default"), Z = T({
    get() {
      return n.visible && b.value !== !1;
    },
    set(g) {
      n.visible = g;
    }
  });
  K([() => w.value, () => F.value, () => s.size], () => {
    J(() => {
      Y();
    });
  }), K(() => e.placeholder, (g) => {
    n.cachedPlaceHolder = n.currentPlaceholder = g;
  }), K(() => e.modelValue, (g, O) => {
    var N;
    e.multiple && (Y(), g && g.length > 0 || d.value && n.query !== "" ? n.currentPlaceholder = "" : n.currentPlaceholder = n.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (n.query = "", k(n.query))), q(), e.filterable && !e.multiple && (n.inputLength = 20), ec(g, O) || (N = i.validate) == null || N.call(i, "change").catch((H) => Pe(H));
  }, {
    flush: "post",
    deep: !0
  }), K(() => n.visible, (g) => {
    var O, N, H;
    g ? ((N = (O = l.value) == null ? void 0 : O.updatePopper) == null || N.call(O), e.filterable && (n.filteredOptionsCount = n.optionsCount, n.query = e.remote ? "" : n.selectedLabel, e.multiple ? (H = d.value) == null || H.focus() : n.selectedLabel && (n.currentPlaceholder = `${n.selectedLabel}`, n.selectedLabel = ""), k(n.query), !e.multiple && !e.remote && (h.value.query = "", eo(h), eo(v)))) : (d.value && d.value.blur(), n.query = "", n.previousQuery = null, n.selectedLabel = "", n.inputLength = 20, n.menuVisibleOnFocus = !1, Q(), J(() => {
      d.value && d.value.value === "" && n.selected.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
    }), e.multiple || (n.selected && (e.filterable && e.allowCreate && n.createdSelected && n.createdLabel ? n.selectedLabel = n.createdLabel : n.selectedLabel = n.selected.currentLabel, e.filterable && (n.query = n.selectedLabel)), e.filterable && (n.currentPlaceholder = n.cachedPlaceHolder))), o.emit("visible-change", g);
  }), K(() => n.options.entries(), () => {
    var g, O, N;
    if (!me)
      return;
    (O = (g = l.value) == null ? void 0 : g.updatePopper) == null || O.call(g), e.multiple && Y();
    const H = ((N = m.value) == null ? void 0 : N.querySelectorAll("input")) || [];
    Array.from(H).includes(document.activeElement) || q(), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && B();
  }, {
    flush: "post"
  }), K(() => n.hoverIndex, (g) => {
    typeof g == "number" && g > -1 && (p.value = E.value[g] || {}), E.value.forEach((O) => {
      O.hover = p.value === O;
    });
  });
  const Y = () => {
    e.collapseTags && !e.filterable || J(() => {
      var g, O;
      if (!t.value)
        return;
      const N = t.value.$el.querySelector("input"), H = r.value, se = Pi(F.value || s.size);
      N.style.height = `${n.selected.length === 0 ? se : Math.max(H ? H.clientHeight + (H.clientHeight > se ? 6 : 0) : 0, se) - 2}px`, n.tagInMultiLine = Number.parseFloat(N.style.height) >= se, n.visible && b.value !== !1 && ((O = (g = l.value) == null ? void 0 : g.updatePopper) == null || O.call(g));
    });
  }, k = (g) => {
    if (!(n.previousQuery === g || n.isOnComposition)) {
      if (n.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        n.previousQuery = g;
        return;
      }
      n.previousQuery = g, J(() => {
        var O, N;
        n.visible && ((N = (O = l.value) == null ? void 0 : O.updatePopper) == null || N.call(O));
      }), n.hoverIndex = -1, e.multiple && e.filterable && J(() => {
        const O = d.value.value.length * 15 + 20;
        n.inputLength = e.collapseTags ? Math.min(50, O) : O, D(), Y();
      }), e.remote && typeof e.remoteMethod == "function" ? (n.hoverIndex = -1, e.remoteMethod(g)) : typeof e.filterMethod == "function" ? (e.filterMethod(g), eo(v)) : (n.filteredOptionsCount = n.optionsCount, h.value.query = g, eo(h), eo(v)), e.defaultFirstOption && (e.filterable || e.remote) && n.filteredOptionsCount && B();
    }
  }, D = () => {
    n.currentPlaceholder !== "" && (n.currentPlaceholder = d.value.value ? "" : n.cachedPlaceHolder);
  }, B = () => {
    const g = E.value.filter((H) => H.visible && !H.disabled && !H.states.groupDisabled), O = g.find((H) => H.created), N = g[0];
    n.hoverIndex = qe(E.value, O || N);
  }, q = () => {
    var g;
    if (e.multiple)
      n.selectedLabel = "";
    else {
      const N = te(e.modelValue);
      (g = N.props) != null && g.created ? (n.createdLabel = N.props.value, n.createdSelected = !0) : n.createdSelected = !1, n.selectedLabel = N.currentLabel, n.selected = N, e.filterable && (n.query = n.selectedLabel);
      return;
    }
    const O = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((N) => {
      O.push(te(N));
    }), n.selected = O, J(() => {
      Y();
    });
  }, te = (g) => {
    let O;
    const N = Wo(g).toLowerCase() === "object", H = Wo(g).toLowerCase() === "null", se = Wo(g).toLowerCase() === "undefined";
    for (let on = n.cachedOptions.size - 1; on >= 0; on--) {
      const Le = A.value[on];
      if (N ? Me(Le.value, e.valueKey) === Me(g, e.valueKey) : Le.value === g) {
        O = {
          value: g,
          currentLabel: Le.currentLabel,
          isDisabled: Le.isDisabled
        };
        break;
      }
    }
    if (O)
      return O;
    const un = N ? g.label : !H && !se ? g : "", fn = {
      value: g,
      currentLabel: un
    };
    return e.multiple && (fn.hitState = !1), fn;
  }, Q = () => {
    setTimeout(() => {
      const g = e.valueKey;
      e.multiple ? n.selected.length > 0 ? n.hoverIndex = Math.min.apply(null, n.selected.map((O) => E.value.findIndex((N) => Me(N, g) === Me(O, g)))) : n.hoverIndex = -1 : n.hoverIndex = E.value.findIndex((O) => re(O) === re(n.selected));
    }, 300);
  }, he = () => {
    var g, O;
    Ae(), (O = (g = l.value) == null ? void 0 : g.updatePopper) == null || O.call(g), e.multiple && !e.filterable && Y();
  }, Ae = () => {
    var g;
    n.inputWidth = (g = t.value) == null ? void 0 : g.$el.getBoundingClientRect().width;
  }, ve = () => {
    e.filterable && n.query !== n.selectedLabel && (n.query = n.selectedLabel, k(n.query));
  }, we = Qa(() => {
    ve();
  }, _.value), Se = Qa((g) => {
    k(g.target.value);
  }, _.value), ee = (g) => {
    ec(e.modelValue, g) || o.emit(Xc, g);
  }, Ee = (g) => {
    if (g.target.value.length <= 0 && !Ge()) {
      const O = e.modelValue.slice();
      O.pop(), o.emit(xe, O), ee(O);
    }
    g.target.value.length === 1 && e.modelValue.length === 0 && (n.currentPlaceholder = n.cachedPlaceHolder);
  }, Ie = (g, O) => {
    const N = n.selected.indexOf(O);
    if (N > -1 && !w.value) {
      const H = e.modelValue.slice();
      H.splice(N, 1), o.emit(xe, H), ee(H), o.emit("remove-tag", O.value);
    }
    g.stopPropagation();
  }, de = (g) => {
    g.stopPropagation();
    const O = e.multiple ? [] : "";
    if (typeof O != "string")
      for (const N of n.selected)
        N.isDisabled && O.push(N.value);
    o.emit(xe, O), ee(O), n.visible = !1, o.emit("clear");
  }, We = (g, O) => {
    var N;
    if (e.multiple) {
      const H = (e.modelValue || []).slice(), se = qe(H, g.value);
      se > -1 ? H.splice(se, 1) : (e.multipleLimit <= 0 || H.length < e.multipleLimit) && H.push(g.value), o.emit(xe, H), ee(H), g.created && (n.query = "", k(""), n.inputLength = 20), e.filterable && ((N = d.value) == null || N.focus());
    } else
      o.emit(xe, g.value), ee(g.value), n.visible = !1;
    n.isSilentBlur = O, Ue(), !n.visible && J(() => {
      Oe(g);
    });
  }, qe = (g = [], O) => {
    if (!wn(O))
      return g.indexOf(O);
    const N = e.valueKey;
    let H = -1;
    return g.some((se, un) => Me(se, N) === Me(O, N) ? (H = un, !0) : !1), H;
  }, Ue = () => {
    n.softFocus = !0;
    const g = d.value || t.value;
    g && (g == null || g.focus());
  }, Oe = (g) => {
    var O, N, H, se, un;
    const fn = Array.isArray(g) ? g[0] : g;
    let on = null;
    if (fn != null && fn.value) {
      const Le = E.value.filter((Te) => Te.value === fn.value);
      Le.length > 0 && (on = Le[0].$el);
    }
    if (l.value && on) {
      const Le = (se = (H = (N = (O = l.value) == null ? void 0 : O.popperRef) == null ? void 0 : N.contentRef) == null ? void 0 : H.querySelector) == null ? void 0 : se.call(H, `.${c.be("dropdown", "wrap")}`);
      Le && Nm(Le, on);
    }
    (un = f.value) == null || un.handleScroll();
  }, Ze = (g) => {
    n.optionsCount++, n.filteredOptionsCount++, n.options.set(g.value, g), n.cachedOptions.set(g.value, g);
  }, Tn = (g, O) => {
    n.options.get(g) === O && (n.optionsCount--, n.filteredOptionsCount--, n.options.delete(g));
  }, mn = (g) => {
    g.code !== po.backspace && Ge(!1), n.inputLength = d.value.value.length * 15 + 20, Y();
  }, Ge = (g) => {
    if (!Array.isArray(n.selected))
      return;
    const O = n.selected[n.selected.length - 1];
    if (!!O)
      return g === !0 || g === !1 ? (O.hitState = g, g) : (O.hitState = !O.hitState, O.hitState);
  }, Be = (g) => {
    const O = g.target.value;
    if (g.type === "compositionend")
      n.isOnComposition = !1, J(() => k(O));
    else {
      const N = O[O.length - 1] || "";
      n.isOnComposition = !Jc(N);
    }
  }, Qe = () => {
    J(() => Oe(n.selected));
  }, Cn = (g) => {
    n.softFocus ? n.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !n.visible && (n.menuVisibleOnFocus = !0), n.visible = !0), o.emit("focus", g));
  }, ge = () => {
    var g;
    n.visible = !1, (g = t.value) == null || g.blur();
  }, ze = (g) => {
    J(() => {
      n.isSilentBlur ? n.isSilentBlur = !1 : o.emit("blur", g);
    }), n.softFocus = !1;
  }, sn = (g) => {
    de(g);
  }, en = () => {
    n.visible = !1;
  }, S = (g) => {
    n.visible && (g.preventDefault(), g.stopPropagation(), n.visible = !1);
  }, x = () => {
    var g;
    e.automaticDropdown || w.value || (n.menuVisibleOnFocus ? n.menuVisibleOnFocus = !1 : n.visible = !n.visible, n.visible && ((g = d.value || t.value) == null || g.focus()));
  }, ue = () => {
    n.visible ? E.value[n.hoverIndex] && We(E.value[n.hoverIndex], void 0) : x();
  }, re = (g) => wn(g.value) ? Me(g.value, e.valueKey) : g.value, nn = T(() => E.value.filter((g) => g.visible).every((g) => g.disabled)), Dn = (g) => {
    if (!n.visible) {
      n.visible = !0;
      return;
    }
    if (!(n.options.size === 0 || n.filteredOptionsCount === 0) && !n.isOnComposition && !nn.value) {
      g === "next" ? (n.hoverIndex++, n.hoverIndex === n.options.size && (n.hoverIndex = 0)) : g === "prev" && (n.hoverIndex--, n.hoverIndex < 0 && (n.hoverIndex = n.options.size - 1));
      const O = E.value[n.hoverIndex];
      (O.disabled === !0 || O.states.groupDisabled === !0 || !O.visible) && Dn(g), J(() => Oe(p.value));
    }
  };
  return {
    optionsArray: E,
    selectSize: F,
    handleResize: he,
    debouncedOnInputChange: we,
    debouncedQueryChange: Se,
    deletePrevTag: Ee,
    deleteTag: Ie,
    deleteSelected: de,
    handleOptionSelect: We,
    scrollToOption: Oe,
    readonly: y,
    resetInputHeight: Y,
    showClose: C,
    iconComponent: L,
    iconReverse: I,
    showNewOption: R,
    collapseTagSize: j,
    setSelected: q,
    managePlaceholder: D,
    selectDisabled: w,
    emptyText: b,
    toggleLastOptionHitState: Ge,
    resetInputState: mn,
    handleComposition: Be,
    onOptionCreate: Ze,
    onOptionDestroy: Tn,
    handleMenuEnter: Qe,
    handleFocus: Cn,
    blur: ge,
    handleBlur: ze,
    handleClearClick: sn,
    handleClose: en,
    handleKeydownEscape: S,
    toggleMenu: x,
    selectOption: ue,
    getValueKey: re,
    navigateOptions: Dn,
    dropMenuVisible: Z,
    queryChange: h,
    groupQueryChange: v,
    reference: t,
    input: d,
    tooltipRef: l,
    tags: r,
    selectWrapper: m,
    scrollbar: f
  };
}, Lc = "ElSelect", qs = ce({
  name: Lc,
  componentName: Lc,
  components: {
    ElInput: E0,
    ElSelectMenu: Vs,
    ElOption: Pa,
    ElTag: zs,
    ElScrollbar: N0,
    ElTooltip: Ls,
    ElIcon: vn
  },
  directives: { ClickOutside: Ms },
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
      validator: Ai
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
    teleported: $a.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: [String, Object],
      default: ua
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: [String, Object],
      default: xm
    },
    tagType: { ...Ot.type, default: "info" }
  },
  emits: [
    xe,
    Xc,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, n) {
    const o = fe("select"), a = fe("input"), { t: c } = va(), t = Ks(e), {
      optionsArray: d,
      selectSize: l,
      readonly: r,
      handleResize: m,
      collapseTagSize: f,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: v,
      deleteTag: s,
      deleteSelected: i,
      handleOptionSelect: y,
      scrollToOption: w,
      setSelected: C,
      resetInputHeight: L,
      managePlaceholder: I,
      showClose: _,
      selectDisabled: b,
      iconComponent: E,
      iconReverse: A,
      showNewOption: R,
      emptyText: F,
      toggleLastOptionHitState: j,
      resetInputState: Z,
      handleComposition: Y,
      onOptionCreate: k,
      onOptionDestroy: D,
      handleMenuEnter: B,
      handleFocus: q,
      blur: te,
      handleBlur: Q,
      handleClearClick: he,
      handleClose: Ae,
      handleKeydownEscape: ve,
      toggleMenu: we,
      selectOption: Se,
      getValueKey: ee,
      navigateOptions: Ee,
      dropMenuVisible: Ie,
      reference: de,
      input: We,
      tooltipRef: qe,
      tags: Ue,
      selectWrapper: Oe,
      scrollbar: Ze,
      queryChange: Tn,
      groupQueryChange: mn
    } = Ws(e, t, n), { focus: Ge } = Di(de), {
      inputWidth: Be,
      selected: Qe,
      inputLength: Cn,
      filteredOptionsCount: ge,
      visible: ze,
      softFocus: sn,
      selectedLabel: en,
      hoverIndex: S,
      query: x,
      inputHovering: ue,
      currentPlaceholder: re,
      menuVisibleOnFocus: nn,
      isOnComposition: Dn,
      isSilentBlur: g,
      options: O,
      cachedOptions: N,
      optionsCount: H,
      prefixWidth: se,
      tagInMultiLine: un
    } = Po(t), fn = T(() => {
      const Te = [o.b()], $n = u(l);
      return $n && Te.push(o.m($n)), e.disabled && Te.push(o.m("disabled")), Te;
    }), on = T(() => ({
      maxWidth: `${u(Be) - 32}px`,
      width: "100%"
    }));
    tn(Do, yo({
      props: e,
      options: O,
      optionsArray: d,
      cachedOptions: N,
      optionsCount: H,
      filteredOptionsCount: ge,
      hoverIndex: S,
      handleOptionSelect: y,
      onOptionCreate: k,
      onOptionDestroy: D,
      selectWrapper: Oe,
      selected: Qe,
      setSelected: C,
      queryChange: Tn,
      groupQueryChange: mn
    })), Ve(() => {
      t.cachedPlaceHolder = re.value = e.placeholder || c("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (re.value = ""), ko(Oe, m), e.remote && e.multiple && L(), J(() => {
        const Te = de.value && de.value.$el;
        if (!!Te && (Be.value = Te.getBoundingClientRect().width, n.slots.prefix)) {
          const $n = Te.querySelector(`.${a.e("prefix")}`);
          se.value = Math.max($n.getBoundingClientRect().width + 5, 30);
        }
      }), C();
    }), e.multiple && !Array.isArray(e.modelValue) && n.emit(xe, []), !e.multiple && Array.isArray(e.modelValue) && n.emit(xe, "");
    const Le = T(() => {
      var Te, $n;
      return ($n = (Te = qe.value) == null ? void 0 : Te.popperRef) == null ? void 0 : $n.contentRef;
    });
    return {
      tagInMultiLine: un,
      prefixWidth: se,
      selectSize: l,
      readonly: r,
      handleResize: m,
      collapseTagSize: f,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: v,
      deleteTag: s,
      deleteSelected: i,
      handleOptionSelect: y,
      scrollToOption: w,
      inputWidth: Be,
      selected: Qe,
      inputLength: Cn,
      filteredOptionsCount: ge,
      visible: ze,
      softFocus: sn,
      selectedLabel: en,
      hoverIndex: S,
      query: x,
      inputHovering: ue,
      currentPlaceholder: re,
      menuVisibleOnFocus: nn,
      isOnComposition: Dn,
      isSilentBlur: g,
      options: O,
      resetInputHeight: L,
      managePlaceholder: I,
      showClose: _,
      selectDisabled: b,
      iconComponent: E,
      iconReverse: A,
      showNewOption: R,
      emptyText: F,
      toggleLastOptionHitState: j,
      resetInputState: Z,
      handleComposition: Y,
      handleMenuEnter: B,
      handleFocus: q,
      blur: te,
      handleBlur: Q,
      handleClearClick: he,
      handleClose: Ae,
      handleKeydownEscape: ve,
      toggleMenu: we,
      selectOption: Se,
      getValueKey: ee,
      navigateOptions: Ee,
      dropMenuVisible: Ie,
      focus: Ge,
      reference: de,
      input: We,
      tooltipRef: qe,
      popperPaneRef: Le,
      tags: Ue,
      selectWrapper: Oe,
      scrollbar: Ze,
      wrapperKls: fn,
      selectTagsStyle: on,
      nsSelect: o
    };
  }
}), Us = { class: "select-trigger" }, Gs = ["disabled", "autocomplete"], Ys = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Xs(e, n, o, a, c, t) {
  const d = Ce("el-tag"), l = Ce("el-tooltip"), r = Ce("el-icon"), m = Ce("el-input"), f = Ce("el-option"), p = Ce("el-scrollbar"), h = Ce("el-select-menu"), v = Ft("click-outside");
  return cn(($(), z("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onClick: n[23] || (n[23] = je((...s) => e.toggleMenu && e.toggleMenu(...s), ["stop"]))
  }, [
    le(l, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      "onUpdate:visible": n[22] || (n[22] = (s) => e.dropMenuVisible = s),
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
      default: W(() => [
        G("div", Us, [
          e.multiple ? ($(), z("div", {
            key: 0,
            ref: "tags",
            class: M(e.nsSelect.e("tags")),
            style: _e(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? ($(), z("span", {
              key: 0,
              class: M([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              le(d, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: n[0] || (n[0] = (s) => e.deleteTag(s, e.selected[0]))
              }, {
                default: W(() => [
                  G("span", {
                    class: M(e.nsSelect.e("tags-text")),
                    style: _e({ maxWidth: e.inputWidth - 123 + "px" })
                  }, $e(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? ($(), U(d, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: W(() => [
                  e.collapseTagsTooltip ? ($(), U(l, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: !1
                  }, {
                    default: W(() => [
                      G("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, "+ " + $e(e.selected.length - 1), 3)
                    ]),
                    content: W(() => [
                      G("div", {
                        class: M(e.nsSelect.e("collapse-tags"))
                      }, [
                        ($(!0), z(He, null, co(e.selected, (s, i) => ($(), z("div", {
                          key: i,
                          class: M(e.nsSelect.e("collapse-tag"))
                        }, [
                          ($(), U(d, {
                            key: e.getValueKey(s),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !s.isDisabled,
                            size: e.collapseTagSize,
                            hit: s.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (y) => e.deleteTag(y, s)
                          }, {
                            default: W(() => [
                              G("span", {
                                class: M(e.nsSelect.e("tags-text")),
                                style: _e({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, $e(s.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect"])) : ($(), z("span", {
                    key: 1,
                    class: M(e.nsSelect.e("tags-text"))
                  }, "+ " + $e(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : V("v-if", !0)
            ], 2)) : V("v-if", !0),
            V(" <div> "),
            e.collapseTags ? V("v-if", !0) : ($(), U(_o, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: W(() => [
                G("span", {
                  class: M([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  ($(!0), z(He, null, co(e.selected, (s) => ($(), U(d, {
                    key: e.getValueKey(s),
                    closable: !e.selectDisabled && !s.isDisabled,
                    size: e.collapseTagSize,
                    hit: s.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (i) => e.deleteTag(i, s)
                  }, {
                    default: W(() => [
                      G("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: _e({ maxWidth: e.inputWidth - 75 + "px" })
                      }, $e(s.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            V(" </div> "),
            e.filterable ? cn(($(), z("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": n[1] || (n[1] = (s) => e.query = s),
              type: "text",
              class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: _e({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: n[2] || (n[2] = (...s) => e.handleFocus && e.handleFocus(...s)),
              onBlur: n[3] || (n[3] = (...s) => e.handleBlur && e.handleBlur(...s)),
              onKeyup: n[4] || (n[4] = (...s) => e.managePlaceholder && e.managePlaceholder(...s)),
              onKeydown: [
                n[5] || (n[5] = (...s) => e.resetInputState && e.resetInputState(...s)),
                n[6] || (n[6] = De(je((s) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                n[7] || (n[7] = De(je((s) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                n[8] || (n[8] = De((...s) => e.handleKeydownEscape && e.handleKeydownEscape(...s), ["esc"])),
                n[9] || (n[9] = De(je((...s) => e.selectOption && e.selectOption(...s), ["stop", "prevent"]), ["enter"])),
                n[10] || (n[10] = De((...s) => e.deletePrevTag && e.deletePrevTag(...s), ["delete"])),
                n[11] || (n[11] = De((s) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: n[12] || (n[12] = (...s) => e.handleComposition && e.handleComposition(...s)),
              onCompositionupdate: n[13] || (n[13] = (...s) => e.handleComposition && e.handleComposition(...s)),
              onCompositionend: n[14] || (n[14] = (...s) => e.handleComposition && e.handleComposition(...s)),
              onInput: n[15] || (n[15] = (...s) => e.debouncedQueryChange && e.debouncedQueryChange(...s))
            }, null, 46, Gs)), [
              [jt, e.query]
            ]) : V("v-if", !0)
          ], 6)) : V("v-if", !0),
          le(m, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": n[16] || (n[16] = (s) => e.selectedLabel = s),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: M([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              n[17] || (n[17] = De(je((s) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              n[18] || (n[18] = De(je((s) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              De(je(e.selectOption, ["stop", "prevent"]), ["enter"]),
              De(e.handleKeydownEscape, ["esc"]),
              n[19] || (n[19] = De((s) => e.visible = !1, ["tab"]))
            ],
            onMouseenter: n[20] || (n[20] = (s) => e.inputHovering = !0),
            onMouseleave: n[21] || (n[21] = (s) => e.inputHovering = !1)
          }, xt({
            suffix: W(() => [
              e.iconComponent && !e.showClose ? ($(), U(r, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: W(() => [
                  ($(), U(An(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0),
              e.showClose && e.clearIcon ? ($(), U(r, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: W(() => [
                  ($(), U(An(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : V("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: W(() => [
                G("div", Ys, [
                  ne(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: W(() => [
        le(h, null, {
          default: W(() => [
            cn(le(p, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: W(() => [
                e.showNewOption ? ($(), U(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : V("v-if", !0),
                ne(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Jn, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? ($(), z(He, { key: 0 }, [
              e.$slots.empty ? ne(e.$slots, "empty", { key: 0 }) : ($(), z("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
              }, $e(e.emptyText), 3))
            ], 64)) : V("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var Js = /* @__PURE__ */ ie(qs, [["render", Xs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Zs = ce({
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
    const n = fe("select"), o = P(!0), a = Sn(), c = P([]);
    tn(Tt, yo({
      ...Po(e)
    }));
    const t = ae(Do);
    Ve(() => {
      c.value = d(a.subTree);
    });
    const d = (r) => {
      const m = [];
      return Array.isArray(r.children) && r.children.forEach((f) => {
        var p;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? m.push(f.component.proxy) : (p = f.children) != null && p.length && m.push(...d(f));
      }), m;
    }, { groupQueryChange: l } = kc(t);
    return K(l, () => {
      o.value = c.value.some((r) => r.visible === !0);
    }), {
      visible: o,
      ns: n
    };
  }
});
function Qs(e, n, o, a, c, t) {
  return cn(($(), z("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    G("li", {
      class: M(e.ns.be("group", "title"))
    }, $e(e.label), 3),
    G("li", null, [
      G("ul", {
        class: M(e.ns.b("group"))
      }, [
        ne(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Jn, e.visible]
  ]);
}
var Ct = /* @__PURE__ */ ie(Zs, [["render", Qs], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Xo = zn(Js, {
  Option: Pa,
  OptionGroup: Ct
}), Jo = Yc(Pa);
Yc(Ct);
const e1 = /* @__PURE__ */ ce({
  __name: "index",
  emits: ["change"],
  setup(e, { emit: n }) {
    const o = P(""), a = P(""), c = P(""), t = T(() => {
      a.value = "";
      let l = Fo.find((r) => r.code === o.value);
      return l ? l.children : [];
    }), d = T(() => {
      c.value = "";
      let l = t.value.find((r) => r.code === a.value);
      return l ? l.children : [];
    });
    return K(c, (l) => {
      let r = "", m = "", f = "";
      o.value && (r = Fo.find((h) => h.code === o.value).name), a.value && (m = t.value.find((h) => h.code === a.value).name), c.value && (f = d.value.find((h) => h.code === c.value).name);
      const p = {
        provice: {
          name: r,
          code: o.value
        },
        city: {
          name: m,
          code: a.value
        },
        area: {
          name: f,
          code: c.value
        }
      };
      n("change", p);
    }), (l, r) => ($(), z("div", null, [
      le(u(Xo), {
        modelValue: o.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => o.value = m),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u7701\u4EFD",
        clearable: !0
      }, {
        default: W(() => [
          ($(!0), z(He, null, co(u(Fo), (m) => ($(), U(u(Jo), {
            key: m.code,
            label: m.name,
            value: m.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      le(u(Xo), {
        clearable: !0,
        modelValue: a.value,
        "onUpdate:modelValue": r[1] || (r[1] = (m) => a.value = m),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u57CE\u5E02",
        disabled: !o.value,
        style: { margin: "0 10px" }
      }, {
        default: W(() => [
          ($(!0), z(He, null, co(u(t), (m) => ($(), U(u(Jo), {
            key: m.code,
            label: m.name,
            value: m.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"]),
      le(u(Xo), {
        modelValue: c.value,
        "onUpdate:modelValue": r[2] || (r[2] = (m) => c.value = m),
        class: "m-2",
        placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
        disabled: !a.value,
        clearable: !0
      }, {
        default: W(() => [
          ($(!0), z(He, null, co(u(d), (m) => ($(), U(u(Jo), {
            key: m.code,
            label: m.name,
            value: m.code
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), o1 = {
  install(e) {
    e.component("ChooseArea", e1);
  }
};
export {
  o1 as default
};
