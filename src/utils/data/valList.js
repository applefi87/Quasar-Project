export default {
  account: [
    val => (val && val.length >= 6 && val.length <= 30) || '長度需介於6~30字之間',
    val => (/^[a-zA-Z0-9]+$/).test(val) || '只能輸入英文與數字'
  ],
  password: [
    val => (val && val.length >= 8 && val.length <= 40) || '長度需介於8~40字之間',
    val => ((/[a-z]/).test(val) && (/[0-9]/).test(val)) || '必須含英文與數字'
  ],
  nickName: [
    val => (val && val.length >= 6 && val.length <= 30) || '長度需介於6~30字之間',
    val => (!['owner', 'you', 'youHide', 'admin'].includes(val)) || '該暱稱不可使用',
    val => true || '預留給有同名使用'
  ],
  tenCode: [
    val => (val.length === 10 && ((/[a-zA-Z]/).test(val) && (/[0-9]/).test(val))) || '為十位英數'
  ],
  mail: (isSchool) => {
    const rule = [
      val => (val !== null && val !== '') || 'Please type your email',
      val => val.length <= 60 || '必須 60 個字以下'
    ]
    if (isSchool) {
      rule.push(
        // @後方必須含 .edu.
        // val => val.match(/^[a-z0-9]+@[a-z0-9\.]+\.edu\.[a-z0-9\.]+$/) || '格式錯誤/必須為學校信箱')
        // 初期限制要有".edu.tw"結尾才行
        // eslint-disable-next-line no-useless-escape
        val => (/^[a-z0-9]+@[a-z0-9\.]+\.edu\.tw$/).test(val) || '格式錯誤，僅可含英小寫、數、@、./必須為學校信箱')
    } else {
      rule.push(
        // eslint-disable-next-line no-useless-escape
        val => (/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9\.]+$/).test(val) || '格式錯誤，僅可含英小寫、數、@、.'
      )
    }
    return rule
  }
}
