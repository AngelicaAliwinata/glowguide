"use server"

import "./globals.css";
import React from "react";


export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
