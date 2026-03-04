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

  // ===== 環境音カテゴリ定義 =====
  // audio/ フォルダ内のファイルをカテゴリごとに管理
  // ユーザーが音源ファイルを追加すれば、ここに登録するだけでランダム再生に対応
  var SOUND_CATEGORIES = {
    rain: {
      label: "雨音",
      icon: "🌧️",
      files: ["light-rain.mp3", "rain-on-window.mp3", "thunder.mp3"],
    },
    fire: {
      label: "焚き火",
      icon: "🔥",
      files: ["campfire.mp3"],
    },
    nature: {
      label: "自然",
      icon: "🌿",
      files: ["river.mp3", "wind.mp3", "wind-chimes.mp3"],
    },
    wave: {
      label: "波の音",
      icon: "🌊",
      files: ["waves.mp3"],
    },
    cafe: {
      label: "カフェ",
      icon: "☕",
      files: ["cafe.mp3", "library.mp3"],
    },
    work: {
      label: "オフィス",
      icon: "💻",
      files: ["keyboard.mp3", "office.mp3", "clock.mp3"],
    },
  };

  var AUDIO_BASE_PATH = "audio/";

  // ===== オーディオ状態管理 =====
  var audioUnlocked = false;
  var masterVolume = 0.5;

  // 各カテゴリの再生状態
  var channels = {};
  Object.keys(SOUND_CATEGORIES).forEach(function (key) {
    channels[key] = {
      audio: null,       // HTMLAudioElement
      volume: 0,         // 0-100
      currentFile: null,  // 現在再生中のファイル名
    };
  });

  // ===== モバイル対応: オーディオ有効化 =====
  function unlockAudio() {
    if (audioUnlocked) return;
    // 各チャンネルで再生中のものをresume
    Object.keys(channels).forEach(function (key) {
      var ch = channels[key];
      if (ch.audio && ch.audio.paused && ch.volume > 0) {
        ch.audio.play().catch(function () {});
      }
    });
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

  // ===== 音源ファイル再生 =====

  // カテゴリ内でランダムにファイルを選択
  function pickRandomFile(categoryKey) {
    var cat = SOUND_CATEGORIES[categoryKey];
    if (!cat || cat.files.length === 0) return null;
    var ch = channels[categoryKey];
    var files = cat.files;

    // 1ファイルしかなければそれを返す
    if (files.length === 1) return files[0];

    // 現在と違うファイルをランダムに選ぶ
    var file;
    do {
      file = files[Math.floor(Math.random() * files.length)];
    } while (file === ch.currentFile && files.length > 1);
    return file;
  }

  // 指定カテゴリの音を再生開始（またはファイル切り替え）
  function playSound(categoryKey, file) {
    var ch = channels[categoryKey];

    // 既に同じファイルを再生中ならスキップ
    if (ch.audio && ch.currentFile === file) return;

    // 既存の再生を停止
    if (ch.audio) {
      ch.audio.pause();
      ch.audio.src = "";
      ch.audio = null;
    }

    var audio = new Audio(AUDIO_BASE_PATH + file);
    audio.loop = true;
    audio.volume = (ch.volume / 100) * masterVolume;

    // 再生終了時（ループなのでfireされないが念のため）
    audio.addEventListener("ended", function () {
      // ランダムに次のファイルへ切り替え
      if (ch.volume > 0) {
        var nextFile = pickRandomFile(categoryKey);
        playSound(categoryKey, nextFile);
      }
    });

    audio.play().catch(function () {
      // モバイルでまだ許可されていない場合、後でunlockAudioで再生される
    });

    ch.audio = audio;
    ch.currentFile = file;

    // 現在の再生ファイル名を表示
    updateNowPlaying(categoryKey, file);
  }

  // 再生停止
  function stopSound(categoryKey) {
    var ch = channels[categoryKey];
    if (ch.audio) {
      ch.audio.pause();
      ch.audio.src = "";
      ch.audio = null;
      ch.currentFile = null;
    }
    updateNowPlaying(categoryKey, null);
  }

  // 音量更新
  function updateVolume(categoryKey) {
    var ch = channels[categoryKey];
    if (ch.audio) {
      ch.audio.volume = (ch.volume / 100) * masterVolume;
    }
  }

  // 現在再生中のファイル名を表示
  function updateNowPlaying(categoryKey, file) {
    var el = document.getElementById(categoryKey + "NowPlaying");
    if (!el) return;
    if (file) {
      // ファイル名から表示名を生成（拡張子除去、ハイフンをスペースに）
      var displayName = file.replace(/\.mp3$/, "").replace(/-/g, " ");
      el.textContent = displayName;
      el.style.display = "block";
    } else {
      el.textContent = "";
      el.style.display = "none";
    }
  }

  // ===== シャッフル（ランダム切り替え） =====
  function shuffleSound(categoryKey) {
    var ch = channels[categoryKey];
    if (ch.volume <= 0) return;
    var file = pickRandomFile(categoryKey);
    if (file) {
      playSound(categoryKey, file);
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
  function setupMasterVolume() {
    var slider = document.getElementById("masterVolume");
    var valueEl = document.getElementById("masterValue");
    if (!slider) return;

    slider.addEventListener("input", function () {
      unlockAudio();
      masterVolume = parseInt(slider.value) / 100;
      valueEl.textContent = slider.value + "%";

      // 全チャンネルに反映
      Object.keys(channels).forEach(function (key) {
        updateVolume(key);
      });
    });
  }

  // ===== 環境音スライダー =====
  function setupSoundSlider(categoryKey) {
    var sliderId = categoryKey + "Volume";
    var valueId = categoryKey + "Value";
    var shuffleId = categoryKey + "Shuffle";

    var slider = document.getElementById(sliderId);
    var valueEl = document.getElementById(valueId);
    var shuffleBtn = document.getElementById(shuffleId);

    if (!slider) return;

    slider.addEventListener("input", function () {
      unlockAudio();
      var vol = parseInt(slider.value);
      valueEl.textContent = vol + "%";
      channels[categoryKey].volume = vol;

      if (vol > 0) {
        if (!channels[categoryKey].audio) {
          // 初回再生: ランダムにファイルを選択
          var file = pickRandomFile(categoryKey);
          if (file) playSound(categoryKey, file);
        }
        updateVolume(categoryKey);
      } else {
        stopSound(categoryKey);
      }
    });

    // シャッフルボタン（複数ファイルがあるカテゴリのみ）
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        unlockAudio();
        shuffleSound(categoryKey);
      });
    }
  }

  // ===== おすすめミックス（プリセット） =====
  function applyPreset(preset) {
    unlockAudio();

    var presets = {
      deepWork: { rain: 40, fire: 0, nature: 0, wave: 0, cafe: 30, work: 50 },
      relax: { rain: 0, fire: 60, nature: 30, wave: 0, cafe: 0, work: 0 },
      beach: { rain: 0, fire: 0, nature: 20, wave: 70, cafe: 0, work: 0 },
      cafeTime: { rain: 20, fire: 0, nature: 0, wave: 0, cafe: 60, work: 30 },
    };

    var values = presets[preset];
    if (!values) return;

    Object.keys(values).forEach(function (key) {
      var slider = document.getElementById(key + "Volume");
      if (slider) {
        slider.value = values[key];
        slider.dispatchEvent(new Event("input"));
      }
    });
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
    document.getElementById("catArea").addEventListener("click", petCat);

    // 名言
    document.getElementById("btnNewQuote").addEventListener("click", showRandomQuote);
    showRandomQuote();

    // マスターボリューム
    setupMasterVolume();

    // 環境音スライダー
    Object.keys(SOUND_CATEGORIES).forEach(function (key) {
      setupSoundSlider(key);
    });

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
