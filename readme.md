# Web Notification API Tester

This application aims to test the **Web Notification API**, a feature that allows web applications to send notifications to the user's device even when the app is not in the foreground.

## Purpose

The goal of this app is to:
- **Request permission** to send notifications to the user.
- **Display notifications** if permission is granted.
- Allow the user to **enable or disable notifications** through a simple interface.

This project serves as a minimalistic implementation to experiment with the Web Notification API and observe its behavior in different scenarios.

## Features
- **Request Notification Permission**: The user can choose to allow or deny notifications.
- **Notification Display**: If permission is granted, the app will show a notification with a customizable message.
- **Interactive Button**: The user can toggle the ability to send notifications using a button to activate or deactivate it.

## How It Works
1. When the user clicks "Yes" (Enable Notifications), the app will ask for permission to send notifications.
2. If permission is granted, a notification is triggered with a sample message.
3. If the user clicks "No" (Disable Notifications), a pop-up message will inform them that notifications are not enabled.

## Technologies Used
- **HTML**: Basic structure for the user interface.
- **CSS**: Simple styling for a clean, minimalistic layout.
- **JavaScript**: Implements the logic for requesting permissions, handling notifications, and user interaction.

## How to Run
1. Clone the repository: git@github.com:hsmadhi/notifNoob.git 
2. Open `index.html` in any modern web browser to test the notifications.

## Future Improvements
- Add more detailed notifications with actions and images.
- Implement background notifications when the app is not open.
- Extend the application to handle notifications for multiple users or different scenarios.

Feel free to fork and contribute to this project!
