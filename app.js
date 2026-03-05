// ===== ねこカフェ for Engineers =====

(function () {
  "use strict";

  // ===== 名言データ（50個以上） =====
  var QUOTES = [
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
  var CAT_MESSAGES = [
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

  // ===== BGM音源定義 =====
  var SOUND_OPTIONS = {
    rain: { label: "雨音", icon: "🌧️", files: ["light-rain.mp3", "rain-on-window.mp3", "thunder.mp3"] },
    fire: { label: "焚き火", icon: "🔥", files: ["campfire.mp3"] },
    nature: { label: "自然", icon: "🌿", files: ["river.mp3", "wind.mp3", "wind-chimes.mp3"] },
    wave: { label: "波の音", icon: "🌊", files: ["waves.mp3"] },
    cafe: { label: "カフェ", icon: "☕", files: ["cafe.mp3", "library.mp3"] },
    office: { label: "オフィス", icon: "💻", files: ["keyboard.mp3", "office.mp3", "clock.mp3"] },
    piano: { label: "ピアノ", icon: "🎹", files: ["piano-ambient.mp3"] },
  };

  var AUDIO_BASE_PATH = "audio/";
  var STORAGE_KEY = "nekocafe-bgm-settings";

  var DEFAULT_SETTINGS = {
    workSound: "cafe",
    breakSound: "piano",
  };

  // ===== 状態管理 =====
  var audioUnlocked = false;
  var currentBgm = { audio: null, currentFile: null, soundKey: null };
  var bgmSettings = loadSettings();

  // ===== localStorage =====
  function loadSettings() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        return {
          workSound: parsed.workSound || DEFAULT_SETTINGS.workSound,
          breakSound: parsed.breakSound || DEFAULT_SETTINGS.breakSound,
        };
      }
    } catch (e) { /* ignore */ }
    return { workSound: DEFAULT_SETTINGS.workSound, breakSound: DEFAULT_SETTINGS.breakSound };
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bgmSettings));
    } catch (e) { /* ignore */ }
  }

  // ===== モバイル対応: オーディオ有効化 =====
  function unlockAudio() {
    if (audioUnlocked) return;
    if (currentBgm.audio && currentBgm.audio.paused) {
      currentBgm.audio.play().catch(function () {});
    }
    audioUnlocked = true;
    updateAudioStatus(true);
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

  // ===== BGM再生 =====
  function pickRandomFile(soundKey) {
    var opt = SOUND_OPTIONS[soundKey];
    if (!opt || opt.files.length === 0) return null;
    return opt.files[Math.floor(Math.random() * opt.files.length)];
  }

  function playBgm(soundKey) {
    if (!soundKey || !SOUND_OPTIONS[soundKey]) return;

    // 同じ音源が再生中ならスキップ
    if (currentBgm.soundKey === soundKey && currentBgm.audio) return;

    stopBgm();

    var file = pickRandomFile(soundKey);
    if (!file) return;

    var audio = new Audio(AUDIO_BASE_PATH + file);
    audio.loop = true;
    audio.volume = 1.0;

    audio.play().catch(function () {});

    currentBgm.audio = audio;
    currentBgm.currentFile = file;
    currentBgm.soundKey = soundKey;

    updateBgmDisplay();
  }

  function stopBgm() {
    if (currentBgm.audio) {
      currentBgm.audio.pause();
      currentBgm.audio.src = "";
      currentBgm.audio = null;
    }
    currentBgm.currentFile = null;
    currentBgm.soundKey = null;
  }

  function updateBgmDisplay() {
    var iconEl = document.getElementById("bgmIcon");
    var labelEl = document.getElementById("bgmLabel");
    var modeEl = document.getElementById("bgmMode");
    if (!iconEl || !labelEl) return;

    if (currentBgm.soundKey && SOUND_OPTIONS[currentBgm.soundKey]) {
      var opt = SOUND_OPTIONS[currentBgm.soundKey];
      iconEl.textContent = opt.icon;
      labelEl.textContent = opt.label;
    } else {
      iconEl.textContent = "";
      labelEl.textContent = "停止中";
    }

    if (modeEl) {
      modeEl.textContent = timer.isBreak ? "休憩モード" : "作業モード";
    }
  }

  // 現在のモードに合わせてBGMを切り替え
  function switchBgmForMode() {
    var soundKey = timer.isBreak ? bgmSettings.breakSound : bgmSettings.workSound;
    playBgm(soundKey);
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

    // タイマー開始時にBGMも開始
    unlockAudio();
    switchBgmForMode();

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

        // モード切り替え時にBGMも切り替え
        switchBgmForMode();

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
    stopBgm();
    updateBgmDisplay();
  }

  // ===== 猫カーソルインタラクション =====
  const catCursor = {
    mouseX: 0,
    mouseY: 0,
    catOffsetX: 0,
    catOffsetY: 0,
    isInArea: false,
    rafId: null,
  };

  // 追従・回避の最大移動距離（px）
  const CAT_MOVE_RANGE = 60;
  // カーソルがこの距離以内のとき反応する
  const CAT_REACT_RADIUS = 200;

  function updateCatPosition() {
    const cat = document.getElementById("cat");
    const area = document.getElementById("catArea");
    if (!cat || !area || !catCursor.isInArea) {
      catCursor.rafId = null;
      return;
    }

    const areaRect = area.getBoundingClientRect();
    const catRect = cat.getBoundingClientRect();

    // カーソルの位置を猫エリア内の相対座標に変換
    const catCenterX = catRect.left + catRect.width / 2 - areaRect.left;
    const catCenterY = catRect.top + catRect.height / 2 - areaRect.top;
    const mouseRelX = catCursor.mouseX - areaRect.left;
    const mouseRelY = catCursor.mouseY - areaRect.top;

    const dx = mouseRelX - catCenterX;
    const dy = mouseRelY - catCenterY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < CAT_REACT_RADIUS && dist > 1) {
      // 距離が近いほど強く反応（0〜1の強度）
      const intensity = 1 - dist / CAT_REACT_RADIUS;
      const moveAmount = CAT_MOVE_RANGE * intensity;

      // 方向の単位ベクトル
      const nx = dx / dist;
      const ny = dy / dist;

      if (timer.isBreak) {
        // 休憩中：カーソルから逃げる（反対方向へ）
        catCursor.catOffsetX = -nx * moveAmount;
        catCursor.catOffsetY = -ny * moveAmount;
      } else {
        // 作業中：カーソルに寄ってくる（同じ方向へ）
        catCursor.catOffsetX = nx * moveAmount * 0.6;
        catCursor.catOffsetY = ny * moveAmount * 0.6;
      }
    } else {
      // 範囲外なら元の位置へ戻す
      catCursor.catOffsetX *= 0.9;
      catCursor.catOffsetY *= 0.9;
      if (Math.abs(catCursor.catOffsetX) < 0.5) catCursor.catOffsetX = 0;
      if (Math.abs(catCursor.catOffsetY) < 0.5) catCursor.catOffsetY = 0;
    }

    cat.style.left = catCursor.catOffsetX + "px";
    cat.style.top = catCursor.catOffsetY + "px";

    catCursor.rafId = requestAnimationFrame(updateCatPosition);
  }

  function onCatAreaMouseMove(e) {
    catCursor.mouseX = e.clientX;
    catCursor.mouseY = e.clientY;
    catCursor.isInArea = true;
    if (!catCursor.rafId) {
      catCursor.rafId = requestAnimationFrame(updateCatPosition);
    }
  }

  function onCatAreaMouseLeave() {
    catCursor.isInArea = false;
    // 猫を元の位置にゆっくり戻す
    const cat = document.getElementById("cat");
    if (cat) {
      cat.style.left = "0px";
      cat.style.top = "0px";
    }
    catCursor.catOffsetX = 0;
    catCursor.catOffsetY = 0;
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

  // ===== BGM設定モーダル =====
  function renderSoundOptions(containerId, mode) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    var currentKey = mode === "work" ? bgmSettings.workSound : bgmSettings.breakSound;

    Object.keys(SOUND_OPTIONS).forEach(function (key) {
      var opt = SOUND_OPTIONS[key];
      var btn = document.createElement("button");
      btn.className = "sound-option" + (key === currentKey ? " selected" : "");
      btn.innerHTML = '<span class="sound-option-icon">' + opt.icon + '</span>' +
                      '<span class="sound-option-name">' + opt.label + '</span>';
      btn.addEventListener("click", function () {
        if (mode === "work") {
          bgmSettings.workSound = key;
        } else {
          bgmSettings.breakSound = key;
        }
        saveSettings();
        renderSoundOptions(containerId, mode);

        // 現在のモードのBGMが変更された場合、即座に切り替え
        if (timer.isRunning) {
          var isCurrentMode = (mode === "work" && !timer.isBreak) || (mode === "break" && timer.isBreak);
          if (isCurrentMode) {
            switchBgmForMode();
          }
        }
      });
      container.appendChild(btn);
    });
  }

  function openSettings() {
    renderSoundOptions("workSoundOptions", "work");
    renderSoundOptions("breakSoundOptions", "break");
    document.getElementById("settingsOverlay").classList.add("visible");
  }

  function closeSettings() {
    document.getElementById("settingsOverlay").classList.remove("visible");
  }

  // ===== 初期化 =====
  function init() {
    // モバイル対応: 最初のタッチ/クリックでオーディオを有効化
    var unlockEvents = ["touchstart", "touchend", "click"];
    unlockEvents.forEach(function (eventType) {
      document.addEventListener(eventType, function onFirstInteraction() {
        unlockAudio();
        unlockEvents.forEach(function (evt) {
          document.removeEventListener(evt, onFirstInteraction);
        });
      }, { once: true });
    });

    updateAudioStatus(false);

    // ポモドーロ
    document.getElementById("btnStart").addEventListener("click", startTimer);
    document.getElementById("btnPause").addEventListener("click", pauseTimer);
    document.getElementById("btnReset").addEventListener("click", resetTimer);
    updateTimerDisplay();

    // 猫
    const catArea = document.getElementById("catArea");
    catArea.addEventListener("click", petCat);
    catArea.addEventListener("mousemove", onCatAreaMouseMove);
    catArea.addEventListener("mouseleave", onCatAreaMouseLeave);

    // 名言
    document.getElementById("btnNewQuote").addEventListener("click", showRandomQuote);
    showRandomQuote();

    // BGM設定
    document.getElementById("btnSettings").addEventListener("click", openSettings);
    document.getElementById("btnCloseSettings").addEventListener("click", closeSettings);
    document.getElementById("settingsOverlay").addEventListener("click", function (e) {
      if (e.target === this) closeSettings();
    });

    // BGM表示初期化
    updateBgmDisplay();

    // 初回メッセージ
    setTimeout(function () {
      showCatMessage("ようこそにゃ！クリックして撫でてにゃ♪");
    }, 500);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
