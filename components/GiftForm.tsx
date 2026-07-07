"use client";

import { useState } from "react";

// PureSeva WhatsApp number (country code + number, digits only).
const WHATSAPP_NUMBER = "917013285018";

// Google Apps Script Web App URL — logs each submission to the Google Sheet.
// Setup instructions: see google-apps-script.gs in the project root.
// Leave empty to disable sheet logging.
const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxB4sChWw3ALEmeX2gh8PDzD_aMR-TY3wE4ZjUQVgrctyT4uWiUtjMxSk8i48F7-mIhXQ/exec";

const MEAL_SLOTS = [
  { id: "breakfast", name: "Breakfast", time: "7:00 – 9:00 AM" },
  { id: "lunch", name: "Lunch", time: "12:00 – 2:00 PM" },
  { id: "dinner", name: "Dinner", time: "7:00 – 9:00 PM" },
] as const;

type SlotId = (typeof MEAL_SLOTS)[number]["id"];

const MENUS: Record<SlotId, string[]> = {
  breakfast: [
    "Idli + Chutney + Sambar",
    "Dosa + Chutney",
    "Vada + Sambar",
    "Upma + Chutney",
    "Pongal + Chutney + Sambar",
    "Poori + Curry",
    "Pesarattu + Ginger Chutney",
    "Lemon Rice + Pickle",
  ],
  lunch: [
    "Rice + Pappu + Curry + Curd",
    "Sambar Rice + Curry",
    "Curd Rice + Pickle",
    "Pulihora (Tamarind Rice)",
    "Vegetable Biryani + Raita",
    "Roti + Curry + Dal",
    "Rice + Rasam + Curry + Curd",
    "Tomato Rice + Curry",
  ],
  dinner: [
    "Rice + Pappu + Curry + Curd",
    "Roti + Curry + Dal",
    "Curd Rice + Pickle",
    "Sambar Rice + Curry",
    "Chapati + Paneer Curry",
    "Rice + Rasam + Curry",
    "Pulihora + Curry",
    "Lemon Rice + Dal",
  ],
};

const CAMPAIGN_TYPES = [
  "Single-day gift",
  "Weekly gifting",
  "Monthly gifting",
  "Festival meal program",
];

const OCCASIONS = [
  "Birthday / Anniversary",
  "Festival or celebration",
  "In memory of a loved one",
  "Wedding / Special occasion",
  "Thanksgiving / Gratitude",
  "Just to give back",
];

const CUSTOM = "__custom__";

export default function GiftForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [slot, setSlot] = useState<SlotId>("breakfast");
  const [menuItem, setMenuItem] = useState("");
  const [customMenu, setCustomMenu] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [campaignType, setCampaignType] = useState(CAMPAIGN_TYPES[0]);
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [customOccasion, setCustomOccasion] = useState("");
  const [dedication, setDedication] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function resetForm() {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setSlot("breakfast");
    setMenuItem("");
    setCustomMenu("");
    setDate("");
    setArea("");
    setCampaignType(CAMPAIGN_TYPES[0]);
    setOccasion(OCCASIONS[0]);
    setCustomOccasion("");
    setDedication("");
  }

  function selectSlot(next: SlotId) {
    setSlot(next);
    setMenuItem("");
    setCustomMenu("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const slotInfo = MEAL_SLOTS.find((s) => s.id === slot)!;
    const menu =
      menuItem === CUSTOM ? `Customized: ${customMenu || "(to discuss)"}` : menuItem;
    const occasionValue =
      occasion === CUSTOM ? customOccasion || "(to discuss)" : occasion;

    // Log to Google Sheets (fire-and-forget; never blocks the WhatsApp redirect).
    if (SHEETS_WEBHOOK_URL) {
      fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          meal: slotInfo.name,
          time: slotInfo.time,
          menu,
          date,
          area,
          campaignType,
          occasion: occasionValue,
          dedication,
        }),
      }).catch(() => {
        // Sheet logging is best-effort; the WhatsApp message is the source of truth.
      });
    }
    const lines = [
      "New meal gift request — PureSeva",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      city ? `City: ${city}` : null,
      "",
      `Meal: ${slotInfo.name} (${slotInfo.time})`,
      menu ? `Menu: ${menu}` : null,
      date ? `Preferred date: ${date}` : null,
      `Location: Vijayawada${area ? ` (${area})` : ""}`,
      `Campaign type: ${campaignType}`,
      `Occasion / Purpose: ${occasionValue}`,
      dedication ? `Notes: ${dedication}` : null,
    ].filter((line) => line !== null);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");

    // Clear the form so returning to this tab can't produce a duplicate submission.
    resetForm();
    setSubmitted(true);
  }

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <h2>Your Details</h2>
      <p className="sub">
        Tell us a little about yourself so we can coordinate your gift.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Ramesh Kumar"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email (optional)</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City / Town</label>
        <input
          id="city"
          type="text"
          placeholder="e.g. Vijayawada"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <h2 style={{ marginTop: 40 }}>Meal Details</h2>
      <p className="sub">Pick the meal you want to gift.</p>

      <div className="meal-slots" role="radiogroup" aria-label="Meal slot">
        {MEAL_SLOTS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`meal-slot${slot === s.id ? " active" : ""}`}
            onClick={() => selectSlot(s.id)}
            role="radio"
            aria-checked={slot === s.id}
          >
            <div className="name">{s.name}</div>
            <div className="time">{s.time}</div>
          </button>
        ))}
      </div>

      <div className="menu-section">
        <h3>Select Menu Items</h3>
        <div className="menu-grid" role="radiogroup" aria-label="Menu">
          {MENUS[slot].map((item) => (
            <button
              key={item}
              type="button"
              className={`menu-item${menuItem === item ? " selected" : ""}`}
              onClick={() => setMenuItem(item)}
              role="radio"
              aria-checked={menuItem === item}
            >
              <span className="radio" />
              {item}
            </button>
          ))}
          <button
            type="button"
            className={`menu-item${menuItem === CUSTOM ? " selected" : ""}`}
            onClick={() => setMenuItem(CUSTOM)}
            role="radio"
            aria-checked={menuItem === CUSTOM}
          >
            <span className="radio" />
            Customized Menu
          </button>
          {menuItem === CUSTOM && (
            <input
              type="text"
              className="custom-input"
              placeholder="Describe your preferred menu..."
              value={customMenu}
              onChange={(e) => setCustomMenu(e.target.value)}
              autoFocus
            />
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">
            Area Preference in Vijayawada (optional)
          </label>
          <input
            id="area"
            type="text"
            placeholder="e.g. near the railway station"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="campaign">Campaign Type</label>
        <select
          id="campaign"
          value={campaignType}
          onChange={(e) => setCampaignType(e.target.value)}
        >
          {CAMPAIGN_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion / Purpose</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          {OCCASIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <option value={CUSTOM}>Other (please specify)</option>
        </select>
        {occasion === CUSTOM && (
          <input
            type="text"
            placeholder="Tell us the occasion or purpose..."
            value={customOccasion}
            onChange={(e) => setCustomOccasion(e.target.value)}
            autoFocus
            style={{ marginTop: 8 }}
          />
        )}
      </div>

      <div className="form-group">
        <label htmlFor="dedication">Additional Notes (optional)</label>
        <textarea
          id="dedication"
          rows={3}
          placeholder="e.g. In loving memory of my grandmother, Lakshmi Devi"
          value={dedication}
          onChange={(e) => setDedication(e.target.value)}
        />
      </div>

      <button type="submit" className="form-submit">
        Submit &amp; Connect on WhatsApp
      </button>
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Thank you. We have recorded your request.</strong>
          <br />
          Please press <em>Send</em> in the WhatsApp chat we opened to complete
          it, and we will confirm your gift within 24 hours. We have cleared
          the form in case you want to gift another meal.
        </div>
      ) : (
        <p className="form-note">
          We will send your details to our team on WhatsApp, and we will
          confirm your gift within 24 hours.
        </p>
      )}
    </form>
  );
}
