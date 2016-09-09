const React = require('react');
const { PropTypes } = React;

function MainHTML(props) {
  const { data, options, scripts, styles } = props;
  const clientScript = options.dev ? 'http://localhost:8080/dist/app.js' : 'assets/app.js';
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{ options.reportPageTitle }</title>
        { options.inlineAssets
          ? <style dangerouslySetInnerHTML={ { __html: styles } } />
          : <link rel='stylesheet' href='assets/app.css' /> }
      </head>
      <body data-raw={ data } data-config={ JSON.stringify(options) }>
        <div id='report'></div>
        { options.inlineAssets
          ? <script type='text/javascript' dangerouslySetInnerHTML={ { __html: scripts } } />
          : <script src={ clientScript }></script> }
      </body>
    </html>
  );
}

MainHTML.propTypes = {
  data: PropTypes.string,
  options: PropTypes.object,
  scripts: PropTypes.string,
  styles: PropTypes.string
};

module.exports = MainHTML;
