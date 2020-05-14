exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'application/json; charset=utf8'
    },
    body: JSON.stringify({
      message:'Im generating this by adding new @http pragma in .arc',
      name: 'Ben solo',
      age: 30
    })
  }
}