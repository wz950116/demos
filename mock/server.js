let express = require('express')
let Mock = require('mockjs')
let app = express()

app.all('/api/demo', (req, res) => {
    let data = Mock.mock({
        'code': 200,
        'message': 'success',
        'data': {
            'list|5-10': [{     // 随机返回一个包含5到10个对象的数组
                'num|0-100': 0, // 随机返回一个0到100的整数
                'name': function() { // 随机返回一个姓名
                    return Mock.mock('@cname')
                },
                'date': function() { // 随机返回一个指定格式的日期
                    return Mock.Random.date('yyyy-MM-dd')
                }
            }],
            'img': Mock.Random.image('450x400', '#50B347', '#FFF', 'Hello!Mock.js!')
            // 返回指定尺寸、颜色和文字的一张图
        }
    })
    res.json(data)
})
let server = app.listen(9999, () => {
    let port = server.address().port
    console.log('server running successfully...')
    console.log(`server listening at http://localhost:${port}`)
})