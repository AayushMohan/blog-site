import Banner from "../../components/Banner";
import Body from "../../components/Body";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="">
        <Header />
        <Banner />
        <Body />
        {children}
      </body>
    </html>
  );
}
