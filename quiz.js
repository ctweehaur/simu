/**
 * 互动古文教学平台 - 《思母》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“霜殒芦花泪湿衣”中“芦花”借用了什么典故？",
        py: "shuāng yǔn lú huā lèi shī yī zhōng lú huā jiè yòng le shén me diǎn gù",
        en: "What allusion does 'reed catkins' refer to in this line?",
        options: [
            {
                text: "闵子骞芦衣顺母，借代母爱",
                py: "mǐn zǐ qiān lú yī shùn mǔ jiè dài mǔ ài",
                en: "Min Ziqian's story of filial piety, symbolizing mother's love",
                correct: true,
                explanation: "典出闵子骞芦衣顺母的故事。闵子骞少时受后母虐待，后母以芦花塞其衣，而棉花给自己亲生儿子。子骞以孝心感动后母，后世以芦花代指母爱。",
                explanationPy: "diǎn chū mǐn zǐ qiān lú yī shùn mǔ de gù shì mǐn zǐ qiān shào shí shòu hòu mǔ nüè dài hòu mǔ yǐ lú huā sāi qí yī ér mián huā gěi zì jǐ qīn shēng ér zǐ zǐ qiān yǐ xiào xīn gǎn dòng hòu mǔ hòu shì yǐ lú huā dài zhǐ mǔ ài",
                explanationEn: "This alludes to Min Ziqian's story of filial piety. His stepmother mistreated him, putting reed catkins in his clothes while her own son wore cotton. His filial devotion moved her, and later generations use 'reed catkins' to symbolize motherly love."
            },
            {
                text: "李白芦花典故，借代风景",
                py: "lǐ bái lú huā diǎn gù jiè dài fēng jǐng",
                en: "Li Bai's reed catkin allusion, symbolizing scenery",
                correct: false,
                explanation: "诗中并非借李白典故，而是借用闵子骞的孝道典故，芦花象征母爱而非风景。",
                explanationPy: "shī zhōng bìng fēi jiè lǐ bái diǎn gù ér shì jiè yòng mǐn zǐ qiān de xiào dào diǎn gù lú huā xiàng zhēng mǔ ài ér fēi fēng jǐng",
                explanationEn: "The poem does not allude to Li Bai; it refers to Min Ziqian's filial story. Reed catkins symbolize mother's love, not scenery."
            },
            {
                text: "表示秋天景色，没有典故",
                py: "biǎo shì qiū tiān jǐng sè méi yǒu diǎn gù",
                en: "Describes autumn scenery without any allusion",
                correct: false,
                explanation: "“芦花”在此处有特定典故，并非单纯写景。诗人借闵子骞的孝道故事，表达对母亲的思念。",
                explanationPy: "lú huā zài cǐ chù yǒu tè dìng diǎn gù bìng fēi dān chún xiě jǐng shī rén jiè mǐn zǐ qiān de xiào dào gù shì biǎo dá duì mǔ qīn de sī niàn",
                explanationEn: "'Reed catkins' here carries a specific allusion, not merely scenery. The poet uses Min Ziqian's story to express longing for his mother."
            },
            {
                text: "表示丧母之痛，芦花象征悲伤",
                py: "biǎo shì sàng mǔ zhī tòng lú huā xiàng zhēng bēi shāng",
                en: "Expresses grief at losing mother, symbolizing sorrow",
                correct: false,
                explanation: "芦花象征的是母爱而非悲伤本身。霜殒芦花才表示母亲离世，诗人因此泪湿衣裳。",
                explanationPy: "lú huā xiàng zhēng de shì mǔ ài ér fēi bēi shāng běn shēn shuāng yǔn lú huā cái biǎo shì mǔ qīn lí shì shī rén yīn cǐ lèi shī yī shang",
                explanationEn: "Reed catkins symbolize mother's love, not sorrow itself. The frost withering the reeds represents the mother's passing, causing the poet's tears."
            }
        ]
    },
    {
        id: 2,
        text: "“白头无复倚柴扉”中“无复”是什么意思？",
        py: "bái tóu wú fù yǐ chái fēi zhōng wú fù shì shén me yì sī",
        en: "What does '无复' mean in this line?",
        options: [
            {
                text: "不再、再也没有",
                py: "bù zài zài yě méi yǒu",
                en: "No longer, never again",
                correct: true,
                explanation: "母亲已经去世，再也见不到她倚门盼儿归来的身影。“无复”表达了诗人无限的失落与思念。",
                explanationPy: "mǔ qīn yǐ jīng qù shì zài yě jiàn bù dào tā yǐ mén pàn ér guī lái de shēn yǐng wú fù biǎo dá le shī rén wú xiàn de shī luò yǔ sī niàn",
                explanationEn: "The mother has passed away; never again will the poet see her waiting at the door. '无复' expresses the poet's deep loss and longing."
            },
            {
                text: "再次、又一次",
                py: "zài cì yòu yī cì",
                en: "Again, once more",
                correct: false,
                explanation: "“无复”是“不再”之意，而非“再次”。诗人用此表达母亲再也不能倚门等待的残酷事实。",
                explanationPy: "wú fù shì bù zài zhī yì ér fēi zài cì shī rén yòng cǐ biǎo dá mǔ qīn zài yě bù néng yǐ mén děng dài de cán kù shì shí",
                explanationEn: "'无复' means 'no longer,' not 'again.' The poet uses it to express the painful fact that his mother can no longer wait for him."
            },
            {
                text: "不断、连续不断",
                py: "bù duàn lián xù bù duàn",
                en: "Continuously, without stop",
                correct: false,
                explanation: "“无复”指“不再”，与“不断”意思相反。此处强调母亲去世后，再也无法相见。",
                explanationPy: "wú fù zhǐ bù zài yǔ bù duàn yì sī xiāng fǎn cǐ chù qiáng diào mǔ qīn qù shì hòu zài yě wú fǎ xiāng jiàn",
                explanationEn: "'无复' means 'no longer,' opposite to 'continuously.' It emphasizes that after the mother's death, they can never meet again."
            },
            {
                text: "曾经、从前",
                py: "céng jīng cóng qián",
                en: "Once, in the past",
                correct: false,
                explanation: "“无复”是“不再”，是未来的否定，而非回忆过去。“曾”才是回忆过去的标志词。",
                explanationPy: "wú fù shì bù zài shì wèi lái de fǒu dìng ér fēi huí yì guò qù céng cái shì huí yì guò qù de biāo zhì cí",
                explanationEn: "'无复' means 'no longer,' a negation of the future, not a recollection of the past. '曾' is the marker for recalling the past."
            }
        ]
    },
    {
        id: 3,
        text: "诗人为什么要典当袈裟？",
        py: "shī rén wèi shén me yào diǎn dàng jiā shā",
        en: "Why did the poet pawn his monk's robe?",
        options: [
            {
                text: "换取米粮奉养母亲",
                py: "huàn qǔ mǐ liáng fèng yǎng mǔ qīn",
                en: "To buy rice to support his mother",
                correct: true,
                explanation: "诗人虽为僧人，过着清贫淡泊的生活，但仍时时接济老母，典当袈裟换取米粮，体现了他的孝心。",
                explanationPy: "shī rén suī wèi sēng rén guò zhe qīng pín dàn bó de shēng huó dàn réng shí shí jiē jì lǎo mǔ diǎn dàng jiā shā huàn qǔ mǐ liáng tǐ xiàn le tā de xiào xīn",
                explanationEn: "Though a monk living a simple and poor life, he still provided for his elderly mother, pawning his robe for rice, showing his filial devotion."
            },
            {
                text: "换取钱财买酒喝",
                py: "huàn qǔ qián cái mǎi jiǔ hē",
                en: "To exchange for money to buy wine",
                correct: false,
                explanation: "诗中明确写“籴米归”，即买米回家奉养母亲，与买酒无关。僧人清修，不为饮酒而典当袈裟。",
                explanationPy: "shī zhōng míng què xiě dí mǐ guī jí mǎi mǐ huí jiā fèng yǎng mǔ qīn yǔ mǎi jiǔ wú guān sēng rén qīng xiū bù wéi yǐn jiǔ ér diǎn dàng jiā shā",
                explanationEn: "The poem clearly states 'buying rice,' meaning to support his mother, not buying wine. A monk would not pawn his robe for wine."
            },
            {
                text: "接济穷苦百姓",
                py: "jiē jì qióng kǔ bǎi xìng",
                en: "To help the poor",
                correct: false,
                explanation: "诗中典当袈裟是为母亲买米，而非接济他人。诗人虽为僧，首要孝敬的是自己的母亲。",
                explanationPy: "shī zhōng diǎn dàng jiā shā shì wèi mǔ qīn mǎi mǐ ér fēi jiē jì tā rén shī rén suī wéi sēng shǒu yào xiào jìng de shì zì jǐ de mǔ qīn",
                explanationEn: "The pawn was for his mother's rice, not to help others. Though a monk, his first duty was to his own mother."
            },
            {
                text: "向寺庙缴纳费用",
                py: "xiàng sì miào jiǎo nà fèi yòng",
                en: "To pay temple fees",
                correct: false,
                explanation: "诗中无任何提及寺庙费用。典当袈裟的目的明确是为了“籴米归”，即买米回家奉养母亲。",
                explanationPy: "shī zhōng wú rèn hé tí jí sì miào fèi yòng diǎn dàng jiā shā de mù dì míng què shì wèi le dí mǐ guī jí mǎi mǐ huí jiā fèng yǎng mǔ qīn",
                explanationEn: "There is no mention of temple fees. The purpose of pawning was clearly 'to buy rice' for his mother."
            }
        ]
    },
    {
        id: 4,
        text: "这首诗主要运用了什么手法来表达情感？",
        py: "zhè shǒu shī zhǔ yào yùn yòng le shén me shǒu fǎ lái biǎo dá qíng gǎn",
        en: "What technique does the poem mainly use to express emotion?",
        options: [
            {
                text: "今昔对比",
                py: "jīn xī duì bǐ",
                en: "Contrast between past and present",
                correct: true,
                explanation: "前两句写今日母亲去世后的凄凉（白头无复倚柴扉），后两句回忆去年黄梅时节典当袈裟买米的往事（曾典袈裟籴米归），通过今昔对比深化了思念之情。",
                explanationPy: "qián liǎng jù xiě jīn rì mǔ qīn qù shì hòu de qī liáng hòu liǎng jù huí yì qù nián huáng méi shí jié diǎn dàng jiā shā mǎi mǐ de wǎng shì tōng guò jīn xī duì bǐ shēn huà le sī niàn zhī qíng",
                explanationEn: "The first two lines describe the desolation after the mother's death today; the last two recall last year's memory of pawning the robe for rice. The past-present contrast deepens the longing."
            },
            {
                text: "借景抒情",
                py: "jiè jǐng shū qíng",
                en: "Expressing emotion through scenery",
                correct: false,
                explanation: "诗中虽有“霜殒芦花”的景物描写，但主要手法是今昔对比，借景物起兴引出情感，而非以写景为主。",
                explanationPy: "shī zhōng suī yǒu shuāng yǔn lú huā de jǐng wù miáo xiě dàn zhǔ yào shǒu fǎ shì jīn xī duì bǐ jiè jǐng wù qǐ xīng yǐn chū qíng gǎn ér fēi yǐ xiě jǐng wéi zhǔ",
                explanationEn: "Though there is scenery (frost withering reeds), the main technique is past-present contrast. Scenery introduces the emotion but is not the primary focus."
            },
            {
                text: "直抒胸臆",
                py: "zhí shū xiōng yì",
                en: "Direct expression of feelings",
                correct: false,
                explanation: "诗人通过回忆往事来表达情感，是间接抒情，而非直接抒情。“直抒胸臆”是直接说出自己的感受。",
                explanationPy: "shī rén tōng guò huí yì wǎng shì lái biǎo dá qíng gǎn shì jiān jiē shū qíng ér fēi zhí jiē shū qíng zhí shū xiōng yì shì zhí jiē shuō chū zì jǐ de gǎn shòu",
                explanationEn: "The poet expresses emotion through recalling the past (indirect expression), not directly stating feelings."
            },
            {
                text: "托物言志",
                py: "tuō wù yán zhì",
                en: "Expressing ideals through objects",
                correct: false,
                explanation: "诗人通过芦花、柴扉、袈裟等意象表达对母亲的思念，但主要目的不是表达志向，而是抒发哀思，属于借物抒情。",
                explanationPy: "shī rén tōng guò lú huā chái fēi jiā shā děng yì xiàng biǎo dá duì mǔ qīn de sī niàn dàn zhǔ yào mù dì bù shì biǎo dá zhì xiàng ér shì shū fā āi sī shǔ yú jiè wù shū qíng",
                explanationEn: "The poet uses imagery (reeds, door, robe) to express longing, but the main purpose is to express grief, not ideals."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");
