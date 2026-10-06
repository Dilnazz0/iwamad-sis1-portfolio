# Portfolio — SIS 1

This is my portfolio site for the first SIS assignment.I built it
with plain HTML,CSS and JavaScript.It has three sections
(About Me, Projects, Contact),a dark mode switch and a contact
form that checks the fields before "sending" anything.

Live version: https://dilnazz0.github.io/iwamad-sis1-portfolio/

## What I decided and why

**Layout.** For the projects I used CSS Grid,so the cards change
from one column on a phone to three on a desktop.I wanted the
layout to actually change between screens,not just make the same
blocks wider.

**Colours.** My main colours are white,black and grey,with violet
(#7c3aed) as the accent.I've liked violet since Week 2,so I used
it again here.In dark mode I use a dark blue background and switch
the text to grey and white so it's still easy to read.I also added
green for success messages and red for errors in the form.

**Theme toggle.** Instead of changing many classes one by one,I
switch one attribute on the `<html>` tag and the CSS variables do
the rest.That way one click changes the whole page - header,
cards, form and footer.

**Photo in the header.** At first the header looked empty with
just my name and the menu.I added my photo next to the name,so
it feels better and less blank.

## What changed after testing on a phone

On a phone the header was too tight and the page felt cramped on
the sides. I fixed that so the text is easier to read.I also
moved the theme switch button,because it was sitting below the
text and didn't look right.

## Files
- `index.html` — the page itself
- `style.css` — all the styles
- `script.js` — theme toggle and form validation
- `profile.png` — my photo
