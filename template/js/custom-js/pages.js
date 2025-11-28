// Add your custom JavaScript for storefront pages here.
storefront.on('widget:@ecomplus/widget-tag-manager', function () {
  // Inserir checkbox antes do botão
  document.querySelector('.cart__btn-checkout').insertAdjacentHTML('beforebegin', `
    <div id="block-confirm" class="form-group">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" id="input-confirm-checkout" class="custom-control-input">
        <label for="input-confirm-checkout" class="custom-control-label">
          Eu li e aceito a
          <a href="/pages/termos-de-aceite" target="_blank">Termos de Uso</a> para continuar comprando
        </label>
      </div>
    </div>
  `)

  // Desabilita o botão até aceitar
  const btn = document.querySelector('.cart__btn-checkout')
  btn.setAttribute('disabled', true)

  // Habilita quando marcado
  document.querySelector('#input-confirm-checkout').addEventListener('change', function () {
    if (this.checked) {
      btn.removeAttribute('disabled')
    } else {
      btn.setAttribute('disabled', true)
    }
  })
})
