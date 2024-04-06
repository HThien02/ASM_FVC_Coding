// Sử dụng constructor function
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

// // Lặp qua mảng carData và tạo các card cho mỗi chiếc xe
// carData.forEach(car => {
//     // Tạo các phần tử HTML cho mỗi chiếc xe
//     const cardListItem = document.createElement('div');
//     cardListItem.classList.add('card-list', 'col-lg-3', 'col-md-4', 'col-12');

//     const card = document.createElement('div');
//     card.classList.add('card');

//     const image = document.createElement('img');
//     image.classList.add('mx-auto', 'img-thumbnail');
//     image.src = car.carPicture;
//     image.alt = car.carName;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body', 'text-center', 'mx-auto');

//     const cvp = document.createElement('div');
//     cvp.classList.add('cvp');

//     const title = document.createElement('h5');
//     title.classList.add('card-title', 'font-weight-bold');
//     title.textContent = car.carName;

//     const price = document.createElement('p');
//     price.classList.add('card-text');
//     price.textContent = `$${car.carPrice}`;

//     const detailsLink = document.createElement('a');
//     detailsLink.href = car.carLink;
//     detailsLink.target = '_blank';
//     detailsLink.classList.add('btn', 'details', 'px-auto');
//     detailsLink.textContent = 'View Details';

//     const addToCartLink = document.createElement('a');
//     addToCartLink.href = '#';
//     addToCartLink.classList.add('btn', 'cart', 'px-auto');
//     addToCartLink.textContent = 'ADD TO CART';

//     // Gắn các phần tử vào các phần tử cha tương ứng
//     cvp.appendChild(title);
//     cvp.appendChild(price);
//     cvp.appendChild(detailsLink);
//     cvp.appendChild(document.createElement('br'));
//     cvp.appendChild(addToCartLink);

//     cardBody.appendChild(cvp);
//     card.appendChild(image);
//     card.appendChild(cardBody);
//     cardListItem.appendChild(card);

//     // Gắn cardListItem vào phần tử chứa card-list
//     const cardListContainer = document.querySelector('.card-list-container');
//     cardListContainer.appendChild(cardListItem);
//     console.log(car[0])
// });

const itemsPerPage = 8; // Số lượng mục trên mỗi trang
const totalPages = Math.ceil(carData.length / itemsPerPage); // Tính tổng số trang

function displayPage(page) {
    const startIndex = (page - 1) * itemsPerPage; // Index bắt đầu của mục trên trang
    const endIndex = startIndex + itemsPerPage; // Index kết thúc của mục trên trang
    const slicedData = carData.slice(startIndex, endIndex); // Dữ liệu được cắt từ danh sách toàn bộ

    // Hiển thị các card tương ứng với trang hiện tại
    const cardListContainer = document.querySelector('.row');
    cardListContainer.innerHTML = ''; // Xóa nội dung hiện tại

    slicedData.forEach(car => {
        // Tạo các phần tử HTML cho mỗi chiếc xe
        const cardListItem = document.createElement('div');
        cardListItem.classList.add('card-list', 'col-lg-3', 'col-md-4', 'col-12');

        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('mx-auto', 'img-thumbnail');
        image.src = car.carPicture;
        image.alt = car.carName;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center', 'mx-auto');

        const cvp = document.createElement('div');
        cvp.classList.add('cvp');

        const title = document.createElement('h5');
        title.classList.add('card-title', 'font-weight-bold');
        title.textContent = car.carName;

        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = `$${car.carPrice}`;

        const detailsLink = document.createElement('a');
        detailsLink.href = car.carLink;
        detailsLink.target = '_blank';
        detailsLink.classList.add('btn', 'details', 'px-auto');
        detailsLink.textContent = 'View Details';

        const addToCartLink = document.createElement('a');
        addToCartLink.href = '#';
        addToCartLink.classList.add('btn', 'cart', 'px-auto');
        addToCartLink.textContent = 'ADD TO CART';

        // Gắn các phần tử vào các phần tử cha tương ứng
        cvp.appendChild(title);
        cvp.appendChild(price);
        cvp.appendChild(detailsLink);
        cvp.appendChild(document.createElement('br'));
        cvp.appendChild(addToCartLink);

        cardBody.appendChild(cvp);
        card.appendChild(image);
        card.appendChild(cardBody);
        cardListItem.appendChild(card);

        // Gắn cardListItem vào phần tử chứa card-list
        cardListContainer.appendChild(cardListItem);
    });
}

// Tạo các nút phân trang
const paginationContainer = document.querySelector('.pagination');
for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    // pageButton.classList.add('col-lg-2 col-md-4 col-12');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
        displayPage(i);
    });
    paginationContainer.appendChild(pageButton);
}

// Hiển thị trang đầu tiên khi tải trang
displayPage(1);
