// Toggle active-menu for hamburger navbar 

      document.addEventListener('DOMContentLoaded', () => {
      const hamburger = document.querySelector('.hamburger-menu');
      const navMenu = document.querySelector('.nav-menu');

      // Add click listener to the hamburger button
      hamburger.addEventListener('click', () => {
          // Toggle the 'active' class on the menu
          navMenu.classList.toggle('active-menu');
          
          // Optional: Add 'active' class to the hamburger for X animation
          hamburger.classList.toggle('active-menu');
      });
  });

// ------------------------------------------------------------------------------------------------------------------------  
      function updateCenterCard() {
        const cardList = document.getElementById("cardList");
        const cards = cardList.querySelectorAll(".card");
        // Get the center point of the scroll container
        const centerPoint = cardList.scrollLeft + cardList.offsetWidth / 2;

        cards.forEach((card) => {
          const cardLeft = card.offsetLeft;
          const cardRight = card.offsetLeft + card.offsetWidth;

          // Check if the card's center is within a certain range of the container's center
          // (This logic can be adjusted based on desired snap-point accuracy)
          if (cardLeft < centerPoint && cardRight > centerPoint) {
            // This card is currently near the center
            card.classList.add("is-active");
          } else {
            // Not the center card
            card.classList.remove("is-active");
          }
        });
      }

      // 1. Run on page load
      updateCenterCard();

      // 2. Run whenever the user scrolls
      const cardList = document.getElementById("cardList");
      cardList.addEventListener("scroll", updateCenterCard);
      function scrollCarousel(direction) {
        const cardList = document.getElementById("cardList");
        const cardWidth = cardList.querySelector(".card").offsetWidth;
        const scrollAmount = cardWidth + 30; // Card width + gap (30px from CSS)

        // Scroll by the amount of one card plus the gap
        cardList.scrollBy({
          left: direction * scrollAmount,
          behavior: "smooth", // For a smooth scrolling effect
        });
      }

      //Items page logic --------------------------------------
      //First, you need data to populate your cards.
      const nftItems = [
        {
          id: 1,
          category: "Art",
          image:
            "https://i.pinimg.com/736x/c6/56/26/c6562691ccc33180b702350586e30576.jpg",
          titleP: "Bored Ape Yochii",
          titleH: "Doc ape art #7564",
          price: 87,
        },
        {
          id: 2,
          category: "Game",
          image:
            "https://i.pinimg.com/736x/e8/f5/00/e8f5003686fedf83f2ebab64e7638820.jpg",
          titleP: "MORD",
          titleH: "Ape swag art #9812",
          price: 90,
        },
        {
          id: 3,
          category: "Virtual Worlds",
          image:
            "https://i.pinimg.com/736x/9b/a7/5e/9ba75e1bd8700d0055e715ef68a0cb12.jpg",
          titleP: "Clone X",
          titleH: "Hype gang art #5530",
          price: 125.65,
        },
        {
          id: 4,
          category: "Photography",
          image:
            "https://i.pinimg.com/736x/78/f2/eb/78f2ebcfca898551a911570c91f9085c.jpg",
          titleP: "Zombiefan House",
          titleH: "Purple ape side #7852",
          price: 85,
        },
        {
          id: 5,
          category: "Art",
          image:
            "https://i.pinimg.com/736x/15/4e/a7/154ea7b42ec3c781fffe9d5ef2a38060.jpg",
          titleP: "Skull Ape Yochii",
          titleH: "Cool ape art #7481",
          price: 2.45,
        },
        {
          id: 6,
          category: "Game",
          image:
            "https://i.pinimg.com/736x/66/4a/79/664a799a35815c6becdf9f547459771e.jpg",
          titleP: "Crypto Dunks",
          titleH: "Ape patrol art #5184",
          price: 87,
        },
        // New Random Data
        {
          id: 7,
          category: "Virtual Worlds",
          image:
            "https://i.pinimg.com/1200x/61/1f/9a/611f9a591fafdd003c48900859d8abeb.jpg",
          titleP: "Cyberscrapes",
          titleH: "Black white Ape #5164",
          price: 75.0,
        },
        {
          id: 8,
          category: "Art",
          image:
            "https://i.pinimg.com/736x/78/94/24/789424c020044dada54e98c915f757eb.jpg",
          titleP: "Asuka",
          titleH: "Red eye art #5419",
          price: 78.0,
        },
        {
          id: 9,
          category: "Photography",
          image:
            "https://i.pinimg.com/1200x/9d/e1/ed/9de1ed4446dd4447a38da6be199ec03a.jpg",
          titleP: "Dystopia",
          titleH: "Neon city view #0021",
          price: 15.3,
        },
        {
          id: 10,
          category: "Game",
          image:
            "https://i.pinimg.com/736x/89/75/f8/8975f893f10b06f212cc79d167331661.jpg",
          titleP: "Warframe",
          titleH: "Exo-Suit schematic #3376",
          price: 45.99,
        },
        {
          id: 11,
          category: "Virtual Worlds",
          image:
            "https://i.pinimg.com/736x/1a/27/7a/1a277af629ad234dbeba639adba49357.jpg",
          titleP: "Metaverse Inc.",
          titleH: "Genesis land plot #0101",
          price: 250.0,
        },
        {
          id: 12,
          category: "Art",
          image:
            "https://i.pinimg.com/736x/91/0d/71/910d71b7cd0faba67737c9fe0b2ffae7.jpg",
          titleP: "Generative",
          titleH: "Abstract portrait #9987",
          price: 5.8,
        },
        {
          id: 13,
          category: "Photography",
          image:
            "https://i.pinimg.com/736x/3e/b9/bd/3eb9bd2e19691a6451b1d45346a2a543.jpg",
          titleP: "Horizon",
          titleH: "Milky way photo #1234",
          price: 10.5,
        },
        {
          id: 14,
          category: "Game",
          image:
            "https://i.pinimg.com/1200x/b7/35/51/b735514c5e68e204ba8fcffbad382c16.jpg",
          titleP: "RPG Loot",
          titleH: "Legendary sword NFT #2090",
          price: 180.2,
        },
        {
          id: 15,
          category: "Virtual Worlds",
          image:
            "https://i.pinimg.com/1200x/d3/0b/31/d30b31b4e2fe402037ba8f3aab9fd41b.jpg",
          titleP: "Skylands",
          titleH: "Floating home #7007",
          price: 99.0,
        },
        {
          id: 16,
          category: "Art",
          image:
            "https://i.pinimg.com/736x/02/de/57/02de57d06ca8647e393dfb19f3dba8c5.jpg",
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
      const loadMoreButton = document.createElement("button");
      loadMoreButton.id = "load-more-btn";
      loadMoreButton.textContent = "Load More";
      loadMoreButton.classList.add("load-more-style"); // Add a class for styling

      function renderGrid(itemsToDisplay) {
        // 1. Clear the previous content
        itemCardsContainer.innerHTML = "";

        // Determine the number of cards to display
        const itemsToRender = allCardsVisible
          ? itemsToDisplay
          : itemsToDisplay.slice(0, MAX_INITIAL_CARDS); // Show only the first 8

        // 2. Render the cards
        itemsToRender.forEach((item) => {
          const cardElement = createCard(item);
          itemCardsContainer.appendChild(cardElement);
        });
        // 3. Append the Load More / Show Less button if necessary
        if (itemsToDisplay.length > MAX_INITIAL_CARDS) {
          // Update button text based on state
          loadMoreButton.textContent = allCardsVisible
            ? "Show Less"
            : "Load More";

          // Append the button to a wrapper/parent container, NOT item-cards itself
          // Assuming your 'Items' div is the parent:
          const itemsParent = document.querySelector(".Items");
          if (!document.getElementById("load-more-btn")) {
            itemsParent.appendChild(loadMoreButton);
          }
        } else {
          // Remove button if total items are less than or equal to initial max
          const existingBtn = document.getElementById("load-more-btn");
          if (existingBtn) existingBtn.remove();
        }
      }

      loadMoreButton.addEventListener("click", () => {
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

      //------------------------------------------
      //Weekly

      const weeklyItems = [
        {
          id: 1,
          title: "Bored Ape Yacht Club",
          image:
            "https://i.pinimg.com/736x/94/71/48/947148ded0ba1d696a27df53022a4042.jpg",
          floorp: 97.09,
          bidp: "36,294.95",
          hike: "+134762",
        },
        {
          id: 2,
          title: "Azuki",
          image:
            "https://i.pinimg.com/736x/11/44/dc/1144dca493f3612a826d499de0f239e8.jpg",
          floorp: 1.25,
          bidp: "1,540.80",
          hike: "+25.68",
        },
        {
          id: 3,
          title: "Doodles",
          image:
            "https://i.pinimg.com/736x/87/d4/a0/87d4a08c178cb8b4d42f93c3785a0c63.jpg",
          floorp: 5.8,
          bidp: "9,001.23",
          hike: "-1.50",
        },
        {
          id: 4,
          title: "Cool Cats",
          image:
            "https://i.pinimg.com/736x/4b/32/b6/4b32b64642679881b272d3805d6b8d1a.jpg",
          floorp: 0.15,
          bidp: "450.77",
          hike: "+45.92",
        },
        {
          id: 5,
          title: "Pudgy Penguins",
          image:
            "https://i.pinimg.com/736x/aa/ef/5b/aaef5b58fc717dc9d58aba9769f09dad.jpg",
          floorp: 12.44,
          bidp: "18,200.00",
          hike: "+10.05",
        },
        {
          id: 6,
          title: "Clone X",
          image:
            "https://i.pinimg.com/1200x/10/70/c4/1070c464fb5bd7cf071635bd2fd8b0d5.jpg",
          floorp: 8.99,
          bidp: "12,105.11",
          hike: "-5.00",
        },
        // New Random Data
        {
          id: 7,
          title: "The Sandbox",
          image:
            "https://i.pinimg.com/736x/6c/96/5c/6c965c3af62dc2b83f397db50386e1a2.jpg",
          floorp: 35.5,
          bidp: "50,000.00",
          hike: "+200.00",
        },
        {
          id: 8,
          title: "CryptoPunks",
          image:
            "https://i.pinimg.com/736x/78/94/24/789424c020044dada54e98c915f757eb.jpg",
          floorp: 2.01,
          bidp: "3,120.55",
          hike: "+7.88",
        },
        {
          id: 9,
          title: "Moonbirds",
          image:
            "https://i.pinimg.com/1200x/9d/e1/ed/9de1ed4446dd4447a38da6be199ec03a.jpg",
          floorp: 0.05,
          bidp: "98.15",
          hike: "+90.10",
        },
        {
          id: 10,
          title: "Decentraland",
          image:
            "https://i.pinimg.com/736x/89/75/f8/8975f893f10b06f212cc79d167331661.jpg",
          floorp: 6.75,
          bidp: "11,850.33",
          hike: "-0.95",
        },
        {
          id: 11,
          title: "World of Women",
          image:
            "https://i.pinimg.com/736x/1a/27/7a/1a277af629ad234dbeba639adba49357.jpg",
          floorp: 55.0,
          bidp: "75,000.00",
          hike: "+10.00",
        },
        {
          id: 12,
          title: "VeeFriends",
          image:
            "https://i.pinimg.com/736x/91/0d/71/910d71b7cd0faba67737c9fe0b2ffae7.jpg",
          floorp: 0.88,
          bidp: "750.00",
          hike: "+2.12",
        },
      ];

      // Creating dynamic cards function

      function createWeekly(item) {
        // Outer card container
        const card = document.createElement("div");
        card.className = "weekly-card";
        // Image container and content
        const imgWeekly = document.createElement("div");
        imgWeekly.className = "weekly-container";
        imgWeekly.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
        // Details container
        const details = document.createElement("div");
        details.className = "weekly-details";
        // Structure for title and price
        details.innerHTML = `
        <h3 class="weekly-h">${item.id}. ${item.title}</h3>
        <div class="floor-p-container">
            <span>Floor Price</span>
            <span class="price-floor">${item.floorp} ETH</span>
        </div>
        <div class="bid-container">
            <span>Bid: $</span>
            <span class="price-bid">${item.bidp}</span>
        </div>
        <h3 class="price-hike">${item.hike}</h3>
    `;
        // Append image and details to the card
        card.appendChild(imgWeekly);
        card.appendChild(details);
        return card;
      }

      //---------------------------------------------------------------------------------------------------------------------------
      //This function will take the array of items, clear the existing grid, and append the new cards.

      const weeklyCardsContainer = document.getElementById("week-cards");

      function renderWeeklyGrid(itemsToDisplay) {
        //weeklyCardsContainer.style.display = "grid";
       // weeklyCardsContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; // 4 columns
       // weeklyCardsContainer.style.gap = "18px";
        // 3. Create and append cards
        itemsToDisplay.forEach((item) => {
          const cardElement = createWeekly(item);
          weeklyCardsContainer.appendChild(cardElement);
        });
      }

      renderWeeklyGrid(weeklyItems);

      //---------------------------------------------------------------------------------------------------------------------------

      // Expanding Caraousel
      const reset = () => {
        let cards = Array.from(document.querySelectorAll(".card-caraousel"));
        for (const card of cards) {
          // Reset card styles to their original CSS values
          card.style.width = "";

          const txtDiv = card.querySelector(".txt-caraousel");
          if (txtDiv) {
            // Reset text div styles to their original CSS values
            txtDiv.style.display = "";
            txtDiv.style.opacity = "";
            txtDiv.style.marginTop = "";
          }
        }
        main.style.backgroundColor = "";
      };
      //one function to tackle all card clicks, catering to common expansion related properties & we simply use an array to change bg-color into custom bg-rest all properties are same, so we can create a single function to cater to that.
      const showCard = (event) => {
        reset(); // reset all cards then expand current card so that it looks like only a specific card expands and rest go back to original config.
        const target = event.currentTarget;
        target.style.width = "400px";
        let txtDiv = target.querySelector(".txt-caraousel");
        if (txtDiv) {
          txtDiv.style.display = "flex";
          txtDiv.style.flexDirection = "column";
          txtDiv.style.color="white";
          txtDiv.style.textAlign = "left";
          txtDiv.style.justifyContent = "flex-end";
          txtDiv.style.marginTop = "auto";
          txtDiv.style.width = "70%";
          txtDiv.style.padding = "20px";
        }
        const cardId = target.id;
        if (cardBackgrounds[cardId]) {
          main.style.backgroundColor = cardBackgrounds[cardId];
        }
      };
      const cardBackgrounds = {
        c1sc: "#760003",
        c2sc: "#f95d30",
        c3sc: "#d78281",
        c4sc: "#ecc738",
      };
      const allCards = document.querySelectorAll(".card-caraousel");
      const main = document.querySelector(".Sell");
      //applying event listener to all cards
      allCards.forEach((card) => {
        card.addEventListener("click", showCard);
      });