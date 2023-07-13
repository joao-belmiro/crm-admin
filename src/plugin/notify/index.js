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
      const notification = document.createElement('div')
      console.log(data)
      notification.style.backgroundColor = data.color
      notification.classList.add('fade-in')
      notification.classList.add('notification', 'notification-border')
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
      wrapperNotify.appendChild(notification)
      console.log(notification)
      buttton.addEventListener('click', () => {
        removeChild(wrapperNotify, notification)
      })
      setTimeout(() => {
        notification.classList.add('active')
      }, 100)
      setTimeout(() => {
        const hasNotifications = wrapperNotify.childNodes.length
        if (hasNotifications > 0) wrapperNotify.removeChild(notification)
      }, data.duration)
    }
  }
}
export default NotificationPlugin
