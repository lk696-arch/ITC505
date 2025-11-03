const express = require('express')
const logger = require('morgan')
const path = require('path')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/ITC505/lab-7/index.html', (req, res) => {
  const {
    pluralNoun, adjective, verbPast, place, number, animal
  } = req.body

  if (!pluralNoun || !adjective || !verbPast || !place || !number || !animal) {
    res.status(200).send(`
      <h1>Submission Failed</h1>
      <p>Please fill out <strong>all</strong> fields.</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `)
    return
  }

  const madLib = `
    Once upon a time in ${place}, a group of ${pluralNoun} ${verbPast} through a
    ${adjective} market. After exactly ${Number(number)} minutes, a tiny ${animal}
    leapt from a cart and declared, “This story is now complete!” Everyone cheered,
    promised never to forget the ${adjective} lesson, and went home smiling.
  `.replace(/\s+/g, ' ').trim()

  res.status(200).send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Mad Lib Result</title>
      <style>
        body { font-family: system-ui, Arial, sans-serif; margin: 2rem; line-height: 1.6; }
        .card { max-width: 720px; margin-inline: auto; padding: 1.5rem; border: 1px solid #ddd; border-radius: 12px; }
        h1 { margin-top: 0; }
        a.button { display: inline-block; margin-top: 1rem; padding: .6rem 1rem; border-radius: 8px; border: 1px solid #ccc; text-decoration: none; }
        p.madlib { font-size: 1.1rem; }
        footer { margin-top: 2rem; font-size: .9rem; color: #555; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Submission Successful ✅</h1>
        <p class="madlib">${madLib}</p>
        <a class="button" href="/ITC505/lab-7/index.html">Go Back to Form</a>
      </div>

      <footer>
        <p>Last updated:
          <span id="lastModified"></span>
        </p>
      </footer>
      <script type="text/javascript">
        var x = document.lastModified;
        document.getElementById('lastModified').textContent = x;
      </script>
    </body>
    </html>
  `)
})

const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log(`Ready on localhost:${port}!`))
