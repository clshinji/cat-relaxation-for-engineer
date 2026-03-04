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
  let audioUnlocked = false;
  const sounds = {
    rain: { node: null, gain: null },
    fire: { node: null, gain: null, crackleTimer: null },
    purr: { node: null, gain: null },
    wave: { node: null, gain: null },
    cafe: { node: null, gain: null, chatterTimer: null },
    typing: { node: null, gain: null, typeTimer: null },
  };

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  // モバイル対応: ユーザー操作でAudioContextをresumeする
  function unlockAudio() {
    if (audioUnlocked) return;
    var ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().then(function () {
        audioUnlocked = true;
        updateAudioStatus(true);
      });
    } else {
      audioUnlocked = true;
      updateAudioStatus(true);
    }
  }

  function updateAudioStatus(unlocked) {
    var statusEl = document.getElementById("audioStatus");
    if (!statusEl) return;
    if (unlocked) {
      statusEl.textContent = "再生可能";
      statusEl.classList.add("unlocked");
      statusEl.classList.remove("locked");
    } else {
      statusEl.textContent = "タップして音を有効化";
      statusEl.classList.add("locked");
      statusEl.classList.remove("unlocked");
    }
  }

  // ===== 環境音生成 =====

  // 雨音（フィルタ付きホワイトノイズ）
  function createRainSound() {
    var ctx = getAudioContext();
    var bufferSize = 2 * ctx.sampleRate;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    var filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1200;

    var gain = ctx.createGain();
    gain.gain.value = 0;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();

    return { node: source, gain: gain };
  }

  // 焚き火（ブラウンノイズ + ランダムなパチパチ音）
  function createFireSound() {
    var ctx = getAudioContext();
    var bufferSize = 2 * ctx.sampleRate;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    var lastOut = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    var filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 600;
    filter.Q.value = 0.5;

    var gain = ctx.createGain();
    gain.gain.value = 0;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();

    return { node: source, gain: gain };
  }

  // 焚き火のパチパチ音（ランダム間隔で鳴る）
  function startCrackle(fireGain) {
    if (sounds.fire.crackleTimer) return;

    function scheduleCrackle() {
      var ctx = getAudioContext();
      var currentVol = fireGain.gain.value;
      if (currentVol <= 0) {
        sounds.fire.crackleTimer = setTimeout(scheduleCrackle, 1000);
        return;
      }

      // 短いノイズバーストでパチッという音を生成
      var duration = 0.02 + Math.random() * 0.04;
      var crackleBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
      var crackleData = crackleBuffer.getChannelData(0);
      for (var i = 0; i < crackleData.length; i++) {
        crackleData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / crackleData.length, 2);
      }

      var crackleSource = ctx.createBufferSource();
      crackleSource.buffer = crackleBuffer;

      var crackleFilter = ctx.createBiquadFilter();
      crackleFilter.type = "highpass";
      crackleFilter.frequency.value = 2000 + Math.random() * 4000;

      var crackleGain = ctx.createGain();
      crackleGain.gain.value = currentVol * (0.3 + Math.random() * 0.7);

      crackleSource.connect(crackleFilter);
      crackleFilter.connect(crackleGain);
      crackleGain.connect(ctx.destination);
      crackleSource.start();

      // 次のパチッまでランダムな間隔（0.3〜3秒）
      var nextDelay = 300 + Math.random() * 2700;
      sounds.fire.crackleTimer = setTimeout(scheduleCrackle, nextDelay);
    }

    scheduleCrackle();
  }

  function stopCrackle() {
    if (sounds.fire.crackleTimer) {
      clearTimeout(sounds.fire.crackleTimer);
      sounds.fire.crackleTimer = null;
    }
  }

  // ゴロゴロ音（低周波オシレーター）
  function createPurrSound() {
    var ctx = getAudioContext();

    var osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 26;

    var osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 30;

    var lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 3;

    var lfoGain = ctx.createGain();
    lfoGain.gain.value = 8;

    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);

    var gain = ctx.createGain();
    gain.gain.value = 0;

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    lfo.start();

    return { node: { osc1: osc1, osc2: osc2, lfo: lfo }, gain: gain };
  }

  // 波の音（ゆらぎのあるフィルタードノイズ）
  function createWaveSound() {
    var ctx = getAudioContext();
    var bufferSize = 4 * ctx.sampleRate;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);

    // ピンクノイズ風のベース
    var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }

    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    var filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;

    // 波のうねりをLFOで表現
    var waveLfo = ctx.createOscillator();
    waveLfo.type = "sine";
    waveLfo.frequency.value = 0.08; // 約12秒周期の波

    var waveLfoGain = ctx.createGain();
    waveLfoGain.gain.value = 0.3;

    var gain = ctx.createGain();
    gain.gain.value = 0;

    waveLfo.connect(waveLfoGain);
    waveLfoGain.connect(gain.gain);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    waveLfo.start();

    return { node: { source: source, waveLfo: waveLfo }, gain: gain };
  }

  // カフェの音（ざわめき + 食器の音）
  function createCafeSound() {
    var ctx = getAudioContext();
    var bufferSize = 4 * ctx.sampleRate;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);

    // ざわめき: 複数帯域のフィルタードノイズ
    var lastOut = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      // ブラウンノイズベースで人の声帯域にフィルタ
      data[i] = (lastOut + 0.03 * white) / 1.03;
      lastOut = data[i];
      // 波打つようにボリュームを変動
      var envelope = 0.7 + 0.3 * Math.sin(i / ctx.sampleRate * 0.5);
      data[i] *= 2.5 * envelope;
    }

    var source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    // 人の声帯域のバンドパスフィルタ
    var filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 800;
    filter.Q.value = 0.3;

    var gain = ctx.createGain();
    gain.gain.value = 0;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();

    return { node: source, gain: gain };
  }

  // カフェの食器カチャカチャ音
  function startChatter(cafeGain) {
    if (sounds.cafe.chatterTimer) return;

    function scheduleChatter() {
      var ctx = getAudioContext();
      var currentVol = cafeGain.gain.value;
      if (currentVol <= 0) {
        sounds.cafe.chatterTimer = setTimeout(scheduleChatter, 1500);
        return;
      }

      // カップの音: 短い高周波トーン
      var osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 3000 + Math.random() * 3000;

      var oscGain = ctx.createGain();
      var now = ctx.currentTime;
      oscGain.gain.setValueAtTime(currentVol * (0.05 + Math.random() * 0.1), now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);

      var nextDelay = 2000 + Math.random() * 5000;
      sounds.cafe.chatterTimer = setTimeout(scheduleChatter, nextDelay);
    }

    scheduleChatter();
  }

  function stopChatter() {
    if (sounds.cafe.chatterTimer) {
      clearTimeout(sounds.cafe.chatterTimer);
      sounds.cafe.chatterTimer = null;
    }
  }

  // タイピング音（メカニカルキーボード風）
  function createTypingSound() {
    var ctx = getAudioContext();

    // 無音のベースノード（ゲイン管理用）
    var gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);

    return { node: null, gain: gain };
  }

  function startTyping(typingGain) {
    if (sounds.typing.typeTimer) return;

    function scheduleKeystroke() {
      var ctx = getAudioContext();
      var currentVol = typingGain.gain.value;
      if (currentVol <= 0) {
        sounds.typing.typeTimer = setTimeout(scheduleKeystroke, 500);
        return;
      }

      var now = ctx.currentTime;

      // キーストローク: 短いクリック音
      var clickBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.03), ctx.sampleRate);
      var clickData = clickBuffer.getChannelData(0);
      for (var i = 0; i < clickData.length; i++) {
        var t = i / ctx.sampleRate;
        // キーの「カチッ」をシミュレーション
        clickData[i] = (Math.random() * 2 - 1) * Math.exp(-t * 150) * 0.5;
        // 少しトーンを混ぜる
        clickData[i] += Math.sin(t * 4000 * Math.PI) * Math.exp(-t * 200) * 0.3;
      }

      var clickSource = ctx.createBufferSource();
      clickSource.buffer = clickBuffer;

      var clickFilter = ctx.createBiquadFilter();
      clickFilter.type = "bandpass";
      clickFilter.frequency.value = 3000 + Math.random() * 2000;
      clickFilter.Q.value = 1;

      var clickGain = ctx.createGain();
      clickGain.gain.value = currentVol * (0.2 + Math.random() * 0.3);

      clickSource.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickSource.start();

      // タイピングのリズム: バースト（連打）と短い休止を交互に
      var nextDelay;
      if (Math.random() < 0.85) {
        // 連打中: 50-150ms間隔
        nextDelay = 50 + Math.random() * 100;
      } else {
        // 考え中の休止: 300-1500ms
        nextDelay = 300 + Math.random() * 1200;
      }

      sounds.typing.typeTimer = setTimeout(scheduleKeystroke, nextDelay);
    }

    scheduleKeystroke();
  }

  function stopTyping() {
    if (sounds.typing.typeTimer) {
      clearTimeout(sounds.typing.typeTimer);
      sounds.typing.typeTimer = null;
    }
  }

  // ===== ポモドーロタイマー =====
  var timer = {
    isRunning: false,
    isBreak: false,
    remaining: 25 * 60,
    total: 25 * 60,
    interval: null,
  };

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function updateTimerDisplay() {
    var display = document.getElementById("timerDisplay");
    var progress = document.getElementById("timerProgressBar");
    var label = document.getElementById("timerLabel");

    display.textContent = formatTime(timer.remaining);
    var pct = ((timer.total - timer.remaining) / timer.total) * 100;
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

        timer.isBreak = !timer.isBreak;
        if (timer.isBreak) {
          var breakMin = parseInt(document.getElementById("breakMinutes").value) || 5;
          timer.total = breakMin * 60;
          timer.remaining = timer.total;
          showCatMessage("休憩にゃ！一緒に遊ぶにゃ〜🐱");
        } else {
          var workMin = parseInt(document.getElementById("workMinutes").value) || 25;
          timer.total = workMin * 60;
          timer.remaining = timer.total;
          showCatMessage("さあ、またがんばるにゃ！応援してるにゃ💪");
        }

        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnPause").disabled = true;
        updateTimerDisplay();

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
    var workMin = parseInt(document.getElementById("workMinutes").value) || 25;
    timer.total = workMin * 60;
    timer.remaining = timer.total;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnPause").disabled = true;
    updateTimerDisplay();
  }

  // ===== 猫インタラクション =====
  function showCatMessage(text) {
    var el = document.getElementById("catMessage");
    el.textContent = text;
    el.classList.add("show");
    setTimeout(function () {
      el.classList.remove("show");
    }, 3000);
  }

  function petCat() {
    unlockAudio();

    var cat = document.getElementById("cat");
    cat.classList.remove("petted");
    void cat.offsetWidth;
    cat.classList.add("petted");

    var effect = document.getElementById("petEffect");
    var rect = cat.getBoundingClientRect();
    var areaRect = document.getElementById("catArea").getBoundingClientRect();
    effect.style.left = (rect.left - areaRect.left + rect.width / 2 - 10) + "px";
    effect.style.top = (rect.top - areaRect.top) + "px";
    effect.classList.remove("active");
    void effect.offsetWidth;
    effect.classList.add("active");

    var msg = CAT_MESSAGES[Math.floor(Math.random() * CAT_MESSAGES.length)];
    showCatMessage(msg);
  }

  // ===== 名言 =====
  var lastQuoteIndex = -1;

  function showRandomQuote() {
    var index;
    do {
      index = Math.floor(Math.random() * QUOTES.length);
    } while (index === lastQuoteIndex && QUOTES.length > 1);
    lastQuoteIndex = index;

    var quote = QUOTES[index];
    var textEl = document.getElementById("quoteText");
    var authorEl = document.getElementById("quoteAuthor");

    textEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(function () {
      textEl.textContent = quote.text;
      authorEl.textContent = quote.author;
      textEl.style.opacity = 1;
      authorEl.style.opacity = 1;
    }, 200);
  }

  // ===== マスターボリューム =====
  var masterVolume = 0.5;

  function setupMasterVolume() {
    var slider = document.getElementById("masterVolume");
    var valueEl = document.getElementById("masterValue");
    if (!slider) return;

    slider.addEventListener("input", function () {
      unlockAudio();
      masterVolume = parseInt(slider.value) / 100;
      valueEl.textContent = slider.value + "%";

      // 全サウンドに反映
      Object.keys(sounds).forEach(function (key) {
        var soundSlider = document.getElementById(key + "Volume");
        if (soundSlider && sounds[key].gain) {
          var channelVol = parseInt(soundSlider.value) / 100;
          sounds[key].gain.gain.setTargetAtTime(
            channelVol * masterVolume * 0.5,
            getAudioContext().currentTime,
            0.1
          );
        }
      });
    });
  }

  // ===== 環境音コントロール =====
  function setupSoundSlider(sliderId, valueId, soundKey, createFn) {
    var slider = document.getElementById(sliderId);
    var valueEl = document.getElementById(valueId);

    slider.addEventListener("input", function () {
      unlockAudio();
      var vol = parseInt(slider.value);
      valueEl.textContent = vol + "%";

      if (vol > 0 && !sounds[soundKey].node && !sounds[soundKey].gain) {
        var s = createFn();
        sounds[soundKey].node = s.node;
        sounds[soundKey].gain = s.gain;
      }

      if (sounds[soundKey].gain) {
        sounds[soundKey].gain.gain.setTargetAtTime(
          vol / 100 * masterVolume * 0.5,
          getAudioContext().currentTime,
          0.1
        );
      }

      // 焚き火のパチパチ音を制御
      if (soundKey === "fire") {
        if (vol > 0 && sounds.fire.gain) {
          startCrackle(sounds.fire.gain);
        } else {
          stopCrackle();
        }
      }

      // カフェの食器音を制御
      if (soundKey === "cafe") {
        if (vol > 0 && sounds.cafe.gain) {
          startChatter(sounds.cafe.gain);
        } else {
          stopChatter();
        }
      }

      // タイピング音を制御
      if (soundKey === "typing") {
        if (vol > 0) {
          if (!sounds.typing.gain) {
            var s = createFn();
            sounds[soundKey].gain = s.gain;
          }
          startTyping(sounds.typing.gain);
        } else {
          stopTyping();
        }
      }
    });
  }

  // ===== おすすめミックス（プリセット） =====
  function applyPreset(preset) {
    unlockAudio();
    var sliders = {
      rain: document.getElementById("rainVolume"),
      fire: document.getElementById("fireVolume"),
      purr: document.getElementById("purrVolume"),
      wave: document.getElementById("waveVolume"),
      cafe: document.getElementById("cafeVolume"),
      typing: document.getElementById("typingVolume"),
    };

    var presets = {
      deepWork: { rain: 40, fire: 0, purr: 0, wave: 0, cafe: 30, typing: 50 },
      relax: { rain: 0, fire: 60, purr: 40, wave: 0, cafe: 0, typing: 0 },
      beach: { rain: 0, fire: 0, purr: 30, wave: 70, cafe: 0, typing: 0 },
      cafeTime: { rain: 20, fire: 0, purr: 0, wave: 0, cafe: 60, typing: 30 },
    };

    var values = presets[preset];
    if (!values) return;

    Object.keys(values).forEach(function (key) {
      var slider = sliders[key];
      if (slider) {
        slider.value = values[key];
        slider.dispatchEvent(new Event("input"));
      }
    });
  }

  // ===== 初期化 =====
  function init() {
    // モバイル対応: 最初のタッチ/クリックでAudioContextを有効化
    var unlockEvents = ["touchstart", "touchend", "click"];
    unlockEvents.forEach(function (eventType) {
      document.addEventListener(eventType, function onFirstInteraction() {
        unlockAudio();
        // 一度有効化したらリスナーを削除
        unlockEvents.forEach(function (evt) {
          document.removeEventListener(evt, onFirstInteraction);
        });
      }, { once: true });
    });

    // 初期状態の表示
    updateAudioStatus(false);

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

    // マスターボリューム
    setupMasterVolume();

    // 環境音
    setupSoundSlider("rainVolume", "rainValue", "rain", createRainSound);
    setupSoundSlider("fireVolume", "fireValue", "fire", createFireSound);
    setupSoundSlider("purrVolume", "purrValue", "purr", createPurrSound);
    setupSoundSlider("waveVolume", "waveValue", "wave", createWaveSound);
    setupSoundSlider("cafeVolume", "cafeValue", "cafe", createCafeSound);
    setupSoundSlider("typingVolume", "typingValue", "typing", createTypingSound);

    // プリセットボタン
    var presetButtons = document.querySelectorAll("[data-preset]");
    presetButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyPreset(btn.getAttribute("data-preset"));
      });
    });

    // 初回メッセージ
    setTimeout(function () {
      showCatMessage("ようこそにゃ！クリックして撫でてにゃ♪");
    }, 500);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
