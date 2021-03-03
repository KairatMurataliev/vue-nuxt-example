export default function (context) {
  console.log(context.store)
  console.log(context.app.$cookies.get('user'))
  // context.store.dispatch('addUser', context.app.context.app.$cookies.get('user'))
  // if (!context.app.context.app.$cookies.get('user')) {
  //   return context.redirect('/login')
  // }
}
