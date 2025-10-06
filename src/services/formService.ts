import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  people: number;
  message: string;
}

export interface ChatMessageData {
  message: string;
  email?: string;
  name?: string;
}

export interface JourneyFormData {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: string;
  preferences: string;
  name: string;
  email: string;
  phone: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const submitChatMessage = async (data: ChatMessageData) => {
  try {
    const docRef = await addDoc(collection(db, "chat"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting chat message:", error);
    throw error;
  }
};

export const submitJourneyForm = async (data: JourneyFormData) => {
  try {
    const docRef = await addDoc(collection(db, "plan"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting journey form:", error);
    throw error;
  }
};
