export function initWelcome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>LIGA EUROPEIA INDIVIDUAL - <span id="lef-trigger">LEF</span></h1>
    <p style="color:#888;margin-top:15px;font-size:14px">Toque 3x em LEF para acesso ADM</p>
    <div style="margin-top:40px;color:#555">
      <p>Site público carregando...</p>
    </div>
  `;
}
