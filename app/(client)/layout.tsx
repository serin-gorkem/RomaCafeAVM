import { LanguageProvider } from "../../components/i18n/LanguageProvider";
// import PopupProvider from "../../components/popup/PopupProvider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      {children}
      {/* <PopupProvider /> */}
    </LanguageProvider>
  );
}