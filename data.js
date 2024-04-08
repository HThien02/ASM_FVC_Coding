function Car(carName, carPrice, carPicture, carLink) {
    this.carName = carName;
    this.carPrice = carPrice;
    this.carPicture = carPicture;
    this.carLink = carLink;
}

const carData = [
{carName: "Vinfast VF9", carPrice: 90000, carPicture: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF9-9.jpg", carLink: "https://xehay.vn/danh-gia-xe-nguoi-dung-danh-gia-vinfast-vf-9-dep-cao-cap-lai-hay-va-rat-phu-hop-cho-gia-dinh.html"},
{carName: "Vinfast VF8", carPrice: 80000, carPicture: "https://vinfastotominhdao.vn/wp-content/uploads/VinFast-VF8-1.jpg", carLink: "https://tinhte.vn/thread/review-vinfast-vf8-sau-1-nam-24-000km-van-hanh-so-huu-xe-dien-khac-gi-xe-xang.3758298/"},
{carName: "Vinfast VF7", carPrice: 65000, carPicture: "https://thepixel.vn/wp-content/uploads/thong-so-ky-thuat-chinh-thuc-cua-vinfast-vf-7-the-pixel4.jpg", carLink: "https://thanhnien.vn/danh-gia-nhanh-vinfast-vf-7-ngoi-sao-hy-vong-cua-hang-xe-viet-185231202195701022.htm"},
{carName: "Vinfast VF6", carPrice: 55000, carPicture: "https://vinfasthadong.com.vn/wp-content/uploads/2023/10/VF6-2023.jpg", carLink: "https://thanhnien.vn/uu-nhuoc-vinfast-vf-6-xe-thuan-dien-vua-van-voi-nguoi-viet-185230929105141914.htm"},
{carName: "Vinfast VF5", carPrice: 40000, carPicture: "https://vinfastotominhdao.vn/wp-content/uploads/vf5-2023.jpg", carLink: "https://vinfast.vn/dien-dan/thao-luan/review-vinfast-vf5-sau-15-000-km/"},
{carName: "Vinfast Lux A2.0", carPrice: 70000, carPicture: "https://i1-vnexpress.vnecdn.net/2021/09/18/VinFastLuxA2020VnExpress3732854361601378665jpg-1631937165.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=yn4bLpjST_ByIUMMxbjrzA", carLink: "https://www.danhgiaxe.com/danh-gia/danh-gia-chi-tiet-xe-vinfast-lux-a20-2021-thiet-ke-ngoai-that-bat-mat-cam-giac-lai-the-thao-vuot-troi-30077"},
{carName: "Vinfast Lux SA2.0", carPrice: 90000, carPicture: "https://danviet.mediacdn.vn/296231569849192448/2022/12/8/giat-minh-voi-gia-vinfast-lux-sa20-sau-3-nam-lan-banh-tai-viet-nam-danvietvn-4-16705050173721697057830.jpg", carLink: "https://www.24h.com.vn/o-to/danh-gia-vinfast-lux-sa20-chiec-suv-tung-lam-mua-lam-gio-c747a1469587.html"},
{carName: "Vinfast Fadil", carPrice: 40000, carPicture: "https://img1.oto.com.vn/2024/01/17/danh-gia-xe-vinfast-fadil-2021-oto-com-vn-71-e62d-f3ab_wm.webp", carLink: "https://www.danhgiaxe.com/danh-gia/danh-gia-xe-vinfast-fadil-2022-thiet-lap-lai-trat-tu-phan-khuc-a-30545"},
{carName: "Vinfast VF e34", carPrice: 35000, carPicture: "https://i1-vnexpress.vnecdn.net/2021/09/15/Screenshot2jpg-1631650821.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=IfI7lUZkyTPowdj5-j06Jw", carLink: "https://shop.vinfastauto.com/vn_vi/a-coc-xe-dien-vfe34.html"},
{carName: "Vinfast Wild", carPrice: 100000, carPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUlDXp9RP01QVLM_i_2YqXqp4e1ks6Co1q3Ecdu9S9w&s", carLink: "https://vinfastotominhdao.vn/vinfast/vf-wild/"},
{carName: "Vinfast President", carPrice: 200000, carPicture: "https://vinfastotominhdao.vn/wp-content/uploads/ngoai-that-vinfast-president.jpg", carLink: "https://shop.vinfastauto.com/vn_vi/o-to-vinfast-president.html"},
{carName: "Vinfast Ventos S", carPrice: 2500, carPicture: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3c8451fe/images/PDP-XMD/ventos/image-color-3-sp.webp", carLink: "https://shop.vinfastauto.com/vn_vi/xe-may-dien-vento-s.html"},
{carName: "Vinfast Theon S", carPrice: 3000, carPicture: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw52c9a310/images/PDP-XMD/theons/image-color-sp.webp", carLink: "https://shop.vinfastauto.com/vn_vi/xe-may-dien-theon-s.html"},
];

function Account(email, password, role) {
    this.email = email;
    this.password = password;
    this.role = role;
}

const accountData = [
{email: "admin@gmail.com", password: "admin", role: 0},
{email: "user@gmail.com", password: "user", role: 1},
];