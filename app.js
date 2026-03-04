// ===== ねこカフェ for Engineers =====

(function () {
  "use strict";

  // ===== 名言データ（50個以上） =====
  const QUOTES = [
    { text: "時間は猫のようなもの。捕まえようとすると逃げ、放っておくと膝に乗ってくる。", author: "猫の哲学" },
    { text: "急がなくていい。猫だって昼寝の後にしか動かない。", author: "猫の哲学" },
    { text: "バグのないコードは、動かないコードだけだ。休憩して、また立ち向かおう。", author: "プログラマーの知恵" },
    { text: "猫が箱に入るように、問題にはいつか収まるべき場所がある。", author: "猫の哲学" },
    { text: "完璧を目指すより、まず動くものを。猫は完璧でなくても愛される。", author: "アジャイルの心得" },
    { text: "人生に必要なものは、温かいコーヒーと、膝の上の猫と、良いコードだけだ。", author: "あるエンジニア" },
    { text: "猫は決して過去を悔やまない。今この瞬間を全力で生きている。", author: "猫の哲学" },
    { text: "休むことは怠けることではない。猫を見てみろ、18時間寝ても誰も責めない。", author: "猫の哲学" },
    { text: "シンプルさは究極の洗練である。", author: "レオナルド・ダ・ヴィンチ" },
    { text: "何も咲かない寒い日は、下へ下へと根を伸ばせ。やがて大きな花が咲く。", author: "三浦知良" },
    { text: "できると思えばできる、できないと思えばできない。これは揺るぎない絶対的な法則である。", author: "パブロ・ピカソ" },
    { text: "猫のように生きよう。必要な時に甘え、必要な時に一人になり、いつも自分らしく。", author: "猫の哲学" },
    { text: "千里の道も一歩から。まずはコンパイルを通すところから。", author: "老子 × エンジニア" },
    { text: "最も重要な決定とは、何をするかではなく、何をしないかを決めることだ。", author: "スティーブ・ジョブズ" },
    { text: "猫は自分が快適でいることに一切の罪悪感を持たない。あなたもそうであるべきだ。", author: "猫の哲学" },
    { text: "プログラムは人間が読めるように書け。たまたまコンピュータが実行できるだけだ。", author: "ハロルド・エイブルソン" },
    { text: "深呼吸をしよう。猫がゴロゴロ鳴る時のリズムで。", author: "猫の哲学" },
    { text: "明日死ぬかのように生きよ。永遠に生きるかのように学べ。", author: "マハトマ・ガンジー" },
    { text: "猫はキーボードの上に乗ることで、あなたに休憩が必要だと教えてくれている。", author: "猫の哲学" },
    { text: "一番いい時にコードを書け。猫が一番活発な時間帯は夜中の3時だ。", author: "猫の哲学" },
    { text: "最高のエラーメッセージとは、表示されないものだ。", author: "トーマス・フックス" },
    { text: "猫のように高いところから物事を見下ろせば、小さな悩みは消えていく。", author: "猫の哲学" },
    { text: "継続は力なり。でも休憩も力なり。", author: "あるエンジニア" },
    { text: "困難の中にこそ機会がある。", author: "アルベルト・アインシュタイン" },
    { text: "猫は9つの命を持つという。リファクタリングのチャンスも9回あると思えばいい。", author: "猫の哲学" },
    { text: "まだ始まったばかりだ。あなたの最高のコードは、まだ書かれていない。", author: "あるエンジニア" },
    { text: "猫が窓の外を眺めるように、時には立ち止まって周りを見渡そう。", author: "猫の哲学" },
    { text: "測定できないものは改善できない。でも、猫の可愛さは測定不要だ。", author: "猫の哲学" },
    { text: "失敗は成功の母。Segmentation faultは学びの父。", author: "プログラマーの知恵" },
    { text: "今日できることを明日に延ばすな。ただし、猫が膝に乗っている場合を除く。", author: "猫の哲学" },
    { text: "よいコードは、よい散文のようだ。読めば理解でき、美しい。", author: "グレディ・ブーチ" },
    { text: "猫がゴロゴロ鳴く周波数は、骨の治癒を促進するという。心の疲れにも効くはず。", author: "猫の科学" },
    { text: "偉大なことは、小さなことの積み重ねでできている。", author: "フィンセント・ファン・ゴッホ" },
    { text: "どんなに高い壁も、猫は軽々と飛び越える。あなたにもできる。", author: "猫の哲学" },
    { text: "コーディングとは、問題を解決するアートだ。休憩はそのインスピレーション。", author: "あるエンジニア" },
    { text: "猫のしなやかさを見習おう。柔軟性こそが最強のスキルだ。", author: "猫の哲学" },
    { text: "小さなことを重ねることが、とんでもないところに行くただ一つの道。", author: "イチロー" },
    { text: "猫は失敗しても、何事もなかったかのように毛づくろいする。そのメンタルを見習おう。", author: "猫の哲学" },
    { text: "知らないことを知っていることが、最も大切な知識だ。", author: "ソクラテス" },
    { text: "リファクタリングは庭の手入れのようなもの。こまめにやれば、いつもきれいだ。", author: "プログラマーの知恵" },
    { text: "猫が段ボールを愛するように、シンプルな解決策を愛そう。", author: "猫の哲学" },
    { text: "人を動かすことのできる人は、世界を動かすことができる。", author: "エイブラハム・リンカーン" },
    { text: "猫と過ごす時間は、決して無駄にならない。", author: "ジークムント・フロイト" },
    { text: "最初に動くものを作れ。次に正しく動くようにしろ。最後に速く動くようにしろ。", author: "ケント・ベック" },
    { text: "猫が毛糸玉で遊ぶように、コードと戯れる時間も大切だ。", author: "猫の哲学" },
    { text: "世界を変える最も良い方法は、まず自分のコードを変えることだ。", author: "あるエンジニア" },
    { text: "猫は常に着地する。何度転んでも、立ち上がればいい。", author: "猫の哲学" },
    { text: "想像力は知識よりも重要だ。", author: "アルベルト・アインシュタイン" },
    { text: "デバッグはコードを書くより2倍難しい。だから限界まで賢くコードを書くな。", author: "ブライアン・カーニハン" },
    { text: "猫が日向ぼっこを楽しむように、小さな幸せを見逃さないで。", author: "猫の哲学" },
    { text: "Done is better than perfect. 完了は完璧に勝る。", author: "シェリル・サンドバーグ" },
    { text: "猫はいつも正直だ。嫌なものは嫌、好きなものは好き。あなたもそうでいい。", author: "猫の哲学" },
    { text: "コードは3回書き直して初めて良くなる。猫は3回回って初めて座る。", author: "猫の哲学" },
    { text: "為せば成る、為さねば成らぬ何事も。成らぬは人の為さぬなりけり。", author: "上杉鷹山" },
    { text: "すべてのバグは、まだ発見されていない仕様である。", author: "プログラマーの知恵" },
    { text: "猫のゴロゴロ音は最高のBGM。それを聴きながらコードを書こう。", author: "猫の哲学" },
    { text: "走り続けることだけが強さではない。立ち止まる勇気も強さだ。", author: "あるエンジニア" },
    { text: "猫は自分の価値を知っている。あなたも自分の価値を忘れないで。", author: "猫の哲学" },
    { text: "過去のコードを恥じる必要はない。それは成長の証だ。", author: "プログラマーの知恵" },
    { text: "猫に学ぶ最大の教訓：必要なものは意外と少ない。", author: "猫の哲学" },
  ];

  // ===== 猫メッセージ =====
  const CAT_MESSAGES = [
    "にゃーん♪ 撫でてくれてありがとう",
    "ゴロゴロゴロ…気持ちいいにゃ",
    "もっと撫でてにゃ〜",
    "今日もお疲れさまにゃ",
    "あなたは頑張ってるにゃ！",
    "ゴロゴロ…幸せにゃ",
    "肩の力を抜くにゃよ〜",
    "にゃんにゃん♪ 大好きにゃ",
    "少し休憩するにゃ？",
    "一緒にいるからね、にゃ",
  ];

  // ===== AudioContext（環境音） =====
  let audioCtx = null;
  const sounds = {
    rain: { node: null, gain: null },
    fire: { node: null, gain: null },
    purr: { node: null, gain: null },
  };

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  // 雨音（フィルタ付きホワイトノイズ）
  function createRainSound() {
    const ctx = getAudioContext();
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1200;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();

    return { node: source, gain: gain };
  }

  // 焚き火（フィルタ付きブラウンノイズ）
  function createFireSound() {
    const ctx = getAudioContext();
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 600;
    filter.Q.value = 0.5;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();

    return { node: source, gain: gain };
  }

  // ゴロゴロ音（低周波オシレーター）
  function createPurrSound() {
    const ctx = getAudioContext();

    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 26;

    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 30;

    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 3;

    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 8;

    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);

    const merger = ctx.createChannelMerger(2);
    const gain = ctx.createGain();
    gain.gain.value = 0;

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    lfo.start();

    return { node: { osc1, osc2, lfo }, gain: gain };
  }

  // ===== ポモドーロタイマー =====
  const timer = {
    isRunning: false,
    isBreak: false,
    remaining: 25 * 60,
    total: 25 * 60,
    interval: null,
  };

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateTimerDisplay() {
    const display = document.getElementById("timerDisplay");
    const progress = document.getElementById("timerProgressBar");
    const label = document.getElementById("timerLabel");

    display.textContent = formatTime(timer.remaining);
    const pct = ((timer.total - timer.remaining) / timer.total) * 100;
    progress.style.width = pct + "%";

    if (timer.isBreak) {
      label.textContent = "🐱 休憩時間 — 猫と遊ぼう！";
      label.classList.add("break-time");
      document.getElementById("catArea").classList.add("break-mode");
    } else {
      label.textContent = "作業時間";
      label.classList.remove("break-time");
      document.getElementById("catArea").classList.remove("break-mode");
    }
  }

  function startTimer() {
    if (timer.isRunning) return;
    timer.isRunning = true;

    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnPause").disabled = false;

    timer.interval = setInterval(function () {
      timer.remaining--;
      if (timer.remaining <= 0) {
        clearInterval(timer.interval);
        timer.isRunning = false;

        // 作業↔休憩の切り替え
        timer.isBreak = !timer.isBreak;
        if (timer.isBreak) {
          const breakMin = parseInt(document.getElementById("breakMinutes").value) || 5;
          timer.total = breakMin * 60;
          timer.remaining = timer.total;
          showCatMessage("休憩にゃ！一緒に遊ぶにゃ〜🐱");
        } else {
          const workMin = parseInt(document.getElementById("workMinutes").value) || 25;
          timer.total = workMin * 60;
          timer.remaining = timer.total;
          showCatMessage("さあ、またがんばるにゃ！応援してるにゃ💪");
        }

        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnPause").disabled = true;
        updateTimerDisplay();

        // 自動スタート
        startTimer();
      }
      updateTimerDisplay();
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timer.interval);
    timer.isRunning = false;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnPause").disabled = true;
  }

  function resetTimer() {
    clearInterval(timer.interval);
    timer.isRunning = false;
    timer.isBreak = false;
    const workMin = parseInt(document.getElementById("workMinutes").value) || 25;
    timer.total = workMin * 60;
    timer.remaining = timer.total;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnPause").disabled = true;
    updateTimerDisplay();
  }

  // ===== 猫インタラクション =====
  function showCatMessage(text) {
    const el = document.getElementById("catMessage");
    el.textContent = text;
    el.classList.add("show");
    setTimeout(function () {
      el.classList.remove("show");
    }, 3000);
  }

  function petCat(event) {
    const cat = document.getElementById("cat");
    cat.classList.remove("petted");
    // reflow
    void cat.offsetWidth;
    cat.classList.add("petted");

    // ハートエフェクト
    const effect = document.getElementById("petEffect");
    const rect = cat.getBoundingClientRect();
    const areaRect = document.getElementById("catArea").getBoundingClientRect();
    effect.style.left = (rect.left - areaRect.left + rect.width / 2 - 10) + "px";
    effect.style.top = (rect.top - areaRect.top) + "px";
    effect.classList.remove("active");
    void effect.offsetWidth;
    effect.classList.add("active");

    // ランダムメッセージ
    const msg = CAT_MESSAGES[Math.floor(Math.random() * CAT_MESSAGES.length)];
    showCatMessage(msg);
  }

  // ===== 名言 =====
  let lastQuoteIndex = -1;

  function showRandomQuote() {
    let index;
    do {
      index = Math.floor(Math.random() * QUOTES.length);
    } while (index === lastQuoteIndex && QUOTES.length > 1);
    lastQuoteIndex = index;

    const quote = QUOTES[index];
    const textEl = document.getElementById("quoteText");
    const authorEl = document.getElementById("quoteAuthor");

    textEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(function () {
      textEl.textContent = quote.text;
      authorEl.textContent = quote.author;
      textEl.style.opacity = 1;
      authorEl.style.opacity = 1;
    }, 200);
  }

  // ===== 環境音コントロール =====
  function setupSoundSlider(sliderId, valueId, soundKey, createFn) {
    const slider = document.getElementById(sliderId);
    const valueEl = document.getElementById(valueId);

    slider.addEventListener("input", function () {
      const vol = parseInt(slider.value);
      valueEl.textContent = vol + "%";

      if (vol > 0 && !sounds[soundKey].node) {
        const s = createFn();
        sounds[soundKey].node = s.node;
        sounds[soundKey].gain = s.gain;
      }

      if (sounds[soundKey].gain) {
        sounds[soundKey].gain.gain.setTargetAtTime(
          vol / 100 * 0.5,
          getAudioContext().currentTime,
          0.1
        );
      }
    });
  }

  // ===== 初期化 =====
  function init() {
    // ポモドーロ
    document.getElementById("btnStart").addEventListener("click", startTimer);
    document.getElementById("btnPause").addEventListener("click", pauseTimer);
    document.getElementById("btnReset").addEventListener("click", resetTimer);
    updateTimerDisplay();

    // 猫
    document.getElementById("catArea").addEventListener("click", petCat);

    // 名言
    document.getElementById("btnNewQuote").addEventListener("click", showRandomQuote);
    showRandomQuote();

    // 環境音
    setupSoundSlider("rainVolume", "rainValue", "rain", createRainSound);
    setupSoundSlider("fireVolume", "fireValue", "fire", createFireSound);
    setupSoundSlider("purrVolume", "purrValue", "purr", createPurrSound);

    // 初回メッセージ
    setTimeout(function () {
      showCatMessage("ようこそにゃ！クリックして撫でてにゃ♪");
    }, 500);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
