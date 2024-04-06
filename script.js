document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchBtn = document.getElementById('searchBtn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function(event){
            event.preventDefault(); // Chặn hành vi mặc định của form

            var searchItem = searchInput.value.trim().toLowerCase(); // Lấy giá trị tìm kiếm và chuyển đổi thành chữ thường

            // Lặp qua danh sách các card và ẩn hoặc hiển thị dựa trên tên của card
            var cards = document.querySelectorAll('.card-list');
            cards.forEach(function(card) {
                var cardTitle = card.querySelector('.card-title').textContent.toLowerCase(); // Lấy tên của card và chuyển đổi thành chữ thường
                if (cardTitle.includes(searchItem)) {
                    card.style.display = 'block'; // Hiển thị card nếu tên chứa từ khóa tìm kiếm
                } else {
                    card.style.display = 'none'; // Ẩn card nếu không chứa từ khóa tìm kiếm
                }
            });
        });
    } else {
        console.error("Search button or input element not found.");
    }
});