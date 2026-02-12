"use server";

export async function submitRegistration(data: {
    fullName: string;
    phone: string;
    email: string;
    classe: string;
}) {
    const WEBHOOK_URL = "https://n8n.raquibi.com/webhook/bb535f86-8cbd-488a-b71e-8b0d33fae87d";

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                source: "STARTUP MINDS Registration Site",
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Webhook error:", errorText);
            return { success: false, error: "Failed to send data to webhook." };
        }

        return { success: true };
    } catch (error) {
        console.error("Submission error:", error);
        return { success: false, error: "An unexpected error occurred." };
    }
}
