/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "./components/Navbar";
import image from "@/public/image.jpg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="flex h-[100%] bg-[white]   flex-col items-center justify-between">
      <Navbar />

      <div className=" text-start w-[100%]  flex justify-center px-[4rem]  mb-[1.5rem]  ">
        <h1 className="text-[2.5rem] text-start ] flex justify-center leading-[3rem] w-[80%] font-semibold ">
          Why Every Organization Needs Database Activity Monitoring
        </h1>
      </div>

      <Image src={image} alt="data-image" height={100} width={200} />

      <div className="font-sans m-5 px-[4rem] gap-[2.5rem] flex flex-col leading-relaxed">
        <div className="mb-5">
          <p className="mb-2">
            Databases have become more important than ever, thanks to their
            usage for information storage, their ability to power critical
            applications, and their relevance in decision-making. However,
            managing them can be difficult, especially in large organizations
            that work with enormous amounts of data. Thus, there is a need to
            employ database activity monitoring systems that provide users with
            real-time information on the condition of their data. In this
            article, we shall explain why these systems are necessary.
          </p>
        </div>
        <div className="mb-5">
          <div className="text-xl font-bold mb-2">
            The Risks of Unmonitored Database Activity
          </div>
          <p className="mb-2">
            Unmonitored database activity is a recipe for disaster. Without
            visibility into who's accessing your data, when, and why, you're
            leaving your business vulnerable to insider threats, cyber-attacks,
            and data breaches.
          </p>
          <p className="mb-2">
            You are also left in the dark regarding the state of integrations
            and other tools that are tied to your database such as e-commerce
            updates, user sign-ups, landing pages, etc. The consequences of the
            above can be devastating as compromised customer data, intellectual
            property theft, and reputational damage can take years to recover
            from.
          </p>
        </div>
        <div className="mb-5">
          <div className="text-xl font-bold mb-2">
            The Benefits of Database Activity Monitoring
          </div>
          <p className="mb-2">
            So, what can database activity monitoring do for your business? For
            starters, it provides a clear view of all database activity,
            allowing you to:
          </p>
          <ul className="list-disc ml-5 mb-2">
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
          <p className="mb-2">
            Take, for example, a financial institution that uses database
            activity monitoring to detect and log user/employee logins. By
            monitoring database activity, they can identify unusual patterns of
            behavior, such as an employee accessing sensitive customer data
            outside of work hours or a user having difficulty with the sign-up
            process. This allows them to take swift action to prevent a
            potential data breach or customer loss.
          </p>
        </div>
        <div className="mb-5">
          <div className="text-xl font-bold mb-2">
            Getting Started with Database Activity Monitoring
          </div>
          <p className="mb-2">
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

<Footer/>

    </section>
  );
}
