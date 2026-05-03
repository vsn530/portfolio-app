import { useState } from "react";

const whatsappNumber = "919052444496"; // replace with your WhatsApp number in international format

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = `Hi, my name is ${name || "Visitor"}.
Email: ${email || "Not provided"}.

${message || "I would like to connect with you."}`;

    const phone = whatsappNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-slate-950/95 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Contact
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Reach out via WhatsApp
          </h2>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            Send me a quick message and I will respond as soon as possible.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-950/20"
          >
            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message"
                  rows={5}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Send WhatsApp message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
