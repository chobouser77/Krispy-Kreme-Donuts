$(document).ready(function () {
  let products = [];

  // JSON 파일 불러오기
  $.getJSON("/products.json", function (data) {
    products = data;
    renderProducts("Donut"); // 초기 렌더링
  });

  // 버튼 클릭 이벤트
  $(".s1bt").on("click", function () {
    $(".s1bt").removeClass("active");
    $(this).addClass("active");
    const target = $(this).data("target");
    console.log("Clicked tag:", target); // 디버깅용
    renderProducts(target);
  });

  // 상품 렌더링 함수
  function renderProducts(tag) {
    const filteredProducts = products.filter(product => product.tags.includes(tag));
    console.log("Filtered Products:", filteredProducts); // 디버깅용

    let productsHTML = "";
  
    filteredProducts.forEach(product => {
      let bestIcon = "";

      if (product.tags && product.tags.includes("Best")) {
        bestIcon = `<span class="best-icon">Best</span>`;
      }      
      else if (product.tags && product.tags.includes("New")) {
        bestIcon = `<span class="new-icon">New</span>`;
      }
      productsHTML += `
        <div class="product-item">
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <span>${product.price}₩</span>
          ${bestIcon}          
        </div>
      `;
    });

    $(".product").html(productsHTML);
    console.log("Rendered HTML:", productsHTML); // 디버깅용
  }
});
