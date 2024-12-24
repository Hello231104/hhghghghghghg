function goToDetailPage(card) {
    // Lấy dữ liệu từ thẻ được click
    const name = card.getAttribute('data-name');
    const price = card.getAttribute('data-price');
    const description = card.getAttribute('data-description');
    const image = card.getAttribute('data-image');
    const descriptiondetail = card.getAttribute('data-description-detail');
    const size =card.getAttribute('data-size');
    const nsx =card.getAttribute('data-nsx');
    const type=card.getAttribute('data-type');
    // Lưu thông tin vào localStorage hoặc sessionStorage
    const detailData = { name, price, description, image, descriptiondetail, size, nsx,type };
    localStorage.setItem('productDetail', JSON.stringify(detailData));
    
    // Chuyển hướng đến trang chi tiết
    window.location.href = 'chitietsp.html';
}

function showBranche() {
    alert("Chi nhánh 209 Đội cấn, Ba Đình, Hà Nội còn hàng!");
}