import { readFileSync } from "fs";

export function getAuthTokenFromAuthFile(): string | undefined {
    const authData = JSON.parse(readFileSync("./data/auth/authFile.json", "utf8"));
    const origins = authData.origins;
    const token = origins[0].localStorage.find((cookie: { name: string; }) => cookie.name === "cart_token");
    return token?.value;
}

export function getCartTokenFromAuthFile(): string | undefined {
    const authData = JSON.parse(readFileSync("./data/auth/authFile.json", "utf8"));
    const origins = authData.origins;
    const token = origins[0].localStorage.find((cookie: { name: string; }) => cookie.name === "auth_token");
    return token?.value;
}
