
      // Form validation code will come here.
      function validation() {      //this is function which call coming from form
      
         if( document.check.firstname.value == "" ) {   //check is reference id coming from firstname is field
                                                        //value if its value come null then condition is true 
            alert( "Please provide your First Name!" ); // alert is a function used to dispaly error on screen
            document.check.firstname.focus() ;          // focus is a function in javascript set element as active element
            return false;                               //terminate if condtion
         }
         if( document.check.lastname.value == "" ) {//check is reference id coming from firstname is field
		                                             //value if its value come null then condition is true 
            alert( "Please provide your Last Name!" );// alert is a function used to dispaly error on screen
            document.check.lastname.focus() ;         // focus is a function in javascript set element as active element
            return false;                         //terminate if condtion
         }
		 if( document.check.message.value == "" ) {//check is reference id coming from firstname is field
			                                        //value if its value come null then condition is true 
            alert( "Please provide your Message!" );// alert is a function used to dispaly error on screen
            document.check.message.focus() ;// focus is a function in javascript set element as active element
            return false;                    //terminate if condtion
         }
        
         return( true );
      }
