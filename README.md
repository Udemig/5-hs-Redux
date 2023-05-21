# State Yönetimi :

Uygulma içerisindeki bileşenlerin sahip olduğu özellikler ve bilgiler

# Neden Redux :

Kod tekrarını Önler
Performansı Arttırır
Bileşenler içindeki karışıklllığı zalatır
State yönetimi daha kolay bir hal alır

# Redux React projesine kurmak:

1. 2 kütüphaneye ihtiyaç var. > npm i redux react-redux
2. Redux Klasorü altında reducer ve store dosyaası oluştur.
3. Provide ile store'u uygulamaya tanıt > index.js

# Bilinmesi Gerekenler:

1. Store: Uygulamanın tüm bileşenleri tarfından erişilibelien ve değiştirilebilinen merkezi state
2. Action: Store u güncellemek için type payload değerlerine sahip objeler.
3. Dispatch: Actionları reducera gönderir
4. Reducer: Gönderilen aksiyonları analiz edip typelerine göre storeu günceller.
5. Subscribe: Store içerisindeki verilere erişmek için yöntem
