import { trackEventReq, trackEventRes } from "@/utils/types/trackEvent";

export const trackEvent = async (dataTrack:trackEventReq) => {
  const {component, variant, action } = dataTrack
  try {
    const response = await fetch("http://localhost:4000/api/components/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ component, variant, action }),
    });
    const data :trackEventRes= await response.json();
    return data
  } catch (err) {
    console.error("Error tracking event:", err);
    return null
  }
};
