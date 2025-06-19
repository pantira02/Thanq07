<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ThanQ - จองคิวแทนคุณ</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-white text-blue-900">
  <div class="max-w-5xl mx-auto p-4">

    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold">ThanQ - จองคิวแทนคุณ</h1>
      <p class="text-sm text-gray-600">ให้การรอคิวเป็นเรื่องง่ายผ่าน LINE</p>
    </div>

    <!-- ปุ่มเมนู -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      <button class="bg-blue-500 text-white py-2 rounded-xl" onclick="alert('ฟีเจอร์ Top 10 Services')">Top 10 Services</button>
      <button class="bg-blue-500 text-white py-2 rounded-xl" onclick="alert('ฟีเจอร์ค้นหา')">ค้นหา</button>
      <button class="bg-blue-500 text-white py-2 rounded-xl" onclick="document.getElementById('jobModal').classList.remove('hidden')">ประกาศงาน</button>
      <button class="bg-blue-500 text-white py-2 rounded-xl" onclick="document.getElementById('applyModal').classList.remove('hidden')">สมัครรับงาน</button>
    </div>

    <!-- บริการ -->
    <h2 class="text-xl font-semibold mb-4">🔝 บริการยอดนิยม</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="border p-4 rounded-xl shadow hover:shadow-lg transition">
        <div class="flex items-center space-x-4">
          <img src="https://i.ibb.co/0y0C5fM/avatar.png" class="w-16 h-16 rounded-full object-cover">
          <div>
            <h3 class="text-lg font-bold">ต่อคิวสินค้าแบรนด์</h3>
            <p class="text-sm text-gray-500">โดย ปัญธิรา เมฆวัน</p>
            <p class="text-sm text-green-600">ค่าบริการ 300 บาท</p>
          </div>
        </div>
        <div class="mt-3 text-sm">⭐ 4.8 | งาน 120 ครั้ง</div>
        <div class="mt-4">
          <button onclick="alert('โปรไฟล์ผู้ให้บริการ')" class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">ดูโปรไฟล์</button>
          <button onclick="alert('ระบบจ้างงานกำลังพัฒนา')" class="bg-green-500 text-white px-4 py-1 ml-2 rounded-full text-sm">จ้างเลย</button>
        </div>
      </div>
    </div>

    <!-- Modal: สมัครรับงาน -->
    <div id="applyModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">สมัครเป็นผู้รับจ้าง</h2>
        <form onsubmit="submitApply(event)">
          <input type="text" placeholder="ชื่อ-นามสกุล" class="w-full border p-2 rounded mb-3" required>
          <input type="tel" placeholder="เบอร์โทร" class="w-full border p-2 rounded mb-3" required>
          <input type="file" accept="image/*" class="w-full border p-2 rounded mb-3" onchange="previewImage(event)">
          <img id="preview" class="w-24 h-24 rounded-full object-cover mx-auto hidden mb-3">
          <div class="flex justify-between">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">ส่งสมัคร</button>
            <button type="button" class="text-red-500" onclick="closeModal('applyModal')">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal: ประกาศงาน -->
    <div id="jobModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">ประกาศงานใหม่</h2>
        <form onsubmit="submitJob(event)">
          <input type="text" placeholder="ชื่องาน" class="w-full border p-2 rounded mb-3" required>
          <textarea placeholder="รายละเอียดงาน" class="w-full border p-2 rounded mb-3" rows="3" required></textarea>
          <div class="flex justify-between">
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">ประกาศ</button>
            <button type="button" class="text-red-500" onclick="closeModal('jobModal')">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>

    <footer class="mt-12 text-center text-sm text-gray-400">
      © 2025 ThanQ - ระบบจองคิวแทนคุณ
    </footer>
  </div>

  <script>
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    function previewImage(event) {
      const preview = document.getElementById('preview');
      preview.src = URL.createObjectURL(event.target.files[0]);
      preview.classList.remove('hidden');
    }

    function submitApply(event) {
      event.preventDefault();
      alert("ส่งสมัครเรียบร้อยแล้ว!");
      closeModal('applyModal');
    }

    function submitJob(event) {
      event.preventDefault();
      alert("ประกาศงานเรียบร้อยแล้ว!");
      closeModal('jobModal');
    }
  </script>
</body>
</html>
