# Login-page-using-vuejs
A simple Login Page using Vue JS

@Sign Up for New Users is present
    * Datas are saved in LocalStorage 
    * After Signing Up we have to manually go to Login Page
    * Admin no need to register (default Routing is setup)
@Login Page 
    * Login credentials are fetched and checked
    * If the credentials are correct, you are ROUTED to the User Page
    * admin can login using id : admin , pw : admin
@User Page
    * Welcome {{ Your Registered Name(not loginid) }} is shown
    * There is nothing except Logout option in User page
@Admin Page
    * Admin can view all users registered
    * Every User list is fetched from LocalStorage
    * Admin can DELETE any Registered User
    
@Web Page is Responsive form sm -> lg (not xs)
@Web Page is completely based on Routing
    * ie, When signing out , Login page is ROUTED
    * if "/user" is added at last of URL, last LOGGED IN User's List will be shown
    

