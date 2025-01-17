# Bug [#2]Logged-In Users (Admin and Normal) Are Logged Out Upon Page Refresh

## Description

When a user, whether they are logged in as an admin or a normal user, refreshes any page within the Pet Shop application, they are unexpectedly logged out. This behavior is not consistent with typical user expectations, as users would anticipate remaining logged in even after refreshing a page. The issue is consistently reproducible when the user has not checked the "Remember me" checkbox during login.

## Steps to Reproduce

1. Log in as a normal user or an admin in the Pet Shop application without checking the "Remember me" checkbox.
2. Navigate to any page within the application after successful login.
3. Refresh the current page using the browser's refresh button or the keyboard shortcut (e.g., F5).

## Expected Behavior

After a user logs in, they should remain logged in even after refreshing any page within the application, regardless of whether they checked the "Remember me" checkbox. The user's session should persist until they explicitly log out.

## Actual Behavior

Upon refreshing any page, logged-in users (both admin and normal users) who did not check the "Remember me" checkbox are logged out and redirected to the login page. This forces users to repeatedly log in after each page refresh, leading to a frustrating experience.

## Impact

This bug significantly impairs the user experience, as users who have not checked the "Remember me" checkbox are required to log in repeatedly after every page refresh, which is both time-consuming and frustrating.

## Severity

High - The unexpected logouts disrupt normal user workflows and negatively impact user engagement.
