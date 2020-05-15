@app
begin-app

@http
get /
get /user
post /user

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
