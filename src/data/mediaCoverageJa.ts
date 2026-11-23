// Japanese text for mediaCoverage.ts, keyed by ref.
// `alsoOn` labels are in the same order as the English entry's `alsoOn` list.

export interface MediaItemJa {
  title: string;
  outlet?: string;
  alsoOn?: string[];
}

export const countryJa: Record<string, string> = {
  Japan: '日本',
  Switzerland: 'スイス',
  'United States': 'アメリカ',
  Germany: 'ドイツ',
  'United Kingdom': 'イギリス',
  Brazil: 'ブラジル',
  Denmark: 'デンマーク',
  Finland: 'フィンランド',
  UAE: 'アラブ首長国連邦',
  Australia: 'オーストラリア',
  'South Korea': '韓国',
  Sweden: 'スウェーデン',
};

export const mediaItemsJa: Record<string, MediaItemJa> = {
  // ── 2026年11月 ──
  R114: { outlet: 'KTLA 5（ロサンゼルス）', title: '動画：単独無寄港での太平洋横断に向けて準備を進めるHiroを、ロサンゼルスのテレビ局が取材しました。' },
  R049: { outlet: 'KAB 熊本朝日放送', title: '熊本県知事との面会と、2028年に予定する単独横断について報じました。' },
  R020: { outlet: 'TKU テレビ熊本 / FNNプライムオンライン', title: '知事表敬訪問と、2028年のサンディエゴ出航について報じました。' },
  R021: { title: '須磨での講演と、音声ナビアプリ「Leena」を使った単独横断の計画を紹介しました。' },
  R047: { outlet: '熊本県', title: '11月3日の知事表敬訪問と、2028年の単独無寄港横断計画についての公式記録です。' },
  R110: { title: '主催者が、10月31日の講演とこれからの単独横断について綴ったコラムです。' },
  R038: {
    outlet: '日テレNEWS NNN / KKT 熊本県民テレビ',
    title: '天草・牛深を目指す、2028年の単独横断計画について報じました。',
    alsoOn: ['KKTの動画（YouTube）', 'ライブドアニュース'],
  },
  R036: { outlet: 'RKK 熊本放送', title: '動画：熊本県知事に、単独無寄港での太平洋横断計画を報告しました。' },

  // ── 2026年10月 ──
  R018: { outlet: '世界経済フォーラム', title: '動画「This man sailed blind across the Pacific」— Hiroの経験と、リーダーシップの学び。' },
  R054: { outlet: '熊本県', title: '知事の記者会見で、Hiroの単独無寄港横断の計画と、表敬訪問の予定が紹介されました。' },
  R017: {
    outlet: 'サンテレビ',
    title: '須磨ヨットハーバーでの講演と、新たな単独挑戦について報じました。',
    alsoOn: ['サンテレビニュースの動画（YouTube）'],
  },
  R064: { title: '11月14日のAltaSeaオープンハウスへの登壇と、今後の横断についてのお知らせです。' },
  R109: { outlet: '尼崎経済新聞', title: '須磨での講演と単独挑戦を紹介する「SUMArt DAYS」のお知らせです。' },
  R059: { outlet: '須磨ユニバーサルビーチプロジェクト / PR TIMES', title: '単独での太平洋横断を前に、10月25日に須磨でHiroの講演を開くことを発表しました。' },

  // ── 2026年9月 ──
  R065: {
    outlet: '古野電気（FURUNO）',
    title: 'Hiroをはじめ、海に挑戦する人たちを応援するウェブサイトを公開しました。',
    alsoOn: ['尼崎経済新聞', '財経新聞'],
  },
  R085: { title: 'FURUNOの「海の挑戦者」応援サイト（Hiroのプロジェクトを含む）を紹介しました。' },

  // ── 2026年8月 ──
  R069: { outlet: 'ゴム報知新聞NEXT', title: '三洋貿易の対談動画と、準備が進む太平洋横断プロジェクトを取り上げました。' },
  R112: { title: 'Hiroが単独横断に挑む理由と、講演を企画したきっかけを綴ったコラムです。' },
  R073: {
    outlet: '三洋貿易',
    title: 'Hiro、新谷正伸社長、伽説いわし氏が登場する3部構成の動画シリーズ。横断とその支援について語ります。',
    alsoOn: ['第1章：岩本光弘氏編（YouTube）', '第3章：特別対談編（YouTube）'],
  },
  R111: { title: '共催者が、Hiroの講演、ダボスへの招待、単独横断について綴ったコラムです。' },
  R030: { outlet: 'NHKラジオ', title: 'NHKラジオ番組：単独での太平洋横断に向けて準備する全盲の冒険家、岩本光弘さん。' },

  // ── 2026年7月 ──
  R022: {
    outlet: '世界経済フォーラム — Meet the Leader ポッドキャスト',
    title: 'ポッドキャスト：不確実さ、パートナーシップ、恐れ、そして行動する決断について語りました。',
    alsoOn: ['日本語のエピソードページ'],
  },
  R106: { title: 'TV Globo「Fantástico」の特集を引用した、ブラジルの雑誌の記事です。' },
  R029: { title: 'サンディエゴでHiroにインタビューした、6分間のテレビ特集です。' },

  // ── 2026年6月 ──
  R070: { outlet: '古野電気（FURUNO）— umi no oto（note）', title: '単独横断、アプリ「Leena」、支える人たちへの信頼について語ったインタビューです。' },

  // ── 2026年3月 ──
  R074: { title: 'イベント報告：3月19日の講演、ダボスでの映像、次の横断に向けた準備について。' },
  R016: { title: 'ポイント・ロマから天草へ、単独無寄港の太平洋横断に出発する計画を報じました。' },
  R044: { title: '前例のない単独での太平洋横断の計画と、それを支えるシステムを紹介しました。' },

  // ── 2026年2月 ──
  R075: { outlet: 'Management by Philosophy', title: 'Jun Mori氏が、ダボスや単独横断についてHiroと交わした対話を振り返ります。' },
  R023: {
    title: 'ダボスでのインタビュー。対話と可能性についてのHiroの考えに迫ります。',
    alsoOn: ['2ページ目', '3ページ目'],
  },
  R015: { title: 'Challenged Athletes Foundationでの記者会見と、航海の準備について報じました。' },
  R014: {
    title: '「Giving courage to others」— Hiroの単独挑戦を紹介する短い記事です。',
    alsoOn: ['BARCOS i BARCOS（ポルトガル語）'],
  },
  R013: { title: '音声ナビ「Leena」を使った、全盲の日本人セーラーによる単独太平洋横断の計画を紹介しました。' },
  R113: { title: 'ダボスでのHiroの講演動画を、日本語の要約とともに紹介しています。' },
  R011: { title: '1月28日の記者会見、単独横断、そしてそれを支える人たちについて報じました。' },
  R063: { title: '全盲のセーラー岩本光弘、テクノロジーで可能性の限界を塗り替える歴史的な太平洋横断プロジェクト（英語のプレスリリース）。' },
  R010: { outlet: '日本海事新聞', title: '古野電気による横断の支援について報じました。' },
  R060: {
    outlet: 'Runner’s Wellness / PR TIMES',
    title: 'サンディエゴでの記者会見、テクノロジー、教育の計画についてのプレスリリースです。',
    alsoOn: ['東京新聞 × PR TIMES', 'マピオンニュース'],
  },

  // ── 2026年1月 ──
  R024: { title: '歴史的な単独での太平洋横断に向けて準備する、サンディエゴの全盲のセーラー。', alsoOn: ['ABC 10Newsの動画（YouTube）'] },
  R035: { outlet: '日本経済新聞', title: '古野電気による単独横断の支援と、専用の音声ナビアプリについて報じました。' },
  R062: { title: 'NBC 7によるHiroの単独横断の記事を紹介した、ニュースまとめ記事です。' },
  R025: { title: 'サンディエゴから日本への単独航海に向けた、Hiroの準備を伝える動画です。', alsoOn: ['ショート版（YouTube Shorts）'] },
  R027: { title: 'サンディエゴから日本へ向かう、Hiroの単独航海の計画を紹介しました。' },
  R028: { title: 'ひとりで太平洋を渡り、日本を目指す準備を進める全盲のセーラー。' },
  R009: {
    outlet: '古野電気（FURUNO）',
    title: '単独無寄港の横断に向けて、航海機器の提供と音声アプリの開発による技術協賛を発表しました。',
    alsoOn: ['英語のお知らせ', 'MIRAI PULSE 解説記事（英語）', 'PR TIMES'],
  },
  R031: {
    outlet: 'ゴールドウイン / HELLY HANSEN',
    title: '専用に開発したセーリングウェアの提供による公式サポートを発表しました。',
    alsoOn: ['PR TIMES', 'Sportsmania', 'マピオンニュース'],
  },
  R042: { title: '「And I Chose to Live」— 全盲のセーラー岩本光弘がWEFに登壇（英語のプレスリリース）。' },
  R078: { outlet: '世界経済フォーラム', title: '「Sailing through Barriers」— ダボスでのHiroのセッションの公式動画です。' },
  R004: {
    outlet: 'Runner’s Wellness / PR TIMES',
    title: 'ダボスでの講演と、単独無寄港の太平洋横断についてのプレスリリースです。',
    alsoOn: ['エキサイトニュース', 'Infoseekニュース', 'STRAIGHT PRESS'],
  },
  R089: { title: 'ダボスへの登壇と、単独無寄港の太平洋横断の計画をまとめた記事です。' },
  R102: { title: '単独での太平洋横断の計画、ヨット、テクノロジー、そして準備について紹介しました。' },
  R051: { outlet: 'ゴムタイムス', title: '三洋貿易による横断の支援について報じました。' },
  R050: { outlet: 'ゴム報知新聞NEXT', title: '三洋貿易の支援と、ダボスへの登壇予定について報じました。' },
  R002: { outlet: 'KAZI online（舵社）', title: 'Hiroの新たな挑戦、単独での太平洋横断を紹介しました。' },
  R068: { outlet: '世界経済フォーラム', title: '年次総会2026に参加するアート・文化分野のリーダーの一人として、岩本光弘を紹介しました。' },
  R001: {
    outlet: '三洋貿易',
    title: '太平洋横断への協賛と、Hiroのダボス登壇を発表しました。',
    alsoOn: ['PR TIMES', 'プレスリリース（PDF）', 'PR TIMES（PDF）'],
  },
  R071: { outlet: '三洋貿易', title: '動画：三洋貿易がHiroを応援する理由。' },
  R052: {
    outlet: 'Runner’s Wellness / PR TIMES',
    title: 'プロジェクトの始動と、ダボスへの登壇決定を発表しました。',
    alsoOn: ['マピオンニュース'],
  },
  R093: { title: 'アプリを使った音声ナビゲーションを紹介する公式動画です。' },
  R067: { outlet: '世界経済フォーラム', title: 'ダボス2026のアート・文化プログラムの参加者として、Hiroを紹介しました。' },
};
