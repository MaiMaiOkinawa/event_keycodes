const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  // The space key is an empty strings so you want to add a text
  insert.innerHTML = `
  <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
        ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
        ${event.code}
            <small>keyA event.code</small>
        </div>

  ` // ` ` puts the dinamic values
})