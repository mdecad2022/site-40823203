var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'w3', 'text': '倉儲設定 \n \n 和建立replit帳號 \n \n 利用設立的replit帳號啟動動態網站，進行內容編輯管理，再把 動態轉為靜態網站內容之後,與 Github 倉儲同步。 \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '近端可攜系統環境準備 \n 存取ssh key \n \n putty設定 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '在stud.cycu.org執行動態網站 \n 下載server.py並 編輯，把 分配到的個人埠號:9121，填入後save, 再以 sftp 放入上列取下的倉儲根目錄。 \n \n 但是出現錯誤 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '詢問老師後，問題:訊息顯示你的 8xxxx 埠已經啟動中, 但剛剛以 ps axo pid,comm,user |grep "python3" 沒有看到你的 Python3 server.py, 所以目前你並沒有啟用動態網站, 可以再確認一下你的 server.py 有沒有改對 port, 然後再試試看. \n 再確認server.py 有沒有改對 port', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '問題解決後， \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n \n 設定完成後，會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站)，在網頁搜尋https://stud.cycu.org:8121，就可以看到個人的動態網站。 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '\n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中考周 \n 考試時間, 從 2022.11.03 13:40-14:20,  https://exam.cycu.org/ , 校外網段必須設定140.130.17.4:3128 kmolab/kmolab 才能進入考試. \n \n \n \n \n file:///C:/Users/USER/Desktop/nxs/test.htm', 'tags': '', 'url': 'w9.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};