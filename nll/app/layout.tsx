"use client"
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { BitgetWallet } from "@bitget-wallet/aptos-wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { OpenBlockWallet } from "@openblockhq/aptos-wallet-adapter";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  const wallets = [new PetraWallet(), new BitgetWallet(), new OKXWallet(),new OpenBlockWallet()];
  return (
    <html lang="en">
    <body className={inter.className}>
    <AptosWalletAdapterProvider
        plugins={wallets}
        autoConnect={true}
        onError={(error) => {
          console.log("error", error);
        }}
      >
      {children}
      </AptosWalletAdapterProvider>
      </body>
  </html>
  );
}
