const STORAGE_KEY = "pokesuri-tier-maker-state";
const STORAGE_SCHEMA_VERSION = 4;
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
    description: "誰もいないときボナサブを投げる",
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
      "baseGauge": "5"
    },
    "charizard": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "マメミート",
        "あったかジンジャー",
        "げきからハーブ"
      ],
      "baseGauge": "5"
    },
    "butterfree": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あまいミツ",
        "あんみんトマト",
        "ワカクサ大豆"
      ],
      "baseGauge": "5"
    },
    "raticate": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "とくせんリンゴ",
        "ワカクサ大豆",
        "マメミート"
      ],
      "baseGauge": "12"
    },
    "arbok": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "マメミート",
        "とくせんエッグ",
        "げきからハーブ"
      ],
      "baseGauge": "12"
    },
    "pikachu-halloween": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "とくせんリンゴ",
        "とくせんエッグ",
        "あったかジンジャー"
      ],
      "baseGauge": "7"
    },
    "pikachu-holiday": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "とくせんリンゴ",
        "とくせんエッグ",
        "あったかジンジャー"
      ],
      "baseGauge": "7"
    },
    "raichu": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "とくせんリンゴ",
        "とくせんエッグ",
        "あったかジンジャー"
      ],
      "baseGauge": "7"
    },
    "clefable": {
      "mainSkill": "ゆびをふる",
      "ingredients": [
        "とくせんリンゴ",
        "あまいミツ",
        "ワカクサ大豆"
      ],
      "baseGauge": "7"
    },
    "wigglytuff": {
      "mainSkill": "げんきオールS",
      "ingredients": [
        "あまいミツ",
        "ピュアなオイル",
        "リラックスカカオ"
      ],
      "baseGauge": "16"
    },
    "dugtrio": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "あんみんトマト",
        "ふといながねぎ",
        "ワカクサ大豆"
      ],
      "baseGauge": "12"
    },
    "persian": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "モーモーミルク",
        "マメミート"
      ],
      "baseGauge": "12"
    },
    "golduck": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "リラックスカカオ",
        "とくせんリンゴ",
        "マメミート"
      ],
      "baseGauge": "12"
    },
    "primeape": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "マメミート",
        "あじわいキノコ",
        "あまいミツ"
      ],
      "baseGauge": "12"
    },
    "arcanine": {
      "mainSkill": "おてつだいサポートS",
      "ingredients": [
        "げきからハーブ",
        "マメミート",
        "モーモーミルク"
      ],
      "baseGauge": "5"
    },
    "victreebel": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "あんみんトマト",
        "ほっこりポテト",
        "ふといながねぎ"
      ],
      "baseGauge": "5"
    },
    "golem": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ワカクサ大豆",
        "あじわいキノコ",
        "ほっこりポテト"
      ],
      "baseGauge": "5"
    },
    "slowbro": {
      "mainSkill": "げんきエールS",
      "ingredients": [
        "リラックスカカオ",
        "おいしいシッポ",
        "あんみんトマト"
      ],
      "baseGauge": "12"
    },
    "farfetchd": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ふといながねぎ",
        "マメミート",
        "あったかジンジャー"
      ],
      "baseGauge": "16"
    },
    "dodrio": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "ワカクサ大豆",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "gengar": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "げきからハーブ",
        "あじわいキノコ",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "onix": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あんみんトマト",
        "マメミート",
        "ほっこりポテト"
      ],
      "baseGauge": "16"
    },
    "marowak": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "あったかジンジャー",
        "リラックスカカオ"
      ],
      "baseGauge": "12"
    },
    "kangaskhan": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あったかジンジャー",
        "ほっこりポテト",
        "ワカクサ大豆"
      ],
      "baseGauge": "16"
    },
    "mr-mime": {
      "mainSkill": "ものまね(スキルコピー)",
      "ingredients": [
        "あんみんトマト",
        "ほっこりポテト",
        "ふといながねぎ"
      ],
      "baseGauge": "12"
    },
    "pinsir": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "あまいミツ",
        "とくせんリンゴ",
        "マメミート"
      ],
      "baseGauge": "16"
    },
    "eevee-holiday": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ"
      ],
      "baseGauge": "5"
    },
    "eevee-halloween": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "vaporeon": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "jolteon": {
      "mainSkill": "おてつだいサポートS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "flareon": {
      "mainSkill": "料理パワーアップS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "dragonite": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "げきからハーブ",
        "ワカクサコーン",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "meganium": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "リラックスカカオ",
        "あまいミツ",
        "ふといながねぎ"
      ],
      "baseGauge": "5"
    },
    "typhlosion": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "あったかジンジャー",
        "げきからハーブ",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "feraligatr": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "マメミート",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "xatu": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "とくせんエッグ",
        "リラックスカカオ",
        "とくせんリンゴ"
      ],
      "baseGauge": "12"
    },
    "ampharos": {
      "mainSkill": "エナジーチャージM",
      "ingredients": [
        "げきからハーブ",
        "とくせんエッグ"
      ],
      "baseGauge": "5"
    },
    "sudowoodo": {
      "mainSkill": "エナジーチャージM",
      "ingredients": [
        "あんみんトマト",
        "ワカクサ大豆",
        "あじわいキノコ"
      ],
      "baseGauge": "7"
    },
    "espeon": {
      "mainSkill": "エナジーチャージM",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "umbreon": {
      "mainSkill": "つきのひかり(げんきチャージS)",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "slowking": {
      "mainSkill": "げんきエールS",
      "ingredients": [
        "リラックスカカオ",
        "おいしいシッポ",
        "あんみんトマト"
      ],
      "baseGauge": "5"
    },
    "wobbuffet": {
      "mainSkill": "げんきエールS",
      "ingredients": [
        "とくせんリンゴ",
        "あじわいキノコ",
        "ピュアなオイル"
      ],
      "baseGauge": "7"
    },
    "steelix": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あんみんトマト",
        "マメミート",
        "ほっこりポテト"
      ],
      "baseGauge": "16"
    },
    "shuckle": {
      "mainSkill": "きのみジュース(げんきオールS)",
      "ingredients": [
        "ピュアなオイル",
        "めざましコーヒー",
        "あまいミツ"
      ],
      "baseGauge": "16"
    },
    "heracross": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あまいミツ",
        "あじわいキノコ",
        "マメミート"
      ],
      "baseGauge": "16"
    },
    "weavile": {
      "mainSkill": "料理チャンスS",
      "ingredients": [
        "マメミート",
        "とくせんエッグ",
        "ワカクサ大豆"
      ],
      "baseGauge": "16"
    },
    "delibird": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "とくせんエッグ",
        "とくせんリンゴ",
        "リラックスカカオ"
      ],
      "baseGauge": "16"
    },
    "houndoom": {
      "mainSkill": "エナジーチャージM",
      "ingredients": [
        "げきからハーブ",
        "あったかジンジャー",
        "ふといながねぎ"
      ],
      "baseGauge": "5"
    },
    "raikou": {
      "mainSkill": "おてつだいブースト(でんき)",
      "ingredients": [
        "マメミート",
        "げきからハーブ",
        "ふといながねぎ"
      ],
      "baseGauge": "30"
    },
    "entei": {
      "mainSkill": "おてつだいブースト(ほのお)",
      "ingredients": [
        "ピュアなオイル",
        "あんみんトマト",
        "あじわいキノコ"
      ],
      "baseGauge": "30"
    },
    "suicune": {
      "mainSkill": "おてつだいブースト(みず)",
      "ingredients": [
        "とくせんリンゴ",
        "ピュアなオイル",
        "ワカクサコーン"
      ],
      "baseGauge": "30"
    },
    "spheal-holiday": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "ピュアなオイル",
        "マメミート",
        "あったかジンジャー"
      ],
      "baseGauge": "5"
    },
    "sceptile": {
      "mainSkill": "きのみバースト",
      "ingredients": [
        "とくせんエッグ",
        "めざましコーヒー",
        "ふといながねぎ"
      ],
      "baseGauge": "20"
    },
    "blaziken": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "あじわいキノコ",
        "ワカクサ大豆",
        "ピュアなオイル"
      ],
      "baseGauge": "20"
    },
    "swampert": {
      "mainSkill": "料理チャンスS",
      "ingredients": [
        "ワカクサコーン",
        "モーモーミルク",
        "あじわいキノコ"
      ],
      "baseGauge": "20"
    },
    "slaking": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "あんみんトマト",
        "あまいミツ",
        "とくせんリンゴ"
      ],
      "baseGauge": "5"
    },
    "aggron": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "マメミート",
        "めざましコーヒー",
        "ワカクサ大豆"
      ],
      "baseGauge": "5"
    },
    "plusle": {
      "mainSkill": "プラス(食材ゲットS)",
      "ingredients": [
        "めざましコーヒー",
        "ふといながねぎ",
        "モーモーミルク"
      ],
      "baseGauge": "10"
    },
    "swalot": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "ワカクサ大豆",
        "あじわいキノコ",
        "あまいミツ"
      ],
      "baseGauge": "5"
    },
    "minun": {
      "mainSkill": "マイナス(料理パワーアップS)",
      "ingredients": [
        "あまいミツ",
        "とくせんエッグ",
        "モーモーミルク"
      ],
      "baseGauge": "10"
    },
    "flygon": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "つやつやアボカド",
        "げきからハーブ",
        "ワカクサ大豆"
      ],
      "baseGauge": "20"
    },
    "altaria": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "とくせんエッグ",
        "ワカクサ大豆",
        "とくせんリンゴ"
      ],
      "baseGauge": "5"
    },
    "banette": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ピュアなオイル",
        "あったかジンジャー",
        "あじわいキノコ"
      ],
      "baseGauge": "5"
    },
    "absol": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "リラックスカカオ",
        "あじわいキノコ",
        "とくせんリンゴ"
      ],
      "baseGauge": "16"
    },
    "walrein": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "ピュアなオイル",
        "マメミート",
        "あったかジンジャー"
      ],
      "baseGauge": "5"
    },
    "salamence": {
      "mainSkill": "料理パワーアップS",
      "ingredients": [
        "ほっこりポテト",
        "あったかジンジャー",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "luxray": {
      "mainSkill": "料理パワーアップS",
      "ingredients": [
        "あんみんトマト",
        "ピュアなオイル",
        "めざましコーヒー"
      ],
      "baseGauge": "5"
    },
    "drifblim": {
      "mainSkill": "たくわえる(エナジーチャージS)",
      "ingredients": [
        "ワカクサコーン",
        "ピュアなオイル",
        "ほっこりポテト"
      ],
      "baseGauge": "5"
    },
    "honchkrow": {
      "mainSkill": "きょううん(食材セレクトS)",
      "ingredients": [
        "めざましコーヒー",
        "ワカクサ大豆",
        "げきからハーブ"
      ],
      "baseGauge": "20"
    },
    "spiritomb": {
      "mainSkill": "おてつだいサポートS",
      "ingredients": [
        "あじわいキノコ",
        "ずっしりカボチャ",
        "ふといながねぎ"
      ],
      "baseGauge": "16"
    },
    "lucario": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "ピュアなオイル",
        "ほっこりポテト",
        "とくせんエッグ"
      ],
      "baseGauge": "20"
    },
    "toxicroak": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ピュアなオイル",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "abomasnow": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "あんみんトマト",
        "とくせんエッグ",
        "あじわいキノコ"
      ],
      "baseGauge": "5"
    },
    "magnezone": {
      "mainSkill": "料理パワーアップS",
      "ingredients": [
        "ピュアなオイル",
        "げきからハーブ"
      ],
      "baseGauge": "5"
    },
    "togekiss": {
      "mainSkill": "ゆびをふる",
      "ingredients": [
        "とくせんエッグ",
        "あったかジンジャー",
        "リラックスカカオ"
      ],
      "baseGauge": "5"
    },
    "gallade": {
      "mainSkill": "おてつだいサポートS",
      "ingredients": [
        "とくせんリンゴ",
        "ワカクサコーン",
        "ふといながねぎ"
      ],
      "baseGauge": "5"
    },
    "cresselia": {
      "mainSkill": "みかづきのいのり(げんきオールS)",
      "ingredients": [
        "あったかジンジャー",
        "リラックスカカオ",
        "あんみんトマト"
      ],
      "baseGauge": "30"
    },
    "darkrai": {
      "mainSkill": "ナイトメア(エナジーチャージM)",
      "ingredients": [
        "マメミート"
      ],
      "baseGauge": "20"
    },
    "musharna": {
      "mainSkill": "ゆめのかけらゲットS",
      "ingredients": [
        "モーモーミルク",
        "あまいミツ",
        "めざましコーヒー"
      ],
      "baseGauge": "20"
    },
    "crustle": {
      "mainSkill": "食材セレクトS",
      "ingredients": [
        "つやつやアボカド",
        "ほっこりポテト",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "braviary": {
      "mainSkill": "きのみバースト",
      "ingredients": [
        "マメミート",
        "ワカクサコーン",
        "めざましコーヒー"
      ],
      "baseGauge": "12"
    },
    "sylveon": {
      "mainSkill": "げんきオールS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "dedenne": {
      "mainSkill": "料理チャンスS",
      "ingredients": [
        "とくせんリンゴ",
        "リラックスカカオ",
        "ワカクサコーン"
      ],
      "baseGauge": "16"
    },
    "gourgeist": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ずっしりカボチャ",
        "ワカクサ大豆",
        "ほっこりポテト"
      ],
      "baseGauge": "20"
    },
    "vikavolt": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "めざましコーヒー",
        "あじわいキノコ",
        "あまいミツ"
      ],
      "baseGauge": "5"
    },
    "bewear": {
      "mainSkill": "エナジーチャージS",
      "ingredients": [
        "ワカクサコーン",
        "マメミート",
        "とくせんエッグ"
      ],
      "baseGauge": "5"
    },
    "comfey": {
      "mainSkill": "げんきエールS",
      "ingredients": [
        "ワカクサコーン",
        "あったかジンジャー",
        "リラックスカカオ"
      ],
      "baseGauge": "16"
    },
    "mimikyu": {
      "mainSkill": "ばけのかわ(きのみバースト)",
      "ingredients": [
        "とくせんリンゴ",
        "めざましコーヒー",
        "あじわいキノコ"
      ],
      "baseGauge": "16"
    },
    "cramorant": {
      "mainSkill": "料理チャンスS",
      "ingredients": [
        "ピュアなオイル",
        "ほっこりポテト",
        "とくせんエッグ"
      ],
      "baseGauge": "16"
    },
    "toxtricity-low": {
      "mainSkill": "マイナス(料理パワーアップS)",
      "ingredients": [
        "モーモーミルク",
        "とくせんリンゴ",
        "ふといながねぎ"
      ],
      "baseGauge": "20"
    },
    "toxtricity-amped": {
      "mainSkill": "プラス(食材ゲットS)",
      "ingredients": [
        "モーモーミルク",
        "とくせんリンゴ",
        "ふといながねぎ"
      ],
      "baseGauge": "20"
    },
    "meowscarada": {
      "mainSkill": "料理パワーアップS",
      "ingredients": [
        "ほっこりポテト",
        "モーモーミルク",
        "あったかジンジャー"
      ],
      "baseGauge": "5"
    },
    "skeledirge": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "とくせんリンゴ",
        "マメミート",
        "げきからハーブ"
      ],
      "baseGauge": "5"
    },
    "quaquaval": {
      "mainSkill": "エナジーチャージM",
      "ingredients": [
        "ワカクサ大豆",
        "ふといながねぎ",
        "ピュアなオイル"
      ],
      "baseGauge": "5"
    },
    "pawmot": {
      "mainSkill": "げんきオールS",
      "ingredients": [
        "リラックスカカオ",
        "モーモーミルク",
        "とくせんエッグ"
      ],
      "baseGauge": "5"
    },
    "clodsire": {
      "mainSkill": "げんきチャージS",
      "ingredients": [
        "リラックスカカオ",
        "めざましコーヒー",
        "ほっこりポテト"
      ],
      "baseGauge": "12"
    },
    "blastoise": {
      "mainSkill": "食材ゲットS",
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "baseGauge": "5"
    },
    "sandslash": {
      "ingredients": [
        "ずっしりカボチャ",
        "ワカクサコーン",
        "ほっこりポテト"
      ],
      "mainSkill": "食材セレクトS",
      "baseGauge": "5"
    },
    "ninetales": {
      "ingredients": [
        "ワカクサ大豆",
        "ワカクサコーン",
        "ほっこりポテト"
      ],
      "mainSkill": "げんきエールS",
      "baseGauge": "5"
    },
    "ninetales-alola": {
      "ingredients": [
        "ワカクサ大豆",
        "ワカクサコーン",
        "ほっこりポテト"
      ],
      "mainSkill": "おてつだいサポートS",
      "baseGauge": "5"
    },
    "ditto": {
      "ingredients": [
        "ピュアなオイル",
        "ふといながねぎ",
        "おいしいシッポ"
      ],
      "mainSkill": "へんしん(スキルコピー)",
      "baseGauge": "16"
    },
    "mew": {
      "ingredients": [
        "とくせんエッグ",
        "げきからハーブ"
      ],
      "mainSkill": "オールマイティー(ゆびをふる)",
      "baseGauge": "25"
    },
    "quagsire": {
      "ingredients": [
        "あじわいキノコ",
        "ほっこりポテト",
        "マメミート"
      ],
      "mainSkill": "げんきチャージS",
      "baseGauge": "5"
    },
    "blissey": {
      "ingredients": [
        "とくせんエッグ",
        "ほっこりポテト",
        "あまいミツ"
      ],
      "mainSkill": "げんきオールS",
      "baseGauge": "5"
    },
    "tyranitar": {
      "ingredients": [
        "あったかジンジャー",
        "ワカクサ大豆",
        "マメミート"
      ],
      "mainSkill": "げんきチャージS",
      "baseGauge": "5"
    },
    "gardevoir": {
      "ingredients": [
        "とくせんリンゴ",
        "ワカクサコーン",
        "ふといながねぎ"
      ],
      "mainSkill": "げんきオールS",
      "baseGauge": "5"
    },
    "sableye": {
      "ingredients": [
        "ピュアなオイル",
        "あじわいキノコ",
        "リラックスカカオ"
      ],
      "mainSkill": "ゆめのかけらゲットS",
      "baseGauge": "16"
    },
    "mawile": {
      "ingredients": [
        "ピュアなオイル",
        "ワカクサコーン",
        "あんみんトマト"
      ],
      "mainSkill": "かいりきバサミ(食材セレクトS)",
      "baseGauge": "16"
    },
    "latias": {
      "ingredients": [
        "あんみんトマト",
        "ずっしりカボチャ",
        "あじわいキノコ"
      ],
      "mainSkill": "いやしのはどう(げんきエールS)",
      "baseGauge": "30"
    },
    "leafeon": {
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "mainSkill": "げんきエールS",
      "baseGauge": "5"
    },
    "glaceon": {
      "ingredients": [
        "モーモーミルク",
        "リラックスカカオ",
        "マメミート"
      ],
      "mainSkill": "料理パワーアップS",
      "baseGauge": "5"
    },
    "tyrantrum": {
      "ingredients": [
        "マメミート",
        "とくせんリンゴ",
        "ほっこりポテト"
      ],
      "mainSkill": "料理パワーアップS",
      "baseGauge": "5"
    },
    "noivern": {
      "ingredients": [
        "とくせんリンゴ",
        "ふといながねぎ",
        "マメミート"
      ],
      "mainSkill": "エナジーチャージM",
      "baseGauge": "5"
    },
    "ribombee": {
      "ingredients": [
        "あまいミツ",
        "ピュアなオイル",
        "ワカクサコーン"
      ],
      "mainSkill": "食材セレクトS",
      "baseGauge": "5"
    },
    "togedemaru": {
      "ingredients": [
        "モーモーミルク",
        "つやつやアボカド",
        "リラックスカカオ"
      ],
      "mainSkill": "ほっぺすりすり(げんきエールS)",
      "baseGauge": "16"
    },
    "cetitan": {
      "ingredients": [
        "ほっこりポテト",
        "マメミート",
        "ずっしりカボチャ"
      ],
      "mainSkill": "げんきチャージS",
      "baseGauge": "5"
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
const typeFilter = document.querySelector("#typeFilter");
const ingredientFilter = document.querySelector("#ingredientFilter");
const ingredientScopeFilter = document.querySelector("#ingredientScopeFilter");
const moveDialog = document.querySelector("#moveDialog");
const moveTargets = document.querySelector("#moveTargets");
const pokemonInfoFields = document.querySelector("#pokemonInfoFields");
const dialogPokemonName = document.querySelector("#dialogPokemonName");
const detailButton = document.querySelector("#detailButton");
let activeSpecialty = "all";

document.querySelector("#addTierButton").addEventListener("click", addTier);
document.querySelector("#resetButton").addEventListener("click", resetState);
document.querySelector("#exportButton").addEventListener("click", exportPng);
detailButton.addEventListener("click", () => {
  const pokemon = getPokemon(activePokemonId);
  if (pokemon) openPokemonSearch(pokemon);
  moveDialog.close();
});
searchInput.addEventListener("input", render);
typeFilter.addEventListener("change", render);
ingredientFilter.addEventListener("change", render);
ingredientScopeFilter.addEventListener("change", render);
window.addEventListener("resize", () => {
  requestAnimationFrame(syncTierRowHeights);
});
document.querySelectorAll("[data-specialty]").forEach(button => {
  button.addEventListener("click", () => {
    activeSpecialty = activeSpecialty === button.dataset.specialty ? "all" : button.dataset.specialty;
    document.querySelectorAll("[data-specialty]").forEach(item => item.classList.toggle("active", item.dataset.specialty === activeSpecialty));
    render();
  });
});

initializeTypeFilter();
initializeIngredientFilter();
render();

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

function render() {
  renderTiers();
  renderPool();
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
  const matchesSpecialty = activeSpecialty === "all" || pokemon.specialty === activeSpecialty;
  const matchesType = typeFilter.value === "all" || pokemon.type === typeFilter.value;
  const matchesIngredient = matchesIngredientFilter(pokemon);
  return matchesQuery && matchesSpecialty && matchesType && matchesIngredient;
}

function matchesIngredientFilter(pokemon) {
  if (ingredientScopeFilter.value === "all" || ingredientFilter.value === "all") return true;
  const detail = pokemonDetailData[pokemon.id];
  const ingredients = Array.isArray(detail?.ingredients) ? detail.ingredients : [];
  const targetCount = ingredientScopeFilter.value === "first-second" ? 2 : 1;
  return ingredients.slice(0, targetCount).includes(ingredientFilter.value);
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
  card.draggable = true;
  card.dataset.pokemonId = pokemon.id;
  card.title = `${pokemon.name} / ${pokemon.specialty} / ${pokemon.type}`;
  card.addEventListener("click", () => openMoveDialog(pokemon.id, currentTierId));
  card.addEventListener("dragstart", event => {
    activePokemonId = pokemon.id;
    event.dataTransfer.setData("text/plain", pokemon.id);
    card.classList.add("dragging");
  });
  card.addEventListener("dragend", () => card.classList.remove("dragging"));
  card.addEventListener("dragover", event => {
    event.preventDefault();
    card.classList.add("drop-hover");
  });
  card.addEventListener("dragleave", () => card.classList.remove("drop-hover"));
  card.addEventListener("drop", event => {
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
  return card;
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
  event.preventDefault();
  event.currentTarget.classList.add("drop-hover");
}

function clearDropHover(event) {
  event.currentTarget.classList.remove("drop-hover");
}

function dropPokemon(event, targetTierId) {
  event.preventDefault();
  event.currentTarget.classList.remove("drop-hover");
  const pokemonId = event.dataTransfer.getData("text/plain") || activePokemonId;
  movePokemon(pokemonId, targetTierId);
}

function dropStatusPokemon(event, status, targetTierId) {
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

  moveDialog.showModal();
}

function renderPokemonInfoFields(pokemon) {
  pokemonInfoFields.innerHTML = "";
  const detail = pokemonDetailData[pokemon.id] || {};
  [
    ["mainSkill", "メインスキル"],
    ["ingredients", "食材構成"],
    ["baseGauge", "種ポケモンのゲージ"],
  ].forEach(([key, labelText]) => {
    const item = document.createElement("div");
    item.className = "pokemon-info-item";
    const span = document.createElement("span");
    span.textContent = labelText;
    const value = document.createElement("strong");
    value.textContent = formatPokemonDetailValue(detail[key]);
    item.append(span, value);
    pokemonInfoFields.append(item);
  });
}

function formatPokemonDetailValue(value) {
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
  const labelWidth = 180;
  const cardWidth = 96;
  const cardHeight = 92;
  const gap = 10;
  const width = 1200;
  const unfinishedExportTiers = state.tiers.map(tier => ({ ...tier, name: `厳選未完了 ${tier.name}` }));
  const compromiseExportTiers = state.compromiseTiers
    .filter(tier => tier.pokemonIds.length)
    .map(tier => ({ ...tier, name: `妥協 ${tier.name}` }));
  const finishedExportTiers = state.finishedTiers
    .filter(tier => tier.pokemonIds.length)
    .map(tier => ({ ...tier, name: `完了 ${tier.name}` }));
  const exportTiers = [...unfinishedExportTiers, ...compromiseExportTiers, ...finishedExportTiers];
  const cardsPerLine = Math.floor((width - 40 - labelWidth - gap * 2) / (cardWidth + gap));
  const rowHeights = exportTiers.map(tier => {
    const lineCount = Math.max(1, Math.ceil(tier.pokemonIds.length / cardsPerLine));
    return 24 + lineCount * cardHeight + (lineCount - 1) * 6;
  });
  const height = 74 + rowHeights.reduce((total, rowHeight) => total + rowHeight, 0) + 24;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#f6f7f9";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#17202a";
  ctx.font = "700 30px system-ui, sans-serif";
  ctx.fillText("ポケスリ マイ厳選tier", 24, 44);
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillStyle = "#5d6977";
  ctx.fillText(new Date().toLocaleDateString("ja-JP"), 24, 64);

  let y = 74;
  for (let rowIndex = 0; rowIndex < exportTiers.length; rowIndex += 1) {
    const tier = exportTiers[rowIndex];
    const rowHeight = rowHeights[rowIndex];
    ctx.fillStyle = "#ffffff";
    roundedRect(ctx, 20, y, width - 40, rowHeight - 8, 8);
    ctx.fill();
    ctx.fillStyle = tier.color;
    roundedRect(ctx, 20, y, labelWidth, rowHeight - 8, 8);
    ctx.fill();
    ctx.fillStyle = "#17202a";
    ctx.font = "800 34px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(tier.name, 20 + labelWidth / 2, y + 48);
    if (tier.description) {
      ctx.font = "700 13px system-ui, sans-serif";
      wrapText(ctx, tier.description, 20 + labelWidth / 2, y + 68, labelWidth - 16, 14);
    }
    ctx.textAlign = "left";

    let x = 20 + labelWidth + gap;
    let innerY = y + 8;
    for (const pokemonId of tier.pokemonIds) {
      const pokemon = getPokemon(pokemonId);
      if (!pokemon) continue;
      if (x + cardWidth > width - 30) {
        x = 20 + labelWidth + gap;
        innerY += cardHeight + 6;
      }
      await drawExportCard(ctx, pokemon, x, innerY, cardWidth, cardHeight);
      x += cardWidth + gap;
    }
    y += rowHeight;
  }

  const link = document.createElement("a");
  link.download = "pokesuri-tier.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function drawExportCard(ctx, pokemon, x, y, width, height) {
  ctx.fillStyle = "#fbfcfd";
  roundedRect(ctx, x, y, width, height, 8);
  ctx.fill();
  ctx.strokeStyle = "#d9e0e8";
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
  };
}

function migrateState(parsed) {
  if (!parsed || !Array.isArray(parsed.tiers)) throw new Error("Invalid saved state");
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    tiers: normalizeTiers(parsed.tiers),
    compromiseTiers: normalizeStatusTiers(parsed, "compromise"),
    finishedTiers: normalizeFinishedTiers(parsed),
  };
}

function normalizeTiers(tiers) {
  const knownIds = getKnownPokemonIds();
  return tiers.map(tier => ({
    id: tier.id || createId(),
    name: tier.name || " ",
    description: tier.description || getDefaultTierDescription(tier.name),
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
      description: tier.description || getDefaultTierDescription(tier.name),
      color: tier.color || "#d5dce5",
      pokemonIds: uniqueKnownIds(saved?.pokemonIds, knownIds),
    };
  });
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

function ids(value) {
  return value.split(" ");
}

function clone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}
