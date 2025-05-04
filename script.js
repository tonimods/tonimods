// هذا الكود جاهز للتوسعة لاحقاً، مثل عرض نافذة منبثقة عند الضغط على Download
document.querySelectorAll('.download').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Download started for: " + this.closest('.info').querySelector('h2').textContent);
  });
});
