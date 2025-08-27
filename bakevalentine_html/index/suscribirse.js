// Debug: confirmá que cargó
console.log("suscribirse.js cargado");

// Esperá a que exista el DOM (por si lo pusiste en <head> con defer)
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const btnSuscribir = document.getElementById("btn-suscribir");
  const mensaje = document.getElementById("mensaje");

  const mostrar = (txt, color) => {
    mensaje.textContent = txt;
    mensaje.style.color = color;
  };

  // Click en el botón
  btnSuscribir.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!email) {
      mostrar("⚠️ Escribí tu correo.", "#f1c40f");
      return;
    }

    // Validación simple de email
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      mostrar("❌ Correo inválido.", "#e74c3c");
      return;
    }

    mostrar(`✅ ¡Gracias por suscribirte, ${email}!`, "#2ecc71");
    emailInput.value = "";
  });

  // Enter también funciona
  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnSuscribir.click();
  });
});
