## دي الصيغه الي كتبت بيها وهتلاقي صيغه لي شات تحت مرتبهانتا مش هتكون محتاج انو تعمل بس npm install

كومند تنزيل ال moudules
1-npm init --y
2-npm install express mongoose dotenv cors bcryptjs jsonwebtoken zod swagger-ui-express yamljs @google/generative-ai
تم رفعهم في الجيسون كل الي عليك انو تعمل
npm install
هتنزل الباكيج كلها الي في الجيسون
ولتشغيل المشروع في الcli من غير اعاده تشغيل كل شويه
نزل
npm install --save-dev nodemon
ثم في ال تيرمنال
npm run dev
عندك كمان ال path and fs ==> modules internal

---

أوامر تنزيل الـ Modules للمشروع:

1️⃣ إنشاء ملف package.json:

```bash
npm init -y
```

2️⃣ تنزيل الـ Modules المطلوبة:

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken zod swagger-ui-express yamljs @google/generative-ai
```

الـ Modules دي هتتسجل تلقائيًا في `package.json`.

بعد كده أي حد من التيم يعمل Clone للمشروع، كل اللي عليه إنه يشغل:

```bash
npm install
```

وده هينزل كل الـ packages الموجودة في `package.json`.

3️⃣ علشان المشروع يعمل Auto Restart أثناء التطوير من غير ما نعمل Restart يدوي كل مرة:

```bash
npm install --save-dev nodemon
```

وبعد إضافته في `package.json`:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

نشغل المشروع بـ:

```bash
npm run dev
```

📌 ملحوظة:
`fs` و `path` مش محتاجين تنزيل بـ npm، لأنهم Built-in / Internal Modules موجودين أصلًا مع Node.js.
