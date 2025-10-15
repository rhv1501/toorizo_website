/**
 * Toorizo Website Form Handler
 * This script processes form submissions from the Toorizo website and adds them to Google Sheets.
 * It handles three types of forms: contact, chat, and journey planning.
 */

// These are the spreadsheet ID and sheet names where data will be stored
const SPREADSHEET_ID = "1e1NrGn1HIAaWPhm-hOsezI5aFQ3bAtmfIJr-jVNbtUI"; // Replace with your actual spreadsheet ID
const SHEETS = {
  contact: "Contact Form",
  chat: "Chat Messages",
  journey: "Journey Planning",
};

/**
 * Process POST requests from the website forms
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait 10 seconds for lock

  try {
    // Parse the form data
    const data = e.parameter;
    const type = data.type;
    const timestamp = data.timestamp || new Date().toISOString();

    // Handle different form types
    if (type === "contact") {
      processContactForm(data, timestamp);
    } else if (type === "chat") {
      processChatMessage(data, timestamp);
    } else if (type === "journey") {
      processJourneyForm(data, timestamp);
    } else {
      // If type is not recognized
      return ContentService.createTextOutput(
        JSON.stringify({
          result: "error",
          message: "Unknown form type",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        message: "Form data processed successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Process contact form submissions
 */
function processContactForm(data, timestamp) {
  const sheet = getOrCreateSheet(SHEETS.contact);

  // Set up headers if the sheet is empty
  setupContactFormHeaders(sheet);

  // Add the new row
  sheet.appendRow([
    timestamp,
    data.name,
    data.email,
    data.phone,
    data.people,
    data.message,
  ]);
}

/**
 * Process chat message submissions
 */
function processChatMessage(data, timestamp) {
  const sheet = getOrCreateSheet(SHEETS.chat);

  // Set up headers if the sheet is empty
  setupChatMessageHeaders(sheet);

  // Add the new row
  sheet.appendRow([timestamp, data.name || "", data.email || "", data.message]);
}

/**
 * Process journey planning form submissions
 */
function processJourneyForm(data, timestamp) {
  const sheet = getOrCreateSheet(SHEETS.journey);

  // Set up headers if the sheet is empty
  setupJourneyFormHeaders(sheet);

  // Add the new row
  sheet.appendRow([
    timestamp,
    data.name,
    data.email,
    data.phone,
    data.destination,
    data.startDate,
    data.endDate,
    data.travelers,
    data.budget,
    data.preferences,
  ]);
}

/**
 * Get or create a sheet with the given name
 */
function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(sheetName);

  // Create the sheet if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  return sheet;
}

/**
 * Set up headers for the contact form sheet if it's empty
 */
function setupContactFormHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Number of People",
      "Message",
    ]);

    // Format the header row
    formatHeaderRow(sheet);
  }
}

/**
 * Set up headers for the chat message sheet if it's empty
 */
function setupChatMessageHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);

    // Format the header row
    formatHeaderRow(sheet);
  }
}

/**
 * Set up headers for the journey planning sheet if it's empty
 */
function setupJourneyFormHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Destination",
      "Start Date",
      "End Date",
      "Number of Travelers",
      "Budget/Additional Info",
      "Preferences/Must-Sees",
    ]);

    // Format the header row
    formatHeaderRow(sheet);
  }
}

/**
 * Format the header row with bold text and background color
 */
function formatHeaderRow(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#D4B78F"); // Toorizo gold color
  headerRange.setFontColor("#1A1F2C"); // Toorizo dark color
}

/**
 * Allow the web app to be accessed by anyone, even anonymous users
 */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      result: "error",
      message: "GET requests are not supported. Please use POST.",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
