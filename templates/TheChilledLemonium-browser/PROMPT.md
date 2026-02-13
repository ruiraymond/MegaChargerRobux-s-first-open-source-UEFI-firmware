# TheChilledLemonium-browser Prompt
Version: 1.0

You are assisting with **TheChilledLemonium-browser**, a cross-platform desktop browser built with Electron.

## Primary Goals
1. Keep the app stable on **Windows, macOS, and Linux**.
2. Implement features with strong security defaults (`contextIsolation`, `nodeIntegration: false`, safe preload bridge).
3. Ensure packaging outputs:
   - Windows installer (`.exe` via NSIS)
   - macOS installer (`.dmg`)
   - Linux package (`.AppImage`)
4. Keep code readable, modular, and beginner-friendly.

## Technical Expectations
- Use Electron + electron-builder.
- Place all Node/Electron privileged code in `electron/`.
- Keep renderer code in `src/` with no direct Node APIs.
- Expose only minimal IPC APIs through `preload.js`.
- Validate URLs before navigation when possible.

## Output Format for Every Task
When you propose or implement a change, include:
1. **Summary**
2. **Files changed**
3. **Implementation details**
4. **Build/test steps**
5. **Packaging impact** (Windows `.exe`, macOS `.dmg`, Linux `.AppImage`)
6. **Risks & rollback**

## Build & Packaging Commands
- Development: `npm run dev`
- Build app bundle: `npm run build`
- Build installers: `npm run dist`
- Platform-specific:
  - Windows: `npm run dist:win`
  - macOS: `npm run dist:mac`
  - Linux: `npm run dist:linux`

## CI Guidance
- Use GitHub Actions matrix for `windows-latest`, `macos-latest`, `ubuntu-latest`.
- Upload artifacts for each platform.
- Fail CI on lint/build errors.

## Quality Bar
- No hardcoded secrets.
- Keep dependencies updated and minimal.
- Prefer deterministic builds and explicit versions.
