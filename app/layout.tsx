// app/layout.tsx
import React from "react";
import { Providers } from "./utilsFunctions/Providers/NextUIProvider";
import ReduxProvider from "./utilsFunctions/Providers/ReduxProvider";
import "./globals.css";
import Topbar from "./LayOutComponents/Topbar";
import SideNav from "./LayOutComponents/SideNav";
import Footer from "./LayOutComponents/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <ReduxProvider>
            {" "}
            <div className="flex flex-col w-full h-full">
              <div>
                <Topbar />
              </div>
              <div className="flex w-full h-full">
                <div>
                  <SideNav />
                </div>
                <div className="w-full">{children}</div>
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
