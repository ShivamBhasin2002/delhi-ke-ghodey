"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { ethers } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "@/app/constants";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { client } from "@/app/client";
const { ethereum } = window as any;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [myData, setMyData] = useState(null);
  const [myNumber, setMyNumber] = useState();

  const getEthereumContract = () => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const transactionContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        signer
      );
      return transactionContract;
    }
  };

  const getData = async () => {
    try {
      const transactionContract = getEthereumContract();
      console.log(transactionContract);
      // add code
      const val = "";
      console.log(val)
      setMyData(val.toString() as any);
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    try {
      const transactionContract = getEthereumContract();
      // add code
      const val = "";
      alert("Transaction Submitted, please wait for confirmation popup");
      await (val as any).wait();
      console.log(val);
      window.confirm(
        "Transaction Confirmed, press Get Data to see the updated value"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <main
            className="min-h-[2496px] min-w-full"
            style={{
              background:
                "linear-gradient(180deg, #fff 0%, rgba(156,156,156,1) 100%)",
            }}
          >
            {children}
            <div className="absolute right-[320px] top-[25px]">
              <ConnectButton
                client={client}
                onConnect={(e) => {
                  window.open("/dashboard");
                }}
                appMetadata={{
                  name: "Horsey app Dashboard",
                  url: "https://example.com",
                }}
              />
            </div>
          </main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
