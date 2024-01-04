import {D as w, l as b, o as l, c as r, b as t, F as f, f as g, S as u, X as v, t as _, u as m, a as i, w as x, s as y, _ as P, j as T, d as G, G as $, p as z} from "./entry.8d2c1b27.js";
import {_ as k} from "./logo.25272a22.js";
import {c as S, s as C} from "./becool-ui.57d74d49.js";
const j = {
    class: "flex justify-between gap-2 bg-white px-4 py-5 sm:px-6 lg:px-16"
}
  , A = {
    class: "flex items-center gap-6 sm:gap-16"
}
  , H = t("a", {
    class: "flex items-center gap-2 sm:gap-3",
    href: "/",
    title: "GPTs Hunter"
}, [t("img", {
    alt: "Gpts Hunter",
    class: "h-9 w-9 sm:h-10 sm:w-10",
    src: k
}), t("span", {
    class: "text-lg font-semibold text-zinc-900 sm:text-xl"
}, " GPTs Hunter ")], -1)
  , I = {
    class: "flex items-center gap-6 sm:gap-8"
}
  , N = ["href", "title", "onClick"]
  , V = {
    class: "flex shrink-0 items-center gap-2"
}
  , B = t("i", {
    class: "ri-translate-2"
}, null, -1)
  , F = [B]
  , M = t("i", {
    class: "ri-telegram-line"
}, null, -1)
  , D = [M]
  , L = t("i", {
    class: "ri-twitter-x-line"
}, null, -1)
  , O = [L]
  , W = t("i", {
    class: "ri-cup-line"
}, null, -1)
  , E = [W]
  , d = "flex h-9 w-9 items-center justify-center rounded-full text-lg text-zinc-700 transition hover:bg-orange-500/10 hover:text-orange-500"
  , R = {
    __name: "index",
    setup(c) {
        const h = w()
          , a = b(()=>{
            const n = [{
                href: "/feed",
                label: "Feed"
            }, {
                href: "https://www.gptshunter.com/submit-gpt",
                label: "Submit GPTs"
            }];
            return h.path === "/" && n.push({
                href: "https://geminiprochat.com?utm_source=gptshunter",
                label: "Gemini Pro Chat"
            }),
            n
        }
        )
          , p = [{
            label: "English",
            value: "en",
            href: "/"
        }, {
            label: "中文",
            value: "zh-CN",
            href: "/zh-CN"
        }]
          , s = n=>{
            try {
                const {$track: o} = y();
                o("menu.click", {
                    k: n
                })
            } catch {}
        }
        ;
        return (n,o)=>(l(),
        r("header", j, [t("div", A, [H, t("nav", I, [(l(!0),
        r(f, null, g(m(a), e=>(l(),
        r("a", {
            target: "_blank",
            key: e.href,
            class: u([(n._.provides[v] || n.$route).path === e.href ? "font-medium text-orange-500" : "text-zinc-500 hover:text-zinc-700", e.href === "https://www.gptshunter.com/submit-gpt" ? "hidden min-[480px]:flex" : ""]),
            href: e.href,
            title: e.label,
            onClick: ot=>s(e.label)
        }, _(e.label), 11, N))), 128))])]), t("div", V, [i(m(C), {
            placement: "bottom-end",
            "z-index": "999"
        }, {
            reference: x(()=>[t("div", {
                class: u([d, "cursor-pointer ui-open:bg-orange-500/10 ui-open:text-orange-500"])
            }, F, 2)]),
            default: x(()=>[(l(),
            r(f, null, g(p, e=>i(m(S), {
                key: e.value,
                as: e.value === "en" ? "a" : "span",
                classes: {
                    base: e.value === "en" ? "text-zinc-700 hover:text-orange-500" : "cursor-not-allowed opacity-60"
                },
                href: e.href,
                label: e.label
            }, null, 8, ["as", "classes", "href", "label"])), 64))]),
            _: 1
        }), t("a", {
            class: u(["hidden sm:flex", d]),
            href: "https://t.me/+rWwel19j-So2OWYx",
            target: "_blank"
        }, D), t("a", {
            href: "https://twitter.com/iamairyland",
            target: "_blank",
            class: u(d)
        }, O), t("a", {
            class: u(["hidden sm:flex", d]),
            href: "https://www.buymeacoffee.com/iamairyland",
            target: "_blank"
        }, E)])]))
    }
}
  , Y = {
    class: "mb-4 text-lg font-semibold text-zinc-500"
}
  , J = {
    class: "flex flex-col gap-3"
}
  , K = ["href", "target", "title"]
  , U = {
    __name: "index",
    props: {
        title: {
            type: String
        },
        links: {
            type: Array
        },
        external: {
            type: Boolean,
            default: !1
        }
    },
    setup(c) {
        const h = c
          , a = w()
          , p = b(()=>h.links.filter(s=>!s.route || s.route === a.path));
        return (s,n)=>(l(),
        r("div", null, [t("h3", Y, _(c.title), 1), t("div", J, [(l(!0),
        r(f, null, g(m(p), o=>(l(),
        r("a", {
            class: "text-md text-zinc-700 hover:text-orange-500",
            key: o.to,
            href: o.to,
            target: c.external ? "_blank" : void 0,
            title: o.title
        }, _(o.title), 9, K))), 128))])]))
    }
}
  , X = {}
  , q = {
    class: "bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16"
}
  , Q = {
    class: "flex flex-col gap-10 lg:flex-row lg:justify-between"
}
  , Z = T('<div class="max-w-[320px]"><a class="flex items-center gap-3" href="/" title="GPTsHunter"><img alt="Gpts Hunter" class="h-9 w-9" src="' + k + '"><span class="text-lg font-semibold text-orange-500"> GPTsHunter </span></a><p class="text-md mt-4 text-zinc-500"> Share and discover the best custom GPTs in GPT store and use on ChatGPT. </p></div>', 1)
  , tt = {
    class: "grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-20"
}
  , et = t("div", {
    class: "mt-16 flex flex-col items-center gap-2 border-t border-zinc-100 pt-8 sm:flex-row sm:justify-between sm:gap-4"
}, [t("span", {
    class: "text-xs text-zinc-500"
}, [G(" ©2023 GPTs Hunter - the first and the largest GPTs Directory. - "), t("span", null, "hi@ai.ci")]), t("div", {
    class: "text-xs text-zinc-500"
}, " Made in Toronto by AI & Airyland & Joanne ")], -1);
function st(c, h) {
    const a = U;
    return l(),
    r("footer", q, [t("div", Q, [Z, t("div", tt, [i(a, {
        title: "Policy",
        links: [{
            to: "/terms/privacy-policy",
            title: "Privacy Policy"
        }, {
            to: "/terms/terms-of-service",
            title: "Terms of Service"
        }, {
            to: "/blog/gptshunt/",
            title: "Story Behind Our Name"
        }]
    }), i(a, {
        title: "Products",
        external: "",
        links: [{
            to: "https://www.gptsapi.org",
            title: "GPTs API"
        }, {
            to: "https://www.gptshunt.com",
            title: "GPTs Hunt"
        }, {
            to: "https://chromewebstore.google.com/detail/gpts-hunter-discover-gpt/nnomlbpbkeaancjgfgplecfgkgecgmka",
            title: "Chrome extension"
        }, {
            to: "https://chat.openai.com/g/g-ULKThwTOa-gpts-hunter",
            title: "GPT by GPTsHunter(WIP)"
        }, {
            to: "https://AI.LS",
            title: "AI.LS"
        }, {
            to: "https://www.ip.network",
            title: "IP.network"
        }]
    }, null, 8, ["links"]), i(a, {
        title: "Friends",
        external: "",
        links: [{
            to: "https://www.typeframes.com?utm_source=gptshunter",
            title: "Typeframes"
        }, {
            to: "https://d.id",
            title: "d.id"
        }, {
            to: "https://bit.ly/49IwGpY",
            title: "FlowGPT",
            route: "/"
        }, {
            to: "https://monica.im/?utm=gh_card",
            title: "Monica"
        }, {
            to: "https://www.magicanimate.org",
            title: "MagicAnimate"
        }, {
            to: "https://www.outfitanyone.org",
            title: "OutfitAnyone"
        }, {
            to: "https://gapier.com/?utm_source=gptshunter",
            title: "gapier",
            route: "/"
        }]
    }, null, 8, ["links"])])]), et])
}
const nt = P(X, [["render", st]])
  , it = {
    __name: "default",
    setup(c) {
        function h() {
            if (document.visibilityState === "hidden") {
                try {
                    const {$track: s} = y();
                    s("page.update", {
                        k: document.location.href.replace("https://www.gptshunter.com", "")
                    })
                } catch {}
                location.reload()
            }
        }
        function a() {
            setInterval(h, 45 * 60 * 1e3)
        }
        typeof document < "u" && document.location.href.includes("www.gptshunter.com") && a();
        async function p() {
            if (document.location.href.includes("https://www.gptshunt.com"))
                try {
                    (await (await fetch("https://www.gptshunter.com/api/ping")).json()).error === 0 && (document.location.href = "https://www.gptshunter.com?utm_source=gptshunt.com")
                } catch {}
        }
        return $(async()=>{
            p()
        }
        ),
        (s,n)=>{
            const o = R
              , e = nt;
            return l(),
            r(f, null, [i(o), t("main", null, [z(s.$slots, "default")]), i(e)], 64)
        }
    }
};
export {it as default};
