let express = require('express');
let router = express.Router();

// 你的路由代码，如：/
router.get('/', (req, res) => {
    // 路由处理的逻辑
    res.send('Hello World!');
});

module.exports = router;
