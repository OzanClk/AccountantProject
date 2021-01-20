# Proje Konusu

Proje bir firmaya ait gelir-gider,ödemeler ve stok bilgileri gibi verileri gösteren bir mobil uygulamadır.Bu tür mobil uygulamalara Paraşüt,Accounts Customer Tracking,Bimasraf  vb. uygulamaları örnek gösterebiliriz.

![unnamed](https://play-lh.googleusercontent.com/totlcxNIPFXVi-gmqM6h7AK9nohaqFtBpQD0Uyy3lO4paisQ2s_qsIbSZ8bgoPNYYUc=w1536-h722-rw)

# Kullanılan Araç ve Teknolojiler

Projede veritabanı olarak MS-SQL kullanılmıştır.Firmalara ait örnek kayıtlar  oluşturulan tablolarda tutulmaktadır.Web servis için C# Web API kullanılmıştır.Veritabanı ile haberleşme bu API üzerinden sağlanmaktadır.Uygulama Ionic 5 Framework'ü ile  geliştirilmiş ve Cordova eklentisi ile Android Studio'da da çalışmaktadır.



![](https://i.ibb.co/MDFPQvM/GE.png)



# Veritabanı Tasarımı

Veri tabanı 4 ilişkili tablodan oluşmaktadır.Tablolarda kullanıcılar,gelir-gider,odemeler ve stok verileri tutulmaktadır.

![](https://i.ibb.co/mBBSrDf/ezgif-com-gif-maker.gif)



# Web API 

Web API  C# dili kullanılarak geliştirilmiştir.REST mimarisine uygun olarak CRUD işlemleri gerçekleştirilmektedir.



![](https://i.ibb.co/Cb8cTYF/ezgif-com-gif-maker2.gif)



Veritabanından çekilecek veriler için bir servis yazıldı.Verilere bu servisler aracılığı ile erişilmektedir.Servis Postman ile test edildi ve veriler başarıyla  alındı.

![](https://i.ibb.co/qkxqpFP/11.png) 



# İonic 5 Framework

Uygulamada kullanılacak  login,profil,gelir-gider,ödemeler ve stok durumları için sayfalar oluşturuldu ve sayfalara ait geliştirmeler yapıldı.

![](https://i.ibb.co/BzNbw5g/F-RMAB-LG.png)



# Kurulum 

Uygulamanın kullanımı için Ionic 5 , Microsoft Visual Studio yazılımlarının bilgisayara kurulu olması gerekmekte ve github repository den uygulamaya ait AccountantProject kodları clone edilmelidir.

![](https://i.ibb.co/HGJVQGv/clone.png)

Bu işlem gerçekleştirildikten sonra projeye ait bağımlıklar npm install komutu ile projeye dahil edilmelidir.

![](https://i.ibb.co/k4zSK1J/111.png)

Daha sonra uygulamaya ait dosya dizinin içerisine terminal ile erişerek  "ionic serve --lab" komutu ile proje ayağa kaldırılmalıdır.Bu işlemler gerçekleştirildikten  sonra proje kullanıma hazır hale gelmiş olacaktır.

![](https://i.ibb.co/HpW35Hr/ion.png)



# Kullanım

İlk olarak kullanıcıyı giriş sayfası karşılamaktadır.Burada kullanıcı ID sini ve şifresini girerek uygulamaya giriş yapabilmektedir.  (Örnek olarak Kullanıcı ID:1 password:123456 kullanıcısı oluşturulmuştur).

![](https://i.ibb.co/bF1TnSJ/Giri.png)



Kullanıcı uygulamaya giriş yaptıktan sonra ilk olarak profil sayfasına yönlendirilmektedir.Burada kullanıcıya ait bilgiler yer almaktadır.

![](https://i.ibb.co/Dk8hRFg/Giri-Ekran.png)



Gelir-Gider ekranında kullanıcı gelir ve gider tablolarını görüntülemektedir.

![](https://i.ibb.co/zPr8rQH/Gelirgider.png)



Ödemeler Ekranında kullanıcının  gelecek tarihli ödemeleri listelenmektedir.

![](https://i.ibb.co/Y3KHjqC/odemeler.png)



Stok durumu ekranında stoktaki ürünler ve adetleri listelenir.Kullanıcı ürün ve adet bilgisi ekleyebilmektedir.

![](https://i.ibb.co/NTp1vYk/stokdurumu.png)





## KAYNAKÇA

[1]: https://play-lh.googleusercontent.com/totlcxNIPFXVi-gmqM6h7AK9nohaqFtBpQD0Uyy3lO4paisQ2s_qsIbSZ8bgoPNYYUc=w1536-h722-rwhttps://play-lh.googleusercontent.com/tot
[2]: https://medium.com/@bus/npm-c08c9610df2
[3]: https://angular.io/tutorial
[4]: https://www.tutorialspoint.com/typescript/index.htm

