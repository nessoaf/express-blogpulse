var db = require('./models')

db.comment.create({
    name: 'Paul Allen',
    content: 'This is really neat! Thanks for posting.',
    articleId: 1
})
    .then(function (comment) {
        console.log(comment.get())
    })