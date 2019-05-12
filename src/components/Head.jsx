import { h } from 'hyperapp'

export default ({name, pageName, description}) => {
  return (
    <head>
      <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />
      <title>{pageName ? pageName + ' - ' : ''} {name} Dashboard</title>

      { /* Add to homescreen for Chrome on Android */ }
      <meta name='mobile-web-app-capable' content='yes' />
      <link rel='icon' sizes='192x192' href='./src/template/images/android-desktop.png' />

      { /* Add to homescreen for Safari on iOS */ }
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta name='apple-mobile-web-app-title' content='Material Design Lite' />
      <link rel='apple-touch-icon-precomposed' href='./src/template/images/ios-desktop.png' />

      { /* Tile icon for Win8 (144x144 + tile color) */ }
      <meta name='msapplication-TileImage' content='./src/template/images/touch/ms-touch-icon-144x144-precomposed.png' />
      <meta name='msapplication-TileColor' content='#3372DF' />

      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      <link rel='stylesheet' href='https://code.getmdl.io/1.3.0/material.blue_grey-red.min.css' />

      <link rel='stylesheet' href='./src/template/styles.css' />

      <link rel="stylesheet" href="/bundle.css" />

    </head>
  )
}
