/**
 * 互动古文教学平台 - 《思母》原文核心词解数据包
 */

const poemData = [
    // 第一句：霜殒芦花泪湿衣，
    { text: "霜", py: "shuāng", zh: "霜冻，这里比喻丧母之痛如寒霜侵袭。", en: "frost" },
    { text: "殒", py: "yǔn", zh: "坠落、死亡。这里指芦花遭霜打而凋零，比喻母亲去世。", en: "to fall / to die", exam: true },
    { text: "芦花", py: "lú huā", zh: "芦花，这里借代母爱（典出闵子骞芦衣顺母的故事）。", en: "reed catkins (symbolizing mother's love)", exam: true },
    { text: "泪", py: "lèi", zh: "眼泪、泪水。", en: "tears" },
    { text: "湿", py: "shī", zh: "沾湿、浸湿。", en: "to wet / to moisten" },
    { text: "衣", py: "yī", zh: "衣服、衣裳。", en: "clothes" },
    { text: "，", punc: true },

    // 第二句：白头无复倚柴扉。
    { text: "白头", py: "bái tóu", zh: "白发苍苍，指诗人自己或指母亲。此处指诗人自己因丧母而白头。", en: "white-haired (poet himself)" },
    { text: "无复", py: "wú fù", zh: "不再、再也没有。", en: "no longer / never again", exam: true },
    { text: "倚", py: "yǐ", zh: "依靠、倚靠。", en: "to lean on" },
    { text: "柴扉", py: "chái fēi", zh: "柴门，用树枝编成的简陋门。形容家境清贫。", en: "simple wooden door / humble home", exam: true },
    { text: "。", punc: true },

    // 第三句：去年五月黄梅雨，
    { text: "去年", py: "qù nián", zh: "去年，回忆过去。", en: "last year" },
    { text: "五月", py: "wǔ yuè", zh: "农历五月，黄梅时节。", en: "May (lunar calendar)" },
    { text: "黄梅雨", py: "huáng méi yǔ", zh: "春末夏初江南梅子黄熟时节所下的雨，又称梅雨。", en: "plum rain / rainy season", exam: true },
    { text: "，", punc: true },

    // 第四句：曾典袈裟籴米归。
    { text: "曾", py: "céng", zh: "曾经、过去。", en: "once / in the past" },
    { text: "典", py: "diǎn", zh: "典当、抵押。", en: "to pawn / to mortgage", exam: true },
    { text: "袈裟", py: "jiā shā", zh: "僧人的法衣。诗人是出家人。", en: "monk's robe / kasaya", exam: true },
    { text: "籴", py: "dí", zh: "买入粮食，与“粜”（卖出）相对。", en: "to buy grain", exam: true },
    { text: "米", py: "mǐ", zh: "粮食、米粮。", en: "rice / grain" },
    { text: "归", py: "guī", zh: "归来、回来。", en: "to return" },
    { text: "。", punc: true }
];

console.log("成功加载：text 原文数据包");
