// CloudFront Function (viewer request, runtime cloudfront-js-2.0).
// S3 detrás de CloudFront no resuelve index.html en subcarpetas:
// /changelog y /changelog/ deben servir /changelog/index.html.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
