#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}        Toorizo Google Sheets Integration Setup        ${NC}"
echo -e "${BLUE}======================================================${NC}"

echo -e "\n${GREEN}This script will guide you through setting up the Google Sheets integration.${NC}\n"

# Step 1: Create Google Sheet
echo -e "${BLUE}Step 1: Create Google Sheet${NC}"
echo "1. Go to https://sheets.google.com/ and create a new spreadsheet"
echo "2. Rename it to 'Toorizo Form Submissions' (or any name you prefer)"
echo "3. Copy the spreadsheet ID from the URL"
echo "   (The URL looks like: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)"
echo -e "\n"
read -p "Have you created the spreadsheet? (y/n): " created_sheet

if [[ $created_sheet != "y" && $created_sheet != "Y" ]]; then
    echo -e "${RED}Please create the spreadsheet before continuing.${NC}"
    exit 1
fi

read -p "Enter your spreadsheet ID: " spreadsheet_id
echo -e "\n"

# Step 2: Set up Google Apps Script
echo -e "${BLUE}Step 2: Set up Google Apps Script${NC}"
echo "1. In your Google Sheet, click on Extensions > Apps Script"
echo "2. Delete any code in the editor and paste the contents of google-sheets-form-handler.js"
echo "3. Replace 'YOUR_SPREADSHEET_ID_HERE' with: $spreadsheet_id"
echo "4. Save the project (name it 'Toorizo Form Handler')"
echo "5. Click on Deploy > New deployment"
echo "6. Select Web app as the deployment type with the following options:"
echo "   - Description: Toorizo Form Handler"
echo "   - Execute as: Me"
echo "   - Who has access: Anyone"
echo "7. Click Deploy and authorize the script when prompted"
echo "8. Copy the Web app URL provided after deployment"
echo -e "\n"
read -p "Have you deployed the Apps Script? (y/n): " deployed_script

if [[ $deployed_script != "y" && $deployed_script != "Y" ]]; then
    echo -e "${RED}Please deploy the Apps Script before continuing.${NC}"
    exit 1
fi

read -p "Enter the Web app URL: " script_url
echo -e "\n"

# Step 3: Update the website code
echo -e "${BLUE}Step 3: Update website code${NC}"
echo "Now we'll update the formService.ts file with your script URL."
echo -e "\n"

# Update the formService.ts file
file_path="./src/services/formService.ts"
if [ -f "$file_path" ]; then
    # Replace the placeholder URL with the actual script URL
    sed -i "s|https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec|$script_url|g" "$file_path"
    echo -e "${GREEN}✓ Successfully updated formService.ts with your script URL${NC}"
else
    echo -e "${RED}Error: formService.ts not found in the expected location${NC}"
    echo "Please manually update the GOOGLE_SHEET_API_URL constant in src/services/formService.ts"
    echo "Replace 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec' with '$script_url'"
fi

echo -e "\n${GREEN}Setup complete!${NC}"
echo -e "You can now use the Google Sheets integration for your forms."
echo -e "For more details, see the google-sheets-integration.md documentation."
echo -e "\n${BLUE}======================================================${NC}"