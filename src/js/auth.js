export function initAuth() {
  let clicks = 0;
  let timer = null;

  document.addEventListener('click', (e) => {
    if (e.target.id !== 'lef-trigger') return;

    clicks++;
    clearTimeout(timer);
    timer = setTimeout(() => { clicks = 0; }, 2000);

    if (clicks === 3) {
      clicks = 0;
      askPassword();
    }
  });
}

function askPassword() {
  showModal('Digite a SENHA', 'password', (valor) => {
    if (valor === 'MMMOISES77') {
      askID();
    } else {
      alert('Senha incorreta!');
    }
  });
}

function askID() {
  showModal('Digite o ID', 'text', (valor) => {
    if (valor === '1907') {
      localStorage.setItem('lef_admin', 'true');
      document.getElementById('app').innerHTML = '<h1>✅ Acesso liberado</h1>';
      import('./03-admin.js').then(m => m.initAdmin());
    } else {
      alert('ID incorreto!');
    }
  });
}

function showModal(titulo, tipo, callback) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-box">
      <h3>${titulo}</h3>
      <input id="input-modal" type="${tipo}" placeholder="${titulo}" autocomplete="off" />
      <button id="btn-ok" class="btn-yellow">ENTRAR</button>
      <button id="btn-close" class="btn-dark">FECHAR</button>
    </div>
  `;
  document.body.appendChild(modal);
  const input = modal.querySelector('#input-modal');
  input.focus();

  modal.querySelector('#btn-ok').onclick = () => {
    callback(input.value.trim());
    modal.remove();
  };
  modal.querySelector('#btn-close').onclick = () => modal.remove();
  modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
}
