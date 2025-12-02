/* global storefront, ecomCart */

;(function () {
  storefront.on('cart-change', function () {
    console.log('cart changed')
  })

  storefront.on('shipping-freight', function () {
    console.log('shipping recalculated')
  })

  // ==========================================
  // TERMO DE ACEITE - BLOQUEIO DO CHECKOUT
  // ==========================================

  document.addEventListener('DOMContentLoaded', function () {
    function inserirTermo () {
      const checkoutBtn = document.querySelector('.cart__btn-checkout')
      if (!checkoutBtn) {
        return
      }

      checkoutBtn.classList.add('disabled')
      checkoutBtn.disabled = true

      if (!document.querySelector('#aceite-termos')) {
        const termoHtml = `
          <div class="termo-aceite" style="margin: 15px 0; font-size: 13px;">
            <label style="cursor: pointer;">
              <input type="checkbox" id="aceite-termos" style="transform: scale(1.3); margin-right: 8px;">
              Eu li e aceito os <a href="/pages/termos-de-aceite" target="_blank" style="text-decoration: underline;">Termos de Uso</a> para continuar comprando
            </label>
          </div>
        `
        const container =
          document.querySelector('.cart__summary') ||
          document.querySelector('.cart__body') ||
          document.querySelector('.checkout__summary')

        if (container) {
          container.insertAdjacentHTML('beforeend', termoHtml)
        }
      }

      const checkbox = document.querySelector('#aceite-termos')

      if (checkbox) {
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            checkoutBtn.disabled = false
            checkoutBtn.classList.remove('disabled')
          } else {
            checkoutBtn.disabled = true
            checkoutBtn.classList.add('disabled')
          }
        })
      }
    }

    // executa ao carregar página
    inserirTermo()

    // garante reinserção se o carrinho re-renderizar
    document.addEventListener('DOMNodeInserted', function () {
      inserirTermo()
    })
  })
})()
