
var meals = [
  {
    title: "French Onion Soup",
    img:'img/photo-1547592166-23ac45744acd.avif',
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    discription:'Rich beef broth with caramelized onions and melted cheese',
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    },
    tips:[
     'Patience is key - dont rush the onion caramelization',
     'Use good quality beef broth for best flavor',
     'Gruyère can be substituted with Swiss cheese',
     'Watch carefully when broiling to avoid burning'
    ]

  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"img/photo-1585032226651-759b368d7246.avif",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    discription:'Hearty vegetarian curry with coconut milk',
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    },
    tips:[
     'Patience is key - dont rush the onion caramelization',
     'Use good quality beef broth for best flavor',
     'Gruyère can be substituted with Swiss cheese',
     'Watch carefully when broiling to avoid burning'
    ],
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"img/photo-1565299585323-38d6b0865b47.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    discription:'Flavorful Mexican tacos with seasoned ground beef',
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    },
    tips:[
     'Use pork shoulder for best results - it stays moist',
     'Let pork rest before shredding for juicier meat',
     'Make your own BBQ sauce for better flavor',
     'Leftovers freeze well for up to 3 months'
    ]
     
    
  },
   {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"img/photo-1574071318508-1cdbab80d002.avif",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    discription:'',
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    },
    tips:[
      'Use a pizza stone for crispier crust',
      'Dont overload with toppings less is more',
      'Add basil after baking to keep it fresh',
      'Let dough rest properly for best texture'
    ]
  },
  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"img/photo-1546069901-eacef0df6022.avif",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    discription:'',
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    },
    tips:[
     'Use cold, crisp lettuce for best texture',
     'Make homemade croutons for better flavor',
     'Add grilled chicken for a complete meal',
     'Dont dress salad until ready to serve'
    ]
  },
]
  
function changemeal(){
     var i=Math.floor(Math.random()*meals.length )
     document.getElementById('meal').innerHTML=`  <div class="col-md-12 col-lg-4 position-relative p-0">
          <img class="img" src="${meals[i].img}" alt="image.png" />
            <div class="top">
              <i class="fa-solid fa-star"></i>
              <p class="m-0 fw-bolder">${meals[i].rating}</p>
              <p class="m-0 text-secondary"> ${(meals[i].reviews)} reviews</p>
            </div>
            <div class="bottom mx-auto">
              <div class="text-center">
                <i class="fa-solid fa-clock"></i>
                <p class="text-secondary m-0">Prep Time</p> 
                <p class="fw-bold m-0">${meals[i].prepTime}</p>
              </div>
              <div class="text-center">
                <i class="fa-solid fa-fire-burner"></i>
                <p class="text-secondary m-0">Cook Time</p>
                <p class="fw-bold m-0">${meals[i].cookTime}</p>
              </div>
              <div class="text-center">
                <i class="fa-solid fa-users"></i>
                <p class="text-secondary m-0">Servings</p>
                <p class="fw-bold m-0">${meals[i].servings}</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8 bg-white p-5">
            <div class="head d-flex justify-content-evenly">
              <div>
                <div class="d-flex gap-3">
                  <p class="Intermediate">${meals[i].level}</p>
                  <p class="Asian">${meals[i].cuisine}</p>
                </div>
                <div>
                  <h3 class="Pad-Thai">${meals[i].title}</h3>
                  <p class="lead text-secondary fw-medium">
                    ${meals[i].discription}
                  </p>
                </div>
              </div>
              <div class="right-head d-flex align-items-center gap-3">
                <i class="fa-solid fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
            <div>
              <div>
                <ul
                  class="nav nav-tabs d-flex justify-content-evenly right-ul"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      <i class="fa-solid fa-list-check"></i>
                      Ingredients
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-book-open"></i>
                      Instructions
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-chart-pie"></i>
                      Nutrition
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="last-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#last-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="last-tab-pane"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-lightbulb"></i>
                      Chef's Tips
                    </button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active p-3 rounded-4"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <div class="d-flex align-items-center">
                    <p class="num">1</p>
                    <p class="fs-5 text-secondary">${meals[i].ingredients[0]}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num">2</p>
                    <p class="fs-5 text-secondary">${meals[i].ingredients[1]}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num">3</p>
                    <p class="fs-5 text-secondary">${meals[i].ingredients[2]}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num">4</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[3]}
                    </p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num">5</p>
                    <p class="fs-5 text-secondary">${meals[i].ingredients[4]}</p>
                  </div>
                 
                </div>
                <div
                  class="tab-pane fade p-3 rounded-4 bg-white"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  <div class="d-flex align-items-center">
                    <p class="num p-4 rounded-4 fs-3">1</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[0]}
                    </p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num p-4 rounded-4 fs-3">2</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[1]}
                    </p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num p-4 rounded-4 fs-3">3</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[2]}
                    </p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num p-4 rounded-4 fs-3">4</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[3]}
                    </p>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="num p-4 rounded-4 fs-3">5</p>
                    <p class="fs-5 text-secondary">
                      ${meals[i].instruction[4]}
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane fade p-3 rounded-4 bg-white"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  <div class="d-flex gap-5 mb-4">
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around">
                        <div class="d-flex align-items-center">
                          <i class="fa-solid fa-fire Calories me-3"></i>
                          <p class="fs-5 d-flex align-items-center mt-3">
                            Calories
                          </p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.calories}</p>
                      </div>
                    </div>
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around">
                        <div class="d-flex align-items-center">
                          <i class="fa-solid fa-dumbbell me-3"></i>
                          <p class="fs-5 d-flex align-items-center mt-3">
                            Protein
                          </p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.protein}</p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex gap-5 mb-4">
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around">
                        <div class="d-flex align-items-center">
                          <i class="fa-solid fa-wheat-awn me-3"></i>
                          <p class="fs-5 d-flex align-items-center mt-2">
                            Carbohydrates
                          </p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.carbs}</p>
                      </div>
                    </div>
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around">
                        <div class="d-flex align-items-center gap-5">
                          <i class="fa-solid fa-droplet"></i>
                          <p class="fs-5 d-flex align-items-center mt-2">Fat</p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.fat}</p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex gap-5">
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around gap-5">
                        <div class="d-flex align-items-center gap-5">
                          <i class="fa-solid fa-seedling"></i>
                          <p class="fs-5 d-flex align-items-center mt-2">
                            Fiber
                          </p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.fiber}</p>
                      </div>
                    </div>
                    <div class="Nutrition w-50">
                      <div class="d-flex justify-content-around">
                        <div class="d-flex align-items-center">
                          <i class="fa-solid fa-cube me-4"></i>
                          <p class="fs-5 d-flex align-items-center mt-2">
                            Sodium
                          </p>
                        </div>
                        <p class="fs-4 fw-bolder mt-3">${meals[i].nutrition.sodium}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade p-3 rounded-4 bg-white"
                  id="last-tab-pane"
                  role="tabpanel"
                  aria-labelledby="last-tab"
                  tabindex="0"
                >
                  <div class="Chefs-Tips">
                    <i class="fa-solid fa-check"></i>
                    <p>${meals[i].tips[0]}</p>
                  </div>
                  <div class="Chefs-Tips">
                    <i class="fa-solid fa-check"></i>
                    <p>${meals[i].tips[1]}</p>
                  </div>
                  <div class="Chefs-Tips">
                    <i class="fa-solid fa-check"></i>
                    <p>${meals[i].tips[2]}</p>
                  </div>
                  <div class="Chefs-Tips">
                    <i class="fa-solid fa-check"></i>
                    <p>${meals[i].tips[3]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-top p-4">
              <button onclick="changemeal()" type="button" class="btn btn-secondary btn-change">
                <div>
                  <i class="fa-solid fa-rotate mt-3 ms-3 me-4"></i>
                  <p class="fs-5 mt-2">Try Another Recipe</p>
                </div>
              </button>
            </div>
            `
     
}