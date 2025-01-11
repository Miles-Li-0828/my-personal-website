import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required." }), {
            status: 400,
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: "Message sent successfully!" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send message. Please try again later." }), {
            status: 500,
        });
    }
}
