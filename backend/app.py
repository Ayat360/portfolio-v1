from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)

# CONFIG EMAIL (USE GMAIL OR ANY SMTP)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("EMAIL_USER")
app.config['MAIL_PASSWORD'] = os.getenv("EMAIL_PASS")

mail = Mail(app)

@app.route("/api/contact", methods=["POST"])
def contact():

    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "All fields required"}), 400

    msg = Message(
        subject=f"New Portfolio Message from {name}",
        sender=app.config['MAIL_USERNAME'],
        recipients=[app.config['MAIL_USERNAME']],
        body=f"""
Name: {name}
Email: {email}

Message:
{message}
"""
    )

    mail.send(msg)

    return jsonify({"success": True, "message": "Message sent successfully!"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)