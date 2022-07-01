// for the navbar toggler
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", function(){
   hideSection();
   toggleNavbar();

   // then remove the scrolling whenever the nav toggler shows
   document.body.classList.toggle("hide-scrolling")
});

function hideSection(){
   document.querySelector("section.active").classList.toggle("fade-out");
   // to the section which is active and toggle the class fade-out to it. at this Point, there was no fade-out class, so i had to go to the css to to create a fade-out
}

function toggleNavbar(){
// this function to help with what happens to the navbar when it is clicked on, to bring out the content that was saved in the nav/nav-inner
document.querySelector(".header").classList.toggle("active");
// here the class active will be added to the header in the css and then styled to fit in the functionality
// then also in the CSS, style a way for the section active to dissappear when the nav inner is coming up

}

// to make the links link to each section
document.addEventListener("click", function(e){
   // firstly create a conditional statement for if the target clicked on contains the link-item and the hash is also not an empty string
   if(e.target.classList.contains("link-item") && e.target.hash !== ""){
      
      // furthermore if it contains the class navitem, then add the class active to allow for visibility of the nav-bar
   if(e.target.classList.contains("nav-item")){
      toggleNavbar();
   }
   else{
      // whatver is been clcked on that is not a hash, the section becomes active and visible
      hideSection();
      // document.body.classList.add("hide-scrolling");
   }
   // then create a timeout of 0.5 seconds for what happens afterwards
   // firstly the active and fade-out class is removed from the section and then the active is added to the hash targeted
   setTimeout(function(){
      document.querySelector("section.active").classList.remove("active","fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);

      // remove the hidescrolling tag that was put in to the nav-bar
      document.body.classList.remove("hide-scrolling");
     
   },500);
   }
})

 


// for the about tabs, the experience and education
// select the about tab which contains both the experience and education
const tabsContainer = document.querySelector(".about-tabs");
// select the about section which contains everything on this page
const aboutSection = document.querySelector(".about-section");


// select the tab container which contains both the experience and education, then add the event listener to it
//  create a condition for when any of the tabcontainers are selected using the e target
// if the targeted contains tab-item and doesnt include ActiveXObject, then go to tabcontainer and pick out the one that has active and remove the active in it, then add it back to the one that doesnt have the active class in it
tabsContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        // select the data attribute that was given to each so as to easily target and manipulate them
   const target = e.target.getAttribute("data-target"); 
//    then select the classlist that has the active on the tabContent, as this has been manipulated in the CSS. move the active from the first tab-content to the next tab-content
   aboutSection.querySelector(".tab-content.active").classList.remove("active");
   aboutSection.querySelector(target).classList.add("active")
}
});



// .........portfolio item details popup.......
// note that using the function(e) helps to target what is being selected insided the addeventlistener

// create an addeventlistener that will target the button to view each project when clicked on
document.addEventListener("click", function(e){
   // use the e function to target the class with the exact button to click and view projects
   if(e.target.classList.contains("view-project-btn")){
     togglePortfolioPopup();
   //   document.querySelector(".portfolio-popup").scrollTo(0,0);

     portfolioItemDetails(e.target.parentElement);
   //   here you are targeting the parent element of whatever is been called inside this function when it was declared. in this case, its the portfolioitem.

   }
})

// create the function togglePortfolioPopup() 
function togglePortfolioPopup(){
   // select the class PortfolioPopup where you styled how the portfolio should look like when it pops up
document.querySelector(".portfolio-popup").classList.toggle("open");
// select the body and toggle the scrolling from the popup when
document.body.classList.toggle("hide-scrolling");

// to add to the toggling effect when the close button is clicked, the following is manipulated to give a better effect
document.querySelector(".main").classList.toggle("fade-out")
}



// to make the quit button Work, you will select the close button and make use of the function togglePortfolioPopup which contains the manipulation
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

// here we hide popup when clicking outside the popupi got to notice something, that using e.target with console(click on wheere you want to target, then look at the console to check for which document it is)
//  is good to know which particular document to manipulate
document.addEventListener("click",function(e){
   if(e.target.classList.contains("pp-inner")){
      togglePortfolioPopup()
   }
})




// declare a function for the portfolioitem details and call in the portfolio item which contain each details in this function
function portfolioItemDetails(portfolioItem){

// here you begin to change the elements in the popup item to that in the portfolio item based on each click

   document.querySelector(".pp-thumbnail img").src =
   // here instead of using document, you have to make use of portfolio item which all the elements inside it has been targeted,(if you use document instead of that which targeted, then you will only get to see the image of the first portfolio item))
   portfolioItem.querySelector(".portfolio-item-thumbnail img").src

   document.querySelector(".pp-header h3").innerHTML = 
   portfolioItem.querySelector(".portfolio-item-title").innerHTML;

   document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}