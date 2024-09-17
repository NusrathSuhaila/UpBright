import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import './bootstrap.min.css';
import './responsive.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@popperjs/core';
import '../node_modules/webui-popover/dist/jquery.webui-popover.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './jquery.webui-popover.min.css';
import Head from 'next/head';
import './favicon.ico';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import './components/Category';
import Category from "./components/Category";


export const metadata: Metadata = {
  title: "Home | Ubcourse",
  description: "Learning Management Systems (LMS) are like the superheroes of the education world.",
  keywords:"LMS,Learning Management System,Upbright ,Upbright Lms, ubcourse"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
       
        {/* <meta property="og:title" content="Home" />
        <meta property="og:image" content="https://www.ubcourse.com/uploads/system/2791cbf7a6b8b8c08804168ddcf1c172.jpg" />
        <meta property="og:url" content="https://www.ubcourse.com/" />
        <meta property="og:description" content="Learning Management Systems (LMS) are like the superheroes of the education world." />
        <meta property="og:type" content="Learning management system" /> */}

        <link rel="favicon" href="./favicon.ico"/>
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/jquery.webui-popover.min.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/slick.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/slick-theme.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/main.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/frontend/default/css/responsive.css" />
        <link rel="stylesheet" href="https://www.ubcourse.com/assets/global/toastr/toastr.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </Head>
      <body
        className="gray-bg"
      >
        <Header/> <Category />{children}  
       <Footer/>
      </body>
    </html>
  );
}
