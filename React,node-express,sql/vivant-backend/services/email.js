const SENDGRID_API_KEY = "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"
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
exports.contact = (user) => {
    const msg = {
        to: ['vamsi92krishna@gmail.com'],
        from: 'info@cloprosys.com',
        subject: 'Cloprosys Notification',
        html: ` <!DOCTYPE html>
        <html>
        <head>
        <style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        th, td {
          padding: 5px;
          text-align: left;    
        }
        </style>
        </head>
        <body>
        
        <p>Hi</p>
        <p>You got one contact</p>
        
        <table style="width:100%">
          <tr>
          ${Object.keys(user).map(x => {
            return `<th>${x}</th>`
        }).join("")}
   
            
          </tr>
          <tr>
          ${Object.keys(user).map(x => {
            return `<td>${user[x]}</td>`
        }).join("")}
          </tr>
        </table>            
        </body>
        </html>`
    }
    sgMail
        .send(msg)
        .then((resp) => {
            console.log("mail sent")
        }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });

}

exports.faculty = (user) => {
    const msg = {
        to: ['vamsi92krishna@gmail.com'],
        from: 'info@cloprosys.com',
        subject: 'Cloprosys Notification',
        html: ` <!DOCTYPE html>
        <html>
        <head>
        <style>
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        th, td {
          padding: 5px;
          text-align: left;    
        }
        </style>
        </head>
        <body>
        
        <p>Hi</p>
        <p>You got one faculty contact</p>
        
        <table style="width:100%">
          <tr>
          ${Object.keys(user).map(x => {
            return `<th>${x}</th>`
        }).join("")}
   
            
          </tr>
          <tr>
          ${Object.keys(user).map(x => {
            return `<td>${user[x]}</td>`
        }).join("")}
          </tr>
        </table>            
        </body>
        </html>`
    }
    sgMail
        .send(msg)
        .then((resp) => {
            console.log("mail sent")
        }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });

}