# TODO

## [x] Preserve the audited concept deck and original ideas
- Audit the existing project, blueprint, assets, and code before editing. Understand the original direction, identify weaknesses, and propose improvements first. Preserve useful existing work. For this session, clearly note that no source project or blueprint files were attached and use the supplied reference image as the design baseline.
- Keep the experience focused on the three concepts; add no unrelated sections.
- Keep it static. No backend, database, authentication, or unrelated sections.

**Outcome:** No website source, blueprint files, or project assets were present at the start. The supplied reference informed the thumbnail art direction, core concepts, and initial copy. The original ideas, generated thumbnails, English hooks, Nepali helpers, and expandable format notes remain in the updated page.

## [x] Create the three distinct monochrome concept thumbnails
- Create three original, cinematic 16:9 monochrome thumbnails: Mystery Mission with sealed envelopes and dramatic lighting; Guest Controls Everything with a car interior, confident guest, and surprised creator; and Memory Test with friends, answer boards, and funny reactions.
- Keep headline text as HTML overlays. Use consistent art direction but distinct compositions. Do not imitate actual video screenshots.

**Outcome:** Three original 16:9 monochrome stills remain in the channel video grid, with HTML headline overlays.

## [x] Present the three concepts with clear, truthful pitch copy and Nepali hints
- Present exactly these concepts: Mystery Mission — PICK YOUR FATE; Guest Controls Everything — YOU'RE IN CONTROL; and Horaa Gang Memory Test — WHO KNOWS WHO?
- Rewrite weak content using natural, concise, confident language. Avoid generic marketing phrases, repetition, and AI-sounding copy.
- Each concept must explain its idea, entertainment value, video progression, opening hook, and relevance to the channel.
- Preserve the original ideas and never invent achievements or guaranteed results.
- Each card needs a thumbnail, title, short hook, and expandable details.
- Keep the English concept names and thumbnail headlines, and add brief, natural Nepali helper lines under the hooks plus Nepali equivalents beside the expanded detail labels.

**Outcome:** Three cards retain the named ideas, English hooks, short Nepali summaries, and expandable bilingual concept details covering the idea, flow, entertainment, opening hook, and channel fit.

## [x] Remove the editorial clutter and reshape the cards as a creator-channel video grid
- Remove small introductory details such as “THREE ORIGINAL VIDEO FORMATS”, “CREATIVE TEAM APPLICATION”, “THE LINEUP”, the editorial overview paragraph, and the footer, along with similar concept-number/category micro-labels.
- Make the cards resemble the video list on a YouTube creator-channel page: channel identity, a Videos tab, 16:9 thumbnails, title, channel avatar/byline, and a responsive video grid.
- Keep the concept hooks and expandable notes. Do not fabricate view counts, upload dates, durations, or other channel statistics.

**Outcome:** Replaced the editorial hero and footer with a compact CR7 channel identity, active Videos tab, and familiar video-card grid. The cards use the existing original thumbnails, titles, a CR7 avatar/byline, short bilingual hooks, and native expandable notes. No channel metrics are invented.

## [x] Implement a static, responsive and accessible website
- Use the existing framework and project structure. Write clean, reusable, maintainable code.
- Add subtle hover effects, smooth transitions, and accessible controls.
- Give each video card a subtle hover response and style “Concept details” as a clear button while keeping it a native, keyboard-accessible disclosure.
- Support keyboard operation, visible focus, semantic structure, and reduced-motion preferences.
- Keep it static. No backend, database, authentication, or unrelated sections.

**Outcome:** The project remains a small semantic HTML/CSS static site. Cards lift subtly on hover/focus and their thumbnails respond; “Concept details” is a bordered pill-style button using native `<details>`/`<summary>`, with visible focus styling and reduced-motion support. Server and database capabilities are disabled. The configured static build copies `public/` into `dist/`.

## [x] Validate and polish the requested desktop and mobile experience
- Test desktop and mobile layouts, interactions, image cropping, and accessibility.
- Fix errors and polish the result.
- Never claim unperformed tests.

**Outcome:** Captured final full-page previews at 1440×1000 and 390×844; checked the channel header, CR7 avatar, card stacking, headline wrapping, image crops, and Nepali copy. Opened the first concept disclosure and confirmed its bilingual notes render. Static checks passed for three cards/disclosures, descriptive thumbnail alt text, removal of the requested labels/footer, responsive/focus/reduced-motion rules, one static route, the configured `public/` to `dist/` build, and HTTP 200 for the preview page, stylesheet, and route manifest.
