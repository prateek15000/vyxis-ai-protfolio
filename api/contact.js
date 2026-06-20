export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, organization, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Telegram is not configured" });
  }

  const telegramMessage = [
    "New vyxis.ai contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Service: ${service || "Not provided"}`,
    "",
    `Message: ${message}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
      }),
    }
  );

  if (!response.ok) {
    return res.status(502).json({ error: "Telegram request failed" });
  }

  return res.status(200).json({ ok: true });
}
