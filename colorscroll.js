const colors = ['#edd0ae', '#f0ceb0', '#f3cdb1', '#f5ccb3', '#f7cbb5', '#f9cbb7', '#fbcaba', '#fcc9bd', '#fdc8c0', '#fec7c4', '#fec7c8', '#fec6cc', '#fdc6d1', '#fbc7d6', '#f9c7da', '#f6c7df', '#f3c8e4', '#efc9e7', '#eccaeb', '#e8cbee', '#e4ccf0', '#e0cdf3', '#dccef5', '#d9cff6', '#d5d0f8', '#d2d1f9', '#ced2fa', '#cbd3fa', '#c7d4fb', '#c4d4fb', '#c0d6fc', '#bbd7fb', '#b7d8fb', '#b3d9fa', '#afdaf9', '#abdbf8', '#a7dcf5', '#a4ddf2', '#a1deef', '#a0dfeb', '#9fdfe7', '#9fe0e3', '#a0e0de', '#a2e0da', '#a4e0d6', '#a7e0d2', '#aadfce', '#addfca', '#b1dfc6', '#b5dec2', '#b9ddbf', '#bdddbb', '#c2dcb8', '#c6dbb6', '#cadab3', '#ced9b2', '#d2d8b0', '#d6d7af', '#d9d6ae', '#ddd5ad', '#e0d4ad', '#e4d3ad', '#e7d2ad', '#ead1ae']

window.addEventListener('scroll', () => {
  const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight)
  const y = (window.scrollY || window.pageYOffset) / height
  const colorIndex = Math.round(y * colors.length)
  const colorhex = colors[colorIndex]
  document.body.style.backgroundColor = `${colorhex}`
})