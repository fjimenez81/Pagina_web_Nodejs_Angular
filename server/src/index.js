import app from './app'
import './db_Users'
import './db_Products'


app.listen(app.get('port'))
console.log('server on port:', app.get('port'))