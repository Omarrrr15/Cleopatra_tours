/**
 * ================================================
 *  ملف إضافة الفيديوهات والصور - عين كليوبترا
 * ================================================
 *
 *  📌 إزاي تضيف فيديو أو صورة من Google Drive:
 *
 *  1. افتح الملف على Drive
 *  2. اضغط Share → "Anyone with the link"
 *  3. خد الـ ID من الرابط:
 *     https://drive.google.com/file/d/ [ID_هنا] /view
 *  4. أضفه في القائمة المناسبة تحت
 *
 *  📁 الكاتيجوري المتاحة:
 *     "beaches"  → شواطئ
 *     "yacht"    → يخت
 *     "aqua"     → أكوا بارك
 *     "safari"   → سفاري
 * ================================================
 */

// ============ الفيديوهات ============
const videosData = [
  // ===== أضف فيديوهاتك هنا =====
  // {
  //   id: "ضع_ID_الفيديو_هنا",
  //   title: "اسم الفيديو",
  //   description: "وصف قصير",
  //   category: "beaches"
  // },

  // مثال شواطئ
  { id: "1o2WgZwvhYpLaLSqzmYCs254ww_J_BrNS", title: "شاطئ الجزيرة بيتش", description: "أجمل شواطئ مرسي مطروح", category: "beaches" },
  { id: "19MesIpoXyUnI9XRfYjpb67-jeN7oZVmR", title: "شاطئ مينا حشيش", description: "أجمل شواطئ مرسي مطروح", category: "beaches" },
  { id: "19cIb1B7whUDmncAz_MVweNWVfG8Jcgxz", title: " مزار عجيبة ", description: "أجمل مزارات مرسي مطروح", category: "beaches" },
  { id: "14ktJ2Qvs1Z6dZpfjPUKzKYYhJ_G74Gxl", title: "شاطئ ام الرخم", description: "أجمل شواطئ مرسي مطروح", category: "beaches" },
  { id: "1vtthr3d3vZbXdNOvaqZN5rVMlPKvEgPq", title: "شاطئ عروس الأبيض", description: "أجمل شواطئ مرسي مطروح", category: "beaches" },
  { id: "1o2WgZwvhYpLaLSqzmYCs254ww_J_BrNS", title: "شاطئ الغرام", description: "أجمل شواطئ مرسي مطروح", category: "beaches" },
  // مثال يخت
  { id: "1Xpn6z5aq_C2L8L_preZ0WccYsWHFEMNa", title: "رحلة اليخت", description: "تجربة فاخرة في البحر", category: "yacht" },
  // مثال سفاري
  { id: "1gQduioaKUJdPXR-PyxBnRo8QbyevWfYb", title: "سفاري ", description: " السفاري في وادي تويويع ", category: "safari" },
  // مثال أكوا بارك
  { id: "1evO3TFiWot6L78e8e2LcMFgaU_6CvCy8", title: "واوا لاند ", description: "متعة ومياه طوال اليوم", category: "aqua" },
  { id: "12_j1EPDkfmJS-9BmjRF58B8VC-Y6rTyF", title: " كريزي ووتر ", description: "متعة ومياه طوال اليوم", category: "aqua" },
];

// ============ الصور - مقسمة حسب النوع ============
const photosData = {

  beaches: [
    // ===== صور الشواطئ =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "1X3GKCulwCuXHHYLVN_5kN8quEf6sOOxM", title: "جدول الرحلات " },
    { id: "1D6OURF8ff27P9u6F1W6x9_Q8sNv5gdoO", title: " سهرة عقر خادم" },
    { id: "1mdqUXXICSwXeI7Rx_PG3j9xAISLILlq4", title: " سهرة القرية البدوية " },
    { id: "1EYCL_p-XDpQKdVPBEaPA9sBwR6on8dQF", title: "  افواجنا في الغرام  " },
    { id: "1HChm3EkNJ-duKo0rFqvbCKPVcg1-maZp", title: "   رحلات عين كليوبترا   " },
    { id: "1i5cMoDG7A9J1giEEhGxcTTAIQ35RIORh", title: "  افواجنا في الأبيض  " },
  ],

  yacht: [
    // ===== صور اليخت =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "1JUlzLA0wqR-V-1dXlSybQ86-XPvsbkvR", title: " يخت المحروسة " },
    { id: "1Kgh-DULk0sB5xzT0LkwI2xIn6qeRsBOU", title: " يخت الفيروز " },
    { id: "1X_T6VLPlGfW-q9JJgbO77QWsXhh2DpKY", title: "رحلات اليخت   " },
  ],

  aqua: [
    // ===== صور الأكوا بارك =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "1toiwkzTHZTrdaFY3rOs1C2LN9xBWE1ZZ", title: "واوا لاند" },
    { id: "1i1n-Elc_gxfRPJHBPEpZzoJc-0Q4ZYSj", title: " crazy water " },
  ],

  safari: [
    // ===== صور السفاري =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "1j0xhk3aHa7NA0m1Set60XEvU3gHHXtXo", title: "سفاري الشلال " },
    { id: "1taXbwkNten07utbGcpLgQ9G9nXvL94R8", title: "أفواجنا في السفاري " },

  ],

};

// ======= دوال مساعدة (لا تعدل هنا) =======

// صورة مصغرة للفيديو
function getVideoThumb(id) {
  if (id.startsWith("SAMPLE")) return getPlaceholderImg(id);
  return `https://drive.google.com/thumbnail?id=${id}&sz=w500`;
}

// رابط تشغيل الفيديو
function getVideoEmbedUrl(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

// رابط عرض الصورة
function getPhotoUrl(id) {
  if (id.startsWith("SAMPLE")) return getPlaceholderImg(id);
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}

// صور بديلة للأمثلة
function getPlaceholderImg(id) {
  if (id.includes("B")) return "beaches.png";
  if (id.includes("Y")) return "yacht.png";
  if (id.includes("A")) return "aqua.png";
  if (id.includes("S")) return "safari.png";
  return "hero_bg.png";
}
