import './style.css'
const NotificationPlugin = {
  install (Vue) {
    const wrapperNotify = document.createElement('div')
    wrapperNotify.classList.add('notification-wrapper')
    document.body.appendChild(wrapperNotify)
    const removeChild = (wrapperNotify, notification) => {
      wrapperNotify.removeChild(notification)
    }
    Vue.prototype.$notify = function (data) {
      const buttton = document.createElement('button')
      buttton.classList.add('bt-close')
      const i = document.createElement('i')

      i.classList.add('icon-close')
      i.innerHTML = '&#10005;'
      buttton.appendChild(i)
      const progress = document.createElement('progress')
      progress.classList.add('progress-bar')
      progress.setAttribute('value', data.duration)
      progress.setAttribute('max', data.duration)
      const notification = document.createElement('div')
      notification.style.backgroundColor = data.color
      notification.classList.add('fade-in')
      notification.classList.add('notification', 'notification-border')
      const noteId = `n-${wrapperNotify.childNodes.length}`
      notification.id = noteId
      if (data.icon) {
        const classes = data.icon.split(' ')
        const i = document.createElement('i')
        i.style.fontSize = '24px'
        i.classList.add(...classes)
        notification.appendChild(i)
      }
      const span = document.createElement('span')
      span.textContent = data.message
      notification.appendChild(span)
      notification.appendChild(buttton)
      notification.appendChild(progress)
      wrapperNotify.appendChild(notification)
      const first = parseInt(data.duration.toString()[0])
      setInterval(() => {
        progress.value -= data.duration / (first - 1)
      }, data.duration / first + 1)
      buttton.addEventListener('click', () => {
        removeChild(wrapperNotify, notification)
      })
      setTimeout(() => {
        notification.classList.add('active')
      }, 100)
      setTimeout(() => {
        const existNotefication = wrapperNotify.querySelector(`#${noteId}`)
        const hasNotifications = wrapperNotify.childNodes.length
        if (hasNotifications > 0 && existNotefication !== null) wrapperNotify.removeChild(notification)
      }, data.duration)
    }
  }
}
export default NotificationPlugin
