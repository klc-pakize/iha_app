# Description

<p>İnsansız Hava Araçları kiralama sayfası olarak hazırlanan bu projenin ön yüzü sadece kullanıcı arayüzü olarak tasarlanmıştır, amacı; rezervasyon tablosundaki kullanıcının talebi yetkili kişiye ulaşacak ve talep eden kişilerle gerekli görüşmelerin ardından yetkili kişinin rezervasyon talebini onaylaması durumunda talep eden kişi İHA'yı kiralayabilecek ve o uçak aynı tarihler arasında başka bir yolcu tarafından kiralanmayacak ve görüntülenmeyecektir.🛩️</p>

<p>The front side of this project, which was prepared as an Unmanned Aerial Vehicles rental page, is designed only as a user interface, its purpose is; The request of the user in the reservation table will reach the authorized person and if the authorized person approves the reservation request after the necessary negotiations with the requesting persons, the requesting person will be able to charter the UAV and that aircraft will not be chartered and displayed by another passenger between the same dates.🛩️</p>

# Models

- Iha
- Brand
- Reservation
- User

![Model]()

# Customers

    - Başlangıç ve bitiş tarihini seçebilir ve seçilen tarihlerdeki mevcut IHA'ların listesini görebilir.
    - Geçmiş olanlar da dahil olmak üzere rezervasyonlarının listesini görebilir.

    - Can select start and end date and see the list of available IHA's on selected dates.
    - Can see the list of their reservations including past ones.

# Admins

    - Iha tablosu üzerinde CRUD işlemlerini yapabilir,
    - Marka tablosu üzerinde CRUD işlemlerini yapabilir,
    - Müşteriler tablosunda CRUD işlemlerini yapabilir,
    - Rezervasyon tablosunda CRUD işlemlerini yapabilir,

    - Can make CRUD operations on Iha table,
    - Can make CRUD operations on Brand table,
    - Can make CRUD operations on Customers table,
    - Can make CRUD operations on Reservations table,

# Live Project

- <a href="">Live of the project</a>
- <a href="">For the swagger of the project</a>

# Kurulum Back-end

<p>Aşağıda, kitlenize uygulamanızı yükleme ve kurma konusunda nasıl talimat verebileceğinize dair bir örnek verilmiştir. Bu şablon herhangi bir dış bağımlılığa veya hizmete dayanmaz.</p>

1- back-end dosyasına ulaş
cd backend

3- python env kurulumu
python -m venv envl

4- env aktifleştirme
Powershell => .\env\Scripts\activate
bash => source env/Scripts/Activate

5- Paketleri kurun
pip install -r requirements.txt

6- Database için,
python manage.py migrate

7- Admin Paneli için kullanıcı oluşturun
python manage.py createsuperuser

8- Proje hazır, şimdi kullanmaya başlayabilirsiniz
python manage.py runserver

Uygulamayı geliştirme modunda çalıştırır. Tarayıcıda görüntülemek için http://127.0.0.1:8000/'i
açın.

<p>Here's an example of how you can instruct your audience to download and install your app. This template is not based on any external dependencies or services.</p>

1- Access the back-end file
cd backend

3- python env installation
python -m venv envl

4- env activation
Powershell => .\env\Scripts\activate
bash => source env/Scripts/Activate

5- Install packages
pip install -r requirements.txt

6- For database,
python manage.py migrate

7- Create user for Admin Panel
python manage.py createsuperuser

8- The project is ready, you can start using it now
python manage.py runserver

Runs the application in development mode. To view in the browser http://127.0.0.1:8000/
open.

# Kurulum Front-end

<p>Aşağıda, kitlenize uygulamanızı yükleme ve kurma konusunda nasıl talimat verebileceğinize dair bir örnek verilmiştir. Bu şablon herhangi bir dış bağımlılığa veya hizmete dayanmaz.</p>

1- Repo klonla
git clone

2- front-end dosyasına ulaş
cd frontend

3- NPM paketlerini kurun
yarn install
npm install

4- Proje hazır, şimdi kullanmaya başlayabilirsiniz.
npm start

Uygulamayı geliştirme modunda çalıştırır. Tarayıcıda görüntülemek için http://localhost:3000'i
açın.

<p>Here's an example of how you can instruct your audience to download and install your app. This template is not based on any external dependencies or services.</p>

1- Clone repo
git clone

2- Access the front-end file
cd frontend

3- Install NPM on Yarn packages
yarn install
npm install

4- The project is ready, you can start using it now.
npm start

Runs the application in development mode. http://localhost:3000 to view in browser
open.
