

    // وظيفة لتحريك العناصر
    function showElements() {
        const sections = document.querySelectorAll('.story, .character, .battle-details, .hashira-details, .era-details, .about_me');
        sections.forEach(section => section.classList.add('show')); // إظهار العناصر

        const battleItems = document.querySelectorAll('.battle-item, .character-item, .hashira-item, .kit-arduino-item, .me-item');
        battleItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show'); // إظهار عناصر المعارك بتأخير
            }, index * 200); // تأخير لزيادة الحركة
        });
    }

    // استدعاء الوظيفة عند تحميل الصفحة
    window.onload = showElements;




// وظيفة البحث


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const query = document.getElementById('search-input').value.toLowerCase();
    
    const sections = document.querySelectorAll('.story, .character-item, .battle-item, .hashira-item, .kit-arduino-item , .me-item , .me-title');
    
    sections.forEach(section => {
        const textContent = section.textContent.toLowerCase();
        if (textContent.includes(query) && query !== '') {
            section.style.display = 'block'; // إظهار القسم إذا كان يحتوي على النص
            highlightText(section, query); // إبراز النص الموجود
        } else if (query === '') {
            section.style.display = 'block'; // عرض القسم إذا كان البحث فارغًا
            removeHighlight(section); // إزالة التلوين إذا كان الحقل فارغًا
        } else {
            section.style.display = 'none'; // إخفاء القسم إذا لم يحتوي على النص
        }
    });
});

// دالة لإبراز النص المدخل
function highlightText(section, query) {
    // احتفظ بالمحتوى الداخلي للصور واستبدل فقط النصوص المطابقة
    section.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const innerText = node.textContent;
            const regex = new RegExp(`(${query})`, 'gi');
            const highlightedText = innerText.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            node.replaceWith(span);
        }
    });
}

    // دالة لإبراز النص المدخل
    function highlightText(section, query) {
        const innerHTML = section.innerHTML;
        const regex = new RegExp(`(${query})`, 'gi');
        section.innerHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>'); // إبراز النص
    }

// زر إعادة تعيين
document.getElementById('reset-button').addEventListener('click', function() {
    const sections = document.querySelectorAll('.story, .character-item, .battle-item, .hashira-item, .kit-arduino-item, .me-item, .me-title');
    sections.forEach(section => {
        section.style.display = 'block'; // عرض جميع الأقسام
        removeHighlight(section); // إزالة التلوين
    });
    document.getElementById('search-input').value = ''; // مسح مربع البحث
});

// دالة لإزالة التلوين
function removeHighlight(section) {
    section.innerHTML = section.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1'); // إزالة التلوين
}

function copyCode1() {
    // تحديد الكود لنسخه
    const code = document.getElementById("code-block").innerText;

    // إنشاء كائن مؤقت لتخزين النص
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);

    // تحديد ونسخ النص
    tempTextArea.select();
    document.execCommand("copy");

    // إزالة كائن textarea المؤقت
    document.body.removeChild(tempTextArea);

    // تغيير نص الزر لفترة مؤقتة
    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy code"), 2000);
}
function copyCode2() {
    // تحديد الكود لنسخه
    const code = document.getElementById("code-block2").innerText;

    // إنشاء كائن مؤقت لتخزين النص
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);

    // تحديد ونسخ النص
    tempTextArea.select();
    document.execCommand("copy");

    // إزالة كائن textarea المؤقت
    document.body.removeChild(tempTextArea);

    // تغيير نص الزر لفترة مؤقتة
    const copyBtn = document.querySelector(".copy-btn2");
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy code"), 2000);
}
function copyCode3() {
    // تحديد الكود لنسخه
    const code = document.getElementById("code-block3").innerText;

    // إنشاء كائن مؤقت لتخزين النص
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);

    // تحديد ونسخ النص
    tempTextArea.select();
    document.execCommand("copy");

    // إزالة كائن textarea المؤقت
    document.body.removeChild(tempTextArea);

    // تغيير نص الزر لفترة مؤقتة
    const copyBtn = document.querySelector(".copy-btn3");
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy code"), 2000);
}
function copyCode4() {
    // تحديد الكود لنسخه
    const code = document.getElementById("code-block4").innerText;

    // إنشاء كائن مؤقت لتخزين النص
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);

    // تحديد ونسخ النص
    tempTextArea.select();
    document.execCommand("copy");

    // إزالة كائن textarea المؤقت
    document.body.removeChild(tempTextArea);

    // تغيير نص الزر لفترة مؤقتة
    const copyBtn = document.querySelector(".copy-btn4");
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy code"), 2000);
}
function copyCode5() {
    // تحديد الكود لنسخه
    const code = document.getElementById("code-block5").innerText;

    // إنشاء كائن مؤقت لتخزين النص
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);

    // تحديد ونسخ النص
    tempTextArea.select();
    document.execCommand("copy");

    // إزالة كائن textarea المؤقت
    document.body.removeChild(tempTextArea);

    // تغيير نص الزر لفترة مؤقتة
    const copyBtn = document.querySelector(".copy-btn5");
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy code"), 2000);
}

