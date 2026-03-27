# Aqua Preaux — QA Checklist

## Mobile (Phone Browser)
- [ ] Navbar hamburger opens and closes correctly
- [ ] All nav links scroll to the correct section and close the menu
- [ ] Booking form fields are easy to tap and fill out
- [ ] Date picker works on mobile keyboard
- [ ] Admin toolbar doesn't overlap page content
- [ ] Schedule panel opens full-width and scrolls properly
- [ ] Calendar days are tappable and readable

## Desktop
- [ ] Scroll animations trigger correctly on all sections
- [ ] Gallery photos display correctly
- [ ] Booking form submits and shows ✅ success message
- [ ] Booking appears in admin Schedule immediately after submission
- [ ] Calendar day count badges update after a new booking
- [ ] FAQ accordion opens and closes
- [ ] Contact links work (phone, email, Facebook)

## Admin Panel
- [ ] Footer "Admin" link is visible and opens login modal
- [ ] Wrong password shows error message
- [ ] Correct password (`aqua123`) unlocks toolbar
- [ ] Add Photos — upload works and persists after page refresh
- [ ] Delete photo (✕ button) removes it from gallery
- [ ] Schedule → filter (All / Pending / Confirmed / Completed) works
- [ ] Confirm → Complete → Delete flow works on a booking
- [ ] Stats bar updates when switching filters or selecting a calendar day
- [ ] Log Out hides toolbar and removes all admin UI

## General
- [ ] Site loads cleanly with no console errors
- [ ] All images load (hero, about, gallery)
- [ ] Logo displays in navbar and footer
- [ ] "Book Now" nav button scrolls to booking form
- [ ] Form resets after successful submission
