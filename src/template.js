export default ({ body}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        
      </head>
      
      <body>
        <div id="app">${body}</div>
      </body>
    
    </html>
  `;
};