export function htmlContent(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  
  <body>
  <div id="time>${data}</div>
  </body>
  <script>
  
    setInterval(() => {
      const time = doscument.getElementById("time")
      time.innerHTML = momentFormat("h:mm:ss A")
    }, 1000)
  
  </script>
  
  </html>`;
}
