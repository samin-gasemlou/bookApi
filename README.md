# 📚 Book API

یک RESTful API ساده برای مدیریت کتاب‌ها، نوشته‌شده با Node.js، Express و MongoDB. این پروژه یک مینی‌پروژه تمرینی برای یادگیری ساخت API با استفاده از Mongoose و Express است.

---

## 🚀 تکنولوژی‌ها

- Node.js
- Express.js
- MongoDB + Mongoose
- Postman (برای تست API)

---

## ⚙️ راه‌اندازی پروژه

1. پروژه را کلون یا دانلود کنید:
```bash
git clone https://github.com/samin-gasemlou/bookApi.git
وارد پوشه پروژه شوید و پکیج‌ها را نصب کنید:

cd bookApi
npm install

اطمینان حاصل کنید MongoDB روی سیستم‌تان اجرا می‌شود. (به صورت پیش‌فرض به mongodb://localhost:27017/ وصل می‌شود.)

سرور را اجرا کنید:

node server.js
مسیرهای API:

متد و آدرس و توضیح
POST	/books	افزودن کتاب جدید
GET	/books	دریافت لیست همه کتاب‌ها
GET	/books/:id	دریافت یک کتاب خاص
PUT	/books/:id	ویرایش کتاب با ID خاص
DELETE	/books/:id	حذف کتاب با ID خاص

📌 نکات
تمامی درخواست‌ها باید در فرمت JSON باشند.

تست این API می‌تواند از طریق Postman انجام شود.
✨ توسعه‌دهنده
👤 Samin Gasemlou
GitHub: @samin-gasemlou
