# Google Apps Script Spreadsheet and Drive Data Upload🚀

This repository contains a set of tools built using **Google Apps Script (GAS)** and HTML frontends.  
It includes the following features:

## 📌 Features
- **Excel Data Saving** → Collects user input (Name, Email, Phone) along with metadata like datetime, IP (IPv4 & IPv6), ISP, and geolocation, and saves them into Google Sheets.  
- **Google Drive File Upload** → Upload files directly to a specified Google Drive folder.  
- **Selection Dashboard** → A simple UI to navigate between available tools and an external website link.  

## 📂 Files Overview
- `code.js` → GAS backend functions for handling data logging and file uploads.  
- `selection.html` → Main dashboard UI for navigating between tools.  
- `excel_data_saving.html` → Data input form with IP/ISP/location tracking.  
- `drive_upload.html` → File uploader for Google Drive.  

## ⚙️ Setup Instructions
1. Open **Google Apps Script Editor** (`https://script.google.com/`).  
2. Create a new project and add the `code.js` file in the **Code.gs** section.  
3. Add the `.html` files (`selection.html`, `excel_data_saving.html`, `drive_upload.html`) under **Files → New → HTML**.  
4. Replace placeholders:
   - `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` → Your **Google Sheets ID**  
   - `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` → Your **Google Drive Folder ID**  
5. Deploy as a **Web App**:
   - Click **Deploy → New Deployment**  
   - Set access to **Anyone with the link**  

## ▶️ Usage
- Access the deployed web app URL.  
- Choose between **Excel Data Saving** or **Drive Upload** from the selection dashboard.  

## 🤝 Contribution
Contributions are welcome!  
- Fork the repository  
- Create a new branch (`feature/your-feature`)  
- Commit your changes and open a Pull Request  


---
⭐ If you find this useful, give it a star and contribute to make it better!
