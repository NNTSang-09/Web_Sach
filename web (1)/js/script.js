const products = [
  { id: 1, title: "Boxset Manga Dựa Con Cua Thối Tiệt", price: 120000, image: "../img/boxset-manga.jpg" },
  { id: 2, title: "5 Centimet Trên Giây", price: 60000, image: "../img/5cm-per-second.jpg" },
  { id: 3, title: "Hoàng Tử Bé (Tái Bản 2022)", price: 30000, image: "../img/le-petit-prince.jpg" },
  { id: 4, title: "Charlotte Và Wilbur (Tái Bản 2018)", price: 55000, image: "../img/charlotte-web.jpeg" },
  { id: 5, title: "Tôi Tìm Tôi Cố Thể Lâm Đục - Hốc Cạch...", price: 40000, image: "../img/toi-tim-toi.jpeg" },
  { id: 6, title: "Thỏ Bảy Màu Và Nhũng Ngudi Nghịch...", price: 100000, image: "../img/tho-bay-mau.jpeg" },
  { id: 7, title: "Thinking, Fast and Slow", price: 284000, image: "../img/thinking-fast-slow.jpeg" },
  { id: 8, title: "Life BRE A2-B1: Student Book With...", price: 247000, image: "../img/life-bre-a2b1.jpeg" },
  { id: 9, title: "Nhà Khoa Học Nhí - Chơi Trốn Tìm Vời...", price: 28000, image: "../img/nha-khoa-hoc-nhi.jpeg" }
];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="product-detail.php?book_id=${product.id}">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price.toLocaleString('vi-VN')}đ</p>
      </a>
    `;
    productList.appendChild(card);
  });
}

displayProducts();