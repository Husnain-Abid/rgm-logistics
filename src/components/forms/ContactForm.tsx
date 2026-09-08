"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  pickupCity: string;
  destinationCity: string;
  vehicleType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  pickupCity: "",
  destinationCity: "",
  vehicleType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl bg-green-50 border border-green-200">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <h3 className="font-bold text-gray-900 text-xl mb-3">
          Thank You, {form.name || "Customer"}!
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
          We have received your inquiry. For immediate assistance, please call or
          WhatsApp us at{" "}
          <a href="tel:03004432981" className="text-blue-700 font-semibold underline">
            03004432981
          </a>
          .
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="03xx-xxxxxxx"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pickupCity" className="block text-sm font-semibold text-gray-700 mb-2">
            Pickup City
          </label>
          <input
            id="pickupCity"
            name="pickupCity"
            type="text"
            value={form.pickupCity}
            onChange={handleChange}
            placeholder="e.g. Karachi"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
          />
        </div>
        <div>
          <label htmlFor="destinationCity" className="block text-sm font-semibold text-gray-700 mb-2">
            Destination City
          </label>
          <input
            id="destinationCity"
            name="destinationCity"
            type="text"
            value={form.destinationCity}
            onChange={handleChange}
            placeholder="e.g. Lahore"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
          Vehicle Type
        </label>
        <select
          id="vehicleType"
          name="vehicleType"
          value={form.vehicleType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all bg-white"
        >
          <option value="">Select vehicle type</option>
          <option value="Car">Car</option>
          <option value="SUV">SUV</option>
          <option value="Pickup / Van">Pickup / Van</option>
          <option value="Motorcycle / Bike">Motorcycle / Bike</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Any additional details or questions..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
        />
      </div>

      <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
        <p className="text-amber-700 text-xs leading-relaxed">
          <strong>Note:</strong> This form is for inquiry purposes only. For immediate
          assistance, please call or WhatsApp us at{" "}
          <a href="tel:03004432981" className="underline font-semibold">
            03004432981
          </a>
          . We are available 24/7.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-98 shadow-lg disabled:opacity-70"
        style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
