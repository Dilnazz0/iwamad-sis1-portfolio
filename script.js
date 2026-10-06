const html = document.documentElement
const themeBtn = document.getElementById('theme-toggle')

themeBtn.addEventListener('click', () => {
  const isDark = html.dataset.theme === 'dark'
  const next = isDark ? 'light' : 'dark'

  html.dataset.theme = next
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙'
})

const form = document.getElementById('contact-form')
const status = document.getElementById('form-status')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = form.name.value.trim()
  const email = form.email.value.trim()
  const message = form.message.value.trim()

  status.className = 'form-status'

  if (!name) {
    status.textContent = 'Please enter your name !'
    status.classList.add('error')
    return
  }

  if (!email) {
    status.textContent = 'Please enter your email !'
    status.classList.add('error')
    return
  }

  if (!email.includes('@') || !email.includes('.')) {
    status.textContent = 'That email address looks invalid :('
    status.classList.add('error')
    return
  }

  if (!message) {
    status.textContent = 'Please write a short message !'
    status.classList.add('error')
    return
  }

  status.textContent = 'Thanks! Your message has been recorded :)'
  status.classList.add('success')
  form.reset()
})