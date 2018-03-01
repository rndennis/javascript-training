$(document).ready(() => {
  let helloCount = 0;
  let goodbyeCount = 0;

  $('#hello').click(event => {
    $('#helloCount').attr('data-badge', ++helloCount);
  });

  $('#goodbye').click(event => {
    $('#goodbyeCount').attr('data-badge', ++goodbyeCount);
  });
});
