# Google Sheets Form Integration Documentation

This document explains how the Toorizo website form data is collected and stored in Google Sheets, replacing the previous Firebase implementation.

## Overview

The website collects data from three types of forms:

1. **Contact Form** - Main contact form on the Contact Us page
2. **Chat Messages** - Messages sent through the chat dialog/button
3. **Journey Planning Form** - Trip planning form on the Plan Journey page

All form submissions are sent to a Google Sheet via a Google Apps Script web application that acts as a middleware between your website and the Google Sheet.

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet.
2. Rename the spreadsheet to "Toorizo Form Submissions" (or any name you prefer).
3. Note the spreadsheet ID from the URL. The URL looks like `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`, where `SPREADSHEET_ID` is what you'll need.

### 2. Set Up Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the contents of `google-sheets-form-handler.js`.
3. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID.
4. Save the project (name it "Toorizo Form Handler").
5. Click on **Deploy** > **New deployment**.
6. Select **Web app** as the deployment type.
7. Set the following options:
   - Description: "Toorizo Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (important for accepting form submissions from your website)
8. Click **Deploy**.
9. Copy the Web app URL provided after deployment.

### 3. Update Website Code

1. Open the file `src/services/formService.ts`.
2. Replace `YOUR_SCRIPT_ID_HERE` in the `GOOGLE_SHEET_API_URL` constant with the Web app URL you copied.

## How It Works

1. When a user submits a form on the website, the data is sent to the Google Apps Script web app.
2. The script identifies the form type (contact, chat, or journey) and processes it accordingly.
3. It adds the data as a new row in the appropriate sheet within your Google Spreadsheet.
4. Each form type has its own dedicated sheet with appropriate column headers.

## Maintaining Your Google Sheets

The Google Apps Script automatically:

- Creates sheets for each form type if they don't exist
- Sets up appropriate headers for each sheet
- Formats the header row for better readability
- Adds timestamps to each submission

### Sheet Structure

1. **Contact Form** (Sheet name: "Contact Form")

   - Timestamp
   - Name
   - Email
   - Phone
   - Number of People
   - Message

2. **Chat Messages** (Sheet name: "Chat Messages")

   - Timestamp
   - Name
   - Email
   - Message

3. **Journey Planning** (Sheet name: "Journey Planning")
   - Timestamp
   - Name
   - Email
   - Phone
   - Destination
   - Start Date
   - End Date
   - Number of Travelers
   - Budget/Additional Info
   - Preferences/Must-Sees

## Customization

### Adding New Form Fields

If you need to add new fields to any form:

1. Update the form in your website code.
2. Modify the corresponding function in `google-sheets-form-handler.js` to handle the new field.
3. Update the header setup function to include the new column.
4. Redeploy the Google Apps Script.

### Changing Sheet Names

To change the name of the sheets:

1. Modify the `SHEETS` object in `google-sheets-form-handler.js`.
2. Redeploy the Google Apps Script.

## Troubleshooting

### Form Submissions Not Working

1. Check that you've correctly replaced `YOUR_SCRIPT_ID_HERE` in `formService.ts`.
2. Verify that your Google Apps Script is deployed as a web app with access set to "Anyone".
3. Check the browser console for any error messages.

### Data Not Appearing in Google Sheets

1. Verify that you've used the correct Spreadsheet ID in the Google Apps Script.
2. Check if you have edit permissions for the spreadsheet.
3. Look at the script execution logs in the Google Apps Script editor (under "Executions").

## Benefits of Google Sheets Integration

1. **Easy to Access**: No technical knowledge required to view submissions.
2. **Free to Use**: No paid database required.
3. **Easy to Export**: Data can be easily downloaded as CSV or Excel files.
4. **Collaboration**: Multiple team members can access and edit the data simultaneously.
5. **Notifications**: You can set up Google Sheets notifications for new submissions.
6. **Filtering & Sorting**: Use built-in Google Sheets features to organize your data.
7. **Mobile Access**: View submissions from the Google Sheets mobile app.

## Security Considerations

While this solution is convenient, be aware that:

1. All form data is transmitted to Google's servers.
2. Anyone with access to the spreadsheet can see all submissions.
3. Consider implementing additional security measures for sensitive data.

For any questions or assistance, refer to the Google Apps Script documentation or contact your web developer.
