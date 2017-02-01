(function () {
  if (Framework7.prototype.device.ios) {
    Dom7('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">' +
        '<link rel="stylesheet" href="css/styles.css">'
        );
    Dom7('body').addClass('ios');
  }
  else {
    // Default to Material
    Dom7('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">' +
        '<link rel="stylesheet" href="css/styles.css">'
        );
    Dom7('body').addClass('material');
  }
})();

