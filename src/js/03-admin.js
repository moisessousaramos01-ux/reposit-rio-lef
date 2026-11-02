export function initAdmin() {
  if (localStorage.getItem('lef_admin') !== 'true') {
    alert('Sem acesso!');
    window.location.reload();
    return;
  }

  const app = document.getElementById('app');
  app.style.alignItems = 'flex-start';
  document.body.style.display = 'block';
  document.body.style.height = 'auto';

  app.innerHTML = `
    <div style="max-width:1000px;margin:0 auto;padding:20px;text-align:left">
      <header style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #ffcc00;padding-bottom:15px;margin-bottom:20px">
        <h1 style="font-size:20px">PAINEL ADM - LEF <span style="color:#ffcc00">ID 1907</span></h1>
        <button id="logout" style="padding:8px 12px;background:#333;color:#fff;border:none;border-radius:6px;cursor:pointer">Sair</button>
      </header>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px">
        <div class="modal-box" style="width:100%;text-align:center">
          <b>💰 Caixa Times</b><br><br>
          <button class="btn-yellow" onclick="import('./04-caixa-times.js').then(m=>m.openCaixa())">Abrir</button>
        </div>
        <div class="modal-box" style="width:100%;text-align:center">
          <b>🏢 Empresas</b><br><br>
          <button class="btn-yellow" onclick="import('./05-empresas.js').then(m=>m.openEmpresas())">Abrir</button>
        </div>
        <div class="modal-box" style="width:100%;text-align:center">
          <b>⚽ Jogadores</b><br><br>
          <button class="btn-yellow" onclick="import('./06-jogadores.js').then(m=>m.openJogadores())">Abrir</button>
        </div>
        <div class="modal-box" style="width:100%;text-align:center">
          <b>🏆 Ranking LEC</b><br><br>
          <button class="btn-yellow" onclick="import('./07-ranking.js').then(m=>m.openRanking())">Abrir</button>
        </div>
      </div>

      <div id="admin-content" style="margin-top:25px"></div>
    </div>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.removeItem('lef_admin');
    window.location.reload();
  };
}
