const backColors = ['#edd0ae', '#f0ceb0', '#f3cdb1', '#f5ccb3', '#f7cbb5', '#f9cbb7', '#fbcaba', '#fcc9bd', '#fdc8c0', '#fec7c4', '#fec7c8', '#fec6cc', '#fdc6d1', '#fbc7d6', '#f9c7da', '#f6c7df', '#f3c8e4', '#efc9e7', '#eccaeb', '#e8cbee', '#e4ccf0', '#e0cdf3', '#dccef5', '#d9cff6', '#d5d0f8', '#d2d1f9', '#ced2fa', '#cbd3fa', '#c7d4fb', '#c4d4fb', '#c0d6fc', '#bbd7fb', '#b7d8fb', '#b3d9fa', '#afdaf9', '#abdbf8', '#a7dcf5', '#a4ddf2', '#a1deef', '#a0dfeb', '#9fdfe7', '#9fe0e3', '#a0e0de', '#a2e0da', '#a4e0d6', '#a7e0d2', '#aadfce', '#addfca', '#b1dfc6', '#b5dec2', '#b9ddbf', '#bdddbb', '#c2dcb8', '#c6dbb6', '#cadab3', '#ced9b2', '#d2d8b0', '#d6d7af', '#d9d6ae', '#ddd5ad', '#e0d4ad', '#e4d3ad', '#e7d2ad', '#ead1ae']
// const foreColors = ['#4b3821', '#4c3722', '#4e3623', '#503624', '#513526', '#523427', '#533329', '#54332c', '#55322e', '#563131', '#563134', '#563137', '#55313a', '#54313d', '#533140', '#513244', '#4f3247', '#4c3349', '#4a344b', '#47354e', '#44364f', '#423651', '#3f3752', '#3c3853', '#3a3954', '#373955', '#343a55', '#313b56', '#2e3b56', '#2b3c56', '#283c56', '#243d56', '#203e56', '#1c3f55', '#173f55', '#124053', '#0d4052', '#094150', '#05414e', '#03424c', '#034249', '#044246', '#084343', '#0d4340', '#11433c', '#164239', '#1a4236', '#1e4233', '#214231', '#25412e', '#28412c', '#2c4129', '#2f4027', '#323f25', '#353f24', '#373e23', '#3a3e22', '#3c3d21', '#3e3c20', '#413c20', '#423b20', '#443a20', '#463a20', '#483921']
const foreColors = ['#373e23', '#3a3e22', '#3c3d21', '#3e3c20', '#413c20', '#423b20', '#443a20', '#463a20', '#483920', '#4a3821', '#4c3722', '#4d3723', '#4f3624', '#503525', '#523427', '#533429', '#54332b', '#55322d', '#563230', '#563132', '#563135', '#553139', '#55313c', '#53313f', '#523142', '#503245', '#4e3348', '#4b344a', '#48344d', '#46354e', '#433650', '#403751', '#3e3752', '#3c3853', '#393954', '#363955', '#333a55', '#313b56', '#2e3b56', '#2b3c56', '#273d56', '#233d56', '#1f3e56', '#1a3f55', '#154054', '#104053', '#0b4151', '#06414f', '#03424d', '#02424a', '#044247', '#064344', '#0a4341', '#0f433e', '#14433a', '#194237', '#1c4234', '#204232', '#24422f', '#27412c', '#2a412a', '#2e4028', '#314026', '#343f25']

window.addEventListener('scroll', () => {
  const body = document.body
  const html = document.documentElement
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight) - html.clientHeight
  if (height > 0) {
    const y = (window.scrollY || window.pageYOffset) / height
    const bcolor = backColors[Math.round(y * backColors.length)]
    const fcolor = foreColors[Math.round(y * foreColors.length)]
    body.style.backgroundColor = `${bcolor}`
    body.style.color = `${fcolor}`
  }
})