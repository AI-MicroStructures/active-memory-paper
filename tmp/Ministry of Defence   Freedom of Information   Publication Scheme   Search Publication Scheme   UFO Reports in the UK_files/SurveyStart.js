
function runSurvey(url,surveyID,OfferingID)
{
		if(	CheckCookie())
		{
			OpenSurvey(url,surveyID,OfferingID);
			
		}
}



     function CheckCookie()
     {
        var CookieDetails = document.cookie; // look for cookie to be present.
        var duration = new Date();  // to store the duration of the cookie depending on the survey duration
        var now = new Date();   // store todays date to compare against the duration date.
                  
        // Find position of "MODSurvey" title in Cookie string. 
        var Posn = CookieDetails.indexOf(unescape("MODSurvey"));
        
        if (Posn == -1) // Cookie not found, write a new one and open Interstitial page (surveyintro.aspx)
        {
          
            var value = ("MODSurvey");
            duration.setTime(duration.getTime() + 1000 * 60 * 60 * 24 * 14); //Set for 14 days duration
            //window.alert("name=" + value + "; expires=" + duration); 
              
            document.cookie = "name=" + escape(value) + "; path=/; expires=" + duration ;
            return true;
            
        } 
        else  // Cookie present
        {
            return false;
        }
        
     }
     
     function OpenSurvey(url,surveyID,OfferingID)
     
     {
		//window.alert("?SurveyID="+surveyID+"&OfferingID="+OfferingID);
        window.open(url+"?SurveyID="+surveyID+"&OfferingID="+OfferingID,"MODSurvey","height=500,width=800,location=no,menubar=no,resizable=yes,toolbar=no,status=no,scrollbars=yes");
     }