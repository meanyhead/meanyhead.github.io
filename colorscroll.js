const backColors = ['#dead6f', '#e3ab71', '#e7a974', '#eca777', '#efa57b', '#f3a37f', '#f6a184', '#f89f88', '#fb9d8f', '#fd9c95', '#fe9b9c', '#fe9aa3', '#fd99ab', '#fc99b2', '#fa99ba', '#f79ac1', '#f39bc9', '#ee9dd0', '#e89ed7', '#e2a0dd', '#dba3e4', '#d4a5e8', '#cda7ed', '#c5a9f1', '#bfabf4', '#b8adf6', '#b1aff8', '#aab0fa', '#a2b2fc', '#9bb4fd', '#91b6fe', '#86b8ff', '#7cbaff', '#6fbdfe', '#61bffd', '#51c1fa', '#41c3f6', '#2ec5f0', '#1bc6ea', '#0cc8e3', '#0ac8dc', '#16c9d4', '#23c9cd', '#2fcac5', '#3bcabe', '#47c9b6', '#52c9ae', '#5dc9a7', '#67c89f', '#71c798', '#7ac691', '#84c58b', '#8dc484', '#95c27f', '#9ec17a', '#a6bf76', '#afbd72', '#b5bb70', '#bcba6e', '#c2b86d', '#c8b66c', '#ceb46c', '#d4b26c', '#d9af6d']
const foreColors = ['#181b0b', '#191b0b', '#1a1a0a', '#1b1a09', '#1d1a09', '#1d1909', '#1e1908', '#1f1909', '#201809', '#211809', '#22180a', '#23170b', '#24170b', '#24170c', '#25160e', '#25160f', '#261510', '#261512', '#271513', '#271515', '#271417', '#261418', '#26141a', '#25151c', '#24151d', '#23151f', '#221520', '#211621', '#201622', '#1f1723', '#1d1724', '#1c1724', '#1a1825', '#191825', '#181826', '#161926', '#151926', '#141927', '#121a27', '#111a27', '#0f1a27', '#0d1b27', '#0c1b26', '#0a1b26', '#081c26', '#061c25', '#051c24', '#041c23', '#031d22', '#031d21', '#031d1f', '#031d1e', '#041d1c', '#051d1b', '#071d19', '#081d17', '#0a1d16', '#0c1d14', '#0e1d13', '#101c11', '#121c10', '#141c0f', '#151c0d', '#161b0c']

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