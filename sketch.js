const cursor = document.querySelector('.cursor'); // Klasse 'cursor' auswählen

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'; // X-Position aktualisieren
  cursor.style.top = e.clientY + 'px';  // Y-Position aktualisieren
});

document.addEventListener('mousemove', (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`); // Koordinaten prüfen
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });