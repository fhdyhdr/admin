document.addEventListener("DOMContentLoaded", function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var root = document.documentElement;
  
    if (isMobile) {
      root.style.setProperty("--device", "mobile");
    } else {
      root.style.setProperty("--device", "desktop");
    }
  });






const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 92) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);


$(function() {
    Popup.init();
});


var Popup = {
    init: function() {
        this.nav();
        this.close();
    },

    nav: function() {
        this.toggle();
    },

    toggle: function() {
        $(".popup-bar").on("touchstart click", function(e) {
            e.preventDefault();
            $(".popup").show(); // Menampilkan popup
            $(".popup").toggleClass("active");
            $(".popup .popup-overlay").removeClass("fadeOut animated").addClass("fadeIn animated");
        });
        $(".popup .popup-overlay").on("touchstart click", function(e) {
            e.preventDefault();
            Popup.closePopup();
        });
    },

    close: function() {
        $(".popup-close").on("touchstart click", function(e) {
            e.preventDefault();
            Popup.closePopup();
        });
    },

    closePopup: function() {
        $(".popup").removeClass("active");
        $(".popup .popup-overlay").removeClass("fadeIn").addClass("fadeOut");
        // Optionally hide the popup after animation
        setTimeout(function() {
            $(".popup").hide();
        }, 300); // Match the transition duration
    }
    
};


function canceldelete() {
  Popup.closePopup(); // Memanggil fungsi untuk menutup popup
}


function showhomeedit3() {
    // Tampilkan popup
    $(".homeedit3").show(); // Tampilkan elemen popup
    $(".homeedit3").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
    $(".homeedit3 .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function showhomeedit1() {
  // Tampilkan popup
  $(".homeedit1").show(); // Tampilkan elemen popup
  $(".homeedit1").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".homeedit1 .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
  
}

function showhomeedit2() {
  // Tampilkan popup
  $(".homeedit2").show(); // Tampilkan elemen popup
  $(".homeedit2").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".homeedit2 .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function showhomeedit_artikel() {
  // Tampilkan popup
  $(".edit_artikel").show(); // Tampilkan elemen popup
  $(".edit_artikel").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".edit_artikel .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}

function showhomehapus_artikel() {
  // Tampilkan popup
  $(".hapus_artikel").show(); // Tampilkan elemen popup
  $(".hapus_artikel").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".hapus_artikel .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function showhometambah_artikel() {
  // Tampilkan popup
  $(".tambah_artikel").show(); // Tampilkan elemen popup
  $(".tambah_artikel").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".tambah_artikel .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function showhomeedit_contact() {
  // Tampilkan popup
  $(".edit_contact").show(); // Tampilkan elemen popup
  $(".edit_contact").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".edit_contact .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}



function edithome3(){
    showhomeedit3();
}

function edithome1(){
  showhomeedit1();
}

function edithome2() {
  showhomeedit2();
}

function edit_artikel(){
  showhomeedit_artikel();
}

function hapus_artikel(){
  showhomehapus_artikel();
}


function tambah_artikel(){
  showhometambah_artikel();
}

function edit_kontak(){
  showhomeedit_contact();
}




const select = document.getElementById('selectOption');

select.addEventListener('focus', function() {
  // Change options when the select is clicked
  select.innerHTML = `
    <option value="" disabled selected>Kamar yang tersedia</option>
    <option value="option1">Kamar 1</option>
    <option value="option2">Kamar 2</option>
    <option value="option3">Kamar 3</option>
  `;
});

select.addEventListener('change', function() {
  // Ensure the placeholder is no longer selected
  if (this.value) {
    this.options[0].disabled = true; // Disable the placeholder
  }
});


function toggleBar() {
  const leftbar = document.getElementById("leftbar");
  const overlay = document.getElementById("overlay");

  // Cek status leftbar berdasarkan transformasi CSS
  if (leftbar.style.transform === "translateX(200px)") {
    // Jika leftbar terbuka, tutup
    leftbar.style.transform = "translateX(0)";
    overlay.classList.remove("active");
  } else {
    // Jika leftbar tertutup, buka
    leftbar.style.transform = "translateX(200px)";
    overlay.classList.add("active");
  }
}


function closebar() {
  // Hide the leftbar by sliding it back
  document.getElementById("leftbar").style.transform = "translateX(0)";
  // Hide the overlay
  document.getElementById("overlay").classList.remove("active");
}
