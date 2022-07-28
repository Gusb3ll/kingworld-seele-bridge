import app from './app'

app.listen(+process.env.PORT! || 8080)
console.info(`Server started at http://localhost:${+process.env.PORT! || 8080} 🐍`)
