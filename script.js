// Featured Chinese cultural heritage data
const heritageItems = [
  {
    title: "Traditional Chinese Lacquer Art",
    description:
      "Discover the beauty of natural lacquer, built through layers of traditional craftsmanship.",
    imageUrl: "images/大漆daqi.png",
    imageAlt: "Traditional Chinese lacquer art"
  },
  {
    title: "Eggshell Lacquer Art",
    description:
      "Explore delicate eggshell inlay and the intricate patterns created by traditional lacquer artisans.",
    imageUrl: "images/蛋壳漆eggshell-lacquer.png",
    imageAlt: "Traditional eggshell lacquer art"
  },
  {
    title: "Bamboo Filament Inlay",
    description:
      "Discover the delicate bamboo filaments arranged into intricate decorative patterns.",
    imageUrl: "images/竹丝扣瓷bamboo-porcelain.png",
    imageAlt: "Bamboo filament craftsmanship"
  },
];

// Find the Featured Heritage container
const container = document.getElementById("heritage-grid");


if (container) {
  heritageItems.forEach((item) => {
    // Create the card and its content
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const link = document.createElement("a");

    card.classList.add("heritage-card");

    // Set text content
    title.textContent = item.title;
    description.textContent = item.description;
    link.textContent = "Learn More";
    link.href = "#about";

    // Add an image when a path is available
    if (item.imageUrl) {
      const image = document.createElement("img");
      image.src = item.imageUrl;
      image.alt = item.imageAlt;
      image.classList.add("heritage-image");
      card.appendChild(image);
    }

    // Assemble the card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    // Add the completed card to the page
    container.appendChild(card);
  });
}