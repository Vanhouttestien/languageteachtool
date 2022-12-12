# Introduction
The Teachers lounge is a platform for professionals to share teaching materials. In this way this project would like to improve access to teaching material for teachers all over the world. 
deployed site: 
- [Link deployed front-end](https://dashboard.heroku.com/)

Deployed API:
- [Link deployed API](https://drf5.herokuapp.com/)


# Table of contents
- [User Experience](#user-experience)
  * [User stories](#user-stories)
  * [Wireframes](#wireframes)
    + [Mobile wireframes](#mobile-wireframes)
    + [Desktop wireframes](#desktop-wireframes)
  * [Design](#design)
    + [Fonts](#fonts)
    + [Colors](#colors)
- [Technologies used](#technologies-used)
  * [Frameworks, libraries and packages](#frameworks--libraries-and-packages)
  * [Languages](#languages)
- [Features](#features)
- [Testing](#testing)
  * [Manual testing](#manual-testing)
  * [Validator testing](#validator-testing)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Images](#images)
  * [Code](#code)
  * [Others](#others)
# User Experience
## User stories
Navigation 
- As a user I can see the navbar on every page to navigate easily 
- As a logged in user I can navigate to pages that are only available for logged in users
- As a user I can click on my name to see my profile page 

Authentication 
- As a user I can sign up to get access to features for logged in users
- As a user I can log in to get access to features for logged in users
- As a user I can keep being logged in until I log out. 

Posts 
- As a user I can filter the posts so I see only the posts that are relevant
- As a user I see the posts list ordered on creation date, so I can see which are newest
- As a user I can use keywords to search through the posts so that I can quickly find relevant posts
- As a user I can keep scrolling through all the posts, so I don’t have to click on next page
- As a post owner I can edit my own posts so that I can update the content
- As a post owner I can delete my own posts so that I can choose to remove it 

Profile
- As a logged in user I can update my profile page, so I can change information in it
- As a logged in user I can change my password, so I can keep my page secure. 
- As a user I can view the profile that is linked to a post, so I can see more about that person
- As a user I see a posts list on the profile page, so I can see other posts from a user. 

404 page
- As a user, when I go to a page that doesn’t exist I  receive a 404 page

## Wireframes
### Mobile wireframes

1. Homepage

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670836155/homepagewf_yu88vv.jpg" alt="wireframe Homepage" width="300px">

2. Form: profile and post create form

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856652/wfmobilepostform_rmeorj.jpg" alt="wire frame create post" width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/wfmobileprofiledit_oxhbgh.jpg" alt="wireframe edit profile" width="300px">

3. Post list: 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856649/postspage_jglzxn.jpg" alt="Wireframe post listview" width="300px">

4. Profile Page:

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670836154/profilepagewf_c7t8di.jpg" alt="Wireframe profile page" width="300px">

5. Sign in and sign up forms

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/wfmobilesignin_rrdlbf.jpg" alt="Wireframe signinform" width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/wfmobilesignup_ztlh5h.jpg" alt="Wireframe signupform" width="300px">

### desktop wireframes
1. Homepage

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670836154/wfhomepage_oivw9w.jpg" alt="Wire frame homepage" width="300px">

2. Form: profile and post create form

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856652/wfdesktopprofileedit_xv6vfp.jpg" alt="Profile edit fomr" width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856648/wfdesktoppostform_aa9xed.jpg" alt="create a post" width="300px">

3. Post list: 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670836154/wfpostspage_vcxjay.jpg" alt="Wireframe post list page" width="300px">

4. Profile Page:

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856649/wfprofilepage_nerwmc.jpg" alt="profile page" width="300px">

5. Sign in and sign up forms

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/wfdesktopsignin_hnmfbe.jpg" alt="signin form" width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/wfdesktopsignup_e49fu8.jpg" alt="signup form" width="300px">

## design 
The design tries to combine a modern design with some playful features. It also tries to create a neat and accessible design.  

### fonts
The fonts used are: 
- Caveat: On profile page to add a playful feature
- Roboto Mono: for the text (accessible and elegant design)
- Lato: for headers (accessible and modern feel)

### colours

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856648/colors_cncs7e.jpg" alt="color palette" width="300px">

For colours the choice was made for a grey theme. This keeps the design elegant and simple. By applying dark and light contrasting colours the site is also accessible for users with vision impairments. 

# Technologies used
## Frameworks, libraries and packages
- Git: Git was used to commit and push to GitHub 
- [GitPod](https://gitpod.io/): Gitpod was used as a development environment 
- [GitHub](https://github.com/): Github was used to deploy the site and store it  
- [Balsamiq](https://balsamiq.com/): used to create wireframes
- [Google Fonts](fonts.google.com/): Google fonts was used for the font styles
- [React Bootstrap](): Bootstrap was used for frontend design
- [cloudinary](https://cloudinary.com/): was used to store images and static files.
- [Heroku](https://www.heroku.com/): Heroku was used for the deployment
- [React](https://reactjs.org/): Used for building the user interface  
- [Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component): To add an infinite scroll to postspage

## Languages
- JSX
- HTML
- CSS
- JavaScript

# Features
1. Navbar 
Navbar logged in: 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670857160/navbarsignin_wmeddz.jpg" alt="screenshot navbar when signed in" width="300px">

Navbar logged out: 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670857160/navbarsignout_surslg.jpg" alt="screenshot navbar when signed out" width="300px">

2. Homepage
Homepage: logged in 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/homepagesignin_bdih79.jpg" alt="screenshot homepage when signed in" width="300px">

Homepage: logged out

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856651/homepagesignout_wm1f2h.jpg" alt="screenshot homepage when signed out" width="300px">

3. SignInForm

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856650/signinform_qhwplv.jpg" alt="screenshot signin form" width="300px">

4. SignUpForm

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670870166/signupform_zdikm2.jpg" alt="Signup form" width="300px">

5. Profile Edit Form

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856649/editprofilepage_fhs1wn.jpg" alt="screenshot profile edit" width="300px">

6. Post Form

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856650/shareform_ysmf2d.jpg" alt="screenshot postform" width="300px">

7. Postlist 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856650/heroimagepostspage_hy0tpy.jpg" alt="Header postlist " width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856650/filterpostpage_vy0nug.jpg" alt="screenshot filters postlist" width="300px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856650/listpostpage_tf3d78.jpg" alt="Screen shot post list  Diagram" width="300px">

8. Profile Page

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856649/ownprofilepage_vrzjux.jpg" alt="profile page" width="300px">

9. 404 page 

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670857525/404page_emornn.jpg" alt="screenshot 404 page" width="300px">

# Testing 
## Manual testing

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856648/CRUD_functionality_qmwadb.jpg" alt="screenshot 404 page" width="600px">

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670876025/userstoriestest_pj6dfk.jpg" alt="screenshot 404 page" width="800px">

## Validator testing
JSX and JavaScript: 
- ES Lint din't show any errors if the following rules where added: 
    - "react/prop-types": 0, 
    - "react/no-unescaped-entities": 0, 
    - "react/no-children-prop": 0, 
    - "react/no-unescaped-entities": 0,  
    - "react/display-name": "off"

CSS: 
- No errors were found by the official Jigsaw validator

<img src="https://res.cloudinary.com/ds6jpxpzy/image/upload/v1670856649/W3C_s0nhfz.jpg" alt="css VALIDATOR" width="300px">

# Deployment
The website is deployed with Heroku. 
To deploy with Heroku: 
- Create a new app in heroku.
- connect to github repository
- And deploy 
- In de backend of the deployed API: 
        - Add a new config var CLIENT_ORGIN set to the url of your deployed react application.
        - Add CLIENT_ORGIN_DEV  with development link 
    - In gitpod
        - Install Axios 
            - Command: npm install axios
            - In src directory create folder API and create a axiosDefault.js in it
        - In axiosDefault.js
            - Import axios 
            - Define the baseURL (unique url of your deployed API project)
            - set content-type header to multipart/form-data 
            - set withCredentials to true           
    - Import in app.js :  import './api/axiosDefaults'

# Credits  
## Images
picture home page: 
- Image Homepage: [Image by Escola Espai from Pixabay](https://pixabay.com/photos/class-classroom-professor-pupil-377117/)
- Image postspage: [Image by Pexels from Pixabay ](https://pixabay.com/photos/concept-man-papers-person-plan-1868728/)
- Image forms: [Image by Wokandapix from Pixabay ](https://pixabay.com/photos/teach-education-school-class-1968076/)
- Image profile page: [Image by Clker-Free-Vector-Images from Pixabay ](https://pixabay.com/vectors/school-teacher-maths-307641/)

## Code
- The code is based on the moments walktrough provided by Code institute
 
## Others
- The code institute tutors: helping with debugging
-  Martina Terlevic: Code Institute Mento
- Joost Vanhoutte: React tips and debugging


