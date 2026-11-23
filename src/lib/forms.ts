export function normalizePhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export function isValidIndianMobile(input: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizePhone(input));
}

export function todayISODate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatAppointmentDate(isoDate: string): string {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const timeSlots: { value: string; label: string }[] = (() => {
  const slots: { value: string; label: string }[] = [];
  for (let hour = 9; hour <= 20; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 20 && minute === 30) continue;
      const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      const suffix = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const label = `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
      slots.push({ value, label });
    }
  }
  return slots;
})();
