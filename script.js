// ▼▼▼ ここに問題を追加・編集します ▼▼▼
const questions = [
    {
        correctAnswer: "01. 時計じかけの摩天楼",
        songUrl: "audio/01.mp3",
        wrongAnswers: ["02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "02. 14番目の標的",
        songUrl: "audio/02.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼",  "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "03. 世紀末の魔術師",
        songUrl: "audio/03.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "04. 瞳の中の暗殺者",
        songUrl: "audio/04.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "05. 天国へのカウントダウン",
        songUrl: "audio/05.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "06. ベイカー街の亡霊",
        songUrl: "audio/06.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "07. 迷宮の十字路",
        songUrl: "audio/07.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "08. 銀翼の奇術師",
        songUrl: "audio/08.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "09. 水平線上の陰謀",
        songUrl: "audio/09.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "10. 探偵たちの鎮魂歌",
        songUrl: "audio/10.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "11. 紺碧の棺",
        songUrl: "audio/11.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "12. 戦慄の楽譜",
        songUrl: "audio/12.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "13. 漆黒の追跡者",
        songUrl: "audio/13.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "14. 天空の難破船",
        songUrl: "audio/14.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "15. 沈黙の15分",
        songUrl: "audio/15.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "16. 11人目のストライカー",
        songUrl: "audio/16.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "17. 絶海の探偵",
        songUrl: "audio/17.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "18. 異次元の狙撃手",
        songUrl: "audio/18.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "19. 業火の向日葵",
        songUrl: "audio/19.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "20. 純黒の悪夢",
        songUrl: "audio/20.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "21. から紅の恋歌",
        songUrl: "audio/21.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "22. ゼロの執行人",
        songUrl: "audio/22.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "23. 紺青の拳",
        songUrl: "audio/23.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "24. 緋色の弾丸",
        songUrl: "audio/24.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "25. ハロウィンの花嫁",
        songUrl: "audio/25.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "26. 黒鉄の魚影", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "26. 黒鉄の魚影",
        songUrl: "audio/26.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "27. 100万ドルの五稜星", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "27. 100万ドルの五稜星",
        songUrl: "audio/27.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "28. 隻眼の残像"]
    },
    {
        correctAnswer: "28. 隻眼の残像",
        songUrl: "audio/28.mp3",
        wrongAnswers: ["01. 時計じかけの摩天楼", "02. 14番目の標的", "03. 世紀末の魔術師", "04. 瞳の中の暗殺者", "05. 天国へのカウントダウン", "06. ベイカー街の亡霊", "07. 迷宮の十字路", "08. 銀翼の奇術師", "09. 水平線上の陰謀", "10. 探偵たちの鎮魂歌", "11. 紺碧の棺", "12. 戦慄の楽譜", "13. 漆黒の追跡者", "14. 天空の難破船", "15. 沈黙の15分", "16. 11人目のストライカー", "17. 絶海の探偵", "18. 異次元の狙撃手", "19. 業火の向日葵", "20. 純黒の悪夢", "21. から紅の恋歌", "22. ゼロの執行人", "23. 紺青の拳", "24. 緋色の弾丸", "25. ハロウィンの花嫁", "26. 黒鉄の魚影", "27. 100万ドルの五稜星"]
    },
];
// ▲▲▲ 問題の編集はここまで ▲▲▲


// --- 共通の処理 ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- クイズページの要素を取得 ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const audioPlayer = document.getElementById('audio-player');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const timerEl = document.getElementById('timer');
const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const totalCountEl = document.getElementById('total-count');
const accuracyEl = document.getElementById('accuracy');
const totalTimeEl = document.getElementById('total-time');
const rankingForm = document.getElementById('ranking-form');
const rankingDisplay = document.getElementById('ranking-display');
const saveScoreBtn = document.getElementById('save-score-btn');
const rankingTableBody = document.querySelector('#ranking-table tbody');
const questionCounterEl = document.getElementById('question-counter');
const clearRankingsBtn = document.getElementById('clear-rankings-btn');
const totalQuestionCountEl = document.getElementById('total-question-count');


// --- クイズの変数を設定 ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswersCount = 0;
let timerInterval;
const QUIZ_DURATION = 30;
let quizStartTime;


// --- イベントリスナーを設定 ---
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => location.reload()); 
saveScoreBtn.addEventListener('click', saveScoreAndShowRankings); 
clearRankingsBtn.addEventListener('click', clearRankings);


// --- クイズのメイン関数 ---
function startQuiz() {
    startScreen.classList.add('hidden');
    quizStartTime = Date.now(); 

    currentQuestions = shuffleArray([...questions]);

    if (currentQuestions.length === 0) {
        alert('問題が登録されていません。');
        startScreen.classList.remove('hidden');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    quizScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    feedback.textContent = '';
    feedback.className = '';
    optionsContainer.innerHTML = '';
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    questionCounterEl.textContent = `Q. ${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    const question = currentQuestions[currentQuestionIndex];
    const options = [question.correctAnswer, ...(question.wrongAnswers || [])];
    options.sort((a, b) => {
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        return numA - numB;
    });
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        // ★★★ クリックされたボタン自身を渡すように変更 ★★★
        button.addEventListener('click', (event) => selectAnswer(option === question.correctAnswer, event.target));
        optionsContainer.appendChild(button);
    });
    audioPlayer.src = question.songUrl;
    audioPlayer.play().catch(error => console.log(error));
    startTimer();
}

function startTimer() {
    let timeLeft = QUIZ_DURATION;
    timerEl.textContent = timeLeft.toFixed(2);
    timerInterval = setInterval(() => {
        timeLeft -= 0.01;
        if (timeLeft <= 0) {
            timeLeft = 0;
            selectAnswer(false, null); // 時間切れの時はボタンがないのでnull
        }
        timerEl.textContent = timeLeft.toFixed(2);
    }, 10);
}

// ★★★ ここからが大きく変更される selectAnswer 関数 ★★★
function selectAnswer(isCorrect, clickedButton) {
    clearInterval(timerInterval);
    if (!audioPlayer.paused) audioPlayer.pause();
    
    const question = currentQuestions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('button');

    // すべてのボタンを操作不能にする
    allButtons.forEach(btn => {
        btn.disabled = true;
        // 正解のボタンを探してハイライトする
        if (btn.textContent === question.correctAnswer) {
            btn.classList.add('correct-answer');
        }
    });

    if (isCorrect) {
        // 正解の場合の処理
        correctAnswersCount++;
        const timeLeft = parseFloat(timerEl.textContent);
        const questionScore = 1000 + Math.floor(timeLeft * 100);
        score += questionScore;
        feedback.textContent = `正解！+${questionScore}点`;
        feedback.className = 'correct';
    } else {
        // 不正解の場合の処理
        feedback.textContent = '不正解...';
        feedback.className = 'incorrect';
        // もしボタンがクリックされて不正解だった場合、そのボタンを赤くする
        if (clickedButton) {
            clickedButton.classList.add('wrong-choice');
        }
    }
    
    currentQuestionIndex++;
    setTimeout(showQuestion, 2500); // 表示時間を少しだけ長くする
}
// ★★★ selectAnswer 関数の変更はここまで ★★★

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const quizEndTime = Date.now();
    const totalTime = (quizEndTime - quizStartTime) / 1000;
    const accuracy = currentQuestions.length > 0 ? (correctAnswersCount / currentQuestions.length) * 100 : 0;

    // HTML要素に結果を反映させる
    finalScoreEl.textContent = score;
    correctCountEl.textContent = correctAnswersCount;
    totalCountEl.textContent = currentQuestions.length;
    accuracyEl.textContent = accuracy.toFixed(1);
    totalTimeEl.textContent = totalTime.toFixed(2);

    // スコアを保存するボタンを表示する
    rankingForm.classList.remove('hidden');
}

function saveScoreAndShowRankings() {
    const quizEndTime = Date.now();
    const totalTime = (quizEndTime - quizStartTime) / 1000;
    const accuracy = currentQuestions.length > 0 ? (correctAnswersCount / currentQuestions.length) * 100 : 0;

    const now = new Date();
    
    // ▼▼▼ この部分を変更 ▼▼▼
    const hours = String(now.getHours()).padStart(2, '0'); // 時間を取得
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 分を取得
    const dateString = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${hours}:${minutes}`;
    // ▲▲▲ 変更ここまで ▲▲▲

    // 保存する記録（レコード）を作成
    const newRecord = {
        score: score,
        date: dateString,
        accuracy: accuracy,
        time: totalTime
    };


    let rankings = JSON.parse(localStorage.getItem('quizRankings')) || [];
    rankings.push(newRecord);

    // スコアの高い順にランキングを並び替え
    rankings.sort((a, b) => b.score - a.score);

    // ランキングを上位10件までに制限（この数字は自由に変更できます）
    rankings = rankings.slice(0, 10);

    localStorage.setItem('quizRankings', JSON.stringify(rankings));

    renderRankingTable(rankings);

    rankingForm.classList.add('hidden');
}

function renderRankingTable(rankings) {
    rankingTableBody.innerHTML = ""; 

    if (rankings.length === 0) {
        rankingTableBody.innerHTML = '<tr><td colspan="5">まだ記録がありません。</td></tr>';
        clearRankingsBtn.classList.add('hidden');
        return;
    }

    clearRankingsBtn.classList.remove('hidden');

    rankings.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}位</td>
            <td>${record.date}</td>
            <td>${record.score}</td>
            <td>${record.accuracy.toFixed(1)}%</td>
            <td>${record.time.toFixed(2)}秒</td>
        `;
        rankingTableBody.appendChild(row);
    });
}

function clearRankings() {
    if (confirm('本当にランキングをすべてリセットしますか？この操作は元に戻せません。')) {
        localStorage.removeItem('quizRankings');
        renderRankingTable([]);
    }
}

// ページ読み込み時に総問題数を表示する
totalQuestionCountEl.textContent = questions.length;
// ... (既存のコードはすべてこの上にあります) ...

// ページ読み込み時に総問題数を表示する
totalQuestionCountEl.textContent = questions.length;


// ▼▼▼ 以下の新しいコードを末尾に追加 ▼▼▼

// ページ読み込み時にランキングを初期表示する関数
function showInitialRankings() {
    const rankings = JSON.parse(localStorage.getItem('quizRankings')) || [];
    renderRankingTable(rankings);
    // 最初からランキングを表示させておく
    if (rankingDisplay) { //念のため要素の存在をチェック
        rankingDisplay.classList.remove('hidden'); 
    }
}

// ページのHTMLがすべて読み込まれたらランキングを表示する
document.addEventListener('DOMContentLoaded', showInitialRankings);

// ▲▲▲ コードの追加はここまで ▲▲▲