// CloudFront Function (viewer request, runtime cloudfront-js-2.0).
// 1. www.franklinalonso.dev redirige (301) al dominio sin www, conservando ruta y query.
// 2. S3 detrás de CloudFront no resuelve index.html en subcarpetas:
//    /changelog y /changelog/ deben servir /changelog/index.html.
function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;

  if (host && host.indexOf('www.') === 0) {
    var qs = Object.keys(request.querystring)
      .map(function (k) {
        var v = request.querystring[k];
        return v.value === '' ? k : k + '=' + v.value;
      })
      .join('&');
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: 'https://' + host.slice(4) + request.uri + (qs ? '?' + qs : '') } },
    };
  }

  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
