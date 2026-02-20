import { NextResponse } from "next/server";

export async function POST(request : Request){
    try {
       const { name, phone, message, wtspnum , size} = await request.json();
       
       const botToken = process.env.TELEGRAM_BOT_TOKEN
       const chatId = process.env.TELEGRAM_CHAT_ID
       const cleanPhone = phone.replace(/\D/g, '');
      const waLink = `https://wa.me/91${wtspnum}?text=${encodeURIComponent(

      `Hi ${name}, I'm calling from Irish Platinum regarding your inquiry. When is a good time to talk?`

    )}`;
    const calLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Follow up: ${name}`
    )}&details=${encodeURIComponent(`Lead Phone: ${phone}`)}`;
    // const phoneurl = `tel:+91${cleanPhone}`
       const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

       const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `New lead\n Name : ${name}\n Phone : ${phone}\n Size : ${size} \n Query : ${message}` , // The actual text you want to send
        parse_mode: 'Markdown', // Optional: lets you use bold/italics
        reply_markup: {
          inline_keyboard: [
            [
              // { text: "📞 Call Now", url: `${phoneurl}` },
              { text: "💬 WhatsApp", url: waLink }
            ],
            [
              { text: "📅 Set Follow-up", url: calLink }
            ]
          ]
        }
      
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
