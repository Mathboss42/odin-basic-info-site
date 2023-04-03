const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use((req, res) => {
    const view = getView(req.originalUrl);

    if (view) {
        res.render(view);
    } else {
        res.status(404).render('404');
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})


function getView(url) {
    switch (url) {
        case '/':
            return 'index.ejs';
        case '/about':
            return 'about.ejs';
        case '/contact-me':
            return 'contact-me.ejs';
    }
}