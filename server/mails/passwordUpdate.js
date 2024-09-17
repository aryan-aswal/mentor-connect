exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
    
            .logo {
                max-width: 150px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #2c3e50;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .highlight {
                font-weight: bold;
                color: #e74c3c;
            }
    
            .support {
                font-size: 14px;
                color: #7f8c8d;
                margin-top: 20px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://mentorconnect.com"><img class="logo" 
                src="https://i.ibb.co/qkJv7YF/mentor-connect-logo.png" alt="Mentor Connect Logo"></a>
            <div class="message">Password Update Confirmation</div>
            <div class="body">
                <p>Hi ${name},</p>
                <p>Your password has been successfully updated for the email 
                <span class="highlight">${email}</span>.</p>
                <p>If you did not initiate this change, please contact us immediately to secure your account.</p>
            </div>
            <div class="support">Need assistance? Reach out to us at 
                <a href="mailto:support@mentorconnect.com">support@mentorconnect.com</a>. We're happy to help!
            </div>
        </div>
    </body>
    
    </html>`;
};
