# 🚀 Salesforce2026 — Local Setup Guide

> A complete step-by-step guide to clone, setup and run this Salesforce project locally

---

## ✅ Prerequisites — Install These First

Before starting, make sure you have all of these installed:

### 1️⃣ Install Git
- Download 👉 https://git-scm.com/download/win
- Run the `.exe` and keep clicking **Next** (default settings are fine)
- Verify install — open terminal and type:
  ```bash
  git --version
  ```
  You should see: `git version 2.x.x`

---

### 2️⃣ Install Node.js
- Download 👉 https://nodejs.org (pick the **LTS version**)
- Run the installer → keep clicking **Next**
- Verify install:
  ```bash
  node --version
  ```
  You should see: `v18.x.x` or higher

---

### 3️⃣ Install VS Code
- Download 👉 https://code.visualstudio.com
- Run the installer → keep clicking **Next**

---

### 4️⃣ Install Salesforce CLI
- Download 👉 https://developer.salesforce.com/tools/salesforcecli
- Run the installer → keep clicking **Next**
- Verify install:
  ```bash
  sf --version
  ```
  You should see: `@salesforce/cli/2.x.x`

---

### 5️⃣ Install Salesforce Extension Pack in VS Code
1. Open **VS Code**
2. Press `Ctrl + Shift + X` to open Extensions
3. Search **"Salesforce Extension Pack"**
4. Click **Install** ✅

---

## 📥 Step 1 — Clone the Repository

Open your terminal in VS Code (`Ctrl + `` ` ``) and run:

```bash
git clone https://github.com/sf26-hash/Salesforce2026.git
```

This will download the entire project to your local machine.

---

## 📂 Step 2 — Open the Project Folder

```bash
cd Salesforce2026
```

Or in VS Code:
- Click **File → Open Folder**
- Select the `Salesforce2026` folder
- Click **Open**

---

## 🔐 Step 3 — Login to Your Salesforce Org

```bash
sf org login web --alias my-org
```

- A **browser window** will open automatically
- Log in with your **Salesforce username & password**
- After login, come back to terminal — you will see:
  ```
  Successfully authorized your-email@example.com
  ```
  ✅ You are now connected!

---

## ⚙️ Step 4 — Set Your Default Org

```bash
sf config set target-org my-org
```

---

## 🚀 Step 5 — Deploy Project to Your Salesforce Org

```bash
sf project deploy start --source-dir force-app
```

This pushes all components (LWC, Apex Classes, etc.) to your Salesforce org.

You will see:
```
Deployed Source
STATUS: Succeeded ✅
```

---

## 🌐 Step 6 — Open Your Salesforce Org

```bash
sf org open
```

This opens your Salesforce org directly in the browser. 🎉

---

## 📁 Project Structure

```
Salesforce2026/
├── force-app/
│   └── main/
│       └── default/
│           ├── lwc/                        # Lightning Web Components
│           │   └── SalesforceDeveloper26/  # Main LWC Component
│           ├── classes/                    # Apex Classes
│           └── components/                # Aura Components
├── config/
│   └── project-scratch-def.json           # Scratch Org Definition
├── .forceignore                            # Deploy ignore rules
├── sfdx-project.json                       # Salesforce Project Config
├── README.md                               # Project Overview
└── SETUP.md                                # This Setup Guide
```

---

## 🛠️ Useful Commands

| Task | Command |
|------|---------|
| Deploy code to org | `sf project deploy start --source-dir force-app` |
| Pull latest changes from org | `sf project retrieve start --source-dir force-app` |
| Open org in browser | `sf org open` |
| See all connected orgs | `sf org list` |
| Run Apex tests | `sf apex run test --synchronous` |
| Check Git status | `git status` |
| Pull latest code from GitHub | `git pull` |

---

## 🔄 How to Get Latest Code Updates

Whenever the project is updated on GitHub, run this to get the latest:

```bash
git pull
```

Then redeploy to your org:

```bash
sf project deploy start --source-dir force-app
```

---

## ❗ Troubleshooting

**Problem: `git` is not recognized**
→ Git is not installed. Download from https://git-scm.com and restart VS Code

**Problem: `sf` is not recognized**
→ Salesforce CLI is not installed. Download from https://developer.salesforce.com/tools/salesforcecli and restart terminal

**Problem: Deploy fails**
→ Make sure you are logged into the correct org:
```bash
sf org list
sf org login web --alias my-org
```

**Problem: Login browser does not open**
→ Try this command instead:
```bash
sf org login web --alias my-org --instance-url https://login.salesforce.com
```

---

## 👤 Author

**Dinesh** — [github.com/sf26-hash](https://github.com/sf26-hash)

---

> 💬 For any issues, raise a GitHub Issue at:
> https://github.com/sf26-hash/Salesforce2026/issues
