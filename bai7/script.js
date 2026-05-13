
        function nganHang(callback) {
            console.log("Lấy số thứ tự...");
            setTimeout(function() {
            console.log("Đến lượt bạn!");
            callback("Victor");
            }, 3000);
        }

        function khachHang(name) {
            console.log("Khách hàng " + name + " vào giao dịch");
        }

        nganHang(khachHang);
