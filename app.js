const STORAGE_KEY = "pokesuri-tier-maker-state";
const STORAGE_SCHEMA_VERSION = 5;
const LEGACY_STORAGE_KEYS = [
  "pokesuri-tier-maker-state-v4",
  "pokesuri-tier-maker-state-v3",
  "pokesuri-tier-maker-state-v2",
  "pokesuri-tier-maker-state-v1",
];

const finalPokemon = [
  ["venusaur", "フシギバナ", 3, "食材", "くさ"], ["charizard", "リザードン", 6, "食材", "ほのお"],
  ["blastoise", "カメックス", 9, "食材", "みず"], ["butterfree", "バタフリー", 12, "きのみ", "むし"],
  ["raticate", "ラッタ", 20, "きのみ", "ノーマル"], ["arbok", "アーボック", 24, "きのみ", "どく"],
  ["pikachu-halloween", "ハロウィンピカチュウ", 25, "きのみ", "でんき"], ["pikachu-holiday", "ホリデーピカチュウ", 25, "スキル", "でんき"],
  ["raichu", "ライチュウ", 26, "きのみ", "でんき"], ["sandslash", "サンドパン", 28, "スキル", "じめん"],
  ["clefable", "ピクシー", 36, "きのみ", "フェアリー"], ["ninetales", "キュウコン", 38, "きのみ", "ほのお"],
  ["ninetales-alola", "アローラキュウコン", 38, "きのみ", "こおり"], ["wigglytuff", "プクリン", 40, "スキル", "フェアリー"],
  ["dugtrio", "ダグトリオ", 51, "食材", "じめん"], ["persian", "ペルシアン", 53, "スキル", "ノーマル"],
  ["golduck", "ゴルダック", 55, "スキル", "みず"], ["primeape", "オコリザル", 57, "きのみ", "かくとう"],
  ["arcanine", "ウインディ", 59, "スキル", "ほのお"], ["victreebel", "ウツボット", 71, "食材", "くさ"],
  ["golem", "ゴローニャ", 76, "食材", "いわ"], ["slowbro", "ヤドラン", 80, "スキル", "みず"],
  ["farfetchd", "カモネギ", 83, "食材", "ひこう"], ["dodrio", "ドードリオ", 85, "きのみ", "ひこう"],
  ["gengar", "ゲンガー", 94, "食材", "ゴースト"], ["onix", "イワーク", 95, "きのみ", "いわ"],
  ["marowak", "ガラガラ", 105, "きのみ", "じめん"], ["kangaskhan", "ガルーラ", 115, "食材", "ノーマル"],
  ["mr-mime", "バリヤード", 122, "食材", "エスパー"],
  ["pinsir", "カイロス", 127, "食材", "むし"], ["ditto", "メタモン", 132, "食材", "ノーマル"],
  ["eevee-holiday", "ホリデーイーブイ", 133, "きのみ", "ノーマル"], ["eevee-halloween", "ハロウィンイーブイ", 133, "スキル", "ノーマル"],
  ["vaporeon", "シャワーズ", 134, "スキル", "みず"], ["jolteon", "サンダース", 135, "スキル", "でんき"],
  ["flareon", "ブースター", 136, "スキル", "ほのお"], ["dragonite", "カイリュー", 149, "食材", "ドラゴン"],
  ["mew", "ミュウ", 151, "オール", "エスパー"], ["meganium", "メガニウム", 154, "きのみ", "くさ"],
  ["typhlosion", "バクフーン", 157, "きのみ", "ほのお"], ["feraligatr", "オーダイル", 160, "きのみ", "みず"],
  ["xatu", "ネイティオ", 178, "きのみ", "エスパー"], ["ampharos", "デンリュウ", 181, "スキル", "でんき"],
  ["sudowoodo", "ウソッキー", 185, "スキル", "いわ"], ["quagsire", "ヌオー", 195, "食材", "みず"],
  ["espeon", "エーフィ", 196, "スキル", "エスパー"], ["umbreon", "ブラッキー", 197, "スキル", "あく"],
  ["slowking", "ヤドキング", 199, "スキル", "みず"], ["wobbuffet", "ソーナンス", 202, "スキル", "エスパー"],
  ["steelix", "ハガネール", 208, "きのみ", "はがね"], ["shuckle", "ツボツボ", 213, "スキル", "むし"],
  ["heracross", "ヘラクロス", 214, "スキル", "むし"], ["weavile", "マニューラ", 461, "きのみ", "あく"],
  ["delibird", "デリバード", 225, "食材", "ひこう"], ["houndoom", "ヘルガー", 229, "きのみ", "あく"],
  ["blissey", "ハピナス", 242, "食材", "ノーマル"], ["raikou", "ライコウ", 243, "スキル", "でんき"],
  ["entei", "エンテイ", 244, "スキル", "ほのお"], ["suicune", "スイクン", 245, "スキル", "みず"],
  ["tyranitar", "バンギラス", 248, "食材", "あく"], ["spheal-holiday", "ホリデータマザラシ", 363, "スキル", "こおり"],
  ["sceptile", "ジュカイン", 254, "スキル", "くさ"],
  ["blaziken", "バシャーモ", 257, "きのみ", "かくとう"], ["swampert", "ラグラージ", 260, "きのみ", "じめん"],
  ["gardevoir", "サーナイト", 282, "スキル", "エスパー"], ["slaking", "ケッキング", 289, "きのみ", "ノーマル"],
  ["sableye", "ヤミラミ", 302, "スキル", "あく"], ["mawile", "クチート", 303, "食材", "はがね"],
  ["aggron", "ボスゴドラ", 306, "食材", "はがね"], ["plusle", "プラスル", 311, "スキル", "でんき"],
  ["swalot", "マルノーム", 317, "スキル", "どく"], ["minun", "マイナン", 312, "スキル", "でんき"],
  ["flygon", "フライゴン", 330, "食材", "じめん"], ["altaria", "チルタリス", 334, "きのみ", "ドラゴン"],
  ["banette", "ジュペッタ", 354, "きのみ", "ゴースト"], ["absol", "アブソル", 359, "食材", "あく"],
  ["walrein", "トドゼルガ", 365, "きのみ", "こおり"], ["salamence", "ボーマンダ", 373, "きのみ", "ドラゴン"],
  ["latias", "ラティアス", 380, "スキル", "ドラゴン"],
  ["luxray", "レントラー", 405, "食材", "でんき"], ["drifblim", "フワライド", 426, "スキル", "ゴースト"],
  ["honchkrow", "ドンカラス", 430, "スキル", "あく"], ["spiritomb", "ミカルゲ", 442, "食材", "あく"],
  ["lucario", "ルカリオ", 448, "スキル", "かくとう"], ["toxicroak", "ドクロッグ", 454, "食材", "どく"],
  ["abomasnow", "ユキノオー", 460, "食材", "こおり"], ["magnezone", "ジバコイル", 462, "スキル", "はがね"],
  ["togekiss", "トゲキッス", 468, "スキル", "フェアリー"], ["leafeon", "リーフィア", 470, "スキル", "くさ"],
  ["glaceon", "グレイシア", 471, "スキル", "こおり"], ["gallade", "エルレイド", 475, "スキル", "かくとう"],
  ["cresselia", "クレセリア", 488, "スキル", "エスパー"], ["darkrai", "ダークライ", 491, "オール", "あく"],
  ["musharna", "ムシャーナ", 518, "きのみ", "エスパー"], ["crustle", "イワパレス", 558, "スキル", "むし"],
  ["braviary", "ウォーグル", 628, "スキル", "ひこう"], ["tyrantrum", "ガチゴラス", 697, "きのみ", "いわ"],
  ["sylveon", "ニンフィア", 700, "スキル", "フェアリー"], ["dedenne", "デデンネ", 702, "スキル", "でんき"],
  ["gourgeist", "パンプジン", 711, "食材", "ゴースト"], ["noivern", "オンバーン", 715, "スキル", "ドラゴン"],
  ["vikavolt", "クワガノン", 738, "食材", "むし"], ["ribombee", "アブリボン", 743, "食材", "フェアリー"],
  ["bewear", "キテルグマ", 760, "食材", "かくとう"], ["comfey", "キュワワー", 764, "食材", "フェアリー"],
  ["togedemaru", "トゲデマル", 777, "スキル", "はがね"], ["mimikyu", "ミミッキュ", 778, "スキル", "ゴースト"],
  ["cramorant", "ウッウ", 845, "食材", "ひこう"], ["toxtricity-low", "ストリンダー(ロー)", 849, "スキル", "どく"],
  ["toxtricity-amped", "ストリンダー(ハイ)", 849, "スキル", "どく"], ["meowscarada", "マスカーニャ", 908, "食材", "あく"],
  ["skeledirge", "ラウドボーン", 911, "食材", "ゴースト"], ["quaquaval", "ウェーニバル", 914, "食材", "かくとう"],
  ["pawmot", "パーモット", 923, "スキル", "でんき"], ["cetitan", "ハルクジラ", 975, "食材", "こおり"],
  ["clodsire", "ドオー", 980, "食材", "どく"],
].map(([id, name, dexNo, specialty, type]) => ({
  id,
  name,
  dexNo,
  specialty,
  type,
  iconUrls: [`assets/pokemon/${id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexNo}.png`],
}));

const defaultTiers = [
  {
    id: createId(),
    name: "SS",
    description: "限界までサブレを投げる",
    color: "#f6b1a4",
    pokemonIds: ids("walrein feraligatr typhlosion meganium raichu blastoise venusaur steelix gardevoir dragonite raikou entei suicune vikavolt aggron weavile ninetales-alola pawmot blissey swampert blaziken sceptile gourgeist salamence flygon shuckle"),
  },
  {
    id: createId(),
    name: "S",
    description: "ポケサブレは投げる",
    color: "#f4d27e",
    pokemonIds: ids("magnezone altaria tyranitar espeon ampharos gengar dodrio victreebel golduck butterfree charizard banette delibird bewear dedenne ninetales cramorant quaquaval skeledirge meowscarada luxray clodsire cresselia mawile farfetchd xatu cetitan noivern tyrantrum"),
  },
  {
    id: createId(),
    name: "A",
    description: "ボナサブ要員",
    color: "#b8d98b",
    pokemonIds: ids("sylveon glaceon toxicroak swalot houndoom flareon golem primeape dugtrio wigglytuff arbok mr-mime abomasnow quagsire mimikyu braviary darkrai plusle crustle spheal-holiday ribombee latias sandslash onix"),
  },
  {
    id: createId(),
    name: "B",
    description: "基本投げない",
    color: "#91cbd3",
    pokemonIds: ids("lucario absol heracross vaporeon ditto pinsir kangaskhan marowak raticate clefable pikachu-halloween comfey eevee-holiday musharna minun toxtricity-low toxtricity-amped eevee-halloween spiritomb togedemaru mew"),
  },
  {
    id: createId(),
    name: "C",
    description: "絶対に投げない",
    color: "#b9b4dd",
    pokemonIds: ids("leafeon togekiss sableye slaking wobbuffet slowking umbreon sudowoodo jolteon slowbro arcanine persian pikachu-holiday gallade drifblim honchkrow"),
  },
];

const defaultFinishedTiers = defaultTiers.map(tier => ({
  id: createId(),
  name: tier.name,
  description: tier.description,
  color: tier.color,
  pokemonIds: [],
}));

const defaultFinishedTierByName = new Map(defaultFinishedTiers.map(tier => [tier.name, tier]));
const defaultCompromiseTiers = defaultTiers.map(tier => ({
  id: createId(),
  name: tier.name,
  description: tier.description,
  color: tier.color,
  pokemonIds: [],
}));
const defaultCompromiseTierByName = new Map(defaultCompromiseTiers.map(tier => [tier.name, tier]));
const pokemonDetailData = {
    "venusaur": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あまいミツ",
            "あんみんトマト",
            "ほっこりポテト"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "charizard": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "マメミート",
            "あったかジンジャー",
            "げきからハーブ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟"
        ]
    },
    "butterfree": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あまいミツ",
            "あんみんトマト",
            "ワカクサ大豆"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ゴールド旧発電所"
        ]
    },
    "raticate": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "とくせんリンゴ",
            "ワカクサ大豆",
            "マメミート"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "arbok": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "マメミート",
            "とくせんエッグ",
            "げきからハーブ"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "pikachu-halloween": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "とくせんリンゴ",
            "とくせんエッグ",
            "あったかジンジャー"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "pikachu-holiday": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "とくせんリンゴ",
            "とくせんエッグ",
            "あったかジンジャー"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "raichu": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "とくせんリンゴ",
            "とくせんエッグ",
            "あったかジンジャー"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "clefable": {
        "mainSkill": "ゆびをふる",
        "ingredients": [
            "とくせんリンゴ",
            "あまいミツ",
            "ワカクサ大豆"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "wigglytuff": {
        "mainSkill": "げんきオールS",
        "ingredients": [
            "あまいミツ",
            "ピュアなオイル",
            "リラックスカカオ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ラピスラズリ湖畔"
        ]
    },
    "dugtrio": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "あんみんトマト",
            "ふといながねぎ",
            "ワカクサ大豆"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ゴールド旧発電所"
        ]
    },
    "persian": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "モーモーミルク",
            "マメミート"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "golduck": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "リラックスカカオ",
            "とくせんリンゴ",
            "マメミート"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "primeape": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "マメミート",
            "あじわいキノコ",
            "あまいミツ"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "arcanine": {
        "mainSkill": "おてつだいサポートS",
        "ingredients": [
            "げきからハーブ",
            "マメミート",
            "モーモーミルク"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟"
        ]
    },
    "victreebel": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "あんみんトマト",
            "ほっこりポテト",
            "ふといながねぎ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "golem": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ワカクサ大豆",
            "あじわいキノコ",
            "ほっこりポテト"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原",
            "ゴールド旧発電所"
        ]
    },
    "slowbro": {
        "mainSkill": "げんきエールS",
        "ingredients": [
            "リラックスカカオ",
            "おいしいシッポ",
            "あんみんトマト"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "farfetchd": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ふといながねぎ",
            "マメミート",
            "あったかジンジャー"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ゴールド旧発電所"
        ]
    },
    "dodrio": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "ワカクサ大豆",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "gengar": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "げきからハーブ",
            "あじわいキノコ",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原",
            "ゴールド旧発電所"
        ]
    },
    "onix": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あんみんトマト",
            "マメミート",
            "ほっこりポテト"
        ],
        "baseGauge": "16",
        "fields": [
            "トープ洞窟",
            "ワカクサ本島"
        ]
    },
    "marowak": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "あったかジンジャー",
            "リラックスカカオ"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "kangaskhan": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あったかジンジャー",
            "ほっこりポテト",
            "ワカクサ大豆"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜"
        ]
    },
    "mr-mime": {
        "mainSkill": "ものまね(スキルコピー)",
        "ingredients": [
            "あんみんトマト",
            "ほっこりポテト",
            "ふといながねぎ"
        ],
        "baseGauge": "12",
        "fields": [
            "シアンの砂浜",
            "ゴールド旧発電所"
        ]
    },
    "pinsir": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "あまいミツ",
            "とくせんリンゴ",
            "マメミート"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜"
        ]
    },
    "eevee-holiday": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "eevee-halloween": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "vaporeon": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "jolteon": {
        "mainSkill": "おてつだいサポートS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "flareon": {
        "mainSkill": "料理パワーアップS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "dragonite": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "げきからハーブ",
            "ワカクサコーン",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "meganium": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "リラックスカカオ",
            "あまいミツ",
            "ふといながねぎ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔"
        ]
    },
    "typhlosion": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "あったかジンジャー",
            "げきからハーブ",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟"
        ]
    },
    "feraligatr": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "マメミート",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜"
        ]
    },
    "xatu": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "とくせんエッグ",
            "リラックスカカオ",
            "とくせんリンゴ"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "ampharos": {
        "mainSkill": "エナジーチャージM",
        "ingredients": [
            "げきからハーブ",
            "とくせんエッグ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ゴールド旧発電所"
        ]
    },
    "sudowoodo": {
        "mainSkill": "エナジーチャージM",
        "ingredients": [
            "あんみんトマト",
            "ワカクサ大豆",
            "あじわいキノコ"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜"
        ]
    },
    "espeon": {
        "mainSkill": "エナジーチャージM",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "umbreon": {
        "mainSkill": "つきのひかり(げんきチャージS)",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "slowking": {
        "mainSkill": "げんきエールS",
        "ingredients": [
            "リラックスカカオ",
            "おいしいシッポ",
            "あんみんトマト"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "wobbuffet": {
        "mainSkill": "げんきエールS",
        "ingredients": [
            "とくせんリンゴ",
            "あじわいキノコ",
            "ピュアなオイル"
        ],
        "baseGauge": "7",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "steelix": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あんみんトマト",
            "マメミート",
            "ほっこりポテト"
        ],
        "baseGauge": "16",
        "fields": [
            "トープ洞窟",
            "ワカクサ本島"
        ]
    },
    "shuckle": {
        "mainSkill": "きのみジュース(げんきオールS)",
        "ingredients": [
            "ピュアなオイル",
            "めざましコーヒー",
            "あまいミツ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟"
        ]
    },
    "heracross": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あまいミツ",
            "あじわいキノコ",
            "マメミート"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜"
        ]
    },
    "weavile": {
        "mainSkill": "料理チャンスS",
        "ingredients": [
            "マメミート",
            "とくせんエッグ",
            "ワカクサ大豆"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原"
        ]
    },
    "delibird": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "とくせんエッグ",
            "とくせんリンゴ",
            "リラックスカカオ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原"
        ]
    },
    "houndoom": {
        "mainSkill": "エナジーチャージM",
        "ingredients": [
            "げきからハーブ",
            "あったかジンジャー",
            "ふといながねぎ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟"
        ]
    },
    "raikou": {
        "mainSkill": "おてつだいブースト(でんき)",
        "ingredients": [
            "マメミート",
            "げきからハーブ",
            "ふといながねぎ"
        ],
        "baseGauge": "30",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "entei": {
        "mainSkill": "おてつだいブースト(ほのお)",
        "ingredients": [
            "ピュアなオイル",
            "あんみんトマト",
            "あじわいキノコ"
        ],
        "baseGauge": "30",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟"
        ]
    },
    "suicune": {
        "mainSkill": "おてつだいブースト(みず)",
        "ingredients": [
            "とくせんリンゴ",
            "ピュアなオイル",
            "ワカクサコーン"
        ],
        "baseGauge": "30",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔"
        ]
    },
    "spheal-holiday": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "ピュアなオイル",
            "マメミート",
            "あったかジンジャー"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原"
        ]
    },
    "sceptile": {
        "mainSkill": "きのみバースト",
        "ingredients": [
            "とくせんエッグ",
            "めざましコーヒー",
            "ふといながねぎ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "blaziken": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "あじわいキノコ",
            "ワカクサ大豆",
            "ピュアなオイル"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ラピスラズリ湖畔"
        ]
    },
    "swampert": {
        "mainSkill": "料理チャンスS",
        "ingredients": [
            "ワカクサコーン",
            "モーモーミルク",
            "あじわいキノコ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟"
        ]
    },
    "slaking": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "あんみんトマト",
            "あまいミツ",
            "とくせんリンゴ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原"
        ]
    },
    "aggron": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "マメミート",
            "めざましコーヒー",
            "ワカクサ大豆"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "plusle": {
        "mainSkill": "プラス(食材ゲットS)",
        "ingredients": [
            "めざましコーヒー",
            "ふといながねぎ",
            "モーモーミルク"
        ],
        "baseGauge": "10",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "swalot": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "ワカクサ大豆",
            "あじわいキノコ",
            "あまいミツ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "minun": {
        "mainSkill": "マイナス(料理パワーアップS)",
        "ingredients": [
            "あまいミツ",
            "とくせんエッグ",
            "モーモーミルク"
        ],
        "baseGauge": "10",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "flygon": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "つやつやアボカド",
            "げきからハーブ",
            "ワカクサ大豆"
        ],
        "baseGauge": "20",
        "fields": [
            "トープ洞窟"
        ]
    },
    "altaria": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "とくせんエッグ",
            "ワカクサ大豆",
            "とくせんリンゴ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "banette": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ピュアなオイル",
            "あったかジンジャー",
            "あじわいキノコ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ゴールド旧発電所"
        ]
    },
    "absol": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "リラックスカカオ",
            "あじわいキノコ",
            "とくせんリンゴ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原"
        ]
    },
    "walrein": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "ピュアなオイル",
            "マメミート",
            "あったかジンジャー"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原"
        ]
    },
    "salamence": {
        "mainSkill": "料理パワーアップS",
        "ingredients": [
            "ほっこりポテト",
            "あったかジンジャー",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "アンバー渓谷"
        ]
    },
    "luxray": {
        "mainSkill": "料理パワーアップS",
        "ingredients": [
            "あんみんトマト",
            "ピュアなオイル",
            "めざましコーヒー"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "drifblim": {
        "mainSkill": "たくわえる(エナジーチャージS)",
        "ingredients": [
            "ワカクサコーン",
            "ピュアなオイル",
            "ほっこりポテト"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "honchkrow": {
        "mainSkill": "きょううん(食材セレクトS)",
        "ingredients": [
            "めざましコーヒー",
            "ワカクサ大豆",
            "げきからハーブ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ゴールド旧発電所"
        ]
    },
    "spiritomb": {
        "mainSkill": "おてつだいサポートS",
        "ingredients": [
            "あじわいキノコ",
            "ずっしりカボチャ",
            "ふといながねぎ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "lucario": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "ピュアなオイル",
            "ほっこりポテト",
            "とくせんエッグ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "toxicroak": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ピュアなオイル",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "abomasnow": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "あんみんトマト",
            "とくせんエッグ",
            "あじわいキノコ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原"
        ]
    },
    "magnezone": {
        "mainSkill": "料理パワーアップS",
        "ingredients": [
            "ピュアなオイル",
            "げきからハーブ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "togekiss": {
        "mainSkill": "ゆびをふる",
        "ingredients": [
            "とくせんエッグ",
            "あったかジンジャー",
            "リラックスカカオ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "gallade": {
        "mainSkill": "おてつだいサポートS",
        "ingredients": [
            "とくせんリンゴ",
            "ワカクサコーン",
            "ふといながねぎ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "cresselia": {
        "mainSkill": "みかづきのいのり(げんきオールS)",
        "ingredients": [
            "あったかジンジャー",
            "リラックスカカオ",
            "あんみんトマト"
        ],
        "baseGauge": "30",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ゴールド旧発電所",
            "ウノハナ雪原",
            "ラピスラズリ湖畔"
        ]
    },
    "darkrai": {
        "mainSkill": "ナイトメア(エナジーチャージM)",
        "ingredients": [
            "マメミート"
        ],
        "baseGauge": "20",
        "fields": []
    },
    "musharna": {
        "mainSkill": "ゆめのかけらゲットS",
        "ingredients": [
            "モーモーミルク",
            "あまいミツ",
            "めざましコーヒー"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "crustle": {
        "mainSkill": "食材セレクトS",
        "ingredients": [
            "つやつやアボカド",
            "ほっこりポテト",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "アンバー渓谷"
        ]
    },
    "braviary": {
        "mainSkill": "きのみバースト",
        "ingredients": [
            "マメミート",
            "ワカクサコーン",
            "めざましコーヒー"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原"
        ]
    },
    "sylveon": {
        "mainSkill": "げんきオールS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "dedenne": {
        "mainSkill": "料理チャンスS",
        "ingredients": [
            "とくせんリンゴ",
            "リラックスカカオ",
            "ワカクサコーン"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "gourgeist": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ずっしりカボチャ",
            "ワカクサ大豆",
            "ほっこりポテト"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "vikavolt": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "めざましコーヒー",
            "あじわいキノコ",
            "あまいミツ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "bewear": {
        "mainSkill": "エナジーチャージS",
        "ingredients": [
            "ワカクサコーン",
            "マメミート",
            "とくせんエッグ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "comfey": {
        "mainSkill": "げんきエールS",
        "ingredients": [
            "ワカクサコーン",
            "あったかジンジャー",
            "リラックスカカオ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔"
        ]
    },
    "mimikyu": {
        "mainSkill": "ばけのかわ(きのみバースト)",
        "ingredients": [
            "とくせんリンゴ",
            "めざましコーヒー",
            "あじわいキノコ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "cramorant": {
        "mainSkill": "料理チャンスS",
        "ingredients": [
            "ピュアなオイル",
            "ほっこりポテト",
            "とくせんエッグ"
        ],
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原"
        ]
    },
    "toxtricity-low": {
        "mainSkill": "マイナス(料理パワーアップS)",
        "ingredients": [
            "モーモーミルク",
            "とくせんリンゴ",
            "ふといながねぎ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "toxtricity-amped": {
        "mainSkill": "プラス(食材ゲットS)",
        "ingredients": [
            "モーモーミルク",
            "とくせんリンゴ",
            "ふといながねぎ"
        ],
        "baseGauge": "20",
        "fields": [
            "ワカクサ本島",
            "ゴールド旧発電所"
        ]
    },
    "meowscarada": {
        "mainSkill": "料理パワーアップS",
        "ingredients": [
            "ほっこりポテト",
            "モーモーミルク",
            "あったかジンジャー"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "skeledirge": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "とくせんリンゴ",
            "マメミート",
            "げきからハーブ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ゴールド旧発電所"
        ]
    },
    "quaquaval": {
        "mainSkill": "エナジーチャージM",
        "ingredients": [
            "ワカクサ大豆",
            "ふといながねぎ",
            "ピュアなオイル"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "pawmot": {
        "mainSkill": "げんきオールS",
        "ingredients": [
            "リラックスカカオ",
            "モーモーミルク",
            "とくせんエッグ"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ゴールド旧発電所"
        ]
    },
    "clodsire": {
        "mainSkill": "げんきチャージS",
        "ingredients": [
            "リラックスカカオ",
            "めざましコーヒー",
            "ほっこりポテト"
        ],
        "baseGauge": "12",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ゴールド旧発電所"
        ]
    },
    "blastoise": {
        "mainSkill": "食材ゲットS",
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔"
        ]
    },
    "sandslash": {
        "ingredients": [
            "ずっしりカボチャ",
            "ワカクサコーン",
            "ほっこりポテト"
        ],
        "mainSkill": "食材セレクトS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "ninetales": {
        "ingredients": [
            "ワカクサ大豆",
            "ワカクサコーン",
            "ほっこりポテト"
        ],
        "mainSkill": "げんきエールS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "ninetales-alola": {
        "ingredients": [
            "ワカクサ大豆",
            "ワカクサコーン",
            "ほっこりポテト"
        ],
        "mainSkill": "おてつだいサポートS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ウノハナ雪原"
        ]
    },
    "ditto": {
        "ingredients": [
            "ピュアなオイル",
            "ふといながねぎ",
            "おいしいシッポ"
        ],
        "mainSkill": "へんしん(スキルコピー)",
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "mew": {
        "ingredients": [
            "とくせんエッグ",
            "げきからハーブ"
        ],
        "mainSkill": "オールマイティー(ゆびをふる)",
        "baseGauge": "25",
        "fields": []
    },
    "quagsire": {
        "ingredients": [
            "あじわいキノコ",
            "ほっこりポテト",
            "マメミート"
        ],
        "mainSkill": "げんきチャージS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ゴールド旧発電所"
        ]
    },
    "blissey": {
        "ingredients": [
            "とくせんエッグ",
            "ほっこりポテト",
            "あまいミツ"
        ],
        "mainSkill": "げんきオールS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ウノハナ雪原"
        ]
    },
    "tyranitar": {
        "ingredients": [
            "あったかジンジャー",
            "ワカクサ大豆",
            "マメミート"
        ],
        "mainSkill": "げんきチャージS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟"
        ]
    },
    "gardevoir": {
        "ingredients": [
            "とくせんリンゴ",
            "ワカクサコーン",
            "ふといながねぎ"
        ],
        "mainSkill": "げんきオールS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔"
        ]
    },
    "sableye": {
        "ingredients": [
            "ピュアなオイル",
            "あじわいキノコ",
            "リラックスカカオ"
        ],
        "mainSkill": "ゆめのかけらゲットS",
        "baseGauge": "16",
        "fields": [
            "トープ洞窟",
            "ワカクサ本島"
        ]
    },
    "mawile": {
        "ingredients": [
            "ピュアなオイル",
            "ワカクサコーン",
            "あんみんトマト"
        ],
        "mainSkill": "かいりきバサミ(食材セレクトS)",
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "latias": {
        "ingredients": [
            "あんみんトマト",
            "ずっしりカボチャ",
            "あじわいキノコ"
        ],
        "mainSkill": "いやしのはどう(げんきエールS)",
        "baseGauge": "30",
        "fields": [
            "ワカクサ本島",
            "ラピスラズリ湖畔",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "leafeon": {
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "mainSkill": "げんきエールS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "glaceon": {
        "ingredients": [
            "モーモーミルク",
            "リラックスカカオ",
            "マメミート"
        ],
        "mainSkill": "料理パワーアップS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "トープ洞窟",
            "ウノハナ雪原",
            "ラピスラズリ湖畔",
            "ゴールド旧発電所"
        ]
    },
    "tyrantrum": {
        "ingredients": [
            "マメミート",
            "とくせんリンゴ",
            "ほっこりポテト"
        ],
        "mainSkill": "料理パワーアップS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "noivern": {
        "ingredients": [
            "とくせんリンゴ",
            "ふといながねぎ",
            "マメミート"
        ],
        "mainSkill": "エナジーチャージM",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "トープ洞窟",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "ribombee": {
        "ingredients": [
            "あまいミツ",
            "ピュアなオイル",
            "ワカクサコーン"
        ],
        "mainSkill": "食材セレクトS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "シアンの砂浜",
            "ラピスラズリ湖畔",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "togedemaru": {
        "ingredients": [
            "モーモーミルク",
            "つやつやアボカド",
            "リラックスカカオ"
        ],
        "mainSkill": "ほっぺすりすり(げんきエールS)",
        "baseGauge": "16",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ゴールド旧発電所",
            "ワカクサ本島EX",
            "アンバー渓谷"
        ]
    },
    "cetitan": {
        "ingredients": [
            "ほっこりポテト",
            "マメミート",
            "ずっしりカボチャ"
        ],
        "mainSkill": "げんきチャージS",
        "baseGauge": "5",
        "fields": [
            "ワカクサ本島",
            "ウノハナ雪原",
            "ワカクサ本島EX"
        ]
    }
};
const newPokemonIds = new Set([]);

let state = loadState();
let activePokemonId = null;

const tierBoard = document.querySelector("#tierBoard");
const pokemonPool = document.querySelector("#pokemonPool");
const poolCount = document.querySelector("#poolCount");
const compromisePool = document.querySelector("#compromisePool");
const compromiseCount = document.querySelector("#compromiseCount");
const finishedPool = document.querySelector("#finishedPool");
const finishedCount = document.querySelector("#finishedCount");
const searchInput = document.querySelector("#searchInput");
const specialtyFilter = document.querySelector("#specialtyFilter");
const typeFilter = document.querySelector("#typeFilter");
const fieldFilter = document.querySelector("#fieldFilter");
const ingredientFilter = document.querySelector("#ingredientFilter");
const ingredientScopeFilter = document.querySelector("#ingredientScopeFilter");
const activeFilters = document.querySelector("#activeFilters");
const filterPanel = document.querySelector(".filter-panel");
const filterPanelBody = document.querySelector("#filterPanelBody");
const filterToggleButton = document.querySelector("#filterToggleButton");
const filterToggleLabel = document.querySelector(".filter-toggle-label");
const moveDialog = document.querySelector("#moveDialog");
const moveTargets = document.querySelector("#moveTargets");
const candidatePanel = document.querySelector("#candidatePanel");
const pokemonInfoFields = document.querySelector("#pokemonInfoFields");
const dialogPokemonName = document.querySelector("#dialogPokemonName");
const detailButton = document.querySelector("#detailButton");
const mobileDragQuery = window.matchMedia("(max-width: 900px)");
const FILTER_PANEL_OPEN_KEY = "pokesuri-tier-maker-filters-open";

document.querySelector("#addTierButton").addEventListener("click", addTier);
document.querySelector("#resetButton").addEventListener("click", resetState);
document.querySelector("#exportButton").addEventListener("click", exportPng);
document.querySelector("#exportDataButton").addEventListener("click", exportJson);
document.querySelector("#importDataButton").addEventListener("click", () => document.querySelector("#importDataInput").click());
document.querySelector("#importDataInput").addEventListener("change", importJson);
filterToggleButton.addEventListener("click", toggleFilterPanel);
detailButton.addEventListener("click", () => {
  const pokemon = getPokemon(activePokemonId);
  if (pokemon) openPokemonSearch(pokemon);
  moveDialog.close();
});
searchInput.addEventListener("input", render);
specialtyFilter.addEventListener("change", render);
typeFilter.addEventListener("change", render);
fieldFilter.addEventListener("change", render);
ingredientFilter.addEventListener("change", render);
ingredientScopeFilter.addEventListener("change", render);
window.addEventListener("resize", () => {
  requestAnimationFrame(syncTierRowHeights);
});
if (typeof mobileDragQuery.addEventListener === "function") {
  mobileDragQuery.addEventListener("change", updatePokemonCardDragState);
} else {
  mobileDragQuery.addListener(updatePokemonCardDragState);
}
initializeTypeFilter();
initializeFieldFilter();
initializeIngredientFilter();
initializeFilterPanel();
render();
registerServiceWorker();

function loadState() {
  const saved = loadStoredState();
  if (!saved) return createDefaultState();

  try {
    const parsed = JSON.parse(saved);
    return migrateState(parsed);
  } catch {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeState(state)));
}

function initializeFilterPanel() {
  const isOpen = localStorage.getItem(FILTER_PANEL_OPEN_KEY) === "1";
  setFilterPanelOpen(isOpen);
}

function toggleFilterPanel() {
  setFilterPanelOpen(!filterPanel.classList.contains("is-open"));
}

function setFilterPanelOpen(isOpen) {
  filterPanelBody.hidden = !isOpen;
  filterPanel.classList.toggle("is-open", isOpen);
  filterToggleButton.setAttribute("aria-expanded", String(isOpen));
  filterToggleLabel.textContent = "フィルタ";
  filterToggleButton.setAttribute("aria-label", isOpen ? "フィルタを閉じる" : "フィルタを開く");
  localStorage.setItem(FILTER_PANEL_OPEN_KEY, isOpen ? "1" : "0");
}

function render() {
  renderTiers();
  renderPool();
  renderActiveFilters();
  syncTierRowHeights();
  saveState();
}

function renderTiers() {
  tierBoard.innerHTML = "";
  const header = document.createElement("div");
  header.className = "tier-table-header";
  ["Tier", "厳選未完了", "妥協個体あり", "厳選完了", "操作"].forEach(text => {
    const cell = document.createElement("div");
    cell.textContent = text;
    header.append(cell);
  });
  tierBoard.append(header);

  state.tiers.forEach((tier, index) => {
    const row = document.createElement("div");
    row.className = "tier-row tier-table-row";
    row.style.setProperty("--tier-color", tier.color);
    row.dataset.tierId = tier.id;
    row.dataset.tierIndex = String(index);
    const compromiseTier = state.compromiseTiers[index];
    const finishedTier = state.finishedTiers[index];

    const label = document.createElement("div");
    label.className = "tier-label";
    const input = document.createElement("input");
    input.value = tier.name;
    input.ariaLabel = "Tier名";
    input.addEventListener("input", () => {
      const previousName = tier.name;
      tier.name = input.value || " ";
      const finishedTier = state.finishedTiers.find(item => item.name === previousName);
      if (finishedTier) finishedTier.name = tier.name;
      const compromiseTier = state.compromiseTiers.find(item => item.name === previousName);
      if (compromiseTier) compromiseTier.name = tier.name;
      saveState();
      render();
    });
    const descriptionInput = document.createElement("textarea");
    descriptionInput.className = "tier-description-input";
    descriptionInput.value = tier.description || "";
    descriptionInput.ariaLabel = "Tier説明";
    descriptionInput.placeholder = "説明";
    descriptionInput.rows = 2;
    descriptionInput.addEventListener("input", () => {
      tier.description = descriptionInput.value;
      saveState();
    });
    label.append(input, descriptionInput);

    const unfinishedDropzone = document.createElement("div");
    unfinishedDropzone.className = "tier-dropzone";
    unfinishedDropzone.addEventListener("dragover", allowDrop);
    unfinishedDropzone.addEventListener("dragleave", clearDropHover);
    unfinishedDropzone.addEventListener("drop", event => dropPokemon(event, tier.id));
    tier.pokemonIds.forEach(id => {
      const pokemon = getPokemon(id);
      if (pokemon && matchesCurrentFilters(pokemon)) unfinishedDropzone.append(createPokemonCard(pokemon, tier.id));
    });

    const compromiseDropzone = createStatusDropzone("compromise", compromiseTier);
    const finishedDropzone = createStatusDropzone("finished", finishedTier);

    const actions = document.createElement("div");
    actions.className = "tier-actions";
    actions.append(
      iconButton("↑", () => moveTier(index, -1), "上へ"),
      iconButton("↓", () => moveTier(index, 1), "下へ"),
      iconButton("×", () => removeTier(tier.id), "削除"),
    );

    row.append(label, unfinishedDropzone, compromiseDropzone, finishedDropzone, actions);
    tierBoard.append(row);
  });
}

function createStatusDropzone(status, tier) {
  const dropzone = document.createElement("div");
  dropzone.className = "tier-dropzone status-dropzone";
  if (!tier) return dropzone;
  dropzone.addEventListener("dragover", allowDrop);
  dropzone.addEventListener("dragleave", clearDropHover);
  dropzone.addEventListener("drop", event => dropStatusPokemon(event, status, tier.id));
  tier.pokemonIds.forEach(id => {
    const pokemon = getPokemon(id);
    if (pokemon && matchesCurrentFilters(pokemon)) {
      dropzone.append(createPokemonCard(pokemon, `${status}:${tier.id}`));
    }
  });
  return dropzone;
}

function renderPool() {
  const usedIds = getUsedPokemonIds();
  const pool = finalPokemon.filter(pokemon => !usedIds.has(pokemon.id));
  const visible = pool.filter(matchesCurrentFilters);
  poolCount.textContent = `${visible.length} / ${pool.length}匹`;
  pokemonPool.innerHTML = "";
  visible.forEach(pokemon => pokemonPool.append(createPokemonCard(pokemon)));
}

function renderStatusBoard(status) {
  const tiers = getStatusTiers(status);
  const board = status === "compromise" ? compromisePool : finishedPool;
  const count = status === "compromise" ? compromiseCount : finishedCount;
  const allIds = getStatusPokemonIds(status);
  const visibleCount = allIds.map(getPokemon).filter(Boolean).filter(matchesCurrentFilters).length;
  count.textContent = `${visibleCount} / ${allIds.length}匹`;
  board.innerHTML = "";
  tiers.forEach((tier, index) => {
    const row = document.createElement("div");
    row.className = "tier-row compact-row";
    row.style.setProperty("--tier-color", tier.color);
    row.dataset.tierIndex = String(index);

    const label = document.createElement("div");
    label.className = "tier-label";
    const text = document.createElement("strong");
    text.textContent = tier.name;
    const description = document.createElement("span");
    description.className = "finished-description";
    description.textContent = tier.description || "";
    label.append(text, description);

    const dropzone = document.createElement("div");
    dropzone.className = "tier-dropzone";
    dropzone.addEventListener("dragover", allowDrop);
    dropzone.addEventListener("dragleave", clearDropHover);
    dropzone.addEventListener("drop", event => dropStatusPokemon(event, status, tier.id));
    tier.pokemonIds.forEach(id => {
      const pokemon = getPokemon(id);
      if (pokemon && matchesCurrentFilters(pokemon)) {
        dropzone.append(createPokemonCard(pokemon, `${status}:${tier.id}`));
      }
    });

    row.append(label, dropzone);
    board.append(row);
  });
}

function syncTierRowHeights() {
  const rowCount = Math.max(state.tiers.length, state.compromiseTiers.length, state.finishedTiers.length);
  for (let index = 0; index < rowCount; index += 1) {
    const rows = document.querySelectorAll(`[data-tier-index="${index}"]`);
    rows.forEach(row => {
      row.style.minHeight = "";
    });
    const maxHeight = Math.max(...[...rows].map(row => row.getBoundingClientRect().height));
    rows.forEach(row => {
      row.style.minHeight = `${Math.ceil(maxHeight)}px`;
    });
  }
}

function matchesCurrentFilters(pokemon) {
  const query = searchInput.value.trim();
  const matchesQuery = !query || pokemon.name.includes(query) || pokemon.type.includes(query) || pokemon.specialty.includes(query);
  const matchesSpecialty = specialtyFilter.value === "all" || pokemon.specialty === specialtyFilter.value;
  const matchesType = typeFilter.value === "all" || pokemon.type === typeFilter.value;
  const matchesField = matchesFieldFilter(pokemon);
  const matchesIngredient = matchesIngredientFilter(pokemon);
  return matchesQuery && matchesSpecialty && matchesType && matchesField && matchesIngredient;
}

function matchesFieldFilter(pokemon) {
  if (fieldFilter.value === "all") return true;
  const detail = pokemonDetailData[pokemon.id];
  const fields = Array.isArray(detail?.fields) ? detail.fields : [];
  return fields.includes(fieldFilter.value);
}

function matchesIngredientFilter(pokemon) {
  if (ingredientFilter.value === "all") return true;
  const detail = pokemonDetailData[pokemon.id];
  const ingredients = Array.isArray(detail?.ingredients) ? detail.ingredients : [];
  const targetIngredients = ingredientScopeFilter.value === "all"
    ? ingredients
    : ingredients.slice(0, ingredientScopeFilter.value === "first-second" ? 2 : 1);
  return targetIngredients.includes(ingredientFilter.value);
}

function renderActiveFilters() {
  activeFilters.innerHTML = "";
  const filters = getActiveFilterItems();
  if (!filters.length) {
    activeFilters.hidden = true;
    return;
  }
  activeFilters.hidden = false;
  filters.forEach(filter => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${filter.label}: ${filter.value} ×`;
    button.addEventListener("click", () => {
      filter.clear();
      render();
    });
    activeFilters.append(button);
  });
  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "clear-filters-button";
  clearButton.textContent = "すべて解除";
  clearButton.addEventListener("click", () => {
    clearFilters();
    render();
  });
  activeFilters.append(clearButton);
}

function getActiveFilterItems() {
  const items = [];
  if (specialtyFilter.value !== "all") {
    items.push({ label: "得意", value: specialtyFilter.value, clear: () => { specialtyFilter.value = "all"; } });
  }
  if (typeFilter.value !== "all") {
    items.push({ label: "タイプ", value: typeFilter.value, clear: () => { typeFilter.value = "all"; } });
  }
  if (fieldFilter.value !== "all") {
    items.push({ label: "フィールド", value: fieldFilter.value, clear: () => { fieldFilter.value = "all"; } });
  }
  if (ingredientFilter.value !== "all") {
    items.push({ label: "食材", value: `${ingredientScopeFilter.selectedOptions[0]?.textContent || "全食材"} / ${ingredientFilter.value}`, clear: () => { ingredientFilter.value = "all"; } });
  }
  if (searchInput.value.trim()) {
    items.push({ label: "検索", value: searchInput.value.trim(), clear: () => { searchInput.value = ""; } });
  }
  return items;
}

function clearFilters() {
  searchInput.value = "";
  specialtyFilter.value = "all";
  typeFilter.value = "all";
  fieldFilter.value = "all";
  ingredientFilter.value = "all";
  ingredientScopeFilter.value = "all";
}

function initializeTypeFilter() {
  const types = [...new Set(finalPokemon.map(pokemon => pokemon.type))].sort((a, b) => a.localeCompare(b, "ja"));
  types.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.append(option);
  });
}

function initializeFieldFilter() {
  const fieldOrder = [
    "ワカクサ本島",
    "シアンの砂浜",
    "トープ洞窟",
    "ウノハナ雪原",
    "ラピスラズリ湖畔",
    "ゴールド旧発電所",
    "アンバー渓谷",
    "ワカクサ本島EX",
  ];
  const fieldRank = new Map(fieldOrder.map((field, index) => [field, index]));
  const fields = [...new Set(
    Object.values(pokemonDetailData)
      .flatMap(detail => Array.isArray(detail.fields) ? detail.fields : []),
  )].sort((a, b) => (fieldRank.get(a) ?? Number.MAX_SAFE_INTEGER) - (fieldRank.get(b) ?? Number.MAX_SAFE_INTEGER) || a.localeCompare(b, "ja"));
  fields.forEach(field => {
    const option = document.createElement("option");
    option.value = field;
    option.textContent = field;
    fieldFilter.append(option);
  });
}

function initializeIngredientFilter() {
  const ingredients = [...new Set(
    Object.values(pokemonDetailData)
      .flatMap(detail => Array.isArray(detail.ingredients) ? detail.ingredients : []),
  )].sort((a, b) => a.localeCompare(b, "ja"));
  ingredients.forEach(ingredient => {
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = ingredient;
    ingredientFilter.append(option);
  });
}

function createPokemonCard(pokemon, currentTierId = null) {
  const card = document.createElement("button");
  card.className = "pokemon-card";
  if (newPokemonIds.has(pokemon.id)) card.classList.add("new-pokemon");
  card.type = "button";
  card.draggable = !isMobileDragDisabled();
  card.dataset.pokemonId = pokemon.id;
  card.title = `${pokemon.name} / ${pokemon.specialty} / ${pokemon.type}`;
  card.addEventListener("click", () => openMoveDialog(pokemon.id, currentTierId));
  card.addEventListener("dragstart", event => {
    if (isMobileDragDisabled()) {
      event.preventDefault();
      return;
    }
    activePokemonId = pokemon.id;
    event.dataTransfer.setData("text/plain", pokemon.id);
    card.classList.add("dragging");
  });
  card.addEventListener("dragend", () => card.classList.remove("dragging"));
  card.addEventListener("dragover", event => {
    if (isMobileDragDisabled()) return;
    event.preventDefault();
    card.classList.add("drop-hover");
  });
  card.addEventListener("dragleave", () => card.classList.remove("drop-hover"));
  card.addEventListener("drop", event => {
    if (isMobileDragDisabled()) return;
    event.preventDefault();
    event.stopPropagation();
    card.classList.remove("drop-hover");
    const pokemonId = event.dataTransfer.getData("text/plain") || activePokemonId;
    const currentStatus = parseStatusTierId(currentTierId);
    if (currentStatus) {
      movePokemonToStatus(pokemonId, currentStatus.status, currentStatus.tierId, pokemon.id);
    }
    else if (currentTierId) movePokemon(pokemonId, currentTierId, pokemon.id);
  });

  const img = document.createElement("img");
  setImageSource(img, pokemon, 0);
  img.alt = "";
  img.crossOrigin = "anonymous";
  img.loading = "lazy";
  img.onerror = () => {
    const nextIndex = Number(img.dataset.sourceIndex) + 1;
    if (nextIndex < pokemon.iconUrls.length) setImageSource(img, pokemon, nextIndex);
    else img.replaceWith(createFallbackIcon(pokemon));
  };

  const name = document.createElement("span");
  name.textContent = pokemon.name;
  const meta = document.createElement("div");
  meta.className = "pokemon-meta";
  meta.textContent = pokemon.specialty;
  card.append(img, name, meta);
  const candidateCount = getCandidateCount(pokemon.id);
  if (candidateCount) {
    const badge = document.createElement("div");
    badge.className = "candidate-count";
    badge.textContent = `候補${candidateCount}`;
    card.append(badge);
  }
  return card;
}

function isMobileDragDisabled() {
  return mobileDragQuery.matches;
}

function updatePokemonCardDragState() {
  document.querySelectorAll(".pokemon-card").forEach(card => {
    card.draggable = !isMobileDragDisabled();
    card.classList.remove("dragging", "drop-hover");
  });
  document.querySelectorAll(".drop-hover").forEach(element => element.classList.remove("drop-hover"));
}

function setImageSource(img, pokemon, index) {
  img.dataset.sourceIndex = String(index);
  img.src = pokemon.iconUrls[index];
}

function createFallbackIcon(pokemon) {
  const icon = document.createElement("div");
  icon.className = "fallback-icon";
  icon.textContent = pokemon.name.slice(0, 1);
  return icon;
}

function iconButton(text, onClick, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.ariaLabel = label;
  button.addEventListener("click", onClick);
  return button;
}

function allowDrop(event) {
  if (isMobileDragDisabled()) return;
  event.preventDefault();
  event.currentTarget.classList.add("drop-hover");
}

function clearDropHover(event) {
  event.currentTarget.classList.remove("drop-hover");
}

function dropPokemon(event, targetTierId) {
  if (isMobileDragDisabled()) return;
  event.preventDefault();
  event.currentTarget.classList.remove("drop-hover");
  const pokemonId = event.dataTransfer.getData("text/plain") || activePokemonId;
  movePokemon(pokemonId, targetTierId);
}

function dropStatusPokemon(event, status, targetTierId) {
  if (isMobileDragDisabled()) return;
  event.preventDefault();
  event.currentTarget.classList.remove("drop-hover");
  const pokemonId = event.dataTransfer.getData("text/plain") || activePokemonId;
  movePokemonToStatus(pokemonId, status, targetTierId);
}

function openMoveDialog(pokemonId, currentTierId = null) {
  activePokemonId = pokemonId;
  const pokemon = getPokemon(pokemonId);
  dialogPokemonName.textContent = pokemon.name;
  moveTargets.innerHTML = "";
  renderPokemonInfoFields(pokemon);
  renderCandidatePanel(pokemonId);
  const currentStatus = parseStatusTierId(currentTierId);
  if (currentStatus) {
    const currentStatusTier = getStatusTiers(currentStatus.status).find(tier => tier.id === currentStatus.tierId);
    const nextStatus = currentStatus.status === "compromise" ? "finished" : "compromise";
    const nextStatusTier = getStatusTiers(nextStatus).find(tier => tier.name === currentStatusTier?.name);
    if (nextStatusTier) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = nextStatus === "compromise" ? "妥協個体ありへ" : "厳選完了へ";
      button.addEventListener("click", () => {
        movePokemonToStatus(pokemonId, nextStatus, nextStatusTier.id);
        moveDialog.close();
      });
      moveTargets.append(button);
    }
  }
  const linkedCompromiseTier = getLinkedStatusTier("compromise", currentTierId);
  if (linkedCompromiseTier) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "妥協個体ありへ";
    button.addEventListener("click", () => {
      movePokemonToStatus(pokemonId, "compromise", linkedCompromiseTier.id);
      moveDialog.close();
    });
    moveTargets.append(button);
  }
  const linkedFinishedTier = getLinkedStatusTier("finished", currentTierId);
  if (linkedFinishedTier) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "厳選完了へ";
    button.addEventListener("click", () => {
      movePokemonToStatus(pokemonId, "finished", linkedFinishedTier.id);
      moveDialog.close();
    });
    moveTargets.append(button);
  }

  if (!currentStatus && !linkedCompromiseTier && !linkedFinishedTier) {
    appendStatusMoveButtons(pokemonId, "compromise", "妥協");
    appendStatusMoveButtons(pokemonId, "finished", "完了");
  }

  appendMoveGroupTitle("Tier変更");
  state.tiers.forEach(tier => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = tier.name;
    button.addEventListener("click", () => {
      movePokemon(pokemonId, tier.id);
      moveDialog.close();
    });
    moveTargets.append(button);
  });

  moveDialog.showModal();
}

function appendMoveGroupTitle(text) {
  const title = document.createElement("div");
  title.className = "move-group-title";
  title.textContent = text;
  moveTargets.append(title);
}

function renderCandidatePanel(pokemonId) {
  candidatePanel.innerHTML = "";
  const header = document.createElement("div");
  header.className = "candidate-panel-head";
  const title = document.createElement("h3");
  title.textContent = "厳選候補比較";
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "候補追加";
  addButton.addEventListener("click", () => {
    addCandidate(pokemonId);
    renderCandidatePanel(pokemonId);
  });
  header.append(title, addButton);
  candidatePanel.append(header);

  const candidates = getCandidates(pokemonId);
  if (!candidates.length) {
    const empty = document.createElement("p");
    empty.className = "candidate-empty";
    empty.textContent = "候補を追加すると、食材・性格・サブスキルを横並びで比較できます。";
    candidatePanel.append(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "candidate-grid";
  candidates.forEach((candidate, index) => {
    grid.append(createCandidateCard(pokemonId, candidate, index));
  });
  candidatePanel.append(grid);
}

function createCandidateCard(pokemonId, candidate, index) {
  const card = document.createElement("section");
  card.className = "candidate-card";
  const head = document.createElement("div");
  head.className = "candidate-card-head";
  head.append(
    createCandidateInput(pokemonId, candidate, "label", candidate.label || `候補${index + 1}`, "候補名"),
    createCandidateSelect(pokemonId, candidate, "status", ["育成候補", "保留", "除外"], "判定"),
    iconButton("×", () => removeCandidate(pokemonId, candidate.id), "候補削除"),
  );
  card.append(head);

  const ingredientRow = document.createElement("div");
  ingredientRow.className = "candidate-field candidate-ingredients";
  const ingredientLabel = document.createElement("span");
  ingredientLabel.textContent = "食材";
  ingredientRow.append(ingredientLabel);
  for (let ingredientIndex = 0; ingredientIndex < 3; ingredientIndex += 1) {
    ingredientRow.append(createCandidateIngredientInput(pokemonId, candidate, ingredientIndex));
  }
  card.append(ingredientRow);

  card.append(
    createCandidateField(pokemonId, candidate, "nature", "性格", "例: おてスピ↑ 食材↓"),
    createCandidateSubSkillField(pokemonId, candidate, "10"),
    createCandidateSubSkillField(pokemonId, candidate, "25"),
    createCandidateSubSkillField(pokemonId, candidate, "50"),
    createCandidateMemo(pokemonId, candidate),
  );
  return card;
}

function createCandidateField(pokemonId, candidate, key, label, placeholder) {
  const field = document.createElement("label");
  field.className = "candidate-field";
  const span = document.createElement("span");
  span.textContent = label;
  const input = createCandidateInput(pokemonId, candidate, key, candidate[key] || "", placeholder);
  field.append(span, input);
  return field;
}

function createCandidateSubSkillField(pokemonId, candidate, level) {
  const field = document.createElement("label");
  field.className = "candidate-field";
  const span = document.createElement("span");
  span.textContent = `サブスキル Lv${level}`;
  const input = document.createElement("input");
  input.value = candidate.subSkills?.[level] || "";
  input.placeholder = "例: きのみの数S";
  input.addEventListener("input", () => {
    candidate.subSkills = { ...candidate.subSkills, [level]: input.value };
    saveCandidateChange();
  });
  field.append(span, input);
  return field;
}

function createCandidateIngredientInput(pokemonId, candidate, index) {
  const input = document.createElement("input");
  input.value = candidate.ingredients?.[index] || "";
  input.placeholder = `第${index + 1}`;
  input.addEventListener("input", () => {
    const ingredients = Array.isArray(candidate.ingredients) ? [...candidate.ingredients] : ["", "", ""];
    ingredients[index] = input.value;
    candidate.ingredients = ingredients;
    saveCandidateChange();
  });
  return input;
}

function createCandidateInput(pokemonId, candidate, key, value, placeholder) {
  const input = document.createElement("input");
  input.value = value;
  input.placeholder = placeholder;
  input.addEventListener("input", () => {
    candidate[key] = input.value;
    saveCandidateChange();
  });
  return input;
}

function createCandidateSelect(pokemonId, candidate, key, options, label) {
  const select = document.createElement("select");
  select.ariaLabel = label;
  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.append(option);
  });
  select.value = candidate[key] || options[0];
  select.addEventListener("change", () => {
    candidate[key] = select.value;
    saveCandidateChange();
  });
  return select;
}

function createCandidateMemo(pokemonId, candidate) {
  const field = document.createElement("label");
  field.className = "candidate-field candidate-memo";
  const span = document.createElement("span");
  span.textContent = "メモ";
  const textarea = document.createElement("textarea");
  textarea.value = candidate.memo || "";
  textarea.placeholder = "判断理由や育成方針";
  textarea.rows = 2;
  textarea.addEventListener("input", () => {
    candidate.memo = textarea.value;
    saveCandidateChange();
  });
  field.append(span, textarea);
  return field;
}

function addCandidate(pokemonId) {
  const candidates = getCandidates(pokemonId);
  const detail = pokemonDetailData[pokemonId] || {};
  candidates.push({
    id: createId(),
    label: `候補${candidates.length + 1}`,
    ingredients: Array.isArray(detail.ingredients) ? detail.ingredients.slice(0, 3) : ["", "", ""],
    nature: "",
    subSkills: { 10: "", 25: "", 50: "" },
    status: "保留",
    memo: "",
  });
  state.candidateNotes[pokemonId] = candidates;
  saveCandidateChange();
  render();
}

function removeCandidate(pokemonId, candidateId) {
  state.candidateNotes[pokemonId] = getCandidates(pokemonId).filter(candidate => candidate.id !== candidateId);
  if (!state.candidateNotes[pokemonId].length) delete state.candidateNotes[pokemonId];
  saveCandidateChange();
  render();
  renderCandidatePanel(pokemonId);
}

function getCandidates(pokemonId) {
  if (!state.candidateNotes) state.candidateNotes = {};
  if (!Array.isArray(state.candidateNotes[pokemonId])) state.candidateNotes[pokemonId] = [];
  return state.candidateNotes[pokemonId];
}

function getCandidateCount(pokemonId) {
  const candidates = state.candidateNotes?.[pokemonId];
  return Array.isArray(candidates) ? candidates.length : 0;
}

function saveCandidateChange() {
  saveState();
}

function renderPokemonInfoFields(pokemon) {
  pokemonInfoFields.innerHTML = "";
  const detail = pokemonDetailData[pokemon.id] || {};
  [
    ["mainSkill", "メインスキル"],
    ["ingredients", "食材構成"],
    ["fields", "出現フィールド(種基準)"],
    ["baseGauge", "種ポケモンのゲージ"],
  ].forEach(([key, labelText]) => {
    const item = document.createElement("div");
    item.className = "pokemon-info-item";
    const span = document.createElement("span");
    span.textContent = labelText;
    const value = document.createElement("strong");
    value.textContent = formatPokemonDetailValue(key, detail[key]);
    item.append(span, value);
    pokemonInfoFields.append(item);
  });
  const sourceItem = document.createElement("div");
  sourceItem.className = "pokemon-info-item";
  const sourceLabel = document.createElement("span");
  sourceLabel.textContent = "参考情報";
  const sourceValue = document.createElement("strong");
  sourceValue.textContent = "Game8 / Bulbapedia";
  sourceItem.append(sourceLabel, sourceValue);
  pokemonInfoFields.append(sourceItem);
}

function formatPokemonDetailValue(key, value) {
  if (key === "ingredients" && Array.isArray(value)) {
    return value.length ? value.map((ingredient, index) => `第${index + 1}: ${ingredient}`).join(" / ") : "未設定";
  }
  if (Array.isArray(value)) return value.length ? value.join(" / ") : "未設定";
  return value || "未設定";
}

function appendStatusMoveButtons(pokemonId, status, label) {
  getStatusTiers(status).forEach(tier => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${label} ${tier.name}`;
    button.addEventListener("click", () => {
      movePokemonToStatus(pokemonId, status, tier.id);
      moveDialog.close();
    });
    moveTargets.append(button);
  });
}

function getLinkedStatusTier(status, currentTierId) {
  const sourceTier = state.tiers.find(tier => tier.id === currentTierId);
  if (!sourceTier) return null;
  return getStatusTiers(status).find(tier => tier.name === sourceTier.name) || null;
}

function openPokemonSearch(pokemon) {
  const query = encodeURIComponent(`ポケモンスリープ ${pokemon.name}`);
  window.open(`https://www.google.com/search?q=${query}`, "_blank", "noopener");
}

function movePokemon(pokemonId, targetTierId, beforePokemonId = null) {
  if (!pokemonId) return;
  removePokemonFromAllLists(pokemonId);
  const tier = state.tiers.find(item => item.id === targetTierId);
  if (tier) {
    const beforeIndex = tier.pokemonIds.indexOf(beforePokemonId);
    if (beforeIndex >= 0) tier.pokemonIds.splice(beforeIndex, 0, pokemonId);
    else tier.pokemonIds.push(pokemonId);
  }
  render();
}

function movePokemonToStatus(pokemonId, status, targetTierId, beforePokemonId = null) {
  if (!pokemonId) return;
  removePokemonFromAllLists(pokemonId);
  const tier = getStatusTiers(status).find(item => item.id === targetTierId);
  if (tier) {
    const beforeIndex = tier.pokemonIds.indexOf(beforePokemonId);
    if (beforeIndex >= 0) tier.pokemonIds.splice(beforeIndex, 0, pokemonId);
    else tier.pokemonIds.push(pokemonId);
  }
  render();
}

function removePokemonFromAllLists(pokemonId) {
  state.tiers.forEach(tier => {
    tier.pokemonIds = tier.pokemonIds.filter(id => id !== pokemonId);
  });
  state.finishedTiers.forEach(tier => {
    tier.pokemonIds = tier.pokemonIds.filter(id => id !== pokemonId);
  });
  state.compromiseTiers.forEach(tier => {
    tier.pokemonIds = tier.pokemonIds.filter(id => id !== pokemonId);
  });
}

function getUsedPokemonIds() {
  return new Set([
    ...state.tiers.flatMap(tier => tier.pokemonIds),
    ...getStatusPokemonIds("compromise"),
    ...getStatusPokemonIds("finished"),
  ]);
}

function getStatusPokemonIds(status) {
  return getStatusTiers(status).flatMap(tier => tier.pokemonIds);
}

function getStatusTiers(status) {
  return status === "compromise" ? state.compromiseTiers : state.finishedTiers;
}

function parseStatusTierId(value) {
  if (!value) return null;
  const [status, tierId] = value.split(":");
  if (!["compromise", "finished"].includes(status) || !tierId) return null;
  return { status, tierId };
}

function moveTier(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.tiers.length) return;
  const [tier] = state.tiers.splice(index, 1);
  state.tiers.splice(nextIndex, 0, tier);
  const [finishedTier] = state.finishedTiers.splice(index, 1);
  state.finishedTiers.splice(nextIndex, 0, finishedTier);
  const [compromiseTier] = state.compromiseTiers.splice(index, 1);
  state.compromiseTiers.splice(nextIndex, 0, compromiseTier);
  render();
}

function removeTier(tierId) {
  if (state.tiers.length <= 1) return;
  const tier = state.tiers.find(item => item.id === tierId);
  state.tiers = state.tiers.filter(tier => tier.id !== tierId);
  if (tier) state.finishedTiers = state.finishedTiers.filter(item => item.name !== tier.name);
  if (tier) state.compromiseTiers = state.compromiseTiers.filter(item => item.name !== tier.name);
  render();
}

function addTier() {
  const palette = ["#f6b1a4", "#f4d27e", "#b8d98b", "#91cbd3", "#b9b4dd", "#d5dce5"];
  const tierName = "新規";
  const tierColor = palette[state.tiers.length % palette.length];
  state.tiers.push({
    id: createId(),
    name: tierName,
    description: "",
    color: tierColor,
    pokemonIds: [],
  });
  state.finishedTiers.push({
    id: createId(),
    name: tierName,
    description: "",
    color: tierColor,
    pokemonIds: [],
  });
  state.compromiseTiers.push({
    id: createId(),
    name: tierName,
    description: "",
    color: tierColor,
    pokemonIds: [],
  });
  render();
}

function resetState() {
  if (!confirm("Tier表を初期状態に戻しますか？")) return;
  state = createDefaultState();
  render();
}

function getPokemon(id) {
  return finalPokemon.find(pokemon => pokemon.id === id);
}

async function exportPng() {
  const scale = 2;
  const labelWidth = 170;
  const cardWidth = 84;
  const cardHeight = 92;
  const gap = 8;
  const width = 1600;
  const tableX = 20;
  const tableWidth = width - tableX * 2;
  const statusColumnWidth = Math.floor((tableWidth - labelWidth) / 3);
  const headerHeight = 44;
  const cardsPerLine = Math.max(1, Math.floor((statusColumnWidth - gap * 2) / (cardWidth + gap)));
  const rowHeights = state.tiers.map((tier, index) => {
    const compromiseTier = state.compromiseTiers[index] || { pokemonIds: [] };
    const finishedTier = state.finishedTiers[index] || { pokemonIds: [] };
    const maxLineCount = Math.max(
      1,
      Math.ceil(tier.pokemonIds.length / cardsPerLine),
      Math.ceil(compromiseTier.pokemonIds.length / cardsPerLine),
      Math.ceil(finishedTier.pokemonIds.length / cardsPerLine),
    );
    return 24 + maxLineCount * cardHeight + (maxLineCount - 1) * 6;
  });
  const height = 74 + headerHeight + rowHeights.reduce((total, rowHeight) => total + rowHeight, 0) + 24;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#f4f6f5";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#e8f1ee";
  ctx.fillRect(0, 0, width, 74);
  ctx.fillStyle = "#17202a";
  ctx.font = "700 30px system-ui, sans-serif";
  ctx.fillText("ポケスリ厳選ノート", 24, 44);
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillStyle = "#5d6977";
  ctx.fillText(new Date().toLocaleDateString("ja-JP"), 24, 64);

  let y = 74;
  const headers = ["Tier", "厳選未完了", "妥協個体あり", "厳選完了"];
  const headerWidths = [labelWidth, statusColumnWidth, statusColumnWidth, statusColumnWidth];
  let headerX = tableX;
  ctx.fillStyle = "#213632";
  roundedRect(ctx, tableX, y, tableWidth, headerHeight, 8);
  ctx.fill();
  ctx.fillStyle = "#f8fbfa";
  ctx.font = "800 16px system-ui, sans-serif";
  ctx.textAlign = "center";
  headers.forEach((header, index) => {
    ctx.fillText(header, headerX + headerWidths[index] / 2, y + 28);
    headerX += headerWidths[index];
  });
  y += headerHeight;

  for (let rowIndex = 0; rowIndex < state.tiers.length; rowIndex += 1) {
    const tier = state.tiers[rowIndex];
    const compromiseTier = state.compromiseTiers[rowIndex] || { pokemonIds: [] };
    const finishedTier = state.finishedTiers[rowIndex] || { pokemonIds: [] };
    const rowHeight = rowHeights[rowIndex];
    ctx.fillStyle = rowIndex % 2 === 0 ? "#ffffff" : "#fbfdfc";
    roundedRect(ctx, tableX, y, tableWidth, rowHeight - 8, 8);
    ctx.fill();
    ctx.fillStyle = tier.color;
    roundedRect(ctx, tableX, y, labelWidth, rowHeight - 8, 8);
    ctx.fill();
    ctx.fillStyle = "#17202a";
    ctx.font = "800 34px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(tier.name, tableX + labelWidth / 2, y + 48);
    if (tier.description) {
      ctx.font = "700 13px system-ui, sans-serif";
      wrapText(ctx, tier.description, tableX + labelWidth / 2, y + 68, labelWidth - 16, 14);
    }
    await drawExportCards(ctx, tier.pokemonIds, tableX + labelWidth, y, statusColumnWidth, cardWidth, cardHeight, gap);
    await drawExportCards(ctx, compromiseTier.pokemonIds, tableX + labelWidth + statusColumnWidth, y, statusColumnWidth, cardWidth, cardHeight, gap);
    await drawExportCards(ctx, finishedTier.pokemonIds, tableX + labelWidth + statusColumnWidth * 2, y, statusColumnWidth, cardWidth, cardHeight, gap);
    y += rowHeight;
  }
  ctx.fillStyle = "#5d6977";
  ctx.font = "12px system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Tier元情報: Game8の最強ポケモンランキングTier表を参考に作成", 24, height - 8);

  const link = document.createElement("a");
  link.download = "pokesuri-tier.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(serializeState(state), null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.download = `pokesuri-note-${new Date().toISOString().slice(0, 10)}.json`;
  link.href = URL.createObjectURL(blob);
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

async function importJson(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  try {
    const text = await file.text();
    state = migrateState(JSON.parse(text));
    render();
    alert("JSONから復元しました。");
  } catch {
    alert("JSONを読み込めませんでした。ポケスリ厳選ノートで保存したJSONを選んでください。");
  }
}

async function drawExportCards(ctx, pokemonIds, x, y, columnWidth, cardWidth, cardHeight, gap) {
  let cardX = x + gap;
  let cardY = y + 8;
  for (const pokemonId of pokemonIds) {
    const pokemon = getPokemon(pokemonId);
    if (!pokemon) continue;
    if (cardX + cardWidth > x + columnWidth - gap) {
      cardX = x + gap;
      cardY += cardHeight + 6;
    }
    await drawExportCard(ctx, pokemon, cardX, cardY, cardWidth, cardHeight);
    cardX += cardWidth + gap;
  }
}

async function drawExportCard(ctx, pokemon, x, y, width, height) {
  ctx.fillStyle = "#ffffff";
  roundedRect(ctx, x, y, width, height, 8);
  ctx.fill();
  ctx.strokeStyle = "#d6e1dd";
  ctx.stroke();
  const image = await loadFirstImage(pokemon.iconUrls);
  if (image) {
    ctx.drawImage(image, x + width / 2 - 24, y + 6, 48, 48);
  } else {
    ctx.fillStyle = "#eef2f6";
    ctx.beginPath();
    ctx.arc(x + width / 2, y + 28, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#256f8f";
    ctx.font = "800 20px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(pokemon.name.slice(0, 1), x + width / 2, y + 35);
  }
  ctx.fillStyle = "#17202a";
  ctx.font = "700 13px system-ui, sans-serif";
  wrapText(ctx, pokemon.name, x + width / 2, y + 62, width - 8, 15);
  ctx.fillStyle = "#5d6977";
  ctx.font = "11px system-ui, sans-serif";
  ctx.fillText(pokemon.specialty, x + width / 2, y + 84);
  ctx.textAlign = "left";
}

async function loadFirstImage(urls) {
  for (const url of urls) {
    const image = await loadImage(url);
    if (image) return image;
  }
  return null;
}

function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  const chars = [...text];
  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createDefaultState() {
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    tiers: clone(defaultTiers),
    compromiseTiers: clone(defaultCompromiseTiers),
    finishedTiers: clone(defaultFinishedTiers),
    candidateNotes: {},
  };
}

function loadStoredState() {
  return [STORAGE_KEY, ...LEGACY_STORAGE_KEYS]
    .map(key => localStorage.getItem(key))
    .find(Boolean);
}

function serializeState(value) {
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    tiers: normalizeTiers(value.tiers),
    compromiseTiers: normalizeStatusTiers(value, "compromise"),
    finishedTiers: normalizeFinishedTiers(value),
    candidateNotes: normalizeCandidateNotes(value.candidateNotes),
  };
}

function migrateState(parsed) {
  if (!parsed || !Array.isArray(parsed.tiers)) throw new Error("Invalid saved state");
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    tiers: normalizeTiers(parsed.tiers),
    compromiseTiers: normalizeStatusTiers(parsed, "compromise"),
    finishedTiers: normalizeFinishedTiers(parsed),
    candidateNotes: normalizeCandidateNotes(parsed.candidateNotes),
  };
}

function normalizeTiers(tiers) {
  const knownIds = getKnownPokemonIds();
  return tiers.map(tier => ({
    id: tier.id || createId(),
    name: tier.name || " ",
    description: normalizeTierDescription(tier.name, tier.description),
    color: tier.color || "#d5dce5",
    pokemonIds: uniqueKnownIds(tier.pokemonIds, knownIds),
  }));
}

function normalizeFinishedTiers(parsed) {
  const normalized = normalizeStatusTiers(parsed, "finished");

  if (Array.isArray(parsed.finishedIds) && parsed.finishedIds.length && normalized[0]) {
    const knownIds = getKnownPokemonIds();
    normalized[0].pokemonIds = uniqueKnownIds([...normalized[0].pokemonIds, ...parsed.finishedIds], knownIds);
  }

  return normalized;
}

function normalizeStatusTiers(parsed, status) {
  const sourceKey = status === "compromise" ? "compromiseTiers" : "finishedTiers";
  const defaultByName = status === "compromise" ? defaultCompromiseTierByName : defaultFinishedTierByName;
  const savedTiers = Array.isArray(parsed[sourceKey]) ? parsed[sourceKey] : [];
  const savedByName = new Map(savedTiers.map(tier => [tier.name, tier]));
  const knownIds = getKnownPokemonIds();
  return parsed.tiers.map(tier => {
    const saved = savedByName.get(tier.name);
    const defaultTier = defaultByName.get(tier.name);
    return {
      id: saved?.id || defaultTier?.id || createId(),
      name: tier.name || " ",
      description: normalizeTierDescription(tier.name, tier.description),
      color: tier.color || "#d5dce5",
      pokemonIds: uniqueKnownIds(saved?.pokemonIds, knownIds),
    };
  });
}

function normalizeCandidateNotes(candidateNotes) {
  if (!candidateNotes || typeof candidateNotes !== "object") return {};
  const knownIds = getKnownPokemonIds();
  return Object.fromEntries(
    Object.entries(candidateNotes)
      .filter(([pokemonId, candidates]) => knownIds.has(pokemonId) && Array.isArray(candidates))
      .map(([pokemonId, candidates]) => [
        pokemonId,
        candidates.map(normalizeCandidate).filter(Boolean),
      ])
      .filter(([, candidates]) => candidates.length),
  );
}

function normalizeCandidate(candidate) {
  if (!candidate || typeof candidate !== "object") return null;
  const subSkills = candidate.subSkills && typeof candidate.subSkills === "object" ? candidate.subSkills : {};
  return {
    id: candidate.id || createId(),
    label: candidate.label || "候補",
    ingredients: normalizeCandidateIngredients(candidate.ingredients),
    nature: candidate.nature || "",
    subSkills: {
      10: subSkills[10] || subSkills["10"] || "",
      25: subSkills[25] || subSkills["25"] || "",
      50: subSkills[50] || subSkills["50"] || "",
    },
    status: ["育成候補", "保留", "除外"].includes(candidate.status) ? candidate.status : "保留",
    memo: candidate.memo || "",
  };
}

function normalizeCandidateIngredients(ingredients) {
  const values = Array.isArray(ingredients) ? ingredients : [];
  return [0, 1, 2].map(index => values[index] || "");
}

function uniqueKnownIds(idsValue, knownIds) {
  if (!Array.isArray(idsValue)) return [];
  return [...new Set(idsValue)].filter(id => knownIds.has(id));
}

function getKnownPokemonIds() {
  return new Set(finalPokemon.map(pokemon => pokemon.id));
}

function getDefaultTierDescription(name) {
  return defaultTiers.find(tier => tier.name === name)?.description || "";
}

function normalizeTierDescription(name, description) {
  const fallback = getDefaultTierDescription(name);
  if (!description) return fallback;
  if (name === "A" && description === "誰もいないときボナサブを投げる") return "ボナサブ要員";
  return description;
}

function ids(value) {
  return value.split(" ");
}

function clone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
