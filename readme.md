1. 建立 Google Sheet + Apps Script 後端 API
建一份 Google Sheet，命名：Our Memory Map

欄位 A: name（地點名稱）

欄位 B: lat（緯度）

欄位 C: lng（經度）

欄位 D: note（備註）

欄位 E: photoUrl（照片網址）

點選上方選單 擴充功能 → App Script，輸入以下程式碼：

點上方「🚀 部署 → 新部署」

選「網頁應用程式」

執行應用程式為：「我自己」

誰可以存取：「任何人（含匿名者）」

點「部署」，會產生一組網址（你的 API endpoint）

部署作業 ID
AKfycbzvSs5OYfiZS-HiE6ROLf0UTQfbE5bsXar3YY-SFnzjQ6iNnEaS9V4VBBzqqqTPpUd3

網址
https://script.google.com/macros/s/AKfycbzvSs5OYfiZS-HiE6ROLf0UTQfbE5bsXar3YY-SFnzjQ6iNnEaS9V4VBBzqqqTPpUd3/exec

建立前端頁面 index.html，包含：
    地圖顯示

    點地圖新增標記

    上傳圖片 + 備註 + 傳送到 Google Sheet API

 2. 設定圖床：使用 Cloudinary（或 Imgur）
免費註冊 Cloudinary 帳號

取得你的「cloud name」和「unsigned upload preset」（免登入也能上傳）
Cloud Name: dz8vkyskqw
Upload Preset: our_memory_map_preset

你將能用前端上傳圖片並取得圖片網址

✅ Google Maps JavaScript API 使用教學（超簡版）
🔹 步驟 1：建立 Google Cloud 專案
前往 Google Cloud Console 👉 https://console.cloud.google.com/

登入你的 Google 帳號

點選上方「選取專案」 > 「新增專案」

輸入名稱：Our Memory Map（你也可以自取）

🔹 步驟 2：啟用 Maps JavaScript API
點選左上角「導航選單 ☰」→ 「API 與服務」→「程式庫」

搜尋「Maps JavaScript API」

點進去後按「啟用」

🔹 步驟 3：建立 API 金鑰
回到「API 與服務」→「認證資訊」

點「建立認證」→「API 金鑰」

複製產生的金鑰（這就是 YOUR_GOOGLE_MAPS_API_KEY）


4.部署上線！
你可以把這三個檔案放到 GitHub Repo 或上傳到 Vercel（靜態網頁免費託管）