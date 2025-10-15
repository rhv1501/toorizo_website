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

// Google Sheets API endpoint for your published sheet
// You will need to deploy a Google Apps Script Web App as a middleware
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzXhIpsNvXsR-jj9GAyp7Re-j-6UxO56QXzDpGi_EOBHgX6kfQII3CKxIFVhSLkmR9y/exec';

/**
 * Submit contact form data to Google Sheets
 * @param data Contact form data
 * @returns Promise with success status and response
 */
export const submitContactForm = async (data: ContactFormData) => {
  try {
    const formData = new FormData();
    formData.append('type', 'contact');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('people', data.people.toString());
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

/**
 * Submit chat message data to Google Sheets
 * @param data Chat message data
 * @returns Promise with success status and response
 */
export const submitChatMessage = async (data: ChatMessageData) => {
  try {
    const formData = new FormData();
    formData.append('type', 'chat');
    formData.append('name', data.name || '');
    formData.append('email', data.email || '');
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting chat message:", error);
    throw error;
  }
};

/**
 * Submit journey planning form data to Google Sheets
 * @param data Journey planning form data
 * @returns Promise with success status and response
 */
export const submitJourneyForm = async (data: JourneyFormData) => {
  try {
    const formData = new FormData();
    formData.append('type', 'journey');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('destination', data.destination);
    formData.append('startDate', data.startDate);
    formData.append('endDate', data.endDate);
    formData.append('travelers', data.travelers.toString());
    formData.append('budget', data.budget);
    formData.append('preferences', data.preferences);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting journey form:", error);
    throw error;
  }
};
