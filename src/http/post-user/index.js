let data = require('@begin/data')
let arc = require('@architect/functions') // Reads & writes session data
let parseBody = arc.http.helpers.bodyParser
exports.handler = async function http (req) {
  let headers = {'Content-Type': 'application/json; charset=utf8'}
  let body = parseBody(req) // Pass the entire request object
  if (!body.name && !body.title ) {
    return {
      statusCode: 204,
      headers,
      body: JSON.stringify({ok: false})
    }
  }
  else {
    let table = 'jedi_order'
    let jediName = body.name
    let rank = body.rank
    await data.set({table,  jediName, rank })
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ok: true})
    }
  }
}