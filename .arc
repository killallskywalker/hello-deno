@app
begin-app

@http
get /
get /user

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
