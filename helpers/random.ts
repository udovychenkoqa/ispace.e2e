export function getRandomEmail(data: { domain: string, length: number }): string {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz1234567890";

    for (let i = 0; i < data.length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text + data.domain;
}