# Salesforce2026 — Local Setup Guide

A step-by-step guide to clone and set up this Salesforce project on your local machine.

---

## Prerequisites

Make sure you have the following installed before starting:

| Tool | Download Link |
|------|--------------|
| Git | https://git-scm.com/download/win |
| Node.js (v18+) | https://nodejs.org |
| VS Code | https://code.visualstudio.com |
| Salesforce CLI (sf) | https://developer.salesforce.com/tools/salesforcecli |

---

## Step 1 — Install Salesforce Extensions in VS Code

1. Open VS Code
2. Click the **Extensions** icon on the left sidebar (or press `Ctrl + Shift + X`)
3. Search for **"Salesforce Extension Pack"**
4. Click **Install**

---

## Step 2 — Clone the Repository

Open your terminal (or VS Code terminal with `Ctrl + `` ` ``) and run:

```bash
git clone https://github.com/sf26-hash/Salesforce2026.git
```

---

## Step 3 — Navigate to the Project Folder

```bash
cd Salesforce2026
```

---

## Step 4 — Verify Salesforce CLI is Installed

```bash
sf --version
```

You should see something like:
```
@salesforce/cli/2.x.x ...
```

If not, install it from the link in the Prerequisites table above.

---

## Step 5 — Authorize Your Salesforce Org

```bash
sf org login web --alias my-org
```

- A **browser window** will open
- Log in with your **Salesforce credentials**
- Come back to the terminal — it will confirm authorization ✅

---

## Step 6 — Set Default Org

```bash
sf config set target-org my-org
```

---

## Step 7 — Deploy the Project to Your Org

```bash
sf project deploy start --source-dir force-app
```

This pushes all the Salesforce metadata (LWC components, classes, etc.) to your org.

---

## Step 8 — Open Your Salesforce Org

```bash
sf org open
```

This will open your Salesforce org directly in the browser. 🎉

---

## Project Structure

```
Salesforce2026/
├── force-app/
│   └── main/
│       └── default/
│           ├── lwc/                  # Lightning Web Components
│           │   └── SalesforceDeveloper26/
│           ├── classes/              # Apex Classes
│           └── components/          # Aura Components
├── config/
│   └── project-scratch-def.json     # Scratch Org config
├── .forceignore                      # Files to ignore during deploy
├── sfdx-project.json                 # Salesforce project config
└── README.md
```

---

## Common Commands

| Task | Command |
|------|---------|
| Deploy code to org | `sf project deploy start --source-dir force-app` |
| Pull changes from org | `sf project retrieve start --source-dir force-app` |
| Open org in browser | `sf org open` |
| Check connected orgs | `sf org list` |
| Run Apex tests | `sf apex run test --synchronous` |

---

## Troubleshooting

**Git not recognized?**
→ Install Git from https://git-scm.com and restart VS Code

**sf command not found?**
→ Install Salesforce CLI and restart your terminal

**Deploy fails?**
→ Make sure you are authorized to the correct org using `sf org list`

---

## Author

**Dinesh** — [github.com/sf26-hash](https://github.com/sf26-hash)
