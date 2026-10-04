# UI/UX snapshot review

Reviewed on 3 October 2026. Scope: all **87 PNGs**, consisting of the same 29 views in each of:

- [narrow, 320 × 740](../test/visual/snapshots/narrow/)
- [mobile, 390 × 844](../test/visual/snapshots/mobile/)
- [desktop, 1280 × 900](../test/visual/snapshots/desktop/)

This is a visual review, not an accessibility audit or wallet correctness assessment. No application changes were made for this report. Screenshots are local, Git-ignored artifacts; links require locally generated baselines.

## Interpretation limits

- Baseline comparisons normalize Tari's public address and QR display. Ordinary screenshot attachments retain the generated wallet's real public values. Neither proves which recovery file was decrypted; the browser test separately downloads and verifies the actual encrypted export.
- Missing prices, dummy EVM addresses, unknown contracts and uninitialized Tari states come from test fixtures. Do not interpret them as evidence that production market data or storage is broken.
- A screenshot can show clipped content, but cannot establish whether scrolling, focus trapping, keyboard controls or copying work. The acceptance checks below require interactive testing.
- EVM deposit, withdraw and settings are captured in E-ink mode. Their light/dark equivalents are not covered by the current snapshot set.

## Prioritized improvements

### P1-01: Make risk content discoverable above sticky actions

Evidence: [narrow unlimited approval](../test/visual/snapshots/narrow/unlimited-approval-review.png), [mobile unlimited approval](../test/visual/snapshots/mobile/unlimited-approval-review.png), [narrow Russian warning](../test/visual/snapshots/narrow/transaction-warning-ru.png).

The approval acknowledgement is absent from the visible narrow-screen area and partly cut off on mobile. Long warning screens show the footer while much of the risk explanation remains below the visible content area. The continue button is disabled in the approval example, but the reason is not immediately discoverable.

Suggestion: give the scrollable body explicit bottom clearance for the footer. Place required acknowledgements after a compact action summary, with a clear cue when additional warning content remains below. Keep the header and close control accessible.

Acceptance: at 320px, all warnings and acknowledgement controls can be reached by scrolling and keyboard without being covered by the footer. Continue remains disabled until all required acknowledgements are given. Never hide warnings merely to shorten the sheet.

### P1-02: Fix clipped localized actions and theme labels

Evidence: [narrow Russian warning](../test/visual/snapshots/narrow/transaction-warning-ru.png), [mobile Russian warning](../test/visual/snapshots/mobile/transaction-warning-ru.png), [narrow settings](../test/visual/snapshots/narrow/evm-settings.png), [narrow preferences](../test/visual/snapshots/narrow/preferences.png).

The Russian continue label is clipped. Theme selectors truncate even English options: E-ink and Auto are not fully legible at 320px.

Suggestion: allocate selector width from actual option lengths rather than a small fixed width. Allow footer buttons to grow vertically or use shorter translated labels without losing the explicit risk-acceptance meaning.

Acceptance: selected theme and action text remain complete in every supported language at 320px and with enlarged text. Do not reduce text size to compensate.

### P1-03: Preserve address endings in compact views

Evidence: [narrow asset details](../test/visual/snapshots/narrow/tari-details-light.png), [mobile asset details](../test/visual/snapshots/mobile/tari-details-light.png), [narrow Tari settings](../test/visual/snapshots/narrow/tari-settings-light.png), [narrow deposit](../test/visual/snapshots/narrow/tari-deposit.png).

Asset-details addresses are middle-shortened, but further layout clipping obscures the ending at narrower widths. Settings show a prefix with trailing ellipsis. Deposit can also clip the already-shortened value.

Suggestion: select a shorter prefix/suffix pair at narrow widths, or render the two segments around a flexible middle ellipsis. Keep Copy fixed-width. Use the same presentation convention across settings, deposit and details.

Acceptance: both beginning and ending remain visible on one line at 320px. Copy still receives the full original address; QR, wallet identity and storage are unchanged.

### P1-04: Avoid implying a zero portfolio when fiat valuation is unknown

Evidence: [EVM wallet](../test/visual/snapshots/mobile/evm-wallet-light.png), [Tari wallet](../test/visual/snapshots/mobile/tari-wallet-light.png), [uninitialized preferences](../test/visual/snapshots/mobile/preferences.png).

The EVM fixture shows 2 ETH and other balances while the hero says $0.00 and rows say price unavailable. Tari uses a large n/a. These fixture states expose inconsistent unavailable-value presentation, not a demonstrated production fetching failure.

Suggestion: distinguish a known zero valuation from an unavailable or partial valuation. Use one consistent unavailable presentation with a small explanation. During refresh, retain the previous known balance and show freshness separately. Do not replace an unknown value with an invented total.

Acceptance: cover known zero, unavailable prices, partial prices, initial sync and refresh with cached balances. A missing price must not imply that an asset is worth zero.

## P2: Clarity and compactness

### P2-01: Give primary actions a consistent visual treatment

Evidence: [onboarding](../test/visual/snapshots/mobile/onboarding.png), [export](../test/visual/snapshots/mobile/tari-export-strength.png), [uploaded verification](../test/visual/snapshots/mobile/tari-verify-uploaded.png), [asset details](../test/visual/snapshots/mobile/tari-details-light.png).

Continue, Download encrypted backup, Verify backup and Export encrypted backup look like plain text inside large empty button areas in light mode. Their hierarchy differs from the blue transaction-review continuation button.

Suggestion: use the existing accent-filled primary button style consistently. Keep secondary actions neutral, destructive actions separate and disabled controls visibly distinct. Preserve E-ink borders rather than relying on color.

Acceptance: every sheet has an identifiable primary action in light, dark and E-ink themes without hover.

### P2-02: Compact transaction summaries without hiding security details

Evidence: [Russian swap warning](../test/visual/snapshots/mobile/transaction-warning-ru.png), [Chinese swap warning](../test/visual/snapshots/mobile/transaction-warning-zh.png), [approval review](../test/visual/snapshots/mobile/unlimited-approval-review.png).

Full contract addresses wrap into multiple lines. Generic amount/value information competes with the actual swap input/output summary. Several explanations consume most of the available height before acknowledgements.

Suggestion: use compact action-specific rows for spend, expected receive, permission and network. Middle-shorten ordinary destination displays and retain full values in Advanced details. For address-poisoning comparisons, keep the full-address comparison directly accessible rather than hiding the distinction.

Acceptance: the user can identify the action, assets, spender/recipient and risk before expanding technical details. Unknown methods and unlimited permissions remain explicit; no simulated result is invented.

### P2-03: Make Tari network and metadata labels explicit

Evidence: [asset details](../test/visual/snapshots/mobile/tari-details-light.png), [deposit](../test/visual/snapshots/mobile/tari-deposit.png), [uploaded verification](../test/visual/snapshots/mobile/tari-verify-uploaded.png).

Network values and subtitles say Tari rather than Tari Mainnet. The symbol row labels itself XTM and then displays XTM again. Price does not name its currency.

Suggestion: use Tari Mainnet in network values and receive warnings, Symbol as the label with XTM as the value, and Price (USD) when the value is USD. Keep the shorter Tari label in the general network picker.

Acceptance: all changes use i18n and continue fitting the compact rows, including long translations.

### P2-04: Reduce repetitive backup-state explanations

Evidence: [Tari settings](../test/visual/snapshots/mobile/tari-settings-light.png), [Russian settings](../test/visual/snapshots/narrow/tari-settings-ru.png), [Tari wallet](../test/visual/snapshots/mobile/tari-wallet-light.png).

Settings repeat backup status in a row, a local-storage notice, a removal prerequisite and a separate recovery-verification section. At 320px, Remove becomes a full-width tile and the Russian Verify action is partly below the visible sheet area.

Suggestion: retain the important local-storage notice and separate Exported/Verified meanings, but group recovery status and verification into one compact row. Put the removal prerequisite next to its disabled action rather than between unrelated controls. Reconsider the two-column fallback before letting Remove occupy a whole row.

Acceptance: Export, Import and Verify are discoverable at 320px. Removal remains disabled until export and still requires explicit destructive confirmation. Exported must not be relabeled Verified.

### P2-05: Improve file selection and compact metadata typography

Evidence: [empty import](../test/visual/snapshots/mobile/tari-import.png), [uploaded verification](../test/visual/snapshots/narrow/tari-verify-uploaded.png), [wrong password](../test/visual/snapshots/narrow/tari-verify-wrong-password.png), [verified result](../test/visual/snapshots/narrow/tari-verified.png).

The compact metadata is an improvement over the earlier vertical layout. At 320px, the creation date wraps awkwardly at PM. Native file controls truncate the filename and look different from the rest of the app. The success address is visible, but comparatively small.

Suggestion: format the creation date in a compact localized form, with the full timestamp available separately if needed. Keep the native file input accessible but style its file-selector button, and show the selected filename in a separate wrapping label. Give the verified address sufficient width and slightly stronger typography without restoring a tall result screen.

Acceptance: filename, address and date remain readable at 320px; wrong-password errors retain the selected file. The success notice remains brief and does not imply safe storage was verified.

### P2-06: Improve receive-screen scanning affordance

Evidence: [EVM deposit](../test/visual/snapshots/narrow/evm-deposit.png), [Tari deposit](../test/visual/snapshots/narrow/tari-deposit.png).

QRs are visible with a white background and quiet zone. At narrow widths they move below the explanatory text and remain small. The EVM supported-network strip has tiny labels and cuts off its final network.

Suggestion: make the QR the primary receive element, with a larger centered presentation where space permits. Wrap the EVM network strip or make its horizontal scrolling discoverable. Use clearer network labels without implying that Tari deposits use an EVM address.

Acceptance: physically scan both QRs from another phone in all themes. Verify the encoded full address, quiet zone and Copy value. Every supported EVM network is reachable at 320px.

### P2-07: Clarify password strength as an estimate

Evidence: [password strength](../test/visual/snapshots/mobile/tari-export-strength.png).

The ring, level and badges are compact and readable. A 100% score beside “should be safe to use” can imply certainty that a heuristic cannot provide.

Suggestion: describe a strong result as an estimate and recommend a long, unique password. Explicitly keep the character badges advisory rather than mandatory complexity rules. Do not add a second explanatory paragraph.

Acceptance: translated messaging does not promise safety, scoring remains local, and the existing minimum length/password matching behavior is unchanged.

### P2-08: Explain invalid withdrawal drafts inline

Evidence: [EVM withdrawal](../test/visual/snapshots/mobile/evm-withdraw.png), [narrow withdrawal](../test/visual/snapshots/narrow/evm-withdraw.png).

The captured draft shows 10.0 with an available balance of 2 ETH, an empty destination and a disabled Send button. There is no immediately visible explanation of the amount mismatch.

Suggestion: add concise field-level feedback once the user has edited the amount or attempted to proceed. Keep available balance and fee implications near Amount. Avoid presenting an oversized amount as a default if the value comes from initialization rather than user input; confirm that separately.

Acceptance: empty recipient, insufficient balance and fee-related insufficiency have distinct actionable messages. Test valid native and ERC-20 drafts as well as this disabled state.

## P3: Polish

### P3-01: Reduce settings noise and inconsistent framing

Evidence: [EVM settings](../test/visual/snapshots/mobile/evm-settings.png), [uninitialized preferences](../test/visual/snapshots/mobile/preferences.png).

The Tari settings row has a heavier rectangular border in E-ink than its neighbors. Account source, linked wallets and multiple Telegram fields lengthen the settings page. Version has no visible value in the fixture. Preferences also shows a strong storage warning before a Tari wallet exists.

Suggestion: harmonize row boundaries while preserving E-ink contrast. Consider grouping account metadata under an expandable Account section, and hide genuinely unavailable optional values. Confirm when the pre-initialization storage warning should appear rather than weakening a genuine persistence warning.

Acceptance: critical settings remain visible without opening Account; Sign Out stays reachable. Missing fixture data is not used as a reason to remove production information.

### P3-02: Use onboarding space and reorder instructions better

Evidence: [desktop onboarding](../test/visual/snapshots/desktop/onboarding.png), [narrow onboarding](../test/visual/snapshots/narrow/onboarding.png).

The one-screen hierarchy and canonical Tari-third order are clear. Desktop has a large blank gap before Continue. At narrow widths, drag handles are small and keyboard instructions add another line.

Suggestion: reduce excessive desktop separation without shrinking mobile touch targets. Keep a compact instruction beside Networks and consider an explicit move-up/move-down affordance available on focus or in a small menu.

Acceptance: touch, mouse and keyboard reordering remain usable; at least one network stays enabled. Do not turn this into a wizard or make 2FA required.

## Snapshot coverage ledger

Every filename below was reviewed in **all three** viewport directories. Grouped filenames are separate snapshots, not omitted variants.

| Views | Assessment |
| --- | --- |
| `evm-wallet-light.png`, `evm-wallet-dark.png`, `evm-wallet-eink.png` | Consistent layout across themes; unknown fiat total, long zero-balance list and icon-only toolbar at narrow width deserve follow-up. |
| `evm-deposit.png` | QR visible; narrow network-strip clipping and QR hierarchy need attention. |
| `evm-withdraw.png` | Title wraps at 320px; invalid-draft feedback should be clearer. |
| `evm-settings.png` | Narrow theme label clipping; account metadata and row framing need polish. |
| `onboarding.png` | Clear single-screen structure; desktop spacing and reorder affordance can improve. |
| `preferences.png` | Narrow Auto clipping and pre-initialization warning need review. |
| `tari-wallet-light.png`, `tari-wallet-dark.png`, `tari-wallet-eink.png` | Backup warning and theme differentiation are clear; unavailable valuation should be more informative. |
| `tari-deposit.png` | QR visible; address ending clips and Mainnet wording can be clearer. |
| `tari-details-light.png`, `tari-details-dark.png`, `tari-details-eink.png` | Compact hierarchy works; address suffix, network/symbol labels and primary action hierarchy need attention. |
| `tari-export-strength.png` | Strength layout works; primary button styling and confidence wording can improve. |
| `tari-import.png` | Simple empty state; file-picker styling can improve. Uploaded import is not covered. |
| `tari-settings-light.png`, `tari-settings-dark.png`, `tari-settings-eink.png` | Clear action icons; repeated recovery messages and narrow Remove layout increase height. |
| `tari-settings-ru.png`, `tari-settings-zh.png` | Chinese layout is compact; Russian increases height and partly hides Verify at narrow width. |
| `tari-verify.png` | Clear empty state; native file picker and disabled primary treatment can improve. |
| `tari-verify-uploaded.png` | Compact metadata and visible address; narrow timestamp/filename layout can improve. |
| `tari-verify-wrong-password.png` | Error is visible without exposing crypto details; metadata and file-selection issues remain. |
| `tari-verified.png` | Compact result and visible address; stronger address typography would help. |
| `transaction-warning-ru.png`, `transaction-warning-zh.png` | Long summaries push warnings below the visible area; Russian action text clips. |
| `unlimited-approval-review.png` | Permission warning is explicit; acknowledgement discoverability is the highest-priority layout concern. |

## Additional validation to add

- Scrolled risk-sheet screenshots showing the complete acknowledgement and footer together, including Russian at 320px.
- Settings after export and after verification, password-change and removal-confirmation states. Current settings baselines mostly show an unexported wallet.
- Tari send/review/unlock, history, sync failure/retry and cached balance during refresh.
- Uploaded import, different-wallet replacement and cancellation.
- Light/dark EVM deposit, withdraw and settings, plus valid withdrawal and fee-error states.
- Theme/language selectors expanded; network preferences expanded and reordered.
- Deterministic available-price and nonzero-Tari-balance fixtures in addition to unavailable-price fixtures.
- All supported locales, enlarged text, keyboard navigation and a real mobile keyboard. Russian/Chinese coverage alone does not establish translation resilience.
- Physical QR scanning and contrast measurement. These cannot be certified from screenshots alone.

## Suggested implementation order

1. Risk-sheet scrolling/acknowledgement visibility and localized action clipping.
2. Address suffix visibility and truthful unavailable valuation.
3. Primary-action styling, explicit Mainnet metadata and compact recovery settings.
4. File/date presentation, QR sizing and withdrawal feedback.
5. Settings/onboarding polish, then the missing regression views above.

Keep changes presentation-focused. Preserve full-address copying, backup validation, local-only secret handling, exact approvals, risk acknowledgement gates and destructive confirmations.

## Implementation status (4 October 2026)

Implemented: non-shrinking risk content, a localized scroll cue and wrapping localized action labels; compact transaction recipient display with full addresses retained in advanced/comparison views; middle-shortened Tari settings/deposit addresses; primary setup/backup buttons; explicit Mainnet, Symbol and USD metadata; compact recovery verification controls; localized, qualified password-strength guidance; shorter backup dates with full timestamp available; improved file-picker styling; larger centered Tari QR; wrapping deposit network strip; wider theme selector; compact responsive settings actions; consistent E-ink settings borders; reduced onboarding button gap; no persistence warning before wallet initialization.

EVM portfolio valuation now reports unavailable when a nonzero holding lacks a price, rather than presenting a misleading zero or incomplete total. Individual balances remain visible.

Regression coverage includes address presentation/title, primary export treatment, unavailable EVM valuation, and scrolled Russian/Chinese risk acknowledgements. Screenshot baselines and artifacts remain ignored by Git.

The remaining implementable items are now covered:

- Portfolio hints distinguish unknown, unavailable and partially priced holdings. Refresh retains the previous loaded values and labels their freshness. Tests cover known zero and deterministic prices.
- Edited withdrawal fields show separate amount, recipient and native-fee feedback. Available balance stays beside Amount; invalid drafts are disabled. Tests cover valid native/ERC-20 drafts and fee-service errors without signing or broadcasting.
- Selected backup filenames wrap separately from the native picker and remain visible after a wrong password. Backup dates follow the selected application language.
- Account metadata is grouped in an expandable Account section. Critical preferences and Sign Out remain outside it; unavailable build information is explicitly labeled rather than blank.
- Recovery settings, password changes with real re-export, removal confirmation, funded balances, send/review/unlock, history, failed sync/retry, cached refresh, uploaded imports and different-wallet cancellation have browser coverage.
- EVM receive/withdraw/settings are captured in all themes. Network preferences are expanded, reordered by pointer and keyboard, disabled and checked after reload.
- Every supported language is checked with 125% text sizing, keyboard acknowledgement, Escape and focus trapping. Action tiles wrap when enlarged text requires it, and selected theme labels are measured for sufficient width.
- Text contrast in Tari details is measured against WCAG AA's 4.5:1 threshold in light, dark and E-ink themes. QR white backgrounds, full-address copying and generated Tari QR data are checked automatically.
- Viewports cover 320px, 390px, 430px and desktop. Screenshots, encrypted fixture downloads, traces and contrast measurements remain Git-ignored.

Remaining manual validation: physical QR scans from another device, real Telegram/iOS keyboards and screen-reader behavior, and display-specific E-ink readability. The headless environment lacks Bengali/Hindi fonts, so those locale tests exercise controls and overflow but cannot certify native glyph rendering; check them on devices with the appropriate fonts. Automated contrast checks cover selected text surfaces, not a complete accessibility audit. Withdrawal starts with an empty amount in production; the original 10.0 screenshot showed a placeholder, not an initialized amount.

Validation commands:

- `npm test`: 125 passed.
- `npm run build` and `npm run verify`: passed, including the signed manifest and Tari WASM artifact.
- `node scripts/check-tari-browser.mjs`: passed, including local signing without broadcast and CSP checks.
- `npm run test:visual:update`: regenerated the Git-ignored baselines for all four viewport projects.
- `npm run test:visual:compare`: 31 passed and four opt-in live-login tests skipped; the remaining narrow Russian case differed only because page-scroll normalization changed its baseline. After updating that baseline, its focused comparison passed twice. All 32 visual cases have passing comparisons; the final full command was not rerun after this baseline-only correction.
- `git diff --check`: passed. The repository does not define a lint command.

Screenshot comparisons normalize only generated public Tari addresses and QR data. Capture uses a consistent close-button focus and page scroll position; interaction tests check keyboard behavior separately. Backup tests still use the actual downloaded encrypted file and exact password. Live email-login tests remain opt-in.

QR regression follow-up: the enlarged QR had retained a shorter container height, clipping the SVG. The shared receive layout now uses a square 164px container and lets the SVG fit its padded content area. Deposit captures assert square geometry, minimum rendered size and complete containment inside the padding. Focused coverage includes both EVM and Tari in all themes at 320px, 390px, 430px and desktop; QR payload generation is unchanged.
