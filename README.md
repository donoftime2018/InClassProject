📦 Put a Price on It!
Item Catalog Web Application (MERN Stack)

📌 Overview
Put a Price on It! is a MERN-based full-stack web application that allows users to post items for sale, browse catalogs, like/unlike items, search items, and manage user accounts. 
This project is based on a pre-existing application that has been in development for several years and the current implementation extends that foundation using formal Software Engineering practices such as Class Models, Use Case Diagrams, Sequence Diagrams and UI Prototypes.

🚀 Features
👤 User Management
* Register an account
* Login / Logout
* Reset password
* View user profile
* Deactivate account

📦 Item Management
* Add new items
* Delete posted items
* View item details
* Like & Unlike items

🔍 Item Search
* Search by item name
* Search by poster

🏛️ System Design
📘 Class Model

The application revolves around two main classes:
* User
* username
* password
* email
* dateOfBirth
* likedItems
* postedItems
* Item
* itemName
* price
* site
* description
* numberOfLikes
* userLiked
* userPosted

🔄 Sequence Flow
A typical system flow:
Login → Add Item → Delete Item → Logout
This includes validation, item creation, item deletion, and session handling.

🧩 Use Case Summary
Key use cases include:
* Add/Delete item
* Like/Unlike item
* Search items
* Register/Login
* Reset Password
* View Profile
* Deactivate Account

🎨 UI Prototypes
Screens include:
* Add Item
* View Item
* Search Items
* Login / Signup
* Forgot Password
* User Profile Dashboard

🛠️ Technologies Used
* Component	Technology
* Frontend	React.js
* Backend	Node.js, Express.js
* Database	MongoDB
* Version Control	Git / GitHub
* Design Tools	PlantUML, Draw.io
