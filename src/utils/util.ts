/**
 * copy fun
 * @param content
 */
export function copy(content: string) {
  return new Promise(resolve => {
    let copyInput = document.createElement('textarea')
    copyInput.value = content
    copyInput.setAttribute('id', 'b-copy-temp')
    document.body.appendChild(copyInput)
    copyInput.select() // 选择对象
    let result = document.execCommand('Copy') // 执行浏览器复制命令
    copyInput.style.display = 'none'
    document.body.removeChild(document.getElementById('b-copy-temp'))
    resolve(result)
  })
}
