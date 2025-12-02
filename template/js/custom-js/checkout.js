/* global storefront */

;(function () {
  function aplicarTermoAceite () {
    const checkoutBtn = document.querySelector('.cart__btn-checkout')
    if (!checkoutBtn) return

    // força bloqueio
    checkoutBtn.classList.add('disabled')
    checkoutBtn.disabled = true

    // adiciona checkbox se não existe
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

    // intercepta clique no botão
    checkoutBtn.addEventListener('click', function (e) {
      const check = document.querySelector('#aceite-termos')
      if (!check || !check.checked) {
        e.preventDefault()
        e.stopPropagation()
        checkoutBtn.disabled = true
        checkoutBtn.classList.add('disabled')
        alert('Você precisa aceitar os Termos de Uso antes de continuar')
        return false
      }
    })
  }

  // reinjeta quando o checkout atualiza via JS
  const observer = new MutationObserver(() => {
    aplicarTermoAceite()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

  // execução inicial
  document.addEventListener('DOMContentLoaded', aplicarTermoAceite)
})()
