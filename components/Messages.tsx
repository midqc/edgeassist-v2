"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import cn from "classnames";
import styles from "./messages.module.scss";

const messages = [
  { text: "Hey, Why should I pick YOU? 😒", sent: true },
  {
    text: "We’re all about 100% original work. Crafted by real people, no bots",
  },
  { text: "How do I know it’s personalized?", sent: true },
  {
    text: "Every piece is tailored just for you. Your secrets? Safe with us! 👀",
  },
  { text: "Can you deliver on time?", sent: true },
  {
    text: "Absolutely! We’re all about punctuality—no stress about deadlines!",
  },
  { text: "Alright, Where do I start?", sent: true },
  {
    text: (
      <span>
        Just fill out the{" "}
        <a
          href="https://forms.gle/oYUzB4PSu7YKFB8q7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          form
        </a>
        , and we'll take it from there 😊
      </span>
    ),
  },
];

const transition = {
  type: "spring",
  stiffness: 50, // Reduced stiffness for a smoother effect
  mass: 0.5, // Reduced mass for quicker initial movement
  damping: 15, // Increased damping for a softer ending
};

const variants = {
  initial: {
    opacity: 0,
    y: 50, // Start lower on the Y-axis
  },
  enter: (i: number) => ({
    // Explicitly type 'i' as number
    opacity: 1,
    y: 0, // Move to original position
    transition: {
      ...transition,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1], // Ease-out cubic function for smooth deceleration
    },
  }),
};

interface MessageItemProps {
  text: React.ReactNode;
  sent: boolean;
  i: number;
  noTail: boolean;
}

const MessageItem = ({ text, sent, i, noTail }: MessageItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.li
      ref={ref}
      className={cn(
        styles.shared,
        sent ? styles.sent : styles.received,
        noTail && styles.noTail
      )}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
      custom={i}
      variants={variants}
      layout
    >
      {text}
    </motion.li>
  );
};

const Messages = (): JSX.Element => (
  <section className="mx-auto rounded-3xl shadow-2xl bg-white p-8 sm:rounded-[47.73px]">
    <AnimatePresence>
      <ol className={styles.list}>
        {messages.map(({ text, sent = false }, i) => {
          const isLast = i === messages.length - 1;
          const noTail = !isLast && messages[i + 1]?.sent === sent;

          return (
            <MessageItem
              key={typeof text === "string" ? text : i}
              text={text}
              sent={sent}
              i={i}
              noTail={noTail}
            />
          );
        })}
      </ol>
    </AnimatePresence>
  </section>
);

export default Messages;
