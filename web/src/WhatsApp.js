(function () {
  "use strict";

  // TODO: reemplazar con el número real de WhatsApp del negocio (formato 52XXXXXXXXXX, sin + ni espacios)
  var WHATSAPP_NUMBER = "52XXXXXXXXXX";

  function buildWhatsAppLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function wireWhatsAppButtons() {
    var buttons = document.querySelectorAll("[data-wa-message]");
    buttons.forEach(function (btn) {
      btn.setAttribute("href", buildWhatsAppLink(btn.getAttribute("data-wa-message")));
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    });
  }

  document.addEventListener("DOMContentLoaded", wireWhatsAppButtons);
})();
