// Add your custom JavaScript for checkout here.
storefront.on('widget:@ecomplus/widget-tag-manager', function () {

  const btn = document.querySelector('.cart__btn-checkout')
  btn.classList.add('disabled')

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

  document.querySelector('#input-confirm-checkout').addEventListener('change', function () {
    if (this.checked) {
      btn.classList.remove('disabled')
    } else {
      btn.classList.add('disabled')
    }
  })

})

