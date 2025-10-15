# Toorizo Form Integration with Google Sheets

This guide explains how to migrate form data handling from Firebase to Google Sheets for the Toorizo website.

## What's Included

1. **Updated Form Service**: The `formService.ts` file has been updated to send form data to Google Sheets instead of Firebase.

2. **Google Apps Script**: The `google-sheets-form-handler.js` file contains the Google Apps Script code that processes form submissions and adds them to a Google Spreadsheet.

3. **Setup Script**: The `setup-google-sheets.sh` script guides you through the setup process.

4. **Documentation**: The `google-sheets-integration.md` file provides detailed information about the integration.

## Quick Setup

1. Run the setup script:

   ```
   ./setup-google-sheets.sh
   ```

2. Follow the on-screen instructions to:
   - Create a Google Spreadsheet
   - Deploy the Google Apps Script
   - Update your website code with the script URL

## Benefits of Using Google Sheets

- **User-Friendly**: No technical knowledge required to view and manage form submissions
- **No Database Costs**: Free to use, no need for paid database services
- **Easy Data Management**: Sort, filter, and export data with Google Sheets' built-in features
- **Real-Time Collaboration**: Multiple team members can access and manage data simultaneously
- **Notification Options**: Set up email alerts for new form submissions
- **Mobile Access**: View and manage submissions from any device with the Google Sheets app

## Form Types

The integration handles three types of forms:

1. **Contact Form**: General inquiries from the Contact Us page
2. **Chat Messages**: Messages sent through the chat dialog/button
3. **Journey Planning Form**: Trip planning requests from the Plan Journey page

Each form type is stored in its own sheet within the Google Spreadsheet.

## Need Help?

For detailed information, see the `google-sheets-integration.md` documentation file.
