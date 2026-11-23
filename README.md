# Vanishing Threads

**Latest mockups:** [Figma Mockup – Yani Landing Page](https://www.figma.com/design/KR0OYnEHbRUQ1xuHfMJZdL/Yani_LandingPage?node-id=12-2&t=T86vecYaf8VmsiIl-1)

**Live site:** https://yanitan1.github.io/f26-nyu-project-tan-yani/

## Project Log

### Week 11 - Nov 23, 2026

This week's audit focused on evaluating whether the website meets the main user story
and identifying usability issues through peer user testing.

The audit helped identify areas for improvement in usability, navigation, and
responsive design. The user test provided insights into how users interact with
the website without guidance.

---

### USER STORY AUDIT

MAIN STORY: As a user interested in Chinese intangible cultural heritage,
I want to browse, search, and explore different heritage crafts,
so that I can learn about their cultural significance and history.

Criterion 1: Users can browse heritage items displayed as cards on the website.
  Status (✅ / 🟡 / ❌): ✅
  Notes: Heritage cards are displayed correctly

Criterion 2: Users can click "Learn More" to explore additional information about a heritage item.
  Status (✅ / 🟡 / ❌): ✅
  Notes: Learn More interaction works

Criterion 3: Users can search for specific intangible cultural heritage crafts
  Status (✅ / 🟡 / ❌): ✅
  Notes: Search works, give results

---

### USER TEST NOTES

Maker: Yani
Tester: Tianyiren

Who the user is (one sentence): A user who is interested in Chinese culture and wants to explore traditional crafts and learn about intangible cultural heritage.

Task 1 (full main story): Find a traditional Chinese craft that interests you and learn more about its cultural background.
  Completed? Yes
  What they said they expected: Learn more and show less button is working. It would be great if there were more explanation.

Task 2: Find a specific intangible cultural heritage craft that you would like to learn about.
  Completed? Yes
  What they said they expected: Can see the search button and search what she wants. 

Task 3 (optional): Explore the website and find another heritage item that you find interesting.
  Completed? Yes
  What they said they expected: There are different heritage item can see in the website.

Tester's one-line takeaway:
"I think the website has a good foundation, and making the navigation a little clearer would make the experience even better."

---

### PUNCH LIST

MUST SHIP
- Ensure the search function works reliably and provides clear feedback when users search for heritage items.
- Add more visual information or short descriptions to heritage cards to make browsing more engaging.

NICE TO HAVE
- Linking the heritage to a specific product. 

CUT
- Add more heritage categories and items — prioritize improving the existing experience within the remaining time.

### Week 10 — November 17, 2026

**Event Plan**
User story: As a visitor, I want to search for traditional Chinese crafts by keyword so that I can quickly find heritage traditions that interest me.
What changed:

**User story:** As a visitor, I want to search for traditional Chinese crafts by keyword so that I can quickly find heritage traditions that interest me.

**The event:** An `input` event on the heritage search box. It fits the user's needs because visitors can type or delete keywords and see matching heritage cards update immediately.

**State:** `searchText` remembers the keyword entered by the visitor. It starts as an empty string (`""`), which means all heritage cards are displayed.

**My function:** `matchesSearch(item)` answers the question: Does this heritage item's title or description contain the search keyword? It takes one heritage item as its parameter and returns `true` if it matches or `false` if it does not.

**What changed:** 
I added a search input to the Featured Heritage section. I created a searchText state variable and an input event listener that updates the state whenever the visitor types or deletes text. I also added a matchesSearch(item) function and updated render() to display only matching heritage cards. When no cards match, the page displays a message telling visitors to try another keyword.

**What I learned about events and state:**
The input event allows the page to respond immediately to user input. The searchText variable remembers the current keyword, and render() uses that state to update the displayed cards. This helped me understand how events, state, functions, and rendering work together.

**What was hard, and what I tried:**
The most challenging part was connecting the search function to the existing render() function without breaking the heritage card interactions. I also had to adjust the placement of the no-results condition so that it runs after the loop finishes.

**What happened when I tried to break it:**
I tested the search using bamboo and confirmed that the Bamboo Filament Inlay card appeared. I also searched for LACQUER in uppercase and confirmed that both lacquer-related cards appeared. When I entered xyz123, the cards disappeared and the no-results message appeared. I also tested clearing the search input to restore all six cards.

**What I learned or changed my mind about:**
I learned that an input event can update the page without requiring a separate search button. I also learned why the search state needs to be updated before calling render().

**Question for Joey:**
How can I preserve keyboard focus and improve accessibility when a search causes the page to rebuild its cards?

**Next week's goal:**
My next goal is to improve the visual design and usability of the heritage search feature and continue making the website more accessible.

**AI use:**
I used ChatGPT to help explain JavaScript events, state, loops, and conditional rendering, and to troubleshoot the search functionality. 

### Week 9 — November 13, 2026

**Render Plan**

**User story:** As a visitor, I want to expand and collapse heritage card descriptions so that I can explore traditional Chinese crafts and learn about them at my own pace.
  
**State:** The page remembers the title of the currently open heritage card. It starts at `null`, meaning no card is open.
  
**What changes it:** When a visitor clicks Learn More, the selected card title becomes the state. When the visitor clicks Show Less, the state returns to `null`.
  
**What render() draws:** The Featured Heritage section is rebuilt from the Assignment 6 heritage data array.
  
**The if inside the loop:** For each heritage item, the condition checks whether its title matches `openCardTitle`. If it matches, its description is displayed; otherwise, the description remains hidden.
  
**What else render() works out:** The status message is updated based on `openCardTitle`. It displays a default message when no card is open, or the title of the currently selected heritage tradition.
  
**What changed:** I added a `render()` function to rebuild the Featured Heritage section using the `heritageItems` array. The function clears the previous cards, loops through the data, and uses an `if` condition to check which heritage card is currently open.
I also added a status message that updates based on `openCardTitle`. When no card is open, it displays "Choose a tradition to explore." When a card is open, it displays the title of that tradition.
The click handler now updates the state and calls `render()` to refresh the page.

**Patching vs. rendering:** Patching means changing individual elements directly on the page. Rendering means rebuilding the page based on the current state. In this project, I used `render()` to rebuild the Featured Heritage cards and update the status message whenever the state changes. This makes the interface more consistent because the page always reflects the current state.

**What was hard, and what I tried:** The hardest part was moving the original card-building code into the `render()` function while keeping the click interaction working correctly. At first, I had to make sure the click handler only changed `openCardTitle` and called `render()`, instead of directly changing the page. I tested the interaction by opening and closing cards and switching between different cards to make sure the state and page stayed synchronized.

**What happened when I tried to break it:** When I opened a second heritage card, the first card automatically closed. I also clicked the same card multiple times to test the open and close behavior. The interaction worked as expected.

**What I learned or changed my mind about:** I learned that rendering is a more organized way to manage interactive interfaces. Instead of manually changing individual elements, I can update the state and let the `render()` function rebuild the page. I also learned how important it is to keep the interface synchronized with the current state.

**Question for Joey:** How can I make my `render()` function more efficient as my project grows and includes more interactive features? Is rebuilding the entire section every time a user clicks a button a good approach for a larger project?

**Next week's goal:** My goal for next week is to continue improving the interactive features of my cultural heritage website. I want to make the user experience more engaging and accessible while keeping my JavaScript code organized and easy to maintain.

**AI use:** I used ChatGPT as a learning and debugging tool while working on this assignment. It helped me understand how JavaScript functions, loops, conditional statements, and the `render()` function work together.

### Week 8 — November 4, 2026

**State Plan**

- **User story:** As a visitor, I want to click Learn More on a heritage card so that I can discover more information about each traditional craft.
- **What does the page remember?** The title of the heritage card that is currently open.
- **What does it start at?** `null`, meaning no card is open.
- **What changes it?** The user clicks a Learn More or Show Less button.
- **What does the user see?** The selected card's description appears, while other card descriptions remain hidden.
- **What does the if/else decide?** If the clicked card is already open, close it. Otherwise, close any other open card and show the selected card's description.

**What changed:**
Added a Learn More interaction to the Featured Heritage cards. Visitors can expand and hide craft descriptions.

**What was hard, and what I tried:**
The challenging part was managing the state of each card. I used a let variable and an if/else statement to track which card was open.

**What happened when I tried to break it:**
I clicked the same card multiple times and switched between different cards. The open card closed when I opened another card, and the interaction always returned to a sensible state without Console errors. I also tested the buttons using the keyboard.

**What I learned or changed my mind about:**
I learned that JavaScript state can control what users see on a webpage. A small interaction can make the website more useful.

**Question for Joey:**
How can I improve the accessibility of interactive buttons and expanded content?

**Next week's goal:**
Improve the website's accessibility and add more interactive features.

**AI use:**
Used ChatGPT to help me understand JavaScript state and if/else logic.

## **Instructions**

### **Step-by-Step: Getting Set Up**

**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

- A code editor (VS Code)
- A terminal (command line)
- Git (version control)
- Node.js, Python, or whatever runtime the project needs
- Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.
2. You click the green **Code** button and select **Open with Codespaces**.
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.
4. You code, save, and commit just like you would on your local machine.
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

- **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.
- **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.
- **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

- **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.
- **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.
- **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.
- **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

## Project: Vanishing Threads

**Vanishing Threads** is a website that introduces China's intangible cultural heritage and celebrates the traditional craftsmanship behind it.

### Project Features

- **Featured Heritage:** Presents traditional Chinese lacquer art, eggshell lacquer art, and bamboo filament inlay.
- **Explore by Region:** Introduces China's cultural heritage through a regional exploration section.
- **Craftsmanship and Products:** Connects traditional techniques with contemporary design and products.

### Technologies

- HTML
- CSS
- JavaScript

### JavaScript Implementation

The Featured Heritage cards are generated dynamically from an array of heritage objects using `forEach()`, `document.createElement()`, `textContent`, and `appendChild()`.

### Project Preview

https://github.com/YaniTan1/f26-nyu-project-tan-yani

### Weekly Update

Implemented dynamic Featured Heritage cards using JavaScript and integrated them into the existing website layout.

## Structure Audit — October 26, 2026

**Fixed today:**
- Added CSS custom properties in `:root` for colors and font-family.
- Updated the body styles to use CSS variables.
- Updated the site header background color to use a CSS variable.

**Still missing (building before the layout assignment):**
- [ ] Verify all navigation links point to existing section IDs.
- [ ] Compare all page sections against the mockup.

**One thing I couldn't figure out:**
- Whether all CSS styles and JavaScript functionality work correctly in the browser.

---

# Weekly Project Update

## 1. Assignment 4 Mockup

[Figma Mockup – Yani Landing Page](https://www.figma.com/design/KR0OYnEHbRUQ1xuHfMJZdL/Yani_LandingPage?node-id=12-2&t=T86vecYaf8VmsiIl-1)

## 2. Challenges

One of the main challenges I encountered was dynamically displaying multiple cultural heritage items using JavaScript arrays. I also faced some issues with image file paths and JavaScript syntax when adding new heritage cards. I resolved these issues by checking the array structure, correcting the image paths, and testing the website in the browser.

## 3. Plans for Next Week

Next week, I plan to improve the website layout using CSS Grid and Flexbox. I will focus on organizing the hero section, featured heritage cards, and navigation. I also plan to add responsive design using media queries to make the website work well on both desktop and mobile screens.

## Project Mockup

[Figma Mockup – Yani Landing Page](https://www.figma.com/design/KR0OYnEHbRUQ1xuHfMJZdL/Yani_LandingPage?node-id=12-2&t=T86vecYaf8VmsiIl-1)
