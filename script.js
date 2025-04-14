// دالة لفتح أو إغلاق قائمة القصائد عند الضغط على اسم الشاعر
function togglePoems(poetId) {
  const poetPoems = document.getElementById(poetId);

  // إذا كانت القصائد مخفية، نقوم بإظهارها
  if (poetPoems.style.display === "none" || poetPoems.style.display === "") {
    poetPoems.style.display = "block";
  } else {
    // إذا كانت مرئية، نقوم بإخفائها
    poetPoems.style.display = "none";
  }
}
