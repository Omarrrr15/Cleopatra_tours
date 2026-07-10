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
    { id: "SAMPLE_B2", title: "شاطئ كليوباترا" },
    { id: "SAMPLE_B3", title: "شاطئ أبو الأصابع" },
  ],

  yacht: [
    // ===== صور اليخت =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "SAMPLE_Y1", title: "اليخت في البحر" },
    { id: "SAMPLE_Y2", title: "غروب على اليخت" },
  ],

  aqua: [
    // ===== صور الأكوا بارك =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "SAMPLE_A1", title: "الألعاب المائية" },
    { id: "SAMPLE_A2", title: "المسبح الكبير" },
  ],

  safari: [
    // ===== صور السفاري =====
    // { id: "ID_الصورة", title: "اسم الصورة" },
    { id: "SAMPLE_S1", title: "الكثبان الرملية" },
    { id: "SAMPLE_S2", title: "غروب الصحراء" },
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
  return `https://drive.google.com/uc?export=view&id=${id}`;
}

// صور بديلة للأمثلة
function getPlaceholderImg(id) {
  if (id.includes("B")) return "beaches.png";
  if (id.includes("Y")) return "yacht.png";
  if (id.includes("A")) return "aqua.png";
  if (id.includes("S")) return "safari.png";
  return "hero_bg.png";
}
