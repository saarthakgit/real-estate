import { NextResponse } from "next/server";

export async function POST(request : Request){
    try {
       const body = await request.json()
       const {message} = body
       
       const botToken = process.env.TELEGRAM_BOT_TOKEN
       const chatId = process.env.TELEGRAM_CHAT_ID

       const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

       const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message, // The actual text you want to send
        parse_mode: 'Markdown', // Optional: lets you use bold/italics
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      console.error("Telegram Error:", errorData);
      return NextResponse.json({ success: false, error: "Telegram refused" }, { status: 500 });
    }

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ success: false, error: "Server crashed" }, { status: 500 });
  }
}
