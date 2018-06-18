const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send("hello");
// })

// serving in production


if (process.env.NODE_ENV === 'production') {
    // express --> serve production assets from the build file
    app.use(express.static('client/build'));

    // express --> serve index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
// } else {
//     app.get('/*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'), function(err) {
//           if (err) {
//             res.status(500).send(err)
//           }
//         })
//       });
// }
const PORT = process.env.PORT || 3001;
app.listen(PORT);


    // "name": "example-create-react-app-express",