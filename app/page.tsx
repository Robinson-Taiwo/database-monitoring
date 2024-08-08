/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "./components/Navbar";
import image from "@/public/image.jpg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="flex w-[100%] h-[100%] bg-[white]   flex-col items-center justify-between">
      <Navbar />
      <div className="w-[62rem] gap-[2.19rem] flex flex-col justify-center ">
        <div>
          <p className="text-[2.75rem]  font-bold  leading-[3.85rem] text-[#121127] ">
            {" "}
            Why Every Organization Needs Database Activity Monitoring
          </p>
        </div>

        <Image
          src={image}
          alt="data-image"
          width={600}
          height={345}
          className="w-[100%]"
        />

        <div className="text-[rgba(18,17,39,0.72)] pb-[2rem] ">
          <p className="   text-[1.3125rem] font-normal leading-[2.3625rem] ">
            Databases have become more important than ever, thanks to their
            usage for information storage, their ability to power critical
            applications, and their relevance in decision-making. However,
            managing them can be difficult, especially in large organizations
            that work with enormous amounts of data.
          </p>
          <p className="  text-[1.3125rem] font-normal leading-[2.3625rem]">
            Thus, there is a need to employ database activity monitoring systems
            that provide users with real-time information on the condition of
            their data. In this article, we shall explain why these systems are
            necessary.
          </p>
        </div>

        <div className="text-[rgba(18,17,39,0.72)] pb-[2rem] ">
          <h3 className="text-[rgba(13,12,28,0.72)] text-[1.5rem] font-semibold ">
            The Risks of Unmonitored Database
          </h3>
          <p className=" text-[1.3125rem] font-normal leading-[2.3625rem] ">
            Activity Unmonitored database activity is a recipe for disaster.
            Without visibility into who's accessing your data, when, and why,
            you're leaving your business vulnerable to insider threats,
            cyber-attacks, and data breaches. You are also left in the dark
            regarding the state of integrations and other tools that are tied to
            your database such as e-commerce updates, user sign-ups, landing
            pages, etc. The consequences of the above can be devastating as
            compromised customer data, intellectual property theft, and
            reputational damage can take years to recover from.
          </p>
        </div>

        <div className="text-[rgba(18,17,39,0.72)]">
          <h3 className="text-[rgba(18,17,39,0.72)] font-semibold text-[1.5rem] ">
            The Benefits of Database Activity Monitoring
          </h3>
          <p className="   text-[1.3125rem] font-normal leading-[2.3625rem]">
            So, what can database activity monitoring do for your business? For
            starters, it provides a clear view of all database activity,
            allowing you to:
          </p>
          <ul className="list-disc ml-6  text-[1.3125rem] font-normal leading-[2.3625rem] ">
            <li className="mb-1">
              Identify suspicious behavior and investigate potential security
              threats
            </li>
            <li className="mb-1">
              Meet regulatory compliance requirements and pass audits with
              confidence
            </li>
            <li className="mb-1">
              Optimize database performance and improve data-driven
              decision-making
            </li>
            <li className="mb-1">
              Reduce the risk of data breaches and cyber attacks
            </li>
          </ul>
          <p className=" text-[1.3125rem] font-normal leading-[2.3625rem]">
            Take, for example, a financial institution that uses database
            activity monitoring to detect and log user/employee logins. By
            monitoring database activity, they can identify unusual patterns of
            behavior, such as an employee accessing sensitive customer data
            outside of work hours or a user having difficulty with the sign-up
            process. This allows them to take swift action to prevent a
            potential data breach or customer loss.
          </p>
        </div>

        <div className="text-[rgba(18,17,39,0.72)] pb-[5rem] ">
          <h3 className="text-[rgba(18,17,39,0.72)] text-[1.5rem] font-semibold ">
            Getting Started with Database Activity Monitoring
          </h3>
          <p className=" text-[1.3125rem] font-normal leading-[2.3625rem] ">
            Database activity monitoring is a necessity for businesses that want
            to protect their data and receive regular notifications on their
            database activity. By implementing a robust monitoring solution such
            as Telex, you can gain visibility into database activity, reduce
            risk, and stay ahead of threats and errors. With the Telex software,
            you can define procedures for database access and activity
            monitoring, create channels, and enable notifications. Try Telex
            today for a notified tomorrow!
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
