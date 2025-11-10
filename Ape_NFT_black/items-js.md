//Items page logic (Normal)--------------------------------------
      //First, you need data to populate your cards.
      const nftItems = [
        {
          id: 1,
          category: "Art",
          image: "https://i.pinimg.com/736x/c6/56/26/c6562691ccc33180b702350586e30576.jpg",
          titleP: "Bored Ape Yochii",
          titleH: "Doc ape art #7564",
          price: 87,
        },
        {
          id: 2,
          category: "Game",
          image: "https://i.pinimg.com/736x/e8/f5/00/e8f5003686fedf83f2ebab64e7638820.jpg",
          titleP: "MORD",
          titleH: "Ape swag art #9812",
          price: 90,
        },
        {
          id: 3,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/736x/9b/a7/5e/9ba75e1bd8700d0055e715ef68a0cb12.jpg",
          titleP: "Clone X",
          titleH: "Hype gang art #5530",
          price: 125.65,
        },
        {
          id: 4,
          category: "Photography",
          image: "https://i.pinimg.com/736x/78/f2/eb/78f2ebcfca898551a911570c91f9085c.jpg",
          titleP: "Zombiefan House",
          titleH: "Purple ape side #7852",
          price: 85,
        },
        {
          id: 5,
          category: "Art",
          image: "https://i.pinimg.com/736x/15/4e/a7/154ea7b42ec3c781fffe9d5ef2a38060.jpg",
          titleP: "Skull Ape Yochii",
          titleH: "Cool ape art #7481",
          price: 2.45,
        },
        {
          id: 6,
          category: "Game",
          image: "https://i.pinimg.com/736x/66/4a/79/664a799a35815c6becdf9f547459771e.jpg",
          titleP: "Crypto Dunks",
          titleH: "Ape patrol art #5184",
          price: 87,
        },
        // New Random Data
        {
          id: 7,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/1200x/61/1f/9a/611f9a591fafdd003c48900859d8abeb.jpg",
          titleP: "Cyberscrapes",
          titleH: "Black white Ape #5164",
          price: 75.0,
        },
        {
          id: 8,
          category: "Art",
          image: "https://i.pinimg.com/736x/78/94/24/789424c020044dada54e98c915f757eb.jpg",
          titleP: "Asuka",
          titleH: "Red eye art #5419",
          price: 78.0,
        },
        {
          id: 9,
          category: "Photography",
          image: "https://i.pinimg.com/1200x/9d/e1/ed/9de1ed4446dd4447a38da6be199ec03a.jpg",
          titleP: "Dystopia",
          titleH: "Neon city view #0021",
          price: 15.3,
        },
        {
          id: 10,
          category: "Game",
          image: "https://i.pinimg.com/736x/89/75/f8/8975f893f10b06f212cc79d167331661.jpg",
          titleP: "Warframe",
          titleH: "Exo-Suit schematic #3376",
          price: 45.99,
        },
        {
          id: 11,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/736x/1a/27/7a/1a277af629ad234dbeba639adba49357.jpg",
          titleP: "Metaverse Inc.",
          titleH: "Genesis land plot #0101",
          price: 250.0,
        },
        {
          id: 12,
          category: "Art",
          image: "https://i.pinimg.com/736x/91/0d/71/910d71b7cd0faba67737c9fe0b2ffae7.jpg",
          titleP: "Generative",
          titleH: "Abstract portrait #9987",
          price: 5.8,
        },
        {
          id: 13,
          category: "Photography",
          image: "https://i.pinimg.com/736x/3e/b9/bd/3eb9bd2e19691a6451b1d45346a2a543.jpg",
          titleP: "Horizon",
          titleH: "Milky way photo #1234",
          price: 10.5,
        },
        {
          id: 14,
          category: "Game",
          image: "https://i.pinimg.com/1200x/b7/35/51/b735514c5e68e204ba8fcffbad382c16.jpg",
          titleP: "RPG Loot",
          titleH: "Legendary sword NFT #2090",
          price: 180.2,
        },
        {
          id: 15,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/1200x/d3/0b/31/d30b31b4e2fe402037ba8f3aab9fd41b.jpg",
          titleP: "Skylands",
          titleH: "Floating home #7007",
          price: 99.0,
        },
        {
          id: 16,
          category: "Art",
          image: "https://i.pinimg.com/736x/02/de/57/02de57d06ca8647e393dfb19f3dba8c5.jpg",
          titleP: "VectorPop",
          titleH: "Retro wave style #4545",
          price: 33.33,
        },
      ];

      //---------------------------------------------------------------------------------------------------------------------------
      // Creating dynamic cards function

      function createCard(item) {
        // Outer card container
        const card = document.createElement("div");
        card.className = "item-card";
        // Image container and content
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";
        imgContainer.innerHTML = `<img src="${item.image}" alt="${item.titleH}">`;
        // Details container
        const details = document.createElement("div");
        details.className = "card-details";
        // Structure for title and price
        details.innerHTML = `
        <p class="title-p">${item.titleP}</p>
        <h3 class="title-h">${item.titleH}</h3>
        <div class="price-container">
            <span>Price</span>
            <span class="price-eth">${item.price} ETH</span>
        </div>
        <div class="likes-container">
            <span class="likes-icon">♥</span> 
            <span class="likes-count">${
              Math.floor(Math.random() * 50) + 1
            }</span> 
        </div>
    `;
        // Append image and details to the card
        card.appendChild(imgContainer);
        card.appendChild(details);
        return card;
      }

      //---------------------------------------------------------------------------------------------------------------------------
      //This function will take the array of items, clear the existing grid, and append the new cards.

      const itemCardsContainer = document.getElementById("item-cards");

      function renderGrid(itemsToDisplay) {
        // 1. Clear the previous content
        itemCardsContainer.innerHTML = "";
        // 2. Set up the grid structure (This should ideally be handled by CSS)
        itemCardsContainer.style.display = "grid";
        itemCardsContainer.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 columns
        itemCardsContainer.style.gap = "18px";
        // 3. Create and append cards
        itemsToDisplay.forEach((item) => {
          const cardElement = createCard(item);
          itemCardsContainer.appendChild(cardElement);
        });
      }

      //---------------------------------------------------------------------------------------------------------------------------
      //All categories
      const buttonsContainer = document.getElementById("item-buttons");
      const buttons = buttonsContainer.querySelectorAll("button");

      function handleCategoryClick(event) {
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        event.target.classList.add("active");

        const category = event.target.id;
        let filteredItems;

        if (category === "all") {
          // Show all items
          filteredItems = nftItems;
        } else {
          // Filter items based on the button's ID (e.g., 'art', 'game')
          // We use a mapping or simply match the ID to the category property
          const categoryMap = {
            art: "Art",
            game: "Game",
            vw: "Virtual Worlds",
            photo: "Photography",
          };
          const categoryName = categoryMap[category];

          filteredItems = nftItems.filter(
            (item) => item.category === categoryName
          );
        }

        renderGrid(filteredItems);
      }

      // Attach the event listener to all buttons
      buttons.forEach((button) => {
        button.addEventListener("click", handleCategoryClick);
      });

      // Initial load: Render the 'All categories' content
      document.addEventListener("DOMContentLoaded", () => {
        // Set 'All categories' as active initially
        document.getElementById("all").classList.add("active");
        renderGrid(nftItems);
      });







     *** RESPONSIVE ***



     
     //Items page logic --------------------------------------
      //First, you need data to populate your cards.
      const nftItems = [
        {
          id: 1,
          category: "Art",
          image: "https://i.pinimg.com/736x/c6/56/26/c6562691ccc33180b702350586e30576.jpg",
          titleP: "Bored Ape Yochii",
          titleH: "Doc ape art #7564",
          price: 87,
        },
        {
          id: 2,
          category: "Game",
          image: "https://i.pinimg.com/736x/e8/f5/00/e8f5003686fedf83f2ebab64e7638820.jpg",
          titleP: "MORD",
          titleH: "Ape swag art #9812",
          price: 90,
        },
        {
          id: 3,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/736x/9b/a7/5e/9ba75e1bd8700d0055e715ef68a0cb12.jpg",
          titleP: "Clone X",
          titleH: "Hype gang art #5530",
          price: 125.65,
        },
        {
          id: 4,
          category: "Photography",
          image: "https://i.pinimg.com/736x/78/f2/eb/78f2ebcfca898551a911570c91f9085c.jpg",
          titleP: "Zombiefan House",
          titleH: "Purple ape side #7852",
          price: 85,
        },
        {
          id: 5,
          category: "Art",
          image: "https://i.pinimg.com/736x/15/4e/a7/154ea7b42ec3c781fffe9d5ef2a38060.jpg",
          titleP: "Skull Ape Yochii",
          titleH: "Cool ape art #7481",
          price: 2.45,
        },
        {
          id: 6,
          category: "Game",
          image: "https://i.pinimg.com/736x/66/4a/79/664a799a35815c6becdf9f547459771e.jpg",
          titleP: "Crypto Dunks",
          titleH: "Ape patrol art #5184",
          price: 87,
        },
        // New Random Data
        {
          id: 7,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/1200x/61/1f/9a/611f9a591fafdd003c48900859d8abeb.jpg",
          titleP: "Cyberscrapes",
          titleH: "Black white Ape #5164",
          price: 75.0,
        },
        {
          id: 8,
          category: "Art",
          image: "https://i.pinimg.com/736x/78/94/24/789424c020044dada54e98c915f757eb.jpg",
          titleP: "Asuka",
          titleH: "Red eye art #5419",
          price: 78.0,
        },
        {
          id: 9,
          category: "Photography",
          image: "https://i.pinimg.com/1200x/9d/e1/ed/9de1ed4446dd4447a38da6be199ec03a.jpg",
          titleP: "Dystopia",
          titleH: "Neon city view #0021",
          price: 15.3,
        },
        {
          id: 10,
          category: "Game",
          image: "https://i.pinimg.com/736x/89/75/f8/8975f893f10b06f212cc79d167331661.jpg",
          titleP: "Warframe",
          titleH: "Exo-Suit schematic #3376",
          price: 45.99,
        },
        {
          id: 11,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/736x/1a/27/7a/1a277af629ad234dbeba639adba49357.jpg",
          titleP: "Metaverse Inc.",
          titleH: "Genesis land plot #0101",
          price: 250.0,
        },
        {
          id: 12,
          category: "Art",
          image: "https://i.pinimg.com/736x/91/0d/71/910d71b7cd0faba67737c9fe0b2ffae7.jpg",
          titleP: "Generative",
          titleH: "Abstract portrait #9987",
          price: 5.8,
        },
        {
          id: 13,
          category: "Photography",
          image: "https://i.pinimg.com/736x/3e/b9/bd/3eb9bd2e19691a6451b1d45346a2a543.jpg",
          titleP: "Horizon",
          titleH: "Milky way photo #1234",
          price: 10.5,
        },
        {
          id: 14,
          category: "Game",
          image: "https://i.pinimg.com/1200x/b7/35/51/b735514c5e68e204ba8fcffbad382c16.jpg",
          titleP: "RPG Loot",
          titleH: "Legendary sword NFT #2090",
          price: 180.2,
        },
        {
          id: 15,
          category: "Virtual Worlds",
          image: "https://i.pinimg.com/1200x/d3/0b/31/d30b31b4e2fe402037ba8f3aab9fd41b.jpg",
          titleP: "Skylands",
          titleH: "Floating home #7007",
          price: 99.0,
        },
        {
          id: 16,
          category: "Art",
          image: "https://i.pinimg.com/736x/02/de/57/02de57d06ca8647e393dfb19f3dba8c5.jpg",
          titleP: "VectorPop",
          titleH: "Retro wave style #4545",
          price: 33.33,
        },
      ];

      //---------------------------------------------------------------------------------------------------------------------------
      // Creating dynamic cards function

      function createCard(item) {
        // Outer card container
        const card = document.createElement("div");
        card.className = "item-card";
        // Image container and content
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";
        imgContainer.innerHTML = `<img src="${item.image}" alt="${item.titleH}">`;
        // Details container
        const details = document.createElement("div");
        details.className = "card-details";
        // Structure for title and price
        details.innerHTML = `
        <p class="title-p">${item.titleP}</p>
        <h3 class="title-h">${item.titleH}</h3>
        <div class="price-container">
            <span>Price</span>
            <span class="price-eth">${item.price} ETH</span>
        </div>
        <div class="likes-container">
            <span class="likes-icon">♥</span> 
            <span class="likes-count">${
              Math.floor(Math.random() * 50) + 1
            }</span> 
        </div>
    `;
        // Append image and details to the card
        card.appendChild(imgContainer);
        card.appendChild(details);
        return card;
      }

      //---------------------------------------------------------------------------------------------------------------------------
      //This function will take the array of items, clear the existing grid, and append the new cards.

      const itemCardsContainer = document.getElementById("item-cards");
      const MAX_INITIAL_CARDS = 8; // Responsiveness: To achieve 2 rows of 4 columns on desktop (4*2=8)
      // Global state to track if all cards are currently shown
      let allCardsVisible = false;
      // Create the 'Load More' button element (or use an existing one in HTML)
      const loadMoreButton = document.createElement('button');
      loadMoreButton.id = 'load-more-btn';
      loadMoreButton.textContent = 'Load More';
      loadMoreButton.classList.add('load-more-style'); // Add a class for styling
      
      function renderGrid(itemsToDisplay) {
        // 1. Clear the previous content
        itemCardsContainer.innerHTML = "";

        // Determine the number of cards to display
        const itemsToRender = allCardsVisible 
        ? itemsToDisplay 
        : itemsToDisplay.slice(0, MAX_INITIAL_CARDS); // Show only the first 8

        // 2. Render the cards
    itemsToRender.forEach(item => {
        const cardElement = createCard(item);
        itemCardsContainer.appendChild(cardElement);
    });
    // 3. Append the Load More / Show Less button if necessary
    if (itemsToDisplay.length > MAX_INITIAL_CARDS) {
        // Update button text based on state
        loadMoreButton.textContent = allCardsVisible ? 'Show Less' : 'Load More';
        
        // Append the button to a wrapper/parent container, NOT item-cards itself
        // Assuming your 'Items' div is the parent:
        const itemsParent = document.querySelector('.Items');
        if (!document.getElementById('load-more-btn')) {
             itemsParent.appendChild(loadMoreButton);
        }
    } else {
        // Remove button if total items are less than or equal to initial max
        const existingBtn = document.getElementById('load-more-btn');
        if (existingBtn) existingBtn.remove();
    }
      }

      loadMoreButton.addEventListener('click', () => {
    // Toggle the state
    allCardsVisible = !allCardsVisible;
    
    // Re-render the grid based on the new state, using the currently filtered data
    // (You will need to know which items are currently filtered. Let's adapt the main handler)
    
    // For simplicity, let's call the initial handler which will handle the re-render:
    // This assumes you store the last filtered category ID (e.g., 'all', 'art') in a global variable.
    
    // If you don't want to refactor the filtering, you can force a full render:
    renderGrid(nftItems); // This will show all if allCardsVisible is true
});

      //---------------------------------------------------------------------------------------------------------------------------
      //All categories
      const buttonsContainer = document.getElementById("item-buttons");
      const buttons = buttonsContainer.querySelectorAll("button");

      function handleCategoryClick(event) {
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        event.target.classList.add("active");

        const category = event.target.id;
        let filteredItems;

        if (category === "all") {
          // Show all items
          filteredItems = nftItems;
        } else {
          // Filter items based on the button's ID (e.g., 'art', 'game')
          // We use a mapping or simply match the ID to the category property
          const categoryMap = {
            art: "Art",
            game: "Game",
            vw: "Virtual Worlds",
            photo: "Photography",
          };
          const categoryName = categoryMap[category];

          filteredItems = nftItems.filter(
            (item) => item.category === categoryName
          );
        }

        renderGrid(filteredItems);
      }

      // Attach the event listener to all buttons
      buttons.forEach((button) => {
        button.addEventListener("click", handleCategoryClick);
      });

      // Initial load: Render the 'All categories' content
      document.addEventListener("DOMContentLoaded", () => {
        // Set 'All categories' as active initially
        document.getElementById("all").classList.add("active");
        renderGrid(nftItems);
      });
    </script> 