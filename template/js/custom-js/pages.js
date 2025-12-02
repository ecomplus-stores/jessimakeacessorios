/* global storefront, $ */

storefront.on('widget:@ecomplus/widget-product.fetched', function () {
  // exemplo de callback existente, mantido
})

// ====================================
// TERMO DE ACEITE PARA FINALIZAR COMPRA
// ====================================

window.addEventListener('DOMContentLoaded', function () {

  function aplicarTermoAceite () {
    const checkoutBtn = document.querySelector('.cart__btn-checkout')

    if (!checkoutBtn) {
      return
    }

    // garantir estado inicial
    checkoutBtn.classList.add('disabled')
    checkoutBtn.disabled = true

    // inserir checkbox caso não exista
    if (!document.querySelector('#aceite-termos')) {
      const termoHtml = `
        <div class="termo-aceite" style="margin: 15px 0; font-size: 13px;">
          <label style="cursor: pointer;">
            <input type="checkbox" id="aceite-termos" style="transform: scale(1.3); margin-right: 8px;">
            Eu li e aceito os <a href="/pages/termos-de-aceite" target="_blank" style="text-decoration: underline;">Termos de Uso</a> para continuar comprando
          </label>
        </div>
      `
      const cartContainer = document.querySelector('.cart__summary') || document.querySelector('.cart__body')
      if (cartContainer) {
        cartContainer.insertAdjacentHTML('beforeend', termoHtml)
      }
    }

    const checkbox = document.querySelector('#aceite-termos')

    // garantir bloqueio correto
    if (checkbox) {
      checkbox.addEventListener('change', function () {
        checkoutBtn.disabled = !checkbox.checked
        checkoutBtn.classList.toggle('disabled', !checkbox.checked)
      })
    }
  }

  // executa ao carregar página
  aplicarTermoAceite()

  // executa novamente quando o carrinho re-renderizar
  document.addEventListener('DOMNodeInserted', function () {
    aplicarTermoAceite()
  })
})
