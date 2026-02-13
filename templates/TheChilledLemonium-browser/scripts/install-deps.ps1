$ErrorActionPreference = "Stop"

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "npm is required. Install Node.js LTS first."
}

npm install
Write-Host "Dependencies installed."
Write-Host "Run: npm run dev"
